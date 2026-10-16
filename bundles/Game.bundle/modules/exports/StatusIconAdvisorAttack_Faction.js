Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_AdvisorAttackHelper = require("gge-module:export_AdvisorAttackHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function StatusIconAdvisorAttack_Faction() {
    return __s1param0.call(this, "Btn_AttackAdvisor_Faction") || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconAdvisorAttack_Faction, __s1param0);
  Object.defineProperty(StatusIconAdvisorAttack_Faction.prototype, "availableEventAdvisorType", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION)) {
        return __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getAdvisorTypeByEventID(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION);
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconAdvisorAttack_Faction.prototype, "eventVO", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION)) {
        return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconAdvisorAttack_Faction.prototype, "advisorType", {
    get: function () {
      return __dep_exact_26a421b704832cff.AttackAdvisorConst.ADVISOR_TYPE_BERIMOND;
    },
    enumerable: true,
    configurable: true
  });
  StatusIconAdvisorAttack_Faction.prototype.onClick = function () {
    var __s15local0 = this.eventVO;
    if (__s15local0 && __s15local0.isSpectator) {
      __s15local0.openDialog();
    } else {
      __s1param0.prototype.onClick.call(this);
    }
  };
  return StatusIconAdvisorAttack_Faction;
}(require("gge-module:export_AStatusIconAdvisorAttack").AStatusIconAdvisorAttack);
exports.StatusIconAdvisorAttack_Faction = __s0local0;
