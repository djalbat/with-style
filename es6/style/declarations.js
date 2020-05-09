"use strict";

import { Query } from "occam-dom";
import { arrayUtilities } from "necessary";

import Declaration from "./declaration";

const { unshift } = arrayUtilities;

const declarationQuery = Query.fromExpression("/*/declaration");

export default class Declarations {
  constructor(array) {
    this.array = array;
  }

  getArray() {
    return this.array;
  }

  unshift(declarations) {
    const array = declarations.getArray();

    unshift(this.array, array);
  }

  asCSS(indent) {
    let css = "";

    const length = this.array.length;

    if (length> 0) {
      const lastIndex = length - 1;

      css = this.array.reduce((css, declaration, index) => {
        const last = (index === lastIndex);

        const declarationCSS = declaration.asCSS(indent, last);

        css += declarationCSS;

        return css;
      }, "");
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
