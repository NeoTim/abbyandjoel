System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, AiBtnRadioAttachedBehavior;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AiBtnRadioAttachedBehavior = _export("AiBtnRadioAttachedBehavior", (function () {
        function AiBtnRadioAttachedBehavior(element) {
          _classCallCheck(this, AiBtnRadioAttachedBehavior);

          this.element = element;
        }

        _prototypeProperties(AiBtnRadioAttachedBehavior, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("value", null, "ai-btn-radio").and(function (x) {
                return x.bindingIsTwoWay();
              }).syncChildren("options", "optionsChanged", "[ai-btn-radio-option]").noView();
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element];
            },
            writable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind() {
              this.optionsChanged();
            },
            writable: true,
            configurable: true
          },
          unbind: {
            value: function unbind() {
              var _this = this;
              this.handler = this.selectItem.bind(this);
              this.options.forEach(function (option) {
                option.removeEventListener("click", _this.handler);
              });
            },
            writable: true,
            configurable: true
          },
          optionsChanged: {
            value: function optionsChanged() {
              var _this = this;
              this.unbind();
              this.options.forEach(function (option) {
                option.addEventListener("click", _this.handler, false);
              });
            },
            writable: true,
            configurable: true
          },
          selectItem: {
            value: function selectItem($event) {
              this.value = $event.target.value;
            },
            writable: true,
            configurable: true
          }
        });

        return AiBtnRadioAttachedBehavior;
      })());
    }
  };
});