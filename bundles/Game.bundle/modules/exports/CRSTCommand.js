Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_C2SGetCastleResourcesVO = require("gge-module:export_C2SGetCastleResourcesVO");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function CRSTCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CRSTCommand, __s1param0);
  Object.defineProperty(CRSTCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_CRAFTING_START;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  CRSTCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        __dep_export_CastleModel.CastleModel.craftingData.parseBuildingQueueData(__s9local0);
        if (__dep_export_CastleModel.CastleModel.areaData && __dep_export_CastleModel.CastleModel.areaData.activeArea && __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo && !__dep_export_CastleModel.CastleModel.craftingData.currentCastleVO.equalsOtherWMO(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.kingdomID)) {
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetCastleResourcesVO.C2SGetCastleResourcesVO(__dep_export_CastleModel.CastleModel.craftingData.currentCastleVO.objectId, __dep_export_CastleModel.CastleModel.craftingData.currentCastleVO.kingdomID));
        }
        break;
      case __dep_exact_26a421b704832cff.ERROR.NO_FREE_CONSTRUCTION_SLOT:
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return CRSTCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.CRSTCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
