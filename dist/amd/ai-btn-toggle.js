System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, AiBtnToggleAttachedBehavior;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AiBtnToggleAttachedBehavior = _export("AiBtnToggleAttachedBehavior", (function () {
        function AiBtnToggleAttachedBehavior(element) {
          _classCallCheck(this, AiBtnToggleAttachedBehavior);

          this.element = element;
        }

        _prototypeProperties(AiBtnToggleAttachedBehavior, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("value", null, "ai-btn-toggle").and(function (x) {
                return x.bindingIsTwoWay();
              }).noView();
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
              this.element.addEventListener("click", this.handler, false);
            },
            writable: true,
            configurable: true
          },
          unbind: {
            value: function unbind() {
              this.element.removeEventListener("click", this.handler);
            },
            writable: true,
            configurable: true
          },
          toggle: {
            value: function toggle() {
              this.value = !this.value;
            },
            writable: true,
            configurable: true
          },
          _toggle: {
            value: function _toggle() {
              this._value = !this._value;
              this.value(this._value);
            },
            writable: true,
            configurable: true
          }
        });

        return AiBtnToggleAttachedBehavior;
      })());
    }
  };
});