"use strict";

import { Query } from "occam-dom";
import { arrayUtilities } from "necessary";

import RuleSet from "./ruleSet";

const { unshift } = arrayUtilities;

const ruleSetQuery = Query.fromExpression("/*/ruleSet");

export default class RuleSets {
  constructor(array) {
    this.array = array;
  }

  getArray() {
    return this.array;
  }

  unshift(ruleSets) {
    const array = ruleSets.getArray();

    unshift(this.array, array);
  }

  asCSS(className, indent) {
    const css = this.array.reduce((css, ruleSet) => {
      const ruleSetCSS = ruleSet.asCSS(className, indent);

      css += ruleSetCSS;

      return css;
    }, "");

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const ruleSetNodes = ruleSetQuery.execute(node),
          array = ruleSetNodes.map((ruleSetNode) => {
            const node = ruleSetNode, ///
                  ruleSet = RuleSet.fromNodeAndTokens(node, tokens);

            return ruleSet;
          }),
          ruleSets = new RuleSets(array);

    return ruleSets;
  }
}
