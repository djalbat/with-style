"use strict";

import { Query } from "occam-query";

import RuleSet from "./ruleSet";

import { EMPTY_STRING } from "../constants";

const ruleSetQuery = Query.fromExpressionString("/*/ruleSet");

export default class RuleSets {
  constructor(array) {
    this.array = array;
  }

  unshift(ruleSets) {
    ruleSets.forEach((ruleSet) => {
      const matchingRuleSet = ruleSet.findMatchingRuleSet(this.array); ///

      (matchingRuleSet === null) ?
        this.array.unshift(ruleSet) :
          matchingRuleSet.unshift(ruleSet);
    });
  }

  forEach(callback) {
    this.array.forEach(callback);
  }

  asCSS(className, indent) {
    const css = this.array.reduce((css, ruleSet) => {
      const ruleSetCSS = ruleSet.asCSS(className, indent);

      css += ruleSetCSS;

      return css;
    }, EMPTY_STRING);

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
