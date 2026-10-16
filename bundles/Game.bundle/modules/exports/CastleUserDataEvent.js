Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleUserDataEvent(__s3param0, __s3param1 = null, __s3param2 = false, __s3param3 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this;
    __s3local0.params = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleUserDataEvent, __s1param0);
  CastleUserDataEvent.CHANGE_USERDATA = "changeUserdata";
  CastleUserDataEvent.CHANGE_USER_AQUAPOINTS = "changeUserAquaPoints";
  CastleUserDataEvent.CHANGE_USER_CURRENCY = "changeUserCurrency";
  CastleUserDataEvent.CHANGE_USER_AVATAR = "changeUserAvatar";
  CastleUserDataEvent.CHANGE_USER_MIGHT = "changeUserMight";
  CastleUserDataEvent.CHANGE_CASTLELIST = "changeCastleList";
  CastleUserDataEvent.CHANGE_KINGSTOWERLIST = "changeKingstowerList";
  CastleUserDataEvent.CHANGE_MONUMENTLIST = "changeMonumentList";
  CastleUserDataEvent.CHANGE_LABORATORYLIST = "changeLaboratoryList";
  CastleUserDataEvent.CHANGE_VILLAGELIST = "changeVillageList";
  CastleUserDataEvent.CHANGE_PAYUSER_INFO = "changePayuserInfo";
  CastleUserDataEvent.CHANGE_USER_LIFETIME_SPENT = "changeUserLifeTimeSpent";
  CastleUserDataEvent.CHANGE_USER_NAME = "changeUserName";
  CastleUserDataEvent.LEVEL_UP = "userdatalevelUp";
  CastleUserDataEvent.VALIDATED_EMAIL = "Validatedemail";
  CastleUserDataEvent.ALLIANCE_STATUS_CHANGED = "allianceStatusChanged";
  CastleUserDataEvent.GPI_UPDATE = "GPI_UPDATE";
  CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED = "onSpecialCurrenciesUpdated";
  CastleUserDataEvent.NOOB_PROTECTION = "noobprotection";
  CastleUserDataEvent.NOOBTIME_FINISHED = "noobtimefinished";
  CastleUserDataEvent.PEACE_PROTECTION = "peaceprotection";
  CastleUserDataEvent.PEACETIME_FINISHED = "peacetimefinished";
  CastleUserDataEvent.ATTACKPROTECTION_UPDATED = "attackprotectionupdated";
  CastleUserDataEvent.RELOCATE_INFO_UPDATED = "relocateinfoupdated";
  CastleUserDataEvent.MAIL_VERIFICATION_SENT = "mailVerifyComplete";
  CastleUserDataEvent.PREMIUM_FLAG_CHANGED = "premiumFlagChanged";
  CastleUserDataEvent.FACEBOOK_DATA_UPDATED = "facebookDataUpdated";
  CastleUserDataEvent.DOWNTIME_STATUS_UPDATED = "";
  CastleUserDataEvent.CAP_TOOL_NOTIFICATIONS_UPDATED = "capToolNotificationsUpdated";
  CastleUserDataEvent.FEATURE_FLAGS_UPDATED = "featureFlagsUpdated";
  return CastleUserDataEvent;
}(createjs.Event);
exports.CastleUserDataEvent = __s0local0;
