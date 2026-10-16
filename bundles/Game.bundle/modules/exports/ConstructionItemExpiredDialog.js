Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_ConstructionItemExpiredCastleSelector = require("gge-module:export_ConstructionItemExpiredCastleSelector");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_ConstructionItemExpiredDialogListItem = require("gge-module:export_ConstructionItemExpiredDialogListItem");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_CastleConstructionItemsSwitchEvent = require("gge-module:export_CastleConstructionItemsSwitchEvent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __s0local0 = function (__s1param0) {
  function ConstructionItemExpiredDialog() {
    var __s3local0 = __s1param0.call(this, ConstructionItemExpiredDialog.NAME) || this;
    __s3local0.sortOrder = 1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ConstructionItemExpiredDialog, __s1param0);
  ConstructionItemExpiredDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_list_building]);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_gotoCastle], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.dialogDisp.btn_list_building.toolTipText = "dialog_ci_assign_list_buildings_tooltip";
    this.dialogDisp.btn_list_ci.toolTipText = "dialog_ci_assign_list_items_tooltip";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_ci_tempCiExpired_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_ci_tempCiExpired_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_gotoCastle.txt_label, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("panel_action_castle")));
    this.itxt_empty = this.textFieldManager.registerTextField(this.dialogDisp.txt_empty, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_ci_tempCiExpired_noTempCiExpired"));
    this._castleSelector = new __dep_export_ConstructionItemExpiredCastleSelector.ConstructionItemExpiredCastleSelector(this.dialogDisp.castleSelection, this.bindFunction(this.onSelectCastle));
    var __s5local0 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_ConstructionItemExpiredDialogListItem.ConstructionItemExpiredDialogListItem, "CastleConstructionItemsExpired_ListItem", ConstructionItemExpiredDialog.NAME);
    __s5local0.itemPaddingY = 0;
    __s5local0.useSmoothScroll = true;
    this._scrollList = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.dialogDisp.mc_list).addSliderMc(this.dialogDisp.mc_slider), __s5local0);
  };
  ConstructionItemExpiredDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this._castleSelector.fillFromAreas(this.getCIExpiredAreas());
    this._castleSelector.show();
    this._scrollList.onShow();
    this.updateList();
  };
  ConstructionItemExpiredDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    this._castleSelector.hide();
    this._scrollList.onHide();
  };
  ConstructionItemExpiredDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_gotoCastle:
        this.gotoSelectedCastle();
        break;
      case this.dialogDisp.btn_list_building:
        this.toggleListSortingOrder();
    }
  };
  ConstructionItemExpiredDialog.prototype.toggleListSortingOrder = function () {
    this.sortOrder *= -1;
    this.dialogDisp.btn_list_building.mc_arrow.gotoAndStop(this.sortOrder == 1 ? 1 : 2);
    this.updateList();
  };
  ConstructionItemExpiredDialog.prototype.onSelectCastle = function () {
    this._castleSelector.update();
    this.updateList();
  };
  ConstructionItemExpiredDialog.prototype.updateList = function () {
    var __s18local0 = this._castleSelector.selectedArea.expiredCIs;
    __s18local0.sort(this.bindFunction(this.sortByName));
    if (__s18local0.length <= 0) {
      this.itxt_empty.visible = true;
      this._scrollList.setVisibility(false);
    } else {
      this.itxt_empty.visible = false;
      this._scrollList.updateWithNewData(__s18local0);
      this._scrollList.setVisibility(true);
    }
  };
  ConstructionItemExpiredDialog.prototype.gotoSelectedCastle = function () {
    this.hide();
    this.controller.dispatchEvent(new __dep_export_CastleConstructionItemsSwitchEvent.CastleConstructionItemsSwitchEvent(__dep_export_CastleConstructionItemsSwitchEvent.CastleConstructionItemsSwitchEvent.SWITCH_CASTLE, this._castleSelector.selectedArea.castleWMO));
  };
  ConstructionItemExpiredDialog.prototype.getCIExpiredAreas = function () {
    return __dep_export_CastleModel.CastleModel.constructionItemData.expiredAreas;
  };
  ConstructionItemExpiredDialog.prototype.sortByName = function (__s26param0, __s26param1) {
    var __s26local0 = __dep_exact_92d05af59ee2ff30_2.Localize.text(__s26param0.buildingVO.getNameString()).localeCompare(__dep_exact_92d05af59ee2ff30_2.Localize.text(__s26param1.buildingVO.getNameString()));
    if (__s26local0 != 0) {
      return __s26local0 * this.sortOrder;
    } else {
      return 0;
    }
  };
  ConstructionItemExpiredDialog.NAME = "CastleConstructionItemsExpired";
  return ConstructionItemExpiredDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.ConstructionItemExpiredDialog = __s0local0;
