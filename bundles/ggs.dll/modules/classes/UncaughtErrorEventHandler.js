Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function UncaughtErrorEventHandler() {}
  UncaughtErrorEventHandler.init = function (__s5param0, __s5param1 = false) {
    UncaughtErrorEventHandler._onlyLogUniqueErrors = __s5param1;
  };
  UncaughtErrorEventHandler.uncaughtErrorHandler = function (__s7param0) {};
  UncaughtErrorEventHandler.errorLog = [];
  return UncaughtErrorEventHandler;
}();
exports.UncaughtErrorEventHandler = __s0local0;
