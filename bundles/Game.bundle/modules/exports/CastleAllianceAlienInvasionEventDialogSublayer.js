Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CastleScoreEventEvent = require("gge-module:export_CastleScoreEventEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleScoreBarProgressVO = require("gge-module:export_CastleScoreBarProgressVO");
var __s0local0 = function (__s1param0) {
  function CastleAllianceAlienInvasionEventDialogSublayer(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.initBasicButtons([__s3local0.subLayerDisp.btn_highscore]);
    __s3local0._isAlliance = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceAlienInvasionEventDialogSublayer, __s1param0);
  CastleAllianceAlienInvasionEventDialogSublayer.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    var __s5local0 = new __dep_export_RewardsDialogScoreBarProperties.RewardsDialogScoreBarProperties(this.rewards, this.textIDType, this.toolTipValues, this.levelLabels, this.descriptions);
    var __s5local1 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName(this.sublayerProperties.scorbarBackgroundClassName))();
    this.scoreBar = new __dep_export_RewardsDialogScoreBarComponentExternal.RewardsDialogScoreBarComponentExternal();
    this.scoreBar.load(this.subLayerDisp.mc_scoreBarContainer, this.bindFunction(this.onScorebarAssetLoaded), this.scorebarAssetClassName, this.scoreIcon, __s5local1, this.bindFunction(this.onClickRewardOverview), __s5local0);
  };
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogSublayer.prototype, "scorebarAssetClassName", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceAlienInvasionEventDialogSublayer.prototype.onScorebarAssetLoaded = function () {
    if (this.eventVO) {
      this.onUpdatePoints();
      __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
    } else {
      this.hide();
    }
  };
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogSublayer.prototype, "scoreIcon", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceAlienInvasionEventDialogSublayer.prototype.onClickRewardOverview = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  CastleAllianceAlienInvasionEventDialogSublayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this.scoreBar) {
      this.scoreBar.destroy();
    }
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogSublayer.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this.sublayerProperties.eventId);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceAlienInvasionEventDialogSublayer.prototype.onUpdatePoints = function (__s22param0 = null) {
    this.updateProgressBars();
  };
  CastleAllianceAlienInvasionEventDialogSublayer.prototype.updateProgressBars = function () {
    var __s24local0 = new __dep_export_CastleScoreBarProgressVO.CastleScoreBarProgressVO(this.sublayerLeagueTypeEventVO.ownPoints, this.sublayerLeagueTypeEventVO.ownRank, this.sublayerLeagueTypeEventVO.pointThresholds, this.sublayerLeagueTypeEventVO.topX, this.sublayerLeagueTypeEventVO.rewardsReceived, this.eventVO.isPlayerQualifiedForAllianceRewards(), this.eventVO.allianceRewardThresholdPoints());
    __s24local0.isAlliance = this._isAlliance;
    this.scoreBar.update(__s24local0);
  };
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogSublayer.prototype, "toolTipValues", {
    get: function () {
      return this.sublayerLeagueTypeEventVO.pointThresholds.concat(this.sublayerLeagueTypeEventVO.topX);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogSublayer.prototype, "levelLabels", {
    get: function () {
      var __s28local0 = [];
      var __s28local1 = 0;
      for (__s28local1 = 0; __s28local1 < this.sublayerLeagueTypeEventVO.pointThresholds.length; __s28local1++) {
        __s28local0.push(this.sublayerLeagueTypeEventVO.pointThresholds[__s28local1]);
      }
      for (__s28local1 = 0; __s28local1 < this.sublayerLeagueTypeEventVO.topX.length; __s28local1++) {
        __s28local0.push(__dep_exact_92d05af59ee2ff30.Localize.text("Ranking_TopX", [this.sublayerLeagueTypeEventVO.topX[__s28local1]]));
      }
      __s28local0.push(__dep_exact_92d05af59ee2ff30.Localize.text("Ranking_Winner"));
      return __s28local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogSublayer.prototype, "descriptions", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogSublayer.prototype, "sublayerLeagueTypeEventVO", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogSublayer.prototype, "rewards", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogSublayer.prototype, "textIDType", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogSublayer.prototype, "sublayerProperties", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceAlienInvasionEventDialogSublayer;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.CastleAllianceAlienInvasionEventDialogSublayer = __s0local0;
var __dep_export_RewardsDialogScoreBarProperties = require("gge-module:export_RewardsDialogScoreBarProperties");
var __dep_export_RewardsDialogScoreBarComponentExternal = require("gge-module:export_RewardsDialogScoreBarComponentExternal");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
