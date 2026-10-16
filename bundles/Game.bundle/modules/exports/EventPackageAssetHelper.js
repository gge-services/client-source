Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function EventPackageAssetHelper() {}
  EventPackageAssetHelper.getBanner = function (__s5param0) {
    var __s5local0 = EventPackageAssetHelper.BANNER_BASE_NAME + __s5param0;
    return new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s5local0, EventPackageAssetHelper.assetFileURL(__s5local0), null, 0, false);
  };
  EventPackageAssetHelper.assetFileURL = function (__s7param0) {
    return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s7param0);
  };
  EventPackageAssetHelper.__initialize_static_members = function () {
    EventPackageAssetHelper.BANNER_BASE_NAME = "PackageBanner";
  };
  return EventPackageAssetHelper;
}();
exports.EventPackageAssetHelper = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
__s0local0.__initialize_static_members();
