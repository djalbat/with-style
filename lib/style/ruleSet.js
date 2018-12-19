'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dom = require('occam-dom'),
    ///
necessary = require('necessary');

var Declarations = require('./declarations');

var arrayUtilities = necessary.arrayUtilities,
    Query = dom.Query,
    asContent = dom.asContent,
    first = arrayUtilities.first;


var selectorsQuery = Query.fromExpression('//selectors');

var RuleSet = function () {
  function RuleSet(selectors, declarations) {
    _classCallCheck(this, RuleSet);

    this.selectors = selectors;
    this.declarations = declarations;
  }

  _createClass(RuleSet, [{
    key: 'asCSS',
    value: function asCSS(className, indent) {
      var declarationsCSS = this.declarations.asCSS('  ' + indent),
          css = indent + '.' + className + this.selectors + ' {\n' + declarationsCSS + '\n' + indent + '}\n\n';

      return css;
    }
  }], [{
    key: 'fromNodeAndTokens',
    value: function fromNodeAndTokens(node, tokens) {
      var selectors = selectorsFromNodeAndTokens(node, tokens),
          declarations = Declarations.fromNodeAndTokens(node, tokens),
          media = new RuleSet(selectors, declarations);

      return media;
    }
  }]);

  return RuleSet;
}();

module.exports = RuleSet;

function selectorsFromNodeAndTokens(node, tokens) {
  var selectorsNodes = selectorsQuery.execute(node),
      firstSelectorsNode = first(selectorsNodes),
      selectorsNode = firstSelectorsNode,
      ///
  selectorsNodeContent = asContent(selectorsNode, tokens),
      selectors = '' + selectorsNodeContent;

  return selectors;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zdHlsZS9ydWxlU2V0LmpzIl0sIm5hbWVzIjpbImRvbSIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJEZWNsYXJhdGlvbnMiLCJhcnJheVV0aWxpdGllcyIsIlF1ZXJ5IiwiYXNDb250ZW50IiwiZmlyc3QiLCJzZWxlY3RvcnNRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiUnVsZVNldCIsInNlbGVjdG9ycyIsImRlY2xhcmF0aW9ucyIsImNsYXNzTmFtZSIsImluZGVudCIsImRlY2xhcmF0aW9uc0NTUyIsImFzQ1NTIiwiY3NzIiwibm9kZSIsInRva2VucyIsInNlbGVjdG9yc0Zyb21Ob2RlQW5kVG9rZW5zIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJtZWRpYSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZWxlY3RvcnNOb2RlcyIsImV4ZWN1dGUiLCJmaXJzdFNlbGVjdG9yc05vZGUiLCJzZWxlY3RvcnNOb2RlIiwic2VsZWN0b3JzTm9kZUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxNQUFNQyxRQUFRLFdBQVIsQ0FBWjtBQUFBLElBQW1DO0FBQzdCQyxZQUFZRCxRQUFRLFdBQVIsQ0FEbEI7O0FBR0EsSUFBTUUsZUFBZUYsUUFBUSxnQkFBUixDQUFyQjs7QUFFTSxJQUFFRyxjQUFGLEdBQXFCRixTQUFyQixDQUFFRSxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUN1QkwsR0FEdkIsQ0FDRUssS0FERjtBQUFBLElBQ1NDLFNBRFQsR0FDdUJOLEdBRHZCLENBQ1NNLFNBRFQ7QUFBQSxJQUVFQyxLQUZGLEdBRVlILGNBRlosQ0FFRUcsS0FGRjs7O0FBSU4sSUFBTUMsaUJBQWlCSCxNQUFNSSxjQUFOLENBQXFCLGFBQXJCLENBQXZCOztJQUVNQyxPO0FBQ0osbUJBQVlDLFNBQVosRUFBdUJDLFlBQXZCLEVBQXFDO0FBQUE7O0FBQ25DLFNBQUtELFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDRDs7OzswQkFFS0MsUyxFQUFXQyxNLEVBQVE7QUFDdkIsVUFBTUMsa0JBQWtCLEtBQUtILFlBQUwsQ0FBa0JJLEtBQWxCLFFBQTZCRixNQUE3QixDQUF4QjtBQUFBLFVBQ01HLE1BQVNILE1BQVQsU0FBbUJELFNBQW5CLEdBQStCLEtBQUtGLFNBQXBDLFlBQ1JJLGVBRFEsVUFFUkQsTUFGUSxVQUROOztBQU9BLGFBQU9HLEdBQVA7QUFDRDs7O3NDQUV3QkMsSSxFQUFNQyxNLEVBQVE7QUFDckMsVUFBTVIsWUFBWVMsMkJBQTJCRixJQUEzQixFQUFpQ0MsTUFBakMsQ0FBbEI7QUFBQSxVQUNNUCxlQUFlVCxhQUFha0IsaUJBQWIsQ0FBK0JILElBQS9CLEVBQXFDQyxNQUFyQyxDQURyQjtBQUFBLFVBRU1HLFFBQVEsSUFBSVosT0FBSixDQUFZQyxTQUFaLEVBQXVCQyxZQUF2QixDQUZkOztBQUlBLGFBQU9VLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJkLE9BQWpCOztBQUVBLFNBQVNVLDBCQUFULENBQW9DRixJQUFwQyxFQUEwQ0MsTUFBMUMsRUFBa0Q7QUFDaEQsTUFBTU0saUJBQWlCakIsZUFBZWtCLE9BQWYsQ0FBdUJSLElBQXZCLENBQXZCO0FBQUEsTUFDTVMscUJBQXFCcEIsTUFBTWtCLGNBQU4sQ0FEM0I7QUFBQSxNQUVNRyxnQkFBZ0JELGtCQUZ0QjtBQUFBLE1BRTBDO0FBQ3BDRSx5QkFBdUJ2QixVQUFVc0IsYUFBVixFQUF5QlQsTUFBekIsQ0FIN0I7QUFBQSxNQUlNUixpQkFBZWtCLG9CQUpyQjs7QUFNQSxTQUFPbEIsU0FBUDtBQUNEIiwiZmlsZSI6InJ1bGVTZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRvbSA9IHJlcXVpcmUoJ29jY2FtLWRvbScpLCAgLy8vXG4gICAgICBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgRGVjbGFyYXRpb25zID0gcmVxdWlyZSgnLi9kZWNsYXJhdGlvbnMnKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBRdWVyeSwgYXNDb250ZW50IH0gPSBkb20sXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3Qgc2VsZWN0b3JzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbignLy9zZWxlY3RvcnMnKTtcblxuY2xhc3MgUnVsZVNldCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9ycywgZGVjbGFyYXRpb25zKSB7XG4gICAgdGhpcy5zZWxlY3RvcnMgPSBzZWxlY3RvcnM7XG4gICAgdGhpcy5kZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnM7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUsIGluZGVudCkge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuZGVjbGFyYXRpb25zLmFzQ1NTKGAgICR7aW5kZW50fWApLFxuICAgICAgICAgIGNzcyA9IGAke2luZGVudH0uJHtjbGFzc05hbWV9JHt0aGlzLnNlbGVjdG9yc30ge1xuJHtkZWNsYXJhdGlvbnNDU1N9XG4ke2luZGVudH19XG5cbmA7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHNlbGVjdG9ycyA9IHNlbGVjdG9yc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gRGVjbGFyYXRpb25zLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgbWVkaWEgPSBuZXcgUnVsZVNldChzZWxlY3RvcnMsIGRlY2xhcmF0aW9ucyk7XG5cbiAgICByZXR1cm4gbWVkaWE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlU2V0O1xuXG5mdW5jdGlvbiBzZWxlY3RvcnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgY29uc3Qgc2VsZWN0b3JzTm9kZXMgPSBzZWxlY3RvcnNRdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICBmaXJzdFNlbGVjdG9yc05vZGUgPSBmaXJzdChzZWxlY3RvcnNOb2RlcyksXG4gICAgICAgIHNlbGVjdG9yc05vZGUgPSBmaXJzdFNlbGVjdG9yc05vZGUsIC8vL1xuICAgICAgICBzZWxlY3RvcnNOb2RlQ29udGVudCA9IGFzQ29udGVudChzZWxlY3RvcnNOb2RlLCB0b2tlbnMpLFxuICAgICAgICBzZWxlY3RvcnMgPSBgJHtzZWxlY3RvcnNOb2RlQ29udGVudH1gO1xuXG4gIHJldHVybiBzZWxlY3RvcnM7XG59XG4iXX0=