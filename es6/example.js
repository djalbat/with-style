"use strict";

import styleUtilities from "./utilities/styles";

const { generateStyle, retrieveStyle, renderStyles } = styleUtilities;

generateStyle([[`

  :after {
    color: green;
    display: none;
  }
  
`]], "abc");

const superStyle = retrieveStyle("abc");

generateStyle([[`

  :after {
    display: block;
    background: transparent;
  }
  
`]], "def", superStyle);

renderStyles();
