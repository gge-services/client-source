Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function PPDDExternalPart(__s3param0, __s3param1) {
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s3param0);
    if (__dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(__s3param1)) {
      __s3param0.addChild(this.loadClip(__s3param1));
    }
  }
  PPDDExternalPart.prototype.loadClip = function (__s6param0) {
    var __s6local0 = __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s6param0);
    this.clip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s6param0, __s6local0, null, 0, false);
    if (this.clip.isLoaded) {
      this.onDisplayObjectClipIsLoaded(this.clip);
    } else {
      this.clip.clipLoaded.addOnceWithPriority(this.bindFunction(this.onDisplayObjectClipIsLoaded));
    }
    return this.clip;
  };
  PPDDExternalPart.prototype.onDisplayObjectClipIsLoaded = function (__s10param0 = null) {};
  Object.defineProperty(PPDDExternalPart.prototype, "clipDisp", {
    get: function () {
      return this.clip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PPDDExternalPart.prototype, "isLoaded", {
    get: function () {
      return !!this.clip && this.clip.isLoaded;
    },
    enumerable: true,
    configurable: true
  });
  return PPDDExternalPart;
}();
exports.PPDDExternalPart = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
