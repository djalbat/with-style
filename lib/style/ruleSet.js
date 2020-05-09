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
    key: "checkMatches",
    value: function checkMatches(ruleSets) {
      var _this = this;

      var matches = ruleSets.some(function (ruleSet) {
        var selectors = ruleSet.getSelectors(),
            selectorsMatch = checkSelectorsMatch(selectors, _this.selectors);

        if (selectorsMatch) {
          return true;
        }
      });
      return matches;
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

function checkSelectorsMatch(selectorsA, selectorsB) {
  var selectorsMatch = selectorsA === selectorsB; // let selectorsMatch = true;
  //
  // if (selectorsMatch === true) {
  //   selectorsA.some((selectorA) => {
  //     const selectorsBIncludesSelectorA = selectorsB.includes(selectorA);
  //
  //     if (!selectorsBIncludesSelectorA) {
  //       selectorsMatch = false;
  //
  //       return true;
  //     }
  //   });
  // }
  //
  // if (selectorsMatch === true) {
  //   selectorsB.some((selectorB) => {
  //     const selectorsAIncludesSelectorB = selectorsA.includes(selectorB);
  //
  //     if (!selectorsAIncludesSelectorB) {
  //       selectorsMatch = false;
  //
  //       return true;
  //     }
  //   });
  // }

  return selectorsMatch;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVTZXQuanMiXSwibmFtZXMiOlsic2VsZWN0b3JzUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiUnVsZVNldCIsInNlbGVjdG9ycyIsImRlY2xhcmF0aW9ucyIsInJ1bGVTZXRzIiwibWF0Y2hlcyIsInNvbWUiLCJydWxlU2V0IiwiZ2V0U2VsZWN0b3JzIiwic2VsZWN0b3JzTWF0Y2giLCJjaGVja1NlbGVjdG9yc01hdGNoIiwiY2xhc3NOYW1lIiwiaW5kZW50IiwiY3NzIiwiZGVjbGFyYXRpb25zQ1NTIiwiYXNDU1MiLCJub2RlIiwidG9rZW5zIiwic2VsZWN0b3JzRnJvbU5vZGVBbmRUb2tlbnMiLCJEZWNsYXJhdGlvbnMiLCJmcm9tTm9kZUFuZFRva2VucyIsIm1lZGlhIiwic2VsZWN0b3JzTm9kZUNvbnRlbnQiLCJzZWxlY3RvcnNBIiwic2VsZWN0b3JzQiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGNBQWMsR0FBR0MsZ0JBQU1DLGNBQU4sQ0FBcUIsYUFBckIsQ0FBdkI7O0lBRXFCQyxPO0FBQ25CLG1CQUFZQyxTQUFaLEVBQXVCQyxZQUF2QixFQUFxQztBQUFBOztBQUNuQyxTQUFLRCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7bUNBRWM7QUFDYixhQUFPLEtBQUtELFNBQVo7QUFDRDs7O3NDQUVpQjtBQUNoQixhQUFPLEtBQUtDLFlBQVo7QUFDRDs7O2lDQUVZQyxRLEVBQVU7QUFBQTs7QUFDckIsVUFBTUMsT0FBTyxHQUFHRCxRQUFRLENBQUNFLElBQVQsQ0FBYyxVQUFDQyxPQUFELEVBQWE7QUFDekMsWUFBTUwsU0FBUyxHQUFHSyxPQUFPLENBQUNDLFlBQVIsRUFBbEI7QUFBQSxZQUNNQyxjQUFjLEdBQUdDLG1CQUFtQixDQUFDUixTQUFELEVBQVksS0FBSSxDQUFDQSxTQUFqQixDQUQxQzs7QUFHQSxZQUFJTyxjQUFKLEVBQW9CO0FBQ2xCLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BUGUsQ0FBaEI7QUFTQSxhQUFPSixPQUFQO0FBQ0Q7OzswQkFFS00sUyxFQUFXQyxNLEVBQVE7QUFDdkIsVUFBSUMsR0FBRyxHQUFHLEVBQVY7QUFFQSxVQUFNQyxlQUFlLEdBQUcsS0FBS1gsWUFBTCxDQUFrQlksS0FBbEIsYUFBNkJILE1BQTdCLEVBQXhCOztBQUVBLFVBQUlFLGVBQWUsS0FBSyxFQUF4QixFQUE0QjtBQUN6QkQsUUFBQUEsR0FBRyxhQUFNRCxNQUFOLGNBQWdCRCxTQUFoQixTQUE0QixLQUFLVCxTQUFqQyxpQkFDUlksZUFEUSxlQUVSRixNQUZRLFVBQUg7QUFLRjs7QUFFRCxhQUFPQyxHQUFQO0FBQ0Q7OztzQ0FFd0JHLEksRUFBTUMsTSxFQUFRO0FBQ3JDLFVBQU1mLFNBQVMsR0FBR2dCLDBCQUEwQixDQUFDRixJQUFELEVBQU9DLE1BQVAsQ0FBNUM7QUFBQSxVQUNNZCxZQUFZLEdBQUdnQix5QkFBYUMsaUJBQWIsQ0FBK0JKLElBQS9CLEVBQXFDQyxNQUFyQyxDQURyQjtBQUFBLFVBRU1JLEtBQUssR0FBRyxJQUFJcEIsT0FBSixDQUFZQyxTQUFaLEVBQXVCQyxZQUF2QixDQUZkOztBQUlBLGFBQU9rQixLQUFQO0FBQ0Q7Ozs7Ozs7O0FBR0gsU0FBU0gsMEJBQVQsQ0FBb0NGLElBQXBDLEVBQTBDQyxNQUExQyxFQUFrRDtBQUNoRCxNQUFNSyxvQkFBb0IsR0FBRyw0Q0FBOEJ4QixjQUE5QixFQUE4Q2tCLElBQTlDLEVBQW9EQyxNQUFwRCxDQUE3QjtBQUFBLE1BQ01mLFNBQVMsYUFBTW9CLG9CQUFOLENBRGY7QUFHQSxTQUFPcEIsU0FBUDtBQUNEOztBQUVELFNBQVNRLG1CQUFULENBQTZCYSxVQUE3QixFQUF5Q0MsVUFBekMsRUFBcUQ7QUFDbkQsTUFBTWYsY0FBYyxHQUFJYyxVQUFVLEtBQUtDLFVBQXZDLENBRG1ELENBR25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQU9mLGNBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IERlY2xhcmF0aW9ucyBmcm9tIFwiLi9kZWNsYXJhdGlvbnNcIjtcblxuaW1wb3J0IHsgY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3Qgc2VsZWN0b3JzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vc2VsZWN0b3JzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlU2V0IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JzLCBkZWNsYXJhdGlvbnMpIHtcbiAgICB0aGlzLnNlbGVjdG9ycyA9IHNlbGVjdG9ycztcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldFNlbGVjdG9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RvcnM7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgY2hlY2tNYXRjaGVzKHJ1bGVTZXRzKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHJ1bGVTZXRzLnNvbWUoKHJ1bGVTZXQpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdG9ycyA9IHJ1bGVTZXQuZ2V0U2VsZWN0b3JzKCksXG4gICAgICAgICAgICBzZWxlY3RvcnNNYXRjaCA9IGNoZWNrU2VsZWN0b3JzTWF0Y2goc2VsZWN0b3JzLCB0aGlzLnNlbGVjdG9ycyk7XG5cbiAgICAgIGlmIChzZWxlY3RvcnNNYXRjaCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpIHtcbiAgICBsZXQgY3NzID0gXCJcIjtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuZGVjbGFyYXRpb25zLmFzQ1NTKGAgICR7aW5kZW50fWApO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uc0NTUyAhPT0gXCJcIikge1xuICAgICAgIGNzcyA9IGAke2luZGVudH0uJHtjbGFzc05hbWV9JHt0aGlzLnNlbGVjdG9yc30ge1xuJHtkZWNsYXJhdGlvbnNDU1N9XG4ke2luZGVudH19XG5cbmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSBzZWxlY3RvcnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG1lZGlhID0gbmV3IFJ1bGVTZXQoc2VsZWN0b3JzLCBkZWNsYXJhdGlvbnMpO1xuXG4gICAgcmV0dXJuIG1lZGlhO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdG9yc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBzZWxlY3RvcnNOb2RlQ29udGVudCA9IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zKHNlbGVjdG9yc1F1ZXJ5LCBub2RlLCB0b2tlbnMpLFxuICAgICAgICBzZWxlY3RvcnMgPSBgJHtzZWxlY3RvcnNOb2RlQ29udGVudH1gO1xuXG4gIHJldHVybiBzZWxlY3RvcnM7XG59XG5cbmZ1bmN0aW9uIGNoZWNrU2VsZWN0b3JzTWF0Y2goc2VsZWN0b3JzQSwgc2VsZWN0b3JzQikge1xuICBjb25zdCBzZWxlY3RvcnNNYXRjaCA9IChzZWxlY3RvcnNBID09PSBzZWxlY3RvcnNCKTtcblxuICAvLyBsZXQgc2VsZWN0b3JzTWF0Y2ggPSB0cnVlO1xuICAvL1xuICAvLyBpZiAoc2VsZWN0b3JzTWF0Y2ggPT09IHRydWUpIHtcbiAgLy8gICBzZWxlY3RvcnNBLnNvbWUoKHNlbGVjdG9yQSkgPT4ge1xuICAvLyAgICAgY29uc3Qgc2VsZWN0b3JzQkluY2x1ZGVzU2VsZWN0b3JBID0gc2VsZWN0b3JzQi5pbmNsdWRlcyhzZWxlY3RvckEpO1xuICAvL1xuICAvLyAgICAgaWYgKCFzZWxlY3RvcnNCSW5jbHVkZXNTZWxlY3RvckEpIHtcbiAgLy8gICAgICAgc2VsZWN0b3JzTWF0Y2ggPSBmYWxzZTtcbiAgLy9cbiAgLy8gICAgICAgcmV0dXJuIHRydWU7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gaWYgKHNlbGVjdG9yc01hdGNoID09PSB0cnVlKSB7XG4gIC8vICAgc2VsZWN0b3JzQi5zb21lKChzZWxlY3RvckIpID0+IHtcbiAgLy8gICAgIGNvbnN0IHNlbGVjdG9yc0FJbmNsdWRlc1NlbGVjdG9yQiA9IHNlbGVjdG9yc0EuaW5jbHVkZXMoc2VsZWN0b3JCKTtcbiAgLy9cbiAgLy8gICAgIGlmICghc2VsZWN0b3JzQUluY2x1ZGVzU2VsZWN0b3JCKSB7XG4gIC8vICAgICAgIHNlbGVjdG9yc01hdGNoID0gZmFsc2U7XG4gIC8vXG4gIC8vICAgICAgIHJldHVybiB0cnVlO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgcmV0dXJuIHNlbGVjdG9yc01hdGNoO1xufVxuIl19