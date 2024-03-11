"use strict";

import Style from "../style";
import CSSLexer from "../css/lexer";
import CSSParser from "../css/parser";

import { HEAD, STYLE, EMPTY_STRING } from "../constants";

const cssLexer = CSSLexer.fromNothing(),
      cssParser = CSSParser.fromNothing();

if (!globalThis.styleMap) {
  globalThis.styleMap = {};
}

const { styleMap } = globalThis;

function renderStyle(style) {
  const headDOMElement = document.querySelector(HEAD),
        styleDOMElement = document.createElement(STYLE),
        innerHTML = `        
${style}
`;

  Object.assign(styleDOMElement, {
    innerHTML
  });

  headDOMElement.appendChild(styleDOMElement);

  return styleDOMElement;
}

function renderStyles() {
  const stylesCSS = retrieveStylesCSS(),
        style = stylesCSS;  ///

  renderStyle(style);
}

function generateStyle(args, className, superStyle = null) {
  const strings = args.shift(),	///
        content = strings.reduce((content, string, index) => {
          const arg = args[index] || null;

          content = (arg === null) ?
                      `${content}${string}` :
                        `${content}${string}${arg}`;

          return content;
        }, EMPTY_STRING),
        tokens = cssLexer.tokenise(content),
        node = cssParser.parse(tokens),
        style = Style.fromNodeAndTokens(node, tokens);

  if (superStyle !== null) {
    style.extends(superStyle);
  }

  styleMap[className] = style;
}

function retrieveStyle(className) {
  const style = styleMap[className] || null;

  return style;
}

export default {
  renderStyle,
  renderStyles,
  generateStyle,
  retrieveStyle
};

function retrieveStylesCSS() {
  const classNames = Object.keys(styleMap),
        stylesCSS = classNames.reduce((stylesCSS, className) => {
          const style = retrieveStyle(className),
                styleCSS = style.asCSS(className);

          stylesCSS += styleCSS;

          return stylesCSS;
        }, EMPTY_STRING);

  return stylesCSS;
}
