'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dom = require('occam-dom'),
    ///
necessary = require('necessary');

var Declarations = require('./declarations');

var arrayUtilities = necessary.arrayUtilities,
    Query = dom.Query,
    nodeUtilities = dom.nodeUtilities,
    asContent = nodeUtilities.asContent,
    first = arrayUtilities.first;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zdHlsZS9ydWxlU2V0LmpzIl0sIm5hbWVzIjpbImRvbSIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJEZWNsYXJhdGlvbnMiLCJhcnJheVV0aWxpdGllcyIsIlF1ZXJ5Iiwibm9kZVV0aWxpdGllcyIsImFzQ29udGVudCIsImZpcnN0Iiwic2VsZWN0b3JzUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIlJ1bGVTZXQiLCJzZWxlY3RvcnMiLCJkZWNsYXJhdGlvbnMiLCJjbGFzc05hbWUiLCJpbmRlbnQiLCJkZWNsYXJhdGlvbnNDU1MiLCJhc0NTUyIsImNzcyIsIm5vZGUiLCJ0b2tlbnMiLCJzZWxlY3RvcnNGcm9tTm9kZUFuZFRva2VucyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibWVkaWEiLCJtb2R1bGUiLCJleHBvcnRzIiwic2VsZWN0b3JzTm9kZXMiLCJleGVjdXRlIiwiZmlyc3RTZWxlY3RvcnNOb2RlIiwic2VsZWN0b3JzTm9kZSIsInNlbGVjdG9yc05vZGVDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsTUFBTUMsUUFBUSxXQUFSLENBQVo7QUFBQSxJQUFtQztBQUM3QkMsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdBLElBQU1FLGVBQWVGLFFBQVEsZ0JBQVIsQ0FBckI7O0FBRU0sSUFBRUcsY0FBRixHQUFxQkYsU0FBckIsQ0FBRUUsY0FBRjtBQUFBLElBQ0VDLEtBREYsR0FDMkJMLEdBRDNCLENBQ0VLLEtBREY7QUFBQSxJQUNTQyxhQURULEdBQzJCTixHQUQzQixDQUNTTSxhQURUO0FBQUEsSUFFRUMsU0FGRixHQUVnQkQsYUFGaEIsQ0FFRUMsU0FGRjtBQUFBLElBR0VDLEtBSEYsR0FHWUosY0FIWixDQUdFSSxLQUhGOzs7QUFLTixJQUFNQyxpQkFBaUJKLE1BQU1LLGNBQU4sQ0FBcUIsYUFBckIsQ0FBdkI7O0lBRU1DLE87QUFDSixtQkFBWUMsU0FBWixFQUF1QkMsWUFBdkIsRUFBcUM7QUFBQTs7QUFDbkMsU0FBS0QsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOzs7OzBCQUVLQyxTLEVBQVdDLE0sRUFBUTtBQUN2QixVQUFNQyxrQkFBa0IsS0FBS0gsWUFBTCxDQUFrQkksS0FBbEIsUUFBNkJGLE1BQTdCLENBQXhCO0FBQUEsVUFDTUcsTUFBU0gsTUFBVCxTQUFtQkQsU0FBbkIsR0FBK0IsS0FBS0YsU0FBcEMsWUFDUkksZUFEUSxVQUVSRCxNQUZRLFVBRE47O0FBT0EsYUFBT0csR0FBUDtBQUNEOzs7c0NBRXdCQyxJLEVBQU1DLE0sRUFBUTtBQUNyQyxVQUFNUixZQUFZUywyQkFBMkJGLElBQTNCLEVBQWlDQyxNQUFqQyxDQUFsQjtBQUFBLFVBQ01QLGVBQWVWLGFBQWFtQixpQkFBYixDQUErQkgsSUFBL0IsRUFBcUNDLE1BQXJDLENBRHJCO0FBQUEsVUFFTUcsUUFBUSxJQUFJWixPQUFKLENBQVlDLFNBQVosRUFBdUJDLFlBQXZCLENBRmQ7O0FBSUEsYUFBT1UsS0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmQsT0FBakI7O0FBRUEsU0FBU1UsMEJBQVQsQ0FBb0NGLElBQXBDLEVBQTBDQyxNQUExQyxFQUFrRDtBQUNoRCxNQUFNTSxpQkFBaUJqQixlQUFla0IsT0FBZixDQUF1QlIsSUFBdkIsQ0FBdkI7QUFBQSxNQUNNUyxxQkFBcUJwQixNQUFNa0IsY0FBTixDQUQzQjtBQUFBLE1BRU1HLGdCQUFnQkQsa0JBRnRCO0FBQUEsTUFFMEM7QUFDcENFLHlCQUF1QnZCLFVBQVVzQixhQUFWLEVBQXlCVCxNQUF6QixDQUg3QjtBQUFBLE1BSU1SLGlCQUFla0Isb0JBSnJCOztBQU1BLFNBQU9sQixTQUFQO0FBQ0QiLCJmaWxlIjoicnVsZVNldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZG9tID0gcmVxdWlyZSgnb2NjYW0tZG9tJyksICAvLy9cbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBEZWNsYXJhdGlvbnMgPSByZXF1aXJlKCcuL2RlY2xhcmF0aW9ucycpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IFF1ZXJ5LCBub2RlVXRpbGl0aWVzIH0gPSBkb20sXG4gICAgICB7IGFzQ29udGVudCB9ID0gbm9kZVV0aWxpdGllcyxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBzZWxlY3RvcnNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKCcvL3NlbGVjdG9ycycpO1xuXG5jbGFzcyBSdWxlU2V0IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JzLCBkZWNsYXJhdGlvbnMpIHtcbiAgICB0aGlzLnNlbGVjdG9ycyA9IHNlbGVjdG9ycztcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGFzQ1NTKGNsYXNzTmFtZSwgaW5kZW50KSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25zQ1NTID0gdGhpcy5kZWNsYXJhdGlvbnMuYXNDU1MoYCAgJHtpbmRlbnR9YCksXG4gICAgICAgICAgY3NzID0gYCR7aW5kZW50fS4ke2NsYXNzTmFtZX0ke3RoaXMuc2VsZWN0b3JzfSB7XG4ke2RlY2xhcmF0aW9uc0NTU31cbiR7aW5kZW50fX1cblxuYDtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JzID0gc2VsZWN0b3JzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBEZWNsYXJhdGlvbnMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBtZWRpYSA9IG5ldyBSdWxlU2V0KHNlbGVjdG9ycywgZGVjbGFyYXRpb25zKTtcblxuICAgIHJldHVybiBtZWRpYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVTZXQ7XG5cbmZ1bmN0aW9uIHNlbGVjdG9yc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBzZWxlY3RvcnNOb2RlcyA9IHNlbGVjdG9yc1F1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgIGZpcnN0U2VsZWN0b3JzTm9kZSA9IGZpcnN0KHNlbGVjdG9yc05vZGVzKSxcbiAgICAgICAgc2VsZWN0b3JzTm9kZSA9IGZpcnN0U2VsZWN0b3JzTm9kZSwgLy8vXG4gICAgICAgIHNlbGVjdG9yc05vZGVDb250ZW50ID0gYXNDb250ZW50KHNlbGVjdG9yc05vZGUsIHRva2VucyksXG4gICAgICAgIHNlbGVjdG9ycyA9IGAke3NlbGVjdG9yc05vZGVDb250ZW50fWA7XG5cbiAgcmV0dXJuIHNlbGVjdG9ycztcbn1cbiJdfQ==