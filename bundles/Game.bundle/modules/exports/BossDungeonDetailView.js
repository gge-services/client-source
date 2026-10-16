Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_FightDetailView = require("gge-module:export_FightDetailView");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function BossDungeonDetailView(__s3param0, __s3param1, __s3param2, __s3param3) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BossDungeonDetailView, __s1param0);
  BossDungeonDetailView.prototype.getBackgroundClassName = function () {
    if (this._kingdomVO.kID == 0) {
      return "Castle_Landscape_" + this._kingdomVO.kingdomName + "_Dungeon";
    } else {
      return "Castle_Landscape_" + this._kingdomVO.kingdomName;
    }
  };
  Object.defineProperty(BossDungeonDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_BossDungeon_" + this._kingdomVO.kingdomName);
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FightDetailView.FightDetailView.prototype, "assetCastleFileURL").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  BossDungeonDetailView.prototype.drawCastleVO = function () {
    switch (this._kingdomVO.kID) {
      case 3:
        this.drawDragonBossDungeon();
        break;
      default:
        this.drawDefault();
    }
  };
  BossDungeonDetailView.prototype.drawDragonBossDungeon = function () {
    this.initLayer();
    this._layerBackground.addChild(this.getMovieClipByName("BossDragonDungeon_BG_" + this._kingdomVO.kingdomName));
    this._layerKeep.addChild(new __s0local0());
    this._layerLeft.addChild(this.getMovieClipByName("BossDragonDungeon_Left_" + this._kingdomVO.kingdomName));
    this._layerMiddle.addChild(this.getMovieClipByName("BossDragonDungeon_Middle_" + this._kingdomVO.kingdomName));
    this._layerRight.addChild(this.getMovieClipByName("BossDragonDungeon_Right_" + this._kingdomVO.kingdomName));
  };
  BossDungeonDetailView.prototype.drawDefault = function () {
    var __s18local0 = "_" + this._kingdomVO.kingdomName;
    this.initLayer();
    this._castleLayer.y = 15;
    this._castleLayer.x = -7;
    this._layerKeep.addChild(this.getMovieClipByName(BossDungeonDetailView.CLASSNAME_KEEP + __s18local0));
    this._layerLeft.addChild(this.getMovieClipByName(BossDungeonDetailView.CLASSNAME_BACKWALL + "_Left" + __s18local0));
    this._layerMiddle.addChild(this.getMovieClipByName(BossDungeonDetailView.CLASSNAME_FRONTWALL + "_Left" + __s18local0));
    this._layerMiddle.addChild(this.getMovieClipByName(BossDungeonDetailView.CLASSNAME_FRONTWALL + "_Right" + __s18local0));
    this._layerMiddle.addChild(this.getMovieClipByName(BossDungeonDetailView.CLASSNAME_GATE + __s18local0));
    this._layerRight.addChild(this.getMovieClipByName(BossDungeonDetailView.CLASSNAME_BACKWALL + "_Right" + __s18local0));
  };
  BossDungeonDetailView.__initialize_static_members = function () {
    BossDungeonDetailView.CLASSNAME_KEEP = "BossDungeon_Keep";
    BossDungeonDetailView.CLASSNAME_BACKWALL = "BossDungeon_BackWall";
    BossDungeonDetailView.CLASSNAME_FRONTWALL = "BossDungeon_FrontWall";
    BossDungeonDetailView.CLASSNAME_GATE = "BossDungeon_Gate";
  };
  return BossDungeonDetailView;
}(__dep_export_FightDetailView.FightDetailView);
exports.BossDungeonDetailView = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IFightDetailView");
__s0local1.__initialize_static_members();
