Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleTieredPrimeDayRewardDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleTieredPrimeDayRewardDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTieredPrimeDayRewardDialog, __s1param0);
  CastleTieredPrimeDayRewardDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    this.initBasicButtons(this.dialogButtons);
    this.initText();
    this.setupRewardBox();
    this.displayRewards();
  };
  CastleTieredPrimeDayRewardDialog.prototype.hideLoaded = function (__s7param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s7param0);
  };
  CastleTieredPrimeDayRewardDialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    switch (__s9param0.target) {
      case this.dialogDisp.btn_ok:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleTieredPrimeDayRewardDialog.prototype.initText = function () {
    var __s12local0 = 0;
    var __s12local1 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_TIERED_PRIME_DAY), "TieredPaymentrewardEventVO");
    if (__s12local1 && __s12local1.getBoughtCount(__s12local1.nextRewardIndex) < __s12local1.maxBuyCount) {
      var __s12local2 = __dep_exact_f855840627e6e145.int(__s12local1.c2BoughtInCurrentCycle);
      __s12local0 = __dep_exact_f855840627e6e145.int(__s12local1.rewards[__s12local1.nextRewardIndex].c2ForReward - __s12local2);
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_primeday_rewardPopup_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_primeday_rewardPopup_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_timesLeft, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_primeday_rewardPopup_nextReward", [__s12local0]));
    this.dialogDisp.txt_timesLeft.visible = __s12local0 > 0;
  };
  CastleTieredPrimeDayRewardDialog.prototype.setupRewardBox = function () {
    switch (this.props.rewards.length) {
      case 2:
        this.dialogDisp.mc_rewards.gotoAndStop("small");
        this._activeRewardsMC = this.dialogDisp.mc_rewards.mc_rewardContainer2;
        break;
      case 4:
        this.dialogDisp.mc_rewards.gotoAndStop("medium");
        this._activeRewardsMC = this.dialogDisp.mc_rewards.mc_rewardContainer4;
        break;
      case 6:
        this.dialogDisp.mc_rewards.gotoAndStop("big");
        this._activeRewardsMC = this.dialogDisp.mc_rewards.mc_rewardContainer6;
        break;
      default:
        throw new Error("CastleTieredPrimeDayRewardBoxVE.setupRewardBoxes() received an amount of rewards that are not supported");
    }
  };
  CastleTieredPrimeDayRewardDialog.prototype.displayRewards = function () {
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this._activeRewardsMC, "mc_item").addItemMcs("mc_item").addInfoBtns("parent.btn_info"), this.props.rewards, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local0(CastleTieredPrimeDayRewardDialog.REWARD_ICON_WIDTH, CastleTieredPrimeDayRewardDialog.REWARD_ICON_HEIGHT)));
  };
  Object.defineProperty(CastleTieredPrimeDayRewardDialog.prototype, "dialogButtons", {
    get: function () {
      return [this.dialogDisp.btn_close, this.dialogDisp.btn_ok];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTieredPrimeDayRewardDialog.prototype, "props", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTieredPrimeDayRewardDialog.__initialize_static_members = function () {
    CastleTieredPrimeDayRewardDialog.NAME = "CastleTieredPrimeDayReward";
    CastleTieredPrimeDayRewardDialog.REWARD_ICON_WIDTH = 57;
    CastleTieredPrimeDayRewardDialog.REWARD_ICON_HEIGHT = 50;
  };
  return CastleTieredPrimeDayRewardDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleTieredPrimeDayRewardDialog = __s0local1;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
