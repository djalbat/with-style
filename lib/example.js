"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _index = require("./index");
const { generateStyle, retrieveStyle, renderStyles } = _index.stylesUtilities;
const firaCodeFontMixin = `

  font-size: 1.3rem;
  line-height: 20px;
  font-family: "Fira Code";
  text-rendering: optimizeLegibility; /* Force ligatures for Webkit, Blink, Gecko */
  font-feature-settings: "calt" 1;  /* Enable ligatures for IE 10+, Edge */

`;
const monospaceFontMixin = `

  font-size: 1.3rem;
  line-height: 20px;
  font-family: monospace;
   
`;
generateStyle([
    [
        `

  width: auto !important;

  display: none;
  
  .active {
    display: block;
  }
  
  @keyframes redish {
    0% { color: darkred; }
    50% { color: red; }
    100% { color: lightred; }
  }
  
  @media (min-width: 640px) {

    padding-top: 1rem; 
    
    .menu {
      margin: 0;    
    }

  }

`
    ]
], "abc");
const superStyle = retrieveStyle("abc");
generateStyle([
    [
        `

  color: transparent;
  width: auto;
  height: 100%;
  cursor: auto;
  resize: none;
  outline: none;
  tab-size: 2;
  border-top: none;
  overflow-x: scroll;
  overflow-y: scroll;
  caret-color: transparent;
  white-space: pre;
  overflow-wrap: normal;
  background-color: transparent;

  @keyframes blueish {
    0% { color: darkblue; }
    50% { color: blue; }
    100% { color: lightblue; }
  }
  
  ::selection { background-color: transparent; }
  
  ${monospaceFontMixin}

  .fira-code {

    ${firaCodeFontMixin}
    
  }
  
`
    ]
], "def", superStyle);
renderStyles();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdHlsZXNVdGlsaXRpZXMgfSBmcm9tIFwiLi9pbmRleFwiOyAvLy9cblxuY29uc3QgeyBnZW5lcmF0ZVN0eWxlLCByZXRyaWV2ZVN0eWxlLCByZW5kZXJTdHlsZXMgfSA9IHN0eWxlc1V0aWxpdGllcztcblxuY29uc3QgZmlyYUNvZGVGb250TWl4aW4gPSBgXG5cbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LWZhbWlseTogXCJGaXJhIENvZGVcIjtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTsgLyogRm9yY2UgbGlnYXR1cmVzIGZvciBXZWJraXQsIEJsaW5rLCBHZWNrbyAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwiY2FsdFwiIDE7ICAvKiBFbmFibGUgbGlnYXR1cmVzIGZvciBJRSAxMCssIEVkZ2UgKi9cblxuYDtcblxuY29uc3QgbW9ub3NwYWNlRm9udE1peGluID0gYFxuXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgIFxuYDtcblxuZ2VuZXJhdGVTdHlsZShbW2BcblxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuXG4gIGRpc3BsYXk6IG5vbmU7XG4gIFxuICAuYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgQGtleWZyYW1lcyByZWRpc2gge1xuICAgIDAlIHsgY29sb3I6IGRhcmtyZWQ7IH1cbiAgICA1MCUgeyBjb2xvcjogcmVkOyB9XG4gICAgMTAwJSB7IGNvbG9yOiBsaWdodHJlZDsgfVxuICB9XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcblxuICAgIHBhZGRpbmctdG9wOiAxcmVtOyBcbiAgICBcbiAgICAubWVudSB7XG4gICAgICBtYXJnaW46IDA7ICAgIFxuICAgIH1cblxuICB9XG5cbmBdXSwgXCJhYmNcIik7XG5cbmNvbnN0IHN1cGVyU3R5bGUgPSByZXRyaWV2ZVN0eWxlKFwiYWJjXCIpO1xuXG5nZW5lcmF0ZVN0eWxlKFtbYFxuXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBhdXRvO1xuICByZXNpemU6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRhYi1zaXplOiAyO1xuICBib3JkZXItdG9wOiBub25lO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgY2FyZXQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBvdmVyZmxvdy13cmFwOiBub3JtYWw7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gIEBrZXlmcmFtZXMgYmx1ZWlzaCB7XG4gICAgMCUgeyBjb2xvcjogZGFya2JsdWU7IH1cbiAgICA1MCUgeyBjb2xvcjogYmx1ZTsgfVxuICAgIDEwMCUgeyBjb2xvcjogbGlnaHRibHVlOyB9XG4gIH1cbiAgXG4gIDo6c2VsZWN0aW9uIHsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cbiAgXG4gICR7bW9ub3NwYWNlRm9udE1peGlufVxuXG4gIC5maXJhLWNvZGUge1xuXG4gICAgJHtmaXJhQ29kZUZvbnRNaXhpbn1cbiAgICBcbiAgfVxuICBcbmBdXSwgXCJkZWZcIiwgc3VwZXJTdHlsZSk7XG5cbnJlbmRlclN0eWxlcygpO1xuIl0sIm5hbWVzIjpbImdlbmVyYXRlU3R5bGUiLCJyZXRyaWV2ZVN0eWxlIiwicmVuZGVyU3R5bGVzIiwic3R5bGVzVXRpbGl0aWVzIiwiZmlyYUNvZGVGb250TWl4aW4iLCJtb25vc3BhY2VGb250TWl4aW4iLCJzdXBlclN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozt1QkFFZ0M7QUFFaEMsTUFBTSxFQUFFQSxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsWUFBWSxFQUFFLEdBQUdDLHNCQUFlO0FBRXRFLE1BQU1DLG9CQUFvQixDQUFDOzs7Ozs7OztBQVEzQixDQUFDO0FBRUQsTUFBTUMscUJBQXFCLENBQUM7Ozs7OztBQU01QixDQUFDO0FBRURMLGNBQWM7SUFBQztRQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJqQixDQUFDO0tBQUM7Q0FBQyxFQUFFO0FBRUwsTUFBTU0sYUFBYUwsY0FBYztBQUVqQ0QsY0FBYztJQUFDO1FBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXlCZixFQUFFSyxtQkFBbUI7Ozs7SUFJbkIsRUFBRUQsa0JBQWtCOzs7O0FBSXhCLENBQUM7S0FBQztDQUFDLEVBQUUsT0FBT0U7QUFFWkoifQ==