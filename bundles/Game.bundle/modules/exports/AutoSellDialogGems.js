Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_AAutoSellDialogSublayer = require("gge-module:export_AAutoSellDialogSublayer");
var __s0local0 = function (__s1param0) {
  function AutoSellDialogGems(__s3param0) {
    var __s3local0 = this;
    __s3local0._items = [];
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AutoSellDialogGems, __s1param0);
  AutoSellDialogGems.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.getLevelButton(0), -1, __dep_export_ClickFeedbackButtonBackground.ClickFeedbackButtonBackground);
    for (var __s5local0 = 0; __s5local0 < AutoSellDialogGems.NUMBER_OF_LEVEL_BUTTONS; ++__s5local0) {
      var __s5local1 = __s5local0 + 1;
      var __s5local2 = this.getLevelButton(__s5local1);
      __dep_export_ButtonHelper.ButtonHelper.initButton(__s5local2, -1, __dep_export_ClickFeedbackButtonBackground.ClickFeedbackButtonBackground);
      this.textFieldManager.registerTextField(__s5local2.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s5local1)).autoFitToBounds = true;
    }
    this._items = [];
    for (var __s5local3 = 0; __s5local3 < AutoSellDialogGems.NUMBER_OF_ITEMS; ++__s5local3) {
      this._items.push(new __dep_export_AutoSellDialogGemsItem.AutoSellDialogGemsItem(this.subLayerDisp.mc_list.getChildByName("mc_item" + __s5local3)));
    }
    this._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.subLayerDisp.mc_list.mc_slider).addMouseWheelElements([this.subLayerDisp]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true));
    this._scrollComponent.init(0, Math.max(0, __dep_export_CastleModel.CastleModel.gemData.numberOfGemColors - AutoSellDialogGems.NUMBER_OF_ITEMS));
    if (this._items != null) {
      for (var __s5local4 = 0, __s5local5 = this._items; __s5local4 < __s5local5.length; __s5local4++) {
        var __s5local6 = __s5local5[__s5local4];
        if (__s5local6 !== undefined) {
          this._scrollComponent.addDisturbingElement(__s5local6.disp.mc_slider);
        }
      }
    }
  };
  AutoSellDialogGems.prototype.show = function (__s15param0) {
    __s1param0.prototype.show.call(this, __s15param0);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    this._scrollComponent.show();
    if (this._items != null) {
      for (var __s15local0 = 0, __s15local1 = this._items; __s15local0 < __s15local1.length; __s15local0++) {
        var __s15local2 = __s15local1[__s15local0];
        if (__s15local2 !== undefined) {
          __s15local2.onShow();
        }
      }
    }
    this.updateItems();
  };
  AutoSellDialogGems.prototype.hide = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    this._scrollComponent.hide();
    if (this._items != null) {
      for (var __s21local0 = 0, __s21local1 = this._items; __s21local0 < __s21local1.length; __s21local0++) {
        var __s21local2 = __s21local1[__s21local0];
        if (__s21local2 !== undefined) {
          __s21local2.onHide();
        }
      }
    }
    __s1param0.prototype.hide.call(this);
  };
  AutoSellDialogGems.prototype.updateItems = function () {
    for (var __s27local0 = 0; __s27local0 < AutoSellDialogGems.NUMBER_OF_ITEMS; ++__s27local0) {
      var __s27local1 = this._items[__s27local0];
      var __s27local2 = __dep_exact_f855840627e6e145.int(this._scrollComponent.currentValue + __s27local0 + 1);
      var __s27local3 = __dep_export_CastleModel.CastleModel.gemData.gemColors.get(__s27local2);
      __s27local1.updateWithNewData(__s27local3);
    }
  };
  AutoSellDialogGems.prototype.getLevelButton = function (__s31param0) {
    return this.subLayerDisp.getChildByName("btn_level" + __s31param0);
  };
  AutoSellDialogGems.prototype.onClick = function (__s33param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s33param0.target)) {
      __s1param0.prototype.onClick.call(this, __s33param0);
      for (var __s33local0 = 0; __s33local0 <= AutoSellDialogGems.NUMBER_OF_LEVEL_BUTTONS; ++__s33local0) {
        if (__s33param0.target == this.getLevelButton(__s33local0)) {
          this.onLevelButtonClicked(__s33local0);
        }
      }
    }
  };
  AutoSellDialogGems.prototype.onLevelButtonClicked = function (__s39param0) {
    var __s39local0 = this;
    var __s39local1 = this.autoSellVO.gems;
    Array.from(__s39local1.actives.keys()).forEach(function (__s41param0) {
      __s39local0.autoSellVO.gems.actives.set(__s41param0, __s39param0);
    });
    if (this._items != null) {
      for (var __s39local2 = 0, __s39local3 = this._items; __s39local2 < __s39local3.length; __s39local2++) {
        var __s39local4 = __s39local3[__s39local2];
        if (__s39local4 !== undefined) {
          __s39local4.update();
        }
      }
    }
  };
  AutoSellDialogGems.prototype.onScroll = function () {
    this.updateItems();
  };
  Object.defineProperty(AutoSellDialogGems.prototype, "autoSellVO", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_AAutoSellDialogSublayer.AAutoSellDialogSublayer.prototype, "autoSellVO").get.call(this);
    },
    set: function (__s51param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAutoSellDialogSublayer.AAutoSellDialogSublayer.prototype, "autoSellVO").set.call(this, __s51param0);
      if (this._items != null) {
        for (var __s51local0 = 0, __s51local1 = this._items; __s51local0 < __s51local1.length; __s51local0++) {
          var __s51local2 = __s51local1[__s51local0];
          if (__s51local2 !== undefined) {
            __s51local2.autoSellVO = __s51param0;
          }
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  AutoSellDialogGems.NUMBER_OF_LEVEL_BUTTONS = 13;
  AutoSellDialogGems.NUMBER_OF_ITEMS = 5;
  return AutoSellDialogGems;
}(__dep_export_AAutoSellDialogSublayer.AAutoSellDialogSublayer);
exports.AutoSellDialogGems = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_AutoSellDialogGemsItem = require("gge-module:export_AutoSellDialogGemsItem");
var __dep_export_ClickFeedbackButtonBackground = require("gge-module:export_ClickFeedbackButtonBackground");
