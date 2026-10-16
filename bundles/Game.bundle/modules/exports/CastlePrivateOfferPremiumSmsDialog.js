Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerComponent = require("gge-module:export_CastleTimerComponent");
var __s0local0 = function (__s1param0) {
  function CastlePrivateOfferPremiumSmsDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastlePrivateOfferPremiumSmsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePrivateOfferPremiumSmsDialog, __s1param0);
  CastlePrivateOfferPremiumSmsDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.removeBackground();
    this.tfHeader = this.textFieldManager.registerTextField(this.dialogDisp.tfHeader, new __dep_exact_92d05af59ee2ff30.TextVO("LoPremium IpSMSum"));
    this.tfDesc = this.textFieldManager.registerTextField(this.dialogDisp.tfDesc, new __dep_exact_92d05af59ee2ff30.TextVO("Dollar sit armet, consectetur adipiscing elit."));
    this.tfSmsText = this.textFieldManager.registerTextField(this.dialogDisp.tfSmsText, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.tfPrice = this.textFieldManager.registerTextField(this.dialogDisp.tfPrice, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.tfRemainingTime = this.textFieldManager.registerTextField(this.dialogDisp.tfRemainingTime, new __dep_exact_92d05af59ee2ff30.TextVO("privateOffer_premiumSms_header"));
    this.timerComponent = new __dep_export_CastleTimerComponent.CastleTimerComponent(this.tfRemainingTime, this.bindFunction(this.getTimeString), 0);
  };
  CastlePrivateOfferPremiumSmsDialog.prototype.getTimeString = function (__s7param0) {
    return __dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeStringBySeconds(__s7param0, __dep_exact_9e901e8e2483a22f.TimeStringHelper.HOURS_MINUTES_SECONDS_FORMAT);
  };
  CastlePrivateOfferPremiumSmsDialog.prototype.applyPropertiesLoaded = function (__s9param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s9param0);
    if (this.offerVO.premiumSmsVO) {
      this.tfSmsText.textContentVO.stringValue = "Send " + this.offerVO.premiumSmsVO.premiumSmsCode + " to " + this.offerVO.premiumSmsVO.callNumber;
      this.tfPrice.textContentVO.stringValue = this.offerVO.premiumSmsVO.price + " " + this.offerVO.premiumSmsVO.currency + "/SMS";
    } else {
      this.tfSmsText.textContentVO.stringValue = "no premiumSmsVO";
      this.tfPrice.textContentVO.stringValue = "no premiumSmsVO";
    }
    this.timerComponent.start(this.offerVO.remainingSeconds);
  };
  CastlePrivateOfferPremiumSmsDialog.prototype.onClick = function (__s13param0) {
    __s1param0.prototype.onClick.call(this, __s13param0);
    this.hide();
  };
  Object.defineProperty(CastlePrivateOfferPremiumSmsDialog.prototype, "offerVO", {
    get: function () {
      return this.properties.offerVO;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivateOfferPremiumSmsDialog.__initialize_static_members = function () {
    CastlePrivateOfferPremiumSmsDialog.NAME = "CastlePrivateOfferPremiumSmsExternal";
  };
  return CastlePrivateOfferPremiumSmsDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastlePrivateOfferPremiumSmsDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
