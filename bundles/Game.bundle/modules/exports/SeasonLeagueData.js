Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleLoginEvent = require("gge-module:export_CastleLoginEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function SeasonLeagueData(__s3param0) {
    var __s3local0 = this;
    __s3local0._xml = new __dep_export_SeasonLeagueXml.SeasonLeagueXml();
    __s3local0._server = new __dep_export_SeasonLeagueServer.SeasonLeagueServer();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._xml.parseXml(__s3param0);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleLoginEvent.CastleLoginEvent.ON_GBD_ARRIVED, __s3local0.bindFunction(__s3local0.onGbdArrived));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueData, __s1param0);
  SeasonLeagueData.prototype.destroy = function () {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleLoginEvent.CastleLoginEvent.ON_GBD_ARRIVED, this.bindFunction(this.onGbdArrived));
  };
  SeasonLeagueData.prototype.reset = function () {
    __s1param0.prototype.reset.call(this);
    this._server.reset();
  };
  SeasonLeagueData.prototype.openEventDialog = function () {
    if (!this.isSeasonLeagueActive()) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_eventendet")));
    }
    if (this.server.seasonStartDialogSeen) {
      if (!this.server.seasonEventStartDialogSeen && this.isAnySeasonEventActive()) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_SeasonLeagueMatchmakingDialog.SeasonLeagueMatchmakingDialog);
        this.server.requestKSS(true, true);
      } else {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_SeasonLeagueMainDialog.SeasonLeagueMainDialog);
      }
    } else {
      var __s9local0 = this.getSeasonStartMessageVO();
      if (__s9local0) {
        __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_MESSAGE_DIALOG_COMMAND, __s9local0);
      } else {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_SeasonLeagueStartDialog.SeasonLeagueStartDialog);
        this.server.requestKSS(true, true);
      }
    }
  };
  SeasonLeagueData.prototype.isSeasonLeagueActive = function () {
    return this.getActiveSeasonLeagueEventVO() != null;
  };
  SeasonLeagueData.prototype.getActiveSeasonLeagueEventVO = function () {
    return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_KINGDOMS_LEAGUE);
  };
  SeasonLeagueData.prototype.isAnySeasonEventActive = function () {
    return this.getActiveSeasonEventVO() != null;
  };
  SeasonLeagueData.prototype.getActiveSeasonEventVO = function () {
    for (var __s24local0 = 0, __s24local1 = Array.from(__dep_export_CastleModel.CastleModel.specialEventData.activeEvents.values()); __s24local0 < __s24local1.length; __s24local0++) {
      var __s24local2 = __s24local1[__s24local0];
      if (__s24local2 !== undefined && __s24local2.seasonLeague.isModeEnabled) {
        return __s24local2;
      }
    }
    return null;
  };
  SeasonLeagueData.prototype.getCurrentPlayerPromotion = function () {
    return this.xml.getPromotion(this.server.promotionId);
  };
  SeasonLeagueData.prototype.hasReachedHighestPromotion = function () {
    var __s31local0 = this.xml.getHighestPromotion();
    return !!__s31local0 && this.server.promotionId >= __s31local0.id;
  };
  SeasonLeagueData.prototype.getSeasonStartMessageVO = function () {
    for (var __s33local0 = 0, __s33local1 = __dep_export_CastleModel.CastleModel.messageData.incomingMails; __s33local0 < __s33local1.length; __s33local0++) {
      var __s33local2 = __s33local1[__s33local0];
      if (__s33local2 !== undefined && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s33local2, "MessageSpecialEventVO")) {
        var __s33local3 = __s33local2;
        if (__s33local3 && __s33local3.subtypeEvent == __dep_exact_26a421b704832cff_1.MessageConst.SPECIAL_ID_SPECIAL_EVENT_START && __s33local3.additionalInformation[0] == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_KINGDOMS_LEAGUE) {
          return __s33local3;
        }
      }
    }
    return null;
  };
  SeasonLeagueData.prototype.getCurrentSeasonPassCost = function () {
    return this.server.seasonPassPrice;
  };
  SeasonLeagueData.prototype.getCurrentSeasonPassCostWithSale = function () {
    return __dep_exact_f855840627e6e145.int(this.getCurrentSeasonPassCost());
  };
  SeasonLeagueData.prototype.getActiveSeasonEventNameId = function () {
    var __s43local0 = this.getActiveSeasonEventVO();
    if (__s43local0) {
      return __s43local0.eventBuildingNameId;
    } else {
      return "-";
    }
  };
  SeasonLeagueData.prototype.isAllianceRankingEnabled = function () {
    var __s47local0 = this.getActiveSeasonLeagueEventVO();
    return !!__s47local0 && __s47local0.hasAllianceRanking;
  };
  Object.defineProperty(SeasonLeagueData.prototype, "currentSetting", {
    get: function () {
      return this.xml.getSetting(1);
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueData.prototype.onGbdArrived = function (__s51param0) {
    if (this.isSeasonLeagueActive()) {
      this.server.requestKLI();
    }
  };
  Object.defineProperty(SeasonLeagueData.prototype, "xml", {
    get: function () {
      return this._xml;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueData.prototype, "server", {
    get: function () {
      return this._server;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeagueData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.SeasonLeagueData = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_SeasonLeagueMainDialog = require("gge-module:export_SeasonLeagueMainDialog");
var __dep_export_SeasonLeagueMatchmakingDialog = require("gge-module:export_SeasonLeagueMatchmakingDialog");
var __dep_export_SeasonLeagueStartDialog = require("gge-module:export_SeasonLeagueStartDialog");
var __dep_export_SeasonLeagueServer = require("gge-module:export_SeasonLeagueServer");
var __dep_export_SeasonLeagueXml = require("gge-module:export_SeasonLeagueXml");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
