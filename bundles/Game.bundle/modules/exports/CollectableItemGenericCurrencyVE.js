Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __s0local0 = function (__s1param0) {
  function CollectableItemGenericCurrencyVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemGenericCurrencyVE, __s1param0);
  CollectableItemGenericCurrencyVE.prototype.iconCreate = function () {
    var __s5local0 = this.getAssetName();
    if (__s5local0) {
      this.dispCreator.addClip(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s5local0, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(__s5local0), null, 0, false));
    }
  };
  CollectableItemGenericCurrencyVE.prototype.updateNumberTextfield = function () {
    if (this.dispCreator && this.dispCreator.clipList && this.dispCreator.clipList.length > 0) {
      var __s8local0 = this.dispCreator.clipList[0].currentshownDisplayObject.txt_number;
      if (__s8local0) {
        __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s8local0, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.currencyVO.xmlCurrencyVO.tier), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
        if (this.dispCreator.dispContainer.cacheCanvas) {
          __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(this.dispCreator.dispContainer);
          this.dispCreator.updateCache();
        }
      }
    }
  };
  CollectableItemGenericCurrencyVE.prototype.textfieldUpdate = function () {
    if (this.currencyVO.id == __dep_export_ClientConstCurrency.ClientConstCurrency.ID_STATUETTE_MALUS) {
      if (this.vo.amount == 0) {
        this.textfieldSetText(__dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PERCENTAGE, [this.vo.amount]));
      } else {
        this.textfieldSetText(__dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [this.vo.amount]));
      }
    } else {
      __s1param0.prototype.textfieldUpdate.call(this);
    }
  };
  CollectableItemGenericCurrencyVE.prototype.getAssetName = function () {
    if (!this.currencyVO.xmlCurrencyVO) {
      return null;
    }
    var __s19local0 = this.currencyVO.xmlCurrencyVO.assetName;
    if (__s19local0 == null || __s19local0 == "") {
      __s19local0 = this.currencyVO.xmlCurrencyVO.name;
    }
    var __s19local1 = this.options && this.options.icon.useDropShadowIcon ? "_DropShadow" : "";
    if (this.options) {
      if (this.options.icon.dimension.y <= 20 && __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.isItemAssetVersioned("Collectable_Currency_" + __s19local0 + "_small")) {
        return "Collectable_Currency_" + __s19local0 + "_small";
      }
      if (this.options.icon.dimension.y <= 30 && __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.isItemAssetVersioned("Collectable_Currency_" + __s19local0 + "_medium")) {
        return "Collectable_Currency_" + __s19local0 + "_medium";
      }
    }
    if (__dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.isItemAssetVersioned("Collectable_Currency_" + __s19local0 + __s19local1)) {
      return "Collectable_Currency_" + __s19local0 + __s19local1;
    } else {
      return "Collectable_Currency_" + __s19local0;
    }
  };
  CollectableItemGenericCurrencyVE.prototype.onAllDispClipsLoaded = function (__s28param0 = null) {
    __s1param0.prototype.onAllDispClipsLoaded.call(this, __s28param0);
    this.updateNumberTextfield();
  };
  Object.defineProperty(CollectableItemGenericCurrencyVE.prototype, "currencyVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemGenericCurrencyVE.prototype.storageBarScale = function () {
    if (this.currencyVO.xmlCurrencyVO.softCap > -1) {
      return this.currencyVO.amount / this.currencyVO.xmlCurrencyVO.softCap;
    } else {
      return 0;
    }
  };
  return CollectableItemGenericCurrencyVE;
}(require("gge-module:export_ACollectableItemCurrencyVE").ACollectableItemCurrencyVE);
exports.CollectableItemGenericCurrencyVE = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
