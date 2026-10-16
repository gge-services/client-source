Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleMessageDataEvent = require("gge-module:export_CastleMessageDataEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function PlayerIgnoreListDialog() {
    return __s1param0.call(this, PlayerIgnoreListDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PlayerIgnoreListDialog, __s1param0);
  PlayerIgnoreListDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_inbox_ignore_player_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_inbox_ignore_player_copy"));
    this.tf_emptyList = this.textFieldManager.registerTextField(this.dialogDisp.txt_noIgnore, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_mailbox_emptyingorelist"));
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp.btn_close, 1, __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    var __s5local0 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_PlayerIgnoreList_Item.PlayerIgnoreList_Item, "PlayerIgnoreEx_Item", PlayerIgnoreListDialog.NAME);
    __s5local0.itemPaddingY = 4;
    __s5local0.useSmoothScroll = true;
    this._scrollList = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.dialogDisp.mc_list).addMaskMc(this.dialogDisp.mc_list.mc_mask).addItemContainerMc(this.dialogDisp.mc_list.mc_items).addSliderMc(this.dialogDisp.mc_list.mc_slider), __s5local0);
  };
  PlayerIgnoreListDialog.prototype.onGetIgnoredPlayer = function (__s7param0) {
    var __s7local0 = [];
    var __s7local1 = 1;
    for (var __s7local2 = 0, __s7local3 = __dep_export_CastleModel.CastleModel.messageData.ignoredPlayer; __s7local2 < __s7local3.length; __s7local2++) {
      var __s7local4 = __s7local3[__s7local2];
      if (__s7local4 !== undefined) {
        __s7local0.push([__s7local1, __s7local4]);
        __s7local1++;
      }
    }
    this.tf_emptyList.visible = __s7local0.length <= 0;
    this._scrollList.updateWithNewData(__s7local0);
  };
  PlayerIgnoreListDialog.prototype.showLoaded = function (__s12param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s12param0);
    this._scrollList.onShow();
    __dep_export_CastleModel.CastleModel.messageData.addEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.GET_IGNORED_PLAYER, this.bindFunction(this.onGetIgnoredPlayer));
    __dep_export_CastleModel.CastleModel.messageData.getIgnoredPlayer();
  };
  PlayerIgnoreListDialog.prototype.hideLoaded = function (__s14param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s14param0);
    this._scrollList.onHide();
    __dep_export_CastleModel.CastleModel.messageData.removeEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.GET_IGNORED_PLAYER, this.bindFunction(this.onGetIgnoredPlayer));
  };
  PlayerIgnoreListDialog.prototype.onClick = function (__s16param0) {
    __s1param0.prototype.onClick.call(this, __s16param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s16param0.target)) {
      switch (__s16param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  PlayerIgnoreListDialog.NAME = "PlayerIgnoreEx";
  return PlayerIgnoreListDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.PlayerIgnoreListDialog = __s0local0;
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_PlayerIgnoreList_Item = require("gge-module:export_PlayerIgnoreList_Item");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
