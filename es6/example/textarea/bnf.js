"use strict";

import { InputElement } from "easy";

export default class BNFTextarea extends InputElement {
  getBNF() {
    const value = this.getValue(),
          bnf = value;  ///

    return bnf;
  }

  setBNF(bnf) {
    const value = bnf;  ///

    this.setValue(value);
  }

  parentContext() {
    const getBNF = this.getBNF.bind(this),
          setBNF = this.setBNF.bind(this);

    return ({
      getBNF,
      setBNF
    });
  }

  static tagName = "textarea";

  static defaultProperties = {
    className: "bnf",
    spellCheck: "false"
  };

  static fromProperties(properties) { return InputElement.fromProperties(BNFTextarea, properties); }
}
