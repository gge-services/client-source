Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_AModernFilterablePackageShopDialogSublayer = require("gge-module:export_AModernFilterablePackageShopDialogSublayer");
var __s0local0 = function (__s1param0) {
  function ModernPackageShopFilterItem(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._relationVOs = [];
    __s3local0._clickCallback = __s3param2;
    __s3local0._type = __s3param1;
    if (__s3local0.hasCheckBox) {
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param0.btn_checkbox);
      __s3local0.onShow();
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ModernPackageShopFilterItem, __s1param0);
  ModernPackageShopFilterItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    this._clickCallback = null;
  };
  ModernPackageShopFilterItem.prototype.onClick = function (__s8param0) {
    __s1param0.prototype.onClick.call(this, __s8param0);
    switch (__s8param0.target) {
      case this.disp.btn_checkbox:
        if (this._clickCallback) {
          this._clickCallback(this.relationVOs, !this._active);
        }
    }
  };
  ModernPackageShopFilterItem.prototype.updateCheckbox = function (__s12param0) {
    this._active = false;
    if (this.hasCheckBox) {
      var __s12local0 = 1;
      if (this._relationVOs.every(function (__s15param0) {
        return __s12param0.indexOf(__s15param0) > -1;
      })) {
        __s12local0 = 2;
        this._active = true;
      } else if (this.type == __dep_export_AModernFilterablePackageShopDialogSublayer.AModernFilterablePackageShopDialogSublayer.FILTER_FILTER && this._relationVOs.some(function (__s18param0) {
        return __s12param0.indexOf(__s18param0) > -1;
      })) {
        __s12local0 = 3;
        this._active = true;
      }
      this.disp.btn_checkbox.gotoAndStop(__s12local0);
    }
  };
  Object.defineProperty(ModernPackageShopFilterItem.prototype, "relationVOs", {
    get: function () {
      return this._relationVOs;
    },
    enumerable: true,
    configurable: true
  });
  ModernPackageShopFilterItem.prototype.addRelationVO = function (__s23param0) {
    if (this._relationVOs.length == 0) {
      switch (this.type) {
        case __dep_export_AModernFilterablePackageShopDialogSublayer.AModernFilterablePackageShopDialogSublayer.FILTER_CATEGORY:
          __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("filters_category_" + __s23param0.categoryID)).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.MIDDLE;
          break;
        case __dep_export_AModernFilterablePackageShopDialogSublayer.AModernFilterablePackageShopDialogSublayer.FILTER_FILTER:
          __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("filters_filter_" + __s23param0.filterID)).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.MIDDLE;
          break;
        case __dep_export_AModernFilterablePackageShopDialogSublayer.AModernFilterablePackageShopDialogSublayer.FILTER_SUBFILTER:
          __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("filters_subfilter_" + __s23param0.subFilterID)).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.MIDDLE;
      }
    }
    if (this._relationVOs.indexOf(__s23param0) == -1) {
      this._relationVOs.push(__s23param0);
      this._relationVOs.sort(function (__s28param0, __s28param1) {
        if (__s28param0.categoryID == __s28param1.categoryID) {
          if (__s28param0.filterID == __s28param1.filterID) {
            return __s28param0.subFilterID - __s28param1.subFilterID;
          } else {
            return __s28param0.filterID - __s28param1.filterID;
          }
        } else {
          return __s28param0.categoryID - __s28param1.categoryID;
        }
      });
    }
  };
  Object.defineProperty(ModernPackageShopFilterItem.prototype, "hasCheckBox", {
    get: function () {
      return !!this.disp.btn_checkbox;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernPackageShopFilterItem.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  return ModernPackageShopFilterItem;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.ModernPackageShopFilterItem = __s0local0;
