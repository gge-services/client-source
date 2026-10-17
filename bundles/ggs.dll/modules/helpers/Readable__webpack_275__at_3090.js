// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 275; original: modules/classes/EElistenerCount.js
function Readable(__s12param0) {
  __s0local0 = __s0local0 || require("gge-module:class_Duplex");
  if (!(this instanceof Readable)) {
    return new Readable(__s12param0);
  }
  var __s12local0 = this instanceof __s0local0;
  this._readableState = new ReadableState(__s12param0, this, __s12local0);
  this.readable = true;
  if (__s12param0) {
    if (typeof __s12param0.read == "function") {
      this._read = __s12param0.read;
    }
    if (typeof __s12param0.destroy == "function") {
      this._destroy = __s12param0.destroy;
    }
  }
  __dep_exact_b2b03f94649f1d90.call(this);
}
