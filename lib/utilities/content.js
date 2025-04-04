"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "contentFromQueryNodeAndTokens", {
    enumerable: true,
    get: function() {
        return contentFromQueryNodeAndTokens;
    }
});
var _necessary = require("necessary");
var _constants = require("../constants");
var first = _necessary.arrayUtilities.first;
function contentFromQueryNodeAndTokens(query, node, tokens) {
    var content = null;
    var nodes = query.execute(node), nodesLength = nodes.length;
    if (nodesLength > 0) {
        var firstNode = first(nodes);
        node = firstNode; ///
        content = contentFromNodeAndTokens(node, tokens);
    }
    return content;
}
function contentFromNodeAndTokens(node, tokens) {
    var firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens), lastSignificantTokenIndex = node.getLastSignificantTokenIndex(tokens);
    var content = _constants.EMPTY_STRING;
    for(var index = firstSignificantTokenIndex; index <= lastSignificantTokenIndex; index++){
        var token = tokens[index], tokenContent = token.getContent();
        content += tokenContent;
    }
    return content;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyhxdWVyeSwgbm9kZSwgdG9rZW5zKSB7XG4gIGxldCBjb250ZW50ID0gbnVsbDtcblxuICBjb25zdCBub2RlcyA9IHF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgIG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gIGlmIChub2Rlc0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCBmaXJzdE5vZGUgPSBmaXJzdChub2Rlcyk7XG5cbiAgICBub2RlID0gZmlyc3ROb2RlOyAvLy9cblxuICAgIGNvbnRlbnQgPSBjb250ZW50RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcbiAgfVxuXG4gIHJldHVybiBjb250ZW50O1xufVxuXG5mdW5jdGlvbiBjb250ZW50RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2Vucyk7XG5cbiAgbGV0IGNvbnRlbnQgPSBFTVBUWV9TVFJJTkc7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleDsgaW5kZXggPD0gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleDsgaW5kZXgrKykge1xuICAgIGNvbnN0IHRva2VuID0gdG9rZW5zW2luZGV4XSxcbiAgICAgICAgICB0b2tlbkNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICBjb250ZW50ICs9IHRva2VuQ29udGVudDtcbiAgfVxuXG4gIHJldHVybiBjb250ZW50O1xufVxuIl0sIm5hbWVzIjpbImNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInF1ZXJ5Iiwibm9kZSIsInRva2VucyIsImNvbnRlbnQiLCJub2RlcyIsImV4ZWN1dGUiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Tm9kZSIsImNvbnRlbnRGcm9tTm9kZUFuZFRva2VucyIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsIkVNUFRZX1NUUklORyIsImluZGV4IiwidG9rZW4iLCJ0b2tlbkNvbnRlbnQiLCJnZXRDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRZ0JBOzs7ZUFBQUE7Ozt5QkFOZTt5QkFFRjtBQUU3QixJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVELFNBQVNELDhCQUE4QkcsS0FBSyxFQUFFQyxJQUFJLEVBQUVDLE1BQU07SUFDL0QsSUFBSUMsVUFBVTtJQUVkLElBQU1DLFFBQVFKLE1BQU1LLE9BQU8sQ0FBQ0osT0FDdEJLLGNBQWNGLE1BQU1HLE1BQU07SUFFaEMsSUFBSUQsY0FBYyxHQUFHO1FBQ25CLElBQU1FLFlBQVlWLE1BQU1NO1FBRXhCSCxPQUFPTyxXQUFXLEdBQUc7UUFFckJMLFVBQVVNLHlCQUF5QlIsTUFBTUM7SUFDM0M7SUFFQSxPQUFPQztBQUNUO0FBRUEsU0FBU00seUJBQXlCUixJQUFJLEVBQUVDLE1BQU07SUFDNUMsSUFBTVEsNkJBQTZCVCxLQUFLVSw2QkFBNkIsQ0FBQ1QsU0FDaEVVLDRCQUE0QlgsS0FBS1ksNEJBQTRCLENBQUNYO0lBRXBFLElBQUlDLFVBQVVXLHVCQUFZO0lBRTFCLElBQUssSUFBSUMsUUFBUUwsNEJBQTRCSyxTQUFTSCwyQkFBMkJHLFFBQVM7UUFDeEYsSUFBTUMsUUFBUWQsTUFBTSxDQUFDYSxNQUFNLEVBQ3JCRSxlQUFlRCxNQUFNRSxVQUFVO1FBRXJDZixXQUFXYztJQUNiO0lBRUEsT0FBT2Q7QUFDVCJ9