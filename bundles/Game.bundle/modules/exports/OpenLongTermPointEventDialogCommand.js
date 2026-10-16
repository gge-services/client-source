Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_LongTermPointEventClientConst = require("gge-module:export_LongTermPointEventClientConst");
var __dep_export_LongTermPointEventProperties = require("gge-module:export_LongTermPointEventProperties");
var __dep_export_C2SPointEventGetPointsVO = require("gge-module:export_C2SPointEventGetPointsVO");
var __s0local0 = function (__s1param0) {
  function OpenLongTermPointEventDialogCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OpenLongTermPointEventDialogCommand, __s1param0);
  OpenLongTermPointEventDialogCommand.prototype.openDialog = function () {
    new __dep_export_UpdateDynamicTopXDataService.UpdateDynamicTopXDataService().updateDynamicTopXForVO(this._eventVO);
    this._dialogProperties.updateEventVO(this._eventVO);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_LongTermPointEventDialog.LongTermPointEventDialog, this._dialogProperties);
  };
  OpenLongTermPointEventDialogCommand.prototype.addAssets = function (__s7param0) {
    this._eventVO = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SPointEventGetPointsVO.C2SPointEventGetPointsVO(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT));
    this._dialogProperties = new __dep_export_LongTermPointEventProperties.LongTermPointEventProperties(this._eventVO);
    this.loadSeasonAssets(this._dialogProperties);
    this.loadPointEventAssets(this._dialogProperties, __dep_export_LongTermPointEventDialog.LongTermPointEventDialog.TAB_ICONS_IDS);
  };
  OpenLongTermPointEventDialogCommand.prototype.loadPointEventAssets = function (__s9param0, __s9param1) {
    for (var __s9local0 = __dep_exact_f855840627e6e145.int(__s9param1.length), __s9local1 = 0, __s9local2 = __s9param0.eventVO.skin, __s9local3 = 0; __s9local3 < __s9local0; __s9local3++) {
      var __s9local4;
      var __s9local5;
      var __s9local6 = "";
      if (__s9local3 == __dep_export_LongTermPointEventClientConst.LongTermPointEventClientConst.GENERAL_TAB_ID) {
        __s9local5 = __s9local2.assetName;
        __s9local4 = __dep_export_LongTermPointEventClientConst.LongTermPointEventClientConst.eventNamePrefix + __s9local2.textSuffix;
        __s9local6 = __dep_export_LongTermPointEventClientConst.LongTermPointEventClientConst.eventDescriptionPrefix + __s9local2.textSuffix;
      } else {
        __s9local1 = __dep_exact_f855840627e6e145.int(__s9param1[__s9local3]);
        __s9local5 = __dep_export_LongTermPointEventClientConst.LongTermPointEventClientConst.pointEventAssetNames.get(__s9local1);
        __s9local4 = __dep_export_LongTermPointEventClientConst.LongTermPointEventClientConst.tabToolTipPrefix + __s9local5.toLowerCase();
      }
      var __s9local7 = __dep_export_LongTermPointEventClientConst.LongTermPointEventClientConst.eventAssetFilePrefix + __s9local5;
      var __s9local8 = __dep_export_LongTermPointEventClientConst.LongTermPointEventClientConst.tabPrefix + __s9local5.toLowerCase();
      var __s9local9 = __dep_export_LongTermPointEventClientConst.LongTermPointEventClientConst.iconPrefix + __s9local5.toLowerCase();
      var __s9local10 = __dep_export_LongTermPointEventClientConst.LongTermPointEventClientConst.teaserPrefix + __s9local5;
      __s9param0.addEventAsset(__s9local1, __s9local5, __s9local9, __s9local8, __s9local10, __s9local4, __s9local6);
      this.loadAsset(__s9local10, __s9local10);
      this.loadAsset(__s9local8, __s9local7);
    }
  };
  OpenLongTermPointEventDialogCommand.prototype.loadSeasonAssets = function (__s15param0) {
    var __s15local0 = __dep_export_LongTermPointEventClientConst.LongTermPointEventClientConst.SEASON_PREFIX + __s15param0.eventVO.skin.assetName + __dep_export_LongTermPointEventClientConst.LongTermPointEventClientConst.SEASON_SUFFIX;
    var __s15local1 = __s15local0;
    __s15param0.seasonAssetName = __s15local1;
    __s15param0.seasonClassName = __s15local0;
    this.loadAsset(__s15local0, __s15local1);
  };
  return OpenLongTermPointEventDialogCommand;
}(require("gge-module:export_OpenDialogWithAdditionalExternalAssetsCommand").OpenDialogWithAdditionalExternalAssetsCommand);
exports.OpenLongTermPointEventDialogCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_LongTermPointEventDialog = require("gge-module:export_LongTermPointEventDialog");
var __dep_export_UpdateDynamicTopXDataService = require("gge-module:export_UpdateDynamicTopXDataService");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
