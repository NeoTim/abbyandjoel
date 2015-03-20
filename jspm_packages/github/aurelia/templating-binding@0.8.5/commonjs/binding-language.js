/* */ 
"format register";
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var BindingLanguage = require("aurelia-templating").BindingLanguage;
var _aureliaBinding = require("aurelia-binding");

var Parser = _aureliaBinding.Parser;
var ObserverLocator = _aureliaBinding.ObserverLocator;
var BindingExpression = _aureliaBinding.BindingExpression;
var NameExpression = _aureliaBinding.NameExpression;
var ONE_WAY = _aureliaBinding.ONE_WAY;
var SyntaxInterpreter = require("./syntax-interpreter").SyntaxInterpreter;


var info = {};

var TemplatingBindingLanguage = exports.TemplatingBindingLanguage = (function (BindingLanguage) {
  function TemplatingBindingLanguage(parser, observerLocator, syntaxInterpreter) {
    this.parser = parser;
    this.observerLocator = observerLocator;
    this.syntaxInterpreter = syntaxInterpreter;
    this.interpolationRegex = /\${(.*?)}/g;
    syntaxInterpreter.language = this;
    this.attributeMap = syntaxInterpreter.attributeMap = {
      "class": "className",
      "for": "htmlFor",
      tabindex: "tabIndex"
    };
  }

  _inherits(TemplatingBindingLanguage, BindingLanguage);

  _prototypeProperties(TemplatingBindingLanguage, {
    inject: {
      value: function inject() {
        return [Parser, ObserverLocator, SyntaxInterpreter];
      },
      writable: true,
      configurable: true
    }
  }, {
    inspectAttribute: {
      value: function inspectAttribute(resources, attrName, attrValue) {
        var parts = attrName.split(".");

        info.defaultBindingMode = null;

        if (parts.length == 2) {
          info.attrName = parts[0].trim();
          info.attrValue = attrValue;
          info.command = parts[1].trim();
          info.expression = null;
        } else if (attrName == "ref") {
          info.attrName = attrName;
          info.attrValue = attrValue;
          info.command = null;
          info.expression = new NameExpression(attrValue, "element");
        } else {
          info.attrName = attrName;
          info.attrValue = attrValue;
          info.command = null;
          info.expression = this.parseContent(resources, attrName, attrValue);
        }

        return info;
      },
      writable: true,
      configurable: true
    },
    createAttributeInstruction: {
      value: function createAttributeInstruction(resources, element, info, existingInstruction) {
        var instruction;

        if (info.expression) {
          if (info.attrName === "ref") {
            return info.expression;
          }

          instruction = existingInstruction || { attrName: info.attrName, attributes: {} };
          instruction.attributes[info.attrName] = info.expression;
        } else if (info.command) {
          instruction = this.syntaxInterpreter.interpret(resources, element, info, existingInstruction);
        }

        return instruction;
      },
      writable: true,
      configurable: true
    },
    parseText: {
      value: function parseText(resources, value) {
        return this.parseContent(resources, "textContent", value);
      },
      writable: true,
      configurable: true
    },
    parseContent: {
      value: function parseContent(resources, attrName, attrValue) {
        var parts = attrValue.split(this.interpolationRegex),
            i,
            ii;
        if (parts.length <= 1) {
          return null;
        }

        for (i = 0, ii = parts.length; i < ii; ++i) {
          if (i % 2 === 0) {} else {
            parts[i] = this.parser.parse(parts[i]);
          }
        }

        return new InterpolationBindingExpression(this.observerLocator, this.attributeMap[attrName] || attrName, parts, ONE_WAY, resources.valueConverterLookupFunction, attrName);
      },
      writable: true,
      configurable: true
    }
  });

  return TemplatingBindingLanguage;
})(BindingLanguage);
var InterpolationBindingExpression = exports.InterpolationBindingExpression = (function () {
  function InterpolationBindingExpression(observerLocator, targetProperty, parts, mode, valueConverterLookupFunction, attribute) {
    this.observerLocator = observerLocator;
    this.targetProperty = targetProperty;
    this.parts = parts;
    this.mode = mode;
    this.valueConverterLookupFunction = valueConverterLookupFunction;
    this.attribute = attribute;
    this.discrete = false;
  }

  _prototypeProperties(InterpolationBindingExpression, null, {
    createBinding: {
      value: function createBinding(target) {
        return new InterpolationBinding(this.observerLocator, this.parts, target, this.targetProperty, this.mode, this.valueConverterLookupFunction);
      },
      writable: true,
      configurable: true
    }
  });

  return InterpolationBindingExpression;
})();
var InterpolationBinding = (function () {
  function InterpolationBinding(observerLocator, parts, target, targetProperty, mode, valueConverterLookupFunction) {
    this.observerLocator = observerLocator;
    this.parts = parts;
    this.targetProperty = observerLocator.getObserver(target, targetProperty);
    this.mode = mode;
    this.valueConverterLookupFunction = valueConverterLookupFunction;
    this.toDispose = [];
  }

  _prototypeProperties(InterpolationBinding, null, {
    getObserver: {
      value: function getObserver(obj, propertyName) {
        return this.observerLocator.getObserver(obj, propertyName);
      },
      writable: true,
      configurable: true
    },
    bind: {
      value: function bind(source) {
        this.source = source;

        if (this.mode == ONE_WAY) {
          this.unbind();
          this.connect();
          this.setValue();
        } else {
          this.setValue();
        }
      },
      writable: true,
      configurable: true
    },
    setValue: {
      value: function setValue() {
        var value = this.interpolate();
        this.targetProperty.setValue(value);
      },
      writable: true,
      configurable: true
    },
    connect: {
      value: function connect() {
        var _this = this;
        var info,
            parts = this.parts,
            source = this.source,
            toDispose = this.toDispose = [],
            i,
            ii;

        for (i = 0, ii = parts.length; i < ii; ++i) {
          if (i % 2 === 0) {} else {
            info = parts[i].connect(this, source);
            if (info.observer) {
              toDispose.push(info.observer.subscribe(function (newValue) {
                _this.setValue();
              }));
            }
          }
        }
      },
      writable: true,
      configurable: true
    },
    interpolate: {
      value: function interpolate() {
        var value = "",
            parts = this.parts,
            source = this.source,
            valueConverterLookupFunction = this.valueConverterLookupFunction,
            i,
            ii,
            temp;

        for (i = 0, ii = parts.length; i < ii; ++i) {
          if (i % 2 === 0) {
            value += parts[i];
          } else {
            temp = parts[i].evaluate(source, valueConverterLookupFunction);
            value += typeof temp !== "undefined" && temp !== null ? temp.toString() : "";
          }
        }

        return value;
      },
      writable: true,
      configurable: true
    },
    unbind: {
      value: function unbind() {
        var i,
            ii,
            toDispose = this.toDispose;

        if (toDispose) {
          for (i = 0, ii = toDispose.length; i < ii; ++i) {
            toDispose[i]();
          }
        }

        this.toDispose = null;
      },
      writable: true,
      configurable: true
    }
  });

  return InterpolationBinding;
})();

exports.__esModule = true;