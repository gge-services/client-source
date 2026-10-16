module.exports = Service;
var __dep_class_Buffer_allocUnsafe = require("gge-module:class_Buffer_allocUnsafe");
function Service(__s1param0, __s1param1, __s1param2) {
  if (typeof __s1param0 != "function") {
    throw TypeError("rpcImpl must be a function");
  }
  __dep_class_Buffer_allocUnsafe.EventEmitter.call(this);
  this.rpcImpl = __s1param0;
  this.requestDelimited = Boolean(__s1param1);
  this.responseDelimited = Boolean(__s1param2);
}
(Service.prototype = Object.create(__dep_class_Buffer_allocUnsafe.EventEmitter.prototype)).constructor = Service;
Service.prototype.rpcCall = function rpcCall(__s4param0, __s4param1, __s4param2, __s4param3, __s4param4) {
  if (!__s4param3) {
    throw TypeError("request must be specified");
  }
  var __s4local0 = this;
  if (!__s4param4) {
    return __dep_class_Buffer_allocUnsafe.asPromise(rpcCall, __s4local0, __s4param0, __s4param1, __s4param2, __s4param3);
  }
  if (__s4local0.rpcImpl) {
    try {
      return __s4local0.rpcImpl(__s4param0, __s4param1[__s4local0.requestDelimited ? "encodeDelimited" : "encode"](__s4param3).finish(), function rpcCallback(__s10param0, __s10param1) {
        if (__s10param0) {
          __s4local0.emit("error", __s10param0, __s4param0);
          return __s4param4(__s10param0);
        }
        if (__s10param1 !== null) {
          if (!(__s10param1 instanceof __s4param2)) {
            try {
              __s10param1 = __s4param2[__s4local0.responseDelimited ? "decodeDelimited" : "decode"](__s10param1);
            } catch (__s16local0) {
              __s4local0.emit("error", __s16local0, __s4param0);
              return __s4param4(__s16local0);
            }
          }
          __s4local0.emit("data", __s10param1, __s4param0);
          return __s4param4(null, __s10param1);
        }
        __s4local0.end(true);
      });
    } catch (__s18local0) {
      __s4local0.emit("error", __s18local0, __s4param0);
      setTimeout(function () {
        __s4param4(__s18local0);
      }, 0);
      return;
    }
  } else {
    setTimeout(function () {
      __s4param4(Error("already ended"));
    }, 0);
  }
};
Service.prototype.end = function end(__s25param0) {
  if (this.rpcImpl) {
    if (!__s25param0) {
      this.rpcImpl(null, null, null);
    }
    this.rpcImpl = null;
    this.emit("end").off();
  }
  return this;
};
