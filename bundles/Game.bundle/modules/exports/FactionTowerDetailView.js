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
  function FactionTowerDetailView(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = this;
    __s3local0._factionFrame = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionTowerDetailView, __s1param0);
  Object.defineProperty(FactionTowerDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Dungeon_" + this._kingdomVO.kingdomName + "_Level2");
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FightDetailView.FightDetailView.prototype, "assetCastleFileURL").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  FactionTowerDetailView.prototype.drawCastleVO = function () {
    var __s9local0 = "_" + this._kingdomVO.kingdomName;
    var __s9local1 = __dep_exact_f855840627e6e145.int(this._detailDrawAble.ownerInfo.factionID);
    this._factionFrame = __dep_exact_f855840627e6e145.int(__s9local1 == __dep_exact_26a421b704832cff.FactionConst.RED_FACTION ? 1 : 2);
    this.initLayer();
    this._castleLayer.y = 15;
    this._castleLayer.x = -7;
    this._layerBackground.addChild(this.getMovieClipByName(FactionTowerDetailView.CLASSNAME_SHADOW + 2 + __s9local0));
    this._layerKeep.addChild(this.getMovieClipByName(FactionTowerDetailView.CLASSNAME_KEEP + 2 + __s9local0, this.bindFunction(this.onClipLoaded)));
    this._layerLeft.addChild(this.getMovieClipByName(FactionTowerDetailView.CLASSNAME_BACKWALL + "_Left_Level2" + __s9local0, this.bindFunction(this.onClipLoaded)));
    this._layerMiddle.addChild(this.getMovieClipByName(FactionTowerDetailView.CLASSNAME_FRONTWALL + "_Left_Level2" + __s9local0, this.bindFunction(this.onClipLoaded)));
    this._layerMiddle.addChild(this.getMovieClipByName(FactionTowerDetailView.CLASSNAME_FRONTWALL + "_Right_Level2" + __s9local0, this.bindFunction(this.onClipLoaded)));
    this._layerMiddle.addChild(this.getMovieClipByName(FactionTowerDetailView.CLASSNAME_GATE + 2 + __s9local0, this.bindFunction(this.onClipLoaded)));
    this._layerRight.addChild(this.getMovieClipByName(FactionTowerDetailView.CLASSNAME_BACKWALL + "_Right_Level2" + __s9local0, this.bindFunction(this.onClipLoaded)));
  };
  FactionTowerDetailView.prototype.onClipLoaded = function (__s11param0) {
    __s11param0.gotoAndStop(this._factionFrame);
  };
  FactionTowerDetailView.__initialize_static_members = function () {
    FactionTowerDetailView.CLASSNAME_KEEP = "Dungeon_Keep_Level";
    FactionTowerDetailView.CLASSNAME_BACKWALL = "Dungeon_BackWall";
    FactionTowerDetailView.CLASSNAME_FRONTWALL = "Dungeon_FrontWall";
    FactionTowerDetailView.CLASSNAME_GATE = "Dungeon_Gate_Level";
    FactionTowerDetailView.CLASSNAME_DETAIL = "Dungeon_Detail_Level";
    FactionTowerDetailView.CLASSNAME_SHADOW = "Dungeon_Shadow_Level";
  };
  return FactionTowerDetailView;
}(__dep_export_FightDetailView.FightDetailView);
exports.FactionTowerDetailView = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IFightDetailView");
__s0local0.__initialize_static_members();
