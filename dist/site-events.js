System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, SiteEvents;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      SiteEvents = _export("SiteEvents", (function () {
        function SiteEvents(element) {
          _classCallCheck(this, SiteEvents);

          this.element = element;
        }

        _prototypeProperties(SiteEvents, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("site-events");
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
        });

        return SiteEvents;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGUtZXZlbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFFBQVEseUNBRUgsVUFBVTs7O0FBRmYsY0FBUSxxQkFBUixRQUFROzs7Ozs7O0FBRUgsZ0JBQVU7QUFnQlIsaUJBaEJGLFVBQVUsQ0FnQlAsT0FBTztnQ0FoQlYsVUFBVTs7QUFrQmYsY0FBSSxDQUFDLE9BQU8sR0FBSyxPQUFPLENBQUE7U0FFM0I7OzZCQXBCUSxVQUFVO0FBRVosa0JBQVE7bUJBQUEsb0JBQUU7QUFFYixxQkFBTyxRQUFRLENBQ1YsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFBO2FBRXBDOzs7O0FBRU0sZ0JBQU07bUJBQUMsa0JBQUU7QUFFWixxQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2FBRW5COzs7Ozs7ZUFiUSxVQUFVIiwiZmlsZSI6InNpdGUtZXZlbnRzLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==