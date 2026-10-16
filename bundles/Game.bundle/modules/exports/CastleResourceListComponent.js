Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleResourceListComponent(__s3param0, __s3param1, __s3param2 = 3, __s3param3 = 1, __s3param4 = null) {
    var __s3local0 = this;
    __s3local0._itemsPerLine = 0;
    __s3local0._maxLines = 0;
    __s3local0._padding = 5.6;
    __s3local0._iconDimension = new __s0local0(32, 32);
    __s3local0._displayAsCosts = false;
    __s3local0._useKiloAbbreviationForAmount = false;
    __s3local0._containerItems = [];
    __s3local0._summedResourceIconClass = Library.CastleInterfaceElements.Icon_GenericSpecialResource;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._itemClass = __s3param1;
    __s3local0._itemsPerLine = __s3param2;
    __s3local0._maxLines = __s3param3;
    __s3local0._containerMc = __s3param4 || __s3local0.resourceListComponent.mc_container;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleResourceListComponent, __s1param0);
  CastleResourceListComponent.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.setTitle("");
    this.removeContainerItems();
    this.removeOldStyleItems();
  };
  CastleResourceListComponent.prototype.removeContainerItems = function () {
    if (this._containerMc) {
      this._containerMc.removeChildren();
      this._containerItems = [];
    }
  };
  CastleResourceListComponent.prototype.removeOldStyleItems = function () {
    for (var __s10local0, __s10local1 = 0; __s10local0 = this.resourceListComponent["i" + __s10local1]; ++__s10local1) {
      __s10local0.visible = false;
    }
  };
  CastleResourceListComponent.prototype.setTitle = function (__s14param0) {
    if (this.resourceListComponent.txt_title) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.resourceListComponent.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__s14param0));
    }
  };
  CastleResourceListComponent.prototype.updateComponent = function (__s17param0, __s17param1 = null) {
    if (__s17param1) {
      this.setTitle(__s17param1);
    }
    this.removeOldStyleItems();
    this.destroyCollectableRenderList();
    this.removeContainerItems();
    if (__s17param0) {
      var __s17local0;
      if (!CastleResourceListComponent.SPECIAL_RESOURCES) {
        CastleResourceListComponent.__initialize_static_members();
      }
      var __s17local1;
      var __s17local2;
      var __s17local3 = this.maxItemCount;
      if (__s17param0.length > __s17local3) {
        __s17local1 = __s17param0.getFilteredListWithoutTypes(CastleResourceListComponent.SPECIAL_RESOURCES);
        __s17local2 = __s17param0.getFilteredListByTypes(CastleResourceListComponent.SPECIAL_RESOURCES);
      } else {
        __s17local1 = __s17param0;
        __s17local2 = new __dep_export_CollectableList.CollectableList();
      }
      for (var __s17local4 = __dep_exact_f855840627e6e145.int(Math.min(__s17local1.length + (__s17local2.length > 0 ? 1 : 0), __s17local3)), __s17local5 = this.getPositionList(__s17local4), __s17local6 = 0; __s17local6 < __s17local4; ++__s17local6) {
        (__s17local0 = new this._itemClass()).name = "i" + __s17local6;
        this._containerMc.addChild(__s17local0);
        __s17local0.x = __s17local5[__s17local6].x;
        __s17local0.y = __s17local5[__s17local6].y;
        this._containerItems.push(__s17local0);
      }
      if (__s17local1.length > 0) {
        this.displayAsList(__s17local1);
      }
      if (__s17local2.length > 0) {
        this.displayAsSubsumedResources(__s17local2, __s17local1.length);
      }
    }
  };
  CastleResourceListComponent.prototype.displayAsList = function (__s28param0) {
    var __s28local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(this._displayAsCosts ? __dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_COST_LIST : __dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_RESOURCE_LIST, this._iconDimension);
    __s28local0.tooltip.useAmount = false;
    if (this._displayAsCosts) {
      __s28local0.costTextfield.useOtherResourceStorage = this._otherResourceStorageForCosts;
    } else {
      __s28local0.textfield.useKiloAbbreviationForAmount = this._useKiloAbbreviationForAmount;
    }
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this._containerMc, "i").addTextfields("txt_loot"), __s28param0, __s28local0);
  };
  CastleResourceListComponent.prototype.displayAsSubsumedResources = function (__s32param0, __s32param1) {
    var __s32local0 = this._containerItems[__s32param1];
    if (__s32local0) {
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s32local0.mc_icon);
      var __s32local1 = new this._summedResourceIconClass();
      __s32local0.mc_icon.addChild(__s32local1);
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.centerMovieClip(__s32local1, this._iconDimension.x, this._iconDimension.y);
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s32local0.txt_loot, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.getSummedResourceValue(__s32param0)));
      __s32local0.mouseChildren = false;
      __s32local0.visible = true;
      __s32local0.toolTipText = __s32param0.getRewardAmountTooltip();
    }
  };
  CastleResourceListComponent.prototype.getSummedResourceValue = function (__s35param0) {
    var __s35local0 = 0;
    for (var __s35local1 = 0; __s35local1 < __s35param0.length; __s35local1++) {
      __s35local0 += __dep_exact_f855840627e6e145.int(__s35param0.getItemByIndex(__s35local1).amount);
    }
    return __s35local0;
  };
  CastleResourceListComponent.prototype.getPositionList = function (__s39param0) {
    var __s39local0;
    var __s39local1 = __dep_exact_f855840627e6e145.int(Math.min(__s39param0, this.maxItemCount));
    var __s39local2 = [];
    for (var __s39local3 = Math.ceil(__s39local1 / this._itemsPerLine), __s39local4 = this.getItemDimension(), __s39local5 = 0, __s39local6 = 0; __s39local6 < __s39local3; ++__s39local6) {
      __s39local5 = __s39local6 >= __s39local3 - 1 && __s39local1 % this._itemsPerLine != 0 ? __s39local1 % this._itemsPerLine : this._itemsPerLine;
      __s39local0 = new __s0local0(-(__s39local4.x * __s39local5 + this._padding * (__s39local5 - 1)) / 2 + __s39local4.x / 2, __s39local4.y * __s39local6 + __s39local6 * this._padding);
      for (var __s39local7 = 0; __s39local7 < __s39local5; ++__s39local7) {
        __s39local2.push(new __s0local0(__s39local0.x + __s39local7 * __s39local4.x + __s39local7 * this._padding, __s39local0.y));
      }
    }
    return __s39local2;
  };
  Object.defineProperty(CastleResourceListComponent.prototype, "maxItemCount", {
    get: function () {
      return this._itemsPerLine * this._maxLines;
    },
    enumerable: true,
    configurable: true
  });
  CastleResourceListComponent.prototype.getItemDimension = function () {
    var __s47local0 = new this._itemClass();
    this._containerMc.addChild(__s47local0);
    var __s47local1 = new __s0local0(__s47local0.width, __s47local0.height);
    this._containerMc.removeChild(__s47local0);
    return __s47local1;
  };
  Object.defineProperty(CastleResourceListComponent.prototype, "resourceListComponent", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceListComponent.prototype, "displayAsCosts", {
    set: function (__s51param0) {
      this._displayAsCosts = __s51param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceListComponent.prototype, "otherResourceStorageForCosts", {
    set: function (__s53param0) {
      this._otherResourceStorageForCosts = __s53param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceListComponent.prototype, "useKiloAbbreviationForAmount", {
    set: function (__s55param0) {
      this._useKiloAbbreviationForAmount = __s55param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceListComponent.prototype, "iconDimension", {
    set: function (__s57param0) {
      this._iconDimension = __s57param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceListComponent.prototype, "padding", {
    set: function (__s59param0) {
      this._padding = __s59param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleResourceListComponent.__initialize_static_members = function () {
    CastleResourceListComponent.SPECIAL_RESOURCES = [__dep_export_CollectableEnum.CollectableEnum.COAL, __dep_export_CollectableEnum.CollectableEnum.OIL, __dep_export_CollectableEnum.CollectableEnum.GLASS, __dep_export_CollectableEnum.CollectableEnum.IRON];
  };
  return CastleResourceListComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.CastleResourceListComponent = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
