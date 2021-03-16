"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamDom = require("occam-dom");
var _media = _interopRequireDefault(require("./media"));
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
var Medias = function() {
    function Medias(array) {
        _classCallCheck(this, Medias);
        this.array = array;
    }
    _createClass(Medias, [
        {
            key: "unshift",
            value: function unshift(medias) {
                medias.forEach((function(media) {
                    this.array.unshift(media);
                }).bind(this));
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
                var css = this.array.reduce(function(css1, media) {
                    var mediaCSS = media.asCSS(className);
                    css1 += mediaCSS;
                    return css1;
                }, "");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9tZWRpYXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4vbWVkaWFcIjtcblxuY29uc3QgbWVkaWFRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiL3N0eWxlc2hlZXQvbWVkaWFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgdW5zaGlmdChtZWRpYXMpIHtcbiAgICBtZWRpYXMuZm9yRWFjaCgobWVkaWEpID0+IHtcbiAgICAgIHRoaXMuYXJyYXkudW5zaGlmdChtZWRpYSk7XG4gICAgfSk7XG4gIH1cblxuICBmb3JFYWNoKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGFzQ1NTKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGNzcyA9IHRoaXMuYXJyYXkucmVkdWNlKChjc3MsIG1lZGlhKSA9PiB7XG4gICAgICBjb25zdCBtZWRpYUNTUyA9IG1lZGlhLmFzQ1NTKGNsYXNzTmFtZSk7XG5cbiAgICAgIGNzcyArPSBtZWRpYUNTUztcblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9LCBcIlwiKTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgbWVkaWFOb2RlcyA9IG1lZGlhUXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICBhcnJheSA9IG1lZGlhTm9kZXMubWFwKChtZWRpYU5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBtZWRpYU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgbWVkaWEgPSBNZWRpYS5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbWVkaWE7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWVkaWFzID0gbmV3IE1lZGlhcyhhcnJheSk7XG5cbiAgICByZXR1cm4gbWVkaWFzO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7Ozs7SUFFQSxTQUFBO0lBRUEsTUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVBLFVBQUEsR0FKQSxTQUFBLE9BSUEsY0FBQSxFQUFBLGlCQUFBO0lBRUEsTUFBQTthQUFBLE1BQUEsQ0FDQSxLQUFBOzhCQURBLE1BQUE7YUFFQSxLQUFBLEdBQUEsS0FBQTs7aUJBRkEsTUFBQTs7QUFLQSxlQUFBLEdBQUEsT0FBQTs0QkFBQSxPQUFBLENBQUEsTUFBQTtBQUNBLHNCQUFBLENBQUEsT0FBQSxXQUFBLEtBQUE7eUJBQ0EsS0FBQSxDQUFBLE9BQUEsQ0FBQSxLQUFBOzs7OztBQUlBLGVBQUEsR0FBQSxPQUFBOzRCQUFBLE9BQUEsQ0FBQSxRQUFBO3FCQUNBLEtBQUEsQ0FBQSxPQUFBLENBQUEsUUFBQTs7OztBQUdBLGVBQUEsR0FBQSxLQUFBOzRCQUFBLEtBQUEsQ0FBQSxTQUFBO29CQUNBLEdBQUEsUUFBQSxLQUFBLENBQUEsTUFBQSxVQUFBLElBQUEsRUFBQSxLQUFBO3dCQUNBLFFBQUEsR0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLFNBQUE7QUFFQSx3QkFBQSxJQUFBLFFBQUE7MkJBRUEsSUFBQTs7dUJBR0EsR0FBQTs7Ozs7QUFHQSxlQUFBLEdBQUEsaUJBQUE7NEJBQUEsaUJBQUEsQ0FBQSxJQUFBLEVBQUEsTUFBQTtvQkFDQSxVQUFBLEdBQUEsVUFBQSxDQUFBLE9BQUEsQ0FBQSxJQUFBLEdBQ0EsS0FBQSxHQUFBLFVBQUEsQ0FBQSxHQUFBLFVBQUEsU0FBQTt3QkFDQSxLQUFBLEdBQUEsU0FBQSxFQUNBLEtBQUEsR0FuQ0EsTUFBQSxTQW1DQSxpQkFBQSxDQUFBLEtBQUEsRUFBQSxNQUFBOzJCQUVBLEtBQUE7b0JBRUEsTUFBQSxPQUFBLE1BQUEsQ0FBQSxLQUFBO3VCQUVBLE1BQUE7Ozs7V0FyQ0EsTUFBQTs7a0JBQUEsTUFBQSJ9