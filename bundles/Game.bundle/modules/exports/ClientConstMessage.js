Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ClientConstMessage() {}
  ClientConstMessage.isValidText = function (__s5param0) {
    if (!__s5param0 || __s5param0 == "") {
      return __dep_exact_f855840627e6e145.int(ClientConstMessage.TEXT_INVALID_MISSING_TEXT);
    }
    var __s5local0 = 0;
    for (var __s5local1 = __dep_exact_f855840627e6e145.int(__s5param0.length), __s5local2 = 0; __s5local2 < __s5local1; __s5local2++) {
      if (__s5param0.substr(__s5local2, 1).match(ClientConstMessage.EMPTY_PATTERN)) {
        __s5local0++;
      }
    }
    if (__s5local1 == __s5local0) {
      return __dep_exact_f855840627e6e145.int(ClientConstMessage.TEXT_INVALID_MISSING_TEXT);
    } else if (__s5local1 - __s5local0 < ClientConstMessage.MINIMUM_LENGTH) {
      return __dep_exact_f855840627e6e145.int(ClientConstMessage.TEXT_INVALID_TEXT_TOO_SHORT);
    } else {
      return __dep_exact_f855840627e6e145.int(ClientConstMessage.TEXT_VALID);
    }
  };
  ClientConstMessage.__initialize_static_members = function () {
    ClientConstMessage.EMPTY_PATTERN = /\s+/;
    ClientConstMessage.DEFAULT_TEXT_LIMIT_COLOR = 15388850;
    ClientConstMessage.MINIMUM_LENGTH = 3;
    ClientConstMessage.TEXT_INVALID_MISSING_TEXT = 0;
    ClientConstMessage.TEXT_VALID = 1;
  };
  ClientConstMessage.TEXT_INVALID_TEXT_TOO_SHORT = -1;
  return ClientConstMessage;
}();
exports.ClientConstMessage = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
__s0local0.__initialize_static_members();
