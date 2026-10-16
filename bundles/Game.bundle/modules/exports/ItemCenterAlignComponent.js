Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __s0local0 = createjs.Point;
var __s0local1 = createjs.Rectangle;
var __s0local2 = function (__s1param0) {
  function ItemCenterAlignComponent(__s3param0, __s3param1, __s3param2 = false, __s3param3 = true) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._keepSpaceWidth = false;
    __s3local0._hideUnusedItems = false;
    __s3local0._itemMcs = [];
    __s3local0._numberOfVisibleItems = 0;
    __s3local0._defaultItemPositions = [];
    __s3local0._fieldDimension = new __s0local1();
    __s3local0._itemBounds = new __s0local1();
    __s3local0._parentMc = __s3param0;
    __s3local0._itemNamePrefix = __s3param1;
    __s3local0._keepSpaceWidth = __s3param2;
    __s3local0._hideUnusedItems = __s3param3;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ItemCenterAlignComponent, __s1param0);
  ItemCenterAlignComponent.prototype.init = function () {
    this._itemMcs = [];
    if (this.parentMc) {
      for (var __s5local0, __s5local1 = 0; (__s5local0 = this.parentMc.getChildByName(this.itemNamePrefix + __s5local1)) != null; ++__s5local1) {
        this._itemMcs.push(__s5local0);
      }
    }
    for (var __s5local2 = 0, __s5local3 = this.itemMcs; __s5local2 < __s5local3.length; __s5local2++) {
      __s5local0 = __s5local3[__s5local2];
      this._defaultItemPositions.push(new __s0local0(__s5local0.x, __s5local0.y));
    }
    if (this.itemMcs.length > 0) {
      var __s5local4 = (__s5local0 = this.itemMcs[0]).getBounds(null);
      this._itemBounds = __s5local4;
      this._fieldDimension.left = __s5local0.x + __s5local4.x;
      this._fieldDimension.top = __s5local0.y + __s5local4.y;
      __s5local4 = (__s5local0 = this.itemMcs[this.itemMcs.length - 1]).getBounds(null);
      this._fieldDimension.right = __s5local0.x + __s5local4.x + __s5local4.width;
      this._fieldDimension.bottom = __s5local0.y + __s5local4.y + __s5local4.height;
    } else {
      this._fieldDimension.left = this._fieldDimension.top = this._fieldDimension.right = this._fieldDimension.bottom = 0;
    }
  };
  ItemCenterAlignComponent.prototype.align = function (__s14param0) {
    this._numberOfVisibleItems = __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f.MathBase.clamp(__s14param0, 0, this.itemMcs.length));
    for (var __s14local0 = 0; __s14local0 < this.itemMcs.length; ++__s14local0) {
      this.itemMcs[__s14local0].visible = !this.hideUnusedItems || this.hideUnusedItems && __s14local0 < __s14param0;
    }
    if (__s14param0 <= 0) {
      this.reset(false);
    }
    if (this.keepSpaceWidth) {
      this.alignWithSameSpaceWidth();
    } else {
      this.alignWithStretchedSpaceWidth();
    }
  };
  ItemCenterAlignComponent.prototype.alignWithStretchedSpaceWidth = function () {
    if (this.numberOfVisibleItems > 0 && this.itemMcs.length > 0) {
      var __s21local0 = this.itemMcs[0].width;
      var __s21local1 = __s21local0 * this.numberOfVisibleItems;
      var __s21local2 = (this.fieldDimension.width - __s21local1) / ((this.numberOfVisibleItems < this.itemMcs.length ? this.numberOfVisibleItems + 2 : this.numberOfVisibleItems) - 1);
      var __s21local3 = this.fieldDimension.x + this.fieldDimension.width / 2 + -(__s21local1 + __s21local2 * (this.numberOfVisibleItems - 1)) / 2 - this.itemBounds.x;
      for (var __s21local4 = 0; __s21local4 < this.itemMcs.length; ++__s21local4) {
        var __s21local5 = this.itemMcs[__s21local4];
        var __s21local6 = this.defaultItemPositions[__s21local4];
        __s21local5.x = __s21local5.visible ? __s21local3 : __s21local6.x;
        __s21local5.y = __s21local6.y;
        __s21local3 += __s21local0 + __s21local2;
      }
    }
  };
  ItemCenterAlignComponent.prototype.alignWithSameSpaceWidth = function () {
    if (this.numberOfVisibleItems > 0 && this.itemMcs.length > 0) {
      var __s26local0 = this.defaultItemPositions[Math.max(0, this.numberOfVisibleItems - 1)].x + this.itemBounds.right - this.fieldDimension.left;
      var __s26local1 = (this.fieldDimension.width - __s26local0) / 2;
      for (var __s26local2 = 0; __s26local2 < this.itemMcs.length; ++__s26local2) {
        var __s26local3 = this.itemMcs[__s26local2];
        var __s26local4 = this.defaultItemPositions[__s26local2];
        __s26local3.x = __s26local3.visible ? __s26local4.x + +__s26local1 : __s26local4.x;
        __s26local3.y = __s26local4.y;
      }
    }
  };
  ItemCenterAlignComponent.prototype.reset = function (__s31param0 = true) {
    for (var __s31local0 = 0; __s31local0 < this.itemMcs.length; ++__s31local0) {
      var __s31local1 = this.itemMcs[__s31local0];
      var __s31local2 = this.defaultItemPositions[__s31local0];
      __s31local1.visible = __s31param0;
      __s31local1.x = __s31local2.x;
      __s31local1.y = __s31local2.y;
    }
  };
  Object.defineProperty(ItemCenterAlignComponent.prototype, "parentMc", {
    get: function () {
      return this._parentMc;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemCenterAlignComponent.prototype, "itemNamePrefix", {
    get: function () {
      return this._itemNamePrefix;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemCenterAlignComponent.prototype, "defaultItemPositions", {
    get: function () {
      return this._defaultItemPositions;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemCenterAlignComponent.prototype, "fieldDimension", {
    get: function () {
      return this._fieldDimension;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemCenterAlignComponent.prototype, "itemBounds", {
    get: function () {
      return this._itemBounds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemCenterAlignComponent.prototype, "keepSpaceWidth", {
    get: function () {
      return this._keepSpaceWidth;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemCenterAlignComponent.prototype, "hideUnusedItems", {
    get: function () {
      return this._hideUnusedItems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemCenterAlignComponent.prototype, "numberOfVisibleItems", {
    get: function () {
      return this._numberOfVisibleItems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemCenterAlignComponent.prototype, "itemMcs", {
    get: function () {
      return this._itemMcs;
    },
    enumerable: true,
    configurable: true
  });
  return ItemCenterAlignComponent;
}(__dep_export_CastleComponent.CastleComponent);
exports.ItemCenterAlignComponent = __s0local2;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
