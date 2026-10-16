Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function EventOverviewEventConfig() {
    this._eventOverviewDetails = __dep_export_EventOverviewDetailEnum.EventOverviewDetailEnum.DETAILS_NONE;
    this._showRemainingEventDuration = true;
    this._eventCurrency = __dep_export_CollectableEnum.CollectableEnum.UNKNOWN;
    this._hasAllianceMode = false;
  }
  Object.defineProperty(EventOverviewEventConfig.prototype, "eventOverviewDetails", {
    get: function () {
      return this._eventOverviewDetails;
    },
    set: function (__s7param0) {
      this._eventOverviewDetails = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventOverviewEventConfig.prototype, "showRemainingEventDuration", {
    get: function () {
      return this._showRemainingEventDuration;
    },
    set: function (__s11param0) {
      this._showRemainingEventDuration = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventOverviewEventConfig.prototype, "hasAllianceMode", {
    get: function () {
      return this._hasAllianceMode;
    },
    set: function (__s15param0) {
      this._hasAllianceMode = __s15param0;
    },
    enumerable: true,
    configurable: true
  });
  return EventOverviewEventConfig;
}();
exports.EventOverviewEventConfig = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_EventOverviewDetailEnum = require("gge-module:export_EventOverviewDetailEnum");
