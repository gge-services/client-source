Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleTroopSupportData() {}
  CastleTroopSupportData.parse_STI = function (__s5param0) {
    if (!__s5param0) {
      return null;
    }
    var __s5local0 = new __dep_export_CastleTroopSupportVO.CastleTroopSupportVO();
    __s5local0.fillFromParamObject(__s5param0);
    __s5local0.targetActionType = __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SENDTROUPS;
    return __s5local0;
  };
  CastleTroopSupportData.sendTroops = function (__s8param0, __s8param1, __s8param2, __s8param3, __s8param4, __s8param5, __s8param6) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCreateArmyTravelMovementVO.C2SCreateArmyTravelMovementVO(__s8param0.sourceArea.absAreaPos, __s8param0.targetArea.absAreaPos, __s8param0.getArmy(), __s8param0.waitTime, __s8param1, __s8param2, __s8param3 ? __s8param3.id : 0, __s8param4, __s8param5, __s8param6));
  };
  return CastleTroopSupportData;
}();
exports.CastleTroopSupportData = __s0local0;
var __dep_export_CastleTroopSupportVO = require("gge-module:export_CastleTroopSupportVO");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_C2SCreateArmyTravelMovementVO = require("gge-module:export_C2SCreateArmyTravelMovementVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
