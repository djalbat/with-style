"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generateClassName = generateClassName;
exports.retrieveClassName = retrieveClassName;
exports.default = void 0;
var _v4 = _interopRequireDefault(require("uuid/v4"));
var _randomSeed = _interopRequireDefault(require("random-seed"));
var _constants = require("../constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var uuid = _v4.default(), random = _randomSeed.default.create(uuid), length = _constants.CLASS_NAME_LENGTH, characters = _constants.CHARACTERS, charactersLength = characters.length;
function generateClassName() {
    var className = "";
    for(var count = 0; count < length; count++){
        var index = random(charactersLength), character = characters[index];
        className += character;
    }
    return className;
}
function retrieveClassName(element) {
    var ref = element.reactFunction || element.reactComponent.constructor, className = ref.className;
    return className;
}
var _default = {
    generateClassName: generateClassName,
    retrieveClassName: retrieveClassName
};
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2xhc3NOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdXVpZFY0IGZyb20gXCJ1dWlkL3Y0XCI7XG5pbXBvcnQgcmFuZG9tU2VlZCBmcm9tIFwicmFuZG9tLXNlZWRcIjtcblxuaW1wb3J0IHsgQ0hBUkFDVEVSUywgQ0xBU1NfTkFNRV9MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHV1aWQgPSB1dWlkVjQoKSwgLy8vXG4gICAgICByYW5kb20gPSByYW5kb21TZWVkLmNyZWF0ZSh1dWlkKSxcbiAgICAgIGxlbmd0aCA9IENMQVNTX05BTUVfTEVOR1RILFxuICAgICAgY2hhcmFjdGVycyA9IENIQVJBQ1RFUlMsXG4gICAgICBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNsYXNzTmFtZSgpIHtcbiAgbGV0IGNsYXNzTmFtZSA9IFwiXCI7XG5cbiAgZm9yIChsZXQgY291bnQgPSAwOyBjb3VudCA8IGxlbmd0aDsgY291bnQrKykge1xuICAgIGNvbnN0IGluZGV4ID0gcmFuZG9tKGNoYXJhY3RlcnNMZW5ndGgpLFxuICAgICAgICAgIGNoYXJhY3RlciA9IGNoYXJhY3RlcnNbaW5kZXhdO1xuXG4gICAgY2xhc3NOYW1lICs9IGNoYXJhY3RlcjtcbiAgfVxuXG4gIHJldHVybiBjbGFzc05hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXRyaWV2ZUNsYXNzTmFtZShlbGVtZW50KSB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBlbGVtZW50LnJlYWN0RnVuY3Rpb24gfHwgZWxlbWVudC5yZWFjdENvbXBvbmVudC5jb25zdHJ1Y3RvcjtcblxuICByZXR1cm4gY2xhc3NOYW1lO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdlbmVyYXRlQ2xhc3NOYW1lLFxuICByZXRyaWV2ZUNsYXNzTmFtZVxufTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7O1FBYUEsaUJBQUEsR0FBQSxpQkFBQTtRQWFBLGlCQUFBLEdBQUEsaUJBQUE7O0lBeEJBLEdBQUE7SUFDQSxXQUFBO0lBRUEsVUFBQTs7Ozs7O0lBRUEsSUFBQSxHQUxBLEdBQUEsWUFNQSxNQUFBLEdBTEEsV0FBQSxTQUtBLE1BQUEsQ0FBQSxJQUFBLEdBQ0EsTUFBQSxHQUpBLFVBQUEsb0JBS0EsVUFBQSxHQUxBLFVBQUEsYUFNQSxnQkFBQSxHQUFBLFVBQUEsQ0FBQSxNQUFBO1NBRUEsaUJBQUE7UUFDQSxTQUFBO1lBRUEsS0FBQSxHQUFBLENBQUEsRUFBQSxLQUFBLEdBQUEsTUFBQSxFQUFBLEtBQUE7WUFDQSxLQUFBLEdBQUEsTUFBQSxDQUFBLGdCQUFBLEdBQ0EsU0FBQSxHQUFBLFVBQUEsQ0FBQSxLQUFBO0FBRUEsaUJBQUEsSUFBQSxTQUFBOztXQUdBLFNBQUE7O1NBR0EsaUJBQUEsQ0FBQSxPQUFBO1FBQ0EsR0FBQSxHQUFBLE9BQUEsQ0FBQSxhQUFBLElBQUEsT0FBQSxDQUFBLGNBQUEsQ0FBQSxXQUFBLEVBQUEsU0FBQSxHQUFBLEdBQUEsQ0FBQSxTQUFBO1dBRUEsU0FBQTs7O0FBSUEscUJBQUEsRUFBQSxpQkFBQTtBQUNBLHFCQUFBLEVBQUEsaUJBQUEifQ==