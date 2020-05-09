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
      var css = "";
      var declarationsCSS = this.declarations.asCSS("  ".concat(indent));

      if (declarationsCSS !== "") {
        css = "".concat(indent, ".").concat(className).concat(this.selectors, " {\n").concat(declarationsCSS, "\n").concat(indent, "}\n\n");
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVTZXQuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInNlbGVjdG9yc1F1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIlJ1bGVTZXQiLCJzZWxlY3RvcnMiLCJkZWNsYXJhdGlvbnMiLCJjbGFzc05hbWUiLCJpbmRlbnQiLCJjc3MiLCJkZWNsYXJhdGlvbnNDU1MiLCJhc0NTUyIsIm5vZGUiLCJ0b2tlbnMiLCJzZWxlY3RvcnNGcm9tTm9kZUFuZFRva2VucyIsIkRlY2xhcmF0aW9ucyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibWVkaWEiLCJzZWxlY3RvcnNOb2RlcyIsImV4ZWN1dGUiLCJmaXJzdFNlbGVjdG9yc05vZGUiLCJzZWxlY3RvcnNOb2RlIiwic2VsZWN0b3JzTm9kZUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7SUFFUUEsSyxHQUFVQyx5QixDQUFWRCxLOztBQUVSLElBQU1FLGNBQWMsR0FBR0MsZ0JBQU1DLGNBQU4sQ0FBcUIsYUFBckIsQ0FBdkI7O0lBRXFCQyxPO0FBQ25CLG1CQUFZQyxTQUFaLEVBQXVCQyxZQUF2QixFQUFxQztBQUFBOztBQUNuQyxTQUFLRCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7MEJBRUtDLFMsRUFBV0MsTSxFQUFRO0FBQ3ZCLFVBQUlDLEdBQUcsR0FBRyxFQUFWO0FBRUEsVUFBTUMsZUFBZSxHQUFHLEtBQUtKLFlBQUwsQ0FBa0JLLEtBQWxCLGFBQTZCSCxNQUE3QixFQUF4Qjs7QUFFQSxVQUFJRSxlQUFlLEtBQUssRUFBeEIsRUFBNEI7QUFDekJELFFBQUFBLEdBQUcsYUFBTUQsTUFBTixjQUFnQkQsU0FBaEIsU0FBNEIsS0FBS0YsU0FBakMsaUJBQ1JLLGVBRFEsZUFFUkYsTUFGUSxVQUFIO0FBS0Y7O0FBRUQsYUFBT0MsR0FBUDtBQUNEOzs7c0NBRXdCRyxJLEVBQU1DLE0sRUFBUTtBQUNyQyxVQUFNUixTQUFTLEdBQUdTLDBCQUEwQixDQUFDRixJQUFELEVBQU9DLE1BQVAsQ0FBNUM7QUFBQSxVQUNNUCxZQUFZLEdBQUdTLHlCQUFhQyxpQkFBYixDQUErQkosSUFBL0IsRUFBcUNDLE1BQXJDLENBRHJCO0FBQUEsVUFFTUksS0FBSyxHQUFHLElBQUliLE9BQUosQ0FBWUMsU0FBWixFQUF1QkMsWUFBdkIsQ0FGZDs7QUFJQSxhQUFPVyxLQUFQO0FBQ0Q7Ozs7Ozs7O0FBR0gsU0FBU0gsMEJBQVQsQ0FBb0NGLElBQXBDLEVBQTBDQyxNQUExQyxFQUFrRDtBQUNoRCxNQUFNSyxjQUFjLEdBQUdqQixjQUFjLENBQUNrQixPQUFmLENBQXVCUCxJQUF2QixDQUF2QjtBQUFBLE1BQ01RLGtCQUFrQixHQUFHckIsS0FBSyxDQUFDbUIsY0FBRCxDQURoQztBQUFBLE1BRU1HLGFBQWEsR0FBR0Qsa0JBRnRCO0FBQUEsTUFFMEM7QUFDcENFLEVBQUFBLG9CQUFvQixHQUFHLHFCQUFVRCxhQUFWLEVBQXlCUixNQUF6QixDQUg3QjtBQUFBLE1BSU1SLFNBQVMsYUFBTWlCLG9CQUFOLENBSmY7QUFNQSxTQUFPakIsU0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbnMgZnJvbSBcIi4vZGVjbGFyYXRpb25zXCI7XG5cbmltcG9ydCB7IGFzQ29udGVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3Qgc2VsZWN0b3JzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vc2VsZWN0b3JzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlU2V0IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JzLCBkZWNsYXJhdGlvbnMpIHtcbiAgICB0aGlzLnNlbGVjdG9ycyA9IHNlbGVjdG9ycztcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGFzQ1NTKGNsYXNzTmFtZSwgaW5kZW50KSB7XG4gICAgbGV0IGNzcyA9IFwiXCI7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmRlY2xhcmF0aW9ucy5hc0NTUyhgICAke2luZGVudH1gKTtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNDU1MgIT09IFwiXCIpIHtcbiAgICAgICBjc3MgPSBgJHtpbmRlbnR9LiR7Y2xhc3NOYW1lfSR7dGhpcy5zZWxlY3RvcnN9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfVxuJHtpbmRlbnR9fVxuXG5gO1xuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JzID0gc2VsZWN0b3JzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBEZWNsYXJhdGlvbnMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBtZWRpYSA9IG5ldyBSdWxlU2V0KHNlbGVjdG9ycywgZGVjbGFyYXRpb25zKTtcblxuICAgIHJldHVybiBtZWRpYTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZWxlY3RvcnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgY29uc3Qgc2VsZWN0b3JzTm9kZXMgPSBzZWxlY3RvcnNRdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICBmaXJzdFNlbGVjdG9yc05vZGUgPSBmaXJzdChzZWxlY3RvcnNOb2RlcyksXG4gICAgICAgIHNlbGVjdG9yc05vZGUgPSBmaXJzdFNlbGVjdG9yc05vZGUsIC8vL1xuICAgICAgICBzZWxlY3RvcnNOb2RlQ29udGVudCA9IGFzQ29udGVudChzZWxlY3RvcnNOb2RlLCB0b2tlbnMpLFxuICAgICAgICBzZWxlY3RvcnMgPSBgJHtzZWxlY3RvcnNOb2RlQ29udGVudH1gO1xuXG4gIHJldHVybiBzZWxlY3RvcnM7XG59XG4iXX0=