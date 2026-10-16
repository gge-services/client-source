Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_BasicPickerEvent = require("gge-module:export_BasicPickerEvent");
var __dep_export_SliderEvent = require("gge-module:export_SliderEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_TextPicker = require("gge-module:export_TextPicker");
var __dep_export_BasicSliderVO = require("gge-module:export_BasicSliderVO");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleDefenceBuyUnitsDialog() {
    return __s1param0.call(this, CastleDefenceBuyUnitsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDefenceBuyUnitsDialog, __s1param0);
  CastleDefenceBuyUnitsDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancle, this.dialogDisp.btn_ok]);
  };
  CastleDefenceBuyUnitsDialog.prototype.showLoaded = function (__s7param0 = null) {
    this._amoutPicker = new __dep_export_TextPicker.TextPicker(this.dialogDisp.amoutPicker);
    this._amoutPicker.setNumItems(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_BUY_MAXIMUM + 1);
    var __s7local0 = new __dep_export_BasicSliderVO.BasicSliderVO(this.dialogDisp.mc_slider.sliderBar, this.dialogDisp.mc_slider.btn_slider, __dep_export_ClientConstCastle.ClientConstCastle.UNIT_BUY_MAXIMUM, 0, this.dialogDisp);
    this._amountSlider = new __dep_export_ScrollComponent.ScrollComponent(__s7local0, __dep_export_ScrollComponent.ScrollComponent.HORIZONTAL_SLIDER);
    this._amountSlider.addEventListener(__dep_export_SliderEvent.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderValueChange));
    this._associatedEventPackage = __dep_export_CastleModel.CastleModel.permanentCastleData.getUnitBaseLocation(this.defenceBuyUnitsProperties.worldmapObjectVO).unitsVO.getAssociatedEventPackage(this.defenceBuyUnitsProperties.unitVO.wodId);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.defenceBuyUnitsProperties.unitVO.getNameString()));
    __dep_export_WodPicHelper.WodPicHelper.addUnitPic(this.defenceBuyUnitsProperties.unitVO, this.dialogDisp.mc_content, CastleDefenceBuyUnitsDialog.MAX_WIDTH, CastleDefenceBuyUnitsDialog.MAX_HEIGHT, __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[0], __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[1]);
    this.onChangeUnitAmount();
    this.dialogDisp.addEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onChangeUnitAmount));
    __s1param0.prototype.showLoaded.call(this, __s7param0);
  };
  CastleDefenceBuyUnitsDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onSpecialEventChange));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventChange));
  };
  CastleDefenceBuyUnitsDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onSpecialEventChange));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventChange));
  };
  CastleDefenceBuyUnitsDialog.prototype.onSpecialEventChange = function (__s13param0) {
    if (__s13param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_EVENT_PACKAGE_PRIME_SALES) {
      this.updateCosts();
    }
    if (__s13param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ARMORER && !__dep_export_CastleModel.CastleModel.specialEventData.getEventByClass(__s13param0.specialEventVO.constructor) && __dep_exact_81dacdf05bd32292_2.instanceOfClass(this.defenceBuyUnitsProperties.unitVO, "ElitetoolUnitVO")) {
      this.hide();
    }
    if (!__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__s13param0.specialEventVO.eventId)) {
      this.hide();
    }
  };
  CastleDefenceBuyUnitsDialog.prototype.onSliderValueChange = function (__s18param0) {
    this._amoutPicker.selectedValue = __s18param0.selectedValue;
    this.updateCosts();
  };
  CastleDefenceBuyUnitsDialog.prototype.hideLoaded = function (__s20param0 = null) {
    this.dialogDisp.removeEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onChangeUnitAmount));
    this._amoutPicker.dispose();
    __s1param0.prototype.hideLoaded.call(this, __s20param0);
  };
  CastleDefenceBuyUnitsDialog.prototype.onChangeUnitAmount = function (__s22param0 = null) {
    this._amountSlider.setSelectedIndex(this._amoutPicker.selectedValue);
    this.updateCosts();
  };
  CastleDefenceBuyUnitsDialog.prototype.updateCosts = function () {
    var __s24local0 = __dep_exact_f855840627e6e145.int(this._associatedEventPackage ? this._associatedEventPackage.c2Discount : 0);
    var __s24local1 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_UNIT_PRIME_SALE), "UnitPrimeSaleEventVO");
    if (__s24local1 && __s24local1.wodIDHasDiscount(this.defenceBuyUnitsProperties.unitVO.wodId) && __s24local0 == 0) {
      __s24local0 = __s24local1.discount;
    }
    var __s24local2 = __dep_exact_f855840627e6e145.int(Math.min(this.defenceBuyUnitsProperties.unitVO.costC2, this._associatedEventPackage ? this._associatedEventPackage.basicPriceC2 : this.defenceBuyUnitsProperties.unitVO.costC2));
    var __s24local3 = Math.ceil(__s24local2 * (1 - __s24local0 / 100)) * this.selectedUnitAmout;
    var __s24local4 = __dep_export_CollectableManager.CollectableManager.parser.createGoodsListSave(new __dep_export_CollectableItemC2VO.CollectableItemC2VO(__s24local3));
    __dep_export_CostHelper.CostHelper.initAsCosts(__s24local4, this.dialogDisp);
    if (__s24local0 > 0) {
      this.dialogDisp.mc_discount.visible = true;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_discount.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [__s24local0]));
    } else {
      this.dialogDisp.mc_discount.visible = false;
    }
  };
  Object.defineProperty(CastleDefenceBuyUnitsDialog.prototype, "selectedUnitAmout", {
    get: function () {
      return this._amoutPicker.selectedValue + 1;
    },
    enumerable: true,
    configurable: true
  });
  CastleDefenceBuyUnitsDialog.prototype.onClick = function (__s31param0) {
    if (!this.isLocked && !this.isWaitingForServerMessage && (__s1param0.prototype.onClick.call(this, __s31param0), __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s31param0.target))) {
      switch (__s31param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancle:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          var __s31local0 = __dep_exact_f855840627e6e145.int(this._associatedEventPackage ? this._associatedEventPackage.packageID : -1);
          this.defenceBuyUnitsProperties.unitVO.requestInstantBuy(this.selectedUnitAmout, this.defenceBuyUnitsProperties.worldmapObjectVO.absAreaPos, this.defenceBuyUnitsProperties.worldmapObjectVO.kingdomID, this.defenceBuyUnitsProperties.mapID, __s31local0);
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleDefenceBuyUnitsDialog.prototype, "defenceBuyUnitsProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleDefenceBuyUnitsDialog.NAME = "CastleDefenceBuyUnitsEx";
  CastleDefenceBuyUnitsDialog.MAX_WIDTH = 70;
  CastleDefenceBuyUnitsDialog.MAX_HEIGHT = 70;
  return CastleDefenceBuyUnitsDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleDefenceBuyUnitsDialog = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableItemC2VO = require("gge-module:export_CollectableItemC2VO");
var __dep_export_ScrollComponent = require("gge-module:export_ScrollComponent");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
