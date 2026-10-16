Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.int = function int(__s1param0) {
  if (typeof __s1param0 == "string" && function isHex(__s3param0) {
    return /^#[0-9A-F]{6}$/i.test(__s3param0);
  }(__s1param0)) {
    return parseInt(__s1param0.substring(1), 16);
  }
  var __s1local0 = Number(__s1param0);
  if (isNaN(__s1local0)) {
    return 0;
  } else {
    return Math.trunc(__s1local0);
  }
};
