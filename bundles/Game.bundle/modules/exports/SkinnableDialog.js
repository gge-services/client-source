Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_instanceOf_ISkinnable = require("gge-module:export_instanceOf_ISkinnable");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function SkinnableDialog(__s3param0) {
    var __s3local0 = this;
    __s3local0.CLIP_LOADED_PRIORITY_HIDDEN = 0;
    __s3local0.currentSkinID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, null, new __s0local0()) || this).skinContainer = __s3local0.disp;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SkinnableDialog, __s1param0);
  SkinnableDialog.prototype.initExternalClipInConstructor = function () {};
  SkinnableDialog.prototype.applyProperties = function () {
    if (!this.applyPropertiesCalled) {
      this.applyPropertiesCalled = true;
      if (this.currentSkinID != this.skinId && this.externalClip) {
        this.destroy();
        __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.skinContainer);
        this.externalClip.clipLoaded.removeAll();
        this.externalClip = null;
        this.isInitialized = false;
      }
      if (this.externalClip && this.externalClip.isLoaded) {
        this.applyPropertiesLoaded();
      } else {
        this.applySkin();
        this.externalClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.applyPropertiesLoaded), __dep_export_CastleExternalDialog.CastleExternalDialog.CLIP_LOADED_PRIORITY_APPLIEDPROPERTIE);
      }
    }
  };
  SkinnableDialog.prototype.show = function () {
    if (this.externalClip != null && __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.externalClip, "CastleGoodgameExternalClip")) {
      __s1param0.prototype.show.call(this);
    } else {
      this.applySkin();
      if (this.externalClip.isLoaded) {
        this.showWhenSkinLoaded();
      } else {
        this.externalClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.showWhenSkinLoaded), __dep_export_CastleExternalDialog.CastleExternalDialog.CLIP_LOADED_PRIORITY_SHOWN);
      }
    }
  };
  SkinnableDialog.prototype.showWhenSkinLoaded = function (__s19param0 = null) {
    __s1param0.prototype.show.call(this);
  };
  SkinnableDialog.prototype.hideWhenSkinLoaded = function (__s21param0 = null) {
    __s1param0.prototype.hide.call(this);
  };
  SkinnableDialog.prototype.hide = function () {
    if (this.externalClip != null) {
      __s1param0.prototype.hide.call(this);
    } else {
      this.externalClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.hideWhenSkinLoaded), this.CLIP_LOADED_PRIORITY_HIDDEN);
    }
  };
  SkinnableDialog.prototype.applySkin = function () {
    if (this.externalClip == null || !__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.externalClip, "CastleGoodgameExternalClip")) {
      this.currentSkinID = this.skinId;
      this.createExternalClip();
      this.skinContainer.addChild(this.externalClip);
      this.initExternalClip();
    }
  };
  SkinnableDialog.prototype.createExternalClip = function () {
    this.externalClip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(this.assetClassName, this.assetFileURL, null, 0, false);
  };
  Object.defineProperty(SkinnableDialog.prototype, "assetClassName", {
    get: function () {
      var __s32local0 = this.dialogClassName + this.skinNameDelimiter + this.skinName;
      if (__dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(__s32local0)) {
        return __s32local0;
      } else {
        return this.defaultAssetName;
      }
    },
    set: function (__s36param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleExternalDialog.CastleExternalDialog.prototype, "assetClassName").set.call(this, __s36param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SkinnableDialog.prototype, "defaultAssetName", {
    get: function () {
      return this.dialogClassName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SkinnableDialog.prototype, "skinName", {
    get: function () {
      for (var __s40local0 = String(this.skinId); __s40local0.length < this.skinNameMinimalLength;) {
        __s40local0 = this.skinNameDefaultCharacter + __s40local0;
      }
      return __s40local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SkinnableDialog.prototype, "skinId", {
    get: function () {
      if (__dep_export_instanceOf_ISkinnable.instanceOf_ISkinnable(this.properties)) {
        return this.properties.skinId;
      } else if ("skinId" in this.properties) {
        return this.properties.skinId;
      } else {
        return this.defaultSkinId;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SkinnableDialog.prototype, "skinNameMinimalLength", {
    get: function () {
      return 3;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SkinnableDialog.prototype, "skinNameDefaultCharacter", {
    get: function () {
      return "0";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SkinnableDialog.prototype, "skinNameDelimiter", {
    get: function () {
      return "_";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SkinnableDialog.prototype, "defaultSkinId", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  return SkinnableDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.SkinnableDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
