"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var entries = [
    {
        "colour": "^#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})"
    },
    {
        "keyword": "^(?:!important|@media)"
    },
    {
        "percentage": "^(?:[0-9]+|[0-9]*\\.[0-9]+)\\%"
    },
    {
        "frequency": "^(?:[0-9]+|[0-9]*\\.[0-9]+)(?:hz|khz)"
    },
    {
        "fraction": "^[1-9][0-9]*?fr"
    },
    {
        "length": "^(?:[0-9]+|[0-9]*\\.[0-9]+)(?:px|cm|mm|in|pt|pc)"
    },
    {
        "angle": "^(?:[0-9]+|[0-9]*\\.[0-9]+)(?:deg|rad|grad)"
    },
    {
        "time": "^(?:[0-9]+|[0-9]*\\.[0-9]+)(?:s|ms)"
    },
    {
        "rems": "^(?:[0-9]+|[0-9]*\\.[0-9]+)rem"
    },
    {
        "ems": "^(?:[0-9]+|[0-9]*\\.[0-9]+)em"
    },
    {
        "number": "^[0-9]+|[0-9]*\\.[0-9]+"
    },
    {
        "special": "^;|::|:|\\.|,|/|\\|=|~=|=|>|\\{|\\}|\\(|\\)|\\[|\\]"
    },
    {
        "operator": "^^(?:and|not|only)$"
    },
    {
        "identifier": "^[_a-zA-Z][_a-zA-Z0-9-]*"
    },
    {
        "unary-operator": "^\\+|\\-"
    },
    {
        "unassigned": "^[^\\s]+"
    }
];
var _default = entries;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jc3MvZW50cmllcy5qcyJdLCJuYW1lcyI6WyJlbnRyaWVzIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVaLEdBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQztJQUVmLENBQUM7U0FBQyxNQUFRLElBQUUsbUNBQXFDO0lBQUMsQ0FBQztJQUVuRCxDQUFDO1NBQUMsT0FBUyxJQUFFLHNCQUF3QjtJQUFDLENBQUM7SUFFdkMsQ0FBQztTQUFDLFVBQVksSUFBRSw4QkFBZ0M7SUFBQyxDQUFDO0lBRWxELENBQUM7U0FBQyxTQUFXLElBQUUscUNBQXVDO0lBQUMsQ0FBQztJQUV4RCxDQUFDO1NBQUMsUUFBVSxJQUFFLGVBQWlCO0lBQUMsQ0FBQztJQUVqQyxDQUFDO1NBQUMsTUFBUSxJQUFFLGdEQUFrRDtJQUFDLENBQUM7SUFFaEUsQ0FBQztTQUFDLEtBQU8sSUFBRSwyQ0FBNkM7SUFBQyxDQUFDO0lBRTFELENBQUM7U0FBQyxJQUFNLElBQUUsbUNBQXFDO0lBQUMsQ0FBQztJQUVqRCxDQUFDO1NBQUMsSUFBTSxJQUFFLDhCQUFnQztJQUFDLENBQUM7SUFFNUMsQ0FBQztTQUFDLEdBQUssSUFBRSw2QkFBK0I7SUFBQyxDQUFDO0lBRTFDLENBQUM7U0FBQyxNQUFRLElBQUUsdUJBQXlCO0lBQUMsQ0FBQztJQUV2QyxDQUFDO1NBQUMsT0FBUyxJQUFFLG1EQUFxRDtJQUFDLENBQUM7SUFFcEUsQ0FBQztTQUFDLFFBQVUsSUFBRSxtQkFBcUI7SUFBQyxDQUFDO0lBRXJDLENBQUM7U0FBQyxVQUFZLElBQUUsd0JBQTBCO0lBQUMsQ0FBQztJQUU1QyxDQUFDO1NBQUMsY0FBZ0IsSUFBRSxRQUFVO0lBQUMsQ0FBQztJQUVoQyxDQUFDO1NBQUMsVUFBWSxJQUFFLFFBQVU7SUFBQyxDQUFDO0FBRTlCLENBQUM7ZUFFYyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gW1xyXG5cclxuICB7IFwiY29sb3VyXCI6IFwiXiMoPzpbMC05YS1mQS1GXXs2fXxbMC05YS1mQS1GXXszfSlcIiB9LFxyXG5cclxuICB7IFwia2V5d29yZFwiOiBcIl4oPzohaW1wb3J0YW50fEBtZWRpYSlcIiB9LFxyXG5cclxuICB7IFwicGVyY2VudGFnZVwiOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspXFxcXCVcIiB9LFxyXG5cclxuICB7IFwiZnJlcXVlbmN5XCI6IFwiXig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKykoPzpoenxraHopXCIgfSxcclxuXHJcbiAgeyBcImZyYWN0aW9uXCI6IFwiXlsxLTldWzAtOV0qP2ZyXCIgfSxcclxuXHJcbiAgeyBcImxlbmd0aFwiOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspKD86cHh8Y218bW18aW58cHR8cGMpXCIgfSxcclxuXHJcbiAgeyBcImFuZ2xlXCI6IFwiXig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKykoPzpkZWd8cmFkfGdyYWQpXCIgfSxcclxuXHJcbiAgeyBcInRpbWVcIjogXCJeKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKSg/OnN8bXMpXCIgfSxcclxuXHJcbiAgeyBcInJlbXNcIjogXCJeKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKXJlbVwiIH0sXHJcblxyXG4gIHsgXCJlbXNcIjogXCJeKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKWVtXCIgfSxcclxuXHJcbiAgeyBcIm51bWJlclwiOiBcIl5bMC05XSt8WzAtOV0qXFxcXC5bMC05XStcIiB9LFxyXG5cclxuICB7IFwic3BlY2lhbFwiOiBcIl47fDo6fDp8XFxcXC58LHwvfFxcXFx8PXx+PXw9fD58XFxcXHt8XFxcXH18XFxcXCh8XFxcXCl8XFxcXFt8XFxcXF1cIiB9LFxyXG5cclxuICB7IFwib3BlcmF0b3JcIjogXCJeXig/OmFuZHxub3R8b25seSkkXCIgfSxcclxuXHJcbiAgeyBcImlkZW50aWZpZXJcIjogXCJeW19hLXpBLVpdW19hLXpBLVowLTktXSpcIiB9LFxyXG5cclxuICB7IFwidW5hcnktb3BlcmF0b3JcIjogXCJeXFxcXCt8XFxcXC1cIiB9LFxyXG5cclxuICB7IFwidW5hc3NpZ25lZFwiOiBcIl5bXlxcXFxzXStcIiB9XHJcblxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZW50cmllcztcclxuIl19