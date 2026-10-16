Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RIGHT_TO_LEFT_MARK = "‏";
exports.SPACE_CHAR = String.fromCharCode(32);
exports.NOBREAK_SPACE_CHAR = String.fromCharCode(160);
var __s0local0 = new RegExp("(" + exports.SPACE_CHAR + "|" + exports.NOBREAK_SPACE_CHAR + ")\\{0}$");
exports.reverseSinglePlaceholder = function (__s1param0) {
  var __s1local0 = function (__s3param0) {
    var __s3local0 = __s3param0.match(__s0local0);
    if (__s3local0) {
      return __s3local0.index;
    } else {
      return -1;
    }
  }(__s1param0);
  if (__s1local0 != -1) {
    var __s1local1 = __s1param0.slice(0, __s1local0);
    var __s1local2 = __s1param0.slice(__s1local0).split("");
    __s1local2.push(__s1local2.shift());
    return __s1local2.join("") + __s1local1;
  }
  return __s1param0;
};
exports.reversePunctuation = function (__s8param0) {
  var __s8local0;
  __s8local0 = exports.RIGHT_TO_LEFT_MARK + "$1" + exports.RIGHT_TO_LEFT_MARK;
  __s8param0 = __s8param0.replace(/([\!\.\+\-\•])/g, __s8local0);
  (function () {
    var __s10local0 = "$1" + exports.RIGHT_TO_LEFT_MARK + ")" + exports.RIGHT_TO_LEFT_MARK;
    __s8param0 = __s8param0.replace(/([^0-9a-zA-Z])\)/g, __s10local0);
  })();
  (function () {
    var __s12local0 = exports.RIGHT_TO_LEFT_MARK + "(" + exports.RIGHT_TO_LEFT_MARK;
    __s8param0 = __s8param0.replace(/\((?![0-9a-zA-Z])/g, __s12local0);
  })();
  (function () {
    var __s14local0 = "$1" + exports.RIGHT_TO_LEFT_MARK + ":" + exports.RIGHT_TO_LEFT_MARK;
    __s8param0 = __s8param0.replace(/([^"]):(?![{}])/g, __s14local0);
  })();
  (function () {
    var __s16local0 = "\"" + exports.RIGHT_TO_LEFT_MARK + "$1" + exports.RIGHT_TO_LEFT_MARK;
    __s8param0 = __s8param0.replace(/"([0-9])(?![0-9a-zA-Z])/g, __s16local0);
  })();
  return __s8param0;
};
