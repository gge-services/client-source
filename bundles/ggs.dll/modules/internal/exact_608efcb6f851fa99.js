Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_KeyboardEvent = require("gge-module:class_KeyboardEvent");
(function (__s1param0) {
  var __s1local0;
  var __s1local1 = {
    keydown: "keydown",
    keypress: "keypress",
    keyup: "keyup"
  };
  var __s1local2 = {
    keydown: __dep_class_KeyboardEvent.KeyboardEvent.KEY_DOWN,
    keyup: __dep_class_KeyboardEvent.KeyboardEvent.KEY_UP
  };
  function convertEvent(__s3param0, __s3param1 = undefined) {
    var __s3local0 = __s1local2[__s3param0.type] || __s3param0.type;
    var __s3local1 = new __dep_class_KeyboardEvent.KeyboardEvent(__s3local0, __s3param1 !== undefined ? __s3param1 : __s3param0.bubbles, __s3param0.cancelable);
    __s3local1.ctrlKey = __s3param0.ctrlKey;
    __s3local1.altKey = __s3param0.altKey;
    __s3local1.shiftKey = __s3param0.shiftKey;
    __s3local1.keyCode = __s3param0.keyCode;
    __s3local1.charCode = __s3param0.charCode;
    __s3local1.key = __s3param0.key;
    __s3local1.code = __s3param0.code;
    __s3local1.which = __s3param0.which;
    __s3local1.target = __s3param0.target;
    __s3local1.currentTarget = __s3param0.currentTarget;
    return __s3local1;
  }
  __s1param0.init = function init(__s5param0) {
    __s1local0 = __s5param0;
    (function addListeners() {
      window.addEventListener(__s1local1.keydown, __s1local3);
      window.addEventListener(__s1local1.keypress, __s1local3);
      window.addEventListener(__s1local1.keyup, __s1local3);
    })();
  };
  __s1param0.convertEvent = convertEvent;
  function __s1local3(__s9param0) {
    var __s9local0 = convertEvent(__s9param0);
    __s1local0.dispatchEvent(__s9local0);
  }
})(exports.KeyboardEventDispatcher ||= {});
