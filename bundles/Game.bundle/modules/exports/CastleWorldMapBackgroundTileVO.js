Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_KingdomEnum = require("gge-module:export_KingdomEnum");
var __s0local0 = createjs.Rectangle;
var __s0local1 = createjs.BitmapData;
var __s0local2 = function () {
  function CastleWorldMapBackgroundTileVO(__s3param0, __s3param1, __s3param2) {
    this._sectorPosX = 0;
    this._sectorPosY = 0;
    this.backgroundIsLoaded = false;
    this.riverIsLoaded = false;
    this.hasRiver = false;
    this.kingdomID = 0;
    this.skinID = "";
    this._sectorPosX = __s3param0;
    this._sectorPosY = __s3param1;
    this.visClassToBitmap = __s3param2;
  }
  CastleWorldMapBackgroundTileVO.prototype.getBitmapData = function () {
    if (this.cellBitmap && this.checkAllClipsLoaded() && this.kingdomID == __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID && this.skinID == __dep_export_ClientConstIsoChangeEventSkin.ClientConstIsoChangeEventSkin.getValidSkinSuffixForCurrentKingdom(false, true)) {
      return this.cellBitmap;
    }
    this.backgroundIsLoaded = false;
    this.riverIsLoaded = false;
    this.hasRiver = false;
    this.kingdomID = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
    this.skinID = __dep_export_ClientConstIsoChangeEventSkin.ClientConstIsoChangeEventSkin.getValidSkinSuffixForCurrentKingdom(false, true);
    this.initDrawnAreas();
    var __s5local0 = __dep_export_ClientConstIsoChangeEventSkin.ClientConstIsoChangeEventSkin.getSkinnedBackgroundColor(false);
    this.cellBitmap = new __s0local1(__dep_export_ClientConstCastle.ClientConstCastle.SECTORPIXELSIZE_X, __dep_export_ClientConstCastle.ClientConstCastle.SECTORPIXELSIZE_Y, false, __s5local0 != __dep_export_ClientConstColor.ClientConstColor.USE_DEFAULT_COLOR ? __s5local0 : __dep_export_KingdomEnum.KingdomEnum.getTypeById(this.kingdomID).mapBackgroundColor);
    this.cellBitmap.lock();
    var __s5local1 = __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomVO.kingdomName + this.skinID;
    this.addMapBackground(__s5local1);
    if (this.hasKingdomRivers) {
      this.addRivers(__s5local1);
    }
    if (CastleWorldMapBackgroundTileVO.DRAW_SECTOR_BOUNDS) {
      this.cellBitmap.fillRect(new __s0local0(0, 0, this.cellBitmap.width, 1), __dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_RED);
      this.cellBitmap.fillRect(new __s0local0(0, 0, 1, this.cellBitmap.height), __dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_RED);
      this.cellBitmap.fillRect(new __s0local0(0, this.cellBitmap.height - 1, this.cellBitmap.width, this.cellBitmap.height), __dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_RED);
      this.cellBitmap.fillRect(new __s0local0(this.cellBitmap.width - 1, 0, this.cellBitmap.width, this.cellBitmap.height), __dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_RED);
      var __s5local2 = new __dep_exact_81dacdf05bd32292_1.TextField();
      var __s5local3 = new __dep_exact_81dacdf05bd32292_2.TextFormat();
      __s5local3.size = 20;
      __s5local3.font = "Arial";
      __s5local3.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_WHITE;
      __s5local2.width = 800;
      __s5local2.height = 200;
      __s5local2.textColor = __dep_export_ClientConstColor.ClientConstColor.GENERIC_WHITE;
      __s5local2.text = "Sector: " + this._sectorPosX + ":" + this._sectorPosY;
      __s5local2.setTextFormat(__s5local3);
      var __s5local4 = new __dep_exact_81dacdf05bd32292.Matrix();
      __s5local4.translate(10, 10);
      __s5local2.cache(0, 0, __s5local2.width, __s5local2.height);
      this.cellBitmap.draw(__s5local2, __s5local4);
      __s5local2.uncache();
      __s5local2 = null;
    }
    this.cellBitmap.unlock();
    if (this.checkAllClipsLoaded()) {
      return this.cellBitmap;
    } else {
      return null;
    }
  };
  CastleWorldMapBackgroundTileVO.prototype.initDrawnAreas = function () {
    this.drawnDecoAreas = [];
    for (var __s12local0 = 0; __s12local0 < __dep_exact_26a421b704832cff.WorldConst.SECTOR_WIDTH; __s12local0++) {
      this.drawnDecoAreas[__s12local0] = [];
    }
  };
  CastleWorldMapBackgroundTileVO.prototype.addMapBackground = function (__s16param0) {
    var __s16local0;
    var __s16local1;
    var __s16local2 = "Background_Mapobject_Piece" + this._sectorPosX % 13 % 2 + "_" + __s16param0;
    if (this.visClassToBitmap.has(__s16local2)) {
      __s16local0 = this.visClassToBitmap.get(__s16local2);
      __s16local1 = new __dep_exact_81dacdf05bd32292.Matrix();
      if (!this.isBitmapValid(__s16local0)) {
        console.warn("Skipping background draw - bitmap is invalid:", __s16local2);
        return;
      }
      try {
        this.cellBitmap.draw(__s16local0, __s16local1, null, null, null, true);
      } catch (__s21local0) {
        throw new Error("cellBitmap.draw() failed for some reason! More info on the object passed: " + (__s16local0 ? __s16local0.width + " " + __s16local0.height : "bmpData is null") + " " + __s21local0);
      }
      this.backgroundIsLoaded = true;
    } else {
      var __s16local3 = __dep_exact_9e901e8e2483a22f_1.GoodgameBitmapEngine.clipFactory.getExternalClipSource(__s16local2, this.assetFileURL);
      if (__s16local3.isLoaded) {
        var __s16local4 = new __dep_export_CastleGoodgameBitmapClipExternal.CastleGoodgameBitmapClipExternal(__s16local3, 0, false);
        var __s16local5 = __s16local4.bmpImage.clone();
        this.visClassToBitmap.set(__s16local2, __s16local5);
        if (this.isBitmapValid(__s16local5)) {
          this.cellBitmap.draw(__s16local5, null, null, null, null, true);
          this.backgroundIsLoaded = true;
        } else {
          console.warn("Skipping background draw - cloned bitmap is invalid:", __s16local2);
        }
        __s16local4.dispose();
      } else {
        __s16local3.clipLoadedAndConverted.addOnce(this.bindFunction(this.onAssetLoaded));
      }
    }
  };
  CastleWorldMapBackgroundTileVO.prototype.onAssetLoaded = function () {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.renderer.invalidateMap();
  };
  CastleWorldMapBackgroundTileVO.prototype.numToLetters = function (__s30param0) {
    switch (__s30param0) {
      case 1:
        return "a";
      case 2:
        return "b";
      case 3:
        return "c";
      case 4:
        return "d";
      default:
        return "z";
    }
  };
  CastleWorldMapBackgroundTileVO.prototype.capRotation = function (__s33param0, __s33param1) {
    if ((__s33param1 == 2 || __s33param1 == 3) && (__s33param0 == "c" || __s33param0 == "d")) {
      __s33param0 = "b";
    }
    return __s33param0;
  };
  CastleWorldMapBackgroundTileVO.prototype.addRivers = function (__s36param0) {
    var __s36local0;
    var __s36local1 = __dep_exact_f855840627e6e145.int(this._sectorPosX % __dep_export_ClientConstCastle.ClientConstCastle.RIVER_LOOKUP_MAP_SIZE);
    var __s36local2 = __dep_exact_f855840627e6e145.int(this._sectorPosY % __dep_export_ClientConstCastle.ClientConstCastle.RIVER_LOOKUP_MAP_SIZE);
    var __s36local3 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCastle.ClientConstCastle.CASTLE_RIVER_LOOKUP_MAP[__s36local2][__s36local1]);
    var __s36local4 = Math.floor(__s36local3 / 10);
    var __s36local5 = __s36local3 % 10;
    var __s36local6 = this.numToLetters(__s36local5);
    if (__s36local4 != CastleWorldMapBackgroundTileVO.EMPTY_RIVERPIECE && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff_1.WorldDessert.KINGDOM_ID && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff_2.WorldIsland.KINGDOM_ID) {
      this.hasRiver = true;
      var __s36local7;
      var __s36local8 = "River_Mapobject_Piece" + String(__s36local4) + __s36local6 + "_Variant0_" + __s36param0;
      this.riverLookUpName = "River" + String(__s36local4) + __s36local6 + "_" + __s36param0;
      if (this.visClassToBitmap.has(this.riverLookUpName)) {
        __s36local7 = (__s36local0 = this.visClassToBitmap.get(this.riverLookUpName))._savedTranslation || new __dep_exact_81dacdf05bd32292.Matrix();
        if (this.isBitmapValid(__s36local0)) {
          this.cellBitmap.draw(__s36local0, __s36local7, null, null, null, true);
          this.riverIsLoaded = true;
        } else {
          console.warn("Skipping river draw - cached bitmap is invalid:", this.riverLookUpName);
        }
      } else {
        var __s36local9 = __dep_exact_9e901e8e2483a22f_1.GoodgameBitmapEngine.clipFactory.getExternalClipSource(__s36local8, this.assetFileURL);
        if (__s36local9.isLoaded) {
          var __s36local10 = new __dep_export_CastleGoodgameBitmapClipExternal.CastleGoodgameBitmapClipExternal(__s36local9, 0, false);
          __s36local7 = new __dep_exact_81dacdf05bd32292.Matrix();
          var __s36local11 = __s36local10.asDisplayObject();
          var __s36local12 = __s36local11.getBounds();
          __s36local7.translate(__dep_export_ClientConstCastle.ClientConstCastle.SECTORPIXELSIZE_X / 2 + __s36local12.x, __dep_export_ClientConstCastle.ClientConstCastle.SECTORPIXELSIZE_Y / 2 + __s36local12.y);
          if (__s36local11.children[0]) {
            var __s36local13 = __s36local11.children[0].clone();
            __s36local13._savedTranslation = __s36local7;
            this.visClassToBitmap.set(this.riverLookUpName, __s36local13);
            if (this.isBitmapValid(__s36local13)) {
              this.cellBitmap.draw(__s36local13, __s36local7, null, null, null, true);
              this.riverIsLoaded = true;
            } else {
              console.warn("Skipping river draw - cloned bitmap is invalid:", this.riverLookUpName);
            }
          }
          __s36local10.dispose();
        }
      }
    } else {
      this.hasRiver = false;
    }
  };
  CastleWorldMapBackgroundTileVO.prototype.scaleDrawMatrix = function (__s48param0) {};
  Object.defineProperty(CastleWorldMapBackgroundTileVO.prototype, "hasKingdomRivers", {
    get: function () {
      switch (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID) {
        case __dep_exact_26a421b704832cff_2.WorldIsland.KINGDOM_ID:
          return false;
        default:
          return true;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldMapBackgroundTileVO.prototype.checkAllClipsLoaded = function () {
    return this.backgroundIsLoaded && (!this.hasRiver || this.riverIsLoaded);
  };
  CastleWorldMapBackgroundTileVO.prototype.isBitmapValid = function (__s55param0) {
    if (!__s55param0) {
      console.warn("isBitmapValid: Bitmap is null or undefined");
      return false;
    }
    var __s55local0 = __s55param0.image;
    if (!__s55local0) {
      console.warn("isBitmapValid: Bitmap has no image property");
      return false;
    }
    if (__s55local0 instanceof HTMLImageElement) {
      if (!__s55local0.complete) {
        console.warn("isBitmapValid: Image not yet loaded (complete=false)");
        return false;
      }
      if (__s55local0.naturalWidth === 0 || __s55local0.naturalHeight === 0) {
        console.warn("isBitmapValid: Image is broken (naturalWidth or naturalHeight is 0)");
        return false;
      }
    } else if (__s55local0 instanceof HTMLCanvasElement && (__s55local0.width <= 0 || __s55local0.height <= 0)) {
      console.warn("isBitmapValid: Canvas has invalid dimensions");
      return false;
    }
    return true;
  };
  Object.defineProperty(CastleWorldMapBackgroundTileVO.prototype, "assetFileURL", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("WorldmapAssets_" + __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomVO.kingdomName + this.skinID);
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldMapBackgroundTileVO.prototype.drawDecoArea = function (__s65param0, __s65param1) {
    var __s65local0 = __dep_exact_f855840627e6e145.int(__s65param0 % __dep_exact_26a421b704832cff.WorldConst.SECTOR_WIDTH);
    var __s65local1 = __dep_exact_f855840627e6e145.int(__s65param1 % __dep_exact_26a421b704832cff.WorldConst.SECTOR_HEIGHT);
    if (this.cellBitmap == null || !this.checkAllClipsLoaded() || this.drawnDecoAreas[__s65local0][__s65local1]) {
      return null;
    }
    var __s65local2 = __dep_export_CastleModel.CastleModel.worldmapData.areaTiles.getBitmapDataForAreaByXY(__s65param0, __s65param1);
    var __s65local3 = __s65local2[0];
    var __s65local4 = __s65local2[1];
    if (__s65local3) {
      var __s65local5 = new __dep_exact_81dacdf05bd32292.Matrix();
      __s65local5.translate(__s65local0 * __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_X, __s65local1 * __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_Y);
      if (this.isBitmapValid(__s65local3)) {
        this.cellBitmap.draw(__s65local3, __s65local5, null, null, null, true);
      } else {
        console.warn("Skipping deco area draw - bitmap is invalid at:", __s65param0, __s65param1);
      }
    }
    this.drawnDecoAreas[__s65local0][__s65local1] = __s65local4;
    return this.cellBitmap;
  };
  CastleWorldMapBackgroundTileVO.prototype.freeBitmapData = function () {
    if (this.cellBitmap) {
      this.cellBitmap.dispose();
      this.cellBitmap = null;
    }
  };
  CastleWorldMapBackgroundTileVO.EMPTY_RIVERPIECE = 5;
  CastleWorldMapBackgroundTileVO.DRAW_SECTOR_BOUNDS = false;
  return CastleWorldMapBackgroundTileVO;
}();
exports.CastleWorldMapBackgroundTileVO = __s0local2;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstIsoChangeEventSkin = require("gge-module:export_ClientConstIsoChangeEventSkin");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameBitmapClipExternal = require("gge-module:export_CastleGoodgameBitmapClipExternal");
