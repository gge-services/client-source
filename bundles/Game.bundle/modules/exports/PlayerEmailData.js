Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function PlayerEmailData() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._newEmail = "";
    __s3local0._pending_mail_change_status = 0;
    __s3local0._mail_change_timestamp = 0;
    __s3local0._hasNewsletterSubscription = false;
    __s3local0._gotNewsletterReward = false;
    __s3local0._remainingTimeTillAutomaticChangeTimeStamp = -1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PlayerEmailData, __s1param0);
  PlayerEmailData.prototype.parse_MNS = function (__s5param0) {
    this._newEmail = __s5param0.PMA;
    this._pending_mail_change_status = __s5param0.PMCS;
    this._mail_change_timestamp = parseFloat(__s5param0.T);
    this._hasNewsletterSubscription = __s5param0.SFN == 1;
    this._gotNewsletterReward = __s5param0.CGNR == 0;
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.MNS_ARRIVED, [this._hasNewsletterSubscription, this._gotNewsletterReward]));
  };
  PlayerEmailData.prototype.setTimestamp = function (__s7param0) {
    this._mail_change_timestamp = __s7param0;
  };
  Object.defineProperty(PlayerEmailData.prototype, "isMailState_Unregistered", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.email.length <= 0 && !__dep_export_CastleModel.CastleModel.userData.hasValidatedEmail;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerEmailData.prototype, "isMailState_Unverified", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.email.length > 0 && !__dep_export_CastleModel.CastleModel.userData.hasValidatedEmail;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerEmailData.prototype, "isMailState_Verified", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.email.length > 0 && __dep_export_CastleModel.CastleModel.userData.hasValidatedEmail;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerEmailData.prototype, "isMailState_MailChangePending_ToOldMail", {
    get: function () {
      return this.isMailState_Verified && this._newEmail != "" && this._pending_mail_change_status == __dep_exact_26a421b704832cff.PlayerConst.MAIL_CHANGE_FIRST_EXPIRATION_TIME_STATE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerEmailData.prototype, "isMailState_MailChangePending_ToNewMail", {
    get: function () {
      return this.isMailState_Verified && this._newEmail != "" && this._pending_mail_change_status == __dep_exact_26a421b704832cff.PlayerConst.MAIL_CHANGE_SECOND_EXPIRATION_TIME_STATE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerEmailData.prototype, "isMailState_MailChangePending", {
    get: function () {
      return this.isMailState_MailChangePending_ToNewMail || this.isMailState_MailChangePending_ToOldMail;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerEmailData.prototype, "newEmail", {
    get: function () {
      return this._newEmail;
    },
    set: function (__s23param0) {
      this._newEmail = __s23param0;
    },
    enumerable: true,
    configurable: true
  });
  PlayerEmailData.prototype.getDateForAutoEmailChange = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.datetime(new Date(this._mail_change_timestamp * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC), __dep_exact_92d05af59ee2ff30.DateTimeStyle.LONG, __dep_exact_92d05af59ee2ff30.DateTimeStyle.NONE);
  };
  PlayerEmailData.prototype.getRemainingTimeForAutoChange = function () {
    return __dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeString(this._mail_change_timestamp * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC - __dep_export_CachedTimer.CachedTimer.getCachedTimer());
  };
  Object.defineProperty(PlayerEmailData.prototype, "pending_mail_change_status", {
    get: function () {
      return this._pending_mail_change_status;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerEmailData.prototype, "mail_change_timestamp", {
    get: function () {
      return this._mail_change_timestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerEmailData.prototype, "api_unavailable_in_process", {
    get: function () {
      return this._pending_mail_change_status == __dep_exact_26a421b704832cff.PlayerConst.MAIL_CHANGE_STARTED || this._pending_mail_change_status == __dep_exact_26a421b704832cff.PlayerConst.MAIL_CHANGE_CANCEL_STARTED;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerEmailData.prototype, "hasNewsletterSubscription", {
    get: function () {
      return this._hasNewsletterSubscription;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerEmailData.prototype, "gotNewsletterReward", {
    get: function () {
      return this._gotNewsletterReward;
    },
    enumerable: true,
    configurable: true
  });
  PlayerEmailData.prototype.getDateForAutomaticEmailChange = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.datetime(new Date(Date.now() + this._remainingTimeTillAutomaticChangeTimeStamp * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC), __dep_exact_92d05af59ee2ff30.DateTimeStyle.LONG, __dep_exact_92d05af59ee2ff30.DateTimeStyle.NONE);
  };
  PlayerEmailData.EMAIL_MAX_LENGTH = 254;
  return PlayerEmailData;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.PlayerEmailData = __s0local0;
