"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamDom = require("occam-dom");
var _declaration = _interopRequireDefault(require("./declaration"));
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
var declarationQuery = _occamDom.Query.fromExpression("/*/declaration");
var Declarations = /*#__PURE__*/ function() {
    function Declarations(array) {
        _classCallCheck(this, Declarations);
        this.array = array;
    }
    _createClass(Declarations, [
        {
            key: "forwardsForEach",
            value: function forwardsForEach(callback) {
                var length = this.array.length, firstIndex = 0, lastIndex = length - 1;
                for(var index = firstIndex; index <= lastIndex; index++){
                    var declaration = this.array[index];
                    callback(declaration, index);
                }
            }
        },
        {
            key: "backwardsForEach",
            value: function backwardsForEach(callback) {
                var length = this.array.length, firstIndex = 0, lastIndex = length - 1;
                for(var index = lastIndex; index >= firstIndex; index--){
                    var declaration = this.array[index];
                    callback(declaration, index);
                }
            }
        },
        {
            key: "unshift",
            value: function unshift(declarations) {
                declarations.backwardsForEach((function(declaration) {
                    var matches = declaration.checkMatches(this.array); ///
                    if (!matches) {
                        this.array.unshift(declaration);
                    }
                }).bind(this));
            }
        },
        {
            key: "asCSS",
            value: function asCSS(className, indent) {
                if (indent === undefined) {
                    indent = className; ///
                    className = null; ///
                }
                var css = "";
                var length = this.array.length;
                if (length > 0) {
                    var lastIndex = length - 1, declarationsCSS = this.array.reduce(function(declarationsCSS1, declaration, index) {
                        var last = index === lastIndex, declarationCSS = declaration.asCSS(indent, last);
                        declarationsCSS1 += declarationCSS;
                        return declarationsCSS1;
                    }, "");
                    if (className === null) {
                        css = declarationsCSS; ///
                    } else {
                        css = ".".concat(className, " {\n").concat(declarationsCSS, "\n}\n\n");
                    }
                }
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var declarationNodes = declarationQuery.execute(node), array = declarationNodes.map(function(declarationNode) {
                    var node1 = declarationNode, declaration = _declaration.default.fromNodeAndTokens(node1, tokens);
                    return declaration;
                }), declarations = new Declarations(array);
                return declarations;
            }
        }
    ]);
    return Declarations;
}();
exports.default = Declarations;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4vZGVjbGFyYXRpb25cIjtcblxuY29uc3QgZGVjbGFyYXRpb25RdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLyovZGVjbGFyYXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2xhcmF0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZm9yd2FyZHNGb3JFYWNoKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5hcnJheS5sZW5ndGgsXG4gICAgICAgICAgZmlyc3RJbmRleCA9IDAsXG4gICAgICAgICAgbGFzdEluZGV4ID0gbGVuZ3RoIC0gMTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gZmlyc3RJbmRleDsgaW5kZXggPD0gbGFzdEluZGV4OyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBkZWNsYXJhdGlvbiA9IHRoaXMuYXJyYXlbaW5kZXhdO1xuXG4gICAgICBjYWxsYmFjayhkZWNsYXJhdGlvbiwgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIGJhY2t3YXJkc0ZvckVhY2goY2FsbGJhY2spIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aCxcbiAgICAgICAgICBmaXJzdEluZGV4ID0gMCxcbiAgICAgICAgICBsYXN0SW5kZXggPSBsZW5ndGggLSAxO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSBsYXN0SW5kZXg7IGluZGV4ID49IGZpcnN0SW5kZXg7IGluZGV4LS0pIHtcbiAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gdGhpcy5hcnJheVtpbmRleF07XG5cbiAgICAgIGNhbGxiYWNrKGRlY2xhcmF0aW9uLCBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgdW5zaGlmdChkZWNsYXJhdGlvbnMpIHtcbiAgICBkZWNsYXJhdGlvbnMuYmFja3dhcmRzRm9yRWFjaCgoZGVjbGFyYXRpb24pID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBkZWNsYXJhdGlvbi5jaGVja01hdGNoZXModGhpcy5hcnJheSk7IC8vL1xuXG4gICAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgICAgdGhpcy5hcnJheS51bnNoaWZ0KGRlY2xhcmF0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFzQ1NTKGNsYXNzTmFtZSwgaW5kZW50KSB7XG4gICAgaWYgKGluZGVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbmRlbnQgPSBjbGFzc05hbWU7IC8vL1xuXG4gICAgICBjbGFzc05hbWUgPSBudWxsOyAvLy9cbiAgICB9XG5cbiAgICBsZXQgY3NzID0gXCJcIjtcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoO1xuXG4gICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGxlbmd0aCAtIDEsXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmFycmF5LnJlZHVjZSgoZGVjbGFyYXRpb25zQ1NTLCBkZWNsYXJhdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbGFzdCA9IChpbmRleCA9PT0gbGFzdEluZGV4KSxcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25DU1MgPSBkZWNsYXJhdGlvbi5hc0NTUyhpbmRlbnQsIGxhc3QpO1xuXG4gICAgICAgICAgICAgIGRlY2xhcmF0aW9uc0NTUyArPSBkZWNsYXJhdGlvbkNTUztcblxuICAgICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb25zQ1NTO1xuICAgICAgICAgICAgfSwgXCJcIik7XG5cbiAgICAgIGlmIChjbGFzc05hbWUgPT09IG51bGwpIHtcbiAgICAgICAgY3NzID0gZGVjbGFyYXRpb25zQ1NTOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjc3MgPSBgLiR7Y2xhc3NOYW1lfSB7XG4ke2RlY2xhcmF0aW9uc0NTU31cbn1cblxuYDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uTm9kZXMgPSBkZWNsYXJhdGlvblF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBkZWNsYXJhdGlvbk5vZGVzLm1hcCgoZGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gZGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uID0gRGVjbGFyYXRpb24uZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IG5ldyBEZWNsYXJhdGlvbnMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9ucztcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBVyxDQUFYLFNBQVc7QUFFVCxHQUFlLENBQWYsWUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QyxHQUFLLENBQUMsZ0JBQWdCLEdBSkEsU0FBVyxPQUlGLGNBQWMsRUFBQyxjQUFnQjtJQUV6QyxZQUFZO2FBQVosWUFBWSxDQUNuQixLQUFLOzhCQURFLFlBQVk7YUFFeEIsS0FBSyxHQUFHLEtBQUs7O2lCQUZELFlBQVk7O1lBSy9CLEdBQWUsR0FBZixlQUFlOzRCQUFmLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDekIsR0FBSyxDQUFDLE1BQU0s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