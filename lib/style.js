"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _medias = _interopRequireDefault(require("./style/medias"));
var _ruleSets = _interopRequireDefault(require("./style/ruleSets"));
var _declarations = _interopRequireDefault(require("./style/declarations"));
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
    function Style(declarations, ruleSets, medias) {
        _classCallCheck(this, Style);
        this.declarations = declarations;
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
                var declarations = superStyle.getDeclarations(), ruleSets = superStyle.getRuleSets(), medias = superStyle.getMedias();
                this.unshift(declarations, ruleSets, medias);
            }
        },
        {
            key: "unshift",
            value: function unshift(declarations, ruleSets, medias) {
                this.declarations.unshift(declarations);
                this.ruleSets.unshift(ruleSets);
                this.medias.unshift(medias);
            }
        },
        {
            key: "asCSS",
            value: function asCSS(className) {
                var declarationsCSS = this.declarations.asCSS(className, "  "), ruleSetsCSS = this.ruleSets.asCSS(className, ""), mediasCSS = this.medias.asCSS(className), css = "".concat(declarationsCSS).concat(ruleSetsCSS).concat(mediasCSS);
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var declarations = _declarations.default.fromNodeAndTokens(node, tokens), ruleSets = _ruleSets.default.fromNodeAndTokens(node, tokens), medias = _medias.default.fromNodeAndTokens(node, tokens), style = new Style(declarations, ruleSets, medias);
                return style;
            }
        }
    ]);
    return Style;
}();
exports.default = Style;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZS5qcyJdLCJuYW1lcyI6WyJNZWRpYXMiLCJSdWxlU2V0cyIsIkRlY2xhcmF0aW9ucyIsIlN0eWxlIiwiY29uc3RydWN0b3IiLCJkZWNsYXJhdGlvbnMiLCJydWxlU2V0cyIsIm1lZGlhcyIsImdldERlY2xhcmF0aW9ucyIsImdldFJ1bGVTZXRzIiwiZ2V0TWVkaWFzIiwiZXh0ZW5kcyIsInN1cGVyU3R5bGUiLCJ1bnNoaWZ0IiwiYXNDU1MiLCJjbGFzc05hbWUiLCJkZWNsYXJhdGlvbnNDU1MiLCJydWxlU2V0c0NTUyIsIm1lZGlhc0NTUyIsImNzcyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsInN0eWxlIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVPLEdBQWdCLENBQWhCLE9BQWdCO0FBQ2QsR0FBa0IsQ0FBbEIsU0FBa0I7QUFDZCxHQUFzQixDQUF0QixhQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUxQixLQUFLLGlCQUFYLFFBQVE7YUFBRixLQUFLLENBQ1osWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNOzhCQUR2QixLQUFLO1FBRXRCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWTtRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVE7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNOztpQkFKSCxLQUFLOztZQU94QixHQUFlLEdBQWYsZUFBZTttQkFBZixRQUFRLENBQVIsZUFBZSxHQUFHLENBQUM7Z0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWTtZQUMxQixDQUFDOzs7WUFFRCxHQUFXLEdBQVgsV0FBVzttQkFBWCxRQUFRLENBQVIsV0FBVyxHQUFHLENBQUM7Z0JBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQ3RCLENBQUM7OztZQUVELEdBQVMsR0FBVCxTQUFTO21CQUFULFFBQVEsQ0FBUixTQUFTLEdBQUcsQ0FBQztnQkFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDcEIsQ0FBQzs7O1lBRUQsR0FBTyxHQUFQLE9BQU87bUJBQVAsUUFBUSxDQUFSLFFBQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbkIsR0FBSyxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsZUFBZSxJQUN6QyxRQUFRLEdBQUcsVUFBVSxDQUFDLFdBQVcsSUFDakMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxTQUFTO2dCQUVuQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTTtZQUM3QyxDQUFDOzs7WUFFRCxHQUFPLEdBQVAsT0FBTzttQkFBUCxRQUFRLENBQVIsT0FBTyxDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVk7Z0JBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVE7Z0JBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU07WUFDNUIsQ0FBQzs7O1lBRUQsR0FBSyxHQUFMLEtBQUs7bUJBQUwsUUFBUSxDQUFSLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDaEIsR0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUUsRUFBSSxJQUN6RCxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxPQUMzQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUN2QyxHQUFHLE1BQXdCLE1BQVcsQ0FBN0IsZUFBZSxFQUFpQixNQUFTLENBQXZCLFdBQVcsRUFBYSxNQUFBLENBQVYsU0FBUztnQkFFeEQsTUFBTSxDQUFDLEdBQUc7WUFDWixDQUFDOzs7O1lBRU0sR0FBaUIsR0FBakIsaUJBQWlCO21CQUF4QixRQUFRLENBQUQsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO2dCQUN0QyxHQUFLLENBQUMsWUFBWSxHQTdDRyxhQUFzQixTQTZDVCxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxHQUMxRCxRQUFRLEdBL0NHLFNBQWtCLFNBK0NULGlCQUFpQixDQUFDLElBQUksRUFBRSxNQUFNLEdBQ2xELE1BQU0sR0FqREcsT0FBZ0IsU0FpRFQsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sR0FDOUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNO2dCQUV0RCxNQUFNLENBQUMsS0FBSztZQUNkLENBQUM7OztXQWpEa0IsS0FBSzs7a0JBQUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWVkaWFzIGZyb20gXCIuL3N0eWxlL21lZGlhc1wiO1xuaW1wb3J0IFJ1bGVTZXRzIGZyb20gXCIuL3N0eWxlL3J1bGVTZXRzXCI7XG5pbXBvcnQgRGVjbGFyYXRpb25zIGZyb20gXCIuL3N0eWxlL2RlY2xhcmF0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZSB7XG4gIGNvbnN0cnVjdG9yKGRlY2xhcmF0aW9ucywgcnVsZVNldHMsIG1lZGlhcykge1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICAgIHRoaXMucnVsZVNldHMgPSBydWxlU2V0cztcbiAgICB0aGlzLm1lZGlhcyA9IG1lZGlhcztcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbnM7XG4gIH1cblxuICBnZXRSdWxlU2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlU2V0cztcbiAgfVxuXG4gIGdldE1lZGlhcygpIHtcbiAgICByZXR1cm4gdGhpcy5tZWRpYXM7XG4gIH1cblxuICBleHRlbmRzKHN1cGVyU3R5bGUpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbnMgPSBzdXBlclN0eWxlLmdldERlY2xhcmF0aW9ucygpLFxuICAgICAgICAgIHJ1bGVTZXRzID0gc3VwZXJTdHlsZS5nZXRSdWxlU2V0cygpLFxuICAgICAgICAgIG1lZGlhcyA9IHN1cGVyU3R5bGUuZ2V0TWVkaWFzKCk7XG5cbiAgICB0aGlzLnVuc2hpZnQoZGVjbGFyYXRpb25zLCBydWxlU2V0cywgbWVkaWFzKTtcbiAgfVxuXG4gIHVuc2hpZnQoZGVjbGFyYXRpb25zLCBydWxlU2V0cywgbWVkaWFzKSB7XG4gICAgdGhpcy5kZWNsYXJhdGlvbnMudW5zaGlmdChkZWNsYXJhdGlvbnMpO1xuICAgIHRoaXMucnVsZVNldHMudW5zaGlmdChydWxlU2V0cyk7XG4gICAgdGhpcy5tZWRpYXMudW5zaGlmdChtZWRpYXMpO1xuICB9XG5cbiAgYXNDU1MoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25zQ1NTID0gdGhpcy5kZWNsYXJhdGlvbnMuYXNDU1MoY2xhc3NOYW1lLCBcIiAgXCIpLFxuICAgICAgICAgIHJ1bGVTZXRzQ1NTID0gdGhpcy5ydWxlU2V0cy5hc0NTUyhjbGFzc05hbWUsIFwiXCIpLFxuICAgICAgICAgIG1lZGlhc0NTUyA9IHRoaXMubWVkaWFzLmFzQ1NTKGNsYXNzTmFtZSksXG4gICAgICAgICAgY3NzID0gYCR7ZGVjbGFyYXRpb25zQ1NTfSR7cnVsZVNldHNDU1N9JHttZWRpYXNDU1N9YDtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25zID0gRGVjbGFyYXRpb25zLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgcnVsZVNldHMgPSBSdWxlU2V0cy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG1lZGlhcyA9IE1lZGlhcy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHN0eWxlID0gbmV3IFN0eWxlKGRlY2xhcmF0aW9ucywgcnVsZVNldHMsIG1lZGlhcyk7XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cbn1cbiJdfQ==