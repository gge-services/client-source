Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleResourceCartsDataEvent = require("gge-module:export_CastleResourceCartsDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_IsoAdditionalClipEnum = require("gge-module:export_IsoAdditionalClipEnum");
var __s0local0 = function (__s1param0) {
  function ResourceCartSurroundingsVE() {
    var __s3local0 = this;
    __s3local0.wasFullCartCached = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResourceCartSurroundingsVE, __s1param0);
  ResourceCartSurroundingsVE.prototype.addEventListener = function () {
    __dep_export_CastleModel.CastleModel.resourceCartsData.addEventListener(__dep_export_CastleResourceCartsDataEvent.CastleResourceCartsDataEvent.DATA_CHANGED, this.bindFunction(this.onDataChanged));
    __dep_export_CastleModel.CastleModel.resourceCartsData.addEventListener(__dep_export_CastleResourceCartsDataEvent.CastleResourceCartsDataEvent.ON_RESOURCE_DROPPED, this.bindFunction(this.onResourceDropped));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    __s1param0.prototype.addEventListener.call(this);
  };
  ResourceCartSurroundingsVE.prototype.removeEventListener = function () {
    __dep_export_CastleModel.CastleModel.resourceCartsData.removeEventListener(__dep_export_CastleResourceCartsDataEvent.CastleResourceCartsDataEvent.DATA_CHANGED, this.bindFunction(this.onDataChanged));
    __dep_export_CastleModel.CastleModel.resourceCartsData.removeEventListener(__dep_export_CastleResourceCartsDataEvent.CastleResourceCartsDataEvent.ON_RESOURCE_DROPPED, this.bindFunction(this.onResourceDropped));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    __s1param0.prototype.removeEventListener.call(this);
  };
  ResourceCartSurroundingsVE.prototype.createDisp = function () {
    this.dispComponent.addClip(this.loadExternalClip(this.vo.getVisualClassName()));
  };
  ResourceCartSurroundingsVE.prototype.updateFrame = function () {
    if (this.cartDisp && this.cartDisp.isLoaded) {
      var __s11local0 = ResourceCartSurroundingsVE.FRAME_EMPTY;
      if (this.resourceCartData.isCollectable) {
        switch (this.resourceCartData.resourceType) {
          case __dep_export_CollectableEnum.CollectableEnum.WOOD:
            __s11local0 = ResourceCartSurroundingsVE.FRAME_WOOD;
            break;
          case __dep_export_CollectableEnum.CollectableEnum.STONE:
            __s11local0 = ResourceCartSurroundingsVE.FRAME_STONE;
            break;
          case __dep_export_CollectableEnum.CollectableEnum.FOOD:
            __s11local0 = ResourceCartSurroundingsVE.FRAME_FOOD;
            break;
          default:
            __s11local0 = ResourceCartSurroundingsVE.FRAME_EMPTY;
        }
      } else {
        __s11local0 = ResourceCartSurroundingsVE.FRAME_EMPTY;
      }
      if (__s11local0 != this.cartDisp.currentshownDisplayObject.currentFrame + 1) {
        this.additionalClips.removeAllClips();
        this.cartDisp.currentshownDisplayObject.gotoAndStop(__s11local0);
        if (this.resourceCartData.isCollectable && !this.wasFullCartCached) {
          try {
            this.disp.doCache(0, 1);
            this.wasFullCartCached = true;
          } catch (__s20local0) {}
          this.invalidateGlowCache();
        } else if (!this.resourceCartData.isCollectable && this.wasFullCartCached) {
          try {
            this.disp.doCache(0, 1);
            this.wasFullCartCached = false;
          } catch (__s24local0) {}
          this.invalidateGlowCache();
        }
        this.updateAdditionalClips();
        this.updateDispBounds();
      }
    }
  };
  ResourceCartSurroundingsVE.prototype.createAdditionalClips = function () {
    if (this.resourceCartData.isCollectable) {
      this.additionalClips.addClips(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.EXCLAMATION_MARK);
    }
    __s1param0.prototype.createAdditionalClips.call(this);
  };
  Object.defineProperty(ResourceCartSurroundingsVE.prototype, "cartDisp", {
    get: function () {
      if (this.dispComponent.clipList.length >= 1) {
        return this.dispComponent.clipList[0];
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  ResourceCartSurroundingsVE.prototype.onMouseClick = function () {
    if (this.resourceCartVO.resourceCartData.isCollectable) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SIsoResourceCartCollectVO.C2SIsoResourceCartCollectVO(this.resourceCartVO.resourceType));
    }
  };
  ResourceCartSurroundingsVE.prototype.onAllDispClipsLoaded = function () {
    this.disp.scaleX = -1;
    this.updateFrame();
    __s1param0.prototype.onAllDispClipsLoaded.call(this);
  };
  ResourceCartSurroundingsVE.prototype.onDataChanged = function (__s38param0) {
    this.updateFrame();
  };
  ResourceCartSurroundingsVE.prototype.onTimer = function (__s40param0) {
    this.updateFrame();
  };
  ResourceCartSurroundingsVE.prototype.onResourceDropped = function (__s42param0) {
    var __s42local0 = __s42param0.params[0];
    if (__s42local0 == this.resourceCartVO.resourceCartData.resourceType) {
      var __s42local1 = __dep_exact_f855840627e6e145.int(__s42param0.params[1]);
      if (__s42local1 > 0) {
        var __s42local2 = this.getGlobalDispPosTopCenter();
        this.vo.isoData.updater.spawnCollectableFadeEffect(__dep_export_CollectableHelper.CollectableHelper.createVO(__s42local0, __s42local1), __s42local2);
      }
    }
  };
  Object.defineProperty(ResourceCartSurroundingsVE.prototype, "resourceCartVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceCartSurroundingsVE.prototype, "resourceCartData", {
    get: function () {
      return this.resourceCartVO.resourceCartData;
    },
    enumerable: true,
    configurable: true
  });
  ResourceCartSurroundingsVE.__initialize_static_members = function () {
    ResourceCartSurroundingsVE.FRAME_EMPTY = 1;
    ResourceCartSurroundingsVE.FRAME_FOOD = 2;
    ResourceCartSurroundingsVE.FRAME_STONE = 3;
    ResourceCartSurroundingsVE.FRAME_WOOD = 4;
  };
  return ResourceCartSurroundingsVE;
}(require("gge-module:export_ASurroundingBuildingVE").ASurroundingBuildingVE);
exports.ResourceCartSurroundingsVE = __s0local0;
var __dep_export_C2SIsoResourceCartCollectVO = require("gge-module:export_C2SIsoResourceCartCollectVO");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
__s0local0.__initialize_static_members();
