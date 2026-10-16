Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ARE_WallStatus_Component = require("gge-module:export_ARE_WallStatus_Component");
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __s0local0 = function () {
  function AttackDialogPlayerInfoRaidBossStats() {}
  AttackDialogPlayerInfoRaidBossStats.prototype.init = function (__s5param0) {
    this._panelDisp = __s5param0;
    if (this.attackInfoVO.targetArea.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ARE_PORTAL) {
      if (this._panelDisp) {
        this.show();
      }
    } else if (this._panelDisp) {
      this.hide();
    }
  };
  AttackDialogPlayerInfoRaidBossStats.prototype.hide = function () {
    this._panelDisp.visible = false;
    if (this.wallStats) {
      this.wallStats.hide();
    }
  };
  AttackDialogPlayerInfoRaidBossStats.prototype.show = function () {
    this._panelDisp.visible = true;
    if (this.currentRaidBossInfo) {
      this.wallStats ||= new __dep_export_ARE_WallStatus_Component.ARE_WallStatus_Component(this._panelDisp, false, true);
      this.wallStats.show();
      this._panelDisp.mc_healthBar.mc_bar.scaleX = __dep_exact_9e901e8e2483a22f.MathBase.clamp(this.currentRaidBossInfo.raidBossHealth / 100, 0, 1);
      var __s13local0 = this.currentRaidBossInfo.getCurrentXMLBossLevelDataVO();
      var __s13local1 = __s13local0 ? __s13local0.stages : [];
      for (var __s13local2 = 0; __s13local2 <= 9; __s13local2++) {
        var __s13local3 = this._panelDisp.mc_healthBar["stage_" + __s13local2];
        if (__s13local3) {
          __s13local3.visible = __s13local2 < __s13local1.length;
          if (__s13local3.visible) {
            __s13local3.x = this._panelDisp.mc_healthBar.healthbar_total.x + this._panelDisp.mc_healthBar.healthbar_total.width * (__s13local1[__s13local2].health / 100);
          }
        }
      }
    }
  };
  Object.defineProperty(AttackDialogPlayerInfoRaidBossStats.prototype, "attackInfoVO", {
    get: function () {
      return __dep_export_AttackDialogController.AttackDialogController.getInstance().attackVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogPlayerInfoRaidBossStats.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_RAID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogPlayerInfoRaidBossStats.prototype, "currentRaidBossInfo", {
    get: function () {
      if (this.eventVO) {
        return this.eventVO.raidBossServerDataVO;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  return AttackDialogPlayerInfoRaidBossStats;
}();
exports.AttackDialogPlayerInfoRaidBossStats = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
