'use strict';

const Style = require('../style'),
      CSSLexer = require('../css/lexer'),
      CSSParser = require('../css/parser');

const cssLexer = CSSLexer.fromNothing(),
      cssParser = CSSParser.fromNothing();

const styleMap = {};

function renderStyles() {
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

function generateStyle(args, className, superStyle = null) {
  const strings = args.shift(),	///
        content = strings.reduce(function(content, cssString, index) {
          const arg = args[index];

          content += cssString;

          switch (typeof arg) {
            case 'string':
              content += arg;
              break;

            case 'function':
              content += arg();
              break;
          }

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

function retrieveStyle(className) {
  const style = styleMap[className];

  return style;
}

module.exports = {
  renderStyles,
  generateStyle,
  retrieveStyle
};

function retrieveStylesCSS() {
  const classNames = Object.keys(styleMap),
        stylesCSS = classNames.reduce(function(stylesCSS, className) {
          const style = retrieveStyle(className),
                styleCSS = style.asCSS(className);

          stylesCSS += styleCSS;

          return stylesCSS;
        }, '');

  return stylesCSS;
}
