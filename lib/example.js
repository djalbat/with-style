"use strict";

var _styles = _interopRequireDefault(require("./utilities/styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var generateStyle = _styles["default"].generateStyle,
    retrieveStyle = _styles["default"].retrieveStyle,
    renderStyles = _styles["default"].renderStyles;
generateStyle([["\n\n  bottom: 0;\n  width: 2rem;\n  height: 2rem;\n  outline: none;\n  display: inline-block;\n  position: absolute;\n  font-size: 1.2rem;\n  border-width: 1px;\n  border-style: solid;\n  border-color: black;\n  border-bottom-width: 0;\n  background-color: transparent;\n\n"]], "abc");
var superStyle = retrieveStyle("abc");
generateStyle([["\n\n  right: 0;\n  display: none;\n  border-color: red;\n  border-left-width: 0;\n  \n"]], "def", superStyle);
renderStyles();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsiZ2VuZXJhdGVTdHlsZSIsInN0eWxlVXRpbGl0aWVzIiwicmV0cmlldmVTdHlsZSIsInJlbmRlclN0eWxlcyIsInN1cGVyU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7O0lBRVFBLGEsR0FBK0NDLGtCLENBQS9DRCxhO0lBQWVFLGEsR0FBZ0NELGtCLENBQWhDQyxhO0lBQWVDLFksR0FBaUJGLGtCLENBQWpCRSxZO0FBRXRDSCxhQUFhLENBQUMsQ0FBQyxxUkFBRCxDQUFELEVBZVIsS0FmUSxDQUFiO0FBaUJBLElBQU1JLFVBQVUsR0FBR0YsYUFBYSxDQUFDLEtBQUQsQ0FBaEM7QUFFQUYsYUFBYSxDQUFDLENBQUMsMEZBQUQsQ0FBRCxFQU9SLEtBUFEsRUFPREksVUFQQyxDQUFiO0FBU0FELFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHN0eWxlVXRpbGl0aWVzIGZyb20gXCIuL3V0aWxpdGllcy9zdHlsZXNcIjtcblxuY29uc3QgeyBnZW5lcmF0ZVN0eWxlLCByZXRyaWV2ZVN0eWxlLCByZW5kZXJTdHlsZXMgfSA9IHN0eWxlVXRpbGl0aWVzO1xuXG5nZW5lcmF0ZVN0eWxlKFtbYFxuXG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbmBdXSwgXCJhYmNcIik7XG5cbmNvbnN0IHN1cGVyU3R5bGUgPSByZXRyaWV2ZVN0eWxlKFwiYWJjXCIpO1xuXG5nZW5lcmF0ZVN0eWxlKFtbYFxuXG4gIHJpZ2h0OiAwO1xuICBkaXNwbGF5OiBub25lO1xuICBib3JkZXItY29sb3I6IHJlZDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gIFxuYF1dLCBcImRlZlwiLCBzdXBlclN0eWxlKTtcblxucmVuZGVyU3R5bGVzKCk7XG4iXX0=