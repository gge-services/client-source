Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SEnchantRelicItemEventVO = require("gge-module:export_C2SEnchantRelicItemEventVO");
var __dep_export_CastleOpenShopExecutor = require("gge-module:export_CastleOpenShopExecutor");
var __dep_export_CastleEquipmentEvent = require("gge-module:export_CastleEquipmentEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRendererList = require("gge-module:export_CollectableRendererList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_SimplePopoverConfig = require("gge-module:export_SimplePopoverConfig");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function RelicUpgradeDialog() {
    var __s3local0 = this;
    __s3local0._currencyRenderer = new __dep_export_CollectableRendererList.CollectableRendererList();
    __s3local0._isWaitingForServerResponseForUpgrade = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, RelicUpgradeDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RelicUpgradeDialog, __s1param0);
  RelicUpgradeDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_back, this.dialogDisp.btn_addC2], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.mc_status.btn_sell], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.dialogDisp.btn_back.visible = false;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_relicEnchanter_relicEnchanterUpgrade_header"))).autoFitToBounds = true;
    this._addC2Component = new __dep_export_ButtonAddGoldComponent.ButtonAddGoldComponent(this.dialogDisp.btn_addC2);
    this._selector = new __dep_export_RelicUpgradeDialogSelector.RelicUpgradeDialogSelector(this.dialogDisp.mc_selection);
    this._effects = new __dep_export_RelicUpgradeDialogEffects.RelicUpgradeDialogEffects(this.dialogDisp.mc_effects);
    var __s5local0 = new __dep_export_SimplePopoverConfig.SimplePopoverConfig(RelicUpgradeDialog.EXECUTE_OVERLAY_ASSET_NAME, null, new __s0local0(0, 135));
    __s5local0.waitDuration = 2;
    __s5local0.fadeInDuration = 0.4;
    __s5local0.fadeOutDuration = 0.4;
    this._executeOverlay = new __dep_export_SimplePopoverComponent.SimplePopoverComponent(this.dialogDisp);
    this._executeOverlay.init(__s5local0);
    this._status = new __dep_export_RelicUpgradeDialogStatus.RelicUpgradeDialogStatus(this.dialogDisp.mc_status);
    this._payment = new __dep_export_RelicUpgradeDialogPayment.RelicUpgradeDialogPayment(this.dialogDisp.mc_payment);
  };
  RelicUpgradeDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onCurrenciesUpdated));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    this.controller.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.RELIC_UPGRADE_RECEIVED, this.bindFunction(this.onRelicUpgradeReceived));
    this._selector.onSelectionChanged.add(this.bindFunction(this.onSelectionChanged));
    this._status.onEquipTypeChanged.add(this.bindFunction(this.onEquipTypeChanged));
    this._payment.onBuyButtonClicked.add(this.bindFunction(this.onBuyButtonClicked));
    this._executeOverlay.onStateStarted.add(this.bindFunction(this.onOverlayStateStarted));
    this._executeOverlay.onSequenceCompleteSignal.add(this.bindFunction(this.onOverlayAnimationCompleted));
    this._selector.onShow();
    this._effects.onShow();
    this._executeOverlay.onShow();
    this._status.onShow();
    this._payment.onShow();
    this._addC2Component.init();
    this.updateCurrencyInfo();
  };
  RelicUpgradeDialog.prototype.hideLoaded = function (__s9param0 = null) {
    this._selector.onHide();
    this._effects.onHide();
    this._executeOverlay.onHide();
    this._status.onHide();
    this._payment.onHide();
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onCurrenciesUpdated));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    this.controller.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.RELIC_UPGRADE_RECEIVED, this.bindFunction(this.onRelicUpgradeReceived));
    this._selector.onSelectionChanged.remove(this.bindFunction(this.onSelectionChanged));
    this._status.onEquipTypeChanged.remove(this.bindFunction(this.onEquipTypeChanged));
    this._payment.onBuyButtonClicked.remove(this.bindFunction(this.onBuyButtonClicked));
    this._executeOverlay.onStateStarted.remove(this.bindFunction(this.onOverlayStateStarted));
    this._executeOverlay.onSequenceCompleteSignal.remove(this.bindFunction(this.onOverlayAnimationCompleted));
    this._isWaitingForServerResponseForUpgrade = false;
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
  };
  RelicUpgradeDialog.prototype.updateCurrencyInfo = function () {
    var __s11local0 = new __dep_export_CollectableList.CollectableList();
    __s11local0.addItem(__dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RELIC_FRAGMENTS), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_RELIC_FRAGMENTS));
    __s11local0.addItem(__dep_export_CastleModel.CastleModel.currencyData.getCurrencyByType(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.C1)));
    __s11local0.addItem(__dep_export_CastleModel.CastleModel.currencyData.getCurrencyByType(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.C2)));
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this._currencyRenderer, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.dialogDisp, "mc_currency"), __s11local0, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(30, 30)));
  };
  RelicUpgradeDialog.prototype.showExecuteOverlay = function (__s13param0) {
    var __s13local0 = this._executeOverlay.getAssetDisp();
    this.textFieldManager.registerTextField(__s13local0.txt_success, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("success"));
    this.textFieldManager.registerTextField(__s13local0.txt_failed, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("failure"));
    __s13local0.txt_success.visible = __s13param0;
    __s13local0.txt_failed.visible = !__s13param0;
    this._executeOverlay.startSequence();
  };
  RelicUpgradeDialog.prototype.onClick = function (__s15param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s15param0.target)) {
      __s1param0.prototype.onClick.call(this, __s15param0);
      switch (__s15param0.target) {
        case this.dialogDisp.btn_back:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_addC2:
          this._addC2Component.onClickButton(__dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.SOURCE_RELIC_UPGRADE, __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.SOURCE_RELIC_UPGRADE);
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30_2.Localize.text("help_relicEnchanter_relicEnchanterUpgrade"));
      }
    }
  };
  RelicUpgradeDialog.prototype.onCurrenciesUpdated = function (__s19param0) {
    this.updateCurrencyInfo();
    this._payment.update();
  };
  RelicUpgradeDialog.prototype.onSelectionChanged = function () {
    var __s21local0 = this._selector.getSelectedItem();
    var __s21local1 = __s21local0 ? __s21local0.relicVO : null;
    var __s21local2 = __s21local0 ? __s21local0.lordID : -1;
    this._status.updateWithNewVO(__s21local1, __s21local2);
    this._effects.updateWithNewVO(__s21local1, this._status.currentEquipType);
    this._payment.updateWithNewVO(__s21local1, this._status.currentEquipType);
  };
  RelicUpgradeDialog.prototype.onEquipTypeChanged = function () {
    var __s23local0 = this._selector.getSelectedItem();
    this._effects.updateWithNewVO(__s23local0 ? __s23local0.relicVO : null, this._status.currentEquipType);
    this._payment.onEquipTypeChanged(this._status.currentEquipType);
  };
  RelicUpgradeDialog.prototype.onBuyButtonClicked = function (__s25param0) {
    if (!this._isWaitingForServerResponseForUpgrade) {
      var __s25local0 = this._payment.getCosts(__s25param0, __dep_export_CastleModel.CastleModel.equipData.relicXml.getRelicEnchanter(this._payment.getCurrentEnchantmentLevel() + 1));
      var __s25local1 = new __dep_export_CollectableList.CollectableList();
      for (var __s25local2 = 0, __s25local3 = __s25local0.list; __s25local2 < __s25local3.length; __s25local2++) {
        var __s25local4 = __s25local3[__s25local2];
        if (__s25local4 !== undefined && __dep_export_CostHelper.CostHelper.getAvailableGoods(new __dep_export_CollectableTypeVO.CollectableTypeVO().initByCollectable(__s25local4)) < __s25local4.amount) {
          __s25local1.addItem(__s25local4);
        }
      }
      if (__s25local1.length > 0) {
        __dep_export_CostHelper.CostHelper.showGenericNotEnoughCurrencyDialog(__s25local1.getContainingTypes());
      } else {
        var __s25local5 = this._selector.getSelectedItem();
        if (__s25local5) {
          this._prevSendEquipment = __s25local5.relicVO;
          var __s25local6 = this._status.currentEquipType == __dep_export_RelicUpgradeDialogStatus.RelicUpgradeDialogStatus.EQUIP_TYPE_GEM && __s25local5.relicVO.type == __dep_export_CollectableItemRelicVO.CollectableItemRelicVO.TYPE_EQUIPMENT ? __s25local5.relicVO.vo.gemVO.id : __s25local5.relicVO.getId();
          var __s25local7 = __dep_exact_f855840627e6e145.int(this._status.currentEquipType == __dep_export_RelicUpgradeDialogStatus.RelicUpgradeDialogStatus.EQUIP_TYPE_EQUIPMENT ? 1 : 0);
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SEnchantRelicItemEventVO.C2SEnchantRelicItemEventVO(__s25local6, __s25param0, __s25local7));
          this._isWaitingForServerResponseForUpgrade = true;
        }
      }
    }
  };
  RelicUpgradeDialog.prototype.onRelicUpgradeReceived = function (__s34param0) {
    this._isWaitingForServerResponseForUpgrade = false;
    this._receivedEquipmentData = __s34param0.equipmentInventory.length > 0 ? __s34param0.equipmentInventory[0] : null;
    this.showExecuteOverlay(this._receivedEquipmentData != null);
  };
  RelicUpgradeDialog.prototype.onOverlayStateStarted = function (__s36param0) {
    if (__s36param0 == __dep_export_SimplePopoverComponent.SimplePopoverComponent.STATE_FADE_IN) {
      var __s36local0 = this._executeOverlay.getAssetDisp().txt_success.visible;
      this._effects.infoComponent.playUpgradeAnimation(__s36local0 ? __dep_export_RelicEquipmentUpgradeInfoComponent.RelicEquipmentUpgradeInfoComponent.ANIMATION_TYPE_SUCCESS : __dep_export_RelicEquipmentUpgradeInfoComponent.RelicEquipmentUpgradeInfoComponent.ANIMATION_TYPE_FAILED);
    }
    if (__s36param0 == __dep_export_SimplePopoverComponent.SimplePopoverComponent.STATE_FADE_OUT) {
      this._effects.infoComponent.playUpgradeAnimation(__dep_export_RelicEquipmentUpgradeInfoComponent.RelicEquipmentUpgradeInfoComponent.ANIMATION_TYPE_DEFAULT);
    }
  };
  RelicUpgradeDialog.prototype.onOverlayAnimationCompleted = function () {
    if (this._receivedEquipmentData) {
      this._selector.updateItemInfo(this._prevSendEquipment, this._receivedEquipmentData);
    }
  };
  RelicUpgradeDialog.NAME = "RelicUpgrade_R";
  RelicUpgradeDialog.EXECUTE_OVERLAY_ASSET_NAME = "RelicUpgradeExecuteOverlay";
  return RelicUpgradeDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.RelicUpgradeDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_CollectableItemRelicVO = require("gge-module:export_CollectableItemRelicVO");
var __dep_export_ButtonAddGoldComponent = require("gge-module:export_ButtonAddGoldComponent");
var __dep_export_SimplePopoverComponent = require("gge-module:export_SimplePopoverComponent");
var __dep_export_RelicEquipmentUpgradeInfoComponent = require("gge-module:export_RelicEquipmentUpgradeInfoComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_RelicUpgradeDialogEffects = require("gge-module:export_RelicUpgradeDialogEffects");
var __dep_export_RelicUpgradeDialogPayment = require("gge-module:export_RelicUpgradeDialogPayment");
var __dep_export_RelicUpgradeDialogSelector = require("gge-module:export_RelicUpgradeDialogSelector");
var __dep_export_RelicUpgradeDialogStatus = require("gge-module:export_RelicUpgradeDialogStatus");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
