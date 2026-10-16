Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SGetAreasVO = require("gge-module:export_C2SGetAreasVO");
var __dep_export_C2SSearchPlayerVO = require("gge-module:export_C2SSearchPlayerVO");
var __dep_export_C2SGetBookmarkList = require("gge-module:export_C2SGetBookmarkList");
var __dep_export_CastleBookmarkDataEvent = require("gge-module:export_CastleBookmarkDataEvent");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleWorldmapData() {
    var __s3local0 = this;
    __s3local0._allowGAARequests = false;
    CONSTRUCTOR_HACK;
    __s3local0 = __s1param0.call(this) || this;
    __dep_export_CastleModel.CastleModel.bookmarkData.addEventListener(__dep_export_CastleBookmarkDataEvent.CastleBookmarkDataEvent.ON_LIST_CHANGED, __s3local0.bindFunction(__s3local0.updateAllBookmarks));
    __s3local0.bgTiles = new __dep_export_CastleWorldMapBackgroundTilesDirectory.CastleWorldMapBackgroundTilesDirectory();
    __s3local0.areaTiles = new __dep_export_CastleWorldMapAreaTilesDirectory.CastleWorldMapAreaTilesDirectory();
    __s3local0.requestExtraData();
    __dep_exact_9e901e8e2483a22f.debug("[ATTENTION]: Worldmap is running in debug mode. Sector updates have been set to 5 seconds.");
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleWorldmapData, __s1param0);
  CastleWorldmapData.prototype.reset = function () {
    this.bgTiles = new __dep_export_CastleWorldMapBackgroundTilesDirectory.CastleWorldMapBackgroundTilesDirectory();
    this.areaTiles.destroy();
    this.areaTiles = new __dep_export_CastleWorldMapAreaTilesDirectory.CastleWorldMapAreaTilesDirectory();
    this._areasWithCoolDown = [];
    this._areasWithSpyTime = [];
    this._areasWithNoobProtection = [];
    this._areasWithPeaceProtection = [];
    this._areasWithBookmarks = [];
  };
  CastleWorldmapData.prototype.executeUpdate = function (__s7param0) {
    this.updateCoolDownAreas();
    this.updateWithNoobProtectionAreas();
    this.updateWithPeaceProtectionAreas();
    this.updateSpyTimeAreas();
  };
  CastleWorldmapData.prototype.updateCoolDownAreas = function () {
    this._areasWithCoolDown = CastleWorldmapData.checkTimedAreas(this._areasWithCoolDown, function (__s11param0) {
      return __s11param0.remainingCooldownTimeInSeconds <= 0;
    });
  };
  CastleWorldmapData.prototype.updateAllBookmarks = function (__s13param0) {
    var __s13local0 = [];
    var __s13local1 = new Map();
    var __s13local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
    var __s13local3 = __dep_export_CastleModel.CastleModel.bookmarkData.getWorldmapBookmarksByKingdomID(__s13local2);
    if (this._areasWithBookmarks && this._areasWithBookmarks != null) {
      for (var __s13local4 = 0, __s13local5 = this._areasWithBookmarks; __s13local4 < __s13local5.length; __s13local4++) {
        var __s13local6 = __s13local5[__s13local4];
        if (__s13local6 !== undefined) {
          __s13local6.bookmark = null;
          __s13local1.set(__s13local6, true);
        }
      }
    }
    if (__s13local3 != null) {
      for (var __s13local7 = 0, __s13local8 = __s13local3; __s13local7 < __s13local8.length; __s13local7++) {
        var __s13local9;
        var __s13local10 = __s13local8[__s13local7];
        if (__s13local10 !== undefined) {
          if (this.areaTiles) {
            __s13local9 = this.areaTiles.getVOForAreaByXY(__s13local10.posX, __s13local10.posY);
          }
          if (__s13local9) {
            if (!__s13local9.bookmark || __s13local10.priority > __s13local9.bookmark.priority) {
              __s13local9.bookmark = __s13local10;
            }
            __s13local1.set(__s13local9, true);
            __s13local0.push(__s13local9);
          }
        }
      }
    }
    if (__s13local1 != null) {
      for (var __s13local11 = 0, __s13local12 = Array.from(__s13local1.keys()); __s13local11 < __s13local12.length; __s13local11++) {
        var __s13local13 = __s13local12[__s13local11];
        if (__s13local13 instanceof __dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO) {
          __s13local13.updateVE();
        }
      }
    }
    this._areasWithBookmarks = __s13local0;
  };
  CastleWorldmapData.prototype.updateSpyTimeAreas = function () {
    this._areasWithSpyTime = CastleWorldmapData.checkTimedAreas(this._areasWithSpyTime, function (__s32param0) {
      return __s32param0.remainingSpyInfoTime <= 0;
    });
  };
  CastleWorldmapData.prototype.updateWithNoobProtectionAreas = function () {
    this._areasWithNoobProtection = CastleWorldmapData.checkTimedAreas(this._areasWithNoobProtection, function (__s36param0) {
      return !__s36param0.ownerInfo || __s36param0.ownerInfo.remainingNoobTime <= 0;
    });
  };
  CastleWorldmapData.prototype.updateWithPeaceProtectionAreas = function () {
    this._areasWithPeaceProtection = CastleWorldmapData.checkTimedAreas(this._areasWithPeaceProtection, function (__s40param0) {
      return !__s40param0.ownerInfo || __s40param0.ownerInfo.remainingPeaceTime <= 0;
    });
  };
  CastleWorldmapData.checkTimedAreas = function (__s42param0, __s42param1) {
    if (__s42param0) {
      var __s42local0 = false;
      for (var __s42local1 = 0; __s42local1 < __s42param0.length; __s42local1++) {
        if (__s42param1(__s42param0[__s42local1])) {
          __s42param0[__s42local1].updateVE();
          __s42local0 = true;
        }
      }
      if (!__s42local0) {
        return __s42param0;
      }
      var __s42local2 = [];
      for (var __s42local3 = 0; __s42local3 < __s42param0.length; __s42local3++) {
        if (!__s42param1(__s42param0[__s42local3])) {
          __s42local2.push(__s42param0[__s42local3]);
        }
      }
      if (__s42param0.length > 0) {
        return __s42local2;
      } else {
        return null;
      }
    }
    return null;
  };
  CastleWorldmapData.prototype.parseAreaInfos = function (__s54param0) {
    if (!__s54param0 || !Array.isArray(__s54param0) || __s54param0.length == 0) {
      return [];
    }
    var __s54local0 = [];
    var __s54local1 = 0;
    if (__s54param0 != null) {
      for (var __s54local2 = 0, __s54local3 = __s54param0; __s54local2 < __s54local3.length; __s54local2++) {
        var __s54local4 = __s54local3[__s54local2];
        if (__s54local4 !== undefined) {
          var __s54local5 = this.areaTiles.getVOForAreaByXY(__s54local4[1], __s54local4[2]);
          if (__s54local5 instanceof __dep_export_EmptyMapobjectVO.EmptyMapobjectVO) {
            __s54local5 = null;
          }
          var __s54local6 = __dep_exact_f855840627e6e145.int(__s54local4[1]);
          var __s54local7 = __dep_exact_f855840627e6e145.int(__s54local4[2]);
          if (__s54local4.length <= 0) {
            return [];
          }
          __s54local5 = __s54local5 ? __s54local5.castAsAreaTypeAndParse(__s54local4) : __dep_export_WorldmapObjectFactory.WorldmapObjectFactory.parseWorldMapArea(__s54local4);
          this.areaTiles.insertAreaVOByXY(__s54local5, __s54local6, __s54local7);
          if (__s54local5.remainingCooldownTimeInSeconds > 0) {
            this._areasWithCoolDown ||= [];
            this._areasWithCoolDown.push(__s54local5);
          }
          if (__s54local5.remainingSpyInfoTime > 0) {
            this._areasWithSpyTime ||= [];
            this._areasWithSpyTime.push(__s54local5);
          }
          if (__s54local5.ownerInfo && __s54local5.ownerInfo.remainingNoobTime > 0) {
            this._areasWithNoobProtection ||= [];
            this._areasWithNoobProtection.push(__s54local5);
          }
          if (__s54local5.ownerInfo && __s54local5.ownerInfo.remainingPeaceTime > 0) {
            this._areasWithPeaceProtection ||= [];
            this._areasWithPeaceProtection.push(__s54local5);
          }
          __s54local0[__s54local1++] = __s54local5.absAreaPos;
        }
      }
    }
    return __s54local0;
  };
  CastleWorldmapData.prototype.requestExtraData = function () {
    this._allowGAARequests = true;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetBookmarkList.C2SGetBookmarkList());
  };
  CastleWorldmapData.prototype.updateAreaRange = function (__s69param0, __s69param1, __s69param2, __s69param3) {
    if (__s69param2 - __s69param0 > 100) {
      __s69param2 = __s69param0 + 99;
    }
    if (__s69param3 - __s69param1 > 100) {
      __s69param3 = __s69param1 + 99;
    }
    if (!!this._allowGAARequests && (this.layoutManager.currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP || this.layoutManager.currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP_RELOCATION)) {
      if (__dep_export_CastleModel.CastleModel.kingdomData.willBecomeFaction != -1) {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAreasVO.C2SGetAreasVO(__dep_export_CastleModel.CastleModel.kingdomData.willBecomeFaction, __s69param0, __s69param1, __s69param2, __s69param3));
      } else {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAreasVO.C2SGetAreasVO(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID, __s69param0, __s69param1, __s69param2, __s69param3));
      }
    }
  };
  Object.defineProperty(CastleWorldmapData.prototype, "allowGAARequests", {
    set: function (__s76param0) {
      this._allowGAARequests = __s76param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldmapData.prototype.searchPlayerByName = function (__s78param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSearchPlayerVO.C2SSearchPlayerVO(__s78param0));
  };
  CastleWorldmapData.prototype.parseSearchInfos = function (__s80param0) {
    var __s80local0 = new __s0local0(__s80param0.X, __s80param0.Y);
    this.layoutManager.worldmapScreen.camera.centerArea(__s80local0);
    var __s80local1 = this.getAreaVEByXY(__s80local0, true);
    if (__s80local1) {
      __s80local1.showRingMenu();
    } else {
      var __s80local2 = this.areaTiles.getVOForAreaByXY(__s80local0.x, __s80local0.y);
      if (__s80local2 && __s80local2.ownerInfo && !__s80local2.ownerInfo.isOwnOwnerInfo) {
        this.layoutManager.worldmapScreen.delayOpenRingMenu(__s80local2);
      }
    }
  };
  CastleWorldmapData.prototype.getAreaVEByXY = function (__s85param0, __s85param1 = false) {
    return this.layoutManager.worldmapScreen.renderer.getVEforAreaXY(__s85param0.x, __s85param0.y, __s85param1);
  };
  Object.defineProperty(CastleWorldmapData.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldmapData.prototype.isSectorPopulated = function (__s89param0, __s89param1) {
    return this.areaTiles.isSectorPopulated(__s89param0, __s89param1);
  };
  Object.defineProperty(CastleWorldmapData.prototype, "relocationObjects", {
    get: function () {
      this._relocationObjects ||= [];
      return this._relocationObjects;
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldmapData.prototype.getExpiredRelocationObject = function () {
    var __s93local0;
    for (var __s93local1 = 0; __s93local1 < this.relocationObjects.length; __s93local1++) {
      if ((__s93local0 = this.relocationObjects[__s93local1]) && __dep_exact_81dacdf05bd32292.instanceOfClass(__s93local0, "CastleMapobjectVO")) {
        var __s93local2 = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(__s93local0.occupierID);
        if (__s93local2 && __s93local2.remainingRelocateDuration <= 0) {
          return __s93local0;
        }
      }
    }
    return null;
  };
  CastleWorldmapData.__initialize_static_members = function () {
    CastleWorldmapData.AREA_INVALIDATION_TIME = 120000;
  };
  return CastleWorldmapData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleWorldmapData = __s0local1;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleWorldMapAreaTilesDirectory = require("gge-module:export_CastleWorldMapAreaTilesDirectory");
var __dep_export_CastleWorldMapBackgroundTilesDirectory = require("gge-module:export_CastleWorldMapBackgroundTilesDirectory");
var __dep_export_WorldmapObjectFactory = require("gge-module:export_WorldmapObjectFactory");
var __dep_export_EmptyMapobjectVO = require("gge-module:export_EmptyMapobjectVO");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "IUpdatable");
__s0local1.__initialize_static_members();
