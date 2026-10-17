// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 316
// Export: XML; preserved source: modules/webpack/exports/createNodeProxy.js
// Original canonical SHA-256: 9af0a631b5e0df43efb40663c24bfc45d922c7f78b1638f190547acf4651afaa
exports.XML = function XML(__s16param0) {
  var __s16local0 = __dep_exact_5a69994851456f13.fromXML(__s16param0);
  var __s16local1 = __s16local0;
  for (var __s16local2 in __s16local0) {
    if (__s16local2.match(/[A-Za-z\-]+/)) {
      __s16local1 = __s16local0[__s16local2];
      break;
    }
  }
  return createNodeProxy(__s16local1);
};
