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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzZDQUFhLFlBQVksRUFpQm5CLFNBQVM7Ozs7Ozs7O0FBakJGLGtCQUFZLDJCQUdWLFNBSEYsWUFBWTs4QkFBWixZQUFZOztBQUtqQixZQUFJLENBQUMsVUFBVSxHQUFHLENBQ2QsSUFBSSxTQUFTLENBQUMsRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQ3hELElBQUksU0FBUyxDQUFDLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUMzRCxJQUFJLFNBQVMsQ0FBQyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFDekQsSUFBSSxTQUFTLENBQUMsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLE1BQU0sRUFBQyxDQUFDLENBQzdELENBQUE7T0FFSjtBQUtDLGVBQVM7QUF5QkEsaUJBekJULFNBQVMsQ0F5QkMsT0FBTztnQ0F6QmpCLFNBQVM7O0FBMEJQLGNBQUksQ0FBQyxJQUFJLEdBQU0sT0FBTyxDQUFDLElBQUksQ0FBQTtBQUMzQixjQUFJLENBQUMsTUFBTSxHQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUE7QUFDN0IsY0FBSSxDQUFDLE9BQU8sR0FBSSxPQUFPLENBQUMsT0FBTyxDQUFBO0FBQy9CLGNBQUksQ0FBQyxJQUFJLEdBQU0sSUFBSSxDQUFBO0FBQ25CLGNBQUksQ0FBQyxLQUFLLEdBQUssV0FBVyxDQUFBO0FBQzFCLGNBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1NBQ3RCOzs2QkFoQ0MsU0FBUztBQUtBLGlCQUFPO2lCQUFBLFlBQUU7QUFDaEIscUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDeEQ7OztBQUVVLGtCQUFRO2lCQUFBLFlBQUU7QUFDakIscUJBQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFBO2FBQ3BDOzs7QUFFVSxlQUFLO2lCQUFBLFlBQUU7QUFDZCxxQkFBTyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFBO2FBQzFDOzs7QUFFVSxtQkFBUztpQkFBQSxZQUFFO0FBQ2xCLHFCQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDeEM7OztBQUVVLGVBQUs7aUJBQUEsWUFBRTtBQUNkLHFCQUFPLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUE7YUFDN0M7Ozs7O2VBdkJDLFNBQVMiLCJmaWxlIjoiY29tcG9uZW50cy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL3BsdWdpbnMvIn0=