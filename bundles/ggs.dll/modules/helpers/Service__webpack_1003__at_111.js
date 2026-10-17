// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 1003; original: modules/internal/exact_55964be933487223.js
function Service(__s1param0, __s1param1, __s1param2) {
  if (typeof __s1param0 != "function") {
    throw TypeError("rpcImpl must be a function");
  }
  __dep_class_Buffer_allocUnsafe.EventEmitter.call(this);
  this.rpcImpl = __s1param0;
  this.requestDelimited = Boolean(__s1param1);
  this.responseDelimited = Boolean(__s1param2);
}
