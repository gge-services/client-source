Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleABGTowerEffectDetailDialog() {
    return __s1param0.call(this, CastleABGTowerEffectDetailDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleABGTowerEffectDetailDialog, __s1param0);
  CastleABGTowerEffectDetailDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_AllianceTower_buffDetails_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("level"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_cost, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("cost_simple"));
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    var __s5local0 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_CastleABGTowerEffectDetailDialogItem.CastleABGTowerEffectDetailDialogItem, "CastleABGTowerEffectDetail_ListItem", __dep_export_CastleAllianceBattleGroundEventDialog.CastleAllianceBattleGroundEventDialog.NAME);
    __s5local0.itemPaddingY = 4;
    __s5local0.useSmoothScroll = true;
    this._list = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.dialogDisp).addSliderMc(this.dialogDisp.mc_slider), __s5local0);
  };
  CastleABGTowerEffectDetailDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_beyondTheHorizon_AllianceTower_" + this.dialogProperties.towerEffectVO.currentBonusVO.effect.name + "_desc"));
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_icon);
    var __s7local0 = "Effect_Icon_" + this.dialogProperties.towerEffectVO.effectID;
    if (__dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.isItemAssetVersioned(__s7local0)) {
      var __s7local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s7local0, __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s7local0));
      __s7local1.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_1.ClipSizeComponent(73, 71);
      this.dialogDisp.mc_icon.addChild(__s7local1);
    }
    var __s7local2 = [];
    for (var __s7local3 = 1; __s7local3 < this.dialogProperties.towerEffectVO.effectMaxLevel; __s7local3++) {
      __s7local2.push([this.dialogProperties.towerEffectVO, __s7local3]);
    }
    this._list.onShow();
    this._list.updateWithNewData(__s7local2);
  };
  CastleABGTowerEffectDetailDialog.prototype.hideLoaded = function (__s12param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s12param0);
    this._list.onHide();
  };
  CastleABGTowerEffectDetailDialog.prototype.onClick = function (__s14param0) {
    __s1param0.prototype.onClick.call(this, __s14param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s14param0.target)) {
      switch (__s14param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleABGTowerEffectDetailDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleABGTowerEffectDetailDialog.NAME = "CastleABGTowerEffectDetail";
  return CastleABGTowerEffectDetailDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleABGTowerEffectDetailDialog = __s0local0;
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_CastleABGTowerEffectDetailDialogItem = require("gge-module:export_CastleABGTowerEffectDetailDialogItem");
var __dep_export_CastleAllianceBattleGroundEventDialog = require("gge-module:export_CastleAllianceBattleGroundEventDialog");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
