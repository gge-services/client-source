Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __s0local0 = function (__s1param0) {
  function GlobalLeaderBoardLeagueComponent(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.leagueChangeSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0._eventID = __s3param1;
    __s3local0._itxt_league = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0._disp.txt_league, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    __s3local0._itxt_league.autoFitToBounds = true;
    __s3local0._leagueTypeId = __s3local0.eventVO.leagueID;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0._disp.btn_prevLeague, __s3local0._disp.btn_nextLeague], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __s3local0.updateText();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GlobalLeaderBoardLeagueComponent, __s1param0);
  GlobalLeaderBoardLeagueComponent.prototype.onClick = function (__s5param0) {
    __s1param0.prototype.onClick.call(this, __s5param0);
    switch (__s5param0.target) {
      case this._disp.btn_prevLeague:
        this.showPrevLeague();
        break;
      case this._disp.btn_nextLeague:
        this.showNextLeague();
    }
  };
  GlobalLeaderBoardLeagueComponent.prototype.showPrevLeague = function () {
    this.changeLeague(this._leagueTypeId - 1 < 1 ? this.eventVO.numberOfLeagues : this._leagueTypeId - 1);
    this.leagueChangeSignal.dispatch();
  };
  GlobalLeaderBoardLeagueComponent.prototype.showNextLeague = function () {
    this.changeLeague(this._leagueTypeId + 1 > this.eventVO.numberOfLeagues ? 1 : this._leagueTypeId + 1);
    this.leagueChangeSignal.dispatch();
  };
  GlobalLeaderBoardLeagueComponent.prototype.updateText = function () {
    var __s12local0 = __dep_exact_f855840627e6e145.int(this.eventVO.leagueLevels(this._leagueTypeId)[0]);
    var __s12local1 = __dep_exact_f855840627e6e145.int(this.eventVO.leagueLevels(this._leagueTypeId)[1]);
    if (__s12local1 > __dep_exact_26a421b704832cff.PlayerConst.LEVEL_CAP) {
      this._itxt_league.textContentVO.textId = __s12local0 != __s12local1 ? "dialog_ranking_legendFilter" : "legendaryLevel_placeholder";
      this._itxt_league.textContentVO.textReplacements = [Math.max(__s12local0 - __dep_exact_26a421b704832cff.PlayerConst.LEVEL_CAP, 1), __s12local1 - __dep_exact_26a421b704832cff.PlayerConst.LEVEL_CAP];
    } else {
      this._itxt_league.textContentVO.textId = "levelrange_placeholder";
      this._itxt_league.textContentVO.textReplacements = [__s12local0, __s12local1];
    }
  };
  GlobalLeaderBoardLeagueComponent.prototype.changeLeague = function (__s16param0, __s16param1 = false) {
    this._leagueTypeId = __s16param0;
    this.updateText();
    if (__s16param1) {
      this.leagueChangeSignal.dispatch();
    }
  };
  GlobalLeaderBoardLeagueComponent.prototype.changeToMyLeague = function () {
    this.changeLeague(this.eventVO.leagueID, true);
  };
  Object.defineProperty(GlobalLeaderBoardLeagueComponent.prototype, "leagueTypeId", {
    get: function () {
      return this._leagueTypeId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalLeaderBoardLeagueComponent.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this._eventID);
    },
    enumerable: true,
    configurable: true
  });
  return GlobalLeaderBoardLeagueComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.GlobalLeaderBoardLeagueComponent = __s0local0;
