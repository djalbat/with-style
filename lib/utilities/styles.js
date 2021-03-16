"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("../style"));
var _lexer = _interopRequireDefault(require("../css/lexer"));
var _parser = _interopRequireDefault(require("../css/parser"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var cssLexer = _lexer.default.fromNothing(), cssParser = _parser.default.fromNothing();
if (!globalThis.styleMap) {
    globalThis.styleMap = {
    };
}
var styleMap = globalThis.styleMap;
function renderStyle(style) {
    var headDOMElement = document.querySelector("head"), styleDOMElement = document.createElement("style"), innerHTML = "\n        \n".concat(style);
    Object.assign(styleDOMElement, {
        innerHTML: innerHTML
    });
    headDOMElement.appendChild(styleDOMElement);
}
function renderStyles() {
    var stylesCSS = retrieveStylesCSS(), style = stylesCSS; ///
    renderStyle(style);
}
function generateStyle(args, className, param) {
    var superStyle = param === void 0 ? null : param;
    var strings = args.shift(), content = strings.reduce(function(content1, string, index) {
        var arg = args[index];
        content1 = arg !== undefined ? "".concat(content1).concat(string).concat(arg) : "".concat(content1).concat(string);
        return content1;
    }, ""), tokens = cssLexer.tokenise(content), node = cssParser.parse(tokens), style = _style.default.fromNodeAndTokens(node, tokens);
    if (superStyle !== null) {
        style.extends(superStyle);
    }
    styleMap[className] = style;
}
function retrieveStyle(className) {
    var style = styleMap[className] || null;
    return style;
}
var _default = {
    renderStyle: renderStyle,
    renderStyles: renderStyles,
    generateStyle: generateStyle,
    retrieveStyle: retrieveStyle
};
exports.default = _default;
function retrieveStylesCSS() {
    var classNames = Object.keys(styleMap), stylesCSS = classNames.reduce(function(stylesCSS1, className) {
        var style = retrieveStyle(className), styleCSS = style.asCSS(className);
        stylesCSS1 += styleCSS;
        return stylesCSS1;
    }, "");
    return stylesCSS;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3R5bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uL3N0eWxlXCI7XG5pbXBvcnQgQ1NTTGV4ZXIgZnJvbSBcIi4uL2Nzcy9sZXhlclwiO1xuaW1wb3J0IENTU1BhcnNlciBmcm9tIFwiLi4vY3NzL3BhcnNlclwiO1xuXG5jb25zdCBjc3NMZXhlciA9IENTU0xleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBjc3NQYXJzZXIgPSBDU1NQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuaWYgKCFnbG9iYWxUaGlzLnN0eWxlTWFwKSB7XG4gIGdsb2JhbFRoaXMuc3R5bGVNYXAgPSB7fTtcbn1cblxuY29uc3QgeyBzdHlsZU1hcCB9ID0gZ2xvYmFsVGhpcztcblxuZnVuY3Rpb24gcmVuZGVyU3R5bGUoc3R5bGUpIHtcbiAgY29uc3QgaGVhZERPTUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZFwiKSxcbiAgICAgICAgc3R5bGVET01FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpLFxuICAgICAgICBpbm5lckhUTUwgPSBgXG4gICAgICAgIFxuJHtzdHlsZX1gO1xuXG4gIE9iamVjdC5hc3NpZ24oc3R5bGVET01FbGVtZW50LCB7XG4gICAgaW5uZXJIVE1MXG4gIH0pO1xuXG4gIGhlYWRET01FbGVtZW50LmFwcGVuZENoaWxkKHN0eWxlRE9NRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclN0eWxlcygpIHtcbiAgY29uc3Qgc3R5bGVzQ1NTID0gcmV0cmlldmVTdHlsZXNDU1MoKSxcbiAgICAgICAgc3R5bGUgPSBzdHlsZXNDU1M7ICAvLy9cblxuICByZW5kZXJTdHlsZShzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlU3R5bGUoYXJncywgY2xhc3NOYW1lLCBzdXBlclN0eWxlID0gbnVsbCkge1xuICBjb25zdCBzdHJpbmdzID0gYXJncy5zaGlmdCgpLFx0Ly8vXG4gICAgICAgIGNvbnRlbnQgPSBzdHJpbmdzLnJlZHVjZSgoY29udGVudCwgc3RyaW5nLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFyZyA9IGFyZ3NbaW5kZXhdO1xuXG4gICAgICAgICAgY29udGVudCA9IChhcmcgIT09IHVuZGVmaW5lZCkgP1xuICAgICAgICAgICAgICAgICAgICAgIGAke2NvbnRlbnR9JHtzdHJpbmd9JHthcmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtjb250ZW50fSR7c3RyaW5nfWA7XG5cbiAgICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgICAgfSwgXCJcIiksXG4gICAgICAgIHRva2VucyA9IGNzc0xleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICBub2RlID0gY3NzUGFyc2VyLnBhcnNlKHRva2VucyksXG4gICAgICAgIHN0eWxlID0gU3R5bGUuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICBpZiAoc3VwZXJTdHlsZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHN0eWxlLmV4dGVuZHMoc3VwZXJTdHlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdHlsZU1hcFtjbGFzc05hbWVdID0gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlU3R5bGUoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IHN0eWxlID0gc3R5bGVNYXBbY2xhc3NOYW1lXSB8fCBudWxsO1xuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICByZW5kZXJTdHlsZSxcbiAgcmVuZGVyU3R5bGVzLFxuICBnZW5lcmF0ZVN0eWxlLFxuICByZXRyaWV2ZVN0eWxlXG59O1xuXG5mdW5jdGlvbiByZXRyaWV2ZVN0eWxlc0NTUygpIHtcbiAgY29uc3QgY2xhc3NOYW1lcyA9IE9iamVjdC5rZXlzKHN0eWxlTWFwKSxcbiAgICAgICAgc3R5bGVzQ1NTID0gY2xhc3NOYW1lcy5yZWR1Y2UoKHN0eWxlc0NTUywgY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3R5bGUgPSByZXRyaWV2ZVN0eWxlKGNsYXNzTmFtZSksXG4gICAgICAgICAgICAgICAgc3R5bGVDU1MgPSBzdHlsZS5hc0NTUyhjbGFzc05hbWUpO1xuXG4gICAgICAgICAgc3R5bGVzQ1NTICs9IHN0eWxlQ1NTO1xuXG4gICAgICAgICAgcmV0dXJuIHN0eWxlc0NTUztcbiAgICAgICAgfSwgXCJcIik7XG5cbiAgcmV0dXJuIHN0eWxlc0NTUztcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7OztJQUVBLE1BQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTs7Ozs7O0lBRUEsUUFBQSxHQUhBLE1BQUEsU0FHQSxXQUFBLElBQ0EsU0FBQSxHQUhBLE9BQUEsU0FHQSxXQUFBO0tBRUEsVUFBQSxDQUFBLFFBQUE7QUFDQSxjQUFBLENBQUEsUUFBQTs7O0lBR0EsUUFBQSxHQUFBLFVBQUEsQ0FBQSxRQUFBO1NBRUEsV0FBQSxDQUFBLEtBQUE7UUFDQSxjQUFBLEdBQUEsUUFBQSxDQUFBLGFBQUEsRUFBQSxJQUFBLElBQ0EsZUFBQSxHQUFBLFFBQUEsQ0FBQSxhQUFBLEVBQUEsS0FBQSxJQUNBLFNBQUEsSUFBQSxZQUVBLEVBQUEsTUFBQSxDQUFBLEtBQUE7QUFFQSxVQUFBLENBQUEsTUFBQSxDQUFBLGVBQUE7QUFDQSxpQkFBQSxFQUFBLFNBQUE7O0FBR0Esa0JBQUEsQ0FBQSxXQUFBLENBQUEsZUFBQTs7U0FHQSxZQUFBO1FBQ0EsU0FBQSxHQUFBLGlCQUFBLElBQ0EsS0FBQSxHQUFBLFNBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQUVBLGVBQUEsQ0FBQSxLQUFBOztTQUdBLGFBQUEsQ0FBQSxJQUFBLEVBQUEsU0FBQSxFQUFBLEtBQUE7UUFBQSxVQUFBLEdBQUEsS0FBQSxjQUFBLElBQUEsR0FBQSxLQUFBO1FBQ0EsT0FBQSxHQUFBLElBQUEsQ0FBQSxLQUFBLElBQ0EsT0FBQSxHQUFBLE9BQUEsQ0FBQSxNQUFBLFVBQUEsUUFBQSxFQUFBLE1BQUEsRUFBQSxLQUFBO1lBQ0EsR0FBQSxHQUFBLElBQUEsQ0FBQSxLQUFBO0FBRUEsZ0JBQUEsR0FBQSxHQUFBLEtBQUEsU0FBQSxNQUNBLE1BQUEsQ0FBQSxRQUFBLEVBQUEsTUFBQSxDQUFBLE1BQUEsRUFBQSxNQUFBLENBQUEsR0FBQSxPQUNBLE1BQUEsQ0FBQSxRQUFBLEVBQUEsTUFBQSxDQUFBLE1BQUE7ZUFFQSxRQUFBO1lBRUEsTUFBQSxHQUFBLFFBQUEsQ0FBQSxRQUFBLENBQUEsT0FBQSxHQUNBLElBQUEsR0FBQSxTQUFBLENBQUEsS0FBQSxDQUFBLE1BQUEsR0FDQSxLQUFBLEdBL0NBLE1BQUEsU0ErQ0EsaUJBQUEsQ0FBQSxJQUFBLEVBQUEsTUFBQTtRQUVBLFVBQUEsS0FBQSxJQUFBO0FBQ0EsYUFBQSxDQUFBLE9BQUEsQ0FBQSxVQUFBOztBQUdBLFlBQUEsQ0FBQSxTQUFBLElBQUEsS0FBQTs7U0FHQSxhQUFBLENBQUEsU0FBQTtRQUNBLEtBQUEsR0FBQSxRQUFBLENBQUEsU0FBQSxLQUFBLElBQUE7V0FFQSxLQUFBOzs7QUFJQSxlQUFBLEVBQUEsV0FBQTtBQUNBLGdCQUFBLEVBQUEsWUFBQTtBQUNBLGlCQUFBLEVBQUEsYUFBQTtBQUNBLGlCQUFBLEVBQUEsYUFBQTs7O1NBR0EsaUJBQUE7UUFDQSxVQUFBLEdBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQSxRQUFBLEdBQ0EsU0FBQSxHQUFBLFVBQUEsQ0FBQSxNQUFBLFVBQUEsVUFBQSxFQUFBLFNBQUE7WUFDQSxLQUFBLEdBQUEsYUFBQSxDQUFBLFNBQUEsR0FDQSxRQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxTQUFBO0FBRUEsa0JBQUEsSUFBQSxRQUFBO2VBRUEsVUFBQTs7V0FHQSxTQUFBIn0=