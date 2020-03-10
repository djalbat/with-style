'use strict';

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

var mediaQueriesQuery = _occamDom.Query.fromExpression('/media/mediaQueries');

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
      var declarationsCSS = this.declarations.asCSS('    '),
          ruleSetsCSS = this.ruleSets.asCSS(className, '  '),
          css = "@media ".concat(this.mediaQueries, " {\n  .").concat(className, " {\n").concat(declarationsCSS, "\n  }\n  \n").concat(ruleSetsCSS, "\n}\n\n");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhLmpzIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJtZWRpYVF1ZXJpZXNRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJNZWRpYSIsIm1lZGlhUXVlcmllcyIsImRlY2xhcmF0aW9ucyIsInJ1bGVTZXRzIiwiY2xhc3NOYW1lIiwiZGVjbGFyYXRpb25zQ1NTIiwiYXNDU1MiLCJydWxlU2V0c0NTUyIsImNzcyIsIm5vZGUiLCJ0b2tlbnMiLCJtZWRpYVF1ZXJpZXNGcm9tTm9kZUFuZFRva2VucyIsIkRlY2xhcmF0aW9ucyIsImZyb21Ob2RlQW5kVG9rZW5zIiwiUnVsZVNldHMiLCJtZWRpYSIsIm1lZGlhUXVlcmllc05vZGVzIiwiZXhlY3V0ZSIsImZpcnN0U2VsZWN0b3JzTm9kZSIsIm1lZGlhUXVlcmllc05vZGUiLCJtZWRpYVF1ZXJpZXNOb2RlQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7OztJQUVRQSxLLEdBQVVDLHlCLENBQVZELEs7O0FBRVIsSUFBTUUsaUJBQWlCLEdBQUdDLGdCQUFNQyxjQUFOLENBQXFCLHFCQUFyQixDQUExQjs7SUFFcUJDLEs7QUFDbkIsaUJBQVlDLFlBQVosRUFBMEJDLFlBQTFCLEVBQXdDQyxRQUF4QyxFQUFrRDtBQUFBOztBQUNoRCxTQUFLRixZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7OzswQkFFS0MsUyxFQUFXO0FBQ2YsVUFBTUMsZUFBZSxHQUFHLEtBQUtILFlBQUwsQ0FBa0JJLEtBQWxCLENBQXdCLE1BQXhCLENBQXhCO0FBQUEsVUFDTUMsV0FBVyxHQUFHLEtBQUtKLFFBQUwsQ0FBY0csS0FBZCxDQUFvQkYsU0FBcEIsRUFBK0IsSUFBL0IsQ0FEcEI7QUFBQSxVQUVNSSxHQUFHLG9CQUFhLEtBQUtQLFlBQWxCLG9CQUNSRyxTQURRLGlCQUVYQyxlQUZXLHdCQUtYRSxXQUxXLFlBRlQ7QUFZQSxhQUFPQyxHQUFQO0FBQ0Q7OztzQ0FFd0JDLEksRUFBTUMsTSxFQUFRO0FBQ3JDLFVBQU1ULFlBQVksR0FBR1UsNkJBQTZCLENBQUNGLElBQUQsRUFBT0MsTUFBUCxDQUFsRDtBQUFBLFVBQ01SLFlBQVksR0FBR1UseUJBQWFDLGlCQUFiLENBQStCSixJQUEvQixFQUFxQ0MsTUFBckMsQ0FEckI7QUFBQSxVQUVNUCxRQUFRLEdBQUdXLHFCQUFTRCxpQkFBVCxDQUEyQkosSUFBM0IsRUFBaUNDLE1BQWpDLENBRmpCO0FBQUEsVUFHTUssS0FBSyxHQUFHLElBQUlmLEtBQUosQ0FBVUMsWUFBVixFQUF3QkMsWUFBeEIsRUFBc0NDLFFBQXRDLENBSGQ7O0FBS0EsYUFBT1ksS0FBUDtBQUNEOzs7Ozs7OztBQUdILFNBQVNKLDZCQUFULENBQXVDRixJQUF2QyxFQUE2Q0MsTUFBN0MsRUFBcUQ7QUFDbkQsTUFBTU0saUJBQWlCLEdBQUduQixpQkFBaUIsQ0FBQ29CLE9BQWxCLENBQTBCUixJQUExQixDQUExQjtBQUFBLE1BQ01TLGtCQUFrQixHQUFHdkIsS0FBSyxDQUFDcUIsaUJBQUQsQ0FEaEM7QUFBQSxNQUVNRyxnQkFBZ0IsR0FBR0Qsa0JBRnpCO0FBQUEsTUFFNkM7QUFDdkNFLEVBQUFBLHVCQUF1QixHQUFHLHFCQUFVRCxnQkFBVixFQUE0QlQsTUFBNUIsQ0FIaEM7QUFBQSxNQUlNVCxZQUFZLGFBQU1tQix1QkFBTixDQUpsQjtBQU1BLFNBQU9uQixZQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAnb2NjYW0tZG9tJztcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSAnbmVjZXNzYXJ5JztcblxuaW1wb3J0IFJ1bGVTZXRzIGZyb20gJy4vcnVsZVNldHMnO1xuaW1wb3J0IERlY2xhcmF0aW9ucyBmcm9tICcuL2RlY2xhcmF0aW9ucyc7XG5cbmltcG9ydCB7IGFzQ29udGVudCB9IGZyb20gJy4uL3V0aWxpdGllcy9ub2RlJztcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IG1lZGlhUXVlcmllc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oJy9tZWRpYS9tZWRpYVF1ZXJpZXMnKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWEge1xuICBjb25zdHJ1Y3RvcihtZWRpYVF1ZXJpZXMsIGRlY2xhcmF0aW9ucywgcnVsZVNldHMpIHtcbiAgICB0aGlzLm1lZGlhUXVlcmllcyA9IG1lZGlhUXVlcmllcztcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgICB0aGlzLnJ1bGVTZXRzID0gcnVsZVNldHM7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmRlY2xhcmF0aW9ucy5hc0NTUygnICAgICcpLFxuICAgICAgICAgIHJ1bGVTZXRzQ1NTID0gdGhpcy5ydWxlU2V0cy5hc0NTUyhjbGFzc05hbWUsICcgICcpLFxuICAgICAgICAgIGNzcyA9IGBAbWVkaWEgJHt0aGlzLm1lZGlhUXVlcmllc30ge1xuICAuJHtjbGFzc05hbWV9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfVxuICB9XG4gIFxuJHtydWxlU2V0c0NTU31cbn1cblxuYDtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgbWVkaWFRdWVyaWVzID0gbWVkaWFRdWVyaWVzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBEZWNsYXJhdGlvbnMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBydWxlU2V0cyA9IFJ1bGVTZXRzLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgbWVkaWEgPSBuZXcgTWVkaWEobWVkaWFRdWVyaWVzLCBkZWNsYXJhdGlvbnMsIHJ1bGVTZXRzKTtcblxuICAgIHJldHVybiBtZWRpYTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtZWRpYVF1ZXJpZXNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgY29uc3QgbWVkaWFRdWVyaWVzTm9kZXMgPSBtZWRpYVF1ZXJpZXNRdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICBmaXJzdFNlbGVjdG9yc05vZGUgPSBmaXJzdChtZWRpYVF1ZXJpZXNOb2RlcyksXG4gICAgICAgIG1lZGlhUXVlcmllc05vZGUgPSBmaXJzdFNlbGVjdG9yc05vZGUsIC8vL1xuICAgICAgICBtZWRpYVF1ZXJpZXNOb2RlQ29udGVudCA9IGFzQ29udGVudChtZWRpYVF1ZXJpZXNOb2RlLCB0b2tlbnMpLFxuICAgICAgICBtZWRpYVF1ZXJpZXMgPSBgJHttZWRpYVF1ZXJpZXNOb2RlQ29udGVudH1gO1xuXG4gIHJldHVybiBtZWRpYVF1ZXJpZXM7XG59XG4iXX0=