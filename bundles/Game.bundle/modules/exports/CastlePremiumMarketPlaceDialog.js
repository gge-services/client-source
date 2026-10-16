Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastlePremiumMarketPlaceDialog() {
    return __s1param0.call(this, CastlePremiumMarketPlaceDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePremiumMarketPlaceDialog, __s1param0);
  CastlePremiumMarketPlaceDialog.prototype.setBtnColors = function (__s5param0, __s5param1, __s5param2) {
    var __s5local0 = new __dep_exact_81dacdf05bd32292_1.ColorTransform();
    __s5local0.color = __s5param0;
    this.marketDialog.btn_tab_flag.mc_flag_icon.colorChange["cc" + __s5param1].useFilters([new createjs.ColorFilter(__s5local0.redMultiplier, __s5local0.greenMultiplier, __s5local0.blueMultiplier, __s5local0.alphaMultiplier, __s5local0.redOffset, __s5local0.greenOffset, __s5local0.blueOffset, __s5local0.alphaOffset)]);
  };
  CastlePremiumMarketPlaceDialog.prototype.initLoaded = function (__s7param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s7param0);
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButtons([this.marketDialog.btn_tab_vip, this.marketDialog.btn_tab_heroes, this.marketDialog.btn_tab_rest, this.marketDialog.btn_tab_flag]);
    this.initBasicButtons([this.marketDialog.btn_close]);
    this._subLayer = new Map();
    this._subLayer.set(__dep_export_CastlePremiumMarketCollectionData.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_HERO, new __dep_export_CastlePremiumMarketPlaceDialogBooster.CastlePremiumMarketPlaceDialogBooster(this.marketDialog.cat_booster));
    this._subLayer.set(__dep_export_CastlePremiumMarketCollectionData.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_REST, this._subLayer.get(__dep_export_CastlePremiumMarketCollectionData.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_HERO));
    this._subLayer.set(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MARKETPLACE_CREST, new __dep_export_CastlePremiumMarketPlaceDialogFlag.CastlePremiumMarketPlaceDialogFlag(this.marketDialog.cat_flag));
    this._subLayer.set(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MARKETPLACE_VIP, new __dep_export_CastlePremiumMarketPlaceDialogVIP.CastlePremiumMarketPlaceDialogVIP(this.marketDialog.cat_vip));
    this.textFieldManager.registerTextField(this.marketDialog.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("premiummarket_title"));
    this.marketDialog.btn_tab_vip.toolTipText = "dialog_VipScreen_tooltip_v2";
    this.marketDialog.btn_tab_heroes.toolTipText = "heroes";
    this.marketDialog.btn_tab_rest.toolTipText = "restTab";
    this.marketDialog.btn_tab_flag.toolTipText = "dialog_management_changeCrest";
  };
  CastlePremiumMarketPlaceDialog.prototype.showLoaded = function (__s9param0) {
    var __s9local0;
    if (__s9param0 === undefined) {
      __s9param0 = null;
    }
    this._currentCategory = null;
    __s9local0 = this.marketProperties && this.marketProperties.shopCategory != "" && this.marketProperties.shopCategory != __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MARKETPLACE_VIP ? this.marketProperties && this.marketProperties.highlightVO && !this.marketProperties.highlightVO.isInShopCategory(this.marketProperties.shopCategory) ? this.marketProperties.highlightVO.shopTypes[0] : this.marketProperties.shopCategory : __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MARKETPLACE_VIP;
    this.changeCategory(__s9local0);
    CastlePremiumMarketPlaceDialog.CREST_BUTTON_COLORS.forEach(this.bindFunction(this.setBtnColors));
    __s1param0.prototype.showLoaded.call(this, __s9param0);
  };
  CastlePremiumMarketPlaceDialog.prototype.setActiveTabButtons = function (__s12param0) {
    this.marketDialog.btn_tab_vip.basicButton.selectButton = __s12param0 == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MARKETPLACE_VIP;
    this.marketDialog.btn_tab_heroes.basicButton.selectButton = __s12param0 == __dep_export_CastlePremiumMarketCollectionData.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_HERO;
    this.marketDialog.btn_tab_rest.basicButton.selectButton = __s12param0 == __dep_export_CastlePremiumMarketCollectionData.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_REST;
    this.marketDialog.btn_tab_flag.basicButton.selectButton = __s12param0 == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MARKETPLACE_CREST;
  };
  CastlePremiumMarketPlaceDialog.prototype.changeCategory = function (__s14param0) {
    if (__s14param0 != this._currentCategory) {
      __s1param0.prototype.changeCategory.call(this, __s14param0);
      if (this.marketProperties && this.marketProperties.highlightVO) {
        this.showSublayer(this._subLayer.get(__s14param0), [__s14param0, this.marketProperties.highlightVO]);
      } else {
        this.showSublayer(this._subLayer.get(__s14param0), [__s14param0]);
      }
      this.setActiveTabButtons(this._currentCategory);
      if (this._currentCategory == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MARKETPLACE_VIP) {
        this.marketDialog.mc_background.gotoAndStop(1);
      } else {
        this.marketDialog.mc_background.gotoAndStop(2);
      }
    }
  };
  CastlePremiumMarketPlaceDialog.prototype.onClick = function (__s21param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s21param0.target)) {
      if (__s21param0.target != this.marketDialog.btn_tab_flag) {
        switch (__s21param0.target) {
          case this.marketDialog.btn_tab_vip:
            if (this._currentCategory == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MARKETPLACE_CREST) {
              this._functionHolder = [this.bindFunction(this.changeCategory), __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MARKETPLACE_VIP];
              this._subLayer.get(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MARKETPLACE_CREST).doubleCheckSaveCrest(this.bindFunction(this.saveCrestCallback));
            } else {
              this.changeCategory(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MARKETPLACE_VIP);
            }
            break;
          case this.marketDialog.btn_tab_heroes:
            if (this._currentCategory == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MARKETPLACE_CREST) {
              this._functionHolder = [this.bindFunction(this.changeCategory), __dep_export_CastlePremiumMarketCollectionData.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_HERO];
              this._subLayer.get(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MARKETPLACE_CREST).doubleCheckSaveCrest(this.bindFunction(this.saveCrestCallback));
            } else {
              this.changeCategory(__dep_export_CastlePremiumMarketCollectionData.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_HERO);
            }
            break;
          case this.marketDialog.btn_tab_rest:
            if (this._currentCategory == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MARKETPLACE_CREST) {
              this._functionHolder = [this.bindFunction(this.changeCategory), __dep_export_CastlePremiumMarketCollectionData.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_REST];
              this._subLayer.get(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MARKETPLACE_CREST).doubleCheckSaveCrest(this.bindFunction(this.saveCrestCallback));
            } else {
              this.changeCategory(__dep_export_CastlePremiumMarketCollectionData.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_REST);
            }
            break;
          case this.marketDialog.btn_close:
            if (this._currentCategory == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MARKETPLACE_CREST) {
              this._functionHolder = [this.bindFunction(this.hide)];
              this._subLayer.get(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MARKETPLACE_CREST).doubleCheckSaveCrest(this.bindFunction(this.saveCrestCallback));
            } else {
              this.hide();
            }
        }
      } else {
        this.changeCategory(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MARKETPLACE_CREST);
      }
    }
  };
  CastlePremiumMarketPlaceDialog.prototype.saveCrestCallback = function (__s35param0 = null) {
    if (this._functionHolder && this._functionHolder.length > 0) {
      var __s35local0 = this._functionHolder.shift();
      if (__s35local0) {
        __s35local0.apply(null, this._functionHolder);
      }
    }
  };
  Object.defineProperty(CastlePremiumMarketPlaceDialog.prototype, "marketDialog", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketPlaceDialog.prototype, "marketProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePremiumMarketPlaceDialog.NAME = "CastlePremiumMarketplaceExternal_Feb2026";
  CastlePremiumMarketPlaceDialog.CREST_BUTTON_COLORS = [10358297, 15244861, 15244861, 10358297];
  return CastlePremiumMarketPlaceDialog;
}(require("gge-module:export_CastleExternalSubLayerDialog").CastleExternalSubLayerDialog);
exports.CastlePremiumMarketPlaceDialog = __s0local0;
var __dep_export_CastlePremiumMarketCollectionData = require("gge-module:export_CastlePremiumMarketCollectionData");
var __dep_export_CastlePremiumMarketPlaceDialogBooster = require("gge-module:export_CastlePremiumMarketPlaceDialogBooster");
var __dep_export_CastlePremiumMarketPlaceDialogFlag = require("gge-module:export_CastlePremiumMarketPlaceDialogFlag");
var __dep_export_CastlePremiumMarketPlaceDialogVIP = require("gge-module:export_CastlePremiumMarketPlaceDialogVIP");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
