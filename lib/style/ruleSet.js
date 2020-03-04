'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dom = require('occam-dom'),
    ///
necessary = require('necessary');

var Declarations = require('./declarations'),
    nodeUtilities = require('../utilities/node');

var arrayUtilities = necessary.arrayUtilities,
    Query = dom.Query,
    first = arrayUtilities.first,
    asContent = nodeUtilities.asContent;
var selectorsQuery = Query.fromExpression('//selectors');

var RuleSet = /*#__PURE__*/function () {
  function RuleSet(selectors, declarations) {
    _classCallCheck(this, RuleSet);

    this.selectors = selectors;
    this.declarations = declarations;
  }

  _createClass(RuleSet, [{
    key: "asCSS",
    value: function asCSS(className, indent) {
      var declarationsCSS = this.declarations.asCSS("  ".concat(indent)),
          css = "".concat(indent, ".").concat(className).concat(this.selectors, " {\n").concat(declarationsCSS, "\n").concat(indent, "}\n\n");
      return css;
    }
  }], [{
    key: "fromNodeAndTokens",
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
      selectors = "".concat(selectorsNodeContent);
  return selectors;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVTZXQuanMiXSwibmFtZXMiOlsiZG9tIiwicmVxdWlyZSIsIm5lY2Vzc2FyeSIsIkRlY2xhcmF0aW9ucyIsIm5vZGVVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsIlF1ZXJ5IiwiZmlyc3QiLCJhc0NvbnRlbnQiLCJzZWxlY3RvcnNRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiUnVsZVNldCIsInNlbGVjdG9ycyIsImRlY2xhcmF0aW9ucyIsImNsYXNzTmFtZSIsImluZGVudCIsImRlY2xhcmF0aW9uc0NTUyIsImFzQ1NTIiwiY3NzIiwibm9kZSIsInRva2VucyIsInNlbGVjdG9yc0Zyb21Ob2RlQW5kVG9rZW5zIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJtZWRpYSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZWxlY3RvcnNOb2RlcyIsImV4ZWN1dGUiLCJmaXJzdFNlbGVjdG9yc05vZGUiLCJzZWxlY3RvcnNOb2RlIiwic2VsZWN0b3JzTm9kZUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLEdBQUcsR0FBR0MsT0FBTyxDQUFDLFdBQUQsQ0FBbkI7QUFBQSxJQUFtQztBQUM3QkMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBRCxDQUR6Qjs7QUFHQSxJQUFNRSxZQUFZLEdBQUdGLE9BQU8sQ0FBQyxnQkFBRCxDQUE1QjtBQUFBLElBQ01HLGFBQWEsR0FBR0gsT0FBTyxDQUFDLG1CQUFELENBRDdCOztBQUdNLElBQUVJLGNBQUYsR0FBcUJILFNBQXJCLENBQUVHLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lOLEdBRFosQ0FDRU0sS0FERjtBQUFBLElBRUVDLEtBRkYsR0FFWUYsY0FGWixDQUVFRSxLQUZGO0FBQUEsSUFHRUMsU0FIRixHQUdnQkosYUFIaEIsQ0FHRUksU0FIRjtBQUtOLElBQU1DLGNBQWMsR0FBR0gsS0FBSyxDQUFDSSxjQUFOLENBQXFCLGFBQXJCLENBQXZCOztJQUVNQyxPO0FBQ0osbUJBQVlDLFNBQVosRUFBdUJDLFlBQXZCLEVBQXFDO0FBQUE7O0FBQ25DLFNBQUtELFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDRDs7OzswQkFFS0MsUyxFQUFXQyxNLEVBQVE7QUFDdkIsVUFBTUMsZUFBZSxHQUFHLEtBQUtILFlBQUwsQ0FBa0JJLEtBQWxCLGFBQTZCRixNQUE3QixFQUF4QjtBQUFBLFVBQ01HLEdBQUcsYUFBTUgsTUFBTixjQUFnQkQsU0FBaEIsU0FBNEIsS0FBS0YsU0FBakMsaUJBQ1hJLGVBRFcsZUFFWEQsTUFGVyxVQURUO0FBT0EsYUFBT0csR0FBUDtBQUNEOzs7c0NBRXdCQyxJLEVBQU1DLE0sRUFBUTtBQUNyQyxVQUFNUixTQUFTLEdBQUdTLDBCQUEwQixDQUFDRixJQUFELEVBQU9DLE1BQVAsQ0FBNUM7QUFBQSxVQUNNUCxZQUFZLEdBQUdWLFlBQVksQ0FBQ21CLGlCQUFiLENBQStCSCxJQUEvQixFQUFxQ0MsTUFBckMsQ0FEckI7QUFBQSxVQUVNRyxLQUFLLEdBQUcsSUFBSVosT0FBSixDQUFZQyxTQUFaLEVBQXVCQyxZQUF2QixDQUZkO0FBSUEsYUFBT1UsS0FBUDtBQUNEOzs7Ozs7QUFHSEMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCZCxPQUFqQjs7QUFFQSxTQUFTVSwwQkFBVCxDQUFvQ0YsSUFBcEMsRUFBMENDLE1BQTFDLEVBQWtEO0FBQ2hELE1BQU1NLGNBQWMsR0FBR2pCLGNBQWMsQ0FBQ2tCLE9BQWYsQ0FBdUJSLElBQXZCLENBQXZCO0FBQUEsTUFDTVMsa0JBQWtCLEdBQUdyQixLQUFLLENBQUNtQixjQUFELENBRGhDO0FBQUEsTUFFTUcsYUFBYSxHQUFHRCxrQkFGdEI7QUFBQSxNQUUwQztBQUNwQ0UsRUFBQUEsb0JBQW9CLEdBQUd0QixTQUFTLENBQUNxQixhQUFELEVBQWdCVCxNQUFoQixDQUh0QztBQUFBLE1BSU1SLFNBQVMsYUFBTWtCLG9CQUFOLENBSmY7QUFNQSxTQUFPbEIsU0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkb20gPSByZXF1aXJlKCdvY2NhbS1kb20nKSwgIC8vL1xuICAgICAgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IERlY2xhcmF0aW9ucyA9IHJlcXVpcmUoJy4vZGVjbGFyYXRpb25zJyksXG4gICAgICBub2RlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL25vZGUnKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBRdWVyeSB9ID0gZG9tLFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGFzQ29udGVudCB9ID0gbm9kZVV0aWxpdGllcztcblxuY29uc3Qgc2VsZWN0b3JzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbignLy9zZWxlY3RvcnMnKTtcblxuY2xhc3MgUnVsZVNldCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9ycywgZGVjbGFyYXRpb25zKSB7XG4gICAgdGhpcy5zZWxlY3RvcnMgPSBzZWxlY3RvcnM7XG4gICAgdGhpcy5kZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnM7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUsIGluZGVudCkge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuZGVjbGFyYXRpb25zLmFzQ1NTKGAgICR7aW5kZW50fWApLFxuICAgICAgICAgIGNzcyA9IGAke2luZGVudH0uJHtjbGFzc05hbWV9JHt0aGlzLnNlbGVjdG9yc30ge1xuJHtkZWNsYXJhdGlvbnNDU1N9XG4ke2luZGVudH19XG5cbmA7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHNlbGVjdG9ycyA9IHNlbGVjdG9yc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gRGVjbGFyYXRpb25zLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgbWVkaWEgPSBuZXcgUnVsZVNldChzZWxlY3RvcnMsIGRlY2xhcmF0aW9ucyk7XG5cbiAgICByZXR1cm4gbWVkaWE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlU2V0O1xuXG5mdW5jdGlvbiBzZWxlY3RvcnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgY29uc3Qgc2VsZWN0b3JzTm9kZXMgPSBzZWxlY3RvcnNRdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICBmaXJzdFNlbGVjdG9yc05vZGUgPSBmaXJzdChzZWxlY3RvcnNOb2RlcyksXG4gICAgICAgIHNlbGVjdG9yc05vZGUgPSBmaXJzdFNlbGVjdG9yc05vZGUsIC8vL1xuICAgICAgICBzZWxlY3RvcnNOb2RlQ29udGVudCA9IGFzQ29udGVudChzZWxlY3RvcnNOb2RlLCB0b2tlbnMpLFxuICAgICAgICBzZWxlY3RvcnMgPSBgJHtzZWxlY3RvcnNOb2RlQ29udGVudH1gO1xuXG4gIHJldHVybiBzZWxlY3RvcnM7XG59XG4iXX0=