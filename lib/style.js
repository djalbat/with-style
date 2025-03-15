"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Style;
    }
});
var _medias = /*#__PURE__*/ _interop_require_default(require("./style/medias"));
var _ruleSets = /*#__PURE__*/ _interop_require_default(require("./style/ruleSets"));
var _keyframess = /*#__PURE__*/ _interop_require_default(require("./style/keyframess"));
var _declarations = /*#__PURE__*/ _interop_require_default(require("./style/declarations"));
var _constants = require("./constants");
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
var Style = /*#__PURE__*/ function() {
    function Style(declarations, keyframess, ruleSets, medias) {
        _class_call_check(this, Style);
        this.declarations = declarations;
        this.keyframess = keyframess;
        this.ruleSets = ruleSets;
        this.medias = medias;
    }
    _create_class(Style, [
        {
            key: "getDeclarations",
            value: function getDeclarations() {
                return this.declarations;
            }
        },
        {
            key: "getKeyframess",
            value: function getKeyframess() {
                return this.keyframess;
            }
        },
        {
            key: "getRuleSets",
            value: function getRuleSets() {
                return this.ruleSets;
            }
        },
        {
            key: "getMedias",
            value: function getMedias() {
                return this.medias;
            }
        },
        {
            key: "extends",
            value: function _extends(superStyle) {
                var declarations = superStyle.getDeclarations(), keyframess = superStyle.getKeyframess(), ruleSets = superStyle.getRuleSets(), medias = superStyle.getMedias();
                this.unshift(declarations, keyframess, ruleSets, medias);
            }
        },
        {
            key: "unshift",
            value: function unshift(declarations, keyframess, ruleSets, medias) {
                this.declarations.unshift(declarations);
                this.keyframess.unshift(keyframess);
                this.ruleSets.unshift(ruleSets);
                this.medias.unshift(medias);
            }
        },
        {
            key: "asCSS",
            value: function asCSS(className) {
                var indent = _constants.EMPTY_STRING, declarationsCSS = this.declarations.asCSS(className, indent), keyframessCSS = this.keyframess.asCSS(className, indent), ruleSetsCSS = this.ruleSets.asCSS(className, indent), mediasCSS = this.medias.asCSS(className, indent), css = "".concat(declarationsCSS).concat(keyframessCSS).concat(ruleSetsCSS).concat(mediasCSS);
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var declarations = _declarations.default.fromNodeAndTokens(node, tokens), keyframess = _keyframess.default.fromNodeAndTokens(node, tokens), ruleSets = _ruleSets.default.fromNodeAndTokens(node, tokens), medias = _medias.default.fromNodeAndTokens(node, tokens), style = new Style(declarations, keyframess, ruleSets, medias);
                return style;
            }
        }
    ]);
    return Style;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1lZGlhcyBmcm9tIFwiLi9zdHlsZS9tZWRpYXNcIjtcbmltcG9ydCBSdWxlU2V0cyBmcm9tIFwiLi9zdHlsZS9ydWxlU2V0c1wiO1xuaW1wb3J0IEtleWZyYW1lc3MgZnJvbSBcIi4vc3R5bGUva2V5ZnJhbWVzc1wiO1xuaW1wb3J0IERlY2xhcmF0aW9ucyBmcm9tIFwiLi9zdHlsZS9kZWNsYXJhdGlvbnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0eWxlIHtcbiAgY29uc3RydWN0b3IoZGVjbGFyYXRpb25zLCBrZXlmcmFtZXNzLCBydWxlU2V0cywgbWVkaWFzKSB7XG4gICAgdGhpcy5kZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnM7XG4gICAgdGhpcy5rZXlmcmFtZXNzID0ga2V5ZnJhbWVzcztcbiAgICB0aGlzLnJ1bGVTZXRzID0gcnVsZVNldHM7XG4gICAgdGhpcy5tZWRpYXMgPSBtZWRpYXM7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0S2V5ZnJhbWVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5rZXlmcmFtZXNzO1xuICB9XG5cbiAgZ2V0UnVsZVNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZVNldHM7XG4gIH1cblxuICBnZXRNZWRpYXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVkaWFzO1xuICB9XG5cbiAgZXh0ZW5kcyhzdXBlclN0eWxlKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25zID0gc3VwZXJTdHlsZS5nZXREZWNsYXJhdGlvbnMoKSxcbiAgICAgICAgICBrZXlmcmFtZXNzID0gc3VwZXJTdHlsZS5nZXRLZXlmcmFtZXNzKCksXG4gICAgICAgICAgcnVsZVNldHMgPSBzdXBlclN0eWxlLmdldFJ1bGVTZXRzKCksXG4gICAgICAgICAgbWVkaWFzID0gc3VwZXJTdHlsZS5nZXRNZWRpYXMoKTtcblxuICAgIHRoaXMudW5zaGlmdChkZWNsYXJhdGlvbnMsIGtleWZyYW1lc3MsIHJ1bGVTZXRzLCBtZWRpYXMpO1xuICB9XG5cbiAgdW5zaGlmdChkZWNsYXJhdGlvbnMsIGtleWZyYW1lc3MsIHJ1bGVTZXRzLCBtZWRpYXMpIHtcbiAgICB0aGlzLmRlY2xhcmF0aW9ucy51bnNoaWZ0KGRlY2xhcmF0aW9ucyk7XG4gICAgdGhpcy5rZXlmcmFtZXNzLnVuc2hpZnQoa2V5ZnJhbWVzcyk7XG4gICAgdGhpcy5ydWxlU2V0cy51bnNoaWZ0KHJ1bGVTZXRzKTtcbiAgICB0aGlzLm1lZGlhcy51bnNoaWZ0KG1lZGlhcyk7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBpbmRlbnQgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgZGVjbGFyYXRpb25zQ1NTID0gdGhpcy5kZWNsYXJhdGlvbnMuYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpLFxuICAgICAgICAgIGtleWZyYW1lc3NDU1MgPSB0aGlzLmtleWZyYW1lc3MuYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpLFxuICAgICAgICAgIHJ1bGVTZXRzQ1NTID0gdGhpcy5ydWxlU2V0cy5hc0NTUyhjbGFzc05hbWUsIGluZGVudCksXG4gICAgICAgICAgbWVkaWFzQ1NTID0gdGhpcy5tZWRpYXMuYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpLFxuICAgICAgICAgIGNzcyA9IGAke2RlY2xhcmF0aW9uc0NTU30ke2tleWZyYW1lc3NDU1N9JHtydWxlU2V0c0NTU30ke21lZGlhc0NTU31gO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbnMgPSBEZWNsYXJhdGlvbnMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBrZXlmcmFtZXNzID0gS2V5ZnJhbWVzcy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVTZXRzID0gUnVsZVNldHMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBtZWRpYXMgPSBNZWRpYXMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBzdHlsZSA9IG5ldyBTdHlsZShkZWNsYXJhdGlvbnMsIGtleWZyYW1lc3MsIHJ1bGVTZXRzLCBtZWRpYXMpO1xuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3R5bGUiLCJkZWNsYXJhdGlvbnMiLCJrZXlmcmFtZXNzIiwicnVsZVNldHMiLCJtZWRpYXMiLCJnZXREZWNsYXJhdGlvbnMiLCJnZXRLZXlmcmFtZXNzIiwiZ2V0UnVsZVNldHMiLCJnZXRNZWRpYXMiLCJleHRlbmRzIiwic3VwZXJTdHlsZSIsInVuc2hpZnQiLCJhc0NTUyIsImNsYXNzTmFtZSIsImluZGVudCIsIkVNUFRZX1NUUklORyIsImRlY2xhcmF0aW9uc0NTUyIsImtleWZyYW1lc3NDU1MiLCJydWxlU2V0c0NTUyIsIm1lZGlhc0NTUyIsImNzcyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsIkRlY2xhcmF0aW9ucyIsIktleWZyYW1lc3MiLCJSdWxlU2V0cyIsIk1lZGlhcyIsInN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozs2REFQRjsrREFDRTtpRUFDRTttRUFDRTt5QkFFSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEsc0JBQU47YUFBTUEsTUFDUEMsWUFBWSxFQUFFQyxVQUFVLEVBQUVDLFFBQVEsRUFBRUMsTUFBTTtnQ0FEbkNKO1FBRWpCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7a0JBTEdKOztZQVFuQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixZQUFZO1lBQzFCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixVQUFVO1lBQ3hCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixRQUFRO1lBQ3RCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVFDLFVBQVU7Z0JBQ2hCLElBQU1ULGVBQWVTLFdBQVdMLGVBQWUsSUFDekNILGFBQWFRLFdBQVdKLGFBQWEsSUFDckNILFdBQVdPLFdBQVdILFdBQVcsSUFDakNILFNBQVNNLFdBQVdGLFNBQVM7Z0JBRW5DLElBQUksQ0FBQ0csT0FBTyxDQUFDVixjQUFjQyxZQUFZQyxVQUFVQztZQUNuRDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRVixZQUFZLEVBQUVDLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxNQUFNO2dCQUNoRCxJQUFJLENBQUNILFlBQVksQ0FBQ1UsT0FBTyxDQUFDVjtnQkFDMUIsSUFBSSxDQUFDQyxVQUFVLENBQUNTLE9BQU8sQ0FBQ1Q7Z0JBQ3hCLElBQUksQ0FBQ0MsUUFBUSxDQUFDUSxPQUFPLENBQUNSO2dCQUN0QixJQUFJLENBQUNDLE1BQU0sQ0FBQ08sT0FBTyxDQUFDUDtZQUN0Qjs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxTQUFTO2dCQUNiLElBQU1DLFNBQVNDLHVCQUFZLEVBQ3JCQyxrQkFBa0IsSUFBSSxDQUFDZixZQUFZLENBQUNXLEtBQUssQ0FBQ0MsV0FBV0MsU0FDckRHLGdCQUFnQixJQUFJLENBQUNmLFVBQVUsQ0FBQ1UsS0FBSyxDQUFDQyxXQUFXQyxTQUNqREksY0FBYyxJQUFJLENBQUNmLFFBQVEsQ0FBQ1MsS0FBSyxDQUFDQyxXQUFXQyxTQUM3Q0ssWUFBWSxJQUFJLENBQUNmLE1BQU0sQ0FBQ1EsS0FBSyxDQUFDQyxXQUFXQyxTQUN6Q00sTUFBTSxBQUFDLEdBQW9CSCxPQUFsQkQsaUJBQWtDRSxPQUFoQkQsZUFBOEJFLE9BQWRELGFBQXdCLE9BQVZDO2dCQUUvRCxPQUFPQztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsSUFBSSxFQUFFQyxNQUFNO2dCQUNuQyxJQUFNdEIsZUFBZXVCLHFCQUFZLENBQUNILGlCQUFpQixDQUFDQyxNQUFNQyxTQUNwRHJCLGFBQWF1QixtQkFBVSxDQUFDSixpQkFBaUIsQ0FBQ0MsTUFBTUMsU0FDaERwQixXQUFXdUIsaUJBQVEsQ0FBQ0wsaUJBQWlCLENBQUNDLE1BQU1DLFNBQzVDbkIsU0FBU3VCLGVBQU0sQ0FBQ04saUJBQWlCLENBQUNDLE1BQU1DLFNBQ3hDSyxRQUFRLElBeERHNUIsTUF3RE9DLGNBQWNDLFlBQVlDLFVBQVVDO2dCQUU1RCxPQUFPd0I7WUFDVDs7O1dBM0RtQjVCIn0=