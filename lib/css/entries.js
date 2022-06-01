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
        "identifier": "^[_a-zA-Z0-9-]+"
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jc3MvZW50cmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcblxyXG4gIHsgXCJjb2xvdXJcIjogXCJeIyg/OlswLTlhLWZBLUZdezZ9fFswLTlhLWZBLUZdezN9KVwiIH0sXHJcblxyXG4gIHsgXCJrZXl3b3JkXCI6IFwiXig/OiFpbXBvcnRhbnR8QG1lZGlhKVwiIH0sXHJcblxyXG4gIHsgXCJwZXJjZW50YWdlXCI6IFwiXig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKylcXFxcJVwiIH0sXHJcblxyXG4gIHsgXCJmcmVxdWVuY3lcIjogXCJeKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKSg/Omh6fGtoeilcIiB9LFxyXG5cclxuICB7IFwiZnJhY3Rpb25cIjogXCJeWzEtOV1bMC05XSo/ZnJcIiB9LFxyXG5cclxuICB7IFwibGVuZ3RoXCI6IFwiXig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKykoPzpweHxjbXxtbXxpbnxwdHxwYylcIiB9LFxyXG5cclxuICB7IFwiYW5nbGVcIjogXCJeKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKSg/OmRlZ3xyYWR8Z3JhZClcIiB9LFxyXG5cclxuICB7IFwidGltZVwiOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspKD86c3xtcylcIiB9LFxyXG5cclxuICB7IFwicmVtc1wiOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspcmVtXCIgfSxcclxuXHJcbiAgeyBcImVtc1wiOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspZW1cIiB9LFxyXG5cclxuICB7IFwibnVtYmVyXCI6IFwiXlswLTldK3xbMC05XSpcXFxcLlswLTldK1wiIH0sXHJcblxyXG4gIHsgXCJzcGVjaWFsXCI6IFwiXjt8Ojp8OnxcXFxcLnwsfC98XFxcXHw9fH49fD18PnxcXFxce3xcXFxcfXxcXFxcKHxcXFxcKXxcXFxcW3xcXFxcXVwiIH0sXHJcblxyXG4gIHsgXCJvcGVyYXRvclwiOiBcIl5eKD86YW5kfG5vdHxvbmx5KSRcIiB9LFxyXG5cclxuICB7IFwiaWRlbnRpZmllclwiOiBcIl5bX2EtekEtWjAtOS1dK1wiIH0sXHJcblxyXG4gIHsgXCJ1bmFyeS1vcGVyYXRvclwiOiBcIl5cXFxcK3xcXFxcLVwiIH0sXHJcblxyXG4gIHsgXCJ1bmFzc2lnbmVkXCI6IFwiXlteXFxcXHNdK1wiIH1cclxuXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlbnRyaWVzO1xyXG4iXSwibmFtZXMiOlsiZW50cmllcyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUViLElBQU1BLE9BQU8sR0FBRztJQUVkO1FBQUUsUUFBUSxFQUFFLHFDQUFxQztLQUFFO0lBRW5EO1FBQUUsU0FBUyxFQUFFLHdCQUF3QjtLQUFFO0lBRXZDO1FBQUUsWUFBWSxFQUFFLGdDQUFnQztLQUFFO0lBRWxEO1FBQUUsV0FBVyxFQUFFLHVDQUF1QztLQUFFO0lBRXhEO1FBQUUsVUFBVSxFQUFFLGlCQUFpQjtLQUFFO0lBRWpDO1FBQUUsUUFBUSxFQUFFLGtEQUFrRDtLQUFFO0lBRWhFO1FBQUUsT0FBTyxFQUFFLDZDQUE2QztLQUFFO0lBRTFEO1FBQUUsTUFBTSxFQUFFLHFDQUFxQztLQUFFO0lBRWpEO1FBQUUsTUFBTSxFQUFFLGdDQUFnQztLQUFFO0lBRTVDO1FBQUUsS0FBSyxFQUFFLCtCQUErQjtLQUFFO0lBRTFDO1FBQUUsUUFBUSxFQUFFLHlCQUF5QjtLQUFFO0lBRXZDO1FBQUUsU0FBUyxFQUFFLHFEQUFxRDtLQUFFO0lBRXBFO1FBQUUsVUFBVSxFQUFFLHFCQUFxQjtLQUFFO0lBRXJDO1FBQUUsWUFBWSxFQUFFLGlCQUFpQjtLQUFFO0lBRW5DO1FBQUUsZ0JBQWdCLEVBQUUsVUFBVTtLQUFFO0lBRWhDO1FBQUUsWUFBWSxFQUFFLFVBQVU7S0FBRTtDQUU3QixBQUFDO2VBRWFBLE9BQU8ifQ==