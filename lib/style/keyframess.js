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
var keyframesQuery = _occamquery.Query.fromExpression("/stylesheet/keyframes");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9rZXlmcmFtZXNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1xdWVyeVwiO1xuXG5pbXBvcnQgS2V5ZnJhbWVzIGZyb20gXCIuL2tleWZyYW1lc1wiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IGtleWZyYW1lc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvc3R5bGVzaGVldC9rZXlmcmFtZXNcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleWZyYW1lc3Mge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIHVuc2hpZnQoa2V5ZnJhbWVzcykge1xuICAgIC8vL1xuICB9XG5cbiAgZm9yRWFjaChjYWxsYmFjaykge1xuICAgIHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUsIGluZGVudCkge1xuICAgIGNvbnN0IGNzcyA9IHRoaXMuYXJyYXkucmVkdWNlKChjc3MsIGtleWZyYW1lcykgPT4ge1xuICAgICAgY29uc3Qga2V5ZnJhbWVzQ1NTID0ga2V5ZnJhbWVzLmFzQ1NTKGluZGVudCk7XG5cbiAgICAgIGNzcyArPSBrZXlmcmFtZXNDU1M7XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3Qga2V5ZnJhbWVzTm9kZXMgPSBrZXlmcmFtZXNRdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICAgIGFycmF5ID0ga2V5ZnJhbWVzTm9kZXMubWFwKChrZXlmcmFtZXNOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0ga2V5ZnJhbWVzTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBrZXlmcmFtZXMgPSBLZXlmcmFtZXMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGtleWZyYW1lcztcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBrZXlmcmFtZXNzID0gbmV3IEtleWZyYW1lc3MoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGtleWZyYW1lc3M7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJLZXlmcmFtZXNzIiwia2V5ZnJhbWVzUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiYXJyYXkiLCJ1bnNoaWZ0Iiwia2V5ZnJhbWVzcyIsImZvckVhY2giLCJjYWxsYmFjayIsImFzQ1NTIiwiY2xhc3NOYW1lIiwiaW5kZW50IiwiY3NzIiwicmVkdWNlIiwia2V5ZnJhbWVzIiwia2V5ZnJhbWVzQ1NTIiwiRU1QVFlfU1RSSU5HIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwia2V5ZnJhbWVzTm9kZXMiLCJleGVjdXRlIiwibWFwIiwia2V5ZnJhbWVzTm9kZSIsIktleWZyYW1lcyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OzswQkFSQztnRUFFQTt5QkFFTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFNQyxpQkFBaUJDLGlCQUFLLENBQUNDLGNBQWMsQ0FBQztBQUU3QixJQUFBLEFBQU1ILDJCQUFELEFBQUw7YUFBTUEsV0FDUEksS0FBSztnQ0FERUo7UUFFakIsSUFBSSxDQUFDSSxLQUFLLEdBQUdBOztrQkFGSUo7O1lBS25CSyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsVUFBVTtZQUNoQixHQUFHO1lBQ0w7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsUUFBUTtnQkFDZCxJQUFJLENBQUNKLEtBQUssQ0FBQ0csT0FBTyxDQUFDQztZQUNyQjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxTQUFTLEVBQUVDLE1BQU07Z0JBQ3JCLElBQU1DLE1BQU0sSUFBSSxDQUFDUixLQUFLLENBQUNTLE1BQU0sQ0FBQyxTQUFDRCxLQUFLRTtvQkFDbEMsSUFBTUMsZUFBZUQsVUFBVUwsS0FBSyxDQUFDRTtvQkFFckNDLE9BQU9HO29CQUVQLE9BQU9IO2dCQUNULEdBQUdJLHVCQUFZO2dCQUVmLE9BQU9KO1lBQ1Q7Ozs7WUFFT0ssS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU07Z0JBQ25DLElBQU1DLGlCQUFpQm5CLGVBQWVvQixPQUFPLENBQUNILE9BQ3hDZCxRQUFRZ0IsZUFBZUUsR0FBRyxDQUFDLFNBQUNDO29CQUMxQixJQUFNTCxTQUFPSyxlQUNQVCxZQUFZVSxrQkFBUyxDQUFDUCxpQkFBaUIsQ0FBQ0MsUUFBTUM7b0JBRXBELE9BQU9MO2dCQUNULElBQ0FSLGFBQWEsSUFqQ0ZOLFdBaUNpQkk7Z0JBRWxDLE9BQU9FO1lBQ1Q7OztXQXBDbUJOIn0=