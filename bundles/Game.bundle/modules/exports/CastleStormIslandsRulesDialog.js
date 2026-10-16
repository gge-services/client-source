Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_CastleStormIslandsRuleItem = require("gge-module:export_CastleStormIslandsRuleItem");
var __dep_export_CastleStormIslandsRuleItemVO = require("gge-module:export_CastleStormIslandsRuleItemVO");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __s0local0 = function (__s1param0) {
  function CastleStormIslandsRulesDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleStormIslandsRulesDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStormIslandsRulesDialog, __s1param0);
  CastleStormIslandsRulesDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this._currentRulesPage = 1;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_welcomePopup_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_start.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_welcomePopup_startButton")));
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_start, this.dialogDisp.btn_right, this.dialogDisp.btn_left], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.dialogDisp.btn_left.mouseChildren = false;
    this.dialogDisp.btn_right.mouseChildren = false;
    this.prepareRulesItemsData();
    var __s5local0 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_CastleStormIslandsRuleItem.CastleStormIslandsRuleItem, "Component_RuleListElement", CastleStormIslandsRulesDialog.NAME);
    __s5local0.useSmoothScroll = true;
    this._rulesScrollList = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.dialogDisp.mc_items).addMaskMc(this.dialogDisp.mc_items.mc_mask).addSliderMc(this.dialogDisp.mc_items.mc_slider), __s5local0);
  };
  CastleStormIslandsRulesDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this._currentRulesPage = 1;
    this._rulesScrollList.onShow();
    this.updatePage(0);
    this.updateRulesList();
  };
  CastleStormIslandsRulesDialog.prototype.hide = function () {
    this._rulesScrollList.onHide();
    __s1param0.prototype.hide.call(this);
  };
  CastleStormIslandsRulesDialog.prototype.prepareRulesItemsData = function () {
    var __s11local0;
    this._rulesMap = new Map();
    for (var __s11local1 = 0; __s11local1 < CastleStormIslandsRulesDialog.RULE_IDS.length; __s11local1++) {
      this._rulesMap[__s11local1 + 1] = [];
      for (var __s11local2 = 0; __s11local2 < CastleStormIslandsRulesDialog.RULE_IDS[__s11local1].length; __s11local2++) {
        __s11local0 = new __dep_export_CastleStormIslandsRuleItemVO.CastleStormIslandsRuleItemVO("dialog_island_welcomePopup_content_" + CastleStormIslandsRulesDialog.RULE_IDS[__s11local1][__s11local2]);
        this._rulesMap[__s11local1 + 1].push(__s11local0);
      }
    }
  };
  CastleStormIslandsRulesDialog.prototype.onClick = function (__s17param0) {
    __s1param0.prototype.onClick.call(this, __s17param0);
    switch (__s17param0.target) {
      case this.dialogDisp.btn_start:
        this.hide();
        break;
      case this.dialogDisp.btn_left:
        this.updatePage(-1);
        break;
      case this.dialogDisp.btn_right:
        this.updatePage(1);
    }
  };
  CastleStormIslandsRulesDialog.prototype.updateRulesList = function () {
    this._rulesScrollList.updateWithNewData(this.getRulesData());
  };
  CastleStormIslandsRulesDialog.prototype.updatePage = function (__s22param0) {
    this._currentRulesPage += __s22param0;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_left, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_right, true);
    if (this._currentRulesPage <= 1) {
      this._currentRulesPage = 1;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_left, false);
    } else if (this._currentRulesPage >= CastleStormIslandsRulesDialog.RULES_PAGES) {
      this._currentRulesPage = CastleStormIslandsRulesDialog.RULES_PAGES;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_right, false);
    }
    var __s22local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_tempServer_welcomePopup_pageCounter", [this._currentRulesPage, CastleStormIslandsRulesDialog.RULES_PAGES]);
    var __s22local1 = __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_welcomePopup_pageHeader_" + this._currentRulesPage, [__s22local0]);
    if (this.itxt_category) {
      this.itxt_category.textContentVO.textId = __s22local1;
    } else {
      this.itxt_category = this.textFieldManager.registerTextField(this.dialogDisp.txt_category, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s22local1));
    }
    this.updateRulesList();
  };
  CastleStormIslandsRulesDialog.prototype.getRulesData = function () {
    return this._rulesMap[this._currentRulesPage];
  };
  CastleStormIslandsRulesDialog.__initialize_static_members = function () {
    CastleStormIslandsRulesDialog.NAME = "CastleStormIslandsRules";
  };
  CastleStormIslandsRulesDialog.RULE_IDS = [["1_1", "1_2", "1_3", "1_3_1", "1_4", "1_4_1"], ["2_1", "2_2", "2_3", "2_4"]];
  CastleStormIslandsRulesDialog.RULES_PAGES = 2;
  return CastleStormIslandsRulesDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleStormIslandsRulesDialog = __s0local0;
__s0local0.__initialize_static_members();
