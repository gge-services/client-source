Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleSeasonBaseRepairDialogProperties = require("gge-module:export_CastleSeasonBaseRepairDialogProperties");
var __dep_export_BasicSimpleWorldMapItem = require("gge-module:export_BasicSimpleWorldMapItem");
var __s0local0 = function (__s1param0) {
  function ObstacleSeasonMapScreenItem(__s3param0, __s3param1) {
    return __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ObstacleSeasonMapScreenItem, __s1param0);
  ObstacleSeasonMapScreenItem.prototype.setItem = function () {
    if (this._tMapNodeVO.isDefeated) {
      this._disp.gotoAndStop(2);
    } else if (this._tMapNodeVO.isUnockedByPortLevel) {
      this._disp.gotoAndStop(1);
    } else {
      this._disp.gotoAndStop(3);
    }
  };
  ObstacleSeasonMapScreenItem.prototype.setToolTip = function () {
    this._line1Content = {
      t: "",
      p: []
    };
    this._line2Content = {
      t: "",
      p: []
    };
    this._line1Content.t = "dialog_seasonEvent_73_Bridge";
    this._line2Content.t = this.getBridgeTextID();
  };
  ObstacleSeasonMapScreenItem.prototype.getBridgeTextID = function () {
    if (this._tMapNodeVO.isUnlocked && !this._tMapNodeVO.isDefeated) {
      return "dialog_lowLevelUnderworld_location_repairBridge";
    } else {
      return "";
    }
  };
  ObstacleSeasonMapScreenItem.prototype.onClickMapItem = function (__s16param0) {
    __s1param0.prototype.onClickMapItem.call(this, null);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleSeasonRepairBridgeDialog.CastleSeasonRepairBridgeDialog, new __dep_export_CastleSeasonBaseRepairDialogProperties.CastleSeasonBaseRepairDialogProperties(this._tMapNodeVO, "dialog_repairBridge"));
  };
  Object.defineProperty(ObstacleSeasonMapScreenItem.prototype, "line1Content", {
    get: function () {
      return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this._line1Content.t);
    },
    set: function (__s20param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicSimpleWorldMapItem.BasicSimpleWorldMapItem.prototype, "line1Content").set.call(this, __s20param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ObstacleSeasonMapScreenItem.prototype, "line2Content", {
    get: function () {
      return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this._line2Content.t);
    },
    set: function (__s24param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicSimpleWorldMapItem.BasicSimpleWorldMapItem.prototype, "line2Content").set.call(this, __s24param0);
    },
    enumerable: true,
    configurable: true
  });
  return ObstacleSeasonMapScreenItem;
}(__dep_export_BasicSimpleWorldMapItem.BasicSimpleWorldMapItem);
exports.ObstacleSeasonMapScreenItem = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleSeasonRepairBridgeDialog = require("gge-module:export_CastleSeasonRepairBridgeDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ITreasureMapItem", "IIngameUICapable", "IWorldmapTooltipData");
