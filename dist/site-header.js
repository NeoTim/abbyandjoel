System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, SiteHeader;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      SiteHeader = _export("SiteHeader", (function () {
        function SiteHeader(element) {
          _classCallCheck(this, SiteHeader);

          this.element = element;
          this.heading = "Joel & Abby";
          this.element.classList.add("intro-header");
        }

        _prototypeProperties(SiteHeader, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("site-header");
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
          attached: {
            value: function attached() {
              this.title = this.element.children[0];
              var time = new TimelineLite();
              time.from(this.title, 1, { y: 200 });
            },
            writable: true,
            configurable: true
          }
        });

        return SiteHeader;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGUtaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFFBQVEseUNBRUgsVUFBVTs7O0FBRmYsY0FBUSxxQkFBUixRQUFROzs7Ozs7O0FBRUgsZ0JBQVU7QUFnQlIsaUJBaEJGLFVBQVUsQ0FnQlAsT0FBTztnQ0FoQlYsVUFBVTs7QUFrQmYsY0FBSSxDQUFDLE9BQU8sR0FBSyxPQUFPLENBQUE7QUFDeEIsY0FBSSxDQUFDLE9BQU8sR0FBSyxhQUFhLENBQUM7QUFDL0IsY0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFBO1NBQzdDOzs2QkFyQlEsVUFBVTtBQUVaLGtCQUFRO21CQUFBLG9CQUFFO0FBRWIscUJBQU8sUUFBUSxDQUNWLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQTthQUVwQzs7OztBQUVNLGdCQUFNO21CQUFDLGtCQUFFO0FBRVoscUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUVuQjs7Ozs7QUFVRCxrQkFBUTttQkFBQSxvQkFBRTtBQUNOLGtCQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ3JDLGtCQUFJLElBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO0FBQzdCLGtCQUFJLENBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLENBQUE7YUFFcEM7Ozs7OztlQTdCUSxVQUFVIiwiZmlsZSI6InNpdGUtaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==