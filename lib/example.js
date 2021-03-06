"use strict";
var _index = require("./index");
var generateStyle = _index.stylesUtilities.generateStyle, retrieveStyle = _index.stylesUtilities.retrieveStyle, renderStyles = _index.stylesUtilities.renderStyles;
var firaCodeFontMixin = "\n\n  font-size: 1.3rem;\n  line-height: 20px;\n  font-family: \"Fira Code\";\n  text-rendering: optimizeLegibility; /* Force ligatures for Webkit, Blink, Gecko */\n  font-feature-settings: \"calt\" 1;  /* Enable ligatures for IE 10+, Edge */\n\n";
var monospaceFontMixin = "\n\n  font-size: 1.3rem;\n  line-height: 20px;\n  font-family: monospace;\n   \n";
generateStyle([
    [
        "\n\n  display: none;\n  \n  .active {\n    display: block;\n  }\n\n"
    ]
], "abc");
var superStyle = retrieveStyle("abc");
generateStyle([
    [
        "\n\n  color: transparent;\n  width: 100%;\n  height: 100%;\n  cursor: auto;\n  resize: none;\n  outline: none;\n  tab-size: 2;\n  border-top: none;\n  overflow-x: scroll;\n  overflow-y: scroll;\n  caret-color: transparent;\n  white-space: pre;\n  overflow-wrap: normal;\n  background-color: transparent;\n\n  ::selection { background-color: transparent; }\n  \n  ".concat(monospaceFontMixin, "\n\n  .fira-code {\n\n    ").concat(firaCodeFontMixin, "\n    \n  }\n  \n")
    ]
], "def", superStyle);
renderStyles();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdHlsZXNVdGlsaXRpZXMgfSBmcm9tIFwiLi9pbmRleFwiOyAvLy9cblxuY29uc3QgeyBnZW5lcmF0ZVN0eWxlLCByZXRyaWV2ZVN0eWxlLCByZW5kZXJTdHlsZXMgfSA9IHN0eWxlc1V0aWxpdGllcztcblxuY29uc3QgZmlyYUNvZGVGb250TWl4aW4gPSBgXG5cbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LWZhbWlseTogXCJGaXJhIENvZGVcIjtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTsgLyogRm9yY2UgbGlnYXR1cmVzIGZvciBXZWJraXQsIEJsaW5rLCBHZWNrbyAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwiY2FsdFwiIDE7ICAvKiBFbmFibGUgbGlnYXR1cmVzIGZvciBJRSAxMCssIEVkZ2UgKi9cblxuYDtcblxuY29uc3QgbW9ub3NwYWNlRm9udE1peGluID0gYFxuXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgIFxuYDtcblxuZ2VuZXJhdGVTdHlsZShbW2BcblxuICBkaXNwbGF5OiBub25lO1xuICBcbiAgLmFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuYF1dLCBcImFiY1wiKTtcblxuY29uc3Qgc3VwZXJTdHlsZSA9IHJldHJpZXZlU3R5bGUoXCJhYmNcIik7XG5cbmdlbmVyYXRlU3R5bGUoW1tgXG5cbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IGF1dG87XG4gIHJlc2l6ZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGFiLXNpemU6IDI7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBjYXJldC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIG92ZXJmbG93LXdyYXA6IG5vcm1hbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgOjpzZWxlY3Rpb24geyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICBcbiAgJHttb25vc3BhY2VGb250TWl4aW59XG5cbiAgLmZpcmEtY29kZSB7XG5cbiAgICAke2ZpcmFDb2RlRm9udE1peGlufVxuICAgIFxuICB9XG4gIFxuYF1dLCBcImRlZlwiLCBzdXBlclN0eWxlKTtcblxucmVuZGVyU3R5bGVzKCk7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTtJQUVBLE1BQUE7SUFFQSxhQUFBLEdBRkEsTUFBQSxpQkFFQSxhQUFBLEVBQUEsYUFBQSxHQUZBLE1BQUEsaUJBRUEsYUFBQSxFQUFBLFlBQUEsR0FGQSxNQUFBLGlCQUVBLFlBQUE7SUFFQSxpQkFBQSxJQUFBLHNQQVFBO0lBRUEsa0JBQUEsSUFBQSxnRkFNQTtBQUVBLGFBQUE7O1NBQUEsbUVBUUE7O0lBQUEsR0FBQTtJQUVBLFVBQUEsR0FBQSxhQUFBLEVBQUEsR0FBQTtBQUVBLGFBQUE7O1NBQUEsMldBbUJBLEVBSUEsTUFBQSxDQUpBLGtCQUFBLEdBQUEsMEJBSUEsR0FBQSxNQUlBLENBSkEsaUJBQUEsR0FBQSxpQkFJQTs7SUFBQSxHQUFBLEdBQUEsVUFBQTtBQUVBLFlBQUEifQ==