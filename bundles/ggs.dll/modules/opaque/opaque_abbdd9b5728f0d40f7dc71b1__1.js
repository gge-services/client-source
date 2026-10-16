if (typeof Object.create == "function") {
  module.exports = function inherits(__s2param0, __s2param1) {
    __s2param0.super_ = __s2param1;
    __s2param0.prototype = Object.create(__s2param1.prototype, {
      constructor: {
        value: __s2param0,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  module.exports = function inherits(__s5param0, __s5param1) {
    __s5param0.super_ = __s5param1;
    function __s5local0() {}
    __s5local0.prototype = __s5param1.prototype;
    __s5param0.prototype = new __s5local0();
    __s5param0.prototype.constructor = __s5param0;
  };
}
