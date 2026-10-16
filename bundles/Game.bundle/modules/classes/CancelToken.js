var __dep_class_Cancel = require("gge-module:class_Cancel");
function CancelToken(__s1param0) {
  if (typeof __s1param0 != "function") {
    throw new TypeError("executor must be a function.");
  }
  var __s1local0;
  this.promise = new Promise(function promiseExecutor(__s4param0) {
    __s1local0 = __s4param0;
  });
  var __s1local1 = this;
  __s1param0(function cancel(__s6param0) {
    if (!__s1local1.reason) {
      __s1local1.reason = new __dep_class_Cancel(__s6param0);
      __s1local0(__s1local1.reason);
    }
  });
}
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
CancelToken.source = function source() {
  var __s12local0;
  return {
    token: new CancelToken(function executor(__s14param0) {
      __s12local0 = __s14param0;
    }),
    cancel: __s12local0
  };
};
module.exports = CancelToken;
