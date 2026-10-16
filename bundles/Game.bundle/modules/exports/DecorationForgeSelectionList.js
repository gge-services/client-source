Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_ClientConstPackages = require("gge-module:export_ClientConstPackages");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_SimpleScrollStrategyHorizontal = require("gge-module:export_SimpleScrollStrategyHorizontal");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleGenericBuyDialogProperties = require("gge-module:export_CastleGenericBuyDialogProperties");
var __dep_export_MerchantScrollItemVO = require("gge-module:export_MerchantScrollItemVO");
var __s0local0 = function (__s1param0) {
  function DecorationForgeSelectionList(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = this;
    __s3local0._itemVEs = [];
    __s3local0._itemVOs = [];
    __s3local0._numberOfItems = 1;
    __s3local0._onSelectionChanged = new __dep_exact_5c7bc328fca9e4de.Signal();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._veClass = __s3param1;
    __s3local0._numberOfItems = __s3param2;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DecorationForgeSelectionList, __s1param0);
  DecorationForgeSelectionList.prototype.init = function () {
    this._scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.disp).addMouseWheelElements([this.disp]), new __dep_export_SimpleScrollStrategyHorizontal.SimpleScrollStrategyHorizontal());
    this._itemVEs = [];
    for (var __s5local0 = 0; __s5local0 < this._numberOfItems; ++__s5local0) {
      this._itemVEs.push(new this._veClass(this.getItemMc(__s5local0)));
    }
  };
  DecorationForgeSelectionList.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    if (this._itemVEs != null) {
      for (var __s9local0 = 0, __s9local1 = this._itemVEs; __s9local0 < __s9local1.length; __s9local0++) {
        var __s9local2 = __s9local1[__s9local0];
        if (__s9local2 !== undefined) {
          __s9local2.onShow();
        }
      }
    }
    this._scrollComponent.show();
  };
  DecorationForgeSelectionList.prototype.onHide = function () {
    if (this._itemVEs != null) {
      for (var __s15local0 = 0, __s15local1 = this._itemVEs; __s15local0 < __s15local1.length; __s15local0++) {
        var __s15local2 = __s15local1[__s15local0];
        if (__s15local2 !== undefined) {
          __s15local2.onHide();
        }
      }
    }
    this._scrollComponent.hide();
    __s1param0.prototype.onHide.call(this);
  };
  DecorationForgeSelectionList.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    if (this._itemVEs != null) {
      for (var __s21local0 = 0, __s21local1 = this._itemVEs; __s21local0 < __s21local1.length; __s21local0++) {
        var __s21local2 = __s21local1[__s21local0];
        if (__s21local2 !== undefined) {
          __s21local2.onClicked.add(this.bindFunction(this.onItemClicked));
        }
      }
    }
  };
  DecorationForgeSelectionList.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    if (this._itemVEs != null) {
      for (var __s27local0 = 0, __s27local1 = this._itemVEs; __s27local0 < __s27local1.length; __s27local0++) {
        var __s27local2 = __s27local1[__s27local0];
        if (__s27local2 !== undefined) {
          __s27local2.onClicked.remove(this.bindFunction(this.onItemClicked));
        }
      }
    }
    __s1param0.prototype.removeEventListener.call(this);
  };
  DecorationForgeSelectionList.prototype.updateWithNewData = function (__s33param0) {
    this._itemVOs = __s33param0;
    var __s33local0 = __dep_exact_f855840627e6e145.int(__s33param0 ? __dep_exact_9e901e8e2483a22f.MathBase.max(0, __s33param0.length - this._numberOfItems) : 0);
    this._scrollComponent.init(0, __s33local0);
    this.update();
    this.scrollToSelection();
  };
  DecorationForgeSelectionList.prototype.update = function () {
    for (var __s35local0 = 0; __s35local0 < this._numberOfItems; ++__s35local0) {
      var __s35local1 = __s35local0 + this._scrollComponent.currentValue;
      var __s35local2 = this._itemVEs[__s35local0];
      if (this._itemVOs && __s35local1 < this._itemVOs.length) {
        __s35local2.updateWithNewData(this._itemVOs[__s35local1]);
        if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s35local2, "DecorationForgeSelectSourceAndCatalystDialogListItemSourceVE") && this.disp["btn_buy" + __s35local0]) {
          __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.disp["btn_buy" + __s35local0]);
          this.disp["btn_buy" + __s35local0].visible = __s35local2.showBuyButton;
        }
      } else {
        __s35local2.updateWithNewData(null);
        if (this.disp["btn_buy" + __s35local0]) {
          this.disp["btn_buy" + __s35local0].visible = false;
        }
      }
    }
  };
  DecorationForgeSelectionList.prototype.onClick = function (__s43param0) {
    if (__s43param0.target.name.indexOf("btn_buy") > -1) {
      var __s43local0 = this._itemVEs[parseInt(__s43param0.target.name.replace("btn_buy", ""))].buyPackageVO;
      if (__s43local0) {
        var __s43local1 = new __dep_export_MerchantScrollItemVO.MerchantScrollItemVO();
        __s43local1.eventPackageVO = __s43local0;
        __s43local1.specialEventVO = null;
        __s43local1.buyType = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.PackageConst.BUY_TYPE_FUSION);
        __s43local1.buyTypeId = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstPackages.ClientConstPackages.FUSION_SHOP_ID_HARD);
        var __s43local2 = new __dep_export_CastleGenericBuyDialogProperties.CastleGenericBuyDialogProperties();
        __s43local2.parseDataFromScrollItem(__s43local1);
        __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_ModernPackageShopBuyDialog.ModernPackageShopBuyDialog, __s43local2);
      }
    }
  };
  DecorationForgeSelectionList.prototype.scrollToSelection = function () {
    var __s47local0 = this.getIndexOfSelectedItemVO();
    this._scrollComponent.scrollToValue(__dep_exact_9e901e8e2483a22f.MathBase.max(0, __s47local0 - this._numberOfItems + Math.ceil(this._numberOfItems / 2)));
  };
  DecorationForgeSelectionList.prototype.getItemMc = function (__s49param0) {
    return this.disp.getChildByName("mc_item" + __s49param0);
  };
  DecorationForgeSelectionList.prototype.getSelectedItemVO = function () {
    if (this._itemVOs != null) {
      for (var __s51local0 = 0, __s51local1 = this._itemVOs; __s51local0 < __s51local1.length; __s51local0++) {
        var __s51local2 = __s51local1[__s51local0];
        if (__s51local2 !== undefined && __s51local2.isSelected) {
          return __s51local2;
        }
      }
    }
    return null;
  };
  DecorationForgeSelectionList.prototype.getIndexOfSelectedItemVO = function () {
    var __s57local0 = this.getSelectedItemVO();
    if (__s57local0) {
      for (var __s57local1 = 0; __s57local1 < this._itemVOs.length; ++__s57local1) {
        if (this.itemVOs[__s57local1] == __s57local0) {
          return __s57local1;
        }
      }
    }
    return -1;
  };
  DecorationForgeSelectionList.prototype.onScroll = function () {
    this.update();
  };
  DecorationForgeSelectionList.prototype.onItemClicked = function (__s65param0) {
    var __s65local0 = __s65param0.itemVO.isSelected;
    if (this._itemVOs != null) {
      for (var __s65local1 = 0, __s65local2 = this._itemVOs; __s65local1 < __s65local2.length; __s65local1++) {
        __s65local5 = __s65local2[__s65local1];
        if (__s65local5 !== undefined) {
          __s65local5.isSelected = false;
        }
      }
    }
    if (this._itemVEs != null) {
      for (var __s65local3 = 0, __s65local4 = this._itemVEs; __s65local3 < __s65local4.length; __s65local3++) {
        var __s65local5;
        __s65local5 = __s65local4[__s65local3];
        if (__s65local5 !== undefined) {
          __s65local5.updateSelection();
        }
      }
    }
    __s65param0.itemVO.isSelected = !__s65local0;
    __s65param0.updateSelection();
    this._onSelectionChanged.dispatch();
  };
  Object.defineProperty(DecorationForgeSelectionList.prototype, "itemVEs", {
    get: function () {
      return this._itemVEs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectionList.prototype, "itemVOs", {
    get: function () {
      return this._itemVOs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectionList.prototype, "onSelectionChanged", {
    get: function () {
      return this._onSelectionChanged;
    },
    enumerable: true,
    configurable: true
  });
  return DecorationForgeSelectionList;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.DecorationForgeSelectionList = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ModernPackageShopBuyDialog = require("gge-module:export_ModernPackageShopBuyDialog");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
