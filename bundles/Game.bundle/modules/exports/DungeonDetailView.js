Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_FightDetailView = require("gge-module:export_FightDetailView");
var __s0local0 = function (__s1param0) {
  function DungeonDetailView(__s3param0, __s3param1, __s3param2, __s3param3) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DungeonDetailView, __s1param0);
  DungeonDetailView.prototype.getBackgroundClassName = function () {
    if (this._kingdomVO.kID == 0 || this._kingdomVO.kID == __dep_exact_26a421b704832cff_1.WorldIsland.KINGDOM_ID) {
      return "Castle_Landscape_" + this._kingdomVO.kingdomName + "_Dungeon";
    } else {
      return "Castle_Landscape_" + this._kingdomVO.kingdomName;
    }
  };
  Object.defineProperty(DungeonDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      var __s9local0 = this._detailDrawAble ? this._detailDrawAble.visualDungeonWallLevel : this._detailDrawAble.wallLevel;
      var __s9local1 = __dep_exact_f855840627e6e145.int(Math.min(__s9local0, DungeonDetailView.MAX_DRAWABLE_LEVEL));
      if (this._kingdomVO.kID == __dep_exact_26a421b704832cff_1.WorldIsland.KINGDOM_ID || this._kingdomVO.kID == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
        return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Dungeon_" + this._kingdomVO.kingdomName + "_Level2");
      } else {
        return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Dungeon_" + this._kingdomVO.kingdomName + "_Level" + __s9local1);
      }
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FightDetailView.FightDetailView.prototype, "assetCastleFileURL").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  DungeonDetailView.prototype.drawCastleVO = function () {
    var __s15local0 = "_" + this._kingdomVO.kingdomName;
    var __s15local1 = this._detailDrawAble ? this._detailDrawAble.visualDungeonWallLevel : this._detailDrawAble.wallLevel;
    var __s15local2 = __dep_exact_f855840627e6e145.int(Math.min(__s15local1, DungeonDetailView.MAX_DRAWABLE_LEVEL));
    if (this._kingdomVO.kID == __dep_exact_26a421b704832cff_1.WorldIsland.KINGDOM_ID || this._kingdomVO.kID == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
      __s15local2 = 2;
    }
    this.initLayer();
    this._castleLayer.y = 15;
    this._castleLayer.x = -7;
    if (this._kingdomVO.kID != __dep_exact_26a421b704832cff_1.WorldIsland.KINGDOM_ID) {
      this._layerBackground.addChild(this.getMovieClipByName(DungeonDetailView.CLASSNAME_SHADOW + __s15local2 + __s15local0));
    }
    this._layerKeep.addChild(this.getMovieClipByName(DungeonDetailView.CLASSNAME_KEEP + __s15local2 + __s15local0));
    this._layerLeft.addChild(this.getMovieClipByName(DungeonDetailView.CLASSNAME_BACKWALL + "_Left_Level" + __s15local2 + __s15local0));
    this._layerMiddle.addChild(this.getMovieClipByName(DungeonDetailView.CLASSNAME_FRONTWALL + "_Left_Level" + __s15local2 + __s15local0));
    this._layerMiddle.addChild(this.getMovieClipByName(DungeonDetailView.CLASSNAME_FRONTWALL + "_Right_Level" + __s15local2 + __s15local0));
    this._layerMiddle.addChild(this.getMovieClipByName(DungeonDetailView.CLASSNAME_GATE + __s15local2 + __s15local0));
    this._layerMiddle.addChild(this.getMovieClipByName(DungeonDetailView.CLASSNAME_DETAIL + __s15local2 + __s15local0));
    this._layerRight.addChild(this.getMovieClipByName(DungeonDetailView.CLASSNAME_BACKWALL + "_Right_Level" + __s15local2 + __s15local0));
  };
  DungeonDetailView.__initialize_static_members = function () {
    DungeonDetailView.CLASSNAME_KEEP = "Dungeon_Keep_Level";
    DungeonDetailView.CLASSNAME_BACKWALL = "Dungeon_BackWall";
    DungeonDetailView.CLASSNAME_FRONTWALL = "Dungeon_FrontWall";
    DungeonDetailView.CLASSNAME_GATE = "Dungeon_Gate_Level";
    DungeonDetailView.CLASSNAME_DETAIL = "Dungeon_Detail_Level";
    DungeonDetailView.CLASSNAME_SHADOW = "Dungeon_Shadow_Level";
    DungeonDetailView.MAX_DRAWABLE_LEVEL = 3;
  };
  return DungeonDetailView;
}(__dep_export_FightDetailView.FightDetailView);
exports.DungeonDetailView = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IFightDetailView");
__s0local0.__initialize_static_members();
