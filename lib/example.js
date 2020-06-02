"use strict";

var _index = require("./index");

///
var generateStyle = _index.styleUtilities.generateStyle,
    retrieveStyle = _index.styleUtilities.retrieveStyle,
    renderStyles = _index.styleUtilities.renderStyles;
generateStyle([["\n\n  bottom: 0;\n  width: 2rem;\n  height: 2rem;\n  outline: none;\n  display: inline-block;\n  position: absolute;\n  font-size: 1.2rem;\n  border-width: 1px;\n  border-style: solid;\n  border-color: black;\n  border-bottom-width: 0;\n  background-color: transparent;\n\n"]], "abc");
var superStyle = retrieveStyle("abc");
generateStyle([["\n\n  right: 0;\n  display: none;\n  border-color: red;\n  border-left-width: 0;\n  \n"]], "def", superStyle);
renderStyles();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsiZ2VuZXJhdGVTdHlsZSIsInN0eWxlVXRpbGl0aWVzIiwicmV0cmlldmVTdHlsZSIsInJlbmRlclN0eWxlcyIsInN1cGVyU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUEwQztJQUVsQ0EsYSxHQUErQ0MscUIsQ0FBL0NELGE7SUFBZUUsYSxHQUFnQ0QscUIsQ0FBaENDLGE7SUFBZUMsWSxHQUFpQkYscUIsQ0FBakJFLFk7QUFFdENILGFBQWEsQ0FBQyxDQUFDLHFSQUFELENBQUQsRUFlUixLQWZRLENBQWI7QUFpQkEsSUFBTUksVUFBVSxHQUFHRixhQUFhLENBQUMsS0FBRCxDQUFoQztBQUVBRixhQUFhLENBQUMsQ0FBQywwRkFBRCxDQUFELEVBT1IsS0FQUSxFQU9ESSxVQVBDLENBQWI7QUFTQUQsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdHlsZVV0aWxpdGllcyB9IGZyb20gXCIuL2luZGV4XCI7IC8vL1xuXG5jb25zdCB7IGdlbmVyYXRlU3R5bGUsIHJldHJpZXZlU3R5bGUsIHJlbmRlclN0eWxlcyB9ID0gc3R5bGVVdGlsaXRpZXM7XG5cbmdlbmVyYXRlU3R5bGUoW1tgXG5cbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuYF1dLCBcImFiY1wiKTtcblxuY29uc3Qgc3VwZXJTdHlsZSA9IHJldHJpZXZlU3R5bGUoXCJhYmNcIik7XG5cbmdlbmVyYXRlU3R5bGUoW1tgXG5cbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogcmVkO1xuICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgXG5gXV0sIFwiZGVmXCIsIHN1cGVyU3R5bGUpO1xuXG5yZW5kZXJTdHlsZXMoKTtcbiJdfQ==