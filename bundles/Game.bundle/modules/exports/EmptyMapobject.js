Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_ClientConstIsoChangeEventSkin = require("gge-module:export_ClientConstIsoChangeEventSkin");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_BasicMapobject = require("gge-module:export_BasicMapobject");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function EmptyMapobject() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.clipLoaded = new __dep_exact_5c7bc328fca9e4de.Signal(EmptyMapobject);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EmptyMapobject, __s1param0);
  EmptyMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new __s0local0();
      this.disp.mouseChildren = false;
      this.disp.mouseEnabled = false;
      var __s5local0 = this.vo.actualVisClassName;
      __s5local0 += __dep_export_ClientConstIsoChangeEventSkin.ClientConstIsoChangeEventSkin.getValidSkinSuffixForCurrentKingdom(false);
      var __s5local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s5local0, EmptyMapobject.assetFileURL, null, 0, false, null, false, 1, false, false);
      this.disp.addChild(__s5local1.asDisplayObject());
      if (__s5local1.isLoaded) {
        this.onLoaded(__s5local1);
      } else {
        __s5local1.clipLoaded.addOnce(this.bindFunction(this.onLoaded));
      }
    }
  };
  EmptyMapobject.prototype.onLoaded = function (__s10param0) {
    this.clipLoaded.dispatch(this);
  };
  Object.defineProperty(EmptyMapobject, "assetFileURL", {
    get: function () {
      var __s12local0 = "WorldmapAssets_" + __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomVO.kingdomName + __dep_export_ClientConstIsoChangeEventSkin.ClientConstIsoChangeEventSkin.getValidSkinSuffixForCurrentKingdom(false);
      return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s12local0);
    },
    enumerable: true,
    configurable: true
  });
  return EmptyMapobject;
}(__dep_export_BasicMapobject.BasicMapobject);
exports.EmptyMapobject = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IIngameUICapable");
