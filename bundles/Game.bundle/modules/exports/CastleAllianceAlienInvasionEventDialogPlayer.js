Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleGenericHighscoreDialogProperties = require("gge-module:export_CastleGenericHighscoreDialogProperties");
var __dep_export_GenericEventInfoListProperties = require("gge-module:export_GenericEventInfoListProperties");
var __dep_export_CastleAllianceAlienInvasionEventDialogSublayer = require("gge-module:export_CastleAllianceAlienInvasionEventDialogSublayer");
var __s0local0 = function (__s1param0) {
  function CastleAllianceAlienInvasionEventDialogPlayer(__s3param0) {
    return __s1param0.call(this, __s3param0, false) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceAlienInvasionEventDialogPlayer, __s1param0);
  CastleAllianceAlienInvasionEventDialogPlayer.prototype.showHelp = function () {
    __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_" + this.sublayerProperties.textIDType + "Alliance_instructions"));
  };
  CastleAllianceAlienInvasionEventDialogPlayer.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    if (!this._seasonLeague || this._seasonLeague.eventId != this.eventVO.eventId) {
      if (this._seasonLeague) {
        this._seasonLeague.destroy();
      }
      this._seasonLeague = new __dep_export_SeasonLeagueEventElementComponent.SeasonLeagueEventElementComponent(this.subLayerDisp.mc_seasonLeague, this.eventVO.eventId);
    }
    this._seasonLeague.onShow();
    this.subLayerDisp.btn_highscore.toolTipText = "dialog_" + this.sublayerProperties.textIDType + "_singleScore_tooltip";
    this.subLayerDisp.mc_seasonLeague.visible = false;
  };
  CastleAllianceAlienInvasionEventDialogPlayer.prototype.hide = function () {
    this._seasonLeague.onHide();
    __s1param0.prototype.hide.call(this);
  };
  CastleAllianceAlienInvasionEventDialogPlayer.prototype.onClick = function (__s13param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s13param0.target)) {
      switch (__s13param0.target) {
        case this.subLayerDisp.btn_highscore:
          __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(__dep_export_CastleAlienInvasionHighscoreDialog.CastleAlienInvasionHighscoreDialog, new __dep_export_CastleGenericHighscoreDialogProperties.CastleGenericHighscoreDialogProperties(this.sublayerProperties.highscorePlayer, this.sublayerLeagueTypeEventVO.numberOfLeagues, this.sublayerLeagueTypeEventVO.leagueID, this.sublayerLeagueTypeEventVO.ownRank, -1, this.sublayerProperties.eventId));
      }
    }
  };
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogPlayer.prototype, "sublayerLeagueTypeEventVO", {
    get: function () {
      return this.eventVO.singleEventVO;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAllianceAlienInvasionEventDialogSublayer.CastleAllianceAlienInvasionEventDialogSublayer.prototype, "sublayerLeagueTypeEventVO").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogPlayer.prototype, "rewards", {
    get: function () {
      return this.eventVO.singleEventVO.rewardLists;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogPlayer.prototype, "textIDType", {
    get: function () {
      return this.sublayerProperties.textIDType;
    },
    set: function (__s25param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAllianceAlienInvasionEventDialogSublayer.CastleAllianceAlienInvasionEventDialogSublayer.prototype, "textIDType").set.call(this, __s25param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogPlayer.prototype, "scorebarAssetClassName", {
    get: function () {
      return "Scorebar_Player";
    },
    set: function (__s29param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAllianceAlienInvasionEventDialogSublayer.CastleAllianceAlienInvasionEventDialogSublayer.prototype, "scorebarAssetClassName").set.call(this, __s29param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogPlayer.prototype, "scoreIcon", {
    get: function () {
      var __s31local0 = new Library.CastleInterfaceElements_Icons.Icon_Fame_Large();
      __s31local0.toolTipText = "dialog_allianceFame_yourPoints";
      return __s31local0;
    },
    set: function (__s33param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAllianceAlienInvasionEventDialogSublayer.CastleAllianceAlienInvasionEventDialogSublayer.prototype, "scoreIcon").set.call(this, __s33param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceAlienInvasionEventDialogPlayer.prototype.onClickRewardOverview = function () {
    __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(this.sublayerProperties.rewardListDialogClassName, new __dep_export_GenericEventInfoListProperties.GenericEventInfoListProperties(this.sublayerProperties.eventId, __dep_export_AllianceAndPlayerPointEventRewardListDialog.AllianceAndPlayerPointEventRewardListDialog.TAB_PLAYER));
  };
  return CastleAllianceAlienInvasionEventDialogPlayer;
}(__dep_export_CastleAllianceAlienInvasionEventDialogSublayer.CastleAllianceAlienInvasionEventDialogSublayer);
exports.CastleAllianceAlienInvasionEventDialogPlayer = __s0local0;
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleAlienInvasionHighscoreDialog = require("gge-module:export_CastleAlienInvasionHighscoreDialog");
var __dep_export_AllianceAndPlayerPointEventRewardListDialog = require("gge-module:export_AllianceAndPlayerPointEventRewardListDialog");
var __dep_export_SeasonLeagueEventElementComponent = require("gge-module:export_SeasonLeagueEventElementComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
