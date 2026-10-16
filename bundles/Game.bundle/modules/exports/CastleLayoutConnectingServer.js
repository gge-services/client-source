Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function CastleLayoutConnectingServer() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLayoutConnectingServer, __s1param0);
  CastleLayoutConnectingServer.prototype.setLayout = function (__s5param0, __s5param1) {
    if (__s5param1 != __dep_exact_9e901e8e2483a22f.BasicLayoutManager.STATE_CONNECT) {
      __s5param0.hideAllDialogs();
      __s5param0.hideAllPanels();
      __s5param0.hideAllAttackPanels();
      __s5param0.removeAllIngameUIComponents();
    }
  };
  return CastleLayoutConnectingServer;
}(require("gge-module:export_ACastleLayoutStrategy").ACastleLayoutStrategy);
exports.CastleLayoutConnectingServer = __s0local0;
