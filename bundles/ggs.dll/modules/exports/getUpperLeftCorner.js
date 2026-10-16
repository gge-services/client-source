Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUpperLeftCorner = function getUpperLeftCorner(__s1param0) {
  var __s1local0 = __s1param0.getBounds();
  if (!__s1local0) {
    throw new Error("Could not calculate bounds for target objects " + __s1param0);
  }
  var __s1local1 = __s1param0.localToGlobal(__s1local0.x, __s1local0.y);
  var __s1local2 = 1;
  var __s1local3 = 1;
  for (var __s1local4 = __s1param0; __s1local4.parent;) {
    __s1local2 *= __s1local4.scaleX || 1;
    __s1local3 *= __s1local4.scaleY || 1;
    __s1local4 = __s1local4.parent;
  }
  return {
    x: __s1local2 === -1 ? __s1local1.x - __s1local0.width : __s1local1.x,
    y: __s1local3 === -1 ? __s1local1.y - __s1local0.height : __s1local1.y
  };
};
