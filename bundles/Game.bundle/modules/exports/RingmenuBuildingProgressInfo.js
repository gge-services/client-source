Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_SubscriptionHelper = require("gge-module:export_SubscriptionHelper");
var __s0local0 = function () {
  function RingmenuBuildingProgressInfo(__s3param0) {
    this._disp = __s3param0;
    this.itxt_time = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3param0.statusBar.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __s3param0.mc_textInfo.visible = false;
    __s3param0.txt_cost0.visible = false;
  }
  RingmenuBuildingProgressInfo.prototype.init = function (__s5param0) {
    this.targetBuilding = __s5param0;
  };
  RingmenuBuildingProgressInfo.prototype.update = function () {
    if (this.targetBuilding) {
      this._disp.visible = this.isBuildingInProgress() || this.isChargingMineBuilding() || this.isCollectingTaxKeepBuilding();
      if (this._disp.visible) {
        this._disp.statusBar.mc_icon.gotoAndStop(this.statusBarIconFrame);
        if (this.isCollectingTaxKeepBuilding()) {
          this.itxt_time.textContentVO.stringValue = __dep_export_CastleModel.CastleModel.taxData.taxInfoVO.taxAmountString;
          this.itxt_time.autoFitToBounds = true;
          this._disp.statusBar.progressbar.scaleX = this.targetBuilding.keepBuildingVO.taxCollectProgressAsFactor;
        } else if (this.isBuildingInProgress()) {
          this.itxt_time.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getShortTimeStringBySeconds(this.targetBuilding.buildingVO.getTimeLeftForBuilding());
          this.itxt_time.autoFitToBounds = true;
          this._disp.statusBar.progressbar.scaleX = this.targetBuilding.buildingVO.getPercentCompletedForBuilding();
          __dep_export_SubscriptionHelper.SubscriptionHelper.showSubscriptionStarToTextField(this.itxt_time, __dep_export_CastleModel.CastleModel.specialEventData.hasSkipForFree(this.targetBuilding) && __dep_export_CastleModel.CastleModel.subscriptionData.isEffectTypeActive(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_FREE_SKIP_BONUS), 0, null, false, 16246743);
        } else if (this.isChargingMineBuilding()) {
          this.itxt_time.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getShortTimeStringBySeconds(this.targetBuilding.mineBuildingVO.getTimeLeftForCollect());
          this.itxt_time.autoFitToBounds = true;
          this._disp.statusBar.progressbar.scaleX = this.targetBuilding.buildingVO.getPercentCompletedForBuilding();
        }
      }
    }
  };
  Object.defineProperty(RingmenuBuildingProgressInfo.prototype, "statusBarIconFrame", {
    get: function () {
      if (this.isChargingMineBuilding() || this.isCollectingTaxKeepBuilding()) {
        return 5;
      }
      switch (this.targetBuilding.buildingVO.buildingState) {
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
          return 3;
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_STOPPED:
          return 1;
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.REPAIR_IN_PROGRESS:
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.REPAIR_STOPPED:
          return 4;
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
        case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_STOPPED:
          return 2;
      }
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  RingmenuBuildingProgressInfo.prototype.isBuildingInProgress = function () {
    switch (this.targetBuilding.buildingVO.buildingState) {
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_COMPLETED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLED_COMPLETED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_COMPLETED:
        return false;
      default:
        return true;
    }
  };
  RingmenuBuildingProgressInfo.prototype.isChargingMineBuilding = function () {
    return !!__dep_exact_81dacdf05bd32292.instanceOfClass(this.targetBuilding.buildingVO, "AMineBuildingVO") && this.targetBuilding.buildingVO.isCharging;
  };
  RingmenuBuildingProgressInfo.prototype.isCollectingTaxKeepBuilding = function () {
    return !!__dep_exact_81dacdf05bd32292.instanceOfClass(this.targetBuilding, "KeepBuildingVE") && !!__dep_export_CastleModel.CastleModel.tutorialData.isTutorialFinished() && this.targetBuilding.keepBuildingVO.canCollectTax;
  };
  return RingmenuBuildingProgressInfo;
}();
exports.RingmenuBuildingProgressInfo = __s0local0;
