System.register(["aurelia-templating", "aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, EventAggregator, _prototypeProperties, _classCallCheck, defaults, Aside;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_aureliaFramework) {
      EventAggregator = _aureliaFramework.EventAggregator;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      defaults = { size: "sm",
        fixed: true,
        bgColor: "white",
        textColor: "purple",
        brand: "brand"
      };
      Aside = _export("Aside", (function () {
        function Aside(eventAggregator) {
          _classCallCheck(this, Aside);

          this.events = eventAggregator;
          this.defaults = defaults;

          _.assign(this, this.defaults);
          return this;
        }

        _prototypeProperties(Aside, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("size", "sizeChanged").withProperty("fixed", "fixedChanged").withProperty("brand", "brandChanged").withProperty("bgColor", "bgColorChanged").withProperty("textColor", "textColorChanged");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [EventAggregator];
            },
            writable: true,
            configurable: true
          }
        }, {
          init: {
            value: function init(options) {
              _.assign(this, options);
              return this;
            },
            writable: true,
            configurable: true
          },
          sizeChanged: {
            value: function sizeChanged(value) {},
            writable: true,
            configurable: true
          },
          bgChanged: {
            value: function bgChanged(value) {},
            writable: true,
            configurable: true
          },
          textChanged: {
            value: function textChanged(value) {},
            writable: true,
            configurable: true
          },
          brandChanged: {
            value: function brandChanged(value) {},
            writable: true,
            configurable: true
          },
          fixedChanged: {
            value: function fixedChanged(value) {},
            writable: true,
            configurable: true
          }
        });

        return Aside;
      })());
    }
  };
});