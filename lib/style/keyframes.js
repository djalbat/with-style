"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamQuery = require("occam-query");
var _keyframe = _interopRequireDefault(require("./keyframe"));
var _constants = require("../constants");
var _content = require("../utilities/content");
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
var keyframeQuery = _occamQuery.Query.fromExpression("/keyframes/keyframe"), identifierQuery = _occamQuery.Query.fromExpression("/keyframes/@identifier");
var Keyframes = /*#__PURE__*/ function() {
    function Keyframes(array, identifier) {
        _classCallCheck(this, Keyframes);
        this.array = array;
        this.identifier = identifier;
    }
    _createClass(Keyframes, [
        {
            key: "getIdentifier",
            value: function getIdentifier() {
                return this.identifier;
            }
        },
        {
            key: "asCSS",
            value: function asCSS(indent) {
                indent = indent + _constants.TWO_SPACES;
                var keyframesCSS1 = this.array.reduce(function(keyframesCSS, keyframe) {
                    var keyframeCSS = keyframe.asCSS(indent);
                    keyframesCSS += keyframeCSS;
                    return keyframesCSS;
                }, _constants.EMPTY_STRING), css = "@keyframes ".concat(this.identifier, " {\n").concat(keyframesCSS1, "}\n\n");
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var keyframeNodes = keyframeQuery.execute(node), array = keyframeNodes.map(function(keyframeNode) {
                    var _$node = keyframeNode, keyframe = _keyframe.default.fromNodeAndTokens(_$node, tokens);
                    return keyframe;
                }), identifierContent = (0, _content).contentFromQueryNodeAndTokens(identifierQuery, node, tokens), identifier = identifierContent, keyframes = new Keyframes(array, identifier);
                return keyframes;
            }
        }
    ]);
    return Keyframes;
}();
exports.default = Keyframes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9rZXlmcmFtZXMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5cbmltcG9ydCBLZXlmcmFtZSBmcm9tIFwiLi9rZXlmcmFtZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIFRXT19TUEFDRVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGVudFwiO1xuXG5jb25zdCBrZXlmcmFtZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIva2V5ZnJhbWVzL2tleWZyYW1lXCIpLFxuICAgICAgaWRlbnRpZmllclF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIva2V5ZnJhbWVzL0BpZGVudGlmaWVyXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlmcmFtZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSwgaWRlbnRpZmllcikge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0SWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5pZGVudGlmaWVyO1xuICB9XG5cbiAgYXNDU1MoaW5kZW50KSB7XG4gICAgaW5kZW50ID0gaW5kZW50ICsgVFdPX1NQQUNFUztcblxuICAgIGNvbnN0IGtleWZyYW1lc0NTUyA9IHRoaXMuYXJyYXkucmVkdWNlKChrZXlmcmFtZXNDU1MsIGtleWZyYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXlmcmFtZUNTUyA9IGtleWZyYW1lLmFzQ1NTKGluZGVudCk7XG5cbiAgICAgICAgICAgIGtleWZyYW1lc0NTUyArPSBrZXlmcmFtZUNTUztcblxuICAgICAgICAgICAgcmV0dXJuIGtleWZyYW1lc0NTUztcbiAgICAgICAgICB9LCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICAgIGNzcyA9IGBAa2V5ZnJhbWVzICR7dGhpcy5pZGVudGlmaWVyfSB7XG4ke2tleWZyYW1lc0NTU319XG5cbmA7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGtleWZyYW1lTm9kZXMgPSBrZXlmcmFtZVF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBrZXlmcmFtZU5vZGVzLm1hcCgoa2V5ZnJhbWVOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0ga2V5ZnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIGtleWZyYW1lID0gS2V5ZnJhbWUuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGtleWZyYW1lO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGlkZW50aWZpZXJDb250ZW50ID0gY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMoaWRlbnRpZmllclF1ZXJ5LCBub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGlkZW50aWZpZXIgPSBpZGVudGlmaWVyQ29udGVudCwgLy8vXG4gICAgICAgICAga2V5ZnJhbWVzID0gbmV3IEtleWZyYW1lcyhhcnJheSwgaWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4ga2V5ZnJhbWVzO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbImtleWZyYW1lUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiaWRlbnRpZmllclF1ZXJ5IiwiS2V5ZnJhbWVzIiwiYXJyYXkiLCJpZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsImFzQ1NTIiwiaW5kZW50IiwiVFdPX1NQQUNFUyIsImtleWZyYW1lc0NTUyIsInJlZHVjZSIsImtleWZyYW1lIiwia2V5ZnJhbWVDU1MiLCJFTVBUWV9TVFJJTkciLCJjc3MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJrZXlmcmFtZU5vZGVzIiwiZXhlY3V0ZSIsIm1hcCIsImtleWZyYW1lTm9kZSIsIktleWZyYW1lIiwiaWRlbnRpZmllckNvbnRlbnQiLCJjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyIsImtleWZyYW1lcyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVTLElBQUEsV0FBYSxXQUFiLGFBQWEsQ0FBQTtBQUVkLElBQUEsU0FBWSxrQ0FBWixZQUFZLEVBQUE7QUFFUSxJQUFBLFVBQWMsV0FBZCxjQUFjLENBQUE7QUFDVCxJQUFBLFFBQXNCLFdBQXRCLHNCQUFzQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBFLElBQU1BLGFBQWEsR0FBR0MsV0FBSyxNQUFBLENBQUNDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUMzREMsZUFBZSxHQUFHRixXQUFLLE1BQUEsQ0FBQ0MsY0FBYyxDQUFDLHdCQUF3QixDQUFDLEFBQUM7QUFFeEQsSUFBQSxBQUFNRSxTQUFTLGlCQUFmO2FBQU1BLFNBQVMsQ0FDaEJDLEtBQUssRUFBRUMsVUFBVTs7UUFDM0IsSUFBSSxDQUFDRCxLQUFLLEdBQUdBLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUNDLFVBQVUsR0FBR0EsVUFBVSxDQUFDOzs7O1lBRy9CQyxHQUFhLEVBQWJBLGVBQWE7bUJBQWJBLFNBQUFBLGFBQWEsR0FBRztnQkFDZCxPQUFPLElBQUksQ0FBQ0QsVUFBVSxDQUFDO2FBQ3hCOzs7WUFFREUsR0FBSyxFQUFMQSxPQUFLO21CQUFMQSxTQUFBQSxLQUFLLENBQUNDLE1BQU0sRUFBRTtnQkFDWkEsTUFBTSxHQUFHQSxNQUFNLEdBQUdDLFVBQVUsV0FBQSxDQUFDO2dCQUU3QixJQUFNQyxhQUFZLEdBQUcsSUFBSSxDQUFDTixLQUFLLENBQUNPLE1BQU0sQ0FBQyxTQUFDRCxZQUFZLEVBQUVFLFFBQVEsRUFBSztvQkFDM0QsSUFBTUMsV0FBVyxHQUFHRCxRQUFRLENBQUNMLEtBQUssQ0FBQ0MsTUFBTSxDQUFDLEFBQUM7b0JBRTNDRSxZQUFZLElBQUlHLFdBQVcsQ0FBQztvQkFFNUIsT0FBT0gsWUFBWSxDQUFDO2lCQUNyQixFQUFFSSxVQUFZLGFBQUEsQ0FBQyxFQUNoQkMsR0FBRyxHQUFHLEFBQUMsYUFBVyxDQUMxQkwsTUFBWSxDQURnQixJQUFJLENBQUNMLFVBQVUsRUFBQyxNQUM5QyxDQUFlLENBQUEsTUFFZixDQUZFSyxhQUFZLEVBQUMsT0FFZixDQUFDLEFBQUM7Z0JBRUUsT0FBT0ssR0FBRyxDQUFDO2FBQ1o7Ozs7WUFFTUMsR0FBaUIsRUFBakJBLG1CQUFpQjttQkFBeEIsU0FBT0EsaUJBQWlCLENBQUNDLElBQUksRUFBRUMsTUFBTSxFQUFFO2dCQUNyQyxJQUFNQyxhQUFhLEdBQUdwQixhQUFhLENBQUNxQixPQUFPLENBQUNILElBQUksQ0FBQyxFQUMzQ2IsS0FBSyxHQUFHZSxhQUFhLENBQUNFLEdBQUcsQ0FBQyxTQUFDQyxZQUFZLEVBQUs7b0JBQzFDLElBQU1MLE1BQUksR0FBR0ssWUFBWSxFQUNuQlYsUUFBUSxHQUFHVyxTQUFRLFFBQUEsQ0FBQ1AsaUJBQWlCLENBQUNDLE1BQUksRUFBRUMsTUFBTSxDQUFDLEFBQUM7b0JBRTFELE9BQU9OLFFBQVEsQ0FBQztpQkFDakIsQ0FBQyxFQUNGWSxpQkFBaUIsR0FBR0MsQ0FBQUEsR0FBQUEsUUFBNkIsQUFBK0IsQ0FBQSw4QkFBL0IsQ0FBQ3ZCLGVBQWUsRUFBRWUsSUFBSSxFQUFFQyxNQUFNLENBQUMsRUFDaEZiLFVBQVUsR0FBR21CLGlCQUFpQixFQUM5QkUsU0FBUyxHQUFHLElBQUl2QixTQUFTLENBQUNDLEtBQUssRUFBRUMsVUFBVSxDQUFDLEFBQUM7Z0JBRW5ELE9BQU9xQixTQUFTLENBQUM7YUFDbEI7Ozs7Q0FDRixFQUFBO2tCQTFDb0J2QixTQUFTIn0=