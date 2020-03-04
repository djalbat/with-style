'use strict';

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
module.exports = cssEntries;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudHJpZXMuanMiXSwibmFtZXMiOlsiY3NzRW50cmllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxDQUVqQjtBQUFFLFlBQVc7QUFBYixDQUZpQixFQUlqQjtBQUFFLGFBQVk7QUFBZCxDQUppQixFQU1qQjtBQUFFLGdCQUFlO0FBQWpCLENBTmlCLEVBUWpCO0FBQUUsZUFBYztBQUFoQixDQVJpQixFQVVqQjtBQUFFLFlBQVc7QUFBYixDQVZpQixFQVlqQjtBQUFFLFdBQVU7QUFBWixDQVppQixFQWNqQjtBQUFFLFVBQVM7QUFBWCxDQWRpQixFQWdCakI7QUFBRSxVQUFTO0FBQVgsQ0FoQmlCLEVBa0JqQjtBQUFFLFNBQVE7QUFBVixDQWxCaUIsRUFvQmpCO0FBQUUsWUFBVztBQUFiLENBcEJpQixFQXNCakI7QUFBRSxhQUFZO0FBQWQsQ0F0QmlCLEVBd0JqQjtBQUFFLGNBQWE7QUFBZixDQXhCaUIsRUEwQmpCO0FBQUUsZ0JBQWU7QUFBakIsQ0ExQmlCLEVBNEJqQjtBQUFFLG9CQUFtQjtBQUFyQixDQTVCaUIsRUE4QmpCO0FBQUUsZ0JBQWU7QUFBakIsQ0E5QmlCLENBQW5CO0FBa0NBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJGLFVBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgY3NzRW50cmllcyA9IFtcclxuXHJcbiAgeyBcImNvbG91clwiIDogXCJeIyg/OlswLTlhLWZBLUZdezZ9fFswLTlhLWZBLUZdezN9KVwiIH0sXHJcblxyXG4gIHsgXCJrZXl3b3JkXCIgOiBcIl4oPzohaW1wb3J0YW50fEBtZWRpYSlcIiB9LFxyXG5cclxuICB7IFwicGVyY2VudGFnZVwiIDogXCJeKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKVxcXFwlXCIgfSxcclxuXHJcbiAgeyBcImZyZXF1ZW5jeVwiIDogXCJeKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKSg/Omh6fGtoeilcIiB9LFxyXG5cclxuICB7IFwibGVuZ3RoXCIgOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspKD86cHh8Y218bW18aW58cHR8cGMpXCIgfSxcclxuXHJcbiAgeyBcImFuZ2xlXCIgOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspKD86ZGVnfHJhZHxncmFkKVwiIH0sXHJcblxyXG4gIHsgXCJ0aW1lXCIgOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspKD86c3xtcylcIiB9LFxyXG5cclxuICB7IFwicmVtc1wiIDogXCJeKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKXJlbVwiIH0sXHJcblxyXG4gIHsgXCJlbXNcIiA6IFwiXig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKyllbVwiIH0sXHJcblxyXG4gIHsgXCJudW1iZXJcIiA6IFwiXlswLTldK3xbMC05XSpcXFxcLlswLTldK1wiIH0sXHJcblxyXG4gIHsgXCJzcGVjaWFsXCIgOiBcIl47fDo6fDp8XFxcXC58LHwvfFxcXFx8PXx+PXw9fD58XFxcXHt8XFxcXH18XFxcXCh8XFxcXCl8XFxcXFt8XFxcXF1cIiB9LFxyXG5cclxuICB7IFwib3BlcmF0b3JcIiA6IFwiXl4oPzphbmR8bm90fG9ubHkpJFwiIH0sXHJcblxyXG4gIHsgXCJpZGVudGlmaWVyXCIgOiBcIl5bX2EtekEtWl1bX2EtekEtWjAtOS1dKlwiIH0sXHJcblxyXG4gIHsgXCJ1bmFyeS1vcGVyYXRvclwiIDogXCJeXFxcXCt8XFxcXC1cIiB9LFxyXG5cclxuICB7IFwidW5hc3NpZ25lZFwiIDogXCJeW15cXFxcc10rXCIgfVxyXG5cclxuXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY3NzRW50cmllcztcclxuIl19