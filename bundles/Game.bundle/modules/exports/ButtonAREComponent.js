Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceRaidbossEventEventVO = require("gge-module:export_AllianceRaidbossEventEventVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_AllianceRaidEventDialogProperties = require("gge-module:export_AllianceRaidEventDialogProperties");
var __dep_export_AllianceRaidEventMainDialog = require("gge-module:export_AllianceRaidEventMainDialog");
var __dep_export_AllianceRaidEventStartDialog = require("gge-module:export_AllianceRaidEventStartDialog");
var __s0local0 = function (__s1param0) {
  function ButtonAREComponent(__s3param0) {
    return __s1param0.call(this, __s3param0.basicButton) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ButtonAREComponent, __s1param0);
  Object.defineProperty(ButtonAREComponent.prototype, "targetWMO", {
    set: function (__s5param0) {
      this._worldMapObjectVO = __s5param0;
    },
    enumerable: true,
    configurable: true
  });
  ButtonAREComponent.prototype.initAsRingmenuButton = function () {
    if (this._worldMapObjectVO.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ARE_PORTAL) {
      this._button.disp.visible = true;
      this._button.enableButton = true;
    } else {
      this._button.disp.visible = false;
    }
  };
  Object.defineProperty(ButtonAREComponent.prototype, "infoTextId", {
    get: function () {
      return "dialogue_are_ringmenu_enter";
    },
    enumerable: true,
    configurable: true
  });
  ButtonAREComponent.prototype.onClick = function () {
    if (this.eventVO) {
      if (__dep_export_CastleModel.CastleModel.localData.readPlayerValue(__dep_export_AllianceRaidbossEventEventVO.AllianceRaidbossEventEventVO.SEEN_EVENT_KEY) == 1) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_AllianceRaidEventMainDialog.AllianceRaidEventMainDialog, new __dep_export_AllianceRaidEventDialogProperties.AllianceRaidEventDialogProperties(__dep_export_AllianceRaidEventMainDialog.AllianceRaidEventMainDialog.TAB_OVERVIEW, this._worldMapObjectVO));
        __dep_export_CastleModel.CastleModel.localData.savePlayerValue(__dep_export_AllianceRaidbossEventEventVO.AllianceRaidbossEventEventVO.SEEN_EVENT_KEY, 1, this.eventVO.endTimestamp);
      } else {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_AllianceRaidEventStartDialog.AllianceRaidEventStartDialog);
      }
    }
  };
  Object.defineProperty(ButtonAREComponent.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_RAID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ButtonAREComponent.prototype, "targetMC", {
    get: function () {
      return this._button.disp;
    },
    enumerable: true,
    configurable: true
  });
  return ButtonAREComponent;
}(require("gge-module:export_ButtonBasicComponent").ButtonBasicComponent);
exports.ButtonAREComponent = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IWorldMapObjectRingmenuButtonComponent");
