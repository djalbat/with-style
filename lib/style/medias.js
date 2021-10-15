"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamDom = require("occam-dom");
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
var mediaQuery = _occamDom.Query.fromExpression("/stylesheet/media");
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
                var css = this.array.reduce(function(css, media) {
                    var mediaCSS = media.asCSS(className);
                    css += mediaCSS;
                    return css;
                }, _constants.EMPTY_STRING);
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var mediaNodes = mediaQuery.execute(node), array = mediaNodes.map(function(mediaNode) {
                    var node1 = mediaNode, media = _media.default.fromNodeAndTokens(node1, tokens);
                    return media;
                }), medias = new Medias(array);
                return medias;
            }
        }
    ]);
    return Medias;
}();
exports.default = Medias;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9tZWRpYXMuanMiXSwibmFtZXMiOlsiUXVlcnkiLCJNZWRpYSIsIkVNUFRZX1NUUklORyIsIm1lZGlhUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIk1lZGlhcyIsImNvbnN0cnVjdG9yIiwiYXJyYXkiLCJ1bnNoaWZ0IiwibWVkaWFzIiwiZm9yRWFjaCIsIm1lZGlhIiwiY2FsbGJhY2siLCJhc0NTUyIsImNsYXNzTmFtZSIsImNzcyIsInJlZHVjZSIsIm1lZGlhQ1NTIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwibWVkaWFOb2RlcyIsImV4ZWN1dGUiLCJtYXAiLCJtZWRpYU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBVyxDQUFYLFNBQVc7QUFFZixHQUFTLENBQVQsTUFBUztBQUVFLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNDLEdBQUssQ0FBQyxVQUFVLEdBTk0sU0FBVyxPQU1SLGNBQWMsQ0FBQyxDQUFtQjtJQUV0QyxNQUFNLGlCQUFaLFFBQVE7YUFBRixNQUFNLENBQ2IsS0FBSzs4QkFERSxNQUFNO1FBRXZCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSzs7aUJBRkQsTUFBTTs7WUFLekIsR0FBTyxFQUFQLENBQU87bUJBQVAsUUFBUSxDQUFSLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7Z0JBQ2YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQVAsS0FBSyxFQUFLLENBQUM7MEJBQ3BCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSztnQkFDMUIsQ0FBQztZQUNILENBQUM7OztZQUVELEdBQU8sRUFBUCxDQUFPO21CQUFQLFFBQVEsQ0FBUixPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVE7WUFDN0IsQ0FBQzs7O1lBRUQsR0FBSyxFQUFMLENBQUs7bUJBQUwsUUFBUSxDQUFSLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDaEIsR0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQVAsR0FBRyxFQUFFLEtBQUssRUFBSyxDQUFDO29CQUM3QyxHQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUztvQkFFdEMsR0FBRyxJQUFJLFFBQVE7b0JBRWYsTUFBTSxDQUFDLEdBQUc7Z0JBQ1osQ0FBQyxFQTFCd0IsVUFBYztnQkE0QnZDLE1BQU0sQ0FBQyxHQUFHO1lBQ1osQ0FBQzs7OztZQUVNLEdBQWlCLEVBQWpCLENBQWlCO21CQUF4QixRQUFRLENBQUQsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO2dCQUN0QyxHQUFLLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUNwQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQVAsU0FBUyxFQUFLLENBQUM7b0JBQ3JDLEdBQUssQ0FBQyxLQUFJLEdBQUcsU0FBUyxFQUNoQixLQUFLLEdBckNMLE1BQVMsU0FxQ0ssaUJBQWlCLENBQUMsS0FBSSxFQUFFLE1BQU07b0JBRWxELE1BQU0sQ0FBQyxLQUFLO2dCQUNkLENBQUMsR0FDRCxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUUvQixNQUFNLENBQUMsTUFBTTtZQUNmLENBQUM7OztXQXRDa0IsTUFBTTs7a0JBQU4sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IE1lZGlhIGZyb20gXCIuL21lZGlhXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgbWVkaWFRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiL3N0eWxlc2hlZXQvbWVkaWFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgdW5zaGlmdChtZWRpYXMpIHtcbiAgICBtZWRpYXMuZm9yRWFjaCgobWVkaWEpID0+IHtcbiAgICAgIHRoaXMuYXJyYXkudW5zaGlmdChtZWRpYSk7XG4gICAgfSk7XG4gIH1cblxuICBmb3JFYWNoKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGFzQ1NTKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGNzcyA9IHRoaXMuYXJyYXkucmVkdWNlKChjc3MsIG1lZGlhKSA9PiB7XG4gICAgICBjb25zdCBtZWRpYUNTUyA9IG1lZGlhLmFzQ1NTKGNsYXNzTmFtZSk7XG5cbiAgICAgIGNzcyArPSBtZWRpYUNTUztcblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBtZWRpYU5vZGVzID0gbWVkaWFRdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICAgIGFycmF5ID0gbWVkaWFOb2Rlcy5tYXAoKG1lZGlhTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG1lZGlhTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBtZWRpYSA9IE1lZGlhLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBtZWRpYTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtZWRpYXMgPSBuZXcgTWVkaWFzKGFycmF5KTtcblxuICAgIHJldHVybiBtZWRpYXM7XG4gIH1cbn1cbiJdfQ==