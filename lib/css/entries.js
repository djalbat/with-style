"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var entries = [
    {
        "media": "^@media"
    },
    {
        "colour": "^#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})"
    },
    {
        "important": "^!important"
    },
    {
        "percentage": "^(?:[0-9]+|[0-9]*\\.[0-9]+)%"
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
        "special": "^;|::|:|\\.|,|\\|=|~=|=|>|\\{|\\}|\\(|\\)|\\[|\\]"
    },
    {
        "identifier": "^[_a-zA-Z0-9-]+"
    },
    {
        "logical-operator": "^^(?:and|not|only)$"
    },
    {
        "plus-or-minus": "^\\+|-"
    },
    {
        "unassigned": "^[^\\s]+"
    }
];
var _default = entries;
exports.default = _default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jc3MvZW50cmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcblxyXG4gIHsgXCJtZWRpYVwiOiBcIl5AbWVkaWFcIiB9LFxyXG5cclxuICB7IFwiY29sb3VyXCI6IFwiXiMoPzpbMC05YS1mQS1GXXs2fXxbMC05YS1mQS1GXXszfSlcIiB9LFxyXG5cclxuICB7IFwiaW1wb3J0YW50XCI6IFwiXiFpbXBvcnRhbnRcIiB9LFxyXG5cclxuICB7IFwicGVyY2VudGFnZVwiOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspJVwiIH0sXHJcblxyXG4gIHsgXCJmcmVxdWVuY3lcIjogXCJeKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKSg/Omh6fGtoeilcIiB9LFxyXG5cclxuICB7IFwiZnJhY3Rpb25cIjogXCJeWzEtOV1bMC05XSo/ZnJcIiB9LFxyXG5cclxuICB7IFwibGVuZ3RoXCI6IFwiXig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKykoPzpweHxjbXxtbXxpbnxwdHxwYylcIiB9LFxyXG5cclxuICB7IFwiYW5nbGVcIjogXCJeKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKSg/OmRlZ3xyYWR8Z3JhZClcIiB9LFxyXG5cclxuICB7IFwidGltZVwiOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspKD86c3xtcylcIiB9LFxyXG5cclxuICB7IFwicmVtc1wiOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspcmVtXCIgfSxcclxuXHJcbiAgeyBcImVtc1wiOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspZW1cIiB9LFxyXG5cclxuICB7IFwibnVtYmVyXCI6IFwiXlswLTldK3xbMC05XSpcXFxcLlswLTldK1wiIH0sXHJcblxyXG4gIHsgXCJzcGVjaWFsXCI6IFwiXjt8Ojp8OnxcXFxcLnwsfFxcXFx8PXx+PXw9fD58XFxcXHt8XFxcXH18XFxcXCh8XFxcXCl8XFxcXFt8XFxcXF1cIiB9LFxyXG5cclxuICB7IFwiaWRlbnRpZmllclwiOiBcIl5bX2EtekEtWjAtOS1dK1wiIH0sXHJcblxyXG4gIHsgXCJsb2dpY2FsLW9wZXJhdG9yXCI6IFwiXl4oPzphbmR8bm90fG9ubHkpJFwiIH0sXHJcblxyXG4gIHsgXCJwbHVzLW9yLW1pbnVzXCI6IFwiXlxcXFwrfC1cIiB9LFxyXG5cclxuICB7IFwidW5hc3NpZ25lZFwiOiBcIl5bXlxcXFxzXStcIiB9XHJcblxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZW50cmllcztcclxuIl0sIm5hbWVzIjpbImVudHJpZXMiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFYixJQUFNQSxPQUFPLEdBQUc7SUFFZDtRQUFFLE9BQU8sRUFBRSxTQUFTO0tBQUU7SUFFdEI7UUFBRSxRQUFRLEVBQUUscUNBQXFDO0tBQUU7SUFFbkQ7UUFBRSxXQUFXLEVBQUUsYUFBYTtLQUFFO0lBRTlCO1FBQUUsWUFBWSxFQUFFLDhCQUE4QjtLQUFFO0lBRWhEO1FBQUUsV0FBVyxFQUFFLHVDQUF1QztLQUFFO0lBRXhEO1FBQUUsVUFBVSxFQUFFLGlCQUFpQjtLQUFFO0lBRWpDO1FBQUUsUUFBUSxFQUFFLGtEQUFrRDtLQUFFO0lBRWhFO1FBQUUsT0FBTyxFQUFFLDZDQUE2QztLQUFFO0lBRTFEO1FBQUUsTUFBTSxFQUFFLHFDQUFxQztLQUFFO0lBRWpEO1FBQUUsTUFBTSxFQUFFLGdDQUFnQztLQUFFO0lBRTVDO1FBQUUsS0FBSyxFQUFFLCtCQUErQjtLQUFFO0lBRTFDO1FBQUUsUUFBUSxFQUFFLHlCQUF5QjtLQUFFO0lBRXZDO1FBQUUsU0FBUyxFQUFFLG1EQUFtRDtLQUFFO0lBRWxFO1FBQUUsWUFBWSxFQUFFLGlCQUFpQjtLQUFFO0lBRW5DO1FBQUUsa0JBQWtCLEVBQUUscUJBQXFCO0tBQUU7SUFFN0M7UUFBRSxlQUFlLEVBQUUsUUFBUTtLQUFFO0lBRTdCO1FBQUUsWUFBWSxFQUFFLFVBQVU7S0FBRTtDQUU3QixBQUFDO2VBRWFBLE9BQU8ifQ==