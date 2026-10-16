Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_SimpleScrollStrategyHorizontal = require("gge-module:export_SimpleScrollStrategyHorizontal");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleABGTowerEffectDetailDialogProperties = require("gge-module:export_CastleABGTowerEffectDetailDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleABGTowerEffectsDialogItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleABGTowerEffectsDialogItem, __s1param0);
  CastleABGTowerEffectsDialogItem.prototype.initLoaded = function () {
    var __s5local0 = this.getItemMc();
    this.itxt_level = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s5local0.txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("", [0]));
    this.itxt_value = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s5local0.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE_ADD, [0]));
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s5local0.btn_minus, __s5local0.btn_plus, __s5local0.btn_max], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s5local0.btn_info]);
    this._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(__s5local0).addSliderButton(__s5local0.mc_slider.btn_slider).addSliderLine(__s5local0.mc_slider.sliderBar), new __dep_export_SimpleScrollStrategyHorizontal.SimpleScrollStrategyHorizontal(true));
  };
  CastleABGTowerEffectsDialogItem.prototype.fill = function () {
    var __s7local0 = this.getItemMc();
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s7local0.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_AllianceTower_" + this.towerEffectVO.currentBonusVO.effect.name + "_name")));
    this._scrollComponent.init(this.towerEffectVO.currentLevel, this.towerEffectVO.effectMaxLevel);
    this._scrollComponent.show();
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    this._scrollComponent.scrollToValue(this.towerEffectVO.selectedLevel - this.towerEffectVO.currentLevel);
    this._scrollComponent.enableComponent(this.towerEffectVO.currentLevel < this.towerEffectVO.effectMaxLevel);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s7local0.mc_icon);
    var __s7local1 = "Effect_Icon_" + this.towerEffectVO.effectID;
    if (__dep_exact_9e901e8e2483a22f_3.BasicModel.basicLoaderData.isItemAssetVersioned(__s7local1)) {
      var __s7local2 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s7local1, __dep_exact_9e901e8e2483a22f_3.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s7local1));
      __s7local2.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_2.ClipSizeComponent(73, 71);
      __s7local0.mc_icon.addChild(__s7local2);
    }
  };
  CastleABGTowerEffectsDialogItem.prototype.onScroll = function () {
    var __s10local0 = this.getItemMc();
    this.towerEffectVO.selectedLevel = this._scrollComponent.currentValue;
    var __s10local1 = this.towerEffectVO.getEffectValueForLevel(this.towerEffectVO.selectedLevel);
    this.itxt_value.textContentVO.textReplacements = [__s10local1];
    if (this.towerEffectVO.currentLevel == this.towerEffectVO.selectedLevel) {
      this.itxt_level.textContentVO.textId = "level_placeholder";
    } else {
      this.itxt_level.textContentVO.textId = "level_basePlusX_placeholder";
    }
    this.itxt_level.textContentVO.textReplacements = [this.towerEffectVO.currentLevel, this.towerEffectVO.selectedLevel - this.towerEffectVO.currentLevel];
    __s10local0.mc_progress.progress_current.scaleX = this.getProgressScale(this.towerEffectVO.currentLevel);
    __s10local0.mc_progress.progress_new.scaleX = this.getProgressScale(this.towerEffectVO.selectedLevel);
    this.updateSliderFill();
    this.changeCallback();
  };
  CastleABGTowerEffectsDialogItem.prototype.getProgressScale = function (__s14param0) {
    return __s14param0 / this.towerEffectVO.effectMaxLevel;
  };
  CastleABGTowerEffectsDialogItem.prototype.updateSliderFill = function () {
    var __s16local0 = this.getItemMc();
    __s16local0.mc_slider.mc_sliderLineFill.width = __s16local0.mc_slider.btn_slider.x - __s16local0.mc_slider.sliderBar.x;
  };
  CastleABGTowerEffectsDialogItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    this._scrollComponent.hide();
  };
  CastleABGTowerEffectsDialogItem.prototype.onClick = function (__s20param0) {
    __s1param0.prototype.onClick.call(this, __s20param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s20param0.target)) {
      switch (__s20param0.target) {
        case this.getItemMc().btn_info:
          __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleABGTowerEffectDetailDialog.CastleABGTowerEffectDetailDialog, new __dep_export_CastleABGTowerEffectDetailDialogProperties.CastleABGTowerEffectDetailDialogProperties(this.towerEffectVO));
      }
    }
  };
  Object.defineProperty(CastleABGTowerEffectsDialogItem.prototype, "towerEffectVO", {
    get: function () {
      return this.data[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleABGTowerEffectsDialogItem.prototype, "changeCallback", {
    get: function () {
      return this.data[1];
    },
    enumerable: true,
    configurable: true
  });
  return CastleABGTowerEffectsDialogItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.CastleABGTowerEffectsDialogItem = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleABGTowerEffectDetailDialog = require("gge-module:export_CastleABGTowerEffectDetailDialog");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
