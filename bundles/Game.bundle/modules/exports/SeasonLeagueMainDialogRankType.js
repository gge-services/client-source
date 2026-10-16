Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function SeasonLeagueMainDialogRankType(__s3param0) {
    var __s3local0 = this;
    __s3local0._currentIndex = 0;
    __s3local0._onTypeChanged = new __dep_exact_5c7bc328fca9e4de.Signal();
    CONSTRUCTOR_HACK;
    __s3local0 = __s1param0.call(this, __s3param0) || this;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3param0.btn_left, __s3param0.btn_right], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueMainDialogRankType, __s1param0);
  SeasonLeagueMainDialogRankType.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this.setType(SeasonLeagueMainDialogRankType.TYPE_PLAYER);
    this.update();
  };
  SeasonLeagueMainDialogRankType.prototype.scroll = function (__s7param0) {
    var __s7local0 = this._currentIndex + (__s7param0 > 0 ? 1 : -1);
    if (__s7local0 >= SeasonLeagueMainDialogRankType.TYPES.length) {
      this._currentIndex = 0;
    } else {
      this._currentIndex = __s7local0 < 0 ? __dep_exact_f855840627e6e145.int(SeasonLeagueMainDialogRankType.TYPES.length - 1) : __s7local0;
    }
    this.update();
    this.onTypeChanged.dispatch();
  };
  SeasonLeagueMainDialogRankType.prototype.update = function () {
    var __s11local0 = __dep_export_CastleModel.CastleModel.seasonLeagueData.isAllianceRankingEnabled();
    this.disp.btn_left.visible = __s11local0;
    this.disp.btn_right.visible = __s11local0;
    this.checkForValidState();
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_divisionRanking_" + this.getCurrentType() + "Ranking_text"))).autoFitToBounds = true;
  };
  SeasonLeagueMainDialogRankType.prototype.checkForValidState = function () {
    if (this.getCurrentType() == SeasonLeagueMainDialogRankType.TYPE_ALLIANCE && !__dep_export_CastleModel.CastleModel.seasonLeagueData.isAllianceRankingEnabled()) {
      this.setType(SeasonLeagueMainDialogRankType.TYPE_PLAYER);
      this.onTypeChanged.dispatch();
    }
  };
  SeasonLeagueMainDialogRankType.prototype.setType = function (__s16param0) {
    this._currentIndex = __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f.MathBase.clamp(SeasonLeagueMainDialogRankType.TYPES.indexOf(__s16param0), 0, SeasonLeagueMainDialogRankType.TYPES.length - 1));
  };
  SeasonLeagueMainDialogRankType.prototype.getCurrentType = function () {
    return SeasonLeagueMainDialogRankType.TYPES[this.currentIndex];
  };
  SeasonLeagueMainDialogRankType.prototype.onClick = function (__s20param0) {
    __s1param0.prototype.onClick.call(this, __s20param0);
    switch (__s20param0.target) {
      case this.disp.btn_left:
        this.scroll(-1);
        break;
      case this.disp.btn_right:
        this.scroll(1);
    }
  };
  Object.defineProperty(SeasonLeagueMainDialogRankType.prototype, "currentIndex", {
    get: function () {
      return this._currentIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueMainDialogRankType.prototype, "onTypeChanged", {
    get: function () {
      return this._onTypeChanged;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueMainDialogRankType.TYPE_PLAYER = "player";
  SeasonLeagueMainDialogRankType.TYPE_ALLIANCE = "alliance";
  SeasonLeagueMainDialogRankType.TYPES = [SeasonLeagueMainDialogRankType.TYPE_PLAYER, SeasonLeagueMainDialogRankType.TYPE_ALLIANCE];
  return SeasonLeagueMainDialogRankType;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.SeasonLeagueMainDialogRankType = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
