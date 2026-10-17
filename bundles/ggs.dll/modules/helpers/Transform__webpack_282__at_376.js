// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 282; original: modules/internal/exact_b12acdf897490fdf.js
function Transform(__s1param0) {
  if (!(this instanceof Transform)) {
    return new Transform(__s1param0);
  }
  __dep_class_Duplex.call(this, __s1param0);
  this._transformState = {
    afterTransform: function afterTransform(__s4param0, __s4param1) {
      var __s4local0 = this._transformState;
      __s4local0.transforming = false;
      var __s4local1 = __s4local0.writecb;
      if (__s4local1 === null) {
        return this.emit("error", new __s0local2());
      }
      __s4local0.writechunk = null;
      __s4local0.writecb = null;
      if (__s4param1 != null) {
        this.push(__s4param1);
      }
      __s4local1(__s4param0);
      var __s4local2 = this._readableState;
      __s4local2.reading = false;
      if (__s4local2.needReadable || __s4local2.length < __s4local2.highWaterMark) {
        this._read(__s4local2.highWaterMark);
      }
    }.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  };
  this._readableState.needReadable = true;
  this._readableState.sync = false;
  if (__s1param0) {
    if (typeof __s1param0.transform == "function") {
      this._transform = __s1param0.transform;
    }
    if (typeof __s1param0.flush == "function") {
      this._flush = __s1param0.flush;
    }
  }
  this.on("prefinish", prefinish);
}
