Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Bitmap;
var __s0local1 = createjs.Point;
var __s0local2 = function () {
  function CastleWorldMapAreaTilesDirectory() {
    this.SGN_SECTORS_INITIALIZED = new __dep_exact_9e901e8e2483a22f.NoneValueSignal();
    this._allSectorsInitialized = false;
    this.currentKingdomId = 0;
    this.directoryChanged = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.setupData();
  }
  CastleWorldMapAreaTilesDirectory.prototype.setupData = function () {
    this.visClassToBitmap = new Map();
    this.resetInitialization();
    this.directoryChanged.dispatch();
  };
  CastleWorldMapAreaTilesDirectory.prototype.checkResetOnKingdomChange = function () {
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != this.currentKingdomId) {
      this.resetInitialization();
    }
  };
  CastleWorldMapAreaTilesDirectory.prototype.resetInitialization = function () {
    var __s10local0 = 0;
    var __s10local1 = 0;
    this._allSectorsInitialized = false;
    this.currentKingdomId = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
    __dep_exact_9e901e8e2483a22f_1.debug("Worldmap Cache initializing world of " + __dep_export_ClientConstCastle.ClientConstCastle.WORLD_WIDTH + "x" + __dep_export_ClientConstCastle.ClientConstCastle.WORLD_HEIGHT + " tiles.");
    var __s10local2 = "Castle" + __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomVO.kingdomName + CastleWorldMapAreaTilesDirectory.SECTOR_GENERATOR_BASE_NAME;
    var __s10local3 = __dep_exact_81dacdf05bd32292.getDefinitionByName(__s10local2);
    this.sectorGenerator = new __s10local3();
    this.areas = [];
    __s10local1 = 0;
    for (; __s10local1 < __dep_export_ClientConstCastle.ClientConstCastle.WORLD_HEIGHT; __s10local1++) {
      this.areas[__s10local1] = [];
    }
    this.sectorsInitialized = [];
    __s10local1 = 0;
    for (; __s10local1 < __dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPSIZE_Y; __s10local1++) {
      this.sectorsInitialized[__s10local1] = [];
      __s10local0 = 0;
      for (; __s10local0 < __dep_export_ClientConstCastle.ClientConstCastle.WORLDMAPSIZE_X; __s10local0++) {
        this.sectorsInitialized[__s10local1][__s10local0] = new __dep_export_CastleWorldmapSectorUpdateVO.CastleWorldmapSectorUpdateVO(-1, 0);
      }
    }
    this._allSectorsInitialized = true;
    this.SGN_SECTORS_INITIALIZED.signal();
  };
  CastleWorldMapAreaTilesDirectory.prototype.initSector = function (__s18param0, __s18param1, __s18param2 = null, __s18param3 = null) {
    this.checkResetOnKingdomChange();
    var __s18local0 = this.sectorGenerator.generateDecoObjects(__s18param0, __s18param1, __s18param3);
    var __s18local1 = new Array(__s18local0.length);
    this.initializeMapobjectVOs(__s18local0, __s18local1, __s18param0, __s18param1);
    var __s18local2 = 0;
    var __s18local3 = 0;
    var __s18local4 = !!__s18param2 && __s18param2.length > 0;
    for (var __s18local5 = __dep_exact_f855840627e6e145.int((__s18param1 + 1) * __dep_exact_26a421b704832cff_1.WorldConst.SECTOR_HEIGHT), __s18local6 = __dep_exact_f855840627e6e145.int((__s18param0 + 1) * __dep_exact_26a421b704832cff_1.WorldConst.SECTOR_WIDTH), __s18local7 = __dep_exact_f855840627e6e145.int(__s18param1 * __dep_exact_26a421b704832cff_1.WorldConst.SECTOR_HEIGHT); __s18local7 < __s18local5; __s18local7++) {
      for (var __s18local8 = __dep_exact_f855840627e6e145.int(__s18param0 * __dep_exact_26a421b704832cff_1.WorldConst.SECTOR_WIDTH); __s18local8 < __s18local6; __s18local8++) {
        if ((__s18local4 && this.isPositionInArray(__s18param2, __s18local8, __s18local7) || !__s18local4) && __s18local1[__s18local3][__s18local2]) {
          if (this.areas[__s18local7][__s18local8]) {
            this.areas[__s18local7][__s18local8].dispose();
          }
          this.areas[__s18local7][__s18local8] = __s18local1[__s18local3][__s18local2];
        }
        __s18local2++;
      }
      __s18local3++;
      __s18local2 = 0;
    }
    __s18local0 = null;
    __s18local1 = null;
  };
  CastleWorldMapAreaTilesDirectory.prototype.initializeMapobjectVOs = function (__s26param0, __s26param1, __s26param2, __s26param3) {
    var __s26local0;
    for (var __s26local1 = __dep_exact_f855840627e6e145.int(__s26param0.length), __s26local2 = __dep_exact_f855840627e6e145.int(__s26param0[0].length), __s26local3 = 0, __s26local4 = 0; __s26local4 < __s26local1; __s26local4++) {
      __s26param1[__s26local4] = new Array(__s26local2);
      __s26local0 = null;
      __s26local3 = 0;
      for (var __s26local5 = 0; __s26local5 < __s26local2; __s26local5++) {
        __s26local0 = null;
        if ((__s26local3 = __dep_exact_f855840627e6e145.int(__s26param0[__s26local4][__s26local5])) < 0) {
          __s26local0 = __dep_export_ClientConstWorldmapDeco.ClientConstWorldmapDeco.createWorldmapVOFromRawDeco(-(__s26local3 + 1));
        } else if (__s26local3 != __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_EMPTY && __s26local3 != CastleWorldMapAreaTilesDirectory.AREA_BLOCKED) {
          __s26local0 = __dep_export_WorldmapObjectFactory.WorldmapObjectFactory.createRawWorldmapObjectVO(__s26local3);
        }
        if (__s26local0) {
          __s26local0.x = __s26local5;
          __s26local0.y = __s26local4;
          __s26local0.absAreaPos = new __s0local1(__s26param2 * __dep_exact_26a421b704832cff_1.WorldConst.SECTOR_WIDTH + __s26local5, __s26param3 * __dep_exact_26a421b704832cff_1.WorldConst.SECTOR_HEIGHT + __s26local4);
          __s26local0.areaType = __s26local3;
          __s26local0.kingdomID = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
          __s26param1[__s26local4][__s26local5] = __s26local0;
        }
      }
    }
  };
  CastleWorldMapAreaTilesDirectory.prototype.isPositionInArray = function (__s35param0, __s35param1, __s35param2) {
    if (__s35param0 != null) {
      for (var __s35local0 = 0, __s35local1 = __s35param0; __s35local0 < __s35local1.length; __s35local0++) {
        var __s35local2 = __s35local1[__s35local0];
        if (__s35local2 !== undefined && __s35local2[0] == __s35param1 && __s35local2[1] == __s35param2) {
          return true;
        }
      }
    }
    return false;
  };
  CastleWorldMapAreaTilesDirectory.prototype.loadAsset = function (__s41param0) {
    var __s41local0 = __s41param0.actualVisClassName + __dep_export_ClientConstIsoChangeEventSkin.ClientConstIsoChangeEventSkin.getValidSkinSuffixForCurrentKingdom(false);
    if (!this.visClassToBitmap.get(__s41local0)) {
      var __s41local1;
      try {
        __s41local1 = __dep_exact_81dacdf05bd32292.getDefinitionByName(__s41param0.name + __s41param0.group);
      } catch (__s45local0) {}
      var __s41local2 = new __s41local1();
      if (__s41local2 instanceof __dep_export_EmptyMapobject.EmptyMapobject) {
        __s41local2.clipLoaded.addOnce(this.bindFunction(this.copyBitmapFromDisplayObject));
      }
      this.visClassToBitmap.set(__s41local0, __s41local2);
      __s41local2.initialize(__s41param0, null);
    }
  };
  CastleWorldMapAreaTilesDirectory.prototype.copyBitmapFromDisplayObject = function (__s48param0) {
    if (__s48param0) {
      var __s48local0 = __s48param0.disp;
      if (__s48local0) {
        var __s48local1;
        __s48local0.cacheAsBitmap = true;
        if (__s48local0.children[0].children[0].children[0]) {
          __s48local1 = __s48local0.children[0].children[0].children[0].clone();
        } else {
          (__s48local1 = new __s0local0()).visible = false;
        }
        var __s48local2 = __s48param0.mapobjectVO.actualVisClassName + __dep_export_ClientConstIsoChangeEventSkin.ClientConstIsoChangeEventSkin.getValidSkinSuffixForCurrentKingdom(false);
        if (!__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.visClassToBitmap.get(__s48local2), "Bitmap")) {
          var __s48local3 = this.visClassToBitmap.get(__s48local2);
          if (__s48local3) {
            __s48local3.remove();
            __s48local3.removeDispFromWorld();
          }
          this.visClassToBitmap.set(__s48local2, __s48local1);
          this.directoryChanged.dispatch();
        }
      }
    }
  };
  CastleWorldMapAreaTilesDirectory.prototype.getBitmapDataForAreaByXY = function (__s56param0, __s56param1) {
    if (__s56param0 > __dep_export_ClientConstCastle.ClientConstCastle.WORLD_WIDTH - 1 || __s56param1 > __dep_export_ClientConstCastle.ClientConstCastle.WORLD_HEIGHT - 1 || __s56param0 < 0 || __s56param1 < 0) {
      return null;
    }
    this.checkSectorInitialisation(__s56param0, __s56param1);
    if (this.areas && this.areas.length > __s56param1 && this.areas[__s56param1].length > __s56param0) {
      var __s56local0 = this.areas[__s56param1][__s56param0];
      if (__s56local0 && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s56local0, "EmptyMapobjectVO")) {
        var __s56local1 = __s56local0.actualVisClassName + __dep_export_ClientConstIsoChangeEventSkin.ClientConstIsoChangeEventSkin.getValidSkinSuffixForCurrentKingdom(false);
        var __s56local2 = this.visClassToBitmap.get(__s56local1);
        if (__s56local2 && __s56local2 instanceof __s0local0) {
          return [__s56local2, true];
        } else {
          this.loadAsset(__s56local0);
          return [null, false];
        }
      }
    }
    return [null, true];
  };
  CastleWorldMapAreaTilesDirectory.prototype.checkSectorInitialisation = function (__s63param0, __s63param1) {
    var __s63local0 = __dep_export_SectorHelper.SectorHelper.absolutPosToSectorPos(new __s0local1(__s63param0, __s63param1));
    var __s63local1 = this.sectorsInitialized[__s63local0.y][__s63local0.x];
    this.checkResetOnKingdomChange();
    if (__s63local1.status == __dep_export_CastleWorldmapSectorUpdateVO.CastleWorldmapSectorUpdateVO.STATUS_INITIAL || __dep_export_CachedTimer.CachedTimer.getCachedTimer() - __s63local1.lastUpdate > __dep_export_CastleWorldmapData.CastleWorldmapData.AREA_INVALIDATION_TIME) {
      __s63local1.kingdomId = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
      __dep_export_CastleModel.CastleModel.worldmapData.updateAreaRange(__s63local0.x * __dep_exact_26a421b704832cff_1.WorldConst.SECTOR_WIDTH, __s63local0.y * __dep_exact_26a421b704832cff_1.WorldConst.SECTOR_HEIGHT, (__s63local0.x + 1) * __dep_exact_26a421b704832cff_1.WorldConst.SECTOR_WIDTH - 1, (__s63local0.y + 1) * __dep_exact_26a421b704832cff_1.WorldConst.SECTOR_HEIGHT - 1);
      if (__s63local1.status == __dep_export_CastleWorldmapSectorUpdateVO.CastleWorldmapSectorUpdateVO.STATUS_INITIAL) {
        if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
          try {
            this.initSector(__s63local0.x, __s63local0.y);
          } catch (__s69local0) {
            __dep_exact_9e901e8e2483a22f_2.error("Faction sector generation failed for sector " + __s63local0.x + "/" + __s63local0.y + ": " + __s69local0);
          }
          __s63local1.status = __dep_exact_f855840627e6e145.int(__dep_export_CastleWorldmapSectorUpdateVO.CastleWorldmapSectorUpdateVO.STATUS_READY_FOR_RENDERING);
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetFactionPointsVO.C2SGetFactionPointsVO());
        } else {
          __s63local1.status = __dep_exact_f855840627e6e145.int(__dep_export_CastleWorldmapSectorUpdateVO.CastleWorldmapSectorUpdateVO.STATUS_INITIAL_GAA_PENDING);
        }
      }
      __s63local1.lastUpdate = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
    }
  };
  CastleWorldMapAreaTilesDirectory.prototype.insertAreaVOByXY = function (__s72param0, __s72param1, __s72param2) {
    if (__s72param0.kingdomID == this.currentKingdomId) {
      var __s72local0 = __dep_exact_f855840627e6e145.int(__dep_export_SectorHelper.SectorHelper.getSectorX(__s72param1));
      var __s72local1 = __dep_exact_f855840627e6e145.int(__dep_export_SectorHelper.SectorHelper.getSectorY(__s72param2));
      var __s72local2 = this.sectorsInitialized[__s72local1][__s72local0];
      if (!__s72param0) {
        throw new Error("Attempted to Insert empty AreaVO into a Sector");
      }
      if (__s72param0 instanceof __dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO) {
        var __s72local3 = __dep_export_CastleModel.CastleModel.bookmarkData.getBookmarkForWMO(__s72param0);
        if (__s72local3) {
          __s72param0.bookmark = __s72local3;
        }
      }
      if (__s72local2 && __s72local2.kingdomId == __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID) {
        this.areas[__s72param2][__s72param1] = __s72param0;
      }
    }
  };
  CastleWorldMapAreaTilesDirectory.prototype.getVOForAreaByXY = function (__s79param0, __s79param1) {
    if (__s79param0 > __dep_export_ClientConstCastle.ClientConstCastle.WORLD_WIDTH - 1 || __s79param1 > __dep_export_ClientConstCastle.ClientConstCastle.WORLD_HEIGHT - 1 || __s79param1 < 0) {
      return null;
    } else {
      this.checkSectorInitialisation(__s79param0, __s79param1);
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.areas[__s79param1][__s79param0], "AVisualVO")) {
        return this.areas[__s79param1][__s79param0];
      } else {
        return null;
      }
    }
  };
  CastleWorldMapAreaTilesDirectory.prototype.resetUpdateTimes = function () {
    var __s85local0 = 0;
    for (var __s85local1 = 0, __s85local2 = __dep_exact_f855840627e6e145.int(this.sectorsInitialized.length), __s85local3 = 0; __s85local1 < __s85local2; __s85local1++) {
      var __s85local4 = this.sectorsInitialized[__s85local1];
      __s85local3 = __dep_exact_f855840627e6e145.int(__s85local4.length);
      __s85local0 = 0;
      for (; __s85local0 < __s85local3; __s85local0++) {
        __s85local4[__s85local0].lastUpdate = 0;
      }
    }
  };
  CastleWorldMapAreaTilesDirectory.prototype.updateAllObjects = function () {
    if (this.areas != null) {
      for (var __s91local0 = 0, __s91local1 = this.areas; __s91local0 < __s91local1.length; __s91local0++) {
        var __s91local2 = __s91local1[__s91local0];
        if (__s91local2 !== undefined && __s91local2 != null) {
          for (var __s91local3 = 0, __s91local4 = __s91local2; __s91local3 < __s91local4.length; __s91local3++) {
            var __s91local5 = __s91local4[__s91local3];
            if (__s91local5 !== undefined && __s91local5) {
              __s91local5.dispatchValueObjectChanged();
            }
          }
        }
      }
    }
  };
  Object.defineProperty(CastleWorldMapAreaTilesDirectory.prototype, "activityHeatMap", {
    get: function () {
      var __s100local0;
      var __s100local1 = [];
      var __s100local2 = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
      var __s100local3 = 0;
      for (var __s100local4 = 0, __s100local5 = 0, __s100local6 = 0, __s100local7 = NaN; __s100local4 < this.sectorsInitialized.length; __s100local4++) {
        __s100local5 = __dep_exact_f855840627e6e145.int(this.sectorsInitialized[__s100local4].length);
        __s100local0 = [];
        __s100local3 = 0;
        for (; __s100local3 < __s100local5; __s100local3++) {
          __s100local7 = 0;
          __s100local7 = (__s100local6 = __s100local2 - this.sectorsInitialized[__s100local4][__s100local3].lastUpdate) > __dep_export_CastleWorldmapData.CastleWorldmapData.AREA_INVALIDATION_TIME || this.sectorsInitialized[__s100local4][__s100local3].kingdomId != __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID ? 2 : Math.min(1, __s100local6 / __dep_export_CastleWorldmapData.CastleWorldmapData.AREA_INVALIDATION_TIME);
          __s100local0.push(1 - __s100local7);
        }
        __s100local1.push(__s100local0);
      }
      return __s100local1;
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldMapAreaTilesDirectory.prototype.isSectorPopulated = function (__s106param0, __s106param1) {
    var __s106local0 = Math.floor(__s106param0 / __dep_exact_26a421b704832cff_1.WorldConst.SECTOR_WIDTH);
    var __s106local1 = Math.floor(__s106param1 / __dep_exact_26a421b704832cff_1.WorldConst.SECTOR_HEIGHT);
    var __s106local2 = false;
    for (var __s106local3 = __dep_exact_f855840627e6e145.int(__s106local1 * __dep_exact_26a421b704832cff_1.WorldConst.SECTOR_HEIGHT + __dep_exact_26a421b704832cff_1.WorldConst.SECTOR_HEIGHT), __s106local4 = __dep_exact_f855840627e6e145.int(__s106local0 * __dep_exact_26a421b704832cff_1.WorldConst.SECTOR_WIDTH + __dep_exact_26a421b704832cff_1.WorldConst.SECTOR_WIDTH), __s106local5 = __dep_exact_f855840627e6e145.int(__s106local1 * __dep_exact_26a421b704832cff_1.WorldConst.SECTOR_HEIGHT); __s106local5 < __s106local3; __s106local5++) {
      for (var __s106local6 = __dep_exact_f855840627e6e145.int(__s106local0 * __dep_exact_26a421b704832cff_1.WorldConst.SECTOR_WIDTH); __s106local6 < __s106local4; __s106local6++) {
        if (this.areas[__s106local5][__s106local6] instanceof __dep_export_CastleMapobjectVO.CastleMapobjectVO && this.areas[__s106local5][__s106local6].areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_CASTLE && this.areas[__s106local5][__s106local6].ownerInfo != null) {
          __s106local2 = true;
          break;
        }
      }
    }
    return __s106local2;
  };
  Object.defineProperty(CastleWorldMapAreaTilesDirectory.prototype, "allSectorsInitialized", {
    get: function () {
      return this._allSectorsInitialized;
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldMapAreaTilesDirectory.prototype.isSectorReadyForRendering = function (__s115param0, __s115param1) {
    return __s115param1 < this.sectorsInitialized.length && __s115param0 < this.sectorsInitialized[__s115param1].length && this.sectorsInitialized[__s115param1][__s115param0].status >= __dep_export_CastleWorldmapSectorUpdateVO.CastleWorldmapSectorUpdateVO.STATUS_READY_FOR_RENDERING;
  };
  CastleWorldMapAreaTilesDirectory.prototype.setReadyForRendering = function (__s117param0) {
    var __s117local0;
    if (__s117param0 != null) {
      for (var __s117local1 = 0, __s117local2 = __s117param0; __s117local1 < __s117local2.length; __s117local1++) {
        var __s117local3 = __s117local2[__s117local1];
        if (__s117local3 !== undefined) {
          __s117local0 = __dep_export_SectorHelper.SectorHelper.absolutPosToSectorPos(__s117local3);
          if (this.sectorsInitialized[__s117local0.y][__s117local0.x].status == __dep_export_CastleWorldmapSectorUpdateVO.CastleWorldmapSectorUpdateVO.STATUS_INITIAL_GAA_PENDING) {
            this.initSector(__s117local0.x, __s117local0.y, null, this.generatePresetSectorMap(__s117local0));
            this.sectorsInitialized[__s117local0.y][__s117local0.x].status = __dep_export_CastleWorldmapSectorUpdateVO.CastleWorldmapSectorUpdateVO.STATUS_READY_FOR_RENDERING;
          }
        }
      }
    }
  };
  CastleWorldMapAreaTilesDirectory.prototype.generatePresetSectorMap = function (__s124param0) {
    var __s124local0;
    var __s124local1 = [];
    for (var __s124local2 = 0; __s124local2 < __dep_exact_26a421b704832cff_1.WorldConst.SECTOR_HEIGHT; __s124local2++) {
      __s124local1[__s124local2] = [];
      for (var __s124local3 = 0; __s124local3 < __dep_exact_26a421b704832cff_1.WorldConst.SECTOR_WIDTH; __s124local3++) {
        __s124local0 = this.areas[__s124param0.y * __dep_exact_26a421b704832cff_1.WorldConst.SECTOR_HEIGHT + __s124local2][__s124param0.x * __dep_exact_26a421b704832cff_1.WorldConst.SECTOR_WIDTH + __s124local3];
        __s124local1[__s124local2][__s124local3] = __s124local0 ? CastleWorldMapAreaTilesDirectory.AREA_BLOCKED : 0;
      }
    }
    return __s124local1;
  };
  CastleWorldMapAreaTilesDirectory.prototype.destroy = function () {
    this.directoryChanged.removeAll();
  };
  CastleWorldMapAreaTilesDirectory.__initialize_static_members = function () {
    CastleWorldMapAreaTilesDirectory.AREA_BLOCKED = __dep_exact_f855840627e6e145.int(Number.MAX_VALUE);
  };
  CastleWorldMapAreaTilesDirectory.SECTOR_GENERATOR_PACKAGE = "com.goodgamestudios.castle.worldmap.helper.generators::";
  CastleWorldMapAreaTilesDirectory.SECTOR_GENERATOR_BASE_NAME = "SectorGenerator";
  return CastleWorldMapAreaTilesDirectory;
}();
exports.CastleWorldMapAreaTilesDirectory = __s0local2;
var __dep_export_CastleWorldmapData = require("gge-module:export_CastleWorldmapData");
var __dep_export_WorldmapObjectFactory = require("gge-module:export_WorldmapObjectFactory");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_ClientConstIsoChangeEventSkin = require("gge-module:export_ClientConstIsoChangeEventSkin");
var __dep_export_ClientConstWorldmapDeco = require("gge-module:export_ClientConstWorldmapDeco");
var __dep_export_C2SGetFactionPointsVO = require("gge-module:export_C2SGetFactionPointsVO");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SectorHelper = require("gge-module:export_SectorHelper");
var __dep_export_EmptyMapobject = require("gge-module:export_EmptyMapobject");
var __dep_export_CastleMapobjectVO = require("gge-module:export_CastleMapobjectVO");
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
var __dep_export_CastleWorldmapSectorUpdateVO = require("gge-module:export_CastleWorldmapSectorUpdateVO");
__s0local2.__initialize_static_members();
