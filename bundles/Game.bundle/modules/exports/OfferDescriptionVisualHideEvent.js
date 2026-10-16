Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function OfferDescriptionVisualHideEvent() {
    this._eventIDs = [];
  }
  Object.defineProperty(OfferDescriptionVisualHideEvent.prototype, "name", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_HIDE_EVENT;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualHideEvent.prototype.registerVisualParameter = function (__s7param0) {
    __s7param0.addEntry(this.name, this);
  };
  OfferDescriptionVisualHideEvent.prototype.parseFromObjectParam = function (__s9param0) {
    if (__s9param0.EIDS) {
      for (var __s9local0 = __s9param0.EIDS, __s9local1 = 0; __s9local1 < __s9local0.length; ++__s9local1) {
        this._eventIDs.push(__s9local0[__s9local1]);
      }
    } else {
      this._eventIDs = [];
    }
  };
  OfferDescriptionVisualHideEvent.prototype.execute = function (__s15param0) {
    if (this._eventIDs.length > 0 && __dep_export_Iso.Iso.data) {
      __dep_export_Iso.Iso.controller.dataUpdater.updateEventBuildings();
    }
    var __s15local0 = __dep_export_CastleModel.CastleModel.privateOfferData.getListOfHiddenEvents();
    for (var __s15local1 = 0; __s15local1 < this._eventIDs.length; __s15local1++) {
      var __s15local2 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this._eventIDs[__s15local1]);
      if (__s15local2) {
        var __s15local3 = false;
        if (__s15local0 != null) {
          for (var __s15local4 = 0, __s15local5 = __s15local0; __s15local4 < __s15local5.length; __s15local4++) {
            var __s15local6 = __s15local5[__s15local4];
            if (__s15local6 !== undefined && __s15local6 == __s15local2.eventId) {
              __s15local3 = true;
            }
          }
        }
        __dep_export_CastleModel.CastleModel.specialEventData.dispatchEvent(new __dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, __s15local2));
        if (!__s15local3) {
          if (__s15local2.openWithLogin) {
            __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_EVENT_DIALOG_COMMAND, [__s15local2, false]);
          }
          __dep_export_CastleModel.CastleModel.specialEventData.updateEvents();
        }
      }
    }
    return true;
  };
  OfferDescriptionVisualHideEvent.prototype.toExecuteInState = function (__s27param0) {
    return true;
  };
  Object.defineProperty(OfferDescriptionVisualHideEvent.prototype, "eventIDs", {
    get: function () {
      return this._eventIDs;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionVisualHideEvent;
}();
exports.OfferDescriptionVisualHideEvent = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferDescriptionVisualParameter");
