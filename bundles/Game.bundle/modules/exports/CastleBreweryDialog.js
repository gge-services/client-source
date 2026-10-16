Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_ResourceComponentWithStorageBar = require("gge-module:export_ResourceComponentWithStorageBar");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = createjs.Point;
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_SelectInputFieldComponent = require("gge-module:export_SelectInputFieldComponent");
var __dep_export_CastleValueChangerController = require("gge-module:export_CastleValueChangerController");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_C2SSetBreweryProductionVO = require("gge-module:export_C2SSetBreweryProductionVO");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyHorizontal = require("gge-module:export_DynamicSizeScrollStrategyHorizontal");
var __dep_export_CastleBreweryProductionInfoDialog = require("gge-module:export_CastleBreweryProductionInfoDialog");
var __dep_export_CastleBreweryProductionInfoDialogProperties = require("gge-module:export_CastleBreweryProductionInfoDialogProperties");
var __dep_export_BreweryHelper = require("gge-module:export_BreweryHelper");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_export_C2SSetMeadPrioVO = require("gge-module:export_C2SSetMeadPrioVO");
var __s0local1 = function (__s1param0) {
  function CastleBreweryDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleBreweryDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBreweryDialog, __s1param0);
  CastleBreweryDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_save, this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_info, this.dialogDisp.amountPicker.btn_minus, this.dialogDisp.amountPicker.btn_plus, this.dialogDisp.mc_sliderFoodStop.amountPicker.btn_left, this.dialogDisp.mc_sliderFoodStop.amountPicker.btn_right, this.dialogDisp.mc_sliderHoneyStop.amountPicker.btn_left, this.dialogDisp.mc_sliderHoneyStop.amountPicker.btn_right], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.mc_sliderFoodStop.amountPicker.sliderContainer.slider, this.dialogDisp.mc_sliderHoneyStop.amountPicker.sliderContainer.slider], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.cbx_prio = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.dialogDisp.cbx_prio, true);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_relicBrewery_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title1, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_relicBrewery_brewingSettings_subHeader")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title2, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_relicBrewery_resourceStockLimit_subHeader")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_save.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_button_saveChanges")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_prio, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_relicBrewery_foodPrioritization_desc"));
    this.dialogDisp.mc_food.toolTipText = "dialog_relicBrewery_productionInput_food_tooltip";
    this.dialogDisp.mc_honey.toolTipText = "dialog_relicBrewery_productionInput_honey_tooltip";
    this.dialogDisp.mc_mead.toolTipText = "dialog_relicBrewery_productionOutput_mead_tooltip";
    this.resourceItems = new Map();
  };
  CastleBreweryDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    if (__dep_export_CastleModel.CastleModel.breweryData.meadPrioSet) {
      this.cbx_prio.selected();
    } else {
      this.cbx_prio.deselected();
    }
    this.inputPercentage = new __dep_export_SelectInputFieldComponent.SelectInputFieldComponent(this.dialogDisp.mc_percent, this.bindFunction(this.onPercentValueInput), __dep_exact_92d05af59ee2ff30_1.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [0]));
    this.inputPercentage.searchField.restrict = "0-9";
    this.inputPercentage.searchField.maxChars = 5;
    this.inputFoodStop = new __dep_export_SelectInputFieldComponent.SelectInputFieldComponent(this.dialogDisp.mc_foodStop, this.bindFunction(this.onFoodStopValueInput), __dep_exact_92d05af59ee2ff30_1.Localize.number(__dep_export_CastleModel.CastleModel.breweryData.stopAtFoodAmount));
    this.inputFoodStop.searchField.restrict = "0-9";
    this.inputFoodStop.searchField.maxChars = 7;
    this.inputHoneyStop = new __dep_export_SelectInputFieldComponent.SelectInputFieldComponent(this.dialogDisp.mc_honeyStop, this.bindFunction(this.onHoneyStopValueInput), __dep_exact_92d05af59ee2ff30_1.Localize.number(__dep_export_CastleModel.CastleModel.breweryData.stopAtHoneyAmount));
    this.inputHoneyStop.searchField.restrict = "0-9";
    this.inputHoneyStop.searchField.maxChars = 7;
    this.inputPercentage.searchField.focusOut.add(this.bindFunction(this.removeFocus));
    this.inputFoodStop.searchField.focusOut.add(this.bindFunction(this.removeFocus));
    this.inputHoneyStop.searchField.focusOut.add(this.bindFunction(this.removeFocus));
    this.initResourceTextfields();
    this.valueSlider = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp.amountPicker).addMouseWheelElements([this.disp]), new __dep_export_DynamicSizeScrollStrategyHorizontal.DynamicSizeScrollStrategyHorizontal(true), true);
    this.valueSlider.init(0, 100);
    this.valueSlider.show();
    this.valueSlider.scrollToValue(__dep_export_CastleModel.CastleModel.breweryData.percentForMead);
    this.valueSlider.onScrollSignal.add(this.bindFunction(this.onSliderUpdated));
    this.foodValueController = new __dep_export_CastleValueChangerController.CastleValueChangerController(__dep_export_CastleModel.CastleModel.breweryData.stopAtFoodAmount, 0, __dep_export_CastleModel.CastleModel.areaData.activeArea.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.FOOD).maxAmount);
    this.foodValueController.addButtons(this.dialogDisp.mc_sliderFoodStop, 1);
    this.foodValueController.addSlider(this.dialogDisp.mc_sliderFoodStop.amountPicker.sliderContainer, 16);
    this.foodValueController.valueUpdatedSignal.add(this.bindFunction(this.onFoodSliderUpdated));
    var __s7local0 = __dep_export_CastleModel.CastleModel.areaData.activeArea.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.HONEY).maxAmount;
    this.honeyValueController = new __dep_export_CastleValueChangerController.CastleValueChangerController(__dep_export_CastleModel.CastleModel.breweryData.stopAtHoneyAmount, 0, __s7local0 > 0 ? __s7local0 : 0.4);
    this.honeyValueController.addButtons(this.dialogDisp.mc_sliderHoneyStop, 1);
    this.honeyValueController.addSlider(this.dialogDisp.mc_sliderHoneyStop.amountPicker.sliderContainer, 16);
    this.honeyValueController.valueUpdatedSignal.add(this.bindFunction(this.onHoneySliderUpdated));
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_sliderHoneyStop.amountPicker.btn_left, __s7local0 > 0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_sliderHoneyStop.amountPicker.btn_right, __s7local0 > 0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_sliderHoneyStop.amountPicker.sliderContainer.slider, __s7local0 > 0);
    if (__s7local0 < 1) {
      this.inputHoneyStop.searchField.text = "-";
      this.inputHoneyStop.searchField.selectable = false;
      this.honeyValueController.dispose();
    }
    this.itf_food = this.textFieldManager.registerTextField(this.dialogDisp.txt_food, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(0));
    this.itf_honey = this.textFieldManager.registerTextField(this.dialogDisp.txt_honey, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(0));
    this.itf_mead = this.textFieldManager.registerTextField(this.dialogDisp.txt_mead, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(0));
    this.dialogDisp.mc_productivity.gotoAndStop(__dep_export_CastleModel.CastleModel.breweryData.isMeadProductionActive ? 1 : 2);
    if (__dep_export_CastleModel.CastleModel.breweryData.isMeadProductionActive) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy0, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_relicBrewery_status_productionOngoing_copy"));
    } else if (__dep_export_CastleModel.CastleModel.breweryData.server_production_freeze) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy0, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_relicBrewery_status_productionFreeze_copy"));
    } else if (__dep_export_CastleModel.CastleModel.areaData.activeArea.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.MEAD).amount >= __dep_export_CastleModel.CastleModel.areaData.activeArea.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.MEAD).maxAmount) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy0, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_relicBrewery_status_meadStorageFull_copy"));
    } else if (__dep_export_CastleModel.CastleModel.areaData.activeArea.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.FOOD).amount <= __dep_export_CastleModel.CastleModel.breweryData.stopAtFoodAmount) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy0, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_relicBrewery_status_foodStockLimit_copy"));
    } else if (__dep_export_CastleModel.CastleModel.areaData.activeArea.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.FOOD).amount <= 10) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy0, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_relicBrewery_status_foodDepleted_copy"));
    } else if (__dep_export_CastleModel.CastleModel.areaData.activeArea.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.HONEY).amount <= __dep_export_CastleModel.CastleModel.breweryData.stopAtHoneyAmount) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy0, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_relicBrewery_status_honeyStockLimit_copy"));
    } else if (__dep_export_CastleModel.CastleModel.areaData.activeArea.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.HONEY).amount <= 10) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy0, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_relicBrewery_status_honeyDepleted_copy"));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy0, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_relicBrewery_status_productionPaused_copy"));
    }
    this.onSliderUpdated();
    this.onFoodStopValueInput();
    this.onHoneyStopValueInput();
  };
  CastleBreweryDialog.prototype.initResourceTextfields = function () {
    for (var __s20local0 = [__dep_export_CollectableEnum.CollectableEnum.FOOD, __dep_export_CollectableEnum.CollectableEnum.HONEY, __dep_export_CollectableEnum.CollectableEnum.MEAD], __s20local1 = new __s0local0(30, 30), __s20local2 = 0; __s20local2 < __s20local0.length; __s20local2++) {
      var __s20local3 = __s20local0[__s20local2];
      if (!this.resourceItems.has(__s20local3)) {
        this.resourceItems.set(__s20local3, new __dep_export_ResourceComponentWithStorageBar.ResourceComponentWithStorageBar(this.dialogDisp["mc_resItem" + __s20local2], __s20local3, __s20local1));
      }
      var __s20local4 = __dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__s20local3);
      this.setResource(__s20local3, __s20local4.amount, __s20local4.maxAmount);
    }
    this.updateResIcon(this.dialogDisp.mc_foodStop.mc_icon, __dep_export_CollectableEnum.CollectableEnum.FOOD);
    this.updateResIcon(this.dialogDisp.mc_honeyStop.mc_icon, __dep_export_CollectableEnum.CollectableEnum.HONEY);
  };
  CastleBreweryDialog.prototype.updateResIcon = function (__s25param0, __s25param1) {
    var __s25local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, new __s0local0(30, 30));
    __s25local0.tooltip.useAmount = false;
    var __s25local1 = new __dep_export_CollectableRenderClips.CollectableRenderClips(__s25param0);
    __s25local1.addIconMc(__s25param0);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, __s25local1, __dep_export_CollectableHelper.CollectableHelper.createVO(__s25param1), __s25local0);
  };
  CastleBreweryDialog.prototype.setResource = function (__s27param0, __s27param1, __s27param2 = -1) {
    this.resourceItems.get(__s27param0).setValue(__s27param1, __s27param2);
    this.resourceItems.get(__s27param0).disp.doCache();
  };
  CastleBreweryDialog.prototype.getValueFromString = function (__s29param0) {
    __s29param0 = (__s29param0 = __s29param0.replace(".", "")).replace(",", "");
    return parseInt(__s29param0);
  };
  CastleBreweryDialog.prototype.onFoodStopValueInput = function () {
    var __s31local0 = __dep_exact_9e901e8e2483a22f.MathBase.clamp(this.getValueFromString(this.inputFoodStop.text), 0, __dep_export_CastleModel.CastleModel.areaData.activeArea.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.FOOD).maxAmount);
    if (isNaN(__s31local0)) {
      __s31local0 = this.foodValueController.value;
    }
    this.foodValueController.value = __s31local0 - __s31local0 % 10;
    this.removeFocus();
  };
  CastleBreweryDialog.prototype.onHoneyStopValueInput = function () {
    __dep_export_CastleModel.CastleModel.areaData.activeArea.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.HONEY).maxAmount;
    var __s34local0 = __dep_exact_9e901e8e2483a22f.MathBase.clamp(this.getValueFromString(this.inputHoneyStop.text), 0, __dep_export_CastleModel.CastleModel.areaData.activeArea.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.HONEY).maxAmount);
    if (isNaN(__s34local0)) {
      __s34local0 = this.honeyValueController.value;
    }
    this.honeyValueController.value = __s34local0 - __s34local0 % 10;
    this.removeFocus();
  };
  CastleBreweryDialog.prototype.onPercentValueInput = function () {
    var __s37local0 = __dep_exact_9e901e8e2483a22f.MathBase.clamp(this.getValueFromString(this.inputPercentage.text), 0, 100);
    if (isNaN(__s37local0)) {
      __s37local0 = this.valueSlider.currentValue;
    }
    this.valueSlider.scrollToValue(__s37local0);
    this.removeFocus();
  };
  CastleBreweryDialog.prototype.removeFocus = function (__s40param0 = null) {
    this.inputFoodStop.deselect();
    this.inputHoneyStop.deselect();
    this.inputPercentage.deselect();
  };
  CastleBreweryDialog.prototype.onFoodSliderUpdated = function () {
    this.inputFoodStop.updateText(__dep_exact_92d05af59ee2ff30_1.Localize.number(this.foodValueController.value));
  };
  CastleBreweryDialog.prototype.onHoneySliderUpdated = function () {
    this.inputHoneyStop.updateText(__dep_exact_92d05af59ee2ff30_1.Localize.number(this.honeyValueController.value));
  };
  CastleBreweryDialog.prototype.onSliderUpdated = function (__s46param0 = null) {
    var __s46local0 = __dep_export_CastleModel.CastleModel.breweryData.breweryBuildingVO.meadProduction * this.factor;
    var __s46local1 = __s46local0 * __dep_export_CastleModel.CastleModel.breweryData.breweryBuildingVO.foodRatio;
    var __s46local2 = __s46local0 * __dep_export_CastleModel.CastleModel.breweryData.breweryBuildingVO.honeyRatio;
    var __s46local3 = this.factor > 0 ? (__s46local0 + __dep_export_BreweryHelper.BreweryHelper.getCIBaseBonus()) * __dep_export_BreweryHelper.BreweryHelper.getTotalBoost() + __dep_export_BreweryHelper.BreweryHelper.getTotalBonus() : 0;
    this.itf_food.textContentVO.numberValue = __dep_export_CastleModel.CastleModel.breweryData.server_production_freeze ? 0 : __s46local1;
    this.itf_honey.textContentVO.numberValue = __dep_export_CastleModel.CastleModel.breweryData.server_production_freeze ? 0 : __s46local2;
    this.itf_mead.textContentVO.numberValue = __dep_export_CastleModel.CastleModel.breweryData.server_production_freeze ? 0 : __dep_exact_9e901e8e2483a22f.MathBase.floor(__s46local3, 1);
    this.inputPercentage.updateText(__dep_exact_92d05af59ee2ff30_1.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [this.valueSlider.currentValue]));
    if (this.valueSlider.currentValue % 1 != 0) {
      this.valueSlider.scrollToValue(this.valueSlider.currentValue - this.valueSlider.currentValue % 1);
    }
    this.dialogDisp.amountPicker.mc_sliderLine.otherBar.scaleX = this.valueSlider.currentPercentFactor;
  };
  Object.defineProperty(CastleBreweryDialog.prototype, "factor", {
    get: function () {
      return this.valueSlider.currentValue / 100;
    },
    enumerable: true,
    configurable: true
  });
  CastleBreweryDialog.prototype.onClick = function (__s51param0) {
    __s1param0.prototype.onClick.call(this, __s51param0);
    switch (__s51param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_info:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleBreweryProductionInfoDialog.CastleBreweryProductionInfoDialog, new __dep_export_CastleBreweryProductionInfoDialogProperties.CastleBreweryProductionInfoDialogProperties(this.factor));
        break;
      case this.dialogDisp.btn_save:
        __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSetBreweryProductionVO.C2SSetBreweryProductionVO(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID, __dep_export_CastleModel.CastleModel.areaData.activeArea.areaId, __dep_export_CastleModel.CastleModel.breweryData.breweryBuildingVO.wodId, __dep_export_CastleModel.CastleModel.breweryData.breweryBuildingVO.objectId, this.valueSlider.currentValue, this.foodValueController.value, this.honeyValueController.value));
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30_1.Localize.text("relicBrewery_help"));
        break;
      case this.dialogDisp.cbx_prio:
        this.cbx_prio.toggleSelected();
        __dep_export_CastleModel.CastleModel.breweryData.meadPrioSet = this.cbx_prio.isSelected;
        __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSetMeadPrioVO.C2SSetMeadPrioVO());
    }
  };
  CastleBreweryDialog.prototype.hideLoaded = function (__s54param0 = null) {
    this.valueSlider.hide();
    if (this.inputFoodStop) {
      this.inputFoodStop.onHide();
    }
    if (this.inputHoneyStop) {
      this.inputHoneyStop.onHide();
    }
    if (this.inputPercentage) {
      this.inputPercentage.onHide();
    }
    if (this.foodValueController) {
      this.foodValueController.dispose();
    }
    if (this.honeyValueController) {
      this.honeyValueController.dispose();
    }
    __s1param0.prototype.hideLoaded.call(this);
  };
  CastleBreweryDialog.__initialize_static_members = function () {
    CastleBreweryDialog.NAME = "CastleBrewery_G";
  };
  return CastleBreweryDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleBreweryDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
