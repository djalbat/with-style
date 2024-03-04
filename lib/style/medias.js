"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamQuery = require("occam-query");
var _media = _interopRequireDefault(require("./media"));
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
var mediaQuery = _occamQuery.Query.fromExpression("/stylesheet/media");
var Medias = /*#__PURE__*/ function() {
    function Medias(array) {
        _classCallCheck(this, Medias);
        this.array = array;
    }
    _createClass(Medias, [
        {
            key: "unshift",
            value: function unshift(medias) {
                var _this = this;
                medias.forEach(function(media) {
                    _this.array.unshift(media);
                });
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
            value: function asCSS(className) {
                var css1 = this.array.reduce(function(css, media) {
                    var mediaCSS = media.asCSS(className);
                    css += mediaCSS;
                    return css;
                }, _constants.EMPTY_STRING);
                return css1;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var mediaNodes = mediaQuery.execute(node), array = mediaNodes.map(function(mediaNode) {
                    var _$node = mediaNode, media = _media.default.fromNodeAndTokens(_$node, tokens);
                    return media;
                }), medias = new Medias(array);
                return medias;
            }
        }
    ]);
    return Medias;
}();
exports.default = Medias;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9tZWRpYXMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5cbmltcG9ydCBNZWRpYSBmcm9tIFwiLi9tZWRpYVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IG1lZGlhUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi9zdHlsZXNoZWV0L21lZGlhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIHVuc2hpZnQobWVkaWFzKSB7XG4gICAgbWVkaWFzLmZvckVhY2goKG1lZGlhKSA9PiB7XG4gICAgICB0aGlzLmFycmF5LnVuc2hpZnQobWVkaWEpO1xuICAgIH0pO1xuICB9XG5cbiAgZm9yRWFjaChjYWxsYmFjaykge1xuICAgIHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBjc3MgPSB0aGlzLmFycmF5LnJlZHVjZSgoY3NzLCBtZWRpYSkgPT4ge1xuICAgICAgY29uc3QgbWVkaWFDU1MgPSBtZWRpYS5hc0NTUyhjbGFzc05hbWUpO1xuXG4gICAgICBjc3MgKz0gbWVkaWFDU1M7XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgbWVkaWFOb2RlcyA9IG1lZGlhUXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICBhcnJheSA9IG1lZGlhTm9kZXMubWFwKChtZWRpYU5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBtZWRpYU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgbWVkaWEgPSBNZWRpYS5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbWVkaWE7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWVkaWFzID0gbmV3IE1lZGlhcyhhcnJheSk7XG5cbiAgICByZXR1cm4gbWVkaWFzO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIm1lZGlhUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiTWVkaWFzIiwiYXJyYXkiLCJ1bnNoaWZ0IiwibWVkaWFzIiwiZm9yRWFjaCIsIm1lZGlhIiwiY2FsbGJhY2siLCJhc0NTUyIsImNsYXNzTmFtZSIsImNzcyIsInJlZHVjZSIsIm1lZGlhQ1NTIiwiRU1QVFlfU1RSSU5HIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwibWVkaWFOb2RlcyIsImV4ZWN1dGUiLCJtYXAiLCJtZWRpYU5vZGUiLCJNZWRpYSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVTLElBQUEsV0FBYSxXQUFiLGFBQWEsQ0FBQTtBQUVqQixJQUFBLE1BQVMsa0NBQVQsU0FBUyxFQUFBO0FBRUUsSUFBQSxVQUFjLFdBQWQsY0FBYyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNDLElBQU1BLFVBQVUsR0FBR0MsV0FBSyxNQUFBLENBQUNDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxBQUFDO0FBRTlDLElBQUEsQUFBTUMsTUFBTSxpQkFBWjthQUFNQSxNQUFNLENBQ2JDLEtBQUs7O1FBQ2YsSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUssQ0FBQzs7OztZQUdyQkMsR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLENBQUNDLE1BQU0sRUFBRTs7Z0JBQ2RBLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLFNBQUNDLEtBQUssRUFBSztvQkFDeEIsTUFBS0osS0FBSyxDQUFDQyxPQUFPLENBQUNHLEtBQUssQ0FBQyxDQUFDO2lCQUMzQixDQUFDLENBQUM7YUFDSjs7O1lBRURELEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxDQUFDRSxRQUFRLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQ0wsS0FBSyxDQUFDRyxPQUFPLENBQUNFLFFBQVEsQ0FBQyxDQUFDO2FBQzlCOzs7WUFFREMsR0FBSyxFQUFMQSxPQUFLO21CQUFMQSxTQUFBQSxLQUFLLENBQUNDLFNBQVMsRUFBRTtnQkFDZixJQUFNQyxJQUFHLEdBQUcsSUFBSSxDQUFDUixLQUFLLENBQUNTLE1BQU0sQ0FBQyxTQUFDRCxHQUFHLEVBQUVKLEtBQUssRUFBSztvQkFDNUMsSUFBTU0sUUFBUSxHQUFHTixLQUFLLENBQUNFLEtBQUssQ0FBQ0MsU0FBUyxDQUFDLEFBQUM7b0JBRXhDQyxHQUFHLElBQUlFLFFBQVEsQ0FBQztvQkFFaEIsT0FBT0YsR0FBRyxDQUFDO2lCQUNaLEVBQUVHLFVBQVksYUFBQSxDQUFDLEFBQUM7Z0JBRWpCLE9BQU9ILElBQUcsQ0FBQzthQUNaOzs7O1lBRU1JLEdBQWlCLEVBQWpCQSxtQkFBaUI7bUJBQXhCLFNBQU9BLGlCQUFpQixDQUFDQyxJQUFJLEVBQUVDLE1BQU0sRUFBRTtnQkFDckMsSUFBTUMsVUFBVSxHQUFHbkIsVUFBVSxDQUFDb0IsT0FBTyxDQUFDSCxJQUFJLENBQUMsRUFDckNiLEtBQUssR0FBR2UsVUFBVSxDQUFDRSxHQUFHLENBQUMsU0FBQ0MsU0FBUyxFQUFLO29CQUNwQyxJQUFNTCxNQUFJLEdBQUdLLFNBQVMsRUFDaEJkLEtBQUssR0FBR2UsTUFBSyxRQUFBLENBQUNQLGlCQUFpQixDQUFDQyxNQUFJLEVBQUVDLE1BQU0sQ0FBQyxBQUFDO29CQUVwRCxPQUFPVixLQUFLLENBQUM7aUJBQ2QsQ0FBQyxFQUNGRixNQUFNLEdBQUcsSUFBSUgsTUFBTSxDQUFDQyxLQUFLLENBQUMsQUFBQztnQkFFakMsT0FBT0UsTUFBTSxDQUFDO2FBQ2Y7Ozs7Q0FDRixFQUFBO2tCQXZDb0JILE1BQU0ifQ==