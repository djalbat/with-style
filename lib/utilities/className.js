"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get generateClassName () {
        return generateClassName;
    },
    get retrieveClassName () {
        return retrieveClassName;
    }
});
const _constants = require("../constants");
const length = _constants.CLASS_NAME_LENGTH, characters = _constants.CHARACTERS, charactersLength = characters.length;
const classNames = [];
function generateClassName() {
    let className = _constants.EMPTY_STRING;
    for(let count = 0; count < length; count++){
        const index = Math.floor(Math.random() * charactersLength), character = characters[index];
        className += character;
    }
    const classNamesIncludesClassName = classNames.includes(className);
    if (!classNamesIncludesClassName) {
        classNames.push(className);
    } else {
        className = generateClassName();
    }
    return className;
}
function retrieveClassName(element) {
    const { className } = element.reactFunction || element.reactComponent.constructor;
    return className;
}
const _default = {
    generateClassName,
    retrieveClassName
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2xhc3NOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDSEFSQUNURVJTLCBFTVBUWV9TVFJJTkcsIENMQVNTX05BTUVfTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBsZW5ndGggPSBDTEFTU19OQU1FX0xFTkdUSCxcbiAgICAgIGNoYXJhY3RlcnMgPSBDSEFSQUNURVJTLFxuICAgICAgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xuXG5jb25zdCBjbGFzc05hbWVzID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNsYXNzTmFtZSgpIHtcbiAgbGV0IGNsYXNzTmFtZSA9IEVNUFRZX1NUUklORztcblxuICBmb3IgKGxldCBjb3VudCA9IDA7IGNvdW50IDwgbGVuZ3RoOyBjb3VudCsrKSB7XG4gICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyYWN0ZXJzTGVuZ3RoKSxcbiAgICAgICAgICBjaGFyYWN0ZXIgPSBjaGFyYWN0ZXJzW2luZGV4XTtcblxuICAgIGNsYXNzTmFtZSArPSBjaGFyYWN0ZXI7XG4gIH1cblxuICBjb25zdCBjbGFzc05hbWVzSW5jbHVkZXNDbGFzc05hbWUgPSBjbGFzc05hbWVzLmluY2x1ZGVzKGNsYXNzTmFtZSk7XG5cbiAgaWYgKCFjbGFzc05hbWVzSW5jbHVkZXNDbGFzc05hbWUpIHtcbiAgICBjbGFzc05hbWVzLnB1c2goY2xhc3NOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBjbGFzc05hbWUgPSBnZW5lcmF0ZUNsYXNzTmFtZSgpO1xuICB9XG5cbiAgcmV0dXJuIGNsYXNzTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHJpZXZlQ2xhc3NOYW1lKGVsZW1lbnQpIHtcbiAgY29uc3QgeyBjbGFzc05hbWUgfSA9IGVsZW1lbnQucmVhY3RGdW5jdGlvbiB8fCBlbGVtZW50LnJlYWN0Q29tcG9uZW50LmNvbnN0cnVjdG9yO1xuXG4gIHJldHVybiBjbGFzc05hbWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2VuZXJhdGVDbGFzc05hbWUsXG4gIHJldHJpZXZlQ2xhc3NOYW1lXG59O1xuIl0sIm5hbWVzIjpbImdlbmVyYXRlQ2xhc3NOYW1lIiwicmV0cmlldmVDbGFzc05hbWUiLCJsZW5ndGgiLCJDTEFTU19OQU1FX0xFTkdUSCIsImNoYXJhY3RlcnMiLCJDSEFSQUNURVJTIiwiY2hhcmFjdGVyc0xlbmd0aCIsImNsYXNzTmFtZXMiLCJjbGFzc05hbWUiLCJFTVBUWV9TVFJJTkciLCJjb3VudCIsImluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY2hhcmFjdGVyIiwiY2xhc3NOYW1lc0luY2x1ZGVzQ2xhc3NOYW1lIiwiaW5jbHVkZXMiLCJwdXNoIiwiZWxlbWVudCIsInJlYWN0RnVuY3Rpb24iLCJyZWFjdENvbXBvbmVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBcUNBO2VBQUE7O1FBM0JnQkE7ZUFBQUE7O1FBcUJBQztlQUFBQTs7OzJCQTdCNEM7QUFFNUQsTUFBTUMsU0FBU0MsNEJBQWlCLEVBQzFCQyxhQUFhQyxxQkFBVSxFQUN2QkMsbUJBQW1CRixXQUFXRixNQUFNO0FBRTFDLE1BQU1LLGFBQWEsRUFBRTtBQUVkLFNBQVNQO0lBQ2QsSUFBSVEsWUFBWUMsdUJBQVk7SUFFNUIsSUFBSyxJQUFJQyxRQUFRLEdBQUdBLFFBQVFSLFFBQVFRLFFBQVM7UUFDM0MsTUFBTUMsUUFBUUMsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUtSLG1CQUNuQ1MsWUFBWVgsVUFBVSxDQUFDTyxNQUFNO1FBRW5DSCxhQUFhTztJQUNmO0lBRUEsTUFBTUMsOEJBQThCVCxXQUFXVSxRQUFRLENBQUNUO0lBRXhELElBQUksQ0FBQ1EsNkJBQTZCO1FBQ2hDVCxXQUFXVyxJQUFJLENBQUNWO0lBQ2xCLE9BQU87UUFDTEEsWUFBWVI7SUFDZDtJQUVBLE9BQU9RO0FBQ1Q7QUFFTyxTQUFTUCxrQkFBa0JrQixPQUFPO0lBQ3ZDLE1BQU0sRUFBRVgsU0FBUyxFQUFFLEdBQUdXLFFBQVFDLGFBQWEsSUFBSUQsUUFBUUUsY0FBYyxDQUFDLFdBQVc7SUFFakYsT0FBT2I7QUFDVDtNQUVBLFdBQWU7SUFDYlI7SUFDQUM7QUFDRiJ9