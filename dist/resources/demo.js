System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, Demo;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Demo = _export("Demo", (function () {
        function Demo(element) {
          _classCallCheck(this, Demo);

          console.log(this);
          this.example = this.example;
        }

        _prototypeProperties(Demo, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("demo").withProperty("example").withProperty("display");
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

        return Demo;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9kZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFFBQVEseUNBRUgsSUFBSTs7O0FBRlQsY0FBUSxzQkFBUixRQUFROzs7Ozs7O0FBRUgsVUFBSTtBQWFGLGlCQWJGLElBQUksQ0FhRCxPQUFPO2dDQWJWLElBQUk7O0FBZVQsaUJBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDakIsY0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFBO1NBQzlCOzs2QkFqQlEsSUFBSTtBQUVOLGtCQUFRO21CQUFBLG9CQUFFO0FBQ2IscUJBQU8sUUFBUSxDQUNWLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FDckIsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUN2QixZQUFZLENBQUMsU0FBUyxDQUFDLENBQUE7YUFDL0I7Ozs7QUFFTSxnQkFBTTttQkFBQSxrQkFBRTtBQUNYLHFCQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7YUFDbkI7Ozs7OztlQVhRLElBQUkiLCJmaWxlIjoicmVzb3VyY2VzL2RlbW8uanMiLCJzb3VyY2VSb290IjoiL3NyYy9wbHVnaW5zLyJ9