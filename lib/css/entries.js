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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jc3MvZW50cmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcblxyXG4gIHsgXCJjb2xvdXJcIjogXCJeIyg/OlswLTlhLWZBLUZdezZ9fFswLTlhLWZBLUZdezN9KVwiIH0sXHJcblxyXG4gIHsgXCJrZXl3b3JkXCI6IFwiXig/OiFpbXBvcnRhbnR8QG1lZGlhKVwiIH0sXHJcblxyXG4gIHsgXCJwZXJjZW50YWdlXCI6IFwiXig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKylcXFxcJVwiIH0sXHJcblxyXG4gIHsgXCJmcmVxdWVuY3lcIjogXCJeKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKSg/Omh6fGtoeilcIiB9LFxyXG5cclxuICB7IFwiZnJhY3Rpb25cIjogXCJeWzEtOV1bMC05XSo/ZnJcIiB9LFxyXG5cclxuICB7IFwibGVuZ3RoXCI6IFwiXig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKykoPzpweHxjbXxtbXxpbnxwdHxwYylcIiB9LFxyXG5cclxuICB7IFwiYW5nbGVcIjogXCJeKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKSg/OmRlZ3xyYWR8Z3JhZClcIiB9LFxyXG5cclxuICB7IFwidGltZVwiOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspKD86c3xtcylcIiB9LFxyXG5cclxuICB7IFwicmVtc1wiOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspcmVtXCIgfSxcclxuXHJcbiAgeyBcImVtc1wiOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspZW1cIiB9LFxyXG5cclxuICB7IFwibnVtYmVyXCI6IFwiXlswLTldK3xbMC05XSpcXFxcLlswLTldK1wiIH0sXHJcblxyXG4gIHsgXCJzcGVjaWFsXCI6IFwiXjt8Ojp8OnxcXFxcLnwsfC98XFxcXHw9fH49fD18PnxcXFxce3xcXFxcfXxcXFxcKHxcXFxcKXxcXFxcW3xcXFxcXVwiIH0sXHJcblxyXG4gIHsgXCJvcGVyYXRvclwiOiBcIl5eKD86YW5kfG5vdHxvbmx5KSRcIiB9LFxyXG5cclxuICB7IFwiaWRlbnRpZmllclwiOiBcIl5bX2EtekEtWl1bX2EtekEtWjAtOS1dKlwiIH0sXHJcblxyXG4gIHsgXCJ1bmFyeS1vcGVyYXRvclwiOiBcIl5cXFxcK3xcXFxcLVwiIH0sXHJcblxyXG4gIHsgXCJ1bmFzc2lnbmVkXCI6IFwiXlteXFxcXHNdK1wiIH1cclxuXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlbnRyaWVzO1xyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFWixHQUFLLENBQUMsT0FBTzs7U0FFVCxNQUFRLElBQUUsbUNBQXFDOzs7U0FFL0MsT0FBUyxJQUFFLHNCQUF3Qjs7O1NBRW5DLFVBQVksSUFBRSw4QkFBZ0M7OztTQUU5QyxTQUFXLElBQUUscUNBQXVDOzs7U0FFcEQsUUFBVSxJQUFFLGVBQWlCOzs7U0FFN0IsTUFBUSxJQUFFLGdEQUFrRDs7O1NBRTVELEtBQU8sSUFBRSwyQ0FBNkM7OztTQUV0RCxJQUFNLElBQUUsbUNBQXFDOzs7U0FFN0MsSUFBTSxJQUFFLDhCQUFnQzs7O1NBRXhDLEdBQUssSUFBRSw2QkFBK0I7OztTQUV0QyxNQUFRLElBQUUsdUJBQXlCOzs7U0FFbkMsT0FBUyxJQUFFLG1EQUFxRDs7O1NBRWhFLFFBQVUsSUFBRSxtQkFBcUI7OztTQUVqQyxVQUFZLElBQUUsd0JBQTBCOzs7U0FFeEMsY0FBZ0IsSUFBRSxRQUFVOzs7U0FFNUIsVUFBWSxJQUFFLFFBQVU7OztlQUliLE9BQU8ifQ==