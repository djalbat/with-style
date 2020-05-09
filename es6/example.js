"use strict";

import styleUtilities from "./utilities/styles";

const { generateStyle, retrieveStyle, renderStyles } = styleUtilities;

generateStyle([[`

  color: black;
  display: none;
  
`]], "abc");

const superStyle = retrieveStyle("abc");

generateStyle([[`

  display: block;
  background: transparent;
  
`]], "def", superStyle);

renderStyles();
