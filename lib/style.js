"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _medias = _interopRequireDefault(require("./style/medias"));
var _ruleSets = _interopRequireDefault(require("./style/ruleSets"));
var _keyframess = _interopRequireDefault(require("./style/keyframess"));
var _declarations = _interopRequireDefault(require("./style/declarations"));
var _constants = require("./constants");
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
var Style = /*#__PURE__*/ function() {
    function Style(declarations, keyframess, ruleSets, medias) {
        _classCallCheck(this, Style);
        this.declarations = declarations;
        this.keyframess = keyframess;
        this.ruleSets = ruleSets;
        this.medias = medias;
    }
    _createClass(Style, [
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
exports.default = Style;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1lZGlhcyBmcm9tIFwiLi9zdHlsZS9tZWRpYXNcIjtcbmltcG9ydCBSdWxlU2V0cyBmcm9tIFwiLi9zdHlsZS9ydWxlU2V0c1wiO1xuaW1wb3J0IEtleWZyYW1lc3MgZnJvbSBcIi4vc3R5bGUva2V5ZnJhbWVzc1wiO1xuaW1wb3J0IERlY2xhcmF0aW9ucyBmcm9tIFwiLi9zdHlsZS9kZWNsYXJhdGlvbnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0eWxlIHtcbiAgY29uc3RydWN0b3IoZGVjbGFyYXRpb25zLCBrZXlmcmFtZXNzLCBydWxlU2V0cywgbWVkaWFzKSB7XG4gICAgdGhpcy5kZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnM7XG4gICAgdGhpcy5rZXlmcmFtZXNzID0ga2V5ZnJhbWVzcztcbiAgICB0aGlzLnJ1bGVTZXRzID0gcnVsZVNldHM7XG4gICAgdGhpcy5tZWRpYXMgPSBtZWRpYXM7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0S2V5ZnJhbWVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5rZXlmcmFtZXNzO1xuICB9XG5cbiAgZ2V0UnVsZVNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZVNldHM7XG4gIH1cblxuICBnZXRNZWRpYXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVkaWFzO1xuICB9XG5cbiAgZXh0ZW5kcyhzdXBlclN0eWxlKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25zID0gc3VwZXJTdHlsZS5nZXREZWNsYXJhdGlvbnMoKSxcbiAgICAgICAgICBrZXlmcmFtZXNzID0gc3VwZXJTdHlsZS5nZXRLZXlmcmFtZXNzKCksXG4gICAgICAgICAgcnVsZVNldHMgPSBzdXBlclN0eWxlLmdldFJ1bGVTZXRzKCksXG4gICAgICAgICAgbWVkaWFzID0gc3VwZXJTdHlsZS5nZXRNZWRpYXMoKTtcblxuICAgIHRoaXMudW5zaGlmdChkZWNsYXJhdGlvbnMsIGtleWZyYW1lc3MsIHJ1bGVTZXRzLCBtZWRpYXMpO1xuICB9XG5cbiAgdW5zaGlmdChkZWNsYXJhdGlvbnMsIGtleWZyYW1lc3MsIHJ1bGVTZXRzLCBtZWRpYXMpIHtcbiAgICB0aGlzLmRlY2xhcmF0aW9ucy51bnNoaWZ0KGRlY2xhcmF0aW9ucyk7XG4gICAgdGhpcy5rZXlmcmFtZXNzLnVuc2hpZnQoa2V5ZnJhbWVzcyk7XG4gICAgdGhpcy5ydWxlU2V0cy51bnNoaWZ0KHJ1bGVTZXRzKTtcbiAgICB0aGlzLm1lZGlhcy51bnNoaWZ0KG1lZGlhcyk7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBpbmRlbnQgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgZGVjbGFyYXRpb25zQ1NTID0gdGhpcy5kZWNsYXJhdGlvbnMuYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpLFxuICAgICAgICAgIGtleWZyYW1lc3NDU1MgPSB0aGlzLmtleWZyYW1lc3MuYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpLFxuICAgICAgICAgIHJ1bGVTZXRzQ1NTID0gdGhpcy5ydWxlU2V0cy5hc0NTUyhjbGFzc05hbWUsIGluZGVudCksXG4gICAgICAgICAgbWVkaWFzQ1NTID0gdGhpcy5tZWRpYXMuYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpLFxuICAgICAgICAgIGNzcyA9IGAke2RlY2xhcmF0aW9uc0NTU30ke2tleWZyYW1lc3NDU1N9JHtydWxlU2V0c0NTU30ke21lZGlhc0NTU31gO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbnMgPSBEZWNsYXJhdGlvbnMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBrZXlmcmFtZXNzID0gS2V5ZnJhbWVzcy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVTZXRzID0gUnVsZVNldHMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBtZWRpYXMgPSBNZWRpYXMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBzdHlsZSA9IG5ldyBTdHlsZShkZWNsYXJhdGlvbnMsIGtleWZyYW1lc3MsIHJ1bGVTZXRzLCBtZWRpYXMpO1xuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlN0eWxlIiwiZGVjbGFyYXRpb25zIiwia2V5ZnJhbWVzcyIsInJ1bGVTZXRzIiwibWVkaWFzIiwiZ2V0RGVjbGFyYXRpb25zIiwiZ2V0S2V5ZnJhbWVzcyIsImdldFJ1bGVTZXRzIiwiZ2V0TWVkaWFzIiwiZXh0ZW5kcyIsInN1cGVyU3R5bGUiLCJ1bnNoaWZ0IiwiYXNDU1MiLCJjbGFzc05hbWUiLCJpbmRlbnQiLCJFTVBUWV9TVFJJTkciLCJkZWNsYXJhdGlvbnNDU1MiLCJrZXlmcmFtZXNzQ1NTIiwicnVsZVNldHNDU1MiLCJtZWRpYXNDU1MiLCJjc3MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJEZWNsYXJhdGlvbnMiLCJLZXlmcmFtZXNzIiwiUnVsZVNldHMiLCJNZWRpYXMiLCJzdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVNLElBQUEsT0FBZ0Isa0NBQWhCLGdCQUFnQixFQUFBO0FBQ2QsSUFBQSxTQUFrQixrQ0FBbEIsa0JBQWtCLEVBQUE7QUFDaEIsSUFBQSxXQUFvQixrQ0FBcEIsb0JBQW9CLEVBQUE7QUFDbEIsSUFBQSxhQUFzQixrQ0FB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