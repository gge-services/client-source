Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SamuraiDaimyoDataXml = require("gge-module:export_SamuraiDaimyoDataXml");
var __s0local0 = function () {
  function AllianceActionListItemVO() {
    this.playerID = 0;
    this.action = 0;
  }
  AllianceActionListItemVO.prototype.parseActionListItem = function (__s5param0) {
    this.playerID = __dep_exact_f855840627e6e145.int(__s5param0.PID);
    this.playerName = __s5param0.PN;
    var __s5local0 = __dep_exact_f855840627e6e145.int(__s5param0.MA);
    this.bornDate = new Date();
    this.bornDate.setTime(this.bornDate.getTime() - __s5local0 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
    this.action = __dep_exact_f855840627e6e145.int(__s5param0.A);
    this.actionValues = __s5param0.AV;
  };
  AllianceActionListItemVO.prototype.getActionText = function () {
    var __s7local0 = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_alliance_chronic" + String(this.action));
    switch (this.action) {
      case __dep_exact_26a421b704832cff.AllianceConst.CHANGE_DIPLOMACY:
      case __dep_exact_26a421b704832cff.AllianceConst.REFUSE_DIPLOMACY:
      case __dep_exact_26a421b704832cff.AllianceConst.SEND_REQUEST_DIPLOMACY:
      case __dep_exact_26a421b704832cff.AllianceConst.GET_REQUEST_DIPLOMACY:
        var __s7local1 = this.actionValues[1];
        var __s7local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_allianceDiplomacy_status" + this.actionValues[2]);
        var __s7local3 = [new __dep_exact_92d05af59ee2ff30_2.TextVO(__s7local1), __s7local2];
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s7local0, __s7local3);
      case __dep_exact_26a421b704832cff.AllianceConst.UPGRADE:
        if (this.actionValues[0] == __dep_exact_26a421b704832cff.AllianceConst.TYPE_MEMBERS || this.actionValues[0] == __dep_exact_26a421b704832cff.AllianceConst.TYPE_FORGE_UPGRADE) {
          var __s7local4 = this.actionValues.slice(1);
          return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s7local0 + "_" + this.actionValues[0], __s7local4);
        }
        var __s7local5 = __dep_exact_92d05af59ee2ff30.Localize.text(AllianceActionListItemVO.getAllianceBuffTextId(this.actionValues[0]));
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s7local0 + "_1", [__s7local5]);
      case __dep_exact_26a421b704832cff.AllianceConst.ACTIVATE_TEMP_BUFF:
      case __dep_exact_26a421b704832cff.AllianceConst.EXTEND_TEMP_BUFF:
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s7local0 + "_" + this.actionValues[0]);
      case __dep_exact_26a421b704832cff.AllianceConst.CONQUERED_CAPITAL:
      case __dep_exact_26a421b704832cff.AllianceConst.CONQUERED_METROPOL:
      case __dep_exact_26a421b704832cff.AllianceConst.LOOSING_CAPITAL:
      case __dep_exact_26a421b704832cff.AllianceConst.LOOSING_METROPOL:
      case __dep_exact_26a421b704832cff.AllianceConst.LOST_CAPITAL:
      case __dep_exact_26a421b704832cff.AllianceConst.LOST_METROPOL:
      case __dep_exact_26a421b704832cff.AllianceConst.ABANDONED_CAPITAL:
      case __dep_exact_26a421b704832cff.AllianceConst.ABANDONED_METROPOL:
      case __dep_exact_26a421b704832cff.AllianceConst.MEMBER_INACTIVE_KICK:
      case __dep_exact_26a421b704832cff.AllianceConst.NEW_KINGS_NAME:
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s7local0, [new __dep_exact_92d05af59ee2ff30_2.TextVO(this.playerName)]);
      case __dep_exact_26a421b704832cff.AllianceConst.MEMBER_EARN_FAME:
      case __dep_exact_26a421b704832cff.AllianceConst.MEMBER_DONATE_RES:
      case __dep_exact_26a421b704832cff.AllianceConst.MEMBER_DONATE_C1:
      case __dep_exact_26a421b704832cff.AllianceConst.MEMBER_DONATE_C2:
        var __s7local6 = this.actionValues[0] == 1 ? "_singleDigit" : "";
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s7local0 + __s7local6, this.actionValues);
      case __dep_exact_26a421b704832cff.AllianceConst.CHANGE_NAME:
      case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_BATTLE_GROUND_MALUS_INCREASED:
      case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_BATTLE_GROUND_MALUS_RESET:
      case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_BATTLE_GROUND_OWNED_TOWER_DEFEATED:
      case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_BATTLE_GROUND_POINTS_GAINED:
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s7local0, [new __dep_exact_92d05af59ee2ff30_2.TextVO(this.actionValues[0])], false);
      case __dep_exact_26a421b704832cff.AllianceConst.METROPOLIS_OWNER_JOINED:
      case __dep_exact_26a421b704832cff.AllianceConst.CAPITAL_OWNER_JOINED:
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s7local0, [new __dep_exact_92d05af59ee2ff30_2.TextVO(this.playerName)]);
      case __dep_exact_26a421b704832cff.AllianceConst.DAIMYO_ALLIANCE_CASTLE_CONTRACT_COMPLETED:
        var __s7local7 = __dep_export_CastleModel.CastleModel.samuraiDaimyoData.xml.getContractsList(__dep_export_SamuraiDaimyoDataXml.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE).get(this.actionValues[0]);
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s7local0, [__s7local7.rank, __dep_export_CastleModel.CastleModel.samuraiDaimyoData.xml.getContractSeriesIndex(__dep_export_SamuraiDaimyoDataXml.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE, __s7local7.id) + 1, __dep_export_CastleModel.CastleModel.samuraiDaimyoData.xml.getNumberOfContractsForSeries(__dep_export_SamuraiDaimyoDataXml.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE, __s7local7.id)]);
      case __dep_exact_26a421b704832cff.AllianceConst.DAIMYO_ALLIANCE_TOWNSHIP_CONTRACT_COMPLETED:
        var __s7local8 = __dep_export_CastleModel.CastleModel.samuraiDaimyoData.xml.getContractsList(__dep_export_SamuraiDaimyoDataXml.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE).get(this.actionValues[0]);
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s7local0, [__s7local8.rank, __dep_export_CastleModel.CastleModel.samuraiDaimyoData.xml.getContractSeriesIndex(__dep_export_SamuraiDaimyoDataXml.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE, __s7local8.id) + 1, __dep_export_CastleModel.CastleModel.samuraiDaimyoData.xml.getNumberOfContractsForSeries(__dep_export_SamuraiDaimyoDataXml.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE, __s7local8.id)]);
    }
    return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s7local0, this.actionValues);
  };
  Object.defineProperty(AllianceActionListItemVO.prototype, "plainActionValues", {
    get: function () {
      var __s11local0 = new Array(this.actionValues.length);
      for (var __s11local1 = 0; __s11local1 < this.actionValues.length; __s11local1++) {
        __s11local0[__s11local1] = new __dep_exact_92d05af59ee2ff30_2.TextVO(this.actionValues[__s11local1]);
      }
      return __s11local0;
    },
    enumerable: true,
    configurable: true
  });
  AllianceActionListItemVO.getAllianceBuffTextId = function (__s15param0) {
    switch (__s15param0) {
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_DEFENSE_SPEED_BOOST:
        return "dialog_alliance_defenseBoost";
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_MARKET_SPEED_BOOST:
        return "dialog_alliance_marketBoost";
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_DEPOSIT_BONUS:
        return "dialog_alliance_depositBonus";
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_MARAUDER_BONUS:
        return "dialog_alliance_permanentBoost_lootCapacity";
      case __dep_exact_26a421b704832cff.AllianceConst.TYPE_ATTACK_SPEED_BOOST:
        return "dialog_alliance_movementBoost";
    }
    return "";
  };
  return AllianceActionListItemVO;
}();
exports.AllianceActionListItemVO = __s0local0;
