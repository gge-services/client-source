Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Event;
var __s0local2 = createjs.MouseEvent;
var __s0local3 = function () {
  function WorldmapObjectIconHelper() {}
  WorldmapObjectIconHelper.drawMapObjectIcon = function (__s5param0, __s5param1 = null, __s5param2 = true, __s5param3 = false, __s5param4 = true, __s5param5 = "", __s5param6 = null, __s5param7 = false, __s5param8 = false) {
    if (!__s5param0) {
      return null;
    }
    var __s5local0 = __s5param0.getDisplayObjectClipContainer(__s5param3, __s5param6, __s5param7);
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s5param0, "DummyMapobjectVO") || __dep_exact_81dacdf05bd32292.instanceOfClass(__s5param0, "PlaceholderMapobjectVO")) {
      __s5param4 = false;
      __s5param2 = false;
      __s5param5 = null;
    }
    if (__s5local0) {
      return WorldmapObjectIconHelper.drawMapObjectIconFromClipContainer(__s5local0, __s5param0, __s5param1, __s5param2, __s5param4, __s5param5, __s5param8);
    } else {
      __dep_exact_9e901e8e2483a22f_2.debug("WorldmapObjectIconHelper.drawMapObjectIcon: No objectContainer for worldmapObjectVO", __s5param0);
      return new __s0local0();
    }
  };
  WorldmapObjectIconHelper.drawMapObjectIconFromClipContainer = function (__s11param0, __s11param1, __s11param2 = null, __s11param3 = true, __s11param4 = true, __s11param5 = "", __s11param6 = false) {
    var __s11local0 = new __s0local0();
    __s11local0.addChild(__s11param0.asDisplayObject());
    __s11local0.mouseChildren = false;
    __s11local0.mapObject = __s11param1;
    if (__s11param5 != "") {
      __s11local0.toolTipText = __s11param5;
    }
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s11param0, "CastleDisplayObjectClipContainer")) {
      var __s11local1 = __s11param0;
      if (__s11param2) {
        __s11local1.clipSizeComponent = new __dep_exact_9e901e8e2483a22f.ClipSizeComponent(__s11param2.x, __s11param2.y, __s11param6 ? -1 : 1, -1);
      }
      __s11local1.centerClip = __s11param3;
    } else {
      if (__s11param2 && !__dep_exact_9e901e8e2483a22f_1.GoodgameBitmapEngine.bulkLoader.isFinished) {
        WorldmapObjectIconHelper.itemMCsToResize.push([__s11local0, __s11param2]);
        __s11local0.visible = false;
        __dep_exact_9e901e8e2483a22f_1.GoodgameBitmapEngine.bulkLoader.addEventListener(__s0local1.COMPLETE, WorldmapObjectIconHelper.resizeIcons);
      } else if (__s11param2) {
        __s11local0.visible = true;
        WorldmapObjectIconHelper.fitToSize(__s11local0, __s11param2);
      }
      if (__s11param3) {
        if (__dep_exact_9e901e8e2483a22f_1.GoodgameBitmapEngine.bulkLoader.isFinished) {
          WorldmapObjectIconHelper.setCenter(__s11local0);
        } else {
          WorldmapObjectIconHelper.itemMCsToCenter.push(__s11local0);
          __dep_exact_9e901e8e2483a22f_1.GoodgameBitmapEngine.bulkLoader.addEventListener(__s0local1.COMPLETE, WorldmapObjectIconHelper.centerIcons);
        }
      }
    }
    var __s11local2 = !!__dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s11param1.kingdomID) && (__dep_export_CastleModel.CastleModel.userData.castleList.hasCastleInKingdom(__s11param1.kingdomID) || __s11param1.kingdomID == __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
    if (__s11param4 && __s11param1.absAreaPosX > -1 && (__s11local2 || __s11param1.mapID > 0)) {
      __s11local0.actLikeButton = true;
      __s11local0.addEventListener(__s0local1.REMOVED_FROM_STAGE, WorldmapObjectIconHelper.onObjectRemovedFromStage);
      __s11local0.addEventListener(__s0local2.CLICK, WorldmapObjectIconHelper.onClick);
    }
    return __s11local0;
  };
  WorldmapObjectIconHelper.generateTreasureMapAssetName = function (__s23param0) {
    return "Treasuremap_" + __s23param0 + "_Assets";
  };
  WorldmapObjectIconHelper.setCenter = function (__s25param0) {
    var __s25local0 = __s25param0.getChildAt(0);
    var __s25local1 = __s25param0.getBounds(null);
    __s25local0.x = -(__s25local1.width / 2 + __s25local1.left);
    __s25local0.y = -(__s25local1.height / 2 + __s25local1.top);
  };
  WorldmapObjectIconHelper.fitToSize = function (__s27param0, __s27param1) {
    var __s27local0 = __s27param0.getChildAt(0);
    if (__s27local0.width > __s27param1.x || __s27local0.height > __s27param1.y) {
      var __s27local1 = __s27local0.getBounds(null);
      var __s27local2 = Math.min(__s27param1.x / __s27local1.width, __s27param1.y / __s27local1.height);
      __s27local0.width = __s27local0.width * __s27local2;
      __s27local0.height = __s27local0.height * __s27local2;
    }
  };
  WorldmapObjectIconHelper.resizeIcons = function (__s30param0) {
    __dep_exact_9e901e8e2483a22f_1.GoodgameBitmapEngine.bulkLoader.removeEventListener(__s0local1.COMPLETE, WorldmapObjectIconHelper.resizeIcons);
    if (WorldmapObjectIconHelper.itemMCsToResize != null) {
      for (var __s30local0 = 0, __s30local1 = WorldmapObjectIconHelper.itemMCsToResize; __s30local0 < __s30local1.length; __s30local0++) {
        var __s30local2 = __s30local1[__s30local0];
        if (__s30local2 !== undefined) {
          var __s30local3 = __s30local2[0];
          var __s30local4 = __s30local2[1];
          if (__s30local3) {
            WorldmapObjectIconHelper.fitToSize(__s30local3, __s30local4);
            __s30local3.visible = true;
          }
        }
      }
    }
    WorldmapObjectIconHelper.itemMCsToResize = [];
  };
  WorldmapObjectIconHelper.centerIcons = function (__s37param0) {
    __dep_exact_9e901e8e2483a22f_1.GoodgameBitmapEngine.bulkLoader.removeEventListener(__s0local1.COMPLETE, WorldmapObjectIconHelper.centerIcons);
    if (WorldmapObjectIconHelper.itemMCsToCenter != null) {
      for (var __s37local0 = 0, __s37local1 = WorldmapObjectIconHelper.itemMCsToCenter; __s37local0 < __s37local1.length; __s37local0++) {
        var __s37local2 = __s37local1[__s37local0];
        if (__s37local2 !== undefined && __s37local2) {
          WorldmapObjectIconHelper.setCenter(__s37local2);
        }
      }
    }
    WorldmapObjectIconHelper.itemMCsToCenter = [];
  };
  WorldmapObjectIconHelper.onClick = function (__s43param0) {
    __s43param0.target.removeEventListener(__s0local2.CLICK, WorldmapObjectIconHelper.onClick);
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, __s43param0.target.mapObject);
  };
  WorldmapObjectIconHelper.onObjectRemovedFromStage = function (__s45param0) {
    if (__s45param0.target) {
      __s45param0.target.removeEventListener(__s0local1.REMOVED_FROM_STAGE, WorldmapObjectIconHelper.onObjectRemovedFromStage);
      __s45param0.target.removeEventListener(__s0local2.CLICK, WorldmapObjectIconHelper.onClick);
    }
  };
  WorldmapObjectIconHelper.FILE_NAME_CASTLE_PARTS = "CastleParts";
  WorldmapObjectIconHelper.FILE_NAME_FACTION_EVENT = "FactionEvent";
  WorldmapObjectIconHelper.FILE_NAME_SHADOW_EVENT = "ShadowEvent";
  WorldmapObjectIconHelper.FILE_NAME_FLAME_LAYERS_ABG_PREFIX = "FlamesLayers_ABG_";
  WorldmapObjectIconHelper.MONUMENT_FILE_NAME_SUFFIXES = ["Man", "Horse"];
  WorldmapObjectIconHelper.itemMCsToCenter = [];
  WorldmapObjectIconHelper.itemMCsToResize = [];
  WorldmapObjectIconHelper.KEEP_LEVEL_1_STAGES = [1, 6, 7, 9, 10];
  WorldmapObjectIconHelper.KEEP_LEVEL_2_STAGES = [11, 12, 13, 16, 20];
  return WorldmapObjectIconHelper;
}();
exports.WorldmapObjectIconHelper = __s0local3;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
