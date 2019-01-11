'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dom = require('occam-dom'),
    ///
necessary = require('necessary');

var nodeUtilities = require('../utilities/node');

var arrayUtilities = necessary.arrayUtilities,
    Query = dom.Query,
    _unshift = arrayUtilities.unshift,
    asContent = nodeUtilities.asContent;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zdHlsZS9kZWNsYXJhdGlvbnMuanMiXSwibmFtZXMiOlsiZG9tIiwicmVxdWlyZSIsIm5lY2Vzc2FyeSIsIm5vZGVVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsIlF1ZXJ5IiwidW5zaGlmdCIsImFzQ29udGVudCIsImRlY2xhcmF0aW9uUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIkRlY2xhcmF0aW9ucyIsImFycmF5IiwiZGVjbGFyYXRpb25zIiwiZ2V0QXJyYXkiLCJpbmRlbnQiLCJjc3MiLCJsZW5ndGgiLCJsYXN0SW5kZXgiLCJmb3JFYWNoIiwiZGVjbGFyYXRpb24iLCJpbmRleCIsImRlY2xhcmF0aW9uQ1NTIiwibm9kZSIsInRva2VucyIsImRlY2xhcmF0aW9uTm9kZXMiLCJleGVjdXRlIiwibWFwIiwiZGVjbGFyYXRpb25Ob2RlIiwiZGVjbGFyYXRpb25Ob2RlQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxNQUFNQyxRQUFRLFdBQVIsQ0FBWjtBQUFBLElBQW1DO0FBQzdCQyxZQUFZRCxRQUFRLFdBQVIsQ0FEbEI7O0FBR0EsSUFBTUUsZ0JBQWdCRixRQUFRLG1CQUFSLENBQXRCOztBQUVNLElBQUVHLGNBQUYsR0FBcUJGLFNBQXJCLENBQUVFLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lMLEdBRFosQ0FDRUssS0FERjtBQUFBLElBRUVDLFFBRkYsR0FFY0YsY0FGZCxDQUVFRSxPQUZGO0FBQUEsSUFHRUMsU0FIRixHQUdnQkosYUFIaEIsQ0FHRUksU0FIRjs7O0FBS04sSUFBTUMsbUJBQW1CSCxNQUFNSSxjQUFOLENBQXFCLGdCQUFyQixDQUF6Qjs7SUFFTUMsWTtBQUNKLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7Ozs0QkFFT0MsWSxFQUFjO0FBQ3BCLFVBQU1ELFFBQVFDLGFBQWFDLFFBQWIsRUFBZDs7QUFFQVAsZUFBUSxLQUFLSyxLQUFiLEVBQW9CQSxLQUFwQjtBQUNEOzs7MEJBRUtHLE0sRUFBUTtBQUNaLFVBQUlDLE1BQU0sRUFBVjs7QUFFQSxVQUFNQyxTQUFTLEtBQUtMLEtBQUwsQ0FBV0ssTUFBMUI7O0FBRUEsVUFBSUEsU0FBUyxDQUFiLEVBQWdCO0FBQ2QsWUFBTUMsWUFBWUQsU0FBUyxDQUEzQjs7QUFFQSxhQUFLTCxLQUFMLENBQVdPLE9BQVgsQ0FBbUIsVUFBU0MsV0FBVCxFQUFzQkMsS0FBdEIsRUFBNkI7QUFDOUMsY0FBTUMsaUJBQWtCRCxVQUFVSCxTQUFYLFFBQ0lILE1BREosR0FDYUssV0FEYixRQUVNTCxNQUZOLEdBRWVLLFdBRmYsT0FBdkI7O0FBSUFKLGlCQUFPTSxjQUFQO0FBQ0QsU0FORDtBQU9EOztBQUVELGFBQU9OLEdBQVA7QUFDRDs7O3NDQUV3Qk8sSSxFQUFNQyxNLEVBQVE7QUFDckMsVUFBTUMsbUJBQW1CaEIsaUJBQWlCaUIsT0FBakIsQ0FBeUJILElBQXpCLENBQXpCO0FBQUEsVUFDTVgsUUFBUWEsaUJBQWlCRSxHQUFqQixDQUFxQixVQUFTQyxlQUFULEVBQTBCO0FBQ3JELFlBQU1DLHlCQUF5QnJCLFVBQVVvQixlQUFWLEVBQTJCSixNQUEzQixDQUEvQjtBQUFBLFlBQ01KLGNBQWNTLHNCQURwQixDQURxRCxDQUVUOztBQUU1QyxlQUFPVCxXQUFQO0FBQ0QsT0FMTyxDQURkO0FBQUEsVUFPTVAsZUFBZSxJQUFJRixZQUFKLENBQWlCQyxLQUFqQixDQVByQjs7QUFTQSxhQUFPQyxZQUFQO0FBQ0Q7Ozs7OztBQUdIaUIsT0FBT0MsT0FBUCxHQUFpQnBCLFlBQWpCIiwiZmlsZSI6ImRlY2xhcmF0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZG9tID0gcmVxdWlyZSgnb2NjYW0tZG9tJyksICAvLy9cbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBub2RlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL25vZGUnKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBRdWVyeSB9ID0gZG9tLFxuICAgICAgeyB1bnNoaWZ0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgYXNDb250ZW50IH0gPSBub2RlVXRpbGl0aWVzO1xuXG5jb25zdCBkZWNsYXJhdGlvblF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oJy8qL2RlY2xhcmF0aW9uJyk7XG5cbmNsYXNzIERlY2xhcmF0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICB1bnNoaWZ0KGRlY2xhcmF0aW9ucykge1xuICAgIGNvbnN0IGFycmF5ID0gZGVjbGFyYXRpb25zLmdldEFycmF5KCk7XG5cbiAgICB1bnNoaWZ0KHRoaXMuYXJyYXksIGFycmF5KTtcbiAgfVxuXG4gIGFzQ1NTKGluZGVudCkge1xuICAgIGxldCBjc3MgPSAnJztcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoO1xuXG4gICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGxlbmd0aCAtIDE7XG5cbiAgICAgIHRoaXMuYXJyYXkuZm9yRWFjaChmdW5jdGlvbihkZWNsYXJhdGlvbiwgaW5kZXgpIHtcbiAgICAgICAgY29uc3QgZGVjbGFyYXRpb25DU1MgPSAoaW5kZXggPT09IGxhc3RJbmRleCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHtkZWNsYXJhdGlvbn1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHtkZWNsYXJhdGlvbn1cXG5gO1xuXG4gICAgICAgIGNzcyArPSBkZWNsYXJhdGlvbkNTUztcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25Ob2RlcyA9IGRlY2xhcmF0aW9uUXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICBhcnJheSA9IGRlY2xhcmF0aW9uTm9kZXMubWFwKGZ1bmN0aW9uKGRlY2xhcmF0aW9uTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgZGVjbGFyYXRpb25Ob2RlQ29udGVudCA9IGFzQ29udGVudChkZWNsYXJhdGlvbk5vZGUsIHRva2VucyksXG4gICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbiA9IGRlY2xhcmF0aW9uTm9kZUNvbnRlbnQ7IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gbmV3IERlY2xhcmF0aW9ucyhhcnJheSk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb25zO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVjbGFyYXRpb25zO1xuIl19