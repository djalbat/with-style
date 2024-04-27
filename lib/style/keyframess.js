"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamQuery = require("occam-query");
var _keyframes = _interopRequireDefault(require("./keyframes"));
var _constants = require("../constants");
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var keyframesQuery = _occamQuery.Query.fromExpression("/stylesheet/keyframes");
var Keyframess = /*#__PURE__*/ function() {
    function Keyframess(array) {
        _classCallCheck(this, Keyframess);
        this.array = array;
    }
    _createClass(Keyframess, [
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
                var css1 = this.array.reduce(function(css, keyframes) {
                    var keyframesCSS = keyframes.asCSS(indent);
                    css += keyframesCSS;
                    return css;
                }, _constants.EMPTY_STRING);
                return css1;
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
exports.default = Keyframess;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9rZXlmcmFtZXNzLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1xdWVyeVwiO1xuXG5pbXBvcnQgS2V5ZnJhbWVzIGZyb20gXCIuL2tleWZyYW1lc1wiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IGtleWZyYW1lc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvc3R5bGVzaGVldC9rZXlmcmFtZXNcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleWZyYW1lc3Mge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIHVuc2hpZnQoa2V5ZnJhbWVzcykge1xuICAgIC8vL1xuICB9XG5cbiAgZm9yRWFjaChjYWxsYmFjaykge1xuICAgIHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUsIGluZGVudCkge1xuICAgIGNvbnN0IGNzcyA9IHRoaXMuYXJyYXkucmVkdWNlKChjc3MsIGtleWZyYW1lcykgPT4ge1xuICAgICAgY29uc3Qga2V5ZnJhbWVzQ1NTID0ga2V5ZnJhbWVzLmFzQ1NTKGluZGVudCk7XG5cbiAgICAgIGNzcyArPSBrZXlmcmFtZXNDU1M7XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3Qga2V5ZnJhbWVzTm9kZXMgPSBrZXlmcmFtZXNRdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICAgIGFycmF5ID0ga2V5ZnJhbWVzTm9kZXMubWFwKChrZXlmcmFtZXNOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0ga2V5ZnJhbWVzTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBrZXlmcmFtZXMgPSBLZXlmcmFtZXMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGtleWZyYW1lcztcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBrZXlmcmFtZXNzID0gbmV3IEtleWZyYW1lc3MoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGtleWZyYW1lc3M7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsia2V5ZnJhbWVzUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiS2V5ZnJhbWVzcyIsImFycmF5IiwidW5zaGlmdCIsImtleWZyYW1lc3MiLCJmb3JFYWNoIiwiY2FsbGJhY2siLCJhc0NTUyIsImNsYXNzTmFtZSIsImluZGVudCIsImNzcyIsInJlZHVjZSIsImtleWZyYW1lcyIsImtleWZyYW1lc0NTUyIsIkVNUFRZX1NUUklORyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsImtleWZyYW1lc05vZGVzIiwiZXhlY3V0ZSIsIm1hcCIsImtleWZyYW1lc05vZGUiLCJLZXlmcmFtZXMiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFUyxJQUFBLFdBQWEsV0FBYixhQUFhLENBQUE7QUFFYixJQUFBLFVBQWEsa0NBQWIsYUFBYSxFQUFBO0FBRU4sSUFBQSxVQUFjLFdBQWQsY0FBYyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNDLElBQU1BLGNBQWMsR0FBR0MsV0FBSyxNQUFBLENBQUNDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxBQUFDO0FBRXRELElBQUEsQUFBTUMsVUFBVSxpQkFBaEI7YUFBTUEsVUFBVSxDQUNqQkMsS0FBSzs7UUFDZixJQUFJLENBQUNBLEtBQUssR0FBR0EsS0FBSyxDQUFDOzs7O1lBR3JCQyxHQUFPLEVBQVBBLFNBQU87bUJBQVBBLFNBQUFBLE9BQU8sQ0FBQ0MsVUFBVSxFQUFFO1lBQ2xCLEdBQUc7YUFDSjs7O1lBRURDLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxDQUFDQyxRQUFRLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQ0osS0FBSyxDQUFDRyxPQUFPLENBQUNDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCOzs7WUFFREMsR0FBSyxFQUFMQSxPQUFLO21CQUFMQSxTQUFBQSxLQUFLLENBQUNDLFNBQVMsRUFBRUMsTUFBTSxFQUFFO2dCQUN2QixJQUFNQyxJQUFHLEdBQUcsSUFBSSxDQUFDUixLQUFLLENBQUNTLE1BQU0sQ0FBQyxTQUFDRCxHQUFHLEVBQUVFLFNBQVMsRUFBSztvQkFDaEQsSUFBTUMsWUFBWSxHQUFHRCxTQUFTLENBQUNMLEtBQUssQ0FBQ0UsTUFBTSxDQUFDLEFBQUM7b0JBRTdDQyxHQUFHLElBQUlHLFlBQVksQ0FBQztvQkFFcEIsT0FBT0gsR0FBRyxDQUFDO2lCQUNaLEVBQUVJLFVBQVksYUFBQSxDQUFDLEFBQUM7Z0JBRWpCLE9BQU9KLElBQUcsQ0FBQzthQUNaOzs7O1lBRU1LLEdBQWlCLEVBQWpCQSxtQkFBaUI7bUJBQXhCLFNBQU9BLGlCQUFpQixDQUFDQyxJQUFJLEVBQUVDLE1BQU0sRUFBRTtnQkFDckMsSUFBTUMsY0FBYyxHQUFHcEIsY0FBYyxDQUFDcUIsT0FBTyxDQUFDSCxJQUFJLENBQUMsRUFDN0NkLEtBQUssR0FBR2dCLGNBQWMsQ0FBQ0UsR0FBRyxDQUFDLFNBQUNDLGFBQWEsRUFBSztvQkFDNUMsSUFBTUwsTUFBSSxHQUFHSyxhQUFhLEVBQ3BCVCxTQUFTLEdBQUdVLFVBQVMsUUFBQSxDQUFDUCxpQkFBaUIsQ0FBQ0MsTUFBSSxFQUFFQyxNQUFNLENBQUMsQUFBQztvQkFFNUQsT0FBT0wsU0FBUyxDQUFDO2lCQUNsQixDQUFDLEVBQ0ZSLFVBQVUsR0FBRyxJQUFJSCxVQUFVLENBQUNDLEtBQUssQ0FBQyxBQUFDO2dCQUV6QyxPQUFPRSxVQUFVLENBQUM7YUFDbkI7Ozs7Q0FDRixFQUFBO2tCQXJDb0JILFVBQVUifQ==