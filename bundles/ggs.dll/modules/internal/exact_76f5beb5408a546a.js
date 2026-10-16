if (typeof Object.create == "function") {
  module.exports = function inherits(__s2param0, __s2param1) {
    if (__s2param1) {
      __s2param0.super_ = __s2param1;
      __s2param0.prototype = Object.create(__s2param1.prototype, {
        constructor: {
          value: __s2param0,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  module.exports = function inherits(__s6param0, __s6param1) {
    if (__s6param1) {
      __s6param0.super_ = __s6param1;
      function __s8local0() {}
      __s8local0.prototype = __s6param1.prototype;
      __s6param0.prototype = new __s8local0();
      __s6param0.prototype.constructor = __s6param0;
    }
  };
}
