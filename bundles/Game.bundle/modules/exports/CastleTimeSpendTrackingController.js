Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTracking = require("gge-module:export_ClientConstTracking");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleKingdomEvent = require("gge-module:export_CastleKingdomEvent");
var __dep_export_IsoRenderStrategyEnum = require("gge-module:export_IsoRenderStrategyEnum");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_C2SClientSideTrackingVO = require("gge-module:export_C2SClientSideTrackingVO");
var __dep_export_CastleTimeSpendTrackingEnum = require("gge-module:export_CastleTimeSpendTrackingEnum");
var __s0local0 = function (__s1param0) {
  function CastleTimeSpendTrackingController() {
    var __s3local0 = this;
    __s3local0.trackingActivated = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).initialize();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTimeSpendTrackingController, __s1param0);
  CastleTimeSpendTrackingController.getInstance = function () {
    CastleTimeSpendTrackingController._instance ||= new CastleTimeSpendTrackingController();
    return CastleTimeSpendTrackingController._instance;
  };
  CastleTimeSpendTrackingController.prototype.initialize = function () {
    if (this.trackingActivated) {
      this.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.SHOW_DIALOG, this.bindFunction(this.onCastleLayoutManagerEventShowDialog));
      this.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.HIDE_DIALOG, this.bindFunction(this.onCastleLayoutManagerEventHideDialog));
      this.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE_TIME_TRACKING, this.bindFunction(this.onLayoutStateChanged));
      __dep_export_CastleModel.CastleModel.kingdomData.addEventListener(__dep_export_CastleKingdomEvent.CastleKingdomEvent.KINGDOM_SWITCHED, this.bindFunction(this.onCastleKingdomEventKingdomSwitched));
      this.controller.addEventListener(__dep_export_IsoEvent.IsoEvent.ON_RENDER_STRATEGY_CHANGED, this.bindFunction(this.onIsoRenderStrategyChanged));
    }
  };
  Object.defineProperty(CastleTimeSpendTrackingController.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleTimeSpendTrackingController.prototype.onLayoutStateChanged = function (__s12param0) {
    this.send(__dep_export_CastleTimeSpendTrackingEnum.CastleTimeSpendTrackingEnum.CHANGE_LAYOUT);
  };
  CastleTimeSpendTrackingController.prototype.onIsoRenderStrategyChanged = function (__s14param0) {
    if (__dep_export_Iso.Iso.renderer.strategies.hasModeChanged(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILD_MODE)) {
      var __s14local0 = CastleTimeSpendTrackingController.getCurrentState();
      if (__s14local0 == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO && __dep_export_Iso.Iso.renderer.strategies.prevStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILD_MODE)) {
        __s14local0 = 11;
      }
      this.sendCustomInfo(__dep_export_CastleTimeSpendTrackingEnum.CastleTimeSpendTrackingEnum.CHANGE_LAYOUT, CastleTimeSpendTrackingController.getAreaType(), CastleTimeSpendTrackingController.getKingdomId(), null, __s14local0, new Date().getTime(), this.getUserLevel());
    }
  };
  CastleTimeSpendTrackingController.prototype.onCastleLayoutManagerEventHideDialog = function (__s18param0) {
    this.send(__dep_export_CastleTimeSpendTrackingEnum.CastleTimeSpendTrackingEnum.REMOVE_A_DIALOG, __s18param0.params[0]);
  };
  CastleTimeSpendTrackingController.prototype.onCastleLayoutManagerEventShowDialog = function (__s20param0) {
    this.send(__dep_export_CastleTimeSpendTrackingEnum.CastleTimeSpendTrackingEnum.CHANGE_A_DIALOG, __s20param0.params[0]);
  };
  CastleTimeSpendTrackingController.prototype.onCastleKingdomEventKingdomSwitched = function (__s22param0) {
    this.send(__dep_export_CastleTimeSpendTrackingEnum.CastleTimeSpendTrackingEnum.CHANGE_KINGDOM);
  };
  CastleTimeSpendTrackingController.prototype.sendCustomInfo = function (__s24param0, __s24param1, __s24param2, __s24param3, __s24param4, __s24param5, __s24param6) {
    if (CastleTimeSpendTrackingController.sendUserTrackingData()) {
      var __s24local0 = {
        [__dep_exact_26a421b704832cff.CommKeys.ACTION]: __s24param0.type,
        [__dep_exact_26a421b704832cff.CommKeys.AREA_TYPE]: __s24param1,
        [__dep_exact_26a421b704832cff.CommKeys.KINGDOM_ID]: __s24param2,
        [__dep_exact_26a421b704832cff.CommKeys.STATE_LAYOUT]: __s24param4,
        [__dep_exact_26a421b704832cff.CommKeys.TIMESTAMP]: __s24param5,
        [__dep_exact_26a421b704832cff.CommKeys.LEVEL]: __s24param6
      };
      if (__s24param3) {
        __s24local0[__dep_exact_26a421b704832cff.CommKeys.DIALOG_NAME] = __s24param3;
      }
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SClientSideTrackingVO.C2SClientSideTrackingVO(__dep_export_ClientConstTracking.ClientConstTracking.INGAME_TIME_SPENT_CLIENT_TRACKING, __s24local0));
    }
  };
  CastleTimeSpendTrackingController.sendUserTrackingData = function () {
    return !!__dep_export_CastleModel.CastleModel.userData && __dep_export_CastleModel.CastleModel.userData.userID % 99 == 0;
  };
  CastleTimeSpendTrackingController.prototype.send = function (__s30param0, __s30param1 = null) {
    this.sendCustomInfo(__s30param0, CastleTimeSpendTrackingController.getAreaType(), CastleTimeSpendTrackingController.getKingdomId(), __s30param1 ? CastleTimeSpendTrackingController.getDialogName(__s30param1) : null, CastleTimeSpendTrackingController.getCurrentState(), new Date().getTime(), this.getUserLevel());
  };
  CastleTimeSpendTrackingController.prototype.getUserLevel = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.userData ? __dep_export_CastleModel.CastleModel.userData.level : -1);
  };
  CastleTimeSpendTrackingController.getDialogName = function (__s34param0) {
    if (typeof __s34param0 == "function") {
      return String(__s34param0.toString().split(" ")[1]).replace("]", "");
    } else {
      return __s34param0.toString();
    }
  };
  CastleTimeSpendTrackingController.getCurrentState = function () {
    try {
      return __dep_exact_f855840627e6e145.int(__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().currentState);
    } catch (__s41local0) {
      return CastleTimeSpendTrackingController.ERROR_DEFAULT_INT;
    }
  };
  CastleTimeSpendTrackingController.getKingdomId = function () {
    try {
      return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
    } catch (__s46local0) {
      return CastleTimeSpendTrackingController.ERROR_DEFAULT_INT;
    }
  };
  CastleTimeSpendTrackingController.getAreaType = function () {
    try {
      return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel.areaType);
    } catch (__s51local0) {
      return CastleTimeSpendTrackingController.ERROR_DEFAULT_INT;
    }
  };
  CastleTimeSpendTrackingController.ERROR_DEFAULT_INT = -1;
  return CastleTimeSpendTrackingController;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.CastleTimeSpendTrackingController = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
