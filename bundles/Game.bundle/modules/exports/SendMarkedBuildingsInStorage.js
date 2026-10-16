Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_C2SMarkBuildingInStorageVO = require("gge-module:export_C2SMarkBuildingInStorageVO");
var __s0local0 = function (__s1param0) {
  function SendMarkedBuildingsInStorage() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SendMarkedBuildingsInStorage, __s1param0);
  SendMarkedBuildingsInStorage.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __dep_export_CastleModel.CastleModel.decoStorage.getCurrentStorage();
    if (!(__s5local0.getNewAmount() <= 0)) {
      for (var __s5local1 = 0; __s5local1 < __s5local0.storageIDs.length; __s5local1++) {
        var __s5local2 = __s5local0.storageIDs[__s5local1];
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SMarkBuildingInStorageVO.C2SMarkBuildingInStorageVO(__s5local2));
      }
      __s5local0.markAllDecosAsSeen();
    }
  };
  return SendMarkedBuildingsInStorage;
}(__dep_exact_9e901e8e2483a22f.SimpleCommand);
exports.SendMarkedBuildingsInStorage = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
