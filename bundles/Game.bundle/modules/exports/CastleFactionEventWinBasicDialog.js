Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleFactionEventWinBasicDialog(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionEventWinBasicDialog, __s1param0);
  CastleFactionEventWinBasicDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
  };
  CastleFactionEventWinBasicDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.updateRankingLine();
    this.updateTexts();
    this.updateRewards();
  };
  CastleFactionEventWinBasicDialog.prototype.updateRankingLine = function () {
    this.dialogDisp.mc_first.visible = this.dialogProperties.rank == 1;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rank, this.dialogProperties.rank > 0 ? new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.dialogProperties.rank) : new __dep_exact_92d05af59ee2ff30_2.TextVO("-"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_points, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.dialogProperties.points));
  };
  CastleFactionEventWinBasicDialog.prototype.updateTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_CastleModel.CastleModel.userData.userName));
  };
  CastleFactionEventWinBasicDialog.prototype.setTitleText = function (__s13param0) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s13param0));
  };
  CastleFactionEventWinBasicDialog.prototype.setCopyText = function (__s15param0) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s15param0));
  };
  CastleFactionEventWinBasicDialog.prototype.updateRewards = function () {
    this.showRightRewardContainer();
    var __s17local0 = __dep_exact_f855840627e6e145.int(this.dialogProperties.rewardList.length);
    if (!(__s17local0 <= 0) && !(__s17local0 > 4)) {
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.getRelevantRewardContainer(), "mc_reward"), this.dialogProperties.rewardList, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, new __s0local0(65, 120)));
    }
  };
  CastleFactionEventWinBasicDialog.prototype.showRightRewardContainer = function () {
    for (var __s20local0 = 0; __s20local0 <= 3; ++__s20local0) {
      this.dialogDisp["mc_rewardContainer" + __s20local0].visible = false;
    }
    this.dialogDisp.mc_noReward.visible = false;
    this.getRelevantRewardContainer().visible = true;
  };
  CastleFactionEventWinBasicDialog.prototype.getRelevantRewardContainer = function () {
    var __s24local0 = __dep_exact_f855840627e6e145.int(this.dialogProperties.rewardList.length);
    if (__s24local0 <= 0 || __s24local0 > 4) {
      return this.dialogDisp.mc_noReward;
    } else {
      return this.dialogDisp["mc_rewardContainer" + (__s24local0 - 1)];
    }
  };
  CastleFactionEventWinBasicDialog.prototype.onClick = function (__s28param0) {
    switch (__s28param0.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastleFactionEventWinBasicDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  return CastleFactionEventWinBasicDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleFactionEventWinBasicDialog = __s0local1;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
