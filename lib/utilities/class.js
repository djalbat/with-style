"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isClass = isClass;
exports["default"] = void 0;

var _reaction = require("reaction");

function isClass(argument) {
  return isSubclassOf(argument, _reaction.React.Component);
} ///


var _default = {
  isClass: isClass
};
exports["default"] = _default;

function isSubclassOf(argument, Class) {
  var subclass = false;

  if (argument.name === Class.name) {
    ///
    subclass = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument !== null) {
      subclass = isSubclassOf(argument, Class);
    }
  }

  return subclass;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzLmpzIl0sIm5hbWVzIjpbImlzQ2xhc3MiLCJhcmd1bWVudCIsImlzU3ViY2xhc3NPZiIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2xhc3MiLCJzdWJjbGFzcyIsIm5hbWUiLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUE7O0FBRU8sU0FBU0EsT0FBVCxDQUFpQkMsUUFBakIsRUFBMkI7QUFBRSxTQUFPQyxZQUFZLENBQUNELFFBQUQsRUFBV0UsZ0JBQU1DLFNBQWpCLENBQW5CO0FBQWlELEMsQ0FBRTs7O2VBRXhFO0FBQ2JKLEVBQUFBLE9BQU8sRUFBUEE7QUFEYSxDOzs7QUFJZixTQUFTRSxZQUFULENBQXNCRCxRQUF0QixFQUFnQ0ksS0FBaEMsRUFBdUM7QUFDckMsTUFBSUMsUUFBUSxHQUFHLEtBQWY7O0FBRUEsTUFBSUwsUUFBUSxDQUFDTSxJQUFULEtBQWtCRixLQUFLLENBQUNFLElBQTVCLEVBQWtDO0FBQUk7QUFDcENELElBQUFBLFFBQVEsR0FBRyxJQUFYO0FBQ0QsR0FGRCxNQUVPO0FBQ0xMLElBQUFBLFFBQVEsR0FBR08sTUFBTSxDQUFDQyxjQUFQLENBQXNCUixRQUF0QixDQUFYLENBREssQ0FDdUM7O0FBRTVDLFFBQUlBLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNyQkssTUFBQUEsUUFBUSxHQUFHSixZQUFZLENBQUNELFFBQUQsRUFBV0ksS0FBWCxDQUF2QjtBQUNEO0FBQ0Y7O0FBRUQsU0FBT0MsUUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NsYXNzKGFyZ3VtZW50KSB7IHJldHVybiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIFJlYWN0LkNvbXBvbmVudCk7IH0gIC8vL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzQ2xhc3Ncbn07XG5cbmZ1bmN0aW9uIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgbGV0IHN1YmNsYXNzID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50Lm5hbWUgPT09IENsYXNzLm5hbWUpIHsgICAvLy9cbiAgICBzdWJjbGFzcyA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCAhPT0gbnVsbCkge1xuICAgICAgc3ViY2xhc3MgPSBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ViY2xhc3M7XG59XG4iXX0=