System.register(["aurelia-event-aggregator"], function (_export) {
  "use strict";

  var EventAggregator, _prototypeProperties, _classCallCheck, Welcome;
  return {
    setters: [function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Welcome = _export("Welcome", (function () {
        function Welcome(eventAggregator) {
          _classCallCheck(this, Welcome);

          this.events = eventAggregator;
          this.heading = "Aurelia Interface ";
        }

        _prototypeProperties(Welcome, {
          inject: {
            value: function inject() {
              return [EventAggregator];
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate(params, queryString, routeConfig) {
              if (routeConfig) {
                this.toolbar = routeConfig.toolbar;
                this.toolbar.configure({ size: "xl",
                  fixed: true,
                  bgColor: "bg-purple",
                  textColor: "text-white"
                });
              }

              var GammaSettings = {
                viewport: [{
                  width: 1200,
                  columns: 5
                }, {
                  width: 900,
                  columns: 4
                }, {
                  width: 500,
                  columns: 3
                }, {
                  width: 320,
                  columns: 2
                }, {
                  width: 0,
                  columns: 2
                }]
              };

              Gamma.init(GammaSettings);
            },
            writable: true,
            configurable: true
          }
        });

        return Welcome;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsZUFBZSx5Q0FFVixPQUFPOzs7QUFGWixxQkFBZSwyQkFBZixlQUFlOzs7Ozs7O0FBRVYsYUFBTztBQVFMLGlCQVJGLE9BQU8sQ0FRSixlQUFlO2dDQVJsQixPQUFPOztBQVNaLGNBQUksQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFBO0FBQzdCLGNBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQW9CLENBQUM7U0FDdkM7OzZCQVhRLE9BQU87QUFFVCxnQkFBTTttQkFBQSxrQkFBRTtBQUVYLHFCQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7YUFFNUI7Ozs7O0FBT0Qsa0JBQVE7bUJBQUEsa0JBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUM7QUFFdEMsa0JBQUcsV0FBVyxFQUFDO0FBQ1gsb0JBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQTtBQUNsQyxvQkFBSSxDQUFDLE9BQU8sQ0FDUCxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQVEsSUFBSTtBQUNoQix1QkFBSyxFQUFPLElBQUk7QUFDaEIseUJBQU8sRUFBSyxXQUFXO0FBQ3ZCLDJCQUFTLEVBQUcsWUFBWTtpQkFDekIsQ0FBQyxDQUFBO2VBQ3BCOztBQUVDLGtCQUFJLGFBQWEsR0FBRztBQUVaLHdCQUFRLEVBQUcsQ0FBRTtBQUNULHVCQUFLLEVBQUcsSUFBSTtBQUNaLHlCQUFPLEVBQUcsQ0FBQztpQkFDZCxFQUFFO0FBQ0MsdUJBQUssRUFBRyxHQUFHO0FBQ1gseUJBQU8sRUFBRyxDQUFDO2lCQUNkLEVBQUU7QUFDQyx1QkFBSyxFQUFHLEdBQUc7QUFDWCx5QkFBTyxFQUFHLENBQUM7aUJBQ2QsRUFBRTtBQUNDLHVCQUFLLEVBQUcsR0FBRztBQUNYLHlCQUFPLEVBQUcsQ0FBQztpQkFDZCxFQUFFO0FBQ0MsdUJBQUssRUFBRyxDQUFDO0FBQ1QseUJBQU8sRUFBRyxDQUFDO2lCQUNkLENBQUU7ZUFDVixDQUFDOztBQUVGLG1CQUFLLENBQUMsSUFBSSxDQUFFLGFBQWEsQ0FBQyxDQUFDO2FBRWhDOzs7Ozs7ZUEvQ1EsT0FBTyIsImZpbGUiOiJ3ZWxjb21lLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==