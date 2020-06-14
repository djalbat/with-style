"use strict";

var _index = require("./index");

///
var generateStyle = _index.stylesUtilities.generateStyle,
    retrieveStyle = _index.stylesUtilities.retrieveStyle,
    renderStyles = _index.stylesUtilities.renderStyles;
generateStyle([["\n\n  bottom: 0;\n  width: 2rem; \n  height: 2rem;\n  outline: none;\n  display: inline-block;\n  position: absolute;\n  font-size: 1.2rem;\n  border-width: 1px;\n  border-style: solid;\n  border-color: black;\n  border-bottom-width: 0;\n  background-color: transparent;\n\n"]], "abc");
var superStyle = retrieveStyle("abc");
generateStyle([["\n\n  right: 0;\n  display: none;\n  border-color: red;\n  border-left-width: 0;\n  \n"]], "def", superStyle);
renderStyles();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsiZ2VuZXJhdGVTdHlsZSIsInN0eWxlc1V0aWxpdGllcyIsInJldHJpZXZlU3R5bGUiLCJyZW5kZXJTdHlsZXMiLCJzdXBlclN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFBMkM7SUFFbkNBLGEsR0FBK0NDLHNCLENBQS9DRCxhO0lBQWVFLGEsR0FBZ0NELHNCLENBQWhDQyxhO0lBQWVDLFksR0FBaUJGLHNCLENBQWpCRSxZO0FBRXRDSCxhQUFhLENBQUMsQ0FBQyxzUkFBRCxDQUFELEVBZVIsS0FmUSxDQUFiO0FBaUJBLElBQU1JLFVBQVUsR0FBR0YsYUFBYSxDQUFDLEtBQUQsQ0FBaEM7QUFFQUYsYUFBYSxDQUFDLENBQUMsMEZBQUQsQ0FBRCxFQU9SLEtBUFEsRUFPREksVUFQQyxDQUFiO0FBU0FELFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3R5bGVzVXRpbGl0aWVzIH0gZnJvbSBcIi4vaW5kZXhcIjsgLy8vXG5cbmNvbnN0IHsgZ2VuZXJhdGVTdHlsZSwgcmV0cmlldmVTdHlsZSwgcmVuZGVyU3R5bGVzIH0gPSBzdHlsZXNVdGlsaXRpZXM7XG5cbmdlbmVyYXRlU3R5bGUoW1tgXG5cbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMnJlbTsgXG4gIGhlaWdodDogMnJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbmBdXSwgXCJhYmNcIik7XG5cbmNvbnN0IHN1cGVyU3R5bGUgPSByZXRyaWV2ZVN0eWxlKFwiYWJjXCIpO1xuXG5nZW5lcmF0ZVN0eWxlKFtbYFxuXG4gIHJpZ2h0OiAwO1xuICBkaXNwbGF5OiBub25lO1xuICBib3JkZXItY29sb3I6IHJlZDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gIFxuYF1dLCBcImRlZlwiLCBzdXBlclN0eWxlKTtcblxucmVuZGVyU3R5bGVzKCk7XG4iXX0=