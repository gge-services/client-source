var __dep_export_INSPECT_MAX_BYTES = require("gge-module:export_INSPECT_MAX_BYTES");
var __s0local0 = __dep_export_INSPECT_MAX_BYTES.Buffer;
function copyProps(__s1param0, __s1param1) {
  for (var __s1local0 in __s1param0) {
    __s1param1[__s1local0] = __s1param0[__s1local0];
  }
}
function SafeBuffer(__s5param0, __s5param1, __s5param2) {
  return __s0local0(__s5param0, __s5param1, __s5param2);
}
if (__s0local0.from && __s0local0.alloc && __s0local0.allocUnsafe && __s0local0.allocUnsafeSlow) {
  module.exports = __dep_export_INSPECT_MAX_BYTES;
} else {
  copyProps(__dep_export_INSPECT_MAX_BYTES, exports);
  exports.Buffer = SafeBuffer;
}
copyProps(__s0local0, SafeBuffer);
SafeBuffer.from = function (__s9param0, __s9param1, __s9param2) {
  if (typeof __s9param0 == "number") {
    throw new TypeError("Argument must not be a number");
  }
  return __s0local0(__s9param0, __s9param1, __s9param2);
};
SafeBuffer.alloc = function (__s12param0, __s12param1, __s12param2) {
  if (typeof __s12param0 != "number") {
    throw new TypeError("Argument must be a number");
  }
  var __s12local0 = __s0local0(__s12param0);
  if (__s12param1 !== undefined) {
    if (typeof __s12param2 == "string") {
      __s12local0.fill(__s12param1, __s12param2);
    } else {
      __s12local0.fill(__s12param1);
    }
  } else {
    __s12local0.fill(0);
  }
  return __s12local0;
};
SafeBuffer.allocUnsafe = function (__s19param0) {
  if (typeof __s19param0 != "number") {
    throw new TypeError("Argument must be a number");
  }
  return __s0local0(__s19param0);
};
SafeBuffer.allocUnsafeSlow = function (__s22param0) {
  if (typeof __s22param0 != "number") {
    throw new TypeError("Argument must be a number");
  }
  return __dep_export_INSPECT_MAX_BYTES.SlowBuffer(__s22param0);
};
