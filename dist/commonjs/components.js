System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, AiComponents, Component;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AiComponents = _export("AiComponents", function AiComponents() {
        _classCallCheck(this, AiComponents);

        this.components = [new Component({ name: "btn", prefix: "ai", postfix: "demo" }), new Component({ name: "bction", prefix: "ai", postfix: "demo" }), new Component({ name: "tabs", prefix: "ai", postfix: "demo" }), new Component({ name: "modal", prefix: "ai", postfix: "demo" })];
      });
      Component = (function () {
        function Component(options) {
          _classCallCheck(this, Component);

          this.name = options.name;
          this.prefix = options.prefix;
          this.postfix = options.postfix;
          this.icon = null;
          this.color = "text-grey";
          this.display = true;
        }

        _prototypeProperties(Component, {
          classed: {
            get: function () {
              return this.name[0].toUpperCase + this.name.slice(1);
            },
            configurable: true
          },
          moduleId: {
            get: function () {
              return this.prefix + this.classed;
            },
            configurable: true
          },
          title: {
            get: function () {
              return this.prefix + "-" + this.classed;
            },
            configurable: true
          },
          className: {
            get: function () {
              return this.prefix + "-" + this.name;
            },
            configurable: true
          },
          route: {
            get: function () {
              return this.className + "-" + this.postfix;
            },
            configurable: true
          }
        });

        return Component;
      })();
    }
  };
});