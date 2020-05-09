"use strict";

var _styles = _interopRequireDefault(require("./utilities/styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var generateStyle = _styles["default"].generateStyle,
    retrieveStyle = _styles["default"].retrieveStyle,
    renderStyles = _styles["default"].renderStyles;
generateStyle([["\n\n  display: none;\n  \n"]], "abc");
var superStyle = retrieveStyle("abc");
generateStyle([["\n\n  display: block;\n  \n"]], "def", superStyle);
renderStyles();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsiZ2VuZXJhdGVTdHlsZSIsInN0eWxlVXRpbGl0aWVzIiwicmV0cmlldmVTdHlsZSIsInJlbmRlclN0eWxlcyIsInN1cGVyU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7O0lBRVFBLGEsR0FBK0NDLGtCLENBQS9DRCxhO0lBQWVFLGEsR0FBZ0NELGtCLENBQWhDQyxhO0lBQWVDLFksR0FBaUJGLGtCLENBQWpCRSxZO0FBRXRDSCxhQUFhLENBQUMsQ0FBQyw4QkFBRCxDQUFELEVBSVIsS0FKUSxDQUFiO0FBTUEsSUFBTUksVUFBVSxHQUFHRixhQUFhLENBQUMsS0FBRCxDQUFoQztBQUVBRixhQUFhLENBQUMsQ0FBQywrQkFBRCxDQUFELEVBSVIsS0FKUSxFQUlESSxVQUpDLENBQWI7QUFNQUQsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc3R5bGVVdGlsaXRpZXMgZnJvbSBcIi4vdXRpbGl0aWVzL3N0eWxlc1wiO1xuXG5jb25zdCB7IGdlbmVyYXRlU3R5bGUsIHJldHJpZXZlU3R5bGUsIHJlbmRlclN0eWxlcyB9ID0gc3R5bGVVdGlsaXRpZXM7XG5cbmdlbmVyYXRlU3R5bGUoW1tgXG5cbiAgZGlzcGxheTogbm9uZTtcbiAgXG5gXV0sIFwiYWJjXCIpO1xuXG5jb25zdCBzdXBlclN0eWxlID0gcmV0cmlldmVTdHlsZShcImFiY1wiKTtcblxuZ2VuZXJhdGVTdHlsZShbW2BcblxuICBkaXNwbGF5OiBibG9jaztcbiAgXG5gXV0sIFwiZGVmXCIsIHN1cGVyU3R5bGUpO1xuXG5yZW5kZXJTdHlsZXMoKTtcbiJdfQ==