Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_TempServerHelper = require("gge-module:export_TempServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __s0local0 = function (__s1param0) {
  function CollectableItemGenericCurrencyVO(__s3param0 = -1, __s3param1 = 0) {
    var __s3local0 = __s1param0.call(this, __s3param1) || this;
    __s3local0._id = -1;
    __s3local0.id = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemGenericCurrencyVO, __s1param0);
  CollectableItemGenericCurrencyVO.prototype.parseServerObject = function (__s5param0) {
    __s1param0.prototype.parseServerObject.call(this, __s5param0);
    if (Array.isArray(__s5param0) && __s5param0.length >= 2) {
      this.amount = __s5param0[1];
    }
  };
  CollectableItemGenericCurrencyVO.prototype.updateCurrencyVO = function (__s8param0) {
    this._xmlCurrencyVO = __dep_export_CastleModel.CastleModel.currencyData.getXmlCurrencyById(__s8param0);
  };
  CollectableItemGenericCurrencyVO.prototype.getTooltipTextId = function () {
    return this.getNameTextId();
  };
  CollectableItemGenericCurrencyVO.prototype.getDescriptionTextId = function () {
    return "currency_description_" + this.getNameOrAssetName();
  };
  CollectableItemGenericCurrencyVO.prototype.getDescriptionTextParams = function () {
    if (__dep_export_TempServerHelper.TempServerHelper.tmpServerEvent != null && this.xmlCurrencyVO.id == __dep_export_TempServerHelper.TempServerHelper.tmpServerEvent.settingVO.boosterCurrencyID) {
      var __s14local0 = 1;
      if (this.xmlCurrencyVO.id == __dep_export_ClientConstCurrency.ClientConstCurrency.ID_TONIC_BOOSTER) {
        __s14local0 = 0.01;
      }
      return [__dep_export_TempServerHelper.TempServerHelper.tmpServerEvent.settingVO.boosterCurrencyValue * __s14local0];
    }
    return __s1param0.prototype.getDescriptionTextParams.call(this);
  };
  CollectableItemGenericCurrencyVO.prototype.getNameTextId = function () {
    return "currency_name_" + this.getNameOrAssetName();
  };
  CollectableItemGenericCurrencyVO.prototype.equals = function (__s20param0) {
    return __s1param0.prototype.equals.call(this, __s20param0) && __s20param0.id == this.id;
  };
  CollectableItemGenericCurrencyVO.prototype.clone = function () {
    var __s22local0 = __s1param0.prototype.clone.call(this);
    __s22local0.id = this.id;
    return __s22local0;
  };
  CollectableItemGenericCurrencyVO.prototype.isCombineAbleWith = function (__s24param0) {
    return __s1param0.prototype.isCombineAbleWith.call(this, __s24param0) && __s24param0.id == this.id;
  };
  CollectableItemGenericCurrencyVO.prototype.isInIdRange = function (__s26param0) {
    return !!this._xmlCurrencyVO && __dep_export_ClientConstCurrency.ClientConstCurrency.isInIdRange(__s26param0, this._xmlCurrencyVO.id);
  };
  CollectableItemGenericCurrencyVO.prototype.getNameOrAssetName = function () {
    if (this._xmlCurrencyVO.assetName == "" || this._xmlCurrencyVO.assetName == null) {
      return this._xmlCurrencyVO.name;
    } else {
      return this._xmlCurrencyVO.assetName;
    }
  };
  Object.defineProperty(CollectableItemGenericCurrencyVO.prototype, "xmlCurrencyVO", {
    get: function () {
      return this._xmlCurrencyVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemGenericCurrencyVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (__s36param0) {
      this._id = __s36param0;
      this.updateCurrencyVO(this._id);
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemGenericCurrencyVO;
}(require("gge-module:export_ACollectableItemCurrencyVO").ACollectableItemCurrencyVO);
exports.CollectableItemGenericCurrencyVO = __s0local0;
