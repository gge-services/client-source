Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstEvent = require("gge-module:export_ClientConstEvent");
var __dep_export_DebugError = require("gge-module:export_DebugError");
var __dep_export_CastleEquipmentEvent = require("gge-module:export_CastleEquipmentEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleSpecialEventFactory = require("gge-module:export_CastleSpecialEventFactory");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __s0local0 = function (__s1param0) {
  function CastleSpecialEventData(__s3param0) {
    var __s3local0 = this;
    __s3local0._xmlEventsDic = new Map();
    __s3local0._activeEvents = new Map();
    __s3local0._activeFakeEvents = new Map();
    __s3local0._privateEvents = new Map();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._configXml = __s3param0;
    __s3local0.storeXmlEvents(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSpecialEventData, __s1param0);
  CastleSpecialEventData.prototype.reset = function () {
    this._activeEvents = new Map();
    this._activeFakeEvents = new Map();
    this._privateEvents = new Map();
  };
  CastleSpecialEventData.prototype.storeXmlEvents = function (__s7param0) {
    var __s7local0 = __s7param0.events;
    this._xmlEventsDic = new Map();
    if (__s7local0 != null) {
      for (var __s7local1 = 0, __s7local2 = __s7local0; __s7local1 < __s7local2.length; __s7local1++) {
        var __s7local3 = __s7local2[__s7local1];
        if (__s7local3 !== undefined) {
          this._xmlEventsDic.set(parseInt(__s7local3.eventID || ""), __s7local3);
        }
      }
    }
  };
  CastleSpecialEventData.prototype.parse_CHE = function (__s13param0) {
    var __s13local0 = __dep_exact_81dacdf05bd32292.castAs(this.getActiveEventByAnyEventId(__dep_export_ClientConstEvent.ClientConstEvent.COLOSSUS_EVENTS), "ColossusEventVO");
    if (__s13local0) {
      var __s13local1 = __s13local0.getConversionRateForEvent();
      __s13local0.ownPoints = __s13local1 * __s13param0.OP;
      var __s13local2 = 0;
      var __s13local3 = 0;
      for (var __s13local4 = 0, __s13local5 = __s13param0.HS; __s13local4 < __s13local5.length; __s13local4++) {
        var __s13local6 = __s13local5[__s13local4];
        if (__s13local6 !== undefined) {
          __s13local0.updateRank(__s13local2++, __s13local6.CR, __s13local6.PN, __s13local6.CP * __s13local1, __s13local6.PID);
          if (__s13local3 < __s13local6.CR) {
            __s13local3 = __dep_exact_f855840627e6e145.int(__s13local6.CR);
          }
        }
      }
      __s13local0.hasHighestRank = __s13param0.LR == __s13local3;
      __s13local0.lowestRankOnServer = __dep_exact_f855840627e6e145.int(__s13param0.LR);
      this.dispatchEvent(new __dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, __s13local0));
    }
  };
  CastleSpecialEventData.prototype.parse_SDE = function (__s20param0) {
    if (__s20param0) {
      var __s20local0;
      this._activeFakeEvents = new Map();
      for (var __s20local1 = 0, __s20local2 = __s20param0.SD; __s20local1 < __s20local2.length; __s20local1++) {
        var __s20local3 = __s20local2[__s20local1];
        if (__s20local3 !== undefined) {
          __s20local0 = new __dep_export_FakeEventVO.FakeEventVO(__s20local3);
          if (this._xmlEventsDic.get(__s20local3)) {
            __s20local0.parseData(this._xmlEventsDic.get(__s20local3), this._configXml, null);
          }
          this._activeFakeEvents.set(__s20local0.eventId, __s20local0);
        }
      }
      this.updateEvents();
      __dep_export_CastleModel.CastleModel.lordData.unlockLords();
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleEquipmentEvent.CastleEquipmentEvent(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.LORDS_UPDATED));
    }
  };
  CastleSpecialEventData.prototype.parse_SEI = function (__s27param0) {
    var __s27local0 = __s27param0 ? __s27param0.E : null;
    var __s27local1 = [];
    if (__s27local0 && __s27local0.length > 0) {
      for (var __s27local2 = 0, __s27local3 = __s27local0; __s27local2 < __s27local3.length; __s27local2++) {
        var __s27local4 = __s27local3[__s27local2];
        if (__s27local4 !== undefined) {
          var __s27local5 = __dep_exact_f855840627e6e145.int(__s27local4.EID);
          if (this.parseServerEventData(__s27local5, __s27local4)) {
            __s27local1.push(this.getActiveEventByEventId(__s27local5));
          }
        }
      }
    }
    this.onEventDataParsed(__s27local1);
    this.dispatchEvent(new __dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED));
  };
  CastleSpecialEventData.prototype.createEventVOByEventID = function (__s34param0) {
    if (!this._xmlEventsDic.has(__s34param0)) {
      return null;
    }
    var __s34local0 = String(this._xmlEventsDic.get(__s34param0).eventType);
    return __dep_export_CastleSpecialEventFactory.CastleSpecialEventFactory.createByEventType(__s34local0);
  };
  CastleSpecialEventData.prototype.parseServerEventData = function (__s37param0, __s37param1) {
    try {
      if (this._activeEvents.get(__s37param0)) {
        this._activeEvents.get(__s37param0).parseData(this._xmlEventsDic.get(__s37param0), this._configXml, __s37param1);
        this._activeEvents.get(__s37param0).checkOpenDialog();
      } else {
        var __s37local0 = this.createEventVOByEventID(__s37param0);
        if (!__s37local0) {
          __dep_exact_9e901e8e2483a22f_1.debug("CastleSpecialEventData.parse_SEI(): Server told client about an unknown event (eventId = " + __s37param0 + ").");
          return false;
        }
        __s37local0.parseData(this._xmlEventsDic.get(__s37param0), this._configXml, __s37param1);
        if (__s37local0.canBeAddedToActiveEvents()) {
          this._activeEvents.set(__s37param0, __s37local0);
          __s37local0.loadAdditionalEventLib();
          this.dispatchEvent(new __dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, __s37local0));
          return true;
        }
      }
    } catch (__s44local0) {
      __dep_export_DebugError.DebugError.handle(__s44local0);
    }
    return false;
  };
  CastleSpecialEventData.prototype.onEventDataParsed = function (__s46param0) {
    for (var __s46local0 = 0; __s46local0 < __s46param0.length; ++__s46local0) {
      if (__s46param0[__s46local0].openWithLogin) {
        __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_EVENT_DIALOG_COMMAND, [__s46param0[__s46local0], false]);
      }
    }
    if (this._activeEvents != null) {
      for (var __s46local1 = 0, __s46local2 = Array.from(this._activeEvents.values()); __s46local1 < __s46local2.length; __s46local1++) {
        var __s46local3 = __s46local2[__s46local1];
        if (__s46local3 !== undefined && __s46local3) {
          this.dispatchEvent(new __dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, __s46local3));
        }
      }
    }
    this.updateEvents();
    this.dispatchEvent(new __dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED));
  };
  CastleSpecialEventData.prototype.parse_SEE = function (__s55param0) {
    if (__s55param0) {
      this.removeEventById(__s55param0.EID, this._activeEvents, __dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT);
    }
  };
  CastleSpecialEventData.prototype.parse_FN = function (__s58param0) {
    if (__s58param0) {
      var __s58local0 = __dep_exact_81dacdf05bd32292.castAs(this.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
      if (__s58local0) {
        __s58local0.loadFactionDataFromParamObject(__s58param0);
      }
    }
  };
  CastleSpecialEventData.prototype.parse_SAF = function (__s62param0) {
    this.handleArtifactPartFound(__s62param0, true);
  };
  CastleSpecialEventData.prototype.parse_SAP = function (__s64param0) {
    this.handleArtifactPartFound(__s64param0, false);
  };
  CastleSpecialEventData.prototype.executeUpdate = function (__s66param0) {
    this.executeUpdateForEvents(this._activeEvents, __dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT);
    this.executeUpdateForEvents(this._privateEvents, __dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_PRIVATEEVENT);
  };
  CastleSpecialEventData.prototype.executeUpdateForEvents = function (__s68param0, __s68param1) {
    if (__s68param0 != null) {
      for (var __s68local0 = 0, __s68local1 = Array.from(__s68param0.values()); __s68local0 < __s68local1.length; __s68local0++) {
        var __s68local2 = __s68local1[__s68local0];
        if (__s68local2 !== undefined) {
          if (__s68local2.remainingEventTimeInSeconds <= 0) {
            this.removeEventById(__s68local2.eventId, __s68param0, __s68param1);
          }
          if (__s68local2.isActive) {
            __s68local2.update();
          }
        }
      }
    }
  };
  CastleSpecialEventData.prototype.removeEventById = function (__s76param0, __s76param1, __s76param2) {
    __dep_exact_9e901e8e2483a22f_2.info("--------------------> REMOVE EVENT: " + __s76param0);
    var __s76local0 = __s76param1.get(__s76param0);
    if (__s76local0) {
      __s76local0.onDestroy();
      __s76param1.set(__s76param0, null);
      __s76param1.delete(__s76param0);
      this.dispatchEvent(new __dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent(__s76param2, __s76local0));
      this.updateEvents();
      __dep_export_CastleModel.CastleModel.settingsData.validateEventBookmark();
    }
  };
  CastleSpecialEventData.prototype.updateEvents = function () {
    if (__dep_export_Iso.Iso && __dep_export_Iso.Iso.data && __dep_export_Iso.Iso.controller && __dep_export_Iso.Iso.controller.dataUpdater && __dep_export_Iso.Iso.controller.processor) {
      __dep_export_Iso.Iso.controller.dataUpdater.updateEventBuildings();
      __dep_export_Iso.Iso.controller.processor.executePackage(new __dep_export_IsoCommandPackageObjectsInit.IsoCommandPackageObjectsInit(__dep_export_Iso.Iso.data, __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.TREASURE_CHESTS));
    }
  };
  CastleSpecialEventData.prototype.clearActiveEvents = function () {
    this._activeEvents = new Map();
  };
  CastleSpecialEventData.prototype.handleArtifactPartFound = function (__s84param0, __s84param1 = true) {
    if (__s84param0) {
      var __s84local0 = __dep_exact_f855840627e6e145.int(__s84param0.EID);
      var __s84local1 = __dep_exact_81dacdf05bd32292.castAs(this.getActiveEventByEventId(__s84local0), "ArtifactEventVO");
      if (__s84local1) {
        __s84local1.artifactPartsFound = __dep_exact_f855840627e6e145.int(__s84param0.PF);
        this.dispatchEvent(new __dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, __s84local1));
        if (__s84param1 || __s84local1.hasAllParts) {
          __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_SPECIALEVENT_PROGRESS_COMMAND, [__s84local1]);
        }
        if (__s84local1.hasAllParts) {
          this.updateEvents();
        }
      } else {
        (__s84local1 = this.createEventVOByEventID(__s84local0)).parseData(this._xmlEventsDic.get(__s84local0), this._configXml, __s84param0);
        if (__s84local1.hasAllParts) {
          __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_SPECIALEVENT_PROGRESS_COMMAND, [__s84local1]);
        }
      }
    }
  };
  CastleSpecialEventData.prototype.getSkipCosts = function (__s92param0, __s92param1 = 0) {
    return __dep_exact_f855840627e6e145.int(this.getSkipCostsForTimeLeft(__s92param0.buildingVO.getTimeLeftForBuilding(), __s92param1));
  };
  CastleSpecialEventData.prototype.getSkipCostsForTimeLeft = function (__s94param0, __s94param1) {
    var __s94local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_exact_26a421b704832cff.ConstructionConst.getFastCompleteCostC2(__s94param0, this.getSkipCostPerMinute())));
    return this.calculateSkipCosts(__s94local0, __s94param0);
  };
  CastleSpecialEventData.prototype.calculateSkipCosts = function (__s96param0, __s96param1) {
    var __s96local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.ConstructionConst.FREE_SKIP_TIME);
    if (__dep_export_CastleModel.CastleModel.subscriptionData.isEffectTypeActive(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_FREE_SKIP_BONUS)) {
      __s96local0 += __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_FREE_SKIP_BONUS));
    }
    if (__s96param1 <= __s96local0) {
      return 0;
    } else {
      return __s96param0;
    }
  };
  CastleSpecialEventData.prototype.getSkipCostPerMinute = function () {
    var __s101local0 = __dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_ADJUST_SKIP_BUILDING);
    var __s101local1 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_ADJUST_SKIP_BUILDING);
    var __s101local2 = __dep_exact_26a421b704832cff.ConstructionConst.getInstantCostC2PerMinuteFor(__dep_export_CastleModel.CastleModel.userData.userLevel);
    if (__s101local0) {
      return __s101local1.getSkipCostLevelRange(__dep_export_CastleModel.CastleModel.userData.userLevel);
    } else {
      return __s101local2;
    }
  };
  CastleSpecialEventData.prototype.hasSkipForFree = function (__s105param0) {
    return this.getSkipCosts(__s105param0) == 0;
  };
  Object.defineProperty(CastleSpecialEventData.prototype, "activeEvents", {
    get: function () {
      return this._activeEvents;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialEventData.prototype, "activeFakeEvents", {
    get: function () {
      return this._activeFakeEvents;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialEventData.prototype, "activePrivateEvents", {
    get: function () {
      return this._privateEvents;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpecialEventData.prototype.getActiveEventByEventId = function (__s113param0) {
    return this._activeEvents.get(__s113param0);
  };
  CastleSpecialEventData.prototype.getActivePrivateEventByEventId = function (__s115param0) {
    return this._privateEvents.get(__s115param0);
  };
  CastleSpecialEventData.prototype.getActiveEventByAnyEventId = function (__s117param0) {
    if (!__s117param0) {
      return null;
    }
    var __s117local0;
    for (var __s117local1 = 0; __s117local1 < __s117param0.length; ++__s117local1) {
      if (__s117local0 = this._activeEvents.get(__s117param0[__s117local1])) {
        return __s117local0;
      }
    }
    return null;
  };
  CastleSpecialEventData.prototype.getActiveEventsByIds = function (__s123param0) {
    var __s123local0;
    var __s123local1 = [];
    if (__s123param0 != null) {
      for (var __s123local2 = 0, __s123local3 = __s123param0; __s123local2 < __s123local3.length; __s123local2++) {
        var __s123local4 = __s123local3[__s123local2];
        if (__s123local4 !== undefined && (__s123local0 = this.getActiveEventByEventId(__s123local4))) {
          __s123local1.push(__s123local0);
        }
      }
    }
    return __s123local1;
  };
  CastleSpecialEventData.prototype.getActiveEventBySoldPackage = function (__s129param0) {
    if (this._activeEvents != null) {
      for (var __s129local0 = 0, __s129local1 = Array.from(this._activeEvents.values()); __s129local0 < __s129local1.length; __s129local0++) {
        var __s129local2 = __s129local1[__s129local0];
        if (__s129local2 !== undefined && __s129local2.eventPackagesVO && __s129local2.eventPackagesVO.containsEventPackage(__s129param0)) {
          return __s129local2;
        }
      }
    }
    return null;
  };
  CastleSpecialEventData.prototype.getEventByClass = function (__s135param0) {
    var __s135local0;
    if (this._activeEvents != null) {
      for (var __s135local1 = 0, __s135local2 = Array.from(this._activeEvents.values()); __s135local1 < __s135local2.length; __s135local1++) {
        if ((__s135local0 = __s135local2[__s135local1]) !== undefined && __s135local0 instanceof __s135param0) {
          return __s135local0;
        }
      }
    }
    if (this._privateEvents != null) {
      for (var __s135local3 = 0, __s135local4 = Array.from(this._privateEvents.values()); __s135local3 < __s135local4.length; __s135local3++) {
        if ((__s135local0 = __s135local4[__s135local3]) !== undefined && __s135local0 instanceof __s135param0) {
          return __s135local0;
        }
      }
    }
    return null;
  };
  Object.defineProperty(CastleSpecialEventData.prototype, "isSeasonEventActive", {
    get: function () {
      var __s145local0 = this.activeSeasonVO;
      return !!__s145local0 && !__s145local0.finished && __s145local0.remainingEventTimeInSeconds > 0 && __s145local0.isActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialEventData.prototype, "activeSeasonVO", {
    get: function () {
      var __s147local0 = this.getEventByClass(__dep_export_ASeasonEventVO.ASeasonEventVO);
      return __s147local0 || null;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpecialEventData.prototype.isEventActive = function (__s149param0) {
    var __s149local0 = this.getActiveEventByEventId(__s149param0);
    return __s149local0 != null && __s149local0.isActive;
  };
  CastleSpecialEventData.prototype.isPrivateEventActive = function (__s151param0) {
    var __s151local0 = this.getActivePrivateEventByEventId(__s151param0);
    return __s151local0 != null && __s151local0.isActive;
  };
  CastleSpecialEventData.prototype.addPrivateEventByType = function (__s153param0) {
    var __s153local0 = [];
    for (var __s153local1 = 1; __s153local1 < arguments.length; __s153local1++) {
      __s153local0[__s153local1 - 1] = arguments[__s153local1];
    }
    if (!this._privateEvents.get(__s153param0.privateEventID)) {
      var __s153local2 = new __s153param0.privateEventClass();
      __s153local2.parseByPrivateEventData(__s153param0, __s153local0);
      this._privateEvents.set(__s153local2.eventId, __s153local2);
      this.updateEvents();
      this.dispatchEvent(new __dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_PRIVATEEVENT, __s153local2));
    }
  };
  CastleSpecialEventData.prototype.removePrivateEventByType = function (__s158param0) {
    this.removeEventById(__s158param0.privateEventID, this._privateEvents, __dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_PRIVATEEVENT);
  };
  Object.defineProperty(CastleSpecialEventData.prototype, "configXml", {
    get: function () {
      return this._configXml;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpecialEventData.prototype.parseTEI = function (__s162param0) {
    var __s162local0 = __s162param0 ? __s162param0.TE : null;
    if (__s162local0 && __s162local0.length != 0) {
      var __s162local1 = [];
      if (__s162local0 != null) {
        for (var __s162local2 = 0, __s162local3 = __s162local0; __s162local2 < __s162local3.length; __s162local2++) {
          var __s162local4 = __s162local3[__s162local2];
          if (__s162local4 !== undefined) {
            var __s162local5 = __dep_exact_f855840627e6e145.int(__s162local4.TRID);
            if (this.parseServerEventData(__s162local5, __s162local4)) {
              __s162local1.push(this.getActiveEventByEventId(__s162local5));
            }
          }
        }
      }
      this.onEventDataParsed(__s162local1);
    }
  };
  CastleSpecialEventData.prototype.parseTEE = function (__s170param0) {
    var __s170local0 = __dep_exact_f855840627e6e145.int(__s170param0 && __s170param0.TRID ? __s170param0.TRID : -1);
    if (__s170local0 >= 0) {
      this.removeEventById(__s170local0, this._activeEvents, __dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT);
    }
  };
  return CastleSpecialEventData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleSpecialEventData = __s0local0;
var __dep_export_IsoCommandPackageObjectsInit = require("gge-module:export_IsoCommandPackageObjectsInit");
var __dep_export_IsoObjectGroupEnum = require("gge-module:export_IsoObjectGroupEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_ASeasonEventVO = require("gge-module:export_ASeasonEventVO");
var __dep_export_FakeEventVO = require("gge-module:export_FakeEventVO");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IUpdatable");
