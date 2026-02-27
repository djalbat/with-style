"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CSSParser;
    }
});
const _occamparsers = require("occam-parsers");
const _bnf = /*#__PURE__*/ _interop_require_default(require("./bnf"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class CSSParser extends _occamparsers.CommonParser {
    static bnf = _bnf.default;
    static fromNothing() {
        return _occamparsers.CommonParser.fromNothing(CSSParser);
    }
    static fromBNF(bnf) {
        return _occamparsers.CommonParser.fromBNF(CSSParser, bnf);
    }
    static fromRules(rules) {
        return _occamparsers.CommonParser.fromRules(CSSParser, rules);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jc3MvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb21tb25QYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDU1NQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgYm5mID0gYm5mO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbW1vblBhcnNlci5mcm9tTm90aGluZyhDU1NQYXJzZXIpOyB9XG5cbiAgc3RhdGljIGZyb21CTkYoYm5mKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbUJORihDU1NQYXJzZXIsIGJuZik7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbVJ1bGVzKENTU1BhcnNlciwgcnVsZXMpOyB9XG59XG4iXSwibmFtZXMiOlsiQ1NTUGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwiYm5mIiwiZnJvbU5vdGhpbmciLCJmcm9tQk5GIiwiZnJvbVJ1bGVzIiwicnVsZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7OEJBSlE7NERBRWI7Ozs7OztBQUVELE1BQU1BLGtCQUFrQkMsMEJBQVk7SUFDakQsT0FBT0MsTUFBTUEsWUFBRyxDQUFDO0lBRWpCLE9BQU9DLGNBQWM7UUFBRSxPQUFPRiwwQkFBWSxDQUFDRSxXQUFXLENBQUNIO0lBQVk7SUFFbkUsT0FBT0ksUUFBUUYsR0FBRyxFQUFFO1FBQUUsT0FBT0QsMEJBQVksQ0FBQ0csT0FBTyxDQUFDSixXQUFXRTtJQUFNO0lBRW5FLE9BQU9HLFVBQVVDLEtBQUssRUFBRTtRQUFFLE9BQU9MLDBCQUFZLENBQUNJLFNBQVMsQ0FBQ0wsV0FBV007SUFBUTtBQUM3RSJ9