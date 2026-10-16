Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_C2SListLeaderboardScoresPageVO = require("gge-module:export_C2SListLeaderboardScoresPageVO");
var __dep_export_C2SListLeaderboardScoresWindowVO = require("gge-module:export_C2SListLeaderboardScoresWindowVO");
var __dep_export_C2SSearchLeaderboardScoresEventVO = require("gge-module:export_C2SSearchLeaderboardScoresEventVO");
var __dep_export_LeaderBoardEvent = require("gge-module:export_LeaderBoardEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function LeaderBoardDataProvider(__s3param0, __s3param1, __s3param2 = -1) {
    this._listType = 0;
    this._leagueTypeID = -1;
    this._maxResultsPerPage = 0;
    this._currentScoreResults = [];
    this._currentSearchResults = [];
    this._currentRank = 1;
    this._requestedRank = -1;
    this._currentSearchIndex = 0;
    this._requestedSearchIndex = 0;
    this._totalNumberOfScores = 0;
    this._listType = __s3param0;
    this._maxResultsPerPage = __s3param1;
    this._leagueTypeID = __s3param2;
    this._onResultsUpdatedSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    this._onErrorSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    this._onWaitingSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
  }
  LeaderBoardDataProvider.prototype.addEventListeners = function () {
    this.getController().addEventListener(__dep_export_LeaderBoardEvent.LeaderBoardEvent.LEADERBOARD_SCORE_DATA, this.bindFunction(this.onScoreDataReceived));
    this.getController().addEventListener(__dep_export_LeaderBoardEvent.LeaderBoardEvent.LEADERBOARD_SEARCH_DATA, this.bindFunction(this.onSearchDataReceived));
    this.getController().addEventListener(__dep_export_LeaderBoardEvent.LeaderBoardEvent.LEADERBOARD_DATA_ERROR, this.bindFunction(this.onErrorReceived));
  };
  LeaderBoardDataProvider.prototype.removeEventListeners = function () {
    this.clearSearchResults();
    this.getController().removeEventListener(__dep_export_LeaderBoardEvent.LeaderBoardEvent.LEADERBOARD_SCORE_DATA, this.bindFunction(this.onScoreDataReceived));
    this.getController().removeEventListener(__dep_export_LeaderBoardEvent.LeaderBoardEvent.LEADERBOARD_SEARCH_DATA, this.bindFunction(this.onSearchDataReceived));
    this.getController().removeEventListener(__dep_export_LeaderBoardEvent.LeaderBoardEvent.LEADERBOARD_DATA_ERROR, this.bindFunction(this.onErrorReceived));
    this._onErrorSignal.removeAll();
    this._onResultsUpdatedSignal.removeAll();
    this._onWaitingSignal.removeAll();
    this._isWaitingForServer = false;
  };
  LeaderBoardDataProvider.prototype.getTopPage = function () {
    this._requestedRank = 1;
    this._requestedSearchIndex = -1;
    this.sendCommand(new __dep_export_C2SListLeaderboardScoresPageVO.C2SListLeaderboardScoresPageVO(this._listType, this._leagueTypeID, this._maxResultsPerPage, this._requestedRank));
  };
  LeaderBoardDataProvider.prototype.getPreviousPage = function () {
    this._requestedRank = Math.max((this._requestedRank > -1 ? this._requestedRank : this._currentRank) - this._maxResultsPerPage, 1);
    this._requestedSearchIndex = -1;
    this.sendCommand(new __dep_export_C2SListLeaderboardScoresPageVO.C2SListLeaderboardScoresPageVO(this._listType, this._leagueTypeID, this._maxResultsPerPage, this._requestedRank));
  };
  LeaderBoardDataProvider.prototype.getPageByRank = function (__s13param0) {
    this._requestedRank = __s13param0;
    this._requestedSearchIndex = -1;
    this.sendCommand(new __dep_export_C2SListLeaderboardScoresPageVO.C2SListLeaderboardScoresPageVO(this._listType, this._leagueTypeID, this._maxResultsPerPage, this._requestedRank));
  };
  LeaderBoardDataProvider.prototype.getNextPage = function () {
    this._requestedSearchIndex = -1;
    this._requestedRank = Math.min((this._requestedRank > -1 ? this._requestedRank : this._currentRank) + this._maxResultsPerPage, this._totalNumberOfScores);
    this.sendCommand(new __dep_export_C2SListLeaderboardScoresPageVO.C2SListLeaderboardScoresPageVO(this._listType, this._leagueTypeID, this._maxResultsPerPage, this._requestedRank));
  };
  LeaderBoardDataProvider.prototype.getBottomPage = function () {
    this._requestedRank = this._totalNumberOfScores - this._maxResultsPerPage + 1;
    this._requestedSearchIndex = -1;
    this.sendCommand(new __dep_export_C2SListLeaderboardScoresPageVO.C2SListLeaderboardScoresPageVO(this._listType, this._leagueTypeID, this._maxResultsPerPage, this._requestedRank));
  };
  LeaderBoardDataProvider.prototype.getCurrentPlayerPage = function () {
    this._requestedRank = -1;
    this._requestedSearchIndex = -1;
    this.sendCommand(new __dep_export_C2SListLeaderboardScoresWindowVO.C2SListLeaderboardScoresWindowVO(this._listType, this._leagueTypeID, this._maxResultsPerPage));
  };
  LeaderBoardDataProvider.prototype.searchLeaderBoard = function (__s21param0) {
    if (__s21param0 != "" && __s21param0 != null) {
      this.sendCommand(new __dep_export_C2SSearchLeaderboardScoresEventVO.C2SSearchLeaderboardScoresEventVO(this._listType, __s21param0));
    }
  };
  LeaderBoardDataProvider.prototype.getCurrentSearchPage = function () {
    this._requestedRank = -1;
    this._requestedSearchIndex = this._currentSearchIndex;
    this.sendCommand(new __dep_export_C2SListLeaderboardScoresWindowVO.C2SListLeaderboardScoresWindowVO(this._listType, this._currentSearchResults[this._requestedSearchIndex].leagueTypeId, this._maxResultsPerPage, this._currentSearchResults[this._requestedSearchIndex].scoreId));
  };
  LeaderBoardDataProvider.prototype.getPreviousSearchPage = function () {
    this._requestedSearchIndex = this._currentSearchIndex = this._currentSearchIndex == 0 ? this._currentSearchResults.length - 1 : this._currentSearchIndex - 1;
    this.getCurrentSearchPage();
  };
  LeaderBoardDataProvider.prototype.getNextSearchPage = function () {
    this._requestedSearchIndex = this._currentSearchIndex = this._currentSearchIndex == this._currentSearchResults.length - 1 ? 0 : this._currentSearchIndex + 1;
    this.getCurrentSearchPage();
  };
  LeaderBoardDataProvider.prototype.clearSearchResults = function () {
    this._requestedSearchIndex = -1;
    this._currentSearchIndex = -1;
    this._currentSearchResults = [];
  };
  LeaderBoardDataProvider.prototype.canScrollUp = function () {
    return this._currentRank > 1;
  };
  LeaderBoardDataProvider.prototype.canScrollDown = function () {
    return this._currentRank + this._maxResultsPerPage < this._totalNumberOfScores;
  };
  LeaderBoardDataProvider.prototype.sendCommand = function (__s36param0) {
    var __s36local0 = this;
    if (!this.isWaitingForServer) {
      this._onWaitingSignal.dispatch();
      this._isWaitingForServer = true;
      this._lastRequestTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
      if (this._additionalData) {
        Object.keys(this._additionalData).forEach(function (__s40param0) {
          __s36param0[__s40param0] = __s36local0._additionalData[__s40param0];
        });
      }
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(__s36param0);
    }
  };
  LeaderBoardDataProvider.prototype.onSearchDataReceived = function (__s42param0) {
    var __s42local0 = this;
    if (this.listType == __s42param0.params.LT || this.leagueTypeID != (__s42param0.params.LID || -1)) {
      this._isWaitingForServer = false;
      this._currentSearchResults = [];
      __s42param0.params.L.forEach(function (__s45param0) {
        __s45param0.L.forEach(function (__s47param0) {
          __s42local0._currentSearchResults.push({
            leagueTypeId: __s45param0.LID,
            scoreId: __s47param0
          });
        });
      });
      this._requestedSearchIndex = this._currentSearchIndex = 0;
      if (this._currentSearchResults.length > 0) {
        this.getCurrentSearchPage();
      } else {
        this.getCurrentPlayerPage();
      }
    }
  };
  LeaderBoardDataProvider.prototype.onScoreDataReceived = function (__s51param0) {
    if (this.listType == __s51param0.params.LT || this.leagueTypeID != (__s51param0.params.LID || -1)) {
      this._isWaitingForServer = false;
      this._currentScoreResults = __s51param0.params.L || [];
      this._leagueTypeID = __s51param0.params.LID || this._leagueTypeID;
      this._totalNumberOfScores = __s51param0.params.T;
      if (this._currentScoreResults.length > 0) {
        this._currentRank = this._currentScoreResults[0].R;
      }
      this.handlePendingRequest();
      this._onResultsUpdatedSignal.dispatch(this._currentScoreResults);
    }
  };
  LeaderBoardDataProvider.prototype.onErrorReceived = function (__s55param0) {
    this._isWaitingForServer = false;
    this._requestedSearchIndex = -1;
    this._requestedRank = -1;
    this._onErrorSignal.dispatch(__s55param0.params);
  };
  LeaderBoardDataProvider.prototype.handlePendingRequest = function () {
    var __s57local0 = this;
    if (!this._isWaitingForServer) {
      if (this._requestedRank > -1 && this._requestedRank != this._currentRank) {
        this.getPageByRank(this._requestedRank);
      } else if (this._requestedSearchIndex > -1) {
        if (!this._currentScoreResults.some(function (__s62param0) {
          return __s62param0.SI.toString() == __s57local0._currentSearchResults[__s57local0._requestedSearchIndex].scoreId;
        })) {
          this.getCurrentSearchPage();
        }
      }
    }
  };
  Object.defineProperty(LeaderBoardDataProvider.prototype, "isWaitingForServer", {
    get: function () {
      if (__dep_export_CachedTimer.CachedTimer.getCachedTimer() - this._lastRequestTimestamp > LeaderBoardDataProvider.MAX_WAITTIME) {
        this._isWaitingForServer = false;
      }
      return this._isWaitingForServer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderBoardDataProvider.prototype, "listType", {
    get: function () {
      return this._listType;
    },
    set: function (__s70param0) {
      this._listType = __s70param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderBoardDataProvider.prototype, "leagueTypeID", {
    get: function () {
      return this._leagueTypeID;
    },
    set: function (__s74param0) {
      this._leagueTypeID = __s74param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderBoardDataProvider.prototype, "currentScoreResults", {
    get: function () {
      return this._currentScoreResults;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderBoardDataProvider.prototype, "currentSearchResults", {
    get: function () {
      return this._currentSearchResults;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderBoardDataProvider.prototype, "currentRank", {
    get: function () {
      return this._currentRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderBoardDataProvider.prototype, "requestedRank", {
    get: function () {
      return this._requestedRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderBoardDataProvider.prototype, "currentSearchIndex", {
    get: function () {
      return this._currentSearchIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderBoardDataProvider.prototype, "totalNumberOfScores", {
    get: function () {
      return this._totalNumberOfScores;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderBoardDataProvider.prototype, "maxResultsPerPage", {
    get: function () {
      return this._maxResultsPerPage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderBoardDataProvider.prototype, "onResultsUpdatedSignal", {
    get: function () {
      return this._onResultsUpdatedSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderBoardDataProvider.prototype, "onErrorSignal", {
    get: function () {
      return this._onErrorSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderBoardDataProvider.prototype, "onWaitingSignal", {
    get: function () {
      return this._onWaitingSignal;
    },
    enumerable: true,
    configurable: true
  });
  LeaderBoardDataProvider.prototype.getController = function () {
    return __dep_export_CastleBasicController.CastleBasicController.getInstance();
  };
  Object.defineProperty(LeaderBoardDataProvider.prototype, "additionalData", {
    get: function () {
      return this._additionalData;
    },
    set: function (__s100param0) {
      this._additionalData = __s100param0;
    },
    enumerable: true,
    configurable: true
  });
  LeaderBoardDataProvider.MAX_WAITTIME = 1000;
  return LeaderBoardDataProvider;
}();
exports.LeaderBoardDataProvider = __s0local0;
