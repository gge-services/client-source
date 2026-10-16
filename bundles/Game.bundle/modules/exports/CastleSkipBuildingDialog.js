Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_C2SIsoFastCompleteObjectVO = require("gge-module:export_C2SIsoFastCompleteObjectVO");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = function (__s1param0) {
  function CastleSkipBuildingDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleSkipBuildingDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSkipBuildingDialog, __s1param0);
  CastleSkipBuildingDialog.prototype.initLoaded = function (__s5param0 = null) {
    this.initBasicButtons([this.dialogDisp.btnClose, this.dialogDisp.btnMinuteSkip, this.dialogDisp.btnFullSkip]);
    this.textFieldManager.registerTextField(this.dialogDisp.tfTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("instandBuild_skipBuilding_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.tfCopy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("instandBuild_skipBuilding_text"));
    this.textRemainingTime = this.textFieldManager.registerTextField(this.dialogDisp.resttime_mask.tfRemainingTime, new __dep_exact_92d05af59ee2ff30_2.TextVO("-"));
    this.dialogDisp.resttime_mask.tfRemainingTime.mouseEnabled = false;
    this.dialogDisp.buildingHolder.mouseChildren = false;
    this.dialogDisp.btnFullSkip.gotoAndStop(CastleSkipBuildingDialog.FRAME_RUBYSKIP);
    this.dialogDisp.btnMinuteSkip.toolTipText = "timeSkipButton_tooltip";
    __s1param0.prototype.initLoaded.call(this);
  };
  CastleSkipBuildingDialog.prototype.onProgress = function (__s7param0) {
    var __s7local0 = this.basicBuilding.buildingVO ? __dep_exact_f855840627e6e145.int(this.basicBuilding.buildingVO.getTimeLeftForBuilding()) : 0;
    var __s7local1 = __dep_export_CastleModel.CastleModel.specialEventData.getSkipCosts(this.basicBuilding, __dep_export_CastleModel.CastleModel.skipDiscountData.getBoostedSkipDiscount());
    this.textRemainingTime.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.getShortTimeStringBySeconds(__s7local0);
    this.dialogDisp.resttime_mask.buildingProgress.scaleX = this.basicBuilding.buildingVO ? this.basicBuilding.buildingVO.getPercentCompletedForBuilding() : 1;
    this.textFieldManager.registerTextField(this.dialogDisp.tfDesc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("instantBuild_skipBuilding_text_v2", [__s7local1]));
    this.updateSkipButton(__s7local1);
  };
  CastleSkipBuildingDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    var __s9local0;
    var __s9local1 = __dep_export_CastleModel.CastleModel.areaData.activeConstructionList.getSlotByArrayPos(0);
    if (__s9local1.isFree) {
      __dep_export_CastleModel.CastleModel.areaData.activeConstructionList.setQueuedBuildingConstructionCommand(this.dialogProperties.buildingConstructionCommandVO, this.dialogProperties.wodID);
      this.hide();
      return;
    }
    this.basicBuilding = __dep_export_Iso.Iso.renderer.objects.provider.getObjectById(__s9local1.objectId);
    if (this.basicBuilding) {
      __s9local0 = CastleSkipBuildingDialog.getBuildingVOToShow(this.basicBuilding);
      __dep_export_WodPicHelper.WodPicHelper.addWodPic(__s9local0, this.dialogDisp.buildingHolder, CastleSkipBuildingDialog.TARGET_MC_SIZE, CastleSkipBuildingDialog.TARGET_MC_SIZE);
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s9local0, "DecoBuildingVO")) {
        this.dialogDisp.buildingHolder.toolTipText = {
          t: "questCondition_BuildBuildings",
          p: [__s9local0.getNameString()]
        };
      } else {
        this.dialogDisp.buildingHolder.toolTipText = {
          t: "building_with_level",
          p: [__s9local0.getNameString(), __s9local0.level]
        };
      }
      if (this.basicBuilding.vo) {
        this.basicBuilding.vo.addEventListener(__dep_export_IsoEvent.IsoEvent.ON_BUILDING_BUILD_PROGRESS, this.bindFunction(this.onProgress));
      }
    }
    this.dialogDisp.resttime_mask.mouseChildren = false;
    this.dialogDisp.resttime_mask.toolTipText = "resttime";
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_CONSTRUCTION_LIST_CHANGED, this.bindFunction(this.onConstructionCompleted));
  };
  CastleSkipBuildingDialog.prototype.updateSkipButton = function (__s16param0) {
    if (__s16param0 == 0) {
      this.dialogDisp.btnFullSkip.gotoAndStop(CastleSkipBuildingDialog.FRAME_FREESKIP);
      this.dialogDisp.btnFullSkip.toolTipText = "freeSkipButton_tooltip";
    } else if (__dep_export_CastleModel.CastleModel.skipDiscountData.hasBoostedSkipDiscount()) {
      this.dialogDisp.btnFullSkip.gotoAndStop(CastleSkipBuildingDialog.FRAME_DISCOUNTEDSKIP);
      var __s16local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.skipDiscountData.getBoostedSkipDiscountTime());
      var __s16local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.skipDiscountData.getBoostedSkipDiscount());
      var __s16local2 = __dep_exact_92d05af59ee2ff30.Localize.text("fullSkipButton_tooltip", [__s16param0]) + "\n";
      if (__s16local0 >= __dep_export_ClientConstTime.ClientConstTime.HOURES_2_SEC) {
        if (__dep_export_ClientConstTime.ClientConstTime.isOneHour(__s16local0)) {
          __s16local2 += __dep_exact_92d05af59ee2ff30.Localize.text("dialog_timeSkip_discountedFullSkip_tooltipHours_singular", [new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [__s16local1])]);
        } else {
          __s16local2 += __dep_exact_92d05af59ee2ff30.Localize.text("dialog_timeSkip_discountedFullSkip_tooltipHours_plural", [new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [__s16local1]), (__s16local0 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_HOURES).toFixed(1)]);
        }
      } else if (__dep_export_ClientConstTime.ClientConstTime.isOneMinute(__s16local0)) {
        __s16local2 += __dep_exact_92d05af59ee2ff30.Localize.text("dialog_timeSkip_discountedFullSkip_tooltipHours_singular", [new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [__s16local1])]);
      } else {
        __s16local2 += __dep_exact_92d05af59ee2ff30.Localize.text("dialog_timeSkip_discountedFullSkip_tooltipMinutes_plural", [new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [__s16local1]), (__s16local0 / __dep_export_ClientConstTime.ClientConstTime.MINUTES_2_SEC).toFixed(0)]);
      }
      this.dialogDisp.btnFullSkip.toolTipText = __s16local2;
    } else {
      this.dialogDisp.btnFullSkip.gotoAndStop(CastleSkipBuildingDialog.FRAME_RUBYSKIP);
      this.dialogDisp.btnFullSkip.toolTipText = {
        t: "fullSkipButton_tooltip",
        p: [__s16param0]
      };
    }
  };
  CastleSkipBuildingDialog.getBuildingVOToShow = function (__s26param0) {
    var __s26local0;
    switch (__s26param0.buildingVO.buildingState) {
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_STOPPED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_COMPLETED:
        __s26local0 = __s26param0.buildingVO.getUpgradeVO();
        break;
      default:
        __s26local0 = __s26param0.buildingVO;
    }
    return __s26local0;
  };
  CastleSkipBuildingDialog.prototype.onConstructionCompleted = function (__s29param0) {
    if (__dep_export_CastleModel.CastleModel.areaData.activeConstructionList.hasFreeSlots()) {
      __dep_export_CastleModel.CastleModel.areaData.activeConstructionList.setQueuedBuildingConstructionCommand(this.dialogProperties.buildingConstructionCommandVO, this.dialogProperties.wodID);
      this.hide();
    }
  };
  CastleSkipBuildingDialog.prototype.hideLoaded = function (__s32param0 = null) {
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.buildingHolder);
    if (this.basicBuilding && this.basicBuilding.disp) {
      if (this.basicBuilding.vo) {
        this.basicBuilding.vo.removeEventListener(__dep_export_IsoEvent.IsoEvent.ON_BUILDING_BUILD_PROGRESS, this.bindFunction(this.onProgress));
      }
      this.basicBuilding = null;
    }
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_CONSTRUCTION_LIST_CHANGED, this.bindFunction(this.onConstructionCompleted));
    __s1param0.prototype.hideLoaded.call(this);
  };
  CastleSkipBuildingDialog.prototype.onClick = function (__s36param0) {
    switch (__s36param0.target) {
      case this.dialogDisp.btnClose:
        this.hide();
        break;
      case this.dialogDisp.btnFullSkip:
        if (this.basicBuilding) {
          if (this.basicBuilding.buildingVO && __dep_export_CastleModel.CastleModel.currencyData.c2Amount >= __dep_export_CastleModel.CastleModel.specialEventData.getSkipCosts(this.basicBuilding, __dep_export_CastleModel.CastleModel.skipDiscountData.getBoostedSkipDiscount())) {
            __dep_export_CastleModel.CastleModel.areaData.activeConstructionList.setQueuedBuildingConstructionCommand(this.dialogProperties.buildingConstructionCommandVO, this.dialogProperties.wodID);
          }
          if (this.basicBuilding.vo) {
            __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SIsoFastCompleteObjectVO.C2SIsoFastCompleteObjectVO(this.basicBuilding.vo.objectId, __dep_export_CastleModel.CastleModel.specialEventData.hasSkipForFree(this.basicBuilding) ? 1 : 0));
          }
        }
        this.hide();
        break;
      case this.dialogDisp.btnMinuteSkip:
        this.minuteSkip();
    }
  };
  CastleSkipBuildingDialog.prototype.minuteSkip = function () {
    var __s42local0 = __dep_export_CastleModel.CastleModel.areaData.activeConstructionList.getSlotByArrayPos(0);
    __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleMinuteSkipDialog.CastleMinuteSkipDialog, new __dep_export_BuildingMinuteSkipProperties.BuildingMinuteSkipProperties(__s42local0.objectId));
  };
  Object.defineProperty(CastleSkipBuildingDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSkipBuildingDialog.__initialize_static_members = function () {
    CastleSkipBuildingDialog.NAME = "CastleSkipBuilding";
    CastleSkipBuildingDialog.FRAME_RUBYSKIP = 1;
    CastleSkipBuildingDialog.FRAME_DISCOUNTEDSKIP = 2;
    CastleSkipBuildingDialog.FRAME_FREESKIP = 3;
    CastleSkipBuildingDialog.TARGET_MC_SIZE = 100;
  };
  return CastleSkipBuildingDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleSkipBuildingDialog = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CastleMinuteSkipDialog = require("gge-module:export_CastleMinuteSkipDialog");
var __dep_export_BuildingMinuteSkipProperties = require("gge-module:export_BuildingMinuteSkipProperties");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
