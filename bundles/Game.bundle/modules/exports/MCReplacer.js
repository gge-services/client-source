Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Event;
var __s0local1 = function () {
  function MCReplacer(__s3param0) {
    this.SUFFIX_C2R = "C2R";
    this._fps = 0;
    this.objectsToFillByType = new Map();
    this.typesLoaded = new Map();
    this.stage = __s3param0;
    this.stage.addEventListener("EVENT_MC_REPLACER", this.bindFunction(this.onReplaceMC));
  }
  MCReplacer.prototype.onReplaceMC = function (__s5param0) {
    var __s5local0;
    var __s5local1;
    var __s5local2 = __dep_exact_81dacdf05bd32292.getQualifiedClassName(__s5param0.target);
    if (this.objectsToFillByType.get(__s5local2)) {
      __s5local1 = this.objectsToFillByType.get(__s5local2);
    } else {
      __s5local1 = new Array();
      this.objectsToFillByType.set(__s5local2, __s5local1);
    }
    __s5local1.push(__s5param0.target);
    __s5local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s5local2 + this.SUFFIX_C2R, this.getAssetFileURL(__s5local2 + this.SUFFIX_C2R), null, this._fps, false);
    if (this.typesLoaded.get(__s5local2)) {
      if (__s5local0.isLoaded) {
        this.addIntoMC(__s5param0.target, __s5local0.currentshownDisplayObject);
        __s5local1.pop();
      }
    } else {
      this.typesLoaded.set(__s5local2, __s5local0);
      if (__s5local0.isLoaded) {
        this.addIntoMC(__s5param0.target, __s5local0.currentshownDisplayObject);
        __s5local1.pop();
      } else {
        __s5local0.clipLoaded.addOnceWithPriority(this.bindFunction(this.displayObjectClipIsLoaded), MCReplacer.CLIP_LOADED_PRIORITY_LOADED);
      }
    }
  };
  MCReplacer.prototype.getAssetFileURL = function (__s14param0) {
    return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s14param0);
  };
  MCReplacer.prototype.displayObjectClipIsLoaded = function (__s16param0) {
    var __s16local0;
    var __s16local1;
    var __s16local2;
    var __s16local3 = __dep_exact_81dacdf05bd32292.getQualifiedClassName(__s16param0.currentshownDisplayObject).replace(this.SUFFIX_C2R, "");
    for (__s16local2 = this.objectsToFillByType.get(__s16local3); __s16local2.length > 0;) {
      __s16local0 = __s16local2[0];
      __s16local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s16local3 + this.SUFFIX_C2R, this.getAssetFileURL(__s16local3 + this.SUFFIX_C2R), null, this._fps, false);
      this.addIntoMC(__s16local0, __s16local1.currentshownDisplayObject);
      __s16local2.splice(0, 1);
    }
  };
  MCReplacer.prototype.addIntoMC = function (__s20param0, __s20param1) {
    __s20param0.addChild(__s20param1);
    __s20param0.usePreSizes();
    __s20param0.dispatchEvent(new __s0local0(MCReplacer.MC_REPLACER_DONE));
  };
  MCReplacer.prototype.destroy = function () {
    if (this.objectsToFillByType != null) {
      for (var __s22local0 = 0, __s22local1 = Array.from(this.objectsToFillByType.values()); __s22local0 < __s22local1.length; __s22local0++) {
        var __s22local2 = __s22local1[__s22local0];
        if (__s22local2 !== undefined) {
          __s22local2.length = 0;
        }
      }
    }
    this.objectsToFillByType = new Map();
  };
  MCReplacer.__initialize_static_members = function () {
    MCReplacer.CLIP_LOADED_PRIORITY_LOADED = 3;
  };
  MCReplacer.MC_REPLACER_DONE = "EVENT_MC_REPLACER_DONE";
  return MCReplacer;
}();
exports.MCReplacer = __s0local1;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
__s0local1.__initialize_static_members();
