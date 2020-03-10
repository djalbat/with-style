'use strict';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzLmpzIl0sIm5hbWVzIjpbImlzQ2xhc3MiLCJhcmd1bWVudCIsImlzU3ViY2xhc3NPZiIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2xhc3MiLCJzdWJjbGFzcyIsIm5hbWUiLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUE7O0FBRU8sU0FBU0EsT0FBVCxDQUFpQkMsUUFBakIsRUFBMkI7QUFBRSxTQUFPQyxZQUFZLENBQUNELFFBQUQsRUFBV0UsZ0JBQU1DLFNBQWpCLENBQW5CO0FBQWlELEMsQ0FBRTs7O2VBRXhFO0FBQ2JKLEVBQUFBLE9BQU8sRUFBUEE7QUFEYSxDOzs7QUFJZixTQUFTRSxZQUFULENBQXNCRCxRQUF0QixFQUFnQ0ksS0FBaEMsRUFBdUM7QUFDckMsTUFBSUMsUUFBUSxHQUFHLEtBQWY7O0FBRUEsTUFBSUwsUUFBUSxDQUFDTSxJQUFULEtBQWtCRixLQUFLLENBQUNFLElBQTVCLEVBQWtDO0FBQUk7QUFDcENELElBQUFBLFFBQVEsR0FBRyxJQUFYO0FBQ0QsR0FGRCxNQUVPO0FBQ0xMLElBQUFBLFFBQVEsR0FBR08sTUFBTSxDQUFDQyxjQUFQLENBQXNCUixRQUF0QixDQUFYLENBREssQ0FDdUM7O0FBRTVDLFFBQUlBLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNyQkssTUFBQUEsUUFBUSxHQUFHSixZQUFZLENBQUNELFFBQUQsRUFBV0ksS0FBWCxDQUF2QjtBQUNEO0FBQ0Y7O0FBRUQsU0FBT0MsUUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gJ3JlYWN0aW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2xhc3MoYXJndW1lbnQpIHsgcmV0dXJuIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgUmVhY3QuQ29tcG9uZW50KTsgfSAgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNDbGFzc1xufTtcblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBsZXQgc3ViY2xhc3MgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQubmFtZSA9PT0gQ2xhc3MubmFtZSkgeyAgIC8vL1xuICAgIHN1YmNsYXNzID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBhcmd1bWVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhcmd1bWVudCk7IC8vL1xuXG4gICAgaWYgKGFyZ3VtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdWJjbGFzcyA9IGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJjbGFzcztcbn1cbiJdfQ==