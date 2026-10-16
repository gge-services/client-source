Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_LayoutMargin = require("gge-module:export_LayoutMargin");
var __dep_export_SimpleLayoutStrategyVertical = require("gge-module:export_SimpleLayoutStrategyVertical");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Rectangle;
var __s0local2 = function (__s1param0) {
  function LordEffectGroupItem(__s3param0, __s3param1 = null) {
    var __s3local0 = this;
    __s3local0._height = 0;
    __s3local0._category = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._disp = new __s0local0();
    __s3local0.itemCreator = __s3param0;
    __s3local0.items = [];
    if (__s3param1) {
      __s3local0.applyEffects(__s3param1);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LordEffectGroupItem, __s1param0);
  LordEffectGroupItem.prototype.applyEffects = function (__s6param0) {
    var __s6local0;
    var __s6local1 = this;
    this.items.length = 0;
    if (__s6param0.length > 1) {
      var __s6local2 = new Map();
      var __s6local3 = [];
      for (var __s6local4 = 0; __s6local4 < __s6param0.length; __s6local4++) {
        if (__s6local4 == 0) {
          __s6local0 = this.itemCreator.createTotalEffectItem(__s6param0);
          this._disp.addChild(__s6local0.disp);
          this.items.push(__s6local0);
        }
        var __s6local5 = __s6param0[__s6local4].effect.capId;
        if (__s6local5 == -1 || __s6param0[__s6local4].maxValueStrength == Number.MAX_VALUE) {
          __s6local3.push(__s6param0[__s6local4]);
        } else {
          if (!__s6local2.has(__s6local5)) {
            __s6local2.set(__s6local5, []);
          }
          __s6local2.get(__s6local5).push(__s6param0[__s6local4]);
        }
      }
      __s6local2.forEach(function (__s15param0) {
        if (__s15param0.length == 1) {
          __s6local0 = __s6local1.itemCreator.createDetailEffectItem(__s15param0[0]);
          __s6local1._disp.addChild(__s6local0.disp);
          __s6local1.items.push(__s6local0);
        } else {
          __s6local0 = __s6local1.itemCreator.createCappedEffectGroupItem(__s15param0);
          __s6local1._disp.addChild(__s6local0.disp);
          __s6local1.items.push(__s6local0);
        }
      });
      __s6local3.forEach(function (__s19param0) {
        __s6local0 = __s6local1.itemCreator.createDetailEffectItem(__s19param0);
        __s6local1._disp.addChild(__s6local0.disp);
        __s6local1.items.push(__s6local0);
      });
    } else {
      __s6local0 = this.itemCreator.createTotalEffectItem(__s6param0);
      this._disp.addChild(__s6local0.disp);
      this.items.push(__s6local0);
    }
    this._height = __dep_exact_f855840627e6e145.int(LordEffectGroupItem.layoutStrategy.apply(this.items, new __s0local1()).height);
    this._category = __dep_exact_f855840627e6e145.int(__s6param0[0].effect.effectCategory);
  };
  Object.defineProperty(LordEffectGroupItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordEffectGroupItem.prototype, "isLayoutEnabled", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordEffectGroupItem.prototype, "height", {
    get: function () {
      return this._height;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordEffectGroupItem.prototype, "width", {
    get: function () {
      return this.disp.width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordEffectGroupItem.prototype, "margin", {
    get: function () {
      return LordEffectGroupItem.MARGIN;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordEffectGroupItem.prototype, "category", {
    get: function () {
      return this._category;
    },
    enumerable: true,
    configurable: true
  });
  LordEffectGroupItem.__initialize_static_members = function () {
    LordEffectGroupItem.MARGIN = new __dep_export_LayoutMargin.LayoutMargin(0, 0, 0, 0);
    LordEffectGroupItem.layoutStrategy = new __dep_export_SimpleLayoutStrategyVertical.SimpleLayoutStrategyVertical();
  };
  return LordEffectGroupItem;
}(__dep_export_CastleComponent.CastleComponent);
exports.LordEffectGroupItem = __s0local2;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList", "ILayoutable");
__s0local2.__initialize_static_members();
