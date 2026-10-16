Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SJoinCampVO = require("gge-module:export_C2SJoinCampVO");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicSimpleWorldMapItem = require("gge-module:export_BasicSimpleWorldMapItem");
var __dep_export_FlagHelper = require("gge-module:export_FlagHelper");
var __s0local0 = function (__s1param0) {
  function StartCampSeasonMapScreenItem(__s3param0, __s3param1) {
    return __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StartCampSeasonMapScreenItem, __s1param0);
  StartCampSeasonMapScreenItem.prototype.setItem = function () {
    this._disp.gotoAndStop(1);
    this.onChangeCrest(null);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onChangeCrest));
  };
  StartCampSeasonMapScreenItem.prototype.onChangeCrest = function (__s7param0) {
    if (this._disp.flag0) {
      __dep_export_FlagHelper.FlagHelper.colorFlag(this._disp.flag0, __dep_export_CastleModel.CastleModel.userData.playerCrest);
    } else if (this._disp.mc_camp) {
      __dep_export_FlagHelper.FlagHelper.colorFlag(this._disp.mc_camp.house0.mc_flag, __dep_export_CastleModel.CastleModel.userData.playerCrest);
      __dep_export_FlagHelper.FlagHelper.colorFlag(this._disp.mc_camp.house1.mc_flag, __dep_export_CastleModel.CastleModel.userData.playerCrest);
      __dep_export_FlagHelper.FlagHelper.colorFlag(this._disp.mc_camp.house2.mc_flag, __dep_export_CastleModel.CastleModel.userData.playerCrest);
    }
  };
  StartCampSeasonMapScreenItem.prototype.setToolTip = function () {
    this._line1Content = {
      t: "",
      p: []
    };
    this._line1Content.t = "dialog_seasonEvent_2_Camp";
  };
  StartCampSeasonMapScreenItem.prototype.isMouseInteractive = function () {
    return !!this._tMapNodeVO.isStartNode || __s1param0.prototype.isMouseInteractive.call(this);
  };
  StartCampSeasonMapScreenItem.prototype.onClickMapItem = function (__s15param0) {
    __s1param0.prototype.onClickMapItem.call(this, null);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SJoinCampVO.C2SJoinCampVO(__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.mapID));
  };
  Object.defineProperty(StartCampSeasonMapScreenItem.prototype, "line1Content", {
    get: function () {
      return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this._line1Content.t);
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicSimpleWorldMapItem.BasicSimpleWorldMapItem.prototype, "line1Content").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  return StartCampSeasonMapScreenItem;
}(__dep_export_BasicSimpleWorldMapItem.BasicSimpleWorldMapItem);
exports.StartCampSeasonMapScreenItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ITreasureMapItem", "IIngameUICapable", "IWorldmapTooltipData");
