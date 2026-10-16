Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_AbstractCookie = require("gge-module:class_AbstractCookie");
var __dep_class_SessionTypes = require("gge-module:class_SessionTypes");
var __dep_exact_c7978b33cc5e93f6 = require("gge-module:exact_c7978b33cc5e93f6");
var __dep_exact_96cf9add7e28ef3a = require("gge-module:exact_96cf9add7e28ef3a");
var __s0local0 = function (__s1param0) {
  function AccountCookie(__s3param0) {
    var __s3local0 = __s1param0.call(this, "ac") || this;
    __s3local0._accountId = null;
    __s3local0._isNewAccount = false;
    __s3local0._journeyHash = __s3param0;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(AccountCookie, __s1param0);
  AccountCookie.prototype.readLocalStorage = function () {
    if (this.hasAttribute(AccountCookie.ATTRIBUTE_ACCOUNT_ID)) {
      this._accountId = this.getAttributeAsString(AccountCookie.ATTRIBUTE_ACCOUNT_ID);
      if (this.stringIsValid(this._journeyHash) && this._accountId !== this._journeyHash) {
        this._accountId = this._journeyHash;
        this.setAttribute(AccountCookie.ATTRIBUTE_ACCOUNT_ID, this._accountId, false);
      }
    } else {
      this._isNewAccount = true;
      if (this.stringIsValid(this._journeyHash)) {
        this._accountId = this._journeyHash;
      } else {
        this._accountId = Date.now().toString() + (Math.random() * 999999).toFixed();
      }
      this.setAttribute(AccountCookie.ATTRIBUTE_ACCOUNT_ID, this._accountId, false);
    }
    this._accountId = this.getAttributeAsString(AccountCookie.ATTRIBUTE_ACCOUNT_ID);
    this.writeLocalStorage();
  };
  AccountCookie.prototype.stringIsValid = function (__s12param0) {
    return __s12param0 !== null && __s12param0 !== undefined && __s12param0.length > 0;
  };
  AccountCookie.prototype.newSession = function () {
    if (this._isNewAccount) {
      this._sessionType = __dep_class_SessionTypes.SessionTypes.FIRST_SESSION;
      this._sessionCount = 1;
    } else {
      this._sessionType = __dep_class_SessionTypes.SessionTypes.REGULAR_SESSION;
      if (this.hasAttribute(AccountCookie.ATTRIBUTE_SESSION_COUNT)) {
        this._sessionCount = this.getAttributeAsInt(AccountCookie.ATTRIBUTE_SESSION_COUNT) + 1;
      } else {
        this._sessionCount = 2;
      }
    }
    this.setAttribute(AccountCookie.ATTRIBUTE_SESSION_TYPE, this._sessionType, false);
    this.setAttribute(AccountCookie.ATTRIBUTE_SESSION_COUNT, this._sessionCount, false);
    this.writeLocalStorage();
  };
  AccountCookie.prototype.updateSessionWithNewData = function (__s20param0, __s20param1) {
    if (!this._isNewAccount) {
      if (__s20param1 !== null && __s20param1 !== undefined && __s20param1 !== __s20param0) {
        this._sessionType = __dep_class_SessionTypes.SessionTypes.FIRST_SESSION_AFTER_UPDATE;
        this.setAttribute(AccountCookie.ATTRIBUTE_SESSION_TYPE, this._sessionType, false);
      }
    }
  };
  Object.defineProperty(AccountCookie.prototype, "accountId", {
    get: function () {
      return this._accountId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AccountCookie.prototype, "isNewAccount", {
    get: function () {
      return this._isNewAccount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AccountCookie.prototype, "cdn", {
    get: function () {
      if (this.hasAttribute(AccountCookie.ATTRIBUTE_CDN)) {
        return this.getAttributeAsNumber(AccountCookie.ATTRIBUTE_CDN);
      } else {
        return __dep_exact_96cf9add7e28ef3a.CDN.None;
      }
    },
    set: function (__s32param0) {
      this.setAttribute(AccountCookie.ATTRIBUTE_CDN, __s32param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AccountCookie.prototype, "ageGateData", {
    get: function () {
      if (this.hasAttribute(AccountCookie.ATTRIBUTE_AGE_GATE_DATA)) {
        return __dep_exact_c7978b33cc5e93f6.StringUtils.decrypt(this.getAttributeAsString(AccountCookie.ATTRIBUTE_AGE_GATE_DATA));
      } else {
        return null;
      }
    },
    set: function (__s38param0) {
      this.setAttribute(AccountCookie.ATTRIBUTE_AGE_GATE_DATA, __dep_exact_c7978b33cc5e93f6.StringUtils.encrypt(__s38param0));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AccountCookie.prototype, "sessionType", {
    get: function () {
      return this.getAttributeAsNumber(AccountCookie.ATTRIBUTE_SESSION_TYPE);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AccountCookie.prototype, "sessionCount", {
    get: function () {
      return this.getAttributeAsNumber(AccountCookie.ATTRIBUTE_SESSION_COUNT);
    },
    enumerable: true,
    configurable: true
  });
  AccountCookie.NAME = "GGSAccount";
  AccountCookie.ATTRIBUTE_ACCOUNT_ID = "accountId";
  AccountCookie.ATTRIBUTE_AGE_GATE_DATA = "agd";
  AccountCookie.ATTRIBUTE_CDN = "cdn";
  AccountCookie.ATTRIBUTE_SESSION_TYPE = "sessionType";
  AccountCookie.ATTRIBUTE_SESSION_COUNT = "sessionCount";
  AccountCookie.ATTRIBUTES = [AccountCookie.ATTRIBUTE_ACCOUNT_ID, AccountCookie.ATTRIBUTE_AGE_GATE_DATA, AccountCookie.ATTRIBUTE_CDN, AccountCookie.ATTRIBUTE_SESSION_TYPE, AccountCookie.ATTRIBUTE_SESSION_COUNT];
  return AccountCookie;
}(__dep_class_AbstractCookie.AbstractCookie);
exports.AccountCookie = __s0local0;
