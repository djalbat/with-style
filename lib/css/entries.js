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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jc3MvZW50cmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcbiAge1xyXG4gICAgXCJtZWRpYVwiOiBcIl5AbWVkaWFcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJjb2xvdXJcIjogXCJeIyg/OlswLTlhLWZBLUZdezZ9fFswLTlhLWZBLUZdezN9KVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImltcG9ydGFudFwiOiBcIl4haW1wb3J0YW50XCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwicGVyY2VudGFnZVwiOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspJVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImZyZXF1ZW5jeVwiOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspKD86aHp8a2h6KVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImZyYWN0aW9uXCI6IFwiXlsxLTldWzAtOV0qP2ZyXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibGVuZ3RoXCI6IFwiXig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKykoPzpweHxjbXxtbXxpbnxwdHxwYylcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJhbmdsZVwiOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspKD86ZGVnfHJhZHxncmFkKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInRpbWVcIjogXCJeKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKSg/OnN8bXMpXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwicmVtc1wiOiBcIl4oPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspcmVtXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZW1zXCI6IFwiXig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKyllbVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm51bWJlclwiOiBcIl5bMC05XSt8WzAtOV0qXFxcXC5bMC05XStcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJzcGVjaWFsXCI6IFwiXjt8Ojp8OnxcXFxcLnwsfFxcXFx8PXx+PXw9fD58XFxcXHt8XFxcXH18XFxcXCh8XFxcXCl8XFxcXFt8XFxcXF1cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZGVudGlmaWVyXCI6IFwiXltfYS16QS1aMC05LV0rXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibG9naWNhbC1vcGVyYXRvclwiOiBcIl5eKD86YW5kfG5vdCkkXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwicGx1cy1vci1taW51c1wiOiBcIl5cXFxcK3wtXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwidW5hc3NpZ25lZFwiOiBcIl5bXlxcXFxzXStcIlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVudHJpZXM7XHJcbiJdLCJuYW1lcyI6WyJlbnRyaWVzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRWIsSUFBTUEsT0FBTyxHQUFHO0lBQ2Q7UUFDRSxPQUFPLEVBQUUsU0FBUztLQUNuQjtJQUNEO1FBQ0UsUUFBUSxFQUFFLHFDQUFxQztLQUNoRDtJQUNEO1FBQ0UsV0FBVyxFQUFFLGFBQWE7S0FDM0I7SUFDRDtRQUNFLFlBQVksRUFBRSw4QkFBOEI7S0FDN0M7SUFDRDtRQUNFLFdBQVcsRUFBRSx1Q0FBdUM7S0FDckQ7SUFDRDtRQUNFLFVBQVUsRUFBRSxpQkFBaUI7S0FDOUI7SUFDRDtRQUNFLFFBQVEsRUFBRSxrREFBa0Q7S0FDN0Q7SUFDRDtRQUNFLE9BQU8sRUFBRSw2Q0FBNkM7S0FDdkQ7SUFDRDtRQUNFLE1BQU0sRUFBRSxxQ0FBcUM7S0FDOUM7SUFDRDtRQUNFLE1BQU0sRUFBRSxnQ0FBZ0M7S0FDekM7SUFDRDtRQUNFLEtBQUssRUFBRSwrQkFBK0I7S0FDdkM7SUFDRDtRQUNFLFFBQVEsRUFBRSx5QkFBeUI7S0FDcEM7SUFDRDtRQUNFLFNBQVMsRUFBRSxtREFBbUQ7S0FDL0Q7SUFDRDtRQUNFLFlBQVksRUFBRSxpQkFBaUI7S0FDaEM7SUFDRDtRQUNFLGtCQUFrQixFQUFFLGdCQUFnQjtLQUNyQztJQUNEO1FBQ0UsZUFBZSxFQUFFLFFBQVE7S0FDMUI7SUFDRDtRQUNFLFlBQVksRUFBRSxVQUFVO0tBQ3pCO0NBQ0YsQUFBQztlQUVhQSxPQUFPIn0=