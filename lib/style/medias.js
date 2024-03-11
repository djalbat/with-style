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
            value: function asCSS(className, indent) {
                var css1 = this.array.reduce(function(css, media) {
                    var mediaCSS = media.asCSS(className, indent);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9tZWRpYXMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5cbmltcG9ydCBNZWRpYSBmcm9tIFwiLi9tZWRpYVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IG1lZGlhUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi9zdHlsZXNoZWV0L21lZGlhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIHVuc2hpZnQobWVkaWFzKSB7XG4gICAgbWVkaWFzLmZvckVhY2goKG1lZGlhKSA9PiB7XG4gICAgICB0aGlzLmFycmF5LnVuc2hpZnQobWVkaWEpO1xuICAgIH0pO1xuICB9XG5cbiAgZm9yRWFjaChjYWxsYmFjaykge1xuICAgIHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUsIGluZGVudCkge1xuICAgIGNvbnN0IGNzcyA9IHRoaXMuYXJyYXkucmVkdWNlKChjc3MsIG1lZGlhKSA9PiB7XG4gICAgICBjb25zdCBtZWRpYUNTUyA9IG1lZGlhLmFzQ1NTKGNsYXNzTmFtZSwgaW5kZW50KTtcblxuICAgICAgY3NzICs9IG1lZGlhQ1NTO1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IG1lZGlhTm9kZXMgPSBtZWRpYVF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBtZWRpYU5vZGVzLm1hcCgobWVkaWFOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gbWVkaWFOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIG1lZGlhID0gTWVkaWEuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIG1lZGlhO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1lZGlhcyA9IG5ldyBNZWRpYXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIG1lZGlhcztcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJtZWRpYVF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIk1lZGlhcyIsImFycmF5IiwidW5zaGlmdCIsIm1lZGlhcyIsImZvckVhY2giLCJtZWRpYSIsImNhbGxiYWNrIiwiYXNDU1MiLCJjbGFzc05hbWUiLCJpbmRlbnQiLCJjc3MiLCJyZWR1Y2UiLCJtZWRpYUNTUyIsIkVNUFRZX1NUUklORyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsIm1lZGlhTm9kZXMiLCJleGVjdXRlIiwibWFwIiwibWVkaWFOb2RlIiwiTWVkaWEiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFUyxJQUFBLFdBQWEsV0FBYixhQUFhLENBQUE7QUFFakIsSUFBQSxNQUFTLGtDQUFULFNBQVMsRUFBQTtBQUVFLElBQUEsVUFBYyxXQUFkLGNBQWMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQyxJQUFNQSxVQUFVLEdBQUdDLFdBQUssTUFBQSxDQUFDQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQUFBQztBQUU5QyxJQUFBLEFBQU1DLE1BQU0saUJBQVo7YUFBTUEsTUFBTSxDQUNiQyxLQUFLOztRQUNmLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLLENBQUM7Ozs7WUFHckJDLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxDQUFDQyxNQUFNLEVBQUU7O2dCQUNkQSxNQUFNLENBQUNDLE9BQU8sQ0FBQyxTQUFDQyxLQUFLLEVBQUs7b0JBQ3hCLE1BQUtKLEtBQUssQ0FBQ0MsT0FBTyxDQUFDRyxLQUFLLENBQUMsQ0FBQztpQkFDM0IsQ0FBQyxDQUFDO2FBQ0o7OztZQUVERCxHQUFPLEVBQVBBLFNBQU87bUJBQVBBLFNBQUFBLE9BQU8sQ0FBQ0UsUUFBUSxFQUFFO2dCQUNoQixJQUFJLENBQUNMLEtBQUssQ0FBQ0csT0FBTyxDQUFDRSxRQUFRLENBQUMsQ0FBQzthQUM5Qjs7O1lBRURDLEdBQUssRUFBTEEsT0FBSzttQkFBTEEsU0FBQUEsS0FBSyxDQUFDQyxTQUFTLEVBQUVDLE1BQU0sRUFBRTtnQkFDdkIsSUFBTUMsSUFBRyxHQUFHLElBQUksQ0FBQ1QsS0FBSyxDQUFDVSxNQUFNLENBQUMsU0FBQ0QsR0FBRyxFQUFFTCxLQUFLLEVBQUs7b0JBQzVDLElBQU1PLFFBQVEsR0FBR1AsS0FBSyxDQUFDRSxLQUFLLENBQUNDLFNBQVMsRUFBRUMsTUFBTSxDQUFDLEFBQUM7b0JBRWhEQyxHQUFHLElBQUlFLFFBQVEsQ0FBQztvQkFFaEIsT0FBT0YsR0FBRyxDQUFDO2lCQUNaLEVBQUVHLFVBQVksYUFBQSxDQUFDLEFBQUM7Z0JBRWpCLE9BQU9ILElBQUcsQ0FBQzthQUNaOzs7O1lBRU1JLEdBQWlCLEVBQWpCQSxtQkFBaUI7bUJBQXhCLFNBQU9BLGlCQUFpQixDQUFDQyxJQUFJLEVBQUVDLE1BQU0sRUFBRTtnQkFDckMsSUFBTUMsVUFBVSxHQUFHcEIsVUFBVSxDQUFDcUIsT0FBTyxDQUFDSCxJQUFJLENBQUMsRUFDckNkLEtBQUssR0FBR2dCLFVBQVUsQ0FBQ0UsR0FBRyxDQUFDLFNBQUNDLFNBQVMsRUFBSztvQkFDcEMsSUFBTUwsTUFBSSxHQUFHSyxTQUFTLEVBQ2hCZixLQUFLLEdBQUdnQixNQUFLLFFBQUEsQ0FBQ1AsaUJBQWlCLENBQUNDLE1BQUksRUFBRUMsTUFBTSxDQUFDLEFBQUM7b0JBRXBELE9BQU9YLEtBQUssQ0FBQztpQkFDZCxDQUFDLEVBQ0ZGLE1BQU0sR0FBRyxJQUFJSCxNQUFNLENBQUNDLEtBQUssQ0FBQyxBQUFDO2dCQUVqQyxPQUFPRSxNQUFNLENBQUM7YUFDZjs7OztDQUNGLEVBQUE7a0JBdkNvQkgsTUFBTSJ9