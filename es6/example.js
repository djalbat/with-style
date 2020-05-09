"use strict";

import styleUtilities from "./utilities/styles";

const { generateStyle, retrieveStyle, renderStyles } = styleUtilities;

generateStyle([[`

  display: none;
  
`]], "abc");

const superStyle = retrieveStyle("abc");

generateStyle([[`

  display: block;
  
`]], "def", superStyle);

renderStyles();
