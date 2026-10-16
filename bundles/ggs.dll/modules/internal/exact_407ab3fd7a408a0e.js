module.exports = function isBuffer(__s1param0) {
  return __s1param0 && typeof __s1param0 == "object" && typeof __s1param0.copy == "function" && typeof __s1param0.fill == "function" && typeof __s1param0.readUInt8 == "function";
};
