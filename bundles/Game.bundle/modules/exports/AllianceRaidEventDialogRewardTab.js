Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function AllianceRaidEventDialogRewardTab() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0._portalBossID = 0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceRaidEventDialogRewardTab, __s1param0);
  Object.defineProperty(AllianceRaidEventDialogRewardTab.prototype, "titleText", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  AllianceRaidEventDialogRewardTab.prototype.updatePosition = function (__s7param0, __s7param1) {};
  Object.defineProperty(AllianceRaidEventDialogRewardTab.prototype, "portalBossID", {
    get: function () {
      return this._portalBossID;
    },
    set: function (__s11param0) {
      this._portalBossID = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidEventDialogRewardTab.prototype, "isDisplayingActiveBoss", {
    get: function () {
      var __s13local0 = this.eventVO.raidBossServerDataVO;
      return __s13local0.hasActiveRaid && (this._portalBossID == 0 || this._portalBossID == __s13local0.raidBossID);
    },
    enumerable: true,
    configurable: true
  });
  AllianceRaidEventDialogRewardTab.prototype.getDisplayedBossVO = function () {
    if (this._portalBossID > 0) {
      return __dep_export_CastleModel.CastleModel.raidBossData.getRaidBossByID(this._portalBossID);
    } else {
      return this.eventVO.raidBossServerDataVO.getCurrentXMLBossDataVO();
    }
  };
  AllianceRaidEventDialogRewardTab.prototype.getDisplayedLevelVO = function (__s19param0) {
    if (!__s19param0) {
      return null;
    }
    if (this.isDisplayingActiveBoss) {
      return this.eventVO.raidBossServerDataVO.getCurrentXMLBossLevelDataVO();
    }
    var __s19local0 = this.eventVO.raidBossServerDataVO.getBossCardByID(this._portalBossID);
    var __s19local1 = __s19local0 ? __s19local0.unlockedLevel + 1 : 1;
    return __s19param0.getBossLevel(__dep_exact_9e901e8e2483a22f.MathBase.clamp(__s19local1, 1, __s19param0.maxLevel));
  };
  AllianceRaidEventDialogRewardTab.prototype.getDisplayedStageVO = function () {
    if (this.isDisplayingActiveBoss) {
      return this.eventVO.raidBossServerDataVO.getCurrentXMLBossStageDataVO();
    }
    var __s23local0 = this.getDisplayedLevelVO(this.getDisplayedBossVO());
    if (__s23local0 && __s23local0.stages.length > 0) {
      return __s23local0.stages[0];
    } else {
      return null;
    }
  };
  return AllianceRaidEventDialogRewardTab;
}(require("gge-module:export_AllianceRaidEventDialogSublayer").AllianceRaidEventDialogSublayer);
exports.AllianceRaidEventDialogRewardTab = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
