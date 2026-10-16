Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SArchiveMessageVO = require("gge-module:export_C2SArchiveMessageVO");
var __dep_export_C2SBattleLogDetailVO = require("gge-module:export_C2SBattleLogDetailVO");
var __dep_export_C2SBattleLogMiddleVO = require("gge-module:export_C2SBattleLogMiddleVO");
var __dep_export_C2SBattleLogShortVO = require("gge-module:export_C2SBattleLogShortVO");
var __dep_export_C2SDeleteMessageVO = require("gge-module:export_C2SDeleteMessageVO");
var __dep_export_C2SGetIgnoredPlayersVO = require("gge-module:export_C2SGetIgnoredPlayersVO");
var __dep_export_C2SIgnorePlayerVO = require("gge-module:export_C2SIgnorePlayerVO");
var __dep_export_C2SReadMessagesVO = require("gge-module:export_C2SReadMessagesVO");
var __dep_export_C2SSendMessageVO = require("gge-module:export_C2SSendMessageVO");
var __dep_export_CastleMessageDataEvent = require("gge-module:export_CastleMessageDataEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_IgnoredPlayerVO = require("gge-module:export_IgnoredPlayerVO");
var __s0local0 = function (__s1param0) {
  function CastleMessageData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._battleLogs = [];
    __s3local0._ignoredPlayer = [];
    __s3local0._mostRecentPOMessages = new Map();
    __s3local0.parseRestrictions(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMessageData, __s1param0);
  CastleMessageData.prototype.reset = function () {
    this._incomingMails = [];
    this._battleLogs = [];
    this._ignoredPlayer = [];
    this._mostRecentPOMessages = new Map();
    this._restrictions.forEach(function (__s7param0) {
      __s7param0.currentPlayerAmount = 0;
    });
  };
  CastleMessageData.prototype.parseRestrictions = function (__s9param0) {
    this._restrictions = new Map();
    var __s9local0 = __s9param0.messageRestrictions;
    if (__s9local0 != null) {
      for (var __s9local1 = 0, __s9local2 = __s9local0; __s9local1 < __s9local2.length; __s9local1++) {
        var __s9local3 = __s9local2[__s9local1];
        if (__s9local3 !== undefined) {
          var __s9local4 = new __dep_export_MessageRestrictionVO.MessageRestrictionVO();
          __s9local4.fillFromParamXML(__s9local3);
          this._restrictions.set(__s9local4.id, __s9local4);
        }
      }
    }
  };
  CastleMessageData.prototype.getMessageRestrictionVOByMessageType = function (__s15param0) {
    if (this._restrictions != null) {
      for (var __s15local0 = 0, __s15local1 = Array.from(this._restrictions.values()); __s15local0 < __s15local1.length; __s15local0++) {
        var __s15local2 = __s15local1[__s15local0];
        if (__s15local2 !== undefined && __s15local2.messageType == __s15param0) {
          return __s15local2;
        }
      }
    }
    return null;
  };
  CastleMessageData.prototype.getBattleLogShort = function (__s21param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBattleLogShortVO.C2SBattleLogShortVO(__s21param0, false));
  };
  CastleMessageData.prototype.getBattleLogMiddle = function (__s23param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBattleLogMiddleVO.C2SBattleLogMiddleVO(__s23param0));
  };
  CastleMessageData.prototype.getBattleLogDetailed = function (__s25param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBattleLogDetailVO.C2SBattleLogDetailVO(__s25param0));
  };
  CastleMessageData.prototype.getBodyForTextMessage = function (__s27param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SReadMessagesVO.C2SReadMessagesVO(__s27param0));
  };
  CastleMessageData.prototype.getLogByMessageId = function (__s29param0) {
    for (var __s29local0 = 0; __s29local0 < this._battleLogs.length; __s29local0++) {
      for (var __s29local1 = 0; __s29local1 < this._battleLogs[__s29local0].messageIDs.length; ++__s29local1) {
        if (this._battleLogs[__s29local0].messageIDs[__s29local1] == __s29param0) {
          this._battleLogs[__s29local0].currentMessageID = __s29param0;
          return this._battleLogs[__s29local0];
        }
      }
    }
    return null;
  };
  CastleMessageData.prototype.getBattleLogById = function (__s36param0) {
    for (var __s36local0 = 0; __s36local0 < this._battleLogs.length; __s36local0++) {
      if (this._battleLogs[__s36local0].logID == __s36param0) {
        return this._battleLogs[__s36local0];
      }
    }
    return null;
  };
  CastleMessageData.prototype.countMessagesByFilterAndFlags = function (__s41param0, __s41param1, __s41param2) {
    if (__s41param1.length != __s41param2.length) {
      throw new Error("CastleMessageData.countMessagesByFilterAndFlags says: amount of flagNames and flagValues must be the same :/");
    }
    var __s41local0 = 0;
    var __s41local1 = false;
    if (this._incomingMails != null) {
      for (var __s41local2 = 0, __s41local3 = this._incomingMails; __s41local2 < __s41local3.length; __s41local2++) {
        var __s41local4 = __s41local3[__s41local2];
        if (__s41local4 !== undefined && (__s41param0.length == 0 || __s41param0.indexOf(__s41local4.messageType) != -1)) {
          __s41local1 = true;
          for (var __s41local5 = 0; __s41local5 < __s41param1.length; __s41local5++) {
            if (__s41local4[__s41param1[__s41local5]] != __s41param2[__s41local5]) {
              __s41local1 = false;
              break;
            }
          }
          if (__s41local1) {
            __s41local0++;
          }
        }
      }
    }
    return __s41local0;
  };
  CastleMessageData.prototype.countForwardedMessages = function (__s52param0) {
    return __dep_exact_f855840627e6e145.int(this.countMessagesByFilterAndFlags(__s52param0, [__dep_export_AMessageVO.AMessageVO.FLAGNAME_FORWARDED, __dep_export_AMessageVO.AMessageVO.FLAGNAME_ARCHIVED], [true, false]));
  };
  CastleMessageData.prototype.countUnforwardedMessages = function (__s54param0) {
    return __dep_exact_f855840627e6e145.int(this.countMessagesByFilterAndFlags(__s54param0, [__dep_export_AMessageVO.AMessageVO.FLAGNAME_FORWARDED, __dep_export_AMessageVO.AMessageVO.FLAGNAME_ARCHIVED], [false, false]));
  };
  CastleMessageData.prototype.countAllUnarchivedMessages = function (__s56param0) {
    return __dep_exact_f855840627e6e145.int(this.countMessagesByFilterAndFlags(__s56param0, [__dep_export_AMessageVO.AMessageVO.FLAGNAME_ARCHIVED], [false]));
  };
  CastleMessageData.prototype.countUnreadUnarchivedMessages = function (__s58param0) {
    return __dep_exact_f855840627e6e145.int(this.countMessagesByFilterAndFlags(__s58param0, [__dep_export_AMessageVO.AMessageVO.FLAGNAME_READ, __dep_export_AMessageVO.AMessageVO.FLAGNAME_ARCHIVED], [false, false]));
  };
  CastleMessageData.prototype.countUnreadMessages = function (__s60param0) {
    return __dep_exact_f855840627e6e145.int(this.countMessagesByFilterAndFlags(__s60param0, [__dep_export_AMessageVO.AMessageVO.FLAGNAME_READ], [false]));
  };
  CastleMessageData.prototype.countUnreadUnforwardedMessages = function (__s62param0) {
    return __dep_exact_f855840627e6e145.int(this.countMessagesByFilterAndFlags(__s62param0, [__dep_export_AMessageVO.AMessageVO.FLAGNAME_FORWARDED, __dep_export_AMessageVO.AMessageVO.FLAGNAME_READ, __dep_export_AMessageVO.AMessageVO.FLAGNAME_ARCHIVED], [false, false, false]));
  };
  CastleMessageData.prototype.countUnreadForwardedMessages = function (__s64param0) {
    return __dep_exact_f855840627e6e145.int(this.countMessagesByFilterAndFlags(__s64param0, [__dep_export_AMessageVO.AMessageVO.FLAGNAME_FORWARDED, __dep_export_AMessageVO.AMessageVO.FLAGNAME_READ, __dep_export_AMessageVO.AMessageVO.FLAGNAME_ARCHIVED], [true, false, false]));
  };
  CastleMessageData.prototype.countArchivedMessages = function () {
    return __dep_exact_f855840627e6e145.int(this.countMessagesByFilterAndFlags([], [__dep_export_AMessageVO.AMessageVO.FLAGNAME_ARCHIVED], [true]));
  };
  CastleMessageData.prototype.getMessagesByPageAndFilterAndFlag = function (__s68param0, __s68param1, __s68param2 = "", __s68param3 = false) {
    var __s68local0 = [];
    this._incomingMails.sort(this.bindFunction(this.sortMessages));
    for (var __s68local1 = 0; __s68local1 < this._incomingMails.length; __s68local1++) {
      if (!!this._incomingMails[__s68local1].messageFitsFilter(__s68param1) && (__s68param2 == "" || this._incomingMails[__s68local1][__s68param2] == __s68param3)) {
        __s68local0.push(this._incomingMails[__s68local1]);
      }
    }
    if (__s68param0 < 0) {
      return __s68local0;
    } else {
      return this.trimMessagesByPage(__s68local0, __s68param0);
    }
  };
  CastleMessageData.prototype.getMessagesByPageAndFilter = function (__s75param0, __s75param1) {
    return this.getMessagesByPageAndFilterAndFlag(__s75param0, __s75param1);
  };
  CastleMessageData.prototype.getForwardedMessagesByPageAndFilter = function (__s77param0, __s77param1) {
    return this.getMessagesByPageAndFilterAndFlag(__s77param0, __s77param1, "forwarded", true);
  };
  CastleMessageData.prototype.getUnforwardedMessagesByPageAndFilter = function (__s79param0, __s79param1) {
    return this.getMessagesByPageAndFilterAndFlag(__s79param0, __s79param1, "forwarded", false);
  };
  CastleMessageData.prototype.trimMessagesByPage = function (__s81param0, __s81param1) {
    var __s81local0 = __dep_exact_f855840627e6e145.int(__s81param1 * __dep_exact_26a421b704832cff.MessageConst.MESSAGES_PER_PAGE);
    if (__s81local0 < __s81param0.length) {
      var __s81local1 = __dep_exact_f855840627e6e145.int(Math.min(__dep_exact_26a421b704832cff.MessageConst.MESSAGES_PER_PAGE, __s81param0.length - __s81local0));
      return __s81param0 = __s81param0.slice(__s81local0, __s81local0 + __s81local1);
    }
    return null;
  };
  CastleMessageData.prototype.sortMessages = function (__s84param0, __s84param1) {
    if (__s84param0.getCumulativeSecondsSinceSent() < __s84param1.getCumulativeSecondsSinceSent()) {
      return -1;
    } else if (__s84param0.getCumulativeSecondsSinceSent() > __s84param1.getCumulativeSecondsSinceSent()) {
      return 1;
    } else if (__s84param0.messageID > __s84param1.messageID) {
      return -1;
    } else if (__s84param0.messageID < __s84param1.messageID) {
      return 1;
    } else {
      return 0;
    }
  };
  CastleMessageData.prototype.parseMessageInfoArray = function (__s91param0) {
    if (__s91param0) {
      this._incomingMails ||= [];
      var __s91local0 = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
      for (var __s91local1 = 0; __s91local1 < __s91param0.length; __s91local1++) {
        this.parseMessageInfo(__s91param0[__s91local1], __s91local0);
      }
      this._incomingMails.sort(this.bindFunction(this.sortMessages));
      this.castleController.dispatchEvent(new __dep_export_CastleMessageDataEvent.CastleMessageDataEvent(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.UPDATE_MESSAGELIST));
    }
  };
  CastleMessageData.prototype.parse_SNE = function (__s96param0) {
    this.parseMessageInfoArray(__s96param0.MSG);
  };
  CastleMessageData.prototype.parseAMS = function (__s98param0) {
    var __s98local0 = this.getMessageVOById(__s98param0.MID);
    if (__s98local0) {
      __s98local0.archived = true;
      this.castleController.dispatchEvent(new __dep_export_CastleMessageDataEvent.CastleMessageDataEvent(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.MESSAGE_ARCHIVED, [__s98local0.messageID]));
      this.castleController.dispatchEvent(new __dep_export_CastleMessageDataEvent.CastleMessageDataEvent(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.UPDATE_MESSAGELIST));
    }
  };
  CastleMessageData.prototype.parse_MCD = function (__s101param0) {
    var __s101local0 = this;
    if (__s101param0 && __s101param0.MTC) {
      __s101param0.MTC.forEach(function (__s104param0) {
        var __s104local0 = __s101local0.getMessageRestrictionVOByMessageType(__s104param0[0]);
        if (__s104local0) {
          __s104local0.currentPlayerAmount = __s104param0[1];
        }
      });
      this.castleController.dispatchEvent(new __dep_export_CastleMessageDataEvent.CastleMessageDataEvent(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.MESSAGE_RESTRICTIONS_UPDATED));
    }
  };
  Object.defineProperty(CastleMessageData.prototype, "minLevelForSendingP2PMessages", {
    get: function () {
      if (this.getMessageRestrictionVOByMessageType(__dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_USER_OUT)) {
        return this.getMessageRestrictionVOByMessageType(__dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_USER_OUT).minLevel;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleMessageData.prototype.getArchivedMessages = function (__s111param0) {
    var __s111local0 = [];
    this._incomingMails.sort(this.bindFunction(this.sortMessages));
    for (var __s111local1 = 0; __s111local1 < this._incomingMails.length; __s111local1++) {
      if (this._incomingMails[__s111local1].archived) {
        __s111local0.push(this._incomingMails[__s111local1]);
      }
    }
    if (__s111param0 < 0) {
      return __s111local0;
    } else {
      return this.trimMessagesByPage(__s111local0, __s111param0);
    }
  };
  CastleMessageData.prototype.isArchiveFull = function () {
    return this.countMessagesByFilterAndFlags([], [__dep_export_AMessageVO.AMessageVO.FLAGNAME_ARCHIVED], [true]) >= __dep_exact_26a421b704832cff.MessageConst.MAX_MAILBOX_ARCHIVE_SIZE;
  };
  CastleMessageData.prototype.parseMessageInfo = function (__s120param0, __s120param1) {
    var __s120local0 = __dep_export_CastleMessageFactory.CastleMessageFactory.parseMessage(__s120param0, __s120param1);
    for (var __s120local1 = 0; __s120local1 < this._incomingMails.length; __s120local1++) {
      if (__s120local0.messageID == this._incomingMails[__s120local1].messageID) {
        this._incomingMails[__s120local1] = __s120local0;
        return __s120local0;
      }
    }
    if (__s120local0.isVisible) {
      this._incomingMails.push(__s120local0);
    }
    return __s120local0;
  };
  CastleMessageData.prototype.getMessageVOById = function (__s126param0) {
    if (!this._incomingMails) {
      return null;
    }
    for (var __s126local0 = 0; __s126local0 < this._incomingMails.length; __s126local0++) {
      if (this._incomingMails[__s126local0].messageID == __s126param0) {
        return this._incomingMails[__s126local0];
      }
    }
    return null;
  };
  CastleMessageData.prototype.sendNewMessage = function (__s132param0, __s132param1, __s132param2) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSendMessageVO.C2SSendMessageVO(__s132param0, __s132param1, __s132param2));
  };
  CastleMessageData.prototype.deleteMessage = function (__s134param0) {
    if (__s134param0) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SDeleteMessageVO.C2SDeleteMessageVO(__s134param0.messageID));
      this.deleteMessageFromClientList(__s134param0);
    }
  };
  CastleMessageData.prototype.archiveMessage = function (__s137param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SArchiveMessageVO.C2SArchiveMessageVO(__s137param0.messageID));
  };
  CastleMessageData.prototype.deleteMessageFromClientList = function (__s139param0) {
    if (__s139param0) {
      for (var __s139local0 = 0; __s139local0 < this._incomingMails.length; __s139local0++) {
        if (this._incomingMails[__s139local0].messageID == __s139param0.messageID) {
          this._incomingMails.splice(__s139local0, 1);
          this.castleController.dispatchEvent(new __dep_export_CastleMessageDataEvent.CastleMessageDataEvent(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.UPDATE_MESSAGELIST));
          return;
        }
      }
    }
  };
  CastleMessageData.prototype.parseBattleLogShort = function (__s145param0) {
    if (__s145param0) {
      this._battleLogs ||= [];
      if (this.hasAlreadyLogId(__s145param0.LID)) {
        var __s145local0 = this.getBattleLogById(__s145param0.LID);
        __s145local0.messageIDs.push(__s145param0.MID);
        __s145local0.addMetadataFromMessage(__s145param0.MID, __s145param0.MS);
      } else {
        var __s145local1 = new __dep_export_BattleLogVO.BattleLogVO();
        __s145local1.fillFromParamObject(__s145param0);
        this._battleLogs.push(__s145local1);
      }
    }
  };
  CastleMessageData.prototype.hasAlreadyLogId = function (__s150param0) {
    for (var __s150local0 = 0; __s150local0 < this._battleLogs.length; __s150local0++) {
      if (this._battleLogs[__s150local0].logID == __s150param0) {
        return true;
      }
    }
    return false;
  };
  CastleMessageData.prototype.clearBattleLogs = function () {
    this._battleLogs = [];
  };
  CastleMessageData.prototype.parseBattleLogMiddle = function (__s157param0) {
    if (__s157param0) {
      var __s157local0 = this.getBattleLogById(__s157param0.LID);
      if (__s157local0) {
        __s157local0.parseMiddle(__s157param0);
      }
    }
  };
  CastleMessageData.prototype.parseBattleLogDetail = function (__s161param0) {
    if (__s161param0) {
      var __s161local0 = this.getBattleLogById(__s161param0.LID);
      if (__s161local0) {
        __s161local0.parseDetails(__s161param0);
      }
    }
  };
  CastleMessageData.prototype.ignorePlayer = function (__s165param0, __s165param1) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SIgnorePlayerVO.C2SIgnorePlayerVO(__s165param0, __s165param1));
  };
  CastleMessageData.prototype.getIgnoredPlayer = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetIgnoredPlayersVO.C2SGetIgnoredPlayersVO());
  };
  Object.defineProperty(CastleMessageData.prototype, "ignoredPlayer", {
    get: function () {
      return this._ignoredPlayer;
    },
    enumerable: true,
    configurable: true
  });
  CastleMessageData.prototype.parse_IPS = function (__s171param0) {
    this._ignoredPlayer = [];
    for (var __s171local0 = 0; __s171local0 < __s171param0.length; ++__s171local0) {
      var __s171local1 = new __dep_export_IgnoredPlayerVO.IgnoredPlayerVO();
      __s171local1.playerID = __dep_exact_f855840627e6e145.int(__s171param0[__s171local0].PID);
      __s171local1.playerName = __s171param0[__s171local0].N;
      this._ignoredPlayer.push(__s171local1);
    }
    this.dispatchEvent(new __dep_export_CastleMessageDataEvent.CastleMessageDataEvent(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.GET_IGNORED_PLAYER));
  };
  Object.defineProperty(CastleMessageData.prototype, "castleController", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMessageData.prototype, "incomingMails", {
    get: function () {
      return this._incomingMails;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMessageData.prototype, "mostRecentPOMessages", {
    get: function () {
      return this._mostRecentPOMessages;
    },
    enumerable: true,
    configurable: true
  });
  return CastleMessageData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleMessageData = __s0local0;
var __dep_export_CastleMessageFactory = require("gge-module:export_CastleMessageFactory");
var __dep_export_BattleLogVO = require("gge-module:export_BattleLogVO");
var __dep_export_MessageRestrictionVO = require("gge-module:export_MessageRestrictionVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
