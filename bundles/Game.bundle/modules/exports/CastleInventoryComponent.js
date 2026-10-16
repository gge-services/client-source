Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_3 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleInventoryComponentEvent = require("gge-module:export_CastleInventoryComponentEvent");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleMathHelper = require("gge-module:export_CastleMathHelper");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __s0local0 = createjs.Point;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = createjs.Rectangle;
var __s0local3 = function (__s1param0) {
  function CastleInventoryComponent(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5, __s3param6 = false, __s3param7 = null, __s3param8 = 0, __s3param9 = CastleInventoryComponent.DEFAULT_GAP, __s3param10 = -1, __s3param11 = null, __s3param12 = true, __s3param13 = true) {
    var __s3local0 = this;
    __s3local0._inventoryCurrentPage = 0;
    __s3local0._inventoryMaxPage = 0;
    __s3local0._maxItems = 0;
    __s3local0._iconWidth = 0;
    __s3local0._iconHeight = 0;
    __s3local0._itemWidth = 0;
    __s3local0._itemHeight = 0;
    __s3local0._itemGap = CastleInventoryComponent.DEFAULT_GAP;
    __s3local0._itemsClickable = false;
    __s3local0._ownerCrest = null;
    __s3local0._levelIconSize = -1;
    __s3local0._levelIconOffset = null;
    __s3local0.useBG = true;
    __s3local0.autoFitBounds = true;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).useBG = __s3param12;
    __s3local0.autoFitBounds = __s3param13;
    __s3local0._levelIconSize = __s3param10;
    __s3local0._levelIconOffset = __s3param11;
    __s3local0._maxItems = __s3param1;
    __s3local0._inventoryArray = __s3param2;
    __s3local0.itemClass = __s3param3;
    __s3local0._iconWidth = __s3param4;
    __s3local0._iconHeight = __s3param5;
    __s3local0._itemGap = __s3param9;
    __s3local0._itemsClickable = __s3param6;
    __s3param0.addEventListener(__s0local1.CLICK, __s3local0.bindFunction(__s3local0.onClick));
    __s3local0._ownerCrest = __s3param7;
    __s3local0.onInventoryUpdated(null);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3local0.inventoryComponent.btn_leftArrow, __s3local0.inventoryComponent.btn_rightArrow]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleInventoryComponent, __s1param0);
  CastleInventoryComponent.prototype.enableMouseWheel = function () {
    this.disp.addEventListener(__s0local1.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
  };
  CastleInventoryComponent.prototype.destroy = function () {
    if (this.disp) {
      this.removeEventListener();
    }
    __s1param0.prototype.destroy.call(this);
  };
  Object.defineProperty(CastleInventoryComponent.prototype, "inventoryLength", {
    get: function () {
      return this._inventoryArray.length;
    },
    enumerable: true,
    configurable: true
  });
  CastleInventoryComponent.prototype.onClick = function (__s12param0) {
    __s1param0.prototype.onClick.call(this, __s12param0);
    switch (__s12param0.target) {
      case this.inventoryComponent.btn_leftArrow:
      case this.inventoryComponent.btn_rightArrow:
        this.onClickInventoryArrow(__s12param0);
    }
    if (this._itemsClickable && __dep_exact_81dacdf05bd32292_3.instanceOfClass(__s12param0.target, __dep_exact_81dacdf05bd32292_2.getQualifiedClassName(this.itemClass))) {
      var __s12local0 = __dep_exact_81dacdf05bd32292.castAs(__s12param0.target.unitVO, "BasicUnitVO");
      if (__s12local0) {
        this.disp.dispatchEvent(new __dep_export_CastleInventoryComponentEvent.CastleInventoryComponentEvent(__dep_export_CastleInventoryComponentEvent.CastleInventoryComponentEvent.CLICK_ITEM, __s12local0, this._ownerCrest));
      }
    }
  };
  CastleInventoryComponent.prototype.onMouseWheel = function (__s17param0) {
    __s1param0.prototype.onMouseWheel.call(this, __s17param0);
    this.scrollInventory(__s17param0.delta < 0 ? CastleInventoryComponent.SCROLL_LEFT : CastleInventoryComponent.SCROLL_RIGHT);
  };
  CastleInventoryComponent.prototype.initInventoryArrows = function (__s19param0) {
    this._inventoryMaxPage = __dep_exact_f855840627e6e145.int((__s19param0 - 1) / this._maxItems);
    if (this.inventoryComponent.btn_rightArrow && this.inventoryComponent.btn_leftArrow) {
      this.inventoryComponent.btn_rightArrow.visible = this._inventoryMaxPage > 0 && this._inventoryCurrentPage < this._inventoryMaxPage;
      this.inventoryComponent.btn_leftArrow.visible = this._inventoryMaxPage > 0 && this._inventoryCurrentPage > 0;
    }
  };
  CastleInventoryComponent.prototype.onInventoryUpdated = function (__s22param0) {
    this.fillInventoryByGroup();
  };
  CastleInventoryComponent.prototype.updateInventory = function (__s24param0, __s24param1 = null) {
    this._inventoryArray = __s24param0;
    this.fadeOutUnitsArray = __s24param1;
    this.fillInventoryByGroup(this.fadeOutUnitsArray);
  };
  CastleInventoryComponent.prototype.onClickInventoryArrow = function (__s26param0) {
    if (__s26param0.target == this.inventoryComponent.btn_leftArrow) {
      this.scrollInventory(CastleInventoryComponent.SCROLL_LEFT);
    } else {
      this.scrollInventory(CastleInventoryComponent.SCROLL_RIGHT);
    }
  };
  CastleInventoryComponent.prototype.scrollInventory = function (__s30param0) {
    var __s30local0 = this._inventoryCurrentPage;
    this._inventoryCurrentPage = __dep_exact_f855840627e6e145.int(__dep_export_CastleMathHelper.CastleMathHelper.clamp(this._inventoryCurrentPage + __s30param0, 0, this._inventoryMaxPage));
    if (__s30local0 != this._inventoryCurrentPage) {
      this.fillInventoryByGroup(this.fadeOutUnitsArray);
    }
    this.disp.dispatchEvent(new __dep_export_CastleInventoryComponentEvent.CastleInventoryComponentEvent(__dep_export_CastleInventoryComponentEvent.CastleInventoryComponentEvent.SCROLL_INVENTORY, null));
  };
  CastleInventoryComponent.prototype.fillInventoryByGroup = function (__s33param0 = null) {
    this._inventoryArray.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitSortOrder);
    this.initInventoryArrows(this._inventoryArray.length);
    this._inventoryCurrentPage = __dep_exact_f855840627e6e145.int(Math.min(this._inventoryCurrentPage, this._inventoryMaxPage));
    var __s33local0 = this.inventoryCurrentPage * this._maxItems;
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(this.inventoryComponent.mc_unitHolder);
    var __s33local1 = __dep_exact_f855840627e6e145.int(Math.min(this._maxItems, this._inventoryArray.length - __s33local0));
    for (var __s33local2 = 0; __s33local2 < this._maxItems && __s33local0 < this._inventoryArray.length; __s33local2++) {
      var __s33local3 = __dep_exact_81dacdf05bd32292.castAs(this._inventoryArray[__s33local0], "BasicUnitVO");
      var __s33local4 = new this.itemClass();
      __s33local4.txt_amount.defaultCacheScale = 2;
      this._itemWidth = __dep_exact_f855840627e6e145.int(__s33local4.width);
      this._itemHeight = __dep_exact_f855840627e6e145.int(__s33local4.height);
      var __s33local5 = __s33local4.txt_amount.width;
      var __s33local6 = __s33local4.txt_amount.height;
      if (__s33local0 >= this._inventoryArray.length) {
        break;
      }
      if (__s33local3.isStronghold) {
        __s33local4.gotoAndStop(2);
        __s33local4.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text(__s33local3.getNameString()) + "\n" + __dep_exact_92d05af59ee2ff30.Localize.text("stronghold_UnitInside");
      } else {
        __s33local4.gotoAndStop(1);
        __s33local4.toolTipText = __s33local3.getNameString();
      }
      __s33local4.visible = true;
      __s33local4.mouseChildren = false;
      __s33local4.unitVO = __s33local3;
      this.addInventoryPic(__s33local3, __s33local4);
      __s33local4.txt_amount.visible = true;
      if (__s33local4.amountBgr) {
        __s33local4.amountBgr.visible = true;
      }
      if (__dep_exact_81dacdf05bd32292_3.instanceOfClass(__s33local3, "EffectIconUnitVO")) {
        var __s33local7 = __s33local3.inventoryAmount >= 0 ? __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE_ADD : __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT;
        var __s33local8 = __s33local3.inventoryAmount >= 0 ? __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_NOMINAL_ADD : __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_NOMINAL_SUBTRACT;
        if (__s33local4.itxt_amount) {
          __s33local4.itxt_amount.textContentVO.textId = __s33local3.valueIsPercentage ? __s33local7 : __s33local8;
          __s33local4.itxt_amount.textContentVO.textReplacements = [String(Math.abs(__s33local3.inventoryAmount))];
        } else if (__s33local3.valueIsPercentage) {
          __s33local4.itxt_amount = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s33local4.txt_amount, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s33local7, [String(Math.abs(__s33local3.inventoryAmount))]), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
        } else {
          __s33local4.itxt_amount = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s33local4.txt_amount, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s33local8, [Math.abs(__s33local3.inventoryAmount)], true), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
        }
      } else if (__s33local3.name != CastleInventoryComponent.UNKNOWN_TOOL_NAME || __s33local3.type != CastleInventoryComponent.UNKNOWN_TOOL_TYPE) {
        if (__s33local4.itxt_amount) {
          __s33local4.itxt_amount.textContentVO.numberValue = __s33local3.inventoryAmount;
        } else {
          __s33local4.itxt_amount = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s33local4.txt_amount, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s33local3.inventoryAmount, {
            compactThreshold: 1000000
          }), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
        }
      } else {
        __s33local4.txt_amount.visible = false;
        if (__s33local4.amountBgr) {
          __s33local4.amountBgr.visible = false;
        }
      }
      if ((__s33local3.name != CastleInventoryComponent.UNKNOWN_TOOL_NAME || __s33local3.type != CastleInventoryComponent.UNKNOWN_TOOL_TYPE) && !!this.autoFitBounds) {
        __s33local4.itxt_amount.fitTextSizeToBounds(new __s0local2(0, 0, __s33local5, __s33local6));
      }
      this.positionItem(__s33local4, __s33local2, __s33local1);
      __s33local4.actLikeButton = this._itemsClickable;
      if (__s33param0 && __s33param0.indexOf(__s33local3) > -1) {
        var __s33local9 = new __dep_exact_9e901e8e2483a22f.ColorMatrix();
        __s33local9.desaturate();
        __s33local4.useFilters([__s33local9.filter]);
        __s33local4.actLikeButton = false;
      }
      this.inventoryComponent.mc_unitHolder.addChild(__s33local4);
      __s33local0++;
    }
  };
  CastleInventoryComponent.prototype.positionItem = function (__s52param0, __s52param1, __s52param2) {
    __s52param0.x = __s52param1 * (this._itemWidth + this._itemGap);
  };
  CastleInventoryComponent.prototype.addInventoryPic = function (__s54param0, __s54param1) {
    var __s54local0 = this._ownerCrest ? this._ownerCrest : __dep_export_CastleModel.CastleModel.userData.playerCrest;
    var __s54local1 = 0;
    var __s54local2 = 0;
    if (__s54local0) {
      __s54local1 = __s54local0.backgroundColor1;
      __s54local2 = __s54local0.backgroundColor2;
    }
    if (__s54param1.mc_bg && this.useBG) {
      __dep_export_WodPicHelper.WodPicHelper.setCorrectUnitBackgroundPic(__s54param0, __s54param1.mc_bg, Library.CastleInterfaceElements.castleAttackSpyInfoBackground, Library.CastleInterfaceElements.castleAttackSpyInfoBackground_berimond);
    }
    __dep_export_WodPicHelper.WodPicHelper.addUnitPicToContainer(__s54param0, __s54param1, this._iconWidth * 0.9, this._iconHeight * 0.9, this._iconWidth, this._iconHeight, __s54local1, __s54local2, this._levelIconSize < 0 ? 14 : this._levelIconSize, this._levelIconOffset ? this._levelIconOffset : new __s0local0(20, 20));
  };
  Object.defineProperty(CastleInventoryComponent.prototype, "inventoryComponent", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInventoryComponent.prototype, "currentCategory", {
    set: function (__s60param0) {
      this._currentCategory = __s60param0;
      this.fillInventoryByGroup();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInventoryComponent.prototype, "inventoryCurrentPage", {
    get: function () {
      return this._inventoryCurrentPage;
    },
    set: function (__s64param0) {
      this._inventoryCurrentPage = __s64param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInventoryComponent.prototype, "itemWidth", {
    get: function () {
      return this._itemWidth;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInventoryComponent.prototype, "itemHeight", {
    get: function () {
      return this._itemHeight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInventoryComponent.prototype, "itemGap", {
    get: function () {
      return this._itemGap;
    },
    set: function (__s72param0) {
      this._itemGap = __s72param0;
      this.fillInventoryByGroup();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInventoryComponent.prototype, "maxItems", {
    get: function () {
      return this._maxItems;
    },
    set: function (__s76param0) {
      this._maxItems = __dep_exact_f855840627e6e145.int(__s76param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInventoryComponent.prototype, "inventoryArray", {
    get: function () {
      return this._inventoryArray;
    },
    enumerable: true,
    configurable: true
  });
  CastleInventoryComponent.DEFAULT_GAP = 5;
  CastleInventoryComponent.UNKNOWN_TOOL_NAME = "Unknown";
  CastleInventoryComponent.UNKNOWN_TOOL_TYPE = "Tools";
  CastleInventoryComponent.SCROLL_RIGHT = 1;
  CastleInventoryComponent.SCROLL_LEFT = -1;
  return CastleInventoryComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.CastleInventoryComponent = __s0local3;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local3, "ICollectableRendererList");
