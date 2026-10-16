Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __s0local0 = function (__s1param0) {
  function CastleBookmarkRewardDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleBookmarkRewardDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBookmarkRewardDialog, __s1param0);
  Object.defineProperty(CastleBookmarkRewardDialog.prototype, "customProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleBookmarkRewardDialog.prototype.initLoaded = function (__s7param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s7param0);
    this.initBasicButtons([this.dialogDisp.btn_close]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_bookmarkIncentive_header"));
  };
  CastleBookmarkRewardDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    this.updateRewards();
    this.dialogDisp.mc_reward_today.toolTipText = "dialog_bookmarkIncentive_currentReward";
    this.dialogDisp.mc_reward_tomorrow.toolTipText = "dialog_bookmarkIncentive_nextReward";
    this.dialogDisp.mc_reward_yesterday.toolTipText = "dialog_bookmarkIncentive_previousReward";
    var __s9local0 = CastleBookmarkRewardDialog.MAX_INDEX > this.customProperties.dayIndex ? "dialog_bookmarkIncentive_copy" : "dialog_bookmarkIncentive_copyFinal";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s9local0));
  };
  CastleBookmarkRewardDialog.prototype.updateRewards = function () {
    this.destroyCollectableRenderList();
    this.setReward(this.customProperties.dayIndex, this.dialogDisp.mc_reward_today);
    this.setReward(this.customProperties.dayIndex + 1, this.dialogDisp.mc_reward_tomorrow);
    this.setReward(this.customProperties.dayIndex - 1, this.dialogDisp.mc_reward_yesterday);
    this.dialogDisp.mc_left_arc.visible = this.customProperties.dayIndex > 0;
    this.dialogDisp.mc_right_arc.visible = this.customProperties.dayIndex < 13;
  };
  CastleBookmarkRewardDialog.prototype.setReward = function (__s13param0, __s13param1) {
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(new __dep_export_CollectableRenderClips.CollectableRenderClips(__s13param1), this.createRewardItem(__s13param0), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED)).destroy();
    this.textFieldManager.registerTextField(__s13param1.txt_day, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("countingDays_day" + (__s13param0 + 1)));
  };
  CastleBookmarkRewardDialog.prototype.createRewardItem = function (__s15param0) {
    var __s15local0;
    var __s15local1 = 0;
    if (__dep_exact_26a421b704832cff.PlayerConst.LOGIN_LP_INCENTIVES_C1[__s15param0] > 0) {
      __s15local0 = __dep_export_CollectableEnum.CollectableEnum.C1;
      __s15local1 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.PlayerConst.LOGIN_LP_INCENTIVES_C1[__s15param0]);
    } else {
      __s15local0 = __dep_export_CollectableEnum.CollectableEnum.C2;
      __s15local1 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.PlayerConst.LOGIN_LP_INCENTIVES_C2[__s15param0]);
    }
    if (__s15local1 <= 0) {
      return null;
    } else {
      return __dep_export_CollectableHelper.CollectableHelper.createVO(__s15local0, __s15local1);
    }
  };
  CastleBookmarkRewardDialog.prototype.onClick = function (__s21param0) {
    __s1param0.prototype.onClick.call(this, __s21param0);
    switch (__s21param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleBookmarkRewardDialog.__initialize_static_members = function () {
    CastleBookmarkRewardDialog.NAME = "CastleBookmarkReward";
    CastleBookmarkRewardDialog.MAX_INDEX = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.PlayerConst.LOGIN_LP_INCENTIVES_C1.length);
  };
  return CastleBookmarkRewardDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleBookmarkRewardDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
