Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTournamentEventFinishDialogProperties = require("gge-module:export_CastleTournamentEventFinishDialogProperties");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __s0local0 = function (__s1param0) {
  function MessageTournamentOverVO() {
    var __s3local0 = this;
    __s3local0._subtypeTournament = 0;
    __s3local0._rank = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageTournamentOverVO, __s1param0);
  MessageTournamentOverVO.prototype.parseMessageHeader = function (__s5param0) {
    var __s5local0 = __s5param0.split("+");
    this._subtypeTournament = __dep_exact_f855840627e6e145.int(__s5local0[0]);
    this._rank = __dep_exact_f855840627e6e145.int(__s5local0[1]);
    this._rewardIDs = [];
    for (var __s5local1 = 2; __s5local1 < __s5local0.length; __s5local1++) {
      if (__s5local0[__s5local1] != -1) {
        this._rewardIDs.push(__s5local0[__s5local1]);
      }
    }
  };
  MessageTournamentOverVO.prototype.parseSubject = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_tournamentOver");
  };
  MessageTournamentOverVO.prototype.parseSender = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("system");
  };
  Object.defineProperty(MessageTournamentOverVO.prototype, "dialogInfo", {
    get: function () {
      if (this.subtypeTournament == __dep_exact_26a421b704832cff.MessageConst.TOURNAMENT_SINGLE) {
        return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleTournamentEventFinishDialog.CastleTournamentEventFinishDialog, new __dep_export_CastleTournamentEventFinishDialogProperties.CastleTournamentEventFinishDialogProperties(this.messageID, this.rank, this.rewardIDs));
      } else {
        return null;
      }
    },
    set: function (__s18param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "dialogInfo").set.call(this, __s18param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageTournamentOverVO.prototype, "subtypeTournament", {
    get: function () {
      return this._subtypeTournament;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageTournamentOverVO.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageTournamentOverVO.prototype, "rewardIDs", {
    get: function () {
      return this._rewardIDs;
    },
    enumerable: true,
    configurable: true
  });
  return MessageTournamentOverVO;
}(__dep_export_AMessageVO.AMessageVO);
exports.MessageTournamentOverVO = __s0local0;
var __dep_export_CastleTournamentEventFinishDialog = require("gge-module:export_CastleTournamentEventFinishDialog");
