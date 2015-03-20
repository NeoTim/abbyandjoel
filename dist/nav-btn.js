System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, NavBat;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      NavBat = _export("NavBat", (function () {
        function NavBat(element) {
          _classCallCheck(this, NavBat);

          this.element = element;
          this.element.classList.add("flex", "md12", "nav-btn");
        }

        _prototypeProperties(NavBat, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("nav-btn").withProperty("icon").withProperty("next");
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
              var _this = this;
              this.activeIcon = this.icon;
              this.element.addEventListener("mouseenter", function (event) {
                _this.activeIcon = _this.next;
                _this.element.classList.add("next");
              });
              this.element.addEventListener("mouseleave", function (event) {
                _this.activeIcon = _this.icon;
                _this.element.classList.remove("next");
              });
            },
            writable: true,
            configurable: true
          }
        });

        return NavBat;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1idG4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSx5Q0FHSCxNQUFNOzs7QUFIWCxjQUFRLHNCQUFSLFFBQVE7Ozs7Ozs7QUFHSCxZQUFNO0FBYUosaUJBYkYsTUFBTSxDQWFILE9BQU87Z0NBYlYsTUFBTTs7QUFjWCxjQUFJLENBQUMsT0FBTyxHQUFNLE9BQU8sQ0FBQztBQUMxQixjQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQTtTQUN4RDs7NkJBaEJRLE1BQU07QUFFUixrQkFBUTttQkFBQSxvQkFBRTtBQUNiLHFCQUFPLFFBQVEsQ0FDVixhQUFhLENBQUMsU0FBUyxDQUFDLENBQ3hCLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FDcEIsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2FBQzVCOzs7O0FBRU0sZ0JBQU07bUJBQUEsa0JBQUU7QUFDWCxxQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2FBQ25COzs7OztBQU9ELGNBQUk7bUJBQUEsZ0JBQUU7O0FBQ0Ysa0JBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUM1QixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsVUFBQyxLQUFLLEVBQUc7QUFDakQsc0JBQUssVUFBVSxHQUFHLE1BQUssSUFBSSxDQUFDO0FBQzVCLHNCQUFLLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2VBQ3JDLENBQUMsQ0FBQTtBQUNGLGtCQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxVQUFDLEtBQUssRUFBRztBQUNqRCxzQkFBSyxVQUFVLEdBQUcsTUFBSyxJQUFJLENBQUM7QUFDNUIsc0JBQUssT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7ZUFDeEMsQ0FBQyxDQUFBO2FBQ0w7Ozs7OztlQTVCUSxNQUFNIiwiZmlsZSI6Im5hdi1idG4uanMiLCJzb3VyY2VSb290IjoiL3NyYy9wbHVnaW5zLyJ9