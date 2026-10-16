Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __s0local0 = function (__s1param0) {
  function MessageEventAnnouncementVO() {
    var __s3local0 = this;
    __s3local0._eventId = 0;
    __s3local0._durationTS = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageEventAnnouncementVO, __s1param0);
  Object.defineProperty(MessageEventAnnouncementVO.prototype, "dialogInfo", {
    get: function () {
      return new __dep_export_DialogInfoVO.DialogInfoVO(null, null, __dep_export_IngameClientCommands.IngameClientCommands.OPEN_EVENT_ANNOUNCEMENT_TEASER_DIALOG, this);
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "dialogInfo").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  MessageEventAnnouncementVO.prototype.parseSubject = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_eventAnnouncement_title");
  };
  MessageEventAnnouncementVO.prototype.parseMessageHeader = function (__s11param0) {
    var __s11local0 = __s11param0.split(__dep_exact_26a421b704832cff_1.MessageConst.SUBTYPE_META_DATA_SPLITTER);
    this._eventId = __dep_exact_f855840627e6e145.int(__s11local0[1]);
    this._durationTS = __s11local0[2];
  };
  MessageEventAnnouncementVO.prototype.parseSender = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("system");
  };
  Object.defineProperty(MessageEventAnnouncementVO.prototype, "additionalIconName", {
    get: function () {
      if (this._eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE) {
        return "CastleMessageIconsAlien";
      } else {
        return "";
      }
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "additionalIconName").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageEventAnnouncementVO.prototype, "eventId", {
    get: function () {
      return this._eventId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageEventAnnouncementVO.prototype, "durationTS", {
    get: function () {
      return this._durationTS;
    },
    enumerable: true,
    configurable: true
  });
  MessageEventAnnouncementVO.prototype.canBeDeleted = function () {
    var __s25local0 = __dep_export_CastleModel.CastleModel.eventAnnouncementData.isClaimed(this.durationTS);
    var __s25local1 = __dep_export_CastleModel.CastleModel.eventAnnouncementData.isAvailable(this.durationTS);
    return __s25local0 || !__s25local1;
  };
  MessageEventAnnouncementVO.prototype.canBeArchived = function () {
    return false;
  };
  return MessageEventAnnouncementVO;
}(__dep_export_AMessageVO.AMessageVO);
exports.MessageEventAnnouncementVO = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
