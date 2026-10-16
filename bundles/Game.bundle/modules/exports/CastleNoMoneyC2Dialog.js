Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTracking = require("gge-module:export_ClientConstTracking");
var __dep_export_C2SClientSideTrackingVO = require("gge-module:export_C2SClientSideTrackingVO");
var __dep_export_CastleOpenShopExecutor = require("gge-module:export_CastleOpenShopExecutor");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleNoMoneyC2DialogProperties = require("gge-module:export_CastleNoMoneyC2DialogProperties");
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
var __s0local0 = function (__s1param0) {
  function CastleNoMoneyC2Dialog() {
    return __s1param0.call(this, CastleNoMoneyC2Dialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleNoMoneyC2Dialog, __s1param0);
  CastleNoMoneyC2Dialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons(this.buttons());
  };
  CastleNoMoneyC2Dialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_export_CastleModel.CastleModel.trackingTimer.addTrackingTimer(__dep_export_ClientConstTracking.ClientConstTracking.TRACKING_TIME_NORUBIES);
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_no_money_title"));
    this.itxt_title.autoFitToBounds = true;
    this.itxt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_no_money_c2_copy_2")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_moreGold.txt_ruby, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("add_Gold"));
    if (this.noMoneyDialogProperties.type == __dep_export_CastleNoMoneyC2DialogProperties.CastleNoMoneyC2DialogProperties.TYPE_ALLIANCE) {
      this.itxt_desc.textContentVO.textId = "dialog_no_money_c2_copy_alliance";
    } else {
      this.itxt_desc.textContentVO.textId = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_no_money_c2_copy_2");
    }
  };
  CastleNoMoneyC2Dialog.prototype.buttons = function () {
    return [this.dialogDisp.btn_close, this.dialogDisp.btn_moreGold];
  };
  Object.defineProperty(CastleNoMoneyC2Dialog.prototype, "noMoneyDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleNoMoneyC2Dialog.prototype.onClick = function (__s15param0) {
    __s1param0.prototype.onClick.call(this, __s15param0);
    switch (__s15param0.target) {
      case this.dialogDisp.btn_ok:
      case this.dialogDisp.btn_close:
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SClientSideTrackingVO.C2SClientSideTrackingVO(__dep_export_ClientConstTracking.ClientConstTracking.TRACKING_TIME_NORUBIES, {
          OT: __dep_export_CastleModel.CastleModel.trackingTimer.retrieveTrackingTimeInSeconds(__dep_export_ClientConstTracking.ClientConstTracking.TRACKING_TIME_NORUBIES),
          CT: 1
        }));
        this.hide();
        break;
      case this.dialogDisp.btn_moreGold:
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SClientSideTrackingVO.C2SClientSideTrackingVO(__dep_export_ClientConstTracking.ClientConstTracking.TRACKING_TIME_NORUBIES, {
          OT: __dep_export_CastleModel.CastleModel.trackingTimer.retrieveTrackingTimeInSeconds(__dep_export_ClientConstTracking.ClientConstTracking.TRACKING_TIME_NORUBIES),
          CT: 2
        }));
        __dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.open(__dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.SOURCE_NO_MONEY_C2, __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.SOURCE_NO_MONEY_C2);
        this.hide();
    }
  };
  CastleNoMoneyC2Dialog.NAME = "CastleNotEnoughRubiesExternal";
  return CastleNoMoneyC2Dialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleNoMoneyC2Dialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
