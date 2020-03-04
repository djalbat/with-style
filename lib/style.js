'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Medias = require('./style/medias'),
    RuleSets = require('./style/ruleSets'),
    Declarations = require('./style/declarations');

var Style = /*#__PURE__*/function () {
  function Style(declarations, ruleSets, medias) {
    _classCallCheck(this, Style);

    this.declarations = declarations;
    this.ruleSets = ruleSets;
    this.medias = medias;
  }

  _createClass(Style, [{
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
    key: "getMedias",
    value: function getMedias() {
      return this.medias;
    }
  }, {
    key: "extends",
    value: function _extends(superStyle) {
      var declarations = superStyle.getDeclarations(),
          ruleSets = superStyle.getRuleSets(),
          medias = superStyle.getMedias();
      this.unshift(declarations, ruleSets, medias);
    }
  }, {
    key: "unshift",
    value: function unshift(declarations, ruleSets, medias) {
      this.declarations.unshift(declarations);
      this.ruleSets.unshift(ruleSets);
      this.medias.unshift(medias);
    }
  }, {
    key: "asCSS",
    value: function asCSS(className) {
      var declarationsCSS = this.declarations.asCSS('  '),
          ruleSetsCSS = this.ruleSets.asCSS(className, ''),
          mediasCSS = this.medias.asCSS(className),
          html = ".".concat(className, " {\n").concat(declarationsCSS, "\n}\n\n").concat(ruleSetsCSS).concat(mediasCSS);
      return html;
    }
  }], [{
    key: "fromNodeAndTokens",
    value: function fromNodeAndTokens(node, tokens) {
      var declarations = Declarations.fromNodeAndTokens(node, tokens),
          ruleSets = RuleSets.fromNodeAndTokens(node, tokens),
          medias = Medias.fromNodeAndTokens(node, tokens),
          style = new Style(declarations, ruleSets, medias);
      return style;
    }
  }]);

  return Style;
}();

module.exports = Style;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmpzIl0sIm5hbWVzIjpbIk1lZGlhcyIsInJlcXVpcmUiLCJSdWxlU2V0cyIsIkRlY2xhcmF0aW9ucyIsIlN0eWxlIiwiZGVjbGFyYXRpb25zIiwicnVsZVNldHMiLCJtZWRpYXMiLCJzdXBlclN0eWxlIiwiZ2V0RGVjbGFyYXRpb25zIiwiZ2V0UnVsZVNldHMiLCJnZXRNZWRpYXMiLCJ1bnNoaWZ0IiwiY2xhc3NOYW1lIiwiZGVjbGFyYXRpb25zQ1NTIiwiYXNDU1MiLCJydWxlU2V0c0NTUyIsIm1lZGlhc0NTUyIsImh0bWwiLCJub2RlIiwidG9rZW5zIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJzdHlsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBR0MsT0FBTyxDQUFDLGdCQUFELENBQXRCO0FBQUEsSUFDTUMsUUFBUSxHQUFHRCxPQUFPLENBQUMsa0JBQUQsQ0FEeEI7QUFBQSxJQUVNRSxZQUFZLEdBQUdGLE9BQU8sQ0FBQyxzQkFBRCxDQUY1Qjs7SUFJTUcsSztBQUNKLGlCQUFZQyxZQUFaLEVBQTBCQyxRQUExQixFQUFvQ0MsTUFBcEMsRUFBNEM7QUFBQTs7QUFDMUMsU0FBS0YsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7O3NDQUVpQjtBQUNoQixhQUFPLEtBQUtGLFlBQVo7QUFDRDs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQyxRQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0MsTUFBWjtBQUNEOzs7NkJBRU9DLFUsRUFBWTtBQUNsQixVQUFNSCxZQUFZLEdBQUdHLFVBQVUsQ0FBQ0MsZUFBWCxFQUFyQjtBQUFBLFVBQ01ILFFBQVEsR0FBR0UsVUFBVSxDQUFDRSxXQUFYLEVBRGpCO0FBQUEsVUFFTUgsTUFBTSxHQUFHQyxVQUFVLENBQUNHLFNBQVgsRUFGZjtBQUlBLFdBQUtDLE9BQUwsQ0FBYVAsWUFBYixFQUEyQkMsUUFBM0IsRUFBcUNDLE1BQXJDO0FBQ0Q7Ozs0QkFFT0YsWSxFQUFjQyxRLEVBQVVDLE0sRUFBUTtBQUN0QyxXQUFLRixZQUFMLENBQWtCTyxPQUFsQixDQUEwQlAsWUFBMUI7QUFDQSxXQUFLQyxRQUFMLENBQWNNLE9BQWQsQ0FBc0JOLFFBQXRCO0FBQ0EsV0FBS0MsTUFBTCxDQUFZSyxPQUFaLENBQW9CTCxNQUFwQjtBQUNEOzs7MEJBRUtNLFMsRUFBVztBQUNmLFVBQU1DLGVBQWUsR0FBRyxLQUFLVCxZQUFMLENBQWtCVSxLQUFsQixDQUF3QixJQUF4QixDQUF4QjtBQUFBLFVBQ01DLFdBQVcsR0FBRyxLQUFLVixRQUFMLENBQWNTLEtBQWQsQ0FBb0JGLFNBQXBCLEVBQStCLEVBQS9CLENBRHBCO0FBQUEsVUFFTUksU0FBUyxHQUFHLEtBQUtWLE1BQUwsQ0FBWVEsS0FBWixDQUFrQkYsU0FBbEIsQ0FGbEI7QUFBQSxVQUdNSyxJQUFJLGNBQU9MLFNBQVAsaUJBQ1pDLGVBRFksb0JBSVpFLFdBSlksU0FJRUMsU0FKRixDQUhWO0FBU0EsYUFBT0MsSUFBUDtBQUNEOzs7c0NBRXdCQyxJLEVBQU1DLE0sRUFBUTtBQUNyQyxVQUFNZixZQUFZLEdBQUdGLFlBQVksQ0FBQ2tCLGlCQUFiLENBQStCRixJQUEvQixFQUFxQ0MsTUFBckMsQ0FBckI7QUFBQSxVQUNNZCxRQUFRLEdBQUdKLFFBQVEsQ0FBQ21CLGlCQUFULENBQTJCRixJQUEzQixFQUFpQ0MsTUFBakMsQ0FEakI7QUFBQSxVQUVNYixNQUFNLEdBQUdQLE1BQU0sQ0FBQ3FCLGlCQUFQLENBQXlCRixJQUF6QixFQUErQkMsTUFBL0IsQ0FGZjtBQUFBLFVBR01FLEtBQUssR0FBRyxJQUFJbEIsS0FBSixDQUFVQyxZQUFWLEVBQXdCQyxRQUF4QixFQUFrQ0MsTUFBbEMsQ0FIZDtBQUtBLGFBQU9lLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnBCLEtBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBNZWRpYXMgPSByZXF1aXJlKCcuL3N0eWxlL21lZGlhcycpLFxuICAgICAgUnVsZVNldHMgPSByZXF1aXJlKCcuL3N0eWxlL3J1bGVTZXRzJyksXG4gICAgICBEZWNsYXJhdGlvbnMgPSByZXF1aXJlKCcuL3N0eWxlL2RlY2xhcmF0aW9ucycpO1xuXG5jbGFzcyBTdHlsZSB7XG4gIGNvbnN0cnVjdG9yKGRlY2xhcmF0aW9ucywgcnVsZVNldHMsIG1lZGlhcykge1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICAgIHRoaXMucnVsZVNldHMgPSBydWxlU2V0cztcbiAgICB0aGlzLm1lZGlhcyA9IG1lZGlhcztcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbnM7XG4gIH1cblxuICBnZXRSdWxlU2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlU2V0cztcbiAgfVxuXG4gIGdldE1lZGlhcygpIHtcbiAgICByZXR1cm4gdGhpcy5tZWRpYXM7XG4gIH1cblxuICBleHRlbmRzKHN1cGVyU3R5bGUpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbnMgPSBzdXBlclN0eWxlLmdldERlY2xhcmF0aW9ucygpLFxuICAgICAgICAgIHJ1bGVTZXRzID0gc3VwZXJTdHlsZS5nZXRSdWxlU2V0cygpLFxuICAgICAgICAgIG1lZGlhcyA9IHN1cGVyU3R5bGUuZ2V0TWVkaWFzKCk7XG5cbiAgICB0aGlzLnVuc2hpZnQoZGVjbGFyYXRpb25zLCBydWxlU2V0cywgbWVkaWFzKTtcbiAgfVxuXG4gIHVuc2hpZnQoZGVjbGFyYXRpb25zLCBydWxlU2V0cywgbWVkaWFzKSB7XG4gICAgdGhpcy5kZWNsYXJhdGlvbnMudW5zaGlmdChkZWNsYXJhdGlvbnMpO1xuICAgIHRoaXMucnVsZVNldHMudW5zaGlmdChydWxlU2V0cyk7XG4gICAgdGhpcy5tZWRpYXMudW5zaGlmdChtZWRpYXMpO1xuICB9XG5cbiAgYXNDU1MoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25zQ1NTID0gdGhpcy5kZWNsYXJhdGlvbnMuYXNDU1MoJyAgJyksXG4gICAgICAgICAgcnVsZVNldHNDU1MgPSB0aGlzLnJ1bGVTZXRzLmFzQ1NTKGNsYXNzTmFtZSwgJycpLFxuICAgICAgICAgIG1lZGlhc0NTUyA9IHRoaXMubWVkaWFzLmFzQ1NTKGNsYXNzTmFtZSksXG4gICAgICAgICAgaHRtbCA9IGAuJHtjbGFzc05hbWV9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfVxufVxuXG4ke3J1bGVTZXRzQ1NTfSR7bWVkaWFzQ1NTfWA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbnMgPSBEZWNsYXJhdGlvbnMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBydWxlU2V0cyA9IFJ1bGVTZXRzLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgbWVkaWFzID0gTWVkaWFzLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgc3R5bGUgPSBuZXcgU3R5bGUoZGVjbGFyYXRpb25zLCBydWxlU2V0cywgbWVkaWFzKTtcblxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0eWxlO1xuIl19