'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var RuleNameInput = function (_InputElement) {
  _inherits(RuleNameInput, _InputElement);

  function RuleNameInput() {
    _classCallCheck(this, RuleNameInput);

    return _possibleConstructorReturn(this, (RuleNameInput.__proto__ || Object.getPrototypeOf(RuleNameInput)).apply(this, arguments));
  }

  _createClass(RuleNameInput, [{
    key: 'getRuleName',
    value: function getRuleName() {
      var value = this.getValue(),
          ruleName = value; ///

      return ruleName;
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var getRuleName = this.getRuleName.bind(this);

      return {
        getRuleName: getRuleName
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(RuleNameInput, properties);
    }
  }]);

  return RuleNameInput;
}(InputElement);

Object.assign(RuleNameInput, {
  tagName: 'input',
  defaultProperties: {
    type: 'text',
    className: 'rule-name',
    spellCheck: 'false'
  }
});

module.exports = RuleNameInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2lucHV0L3J1bGVOYW1lLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiSW5wdXRFbGVtZW50IiwiUnVsZU5hbWVJbnB1dCIsInZhbHVlIiwiZ2V0VmFsdWUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiYmluZCIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsInR5cGUiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7SUFFUUMsWSxHQUFpQkYsSSxDQUFqQkUsWTs7SUFFRkMsYTs7Ozs7Ozs7Ozs7a0NBQ1U7QUFDWixVQUFNQyxRQUFRLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLFdBQVdGLEtBRGpCLENBRFksQ0FFYTs7QUFFekIsYUFBT0UsUUFBUDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNQyxjQUFjLEtBQUtBLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQXBCOztBQUVBLGFBQVE7QUFDTkQ7QUFETSxPQUFSO0FBR0Q7OzttQ0FFcUJFLFUsRUFBWTtBQUFFLGFBQU9QLGFBQWFRLGNBQWIsQ0FBNEJQLGFBQTVCLEVBQTJDTSxVQUEzQyxDQUFQO0FBQWdFOzs7O0VBaEIxRVAsWTs7QUFtQjVCUyxPQUFPQyxNQUFQLENBQWNULGFBQWQsRUFBNkI7QUFDM0JVLFdBQVMsT0FEa0I7QUFFM0JDLHFCQUFtQjtBQUNqQkMsVUFBTSxNQURXO0FBRWpCQyxlQUFXLFdBRk07QUFHakJDLGdCQUFZO0FBSEs7QUFGUSxDQUE3Qjs7QUFTQUMsT0FBT0MsT0FBUCxHQUFpQmhCLGFBQWpCIiwiZmlsZSI6InJ1bGVOYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IElucHV0RWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgUnVsZU5hbWVJbnB1dCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdmFsdWU7ICAvLy9cblxuICAgIHJldHVybiBydWxlTmFtZTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0UnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldFJ1bGVOYW1lXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFJ1bGVOYW1lSW5wdXQsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oUnVsZU5hbWVJbnB1dCwge1xuICB0YWdOYW1lOiAnaW5wdXQnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBjbGFzc05hbWU6ICdydWxlLW5hbWUnLFxuICAgIHNwZWxsQ2hlY2s6ICdmYWxzZSdcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZU5hbWVJbnB1dDtcbiJdfQ==