"use strict";

import Style from "../style";
import CSSLexer from "../css/lexer";
import CSSParser from "../css/parser";

const cssLexer = CSSLexer.fromNothing(),
      cssParser = CSSParser.fromNothing();

let styleMap;

if (typeof window !== "undefined") {
  ({ styleMap } = window);  ///
}

if (styleMap === undefined) {
  styleMap = {};
}

function renderStyle(style) {
  const headDOMElement = document.querySelector("head"),
        styleDOMElement = document.createElement("style"),
        innerHTML = `
        
${style}`;

  Object.assign(styleDOMElement, {
    innerHTML
  });

  headDOMElement.appendChild(styleDOMElement);
}

function renderStyles() {
  const stylesCSS = retrieveStylesCSS(),
        style = stylesCSS;  ///

  renderStyle(style);
}

function generateStyle(args, className, superStyle = null) {
  const strings = args.shift(),	///
        content = strings.reduce((content, string, index) => {
          const arg = args[index];

          content = (arg !== undefined) ?
                      `${content}${string}${arg}` :
                        `${content}${string}`;

          return content;
        }, ""),
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
        }, "");

  return stylesCSS;
}
