"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamDom = require("occam-dom");

var _ruleSets = _interopRequireDefault(require("./ruleSets"));

var _declarations = _interopRequireDefault(require("./declarations"));

var _content = require("../utilities/content");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  var mediaQueriesNodeContent = (0, _content.contentFromQueryNodeAndTokens)(mediaQueriesQuery, node, tokens),
      mediaQueries = "".concat(mediaQueriesNodeContent);
  return mediaQueries;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhLmpzIl0sIm5hbWVzIjpbIm1lZGlhUXVlcmllc1F1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIk1lZGlhIiwibWVkaWFRdWVyaWVzIiwiZGVjbGFyYXRpb25zIiwicnVsZVNldHMiLCJjbGFzc05hbWUiLCJjc3MiLCJydWxlU2V0c0NTUyIsImFzQ1NTIiwiZGVjbGFyYXRpb25zQ1NTIiwibm9kZSIsInRva2VucyIsIm1lZGlhUXVlcmllc0Zyb21Ob2RlQW5kVG9rZW5zIiwiRGVjbGFyYXRpb25zIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJSdWxlU2V0cyIsIm1lZGlhIiwibWVkaWFRdWVyaWVzTm9kZUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBR0MsZ0JBQU1DLGNBQU4sQ0FBcUIscUJBQXJCLENBQTFCOztJQUVxQkMsSztBQUNuQixpQkFBWUMsWUFBWixFQUEwQkMsWUFBMUIsRUFBd0NDLFFBQXhDLEVBQWtEO0FBQUE7O0FBQ2hELFNBQUtGLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7O3NDQUVpQjtBQUNoQixhQUFPLEtBQUtGLFlBQVo7QUFDRDs7O3NDQUVpQjtBQUNoQixhQUFPLEtBQUtDLFlBQVo7QUFDRDs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQyxRQUFaO0FBQ0Q7OzswQkFFS0MsUyxFQUFXO0FBQ2YsVUFBSUMsR0FBRyxHQUFHLEVBQVY7QUFFQSxVQUFNQyxXQUFXLEdBQUcsS0FBS0gsUUFBTCxDQUFjSSxLQUFkLENBQW9CSCxTQUFwQixFQUErQixJQUEvQixDQUFwQjtBQUFBLFVBQ01JLGVBQWUsR0FBRyxLQUFLTixZQUFMLENBQWtCSyxLQUFsQixDQUF3QkgsU0FBeEIsRUFBbUMsTUFBbkMsQ0FEeEI7O0FBR0EsVUFBS0UsV0FBVyxLQUFLLElBQWpCLElBQTJCRSxlQUFlLEtBQUssSUFBbkQsRUFBMEQ7QUFDeERILFFBQUFBLEdBQUcsb0JBQWEsS0FBS0osWUFBbEIsaUJBQ1BPLGVBRE8sU0FDV0YsV0FEWCxZQUFIO0FBS0Q7O0FBRUQsYUFBT0QsR0FBUDtBQUNEOzs7c0NBRXdCSSxJLEVBQU1DLE0sRUFBUTtBQUNyQyxVQUFNVCxZQUFZLEdBQUdVLDZCQUE2QixDQUFDRixJQUFELEVBQU9DLE1BQVAsQ0FBbEQ7QUFBQSxVQUNNUixZQUFZLEdBQUdVLHlCQUFhQyxpQkFBYixDQUErQkosSUFBL0IsRUFBcUNDLE1BQXJDLENBRHJCO0FBQUEsVUFFTVAsUUFBUSxHQUFHVyxxQkFBU0QsaUJBQVQsQ0FBMkJKLElBQTNCLEVBQWlDQyxNQUFqQyxDQUZqQjtBQUFBLFVBR01LLEtBQUssR0FBRyxJQUFJZixLQUFKLENBQVVDLFlBQVYsRUFBd0JDLFlBQXhCLEVBQXNDQyxRQUF0QyxDQUhkOztBQUtBLGFBQU9ZLEtBQVA7QUFDRDs7Ozs7Ozs7QUFHSCxTQUFTSiw2QkFBVCxDQUF1Q0YsSUFBdkMsRUFBNkNDLE1BQTdDLEVBQXFEO0FBQ25ELE1BQU1NLHVCQUF1QixHQUFHLDRDQUE4Qm5CLGlCQUE5QixFQUFpRFksSUFBakQsRUFBdURDLE1BQXZELENBQWhDO0FBQUEsTUFDTVQsWUFBWSxhQUFNZSx1QkFBTixDQURsQjtBQUdBLFNBQU9mLFlBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IFJ1bGVTZXRzIGZyb20gXCIuL3J1bGVTZXRzXCI7XG5pbXBvcnQgRGVjbGFyYXRpb25zIGZyb20gXCIuL2RlY2xhcmF0aW9uc1wiO1xuXG5pbXBvcnQgeyBjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGVudFwiO1xuXG5jb25zdCBtZWRpYVF1ZXJpZXNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiL21lZGlhL21lZGlhUXVlcmllc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWEge1xuICBjb25zdHJ1Y3RvcihtZWRpYVF1ZXJpZXMsIGRlY2xhcmF0aW9ucywgcnVsZVNldHMpIHtcbiAgICB0aGlzLm1lZGlhUXVlcmllcyA9IG1lZGlhUXVlcmllcztcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgICB0aGlzLnJ1bGVTZXRzID0gcnVsZVNldHM7XG4gIH1cblxuICBnZXRNZWRpYVF1ZXJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVkaWFRdWVyaWVzO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldFJ1bGVTZXRzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVTZXRzO1xuICB9XG5cbiAgYXNDU1MoY2xhc3NOYW1lKSB7XG4gICAgbGV0IGNzcyA9IFwiXCI7XG5cbiAgICBjb25zdCBydWxlU2V0c0NTUyA9IHRoaXMucnVsZVNldHMuYXNDU1MoY2xhc3NOYW1lLCBcIiAgXCIpLFxuICAgICAgICAgIGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuZGVjbGFyYXRpb25zLmFzQ1NTKGNsYXNzTmFtZSwgXCIgICAgXCIpO1xuXG4gICAgaWYgKChydWxlU2V0c0NTUyAhPT0gbnVsbCkgfHwgKGRlY2xhcmF0aW9uc0NTUyAhPT0gbnVsbCkpIHtcbiAgICAgIGNzcyA9IGBAbWVkaWEgJHt0aGlzLm1lZGlhUXVlcmllc30ge1xuJHtkZWNsYXJhdGlvbnNDU1N9JHtydWxlU2V0c0NTU31cbn1cblxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IG1lZGlhUXVlcmllcyA9IG1lZGlhUXVlcmllc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gRGVjbGFyYXRpb25zLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgcnVsZVNldHMgPSBSdWxlU2V0cy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG1lZGlhID0gbmV3IE1lZGlhKG1lZGlhUXVlcmllcywgZGVjbGFyYXRpb25zLCBydWxlU2V0cyk7XG5cbiAgICByZXR1cm4gbWVkaWE7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVkaWFRdWVyaWVzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IG1lZGlhUXVlcmllc05vZGVDb250ZW50ID0gY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMobWVkaWFRdWVyaWVzUXVlcnksIG5vZGUsIHRva2VucyksXG4gICAgICAgIG1lZGlhUXVlcmllcyA9IGAke21lZGlhUXVlcmllc05vZGVDb250ZW50fWA7XG5cbiAgcmV0dXJuIG1lZGlhUXVlcmllcztcbn1cbiJdfQ==