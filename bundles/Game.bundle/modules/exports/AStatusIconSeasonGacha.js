Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleXPChangedEvent = require("gge-module:export_CastleXPChangedEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_SeasonGachaEventMainDialog = require("gge-module:export_SeasonGachaEventMainDialog");
var __dep_export_SeasonGachaEventMainDialogProperties = require("gge-module:export_SeasonGachaEventMainDialogProperties");
var __s0local0 = function (__s1param0) {
  function AStatusIconSeasonGacha(__s3param0) {
    return __s1param0.call(this, __s3param0, new __dep_exact_92d05af59ee2ff30.TextVO("")) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AStatusIconSeasonGacha, __s1param0);
  AStatusIconSeasonGacha.prototype.addEventListenerForVisibility = function () {
    this.controller.addEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onRefreshItem));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshItem));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRefreshItem));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onRefreshItem));
  };
  AStatusIconSeasonGacha.prototype.initLoaded = function (__s7param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
  };
  AStatusIconSeasonGacha.prototype.removeEventListenerForVisibility = function () {
    this.controller.removeEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onRefreshItem));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshItem));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRefreshItem));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onRefreshItem));
  };
  AStatusIconSeasonGacha.prototype.onRefreshItem = function (__s11param0 = null) {
    this.update();
  };
  AStatusIconSeasonGacha.prototype.updateLoaded = function () {
    this.setVisibilityLoaded();
  };
  AStatusIconSeasonGacha.prototype.setVisibilityLoaded = function () {
    if (this.eventVO && this.eventVO.minLevel <= __dep_export_CastleModel.CastleModel.userData.level) {
      this.show();
    } else {
      this.hide();
    }
  };
  AStatusIconSeasonGacha.prototype.onClick = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_SeasonGachaEventMainDialog.SeasonGachaEventMainDialog, new __dep_export_SeasonGachaEventMainDialogProperties.SeasonGachaEventMainDialogProperties(this.eventVO));
  };
  Object.defineProperty(AStatusIconSeasonGacha.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this.eventID);
    },
    enumerable: true,
    configurable: true
  });
  AStatusIconSeasonGacha.prototype.showLoaded = function (__s23param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s23param0);
    if (this.eventVO) {
      this.setTooltip("event_title_" + this.eventVO.eventId);
    }
  };
  AStatusIconSeasonGacha.prototype.addEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
  };
  AStatusIconSeasonGacha.prototype.removeEventListenerForShowTime = function () {
    __s1param0.prototype.removeEventListenerForShowTime.call(this);
  };
  Object.defineProperty(AStatusIconSeasonGacha.prototype, "eventID", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  return AStatusIconSeasonGacha;
}(require("gge-module:export_AEventHubItemStatusIcon").AEventHubItemStatusIcon);
exports.AStatusIconSeasonGacha = __s0local0;
