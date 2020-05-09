"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamDom = require("occam-dom");

var _necessary = require("necessary");

var _declaration = _interopRequireDefault(require("./declaration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _unshift = _necessary.arrayUtilities.unshift;

var declarationQuery = _occamDom.Query.fromExpression("/*/declaration");

var Declarations = /*#__PURE__*/function () {
  function Declarations(array) {
    _classCallCheck(this, Declarations);

    this.array = array;
  }

  _createClass(Declarations, [{
    key: "getArray",
    value: function getArray() {
      return this.array;
    }
  }, {
    key: "unshift",
    value: function unshift(declarations) {
      var array = declarations.getArray();

      _unshift(this.array, array);
    }
  }, {
    key: "asCSS",
    value: function asCSS(indent) {
      var css = "";
      var length = this.array.length;

      if (length > 0) {
        var lastIndex = length - 1;
        css = this.array.reduce(function (css, declaration, index) {
          var last = index === lastIndex;
          var declarationCSS = declaration.asCSS(indent, last);
          css += declarationCSS;
          return css;
        }, "");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2xhcmF0aW9ucy5qcyJdLCJuYW1lcyI6WyJ1bnNoaWZ0IiwiYXJyYXlVdGlsaXRpZXMiLCJkZWNsYXJhdGlvblF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIkRlY2xhcmF0aW9ucyIsImFycmF5IiwiZGVjbGFyYXRpb25zIiwiZ2V0QXJyYXkiLCJpbmRlbnQiLCJjc3MiLCJsZW5ndGgiLCJsYXN0SW5kZXgiLCJyZWR1Y2UiLCJkZWNsYXJhdGlvbiIsImluZGV4IiwibGFzdCIsImRlY2xhcmF0aW9uQ1NTIiwiYXNDU1MiLCJub2RlIiwidG9rZW5zIiwiZGVjbGFyYXRpb25Ob2RlcyIsImV4ZWN1dGUiLCJtYXAiLCJkZWNsYXJhdGlvbk5vZGUiLCJEZWNsYXJhdGlvbiIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUVBOzs7Ozs7Ozs7O0lBRVFBLFEsR0FBWUMseUIsQ0FBWkQsTzs7QUFFUixJQUFNRSxnQkFBZ0IsR0FBR0MsZ0JBQU1DLGNBQU4sQ0FBcUIsZ0JBQXJCLENBQXpCOztJQUVxQkMsWTtBQUNuQix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7NEJBRU9DLFksRUFBYztBQUNwQixVQUFNRCxLQUFLLEdBQUdDLFlBQVksQ0FBQ0MsUUFBYixFQUFkOztBQUVBUixNQUFBQSxRQUFPLENBQUMsS0FBS00sS0FBTixFQUFhQSxLQUFiLENBQVA7QUFDRDs7OzBCQUVLRyxNLEVBQVE7QUFDWixVQUFJQyxHQUFHLEdBQUcsRUFBVjtBQUVBLFVBQU1DLE1BQU0sR0FBRyxLQUFLTCxLQUFMLENBQVdLLE1BQTFCOztBQUVBLFVBQUlBLE1BQU0sR0FBRSxDQUFaLEVBQWU7QUFDYixZQUFNQyxTQUFTLEdBQUdELE1BQU0sR0FBRyxDQUEzQjtBQUVBRCxRQUFBQSxHQUFHLEdBQUcsS0FBS0osS0FBTCxDQUFXTyxNQUFYLENBQWtCLFVBQUNILEdBQUQsRUFBTUksV0FBTixFQUFtQkMsS0FBbkIsRUFBNkI7QUFDbkQsY0FBTUMsSUFBSSxHQUFJRCxLQUFLLEtBQUtILFNBQXhCO0FBRUEsY0FBTUssY0FBYyxHQUFHSCxXQUFXLENBQUNJLEtBQVosQ0FBa0JULE1BQWxCLEVBQTBCTyxJQUExQixDQUF2QjtBQUVBTixVQUFBQSxHQUFHLElBQUlPLGNBQVA7QUFFQSxpQkFBT1AsR0FBUDtBQUNELFNBUkssRUFRSCxFQVJHLENBQU47QUFTRDs7QUFFRCxhQUFPQSxHQUFQO0FBQ0Q7OztzQ0FFd0JTLEksRUFBTUMsTSxFQUFRO0FBQ3JDLFVBQU1DLGdCQUFnQixHQUFHbkIsZ0JBQWdCLENBQUNvQixPQUFqQixDQUF5QkgsSUFBekIsQ0FBekI7QUFBQSxVQUNNYixLQUFLLEdBQUdlLGdCQUFnQixDQUFDRSxHQUFqQixDQUFxQixVQUFDQyxlQUFELEVBQXFCO0FBQ2hELFlBQU1MLElBQUksR0FBR0ssZUFBYjtBQUFBLFlBQThCO0FBQ3hCVixRQUFBQSxXQUFXLEdBQUdXLHdCQUFZQyxpQkFBWixDQUE4QlAsSUFBOUIsRUFBb0NDLE1BQXBDLENBRHBCOztBQUdBLGVBQU9OLFdBQVA7QUFDRCxPQUxPLENBRGQ7QUFBQSxVQU9NUCxZQUFZLEdBQUcsSUFBSUYsWUFBSixDQUFpQkMsS0FBakIsQ0FQckI7QUFTQSxhQUFPQyxZQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuL2RlY2xhcmF0aW9uXCI7XG5cbmNvbnN0IHsgdW5zaGlmdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IGRlY2xhcmF0aW9uUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8qL2RlY2xhcmF0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWNsYXJhdGlvbnMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgdW5zaGlmdChkZWNsYXJhdGlvbnMpIHtcbiAgICBjb25zdCBhcnJheSA9IGRlY2xhcmF0aW9ucy5nZXRBcnJheSgpO1xuXG4gICAgdW5zaGlmdCh0aGlzLmFycmF5LCBhcnJheSk7XG4gIH1cblxuICBhc0NTUyhpbmRlbnQpIHtcbiAgICBsZXQgY3NzID0gXCJcIjtcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoO1xuXG4gICAgaWYgKGxlbmd0aD4gMCkge1xuICAgICAgY29uc3QgbGFzdEluZGV4ID0gbGVuZ3RoIC0gMTtcblxuICAgICAgY3NzID0gdGhpcy5hcnJheS5yZWR1Y2UoKGNzcywgZGVjbGFyYXRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGxhc3QgPSAoaW5kZXggPT09IGxhc3RJbmRleCk7XG5cbiAgICAgICAgY29uc3QgZGVjbGFyYXRpb25DU1MgPSBkZWNsYXJhdGlvbi5hc0NTUyhpbmRlbnQsIGxhc3QpO1xuXG4gICAgICAgIGNzcyArPSBkZWNsYXJhdGlvbkNTUztcblxuICAgICAgICByZXR1cm4gY3NzO1xuICAgICAgfSwgXCJcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbk5vZGVzID0gZGVjbGFyYXRpb25RdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICAgIGFycmF5ID0gZGVjbGFyYXRpb25Ob2Rlcy5tYXAoKGRlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGRlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbiA9IERlY2xhcmF0aW9uLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBkZWNsYXJhdGlvbjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBuZXcgRGVjbGFyYXRpb25zKGFycmF5KTtcblxuICAgIHJldHVybiBkZWNsYXJhdGlvbnM7XG4gIH1cbn1cbiJdfQ==