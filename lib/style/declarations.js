'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dom = require('occam-dom'),
    ///
necessary = require('necessary');

var nodeUtilities = require('../utilities/node');

var arrayUtilities = necessary.arrayUtilities,
    Query = dom.Query,
    _unshift = arrayUtilities.unshift,
    asContent = nodeUtilities.asContent;
var declarationQuery = Query.fromExpression('/*/declaration');

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
      var css = '';
      var length = this.array.length;

      if (length > 0) {
        var lastIndex = length - 1;
        this.array.forEach(function (declaration, index) {
          var declarationCSS = index === lastIndex ? "".concat(indent).concat(declaration) : "".concat(indent).concat(declaration, "\n");
          css += declarationCSS;
        });
      }

      return css;
    }
  }], [{
    key: "fromNodeAndTokens",
    value: function fromNodeAndTokens(node, tokens) {
      var declarationNodes = declarationQuery.execute(node),
          array = declarationNodes.map(function (declarationNode) {
        var declarationNodeContent = asContent(declarationNode, tokens),
            declaration = declarationNodeContent; ///

        return declaration;
      }),
          declarations = new Declarations(array);
      return declarations;
    }
  }]);

  return Declarations;
}();

module.exports = Declarations;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2xhcmF0aW9ucy5qcyJdLCJuYW1lcyI6WyJkb20iLCJyZXF1aXJlIiwibmVjZXNzYXJ5Iiwibm9kZVV0aWxpdGllcyIsImFycmF5VXRpbGl0aWVzIiwiUXVlcnkiLCJ1bnNoaWZ0IiwiYXNDb250ZW50IiwiZGVjbGFyYXRpb25RdWVyeSIsImZyb21FeHByZXNzaW9uIiwiRGVjbGFyYXRpb25zIiwiYXJyYXkiLCJkZWNsYXJhdGlvbnMiLCJnZXRBcnJheSIsImluZGVudCIsImNzcyIsImxlbmd0aCIsImxhc3RJbmRleCIsImZvckVhY2giLCJkZWNsYXJhdGlvbiIsImluZGV4IiwiZGVjbGFyYXRpb25DU1MiLCJub2RlIiwidG9rZW5zIiwiZGVjbGFyYXRpb25Ob2RlcyIsImV4ZWN1dGUiLCJtYXAiLCJkZWNsYXJhdGlvbk5vZGUiLCJkZWNsYXJhdGlvbk5vZGVDb250ZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsR0FBRyxHQUFHQyxPQUFPLENBQUMsV0FBRCxDQUFuQjtBQUFBLElBQW1DO0FBQzdCQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxXQUFELENBRHpCOztBQUdBLElBQU1FLGFBQWEsR0FBR0YsT0FBTyxDQUFDLG1CQUFELENBQTdCOztBQUVNLElBQUVHLGNBQUYsR0FBcUJGLFNBQXJCLENBQUVFLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lMLEdBRFosQ0FDRUssS0FERjtBQUFBLElBRUVDLFFBRkYsR0FFY0YsY0FGZCxDQUVFRSxPQUZGO0FBQUEsSUFHRUMsU0FIRixHQUdnQkosYUFIaEIsQ0FHRUksU0FIRjtBQUtOLElBQU1DLGdCQUFnQixHQUFHSCxLQUFLLENBQUNJLGNBQU4sQ0FBcUIsZ0JBQXJCLENBQXpCOztJQUVNQyxZO0FBQ0osd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtBLEtBQVo7QUFDRDs7OzRCQUVPQyxZLEVBQWM7QUFDcEIsVUFBTUQsS0FBSyxHQUFHQyxZQUFZLENBQUNDLFFBQWIsRUFBZDs7QUFFQVAsTUFBQUEsUUFBTyxDQUFDLEtBQUtLLEtBQU4sRUFBYUEsS0FBYixDQUFQO0FBQ0Q7OzswQkFFS0csTSxFQUFRO0FBQ1osVUFBSUMsR0FBRyxHQUFHLEVBQVY7QUFFQSxVQUFNQyxNQUFNLEdBQUcsS0FBS0wsS0FBTCxDQUFXSyxNQUExQjs7QUFFQSxVQUFJQSxNQUFNLEdBQUcsQ0FBYixFQUFnQjtBQUNkLFlBQU1DLFNBQVMsR0FBR0QsTUFBTSxHQUFHLENBQTNCO0FBRUEsYUFBS0wsS0FBTCxDQUFXTyxPQUFYLENBQW1CLFVBQVNDLFdBQVQsRUFBc0JDLEtBQXRCLEVBQTZCO0FBQzlDLGNBQU1DLGNBQWMsR0FBSUQsS0FBSyxLQUFLSCxTQUFYLGFBQ0lILE1BREosU0FDYUssV0FEYixjQUVNTCxNQUZOLFNBRWVLLFdBRmYsT0FBdkI7QUFJQUosVUFBQUEsR0FBRyxJQUFJTSxjQUFQO0FBQ0QsU0FORDtBQU9EOztBQUVELGFBQU9OLEdBQVA7QUFDRDs7O3NDQUV3Qk8sSSxFQUFNQyxNLEVBQVE7QUFDckMsVUFBTUMsZ0JBQWdCLEdBQUdoQixnQkFBZ0IsQ0FBQ2lCLE9BQWpCLENBQXlCSCxJQUF6QixDQUF6QjtBQUFBLFVBQ01YLEtBQUssR0FBR2EsZ0JBQWdCLENBQUNFLEdBQWpCLENBQXFCLFVBQVNDLGVBQVQsRUFBMEI7QUFDckQsWUFBTUMsc0JBQXNCLEdBQUdyQixTQUFTLENBQUNvQixlQUFELEVBQWtCSixNQUFsQixDQUF4QztBQUFBLFlBQ01KLFdBQVcsR0FBR1Msc0JBRHBCLENBRHFELENBRVQ7O0FBRTVDLGVBQU9ULFdBQVA7QUFDRCxPQUxPLENBRGQ7QUFBQSxVQU9NUCxZQUFZLEdBQUcsSUFBSUYsWUFBSixDQUFpQkMsS0FBakIsQ0FQckI7QUFTQSxhQUFPQyxZQUFQO0FBQ0Q7Ozs7OztBQUdIaUIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCcEIsWUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRvbSA9IHJlcXVpcmUoJ29jY2FtLWRvbScpLCAgLy8vXG4gICAgICBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3Qgbm9kZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ub2RlJyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgUXVlcnkgfSA9IGRvbSxcbiAgICAgIHsgdW5zaGlmdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGFzQ29udGVudCB9ID0gbm9kZVV0aWxpdGllcztcblxuY29uc3QgZGVjbGFyYXRpb25RdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKCcvKi9kZWNsYXJhdGlvbicpO1xuXG5jbGFzcyBEZWNsYXJhdGlvbnMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgdW5zaGlmdChkZWNsYXJhdGlvbnMpIHtcbiAgICBjb25zdCBhcnJheSA9IGRlY2xhcmF0aW9ucy5nZXRBcnJheSgpO1xuXG4gICAgdW5zaGlmdCh0aGlzLmFycmF5LCBhcnJheSk7XG4gIH1cblxuICBhc0NTUyhpbmRlbnQpIHtcbiAgICBsZXQgY3NzID0gJyc7XG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aDtcblxuICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBsYXN0SW5kZXggPSBsZW5ndGggLSAxO1xuXG4gICAgICB0aGlzLmFycmF5LmZvckVhY2goZnVuY3Rpb24oZGVjbGFyYXRpb24sIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uQ1NTID0gKGluZGV4ID09PSBsYXN0SW5kZXgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7aW5kZW50fSR7ZGVjbGFyYXRpb259YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7aW5kZW50fSR7ZGVjbGFyYXRpb259XFxuYDtcblxuICAgICAgICBjc3MgKz0gZGVjbGFyYXRpb25DU1M7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uTm9kZXMgPSBkZWNsYXJhdGlvblF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBkZWNsYXJhdGlvbk5vZGVzLm1hcChmdW5jdGlvbihkZWNsYXJhdGlvbk5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uTm9kZUNvbnRlbnQgPSBhc0NvbnRlbnQoZGVjbGFyYXRpb25Ob2RlLCB0b2tlbnMpLFxuICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbk5vZGVDb250ZW50OyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IG5ldyBEZWNsYXJhdGlvbnMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9ucztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlY2xhcmF0aW9ucztcbiJdfQ==