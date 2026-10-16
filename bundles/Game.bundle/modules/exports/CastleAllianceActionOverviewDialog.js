Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleAllianceGiftEvent = require("gge-module:export_CastleAllianceGiftEvent");
var __dep_export_CastleAllianceHelpRequestDataEvent = require("gge-module:export_CastleAllianceHelpRequestDataEvent");
var __dep_export_CastleAllianceDataEvent = require("gge-module:export_CastleAllianceDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleAllianceActionOverviewDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleAllianceActionOverviewDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceActionOverviewDialog, __s1param0);
  CastleAllianceActionOverviewDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_allianceActivity_menuHeader"));
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.tab_help, this.dialogDisp.tab_gift]);
    this.dialogDisp.tab_help.toolTipText = "dialog_allianceHelp_answerRequests_tooltip";
    this.dialogDisp.tab_gift.toolTipText = "dialog_allianceActivity_allianceGift_tooltip";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this._subLayer = new Map();
    this._subLayer.set(CastleAllianceActionOverviewDialog.SUBLAYER_HELP_REQUEST, new __dep_export_CastleAllianceActionOverviewDialogHelpRequest.CastleAllianceActionOverviewDialogHelpRequest(this.dialogDisp.sl_help));
    this._subLayer.set(CastleAllianceActionOverviewDialog.SUBLAYER_GIFT, new __dep_export_CastleAllianceActionOverviewDialogGift.CastleAllianceActionOverviewDialogGift(this.dialogDisp.sl_gift));
  };
  CastleAllianceActionOverviewDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.allianceHelpRequestData.addEventListener(__dep_export_CastleAllianceHelpRequestDataEvent.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, this.bindFunction(this.onRequestUpdate));
    __dep_export_CastleModel.CastleModel.allianceGiftData.addEventListener(__dep_export_CastleAllianceGiftEvent.CastleAllianceGiftEvent.DATA_UPDATED, this.bindFunction(this.onGiftUpdate));
    __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onMyAllianceUpdated));
  };
  CastleAllianceActionOverviewDialog.prototype.onMyAllianceUpdated = function (__s9param0) {
    if (!__dep_export_CastleModel.CastleModel.userData.isInAlliance) {
      this.autoSwitchSublayer(false, __dep_export_CastleModel.CastleModel.allianceGiftData.hasGifts(__dep_export_CastleModel.CastleModel.userData.level));
    }
  };
  CastleAllianceActionOverviewDialog.prototype.onGiftUpdate = function (__s12param0) {
    this.updateTabs();
  };
  CastleAllianceActionOverviewDialog.prototype.onRequestUpdate = function (__s14param0) {
    this.updateTabs();
  };
  CastleAllianceActionOverviewDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.allianceHelpRequestData.removeEventListener(__dep_export_CastleAllianceHelpRequestDataEvent.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, this.bindFunction(this.onRequestUpdate));
    __dep_export_CastleModel.CastleModel.allianceGiftData.removeEventListener(__dep_export_CastleAllianceGiftEvent.CastleAllianceGiftEvent.DATA_UPDATED, this.bindFunction(this.onGiftUpdate));
    __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onMyAllianceUpdated));
  };
  CastleAllianceActionOverviewDialog.prototype.showLoaded = function (__s18param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s18param0);
    this.updateTabs();
    this.switchToSublayer(this.dialogProperties.layerToOpen);
  };
  CastleAllianceActionOverviewDialog.prototype.updateTabs = function () {
    var __s20local0 = __dep_export_CastleModel.CastleModel.allianceHelpRequestData.visibleRequests.length > 0;
    var __s20local1 = __dep_export_CastleModel.CastleModel.allianceGiftData.hasGifts(__dep_export_CastleModel.CastleModel.userData.level);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.tab_help, __s20local0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.tab_gift, __s20local1);
    this.autoSwitchSublayer(__s20local0, __s20local1);
  };
  CastleAllianceActionOverviewDialog.prototype.autoSwitchSublayer = function (__s22param0, __s22param1) {
    if (__s22param0 || __s22param1) {
      switch (this._currentCategory) {
        case CastleAllianceActionOverviewDialog.SUBLAYER_GIFT:
          if (!__s22param1) {
            this.switchToSublayer(CastleAllianceActionOverviewDialog.SUBLAYER_HELP_REQUEST);
          }
          break;
        case CastleAllianceActionOverviewDialog.SUBLAYER_HELP_REQUEST:
          if (!__s22param0) {
            this.switchToSublayer(CastleAllianceActionOverviewDialog.SUBLAYER_GIFT);
          }
      }
    } else {
      this.hide();
    }
  };
  Object.defineProperty(CastleAllianceActionOverviewDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceActionOverviewDialog.prototype.onClick = function (__s31param0) {
    __s1param0.prototype.onClick.call(this, __s31param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s31param0.target)) {
      switch (__s31param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.tab_help:
          this.switchToSublayer(CastleAllianceActionOverviewDialog.SUBLAYER_HELP_REQUEST);
          break;
        case this.dialogDisp.tab_gift:
          this.switchToSublayer(CastleAllianceActionOverviewDialog.SUBLAYER_GIFT);
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_allianceActivity"));
      }
    }
  };
  CastleAllianceActionOverviewDialog.prototype.switchToSublayer = function (__s35param0) {
    if (__s35param0 == CastleAllianceActionOverviewDialog.SUBLAYER_HELP_REQUEST) {
      this.dialogDisp.tab_help.gotoAndStop(CastleAllianceActionOverviewDialog.TAB_FRAME_ACTIVE);
      this.dialogDisp.tab_gift.gotoAndStop(CastleAllianceActionOverviewDialog.TAB_FRAME_INACTIVE);
    } else {
      this.dialogDisp.tab_help.gotoAndStop(CastleAllianceActionOverviewDialog.TAB_FRAME_INACTIVE);
      this.dialogDisp.tab_gift.gotoAndStop(CastleAllianceActionOverviewDialog.TAB_FRAME_ACTIVE);
    }
    this.changeCategory(__s35param0);
    this.showSublayer(this._subLayer.get(__s35param0), []);
  };
  CastleAllianceActionOverviewDialog.__initialize_static_members = function () {
    CastleAllianceActionOverviewDialog.NAME = "CastleAllianceActionOverview";
    CastleAllianceActionOverviewDialog.SUBLAYER_HELP_REQUEST = "helprequest";
    CastleAllianceActionOverviewDialog.SUBLAYER_GIFT = "gift";
    CastleAllianceActionOverviewDialog.TAB_FRAME_ACTIVE = 1;
    CastleAllianceActionOverviewDialog.TAB_FRAME_INACTIVE = 2;
  };
  return CastleAllianceActionOverviewDialog;
}(require("gge-module:export_CastleExternalSubLayerDialog").CastleExternalSubLayerDialog);
exports.CastleAllianceActionOverviewDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleAllianceActionOverviewDialogGift = require("gge-module:export_CastleAllianceActionOverviewDialogGift");
var __dep_export_CastleAllianceActionOverviewDialogHelpRequest = require("gge-module:export_CastleAllianceActionOverviewDialogHelpRequest");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
