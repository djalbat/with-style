"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    generateClassName: function() {
        return generateClassName;
    },
    retrieveClassName: function() {
        return retrieveClassName;
    }
});
var _constants = require("../constants");
var length = _constants.CLASS_NAME_LENGTH, characters = _constants.CHARACTERS, charactersLength = characters.length;
var classNames = [];
function generateClassName() {
    var className = _constants.EMPTY_STRING;
    for(var count = 0; count < length; count++){
        var index = Math.floor(Math.random() * charactersLength), character = characters[index];
        className += character;
    }
    var classNamesIncludesClassName = classNames.includes(className);
    if (!classNamesIncludesClassName) {
        classNames.push(className);
    } else {
        className = generateClassName();
    }
    return className;
}
function retrieveClassName(element) {
    var className = (element.reactFunction || element.reactComponent.constructor).className;
    return className;
}
var _default = {
    generateClassName: generateClassName,
    retrieveClassName: retrieveClassName
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2xhc3NOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDSEFSQUNURVJTLCBFTVBUWV9TVFJJTkcsIENMQVNTX05BTUVfTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBsZW5ndGggPSBDTEFTU19OQU1FX0xFTkdUSCxcbiAgICAgIGNoYXJhY3RlcnMgPSBDSEFSQUNURVJTLFxuICAgICAgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xuXG5jb25zdCBjbGFzc05hbWVzID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNsYXNzTmFtZSgpIHtcbiAgbGV0IGNsYXNzTmFtZSA9IEVNUFRZX1NUUklORztcblxuICBmb3IgKGxldCBjb3VudCA9IDA7IGNvdW50IDwgbGVuZ3RoOyBjb3VudCsrKSB7XG4gICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyYWN0ZXJzTGVuZ3RoKSxcbiAgICAgICAgICBjaGFyYWN0ZXIgPSBjaGFyYWN0ZXJzW2luZGV4XTtcblxuICAgIGNsYXNzTmFtZSArPSBjaGFyYWN0ZXI7XG4gIH1cblxuICBjb25zdCBjbGFzc05hbWVzSW5jbHVkZXNDbGFzc05hbWUgPSBjbGFzc05hbWVzLmluY2x1ZGVzKGNsYXNzTmFtZSk7XG5cbiAgaWYgKCFjbGFzc05hbWVzSW5jbHVkZXNDbGFzc05hbWUpIHtcbiAgICBjbGFzc05hbWVzLnB1c2goY2xhc3NOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBjbGFzc05hbWUgPSBnZW5lcmF0ZUNsYXNzTmFtZSgpO1xuICB9XG5cbiAgcmV0dXJuIGNsYXNzTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHJpZXZlQ2xhc3NOYW1lKGVsZW1lbnQpIHtcbiAgY29uc3QgeyBjbGFzc05hbWUgfSA9IGVsZW1lbnQucmVhY3RGdW5jdGlvbiB8fCBlbGVtZW50LnJlYWN0Q29tcG9uZW50LmNvbnN0cnVjdG9yO1xuXG4gIHJldHVybiBjbGFzc05hbWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2VuZXJhdGVDbGFzc05hbWUsXG4gIHJldHJpZXZlQ2xhc3NOYW1lXG59O1xuIl0sIm5hbWVzIjpbImdlbmVyYXRlQ2xhc3NOYW1lIiwicmV0cmlldmVDbGFzc05hbWUiLCJsZW5ndGgiLCJDTEFTU19OQU1FX0xFTkdUSCIsImNoYXJhY3RlcnMiLCJDSEFSQUNURVJTIiwiY2hhcmFjdGVyc0xlbmd0aCIsImNsYXNzTmFtZXMiLCJjbGFzc05hbWUiLCJFTVBUWV9TVFJJTkciLCJjb3VudCIsImluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY2hhcmFjdGVyIiwiY2xhc3NOYW1lc0luY2x1ZGVzQ2xhc3NOYW1lIiwiaW5jbHVkZXMiLCJwdXNoIiwiZWxlbWVudCIsInJlYWN0RnVuY3Rpb24iLCJyZWFjdENvbXBvbmVudCIsImNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFxQ0EsT0FHRTtlQUhGOztJQTNCZ0JBLGlCQUFpQjtlQUFqQkE7O0lBcUJBQyxpQkFBaUI7ZUFBakJBOzs7eUJBN0I0QztBQUU1RCxJQUFNQyxTQUFTQyw0QkFBaUIsRUFDMUJDLGFBQWFDLHFCQUFVLEVBQ3ZCQyxtQkFBbUJGLFdBQVdGLE1BQU07QUFFMUMsSUFBTUssYUFBYSxFQUFFO0FBRWQsU0FBU1A7SUFDZCxJQUFJUSxZQUFZQyx1QkFBWTtJQUU1QixJQUFLLElBQUlDLFFBQVEsR0FBR0EsUUFBUVIsUUFBUVEsUUFBUztRQUMzQyxJQUFNQyxRQUFRQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS1IsbUJBQ25DUyxZQUFZWCxVQUFVLENBQUNPLE1BQU07UUFFbkNILGFBQWFPO0lBQ2Y7SUFFQSxJQUFNQyw4QkFBOEJULFdBQVdVLFFBQVEsQ0FBQ1Q7SUFFeEQsSUFBSSxDQUFDUSw2QkFBNkI7UUFDaENULFdBQVdXLElBQUksQ0FBQ1Y7SUFDbEIsT0FBTztRQUNMQSxZQUFZUjtJQUNkO0lBRUEsT0FBT1E7QUFDVDtBQUVPLFNBQVNQLGtCQUFrQmtCLE9BQU87SUFDdkMsSUFBTSxBQUFFWCxZQUFjVyxDQUFBQSxRQUFRQyxhQUFhLElBQUlELFFBQVFFLGNBQWMsQ0FBQ0MsV0FBVyxBQUFELEVBQXhFZDtJQUVSLE9BQU9BO0FBQ1Q7SUFFQSxXQUFlO0lBQ2JSLG1CQUFBQTtJQUNBQyxtQkFBQUE7QUFDRiJ9