Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EWorldmapBookmarkType = require("gge-module:export_EWorldmapBookmarkType");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleDeleteAllianceBookmarkDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleDeleteAllianceBookmarkDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDeleteAllianceBookmarkDialog, __s1param0);
  CastleDeleteAllianceBookmarkDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_bookmarks_eraseBookmark_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_bookmarks_eraseBookmark_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_notify.txt_notifyAttackers, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_bookmarks_eraseBookmark_sendMessage_copy"));
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButton(this.dialogDisp.mc_notify.btn_notify);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_no, this.dialogDisp.btn_ok]);
    this.crestComponent = new __dep_export_CastleCastleCrestComponent.CastleCastleCrestComponent(this.dialogDisp.mc_sourceCastle);
  };
  CastleDeleteAllianceBookmarkDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s7param0);
    if (this.dialogProperties.bookmarkVO.type == __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER) {
      this.dialogDisp.mc_notify.visible = true;
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.mc_notify.btn_notify, true);
      this.setSendMessageButtonTooltip();
    } else {
      this.dialogDisp.mc_notify.visible = false;
    }
  };
  CastleDeleteAllianceBookmarkDialog.prototype.showLoaded = function (__s11param0) {
    var __s11local0;
    if (__s11param0 === undefined) {
      __s11param0 = null;
    }
    __s1param0.prototype.showLoaded.call(this, __s11param0);
    __s11local0 = this.dialogProperties.bookmarkVO.kingdomId == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID ? __dep_export_CrestHelper.CrestHelper.getPlayerOrFactionCrest(this.dialogProperties.bookmarkVO.worldmapObjectVO.ownerInfo) : this.dialogProperties.bookmarkVO.worldmapObjectVO.ownerInfo.crest;
    this.crestComponent.initComponent(__s11local0, this.dialogProperties.bookmarkVO.worldmapObjectVO);
  };
  CastleDeleteAllianceBookmarkDialog.prototype.hideLoaded = function (__s14param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s14param0);
  };
  CastleDeleteAllianceBookmarkDialog.prototype.onClick = function (__s16param0) {
    __s1param0.prototype.onClick.call(this, __s16param0);
    switch (__s16param0.target) {
      case this.dialogDisp.btn_no:
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        this.deleteBookmark();
        this.hide();
    }
    if (this.dialogDisp.mc_notify.visible && this.dialogDisp.mc_notify.btn_notify == __s16param0.target) {
      var __s16local0 = __dep_export_ButtonHelper.ButtonHelper.isButtonSelected(this.dialogDisp.mc_notify.btn_notify);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.mc_notify.btn_notify, !__s16local0);
      this.setSendMessageButtonTooltip();
    }
  };
  CastleDeleteAllianceBookmarkDialog.prototype.setSendMessageButtonTooltip = function () {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonSelected(this.dialogDisp.mc_notify.btn_notify)) {
      this.dialogDisp.mc_notify.btn_notify.toolTipText = "dialog_alliance_bookmarks_eraseBookmark_sendMessage_confirm_tooltip";
    } else {
      this.dialogDisp.mc_notify.btn_notify.toolTipText = "dialog_alliance_bookmarks_eraseBookmark_sendMessage_deny_tooltip";
    }
  };
  CastleDeleteAllianceBookmarkDialog.prototype.deleteBookmark = function () {
    __dep_export_CastleModel.CastleModel.bookmarkData.deleteBookmark(this.dialogProperties.bookmarkVO, __dep_export_ButtonHelper.ButtonHelper.isButtonSelected(this.dialogDisp.mc_notify.btn_notify));
  };
  Object.defineProperty(CastleDeleteAllianceBookmarkDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleDeleteAllianceBookmarkDialog.__initialize_static_members = function () {
    CastleDeleteAllianceBookmarkDialog.NAME = "CastleDeleteAllianceBookmark";
  };
  return CastleDeleteAllianceBookmarkDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleDeleteAllianceBookmarkDialog = __s0local0;
var __dep_export_CastleCastleCrestComponent = require("gge-module:export_CastleCastleCrestComponent");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
