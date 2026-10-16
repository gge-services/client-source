Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ResourceWaitComponent(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._boosted = false;
    __s3local0._resourceAmountNeeded = 0;
    __s3local0._resourceProduction = 0;
    __s3local0._skipEnabled = false;
    __s3local0.startTime = 0;
    __s3local0.disp = __s3param0;
    __s3local0.itxt_time = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.disp.mc_time_res.txt_value, new __dep_exact_92d05af59ee2ff30_2.TextVO("-"));
    __s3local0.itxt_resource = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.disp.mc_res.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    __s3local0.disp.visible = false;
    __s3local0.disp.mc_time_res.toolTipText = "dialog_resourceWait_timeTillAvalible";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResourceWaitComponent, __s1param0);
  Object.defineProperty(ResourceWaitComponent.prototype, "boosterId", {
    get: function () {
      switch (this.resourceType) {
        case __dep_export_CollectableEnum.CollectableEnum.WOOD:
          return __dep_exact_26a421b704832cff.BoosterConst.OVERSEER_WOOD;
        case __dep_export_CollectableEnum.CollectableEnum.STONE:
          return __dep_exact_26a421b704832cff.BoosterConst.OVERSEER_STONE;
        case __dep_export_CollectableEnum.CollectableEnum.FOOD:
          return __dep_exact_26a421b704832cff.BoosterConst.OVERSEER_FOOD;
      }
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  ResourceWaitComponent.prototype.setResource = function (__s8param0, __s8param1, __s8param2, __s8param3) {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this._resourceType = __s8param0;
    this._boosted = false;
    this._resourceAmountNeeded = __s8param1;
    this._resourceProduction = __s8param2;
    this._skipEnabled = __s8param3;
    this.startTime = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer());
    this.disp.visible = !!this._resourceType;
    if (this._resourceType) {
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
      this.updateResource();
      this.updateTime();
    }
  };
  ResourceWaitComponent.prototype.setBoosted = function (__s11param0) {
    this._boosted = __s11param0;
    this.updateTime();
  };
  ResourceWaitComponent.prototype.onTimer = function (__s13param0 = null) {
    this.updateResourceAmount();
    this.updateTime();
  };
  ResourceWaitComponent.prototype.updateTime = function () {
    var __s15local0;
    var __s15local1 = Math.max(this._resourceAmountNeeded / this._resourceProduction * __dep_export_ClientConstTime.ClientConstTime.HOURES_2_SEC, 0);
    if (this._boosted && this.boosterActive) {
      __s15local1 /= (100 + __dep_exact_26a421b704832cff.BoosterConst.OVERSEER_BOOST) / 100;
    }
    __s15local0 = __s15local1 != Infinity ? (__s15local1 -= (__dep_export_CachedTimer.CachedTimer.getCachedTimer() - this.startTime) / 1000) < 0 ? "-" : __dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeToString(__s15local1, __dep_exact_9e901e8e2483a22f.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text) : __dep_exact_92d05af59ee2ff30.Localize.text("noProduction");
    this.itxt_time.color = this._boosted && this.boosterActive ? __dep_export_ClientConstColor.ClientConstColor.GENERIC_DARK_GREEN : __dep_export_ClientConstColor.ClientConstColor.GENERIC_BLACK;
    this.itxt_time.textContentVO.stringValue = __s15local0;
  };
  ResourceWaitComponent.prototype.updateResource = function () {
    this.disp.btn_skip_production.visible = false;
    __dep_export_CastleModel.CastleModel.boosterSaleData.handleMc(this.disp.btn_skip_production.mc_discount, this.boosterId);
    var __s18local0 = new __dep_export_CollectableRenderClips.CollectableRenderClips();
    __s18local0.addIconMc(this.disp.mc_res.mc_icon);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(__s18local0, __dep_export_CollectableHelper.CollectableHelper.createVO(this.resourceType), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON, new __s0local0(20, 20)));
    var __s18local1 = new this._resourceType.dataClass();
    this.disp.mc_res.toolTipText = __s18local1.getTooltipTextId();
    this.updateResourceAmount();
    if (this._resourceProduction > 0 && this._skipEnabled && __dep_export_CastleModel.CastleModel.boostData.getOverseer(this.resourceType)) {
      this.disp.btn_skip_production.visible = true;
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_skip_production, this.boosterActive);
    this.disp.btn_skip_production.toolTipText = this.boosterActive ? "" : "dialog_resourceWait_overseerActive_tooltip";
  };
  ResourceWaitComponent.prototype.updateResourceAmount = function () {
    var __s21local0 = __dep_exact_f855840627e6e145.int((__dep_export_CachedTimer.CachedTimer.getCachedTimer() - this.startTime) / 1000 / 60 / 60 * this._resourceProduction);
    this.itxt_resource.textContentVO.numberValue = Math.max(0, this._resourceAmountNeeded - __s21local0);
  };
  Object.defineProperty(ResourceWaitComponent.prototype, "boosterActive", {
    get: function () {
      var __s23local0 = __dep_export_CastleModel.CastleModel.boostData.getOverseer(this.resourceType);
      return !!__s23local0 && !__s23local0.isActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceWaitComponent.prototype, "resourceType", {
    get: function () {
      return this._resourceType;
    },
    enumerable: true,
    configurable: true
  });
  ResourceWaitComponent.prototype.onClickSkipProduction = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleResourceBoostDialog.CastleResourceBoostDialog);
  };
  return ResourceWaitComponent;
}(__dep_export_CastleComponent.CastleComponent);
exports.ResourceWaitComponent = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleResourceBoostDialog = require("gge-module:export_CastleResourceBoostDialog");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
