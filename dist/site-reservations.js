System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, SiteReservations;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      SiteReservations = _export("SiteReservations", (function () {
        function SiteReservations(element) {
          _classCallCheck(this, SiteReservations);

          this.element = element;
        }

        _prototypeProperties(SiteReservations, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("site-reservations");
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

        return SiteReservations;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGUtcmVzZXJ2YXRpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFFBQVEseUNBRUgsZ0JBQWdCOzs7QUFGckIsY0FBUSxxQkFBUixRQUFROzs7Ozs7O0FBRUgsc0JBQWdCO0FBZ0JkLGlCQWhCRixnQkFBZ0IsQ0FnQmIsT0FBTztnQ0FoQlYsZ0JBQWdCOztBQWtCckIsY0FBSSxDQUFDLE9BQU8sR0FBSyxPQUFPLENBQUE7U0FFM0I7OzZCQXBCUSxnQkFBZ0I7QUFFbEIsa0JBQVE7bUJBQUEsb0JBQUU7QUFFYixxQkFBTyxRQUFRLENBQ1YsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUE7YUFFMUM7Ozs7QUFFTSxnQkFBTTttQkFBQyxrQkFBRTtBQUVaLHFCQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7YUFFbkI7Ozs7OztlQWJRLGdCQUFnQiIsImZpbGUiOiJzaXRlLXJlc2VydmF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL3BsdWdpbnMvIn0=