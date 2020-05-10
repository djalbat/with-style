"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamDom = require("occam-dom");

var _declaration = _interopRequireDefault(require("./declaration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var declarationQuery = _occamDom.Query.fromExpression("/*/declaration");

var Declarations = /*#__PURE__*/function () {
  function Declarations(array) {
    _classCallCheck(this, Declarations);

    this.array = array;
  }

  _createClass(Declarations, [{
    key: "forwardsForEach",
    value: function forwardsForEach(callback) {
      var length = this.array.length,
          firstIndex = 0,
          lastIndex = length - 1;

      for (var index = firstIndex; index <= lastIndex; index++) {
        var declaration = this.array[index];
        callback(declaration, index);
      }
    }
  }, {
    key: "backwardsForEach",
    value: function backwardsForEach(callback) {
      var length = this.array.length,
          firstIndex = 0,
          lastIndex = length - 1;

      for (var index = lastIndex; index >= firstIndex; index--) {
        var declaration = this.array[index];
        callback(declaration, index);
      }
    }
  }, {
    key: "unshift",
    value: function unshift(declarations) {
      var _this = this;

      declarations.backwardsForEach(function (declaration) {
        var matches = declaration.checkMatches(_this.array); ///

        if (!matches) {
          _this.array.unshift(declaration);
        }
      });
    }
  }, {
    key: "asCSS",
    value: function asCSS(className, indent) {
      if (indent === undefined) {
        indent = className; ///

        className = null; ///
      }

      var css = "";
      var length = this.array.length;

      if (length > 0) {
        var lastIndex = length - 1,
            declarationsCSS = this.array.reduce(function (declarationsCSS, declaration, index) {
          var last = index === lastIndex,
              declarationCSS = declaration.asCSS(indent, last);
          declarationsCSS += declarationCSS;
          return declarationsCSS;
        }, "");

        if (className === null) {
          css = declarationsCSS; ///
        } else {
          css = ".".concat(className, " {\n").concat(declarationsCSS, "\n}\n\n");
        }
      }

      return css;
    }
  }], [{
    key: "fromNodeAndTokens",
    value: function fromNodeAndTokens(node, tokens) {
      var declarationNodes = declarationQuery.execute(node),
          array = declarationNodes.map(function (declarationNode) {
        var node = declarationNode,
            ///
        declaration = _declaration["default"].fromNodeAndTokens(node, tokens);

        return declaration;
      }),
          declarations = new Declarations(array);
      return declarations;
    }
  }]);

  return Declarations;
}();

exports["default"] = Declarations;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2xhcmF0aW9ucy5qcyJdLCJuYW1lcyI6WyJkZWNsYXJhdGlvblF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIkRlY2xhcmF0aW9ucyIsImFycmF5IiwiY2FsbGJhY2siLCJsZW5ndGgiLCJmaXJzdEluZGV4IiwibGFzdEluZGV4IiwiaW5kZXgiLCJkZWNsYXJhdGlvbiIsImRlY2xhcmF0aW9ucyIsImJhY2t3YXJkc0ZvckVhY2giLCJtYXRjaGVzIiwiY2hlY2tNYXRjaGVzIiwidW5zaGlmdCIsImNsYXNzTmFtZSIsImluZGVudCIsInVuZGVmaW5lZCIsImNzcyIsImRlY2xhcmF0aW9uc0NTUyIsInJlZHVjZSIsImxhc3QiLCJkZWNsYXJhdGlvbkNTUyIsImFzQ1NTIiwibm9kZSIsInRva2VucyIsImRlY2xhcmF0aW9uTm9kZXMiLCJleGVjdXRlIiwibWFwIiwiZGVjbGFyYXRpb25Ob2RlIiwiRGVjbGFyYXRpb24iLCJmcm9tTm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQixHQUFHQyxnQkFBTUMsY0FBTixDQUFxQixnQkFBckIsQ0FBekI7O0lBRXFCQyxZO0FBQ25CLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7O29DQUVlQyxRLEVBQVU7QUFDeEIsVUFBTUMsTUFBTSxHQUFHLEtBQUtGLEtBQUwsQ0FBV0UsTUFBMUI7QUFBQSxVQUNNQyxVQUFVLEdBQUcsQ0FEbkI7QUFBQSxVQUVNQyxTQUFTLEdBQUdGLE1BQU0sR0FBRyxDQUYzQjs7QUFJQSxXQUFLLElBQUlHLEtBQUssR0FBR0YsVUFBakIsRUFBNkJFLEtBQUssSUFBSUQsU0FBdEMsRUFBaURDLEtBQUssRUFBdEQsRUFBMEQ7QUFDeEQsWUFBTUMsV0FBVyxHQUFHLEtBQUtOLEtBQUwsQ0FBV0ssS0FBWCxDQUFwQjtBQUVBSixRQUFBQSxRQUFRLENBQUNLLFdBQUQsRUFBY0QsS0FBZCxDQUFSO0FBQ0Q7QUFDRjs7O3FDQUVnQkosUSxFQUFVO0FBQ3pCLFVBQU1DLE1BQU0sR0FBRyxLQUFLRixLQUFMLENBQVdFLE1BQTFCO0FBQUEsVUFDTUMsVUFBVSxHQUFHLENBRG5CO0FBQUEsVUFFTUMsU0FBUyxHQUFHRixNQUFNLEdBQUcsQ0FGM0I7O0FBSUEsV0FBSyxJQUFJRyxLQUFLLEdBQUdELFNBQWpCLEVBQTRCQyxLQUFLLElBQUlGLFVBQXJDLEVBQWlERSxLQUFLLEVBQXRELEVBQTBEO0FBQ3hELFlBQU1DLFdBQVcsR0FBRyxLQUFLTixLQUFMLENBQVdLLEtBQVgsQ0FBcEI7QUFFQUosUUFBQUEsUUFBUSxDQUFDSyxXQUFELEVBQWNELEtBQWQsQ0FBUjtBQUNEO0FBQ0Y7Ozs0QkFFT0UsWSxFQUFjO0FBQUE7O0FBQ3BCQSxNQUFBQSxZQUFZLENBQUNDLGdCQUFiLENBQThCLFVBQUNGLFdBQUQsRUFBaUI7QUFDN0MsWUFBTUcsT0FBTyxHQUFHSCxXQUFXLENBQUNJLFlBQVosQ0FBeUIsS0FBSSxDQUFDVixLQUE5QixDQUFoQixDQUQ2QyxDQUNTOztBQUV0RCxZQUFJLENBQUNTLE9BQUwsRUFBYztBQUNaLFVBQUEsS0FBSSxDQUFDVCxLQUFMLENBQVdXLE9BQVgsQ0FBbUJMLFdBQW5CO0FBQ0Q7QUFDRixPQU5EO0FBT0Q7OzswQkFFS00sUyxFQUFXQyxNLEVBQVE7QUFDdkIsVUFBSUEsTUFBTSxLQUFLQyxTQUFmLEVBQTBCO0FBQ3hCRCxRQUFBQSxNQUFNLEdBQUdELFNBQVQsQ0FEd0IsQ0FDSjs7QUFFcEJBLFFBQUFBLFNBQVMsR0FBRyxJQUFaLENBSHdCLENBR047QUFDbkI7O0FBRUQsVUFBSUcsR0FBRyxHQUFHLEVBQVY7QUFFQSxVQUFNYixNQUFNLEdBQUcsS0FBS0YsS0FBTCxDQUFXRSxNQUExQjs7QUFFQSxVQUFJQSxNQUFNLEdBQUcsQ0FBYixFQUFnQjtBQUNkLFlBQU1FLFNBQVMsR0FBR0YsTUFBTSxHQUFHLENBQTNCO0FBQUEsWUFDTWMsZUFBZSxHQUFHLEtBQUtoQixLQUFMLENBQVdpQixNQUFYLENBQWtCLFVBQUNELGVBQUQsRUFBa0JWLFdBQWxCLEVBQStCRCxLQUEvQixFQUF5QztBQUMzRSxjQUFNYSxJQUFJLEdBQUliLEtBQUssS0FBS0QsU0FBeEI7QUFBQSxjQUNNZSxjQUFjLEdBQUdiLFdBQVcsQ0FBQ2MsS0FBWixDQUFrQlAsTUFBbEIsRUFBMEJLLElBQTFCLENBRHZCO0FBR0FGLFVBQUFBLGVBQWUsSUFBSUcsY0FBbkI7QUFFQSxpQkFBT0gsZUFBUDtBQUNELFNBUGlCLEVBT2YsRUFQZSxDQUR4Qjs7QUFVQSxZQUFJSixTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDdEJHLFVBQUFBLEdBQUcsR0FBR0MsZUFBTixDQURzQixDQUNFO0FBQ3pCLFNBRkQsTUFFTztBQUNMRCxVQUFBQSxHQUFHLGNBQU9ILFNBQVAsaUJBQ1RJLGVBRFMsWUFBSDtBQUtEO0FBQ0Y7O0FBRUQsYUFBT0QsR0FBUDtBQUNEOzs7c0NBRXdCTSxJLEVBQU1DLE0sRUFBUTtBQUNyQyxVQUFNQyxnQkFBZ0IsR0FBRzNCLGdCQUFnQixDQUFDNEIsT0FBakIsQ0FBeUJILElBQXpCLENBQXpCO0FBQUEsVUFDTXJCLEtBQUssR0FBR3VCLGdCQUFnQixDQUFDRSxHQUFqQixDQUFxQixVQUFDQyxlQUFELEVBQXFCO0FBQ2hELFlBQU1MLElBQUksR0FBR0ssZUFBYjtBQUFBLFlBQThCO0FBQ3hCcEIsUUFBQUEsV0FBVyxHQUFHcUIsd0JBQVlDLGlCQUFaLENBQThCUCxJQUE5QixFQUFvQ0MsTUFBcEMsQ0FEcEI7O0FBR0EsZUFBT2hCLFdBQVA7QUFDRCxPQUxPLENBRGQ7QUFBQSxVQU9NQyxZQUFZLEdBQUcsSUFBSVIsWUFBSixDQUFpQkMsS0FBakIsQ0FQckI7QUFTQSxhQUFPTyxZQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi9kZWNsYXJhdGlvblwiO1xuXG5jb25zdCBkZWNsYXJhdGlvblF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvKi9kZWNsYXJhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb25zIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBmb3J3YXJkc0ZvckVhY2goY2FsbGJhY2spIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aCxcbiAgICAgICAgICBmaXJzdEluZGV4ID0gMCxcbiAgICAgICAgICBsYXN0SW5kZXggPSBsZW5ndGggLSAxO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSBmaXJzdEluZGV4OyBpbmRleCA8PSBsYXN0SW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gdGhpcy5hcnJheVtpbmRleF07XG5cbiAgICAgIGNhbGxiYWNrKGRlY2xhcmF0aW9uLCBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgYmFja3dhcmRzRm9yRWFjaChjYWxsYmFjaykge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSAwLFxuICAgICAgICAgIGxhc3RJbmRleCA9IGxlbmd0aCAtIDE7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IGxhc3RJbmRleDsgaW5kZXggPj0gZmlyc3RJbmRleDsgaW5kZXgtLSkge1xuICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSB0aGlzLmFycmF5W2luZGV4XTtcblxuICAgICAgY2FsbGJhY2soZGVjbGFyYXRpb24sIGluZGV4KTtcbiAgICB9XG4gIH1cblxuICB1bnNoaWZ0KGRlY2xhcmF0aW9ucykge1xuICAgIGRlY2xhcmF0aW9ucy5iYWNrd2FyZHNGb3JFYWNoKChkZWNsYXJhdGlvbikgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IGRlY2xhcmF0aW9uLmNoZWNrTWF0Y2hlcyh0aGlzLmFycmF5KTsgLy8vXG5cbiAgICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgICB0aGlzLmFycmF5LnVuc2hpZnQoZGVjbGFyYXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpIHtcbiAgICBpZiAoaW5kZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGluZGVudCA9IGNsYXNzTmFtZTsgLy8vXG5cbiAgICAgIGNsYXNzTmFtZSA9IG51bGw7IC8vL1xuICAgIH1cblxuICAgIGxldCBjc3MgPSBcIlwiO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5hcnJheS5sZW5ndGg7XG5cbiAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgbGFzdEluZGV4ID0gbGVuZ3RoIC0gMSxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuYXJyYXkucmVkdWNlKChkZWNsYXJhdGlvbnNDU1MsIGRlY2xhcmF0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBsYXN0ID0gKGluZGV4ID09PSBsYXN0SW5kZXgpLFxuICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbkNTUyA9IGRlY2xhcmF0aW9uLmFzQ1NTKGluZGVudCwgbGFzdCk7XG5cbiAgICAgICAgICAgICAgZGVjbGFyYXRpb25zQ1NTICs9IGRlY2xhcmF0aW9uQ1NTO1xuXG4gICAgICAgICAgICAgIHJldHVybiBkZWNsYXJhdGlvbnNDU1M7XG4gICAgICAgICAgICB9LCBcIlwiKTtcblxuICAgICAgaWYgKGNsYXNzTmFtZSA9PT0gbnVsbCkge1xuICAgICAgICBjc3MgPSBkZWNsYXJhdGlvbnNDU1M7ICAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNzcyA9IGAuJHtjbGFzc05hbWV9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfVxufVxuXG5gO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25Ob2RlcyA9IGRlY2xhcmF0aW9uUXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICBhcnJheSA9IGRlY2xhcmF0aW9uTm9kZXMubWFwKChkZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBkZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb24gPSBEZWNsYXJhdGlvbi5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gbmV3IERlY2xhcmF0aW9ucyhhcnJheSk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb25zO1xuICB9XG59XG4iXX0=