Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AdvisorAttackOverviewCancelDialog = require("gge-module:export_AdvisorAttackOverviewCancelDialog");
var __dep_export_AdvisorAttackOverviewCancelDialogProperties = require("gge-module:export_AdvisorAttackOverviewCancelDialogProperties");
var __dep_export_CastleAskRereatDialogProperties = require("gge-module:export_CastleAskRereatDialogProperties");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_SubscriptionHelper = require("gge-module:export_SubscriptionHelper");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CastleMovementDetailsComponent(__s3param0) {
    var __s3local0 = this;
    __s3local0.shouldHideDistance = false;
    __s3local0.CASTLE_SIZE = new __s0local1(100, 70);
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).itxtDistance = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.componentMC.info_distance.txt_distance, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0, true, 1));
    __s3local0.itxtProgress = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.componentMC.txt_progress, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    __s3local0.itxtNameSourceCastle = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.componentMC.info_sourceCastle.txt_castleName, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    __s3local0.itxtNameSourceCastle.autoFitToBounds = true;
    __s3local0.itxtNameSourceCastle.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    __s3local0.itxtNameTargetCastle = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.componentMC.info_targetCastle.txt_castleName, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    __s3local0.itxtNameTargetCastle.autoFitToBounds = true;
    __s3local0.itxtNameTargetCastle.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMovementDetailsComponent, __s1param0);
  CastleMovementDetailsComponent.prototype.initComponent = function (__s5param0, __s5param1) {
    this._mapMovementVO = __s5param0;
    this._hideFunction = __s5param1;
    var __s5local0 = __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s5param0, "TreasureHuntMovementVO") ? __s5param0.tmapNode : null;
    this.initCastleInfo(this.componentMC.info_sourceCastle, this.itxtNameSourceCastle, this._mapMovementVO.sourceArea, __s5local0);
    this.initCastleInfo(this.componentMC.info_targetCastle, this.itxtNameTargetCastle, this._mapMovementVO.targetArea, __s5local0);
    this.itxtDistance.textContentVO.numberValue = __s5param0.distance;
    this.componentMC.info_distance.toolTipText = "distance";
    this.componentMC.btn_retreat.visible = __s5param0.canBeRetreated && !__s5param0.sourceArea.isUnderConquerControl;
    this.componentMC.btn_sendHome.visible = __s5param0.canBeSendHome;
    this.componentMC.btn_sendHome.toolTipText = "dialog_moveOverview_sendHome";
    this.disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this.componentMC.tooltipTravelTime.toolTipText = this._mapMovementVO.isStationed ? "dialog_postAttack_supportTime" : "travelTime";
    this.updateComponent();
  };
  CastleMovementDetailsComponent.prototype.updateComponent = function () {
    this.componentMC.mc_progressbar.scaleX = this._mapMovementVO.movementProgress;
    var __s7local0 = 0;
    if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(this._mapMovementVO, "SupportDefenceMapmovementVO") && this._mapMovementVO.movementProgress == 1) {
      __s7local0 = __dep_exact_f855840627e6e145.int(Math.max(this._mapMovementVO.getTimeUnitMovmentReachTargetInSeconds(), this._mapMovementVO.getTimeUntilWaitOverInSeconds()));
      this.correctProgressbarScaleForWaitTime();
    } else {
      __s7local0 = this._mapMovementVO.getTimeUnitMovmentReachTargetInSeconds();
    }
    this.itxtProgress.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.getTimeToString(__s7local0, __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text);
    if (this.componentMC.btn_retreat.visible) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.componentMC.btn_retreat, this._mapMovementVO.canBeRetreated && !this._mapMovementVO.tooLateToBeRetreated);
      if (this._mapMovementVO.canBeRetreated && !this._mapMovementVO.tooLateToBeRetreated) {
        this.componentMC.btn_retreat.toolTipText = "dialog_moveOverview_retreat";
      } else {
        this.componentMC.btn_retreat.toolTipText = "ringmenu_building_cantRetreat";
      }
    }
    this.componentMC.info_distance.visible = !this.shouldHideDistance;
    __dep_export_SubscriptionHelper.SubscriptionHelper.showSubscriptionStarToTextField(this.itxtProgress, this._mapMovementVO.isSubscriptionBuffed(), 25, new __s0local1(-10, 0));
  };
  CastleMovementDetailsComponent.prototype.correctProgressbarScaleForWaitTime = function () {
    var __s14local0 = __dep_exact_81dacdf05bd32292.castAs(this._mapMovementVO, "SupportDefenceMapmovementVO");
    if (__s14local0) {
      this.componentMC.mc_progressbar.scaleX = (__s14local0.getTotalWaitTimeInSeconds() - __s14local0.getTimeUntilWaitOverInSeconds()) / __s14local0.getTotalWaitTimeInSeconds();
    }
  };
  CastleMovementDetailsComponent.prototype.onClick = function (__s17param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s17param0.target)) {
      __s1param0.prototype.onClick.call(this, __s17param0);
      switch (__s17param0.target) {
        case this.componentMC.btn_sendHome:
        case this.componentMC.btn_retreat:
          if (this._mapMovementVO.advisorType > 0) {
            __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_AdvisorAttackOverviewCancelDialog.AdvisorAttackOverviewCancelDialog, new __dep_export_AdvisorAttackOverviewCancelDialogProperties.AdvisorAttackOverviewCancelDialogProperties([this._mapMovementVO], this.bindFunction(this._hideFunction)));
          } else {
            __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleAskRetreatDialog.CastleAskRetreatDialog, new __dep_export_CastleAskRereatDialogProperties.CastleAskRereatDialogProperties(this._mapMovementVO, this.bindFunction(this._hideFunction)));
          }
      }
    }
  };
  CastleMovementDetailsComponent.prototype.initCastleInfo = function (__s23param0, __s23param1, __s23param2, __s23param3 = null) {
    __s23param1.textContentVO.stringValue = __s23param2.areaNameStringShort;
    __s23param1.verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.TOP;
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s23param0.icon_castle);
    var __s23local0 = !!__s23param3 && __s23param3.isEndNode;
    __s23param0.icon_castle.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(__s23param2, this.CASTLE_SIZE, true, false, true, CastleMovementDetailsComponent.getJumpToTooltip(__s23param2, __s23local0), __s23param3));
  };
  CastleMovementDetailsComponent.getJumpToTooltip = function (__s25param0, __s25param1) {
    if (__s25param0.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_TREASURE_DUNGEON) {
      if (__s25param1) {
        return "dialog_treasureMap_TreasureTooltip";
      } else {
        return __s25param0.ownerInfo.playerName;
      }
    } else if (__s25param0.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_TREASURE_CAMP) {
      return "dialog_seasonEvent_2_Camp";
    } else if (__dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(__s25param0.kingdomID)) {
      return "dialog_jumpto_targetSelected";
    } else {
      return "dialog_kingdom_notYetAvailable";
    }
  };
  CastleMovementDetailsComponent.prototype.destroy = function () {
    this._mapMovementVO = null;
    __s1param0.prototype.destroy.call(this);
  };
  Object.defineProperty(CastleMovementDetailsComponent.prototype, "componentMC", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleMovementDetailsComponent.prototype.hideDistance = function (__s37param0) {
    this.shouldHideDistance = __s37param0;
  };
  return CastleMovementDetailsComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.CastleMovementDetailsComponent = __s0local2;
var __dep_export_CastleAskRetreatDialog = require("gge-module:export_CastleAskRetreatDialog");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
