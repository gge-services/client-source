Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstPackages = require("gge-module:export_ClientConstPackages");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function ModernPackageShopBuyDialog() {
    var __s3local0 = this;
    __s3local0._elements = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, ModernPackageShopBuyDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ModernPackageShopBuyDialog, __s1param0);
  ModernPackageShopBuyDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("buy"))).autoFitToBounds = true;
  };
  ModernPackageShopBuyDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventChanged));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventChanged));
    this.buildElements();
    this.updateContent();
  };
  ModernPackageShopBuyDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventChanged));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventChanged));
    if (this._elements != null) {
      for (var __s9local0 = 0, __s9local1 = this._elements; __s9local0 < __s9local1.length; __s9local0++) {
        var __s9local2 = __s9local1[__s9local0];
        if (__s9local2 !== undefined) {
          __s9local2.destroy();
        }
      }
    }
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
  };
  ModernPackageShopBuyDialog.prototype.buildElements = function () {
    if (this._elements != null) {
      for (var __s15local0 = 0, __s15local1 = this._elements; __s15local0 < __s15local1.length; __s15local0++) {
        var __s15local2 = __s15local1[__s15local0];
        if (__s15local2 !== undefined) {
          __s15local2.destroy();
        }
      }
    }
    this._elements = [];
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_elements);
    var __s15local3 = this.dialogProperties.eventPackageVO.reward;
    var __s15local4 = this.dialogProperties.eventPackageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_BUNDLE;
    var __s15local5 = __s15local3.itemType == __dep_export_CollectableEnum.CollectableEnum.RELIC_EQUIPMENT;
    if (__s15local4) {
      this.addElement(__dep_export_ModernPackageShopBuyElementEnum.ModernPackageShopBuyElementEnum.COMMON_INFO_BUNDLE);
    } else if (__s15local5) {
      this.addElement(__dep_export_ModernPackageShopBuyElementEnum.ModernPackageShopBuyElementEnum.COMMON_INFO_RELIC);
    } else {
      this.addElement(__dep_export_ModernPackageShopBuyElementEnum.ModernPackageShopBuyElementEnum.COMMON_INFO);
    }
    this.addElement(__dep_export_ModernPackageShopBuyElementEnum.ModernPackageShopBuyElementEnum.INFO).setVisibility(false);
    if (__s15local4) {
      this.addElement(__dep_export_ModernPackageShopBuyElementEnum.ModernPackageShopBuyElementEnum.BUNDLE_REWARDS);
    } else if (__s15local5) {
      this.addElement(__dep_export_ModernPackageShopBuyElementEnum.ModernPackageShopBuyElementEnum.RELIC_INFO);
    }
    if (!__s15local4) {
      this.addElement(__dep_export_ModernPackageShopBuyElementEnum.ModernPackageShopBuyElementEnum.AMOUNT);
    }
    this.addElement(__dep_export_ModernPackageShopBuyElementEnum.ModernPackageShopBuyElementEnum.COSTS);
    this.addElement(__dep_export_ModernPackageShopBuyElementEnum.ModernPackageShopBuyElementEnum.BOTTOM_MENU);
    this.alignDialog();
  };
  ModernPackageShopBuyDialog.prototype.addElement = function (__s27param0) {
    var __s27local0 = new __s27param0.clazz();
    this.dialogDisp.mc_elements.addChild(__s27local0.disp);
    this._elements.push(__s27local0);
    __s27local0.init(this);
    __s27local0.onShow();
    return __s27local0;
  };
  ModernPackageShopBuyDialog.prototype.alignDialog = function () {
    var __s29local0 = 0;
    if (this._elements != null) {
      for (var __s29local1 = 0, __s29local2 = this._elements; __s29local1 < __s29local2.length; __s29local1++) {
        var __s29local3 = __s29local2[__s29local1];
        if (__s29local3 !== undefined) {
          if (__s29local3.isVisible) {
            __s29local3.disp.x = 0;
            __s29local3.disp.y = __s29local0;
            var __s29local4 = __s29local3.disp.getBounds(null);
            __s29local0 += __s29local3.getDispHeight() + __s29local4.y;
          } else {
            __s29local3.disp.x = 0;
            __s29local3.disp.y = 0;
          }
        }
      }
    }
    this.dialogDisp.mc_background.height = ModernPackageShopBuyDialog.INITIAL_BACKGROUND_HEIGHT + __s29local0;
    this.updatePosition();
  };
  ModernPackageShopBuyDialog.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      var __s37local0 = this.dispBounds.clone();
      __s37local0.height = this.dialogDisp.mc_background.height;
      var __s37local1 = 1;
      if (this.disp.stage.stageWidth < __s37local0.width) {
        __s37local1 = this.disp.stage.stageWidth / __s37local0.width;
      }
      if (this.disp.stage.stageHeight < __s37local0.height * __s37local1) {
        __s37local1 = this.disp.stage.stageHeight / __s37local0.height;
      }
      this.disp.x = -__s37local0.left * __s37local1 - __s37local0.width * __s37local1 * 0.5 + this.disp.stage.stageWidth * 0.5;
      this.disp.y = -__s37local0.top * __s37local1 - __s37local0.height * __s37local1 * 0.5 + this.disp.stage.stageHeight * 0.5;
      this.disp.scaleX = this.disp.scaleY = __s37local1;
      this.disp.x = __dep_exact_f855840627e6e145.int(this.disp.x);
      this.disp.y = __dep_exact_f855840627e6e145.int(this.disp.y);
    }
  };
  ModernPackageShopBuyDialog.prototype.updateContent = function () {
    if (this._elements != null) {
      for (var __s42local0 = 0, __s42local1 = this._elements; __s42local0 < __s42local1.length; __s42local0++) {
        var __s42local2 = __s42local1[__s42local0];
        if (__s42local2 !== undefined) {
          __s42local2.update();
        }
      }
    }
    this.alignDialog();
  };
  ModernPackageShopBuyDialog.prototype.getElement = function (__s48param0) {
    if (this._elements != null) {
      for (var __s48local0 = 0, __s48local1 = this._elements; __s48local0 < __s48local1.length; __s48local0++) {
        var __s48local2 = __s48local1[__s48local0];
        if (__s48local2 !== undefined && __s48local2.elementType == __s48param0) {
          return __s48local2;
        }
      }
    }
    return null;
  };
  ModernPackageShopBuyDialog.prototype.onClick = function (__s54param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s54param0.target)) {
      __s1param0.prototype.onClick.call(this, __s54param0);
      switch (__s54param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  ModernPackageShopBuyDialog.prototype.onSelectedAmountChanged = function () {
    var __s58local0 = this.getElement(__dep_export_ModernPackageShopBuyElementEnum.ModernPackageShopBuyElementEnum.COSTS);
    if (__s58local0) {
      __s58local0.update();
    }
  };
  ModernPackageShopBuyDialog.prototype.onEventChanged = function (__s61param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s61param0.specialEventVO, "EventPackagePrimeSaleEventVO") && __s61param0.specialEventVO.packageIDs.indexOf(this.dialogProperties.eventPackageVO.packageID) > -1) {
      this.hide();
    }
    if (this.dialogProperties.specialEventVO && __s61param0.specialEventVO.eventId == this.dialogProperties.specialEventVO.eventId) {
      this.hide();
    }
  };
  Object.defineProperty(ModernPackageShopBuyDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  ModernPackageShopBuyDialog.NAME = "ModernPackageShopBuy_V";
  ModernPackageShopBuyDialog.INITIAL_BACKGROUND_HEIGHT = 63;
  return ModernPackageShopBuyDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.ModernPackageShopBuyDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_ModernPackageShopBuyElementEnum = require("gge-module:export_ModernPackageShopBuyElementEnum");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
