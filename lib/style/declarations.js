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
var Declarations = function() {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4vZGVjbGFyYXRpb25cIjtcblxuY29uc3QgZGVjbGFyYXRpb25RdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLyovZGVjbGFyYXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2xhcmF0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZm9yd2FyZHNGb3JFYWNoKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5hcnJheS5sZW5ndGgsXG4gICAgICAgICAgZmlyc3RJbmRleCA9IDAsXG4gICAgICAgICAgbGFzdEluZGV4ID0gbGVuZ3RoIC0gMTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gZmlyc3RJbmRleDsgaW5kZXggPD0gbGFzdEluZGV4OyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBkZWNsYXJhdGlvbiA9IHRoaXMuYXJyYXlbaW5kZXhdO1xuXG4gICAgICBjYWxsYmFjayhkZWNsYXJhdGlvbiwgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIGJhY2t3YXJkc0ZvckVhY2goY2FsbGJhY2spIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aCxcbiAgICAgICAgICBmaXJzdEluZGV4ID0gMCxcbiAgICAgICAgICBsYXN0SW5kZXggPSBsZW5ndGggLSAxO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSBsYXN0SW5kZXg7IGluZGV4ID49IGZpcnN0SW5kZXg7IGluZGV4LS0pIHtcbiAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gdGhpcy5hcnJheVtpbmRleF07XG5cbiAgICAgIGNhbGxiYWNrKGRlY2xhcmF0aW9uLCBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgdW5zaGlmdChkZWNsYXJhdGlvbnMpIHtcbiAgICBkZWNsYXJhdGlvbnMuYmFja3dhcmRzRm9yRWFjaCgoZGVjbGFyYXRpb24pID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBkZWNsYXJhdGlvbi5jaGVja01hdGNoZXModGhpcy5hcnJheSk7IC8vL1xuXG4gICAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgICAgdGhpcy5hcnJheS51bnNoaWZ0KGRlY2xhcmF0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFzQ1NTKGNsYXNzTmFtZSwgaW5kZW50KSB7XG4gICAgaWYgKGluZGVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbmRlbnQgPSBjbGFzc05hbWU7IC8vL1xuXG4gICAgICBjbGFzc05hbWUgPSBudWxsOyAvLy9cbiAgICB9XG5cbiAgICBsZXQgY3NzID0gXCJcIjtcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoO1xuXG4gICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGxlbmd0aCAtIDEsXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmFycmF5LnJlZHVjZSgoZGVjbGFyYXRpb25zQ1NTLCBkZWNsYXJhdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbGFzdCA9IChpbmRleCA9PT0gbGFzdEluZGV4KSxcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25DU1MgPSBkZWNsYXJhdGlvbi5hc0NTUyhpbmRlbnQsIGxhc3QpO1xuXG4gICAgICAgICAgICAgIGRlY2xhcmF0aW9uc0NTUyArPSBkZWNsYXJhdGlvbkNTUztcblxuICAgICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb25zQ1NTO1xuICAgICAgICAgICAgfSwgXCJcIik7XG5cbiAgICAgIGlmIChjbGFzc05hbWUgPT09IG51bGwpIHtcbiAgICAgICAgY3NzID0gZGVjbGFyYXRpb25zQ1NTOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjc3MgPSBgLiR7Y2xhc3NOYW1lfSB7XG4ke2RlY2xhcmF0aW9uc0NTU31cbn1cblxuYDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uTm9kZXMgPSBkZWNsYXJhdGlvblF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBkZWNsYXJhdGlvbk5vZGVzLm1hcCgoZGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gZGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uID0gRGVjbGFyYXRpb24uZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IG5ldyBEZWNsYXJhdGlvbnMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9ucztcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsU0FBQTtJQUVBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFQSxnQkFBQSxHQUpBLFNBQUEsT0FJQSxjQUFBLEVBQUEsY0FBQTtJQUVBLFlBQUE7YUFBQSxZQUFBLENBQ0EsS0FBQTs4QkFEQSxZQUFBO2FBRUEsS0FBQSxHQUFBLEtBQUE7O2lCQUZBLFlBQUE7O0FBS0EsZUFBQSxHQUFBLGVBQUE7NEJBQUEsZUFBQSxDQUFBLFFBQUE7b0JBQ0EsTUFBQSxRQUFBLEtBQUEsQ0FBQSxNQUFBLEVBQ0EsVUFBQSxHQUFBLENBQUEsRUFDQSxTQUFBLEdBQUEsTUFBQSxHQUFBLENBQUE7d0JBRUEsS0FBQSxHQUFBLFVBQUEsRUFBQSxLQUFBLElBQUEsU0FBQSxFQUFBLEtBQUE7d0JBQ0EsV0FBQSxRQUFBLEtBQUEsQ0FBQSxLQUFBO0FBRUEsNEJBQUEsQ0FBQSxXQUFBLEVBQUEsS0FBQTs7Ozs7QUFJQSxlQUFBLEdBQUEsZ0JBQUE7NEJBQUEsZ0JBQUEsQ0FBQSxRQUFBO29CQUNBLE1BQUEsUUFBQSxLQUFBLENBQUEsTUFBQSxFQUNBLFVBQUEsR0FBQSxDQUFBLEVBQ0EsU0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBO3dCQUVBLEtBQUEsR0FBQSxTQUFBLEVBQUEsS0FBQSxJQUFBLFVBQUEsRUFBQSxLQUFBO3dCQUNBLFdBQUEsUUFBQSxLQUFBLENBQUEsS0FBQTtBQUVBLDRCQUFBLENBQUEsV0FBQSxFQUFBLEtBQUE7Ozs7O0FBSUEsZUFBQSxHQUFBLE9BQUE7NEJBQUEsT0FBQSxDQUFBLFlBQUE7QUFDQSw0QkFBQSxDQUFBLGdCQUFBLFdBQUEsV0FBQTt3QkFDQSxPQUFBLEdBQUEsV0FBQSxDQUFBLFlBQUEsTUFBQSxLQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUE7eUJBRUEsT0FBQTs2QkFDQSxLQUFBLENBQUEsT0FBQSxDQUFBLFdBQUE7Ozs7OztBQUtBLGVBQUEsR0FBQSxLQUFBOzRCQUFBLEtBQUEsQ0FBQSxTQUFBLEVBQUEsTUFBQTtvQkFDQSxNQUFBLEtBQUEsU0FBQTtBQUNBLDBCQUFBLEdBQUEsU0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBRUEsNkJBQUEsR0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7O29CQUdBLEdBQUE7b0JBRUEsTUFBQSxRQUFBLEtBQUEsQ0FBQSxNQUFBO29CQUVBLE1BQUEsR0FBQSxDQUFBO3dCQUNBLFNBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxFQUNBLGVBQUEsUUFBQSxLQUFBLENBQUEsTUFBQSxVQUFBLGdCQUFBLEVBQUEsV0FBQSxFQUFBLEtBQUE7NEJBQ0EsSUFBQSxHQUFBLEtBQUEsS0FBQSxTQUFBLEVBQ0EsY0FBQSxHQUFBLFdBQUEsQ0FBQSxLQUFBLENBQUEsTUFBQSxFQUFBLElBQUE7QUFFQSx3Q0FBQSxJQUFBLGNBQUE7K0JBRUEsZ0JBQUE7O3dCQUdBLFNBQUEsS0FBQSxJQUFBO0FBQ0EsMkJBQUEsR0FBQSxlQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7O0FBRUEsMkJBQUEsSUFBQSxDQUFBLEVBQ0EsTUFBQSxDQURBLFNBQUEsR0FBQSxJQUNBLEdBQUEsTUFHQSxDQUhBLGVBQUEsR0FBQSxPQUdBOzs7dUJBSUEsR0FBQTs7Ozs7QUFHQSxlQUFBLEdBQUEsaUJBQUE7NEJBQUEsaUJBQUEsQ0FBQSxJQUFBLEVBQUEsTUFBQTtvQkFDQSxnQkFBQSxHQUFBLGdCQUFBLENBQUEsT0FBQSxDQUFBLElBQUEsR0FDQSxLQUFBLEdBQUEsZ0JBQUEsQ0FBQSxHQUFBLFVBQUEsZUFBQTt3QkFDQSxLQUFBLEdBQUEsZUFBQSxFQUNBLFdBQUEsR0FuRkEsWUFBQSxTQW1GQSxpQkFBQSxDQUFBLEtBQUEsRUFBQSxNQUFBOzJCQUVBLFdBQUE7b0JBRUEsWUFBQSxPQUFBLFlBQUEsQ0FBQSxLQUFBO3VCQUVBLFlBQUE7Ozs7V0FyRkEsWUFBQTs7a0JBQUEsWUFBQSJ9