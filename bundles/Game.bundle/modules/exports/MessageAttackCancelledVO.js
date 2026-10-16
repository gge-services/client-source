Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function MessageAttackCancelledVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageAttackCancelledVO, __s1param0);
  MessageAttackCancelledVO.prototype.parseSubject = function () {
    switch (this.subtypeAttackCancelled) {
      case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACK_ABORTED:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_noFight");
      case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACK_AUTO_RETREAT:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_message_retreatTroops_attacker_header");
      case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACK_AUTO_RETREAT_ENEMY:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_message_retreatTroops_defender_header");
      default:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_noFight");
    }
  };
  MessageAttackCancelledVO.prototype.parseSender = function () {
    if (this.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("allianceTower_placeholder_Maya", [this.areaName]);
    } else {
      return __s1param0.prototype.parseSender.call(this);
    }
  };
  return MessageAttackCancelledVO;
}(require("gge-module:export_MessageCancelledVO").MessageCancelledVO);
exports.MessageAttackCancelledVO = __s0local0;
