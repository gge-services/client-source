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
  function FactionCapitalDetailView(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = this;
    __s3local0._factionFrame = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionCapitalDetailView, __s1param0);
  FactionCapitalDetailView.prototype.getBackgroundClassName = function () {
    return "Castle_Landscape_" + this._kingdomVO.kingdomName;
  };
  Object.defineProperty(FactionCapitalDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Capital_Faction");
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FightDetailView.FightDetailView.prototype, "assetCastleFileURL").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  FactionCapitalDetailView.prototype.drawCastleVO = function () {
    this.initLayer();
    var __s11local0 = __dep_exact_f855840627e6e145.int(this._detailDrawAble.ownerInfo.factionID);
    this._factionFrame = __dep_exact_f855840627e6e145.int(__s11local0 == __dep_exact_26a421b704832cff.FactionConst.RED_FACTION ? 1 : 2);
    this._layerKeep.addChild(this.getMovieClipByName(FactionCapitalDetailView.CLASSNAME_KEEP + FactionCapitalDetailView.FACTION, this.bindFunction(this.onClipLoaded)));
    this._layerLeft.addChild(this.getMovieClipByName(FactionCapitalDetailView.CLASSNAME_BACKWALL + "_Left" + FactionCapitalDetailView.FACTION, this.bindFunction(this.onClipLoaded)));
    this._layerMiddle.addChild(this.getMovieClipByName(FactionCapitalDetailView.CLASSNAME_TOWER + "_Left" + FactionCapitalDetailView.FACTION, this.bindFunction(this.onClipLoaded)));
    this._layerMiddle.addChild(this.getMovieClipByName(FactionCapitalDetailView.CLASSNAME_FRONTWALL + "_Left" + FactionCapitalDetailView.FACTION, this.bindFunction(this.onClipLoaded)));
    this._layerMiddle.addChild(this.getMovieClipByName(FactionCapitalDetailView.CLASSNAME_TOWER + "_Right" + FactionCapitalDetailView.FACTION, this.bindFunction(this.onClipLoaded)));
    this._layerMiddle.addChild(this.getMovieClipByName(FactionCapitalDetailView.CLASSNAME_FRONTWALL + "_Right" + FactionCapitalDetailView.FACTION, this.bindFunction(this.onClipLoaded)));
    this._layerMiddle.addChild(this.getMovieClipByName(FactionCapitalDetailView.CLASSNAME_GATE + FactionCapitalDetailView.FACTION, this.bindFunction(this.onClipLoaded)));
    this._layerRight.addChild(this.getMovieClipByName(FactionCapitalDetailView.CLASSNAME_BACKWALL + "_Right" + FactionCapitalDetailView.FACTION, this.bindFunction(this.onClipLoaded)));
  };
  FactionCapitalDetailView.prototype.onClipLoaded = function (__s13param0) {
    __s13param0.gotoAndStop(this._factionFrame);
  };
  FactionCapitalDetailView.__initialize_static_members = function () {
    FactionCapitalDetailView.CLASSNAME_KEEP = "CastlePart_Keep";
    FactionCapitalDetailView.CLASSNAME_BACKWALL = "CastleParts_BackWall";
    FactionCapitalDetailView.CLASSNAME_FRONTWALL = "CastleParts_FrontWall";
    FactionCapitalDetailView.CLASSNAME_TOWER = "CastleParts_Tower";
    FactionCapitalDetailView.CLASSNAME_GATE = "CastlePart_Gate";
    FactionCapitalDetailView.FACTION = "_Faction";
  };
  return FactionCapitalDetailView;
}(__dep_export_FightDetailView.FightDetailView);
exports.FactionCapitalDetailView = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IFightDetailView");
__s0local0.__initialize_static_members();
