"use strict";

import styleUtilities from "./utilities/styles";

const { generateStyle, retrieveStyle, renderStyles } = styleUtilities;

generateStyle([[`

  bottom: 0;
  width: 2rem;
  height: 2rem;
  outline: none;
  display: inline-block;
  position: absolute;
  font-size: 1.2rem;
  border-width: 1px;
  border-style: solid;
  border-color: black;
  border-bottom-width: 0;
  background-color: transparent;

`]], "abc");

const superStyle = retrieveStyle("abc");

generateStyle([[`

  right: 0;
  display: none;
  border-color: red;
  border-left-width: 0;
  
`]], "def", superStyle);

renderStyles();
