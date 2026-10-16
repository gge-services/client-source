Object.defineProperty(exports, "__esModule", {
  value: true
});
(function (__s1param0) {
  var __s1local0;
  var __s1local1 = createjs.MouseEvent;
  var __s1local2 = {
    wheel: "wheel"
  };
  var __s1local3 = {
    wheel: __s1local1.MOUSE_WHEEL
  };
  function convertEvent(__s3param0) {
    var __s3local0 = __s1local3[__s3param0.type];
    if (!__s3local0) {
      throw new Error("Can't convert event of type \"" + __s3param0.type + "\"");
    }
    var __s3local1 = new __s1local1(__s3local0, __s3param0.bubbles, __s3param0.cancelable);
    __s3local1.ctrlKey = __s3param0.ctrlKey;
    __s3local1.altKey = __s3param0.altKey;
    __s3local1.shiftKey = __s3param0.shiftKey;
    __s3local1.target = __s3param0.target;
    __s3local1.nativeEvent = __s3param0;
    return __s3local1;
  }
  __s1param0.setTarget = function setTarget(__s6param0) {
    __s1local0 = __s6param0;
  };
  __s1param0.init = function init() {
    window.addEventListener(__s1local2.wheel, __s1local4);
  };
  function __s1local4(__s10param0) {
    for (var __s10local0 = __s1local0; __s10local0;) {
      if (__s10local0.hasEventListener(__s1local1.MOUSE_WHEEL) && __s10local0.dispatchEvent) {
        __s10local0.dispatchEvent(convertEvent(__s10param0));
        break;
      }
      __s10local0 = __s10local0.parent;
    }
  }
})(exports.MouseEventDispatcher ||= {});
