Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SpecialEventSeasonLeagueComponent = require("gge-module:export_SpecialEventSeasonLeagueComponent");
var __s0local0 = createjs.Event;
var __s0local1 = function () {
  function ASpecialEventVO() {
    this._eventId = -1;
    this._endTimestamp = 0;
    this._minLevel = 6;
    this._crossplayMinLevel = -1;
    this._maxLevel = 99;
    this._kingdomIDs = [];
    this._allowedAreaTypes = [];
    this._mapIDs = [];
    this._additionalLibLoaded = false;
    this._openWithLogin = false;
    this._isPrivateEvent = false;
    this._isoSortOrder = 0;
    this._seasonLeague = new __dep_export_SpecialEventSeasonLeagueComponent.SpecialEventSeasonLeagueComponent();
    this.eventExtensionUnlock = 0;
    this.openEventDialogAfterNewParse = false;
    this._eventOverviewConfig = new __dep_export_EventOverviewEventConfig.EventOverviewEventConfig();
  }
  ASpecialEventVO.prototype.update = function () {};
  ASpecialEventVO.prototype.onDestroy = function () {};
  ASpecialEventVO.prototype.parseData = function (__s9param0, __s9param1, __s9param2) {
    this.parseBasicsFromParamObject(__s9param2);
    this.parseBasicsFromXmlNode(__s9param0);
    this.parseEventXmlNode(__s9param0);
    this.parseAdditionalXmlFromRoot(__s9param1);
    this.parseParamObject(__s9param2);
  };
  ASpecialEventVO.prototype.checkOpenDialog = function () {
    if (this.openEventDialogAfterNewParse) {
      this.openDialog();
    }
    this.openEventDialogAfterNewParse = false;
  };
  ASpecialEventVO.prototype.parseBasicsFromParamObject = function (__s14param0) {
    if (__s14param0) {
      if (__s14param0.EID) {
        this._eventId = __dep_exact_f855840627e6e145.int(__s14param0.EID);
      }
      if (__s14param0.RS) {
        this._endTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s14param0.RS * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
      }
    }
  };
  ASpecialEventVO.prototype.parseBasicsFromXmlNode = function (__s19param0) {
    if (__s19param0) {
      this.eventExtensionUnlock = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("eventExtensionUnlock", __s19param0, "0"));
      this._eventType = String(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("eventType", __s19param0, "", true));
      this._minLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("minLevel", __s19param0, "0"));
      this._maxLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("maxLevel", __s19param0, "99"));
      this._openWithLogin = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("openWithLogin", __s19param0, "0")) == 1;
      this._isoSortOrder = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("sortOrder", __s19param0, "0"));
      this._crossplayMinLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("crossplayMinLevel", __s19param0, "-1"));
      var __s19local0 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("kIDs", __s19param0, "0").split(",");
      this._kingdomIDs = Array(__s19local0.length).fill(0);
      for (var __s19local1 = 0; __s19local1 < this._kingdomIDs.length; __s19local1++) {
        this._kingdomIDs[__s19local1] = parseInt(__s19local0[__s19local1]);
      }
      var __s19local2 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("areaTypes", __s19param0, "1").split(",");
      this._allowedAreaTypes = Array(__s19local2.length).fill(0);
      for (var __s19local3 = 0; __s19local3 < this._allowedAreaTypes.length; __s19local3++) {
        this._allowedAreaTypes[__s19local3] = parseInt(__s19local2[__s19local3]);
      }
      var __s19local4 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("mapID", __s19param0, "0").split(",");
      this._mapIDs = Array(__s19local4.length).fill(0);
      for (var __s19local5 = 0; __s19local5 < this._mapIDs.length; __s19local5++) {
        this._mapIDs[__s19local5] = parseInt(__s19local4[__s19local5]);
      }
    }
  };
  ASpecialEventVO.prototype.parseParamObject = function (__s28param0) {
    this._seasonLeague.parseServerData(__s28param0);
  };
  ASpecialEventVO.prototype.parseEventXmlNode = function (__s30param0) {};
  ASpecialEventVO.prototype.parseAdditionalXmlFromRoot = function (__s32param0) {};
  ASpecialEventVO.prototype.parseByPrivateEventData = function (__s34param0) {
    var __s34local0 = [];
    for (var __s34local1 = 1; __s34local1 < arguments.length; __s34local1++) {
      __s34local0[__s34local1 - 1] = arguments[__s34local1];
    }
    this._isPrivateEvent = true;
    this.parsePrivateEventEnum(__s34param0);
    this.parsePrivateEventParams(__s34local0);
    this.loadAdditionalEventLib();
  };
  ASpecialEventVO.prototype.parsePrivateEventParams = function (__s38param0) {};
  ASpecialEventVO.prototype.parsePrivateEventEnum = function (__s40param0) {
    this._eventId = __s40param0.privateEventID;
    this._eventType = __s40param0.eventType;
    this._minLevel = __s40param0.minLevel;
    this._maxLevel = __s40param0.maxLevel;
    this._openWithLogin = __s40param0.openWithLogin;
    this._kingdomIDs = Array(__s40param0.kIDs.length).fill(0);
    for (var __s40local0 = 0; __s40local0 < this._kingdomIDs.length; __s40local0++) {
      this._kingdomIDs[__s40local0] = __s40param0.kIDs[__s40local0];
    }
    this._allowedAreaTypes = Array(__s40param0.areaTypes.length).fill(0);
    for (var __s40local1 = 0; __s40local1 < this._allowedAreaTypes.length; __s40local1++) {
      this._allowedAreaTypes[__s40local1] = __s40param0.areaTypes[__s40local1];
    }
    this._mapIDs = Array(__s40param0.mapIDs.length).fill(0);
    for (var __s40local2 = 0; __s40local2 < this._mapIDs.length; __s40local2++) {
      this._mapIDs[__s40local2] = __s40param0.mapIDs[__s40local2];
    }
  };
  Object.defineProperty(ASpecialEventVO.prototype, "requiresAdditionalEventLib", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  ASpecialEventVO.prototype.loadAdditionalEventLib = function () {
    if (this.requiresAdditionalEventLib) {
      this._additionalLibLoaded = false;
      var __s50local0 = __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.loadVersionedItemAsset(this.getEventLibName());
      if (__s50local0._isLoaded) {
        this.onAdditionalLibLoaded(null);
      } else {
        __s50local0.addEventListener(__s0local0.COMPLETE, this.bindFunction(this.onAdditionalLibLoaded));
      }
      __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.assetLoader.start(__dep_exact_9e901e8e2483a22f_2.GoodgameBitmapEngine.numConnections);
    }
  };
  ASpecialEventVO.prototype.getEventLibName = function () {
    return "Event" + this._eventId + "Lib";
  };
  ASpecialEventVO.prototype.onAdditionalLibLoaded = function (__s57param0) {
    this._additionalLibLoaded = true;
    __dep_export_CastleModel.CastleModel.specialEventData.updateEvents();
    __dep_export_CastleModel.CastleModel.specialEventData.dispatchEvent(new __dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this));
  };
  ASpecialEventVO.prototype.openDialog = function (__s59param0 = true) {};
  ASpecialEventVO.prototype.executeOpenDialog = function (__s61param0, __s61param1, __s61param2 = null) {
    if (!__dep_export_CastleModel.CastleModel.privateOfferData.isHiddenEvent(this._eventId)) {
      if (__s61param0) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__s61param1, __s61param2);
      } else {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__s61param1, __s61param2, true, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_LOW);
      }
    }
  };
  ASpecialEventVO.prototype.refreshWorldMap = function () {
    if (__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP) {
      var __s66local0 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.renderer.camera.getAreaViewportRectangle();
      __dep_export_CastleModel.CastleModel.worldmapData.updateAreaRange(__s66local0.x, __s66local0.y, __s66local0.x + __s66local0.width, __s66local0.y + __s66local0.height);
    }
  };
  Object.defineProperty(ASpecialEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "hasUserSolvedEvent", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "isVisible", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  ASpecialEventVO.prototype.isBuildingVisibleInArea = function (__s77param0, __s77param1, __s77param2, __s77param3 = 0) {
    return this.isVisible && this.isActive && this.eventBuildingWOD > 0 && __s77param0 >= this.minLevel && this.kingdomIDs.indexOf(__s77param2) != -1 && this.allowedAreaTypes.indexOf(__s77param1) != -1 && (__s77param3 <= 0 || this._mapIDs.length == 0 || this._mapIDs.indexOf(__s77param3) != -1);
  };
  Object.defineProperty(ASpecialEventVO.prototype, "eventId", {
    get: function () {
      return this._eventId;
    },
    set: function (__s81param0) {
      this._eventId = __s81param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "endTimestamp", {
    get: function () {
      return this._endTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "eventType", {
    get: function () {
      return this._eventType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "kingdomIDs", {
    get: function () {
      return this._kingdomIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "minLevel", {
    get: function () {
      if (__dep_export_SpecialServerHelper.SpecialServerHelper.isCrossplay() && this._crossplayMinLevel > -1) {
        return this._crossplayMinLevel;
      } else {
        return this._minLevel;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "allowedAreaTypes", {
    get: function () {
      return this._allowedAreaTypes;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "isAdditionalLibLoaded", {
    get: function () {
      return this._additionalLibLoaded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "maxLevel", {
    get: function () {
      return this._maxLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "openWithLogin", {
    get: function () {
      return this._openWithLogin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "remainingEventTimeInSeconds", {
    get: function () {
      return Math.max(0, (this.endTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "isActive", {
    get: function () {
      return this.endTimestamp > __dep_export_CachedTimer.CachedTimer.getCachedTimer() && (!this.requiresAdditionalEventLib || this._additionalLibLoaded);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "eventPackagesVO", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "isPrivateEvent", {
    get: function () {
      return this._isPrivateEvent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "isoSortOrder", {
    get: function () {
      return this._isoSortOrder;
    },
    enumerable: true,
    configurable: true
  });
  ASpecialEventVO.prototype.canBeAddedToActiveEvents = function () {
    return true;
  };
  ASpecialEventVO.prototype.isOwnWmoVO = function (__s115param0) {
    return false;
  };
  Object.defineProperty(ASpecialEventVO.prototype, "eventOverviewConfig", {
    get: function () {
      return this._eventOverviewConfig;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpecialEventVO.prototype, "addToOverview", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  ASpecialEventVO.prototype.hasRewards = function () {
    return false;
  };
  ASpecialEventVO.prototype.getRewards = function (__s123param0) {
    return null;
  };
  ASpecialEventVO.prototype.getRank = function (__s125param0) {
    return 0;
  };
  ASpecialEventVO.prototype.getScore = function (__s127param0) {
    return 0;
  };
  ASpecialEventVO.prototype.getEventSpecificTextID = function (__s129param0) {
    return __s129param0;
  };
  Object.defineProperty(ASpecialEventVO.prototype, "seasonLeague", {
    get: function () {
      return this._seasonLeague;
    },
    enumerable: true,
    configurable: true
  });
  return ASpecialEventVO;
}();
exports.ASpecialEventVO = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_EventOverviewEventConfig = require("gge-module:export_EventOverviewEventConfig");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IEventOverviewable");
