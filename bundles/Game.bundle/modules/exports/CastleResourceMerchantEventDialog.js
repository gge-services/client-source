Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleGenericBannerMerchantDialog = require("gge-module:export_CastleGenericBannerMerchantDialog");
var __s0local0 = function (__s1param0) {
  function CastleResourceMerchantEventDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleResourceMerchantEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleResourceMerchantEventDialog, __s1param0);
  Object.defineProperty(CastleResourceMerchantEventDialog.prototype, "packageBannerClassName", {
    get: function () {
      return "PackageBanner";
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericBannerMerchantDialog.CastleGenericBannerMerchantDialog.prototype, "packageBannerClassName").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceMerchantEventDialog.prototype, "merchantScrollItem", {
    get: function () {
      return __dep_export_CastleResourceMerchantEventScrollItem.CastleResourceMerchantEventScrollItem;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericBannerMerchantDialog.CastleGenericBannerMerchantDialog.prototype, "merchantScrollItem").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleResourceMerchantEventDialog.prototype.initLoaded = function (__s13param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s13param0);
    this.textFieldManager.registerTextField(this.dialogDisp.bannerBorder.tfSpecial, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_merchantEvent_banner_copy")).autoFitToBounds = true;
    this.itxt_speechBubble = this.textFieldManager.registerTextField(this.dialogDisp.txt_speechBubble, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
  };
  CastleResourceMerchantEventDialog.prototype.showLoaded = function (__s15param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s15param0);
    this.itxt_speechBubble.textContentVO.textId = this.isPrivateOffer ? "dialog_lowLevelMerchant_speechBubble" : "dialog_merchantEvent_speechBubble";
  };
  CastleResourceMerchantEventDialog.prototype.handleUnbuyableAmount = function () {
    __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_storageFull")));
  };
  CastleResourceMerchantEventDialog.__initialize_static_members = function () {
    CastleResourceMerchantEventDialog.NAME = "CastleResourceMerchantEventExternal";
  };
  return CastleResourceMerchantEventDialog;
}(__dep_export_CastleGenericBannerMerchantDialog.CastleGenericBannerMerchantDialog);
exports.CastleResourceMerchantEventDialog = __s0local0;
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleResourceMerchantEventScrollItem = require("gge-module:export_CastleResourceMerchantEventScrollItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
