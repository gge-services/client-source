Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function PackageDownloadEvent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(PackageDownloadEvent, __s1param0);
  PackageDownloadEvent.prototype.getVars = function () {
    var __s5local0 = {
      gameId: this.gameId,
      networkId: this.networkId,
      instanceId: this.instanceID,
      playerId: this.playerID,
      var_1: this.downloadSize,
      var_2: this.downloadDuration,
      var_3: this.accountID,
      var_4: this.gameSwfLoadingTime,
      var_data: this.downloadURL + ";" + this.countryCode
    };
    return __s5local0;
  };
  return PackageDownloadEvent;
}(require("gge-module:class_BasicTrackingEvent").BasicTrackingEvent);
exports.PackageDownloadEvent = __s0local0;
