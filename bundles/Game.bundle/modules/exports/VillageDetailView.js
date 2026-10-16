Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_FightDetailView = require("gge-module:export_FightDetailView");
var __s0local0 = function (__s1param0) {
  function VillageDetailView(__s3param0, __s3param1, __s3param2, __s3param3) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(VillageDetailView, __s1param0);
  Object.defineProperty(VillageDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Village_" + this._kingdomVO.kingdomName);
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FightDetailView.FightDetailView.prototype, "assetCastleFileURL").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  VillageDetailView.prototype.drawCastleVO = function () {
    var __s9local0 = "_" + this._kingdomVO.kingdomName;
    this.initLayer();
    this._layerKeep.addChild(this.getMovieClipByName(VillageDetailView.CLASSNAME_KEEP + __s9local0));
    this._layerLeft.addChild(this.getMovieClipByName(VillageDetailView.CLASSNAME_BACKWALL + "_Left" + __s9local0));
    this._layerMiddle.addChild(this.getMovieClipByName(VillageDetailView.CLASSNAME_FRONTWALL + "_Left" + __s9local0));
    this._layerMiddle.addChild(this.getMovieClipByName(VillageDetailView.CLASSNAME_FRONTWALL + "_Right" + __s9local0));
    this._layerMiddle.addChild(this.getMovieClipByName(VillageDetailView.CLASSNAME_GATE + __s9local0));
    this._layerRight.addChild(this.getMovieClipByName(VillageDetailView.CLASSNAME_BACKWALL + "_Right" + __s9local0));
  };
  VillageDetailView.__initialize_static_members = function () {
    VillageDetailView.CLASSNAME_KEEP = "Village_Keep";
    VillageDetailView.CLASSNAME_BACKWALL = "Village_BackWall";
    VillageDetailView.CLASSNAME_FRONTWALL = "Village_FrontWall";
    VillageDetailView.CLASSNAME_GATE = "Village_Gate";
  };
  return VillageDetailView;
}(__dep_export_FightDetailView.FightDetailView);
exports.VillageDetailView = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IFightDetailView");
__s0local0.__initialize_static_members();
