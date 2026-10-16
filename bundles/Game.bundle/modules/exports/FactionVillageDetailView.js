Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_FightDetailView = require("gge-module:export_FightDetailView");
var __s0local0 = function (__s1param0) {
  function FactionVillageDetailView(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = this;
    __s3local0._factionFrame = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionVillageDetailView, __s1param0);
  Object.defineProperty(FactionVillageDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Village_Faction");
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FightDetailView.FightDetailView.prototype, "assetCastleFileURL").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  FactionVillageDetailView.prototype.drawCastleVO = function () {
    var __s9local0 = __dep_exact_f855840627e6e145.int(this._detailDrawAble.ownerInfo.factionID);
    this._factionFrame = __dep_exact_f855840627e6e145.int(__s9local0 == __dep_exact_26a421b704832cff.FactionConst.RED_FACTION ? 1 : 2);
    var __s9local1 = "_" + this._kingdomVO.kingdomName;
    this.initLayer();
    this._layerKeep.addChild(this.getMovieClipByName(FactionVillageDetailView.CLASSNAME_KEEP + __s9local1, this.bindFunction(this.onClipLoaded)));
    this._layerLeft.addChild(this.getMovieClipByName(FactionVillageDetailView.CLASSNAME_BACKWALL + "_Left" + __s9local1, this.bindFunction(this.onClipLoaded)));
    this._layerMiddle.addChild(this.getMovieClipByName(FactionVillageDetailView.CLASSNAME_FRONTWALL + "_Left" + __s9local1, this.bindFunction(this.onClipLoaded)));
    this._layerMiddle.addChild(this.getMovieClipByName(FactionVillageDetailView.CLASSNAME_FRONTWALL + "_Right" + __s9local1, this.bindFunction(this.onClipLoaded)));
    this._layerMiddle.addChild(this.getMovieClipByName(FactionVillageDetailView.CLASSNAME_GATE + __s9local1, this.bindFunction(this.onClipLoaded)));
    this._layerRight.addChild(this.getMovieClipByName(FactionVillageDetailView.CLASSNAME_BACKWALL + "_Right" + __s9local1, this.bindFunction(this.onClipLoaded)));
  };
  FactionVillageDetailView.prototype.onClipLoaded = function (__s11param0) {
    __s11param0.gotoAndStop(this._factionFrame);
  };
  FactionVillageDetailView.__initialize_static_members = function () {
    FactionVillageDetailView.CLASSNAME_KEEP = "Village_Keep";
    FactionVillageDetailView.CLASSNAME_BACKWALL = "Village_BackWall";
    FactionVillageDetailView.CLASSNAME_FRONTWALL = "Village_FrontWall";
    FactionVillageDetailView.CLASSNAME_GATE = "Village_Gate";
  };
  return FactionVillageDetailView;
}(__dep_export_FightDetailView.FightDetailView);
exports.FactionVillageDetailView = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IFightDetailView");
__s0local0.__initialize_static_members();
