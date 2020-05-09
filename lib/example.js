"use strict";

var _styles = _interopRequireDefault(require("./utilities/styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var generateStyle = _styles["default"].generateStyle,
    retrieveStyle = _styles["default"].retrieveStyle,
    renderStyles = _styles["default"].renderStyles;
generateStyle([["\n\n  :after {\n    color: green;\n    display: none;\n  }\n  \n"]], "abc");
var superStyle = retrieveStyle("abc");
generateStyle([["\n\n  :after {\n    display: block;\n    background: transparent;\n  }\n  \n"]], "def", superStyle);
renderStyles();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsiZ2VuZXJhdGVTdHlsZSIsInN0eWxlVXRpbGl0aWVzIiwicmV0cmlldmVTdHlsZSIsInJlbmRlclN0eWxlcyIsInN1cGVyU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7O0lBRVFBLGEsR0FBK0NDLGtCLENBQS9DRCxhO0lBQWVFLGEsR0FBZ0NELGtCLENBQWhDQyxhO0lBQWVDLFksR0FBaUJGLGtCLENBQWpCRSxZO0FBRXRDSCxhQUFhLENBQUMsQ0FBQyxvRUFBRCxDQUFELEVBT1IsS0FQUSxDQUFiO0FBU0EsSUFBTUksVUFBVSxHQUFHRixhQUFhLENBQUMsS0FBRCxDQUFoQztBQUVBRixhQUFhLENBQUMsQ0FBQyxnRkFBRCxDQUFELEVBT1IsS0FQUSxFQU9ESSxVQVBDLENBQWI7QUFTQUQsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc3R5bGVVdGlsaXRpZXMgZnJvbSBcIi4vdXRpbGl0aWVzL3N0eWxlc1wiO1xuXG5jb25zdCB7IGdlbmVyYXRlU3R5bGUsIHJldHJpZXZlU3R5bGUsIHJlbmRlclN0eWxlcyB9ID0gc3R5bGVVdGlsaXRpZXM7XG5cbmdlbmVyYXRlU3R5bGUoW1tgXG5cbiAgOmFmdGVyIHtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbmBdXSwgXCJhYmNcIik7XG5cbmNvbnN0IHN1cGVyU3R5bGUgPSByZXRyaWV2ZVN0eWxlKFwiYWJjXCIpO1xuXG5nZW5lcmF0ZVN0eWxlKFtbYFxuXG4gIDphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG5gXV0sIFwiZGVmXCIsIHN1cGVyU3R5bGUpO1xuXG5yZW5kZXJTdHlsZXMoKTtcbiJdfQ==