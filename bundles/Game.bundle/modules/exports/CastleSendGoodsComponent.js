Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function CastleSendGoodsComponent(__s3param0, __s3param1, __s3param2 = null, __s3param3 = false) {
    this.tabIndex = 0;
    this._hideTabs = false;
    this._resourceSelectors = [];
    this.disp = __s3param0;
    this.callBack = __s3param2;
    this._sendGoodsInfo = __s3param1;
    this._hideTabs = __s3param3;
    __s3param0.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param0.btn_tabClassic);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param0.btn_tabSpecial);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param0.btn_tabMead);
    this.disp.btn_tabClassic.toolTipText = "normalResource";
    this.disp.btn_tabSpecial.toolTipText = "kingdomResource";
    this.disp.btn_tabMead.toolTipText = "meadResource";
    CastleSendGoodsComponent.resListClassic = [__dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.WOOD, __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.STONE, __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.FOOD];
    CastleSendGoodsComponent.resCollectableEnumsClassic = [__dep_export_CollectableEnum.CollectableEnum.WOOD, __dep_export_CollectableEnum.CollectableEnum.STONE, __dep_export_CollectableEnum.CollectableEnum.FOOD];
    CastleSendGoodsComponent.resListSpecial = [__dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.COAL, __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.OIL, __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.GLASS, __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.IRON];
    CastleSendGoodsComponent.resCollectableEnumsSpecial = [__dep_export_CollectableEnum.CollectableEnum.COAL, __dep_export_CollectableEnum.CollectableEnum.OIL, __dep_export_CollectableEnum.CollectableEnum.GLASS, __dep_export_CollectableEnum.CollectableEnum.IRON];
    CastleSendGoodsComponent.resListMead = [__dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.HONEY, __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.MEAD, __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.BEEF];
    CastleSendGoodsComponent.resCollectableEnumsMead = [__dep_export_CollectableEnum.CollectableEnum.HONEY, __dep_export_CollectableEnum.CollectableEnum.MEAD, __dep_export_CollectableEnum.CollectableEnum.BEEF];
    CastleSendGoodsComponent._specialLevelRestrictions = [__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.getResourceMinLevelByKingdomID(__dep_exact_26a421b704832cff_4.WorldIce.KINGDOM_ID), __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.getResourceMinLevelByKingdomID(__dep_exact_26a421b704832cff_3.WorldDessert.KINGDOM_ID), __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.getResourceMinLevelByKingdomID(__dep_exact_26a421b704832cff_5.WorldVolcano.KINGDOM_ID), __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.getResourceMinLevelByKingdomID(__dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID)];
    CastleSendGoodsComponent.resLists = [CastleSendGoodsComponent.resListClassic, CastleSendGoodsComponent.resListSpecial, CastleSendGoodsComponent.resListMead];
    CastleSendGoodsComponent.resCollLists = [CastleSendGoodsComponent.resCollectableEnumsClassic, CastleSendGoodsComponent.resCollectableEnumsSpecial, CastleSendGoodsComponent.resCollectableEnumsMead];
    this.setTabVisibility();
    this.setCategory(0);
  }
  CastleSendGoodsComponent.prototype.setTabVisibility = function () {
    var __s5local0 = __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_exact_26a421b704832cff.PlayerConst.LEVEL_CAP;
    var __s5local1 = this._sendGoodsInfo.targetObject ? this._sendGoodsInfo.targetObject.ownerInfo.playerLevel : 0;
    var __s5local2 = this._sendGoodsInfo.targetObject ? this._sendGoodsInfo.targetObject.ownerInfo.playerLegendLevel : __dep_export_CastleModel.CastleModel.userData.userLegendLevel;
    var __s5local3 = !this._sendGoodsInfo.targetObject || __s5local1 >= __dep_exact_26a421b704832cff.PlayerConst.LEVEL_CAP;
    var __s5local4 = !this._hideTabs && !this.isBoosterArea && __s5local2 >= __dep_export_CastleModel.CastleModel.areaData.activeStorage.minHoneyMeadLegendLevel;
    this.disp.btn_tabMead.visible = __dep_export_CastleModel.CastleModel.userData.isLegend && __s5local4;
    this.disp.btn_tabSpecial.visible = this.disp.btn_tabClassic.visible = __dep_export_CastleModel.CastleModel.userData.isLegend && (__s5local4 || !this.isBoosterArea && !this._hideTabs && __s5local0 && __s5local3);
    this.disp.mc_deco.gotoAndStop(this.disp.btn_tabSpecial.visible ? 1 : 2);
  };
  CastleSendGoodsComponent.prototype.initResourceCollectors = function () {
    var __s7local0 = new Map();
    if (this._resourceSelectors != null) {
      for (var __s7local1 = 0, __s7local2 = this._resourceSelectors; __s7local1 < __s7local2.length; __s7local1++) {
        var __s7local3 = __s7local2[__s7local1];
        if (__s7local3 !== undefined) {
          __s7local0.set(CastleSendGoodsComponent.RES + __s7local3.type, __s7local3.selectionSlider.selectedIndex);
        }
      }
    }
    this.destroyOldSelectors();
    var __s7local4 = CastleSendGoodsComponent.resLists[this.tabIndex];
    var __s7local5 = CastleSendGoodsComponent.resCollLists[this.tabIndex];
    var __s7local6 = __dep_exact_f855840627e6e145.int(this.isBoosterArea ? 2 : this.tabIndex == 1 ? __s7local4.length - CastleSendGoodsComponent.hiddenSpecialResources() : __s7local4.length);
    this.setVisibility(__s7local6);
    for (var __s7local7 = 0; __s7local7 < __s7local6; __s7local7++) {
      var __s7local8;
      var __s7local9 = "cant_send_Resource";
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(this._sendGoodsInfo, "CastleSendGoodsKingdomVO")) {
        var __s7local10 = this._sendGoodsInfo;
        var __s7local11 = __dep_exact_f855840627e6e145.int(__s7local10.targetResources.getItemByType(__s7local5[__s7local7]).amount);
        var __s7local12 = __dep_exact_f855840627e6e145.int(__s7local10.storageSpace.getItemByType(__s7local5[__s7local7]).amount);
        __s7local8 = new __dep_export_CastleRessourceCollectorSendToKingdomComponent.CastleRessourceCollectorSendToKingdomComponent(this.subDisp["mc_" + __s7local7], __s7local10.taxRate, __s7local11, __s7local12, this.subDisp["info_storage" + __s7local7], __s7local10.isSubscriptionBuffed);
        __s7local9 = __s7local11 >= __s7local12 ? "dialog_kingdom_sendRes_targetStorageFull_tooltip" : "dialog_kingdom_sendRes_sourceStorageEmpty_tooltip";
      } else {
        __s7local8 = new __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent(this.subDisp["mc_" + __s7local7]);
        if (this.getSendableAmountByType(__s7local5[__s7local7]) <= 0) {
          __s7local9 = "dialog_kingdom_sendRes_sourceStorageEmpty_tooltip";
        }
      }
      this._resourceSelectors.push(__s7local8);
      __s7local8.initComponent(Math.min(this._sendGoodsInfo.marketCarriageCapacity, this.getSendableAmountByType(__s7local5[__s7local7])), __s7local4[__s7local7], 61 + __s7local7, __s7local9);
      this.subDisp["mc_" + __s7local7].mc_icon.mouseChildren = false;
      if (__s7local0.has(CastleSendGoodsComponent.RES + __s7local8.type)) {
        __s7local8.selectionSlider.setSelectedIndex(__s7local0.get(CastleSendGoodsComponent.RES + __s7local8.type));
        __s7local8.setAmountText();
      }
    }
    this.applySpecialLevelRestrictions();
    this.onSliderChanged();
    this.registerListeners();
    if (this.bindFunction(this.callBack)) {
      this.callBack();
    }
  };
  CastleSendGoodsComponent.prototype.getSendableAmountByType = function (__s20param0) {
    return __dep_exact_f855840627e6e145.int(this._sendGoodsInfo.availableResources.getItemByType(__s20param0).amount);
  };
  CastleSendGoodsComponent.hiddenSpecialResources = function () {
    var __s22local0 = 0;
    for (var __s22local1 = 0; __s22local1 < CastleSendGoodsComponent.resListSpecial.length; __s22local1++) {
      if (__dep_export_CastleModel.CastleModel.userData.userLevel < CastleSendGoodsComponent._specialLevelRestrictions[__s22local1]) {
        __s22local0 += 1;
      }
    }
    return __s22local0;
  };
  CastleSendGoodsComponent.prototype.onClick = function (__s27param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s27param0.target)) {
      switch (__s27param0.target) {
        case this.disp.btn_tabClassic:
          this.setCategory(0);
          break;
        case this.disp.btn_tabSpecial:
          this.setCategory(1);
          break;
        case this.disp.btn_tabMead:
          this.setCategory(2);
      }
    }
  };
  CastleSendGoodsComponent.prototype.applySpecialLevelRestrictions = function () {
    for (var __s31local0 = 0; __s31local0 < this._resourceSelectors.length; __s31local0++) {
      if (this.tabIndex == 1) {
        this._resourceSelectors[__s31local0].enableComponent(!this._sendGoodsInfo.targetObject || this._sendGoodsInfo.targetObject.ownerInfo.playerLevel >= CastleSendGoodsComponent._specialLevelRestrictions[__s31local0]);
      } else {
        this._resourceSelectors[__s31local0].enableComponent(true);
      }
    }
  };
  CastleSendGoodsComponent.prototype.destroyOldSelectors = function () {
    this.removeListeners();
    if (this._resourceSelectors != null) {
      for (var __s37local0 = 0, __s37local1 = this._resourceSelectors; __s37local0 < __s37local1.length; __s37local0++) {
        var __s37local2 = __s37local1[__s37local0];
        if (__s37local2 !== undefined) {
          __s37local2.destroy();
        }
      }
    }
    this._resourceSelectors = [];
  };
  CastleSendGoodsComponent.prototype.setCategory = function (__s43param0) {
    this.tabIndex = __s43param0;
    this.disp.btn_tabClassic.gotoAndStop(__s43param0 == 0 ? 1 : 2);
    this.disp.btn_tabSpecial.gotoAndStop(__s43param0 == 1 ? 1 : 2);
    this.disp.btn_tabMead.gotoAndStop(__s43param0 == 2 ? 1 : 2);
    this.initResourceCollectors();
  };
  CastleSendGoodsComponent.prototype.setVisibility = function (__s45param0) {
    this.subDisp = this.disp["mc_selector_" + CastleSendGoodsComponent.NUMBERS[__s45param0 - 1]];
    for (var __s45local0 = 0; __s45local0 < CastleSendGoodsComponent.NUMBERS.length; __s45local0++) {
      this.disp["mc_selector_" + CastleSendGoodsComponent.NUMBERS[__s45local0]].visible = __s45local0 == __s45param0 - 1;
    }
  };
  CastleSendGoodsComponent.prototype.registerListeners = function () {
    if (this._resourceSelectors != null) {
      for (var __s49local0 = 0, __s49local1 = this._resourceSelectors; __s49local0 < __s49local1.length; __s49local0++) {
        var __s49local2 = __s49local1[__s49local0];
        if (__s49local2 !== undefined) {
          __s49local2.selectionSlider.addEventListener(__dep_export_SliderEvent.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderChanged));
        }
      }
    }
  };
  CastleSendGoodsComponent.prototype.removeListeners = function () {
    if (this._resourceSelectors != null) {
      for (var __s55local0 = 0, __s55local1 = this._resourceSelectors; __s55local0 < __s55local1.length; __s55local0++) {
        var __s55local2 = __s55local1[__s55local0];
        if (__s55local2 !== undefined) {
          __s55local2.selectionSlider.removeEventListener(__dep_export_SliderEvent.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderChanged));
          __s55local2.resetValue();
        }
      }
    }
  };
  CastleSendGoodsComponent.prototype.onSliderChanged = function (__s61param0 = null) {
    var __s61local0;
    var __s61local1 = __s61param0 ? __s61param0.target : null;
    var __s61local2 = [];
    var __s61local3 = 0;
    var __s61local4 = 0;
    var __s61local5 = 0;
    for (var __s61local6 = 0, __s61local7 = this._resourceSelectors; __s61local6 < __s61local7.length; __s61local6++) {
      if (__s61local0 = __s61local7[__s61local6]) {
        __s61local3 += __s61local0.getSelectedAmount();
        if (__s61local1 != __s61local0.selectionSlider) {
          __s61local2.push(__s61local0);
          __s61local5 += __s61local0.selectionSlider.percentValue;
        }
      }
    }
    if ((__s61local4 = __s61local3 - this._sendGoodsInfo.marketCarriageCapacity) > 0) {
      __s61local3 = 0;
      for (var __s61local8 = 0; __s61local8 < __s61local2.length; __s61local8++) {
        if (__s61local2[__s61local8]) {
          __s61local3 += __dep_exact_f855840627e6e145.int(__s61local2[__s61local8].getSelectedAmount());
          __s61local2[__s61local8].selectionSlider.setSelectedIndex(__s61local2[__s61local8].selectionSlider.selectedIndex - Math.round(__s61local4 / __s61local5 * __s61local2[__s61local8].selectionSlider.percentValue), false);
        }
      }
      __s61local3 = 0;
      __s61local5 = 0;
      for (var __s61local9 = 0, __s61local10 = this._resourceSelectors; __s61local9 < __s61local10.length; __s61local9++) {
        if (__s61local0 = __s61local10[__s61local9]) {
          __s61local3 += __s61local0.getSelectedAmount();
          if (__s61local1 != __s61local0.selectionSlider) {
            __s61local2.push(__s61local0);
            __s61local5 += __s61local0.selectionSlider.percentValue;
          }
        }
      }
      if ((__s61local4 = __s61local3 - this._sendGoodsInfo.marketCarriageCapacity) != 0) {
        for (var __s61local11 = 0, __s61local12 = this._resourceSelectors; __s61local11 < __s61local12.length; __s61local11++) {
          if (__s61local0 = __s61local12[__s61local11]) {
            __s61local3 += __s61local0.getSelectedAmount();
            if (__s61local1 != __s61local0.selectionSlider) {
              __s61local2.push(__s61local0);
              __s61local5 += __s61local0.selectionSlider.percentValue;
            }
          }
        }
        __s61local2[0].selectionSlider.setSelectedIndex(__s61local2[0].selectionSlider.selectedIndex - __s61local4, false);
      }
    }
    if (this._resourceSelectors != null) {
      for (var __s61local13 = 0, __s61local14 = this._resourceSelectors; __s61local13 < __s61local14.length; __s61local13++) {
        var __s61local15 = __s61local14[__s61local13];
        if (__s61local15 !== undefined) {
          __s61local15.setAmountText();
        }
      }
    }
    if (this.bindFunction(this.callBack)) {
      this.callBack();
    }
  };
  CastleSendGoodsComponent.prototype.rewardList = function () {
    var __s85local0 = [];
    var __s85local1 = CastleSendGoodsComponent.resCollLists[this.tabIndex];
    for (var __s85local2 = 0; __s85local2 < this._resourceSelectors.length; __s85local2++) {
      __s85local0.push(__dep_export_CollectableHelper.CollectableHelper.createVO(__s85local1[__s85local2], this._resourceSelectors[__s85local2].getSelectedAmount()));
    }
    return __s85local0;
  };
  CastleSendGoodsComponent.prototype.changeCastle = function (__s89param0) {
    this._sendGoodsInfo = __s89param0;
    this.initResourceCollectors();
    this.setCategory(0);
    this.setTabVisibility();
  };
  CastleSendGoodsComponent.prototype.getSelectedSum = function () {
    var __s91local0 = 0;
    if (this._resourceSelectors != null) {
      for (var __s91local1 = 0, __s91local2 = this._resourceSelectors; __s91local1 < __s91local2.length; __s91local1++) {
        var __s91local3 = __s91local2[__s91local1];
        if (__s91local3 !== undefined) {
          __s91local0 += __s91local3.getSelectedAmount();
        }
      }
    }
    return __s91local0;
  };
  Object.defineProperty(CastleSendGoodsComponent.prototype, "selectedIndices", {
    get: function () {
      var __s97local0 = [];
      if (this._resourceSelectors != null) {
        for (var __s97local1 = 0, __s97local2 = this._resourceSelectors; __s97local1 < __s97local2.length; __s97local1++) {
          var __s97local3 = __s97local2[__s97local1];
          if (__s97local3 !== undefined) {
            __s97local0.push(__s97local3.selectionSlider.selectedIndex);
          }
        }
      }
      return __s97local0;
    },
    set: function (__s103param0) {
      for (var __s103local0 = 0; __s103local0 < this._resourceSelectors.length; __s103local0++) {
        this._resourceSelectors[__s103local0].selectionSlider.setSelectedIndex(__s103param0[__s103local0]);
        this._resourceSelectors[__s103local0].setAmountText();
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleSendGoodsComponent.prototype.hide = function () {
    this.destroyOldSelectors();
    this.disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
  };
  Object.defineProperty(CastleSendGoodsComponent.prototype, "isBoosterArea", {
    get: function () {
      return !!this._sendGoodsInfo.targetObject && (this._sendGoodsInfo.targetObject.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_MONUMENT || this._sendGoodsInfo.targetObject.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_LABORATORY);
    },
    enumerable: true,
    configurable: true
  });
  CastleSendGoodsComponent.__initialize_static_members = function () {
    CastleSendGoodsComponent.NUMBERS = ["single", "dual", "triple", "quad"];
    CastleSendGoodsComponent.RES = "RES";
    CastleSendGoodsComponent.resListClassic = [__dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.WOOD, __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.STONE, __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.FOOD];
    CastleSendGoodsComponent.resCollectableEnumsClassic = [__dep_export_CollectableEnum.CollectableEnum.WOOD, __dep_export_CollectableEnum.CollectableEnum.STONE, __dep_export_CollectableEnum.CollectableEnum.FOOD];
    CastleSendGoodsComponent.resListMead = [__dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.HONEY, __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.MEAD, __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.BEEF];
    CastleSendGoodsComponent.resCollectableEnumsMead = [__dep_export_CollectableEnum.CollectableEnum.HONEY, __dep_export_CollectableEnum.CollectableEnum.MEAD, __dep_export_CollectableEnum.CollectableEnum.BEEF];
    CastleSendGoodsComponent.resListSpecial = [__dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.COAL, __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.OIL, __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.GLASS, __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.IRON];
    CastleSendGoodsComponent.resCollectableEnumsSpecial = [__dep_export_CollectableEnum.CollectableEnum.COAL, __dep_export_CollectableEnum.CollectableEnum.OIL, __dep_export_CollectableEnum.CollectableEnum.GLASS, __dep_export_CollectableEnum.CollectableEnum.IRON];
    CastleSendGoodsComponent._specialLevelRestrictions = [__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.getResourceMinLevelByKingdomID(__dep_exact_26a421b704832cff_4.WorldIce.KINGDOM_ID), __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.getResourceMinLevelByKingdomID(__dep_exact_26a421b704832cff_3.WorldDessert.KINGDOM_ID), __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.getResourceMinLevelByKingdomID(__dep_exact_26a421b704832cff_5.WorldVolcano.KINGDOM_ID), __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.getResourceMinLevelByKingdomID(__dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID)];
  };
  return CastleSendGoodsComponent;
}();
exports.CastleSendGoodsComponent = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CastleResourceCollectorComponent = require("gge-module:export_CastleResourceCollectorComponent");
var __dep_export_CastleRessourceCollectorSendToKingdomComponent = require("gge-module:export_CastleRessourceCollectorSendToKingdomComponent");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_5 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_SliderEvent = require("gge-module:export_SliderEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
__s0local1.__initialize_static_members();
