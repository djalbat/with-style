'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
      mediaQueries = "".concat(mediaQueriesNodeContent);
  return mediaQueries;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhLmpzIl0sIm5hbWVzIjpbImRvbSIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJSdWxlU2V0cyIsIkRlY2xhcmF0aW9ucyIsIm5vZGVVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsIlF1ZXJ5IiwiZmlyc3QiLCJhc0NvbnRlbnQiLCJtZWRpYVF1ZXJpZXNRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiTWVkaWEiLCJtZWRpYVF1ZXJpZXMiLCJkZWNsYXJhdGlvbnMiLCJydWxlU2V0cyIsImNsYXNzTmFtZSIsImRlY2xhcmF0aW9uc0NTUyIsImFzQ1NTIiwicnVsZVNldHNDU1MiLCJjc3MiLCJub2RlIiwidG9rZW5zIiwibWVkaWFRdWVyaWVzRnJvbU5vZGVBbmRUb2tlbnMiLCJmcm9tTm9kZUFuZFRva2VucyIsIm1lZGlhIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1lZGlhUXVlcmllc05vZGVzIiwiZXhlY3V0ZSIsImZpcnN0U2VsZWN0b3JzTm9kZSIsIm1lZGlhUXVlcmllc05vZGUiLCJtZWRpYVF1ZXJpZXNOb2RlQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsR0FBRyxHQUFHQyxPQUFPLENBQUMsV0FBRCxDQUFuQjtBQUFBLElBQW1DO0FBQzdCQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxXQUFELENBRHpCOztBQUdBLElBQU1FLFFBQVEsR0FBR0YsT0FBTyxDQUFDLFlBQUQsQ0FBeEI7QUFBQSxJQUNNRyxZQUFZLEdBQUdILE9BQU8sQ0FBQyxnQkFBRCxDQUQ1QjtBQUFBLElBRU1JLGFBQWEsR0FBR0osT0FBTyxDQUFDLG1CQUFELENBRjdCOztBQUlNLElBQUVLLGNBQUYsR0FBcUJKLFNBQXJCLENBQUVJLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lQLEdBRFosQ0FDRU8sS0FERjtBQUFBLElBRUVDLEtBRkYsR0FFWUYsY0FGWixDQUVFRSxLQUZGO0FBQUEsSUFHRUMsU0FIRixHQUdnQkosYUFIaEIsQ0FHRUksU0FIRjtBQUtOLElBQU1DLGlCQUFpQixHQUFHSCxLQUFLLENBQUNJLGNBQU4sQ0FBcUIscUJBQXJCLENBQTFCOztJQUVNQyxLO0FBQ0osaUJBQVlDLFlBQVosRUFBMEJDLFlBQTFCLEVBQXdDQyxRQUF4QyxFQUFrRDtBQUFBOztBQUNoRCxTQUFLRixZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7OzswQkFFS0MsUyxFQUFXO0FBQ2YsVUFBTUMsZUFBZSxHQUFHLEtBQUtILFlBQUwsQ0FBa0JJLEtBQWxCLENBQXdCLE1BQXhCLENBQXhCO0FBQUEsVUFDTUMsV0FBVyxHQUFHLEtBQUtKLFFBQUwsQ0FBY0csS0FBZCxDQUFvQkYsU0FBcEIsRUFBK0IsSUFBL0IsQ0FEcEI7QUFBQSxVQUVNSSxHQUFHLG9CQUFhLEtBQUtQLFlBQWxCLG9CQUNSRyxTQURRLGlCQUVYQyxlQUZXLHdCQUtYRSxXQUxXLFlBRlQ7QUFZQSxhQUFPQyxHQUFQO0FBQ0Q7OztzQ0FFd0JDLEksRUFBTUMsTSxFQUFRO0FBQ3JDLFVBQU1ULFlBQVksR0FBR1UsNkJBQTZCLENBQUNGLElBQUQsRUFBT0MsTUFBUCxDQUFsRDtBQUFBLFVBQ01SLFlBQVksR0FBR1YsWUFBWSxDQUFDb0IsaUJBQWIsQ0FBK0JILElBQS9CLEVBQXFDQyxNQUFyQyxDQURyQjtBQUFBLFVBRU1QLFFBQVEsR0FBR1osUUFBUSxDQUFDcUIsaUJBQVQsQ0FBMkJILElBQTNCLEVBQWlDQyxNQUFqQyxDQUZqQjtBQUFBLFVBR01HLEtBQUssR0FBRyxJQUFJYixLQUFKLENBQVVDLFlBQVYsRUFBd0JDLFlBQXhCLEVBQXNDQyxRQUF0QyxDQUhkO0FBS0EsYUFBT1UsS0FBUDtBQUNEOzs7Ozs7QUFHSEMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCZixLQUFqQjs7QUFFQSxTQUFTVyw2QkFBVCxDQUF1Q0YsSUFBdkMsRUFBNkNDLE1BQTdDLEVBQXFEO0FBQ25ELE1BQU1NLGlCQUFpQixHQUFHbEIsaUJBQWlCLENBQUNtQixPQUFsQixDQUEwQlIsSUFBMUIsQ0FBMUI7QUFBQSxNQUNNUyxrQkFBa0IsR0FBR3RCLEtBQUssQ0FBQ29CLGlCQUFELENBRGhDO0FBQUEsTUFFTUcsZ0JBQWdCLEdBQUdELGtCQUZ6QjtBQUFBLE1BRTZDO0FBQ3ZDRSxFQUFBQSx1QkFBdUIsR0FBR3ZCLFNBQVMsQ0FBQ3NCLGdCQUFELEVBQW1CVCxNQUFuQixDQUh6QztBQUFBLE1BSU1ULFlBQVksYUFBTW1CLHVCQUFOLENBSmxCO0FBTUEsU0FBT25CLFlBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZG9tID0gcmVxdWlyZSgnb2NjYW0tZG9tJyksICAvLy9cbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBSdWxlU2V0cyA9IHJlcXVpcmUoJy4vcnVsZVNldHMnKSxcbiAgICAgIERlY2xhcmF0aW9ucyA9IHJlcXVpcmUoJy4vZGVjbGFyYXRpb25zJyksXG4gICAgICBub2RlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL25vZGUnKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBRdWVyeSB9ID0gZG9tLFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGFzQ29udGVudCB9ID0gbm9kZVV0aWxpdGllcztcblxuY29uc3QgbWVkaWFRdWVyaWVzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbignL21lZGlhL21lZGlhUXVlcmllcycpO1xuXG5jbGFzcyBNZWRpYSB7XG4gIGNvbnN0cnVjdG9yKG1lZGlhUXVlcmllcywgZGVjbGFyYXRpb25zLCBydWxlU2V0cykge1xuICAgIHRoaXMubWVkaWFRdWVyaWVzID0gbWVkaWFRdWVyaWVzO1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICAgIHRoaXMucnVsZVNldHMgPSBydWxlU2V0cztcbiAgfVxuXG4gIGFzQ1NTKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuZGVjbGFyYXRpb25zLmFzQ1NTKCcgICAgJyksXG4gICAgICAgICAgcnVsZVNldHNDU1MgPSB0aGlzLnJ1bGVTZXRzLmFzQ1NTKGNsYXNzTmFtZSwgJyAgJyksXG4gICAgICAgICAgY3NzID0gYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzfSB7XG4gIC4ke2NsYXNzTmFtZX0ge1xuJHtkZWNsYXJhdGlvbnNDU1N9XG4gIH1cbiAgXG4ke3J1bGVTZXRzQ1NTfVxufVxuXG5gO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBtZWRpYVF1ZXJpZXMgPSBtZWRpYVF1ZXJpZXNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVTZXRzID0gUnVsZVNldHMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBtZWRpYSA9IG5ldyBNZWRpYShtZWRpYVF1ZXJpZXMsIGRlY2xhcmF0aW9ucywgcnVsZVNldHMpO1xuXG4gICAgcmV0dXJuIG1lZGlhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWVkaWE7XG5cbmZ1bmN0aW9uIG1lZGlhUXVlcmllc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBtZWRpYVF1ZXJpZXNOb2RlcyA9IG1lZGlhUXVlcmllc1F1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgIGZpcnN0U2VsZWN0b3JzTm9kZSA9IGZpcnN0KG1lZGlhUXVlcmllc05vZGVzKSxcbiAgICAgICAgbWVkaWFRdWVyaWVzTm9kZSA9IGZpcnN0U2VsZWN0b3JzTm9kZSwgLy8vXG4gICAgICAgIG1lZGlhUXVlcmllc05vZGVDb250ZW50ID0gYXNDb250ZW50KG1lZGlhUXVlcmllc05vZGUsIHRva2VucyksXG4gICAgICAgIG1lZGlhUXVlcmllcyA9IGAke21lZGlhUXVlcmllc05vZGVDb250ZW50fWA7XG5cbiAgcmV0dXJuIG1lZGlhUXVlcmllcztcbn1cbiJdfQ==