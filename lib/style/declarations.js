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
    key: "getProperties",
    value: function getProperties() {
      var properties = this.array.map(function (declaration) {
        var property = declaration.getProperty();
        return property;
      });
      return properties;
    }
  }, {
    key: "getArray",
    value: function getArray() {
      return this.array;
    }
  }, {
    key: "unshift",
    value: function unshift(declarations) {
      var _this = this;

      var properties = this.getProperties(),
          array = declarations.getArray();
      array.forEach(function (declaration) {
        var property = declaration.getProperty(),
            propertiesIncludesProperty = properties.includes(property);

        if (!propertiesIncludesProperty) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2xhcmF0aW9ucy5qcyJdLCJuYW1lcyI6WyJkZWNsYXJhdGlvblF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIkRlY2xhcmF0aW9ucyIsImFycmF5IiwicHJvcGVydGllcyIsIm1hcCIsImRlY2xhcmF0aW9uIiwicHJvcGVydHkiLCJnZXRQcm9wZXJ0eSIsImRlY2xhcmF0aW9ucyIsImdldFByb3BlcnRpZXMiLCJnZXRBcnJheSIsImZvckVhY2giLCJwcm9wZXJ0aWVzSW5jbHVkZXNQcm9wZXJ0eSIsImluY2x1ZGVzIiwidW5zaGlmdCIsImNsYXNzTmFtZSIsImluZGVudCIsInVuZGVmaW5lZCIsImNzcyIsImxlbmd0aCIsImxhc3RJbmRleCIsImRlY2xhcmF0aW9uc0NTUyIsInJlZHVjZSIsImluZGV4IiwibGFzdCIsImRlY2xhcmF0aW9uQ1NTIiwiYXNDU1MiLCJub2RlIiwidG9rZW5zIiwiZGVjbGFyYXRpb25Ob2RlcyIsImV4ZWN1dGUiLCJkZWNsYXJhdGlvbk5vZGUiLCJEZWNsYXJhdGlvbiIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLGdCQUFNQyxjQUFOLENBQXFCLGdCQUFyQixDQUF6Qjs7SUFFcUJDLFk7QUFDbkIsd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7b0NBRWU7QUFDZCxVQUFNQyxVQUFVLEdBQUcsS0FBS0QsS0FBTCxDQUFXRSxHQUFYLENBQWUsVUFBQ0MsV0FBRCxFQUFpQjtBQUNqRCxZQUFNQyxRQUFRLEdBQUdELFdBQVcsQ0FBQ0UsV0FBWixFQUFqQjtBQUVBLGVBQU9ELFFBQVA7QUFDRCxPQUprQixDQUFuQjtBQU1BLGFBQU9ILFVBQVA7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLRCxLQUFaO0FBQ0Q7Ozs0QkFFT00sWSxFQUFjO0FBQUE7O0FBQ3BCLFVBQU1MLFVBQVUsR0FBRyxLQUFLTSxhQUFMLEVBQW5CO0FBQUEsVUFDTVAsS0FBSyxHQUFHTSxZQUFZLENBQUNFLFFBQWIsRUFEZDtBQUdBUixNQUFBQSxLQUFLLENBQUNTLE9BQU4sQ0FBYyxVQUFDTixXQUFELEVBQWlCO0FBQzdCLFlBQU1DLFFBQVEsR0FBR0QsV0FBVyxDQUFDRSxXQUFaLEVBQWpCO0FBQUEsWUFDTUssMEJBQTBCLEdBQUdULFVBQVUsQ0FBQ1UsUUFBWCxDQUFvQlAsUUFBcEIsQ0FEbkM7O0FBR0EsWUFBSSxDQUFDTSwwQkFBTCxFQUFpQztBQUMvQixVQUFBLEtBQUksQ0FBQ1YsS0FBTCxDQUFXWSxPQUFYLENBQW1CVCxXQUFuQjtBQUNEO0FBQ0YsT0FQRDtBQVFEOzs7MEJBRUtVLFMsRUFBV0MsTSxFQUFRO0FBQ3ZCLFVBQUlBLE1BQU0sS0FBS0MsU0FBZixFQUEwQjtBQUN4QkQsUUFBQUEsTUFBTSxHQUFHRCxTQUFULENBRHdCLENBQ0o7O0FBRXBCQSxRQUFBQSxTQUFTLEdBQUcsSUFBWixDQUh3QixDQUdOO0FBQ25COztBQUVELFVBQUlHLEdBQUcsR0FBRyxFQUFWO0FBRUEsVUFBTUMsTUFBTSxHQUFHLEtBQUtqQixLQUFMLENBQVdpQixNQUExQjs7QUFFQSxVQUFJQSxNQUFNLEdBQUcsQ0FBYixFQUFnQjtBQUNkLFlBQU1DLFNBQVMsR0FBR0QsTUFBTSxHQUFHLENBQTNCO0FBQUEsWUFDTUUsZUFBZSxHQUFHLEtBQUtuQixLQUFMLENBQVdvQixNQUFYLENBQWtCLFVBQUNELGVBQUQsRUFBa0JoQixXQUFsQixFQUErQmtCLEtBQS9CLEVBQXlDO0FBQzNFLGNBQU1DLElBQUksR0FBSUQsS0FBSyxLQUFLSCxTQUF4QjtBQUFBLGNBQ01LLGNBQWMsR0FBR3BCLFdBQVcsQ0FBQ3FCLEtBQVosQ0FBa0JWLE1BQWxCLEVBQTBCUSxJQUExQixDQUR2QjtBQUdBSCxVQUFBQSxlQUFlLElBQUlJLGNBQW5CO0FBRUEsaUJBQU9KLGVBQVA7QUFDRCxTQVBpQixFQU9mLEVBUGUsQ0FEeEI7O0FBVUEsWUFBSU4sU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3RCRyxVQUFBQSxHQUFHLEdBQUdHLGVBQU4sQ0FEc0IsQ0FDRTtBQUN6QixTQUZELE1BRU87QUFDTEgsVUFBQUEsR0FBRyxjQUFPSCxTQUFQLGlCQUNUTSxlQURTLFlBQUg7QUFLRDtBQUNGOztBQUVELGFBQU9ILEdBQVA7QUFDRDs7O3NDQUV3QlMsSSxFQUFNQyxNLEVBQVE7QUFDckMsVUFBTUMsZ0JBQWdCLEdBQUcvQixnQkFBZ0IsQ0FBQ2dDLE9BQWpCLENBQXlCSCxJQUF6QixDQUF6QjtBQUFBLFVBQ016QixLQUFLLEdBQUcyQixnQkFBZ0IsQ0FBQ3pCLEdBQWpCLENBQXFCLFVBQUMyQixlQUFELEVBQXFCO0FBQ2hELFlBQU1KLElBQUksR0FBR0ksZUFBYjtBQUFBLFlBQThCO0FBQ3hCMUIsUUFBQUEsV0FBVyxHQUFHMkIsd0JBQVlDLGlCQUFaLENBQThCTixJQUE5QixFQUFvQ0MsTUFBcEMsQ0FEcEI7O0FBR0EsZUFBT3ZCLFdBQVA7QUFDRCxPQUxPLENBRGQ7QUFBQSxVQU9NRyxZQUFZLEdBQUcsSUFBSVAsWUFBSixDQUFpQkMsS0FBakIsQ0FQckI7QUFTQSxhQUFPTSxZQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi9kZWNsYXJhdGlvblwiO1xuXG5jb25zdCBkZWNsYXJhdGlvblF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvKi9kZWNsYXJhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb25zIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzKCkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLmFycmF5Lm1hcCgoZGVjbGFyYXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gZGVjbGFyYXRpb24uZ2V0UHJvcGVydHkoKTtcblxuICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb3BlcnRpZXM7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIHVuc2hpZnQoZGVjbGFyYXRpb25zKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IHRoaXMuZ2V0UHJvcGVydGllcygpLFxuICAgICAgICAgIGFycmF5ID0gZGVjbGFyYXRpb25zLmdldEFycmF5KCk7XG5cbiAgICBhcnJheS5mb3JFYWNoKChkZWNsYXJhdGlvbikgPT4ge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSBkZWNsYXJhdGlvbi5nZXRQcm9wZXJ0eSgpLFxuICAgICAgICAgICAgcHJvcGVydGllc0luY2x1ZGVzUHJvcGVydHkgPSBwcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5KTtcblxuICAgICAgaWYgKCFwcm9wZXJ0aWVzSW5jbHVkZXNQcm9wZXJ0eSkge1xuICAgICAgICB0aGlzLmFycmF5LnVuc2hpZnQoZGVjbGFyYXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpIHtcbiAgICBpZiAoaW5kZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGluZGVudCA9IGNsYXNzTmFtZTsgLy8vXG5cbiAgICAgIGNsYXNzTmFtZSA9IG51bGw7IC8vL1xuICAgIH1cblxuICAgIGxldCBjc3MgPSBcIlwiO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5hcnJheS5sZW5ndGg7XG5cbiAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgbGFzdEluZGV4ID0gbGVuZ3RoIC0gMSxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuYXJyYXkucmVkdWNlKChkZWNsYXJhdGlvbnNDU1MsIGRlY2xhcmF0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBsYXN0ID0gKGluZGV4ID09PSBsYXN0SW5kZXgpLFxuICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbkNTUyA9IGRlY2xhcmF0aW9uLmFzQ1NTKGluZGVudCwgbGFzdCk7XG5cbiAgICAgICAgICAgICAgZGVjbGFyYXRpb25zQ1NTICs9IGRlY2xhcmF0aW9uQ1NTO1xuXG4gICAgICAgICAgICAgIHJldHVybiBkZWNsYXJhdGlvbnNDU1M7XG4gICAgICAgICAgICB9LCBcIlwiKTtcblxuICAgICAgaWYgKGNsYXNzTmFtZSA9PT0gbnVsbCkge1xuICAgICAgICBjc3MgPSBkZWNsYXJhdGlvbnNDU1M7ICAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNzcyA9IGAuJHtjbGFzc05hbWV9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfVxufVxuXG5gO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25Ob2RlcyA9IGRlY2xhcmF0aW9uUXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICBhcnJheSA9IGRlY2xhcmF0aW9uTm9kZXMubWFwKChkZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBkZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb24gPSBEZWNsYXJhdGlvbi5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gbmV3IERlY2xhcmF0aW9ucyhhcnJheSk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb25zO1xuICB9XG59XG4iXX0=