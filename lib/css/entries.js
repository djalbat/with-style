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
  "fraction": "^[1-9][0-9]*(\\/[1-9][0-9]*)?fr"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudHJpZXMuanMiXSwibmFtZXMiOlsiY3NzRW50cmllcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRyxDQUVqQjtBQUFFLFlBQVU7QUFBWixDQUZpQixFQUlqQjtBQUFFLGFBQVc7QUFBYixDQUppQixFQU1qQjtBQUFFLGdCQUFjO0FBQWhCLENBTmlCLEVBUWpCO0FBQUUsZUFBYTtBQUFmLENBUmlCLEVBVWpCO0FBQUUsY0FBWTtBQUFkLENBVmlCLEVBWWpCO0FBQUUsWUFBVTtBQUFaLENBWmlCLEVBY2pCO0FBQUUsV0FBUztBQUFYLENBZGlCLEVBZ0JqQjtBQUFFLFVBQVE7QUFBVixDQWhCaUIsRUFrQmpCO0FBQUUsVUFBUTtBQUFWLENBbEJpQixFQW9CakI7QUFBRSxTQUFPO0FBQVQsQ0FwQmlCLEVBc0JqQjtBQUFFLFlBQVU7QUFBWixDQXRCaUIsRUF3QmpCO0FBQUUsYUFBVztBQUFiLENBeEJpQixFQTBCakI7QUFBRSxjQUFZO0FBQWQsQ0ExQmlCLEVBNEJqQjtBQUFFLGdCQUFjO0FBQWhCLENBNUJpQixFQThCakI7QUFBRSxvQkFBa0I7QUFBcEIsQ0E5QmlCLEVBZ0NqQjtBQUFFLGdCQUFjO0FBQWhCLENBaENpQixDQUFuQjtlQW9DZUEsVSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgY3NzRW50cmllcyA9IFtcclxuXHJcbiAgeyBcImNvbG91clwiOiBcIl4jKD86WzAtOWEtZkEtRl17Nn18WzAtOWEtZkEtRl17M30pXCIgfSxcclxuXHJcbiAgeyBcImtleXdvcmRcIjogXCJeKD86IWltcG9ydGFudHxAbWVkaWEpXCIgfSxcclxuXHJcbiAgeyBcInBlcmNlbnRhZ2VcIjogXCJeKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKVxcXFwlXCIgfSxcclxuXHJcbiAgeyBcImZyZXF1ZW5jeVwiOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspKD86aHp8a2h6KVwiIH0sXHJcblxyXG4gIHsgXCJmcmFjdGlvblwiOiBcIl5bMS05XVswLTldKihcXFxcL1sxLTldWzAtOV0qKT9mclwiIH0sXHJcblxyXG4gIHsgXCJsZW5ndGhcIjogXCJeKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKSg/OnB4fGNtfG1tfGlufHB0fHBjKVwiIH0sXHJcblxyXG4gIHsgXCJhbmdsZVwiOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspKD86ZGVnfHJhZHxncmFkKVwiIH0sXHJcblxyXG4gIHsgXCJ0aW1lXCI6IFwiXig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKykoPzpzfG1zKVwiIH0sXHJcblxyXG4gIHsgXCJyZW1zXCI6IFwiXig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKylyZW1cIiB9LFxyXG5cclxuICB7IFwiZW1zXCI6IFwiXig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKyllbVwiIH0sXHJcblxyXG4gIHsgXCJudW1iZXJcIjogXCJeWzAtOV0rfFswLTldKlxcXFwuWzAtOV0rXCIgfSxcclxuXHJcbiAgeyBcInNwZWNpYWxcIjogXCJeO3w6Onw6fFxcXFwufCx8L3xcXFxcfD18fj18PXw+fFxcXFx7fFxcXFx9fFxcXFwofFxcXFwpfFxcXFxbfFxcXFxdXCIgfSxcclxuXHJcbiAgeyBcIm9wZXJhdG9yXCI6IFwiXl4oPzphbmR8bm90fG9ubHkpJFwiIH0sXHJcblxyXG4gIHsgXCJpZGVudGlmaWVyXCI6IFwiXltfYS16QS1aXVtfYS16QS1aMC05LV0qXCIgfSxcclxuXHJcbiAgeyBcInVuYXJ5LW9wZXJhdG9yXCI6IFwiXlxcXFwrfFxcXFwtXCIgfSxcclxuXHJcbiAgeyBcInVuYXNzaWduZWRcIjogXCJeW15cXFxcc10rXCIgfVxyXG5cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNzc0VudHJpZXM7XHJcbiJdfQ==