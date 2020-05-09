"use strict";

var _styles = _interopRequireDefault(require("./utilities/styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var generateStyle = _styles["default"].generateStyle,
    retrieveStyle = _styles["default"].retrieveStyle,
    renderStyles = _styles["default"].renderStyles;
generateStyle([["\n\n  color: black;\n  display: none;\n  \n"]], "abc");
var superStyle = retrieveStyle("abc");
generateStyle([["\n\n  display: block;\n  background: transparent;\n  \n"]], "def", superStyle);
renderStyles();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsiZ2VuZXJhdGVTdHlsZSIsInN0eWxlVXRpbGl0aWVzIiwicmV0cmlldmVTdHlsZSIsInJlbmRlclN0eWxlcyIsInN1cGVyU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7O0lBRVFBLGEsR0FBK0NDLGtCLENBQS9DRCxhO0lBQWVFLGEsR0FBZ0NELGtCLENBQWhDQyxhO0lBQWVDLFksR0FBaUJGLGtCLENBQWpCRSxZO0FBRXRDSCxhQUFhLENBQUMsQ0FBQywrQ0FBRCxDQUFELEVBS1IsS0FMUSxDQUFiO0FBT0EsSUFBTUksVUFBVSxHQUFHRixhQUFhLENBQUMsS0FBRCxDQUFoQztBQUVBRixhQUFhLENBQUMsQ0FBQywyREFBRCxDQUFELEVBS1IsS0FMUSxFQUtESSxVQUxDLENBQWI7QUFPQUQsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc3R5bGVVdGlsaXRpZXMgZnJvbSBcIi4vdXRpbGl0aWVzL3N0eWxlc1wiO1xuXG5jb25zdCB7IGdlbmVyYXRlU3R5bGUsIHJldHJpZXZlU3R5bGUsIHJlbmRlclN0eWxlcyB9ID0gc3R5bGVVdGlsaXRpZXM7XG5cbmdlbmVyYXRlU3R5bGUoW1tgXG5cbiAgY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBub25lO1xuICBcbmBdXSwgXCJhYmNcIik7XG5cbmNvbnN0IHN1cGVyU3R5bGUgPSByZXRyaWV2ZVN0eWxlKFwiYWJjXCIpO1xuXG5nZW5lcmF0ZVN0eWxlKFtbYFxuXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgXG5gXV0sIFwiZGVmXCIsIHN1cGVyU3R5bGUpO1xuXG5yZW5kZXJTdHlsZXMoKTtcbiJdfQ==