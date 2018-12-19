'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dom = require('occam-dom'),
    ///
necessary = require('necessary');

var RuleSets = require('./ruleSets'),
    Declarations = require('./declarations');

var arrayUtilities = necessary.arrayUtilities,
    Query = dom.Query,
    nodeUtilities = dom.nodeUtilities,
    asContent = nodeUtilities.asContent,
    first = arrayUtilities.first;


var mediaQueriesQuery = Query.fromExpression('/media/mediaQueries');

var Media = function () {
  function Media(mediaQueries, declarations, ruleSets) {
    _classCallCheck(this, Media);

    this.mediaQueries = mediaQueries;
    this.declarations = declarations;
    this.ruleSets = ruleSets;
  }

  _createClass(Media, [{
    key: 'asCSS',
    value: function asCSS(className) {
      var declarationsCSS = this.declarations.asCSS('    '),
          ruleSetsCSS = this.ruleSets.asCSS(className, '  '),
          css = '@media ' + this.mediaQueries + ' {\n  .' + className + ' {\n' + declarationsCSS + '\n  }\n  \n' + ruleSetsCSS + '\n}\n\n';

      return css;
    }
  }], [{
    key: 'fromNodeAndTokens',
    value: function fromNodeAndTokens(node, tokens) {
      var mediaQueries = mediaQueriesFromNodeAndTokens(node, tokens),
          declarations = Declarations.fromNodeAndTokens(node, tokens),
          ruleSets = RuleSets.fromNodeAndTokens(node, tokens),
          media = new Media(mediaQueries, declarations, ruleSets);

      return media;
    }
  }]);

  return Media;
}();

module.exports = Media;

function mediaQueriesFromNodeAndTokens(node, tokens) {
  var mediaQueriesNodes = mediaQueriesQuery.execute(node),
      firstSelectorsNode = first(mediaQueriesNodes),
      mediaQueriesNode = firstSelectorsNode,
      ///
  mediaQueriesNodeContent = asContent(mediaQueriesNode, tokens),
      mediaQueries = '' + mediaQueriesNodeContent;

  return mediaQueries;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zdHlsZS9tZWRpYS5qcyJdLCJuYW1lcyI6WyJkb20iLCJyZXF1aXJlIiwibmVjZXNzYXJ5IiwiUnVsZVNldHMiLCJEZWNsYXJhdGlvbnMiLCJhcnJheVV0aWxpdGllcyIsIlF1ZXJ5Iiwibm9kZVV0aWxpdGllcyIsImFzQ29udGVudCIsImZpcnN0IiwibWVkaWFRdWVyaWVzUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIk1lZGlhIiwibWVkaWFRdWVyaWVzIiwiZGVjbGFyYXRpb25zIiwicnVsZVNldHMiLCJjbGFzc05hbWUiLCJkZWNsYXJhdGlvbnNDU1MiLCJhc0NTUyIsInJ1bGVTZXRzQ1NTIiwiY3NzIiwibm9kZSIsInRva2VucyIsIm1lZGlhUXVlcmllc0Zyb21Ob2RlQW5kVG9rZW5zIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJtZWRpYSIsIm1vZHVsZSIsImV4cG9ydHMiLCJtZWRpYVF1ZXJpZXNOb2RlcyIsImV4ZWN1dGUiLCJmaXJzdFNlbGVjdG9yc05vZGUiLCJtZWRpYVF1ZXJpZXNOb2RlIiwibWVkaWFRdWVyaWVzTm9kZUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxNQUFNQyxRQUFRLFdBQVIsQ0FBWjtBQUFBLElBQW1DO0FBQzdCQyxZQUFZRCxRQUFRLFdBQVIsQ0FEbEI7O0FBR0EsSUFBTUUsV0FBV0YsUUFBUSxZQUFSLENBQWpCO0FBQUEsSUFDTUcsZUFBZUgsUUFBUSxnQkFBUixDQURyQjs7QUFHTSxJQUFFSSxjQUFGLEdBQXFCSCxTQUFyQixDQUFFRyxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUMyQk4sR0FEM0IsQ0FDRU0sS0FERjtBQUFBLElBQ1NDLGFBRFQsR0FDMkJQLEdBRDNCLENBQ1NPLGFBRFQ7QUFBQSxJQUVFQyxTQUZGLEdBRWdCRCxhQUZoQixDQUVFQyxTQUZGO0FBQUEsSUFHRUMsS0FIRixHQUdZSixjQUhaLENBR0VJLEtBSEY7OztBQUtOLElBQU1DLG9CQUFvQkosTUFBTUssY0FBTixDQUFxQixxQkFBckIsQ0FBMUI7O0lBRU1DLEs7QUFDSixpQkFBWUMsWUFBWixFQUEwQkMsWUFBMUIsRUFBd0NDLFFBQXhDLEVBQWtEO0FBQUE7O0FBQ2hELFNBQUtGLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7OzBCQUVLQyxTLEVBQVc7QUFDZixVQUFNQyxrQkFBa0IsS0FBS0gsWUFBTCxDQUFrQkksS0FBbEIsQ0FBd0IsTUFBeEIsQ0FBeEI7QUFBQSxVQUNNQyxjQUFjLEtBQUtKLFFBQUwsQ0FBY0csS0FBZCxDQUFvQkYsU0FBcEIsRUFBK0IsSUFBL0IsQ0FEcEI7QUFBQSxVQUVNSSxrQkFBZ0IsS0FBS1AsWUFBckIsZUFDTEcsU0FESyxZQUVSQyxlQUZRLG1CQUtSRSxXQUxRLFlBRk47O0FBWUEsYUFBT0MsR0FBUDtBQUNEOzs7c0NBRXdCQyxJLEVBQU1DLE0sRUFBUTtBQUNyQyxVQUFNVCxlQUFlVSw4QkFBOEJGLElBQTlCLEVBQW9DQyxNQUFwQyxDQUFyQjtBQUFBLFVBQ01SLGVBQWVWLGFBQWFvQixpQkFBYixDQUErQkgsSUFBL0IsRUFBcUNDLE1BQXJDLENBRHJCO0FBQUEsVUFFTVAsV0FBV1osU0FBU3FCLGlCQUFULENBQTJCSCxJQUEzQixFQUFpQ0MsTUFBakMsQ0FGakI7QUFBQSxVQUdNRyxRQUFRLElBQUliLEtBQUosQ0FBVUMsWUFBVixFQUF3QkMsWUFBeEIsRUFBc0NDLFFBQXRDLENBSGQ7O0FBS0EsYUFBT1UsS0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmYsS0FBakI7O0FBRUEsU0FBU1csNkJBQVQsQ0FBdUNGLElBQXZDLEVBQTZDQyxNQUE3QyxFQUFxRDtBQUNuRCxNQUFNTSxvQkFBb0JsQixrQkFBa0JtQixPQUFsQixDQUEwQlIsSUFBMUIsQ0FBMUI7QUFBQSxNQUNNUyxxQkFBcUJyQixNQUFNbUIsaUJBQU4sQ0FEM0I7QUFBQSxNQUVNRyxtQkFBbUJELGtCQUZ6QjtBQUFBLE1BRTZDO0FBQ3ZDRSw0QkFBMEJ4QixVQUFVdUIsZ0JBQVYsRUFBNEJULE1BQTVCLENBSGhDO0FBQUEsTUFJTVQsb0JBQWtCbUIsdUJBSnhCOztBQU1BLFNBQU9uQixZQUFQO0FBQ0QiLCJmaWxlIjoibWVkaWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRvbSA9IHJlcXVpcmUoJ29jY2FtLWRvbScpLCAgLy8vXG4gICAgICBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgUnVsZVNldHMgPSByZXF1aXJlKCcuL3J1bGVTZXRzJyksXG4gICAgICBEZWNsYXJhdGlvbnMgPSByZXF1aXJlKCcuL2RlY2xhcmF0aW9ucycpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IFF1ZXJ5LCBub2RlVXRpbGl0aWVzIH0gPSBkb20sXG4gICAgICB7IGFzQ29udGVudCB9ID0gbm9kZVV0aWxpdGllcyxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBtZWRpYVF1ZXJpZXNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKCcvbWVkaWEvbWVkaWFRdWVyaWVzJyk7XG5cbmNsYXNzIE1lZGlhIHtcbiAgY29uc3RydWN0b3IobWVkaWFRdWVyaWVzLCBkZWNsYXJhdGlvbnMsIHJ1bGVTZXRzKSB7XG4gICAgdGhpcy5tZWRpYVF1ZXJpZXMgPSBtZWRpYVF1ZXJpZXM7XG4gICAgdGhpcy5kZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnM7XG4gICAgdGhpcy5ydWxlU2V0cyA9IHJ1bGVTZXRzO1xuICB9XG5cbiAgYXNDU1MoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25zQ1NTID0gdGhpcy5kZWNsYXJhdGlvbnMuYXNDU1MoJyAgICAnKSxcbiAgICAgICAgICBydWxlU2V0c0NTUyA9IHRoaXMucnVsZVNldHMuYXNDU1MoY2xhc3NOYW1lLCAnICAnKSxcbiAgICAgICAgICBjc3MgPSBgQG1lZGlhICR7dGhpcy5tZWRpYVF1ZXJpZXN9IHtcbiAgLiR7Y2xhc3NOYW1lfSB7XG4ke2RlY2xhcmF0aW9uc0NTU31cbiAgfVxuICBcbiR7cnVsZVNldHNDU1N9XG59XG5cbmA7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IG1lZGlhUXVlcmllcyA9IG1lZGlhUXVlcmllc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gRGVjbGFyYXRpb25zLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgcnVsZVNldHMgPSBSdWxlU2V0cy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG1lZGlhID0gbmV3IE1lZGlhKG1lZGlhUXVlcmllcywgZGVjbGFyYXRpb25zLCBydWxlU2V0cyk7XG5cbiAgICByZXR1cm4gbWVkaWE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNZWRpYTtcblxuZnVuY3Rpb24gbWVkaWFRdWVyaWVzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IG1lZGlhUXVlcmllc05vZGVzID0gbWVkaWFRdWVyaWVzUXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgZmlyc3RTZWxlY3RvcnNOb2RlID0gZmlyc3QobWVkaWFRdWVyaWVzTm9kZXMpLFxuICAgICAgICBtZWRpYVF1ZXJpZXNOb2RlID0gZmlyc3RTZWxlY3RvcnNOb2RlLCAvLy9cbiAgICAgICAgbWVkaWFRdWVyaWVzTm9kZUNvbnRlbnQgPSBhc0NvbnRlbnQobWVkaWFRdWVyaWVzTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgbWVkaWFRdWVyaWVzID0gYCR7bWVkaWFRdWVyaWVzTm9kZUNvbnRlbnR9YDtcblxuICByZXR1cm4gbWVkaWFRdWVyaWVzO1xufVxuIl19