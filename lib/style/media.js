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
    key: "getMediaQueries",
    value: function getMediaQueries() {
      return this.mediaQueries;
    }
  }, {
    key: "getDeclarations",
    value: function getDeclarations() {
      return this.declarations;
    }
  }, {
    key: "getRuleSets",
    value: function getRuleSets() {
      return this.ruleSets;
    }
  }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhLmpzIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJtZWRpYVF1ZXJpZXNRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJNZWRpYSIsIm1lZGlhUXVlcmllcyIsImRlY2xhcmF0aW9ucyIsInJ1bGVTZXRzIiwiY2xhc3NOYW1lIiwiY3NzIiwicnVsZVNldHNDU1MiLCJhc0NTUyIsImRlY2xhcmF0aW9uc0NTUyIsIm5vZGUiLCJ0b2tlbnMiLCJtZWRpYVF1ZXJpZXNGcm9tTm9kZUFuZFRva2VucyIsIkRlY2xhcmF0aW9ucyIsImZyb21Ob2RlQW5kVG9rZW5zIiwiUnVsZVNldHMiLCJtZWRpYSIsIm1lZGlhUXVlcmllc05vZGVzIiwiZXhlY3V0ZSIsImZpcnN0U2VsZWN0b3JzTm9kZSIsIm1lZGlhUXVlcmllc05vZGUiLCJtZWRpYVF1ZXJpZXNOb2RlQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7OztJQUVRQSxLLEdBQVVDLHlCLENBQVZELEs7O0FBRVIsSUFBTUUsaUJBQWlCLEdBQUdDLGdCQUFNQyxjQUFOLENBQXFCLHFCQUFyQixDQUExQjs7SUFFcUJDLEs7QUFDbkIsaUJBQVlDLFlBQVosRUFBMEJDLFlBQTFCLEVBQXdDQyxRQUF4QyxFQUFrRDtBQUFBOztBQUNoRCxTQUFLRixZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7OztzQ0FFaUI7QUFDaEIsYUFBTyxLQUFLRixZQUFaO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsYUFBTyxLQUFLQyxZQUFaO0FBQ0Q7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0MsUUFBWjtBQUNEOzs7MEJBRUtDLFMsRUFBVztBQUNmLFVBQUlDLEdBQUcsR0FBRyxFQUFWO0FBRUEsVUFBTUMsV0FBVyxHQUFHLEtBQUtILFFBQUwsQ0FBY0ksS0FBZCxDQUFvQkgsU0FBcEIsRUFBK0IsSUFBL0IsQ0FBcEI7QUFBQSxVQUNNSSxlQUFlLEdBQUcsS0FBS04sWUFBTCxDQUFrQkssS0FBbEIsQ0FBd0JILFNBQXhCLEVBQW1DLE1BQW5DLENBRHhCOztBQUdBLFVBQUtFLFdBQVcsS0FBSyxJQUFqQixJQUEyQkUsZUFBZSxLQUFLLElBQW5ELEVBQTBEO0FBQ3hESCxRQUFBQSxHQUFHLG9CQUFhLEtBQUtKLFlBQWxCLGlCQUNQTyxlQURPLFNBQ1dGLFdBRFgsWUFBSDtBQUtEOztBQUVELGFBQU9ELEdBQVA7QUFDRDs7O3NDQUV3QkksSSxFQUFNQyxNLEVBQVE7QUFDckMsVUFBTVQsWUFBWSxHQUFHVSw2QkFBNkIsQ0FBQ0YsSUFBRCxFQUFPQyxNQUFQLENBQWxEO0FBQUEsVUFDTVIsWUFBWSxHQUFHVSx5QkFBYUMsaUJBQWIsQ0FBK0JKLElBQS9CLEVBQXFDQyxNQUFyQyxDQURyQjtBQUFBLFVBRU1QLFFBQVEsR0FBR1cscUJBQVNELGlCQUFULENBQTJCSixJQUEzQixFQUFpQ0MsTUFBakMsQ0FGakI7QUFBQSxVQUdNSyxLQUFLLEdBQUcsSUFBSWYsS0FBSixDQUFVQyxZQUFWLEVBQXdCQyxZQUF4QixFQUFzQ0MsUUFBdEMsQ0FIZDs7QUFLQSxhQUFPWSxLQUFQO0FBQ0Q7Ozs7Ozs7O0FBR0gsU0FBU0osNkJBQVQsQ0FBdUNGLElBQXZDLEVBQTZDQyxNQUE3QyxFQUFxRDtBQUNuRCxNQUFNTSxpQkFBaUIsR0FBR25CLGlCQUFpQixDQUFDb0IsT0FBbEIsQ0FBMEJSLElBQTFCLENBQTFCO0FBQUEsTUFDTVMsa0JBQWtCLEdBQUd2QixLQUFLLENBQUNxQixpQkFBRCxDQURoQztBQUFBLE1BRU1HLGdCQUFnQixHQUFHRCxrQkFGekI7QUFBQSxNQUU2QztBQUN2Q0UsRUFBQUEsdUJBQXVCLEdBQUcscUJBQVVELGdCQUFWLEVBQTRCVCxNQUE1QixDQUhoQztBQUFBLE1BSU1ULFlBQVksYUFBTW1CLHVCQUFOLENBSmxCO0FBTUEsU0FBT25CLFlBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1kb21cIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUnVsZVNldHMgZnJvbSBcIi4vcnVsZVNldHNcIjtcbmltcG9ydCBEZWNsYXJhdGlvbnMgZnJvbSBcIi4vZGVjbGFyYXRpb25zXCI7XG5cbmltcG9ydCB7IGFzQ29udGVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgbWVkaWFRdWVyaWVzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi9tZWRpYS9tZWRpYVF1ZXJpZXNcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhIHtcbiAgY29uc3RydWN0b3IobWVkaWFRdWVyaWVzLCBkZWNsYXJhdGlvbnMsIHJ1bGVTZXRzKSB7XG4gICAgdGhpcy5tZWRpYVF1ZXJpZXMgPSBtZWRpYVF1ZXJpZXM7XG4gICAgdGhpcy5kZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnM7XG4gICAgdGhpcy5ydWxlU2V0cyA9IHJ1bGVTZXRzO1xuICB9XG5cbiAgZ2V0TWVkaWFRdWVyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLm1lZGlhUXVlcmllcztcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbnM7XG4gIH1cblxuICBnZXRSdWxlU2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlU2V0cztcbiAgfVxuXG4gIGFzQ1NTKGNsYXNzTmFtZSkge1xuICAgIGxldCBjc3MgPSBcIlwiO1xuXG4gICAgY29uc3QgcnVsZVNldHNDU1MgPSB0aGlzLnJ1bGVTZXRzLmFzQ1NTKGNsYXNzTmFtZSwgXCIgIFwiKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmRlY2xhcmF0aW9ucy5hc0NTUyhjbGFzc05hbWUsIFwiICAgIFwiKTtcblxuICAgIGlmICgocnVsZVNldHNDU1MgIT09IG51bGwpIHx8IChkZWNsYXJhdGlvbnNDU1MgIT09IG51bGwpKSB7XG4gICAgICBjc3MgPSBgQG1lZGlhICR7dGhpcy5tZWRpYVF1ZXJpZXN9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfSR7cnVsZVNldHNDU1N9XG59XG5cbmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBtZWRpYVF1ZXJpZXMgPSBtZWRpYVF1ZXJpZXNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVTZXRzID0gUnVsZVNldHMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBtZWRpYSA9IG5ldyBNZWRpYShtZWRpYVF1ZXJpZXMsIGRlY2xhcmF0aW9ucywgcnVsZVNldHMpO1xuXG4gICAgcmV0dXJuIG1lZGlhO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lZGlhUXVlcmllc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBtZWRpYVF1ZXJpZXNOb2RlcyA9IG1lZGlhUXVlcmllc1F1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgIGZpcnN0U2VsZWN0b3JzTm9kZSA9IGZpcnN0KG1lZGlhUXVlcmllc05vZGVzKSxcbiAgICAgICAgbWVkaWFRdWVyaWVzTm9kZSA9IGZpcnN0U2VsZWN0b3JzTm9kZSwgLy8vXG4gICAgICAgIG1lZGlhUXVlcmllc05vZGVDb250ZW50ID0gYXNDb250ZW50KG1lZGlhUXVlcmllc05vZGUsIHRva2VucyksXG4gICAgICAgIG1lZGlhUXVlcmllcyA9IGAke21lZGlhUXVlcmllc05vZGVDb250ZW50fWA7XG5cbiAgcmV0dXJuIG1lZGlhUXVlcmllcztcbn1cbiJdfQ==