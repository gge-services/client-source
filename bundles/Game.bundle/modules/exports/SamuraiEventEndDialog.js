Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SamuraiDaimyoEvent = require("gge-module:export_SamuraiDaimyoEvent");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function SamuraiEventEndDialog() {
    return __s1param0.call(this, SamuraiEventEndDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SamuraiEventEndDialog, __s1param0);
  SamuraiEventEndDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_samuraiInvasionEnd_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_samuraiInvasionEnd_desc")).autoFitToBounds = true;
    var __s5local0 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_SamuraiEventEndDialogItem.SamuraiEventEndDialogItem, "SamuraiEventEnd_Item", SamuraiEventEndDialog.NAME);
    __s5local0.itemPaddingY = 3;
    __s5local0.useSmoothScroll = true;
    this._scrollList = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.dialogDisp.mc_list), __s5local0);
  };
  SamuraiEventEndDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.controller.addEventListener(__dep_export_SamuraiDaimyoEvent.SamuraiDaimyoEvent.ON_NEW_EVENT_END_DIALOG_INFO_ARRIVED, this.bindFunction(this.onNewDataArrived));
    this._scrollList.onShow();
    this.updateItems();
  };
  SamuraiEventEndDialog.prototype.hideLoaded = function (__s9param0 = null) {
    this.controller.removeEventListener(__dep_export_SamuraiDaimyoEvent.SamuraiDaimyoEvent.ON_NEW_EVENT_END_DIALOG_INFO_ARRIVED, this.bindFunction(this.onNewDataArrived));
    this._scrollList.onHide();
    __dep_export_CastleModel.CastleModel.samuraiDaimyoData.server.clearEventEndDialogData();
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
  };
  SamuraiEventEndDialog.prototype.updateItems = function () {
    this._scrollList.updateWithNewData(__dep_export_CastleModel.CastleModel.samuraiDaimyoData.server.eventEndDialogData);
  };
  SamuraiEventEndDialog.prototype.onClick = function (__s13param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s13param0.target)) {
      __s1param0.prototype.onClick.call(this, __s13param0);
      switch (__s13param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  SamuraiEventEndDialog.prototype.onNewDataArrived = function (__s17param0) {
    this.updateItems();
  };
  SamuraiEventEndDialog.NAME = "SamuraiEventEnd";
  return SamuraiEventEndDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.SamuraiEventEndDialog = __s0local0;
var __dep_export_SamuraiEventEndDialogItem = require("gge-module:export_SamuraiEventEndDialogItem");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
