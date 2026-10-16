Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_7e3e67aee786bc23 = require("gge-module:exact_7e3e67aee786bc23");
var __dep_export_CollectableTransformVO = require("gge-module:export_CollectableTransformVO");
var __dep_export_ACollectableRenderComponent = require("gge-module:export_ACollectableRenderComponent");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CollectableRendererIconTransform() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableRendererIconTransform, __s1param0);
  Object.defineProperty(CollectableRendererIconTransform, "DEFAULT_TRANSFORMS", {
    get: function () {
      if (__dep_exact_7e3e67aee786bc23.isNullOrUndefined(CollectableRendererIconTransform._DEFAULT_TRANSFORMS)) {
        CollectableRendererIconTransform._DEFAULT_TRANSFORMS = CollectableRendererIconTransform._getDefaultTransformDic();
      }
      return CollectableRendererIconTransform._DEFAULT_TRANSFORMS;
    },
    enumerable: true,
    configurable: true
  });
  CollectableRendererIconTransform._getDefaultTransformDic = function () {
    var __s8local0 = new Map();
    __s8local0.set(__dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_UNIQUE, new __dep_export_CollectableTransformVO.CollectableTransformVO(new __s0local0(0, 10)));
    __s8local0.set(__dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_RARENESS, new __dep_export_CollectableTransformVO.CollectableTransformVO(new __s0local0(0, 10)));
    __s8local0.set(__dep_export_CollectableEnum.CollectableEnum.HERO_RANDOM, new __dep_export_CollectableTransformVO.CollectableTransformVO(new __s0local0(0, 10)));
    __s8local0.set(__dep_export_CollectableEnum.CollectableEnum.BOOSTER, new __dep_export_CollectableTransformVO.CollectableTransformVO(new __s0local0(0, 11)));
    __s8local0.set(__dep_export_CollectableEnum.CollectableEnum.BUILDING, new __dep_export_CollectableTransformVO.CollectableTransformVO(new __s0local0(0, 11)));
    __s8local0.set(__dep_export_CollectableEnum.CollectableEnum.EXTINGUISH_FIRE, new __dep_export_CollectableTransformVO.CollectableTransformVO(new __s0local0(0, 10)));
    __s8local0.set(__dep_export_CollectableEnum.CollectableEnum.GEM, new __dep_export_CollectableTransformVO.CollectableTransformVO(new __s0local0(0, 10)));
    __s8local0.set(__dep_export_CollectableEnum.CollectableEnum.GEM_RANDOM, new __dep_export_CollectableTransformVO.CollectableTransformVO(new __s0local0(0, 10)));
    __s8local0.set(__dep_export_CollectableEnum.CollectableEnum.ALLIANCE_GIFT, new __dep_export_CollectableTransformVO.CollectableTransformVO(new __s0local0(0, 10)));
    __s8local0.set(__dep_export_CollectableEnum.CollectableEnum.PERMANENT_TOOL_SLOT, new __dep_export_CollectableTransformVO.CollectableTransformVO(new __s0local0(0, 10)));
    __s8local0.set(__dep_export_CollectableEnum.CollectableEnum.PERMANENT_UNIT_SLOT, new __dep_export_CollectableTransformVO.CollectableTransformVO(new __s0local0(0, 10)));
    return __s8local0;
  };
  CollectableRendererIconTransform.prototype.reset = function () {};
  Object.defineProperty(CollectableRendererIconTransform.prototype, "transform", {
    get: function () {
      if (!this._transform) {
        var __s12local0 = CollectableRendererIconTransform.DEFAULT_TRANSFORMS.get(this.itemVO ? this.itemVO.itemType : __dep_export_CollectableEnum.CollectableEnum.UNKNOWN);
        this._transform = __s12local0 ? __s12local0.clone() : new __dep_export_CollectableTransformVO.CollectableTransformVO(new __s0local0(0, 0));
      }
      return this._transform;
    },
    enumerable: true,
    configurable: true
  });
  CollectableRendererIconTransform.prototype.onLoadedIcon = function () {
    if (this.renderer.itemVE) {
      var __s15local0 = this.renderer.itemVE.iconContainer;
      if (__s15local0) {
        __s15local0.x += this.transform.offset.x;
        __s15local0.y += this.transform.offset.y;
      }
    }
  };
  return CollectableRendererIconTransform;
}(__dep_export_ACollectableRenderComponent.ACollectableRenderComponent);
exports.CollectableRendererIconTransform = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
