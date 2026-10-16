Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleFactionInvasionEventHighscoreFactionSublayer(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = this;
    __s3local0._isBlue = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._isBlue = __s3param3;
    __s3local0.initBasicButtons([__s3local0.subLayerDisp.mc_listContainer.btn_search, __s3local0.subLayerDisp.mc_listContainer.btn_leagueDown, __s3local0.subLayerDisp.mc_listContainer.btn_leagueUp, __s3local0.subLayerDisp.mc_listContainer.btn_top, __s3local0.subLayerDisp.mc_listContainer.btn_up, __s3local0.subLayerDisp.mc_listContainer.btn_down]);
    __s3local0.ownPointsGGSTF = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_nobilityPoints, new __dep_exact_92d05af59ee2ff30_1.NumberVO(0));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_header, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s3param1));
    __s3local0._rankingList = new __dep_export_CastleSingleplayerRankingComponent.CastleSingleplayerRankingComponent(__s3local0.subLayerDisp.mc_listContainer, __dep_export_CastleSingleplayerRankingItem.CastleSingleplayerRankingItem, __s3param2, __s3local0.eventVO);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionInvasionEventHighscoreFactionSublayer, __s1param0);
  CastleFactionInvasionEventHighscoreFactionSublayer.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this._rankingList.show(__s5param0);
    this.updatePoints();
  };
  CastleFactionInvasionEventHighscoreFactionSublayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._rankingList.hide();
  };
  CastleFactionInvasionEventHighscoreFactionSublayer.prototype.updatePoints = function () {
    this.ownPointsGGSTF.textContentVO.numberValue = this.eventVO.ownPoints;
  };
  Object.defineProperty(CastleFactionInvasionEventHighscoreFactionSublayer.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION_INVASION).singleEventVO(this._isBlue);
    },
    enumerable: true,
    configurable: true
  });
  return CastleFactionInvasionEventHighscoreFactionSublayer;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.CastleFactionInvasionEventHighscoreFactionSublayer = __s0local0;
var __dep_export_CastleSingleplayerRankingComponent = require("gge-module:export_CastleSingleplayerRankingComponent");
var __dep_export_CastleSingleplayerRankingItem = require("gge-module:export_CastleSingleplayerRankingItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
