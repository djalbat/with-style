"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Medias;
    }
});
var _occamquery = require("occam-query");
var _media = /*#__PURE__*/ _interop_require_default(require("./media"));
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
var mediaQuery = _occamquery.Query.fromExpressionString("/stylesheet/media");
var Medias = /*#__PURE__*/ function() {
    function Medias(array) {
        _class_call_check(this, Medias);
        this.array = array;
    }
    _create_class(Medias, [
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
                var css = this.array.reduce(function(css, media) {
                    var mediaCSS = media.asCSS(className, indent);
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
                    var _$node = mediaNode, media = _media.default.fromNodeAndTokens(_$node, tokens);
                    return media;
                }), medias = new Medias(array);
                return medias;
            }
        }
    ]);
    return Medias;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9tZWRpYXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5cbmltcG9ydCBNZWRpYSBmcm9tIFwiLi9tZWRpYVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IG1lZGlhUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi9zdHlsZXNoZWV0L21lZGlhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIHVuc2hpZnQobWVkaWFzKSB7XG4gICAgbWVkaWFzLmZvckVhY2goKG1lZGlhKSA9PiB7XG4gICAgICB0aGlzLmFycmF5LnVuc2hpZnQobWVkaWEpO1xuICAgIH0pO1xuICB9XG5cbiAgZm9yRWFjaChjYWxsYmFjaykge1xuICAgIHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUsIGluZGVudCkge1xuICAgIGNvbnN0IGNzcyA9IHRoaXMuYXJyYXkucmVkdWNlKChjc3MsIG1lZGlhKSA9PiB7XG4gICAgICBjb25zdCBtZWRpYUNTUyA9IG1lZGlhLmFzQ1NTKGNsYXNzTmFtZSwgaW5kZW50KTtcblxuICAgICAgY3NzICs9IG1lZGlhQ1NTO1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IG1lZGlhTm9kZXMgPSBtZWRpYVF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBtZWRpYU5vZGVzLm1hcCgobWVkaWFOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gbWVkaWFOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIG1lZGlhID0gTWVkaWEuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIG1lZGlhO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1lZGlhcyA9IG5ldyBNZWRpYXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIG1lZGlhcztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1lZGlhcyIsIm1lZGlhUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uU3RyaW5nIiwiYXJyYXkiLCJ1bnNoaWZ0IiwibWVkaWFzIiwiZm9yRWFjaCIsIm1lZGlhIiwiY2FsbGJhY2siLCJhc0NTUyIsImNsYXNzTmFtZSIsImluZGVudCIsImNzcyIsInJlZHVjZSIsIm1lZGlhQ1NTIiwiRU1QVFlfU1RSSU5HIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwibWVkaWFOb2RlcyIsImV4ZWN1dGUiLCJtYXAiLCJtZWRpYU5vZGUiLCJNZWRpYSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OzswQkFSQzs0REFFSjt5QkFFVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFNQyxhQUFhQyxpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQztBQUUvQixJQUFBLEFBQU1ILHVCQUFELEFBQUw7YUFBTUEsT0FDUEksS0FBSztnQ0FERUo7UUFFakIsSUFBSSxDQUFDSSxLQUFLLEdBQUdBOztrQkFGSUo7O1lBS25CSyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsTUFBTTs7Z0JBQ1pBLE9BQU9DLE9BQU8sQ0FBQyxTQUFDQztvQkFDZCxNQUFLSixLQUFLLENBQUNDLE9BQU8sQ0FBQ0c7Z0JBQ3JCO1lBQ0Y7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUUsUUFBUTtnQkFDZCxJQUFJLENBQUNMLEtBQUssQ0FBQ0csT0FBTyxDQUFDRTtZQUNyQjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxTQUFTLEVBQUVDLE1BQU07Z0JBQ3JCLElBQU1DLE1BQU0sSUFBSSxDQUFDVCxLQUFLLENBQUNVLE1BQU0sQ0FBQyxTQUFDRCxLQUFLTDtvQkFDbEMsSUFBTU8sV0FBV1AsTUFBTUUsS0FBSyxDQUFDQyxXQUFXQztvQkFFeENDLE9BQU9FO29CQUVQLE9BQU9GO2dCQUNULEdBQUdHLHVCQUFZO2dCQUVmLE9BQU9IO1lBQ1Q7Ozs7WUFFT0ksS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU07Z0JBQ25DLElBQU1DLGFBQWFuQixXQUFXb0IsT0FBTyxDQUFDSCxPQUNoQ2QsUUFBUWdCLFdBQVdFLEdBQUcsQ0FBQyxTQUFDQztvQkFDdEIsSUFBTUwsU0FBT0ssV0FDUGYsUUFBUWdCLGNBQUssQ0FBQ1AsaUJBQWlCLENBQUNDLFFBQU1DO29CQUU1QyxPQUFPWDtnQkFDVCxJQUNBRixTQUFTLElBbkNFTixPQW1DU0k7Z0JBRTFCLE9BQU9FO1lBQ1Q7OztXQXRDbUJOIn0=