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
var Medias = /*#__PURE__*/ function() {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9tZWRpYXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4vbWVkaWFcIjtcblxuY29uc3QgbWVkaWFRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiL3N0eWxlc2hlZXQvbWVkaWFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgdW5zaGlmdChtZWRpYXMpIHtcbiAgICBtZWRpYXMuZm9yRWFjaCgobWVkaWEpID0+IHtcbiAgICAgIHRoaXMuYXJyYXkudW5zaGlmdChtZWRpYSk7XG4gICAgfSk7XG4gIH1cblxuICBmb3JFYWNoKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGFzQ1NTKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGNzcyA9IHRoaXMuYXJyYXkucmVkdWNlKChjc3MsIG1lZGlhKSA9PiB7XG4gICAgICBjb25zdCBtZWRpYUNTUyA9IG1lZGlhLmFzQ1NTKGNsYXNzTmFtZSk7XG5cbiAgICAgIGNzcyArPSBtZWRpYUNTUztcblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9LCBcIlwiKTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgbWVkaWFOb2RlcyA9IG1lZGlhUXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICBhcnJheSA9IG1lZGlhTm9kZXMubWFwKChtZWRpYU5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBtZWRpYU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgbWVkaWEgPSBNZWRpYS5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbWVkaWE7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWVkaWFzID0gbmV3IE1lZGlhcyhhcnJheSk7XG5cbiAgICByZXR1cm4gbWVkaWFzO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVSxHQUFXLENBQVgsU0FBVztBQUVmLEdBQVMsQ0FBVCxNQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLEdBQUssQ0FBQyxVQUFVLEdBSk0sU0FBVyxPQUlSLGNBQWMsRUFBQyxpQkFBbUI7SUFFdEMsTUFBTTthQUFOLE1BQU0sQ0FDYixLQUFLOzhCQURFLE1BQU07YUFFbEIsS0FBSyxHQUFHLEtBQUs7O2lCQUZELE1BQU07O1lBS3pCLEdBQU8sR0FBUCxPQUFPOzRCQUFQLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDZixNQUFNLENBQUMsT0FBTyxXQUFFLEtBQUssRUFBSyxDQUFDO3lCQUNwQixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUs7Z0JBQzFCLENBQUM7WUFDSCxDQUFDOzs7WUFFRCxHQUFPLEdBQVAsT0FBTzs0QkFBUCxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQ1osS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRO1lBQzdCLENBQUM7OztZQUVELEdBQUssR0FBTCxLQUFLOzRCQUFMLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDaEIsR0FBSyxDQUFDLEdBQUcsUUFBUSxLQUFLLENBQUMsTUFBTSxVQUFFLElBQUcsRUFBRSxLQUFLLEVBQUssQ0FBQztvQkFDN0MsR0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVM7b0JBRXRDLElBQUcsSUFBSSxRQUFROzJCQUVSLElBQUc7Z0JBQ1osQ0FBQzt1QkFFTSxHQUFHO1lBQ1osQ0FBQzs7OztZQUVNLEdBQWlCLEdBQWpCLGlCQUFpQjs0QkFBakIsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO2dCQUN0QyxHQUFLLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUNwQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEdBQUcsVUFBRSxTQUFTLEVBQUssQ0FBQztvQkFDckMsR0FBSyxDQUFDLEtBQUksR0FBRyxTQUFTLEVBQ2hCLEtBQUssR0FuQ0wsTUFBUyxTQW1DSyxpQkFBaUIsQ0FBQyxLQUFJLEVBQUUsTUFBTTsyQkFFM0MsS0FBSztnQkFDZCxDQUFDLEdBQ0QsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSzt1QkFFeEIsTUFBTTtZQUNmLENBQUM7OztXQXRDa0IsTUFBTTs7a0JBQU4sTUFBTSJ9