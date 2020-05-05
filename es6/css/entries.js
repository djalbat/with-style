"use strict";

const cssEntries = [

  { "colour": "^#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})" },

  { "keyword": "^(?:!important|@media)" },

  { "percentage": "^(?:[0-9]+|[0-9]*\\.[0-9]+)\\%" },

  { "frequency": "^(?:[0-9]+|[0-9]*\\.[0-9]+)(?:hz|khz)" },

  { "length": "^(?:[0-9]+|[0-9]*\\.[0-9]+)(?:px|cm|mm|in|pt|pc)" },

  { "angle": "^(?:[0-9]+|[0-9]*\\.[0-9]+)(?:deg|rad|grad)" },

  { "time": "^(?:[0-9]+|[0-9]*\\.[0-9]+)(?:s|ms)" },

  { "rems": "^(?:[0-9]+|[0-9]*\\.[0-9]+)rem" },

  { "ems": "^(?:[0-9]+|[0-9]*\\.[0-9]+)em" },

  { "number": "^[0-9]+|[0-9]*\\.[0-9]+" },

  { "special": "^;|::|:|\\.|,|/|\\|=|~=|=|>|\\{|\\}|\\(|\\)|\\[|\\]" },

  { "operator": "^^(?:and|not|only)$" },

  { "identifier": "^[_a-zA-Z][_a-zA-Z0-9-]*" },

  { "unary-operator": "^\\+|\\-" },

  { "unassigned": "^[^\\s]+" }

];

export default cssEntries;
