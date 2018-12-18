'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var LexicalEntriesTextarea = function (_InputElement) {
  _inherits(LexicalEntriesTextarea, _InputElement);

  function LexicalEntriesTextarea(selector, changeHandler, keyUpHandler) {
    _classCallCheck(this, LexicalEntriesTextarea);

    var _this = _possibleConstructorReturn(this, (LexicalEntriesTextarea.__proto__ || Object.getPrototypeOf(LexicalEntriesTextarea)).call(this, selector, changeHandler));

    if (keyUpHandler) {
      _this.onKeyUp(keyUpHandler);
    }
    return _this;
  }

  _createClass(LexicalEntriesTextarea, [{
    key: 'onKeyUp',
    value: function onKeyUp(keyUpHandler) {
      this.on('keyUp', keyUpHandler);
    }
  }, {
    key: 'getLexicalEntries',
    value: function getLexicalEntries() {
      var value = this.getValue(),
          lexicalEntries = JSON.parse(value);

      return lexicalEntries;
    }
  }, {
    key: 'setLexicalEntries',
    value: function setLexicalEntries(lexicalEntries) {
      var value = JSON.stringify(lexicalEntries, null, '  ');

      this.setValue(value);
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var getLexicalEntries = this.getLexicalEntries.bind(this),
          setLexicalEntries = this.setLexicalEntries.bind(this);

      return {
        getLexicalEntries: getLexicalEntries,
        setLexicalEntries: setLexicalEntries
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(LexicalEntriesTextarea, properties);
    }
  }]);

  return LexicalEntriesTextarea;
}(InputElement);

Object.assign(LexicalEntriesTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'lexicalEntries',
    spellCheck: 'false'
  }
});

module.exports = LexicalEntriesTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL3RleHRhcmVhL2xleGljYWxFbnRyaWVzLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiSW5wdXRFbGVtZW50IiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsInNlbGVjdG9yIiwiY2hhbmdlSGFuZGxlciIsImtleVVwSGFuZGxlciIsIm9uS2V5VXAiLCJvbiIsInZhbHVlIiwiZ2V0VmFsdWUiLCJsZXhpY2FsRW50cmllcyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInNldFZhbHVlIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJiaW5kIiwic2V0TGV4aWNhbEVudHJpZXMiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7SUFFUUMsWSxHQUFpQkYsSSxDQUFqQkUsWTs7SUFFRkMsc0I7OztBQUNKLGtDQUFZQyxRQUFaLEVBQXNCQyxhQUF0QixFQUFxQ0MsWUFBckMsRUFBbUQ7QUFBQTs7QUFBQSxnSkFDM0NGLFFBRDJDLEVBQ2pDQyxhQURpQzs7QUFHakQsUUFBSUMsWUFBSixFQUFrQjtBQUNoQixZQUFLQyxPQUFMLENBQWFELFlBQWI7QUFDRDtBQUxnRDtBQU1sRDs7Ozs0QkFFT0EsWSxFQUFjO0FBQ3BCLFdBQUtFLEVBQUwsQ0FBUSxPQUFSLEVBQWlCRixZQUFqQjtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQU1HLFFBQVEsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsaUJBQWlCQyxLQUFLQyxLQUFMLENBQVdKLEtBQVgsQ0FEdkI7O0FBR0EsYUFBT0UsY0FBUDtBQUNEOzs7c0NBRWlCQSxjLEVBQWdCO0FBQ2hDLFVBQU1GLFFBQVFHLEtBQUtFLFNBQUwsQ0FBZUgsY0FBZixFQUErQixJQUEvQixFQUFxQyxJQUFyQyxDQUFkOztBQUVBLFdBQUtJLFFBQUwsQ0FBY04sS0FBZDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNTyxvQkFBb0IsS0FBS0EsaUJBQUwsQ0FBdUJDLElBQXZCLENBQTRCLElBQTVCLENBQTFCO0FBQUEsVUFDTUMsb0JBQW9CLEtBQUtBLGlCQUFMLENBQXVCRCxJQUF2QixDQUE0QixJQUE1QixDQUQxQjs7QUFHQSxhQUFRO0FBQ05ELDRDQURNO0FBRU5FO0FBRk0sT0FBUjtBQUlEOzs7bUNBRXFCQyxVLEVBQVk7QUFBRSxhQUFPakIsYUFBYWtCLGNBQWIsQ0FBNEJqQixzQkFBNUIsRUFBb0RnQixVQUFwRCxDQUFQO0FBQXlFOzs7O0VBcEMxRWpCLFk7O0FBdUNyQ21CLE9BQU9DLE1BQVAsQ0FBY25CLHNCQUFkLEVBQXNDO0FBQ3BDb0IsV0FBUyxVQUQyQjtBQUVwQ0MscUJBQW1CO0FBQ2pCQyxlQUFXLGdCQURNO0FBRWpCQyxnQkFBWTtBQUZLO0FBRmlCLENBQXRDOztBQVFBQyxPQUFPQyxPQUFQLEdBQWlCekIsc0JBQWpCIiwiZmlsZSI6ImxleGljYWxFbnRyaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IElucHV0RWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyLCBrZXlVcEhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcik7XG5cbiAgICBpZiAoa2V5VXBIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uS2V5VXAoa2V5VXBIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBvbktleVVwKGtleVVwSGFuZGxlcikge1xuICAgIHRoaXMub24oJ2tleVVwJywga2V5VXBIYW5kbGVyKTtcbiAgfVxuXG4gIGdldExleGljYWxFbnRyaWVzKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG5cbiAgICByZXR1cm4gbGV4aWNhbEVudHJpZXM7XG4gIH1cblxuICBzZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcykge1xuICAgIGNvbnN0IHZhbHVlID0gSlNPTi5zdHJpbmdpZnkobGV4aWNhbEVudHJpZXMsIG51bGwsICcgICcpO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldExleGljYWxFbnRyaWVzID0gdGhpcy5nZXRMZXhpY2FsRW50cmllcy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldExleGljYWxFbnRyaWVzID0gdGhpcy5zZXRMZXhpY2FsRW50cmllcy5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRMZXhpY2FsRW50cmllcyxcbiAgICAgIHNldExleGljYWxFbnRyaWVzXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKExleGljYWxFbnRyaWVzVGV4dGFyZWEsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oTGV4aWNhbEVudHJpZXNUZXh0YXJlYSwge1xuICB0YWdOYW1lOiAndGV4dGFyZWEnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ2xleGljYWxFbnRyaWVzJyxcbiAgICBzcGVsbENoZWNrOiAnZmFsc2UnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExleGljYWxFbnRyaWVzVGV4dGFyZWE7XG4iXX0=