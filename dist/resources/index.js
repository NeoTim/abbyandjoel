System.register(["./markdown", "./source", "./example", "./example-context", "./column", "./file", "./demo"], function (_export) {
  "use strict";

  var Markdown, Source, Example, ExampleContext, Column, File, Demo;
  _export("install", install);

  function install(aurelia) {
    aurelia.withResources(Markdown, Source, Demo);

    aurelia.withResources(Markdown, Source, Example, Column, File, Demo);
  }
  return {
    setters: [function (_markdown) {
      Markdown = _markdown.Markdown;
    }, function (_source) {
      Source = _source.Source;
    }, function (_example) {
      Example = _example.Example;
    }, function (_exampleContext) {
      ExampleContext = _exampleContext.ExampleContext;
    }, function (_column) {
      Column = _column.Column;
    }, function (_file) {
      File = _file.File;
    }, function (_demo) {
      Demo = _demo.Demo;
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLEVBQ1IsTUFBTSxFQUNOLE9BQU8sRUFDUCxjQUFjLEVBQ2QsTUFBTSxFQUNOLElBQUksRUFDSixJQUFJO3FCQUVJLE9BQU87O0FBQWhCLFdBQVMsT0FBTyxDQUFDLE9BQU8sRUFBRTtBQUMvQixXQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7O0FBSzlDLFdBQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztHQUN0RTs7O0FBZk8sY0FBUSxhQUFSLFFBQVE7O0FBQ1IsWUFBTSxXQUFOLE1BQU07O0FBQ04sYUFBTyxZQUFQLE9BQU87O0FBQ1Asb0JBQWMsbUJBQWQsY0FBYzs7QUFDZCxZQUFNLFdBQU4sTUFBTTs7QUFDTixVQUFJLFNBQUosSUFBSTs7QUFDSixVQUFJLFNBQUosSUFBSSIsImZpbGUiOiJyZXNvdXJjZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL3NyYy9wbHVnaW5zLyJ9