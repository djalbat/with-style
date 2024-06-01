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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1lZGlhcyBmcm9tIFwiLi9zdHlsZS9tZWRpYXNcIjtcbmltcG9ydCBSdWxlU2V0cyBmcm9tIFwiLi9zdHlsZS9ydWxlU2V0c1wiO1xuaW1wb3J0IEtleWZyYW1lc3MgZnJvbSBcIi4vc3R5bGUva2V5ZnJhbWVzc1wiO1xuaW1wb3J0IERlY2xhcmF0aW9ucyBmcm9tIFwiLi9zdHlsZS9kZWNsYXJhdGlvbnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0eWxlIHtcbiAgY29uc3RydWN0b3IoZGVjbGFyYXRpb25zLCBrZXlmcmFtZXNzLCBydWxlU2V0cywgbWVkaWFzKSB7XG4gICAgdGhpcy5kZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnM7XG4gICAgdGhpcy5rZXlmcmFtZXNzID0ga2V5ZnJhbWVzcztcbiAgICB0aGlzLnJ1bGVTZXRzID0gcnVsZVNldHM7XG4gICAgdGhpcy5tZWRpYXMgPSBtZWRpYXM7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0S2V5ZnJhbWVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5rZXlmcmFtZXNzO1xuICB9XG5cbiAgZ2V0UnVsZVNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZVNldHM7XG4gIH1cblxuICBnZXRNZWRpYXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVkaWFzO1xuICB9XG5cbiAgZXh0ZW5kcyhzdXBlclN0eWxlKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25zID0gc3VwZXJTdHlsZS5nZXREZWNsYXJhdGlvbnMoKSxcbiAgICAgICAgICBrZXlmcmFtZXNzID0gc3VwZXJTdHlsZS5nZXRLZXlmcmFtZXNzKCksXG4gICAgICAgICAgcnVsZVNldHMgPSBzdXBlclN0eWxlLmdldFJ1bGVTZXRzKCksXG4gICAgICAgICAgbWVkaWFzID0gc3VwZXJTdHlsZS5nZXRNZWRpYXMoKTtcblxuICAgIHRoaXMudW5zaGlmdChkZWNsYXJhdGlvbnMsIGtleWZyYW1lc3MsIHJ1bGVTZXRzLCBtZWRpYXMpO1xuICB9XG5cbiAgdW5zaGlmdChkZWNsYXJhdGlvbnMsIGtleWZyYW1lc3MsIHJ1bGVTZXRzLCBtZWRpYXMpIHtcbiAgICB0aGlzLmRlY2xhcmF0aW9ucy51bnNoaWZ0KGRlY2xhcmF0aW9ucyk7XG4gICAgdGhpcy5rZXlmcmFtZXNzLnVuc2hpZnQoa2V5ZnJhbWVzcyk7XG4gICAgdGhpcy5ydWxlU2V0cy51bnNoaWZ0KHJ1bGVTZXRzKTtcbiAgICB0aGlzLm1lZGlhcy51bnNoaWZ0KG1lZGlhcyk7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBpbmRlbnQgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgZGVjbGFyYXRpb25zQ1NTID0gdGhpcy5kZWNsYXJhdGlvbnMuYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpLFxuICAgICAgICAgIGtleWZyYW1lc3NDU1MgPSB0aGlzLmtleWZyYW1lc3MuYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpLFxuICAgICAgICAgIHJ1bGVTZXRzQ1NTID0gdGhpcy5ydWxlU2V0cy5hc0NTUyhjbGFzc05hbWUsIGluZGVudCksXG4gICAgICAgICAgbWVkaWFzQ1NTID0gdGhpcy5tZWRpYXMuYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpLFxuICAgICAgICAgIGNzcyA9IGAke2RlY2xhcmF0aW9uc0NTU30ke2tleWZyYW1lc3NDU1N9JHtydWxlU2V0c0NTU30ke21lZGlhc0NTU31gO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbnMgPSBEZWNsYXJhdGlvbnMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBrZXlmcmFtZXNzID0gS2V5ZnJhbWVzcy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVTZXRzID0gUnVsZVNldHMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBtZWRpYXMgPSBNZWRpYXMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBzdHlsZSA9IG5ldyBTdHlsZShkZWNsYXJhdGlvbnMsIGtleWZyYW1lc3MsIHJ1bGVTZXRzLCBtZWRpYXMpO1xuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3R5bGUiLCJkZWNsYXJhdGlvbnMiLCJrZXlmcmFtZXNzIiwicnVsZVNldHMiLCJtZWRpYXMiLCJnZXREZWNsYXJhdGlvbnMiLCJnZXRLZXlmcmFtZXNzIiwiZ2V0UnVsZVNldHMiLCJnZXRNZWRpYXMiLCJleHRlbmRzIiwic3VwZXJTdHlsZSIsInVuc2hpZnQiLCJhc0NTUyIsImNsYXNzTmFtZSIsImluZGVudCIsIkVNUFRZX1NUUklORyIsImRlY2xhcmF0aW9uc0NTUyIsImtleWZyYW1lc3NDU1MiLCJydWxlU2V0c0NTUyIsIm1lZGlhc0NTUyIsImNzcyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsIkRlY2xhcmF0aW9ucyIsIktleWZyYW1lc3MiLCJSdWxlU2V0cyIsIk1lZGlhcyIsInN0eWxlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozs2REFQRjsrREFDRTtpRUFDRTttRUFDRTt5QkFFSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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