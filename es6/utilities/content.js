"use strict";

import { arrayUtilities } from "necessary";

const { first } = arrayUtilities;

export function contentFromQueryNodeAndTokens(query, node, tokens) {
  const nodes = query.execute(node),
        firstNode = first(nodes);

  node = firstNode; ///

  const content = contentFromNodeAndTokens(node, tokens);

  return content;
}

function contentFromNodeAndTokens(node, tokens) {
  const firstSignificantToken = node.getFirstSignificantToken(),
        lastSignificantToken = node.getLastSignificantToken(),
        firstToken = firstSignificantToken, ///
        lastToken = lastSignificantToken, ///
        firstTokenIndex = firstToken.ofIndex(tokens),
        lastTokenIndex = lastToken.ofIndex(tokens);

  let content = "";

  for (let index = firstTokenIndex; index <= lastTokenIndex; index++) {
    const token = tokens[index],
          tokenContent = token.getContent();

    content += tokenContent;
  }

  return content;
}
