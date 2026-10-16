Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstXmlProperties = require("gge-module:export_ClientConstXmlProperties");
var __dep_export_C2SLaunchDaimyoTauntAttackVO = require("gge-module:export_C2SLaunchDaimyoTauntAttackVO");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function SamuraiDaimyoBoosterSelectDialog() {
    return __s1param0.call(this, SamuraiDaimyoBoosterSelectDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SamuraiDaimyoBoosterSelectDialog, __s1param0);
  SamuraiDaimyoBoosterSelectDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_shapeshifter_Booster_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_samuraiInvasionDaimyo_booster_desc")).autoFitToBounds = true;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this._samuraiMedalBoosterSelectComponent = new __dep_export_CastleBoosterSelectComponent.CastleBoosterSelectComponent(this.dialogDisp.buy0, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SAMURAI_MEDAL_BOOSTER, __dep_export_CastleModel.CastleModel.xmlPropertyData.getValueById(__dep_export_ClientConstXmlProperties.ClientConstXmlProperties.ID_SAMURAI_MEDAL_BOOSTER_BOOST), 1591, __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION);
    this._shogunPointBoosterSelectComponent = new __dep_export_CastleBoosterSelectComponent.CastleBoosterSelectComponent(this.dialogDisp.buy1, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SHOGUN_POINT_BOOSTER, __dep_export_CastleModel.CastleModel.xmlPropertyData.getValueById(__dep_export_ClientConstXmlProperties.ClientConstXmlProperties.ID_SHOGUN_POINT_BOOSTER_BOOST), 1592, __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION);
  };
  SamuraiDaimyoBoosterSelectDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this._samuraiMedalBoosterSelectComponent.maxSelectable = this.getSamuraiMedalBooserMax();
    this._shogunPointBoosterSelectComponent.maxSelectable = this.getShogunPointBoosterMax();
    this._samuraiMedalBoosterSelectComponent.show();
    this._shogunPointBoosterSelectComponent.show();
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialUserCurrencyUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateDiscount));
  };
  SamuraiDaimyoBoosterSelectDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    this._samuraiMedalBoosterSelectComponent.hide();
    this._shogunPointBoosterSelectComponent.hide();
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialUserCurrencyUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateDiscount));
  };
  SamuraiDaimyoBoosterSelectDialog.prototype.getSamuraiMedalBooserMax = function () {
    return __dep_exact_f855840627e6e145.int(Math.min(__dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_SAMURAI_MEDAL_BOOSTER), __dep_export_CastleModel.CastleModel.xmlPropertyData.getValueById(__dep_export_ClientConstXmlProperties.ClientConstXmlProperties.ID_SAMURAI_MEDAL_BOOSTER_LIMIT)));
  };
  SamuraiDaimyoBoosterSelectDialog.prototype.getShogunPointBoosterMax = function () {
    return __dep_exact_f855840627e6e145.int(Math.min(__dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_SHOGUN_POINT_BOOSTER), __dep_export_CastleModel.CastleModel.xmlPropertyData.getValueById(__dep_export_ClientConstXmlProperties.ClientConstXmlProperties.ID_SHOGUN_POINT_BOOSTER_LIMIT)));
  };
  SamuraiDaimyoBoosterSelectDialog.prototype.onSpecialUserCurrencyUpdate = function (__s15param0) {
    this._samuraiMedalBoosterSelectComponent.updateWithNewMaxValue(this.getSamuraiMedalBooserMax());
    this._shogunPointBoosterSelectComponent.updateWithNewMaxValue(this.getShogunPointBoosterMax());
  };
  SamuraiDaimyoBoosterSelectDialog.prototype.updateDiscount = function (__s17param0) {
    this._samuraiMedalBoosterSelectComponent.updateDiscount();
    this._shogunPointBoosterSelectComponent.updateDiscount();
  };
  SamuraiDaimyoBoosterSelectDialog.prototype.onClick = function (__s19param0) {
    __s1param0.prototype.onClick.call(this, __s19param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s19param0.target)) {
      switch (__s19param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onOkButton();
      }
    }
  };
  SamuraiDaimyoBoosterSelectDialog.prototype.onOkButton = function () {
    if (this.daimyoCastleProperties) {
      var __s23local0 = this.daimyoCastleProperties.attackInfoVO;
      __s23local0.addCollectorBooster(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_SAMURAI_MEDAL_BOOSTER, this._samuraiMedalBoosterSelectComponent.getValue());
      __s23local0.addCollectorBooster(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_SHOGUN_POINT_BOOSTER, this._shogunPointBoosterSelectComponent.getValue());
      __s23local0.openSelectBoosterDialog = false;
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_POSTATTACK_DIALOG_COMMAND, [this.daimyoCastleProperties.targetActionType, this.daimyoCastleProperties.hideFunction, this.daimyoCastleProperties.attackInfoVO, this.daimyoCastleProperties.selectedLord]);
      this.hide();
    } else if (this.daimyoTownshipProperties) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SLaunchDaimyoTauntAttackVO.C2SLaunchDaimyoTauntAttackVO(this.daimyoTownshipProperties.townshipMapObjectVO.absAreaPosX, this.daimyoTownshipProperties.townshipMapObjectVO.absAreaPosY, this._samuraiMedalBoosterSelectComponent.getValue(), this._shogunPointBoosterSelectComponent.getValue()));
      this.hide();
    }
  };
  Object.defineProperty(SamuraiDaimyoBoosterSelectDialog.prototype, "daimyoCastleProperties", {
    get: function () {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.properties, "PostAttackSelectBoosterDialogProperties")) {
        return this.properties;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoBoosterSelectDialog.prototype, "daimyoTownshipProperties", {
    get: function () {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.properties, "SamuraiDaimyoTauntDialogProperties")) {
        return this.properties;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  SamuraiDaimyoBoosterSelectDialog.NAME = "SamuraiDaimyoBoosterSelect";
  return SamuraiDaimyoBoosterSelectDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.SamuraiDaimyoBoosterSelectDialog = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleBoosterSelectComponent = require("gge-module:export_CastleBoosterSelectComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
