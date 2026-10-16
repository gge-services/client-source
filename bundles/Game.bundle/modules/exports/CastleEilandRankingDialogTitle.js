Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SUserAchievedRanksVO = require("gge-module:export_C2SUserAchievedRanksVO");
var __dep_export_CastleTitleDataEvent = require("gge-module:export_CastleTitleDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __dep_export_CastleEilandTitleItemVO = require("gge-module:export_CastleEilandTitleItemVO");
var __s0local0 = function (__s1param0) {
  function CastleEilandRankingDialogTitle(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.iniButtons();
    __s3local0.initScrollList();
    __s3local0.initTexts();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEilandRankingDialogTitle, __s1param0);
  CastleEilandRankingDialogTitle.prototype.initTexts = function () {
    this.kingVO = __dep_export_CastleModel.CastleModel.eilandData.kingTitleVO;
    var __s5local0 = this.kingVO.currentAssigneePID == __dep_export_CastleModel.CastleModel.userData.playerID ? "dialog_eiland_titleMenu_copy_might_forKing" : "dialog_eiland_titleMenu_copy_might_forOther";
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s5local0, [this.kingVO.mightValue])).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_kingsName_descr, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_titleMenu_kingName")).autoFitToBounds = true;
    if (this.kingVO.isAssigned) {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_kingsName, new __dep_exact_92d05af59ee2ff30_1.TextVO(this.kingVO.currentAssignee));
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_kingsName, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_titleMenu_title_unassigned"));
    }
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title_positive, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_titleMenu_positive_title"));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title_negative, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eiland_titleMenu_negative_title"));
  };
  CastleEilandRankingDialogTitle.prototype.initScrollList = function () {
    this.titleList = new __dep_exact_9e901e8e2483a22f_1.ItemScrollList(this.subLayerDisp.mc_itemContainer);
    this.titleList.scrollItemClass = __dep_export_CastleEilandTitleItem.CastleEilandTitleItem;
    this.titleList.scrollStep = 2;
    this.titleList.clear();
  };
  CastleEilandRankingDialogTitle.prototype.iniButtons = function () {
    var __s11local0 = [this.subLayerDisp.mc_itemContainer.btn_up, this.subLayerDisp.mc_itemContainer.btn_down];
    for (var __s11local1 = 0; __s11local1 < 4; __s11local1++) {
      var __s11local2 = this.subLayerDisp.mc_itemContainer["item" + __s11local1].btn_assignTitle;
      var __s11local3 = this.subLayerDisp.mc_itemContainer["item" + __s11local1].btn_revokeTitle;
      __s11local0.push(__s11local2);
      __s11local0.push(__s11local3);
    }
    this.initBasicButtons(__s11local0);
  };
  CastleEilandRankingDialogTitle.prototype.show = function (__s15param0) {
    __s1param0.prototype.show.call(this, __s15param0);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SUserAchievedRanksVO.C2SUserAchievedRanksVO());
    __dep_export_CastleModel.CastleModel.titleData.addEventListener(__dep_export_CastleTitleDataEvent.CastleTitleDataEvent.TITLE_DATA_UPDATED, this.bindFunction(this.updateTitles));
    this.updateTitles();
  };
  CastleEilandRankingDialogTitle.prototype.updateTitles = function (__s17param0 = null) {
    this.initTexts();
    this.titleList.clear();
    for (var __s17local0 = __dep_export_CastleModel.CastleModel.titleData.mixedIslandTitles, __s17local1 = __dep_export_CastleModel.CastleModel.eilandData.kingTitleVO.currentAssigneePID == __dep_export_CastleModel.CastleModel.userData.playerID, __s17local2 = 0; __s17local2 < __s17local0.length; __s17local2++) {
      var __s17local3 = __s17local0[__s17local2];
      this.titleList.pushContent(new __dep_export_CastleEilandTitleItemVO.CastleEilandTitleItemVO(__s17local1, __s17local3));
    }
    this.titleList.initList();
  };
  CastleEilandRankingDialogTitle.prototype.hide = function () {
    __dep_export_CastleModel.CastleModel.titleData.removeEventListener(__dep_export_CastleTitleDataEvent.CastleTitleDataEvent.TITLE_DATA_UPDATED, this.bindFunction(this.updateTitles));
    __s1param0.prototype.hide.call(this);
  };
  CastleEilandRankingDialogTitle.prototype.onClick = function (__s23param0) {
    __s1param0.prototype.onClick.call(this, __s23param0);
    if (this.kingVO.isAssigned && __s23param0.target == this.subLayerDisp.txt_kingsName) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(this.kingVO.currentAssigneePID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
    }
  };
  CastleEilandRankingDialogTitle.prototype.onMouseOver = function (__s26param0) {
    __s1param0.prototype.onMouseOver.call(this, __s26param0);
    if (this.kingVO.isAssigned && __s26param0.target == this.subLayerDisp.txt_kingsName) {
      this.layoutManager.nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  CastleEilandRankingDialogTitle.prototype.onMouseOut = function (__s29param0) {
    __s1param0.prototype.onMouseOut.call(this, __s29param0);
    if (this.kingVO.isAssigned && __s29param0.target == this.subLayerDisp.txt_kingsName) {
      this.layoutManager.nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
    }
  };
  return CastleEilandRankingDialogTitle;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleEilandRankingDialogTitle = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
var __dep_export_CastleEilandTitleItem = require("gge-module:export_CastleEilandTitleItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
