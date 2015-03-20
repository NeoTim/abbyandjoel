System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, SiteRegistry;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      SiteRegistry = _export("SiteRegistry", (function () {
        function SiteRegistry(element) {
          _classCallCheck(this, SiteRegistry);

          this.element = element;
        }

        _prototypeProperties(SiteRegistry, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("site-registry");
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

        return SiteRegistry;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGUtcmVnaXN0cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSx5Q0FFSCxZQUFZOzs7QUFGakIsY0FBUSxxQkFBUixRQUFROzs7Ozs7O0FBRUgsa0JBQVk7QUFnQlYsaUJBaEJGLFlBQVksQ0FnQlQsT0FBTztnQ0FoQlYsWUFBWTs7QUFrQmpCLGNBQUksQ0FBQyxPQUFPLEdBQUssT0FBTyxDQUFBO1NBRTNCOzs2QkFwQlEsWUFBWTtBQUVkLGtCQUFRO21CQUFBLG9CQUFFO0FBRWIscUJBQU8sUUFBUSxDQUNWLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQTthQUV0Qzs7OztBQUVNLGdCQUFNO21CQUFDLGtCQUFFO0FBRVoscUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUVuQjs7Ozs7O2VBYlEsWUFBWSIsImZpbGUiOiJzaXRlLXJlZ2lzdHJ5LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==