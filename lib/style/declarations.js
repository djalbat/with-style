'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dom = require('occam-dom'),
    ///
necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities,
    Query = dom.Query,
    nodeUtilities = dom.nodeUtilities,
    asContent = nodeUtilities.asContent,
    _unshift = arrayUtilities.unshift;


var declarationQuery = Query.fromExpression('/*/declaration');

var Declarations = function () {
  function Declarations(array) {
    _classCallCheck(this, Declarations);

    this.array = array;
  }

  _createClass(Declarations, [{
    key: 'getArray',
    value: function getArray() {
      return this.array;
    }
  }, {
    key: 'unshift',
    value: function unshift(declarations) {
      var array = declarations.getArray();

      _unshift(this.array, array);
    }
  }, {
    key: 'asCSS',
    value: function asCSS(indent) {
      var css = '';

      var length = this.array.length;

      if (length > 0) {
        var lastIndex = length - 1;

        this.array.forEach(function (declaration, index) {
          var declarationCSS = index === lastIndex ? '' + indent + declaration : '' + indent + declaration + '\n';

          css += declarationCSS;
        });
      }

      return css;
    }
  }], [{
    key: 'fromNodeAndTokens',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zdHlsZS9kZWNsYXJhdGlvbnMuanMiXSwibmFtZXMiOlsiZG9tIiwicmVxdWlyZSIsIm5lY2Vzc2FyeSIsImFycmF5VXRpbGl0aWVzIiwiUXVlcnkiLCJub2RlVXRpbGl0aWVzIiwiYXNDb250ZW50IiwidW5zaGlmdCIsImRlY2xhcmF0aW9uUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIkRlY2xhcmF0aW9ucyIsImFycmF5IiwiZGVjbGFyYXRpb25zIiwiZ2V0QXJyYXkiLCJpbmRlbnQiLCJjc3MiLCJsZW5ndGgiLCJsYXN0SW5kZXgiLCJmb3JFYWNoIiwiZGVjbGFyYXRpb24iLCJpbmRleCIsImRlY2xhcmF0aW9uQ1NTIiwibm9kZSIsInRva2VucyIsImRlY2xhcmF0aW9uTm9kZXMiLCJleGVjdXRlIiwibWFwIiwiZGVjbGFyYXRpb25Ob2RlIiwiZGVjbGFyYXRpb25Ob2RlQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxNQUFNQyxRQUFRLFdBQVIsQ0FBWjtBQUFBLElBQW1DO0FBQzdCQyxZQUFZRCxRQUFRLFdBQVIsQ0FEbEI7O0FBR00sSUFBRUUsY0FBRixHQUFxQkQsU0FBckIsQ0FBRUMsY0FBRjtBQUFBLElBQ0VDLEtBREYsR0FDMkJKLEdBRDNCLENBQ0VJLEtBREY7QUFBQSxJQUNTQyxhQURULEdBQzJCTCxHQUQzQixDQUNTSyxhQURUO0FBQUEsSUFFRUMsU0FGRixHQUVnQkQsYUFGaEIsQ0FFRUMsU0FGRjtBQUFBLElBR0VDLFFBSEYsR0FHY0osY0FIZCxDQUdFSSxPQUhGOzs7QUFLTixJQUFNQyxtQkFBbUJKLE1BQU1LLGNBQU4sQ0FBcUIsZ0JBQXJCLENBQXpCOztJQUVNQyxZO0FBQ0osd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtBLEtBQVo7QUFDRDs7OzRCQUVPQyxZLEVBQWM7QUFDcEIsVUFBTUQsUUFBUUMsYUFBYUMsUUFBYixFQUFkOztBQUVBTixlQUFRLEtBQUtJLEtBQWIsRUFBb0JBLEtBQXBCO0FBQ0Q7OzswQkFFS0csTSxFQUFRO0FBQ1osVUFBSUMsTUFBTSxFQUFWOztBQUVBLFVBQU1DLFNBQVMsS0FBS0wsS0FBTCxDQUFXSyxNQUExQjs7QUFFQSxVQUFJQSxTQUFTLENBQWIsRUFBZ0I7QUFDZCxZQUFNQyxZQUFZRCxTQUFTLENBQTNCOztBQUVBLGFBQUtMLEtBQUwsQ0FBV08sT0FBWCxDQUFtQixVQUFTQyxXQUFULEVBQXNCQyxLQUF0QixFQUE2QjtBQUM5QyxjQUFNQyxpQkFBa0JELFVBQVVILFNBQVgsUUFDSUgsTUFESixHQUNhSyxXQURiLFFBRU1MLE1BRk4sR0FFZUssV0FGZixPQUF2Qjs7QUFJQUosaUJBQU9NLGNBQVA7QUFDRCxTQU5EO0FBT0Q7O0FBRUQsYUFBT04sR0FBUDtBQUNEOzs7c0NBRXdCTyxJLEVBQU1DLE0sRUFBUTtBQUNyQyxVQUFNQyxtQkFBbUJoQixpQkFBaUJpQixPQUFqQixDQUF5QkgsSUFBekIsQ0FBekI7QUFBQSxVQUNNWCxRQUFRYSxpQkFBaUJFLEdBQWpCLENBQXFCLFVBQVNDLGVBQVQsRUFBMEI7QUFDckQsWUFBTUMseUJBQXlCdEIsVUFBVXFCLGVBQVYsRUFBMkJKLE1BQTNCLENBQS9CO0FBQUEsWUFDTUosY0FBY1Msc0JBRHBCLENBRHFELENBRVQ7O0FBRTVDLGVBQU9ULFdBQVA7QUFDRCxPQUxPLENBRGQ7QUFBQSxVQU9NUCxlQUFlLElBQUlGLFlBQUosQ0FBaUJDLEtBQWpCLENBUHJCOztBQVNBLGFBQU9DLFlBQVA7QUFDRDs7Ozs7O0FBR0hpQixPQUFPQyxPQUFQLEdBQWlCcEIsWUFBakIiLCJmaWxlIjoiZGVjbGFyYXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkb20gPSByZXF1aXJlKCdvY2NhbS1kb20nKSwgIC8vL1xuICAgICAgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgUXVlcnksIG5vZGVVdGlsaXRpZXMgfSA9IGRvbSxcbiAgICAgIHsgYXNDb250ZW50IH0gPSBub2RlVXRpbGl0aWVzLFxuICAgICAgeyB1bnNoaWZ0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgZGVjbGFyYXRpb25RdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKCcvKi9kZWNsYXJhdGlvbicpO1xuXG5jbGFzcyBEZWNsYXJhdGlvbnMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgdW5zaGlmdChkZWNsYXJhdGlvbnMpIHtcbiAgICBjb25zdCBhcnJheSA9IGRlY2xhcmF0aW9ucy5nZXRBcnJheSgpO1xuXG4gICAgdW5zaGlmdCh0aGlzLmFycmF5LCBhcnJheSk7XG4gIH1cblxuICBhc0NTUyhpbmRlbnQpIHtcbiAgICBsZXQgY3NzID0gJyc7XG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aDtcblxuICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBsYXN0SW5kZXggPSBsZW5ndGggLSAxO1xuXG4gICAgICB0aGlzLmFycmF5LmZvckVhY2goZnVuY3Rpb24oZGVjbGFyYXRpb24sIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uQ1NTID0gKGluZGV4ID09PSBsYXN0SW5kZXgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7aW5kZW50fSR7ZGVjbGFyYXRpb259YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7aW5kZW50fSR7ZGVjbGFyYXRpb259XFxuYDtcblxuICAgICAgICBjc3MgKz0gZGVjbGFyYXRpb25DU1M7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uTm9kZXMgPSBkZWNsYXJhdGlvblF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBkZWNsYXJhdGlvbk5vZGVzLm1hcChmdW5jdGlvbihkZWNsYXJhdGlvbk5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uTm9kZUNvbnRlbnQgPSBhc0NvbnRlbnQoZGVjbGFyYXRpb25Ob2RlLCB0b2tlbnMpLFxuICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbk5vZGVDb250ZW50OyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IG5ldyBEZWNsYXJhdGlvbnMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9ucztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlY2xhcmF0aW9ucztcbiJdfQ==