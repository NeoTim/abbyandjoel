System.register(["aurelia-router", "./system/toolbar", "./system/aside"], function (_export) {
  "use strict";

  var Router, Toolbar, Aside, _prototypeProperties, _classCallCheck, App;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_systemToolbar) {
      Toolbar = _systemToolbar.Toolbar;
    }, function (_systemAside) {
      Aside = _systemAside.Aside;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App(router, toolbar, aside) {
          var _this = this;
          _classCallCheck(this, App);

          this.aside = aside.init({ open: false,
            side: "left",
            size: "md" });

          this.toolbar = toolbar.init({ size: "sm",
            bgColor: "bg-white",
            textColor: "text-purple" });




          console.log(this.toolbar);


          this["interface"] = {
            direction: "row" };

          this.router = router;
          this.router.title = "Aurelia-Interface";
          this.router.configure(function (config) {
            config.title = "Aurelia Interface";
            config.map([{ route: ["", "welcome"], moduleId: "welcome", title: "ai", toolbar: _this.toolbar }]);
          });
        }

        _prototypeProperties(App, {
          inject: {
            value: function inject() {
              return [Router, Toolbar, Aside];
            },
            writable: true,
            configurable: true
          }
        }, {
          attached: {
            value: function attached() {},
            writable: true,
            configurable: true
          }
        });

        return App;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxNQUFNLEVBQ04sT0FBTyxFQUNQLEtBQUsseUNBRUEsR0FBRzs7O0FBSlIsWUFBTSxrQkFBTixNQUFNOztBQUNOLGFBQU8sa0JBQVAsT0FBTzs7QUFDUCxXQUFLLGdCQUFMLEtBQUs7Ozs7Ozs7QUFFQSxTQUFHO0FBRUgsaUJBRkEsR0FBRyxDQUVGLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSzs7Z0NBRnZCLEdBQUc7O0FBSVosY0FBSSxDQUFDLEtBQUssR0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFDLEtBQUs7QUFDVixnQkFBSSxFQUFDLE1BQU07QUFDWCxnQkFBSSxFQUFDLElBQUksRUFBRSxDQUFDLENBQUM7O0FBRXpDLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBTyxJQUFJO0FBQ2YsbUJBQU8sRUFBSSxVQUFVO0FBQ3JCLHFCQUFTLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQzs7Ozs7QUFTMUQsaUJBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBOzs7QUFHekIsY0FBSSxhQUFVLEdBQUc7QUFDZixxQkFBUyxFQUFFLEtBQUssRUFDakIsQ0FBQTs7QUFFRCxjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixjQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQTtBQUN2QyxjQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUM5QixrQkFBTSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQztBQUNuQyxrQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNULEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxFQUFHLFFBQVEsRUFBRSxTQUFTLEVBQVksS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUMsTUFBSyxPQUFPLEVBQUUsQ0FDOUYsQ0FBQyxDQUFDO1dBQ0osQ0FBQyxDQUFDO1NBRUo7OzZCQW5DVSxHQUFHO0FBQ1AsZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFBRTs7Ozs7QUFvQ3BELGtCQUFRO21CQUFBLG9CQUFFLEVBR1Q7Ozs7OztlQXhDVSxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL3BsdWdpbnMvIn0=