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
        "arithmetic-operator": "^-|\\*|\\+|\\/"
    },
    {
        "unassigned": "^[^\\s]+"
    }
];
var _default = entries;
exports.default = _default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jc3MvZW50cmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcblxyXG4gIHsgXCJjb2xvdXJcIjogXCJeIyg/OlswLTlhLWZBLUZdezZ9fFswLTlhLWZBLUZdezN9KVwiIH0sXHJcblxyXG4gIHsgXCJrZXl3b3JkXCI6IFwiXig/OiFpbXBvcnRhbnR8QG1lZGlhKVwiIH0sXHJcblxyXG4gIHsgXCJwZXJjZW50YWdlXCI6IFwiXig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKyklXCIgfSxcclxuXHJcbiAgeyBcImZyZXF1ZW5jeVwiOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspKD86aHp8a2h6KVwiIH0sXHJcblxyXG4gIHsgXCJmcmFjdGlvblwiOiBcIl5bMS05XVswLTldKj9mclwiIH0sXHJcblxyXG4gIHsgXCJsZW5ndGhcIjogXCJeKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKSg/OnB4fGNtfG1tfGlufHB0fHBjKVwiIH0sXHJcblxyXG4gIHsgXCJhbmdsZVwiOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspKD86ZGVnfHJhZHxncmFkKVwiIH0sXHJcblxyXG4gIHsgXCJ0aW1lXCI6IFwiXig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKykoPzpzfG1zKVwiIH0sXHJcblxyXG4gIHsgXCJyZW1zXCI6IFwiXig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKylyZW1cIiB9LFxyXG5cclxuICB7IFwiZW1zXCI6IFwiXig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKyllbVwiIH0sXHJcblxyXG4gIHsgXCJudW1iZXJcIjogXCJeWzAtOV0rfFswLTldKlxcXFwuWzAtOV0rXCIgfSxcclxuXHJcbiAgeyBcInNwZWNpYWxcIjogXCJeO3w6Onw6fFxcXFwufCx8XFxcXHw9fH49fD18PnxcXFxce3xcXFxcfXxcXFxcKHxcXFxcKXxcXFxcW3xcXFxcXVwiIH0sXHJcblxyXG4gIHsgXCJpZGVudGlmaWVyXCI6IFwiXltfYS16QS1aMC05LV0rXCIgfSxcclxuXHJcbiAgeyBcImxvZ2ljYWwtb3BlcmF0b3JcIjogXCJeXig/OmFuZHxub3R8b25seSkkXCIgfSxcclxuXHJcbiAgeyBcImFyaXRobWV0aWMtb3BlcmF0b3JcIjogXCJeLXxcXFxcKnxcXFxcK3xcXFxcL1wiIH0sXHJcblxyXG4gIHsgXCJ1bmFzc2lnbmVkXCI6IFwiXlteXFxcXHNdK1wiIH1cclxuXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlbnRyaWVzO1xyXG4iXSwibmFtZXMiOlsiZW50cmllcyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUViLElBQU1BLE9BQU8sR0FBRztJQUVkO1FBQUUsUUFBUSxFQUFFLHFDQUFxQztLQUFFO0lBRW5EO1FBQUUsU0FBUyxFQUFFLHdCQUF3QjtLQUFFO0lBRXZDO1FBQUUsWUFBWSxFQUFFLDhCQUE4QjtLQUFFO0lBRWhEO1FBQUUsV0FBVyxFQUFFLHVDQUF1QztLQUFFO0lBRXhEO1FBQUUsVUFBVSxFQUFFLGlCQUFpQjtLQUFFO0lBRWpDO1FBQUUsUUFBUSxFQUFFLGtEQUFrRDtLQUFFO0lBRWhFO1FBQUUsT0FBTyxFQUFFLDZDQUE2QztLQUFFO0lBRTFEO1FBQUUsTUFBTSxFQUFFLHFDQUFxQztLQUFFO0lBRWpEO1FBQUUsTUFBTSxFQUFFLGdDQUFnQztLQUFFO0lBRTVDO1FBQUUsS0FBSyxFQUFFLCtCQUErQjtLQUFFO0lBRTFDO1FBQUUsUUFBUSxFQUFFLHlCQUF5QjtLQUFFO0lBRXZDO1FBQUUsU0FBUyxFQUFFLG1EQUFtRDtLQUFFO0lBRWxFO1FBQUUsWUFBWSxFQUFFLGlCQUFpQjtLQUFFO0lBRW5DO1FBQUUsa0JBQWtCLEVBQUUscUJBQXFCO0tBQUU7SUFFN0M7UUFBRSxxQkFBcUIsRUFBRSxnQkFBZ0I7S0FBRTtJQUUzQztRQUFFLFlBQVksRUFBRSxVQUFVO0tBQUU7Q0FFN0IsQUFBQztlQUVhQSxPQUFPIn0=