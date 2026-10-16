Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SAchievementListVO = require("gge-module:export_C2SAchievementListVO");
var __dep_export_CastleAchievementDataEvent = require("gge-module:export_CastleAchievementDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleAchievementDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleAchievementDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAchievementDialog, __s1param0);
  CastleAchievementDialog.prototype.initLoaded = function (__s5param0 = null) {
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_tab_overview, this.dialogDisp.btn_tab_eco, this.dialogDisp.btn_tab_military, this.dialogDisp.btn_tab_challenge, this.dialogDisp.btn_tab_events]);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close]);
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  CastleAchievementDialog.prototype.showLoaded = function (__s7param0 = null) {
    this._subLayer = new Map();
    this._subLayer.set(CastleAchievementDialog.CAT_OVERVIEW, new __dep_export_CastleAchievementDialogOverview.CastleAchievementDialogOverview(this.dialogDisp.mc_sublayer_overview));
    this._subLayer.set(CastleAchievementDialog.CAT_ECONOMY, new __dep_export_CastleAchievementDialogCategoryList.CastleAchievementDialogCategoryList(this.dialogDisp.mc_sublayer_list));
    this._subLayer.set(CastleAchievementDialog.CAT_MILITARY, new __dep_export_CastleAchievementDialogCategoryList.CastleAchievementDialogCategoryList(this.dialogDisp.mc_sublayer_list));
    this._subLayer.set(CastleAchievementDialog.CAT_CHALLENGE, new __dep_export_CastleAchievementDialogCategoryList.CastleAchievementDialogCategoryList(this.dialogDisp.mc_sublayer_list));
    this._subLayer.set(CastleAchievementDialog.CAT_EVENTS, new __dep_export_CastleAchievementDialogCategoryList.CastleAchievementDialogCategoryList(this.dialogDisp.mc_sublayer_list));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("panel_action_achievement"));
    this.dialogDisp.btn_tab_overview.toolTipText = "dialog_achv_category_overview";
    this.dialogDisp.btn_tab_eco.toolTipText = "dialog_achv_category_economy";
    this.dialogDisp.btn_tab_military.toolTipText = "dialog_achv_category_military";
    this.dialogDisp.btn_tab_challenge.toolTipText = "dialog_achv_category_challenge";
    this.dialogDisp.btn_tab_events.toolTipText = "dialog_achv_category_event";
    this.changeCategory(CastleAchievementDialog.CAT_OVERVIEW);
    __dep_export_CastleModel.CastleModel.castleAchievementData.addEventListener(__dep_export_CastleAchievementDataEvent.CastleAchievementDataEvent.ACHIEVEMENT_REFRESHED, this.bindFunction(this.onDataRefresh));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAchievementListVO.C2SAchievementListVO());
    __s1param0.prototype.showLoaded.call(this, __s7param0);
  };
  CastleAchievementDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    __dep_export_CastleModel.CastleModel.castleAchievementData.removeEventListener(__dep_export_CastleAchievementDataEvent.CastleAchievementDataEvent.ACHIEVEMENT_REFRESHED, this.bindFunction(this.onDataRefresh));
  };
  CastleAchievementDialog.prototype.onDataRefresh = function (__s11param0) {
    this.refreshCurrentCategory();
  };
  CastleAchievementDialog.prototype.refreshCurrentCategory = function () {
    var __s13local0 = this._currentCategory;
    this._currentCategory = "";
    this.changeCategory(__s13local0);
  };
  CastleAchievementDialog.prototype.changeCategory = function (__s15param0) {
    if (this._currentCategory != __s15param0) {
      __s1param0.prototype.changeCategory.call(this, __s15param0);
      this.showSublayer(this._subLayer.get(this._currentCategory), [this.getXMLStringForCurrentCategory()]);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tab_overview, this._currentCategory == CastleAchievementDialog.CAT_OVERVIEW);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tab_eco, this._currentCategory == CastleAchievementDialog.CAT_ECONOMY);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tab_military, this._currentCategory == CastleAchievementDialog.CAT_MILITARY);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tab_challenge, this._currentCategory == CastleAchievementDialog.CAT_CHALLENGE);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tab_events, this._currentCategory == CastleAchievementDialog.CAT_EVENTS);
    }
  };
  CastleAchievementDialog.prototype.getXMLStringForCurrentCategory = function () {
    switch (this._currentCategory) {
      case CastleAchievementDialog.CAT_ECONOMY:
        return "economy";
      case CastleAchievementDialog.CAT_MILITARY:
        return "military";
      case CastleAchievementDialog.CAT_CHALLENGE:
        return "challenge";
      case CastleAchievementDialog.CAT_EVENTS:
        return "event";
    }
    return "";
  };
  CastleAchievementDialog.prototype.onClick = function (__s21param0) {
    __s1param0.prototype.onClick.call(this, __s21param0);
    switch (__s21param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
        break;
      case this.dialogDisp.btn_tab_overview:
        this.changeCategory(CastleAchievementDialog.CAT_OVERVIEW);
        break;
      case this.dialogDisp.btn_tab_eco:
        this.changeCategory(CastleAchievementDialog.CAT_ECONOMY);
        break;
      case this.dialogDisp.btn_tab_military:
        this.changeCategory(CastleAchievementDialog.CAT_MILITARY);
        break;
      case this.dialogDisp.btn_tab_challenge:
        this.changeCategory(CastleAchievementDialog.CAT_CHALLENGE);
        break;
      case this.dialogDisp.btn_tab_events:
        this.changeCategory(CastleAchievementDialog.CAT_EVENTS);
    }
  };
  CastleAchievementDialog.__initialize_static_members = function () {
    CastleAchievementDialog.NAME = "CastleAchievement2";
    CastleAchievementDialog.CAT_OVERVIEW = "CAT_OVERVIEW";
    CastleAchievementDialog.CAT_ECONOMY = "CAT_ECONOMY";
    CastleAchievementDialog.CAT_MILITARY = "CAT_MILITARY";
    CastleAchievementDialog.CAT_CHALLENGE = "CAT_CHALLENGE";
    CastleAchievementDialog.CAT_EVENTS = "CAT_EVENTS";
  };
  return CastleAchievementDialog;
}(require("gge-module:export_CastleExternalSubLayerDialog").CastleExternalSubLayerDialog);
exports.CastleAchievementDialog = __s0local0;
var __dep_export_CastleAchievementDialogCategoryList = require("gge-module:export_CastleAchievementDialogCategoryList");
var __dep_export_CastleAchievementDialogOverview = require("gge-module:export_CastleAchievementDialogOverview");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
