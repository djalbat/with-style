'use strict';

import { Splitter, VerticalSplitter } from 'easy-layout';

export default class MainVerticalSplitter extends VerticalSplitter {
  static fromProperties(properties) {
    const afterSizeableElement = true;

    Object.assign(properties, { afterSizeableElement });

    const mainVerticalSplitter = Splitter.fromProperties(MainVerticalSplitter, properties);

    return mainVerticalSplitter;
  }
}

Object.assign(MainVerticalSplitter, {
  defaultProperties: {
    className: 'main'
  }
});
