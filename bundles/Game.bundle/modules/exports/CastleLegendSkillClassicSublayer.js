Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_CastleLegendSkillTreeComponent = require("gge-module:export_CastleLegendSkillTreeComponent");
var __dep_export_LegendSkillsDataEvent = require("gge-module:export_LegendSkillsDataEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleLegendSkillCooldownDialog = require("gge-module:export_CastleLegendSkillCooldownDialog");
var __dep_export_CastleLegendSkillCooldownDialogProperties = require("gge-module:export_CastleLegendSkillCooldownDialogProperties");
var __dep_export_CastleStandardYesNoDialog = require("gge-module:export_CastleStandardYesNoDialog");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleLegendSkillDialog = require("gge-module:export_CastleLegendSkillDialog");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __s0local0 = function (__s1param0) {
  function CastleLegendSkillClassicSublayer(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._itxt_title = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0._itxt_pointsLeft = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_points2.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    __s3local0._itxt_pointsSpent = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_points1.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    __s3local0.subLayerDisp.mc_points1.mouseChildren = false;
    __s3local0.subLayerDisp.mc_points2.mouseChildren = false;
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.btn_reset.txt_label, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_legendTemple_reset")));
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.subLayerDisp.btn_reset], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    var __s3local1 = new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(__s3local0.subLayerDisp.mc_slider).addMouseWheelElements([__s3local0.subLayerDisp]);
    var __s3local2 = new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true, __s3local0.subLayerDisp.mc_ItemContainer.mask.height);
    __s3local0.scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(__s3local1, __s3local2, true);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s3local0.subLayerDisp.mc_ItemContainer);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLegendSkillClassicSublayer, __s1param0);
  CastleLegendSkillClassicSublayer.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.treeComponent = new __dep_export_CastleLegendSkillTreeComponent.CastleLegendSkillTreeComponent(__s5param0.sublayerID);
    this.subLayerDisp.mc_ItemContainer.addChild(this.treeComponent.disp);
    this.scrollComponent.init(0, this.treeComponent.height - this.subLayerDisp.mc_ItemContainer.mask.height, CastleLegendSkillClassicSublayer.SCROLL_STEP_PIXELS, CastleLegendSkillClassicSublayer.SCROLL_STEP_PIXELS);
    this.scrollComponent.show();
    this.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
    this.updateResetButton();
    this.updateText();
    this.controller.addEventListener(__dep_export_LegendSkillsDataEvent.LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED, this.bindFunction(this.onLegendSkillsUpdated));
  };
  CastleLegendSkillClassicSublayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this.treeComponent) {
      this.treeComponent.hide();
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_ItemContainer);
    }
    if (this.scrollComponent) {
      this.scrollComponent.hide();
      this.scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChange));
    }
    this.controller.removeEventListener(__dep_export_LegendSkillsDataEvent.LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED, this.bindFunction(this.onLegendSkillsUpdated));
  };
  CastleLegendSkillClassicSublayer.prototype.updateResetButton = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_reset, this.legendSkillData.userSkills.length > 0);
  };
  CastleLegendSkillClassicSublayer.prototype.updateText = function () {
    var __s13local0 = this.legendSkillData.getSpentPoints(this._params.sublayerID);
    var __s13local1 = this.legendSkillData.skillPointsLeft;
    this._itxt_title.textContentVO.stringValue = this._params.sublayerID == __dep_export_CastleLegendSkillDialog.CastleLegendSkillDialog.SUBLAYER_ATTACK ? __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_legendTemple_titleAttack") : __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_legendTemple_titleDefence");
    this._itxt_title.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this._itxt_pointsLeft.textContentVO.numberValue = __s13local1;
    this._itxt_pointsSpent.textContentVO.numberValue = __s13local0;
    this._itxt_pointsLeft.color = this.legendSkillData.skillPointsLeft > 0 ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    this.subLayerDisp.mc_points2.toolTipText = {
      t: "dialog_legendTemple_counter",
      p: [__s13local1]
    };
    var __s13local2 = this._params.sublayerID == __dep_export_CastleLegendSkillDialog.CastleLegendSkillDialog.SUBLAYER_ATTACK ? "dialog_legendTemple_attackCounter" : "dialog_legendTemple_defenseCounter";
    this.subLayerDisp.mc_points1.toolTipText = {
      t: __s13local2,
      p: [__s13local0]
    };
  };
  CastleLegendSkillClassicSublayer.prototype.onLegendSkillsUpdated = function (__s15param0) {
    this.updateResetButton();
    this.updateText();
    if (this.treeComponent) {
      this.treeComponent.updateTree();
    }
  };
  CastleLegendSkillClassicSublayer.prototype.onScrollValueChange = function (__s18param0) {
    __dep_exact_608de47b6498f9b0_1.TweenMax.killTweensOf(this.treeComponent.disp);
    __dep_exact_608de47b6498f9b0_1.TweenMax.to(this.treeComponent.disp, 0.2, {
      y: -this.scrollComponent.currentValue,
      ease: __dep_exact_608de47b6498f9b0.Power1.easeOut
    });
  };
  CastleLegendSkillClassicSublayer.prototype.onClick = function (__s20param0) {
    __s1param0.prototype.onClick.call(this, __s20param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s20param0.target)) {
      switch (__s20param0.target) {
        case this.subLayerDisp.btn_reset:
          if (this.legendSkillData.newResetTimeStamp > __dep_export_CachedTimer.CachedTimer.getCachedTimer()) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleLegendSkillCooldownDialog.CastleLegendSkillCooldownDialog, new __dep_export_CastleLegendSkillCooldownDialogProperties.CastleLegendSkillCooldownDialogProperties(this.bindFunction(this.onConfirmReset)));
          } else {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardYesNoDialog.CastleStandardYesNoDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardYesNoDialogProperties(__dep_exact_92d05af59ee2ff30_2.Localize.text("legendCooldown_skip_copy_header"), __dep_exact_92d05af59ee2ff30_2.Localize.text("legendCooldown_skip_copy"), this.bindFunction(this.onConfirmReset)));
          }
      }
    }
  };
  CastleLegendSkillClassicSublayer.prototype.onConfirmReset = function (__s26param0 = null) {
    this.legendSkillData.requestSkillReset();
  };
  CastleLegendSkillClassicSublayer.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30_2.Localize.text("dialog_legendTemple_help"));
  };
  Object.defineProperty(CastleLegendSkillClassicSublayer.prototype, "legendSkillData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.legendSkillData;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillClassicSublayer.SCROLL_STEP_PIXELS = 124;
  return CastleLegendSkillClassicSublayer;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleLegendSkillClassicSublayer = __s0local0;
