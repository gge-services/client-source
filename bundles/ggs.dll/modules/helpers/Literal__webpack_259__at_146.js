// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 259; original: modules/webpack/classes/Literal.js
function Literal(__s1param0) {
  return __dep_export_ValidationError.create(function (__s3param0) {
    if (__s3param0 !== __s1param0) {
      throw __dep_export_ValidationError.validationError("Expected literal '" + __s1param0 + "' but was '" + __s3param0 + "'");
    }
    return __s3param0;
  }, {
    tag: "literal",
    value: __s1param0
  });
}
