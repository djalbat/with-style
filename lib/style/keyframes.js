"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Keyframes;
    }
});
var _occamquery = require("occam-query");
var _keyframe = /*#__PURE__*/ _interop_require_default(require("./keyframe"));
var _constants = require("../constants");
var _content = require("../utilities/content");
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
var keyframeQuery = _occamquery.Query.fromExpressionString("/keyframes/keyframe"), identifierQuery = _occamquery.Query.fromExpressionString("/keyframes/@identifier");
var Keyframes = /*#__PURE__*/ function() {
    function Keyframes(array, identifier) {
        _class_call_check(this, Keyframes);
        this.array = array;
        this.identifier = identifier;
    }
    _create_class(Keyframes, [
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
                var keyframesCSS = this.array.reduce(function(keyframesCSS, keyframe) {
                    var keyframeCSS = keyframe.asCSS(indent);
                    keyframesCSS += keyframeCSS;
                    return keyframesCSS;
                }, _constants.EMPTY_STRING), css = "@keyframes ".concat(this.identifier, " {\n").concat(keyframesCSS, "}\n\n");
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
                }), identifierContent = (0, _content.contentFromQueryNodeAndTokens)(identifierQuery, node, tokens), identifier = identifierContent, keyframes = new Keyframes(array, identifier);
                return keyframes;
            }
        }
    ]);
    return Keyframes;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9rZXlmcmFtZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5cbmltcG9ydCBLZXlmcmFtZSBmcm9tIFwiLi9rZXlmcmFtZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIFRXT19TUEFDRVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGVudFwiO1xuXG5jb25zdCBrZXlmcmFtZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIva2V5ZnJhbWVzL2tleWZyYW1lXCIpLFxuICAgICAgaWRlbnRpZmllclF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIva2V5ZnJhbWVzL0BpZGVudGlmaWVyXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlmcmFtZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSwgaWRlbnRpZmllcikge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0SWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5pZGVudGlmaWVyO1xuICB9XG5cbiAgYXNDU1MoaW5kZW50KSB7XG4gICAgaW5kZW50ID0gaW5kZW50ICsgVFdPX1NQQUNFUztcblxuICAgIGNvbnN0IGtleWZyYW1lc0NTUyA9IHRoaXMuYXJyYXkucmVkdWNlKChrZXlmcmFtZXNDU1MsIGtleWZyYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXlmcmFtZUNTUyA9IGtleWZyYW1lLmFzQ1NTKGluZGVudCk7XG5cbiAgICAgICAgICAgIGtleWZyYW1lc0NTUyArPSBrZXlmcmFtZUNTUztcblxuICAgICAgICAgICAgcmV0dXJuIGtleWZyYW1lc0NTUztcbiAgICAgICAgICB9LCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICAgIGNzcyA9IGBAa2V5ZnJhbWVzICR7dGhpcy5pZGVudGlmaWVyfSB7XG4ke2tleWZyYW1lc0NTU319XG5cbmA7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGtleWZyYW1lTm9kZXMgPSBrZXlmcmFtZVF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBrZXlmcmFtZU5vZGVzLm1hcCgoa2V5ZnJhbWVOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0ga2V5ZnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIGtleWZyYW1lID0gS2V5ZnJhbWUuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGtleWZyYW1lO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGlkZW50aWZpZXJDb250ZW50ID0gY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMoaWRlbnRpZmllclF1ZXJ5LCBub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGlkZW50aWZpZXIgPSBpZGVudGlmaWVyQ29udGVudCwgLy8vXG4gICAgICAgICAga2V5ZnJhbWVzID0gbmV3IEtleWZyYW1lcyhhcnJheSwgaWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4ga2V5ZnJhbWVzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiS2V5ZnJhbWVzIiwia2V5ZnJhbWVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJpZGVudGlmaWVyUXVlcnkiLCJhcnJheSIsImlkZW50aWZpZXIiLCJnZXRJZGVudGlmaWVyIiwiYXNDU1MiLCJpbmRlbnQiLCJUV09fU1BBQ0VTIiwia2V5ZnJhbWVzQ1NTIiwicmVkdWNlIiwia2V5ZnJhbWUiLCJrZXlmcmFtZUNTUyIsIkVNUFRZX1NUUklORyIsImNzcyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsImtleWZyYW1lTm9kZXMiLCJleGVjdXRlIiwibWFwIiwia2V5ZnJhbWVOb2RlIiwiS2V5ZnJhbWUiLCJpZGVudGlmaWVyQ29udGVudCIsImNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zIiwia2V5ZnJhbWVzIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7OzBCQVZDOytEQUVEO3lCQUVvQjt1QkFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QyxJQUFNQyxnQkFBZ0JDLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDLHdCQUMzQ0Msa0JBQWtCRixpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQztBQUVwQyxJQUFBLEFBQU1ILDBCQUFELEFBQUw7YUFBTUEsVUFDUEssS0FBSyxFQUFFQyxVQUFVO2dDQURWTjtRQUVqQixJQUFJLENBQUNLLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFVBQVUsR0FBR0E7O2tCQUhETjs7WUFNbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxNQUFNO2dCQUNWQSxTQUFTQSxTQUFTQyxxQkFBVTtnQkFFNUIsSUFBTUMsZUFBZSxJQUFJLENBQUNOLEtBQUssQ0FBQ08sTUFBTSxDQUFDLFNBQUNELGNBQWNFO29CQUM5QyxJQUFNQyxjQUFjRCxTQUFTTCxLQUFLLENBQUNDO29CQUVuQ0UsZ0JBQWdCRztvQkFFaEIsT0FBT0g7Z0JBQ1QsR0FBR0ksdUJBQVksR0FDZkMsTUFBTSxBQUFDLGNBQ2ZMLE9BRDRCLElBQUksQ0FBQ0wsVUFBVSxFQUFDLFFBQy9CLE9BQWJLLGNBQWE7Z0JBSVgsT0FBT0s7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTTtnQkFDbkMsSUFBTUMsZ0JBQWdCbkIsY0FBY29CLE9BQU8sQ0FBQ0gsT0FDdENiLFFBQVFlLGNBQWNFLEdBQUcsQ0FBQyxTQUFDQztvQkFDekIsSUFBTUwsU0FBT0ssY0FDUFYsV0FBV1csaUJBQVEsQ0FBQ1AsaUJBQWlCLENBQUNDLFFBQU1DO29CQUVsRCxPQUFPTjtnQkFDVCxJQUNBWSxvQkFBb0JDLElBQUFBLHNDQUE2QixFQUFDdEIsaUJBQWlCYyxNQUFNQyxTQUN6RWIsYUFBYW1CLG1CQUNiRSxZQUFZLElBdENEM0IsVUFzQ2VLLE9BQU9DO2dCQUV2QyxPQUFPcUI7WUFDVDs7O1dBekNtQjNCIn0=