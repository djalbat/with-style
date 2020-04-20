"use strict";

import { InputElement } from "easy";

export default class LexicalEntriesTextarea extends InputElement {
  constructor(selector, changeHandler, keyUpHandler) {
    super(selector, changeHandler);

    if (keyUpHandler) {
      this.onKeyUp(keyUpHandler);
    }
  }

  onKeyUp(keyUpHandler) {
    this.on("keyup", keyUpHandler);
  }

  getLexicalEntries() {
    const value = this.getValue(),
          lexicalEntries = JSON.parse(value);

    return lexicalEntries;
  }

  setLexicalEntries(lexicalEntries) {
    const value = JSON.stringify(lexicalEntries, null, "  ");

    this.setValue(value);
  }

  parentContext() {
    const getLexicalEntries = this.getLexicalEntries.bind(this),
          setLexicalEntries = this.setLexicalEntries.bind(this);

    return ({
      getLexicalEntries,
      setLexicalEntries
    });
  }

  static tagName = "textarea";

  static defaultProperties = {
    className: "lexical-entries",
    spellCheck: "false"
  };

  static fromProperties(properties) { return InputElement.fromProperties(LexicalEntriesTextarea, properties); }
}
