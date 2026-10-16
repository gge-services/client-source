Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ResearchIconHelper() {}
  ResearchIconHelper.addResearchIcon = function (__s5param0, __s5param1, __s5param2 = NaN, __s5param3 = null) {
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s5param1);
    __s5param1.mouseChildren = false;
    var __s5local0 = ResearchIconHelper.getIconClip("Icon_Research_Background");
    __s5param1.addChild(__s5local0);
    __s5local0.doWhenLoaded(function (__s7param0) {
      var __s7local0 = __s5param0.icon();
      __s5param1.addChild(__s7local0);
      __s7local0.doWhenLoaded(function (__s9param0) {
        if (!isNaN(__s5param2)) {
          __s5param1.scaleX = __s5param1.scaleY = __s5local0.scaleY * __s5param2 / __s5local0.height;
        }
        __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.updateParentCache(__s9param0);
        if (__s5param3) {
          __s7local0.doWhenLoaded(__s5param3);
        }
      });
    });
  };
  ResearchIconHelper.getIconClip = function (__s13param0) {
    return new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s13param0, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s13param0), null, 0, false);
  };
  return ResearchIconHelper;
}();
exports.ResearchIconHelper = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
