Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ACastleStatusIcon = require("gge-module:export_ACastleStatusIcon");
var __dep_export_AEventHubItemStatusIcon = require("gge-module:export_AEventHubItemStatusIcon");
var __dep_export_AOfferHubBaseStatusIcon = require("gge-module:export_AOfferHubBaseStatusIcon");
var __s0local0 = function (__s1param0) {
  function StatusIconCollectorEvent() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, "Btn_CollectorEvent", null, __dep_export_AEventHubItemStatusIcon.AEventHubItemStatusIcon.PRIORITY_EVENT_COLLECTOR) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconCollectorEvent, __s1param0);
  StatusIconCollectorEvent.prototype.addEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateStatusIcon));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconCollectorEvent.prototype.removeEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateStatusIcon));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconCollectorEvent.prototype.onClick = function () {
    if (this.collectorEvent) {
      this.collectorEvent.openDialog();
    } else if (this.collectorShopEvent) {
      this.collectorShopEvent.openDialog();
    }
  };
  StatusIconCollectorEvent.prototype.updateStatusIcon = function (__s13param0) {
    this.setVisibilityLoaded();
  };
  StatusIconCollectorEvent.prototype.setVisibilityLoaded = function () {
    if (this.icon.visible != this.isVisible) {
      if (this.isVisible) {
        this.customizeInnerIconClip(this._innerIconClip);
        this.setTooltip("panel_action_collector_overview_header_" + (this.collectorEvent ? this.collectorEvent : this.collectorShopEvent).collectInfoVO.collectorEventSkinName);
        this.show();
      } else {
        this.hide();
      }
      if (this._changedVisibilityCallback != null) {
        this._changedVisibilityCallback();
      }
    }
  };
  Object.defineProperty(StatusIconCollectorEvent.prototype, "isVisible", {
    get: function () {
      return !!this.collectorEvent || !!this.collectorShopEvent && this.collectorShopEvent.kingdomIDs.indexOf(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID) != -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconCollectorEvent.prototype, "collectorEvent", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_COLLECTOR);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconCollectorEvent.prototype, "collectorShopEvent", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_COLLECTOR_SHOP);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconCollectorEvent.prototype, "eventEndTimestamp", {
    get: function () {
      var __s27local0 = this.collectorEvent ? this.collectorEvent.endTimestamp : 0;
      var __s27local1 = this.collectorShopEvent ? this.collectorShopEvent.endTimestamp : 0;
      return Math.max(__s27local0, __s27local1);
    },
    enumerable: true,
    configurable: true
  });
  StatusIconCollectorEvent.prototype.customizeInnerIconClip = function (__s29param0) {
    if (__s29param0 && __s29param0.isLoaded && (this.collectorEvent || this.collectorShopEvent)) {
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s29param0.currentshownDisplayObject);
      var __s29local0 = __dep_export_ACastleStatusIcon.ACastleStatusIcon.getAsExternalClip("CollectorIcon_" + (this.collectorEvent ? this.collectorEvent : this.collectorShopEvent).collectInfoVO.collectorEventSkinName);
      __s29param0.currentshownDisplayObject.addChild(__s29local0);
      __s29local0.doWhenLoaded(function (__s32param0) {
        __dep_exact_9e901e8e2483a22f.MovieClipHelper.scaleDownToFit(__s32param0.currentshownDisplayObject, __dep_export_AOfferHubBaseStatusIcon.AOfferHubBaseStatusIcon.INNER_ICON_SIZE, __dep_export_AOfferHubBaseStatusIcon.AOfferHubBaseStatusIcon.INNER_ICON_SIZE);
      });
    }
  };
  return StatusIconCollectorEvent;
}(__dep_export_AEventHubItemStatusIcon.AEventHubItemStatusIcon);
exports.StatusIconCollectorEvent = __s0local0;
