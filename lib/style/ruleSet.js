"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamDom = require("occam-dom");

var _necessary = require("necessary");

var _declarations = _interopRequireDefault(require("./declarations"));

var _node = require("../utilities/node");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var first = _necessary.arrayUtilities.first;

var selectorsQuery = _occamDom.Query.fromExpression("//selectors");

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
          declarations = _declarations["default"].fromNodeAndTokens(node, tokens),
          media = new RuleSet(selectors, declarations);

      return media;
    }
  }]);

  return RuleSet;
}();

exports["default"] = RuleSet;

function selectorsFromNodeAndTokens(node, tokens) {
  var selectorsNodes = selectorsQuery.execute(node),
      firstSelectorsNode = first(selectorsNodes),
      selectorsNode = firstSelectorsNode,
      ///
  selectorsNodeContent = (0, _node.asContent)(selectorsNode, tokens),
      selectors = "".concat(selectorsNodeContent);
  return selectors;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVTZXQuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInNlbGVjdG9yc1F1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIlJ1bGVTZXQiLCJzZWxlY3RvcnMiLCJkZWNsYXJhdGlvbnMiLCJjbGFzc05hbWUiLCJpbmRlbnQiLCJkZWNsYXJhdGlvbnNDU1MiLCJhc0NTUyIsImNzcyIsIm5vZGUiLCJ0b2tlbnMiLCJzZWxlY3RvcnNGcm9tTm9kZUFuZFRva2VucyIsIkRlY2xhcmF0aW9ucyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibWVkaWEiLCJzZWxlY3RvcnNOb2RlcyIsImV4ZWN1dGUiLCJmaXJzdFNlbGVjdG9yc05vZGUiLCJzZWxlY3RvcnNOb2RlIiwic2VsZWN0b3JzTm9kZUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7SUFFUUEsSyxHQUFVQyx5QixDQUFWRCxLOztBQUVSLElBQU1FLGNBQWMsR0FBR0MsZ0JBQU1DLGNBQU4sQ0FBcUIsYUFBckIsQ0FBdkI7O0lBRXFCQyxPO0FBQ25CLG1CQUFZQyxTQUFaLEVBQXVCQyxZQUF2QixFQUFxQztBQUFBOztBQUNuQyxTQUFLRCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7MEJBRUtDLFMsRUFBV0MsTSxFQUFRO0FBQ3ZCLFVBQU1DLGVBQWUsR0FBRyxLQUFLSCxZQUFMLENBQWtCSSxLQUFsQixhQUE2QkYsTUFBN0IsRUFBeEI7QUFBQSxVQUNNRyxHQUFHLGFBQU1ILE1BQU4sY0FBZ0JELFNBQWhCLFNBQTRCLEtBQUtGLFNBQWpDLGlCQUNYSSxlQURXLGVBRVhELE1BRlcsVUFEVDtBQU9BLGFBQU9HLEdBQVA7QUFDRDs7O3NDQUV3QkMsSSxFQUFNQyxNLEVBQVE7QUFDckMsVUFBTVIsU0FBUyxHQUFHUywwQkFBMEIsQ0FBQ0YsSUFBRCxFQUFPQyxNQUFQLENBQTVDO0FBQUEsVUFDTVAsWUFBWSxHQUFHUyx5QkFBYUMsaUJBQWIsQ0FBK0JKLElBQS9CLEVBQXFDQyxNQUFyQyxDQURyQjtBQUFBLFVBRU1JLEtBQUssR0FBRyxJQUFJYixPQUFKLENBQVlDLFNBQVosRUFBdUJDLFlBQXZCLENBRmQ7O0FBSUEsYUFBT1csS0FBUDtBQUNEOzs7Ozs7OztBQUdILFNBQVNILDBCQUFULENBQW9DRixJQUFwQyxFQUEwQ0MsTUFBMUMsRUFBa0Q7QUFDaEQsTUFBTUssY0FBYyxHQUFHakIsY0FBYyxDQUFDa0IsT0FBZixDQUF1QlAsSUFBdkIsQ0FBdkI7QUFBQSxNQUNNUSxrQkFBa0IsR0FBR3JCLEtBQUssQ0FBQ21CLGNBQUQsQ0FEaEM7QUFBQSxNQUVNRyxhQUFhLEdBQUdELGtCQUZ0QjtBQUFBLE1BRTBDO0FBQ3BDRSxFQUFBQSxvQkFBb0IsR0FBRyxxQkFBVUQsYUFBVixFQUF5QlIsTUFBekIsQ0FIN0I7QUFBQSxNQUlNUixTQUFTLGFBQU1pQixvQkFBTixDQUpmO0FBTUEsU0FBT2pCLFNBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1kb21cIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb25zIGZyb20gXCIuL2RlY2xhcmF0aW9uc1wiO1xuXG5pbXBvcnQgeyBhc0NvbnRlbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHNlbGVjdG9yc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL3NlbGVjdG9yc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZVNldCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9ycywgZGVjbGFyYXRpb25zKSB7XG4gICAgdGhpcy5zZWxlY3RvcnMgPSBzZWxlY3RvcnM7XG4gICAgdGhpcy5kZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnM7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUsIGluZGVudCkge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuZGVjbGFyYXRpb25zLmFzQ1NTKGAgICR7aW5kZW50fWApLFxuICAgICAgICAgIGNzcyA9IGAke2luZGVudH0uJHtjbGFzc05hbWV9JHt0aGlzLnNlbGVjdG9yc30ge1xuJHtkZWNsYXJhdGlvbnNDU1N9XG4ke2luZGVudH19XG5cbmA7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHNlbGVjdG9ycyA9IHNlbGVjdG9yc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gRGVjbGFyYXRpb25zLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgbWVkaWEgPSBuZXcgUnVsZVNldChzZWxlY3RvcnMsIGRlY2xhcmF0aW9ucyk7XG5cbiAgICByZXR1cm4gbWVkaWE7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0b3JzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IHNlbGVjdG9yc05vZGVzID0gc2VsZWN0b3JzUXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgZmlyc3RTZWxlY3RvcnNOb2RlID0gZmlyc3Qoc2VsZWN0b3JzTm9kZXMpLFxuICAgICAgICBzZWxlY3RvcnNOb2RlID0gZmlyc3RTZWxlY3RvcnNOb2RlLCAvLy9cbiAgICAgICAgc2VsZWN0b3JzTm9kZUNvbnRlbnQgPSBhc0NvbnRlbnQoc2VsZWN0b3JzTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgc2VsZWN0b3JzID0gYCR7c2VsZWN0b3JzTm9kZUNvbnRlbnR9YDtcblxuICByZXR1cm4gc2VsZWN0b3JzO1xufVxuIl19