Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function FactionInvasionEventTopXScorebars(__s3param0, __s3param1) {
    this.NUM_THRESHOLD_REWARDS = 0;
    this.NUM_TOPX_REWARDS = 3;
    this._eventVO = __s3param1;
    this._scorebars = __s3param0;
  }
  FactionInvasionEventTopXScorebars.prototype.update = function () {
    var __s5local0 = this.redFactionEventVO;
    var __s5local1 = this.blueFactionEventVO;
    this.scoreBarRed.update(new __dep_export_CastleScoreBarProgressVO.CastleScoreBarProgressVO(__s5local0.ownPoints, __s5local0.ownRank, __s5local0.pointThresholds, __s5local0.topX));
    this.scoreBarBlue.update(new __dep_export_CastleScoreBarProgressVO.CastleScoreBarProgressVO(__s5local1.ownPoints, __s5local1.ownRank, __s5local1.pointThresholds, __s5local1.topX));
  };
  FactionInvasionEventTopXScorebars.prototype.tooltipValues = function (__s7param0) {
    return __s7param0.topX;
  };
  FactionInvasionEventTopXScorebars.prototype.levelLabels = function (__s9param0) {
    var __s9local0 = [];
    for (var __s9local1 = 0; __s9local1 < __s9param0.topX.length; __s9local1++) {
      __s9local0.push(__dep_exact_92d05af59ee2ff30.Localize.text("Ranking_TopX", [__s9param0.topX[__s9local1]]));
    }
    __s9local0.push(__dep_exact_92d05af59ee2ff30.Localize.text("Ranking_Winner"));
    return __s9local0;
  };
  Object.defineProperty(FactionInvasionEventTopXScorebars.prototype, "redFactionEventVO", {
    get: function () {
      return this._eventVO.singleEventVO(false);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionEventTopXScorebars.prototype, "blueFactionEventVO", {
    get: function () {
      return this._eventVO.singleEventVO(true);
    },
    enumerable: true,
    configurable: true
  });
  FactionInvasionEventTopXScorebars.prototype.show = function () {
    var __s17local0 = this.redFactionEventVO;
    var __s17local1 = this.blueFactionEventVO;
    var __s17local2 = new __dep_export_CastleFactionInvasionEventTopXScoreBarProperties.CastleFactionInvasionEventTopXScoreBarProperties(__s17local0.rewardLists, "berimondInvasion_sp_red", this.tooltipValues(__s17local0), this.levelLabels(__s17local0), null, this.NUM_THRESHOLD_REWARDS, this.NUM_TOPX_REWARDS);
    var __s17local3 = new __dep_export_CastleFactionInvasionEventTopXScoreBarProperties.CastleFactionInvasionEventTopXScoreBarProperties(__s17local1.rewardLists, "berimondInvasion_sp_blue", this.tooltipValues(__s17local1), this.levelLabels(__s17local1), null, this.NUM_THRESHOLD_REWARDS, this.NUM_TOPX_REWARDS);
    this.scoreBarRed = new __dep_export_CastleScoreBarComponent.CastleScoreBarComponent(this._scorebars.scorebar_red, __s17local2);
    this.scoreBarBlue = new __dep_export_CastleScoreBarComponent.CastleScoreBarComponent(this._scorebars.scorebar_blue, __s17local3);
  };
  FactionInvasionEventTopXScorebars.prototype.hide = function () {
    this.scoreBarRed.destroy();
    this.scoreBarBlue.destroy();
  };
  return FactionInvasionEventTopXScorebars;
}();
exports.FactionInvasionEventTopXScorebars = __s0local0;
var __dep_export_CastleFactionInvasionEventTopXScoreBarProperties = require("gge-module:export_CastleFactionInvasionEventTopXScoreBarProperties");
var __dep_export_CastleScoreBarComponent = require("gge-module:export_CastleScoreBarComponent");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleScoreBarProgressVO = require("gge-module:export_CastleScoreBarProgressVO");
