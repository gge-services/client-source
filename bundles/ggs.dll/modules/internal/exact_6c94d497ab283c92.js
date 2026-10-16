Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.instanceOfClass = function instanceOfClass(__s1param0, __s1param1) {
  if (typeof __s1param0 === __s1param1.toLowerCase()) {
    return true;
  }
  if (__s1param0 === undefined || __s1param0 === null) {
    return false;
  }
  var __s1local0 = __s1param0.__proto__.constructor.__fname || __s1param0.__proto__.constructor.name;
  return __s1local0 === __s1param1 || __s1local0 !== "Object" && instanceOfClass(__s1param0.__proto__, __s1param1);
};
