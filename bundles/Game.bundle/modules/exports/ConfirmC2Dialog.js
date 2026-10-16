Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_C2SConfirmC2VO = require("gge-module:export_C2SConfirmC2VO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CollectableItemC2VO = require("gge-module:export_CollectableItemC2VO");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ConfirmC2Dialog() {
    var __s3local0 = __s1param0.call(this, ConfirmC2Dialog.NAME) || this;
    __s3local0.maxShowTime = __dep_export_ClientConstTime.ClientConstTime.MINUTES_2_MILLISEC;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ConfirmC2Dialog, __s1param0);
  ConfirmC2Dialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_no], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.cbx_dontShowAgain = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.dialogDisp.cbx_btn, true);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_purchaseConfirmation_confirmPurchase_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_purchaseConfirmation_confirmPurchase_desc", [__dep_export_CastleModel.CastleModel.settingsData.confirmC2Threshold]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_check, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_purchaseConfirmation_dontAskAgain_desc2"));
    var __s5local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(130, 130));
    __s5local0.tooltip.useAmount = false;
    var __s5local1 = new __dep_export_CollectableRenderClips.CollectableRenderClips();
    __s5local1.addIconMc(this.dialogDisp.mc_item.mc_item.mc_icon);
    __s5local1.addInfoBtn(this.dialogDisp.mc_item.btn_info);
    __s5local1.addTextfield(this.dialogDisp.mc_item.mc_item.txt_text);
    __s5local1.addTextfieldBgMc(this.dialogDisp.mc_item.mc_item.mc_textBackground);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, __s5local1, new __dep_export_CollectableItemC2VO.CollectableItemC2VO(this.dialogProperties.c2Amount), __s5local0);
    this.showTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
  };
  ConfirmC2Dialog.prototype.addEventListenerOnShow = function () {
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  ConfirmC2Dialog.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  ConfirmC2Dialog.prototype.onTimer = function (__s11param0) {
    if (__dep_export_CachedTimer.CachedTimer.getCachedTimer() - this.showTimestamp >= this.maxShowTime) {
      this.hide();
    }
  };
  ConfirmC2Dialog.prototype.hideLoaded = function (__s14param0 = null) {
    if (this.cbx_dontShowAgain.isSelected) {
      __dep_export_CastleModel.CastleModel.settingsData.confirmC2Threshold = -1;
    }
    __s1param0.prototype.hideLoaded.call(this, __s14param0);
  };
  ConfirmC2Dialog.prototype.onClick = function (__s17param0) {
    __s1param0.prototype.onClick.call(this, __s17param0);
    switch (__s17param0.target) {
      case this.dialogDisp.btn_ok:
        this.onConfirm();
        break;
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_no:
        this.hide();
        break;
      case this.dialogDisp.cbx_btn:
        this.cbx_dontShowAgain.toggleSelected();
    }
  };
  ConfirmC2Dialog.prototype.onConfirm = function () {
    if (this.dialogProperties.errorVO) {
      var __s20local0 = new __dep_export_C2SConfirmC2VO.C2SConfirmC2VO(this.dialogProperties.errorVO.commandId, this.dialogProperties.errorVO.params[1]);
      __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(__s20local0);
    } else if (this.dialogProperties.triggerSignal) {
      if (this.dialogProperties.serverData) {
        this.dialogProperties.triggerSignal.dispatch(this.dialogProperties.serverData);
      } else {
        this.dialogProperties.triggerSignal.dispatch();
      }
    }
    this.hide();
  };
  Object.defineProperty(ConfirmC2Dialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  ConfirmC2Dialog.NAME = "ConfirmC2";
  return ConfirmC2Dialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.ConfirmC2Dialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
