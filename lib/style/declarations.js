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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2xhcmF0aW9ucy5qcyJdLCJuYW1lcyI6WyJkZWNsYXJhdGlvblF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIkRlY2xhcmF0aW9ucyIsImFycmF5IiwicHJvcGVydGllcyIsIm1hcCIsImRlY2xhcmF0aW9uIiwicHJvcGVydHkiLCJnZXRQcm9wZXJ0eSIsImRlY2xhcmF0aW9ucyIsImdldFByb3BlcnRpZXMiLCJnZXRBcnJheSIsImZvckVhY2giLCJwcm9wZXJ0aWVzSW5jbHVkZXNQcm9wZXJ0eSIsImluY2x1ZGVzIiwidW5zaGlmdCIsImluZGVudCIsImNzcyIsImxlbmd0aCIsImxhc3RJbmRleCIsInJlZHVjZSIsImluZGV4IiwibGFzdCIsImRlY2xhcmF0aW9uQ1NTIiwiYXNDU1MiLCJub2RlIiwidG9rZW5zIiwiZGVjbGFyYXRpb25Ob2RlcyIsImV4ZWN1dGUiLCJkZWNsYXJhdGlvbk5vZGUiLCJEZWNsYXJhdGlvbiIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLGdCQUFNQyxjQUFOLENBQXFCLGdCQUFyQixDQUF6Qjs7SUFFcUJDLFk7QUFDbkIsd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7b0NBRWU7QUFDZCxVQUFNQyxVQUFVLEdBQUcsS0FBS0QsS0FBTCxDQUFXRSxHQUFYLENBQWUsVUFBQ0MsV0FBRCxFQUFpQjtBQUNqRCxZQUFNQyxRQUFRLEdBQUdELFdBQVcsQ0FBQ0UsV0FBWixFQUFqQjtBQUVBLGVBQU9ELFFBQVA7QUFDRCxPQUprQixDQUFuQjtBQU1BLGFBQU9ILFVBQVA7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLRCxLQUFaO0FBQ0Q7Ozs0QkFFT00sWSxFQUFjO0FBQUE7O0FBQ3BCLFVBQU1MLFVBQVUsR0FBRyxLQUFLTSxhQUFMLEVBQW5CO0FBQUEsVUFDTVAsS0FBSyxHQUFHTSxZQUFZLENBQUNFLFFBQWIsRUFEZDtBQUdBUixNQUFBQSxLQUFLLENBQUNTLE9BQU4sQ0FBYyxVQUFDTixXQUFELEVBQWlCO0FBQzdCLFlBQU1DLFFBQVEsR0FBR0QsV0FBVyxDQUFDRSxXQUFaLEVBQWpCO0FBQUEsWUFDTUssMEJBQTBCLEdBQUdULFVBQVUsQ0FBQ1UsUUFBWCxDQUFvQlAsUUFBcEIsQ0FEbkM7O0FBR0EsWUFBSSxDQUFDTSwwQkFBTCxFQUFpQztBQUMvQixVQUFBLEtBQUksQ0FBQ1YsS0FBTCxDQUFXWSxPQUFYLENBQW1CVCxXQUFuQjtBQUNEO0FBQ0YsT0FQRDtBQVFEOzs7MEJBRUtVLE0sRUFBUTtBQUNaLFVBQUlDLEdBQUcsR0FBRyxFQUFWO0FBRUEsVUFBTUMsTUFBTSxHQUFHLEtBQUtmLEtBQUwsQ0FBV2UsTUFBMUI7O0FBRUEsVUFBSUEsTUFBTSxHQUFFLENBQVosRUFBZTtBQUNiLFlBQU1DLFNBQVMsR0FBR0QsTUFBTSxHQUFHLENBQTNCO0FBRUFELFFBQUFBLEdBQUcsR0FBRyxLQUFLZCxLQUFMLENBQVdpQixNQUFYLENBQWtCLFVBQUNILEdBQUQsRUFBTVgsV0FBTixFQUFtQmUsS0FBbkIsRUFBNkI7QUFDbkQsY0FBTUMsSUFBSSxHQUFJRCxLQUFLLEtBQUtGLFNBQXhCO0FBRUEsY0FBTUksY0FBYyxHQUFHakIsV0FBVyxDQUFDa0IsS0FBWixDQUFrQlIsTUFBbEIsRUFBMEJNLElBQTFCLENBQXZCO0FBRUFMLFVBQUFBLEdBQUcsSUFBSU0sY0FBUDtBQUVBLGlCQUFPTixHQUFQO0FBQ0QsU0FSSyxFQVFILEVBUkcsQ0FBTjtBQVNEOztBQUVELGFBQU9BLEdBQVA7QUFDRDs7O3NDQUV3QlEsSSxFQUFNQyxNLEVBQVE7QUFDckMsVUFBTUMsZ0JBQWdCLEdBQUc1QixnQkFBZ0IsQ0FBQzZCLE9BQWpCLENBQXlCSCxJQUF6QixDQUF6QjtBQUFBLFVBQ010QixLQUFLLEdBQUd3QixnQkFBZ0IsQ0FBQ3RCLEdBQWpCLENBQXFCLFVBQUN3QixlQUFELEVBQXFCO0FBQ2hELFlBQU1KLElBQUksR0FBR0ksZUFBYjtBQUFBLFlBQThCO0FBQ3hCdkIsUUFBQUEsV0FBVyxHQUFHd0Isd0JBQVlDLGlCQUFaLENBQThCTixJQUE5QixFQUFvQ0MsTUFBcEMsQ0FEcEI7O0FBR0EsZUFBT3BCLFdBQVA7QUFDRCxPQUxPLENBRGQ7QUFBQSxVQU9NRyxZQUFZLEdBQUcsSUFBSVAsWUFBSixDQUFpQkMsS0FBakIsQ0FQckI7QUFTQSxhQUFPTSxZQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi9kZWNsYXJhdGlvblwiO1xuXG5jb25zdCBkZWNsYXJhdGlvblF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvKi9kZWNsYXJhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb25zIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzKCkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLmFycmF5Lm1hcCgoZGVjbGFyYXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gZGVjbGFyYXRpb24uZ2V0UHJvcGVydHkoKTtcblxuICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb3BlcnRpZXM7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIHVuc2hpZnQoZGVjbGFyYXRpb25zKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IHRoaXMuZ2V0UHJvcGVydGllcygpLFxuICAgICAgICAgIGFycmF5ID0gZGVjbGFyYXRpb25zLmdldEFycmF5KCk7XG5cbiAgICBhcnJheS5mb3JFYWNoKChkZWNsYXJhdGlvbikgPT4ge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSBkZWNsYXJhdGlvbi5nZXRQcm9wZXJ0eSgpLFxuICAgICAgICAgICAgcHJvcGVydGllc0luY2x1ZGVzUHJvcGVydHkgPSBwcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5KTtcblxuICAgICAgaWYgKCFwcm9wZXJ0aWVzSW5jbHVkZXNQcm9wZXJ0eSkge1xuICAgICAgICB0aGlzLmFycmF5LnVuc2hpZnQoZGVjbGFyYXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXNDU1MoaW5kZW50KSB7XG4gICAgbGV0IGNzcyA9IFwiXCI7XG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aDtcblxuICAgIGlmIChsZW5ndGg+IDApIHtcbiAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGxlbmd0aCAtIDE7XG5cbiAgICAgIGNzcyA9IHRoaXMuYXJyYXkucmVkdWNlKChjc3MsIGRlY2xhcmF0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBsYXN0ID0gKGluZGV4ID09PSBsYXN0SW5kZXgpO1xuXG4gICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uQ1NTID0gZGVjbGFyYXRpb24uYXNDU1MoaW5kZW50LCBsYXN0KTtcblxuICAgICAgICBjc3MgKz0gZGVjbGFyYXRpb25DU1M7XG5cbiAgICAgICAgcmV0dXJuIGNzcztcbiAgICAgIH0sIFwiXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25Ob2RlcyA9IGRlY2xhcmF0aW9uUXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICBhcnJheSA9IGRlY2xhcmF0aW9uTm9kZXMubWFwKChkZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBkZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb24gPSBEZWNsYXJhdGlvbi5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gbmV3IERlY2xhcmF0aW9ucyhhcnJheSk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb25zO1xuICB9XG59XG4iXX0=