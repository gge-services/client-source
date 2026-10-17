// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 280; original: modules/classes/CorkedRequest.js
function Writable(__s33param0) {
  var __s33local0 = this instanceof (__s0local0 = __s0local0 || require("gge-module:class_Duplex"));
  if (!__s33local0 && !__s0local4.call(Writable, this)) {
    return new Writable(__s33param0);
  }
  this._writableState = new WritableState(__s33param0, this, __s33local0);
  this.writable = true;
  if (__s33param0) {
    if (typeof __s33param0.write == "function") {
      this._write = __s33param0.write;
    }
    if (typeof __s33param0.writev == "function") {
      this._writev = __s33param0.writev;
    }
    if (typeof __s33param0.destroy == "function") {
      this._destroy = __s33param0.destroy;
    }
    if (typeof __s33param0.final == "function") {
      this._final = __s33param0.final;
    }
  }
  __dep_exact_b2b03f94649f1d90.call(this);
}
