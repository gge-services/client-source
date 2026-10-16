Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_C2SFusionCatalystConversionEventVO = require("gge-module:export_C2SFusionCatalystConversionEventVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_ClientConstFusion = require("gge-module:export_ClientConstFusion");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyHorizontal = require("gge-module:export_DynamicSizeScrollStrategyHorizontal");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_DecorationForgeNotEnoughEnergyDialogProperties = require("gge-module:export_DecorationForgeNotEnoughEnergyDialogProperties");
var __s0local0 = function (__s1param0) {
  function ADecorationForgeCatalystConversionDialogInfoBox(__s3param0) {
    var __s3local0 = this;
    __s3local0._isShowingConfirmButtons = false;
    __s3local0._onButtonsChanged = new __dep_exact_5c7bc328fca9e4de.Signal();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ADecorationForgeCatalystConversionDialogInfoBox, __s1param0);
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.disp.mc_buttons.btn_execute, -1, __dep_export_ClickFeedbackButtonBackground.ClickFeedbackButtonBackground);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.disp.mc_buttons.mc_comfirm.btn_cancel, this.disp.mc_buttons.mc_comfirm.btn_ok], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this.disp.mc_buttons.mc_comfirm.btn_cancel.toolTipText = "cancel";
    this.disp.mc_buttons.mc_comfirm.btn_ok.toolTipText = "confirm";
    this._scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.disp.mc_slider).addMouseWheelElements([this.disp]), new __dep_export_DynamicSizeScrollStrategyHorizontal.DynamicSizeScrollStrategyHorizontal(true));
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._scrollComponent.show();
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.onHide = function () {
    this._scrollComponent.hide();
    __s1param0.prototype.onHide.call(this);
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    __s1param0.prototype.removeEventListener.call(this);
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.updateWithNewData = function (__s15param0, __s15param1 = true) {
    this._catalystVO = __s15param0;
    this.update(__s15param1);
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.update = function (__s17param0 = true) {
    this.disp.visible = this.catalystVO != null;
    if (this.catalystVO) {
      var __s17local0 = this.getMaxSelectableValue();
      var __s17local1 = __s17local0 > 0 ? 1 : 0;
      var __s17local2 = this._scrollComponent.currentValue;
      this._scrollComponent.init(__s17local1, __s17local0, 1, 1);
      this._scrollComponent.scrollToValue(__s17param0 ? __s17local1 : __s17local2);
      this._scrollComponent.enableComponent(__s17local0 > 1);
      this.setButtons(false);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.mc_buttons.btn_execute, __s17local0 > 0);
      this.updateValues();
    }
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.updateValues = function () {};
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.setOverlay = function (__s22param0) {
    this.disp.mc_overlay.visible = __s22param0;
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.setButtons = function (__s24param0) {
    this._isShowingConfirmButtons = __s24param0;
    this.disp.mc_buttons.btn_execute.visible = !this._isShowingConfirmButtons;
    this.disp.mc_buttons.mc_comfirm.visible = this._isShowingConfirmButtons;
    this._scrollComponent.enableComponent(!__s24param0 && this.getMaxSelectableValue() > 1);
    this.onButtonsChanged.dispatch();
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.updateSliderFill = function () {
    var __s26local0 = this.disp.mc_slider.mc_sliderFill;
    var __s26local1 = this.disp.mc_slider.btn_slider;
    __s26local0.width = __s26local1.x - __s26local0.x;
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.fillValue = function (__s28param0, __s28param1, __s28param2, __s28param3) {
    __s28param0.mc_icon.gotoAndStop(__s28param1);
    __s28param0.mouseChildren = false;
    __s28param0.toolTipText = this.getValueToolTipTeText(__s28param1);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s28param0.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s28param2)).color = __s28param2 >= 0 ? __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR : __dep_export_ClientConstColor.ClientConstColor.MODERN_RED;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s28param0.txt_valueAdd, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s28param3 >= 0 ? "value_brackets_add" : "value_brackets_subtract", [__s28param3 >= 0 ? __s28param3 : -__s28param3])).color = __s28param3 >= 0 ? __dep_export_ClientConstColor.ClientConstColor.MODERN_GREEN : __dep_export_ClientConstColor.ClientConstColor.MODERN_RED;
    __dep_export_ClientConstFusion.ClientConstFusion.alignAddTextField(__s28param0.txt_value, __s28param0.txt_valueAdd);
    __s28param0.txt_valueAdd.visible = __s28param3 != 0;
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.setSliderAmountText = function (__s30param0) {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_slider.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s30param0)).autoFitToBounds = true;
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.getMaxSelectableValue = function () {
    return 0;
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.getValueMc = function (__s34param0) {
    return this.disp.getChildByName("mc_value" + __s34param0);
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.getSelectedAmount = function () {
    return this._scrollComponent.currentValue;
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.getValueToolTipTeText = function (__s38param0) {
    switch (__s38param0) {
      case 1:
        return this._catalystVO.getNameTextId();
      case 2:
        return "fusionEnergy";
      case 3:
        return new __dep_export_CollectableItemGenericCurrencyVO.CollectableItemGenericCurrencyVO(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_DECO_DUST).getNameTextId();
      default:
        return "";
    }
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.getAffordableEnergy = function () {
    return 0;
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.getConversionDirection = function () {
    return -1;
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.onScroll = function () {
    this.updateSliderFill();
    this.setSliderAmountText(this._scrollComponent.currentValue);
    this.updateValues();
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.onClick = function (__s47param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s47param0.target)) {
      __s1param0.prototype.onClick.call(this, __s47param0);
      switch (__s47param0.target) {
        case this.disp.mc_buttons.btn_execute:
          this.onExecuteButtonClicked();
          break;
        case this.disp.mc_buttons.mc_comfirm.btn_cancel:
          this.setButtons(false);
          break;
        case this.disp.mc_buttons.mc_comfirm.btn_ok:
          this.setButtons(false);
          this.onConfirmButtonClicked();
      }
    }
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.onExecuteButtonClicked = function () {
    var __s51local0 = __dep_export_CastleModel.CastleModel.fusionForgeData.getForge(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID).currentEnergy;
    var __s51local1 = this.getAffordableEnergy();
    if (__s51local1 > __s51local0) {
      __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDialogs(__dep_export_DecorationForgeNotEnoughEnergyDialog.DecorationForgeNotEnoughEnergyDialog, new __dep_export_DecorationForgeNotEnoughEnergyDialogProperties.DecorationForgeNotEnoughEnergyDialogProperties(__s51local1, __s51local0));
    } else {
      this.setButtons(true);
    }
  };
  ADecorationForgeCatalystConversionDialogInfoBox.prototype.onConfirmButtonClicked = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SFusionCatalystConversionEventVO.C2SFusionCatalystConversionEventVO(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID, this.getConversionDirection(), this.catalystVO.id, this.getSelectedAmount()));
    __dep_export_CastleModel.CastleModel.fusionForgeData.getForge(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID).requestDataFromServer();
  };
  Object.defineProperty(ADecorationForgeCatalystConversionDialogInfoBox.prototype, "catalystVO", {
    get: function () {
      return this._catalystVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ADecorationForgeCatalystConversionDialogInfoBox.prototype, "isShowingConfirmButtons", {
    get: function () {
      return this._isShowingConfirmButtons;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ADecorationForgeCatalystConversionDialogInfoBox.prototype, "onButtonsChanged", {
    get: function () {
      return this._onButtonsChanged;
    },
    enumerable: true,
    configurable: true
  });
  return ADecorationForgeCatalystConversionDialogInfoBox;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.ADecorationForgeCatalystConversionDialogInfoBox = __s0local0;
var __dep_export_CollectableItemGenericCurrencyVO = require("gge-module:export_CollectableItemGenericCurrencyVO");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_DecorationForgeNotEnoughEnergyDialog = require("gge-module:export_DecorationForgeNotEnoughEnergyDialog");
var __dep_export_ClickFeedbackButtonBackground = require("gge-module:export_ClickFeedbackButtonBackground");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
