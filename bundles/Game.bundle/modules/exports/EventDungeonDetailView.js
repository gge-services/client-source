Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_FightDetailView = require("gge-module:export_FightDetailView");
var __s0local0 = function (__s1param0) {
  function EventDungeonDetailView(__s3param0, __s3param1, __s3param2, __s3param3) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EventDungeonDetailView, __s1param0);
  Object.defineProperty(EventDungeonDetailView.prototype, "assetBackgroundFileURL", {
    get: function () {
      switch (this.skinID) {
        case __dep_exact_26a421b704832cff.DungeonConst.DUNGEON_SKIN_ST_PATRICKS_DAY:
        case __dep_exact_26a421b704832cff.DungeonConst.DUNGEON_SKIN_EASTER:
          return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Background_EventDungeon_3");
        default:
          return Object.getOwnPropertyDescriptor(__dep_export_FightDetailView.FightDetailView.prototype, "assetBackgroundFileURL").get.call(this);
      }
    },
    set: function (__s8param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FightDetailView.FightDetailView.prototype, "assetBackgroundFileURL").set.call(this, __s8param0);
    },
    enumerable: true,
    configurable: true
  });
  EventDungeonDetailView.prototype.getBackgroundClassName = function () {
    switch (this.skinID) {
      case __dep_exact_26a421b704832cff.DungeonConst.DUNGEON_SKIN_ST_PATRICKS_DAY:
      case __dep_exact_26a421b704832cff.DungeonConst.DUNGEON_SKIN_EASTER:
        return "DetailView_Background_EventDungeon_3";
      default:
        return "Castle_Landscape_Classic_Dungeon";
    }
  };
  Object.defineProperty(EventDungeonDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      var __s13local0 = this.hasCastleSkin ? "DetailView_EventDungeon_" + this.skinID : "DetailView_EventDungeon";
      return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s13local0);
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FightDetailView.FightDetailView.prototype, "assetCastleFileURL").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  EventDungeonDetailView.prototype.drawCastleVO = function () {
    var __s17local0 = this.hasCastleSkin ? "_" + this.skinID : "";
    this.initLayer();
    this._castleLayer.y = 15;
    this._castleLayer.x = -7;
    this._layerKeep.addChild(this.getMovieClipByName(EventDungeonDetailView.CLASSNAME_KEEP + __s17local0));
    this._layerLeft.addChild(this.getMovieClipByName(EventDungeonDetailView.CLASSNAME_BACKWALL + "_Left" + __s17local0));
    this._layerMiddle.addChild(this.getMovieClipByName(EventDungeonDetailView.CLASSNAME_FRONTWALL + "_Left" + __s17local0));
    this._layerMiddle.addChild(this.getMovieClipByName(EventDungeonDetailView.CLASSNAME_FRONTWALL + "_Right" + __s17local0));
    this._layerMiddle.addChild(this.getMovieClipByName(EventDungeonDetailView.CLASSNAME_GATE + __s17local0));
    this._layerRight.addChild(this.getMovieClipByName(EventDungeonDetailView.CLASSNAME_BACKWALL + "_Right" + __s17local0));
  };
  Object.defineProperty(EventDungeonDetailView.prototype, "hasCastleSkin", {
    get: function () {
      switch (this.skinID) {
        case __dep_exact_26a421b704832cff.DungeonConst.DUNGEON_SKIN_ROBBER_BARON_KING:
        case __dep_exact_26a421b704832cff.DungeonConst.DUNGEON_SKIN_COW:
          return false;
        default:
          return true;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventDungeonDetailView.prototype, "skinID", {
    get: function () {
      var __s22local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_DUNGEON);
      if (__s22local0) {
        return __s22local0.skinID;
      } else {
        return __dep_exact_26a421b704832cff.DungeonConst.DUNGEON_SKIN_ROBBER_BARON_KING;
      }
    },
    enumerable: true,
    configurable: true
  });
  EventDungeonDetailView.__initialize_static_members = function () {
    EventDungeonDetailView.CLASSNAME_KEEP = "EventDungeon_Keep";
    EventDungeonDetailView.CLASSNAME_BACKWALL = "EventDungeon_BackWall";
    EventDungeonDetailView.CLASSNAME_FRONTWALL = "EventDungeon_FrontWall";
    EventDungeonDetailView.CLASSNAME_GATE = "EventDungeon_Gate";
  };
  return EventDungeonDetailView;
}(__dep_export_FightDetailView.FightDetailView);
exports.EventDungeonDetailView = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IFightDetailView");
__s0local0.__initialize_static_members();
