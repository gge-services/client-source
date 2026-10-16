Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_LongTermPointEventClientConst = require("gge-module:export_LongTermPointEventClientConst");
var __dep_export_LongTermPointEventEventInfoVO = require("gge-module:export_LongTermPointEventEventInfoVO");
var __s0local0 = function (__s1param0) {
  function LongTermPointEventProperties(__s3param0) {
    var __s3local0 = this;
    __s3local0._currentEventID = 0;
    __s3local0._selectedEvent = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._eventAssets = new Map();
    __s3local0._eventVO = __s3param0;
    __s3local0.updateEventIDs();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LongTermPointEventProperties, __s1param0);
  LongTermPointEventProperties.prototype.addEventAsset = function (__s5param0, __s5param1, __s5param2, __s5param3, __s5param4, __s5param5, __s5param6) {
    if (this._eventAssets.get(__s5param0)) {
      __dep_exact_9e901e8e2483a22f_1.debug("LongTermPeProperties: tried adding an event twice: " + __s5param0);
    } else {
      this._eventAssets.set(__s5param0, new __dep_export_LongTermPointEventEventInfoVO.LongTermPointEventEventInfoVO(__s5param0, __s5param1, __s5param2, __s5param3, __s5param4, __s5param5, __s5param6));
    }
  };
  LongTermPointEventProperties.prototype.isActiveEvent = function (__s9param0 = -1) {
    return (__s9param0 = __s9param0 != -1 ? __s9param0 : this._selectedEvent) != __dep_export_LongTermPointEventClientConst.LongTermPointEventClientConst.GENERAL_TAB_ID && __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__s9param0) != null;
  };
  LongTermPointEventProperties.prototype.hasNextAssetVO = function () {
    return this._currentEventID < this._eventIDs.length;
  };
  LongTermPointEventProperties.prototype.resetNextEvent = function () {
    this._currentEventID = 0;
  };
  LongTermPointEventProperties.prototype.getNextAssetVO = function () {
    var __s15local0 = __dep_exact_f855840627e6e145.int(this._eventIDs[this._currentEventID]);
    this._currentEventID++;
    return this.getEventAssetByEventID(__s15local0);
  };
  LongTermPointEventProperties.prototype.getEventAssetAtPosition = function (__s17param0) {
    return this.getEventAssetByEventID(this._eventIDs[__s17param0]);
  };
  LongTermPointEventProperties.prototype.getEventAssetByEventID = function (__s19param0) {
    return this._eventAssets.get(__s19param0);
  };
  Object.defineProperty(LongTermPointEventProperties.prototype, "eventVO", {
    get: function () {
      return this._eventVO;
    },
    enumerable: true,
    configurable: true
  });
  LongTermPointEventProperties.prototype.updateEventVO = function (__s23param0) {
    this._eventVO = __s23param0;
  };
  Object.defineProperty(LongTermPointEventProperties.prototype, "selectedEvent", {
    get: function () {
      return this._selectedEvent;
    },
    set: function (__s27param0) {
      this._selectedEvent = __s27param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventProperties.prototype, "remainingSecondsForSelectedEvent", {
    get: function () {
      var __s29local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this._selectedEvent);
      if (__s29local0) {
        return __s29local0.remainingEventTimeInSeconds;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventProperties.prototype, "eventIDs", {
    get: function () {
      return this._eventIDs;
    },
    enumerable: true,
    configurable: true
  });
  LongTermPointEventProperties.prototype.updateEventIDs = function () {
    this._eventIDs = [__dep_export_LongTermPointEventClientConst.LongTermPointEventClientConst.GENERAL_TAB_ID];
    var __s35local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventsByIds(__dep_export_LongTermPointEventClientConst.LongTermPointEventClientConst.pointEventIDs);
    if (__s35local0 != null) {
      for (var __s35local1 = 0, __s35local2 = __s35local0; __s35local1 < __s35local2.length; __s35local1++) {
        var __s35local3 = __s35local2[__s35local1];
        if (__s35local3 !== undefined) {
          this._eventIDs.push(__s35local3.eventId);
        }
      }
    }
    if (this._eventVO) {
      for (var __s35local4 = 0, __s35local5 = this._eventVO.upcomingEvents; __s35local4 < __s35local5.length; __s35local4++) {
        var __s35local6 = __s35local5[__s35local4];
        if (__s35local6 !== undefined && this._eventIDs.indexOf(__s35local6) == -1) {
          this._eventIDs.push(__s35local6);
        }
      }
    }
  };
  return LongTermPointEventProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.LongTermPointEventProperties = __s0local0;
