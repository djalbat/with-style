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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9tZWRpYXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4vbWVkaWFcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBtZWRpYVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvc3R5bGVzaGVldC9tZWRpYVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICB1bnNoaWZ0KG1lZGlhcykge1xuICAgIG1lZGlhcy5mb3JFYWNoKChtZWRpYSkgPT4ge1xuICAgICAgdGhpcy5hcnJheS51bnNoaWZ0KG1lZGlhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvckVhY2goY2FsbGJhY2spIHtcbiAgICB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgYXNDU1MoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgY3NzID0gdGhpcy5hcnJheS5yZWR1Y2UoKGNzcywgbWVkaWEpID0+IHtcbiAgICAgIGNvbnN0IG1lZGlhQ1NTID0gbWVkaWEuYXNDU1MoY2xhc3NOYW1lKTtcblxuICAgICAgY3NzICs9IG1lZGlhQ1NTO1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IG1lZGlhTm9kZXMgPSBtZWRpYVF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBtZWRpYU5vZGVzLm1hcCgobWVkaWFOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gbWVkaWFOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIG1lZGlhID0gTWVkaWEuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIG1lZGlhO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1lZGlhcyA9IG5ldyBNZWRpYXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIG1lZGlhcztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIm1lZGlhUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiTWVkaWFzIiwiYXJyYXkiLCJ1bnNoaWZ0IiwibWVkaWFzIiwiZm9yRWFjaCIsIm1lZGlhIiwiY2FsbGJhY2siLCJhc0NTUyIsImNsYXNzTmFtZSIsImNzcyIsInJlZHVjZSIsIm1lZGlhQ1NTIiwiRU1QVFlfU1RSSU5HIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwibWVkaWFOb2RlcyIsImV4ZWN1dGUiLCJtYXAiLCJtZWRpYU5vZGUiLCJNZWRpYSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVTLElBQUEsU0FBVyxXQUFYLFdBQVcsQ0FBQTtBQUVmLElBQUEsTUFBUyxrQ0FBVCxTQUFTLEVBQUE7QUFFRSxJQUFBLFVBQWMsV0FBZCxjQUFjLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsSUFBTUEsVUFBVSxHQUFHQyxTQUFLLE1BQUEsQ0FBQ0MsY0FBYyxDQUFDLG1CQUFtQixDQUFDLEFBQUM7QUFFOUMsSUFBQSxBQUFNQyxNQUFNLGlCQUFaO2FBQU1BLE1BQU0sQ0FDYkMsS0FBSzs7UUFDZixJQUFJLENBQUNBLEtBQUssR0FBR0EsS0FBSyxDQUFDOzs7O1lBR3JCQyxHQUFPLEVBQVBBLFNBQU87bUJBQVBBLFNBQUFBLE9BQU8sQ0FBQ0MsTUFBTSxFQUFFOztnQkFDZEEsTUFBTSxDQUFDQyxPQUFPLENBQUMsU0FBQ0MsS0FBSyxFQUFLO29CQUN4QixNQUFLSixLQUFLLENBQUNDLE9BQU8sQ0FBQ0csS0FBSyxDQUFDLENBQUM7aUJBQzNCLENBQUMsQ0FBQzthQUNKOzs7WUFFREQsR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLENBQUNFLFFBQVEsRUFBRTtnQkFDaEIsSUFBSSxDQUFDTCxLQUFLLENBQUNHLE9BQU8sQ0FBQ0UsUUFBUSxDQUFDLENBQUM7YUFDOUI7OztZQUVEQyxHQUFLLEVBQUxBLE9BQUs7bUJBQUxBLFNBQUFBLEtBQUssQ0FBQ0MsU0FBUyxFQUFFO2dCQUNmLElBQU1DLElBQUcsR0FBRyxJQUFJLENBQUNSLEtBQUssQ0FBQ1MsTUFBTSxDQUFDLFNBQUNELEdBQUcsRUFBRUosS0FBSyxFQUFLO29CQUM1QyxJQUFNTSxRQUFRLEdBQUdOLEtBQUssQ0FBQ0UsS0FBSyxDQUFDQyxTQUFTLENBQUMsQUFBQztvQkFFeENDLEdBQUcsSUFBSUUsUUFBUSxDQUFDO29CQUVoQixPQUFPRixHQUFHLENBQUM7aUJBQ1osRUFBRUcsVUFBWSxhQUFBLENBQUMsQUFBQztnQkFFakIsT0FBT0gsSUFBRyxDQUFDO2FBQ1o7Ozs7WUFFTUksR0FBaUIsRUFBakJBLG1CQUFpQjttQkFBeEIsU0FBT0EsaUJBQWlCLENBQUNDLElBQUksRUFBRUMsTUFBTSxFQUFFO2dCQUNyQyxJQUFNQyxVQUFVLEdBQUduQixVQUFVLENBQUNvQixPQUFPLENBQUNILElBQUksQ0FBQyxFQUNyQ2IsS0FBSyxHQUFHZSxVQUFVLENBQUNFLEdBQUcsQ0FBQyxTQUFDQyxTQUFTLEVBQUs7b0JBQ3BDLElBQU1MLE1BQUksR0FBR0ssU0FBUyxFQUNoQmQsS0FBSyxHQUFHZSxNQUFLLFFBQUEsQ0FBQ1AsaUJBQWlCLENBQUNDLE1BQUksRUFBRUMsTUFBTSxDQUFDLEFBQUM7b0JBRXBELE9BQU9WLEtBQUssQ0FBQztpQkFDZCxDQUFDLEVBQ0ZGLE1BQU0sR0FBRyxJQUFJSCxNQUFNLENBQUNDLEtBQUssQ0FBQyxBQUFDO2dCQUVqQyxPQUFPRSxNQUFNLENBQUM7YUFDZjs7OztDQUNGLEVBQUE7a0JBdkNvQkgsTUFBTSJ9