"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamDom = require("occam-dom");

var _necessary = require("necessary");

var _ruleSets = _interopRequireDefault(require("./ruleSets"));

var _declarations = _interopRequireDefault(require("./declarations"));

var _node = require("../utilities/node");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var first = _necessary.arrayUtilities.first;

var mediaQueriesQuery = _occamDom.Query.fromExpression("/media/mediaQueries");

var Media = /*#__PURE__*/function () {
  function Media(mediaQueries, declarations, ruleSets) {
    _classCallCheck(this, Media);

    this.mediaQueries = mediaQueries;
    this.declarations = declarations;
    this.ruleSets = ruleSets;
  }

  _createClass(Media, [{
    key: "asCSS",
    value: function asCSS(className) {
      var css = "";
      var ruleSetsCSS = this.ruleSets.asCSS(className, "  "),
          declarationsCSS = this.declarations.asCSS(className, "    ");

      if (ruleSetsCSS !== null || declarationsCSS !== null) {
        css = "@media ".concat(this.mediaQueries, " {\n").concat(declarationsCSS).concat(ruleSetsCSS, "\n}\n\n");
      }

      return css;
    }
  }], [{
    key: "fromNodeAndTokens",
    value: function fromNodeAndTokens(node, tokens) {
      var mediaQueries = mediaQueriesFromNodeAndTokens(node, tokens),
          declarations = _declarations["default"].fromNodeAndTokens(node, tokens),
          ruleSets = _ruleSets["default"].fromNodeAndTokens(node, tokens),
          media = new Media(mediaQueries, declarations, ruleSets);

      return media;
    }
  }]);

  return Media;
}();

exports["default"] = Media;

function mediaQueriesFromNodeAndTokens(node, tokens) {
  var mediaQueriesNodes = mediaQueriesQuery.execute(node),
      firstSelectorsNode = first(mediaQueriesNodes),
      mediaQueriesNode = firstSelectorsNode,
      ///
  mediaQueriesNodeContent = (0, _node.asContent)(mediaQueriesNode, tokens),
      mediaQueries = "".concat(mediaQueriesNodeContent);
  return mediaQueries;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhLmpzIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJtZWRpYVF1ZXJpZXNRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJNZWRpYSIsIm1lZGlhUXVlcmllcyIsImRlY2xhcmF0aW9ucyIsInJ1bGVTZXRzIiwiY2xhc3NOYW1lIiwiY3NzIiwicnVsZVNldHNDU1MiLCJhc0NTUyIsImRlY2xhcmF0aW9uc0NTUyIsIm5vZGUiLCJ0b2tlbnMiLCJtZWRpYVF1ZXJpZXNGcm9tTm9kZUFuZFRva2VucyIsIkRlY2xhcmF0aW9ucyIsImZyb21Ob2RlQW5kVG9rZW5zIiwiUnVsZVNldHMiLCJtZWRpYSIsIm1lZGlhUXVlcmllc05vZGVzIiwiZXhlY3V0ZSIsImZpcnN0U2VsZWN0b3JzTm9kZSIsIm1lZGlhUXVlcmllc05vZGUiLCJtZWRpYVF1ZXJpZXNOb2RlQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7OztJQUVRQSxLLEdBQVVDLHlCLENBQVZELEs7O0FBRVIsSUFBTUUsaUJBQWlCLEdBQUdDLGdCQUFNQyxjQUFOLENBQXFCLHFCQUFyQixDQUExQjs7SUFFcUJDLEs7QUFDbkIsaUJBQVlDLFlBQVosRUFBMEJDLFlBQTFCLEVBQXdDQyxRQUF4QyxFQUFrRDtBQUFBOztBQUNoRCxTQUFLRixZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7OzswQkFFS0MsUyxFQUFXO0FBQ2YsVUFBSUMsR0FBRyxHQUFHLEVBQVY7QUFFQSxVQUFNQyxXQUFXLEdBQUcsS0FBS0gsUUFBTCxDQUFjSSxLQUFkLENBQW9CSCxTQUFwQixFQUErQixJQUEvQixDQUFwQjtBQUFBLFVBQ01JLGVBQWUsR0FBRyxLQUFLTixZQUFMLENBQWtCSyxLQUFsQixDQUF3QkgsU0FBeEIsRUFBbUMsTUFBbkMsQ0FEeEI7O0FBR0EsVUFBS0UsV0FBVyxLQUFLLElBQWpCLElBQTJCRSxlQUFlLEtBQUssSUFBbkQsRUFBMEQ7QUFDeERILFFBQUFBLEdBQUcsb0JBQWEsS0FBS0osWUFBbEIsaUJBQ1BPLGVBRE8sU0FDV0YsV0FEWCxZQUFIO0FBS0Q7O0FBRUQsYUFBT0QsR0FBUDtBQUNEOzs7c0NBRXdCSSxJLEVBQU1DLE0sRUFBUTtBQUNyQyxVQUFNVCxZQUFZLEdBQUdVLDZCQUE2QixDQUFDRixJQUFELEVBQU9DLE1BQVAsQ0FBbEQ7QUFBQSxVQUNNUixZQUFZLEdBQUdVLHlCQUFhQyxpQkFBYixDQUErQkosSUFBL0IsRUFBcUNDLE1BQXJDLENBRHJCO0FBQUEsVUFFTVAsUUFBUSxHQUFHVyxxQkFBU0QsaUJBQVQsQ0FBMkJKLElBQTNCLEVBQWlDQyxNQUFqQyxDQUZqQjtBQUFBLFVBR01LLEtBQUssR0FBRyxJQUFJZixLQUFKLENBQVVDLFlBQVYsRUFBd0JDLFlBQXhCLEVBQXNDQyxRQUF0QyxDQUhkOztBQUtBLGFBQU9ZLEtBQVA7QUFDRDs7Ozs7Ozs7QUFHSCxTQUFTSiw2QkFBVCxDQUF1Q0YsSUFBdkMsRUFBNkNDLE1BQTdDLEVBQXFEO0FBQ25ELE1BQU1NLGlCQUFpQixHQUFHbkIsaUJBQWlCLENBQUNvQixPQUFsQixDQUEwQlIsSUFBMUIsQ0FBMUI7QUFBQSxNQUNNUyxrQkFBa0IsR0FBR3ZCLEtBQUssQ0FBQ3FCLGlCQUFELENBRGhDO0FBQUEsTUFFTUcsZ0JBQWdCLEdBQUdELGtCQUZ6QjtBQUFBLE1BRTZDO0FBQ3ZDRSxFQUFBQSx1QkFBdUIsR0FBRyxxQkFBVUQsZ0JBQVYsRUFBNEJULE1BQTVCLENBSGhDO0FBQUEsTUFJTVQsWUFBWSxhQUFNbUIsdUJBQU4sQ0FKbEI7QUFNQSxTQUFPbkIsWUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBSdWxlU2V0cyBmcm9tIFwiLi9ydWxlU2V0c1wiO1xuaW1wb3J0IERlY2xhcmF0aW9ucyBmcm9tIFwiLi9kZWNsYXJhdGlvbnNcIjtcblxuaW1wb3J0IHsgYXNDb250ZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBtZWRpYVF1ZXJpZXNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiL21lZGlhL21lZGlhUXVlcmllc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWEge1xuICBjb25zdHJ1Y3RvcihtZWRpYVF1ZXJpZXMsIGRlY2xhcmF0aW9ucywgcnVsZVNldHMpIHtcbiAgICB0aGlzLm1lZGlhUXVlcmllcyA9IG1lZGlhUXVlcmllcztcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgICB0aGlzLnJ1bGVTZXRzID0gcnVsZVNldHM7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUpIHtcbiAgICBsZXQgY3NzID0gXCJcIjtcblxuICAgIGNvbnN0IHJ1bGVTZXRzQ1NTID0gdGhpcy5ydWxlU2V0cy5hc0NTUyhjbGFzc05hbWUsIFwiICBcIiksXG4gICAgICAgICAgZGVjbGFyYXRpb25zQ1NTID0gdGhpcy5kZWNsYXJhdGlvbnMuYXNDU1MoY2xhc3NOYW1lLCBcIiAgICBcIik7XG5cbiAgICBpZiAoKHJ1bGVTZXRzQ1NTICE9PSBudWxsKSB8fCAoZGVjbGFyYXRpb25zQ1NTICE9PSBudWxsKSkge1xuICAgICAgY3NzID0gYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzfSB7XG4ke2RlY2xhcmF0aW9uc0NTU30ke3J1bGVTZXRzQ1NTfVxufVxuXG5gO1xuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgbWVkaWFRdWVyaWVzID0gbWVkaWFRdWVyaWVzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBEZWNsYXJhdGlvbnMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBydWxlU2V0cyA9IFJ1bGVTZXRzLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgbWVkaWEgPSBuZXcgTWVkaWEobWVkaWFRdWVyaWVzLCBkZWNsYXJhdGlvbnMsIHJ1bGVTZXRzKTtcblxuICAgIHJldHVybiBtZWRpYTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtZWRpYVF1ZXJpZXNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgY29uc3QgbWVkaWFRdWVyaWVzTm9kZXMgPSBtZWRpYVF1ZXJpZXNRdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICBmaXJzdFNlbGVjdG9yc05vZGUgPSBmaXJzdChtZWRpYVF1ZXJpZXNOb2RlcyksXG4gICAgICAgIG1lZGlhUXVlcmllc05vZGUgPSBmaXJzdFNlbGVjdG9yc05vZGUsIC8vL1xuICAgICAgICBtZWRpYVF1ZXJpZXNOb2RlQ29udGVudCA9IGFzQ29udGVudChtZWRpYVF1ZXJpZXNOb2RlLCB0b2tlbnMpLFxuICAgICAgICBtZWRpYVF1ZXJpZXMgPSBgJHttZWRpYVF1ZXJpZXNOb2RlQ29udGVudH1gO1xuXG4gIHJldHVybiBtZWRpYVF1ZXJpZXM7XG59XG4iXX0=