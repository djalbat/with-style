"use strict";

import { Query } from "occam-dom";

import Declaration from "./declaration";

const declarationQuery = Query.fromExpression("/*/declaration");

export default class Declarations {
  constructor(array) {
    this.array = array;
  }

  getProperties() {
    const properties = this.array.map((declaration) => {
      const property = declaration.getProperty();

      return property;
    });

    return properties;
  }

  getArray() {
    return this.array;
  }

  unshift(declarations) {
    const properties = this.getProperties(),
          array = declarations.getArray();

    array.forEach((declaration) => {
      const property = declaration.getProperty(),
            propertiesIncludesProperty = properties.includes(property);

      if (!propertiesIncludesProperty) {
        this.array.unshift(declaration);
      }
    });
  }

  asCSS(className, indent) {
    if (indent === undefined) {
      indent = className; ///

      className = null; ///
    }

    let css = "";

    const length = this.array.length;

    if (length > 0) {
      const lastIndex = length - 1,
            declarationsCSS = this.array.reduce((declarationsCSS, declaration, index) => {
              const last = (index === lastIndex),
                    declarationCSS = declaration.asCSS(indent, last);

              declarationsCSS += declarationCSS;

              return declarationsCSS;
            }, "");

      if (className === null) {
        css = declarationsCSS;  ///
      } else {
        css = `.${className} {
${declarationsCSS}
}

`;
      }
    }

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const declarationNodes = declarationQuery.execute(node),
          array = declarationNodes.map((declarationNode) => {
            const node = declarationNode, ///
                  declaration = Declaration.fromNodeAndTokens(node, tokens);

            return declaration;
          }),
          declarations = new Declarations(array);

    return declarations;
  }
}
