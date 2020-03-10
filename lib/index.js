'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isClass", {
  enumerable: true,
  get: function get() {
    return _class.isClass;
  }
});
Object.defineProperty(exports, "generateClassName", {
  enumerable: true,
  get: function get() {
    return _className.generateClassName;
  }
});
Object.defineProperty(exports, "retrieveClassName", {
  enumerable: true,
  get: function get() {
    return _className.retrieveClassName;
  }
});
Object.defineProperty(exports, "renderStyles", {
  enumerable: true,
  get: function get() {
    return _styles.renderStyles;
  }
});
Object.defineProperty(exports, "generateStyle", {
  enumerable: true,
  get: function get() {
    return _styles.generateStyle;
  }
});
Object.defineProperty(exports, "retrieveStyle", {
  enumerable: true,
  get: function get() {
    return _styles.retrieveStyle;
  }
});
exports["default"] = void 0;

var _tagNames = _interopRequireDefault(require("./tagNames"));

var _class = require("./utilities/class");

var _className = require("./utilities/className");

var _styles = require("./utilities/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var classUtilities = {
  isClass: isClass
};
var stylesUtilities = {
  renderStyles: renderStyles,
  generateStyle: generateStyle,
  retrieveStyle: retrieveStyle
};
var classNameUtilities = {
  generateClassName: generateClassName,
  retrieveClassName: retrieveClassName
};
var _default = {
  tagNames: _tagNames["default"],
  classUtilities: classUtilities,
  stylesUtilities: stylesUtilities,
  classNameUtilities: classNameUtilities
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzVXRpbGl0aWVzIiwiaXNDbGFzcyIsInN0eWxlc1V0aWxpdGllcyIsInJlbmRlclN0eWxlcyIsImdlbmVyYXRlU3R5bGUiLCJyZXRyaWV2ZVN0eWxlIiwiY2xhc3NOYW1lVXRpbGl0aWVzIiwiZ2VuZXJhdGVDbGFzc05hbWUiLCJyZXRyaWV2ZUNsYXNzTmFtZSIsInRhZ05hbWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsY0FBYyxHQUFHO0FBQ3JCQyxFQUFBQSxPQUFPLEVBQVBBO0FBRHFCLENBQXZCO0FBSUEsSUFBTUMsZUFBZSxHQUFHO0FBQ3RCQyxFQUFBQSxZQUFZLEVBQVpBLFlBRHNCO0FBRXRCQyxFQUFBQSxhQUFhLEVBQWJBLGFBRnNCO0FBR3RCQyxFQUFBQSxhQUFhLEVBQWJBO0FBSHNCLENBQXhCO0FBTUEsSUFBTUMsa0JBQWtCLEdBQUc7QUFDekJDLEVBQUFBLGlCQUFpQixFQUFqQkEsaUJBRHlCO0FBQ05DLEVBQUFBLGlCQUFpQixFQUFqQkE7QUFETSxDQUEzQjtlQUllO0FBQ2JDLEVBQUFBLFFBQVEsRUFBUkEsb0JBRGE7QUFFYlQsRUFBQUEsY0FBYyxFQUFkQSxjQUZhO0FBR2JFLEVBQUFBLGVBQWUsRUFBZkEsZUFIYTtBQUliSSxFQUFBQSxrQkFBa0IsRUFBbEJBO0FBSmEsQyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHRhZ05hbWVzIGZyb20gJy4vdGFnTmFtZXMnO1xuXG5leHBvcnQgeyBpc0NsYXNzIH0gZnJvbSAnLi91dGlsaXRpZXMvY2xhc3MnO1xuZXhwb3J0IHsgZ2VuZXJhdGVDbGFzc05hbWUsIHJldHJpZXZlQ2xhc3NOYW1lIH0gZnJvbSAnLi91dGlsaXRpZXMvY2xhc3NOYW1lJztcbmV4cG9ydCB7IHJlbmRlclN0eWxlcywgZ2VuZXJhdGVTdHlsZSwgcmV0cmlldmVTdHlsZSB9IGZyb20gJy4vdXRpbGl0aWVzL3N0eWxlcyc7XG5cbmNvbnN0IGNsYXNzVXRpbGl0aWVzID0ge1xuICBpc0NsYXNzXG59O1xuXG5jb25zdCBzdHlsZXNVdGlsaXRpZXMgPSB7XG4gIHJlbmRlclN0eWxlcyxcbiAgZ2VuZXJhdGVTdHlsZSxcbiAgcmV0cmlldmVTdHlsZVxufTtcblxuY29uc3QgY2xhc3NOYW1lVXRpbGl0aWVzID0ge1xuICBnZW5lcmF0ZUNsYXNzTmFtZSwgcmV0cmlldmVDbGFzc05hbWVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGFnTmFtZXMsXG4gIGNsYXNzVXRpbGl0aWVzLFxuICBzdHlsZXNVdGlsaXRpZXMsXG4gIGNsYXNzTmFtZVV0aWxpdGllc1xufTtcbiJdfQ==