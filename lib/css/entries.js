"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var cssEntries = [{
  "colour": "^#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})"
}, {
  "keyword": "^(?:!important|@media)"
}, {
  "percentage": "^(?:[0-9]+|[0-9]*\\.[0-9]+)\\%"
}, {
  "frequency": "^(?:[0-9]+|[0-9]*\\.[0-9]+)(?:hz|khz)"
}, {
  "length": "^(?:[0-9]+|[0-9]*\\.[0-9]+)(?:px|cm|mm|in|pt|pc)"
}, {
  "angle": "^(?:[0-9]+|[0-9]*\\.[0-9]+)(?:deg|rad|grad)"
}, {
  "time": "^(?:[0-9]+|[0-9]*\\.[0-9]+)(?:s|ms)"
}, {
  "rems": "^(?:[0-9]+|[0-9]*\\.[0-9]+)rem"
}, {
  "ems": "^(?:[0-9]+|[0-9]*\\.[0-9]+)em"
}, {
  "number": "^[0-9]+|[0-9]*\\.[0-9]+"
}, {
  "special": "^;|::|:|\\.|,|/|\\|=|~=|=|>|\\{|\\}|\\(|\\)|\\[|\\]"
}, {
  "operator": "^^(?:and|not|only)$"
}, {
  "identifier": "^[_a-zA-Z][_a-zA-Z0-9-]*"
}, {
  "unary-operator": "^\\+|\\-"
}, {
  "unassigned": "^[^\\s]+"
}];
var _default = cssEntries;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudHJpZXMuanMiXSwibmFtZXMiOlsiY3NzRW50cmllcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRyxDQUVqQjtBQUFFLFlBQVc7QUFBYixDQUZpQixFQUlqQjtBQUFFLGFBQVk7QUFBZCxDQUppQixFQU1qQjtBQUFFLGdCQUFlO0FBQWpCLENBTmlCLEVBUWpCO0FBQUUsZUFBYztBQUFoQixDQVJpQixFQVVqQjtBQUFFLFlBQVc7QUFBYixDQVZpQixFQVlqQjtBQUFFLFdBQVU7QUFBWixDQVppQixFQWNqQjtBQUFFLFVBQVM7QUFBWCxDQWRpQixFQWdCakI7QUFBRSxVQUFTO0FBQVgsQ0FoQmlCLEVBa0JqQjtBQUFFLFNBQVE7QUFBVixDQWxCaUIsRUFvQmpCO0FBQUUsWUFBVztBQUFiLENBcEJpQixFQXNCakI7QUFBRSxhQUFZO0FBQWQsQ0F0QmlCLEVBd0JqQjtBQUFFLGNBQWE7QUFBZixDQXhCaUIsRUEwQmpCO0FBQUUsZ0JBQWU7QUFBakIsQ0ExQmlCLEVBNEJqQjtBQUFFLG9CQUFtQjtBQUFyQixDQTVCaUIsRUE4QmpCO0FBQUUsZ0JBQWU7QUFBakIsQ0E5QmlCLENBQW5CO2VBa0NlQSxVIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBjc3NFbnRyaWVzID0gW1xyXG5cclxuICB7IFwiY29sb3VyXCIgOiBcIl4jKD86WzAtOWEtZkEtRl17Nn18WzAtOWEtZkEtRl17M30pXCIgfSxcclxuXHJcbiAgeyBcImtleXdvcmRcIiA6IFwiXig/OiFpbXBvcnRhbnR8QG1lZGlhKVwiIH0sXHJcblxyXG4gIHsgXCJwZXJjZW50YWdlXCIgOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspXFxcXCVcIiB9LFxyXG5cclxuICB7IFwiZnJlcXVlbmN5XCIgOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspKD86aHp8a2h6KVwiIH0sXHJcblxyXG4gIHsgXCJsZW5ndGhcIiA6IFwiXig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKykoPzpweHxjbXxtbXxpbnxwdHxwYylcIiB9LFxyXG5cclxuICB7IFwiYW5nbGVcIiA6IFwiXig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKykoPzpkZWd8cmFkfGdyYWQpXCIgfSxcclxuXHJcbiAgeyBcInRpbWVcIiA6IFwiXig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKykoPzpzfG1zKVwiIH0sXHJcblxyXG4gIHsgXCJyZW1zXCIgOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspcmVtXCIgfSxcclxuXHJcbiAgeyBcImVtc1wiIDogXCJeKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKWVtXCIgfSxcclxuXHJcbiAgeyBcIm51bWJlclwiIDogXCJeWzAtOV0rfFswLTldKlxcXFwuWzAtOV0rXCIgfSxcclxuXHJcbiAgeyBcInNwZWNpYWxcIiA6IFwiXjt8Ojp8OnxcXFxcLnwsfC98XFxcXHw9fH49fD18PnxcXFxce3xcXFxcfXxcXFxcKHxcXFxcKXxcXFxcW3xcXFxcXVwiIH0sXHJcblxyXG4gIHsgXCJvcGVyYXRvclwiIDogXCJeXig/OmFuZHxub3R8b25seSkkXCIgfSxcclxuXHJcbiAgeyBcImlkZW50aWZpZXJcIiA6IFwiXltfYS16QS1aXVtfYS16QS1aMC05LV0qXCIgfSxcclxuXHJcbiAgeyBcInVuYXJ5LW9wZXJhdG9yXCIgOiBcIl5cXFxcK3xcXFxcLVwiIH0sXHJcblxyXG4gIHsgXCJ1bmFzc2lnbmVkXCIgOiBcIl5bXlxcXFxzXStcIiB9XHJcblxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3NzRW50cmllcztcclxuIl19