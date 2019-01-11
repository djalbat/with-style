'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dom = require('occam-dom'),
    ///
necessary = require('necessary');

var RuleSets = require('./ruleSets'),
    Declarations = require('./declarations'),
    nodeUtilities = require('../utilities/node');

var arrayUtilities = necessary.arrayUtilities,
    Query = dom.Query,
    first = arrayUtilities.first,
    asContent = nodeUtilities.asContent;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zdHlsZS9tZWRpYS5qcyJdLCJuYW1lcyI6WyJkb20iLCJyZXF1aXJlIiwibmVjZXNzYXJ5IiwiUnVsZVNldHMiLCJEZWNsYXJhdGlvbnMiLCJub2RlVXRpbGl0aWVzIiwiYXJyYXlVdGlsaXRpZXMiLCJRdWVyeSIsImZpcnN0IiwiYXNDb250ZW50IiwibWVkaWFRdWVyaWVzUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIk1lZGlhIiwibWVkaWFRdWVyaWVzIiwiZGVjbGFyYXRpb25zIiwicnVsZVNldHMiLCJjbGFzc05hbWUiLCJkZWNsYXJhdGlvbnNDU1MiLCJhc0NTUyIsInJ1bGVTZXRzQ1NTIiwiY3NzIiwibm9kZSIsInRva2VucyIsIm1lZGlhUXVlcmllc0Zyb21Ob2RlQW5kVG9rZW5zIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJtZWRpYSIsIm1vZHVsZSIsImV4cG9ydHMiLCJtZWRpYVF1ZXJpZXNOb2RlcyIsImV4ZWN1dGUiLCJmaXJzdFNlbGVjdG9yc05vZGUiLCJtZWRpYVF1ZXJpZXNOb2RlIiwibWVkaWFRdWVyaWVzTm9kZUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxNQUFNQyxRQUFRLFdBQVIsQ0FBWjtBQUFBLElBQW1DO0FBQzdCQyxZQUFZRCxRQUFRLFdBQVIsQ0FEbEI7O0FBR0EsSUFBTUUsV0FBV0YsUUFBUSxZQUFSLENBQWpCO0FBQUEsSUFDTUcsZUFBZUgsUUFBUSxnQkFBUixDQURyQjtBQUFBLElBRU1JLGdCQUFnQkosUUFBUSxtQkFBUixDQUZ0Qjs7QUFJTSxJQUFFSyxjQUFGLEdBQXFCSixTQUFyQixDQUFFSSxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZUCxHQURaLENBQ0VPLEtBREY7QUFBQSxJQUVFQyxLQUZGLEdBRVlGLGNBRlosQ0FFRUUsS0FGRjtBQUFBLElBR0VDLFNBSEYsR0FHZ0JKLGFBSGhCLENBR0VJLFNBSEY7OztBQUtOLElBQU1DLG9CQUFvQkgsTUFBTUksY0FBTixDQUFxQixxQkFBckIsQ0FBMUI7O0lBRU1DLEs7QUFDSixpQkFBWUMsWUFBWixFQUEwQkMsWUFBMUIsRUFBd0NDLFFBQXhDLEVBQWtEO0FBQUE7O0FBQ2hELFNBQUtGLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7OzBCQUVLQyxTLEVBQVc7QUFDZixVQUFNQyxrQkFBa0IsS0FBS0gsWUFBTCxDQUFrQkksS0FBbEIsQ0FBd0IsTUFBeEIsQ0FBeEI7QUFBQSxVQUNNQyxjQUFjLEtBQUtKLFFBQUwsQ0FBY0csS0FBZCxDQUFvQkYsU0FBcEIsRUFBK0IsSUFBL0IsQ0FEcEI7QUFBQSxVQUVNSSxrQkFBZ0IsS0FBS1AsWUFBckIsZUFDTEcsU0FESyxZQUVSQyxlQUZRLG1CQUtSRSxXQUxRLFlBRk47O0FBWUEsYUFBT0MsR0FBUDtBQUNEOzs7c0NBRXdCQyxJLEVBQU1DLE0sRUFBUTtBQUNyQyxVQUFNVCxlQUFlVSw4QkFBOEJGLElBQTlCLEVBQW9DQyxNQUFwQyxDQUFyQjtBQUFBLFVBQ01SLGVBQWVWLGFBQWFvQixpQkFBYixDQUErQkgsSUFBL0IsRUFBcUNDLE1BQXJDLENBRHJCO0FBQUEsVUFFTVAsV0FBV1osU0FBU3FCLGlCQUFULENBQTJCSCxJQUEzQixFQUFpQ0MsTUFBakMsQ0FGakI7QUFBQSxVQUdNRyxRQUFRLElBQUliLEtBQUosQ0FBVUMsWUFBVixFQUF3QkMsWUFBeEIsRUFBc0NDLFFBQXRDLENBSGQ7O0FBS0EsYUFBT1UsS0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmYsS0FBakI7O0FBRUEsU0FBU1csNkJBQVQsQ0FBdUNGLElBQXZDLEVBQTZDQyxNQUE3QyxFQUFxRDtBQUNuRCxNQUFNTSxvQkFBb0JsQixrQkFBa0JtQixPQUFsQixDQUEwQlIsSUFBMUIsQ0FBMUI7QUFBQSxNQUNNUyxxQkFBcUJ0QixNQUFNb0IsaUJBQU4sQ0FEM0I7QUFBQSxNQUVNRyxtQkFBbUJELGtCQUZ6QjtBQUFBLE1BRTZDO0FBQ3ZDRSw0QkFBMEJ2QixVQUFVc0IsZ0JBQVYsRUFBNEJULE1BQTVCLENBSGhDO0FBQUEsTUFJTVQsb0JBQWtCbUIsdUJBSnhCOztBQU1BLFNBQU9uQixZQUFQO0FBQ0QiLCJmaWxlIjoibWVkaWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRvbSA9IHJlcXVpcmUoJ29jY2FtLWRvbScpLCAgLy8vXG4gICAgICBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgUnVsZVNldHMgPSByZXF1aXJlKCcuL3J1bGVTZXRzJyksXG4gICAgICBEZWNsYXJhdGlvbnMgPSByZXF1aXJlKCcuL2RlY2xhcmF0aW9ucycpLFxuICAgICAgbm9kZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ub2RlJyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgUXVlcnkgfSA9IGRvbSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBhc0NvbnRlbnQgfSA9IG5vZGVVdGlsaXRpZXM7XG5cbmNvbnN0IG1lZGlhUXVlcmllc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oJy9tZWRpYS9tZWRpYVF1ZXJpZXMnKTtcblxuY2xhc3MgTWVkaWEge1xuICBjb25zdHJ1Y3RvcihtZWRpYVF1ZXJpZXMsIGRlY2xhcmF0aW9ucywgcnVsZVNldHMpIHtcbiAgICB0aGlzLm1lZGlhUXVlcmllcyA9IG1lZGlhUXVlcmllcztcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgICB0aGlzLnJ1bGVTZXRzID0gcnVsZVNldHM7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmRlY2xhcmF0aW9ucy5hc0NTUygnICAgICcpLFxuICAgICAgICAgIHJ1bGVTZXRzQ1NTID0gdGhpcy5ydWxlU2V0cy5hc0NTUyhjbGFzc05hbWUsICcgICcpLFxuICAgICAgICAgIGNzcyA9IGBAbWVkaWEgJHt0aGlzLm1lZGlhUXVlcmllc30ge1xuICAuJHtjbGFzc05hbWV9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfVxuICB9XG4gIFxuJHtydWxlU2V0c0NTU31cbn1cblxuYDtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgbWVkaWFRdWVyaWVzID0gbWVkaWFRdWVyaWVzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBEZWNsYXJhdGlvbnMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBydWxlU2V0cyA9IFJ1bGVTZXRzLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgbWVkaWEgPSBuZXcgTWVkaWEobWVkaWFRdWVyaWVzLCBkZWNsYXJhdGlvbnMsIHJ1bGVTZXRzKTtcblxuICAgIHJldHVybiBtZWRpYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1lZGlhO1xuXG5mdW5jdGlvbiBtZWRpYVF1ZXJpZXNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgY29uc3QgbWVkaWFRdWVyaWVzTm9kZXMgPSBtZWRpYVF1ZXJpZXNRdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICBmaXJzdFNlbGVjdG9yc05vZGUgPSBmaXJzdChtZWRpYVF1ZXJpZXNOb2RlcyksXG4gICAgICAgIG1lZGlhUXVlcmllc05vZGUgPSBmaXJzdFNlbGVjdG9yc05vZGUsIC8vL1xuICAgICAgICBtZWRpYVF1ZXJpZXNOb2RlQ29udGVudCA9IGFzQ29udGVudChtZWRpYVF1ZXJpZXNOb2RlLCB0b2tlbnMpLFxuICAgICAgICBtZWRpYVF1ZXJpZXMgPSBgJHttZWRpYVF1ZXJpZXNOb2RlQ29udGVudH1gO1xuXG4gIHJldHVybiBtZWRpYVF1ZXJpZXM7XG59XG4iXX0=