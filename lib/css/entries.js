'use strict';

var cssEntries = [{
  "colour": "#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})"
}, {
  "keyword": "(?:!important|@media)"
}, {
  "percentage": "(?:[0-9]+|[0-9]*\\.[0-9]+)\\%"
}, {
  "frequency": "(?:[0-9]+|[0-9]*\\.[0-9]+)(?:hz|khz)"
}, {
  "length": "(?:[0-9]+|[0-9]*\\.[0-9]+)(?:px|cm|mm|in|pt|pc)"
}, {
  "angle": "(?:[0-9]+|[0-9]*\\.[0-9]+)(?:deg|rad|grad)"
}, {
  "time": "(?:[0-9]+|[0-9]*\\.[0-9]+)(?:s|ms)"
}, {
  "rems": "(?:[0-9]+|[0-9]*\\.[0-9]+)rem"
}, {
  "ems": "(?:[0-9]+|[0-9]*\\.[0-9]+)em"
}, {
  "number": "[0-9]+|[0-9]*\\.[0-9]+"
}, {
  "special": ";|::|:|\\.|,|/|\\|=|~=|=|>|\\{|\\}|\\(|\\)|\\[|\\]"
}, {
  "operator": "^(?:and|not|only)$"
}, {
  "identifier": "[_a-zA-Z][_a-zA-Z0-9-]*"
}, {
  "unaryOperator": "\\+|\\-"
}, {
  "unassigned": "^.*$"
}];

module.exports = cssEntries;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jc3MvZW50cmllcy5qcyJdLCJuYW1lcyI6WyJjc3NFbnRyaWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsYUFBYSxDQUVqQjtBQUNFLFlBQVU7QUFEWixDQUZpQixFQUtqQjtBQUNFLGFBQVc7QUFEYixDQUxpQixFQVFqQjtBQUNFLGdCQUFjO0FBRGhCLENBUmlCLEVBV2pCO0FBQ0UsZUFBYTtBQURmLENBWGlCLEVBY2pCO0FBQ0UsWUFBVTtBQURaLENBZGlCLEVBaUJqQjtBQUNFLFdBQVM7QUFEWCxDQWpCaUIsRUFvQmpCO0FBQ0UsVUFBUTtBQURWLENBcEJpQixFQXVCakI7QUFDRSxVQUFRO0FBRFYsQ0F2QmlCLEVBMEJqQjtBQUNFLFNBQU87QUFEVCxDQTFCaUIsRUE2QmpCO0FBQ0UsWUFBVTtBQURaLENBN0JpQixFQWdDakI7QUFDRSxhQUFXO0FBRGIsQ0FoQ2lCLEVBbUNqQjtBQUNFLGNBQVk7QUFEZCxDQW5DaUIsRUFzQ2pCO0FBQ0UsZ0JBQWM7QUFEaEIsQ0F0Q2lCLEVBeUNqQjtBQUNFLG1CQUFpQjtBQURuQixDQXpDaUIsRUE0Q2pCO0FBQ0UsZ0JBQWM7QUFEaEIsQ0E1Q2lCLENBQW5COztBQWtEQUMsT0FBT0MsT0FBUCxHQUFpQkYsVUFBakIiLCJmaWxlIjoiZW50cmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGNzc0VudHJpZXMgPSBbXHJcblxyXG4gIHtcclxuICAgIFwiY29sb3VyXCI6IFwiIyg/OlswLTlhLWZBLUZdezZ9fFswLTlhLWZBLUZdezN9KVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImtleXdvcmRcIjogXCIoPzohaW1wb3J0YW50fEBtZWRpYSlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJwZXJjZW50YWdlXCI6IFwiKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKVxcXFwlXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiZnJlcXVlbmN5XCI6IFwiKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKSg/Omh6fGtoeilcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJsZW5ndGhcIjogXCIoPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspKD86cHh8Y218bW18aW58cHR8cGMpXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiYW5nbGVcIjogXCIoPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspKD86ZGVnfHJhZHxncmFkKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInRpbWVcIjogXCIoPzpbMC05XSt8WzAtOV0qXFxcXC5bMC05XSspKD86c3xtcylcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJyZW1zXCI6IFwiKD86WzAtOV0rfFswLTldKlxcXFwuWzAtOV0rKXJlbVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImVtc1wiOiBcIig/OlswLTldK3xbMC05XSpcXFxcLlswLTldKyllbVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm51bWJlclwiOiBcIlswLTldK3xbMC05XSpcXFxcLlswLTldK1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInNwZWNpYWxcIjogXCI7fDo6fDp8XFxcXC58LHwvfFxcXFx8PXx+PXw9fD58XFxcXHt8XFxcXH18XFxcXCh8XFxcXCl8XFxcXFt8XFxcXF1cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJvcGVyYXRvclwiOiBcIl4oPzphbmR8bm90fG9ubHkpJFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImlkZW50aWZpZXJcIjogXCJbX2EtekEtWl1bX2EtekEtWjAtOS1dKlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInVuYXJ5T3BlcmF0b3JcIjogXCJcXFxcK3xcXFxcLVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInVuYXNzaWduZWRcIjogXCJeLiokXCJcclxuICB9XHJcblxyXG5dO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBjc3NFbnRyaWVzO1xyXG4iXX0=