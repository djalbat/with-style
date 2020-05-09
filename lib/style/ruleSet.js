"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamDom = require("occam-dom");

var _declarations = _interopRequireDefault(require("./declarations"));

var _content = require("../utilities/content");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var selectorsQuery = _occamDom.Query.fromExpression("//selectors");

var RuleSet = /*#__PURE__*/function () {
  function RuleSet(selectors, declarations) {
    _classCallCheck(this, RuleSet);

    this.selectors = selectors;
    this.declarations = declarations;
  }

  _createClass(RuleSet, [{
    key: "getSelectors",
    value: function getSelectors() {
      return this.selectors;
    }
  }, {
    key: "getDeclarations",
    value: function getDeclarations() {
      return this.declarations;
    }
  }, {
    key: "unshift",
    value: function unshift(ruleSet) {
      var declarations = ruleSet.getDeclarations();
      this.declarations.unshift(declarations);
    }
  }, {
    key: "findMatchingRuleSet",
    value: function findMatchingRuleSet(ruleSets) {
      var _this = this;

      var matchingRuleSet = ruleSets.find(function (ruleSet) {
        var selectors = ruleSet.getSelectors(),
            selectorsMatch = selectors === _this.selectors,
            ruleSetsMatch = selectorsMatch; ///

        if (ruleSetsMatch) {
          return true;
        }
      }) || null; ///

      return matchingRuleSet;
    }
  }, {
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
  var selectorsNodeContent = (0, _content.contentFromQueryNodeAndTokens)(selectorsQuery, node, tokens),
      selectors = "".concat(selectorsNodeContent);
  return selectors;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVTZXQuanMiXSwibmFtZXMiOlsic2VsZWN0b3JzUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiUnVsZVNldCIsInNlbGVjdG9ycyIsImRlY2xhcmF0aW9ucyIsInJ1bGVTZXQiLCJnZXREZWNsYXJhdGlvbnMiLCJ1bnNoaWZ0IiwicnVsZVNldHMiLCJtYXRjaGluZ1J1bGVTZXQiLCJmaW5kIiwiZ2V0U2VsZWN0b3JzIiwic2VsZWN0b3JzTWF0Y2giLCJydWxlU2V0c01hdGNoIiwiY2xhc3NOYW1lIiwiaW5kZW50IiwiY3NzIiwiZGVjbGFyYXRpb25zQ1NTIiwiYXNDU1MiLCJub2RlIiwidG9rZW5zIiwic2VsZWN0b3JzRnJvbU5vZGVBbmRUb2tlbnMiLCJEZWNsYXJhdGlvbnMiLCJmcm9tTm9kZUFuZFRva2VucyIsIm1lZGlhIiwic2VsZWN0b3JzTm9kZUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLGdCQUFNQyxjQUFOLENBQXFCLGFBQXJCLENBQXZCOztJQUVxQkMsTztBQUNuQixtQkFBWUMsU0FBWixFQUF1QkMsWUFBdkIsRUFBcUM7QUFBQTs7QUFDbkMsU0FBS0QsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOzs7O21DQUVjO0FBQ2IsYUFBTyxLQUFLRCxTQUFaO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsYUFBTyxLQUFLQyxZQUFaO0FBQ0Q7Ozs0QkFFT0MsTyxFQUFTO0FBQ2YsVUFBTUQsWUFBWSxHQUFHQyxPQUFPLENBQUNDLGVBQVIsRUFBckI7QUFFQSxXQUFLRixZQUFMLENBQWtCRyxPQUFsQixDQUEwQkgsWUFBMUI7QUFDRDs7O3dDQUVtQkksUSxFQUFVO0FBQUE7O0FBQzVCLFVBQU1DLGVBQWUsR0FBR0QsUUFBUSxDQUFDRSxJQUFULENBQWMsVUFBQ0wsT0FBRCxFQUFhO0FBQ2pELFlBQU1GLFNBQVMsR0FBR0UsT0FBTyxDQUFDTSxZQUFSLEVBQWxCO0FBQUEsWUFDTUMsY0FBYyxHQUFJVCxTQUFTLEtBQUssS0FBSSxDQUFDQSxTQUQzQztBQUFBLFlBRU1VLGFBQWEsR0FBR0QsY0FGdEIsQ0FEaUQsQ0FHWDs7QUFFdEMsWUFBSUMsYUFBSixFQUFtQjtBQUNqQixpQkFBTyxJQUFQO0FBQ0Q7QUFDRixPQVJ1QixLQVFsQixJQVJOLENBRDRCLENBU2hCOztBQUVaLGFBQU9KLGVBQVA7QUFDRDs7OzBCQUVLSyxTLEVBQVdDLE0sRUFBUTtBQUN2QixVQUFJQyxHQUFHLEdBQUcsRUFBVjtBQUVBLFVBQU1DLGVBQWUsR0FBRyxLQUFLYixZQUFMLENBQWtCYyxLQUFsQixhQUE2QkgsTUFBN0IsRUFBeEI7O0FBRUEsVUFBSUUsZUFBZSxLQUFLLEVBQXhCLEVBQTRCO0FBQ3pCRCxRQUFBQSxHQUFHLGFBQU1ELE1BQU4sY0FBZ0JELFNBQWhCLFNBQTRCLEtBQUtYLFNBQWpDLGlCQUNSYyxlQURRLGVBRVJGLE1BRlEsVUFBSDtBQUtGOztBQUVELGFBQU9DLEdBQVA7QUFDRDs7O3NDQUV3QkcsSSxFQUFNQyxNLEVBQVE7QUFDckMsVUFBTWpCLFNBQVMsR0FBR2tCLDBCQUEwQixDQUFDRixJQUFELEVBQU9DLE1BQVAsQ0FBNUM7QUFBQSxVQUNNaEIsWUFBWSxHQUFHa0IseUJBQWFDLGlCQUFiLENBQStCSixJQUEvQixFQUFxQ0MsTUFBckMsQ0FEckI7QUFBQSxVQUVNSSxLQUFLLEdBQUcsSUFBSXRCLE9BQUosQ0FBWUMsU0FBWixFQUF1QkMsWUFBdkIsQ0FGZDs7QUFJQSxhQUFPb0IsS0FBUDtBQUNEOzs7Ozs7OztBQUdILFNBQVNILDBCQUFULENBQW9DRixJQUFwQyxFQUEwQ0MsTUFBMUMsRUFBa0Q7QUFDaEQsTUFBTUssb0JBQW9CLEdBQUcsNENBQThCMUIsY0FBOUIsRUFBOENvQixJQUE5QyxFQUFvREMsTUFBcEQsQ0FBN0I7QUFBQSxNQUNNakIsU0FBUyxhQUFNc0Isb0JBQU4sQ0FEZjtBQUdBLFNBQU90QixTQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbnMgZnJvbSBcIi4vZGVjbGFyYXRpb25zXCI7XG5cbmltcG9ydCB7IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNvbnN0IHNlbGVjdG9yc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL3NlbGVjdG9yc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZVNldCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9ycywgZGVjbGFyYXRpb25zKSB7XG4gICAgdGhpcy5zZWxlY3RvcnMgPSBzZWxlY3RvcnM7XG4gICAgdGhpcy5kZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnM7XG4gIH1cblxuICBnZXRTZWxlY3RvcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0b3JzO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIHVuc2hpZnQocnVsZVNldCkge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9ucyA9IHJ1bGVTZXQuZ2V0RGVjbGFyYXRpb25zKCk7XG5cbiAgICB0aGlzLmRlY2xhcmF0aW9ucy51bnNoaWZ0KGRlY2xhcmF0aW9ucyk7XG4gIH1cblxuICBmaW5kTWF0Y2hpbmdSdWxlU2V0KHJ1bGVTZXRzKSB7XG4gICAgY29uc3QgbWF0Y2hpbmdSdWxlU2V0ID0gcnVsZVNldHMuZmluZCgocnVsZVNldCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0b3JzID0gcnVsZVNldC5nZXRTZWxlY3RvcnMoKSxcbiAgICAgICAgICAgIHNlbGVjdG9yc01hdGNoID0gKHNlbGVjdG9ycyA9PT0gdGhpcy5zZWxlY3RvcnMpLFxuICAgICAgICAgICAgcnVsZVNldHNNYXRjaCA9IHNlbGVjdG9yc01hdGNoOyAvLy9cblxuICAgICAgaWYgKHJ1bGVTZXRzTWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDsgLy8vXG5cbiAgICByZXR1cm4gbWF0Y2hpbmdSdWxlU2V0O1xuICB9XG5cbiAgYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpIHtcbiAgICBsZXQgY3NzID0gXCJcIjtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuZGVjbGFyYXRpb25zLmFzQ1NTKGAgICR7aW5kZW50fWApO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uc0NTUyAhPT0gXCJcIikge1xuICAgICAgIGNzcyA9IGAke2luZGVudH0uJHtjbGFzc05hbWV9JHt0aGlzLnNlbGVjdG9yc30ge1xuJHtkZWNsYXJhdGlvbnNDU1N9XG4ke2luZGVudH19XG5cbmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSBzZWxlY3RvcnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG1lZGlhID0gbmV3IFJ1bGVTZXQoc2VsZWN0b3JzLCBkZWNsYXJhdGlvbnMpO1xuXG4gICAgcmV0dXJuIG1lZGlhO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdG9yc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBzZWxlY3RvcnNOb2RlQ29udGVudCA9IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zKHNlbGVjdG9yc1F1ZXJ5LCBub2RlLCB0b2tlbnMpLFxuICAgICAgICBzZWxlY3RvcnMgPSBgJHtzZWxlY3RvcnNOb2RlQ29udGVudH1gO1xuXG4gIHJldHVybiBzZWxlY3RvcnM7XG59XG4iXX0=