// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 93; original: modules/webpack/exports/INSPECT_MAX_BYTES.js
function Buffer(__s11param0, __s11param1, __s11param2) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(__s11param0, __s11param1, __s11param2);
  }
  if (typeof __s11param0 == "number") {
    if (typeof __s11param1 == "string") {
      throw new Error("If encoding is specified then the first argument must be a string");
    }
    return allocUnsafe(this, __s11param0);
  }
  return from(this, __s11param0, __s11param1, __s11param2);
}
