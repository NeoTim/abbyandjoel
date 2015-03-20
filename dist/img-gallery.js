System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, ImgGallery;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      ImgGallery = _export("ImgGallery", (function () {
        function ImgGallery(element) {
          _classCallCheck(this, ImgGallery);

          this.element = element;
          this.element.classList.add("img-gallery");
          this.images = [{ name: "ja-1" }, { name: "ja-2" }, { name: "ja-3" }, { name: "ja-4" }, { name: "ja-5" }, { name: "ja-6" }, { name: "ja-7" }, { name: "ja-8" }, { name: "joel-abby-rocks-2" }, { name: "joel-abby-on-back" }, { name: "joel-abby-rocks-1" }, { name: "abby-yard" }, { name: "joel-abby-emotion-1" }, { name: "proposal-close" }, { name: "joel-abby-emotion-2" }];
        }

        _prototypeProperties(ImgGallery, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("img-gallery");
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

        return ImgGallery;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltZy1nYWxsZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFFBQVEseUNBRUgsVUFBVTs7O0FBRmYsY0FBUSxxQkFBUixRQUFROzs7Ozs7O0FBRUgsZ0JBQVU7QUFnQlIsaUJBaEJGLFVBQVUsQ0FnQlAsT0FBTztnQ0FoQlYsVUFBVTs7QUFrQmYsY0FBSSxDQUFDLE9BQU8sR0FBSyxPQUFPLENBQUE7QUFDeEIsY0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0FBQ3pDLGNBQUksQ0FBQyxNQUFNLEdBQUssQ0FBRSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsRUFDZCxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsRUFDZCxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsRUFDZCxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsRUFDZCxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsRUFDZCxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsRUFDZCxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsRUFDZCxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsRUFDZCxFQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBQyxFQUMzQixFQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBQyxFQUMzQixFQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBQyxFQUMzQixFQUFDLElBQUksRUFBRSxXQUFXLEVBQUMsRUFDbkIsRUFBQyxJQUFJLEVBQUUscUJBQXFCLEVBQUMsRUFDN0IsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUMsRUFDeEIsRUFBQyxJQUFJLEVBQUUscUJBQXFCLEVBQUMsQ0FDOUIsQ0FBQTtTQUNwQjs7NkJBcENRLFVBQVU7QUFFWixrQkFBUTttQkFBQSxvQkFBRTtBQUViLHFCQUFPLFFBQVEsQ0FDVixhQUFhLENBQUMsYUFBYSxDQUFDLENBQUE7YUFFcEM7Ozs7QUFFTSxnQkFBTTttQkFBQyxrQkFBRTtBQUVaLHFCQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7YUFFbkI7Ozs7O0FBeUJELGtCQUFRO21CQUFBLG9CQUFFO0FBQ04sa0JBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDckMsa0JBQUksSUFBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7QUFDN0Isa0JBQUksQ0FDQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQTthQUVwQzs7Ozs7O2VBNUNRLFVBQVUiLCJmaWxlIjoiaW1nLWdhbGxlcnkuanMiLCJzb3VyY2VSb290IjoiL3NyYy9wbHVnaW5zLyJ9