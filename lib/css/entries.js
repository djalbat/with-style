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
        "special": "^;|::|:|\\.|,|\\|=|~=|=|>|\\{|\\}|\\(|\\)|\\[|\\]"
    },
    {
        "identifier": "^[_a-zA-Z0-9-]+"
    },
    {
        "logical-operator": "^^(?:and|not|only)$"
    },
    {
        "arithmetic-operator": "^\\*|\\+|\\-|\\/"
    },
    {
        "unassigned": "^[^\\s]+"
    }
];
var _default = entries;
exports.default = _default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jc3MvZW50cmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcblxyXG4gIHsgXCJjb2xvdXJcIjogXCJeIyg/OlswLTlhLWZBLUZdezZ9fFswLTlhLWZBLUZdezN9KVwiIH0sXHJcblxyXG4gIHsgXCJrZXl3b3JkXCI6IFwiXig/OiFpbXBvcnRhbnR8QG1lZGlhKVwiIH0sXHJcblxyXG4gIHsgXCJwZXJjZW50YWdlXCI6IFwiXig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKylcXFxcJVwiIH0sXHJcblxyXG4gIHsgXCJmcmVxdWVuY3lcIjogXCJeKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKSg/Omh6fGtoeilcIiB9LFxyXG5cclxuICB7IFwiZnJhY3Rpb25cIjogXCJeWzEtOV1bMC05XSo/ZnJcIiB9LFxyXG5cclxuICB7IFwibGVuZ3RoXCI6IFwiXig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKykoPzpweHxjbXxtbXxpbnxwdHxwYylcIiB9LFxyXG5cclxuICB7IFwiYW5nbGVcIjogXCJeKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKSg/OmRlZ3xyYWR8Z3JhZClcIiB9LFxyXG5cclxuICB7IFwidGltZVwiOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspKD86c3xtcylcIiB9LFxyXG5cclxuICB7IFwicmVtc1wiOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspcmVtXCIgfSxcclxuXHJcbiAgeyBcImVtc1wiOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspZW1cIiB9LFxyXG5cclxuICB7IFwibnVtYmVyXCI6IFwiXlswLTldK3xbMC05XSpcXFxcLlswLTldK1wiIH0sXHJcblxyXG4gIHsgXCJzcGVjaWFsXCI6IFwiXjt8Ojp8OnxcXFxcLnwsfFxcXFx8PXx+PXw9fD58XFxcXHt8XFxcXH18XFxcXCh8XFxcXCl8XFxcXFt8XFxcXF1cIiB9LFxyXG5cclxuICB7IFwiaWRlbnRpZmllclwiOiBcIl5bX2EtekEtWjAtOS1dK1wiIH0sXHJcblxyXG4gIHsgXCJsb2dpY2FsLW9wZXJhdG9yXCI6IFwiXl4oPzphbmR8bm90fG9ubHkpJFwiIH0sXHJcblxyXG4gIHsgXCJhcml0aG1ldGljLW9wZXJhdG9yXCI6IFwiXlxcXFwqfFxcXFwrfFxcXFwtfFxcXFwvXCIgfSxcclxuXHJcbiAgeyBcInVuYXNzaWduZWRcIjogXCJeW15cXFxcc10rXCIgfVxyXG5cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVudHJpZXM7XHJcbiJdLCJuYW1lcyI6WyJlbnRyaWVzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRWIsSUFBTUEsT0FBTyxHQUFHO0lBRWQ7UUFBRSxRQUFRLEVBQUUscUNBQXFDO0tBQUU7SUFFbkQ7UUFBRSxTQUFTLEVBQUUsd0JBQXdCO0tBQUU7SUFFdkM7UUFBRSxZQUFZLEVBQUUsZ0NBQWdDO0tBQUU7SUFFbEQ7UUFBRSxXQUFXLEVBQUUsdUNBQXVDO0tBQUU7SUFFeEQ7UUFBRSxVQUFVLEVBQUUsaUJBQWlCO0tBQUU7SUFFakM7UUFBRSxRQUFRLEVBQUUsa0RBQWtEO0tBQUU7SUFFaEU7UUFBRSxPQUFPLEVBQUUsNkNBQTZDO0tBQUU7SUFFMUQ7UUFBRSxNQUFNLEVBQUUscUNBQXFDO0tBQUU7SUFFakQ7UUFBRSxNQUFNLEVBQUUsZ0NBQWdDO0tBQUU7SUFFNUM7UUFBRSxLQUFLLEVBQUUsK0JBQStCO0tBQUU7SUFFMUM7UUFBRSxRQUFRLEVBQUUseUJBQXlCO0tBQUU7SUFFdkM7UUFBRSxTQUFTLEVBQUUsbURBQW1EO0tBQUU7SUFFbEU7UUFBRSxZQUFZLEVBQUUsaUJBQWlCO0tBQUU7SUFFbkM7UUFBRSxrQkFBa0IsRUFBRSxxQkFBcUI7S0FBRTtJQUU3QztRQUFFLHFCQUFxQixFQUFFLGtCQUFrQjtLQUFFO0lBRTdDO1FBQUUsWUFBWSxFQUFFLFVBQVU7S0FBRTtDQUU3QixBQUFDO2VBRWFBLE9BQU8ifQ==