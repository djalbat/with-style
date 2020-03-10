'use strict';

import Style from '../style';
import CSSLexer from '../css/lexer';
import CSSParser from '../css/parser';

const cssLexer = CSSLexer.fromNothing(),
      cssParser = CSSParser.fromNothing();

const styleMap = {};

export function renderStyles() {
  const stylesCSS = retrieveStylesCSS(),
        innerHTML = `
        
${stylesCSS}`,
      headDOMElement = document.querySelector('head'),
      styleDOMElement = document.createElement('style');

  Object.assign(styleDOMElement, {
    innerHTML
  });

  headDOMElement.appendChild(styleDOMElement);
}

export function generateStyle(args, className, superStyle = null) {
  const strings = args.shift(),	///
        content = strings.reduce((content, string, index) => {
          const arg = args[index];

          content = (arg !== undefined) ?
                      `${content}${string}${arg}` :
                        `${content}${string}`;

          return content;
        }, ''),
        tokens = cssLexer.tokenise(content),
        node = cssParser.parse(tokens),
        style = Style.fromNodeAndTokens(node, tokens);

        if (superStyle !== null) {
          style.extends(superStyle);
        }

        styleMap[className] = style;
}

export function retrieveStyle(className) {
  const style = styleMap[className] || null;

  return style;
}

function retrieveStylesCSS() {
  const classNames = Object.keys(styleMap),
        stylesCSS = classNames.reduce((stylesCSS, className) => {
          const style = retrieveStyle(className),
                styleCSS = style.asCSS(className);

          stylesCSS += styleCSS;

          return stylesCSS;
        }, '');

  return stylesCSS;
}
