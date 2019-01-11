'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dom = require('occam-dom'),
    ///
necessary = require('necessary');

var Declarations = require('./declarations'),
    nodeUtilities = require('../utilities/node');

var arrayUtilities = necessary.arrayUtilities,
    Query = dom.Query,
    first = arrayUtilities.first,
    asContent = nodeUtilities.asContent;


var selectorsQuery = Query.fromExpression('//selectors');

var RuleSet = function () {
      function RuleSet(selectors, declarations) {
            _classCallCheck(this, RuleSet);

            this.selectors = selectors;
            this.declarations = declarations;
      }

      _createClass(RuleSet, [{
            key: 'asCSS',
            value: function asCSS(className, indent) {
                  var declarationsCSS = this.declarations.asCSS('  ' + indent),
                      css = indent + '.' + className + this.selectors + ' {\n' + declarationsCSS + '\n' + indent + '}\n\n';

                  return css;
            }
      }], [{
            key: 'fromNodeAndTokens',
            value: function fromNodeAndTokens(node, tokens) {
                  var selectors = selectorsFromNodeAndTokens(node, tokens),
                      declarations = Declarations.fromNodeAndTokens(node, tokens),
                      media = new RuleSet(selectors, declarations);

                  return media;
            }
      }]);

      return RuleSet;
}();

module.exports = RuleSet;

function selectorsFromNodeAndTokens(node, tokens) {
      var selectorsNodes = selectorsQuery.execute(node),
          firstSelectorsNode = first(selectorsNodes),
          selectorsNode = firstSelectorsNode,
          ///
      selectorsNodeContent = asContent(selectorsNode, tokens),
          selectors = '' + selectorsNodeContent;

      return selectors;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zdHlsZS9ydWxlU2V0LmpzIl0sIm5hbWVzIjpbImRvbSIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJEZWNsYXJhdGlvbnMiLCJub2RlVXRpbGl0aWVzIiwiYXJyYXlVdGlsaXRpZXMiLCJRdWVyeSIsImZpcnN0IiwiYXNDb250ZW50Iiwic2VsZWN0b3JzUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIlJ1bGVTZXQiLCJzZWxlY3RvcnMiLCJkZWNsYXJhdGlvbnMiLCJjbGFzc05hbWUiLCJpbmRlbnQiLCJkZWNsYXJhdGlvbnNDU1MiLCJhc0NTUyIsImNzcyIsIm5vZGUiLCJ0b2tlbnMiLCJzZWxlY3RvcnNGcm9tTm9kZUFuZFRva2VucyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibWVkaWEiLCJtb2R1bGUiLCJleHBvcnRzIiwic2VsZWN0b3JzTm9kZXMiLCJleGVjdXRlIiwiZmlyc3RTZWxlY3RvcnNOb2RlIiwic2VsZWN0b3JzTm9kZSIsInNlbGVjdG9yc05vZGVDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsTUFBTUMsUUFBUSxXQUFSLENBQVo7QUFBQSxJQUFtQztBQUM3QkMsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdBLElBQU1FLGVBQWVGLFFBQVEsZ0JBQVIsQ0FBckI7QUFBQSxJQUNNRyxnQkFBZ0JILFFBQVEsbUJBQVIsQ0FEdEI7O0FBR00sSUFBRUksY0FBRixHQUFxQkgsU0FBckIsQ0FBRUcsY0FBRjtBQUFBLElBQ0VDLEtBREYsR0FDWU4sR0FEWixDQUNFTSxLQURGO0FBQUEsSUFFRUMsS0FGRixHQUVZRixjQUZaLENBRUVFLEtBRkY7QUFBQSxJQUdFQyxTQUhGLEdBR2dCSixhQUhoQixDQUdFSSxTQUhGOzs7QUFLTixJQUFNQyxpQkFBaUJILE1BQU1JLGNBQU4sQ0FBcUIsYUFBckIsQ0FBdkI7O0lBRU1DLE87QUFDSix1QkFBWUMsU0FBWixFQUF1QkMsWUFBdkIsRUFBcUM7QUFBQTs7QUFDbkMsaUJBQUtELFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsaUJBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7a0NBRUtDLFMsRUFBV0MsTSxFQUFRO0FBQ3ZCLHNCQUFNQyxrQkFBa0IsS0FBS0gsWUFBTCxDQUFrQkksS0FBbEIsUUFBNkJGLE1BQTdCLENBQXhCO0FBQUEsc0JBQ01HLE1BQVNILE1BQVQsU0FBbUJELFNBQW5CLEdBQStCLEtBQUtGLFNBQXBDLFlBQ1JJLGVBRFEsVUFFUkQsTUFGUSxVQUROOztBQU9BLHlCQUFPRyxHQUFQO0FBQ0Q7Ozs4Q0FFd0JDLEksRUFBTUMsTSxFQUFRO0FBQ3JDLHNCQUFNUixZQUFZUywyQkFBMkJGLElBQTNCLEVBQWlDQyxNQUFqQyxDQUFsQjtBQUFBLHNCQUNNUCxlQUFlVixhQUFhbUIsaUJBQWIsQ0FBK0JILElBQS9CLEVBQXFDQyxNQUFyQyxDQURyQjtBQUFBLHNCQUVNRyxRQUFRLElBQUlaLE9BQUosQ0FBWUMsU0FBWixFQUF1QkMsWUFBdkIsQ0FGZDs7QUFJQSx5QkFBT1UsS0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmQsT0FBakI7O0FBRUEsU0FBU1UsMEJBQVQsQ0FBb0NGLElBQXBDLEVBQTBDQyxNQUExQyxFQUFrRDtBQUNoRCxVQUFNTSxpQkFBaUJqQixlQUFla0IsT0FBZixDQUF1QlIsSUFBdkIsQ0FBdkI7QUFBQSxVQUNNUyxxQkFBcUJyQixNQUFNbUIsY0FBTixDQUQzQjtBQUFBLFVBRU1HLGdCQUFnQkQsa0JBRnRCO0FBQUEsVUFFMEM7QUFDcENFLDZCQUF1QnRCLFVBQVVxQixhQUFWLEVBQXlCVCxNQUF6QixDQUg3QjtBQUFBLFVBSU1SLGlCQUFla0Isb0JBSnJCOztBQU1BLGFBQU9sQixTQUFQO0FBQ0QiLCJmaWxlIjoicnVsZVNldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZG9tID0gcmVxdWlyZSgnb2NjYW0tZG9tJyksICAvLy9cbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBEZWNsYXJhdGlvbnMgPSByZXF1aXJlKCcuL2RlY2xhcmF0aW9ucycpLFxuICAgICAgbm9kZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ub2RlJyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgUXVlcnkgfSA9IGRvbSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBhc0NvbnRlbnQgfSA9IG5vZGVVdGlsaXRpZXM7XG5cbmNvbnN0IHNlbGVjdG9yc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oJy8vc2VsZWN0b3JzJyk7XG5cbmNsYXNzIFJ1bGVTZXQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvcnMsIGRlY2xhcmF0aW9ucykge1xuICAgIHRoaXMuc2VsZWN0b3JzID0gc2VsZWN0b3JzO1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmRlY2xhcmF0aW9ucy5hc0NTUyhgICAke2luZGVudH1gKSxcbiAgICAgICAgICBjc3MgPSBgJHtpbmRlbnR9LiR7Y2xhc3NOYW1lfSR7dGhpcy5zZWxlY3RvcnN9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfVxuJHtpbmRlbnR9fVxuXG5gO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSBzZWxlY3RvcnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG1lZGlhID0gbmV3IFJ1bGVTZXQoc2VsZWN0b3JzLCBkZWNsYXJhdGlvbnMpO1xuXG4gICAgcmV0dXJuIG1lZGlhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZVNldDtcblxuZnVuY3Rpb24gc2VsZWN0b3JzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IHNlbGVjdG9yc05vZGVzID0gc2VsZWN0b3JzUXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgZmlyc3RTZWxlY3RvcnNOb2RlID0gZmlyc3Qoc2VsZWN0b3JzTm9kZXMpLFxuICAgICAgICBzZWxlY3RvcnNOb2RlID0gZmlyc3RTZWxlY3RvcnNOb2RlLCAvLy9cbiAgICAgICAgc2VsZWN0b3JzTm9kZUNvbnRlbnQgPSBhc0NvbnRlbnQoc2VsZWN0b3JzTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgc2VsZWN0b3JzID0gYCR7c2VsZWN0b3JzTm9kZUNvbnRlbnR9YDtcblxuICByZXR1cm4gc2VsZWN0b3JzO1xufVxuIl19