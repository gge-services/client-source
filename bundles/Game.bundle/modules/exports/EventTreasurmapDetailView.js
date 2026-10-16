Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstNPCs = require("gge-module:export_ClientConstNPCs");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_FightDetailView = require("gge-module:export_FightDetailView");
var __s0local0 = function (__s1param0) {
  function EventTreasurmapDetailView(__s3param0, __s3param1, __s3param2, __s3param3) {
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EventTreasurmapDetailView, __s1param0);
  EventTreasurmapDetailView.prototype.getBackgroundClassName = function () {
    switch (this.backgroundAssetEventID) {
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_THORNKING:
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
        if (this.tmapNode.isVillage) {
          return "Castle_Landscape_Event" + this.backgroundAssetEventID + "_Village";
        } else if (this.tmapNode.isEndNode) {
          return "Castle_Landscape_Event" + this.backgroundAssetEventID + "_Endnode";
        } else {
          return "Castle_Landscape_Event" + this.backgroundAssetEventID + "_Dungeon";
        }
      default:
        var __s5local0 = "Castle_Landscape_";
        switch (__dep_export_CastleModel.CastleModel.treasureHuntData.treasureHuntMapVO.kingdomID) {
          case __dep_exact_26a421b704832cff_2.WorldIce.KINGDOM_ID:
            __s5local0 += "Icecream";
            break;
          case __dep_exact_26a421b704832cff_1.WorldDessert.KINGDOM_ID:
            __s5local0 += "Dessert";
            break;
          case __dep_exact_26a421b704832cff_3.WorldVolcano.KINGDOM_ID:
            __s5local0 += "Volcano";
            break;
          default:
            __s5local0 += "Classic_Dungeon";
        }
        return __s5local0;
    }
  };
  Object.defineProperty(EventTreasurmapDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      switch (this.tmapNode.eventID) {
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_THORNKING:
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
          if (this.tmapNode.isVillage) {
            return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Village_Event" + this.tmapNode.eventID);
          } else if (this.tmapNode.isEndNode) {
            return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Endnode_Event" + this.tmapNode.eventID);
          } else if (this.tmapNode.isBridgeDungeon) {
            return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Bridgedungeon_Event" + this.tmapNode.eventID);
          } else if (this.tmapNode.isMoralBooster) {
            return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Moralbooster_Event" + this.tmapNode.eventID);
          } else {
            return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Dungeon_Event" + this.tmapNode.eventID);
          }
        default:
          if (this.tmapNode.mapID == 7) {
            return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Castle");
          } else {
            return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Dungeon_Classic_Level" + this._detailDrawAble.wallLevel);
          }
      }
    },
    set: function (__s22param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FightDetailView.FightDetailView.prototype, "assetCastleFileURL").set.call(this, __s22param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventTreasurmapDetailView.prototype, "assetBackgroundFileURL", {
    get: function () {
      switch (this.backgroundAssetEventID) {
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_THORNKING:
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
          if (this.tmapNode.isVillage) {
            return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Background_Event" + this.backgroundAssetEventID + "_Village");
          } else if (this.tmapNode.isEndNode) {
            return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Background_Event" + this.backgroundAssetEventID + "_Endnode");
          } else {
            return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Background_Event" + this.backgroundAssetEventID + "_Dungeon");
          }
        default:
          var __s24local0 = "DetailView_Background_";
          switch (__dep_export_CastleModel.CastleModel.treasureHuntData.treasureHuntMapVO.kingdomID) {
            case __dep_exact_26a421b704832cff_2.WorldIce.KINGDOM_ID:
              __s24local0 += "Icecream";
              break;
            case __dep_exact_26a421b704832cff_1.WorldDessert.KINGDOM_ID:
              __s24local0 += "Dessert";
              break;
            case __dep_exact_26a421b704832cff_3.WorldVolcano.KINGDOM_ID:
              __s24local0 += "Volcano";
              break;
            default:
              __s24local0 += "Classic";
          }
          return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s24local0);
      }
    },
    set: function (__s31param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FightDetailView.FightDetailView.prototype, "assetBackgroundFileURL").set.call(this, __s31param0);
    },
    enumerable: true,
    configurable: true
  });
  EventTreasurmapDetailView.prototype.drawCastleVO = function () {
    this.initLayer();
    this._castleLayer.y = this.tmapNode.eventID != __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD ? 15 : 0;
    this._castleLayer.x = this.tmapNode.eventID != __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD ? -7 : 0;
    switch (this.tmapNode.eventID) {
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_THORNKING:
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
        if (this.tmapNode.isVillage) {
          this.drawEventNode("Village");
        } else if (this.tmapNode.isEndNode) {
          this.drawEventNode("Endnode");
        } else if (this.tmapNode.isBridgeDungeon) {
          this.drawEventNode("Bridgedungeon");
        } else if (this.tmapNode.isMoralBooster) {
          this.drawEventNode("Moralbooster");
        } else {
          this.drawEventNode("Dungeon");
        }
        break;
      default:
        if (this.tmapNode.mapID == 7) {
          this.drawFakeCastle();
        } else {
          this.drawDungeon();
        }
    }
  };
  EventTreasurmapDetailView.prototype.drawFakeCastle = function () {
    this.tmapNode.crestVO = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(__dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_CLASSIC_DUNGEONS_FIRST_ID).crest;
    this._layerKeep.addChild(this.getMovieClipByName("CastlePart_Keep_Level1"));
    this._layerLeft.addChild(this.getMovieClipByName("CastleParts_BackWall_Left_Level1"));
    this._layerMiddle.addChild(this.getMovieClipByName("CastleParts_Tower_Left_Level1"));
    this._layerMiddle.addChild(this.getMovieClipByName("CastleParts_FrontWall_Left_Level1"));
    this._layerMiddle.addChild(this.getMovieClipByName("CastleParts_Tower_Right_Level1"));
    this._layerMiddle.addChild(this.getMovieClipByName("CastleParts_FrontWall_Right_Level1"));
    this._layerMiddle.addChild(this.getMovieClipByName("CastlePart_Gate_Level1"));
    this._layerRight.addChild(this.getMovieClipByName("CastleParts_BackWall_Right_Level1"));
  };
  EventTreasurmapDetailView.prototype.drawEventNode = function (__s45param0) {
    this._layerBackground.addChild(this.getMovieClipByName(__s45param0 + "_Shadow_Event" + this.tmapNode.eventID));
    this._layerKeep.addChild(this.getMovieClipByName(__s45param0 + "_Keep_Event" + this.tmapNode.eventID));
    this._layerLeft.addChild(this.getMovieClipByName(__s45param0 + "_BackWall_Left_Event" + this.tmapNode.eventID));
    this._layerMiddle.addChild(this.getMovieClipByName(__s45param0 + "_FrontWall_Left_Event" + this.tmapNode.eventID));
    this._layerMiddle.addChild(this.getMovieClipByName(__s45param0 + "_FrontWall_Right_Event" + this.tmapNode.eventID));
    this._layerMiddle.addChild(this.getMovieClipByName(__s45param0 + "_Gate_Event" + this.tmapNode.eventID));
    this._layerRight.addChild(this.getMovieClipByName(__s45param0 + "_BackWall_Right_Event" + this.tmapNode.eventID));
  };
  EventTreasurmapDetailView.prototype.drawDungeon = function () {
    var __s47local0 = this.backgroundAssetEventID == 1 ? "_Icecream" : "_Classic";
    var __s47local1 = __dep_exact_f855840627e6e145.int(this._detailDrawAble.wallLevel);
    this.initLayer();
    this._castleLayer.y = 15;
    this._castleLayer.x = -7;
    this._layerBackground.addChild(this.getMovieClipByName(EventTreasurmapDetailView.CLASSNAME_SHADOW + __s47local1 + __s47local0));
    this._layerKeep.addChild(this.getMovieClipByName(EventTreasurmapDetailView.CLASSNAME_KEEP + __s47local1 + __s47local0));
    this._layerLeft.addChild(this.getMovieClipByName(EventTreasurmapDetailView.CLASSNAME_BACKWALL + "_Left_Level" + __s47local1 + __s47local0));
    this._layerMiddle.addChild(this.getMovieClipByName(EventTreasurmapDetailView.CLASSNAME_FRONTWALL + "_Left_Level" + __s47local1 + __s47local0));
    this._layerMiddle.addChild(this.getMovieClipByName(EventTreasurmapDetailView.CLASSNAME_FRONTWALL + "_Right_Level" + __s47local1 + __s47local0));
    this._layerMiddle.addChild(this.getMovieClipByName(EventTreasurmapDetailView.CLASSNAME_GATE + __s47local1 + __s47local0));
    this._layerMiddle.addChild(this.getMovieClipByName(EventTreasurmapDetailView.CLASSNAME_DETAIL + __s47local1 + __s47local0));
    this._layerRight.addChild(this.getMovieClipByName(EventTreasurmapDetailView.CLASSNAME_BACKWALL + "_Right_Level" + __s47local1 + __s47local0));
  };
  Object.defineProperty(EventTreasurmapDetailView.prototype, "tmapNode", {
    get: function () {
      return this._detailDrawAble;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventTreasurmapDetailView.prototype, "backgroundAssetEventID", {
    get: function () {
      return this.tmapNode.eventID;
    },
    enumerable: true,
    configurable: true
  });
  EventTreasurmapDetailView.CLASSNAME_KEEP = "Dungeon_Keep_Level";
  EventTreasurmapDetailView.CLASSNAME_BACKWALL = "Dungeon_BackWall";
  EventTreasurmapDetailView.CLASSNAME_FRONTWALL = "Dungeon_FrontWall";
  EventTreasurmapDetailView.CLASSNAME_GATE = "Dungeon_Gate_Level";
  EventTreasurmapDetailView.CLASSNAME_DETAIL = "Dungeon_Detail_Level";
  EventTreasurmapDetailView.CLASSNAME_SHADOW = "Dungeon_Shadow_Level";
  return EventTreasurmapDetailView;
}(__dep_export_FightDetailView.FightDetailView);
exports.EventTreasurmapDetailView = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IFightDetailView");
