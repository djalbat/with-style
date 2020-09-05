"use strict";

import { stylesUtilities } from "./index"; ///

const { generateStyle, retrieveStyle, renderStyles } = stylesUtilities;

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

generateStyle([[`

  display: none;
  
  .active {
    display: block;
  }

`]], "abc");

const superStyle = retrieveStyle("abc");

generateStyle([[`

  color: transparent;
  width: 100%;
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

  ::selection { background-color: transparent; }
  
  ${monospaceFontMixin}

  .fira-code {

    ${firaCodeFontMixin}
    
  }
  
`]], "def", superStyle);

renderStyles();
