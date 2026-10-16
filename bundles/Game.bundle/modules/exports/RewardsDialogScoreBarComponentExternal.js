Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function RewardsDialogScoreBarComponentExternal() {}
  RewardsDialogScoreBarComponentExternal.prototype.load = function (__s5param0, __s5param1, __s5param2, __s5param3, __s5param4, __s5param5, __s5param6) {
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s5param0);
    this._properties = __s5param6;
    var __s5local0 = this.bindFunction(function (__s7param0) {
      var __s7local0 = __s7param0.currentshownDisplayObject;
      this.scoreBar = new __dep_export_RewardsDialogScoreBarComponent.RewardsDialogScoreBarComponent(__s7local0, __s5param3, __s5param4, __s5param5, __s5param6);
      __s5param1();
    });
    var __s5local1 = __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s5param2);
    var __s5local2 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s5param2, __s5local1, null, 0, false);
    __s5param0.addChild(__s5local2);
    if (__s5local2.isLoaded) {
      __s5local0(__s5local2);
    } else {
      __s5local2.clipLoaded.addOnce(__s5local0);
    }
  };
  RewardsDialogScoreBarComponentExternal.prototype.destroy = function () {
    if (this.scoreBar) {
      this.scoreBar.destroy();
      this.scoreBar = null;
    }
  };
  RewardsDialogScoreBarComponentExternal.prototype.update = function (__s14param0) {
    if (this.scoreBar) {
      this.scoreBar.update(__s14param0);
    }
  };
  Object.defineProperty(RewardsDialogScoreBarComponentExternal.prototype, "properties", {
    get: function () {
      return this._properties;
    },
    enumerable: true,
    configurable: true
  });
  return RewardsDialogScoreBarComponentExternal;
}();
exports.RewardsDialogScoreBarComponentExternal = __s0local0;
var __dep_export_RewardsDialogScoreBarComponent = require("gge-module:export_RewardsDialogScoreBarComponent");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
