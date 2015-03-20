System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, Column;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Column = _export("Column", (function () {
        function Column(element) {
          _classCallCheck(this, Column);

          this.element = element;
          this.screen = this.screen || "md";
          this.size = this.size || "12";
          this.element.classList.add("flex", "" + this.screen + "" + this.size);
        }

        _prototypeProperties(Column, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("column").withProperty("screen").withProperty("size");
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

        return Column;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9jb2x1bW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSx5Q0FFSCxNQUFNOzs7QUFGWCxjQUFRLHFCQUFSLFFBQVE7Ozs7Ozs7QUFFSCxZQUFNO0FBWU4saUJBWkEsTUFBTSxDQVlMLE9BQU87Z0NBWlIsTUFBTTs7QUFhYixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtBQUN0QixjQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDO0FBQ2xDLGNBQUksQ0FBQyxJQUFJLEdBQUssSUFBSSxDQUFDLElBQUksSUFBTSxJQUFJLENBQUM7QUFDbEMsY0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sT0FBSyxJQUFJLENBQUMsTUFBTSxRQUFHLElBQUksQ0FBQyxJQUFJLENBQUcsQ0FBQTtTQUNuRTs7NkJBakJVLE1BQU07QUFDVixrQkFBUTttQkFBQSxvQkFBRztBQUNoQixxQkFBTyxRQUFRLENBQ1YsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUN2QixZQUFZLENBQUMsUUFBUSxDQUFDLENBQ3RCLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQTthQUMxQjs7OztBQUVNLGdCQUFNO21CQUFBLGtCQUFFO0FBQ1gscUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUNuQjs7Ozs7O2VBVlUsTUFBTSIsImZpbGUiOiJyZXNvdXJjZXMvY29sdW1uLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==