Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_FightDetailView = require("gge-module:export_FightDetailView");
var __s0local0 = function (__s1param0) {
  function MonumentDetailView(__s3param0, __s3param1, __s3param2, __s3param3) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MonumentDetailView, __s1param0);
  Object.defineProperty(MonumentDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Monument");
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FightDetailView.FightDetailView.prototype, "assetCastleFileURL").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  MonumentDetailView.prototype.drawCastleVO = function () {
    this.initLayer();
    this._layerKeep.addChild(this.getMovieClipByName(MonumentDetailView.CLASSNAME_KEEP));
    this._layerLeft.addChild(this.getMovieClipByName(MonumentDetailView.CLASSNAME_BACKWALL_LEFT));
    this._layerRight.addChild(this.getMovieClipByName(MonumentDetailView.CLASSNAME_BACKWALL_RIGHT));
    this._layerMiddle.addChild(this.getMovieClipByName(MonumentDetailView.CLASSNAME_GATE));
  };
  MonumentDetailView.__initialize_static_members = function () {
    MonumentDetailView.CLASSNAME_KEEP = "Monument_Keep";
    MonumentDetailView.CLASSNAME_BACKWALL_LEFT = "Monument_Left";
    MonumentDetailView.CLASSNAME_BACKWALL_RIGHT = "Monument_Right";
    MonumentDetailView.CLASSNAME_GATE = "Monument_Gate";
  };
  return MonumentDetailView;
}(__dep_export_FightDetailView.FightDetailView);
exports.MonumentDetailView = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IFightDetailView");
__s0local0.__initialize_static_members();
