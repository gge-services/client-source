Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function BasicFirstSessionTrackingCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicFirstSessionTrackingCommand, __s1param0);
  Object.defineProperty(BasicFirstSessionTrackingCommand.prototype, "commandIsAllowed", {
    get: function () {
      return this.env.doUserTunnelTracking && !this.env.isLocal;
    },
    enumerable: true,
    configurable: true
  });
  return BasicFirstSessionTrackingCommand;
}(require("gge-module:class_BasicTrackingCommand").BasicTrackingCommand);
exports.BasicFirstSessionTrackingCommand = __s0local0;
