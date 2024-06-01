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
var keyframeQuery = _occamquery.Query.fromExpression("/keyframes/keyframe"), identifierQuery = _occamquery.Query.fromExpression("/keyframes/@identifier");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9rZXlmcmFtZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5cbmltcG9ydCBLZXlmcmFtZSBmcm9tIFwiLi9rZXlmcmFtZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIFRXT19TUEFDRVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGVudFwiO1xuXG5jb25zdCBrZXlmcmFtZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIva2V5ZnJhbWVzL2tleWZyYW1lXCIpLFxuICAgICAgaWRlbnRpZmllclF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIva2V5ZnJhbWVzL0BpZGVudGlmaWVyXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlmcmFtZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSwgaWRlbnRpZmllcikge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0SWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5pZGVudGlmaWVyO1xuICB9XG5cbiAgYXNDU1MoaW5kZW50KSB7XG4gICAgaW5kZW50ID0gaW5kZW50ICsgVFdPX1NQQUNFUztcblxuICAgIGNvbnN0IGtleWZyYW1lc0NTUyA9IHRoaXMuYXJyYXkucmVkdWNlKChrZXlmcmFtZXNDU1MsIGtleWZyYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXlmcmFtZUNTUyA9IGtleWZyYW1lLmFzQ1NTKGluZGVudCk7XG5cbiAgICAgICAgICAgIGtleWZyYW1lc0NTUyArPSBrZXlmcmFtZUNTUztcblxuICAgICAgICAgICAgcmV0dXJuIGtleWZyYW1lc0NTUztcbiAgICAgICAgICB9LCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICAgIGNzcyA9IGBAa2V5ZnJhbWVzICR7dGhpcy5pZGVudGlmaWVyfSB7XG4ke2tleWZyYW1lc0NTU319XG5cbmA7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGtleWZyYW1lTm9kZXMgPSBrZXlmcmFtZVF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBrZXlmcmFtZU5vZGVzLm1hcCgoa2V5ZnJhbWVOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0ga2V5ZnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIGtleWZyYW1lID0gS2V5ZnJhbWUuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGtleWZyYW1lO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGlkZW50aWZpZXJDb250ZW50ID0gY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMoaWRlbnRpZmllclF1ZXJ5LCBub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGlkZW50aWZpZXIgPSBpZGVudGlmaWVyQ29udGVudCwgLy8vXG4gICAgICAgICAga2V5ZnJhbWVzID0gbmV3IEtleWZyYW1lcyhhcnJheSwgaWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4ga2V5ZnJhbWVzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiS2V5ZnJhbWVzIiwia2V5ZnJhbWVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJpZGVudGlmaWVyUXVlcnkiLCJhcnJheSIsImlkZW50aWZpZXIiLCJnZXRJZGVudGlmaWVyIiwiYXNDU1MiLCJpbmRlbnQiLCJUV09fU1BBQ0VTIiwia2V5ZnJhbWVzQ1NTIiwicmVkdWNlIiwia2V5ZnJhbWUiLCJrZXlmcmFtZUNTUyIsIkVNUFRZX1NUUklORyIsImNzcyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsImtleWZyYW1lTm9kZXMiLCJleGVjdXRlIiwibWFwIiwia2V5ZnJhbWVOb2RlIiwiS2V5ZnJhbWUiLCJpZGVudGlmaWVyQ29udGVudCIsImNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zIiwia2V5ZnJhbWVzIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7OzBCQVZDOytEQUVEO3lCQUVvQjt1QkFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QyxJQUFNQyxnQkFBZ0JDLGlCQUFLLENBQUNDLGNBQWMsQ0FBQyx3QkFDckNDLGtCQUFrQkYsaUJBQUssQ0FBQ0MsY0FBYyxDQUFDO0FBRTlCLElBQUEsQUFBTUgsMEJBQUQsQUFBTDthQUFNQSxVQUNQSyxLQUFLLEVBQUVDLFVBQVU7Z0NBRFZOO1FBRWpCLElBQUksQ0FBQ0ssS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7a0JBSEROOztZQU1uQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxVQUFVO1lBQ3hCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE1BQU07Z0JBQ1ZBLFNBQVNBLFNBQVNDLHFCQUFVO2dCQUU1QixJQUFNQyxlQUFlLElBQUksQ0FBQ04sS0FBSyxDQUFDTyxNQUFNLENBQUMsU0FBQ0QsY0FBY0U7b0JBQzlDLElBQU1DLGNBQWNELFNBQVNMLEtBQUssQ0FBQ0M7b0JBRW5DRSxnQkFBZ0JHO29CQUVoQixPQUFPSDtnQkFDVCxHQUFHSSx1QkFBWSxHQUNmQyxNQUFNLEFBQUMsY0FDZkwsT0FENEIsSUFBSSxDQUFDTCxVQUFVLEVBQUMsUUFDL0IsT0FBYkssY0FBYTtnQkFJWCxPQUFPSztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsSUFBSSxFQUFFQyxNQUFNO2dCQUNuQyxJQUFNQyxnQkFBZ0JuQixjQUFjb0IsT0FBTyxDQUFDSCxPQUN0Q2IsUUFBUWUsY0FBY0UsR0FBRyxDQUFDLFNBQUNDO29CQUN6QixJQUFNTCxTQUFPSyxjQUNQVixXQUFXVyxpQkFBUSxDQUFDUCxpQkFBaUIsQ0FBQ0MsUUFBTUM7b0JBRWxELE9BQU9OO2dCQUNULElBQ0FZLG9CQUFvQkMsSUFBQUEsc0NBQTZCLEVBQUN0QixpQkFBaUJjLE1BQU1DLFNBQ3pFYixhQUFhbUIsbUJBQ2JFLFlBQVksSUF0Q0QzQixVQXNDZUssT0FBT0M7Z0JBRXZDLE9BQU9xQjtZQUNUOzs7V0F6Q21CM0IifQ==