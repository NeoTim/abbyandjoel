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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzaWRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFFBQVEsRUFFUixlQUFlLHlDQUVuQixRQUFRLEVBT0MsS0FBSzs7O0FBWFYsY0FBUSxzQkFBUixRQUFROztBQUVSLHFCQUFlLHFCQUFmLGVBQWU7Ozs7Ozs7QUFFbkIsY0FBUSxHQUFJLEVBQUUsSUFBSSxFQUFHLElBQUk7QUFDWCxhQUFLLEVBQUUsSUFBSTtBQUNYLGVBQU8sRUFBSSxPQUFPO0FBQ2xCLGlCQUFTLEVBQUUsUUFBUTtBQUNuQixhQUFLLEVBQU0sT0FBTztPQUNuQjtBQUVKLFdBQUs7QUFpQkgsaUJBakJGLEtBQUssQ0FpQkYsZUFBZTtnQ0FqQmxCLEtBQUs7O0FBbUJWLGNBQUksQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFBO0FBQzdCLGNBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBOztBQUV4QixXQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDN0IsaUJBQU8sSUFBSSxDQUFBO1NBQ2Q7OzZCQXhCUSxLQUFLO0FBRVAsa0JBQVE7bUJBQUEsb0JBQUU7QUFFYixxQkFBTyxRQUFRLENBQ1YsWUFBWSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FDbkMsWUFBWSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FDckMsWUFBWSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FDckMsWUFBWSxDQUFDLFNBQVMsRUFBQyxnQkFBZ0IsQ0FBQyxDQUN4QyxZQUFZLENBQUMsV0FBVyxFQUFFLGtCQUFrQixDQUFDLENBQUE7YUFFckQ7Ozs7QUFFTSxnQkFBTTttQkFBQSxrQkFBRTtBQUNYLHFCQUFPLENBQUMsZUFBZSxDQUFDLENBQUE7YUFDM0I7Ozs7O0FBV0QsY0FBSTttQkFBQSxjQUFDLE9BQU8sRUFBQztBQUNULGVBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3hCLHFCQUFPLElBQUksQ0FBQTthQUNkOzs7O0FBRUQscUJBQVc7bUJBQUEscUJBQUMsS0FBSyxFQUFFLEVBQUU7Ozs7QUFDckIsbUJBQVM7bUJBQUEsbUJBQUMsS0FBSyxFQUFFLEVBQUU7Ozs7QUFDbkIscUJBQVc7bUJBQUEscUJBQUMsS0FBSyxFQUFFLEVBQUU7Ozs7QUFDckIsc0JBQVk7bUJBQUEsc0JBQUMsS0FBSyxFQUFFLEVBQUU7Ozs7QUFDdEIsc0JBQVk7bUJBQUEsc0JBQUMsS0FBSyxFQUFFLEVBQUU7Ozs7OztlQW5DYixLQUFLIiwiZmlsZSI6ImFzaWRlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==