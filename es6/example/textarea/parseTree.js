'use strict';

import { InputElement } from 'easy';

export default class ParseTreeTextarea extends InputElement {
  setParseTree(parseTree) {
    if (parseTree !== null) {
      parseTree.shiftLine();  //

      const parseTreeString = parseTree.asString(),
            value = parseTreeString;  ///

      this.setValue(value);
    } else {
      this.clearParseTree();
    }
  }

  clearParseTree() {
    const value = '';

    this.setValue(value);
  }

  parentContext() {
    const setParseTree = this.setParseTree.bind(this),
          clearParseTree = this.clearParseTree.bind(this);

    return ({
      setParseTree,
      clearParseTree
    });
  }

  static tagName = 'textarea';

  static defaultProperties = {
    className: 'parse-tree',
    spellCheck: 'false',
    readOnly: true
  };

  static fromProperties(properties) { return InputElement.fromProperties(ParseTreeTextarea, properties); }
}
