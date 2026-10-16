Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AMessageVO() {
    this._messageID = -1;
    this._messageType = 0;
    this._playerID = 0;
    this.secondsSinceSent = NaN;
    this.arrivalTimestamp = NaN;
    this.read = false;
    this.archived = false;
    this.forwarded = false;
  }
  AMessageVO.prototype.loadFromParamArray = function (__s5param0, __s5param1) {
    this._messageID = __s5param0[0];
    this._messageType = __dep_exact_f855840627e6e145.int(__s5param0[1]);
    this._senderName = __s5param0[3];
    this._playerID = __dep_exact_f855840627e6e145.int(__s5param0[4]);
    this.secondsSinceSent = __s5param0[5];
    this.read = __s5param0[6] == 1;
    this.archived = __s5param0[7] == 1;
    this.forwarded = __dep_exact_f855840627e6e145.int(__s5param0[8]) == 1;
    this.arrivalTimestamp = __s5param1;
    var __s5local0 = this.repairSpecialCharacters(__s5param0[2]);
    this.parseMessageHeader(__s5local0);
    this._subject = this.parseSubject();
    this._senderName = this.parseSender();
  };
  Object.defineProperty(AMessageVO.prototype, "isVisible", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  AMessageVO.prototype.parseMessageHeader = function (__s9param0) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  AMessageVO.prototype.parseSubject = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  AMessageVO.prototype.parseSender = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  Object.defineProperty(AMessageVO.prototype, "dialogInfo", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMessageVO.prototype, "additionalIconName", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  AMessageVO.prototype.repairSpecialCharacters = function (__s19param0) {
    var __s19local0 = __dep_exact_9e901e8e2483a22f.TextValide.parseChatJSONMessage(__s19param0);
    return __s19local0 = (__s19local0 = (__s19local0 = (__s19local0 = (__s19local0 = __s19local0.replace(/&p.*\.\.\./g, "%...")).replace(/&q.*\.\.\./g, "\"...")).replace(/&1.*\.\.\./g, "'...")).replace(/<b.*\.\.\./g, "...")).replace(/%5.*\.\.\./g, "\\...");
  };
  AMessageVO.prototype.messageFitsFilter = function (__s21param0) {
    for (var __s21local0 = 0; __s21local0 < __s21param0.length; __s21local0++) {
      if (this._messageType == __s21param0[__s21local0] && !this.archived) {
        return true;
      }
    }
    return false;
  };
  AMessageVO.prototype.getCumulativeSecondsSinceSent = function () {
    return this.secondsSinceSent + (__dep_export_CachedTimer.CachedTimer.getCachedTimer() - this.arrivalTimestamp) / 1000;
  };
  Object.defineProperty(AMessageVO.prototype, "messageID", {
    get: function () {
      return this._messageID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMessageVO.prototype, "messageType", {
    get: function () {
      return this._messageType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMessageVO.prototype, "playerID", {
    get: function () {
      return this._playerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMessageVO.prototype, "senderName", {
    get: function () {
      return this._senderName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMessageVO.prototype, "subject", {
    get: function () {
      return this._subject;
    },
    enumerable: true,
    configurable: true
  });
  AMessageVO.prototype.canBeDeleted = function () {
    return true;
  };
  AMessageVO.prototype.canBeArchived = function () {
    return !this.archived;
  };
  Object.defineProperty(AMessageVO.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AMessageVO.__initialize_static_members = function () {
    AMessageVO.FLAGNAME_ARCHIVED = "archived";
    AMessageVO.FLAGNAME_FORWARDED = "forwarded";
    AMessageVO.FLAGNAME_READ = "read";
  };
  AMessageVO.showOfferIDsInSubject = false;
  return AMessageVO;
}();
exports.AMessageVO = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
__s0local0.__initialize_static_members();
