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
            value: function fromNodeAndTokens(node1, tokens) {
                var mediaNodes = mediaQuery.execute(node1), array = mediaNodes.map(function(mediaNode) {
                    var node = mediaNode, media = _media.default.fromNodeAndTokens(node, tokens);
                    return media;
                }), medias = new Medias(array);
                return medias;
            }
        }
    ]);
    return Medias;
}();
exports.default = Medias;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9tZWRpYXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4vbWVkaWFcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBtZWRpYVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvc3R5bGVzaGVldC9tZWRpYVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICB1bnNoaWZ0KG1lZGlhcykge1xuICAgIG1lZGlhcy5mb3JFYWNoKChtZWRpYSkgPT4ge1xuICAgICAgdGhpcy5hcnJheS51bnNoaWZ0KG1lZGlhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvckVhY2goY2FsbGJhY2spIHtcbiAgICB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgYXNDU1MoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgY3NzID0gdGhpcy5hcnJheS5yZWR1Y2UoKGNzcywgbWVkaWEpID0+IHtcbiAgICAgIGNvbnN0IG1lZGlhQ1NTID0gbWVkaWEuYXNDU1MoY2xhc3NOYW1lKTtcblxuICAgICAgY3NzICs9IG1lZGlhQ1NTO1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IG1lZGlhTm9kZXMgPSBtZWRpYVF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBtZWRpYU5vZGVzLm1hcCgobWVkaWFOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gbWVkaWFOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIG1lZGlhID0gTWVkaWEuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIG1lZGlhO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1lZGlhcyA9IG5ldyBNZWRpYXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIG1lZGlhcztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIm1lZGlhUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiTWVkaWFzIiwiYXJyYXkiLCJ1bnNoaWZ0IiwibWVkaWFzIiwiZm9yRWFjaCIsIm1lZGlhIiwiY2FsbGJhY2siLCJhc0NTUyIsImNsYXNzTmFtZSIsImNzcyIsInJlZHVjZSIsIm1lZGlhQ1NTIiwiRU1QVFlfU1RSSU5HIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwibWVkaWFOb2RlcyIsImV4ZWN1dGUiLCJtYXAiLCJtZWRpYU5vZGUiLCJNZWRpYSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFXLENBQVgsU0FBVztBQUVmLEdBQVMsQ0FBVCxNQUFTO0FBRUUsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsR0FBSyxDQUFDQSxVQUFVLEdBQUdDLFNBQUssT0FBQ0MsY0FBYyxDQUFDLENBQW1CO0lBRXRDQyxNQUFNLGlCQUFaLFFBQVE7YUFBRkEsTUFBTSxDQUNiQyxLQUFLOztRQUNmLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLOzs7O1lBR3BCQyxHQUFPLEVBQVBBLENBQU87bUJBQVBBLFFBQVFDLENBQVJELE9BQU8sQ0FBQ0MsTUFBTSxFQUFFLENBQUM7O2dCQUNmQSxNQUFNLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDOzBCQUNwQkosS0FBSyxDQUFDQyxPQUFPLENBQUNHLEtBQUs7Z0JBQzFCLENBQUM7WUFDSCxDQUFDOzs7WUFFREQsR0FBTyxFQUFQQSxDQUFPO21CQUFQQSxRQUFRRSxDQUFSRixPQUFPLENBQUNFLFFBQVEsRUFBRSxDQUFDO2dCQUNqQixJQUFJLENBQUNMLEtBQUssQ0FBQ0csT0FBTyxDQUFDRSxRQUFRO1lBQzdCLENBQUM7OztZQUVEQyxHQUFLLEVBQUxBLENBQUs7bUJBQUxBLFFBQVEsQ0FBUkEsS0FBSyxDQUFDQyxTQUFTLEVBQUUsQ0FBQztnQkFDaEIsR0FBSyxDQUFDQyxJQUFHLEdBQUcsSUFBSSxDQUFDUixLQUFLLENBQUNTLE1BQU0sQ0FBQyxRQUFRLENBQVBELEdBQUcsRUFBRUosS0FBSyxFQUFLLENBQUM7b0JBQzdDLEdBQUssQ0FBQ00sUUFBUSxHQUFHTixLQUFLLENBQUNFLEtBQUssQ0FBQ0MsU0FBUztvQkFFdENDLEdBQUcsSUFBSUUsUUFBUTtvQkFFZixNQUFNLENBQUNGLEdBQUc7Z0JBQ1osQ0FBQyxFQUFFRyxVQUFZO2dCQUVmLE1BQU0sQ0FBQ0gsSUFBRztZQUNaLENBQUM7Ozs7WUFFTUksR0FBaUIsRUFBakJBLENBQWlCO21CQUF4QixRQUFRLENBQURBLGlCQUFpQixDQUFDQyxLQUFJLEVBQUVDLE1BQU0sRUFBRSxDQUFDO2dCQUN0QyxHQUFLLENBQUNDLFVBQVUsR0FBR25CLFVBQVUsQ0FBQ29CLE9BQU8sQ0FBQ0gsS0FBSSxHQUNwQ2IsS0FBSyxHQUFHZSxVQUFVLENBQUNFLEdBQUcsQ0FBQyxRQUFRLENBQVBDLFNBQVMsRUFBSyxDQUFDO29CQUNyQyxHQUFLLENBQUNMLElBQUksR0FBR0ssU0FBUyxFQUNoQmQsS0FBSyxHQUFHZSxNQUFLLFNBQUNQLGlCQUFpQixDQUFDQyxJQUFJLEVBQUVDLE1BQU07b0JBRWxELE1BQU0sQ0FBQ1YsS0FBSztnQkFDZCxDQUFDLEdBQ0RGLE1BQU0sR0FBRyxHQUFHLENBQUNILE1BQU0sQ0FBQ0MsS0FBSztnQkFFL0IsTUFBTSxDQUFDRSxNQUFNO1lBQ2YsQ0FBQzs7Ozs7a0JBdENrQkgsTUFBTSJ9