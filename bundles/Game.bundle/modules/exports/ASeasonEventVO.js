Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BuyPackagesEventVO = require("gge-module:export_BuyPackagesEventVO");
var __s0local0 = function (__s1param0) {
  function ASeasonEventVO() {
    var __s3local0 = this;
    __s3local0.hasFrame = true;
    __s3local0._mapID = 0;
    __s3local0._unlocked = false;
    __s3local0._finished = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._treasureMapLoader = new __dep_export_TreasureMapLoader.TreasureMapLoader();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ASeasonEventVO, __s1param0);
  ASeasonEventVO.prototype.parseEventXmlNode = function (__s5param0) {
    __s1param0.prototype.parseEventXmlNode.call(this, __s5param0);
    this._mapID = parseInt(__s5param0.mapID || "");
  };
  ASeasonEventVO.prototype.parseParamObject = function (__s7param0) {
    if (__s7param0.UL) {
      this._unlocked = Boolean(__s7param0.UL.UL);
    }
    if (__s7param0.RID) {
      this._rewardList = __dep_export_CastleModel.CastleModel.rewardData.getListById(__dep_exact_f855840627e6e145.int(__s7param0.RID));
    }
    this._finished = __dep_exact_f855840627e6e145.int(__s7param0.F) == 1;
  };
  Object.defineProperty(ASeasonEventVO.prototype, "isLocked", {
    get: function () {
      return !this._unlocked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASeasonEventVO.prototype, "treasureMapVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.treasureMapData.getTreasureMapByID(this._mapID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASeasonEventVO.prototype, "finished", {
    get: function () {
      return this._finished;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASeasonEventVO.prototype, "requiresAdditionalEventLib", {
    get: function () {
      return true;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "requiresAdditionalEventLib").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  ASeasonEventVO.prototype.onDestroy = function () {
    __s1param0.prototype.onDestroy.call(this);
    __dep_export_CastleModel.CastleModel.armyData.removeTreasureMovementsByMapID(this._mapID);
  };
  Object.defineProperty(ASeasonEventVO.prototype, "mapID", {
    get: function () {
      return this._mapID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASeasonEventVO.prototype, "seasonNameString", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("event_title_" + this.eventId);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASeasonEventVO.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  ASeasonEventVO.prototype.getEventLibName = function () {
    return "Castlewall_SeasonCamp_" + this._eventId;
  };
  ASeasonEventVO.prototype.loadTreasureMapAssets = function (__s31param0) {
    if (!__dep_export_FlashBlockHelper.FlashBlockHelper.checkFlashBlock(this.mapID)) {
      this._treasureMapLoader.loadTreasureMapAssets(__s31param0, this.eventId, this.preloadedAssets, this.hasFrame);
    }
  };
  ASeasonEventVO.prototype.treasureMapAssetsLoaded = function () {
    return this._treasureMapLoader.isLoaded();
  };
  Object.defineProperty(ASeasonEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return -1;
    },
    set: function (__s38param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "eventBuildingWOD").set.call(this, __s38param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASeasonEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "event_title_" + this.eventId;
    },
    set: function (__s42param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "eventBuildingNameId").set.call(this, __s42param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASeasonEventVO.prototype, "addToOverview", {
    get: function () {
      return true;
    },
    set: function (__s46param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "addToOverview").set.call(this, __s46param0);
    },
    enumerable: true,
    configurable: true
  });
  ASeasonEventVO.prototype.hasRewards = function () {
    return false;
  };
  ASeasonEventVO.prototype.getRewards = function (__s50param0) {
    if (!this._rewardLists) {
      this._rewardLists = [];
      this._rewardLists.push(this.rewardList);
    }
    return this._rewardLists;
  };
  ASeasonEventVO.prototype.getRank = function (__s53param0) {
    return -1;
  };
  ASeasonEventVO.prototype.getScore = function (__s55param0) {
    return -1;
  };
  return ASeasonEventVO;
}(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO);
exports.ASeasonEventVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
var __dep_export_FlashBlockHelper = require("gge-module:export_FlashBlockHelper");
var __dep_export_TreasureMapLoader = require("gge-module:export_TreasureMapLoader");
