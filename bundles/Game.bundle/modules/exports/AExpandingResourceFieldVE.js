Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AResourceFieldVE = require("gge-module:export_AResourceFieldVE");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function AExpandingResourceFieldVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AExpandingResourceFieldVE, __s1param0);
  AExpandingResourceFieldVE.prototype.loadResourceAsset = function () {
    var __s5local0 = this.assetClipName;
    if (__dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(this.assetFileName)) {
      for (var __s5local1 = 0; __s5local1 < this.expandingResourceFieldVO.fieldAmount; ++__s5local1) {
        var __s5local2 = this.loadExternalClip(__s5local0, this.assetFileName, this.getDispClipColor());
        var __s5local3 = this.getClipDeltaTilePosByIndex(__s5local1);
        var __s5local4 = this.isoRenderer.camera.getScreenPosByGridPosDelta(__s5local3);
        __s5local2.x = __s5local4.x;
        __s5local2.y = __s5local4.y;
        this.dispComponent.addClip(__s5local2);
      }
    } else {
      console.warn(this.assetFileName + " not versioned.");
    }
  };
  AExpandingResourceFieldVE.prototype.getClipDeltaTilePosByIndex = function (__s11param0) {
    return new __s0local0();
  };
  Object.defineProperty(AExpandingResourceFieldVE.prototype, "uiPos", {
    get: function () {
      if (this.elementContainer) {
        var __s13local0 = new __s0local0(this.elementContainer.x, this.elementContainer.y);
        if (this.dispComponent.clipList.length > 1) {
          __s13local0.y += this.elementContainer.height * 0.33;
        }
        return __s13local0;
      }
      return null;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResourceFieldVE.AResourceFieldVE.prototype, "uiPos").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  AExpandingResourceFieldVE.prototype.onAllDispClipsLoaded = function () {
    __s1param0.prototype.onAllDispClipsLoaded.call(this);
    for (var __s19local0 = 0, __s19local1 = this.dispComponent.clipList; __s19local0 < __s19local1.length; __s19local0++) {
      var __s19local2 = __s19local1[__s19local0];
      if (__s19local2 !== undefined) {
        __s19local2.cacheAsBitmap = true;
      }
    }
  };
  Object.defineProperty(AExpandingResourceFieldVE.prototype, "delayLoadingUntilFree", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AExpandingResourceFieldVE.prototype, "expandingResourceFieldVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return AExpandingResourceFieldVE;
}(__dep_export_AResourceFieldVE.AResourceFieldVE);
exports.AExpandingResourceFieldVE = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "IIngameUICapable");
