'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamDom = require("occam-dom");

var _necessary = require("necessary");

var _node = require("../utilities/node");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _unshift = _necessary.arrayUtilities.unshift;

var declarationQuery = _occamDom.Query.fromExpression('/*/declaration');

var Declarations = /*#__PURE__*/function () {
  function Declarations(array) {
    _classCallCheck(this, Declarations);

    this.array = array;
  }

  _createClass(Declarations, [{
    key: "getArray",
    value: function getArray() {
      return this.array;
    }
  }, {
    key: "unshift",
    value: function unshift(declarations) {
      var array = declarations.getArray();

      _unshift(this.array, array);
    }
  }, {
    key: "asCSS",
    value: function asCSS(indent) {
      var css = '';
      var length = this.array.length;

      if (length > 0) {
        var lastIndex = length - 1;
        this.array.forEach(function (declaration, index) {
          var declarationCSS = index === lastIndex ? "".concat(indent).concat(declaration) : "".concat(indent).concat(declaration, "\n");
          css += declarationCSS;
        });
      }

      return css;
    }
  }], [{
    key: "fromNodeAndTokens",
    value: function fromNodeAndTokens(node, tokens) {
      var declarationNodes = declarationQuery.execute(node),
          array = declarationNodes.map(function (declarationNode) {
        var declarationNodeContent = (0, _node.asContent)(declarationNode, tokens),
            declaration = declarationNodeContent; ///

        return declaration;
      }),
          declarations = new Declarations(array);
      return declarations;
    }
  }]);

  return Declarations;
}();

exports["default"] = Declarations;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2xhcmF0aW9ucy5qcyJdLCJuYW1lcyI6WyJ1bnNoaWZ0IiwiYXJyYXlVdGlsaXRpZXMiLCJkZWNsYXJhdGlvblF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIkRlY2xhcmF0aW9ucyIsImFycmF5IiwiZGVjbGFyYXRpb25zIiwiZ2V0QXJyYXkiLCJpbmRlbnQiLCJjc3MiLCJsZW5ndGgiLCJsYXN0SW5kZXgiLCJmb3JFYWNoIiwiZGVjbGFyYXRpb24iLCJpbmRleCIsImRlY2xhcmF0aW9uQ1NTIiwibm9kZSIsInRva2VucyIsImRlY2xhcmF0aW9uTm9kZXMiLCJleGVjdXRlIiwibWFwIiwiZGVjbGFyYXRpb25Ob2RlIiwiZGVjbGFyYXRpb25Ob2RlQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7SUFFUUEsUSxHQUFZQyx5QixDQUFaRCxPOztBQUVSLElBQU1FLGdCQUFnQixHQUFHQyxnQkFBTUMsY0FBTixDQUFxQixnQkFBckIsQ0FBekI7O0lBRXFCQyxZO0FBQ25CLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7Ozs0QkFFT0MsWSxFQUFjO0FBQ3BCLFVBQU1ELEtBQUssR0FBR0MsWUFBWSxDQUFDQyxRQUFiLEVBQWQ7O0FBRUFSLE1BQUFBLFFBQU8sQ0FBQyxLQUFLTSxLQUFOLEVBQWFBLEtBQWIsQ0FBUDtBQUNEOzs7MEJBRUtHLE0sRUFBUTtBQUNaLFVBQUlDLEdBQUcsR0FBRyxFQUFWO0FBRUEsVUFBTUMsTUFBTSxHQUFHLEtBQUtMLEtBQUwsQ0FBV0ssTUFBMUI7O0FBRUEsVUFBSUEsTUFBTSxHQUFHLENBQWIsRUFBZ0I7QUFDZCxZQUFNQyxTQUFTLEdBQUdELE1BQU0sR0FBRyxDQUEzQjtBQUVBLGFBQUtMLEtBQUwsQ0FBV08sT0FBWCxDQUFtQixVQUFDQyxXQUFELEVBQWNDLEtBQWQsRUFBd0I7QUFDekMsY0FBTUMsY0FBYyxHQUFJRCxLQUFLLEtBQUtILFNBQVgsYUFDSUgsTUFESixTQUNhSyxXQURiLGNBRU1MLE1BRk4sU0FFZUssV0FGZixPQUF2QjtBQUlBSixVQUFBQSxHQUFHLElBQUlNLGNBQVA7QUFDRCxTQU5EO0FBT0Q7O0FBRUQsYUFBT04sR0FBUDtBQUNEOzs7c0NBRXdCTyxJLEVBQU1DLE0sRUFBUTtBQUNyQyxVQUFNQyxnQkFBZ0IsR0FBR2pCLGdCQUFnQixDQUFDa0IsT0FBakIsQ0FBeUJILElBQXpCLENBQXpCO0FBQUEsVUFDTVgsS0FBSyxHQUFHYSxnQkFBZ0IsQ0FBQ0UsR0FBakIsQ0FBcUIsVUFBQ0MsZUFBRCxFQUFxQjtBQUNoRCxZQUFNQyxzQkFBc0IsR0FBRyxxQkFBVUQsZUFBVixFQUEyQkosTUFBM0IsQ0FBL0I7QUFBQSxZQUNNSixXQUFXLEdBQUdTLHNCQURwQixDQURnRCxDQUVKOztBQUU1QyxlQUFPVCxXQUFQO0FBQ0QsT0FMTyxDQURkO0FBQUEsVUFPTVAsWUFBWSxHQUFHLElBQUlGLFlBQUosQ0FBaUJDLEtBQWpCLENBUHJCO0FBU0EsYUFBT0MsWUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJ29jY2FtLWRvbSc7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gJ25lY2Vzc2FyeSc7XG5cbmltcG9ydCB7IGFzQ29udGVudCB9IGZyb20gJy4uL3V0aWxpdGllcy9ub2RlJztcblxuY29uc3QgeyB1bnNoaWZ0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgZGVjbGFyYXRpb25RdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKCcvKi9kZWNsYXJhdGlvbicpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWNsYXJhdGlvbnMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgdW5zaGlmdChkZWNsYXJhdGlvbnMpIHtcbiAgICBjb25zdCBhcnJheSA9IGRlY2xhcmF0aW9ucy5nZXRBcnJheSgpO1xuXG4gICAgdW5zaGlmdCh0aGlzLmFycmF5LCBhcnJheSk7XG4gIH1cblxuICBhc0NTUyhpbmRlbnQpIHtcbiAgICBsZXQgY3NzID0gJyc7XG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aDtcblxuICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBsYXN0SW5kZXggPSBsZW5ndGggLSAxO1xuXG4gICAgICB0aGlzLmFycmF5LmZvckVhY2goKGRlY2xhcmF0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBkZWNsYXJhdGlvbkNTUyA9IChpbmRleCA9PT0gbGFzdEluZGV4KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2luZGVudH0ke2RlY2xhcmF0aW9ufWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2luZGVudH0ke2RlY2xhcmF0aW9ufVxcbmA7XG5cbiAgICAgICAgY3NzICs9IGRlY2xhcmF0aW9uQ1NTO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbk5vZGVzID0gZGVjbGFyYXRpb25RdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICAgIGFycmF5ID0gZGVjbGFyYXRpb25Ob2Rlcy5tYXAoKGRlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVjbGFyYXRpb25Ob2RlQ29udGVudCA9IGFzQ29udGVudChkZWNsYXJhdGlvbk5vZGUsIHRva2VucyksXG4gICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbiA9IGRlY2xhcmF0aW9uTm9kZUNvbnRlbnQ7IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gbmV3IERlY2xhcmF0aW9ucyhhcnJheSk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb25zO1xuICB9XG59XG4iXX0=