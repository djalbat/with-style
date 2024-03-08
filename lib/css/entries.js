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
        "logical-operator": "^^(?:and|not)$"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jc3MvZW50cmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcblxyXG4gIHsgXCJtZWRpYVwiOiBcIl5AbWVkaWFcIiB9LFxyXG5cclxuICB7IFwiY29sb3VyXCI6IFwiXiMoPzpbMC05YS1mQS1GXXs2fXxbMC05YS1mQS1GXXszfSlcIiB9LFxyXG5cclxuICB7IFwiaW1wb3J0YW50XCI6IFwiXiFpbXBvcnRhbnRcIiB9LFxyXG5cclxuICB7IFwicGVyY2VudGFnZVwiOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspJVwiIH0sXHJcblxyXG4gIHsgXCJmcmVxdWVuY3lcIjogXCJeKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKSg/Omh6fGtoeilcIiB9LFxyXG5cclxuICB7IFwiZnJhY3Rpb25cIjogXCJeWzEtOV1bMC05XSo/ZnJcIiB9LFxyXG5cclxuICB7IFwibGVuZ3RoXCI6IFwiXig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKykoPzpweHxjbXxtbXxpbnxwdHxwYylcIiB9LFxyXG5cclxuICB7IFwiYW5nbGVcIjogXCJeKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKSg/OmRlZ3xyYWR8Z3JhZClcIiB9LFxyXG5cclxuICB7IFwidGltZVwiOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspKD86c3xtcylcIiB9LFxyXG5cclxuICB7IFwicmVtc1wiOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspcmVtXCIgfSxcclxuXHJcbiAgeyBcImVtc1wiOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspZW1cIiB9LFxyXG5cclxuICB7IFwibnVtYmVyXCI6IFwiXlswLTldK3xbMC05XSpcXFxcLlswLTldK1wiIH0sXHJcblxyXG4gIHsgXCJzcGVjaWFsXCI6IFwiXjt8Ojp8OnxcXFxcLnwsfFxcXFx8PXx+PXw9fD58XFxcXHt8XFxcXH18XFxcXCh8XFxcXCl8XFxcXFt8XFxcXF1cIiB9LFxyXG5cclxuICB7IFwiaWRlbnRpZmllclwiOiBcIl5bX2EtekEtWjAtOS1dK1wiIH0sXHJcblxyXG4gIHsgXCJsb2dpY2FsLW9wZXJhdG9yXCI6IFwiXl4oPzphbmR8bm90KSRcIiB9LFxyXG5cclxuICB7IFwicGx1cy1vci1taW51c1wiOiBcIl5cXFxcK3wtXCIgfSxcclxuXHJcbiAgeyBcInVuYXNzaWduZWRcIjogXCJeW15cXFxcc10rXCIgfVxyXG5cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVudHJpZXM7XHJcbiJdLCJuYW1lcyI6WyJlbnRyaWVzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRWIsSUFBTUEsT0FBTyxHQUFHO0lBRWQ7UUFBRSxPQUFPLEVBQUUsU0FBUztLQUFFO0lBRXRCO1FBQUUsUUFBUSxFQUFFLHFDQUFxQztLQUFFO0lBRW5EO1FBQUUsV0FBVyxFQUFFLGFBQWE7S0FBRTtJQUU5QjtRQUFFLFlBQVksRUFBRSw4QkFBOEI7S0FBRTtJQUVoRDtRQUFFLFdBQVcsRUFBRSx1Q0FBdUM7S0FBRTtJQUV4RDtRQUFFLFVBQVUsRUFBRSxpQkFBaUI7S0FBRTtJQUVqQztRQUFFLFFBQVEsRUFBRSxrREFBa0Q7S0FBRTtJQUVoRTtRQUFFLE9BQU8sRUFBRSw2Q0FBNkM7S0FBRTtJQUUxRDtRQUFFLE1BQU0sRUFBRSxxQ0FBcUM7S0FBRTtJQUVqRDtRQUFFLE1BQU0sRUFBRSxnQ0FBZ0M7S0FBRTtJQUU1QztRQUFFLEtBQUssRUFBRSwrQkFBK0I7S0FBRTtJQUUxQztRQUFFLFFBQVEsRUFBRSx5QkFBeUI7S0FBRTtJQUV2QztRQUFFLFNBQVMsRUFBRSxtREFBbUQ7S0FBRTtJQUVsRTtRQUFFLFlBQVksRUFBRSxpQkFBaUI7S0FBRTtJQUVuQztRQUFFLGtCQUFrQixFQUFFLGdCQUFnQjtLQUFFO0lBRXhDO1FBQUUsZUFBZSxFQUFFLFFBQVE7S0FBRTtJQUU3QjtRQUFFLFlBQVksRUFBRSxVQUFVO0tBQUU7Q0FFN0IsQUFBQztlQUVhQSxPQUFPIn0=