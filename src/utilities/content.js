"use strict";

import { arrayUtilities } from "necessary";

import { EMPTY_STRING } from "../constants";

const { first } = arrayUtilities;

export function contentFromQueryNodeAndTokens(query, node, tokens) {
  let content = null;

  const nodes = query.execute(node),
        nodesLength = nodes.length;

  if (nodesLength > 0) {
    const firstNode = first(nodes);

    node = firstNode; ///

    content = contentFromNodeAndTokens(node, tokens);
  }

  return content;
}

function contentFromNodeAndTokens(node, tokens) {
  const firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens),
        lastSignificantTokenIndex = node.getLastSignificantTokenIndex(tokens);

  let content = EMPTY_STRING;

  for (let index = firstSignificantTokenIndex; index <= lastSignificantTokenIndex; index++) {
    const token = tokens[index],
          tokenContent = token.getContent();

    content += tokenContent;
  }

  return content;
}
