"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Keyframess;
    }
});
var _occamquery = require("occam-query");
var _keyframes = /*#__PURE__*/ _interop_require_default(require("./keyframes"));
var _constants = require("../constants");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var keyframesQuery = _occamquery.Query.fromExpressionString("/stylesheet/keyframes");
var Keyframess = /*#__PURE__*/ function() {
    function Keyframess(array) {
        _class_call_check(this, Keyframess);
        this.array = array;
    }
    _create_class(Keyframess, [
        {
            key: "unshift",
            value: function unshift(keyframess) {
            ///
            }
        },
        {
            key: "forEach",
            value: function forEach(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "asCSS",
            value: function asCSS(className, indent) {
                var css = this.array.reduce(function(css, keyframes) {
                    var keyframesCSS = keyframes.asCSS(indent);
                    css += keyframesCSS;
                    return css;
                }, _constants.EMPTY_STRING);
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var keyframesNodes = keyframesQuery.execute(node), array = keyframesNodes.map(function(keyframesNode) {
                    var _$node = keyframesNode, keyframes = _keyframes.default.fromNodeAndTokens(_$node, tokens);
                    return keyframes;
                }), keyframess = new Keyframess(array);
                return keyframess;
            }
        }
    ]);
    return Keyframess;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9rZXlmcmFtZXNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1xdWVyeVwiO1xuXG5pbXBvcnQgS2V5ZnJhbWVzIGZyb20gXCIuL2tleWZyYW1lc1wiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IGtleWZyYW1lc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvc3R5bGVzaGVldC9rZXlmcmFtZXNcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleWZyYW1lc3Mge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIHVuc2hpZnQoa2V5ZnJhbWVzcykge1xuICAgIC8vL1xuICB9XG5cbiAgZm9yRWFjaChjYWxsYmFjaykge1xuICAgIHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUsIGluZGVudCkge1xuICAgIGNvbnN0IGNzcyA9IHRoaXMuYXJyYXkucmVkdWNlKChjc3MsIGtleWZyYW1lcykgPT4ge1xuICAgICAgY29uc3Qga2V5ZnJhbWVzQ1NTID0ga2V5ZnJhbWVzLmFzQ1NTKGluZGVudCk7XG5cbiAgICAgIGNzcyArPSBrZXlmcmFtZXNDU1M7XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3Qga2V5ZnJhbWVzTm9kZXMgPSBrZXlmcmFtZXNRdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICAgIGFycmF5ID0ga2V5ZnJhbWVzTm9kZXMubWFwKChrZXlmcmFtZXNOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0ga2V5ZnJhbWVzTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBrZXlmcmFtZXMgPSBLZXlmcmFtZXMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGtleWZyYW1lcztcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBrZXlmcmFtZXNzID0gbmV3IEtleWZyYW1lc3MoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGtleWZyYW1lc3M7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJLZXlmcmFtZXNzIiwia2V5ZnJhbWVzUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uU3RyaW5nIiwiYXJyYXkiLCJ1bnNoaWZ0Iiwia2V5ZnJhbWVzcyIsImZvckVhY2giLCJjYWxsYmFjayIsImFzQ1NTIiwiY2xhc3NOYW1lIiwiaW5kZW50IiwiY3NzIiwicmVkdWNlIiwia2V5ZnJhbWVzIiwia2V5ZnJhbWVzQ1NTIiwiRU1QVFlfU1RSSU5HIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwia2V5ZnJhbWVzTm9kZXMiLCJleGVjdXRlIiwibWFwIiwia2V5ZnJhbWVzTm9kZSIsIktleWZyYW1lcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7MEJBUkM7Z0VBRUE7eUJBRU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTUMsaUJBQWlCQyxpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQztBQUVuQyxJQUFBLEFBQU1ILDJCQUFOO2FBQU1BLFdBQ1BJLEtBQUs7Z0NBREVKO1FBRWpCLElBQUksQ0FBQ0ksS0FBSyxHQUFHQTs7a0JBRklKOztZQUtuQkssS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLFVBQVU7WUFDaEIsR0FBRztZQUNMOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLFFBQVE7Z0JBQ2QsSUFBSSxDQUFDSixLQUFLLENBQUNHLE9BQU8sQ0FBQ0M7WUFDckI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsU0FBUyxFQUFFQyxNQUFNO2dCQUNyQixJQUFNQyxNQUFNLElBQUksQ0FBQ1IsS0FBSyxDQUFDUyxNQUFNLENBQUMsU0FBQ0QsS0FBS0U7b0JBQ2xDLElBQU1DLGVBQWVELFVBQVVMLEtBQUssQ0FBQ0U7b0JBRXJDQyxPQUFPRztvQkFFUCxPQUFPSDtnQkFDVCxHQUFHSSx1QkFBWTtnQkFFZixPQUFPSjtZQUNUOzs7O1lBRU9LLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsSUFBSSxFQUFFQyxNQUFNO2dCQUNuQyxJQUFNQyxpQkFBaUJuQixlQUFlb0IsT0FBTyxDQUFDSCxPQUN4Q2QsUUFBUWdCLGVBQWVFLEdBQUcsQ0FBQyxTQUFDQztvQkFDMUIsSUFBTUwsU0FBT0ssZUFDUFQsWUFBWVUsa0JBQVMsQ0FBQ1AsaUJBQWlCLENBQUNDLFFBQU1DO29CQUVwRCxPQUFPTDtnQkFDVCxJQUNBUixhQUFhLElBakNGTixXQWlDaUJJO2dCQUVsQyxPQUFPRTtZQUNUOzs7V0FwQ21CTiJ9