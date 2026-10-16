Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleSharedObject() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSharedObject, __s1param0);
  Object.defineProperty(CastleSharedObject.prototype, "env", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f.BasicSharedObject.prototype, "env").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleSharedObject.prototype.readQuality = function () {
    if (this.networkCookie.hasAttribute("qualitySetting")) {
      return __dep_exact_f855840627e6e145.int(this.networkCookie.getAttributeAsInt("qualitySetting"));
    } else {
      return 0;
    }
  };
  CastleSharedObject.prototype.saveQuality = function (__s13param0) {
    this.networkCookie.setAttribute("qualitySetting", __s13param0);
  };
  CastleSharedObject.prototype.isAnimationSet = function () {
    return this.networkCookie.hasAttribute("animation");
  };
  CastleSharedObject.prototype.readAnimation = function () {
    return !this.isAnimationSet() || this.networkCookie.getAttributeAsInt("animation") == 1;
  };
  CastleSharedObject.prototype.saveAnimation = function (__s19param0) {
    this.networkCookie.setAttribute("animation", __s19param0 ? 1 : 2);
  };
  CastleSharedObject.prototype.readQuestReminder = function () {
    return !this.networkCookie.hasAttribute("questReminder") || this.networkCookie.getAttributeAsInt("questReminder") == 1;
  };
  CastleSharedObject.prototype.readWorlmapMovementsVisibility = function () {
    return !this.networkCookie.hasAttribute("worlmapMovementsVisibility") || this.networkCookie.getAttributeAsInt("worlmapMovementsVisibility") == 1;
  };
  CastleSharedObject.prototype.readWorlmapAREMovementsVisibility = function () {
    return !this.networkCookie.hasAttribute("worlmapAREMovementsVisibility") || this.networkCookie.getAttributeAsInt("worlmapAREMovementsVisibility") == 1;
  };
  CastleSharedObject.prototype.readMiniChatVisibility = function () {
    return !this.networkCookie.hasAttribute("miniChatVisibility") || this.networkCookie.getAttributeAsInt("miniChatVisibility") == 1;
  };
  CastleSharedObject.prototype.saveQuestReminder = function (__s29param0) {
    this.networkCookie.setAttribute("questReminder", __s29param0 ? 1 : 2);
  };
  CastleSharedObject.prototype.saveWorlmapMovementsVisibility = function (__s31param0) {
    this.networkCookie.setAttribute("worlmapMovementsVisibility", __s31param0 ? 1 : 2);
  };
  CastleSharedObject.prototype.saveWorlmapAREMovementsVisibility = function (__s33param0) {
    this.networkCookie.setAttribute("worlmapAREMovementsVisibility", __s33param0 ? 1 : 2);
  };
  CastleSharedObject.prototype.saveMiniChatVisibility = function (__s35param0) {
    this.networkCookie.setAttribute("miniChatVisibility", __s35param0 ? 1 : 2);
  };
  CastleSharedObject.prototype.saveTreasuremapPlayerPosition = function (__s37param0, __s37param1, __s37param2) {
    this.networkCookie.setAttribute(__s37param2 + "treasuremapPosition" + __s37param1, __s37param0);
  };
  CastleSharedObject.prototype.saveMoveArrowProgress = function (__s39param0, __s39param1, __s39param2) {
    this.networkCookie.setAttribute(__s39param2 + "treasuremapArrowProgress" + __s39param1, __s39param0);
  };
  CastleSharedObject.prototype.readMoveArrowProgress = function (__s41param0, __s41param1) {
    if (this.networkCookie.hasAttribute(__s41param1 + "treasuremapArrowProgress" + __s41param0)) {
      return __dep_exact_f855840627e6e145.int(this.networkCookie.getAttributeAsInt(__s41param1 + "treasuremapArrowProgress" + __s41param0));
    } else {
      return -1;
    }
  };
  CastleSharedObject.prototype.saveAddPipesOnEndOfText = function (__s45param0) {
    this.networkCookie.setAttribute("addPipesOnEndOfText", __s45param0);
    __dep_exact_92d05af59ee2ff30.Localization.usePipe = __s45param0;
  };
  CastleSharedObject.prototype.readAddPipesOnEndOfText = function () {
    return !!this.networkCookie.hasAttribute("addPipesOnEndOfText") && this.networkCookie.getAttributeAsInt("addPipesOnEndOfText") > 0;
  };
  CastleSharedObject.prototype.saveAddQuestIDs = function (__s49param0) {
    this.networkCookie.setAttribute("showQuestIDs", __s49param0 ? 1 : 0);
  };
  CastleSharedObject.prototype.readAddQuestIDs = function () {
    return !!this.networkCookie.hasAttribute("showQuestIDs") && this.networkCookie.getAttributeAsInt("showQuestIDs") > 0;
  };
  CastleSharedObject.prototype.saveOpenRewardHubAtStart = function (__s53param0) {
    this.networkCookie.setAttribute("openRewardHubAtStart", __s53param0 ? 1 : 0);
  };
  CastleSharedObject.prototype.readOpenRewardHubAtStart = function () {
    return !!this.networkCookie.hasAttribute("openRewardHubAtStart") && this.networkCookie.getAttributeAsInt("openRewardHubAtStart") > 0;
  };
  CastleSharedObject.prototype.saveAlertFrameVisibility = function (__s57param0) {
    this.networkCookie.setAttribute("alertFrameVisibility", __s57param0 ? 1 : 2);
  };
  CastleSharedObject.prototype.readAlertFrameVisibility = function () {
    return !this.networkCookie.hasAttribute("alertFrameVisibility") || this.networkCookie.getAttributeAsInt("alertFrameVisibility") == 1;
  };
  CastleSharedObject.prototype.saveHomeScreenVisibility = function (__s61param0) {
    this.networkCookie.setAttribute("homeScreenVisibility", __s61param0 ? 1 : 2);
  };
  CastleSharedObject.prototype.readHomeScreenVisibility = function () {
    return !this.networkCookie.hasAttribute("homeScreenVisibility") || this.networkCookie.getAttributeAsInt("homeScreenVisibility") == 1;
  };
  CastleSharedObject.prototype.saveHomeScreenID = function (__s65param0) {
    this.networkCookie.setAttribute("homeScreenID", __s65param0);
  };
  CastleSharedObject.prototype.readHomeScreenID = function () {
    if (this.networkCookie.hasAttribute("homeScreenID")) {
      return __dep_exact_f855840627e6e145.int(this.networkCookie.getAttributeAsInt("homeScreenID"));
    } else {
      return -1;
    }
  };
  CastleSharedObject.prototype.readShowSamuraiInvasionGamblingInstructions = function () {
    return !this.networkCookie.hasAttribute("showSamuraiInvasionGamblingInstructions") || this.networkCookie.getAttributeAsInt("showSamuraiInvasionGamblingInstructions") > 0;
  };
  CastleSharedObject.prototype.saveShowSamuraiInvasionGamblingInstructions = function (__s73param0) {
    this.networkCookie.setAttribute("showSamuraiInvasionGamblingInstructions", __s73param0 ? 1 : 0);
  };
  CastleSharedObject.prototype.saveFacebookID = function (__s75param0) {
    this.networkCookie.setAttribute(__dep_exact_9e901e8e2483a22f.NetworkCookie.ATTRIBUTE_FACEBOOK_UID, __s75param0);
  };
  CastleSharedObject.prototype.getFacebookID = function () {
    if (this.networkCookie.hasAttribute(__dep_exact_9e901e8e2483a22f.NetworkCookie.ATTRIBUTE_FACEBOOK_UID)) {
      return this.networkCookie.getAttributeAsString(__dep_exact_9e901e8e2483a22f.NetworkCookie.ATTRIBUTE_FACEBOOK_UID);
    } else {
      return null;
    }
  };
  CastleSharedObject.prototype.saveAttackDialogSelections = function (__s81param0) {
    this.networkCookie.setAttribute("attackDialogSelections", __s81param0);
  };
  CastleSharedObject.prototype.getAttackDialogSelections = function () {
    return this.networkCookie.getAttribute("attackDialogSelections");
  };
  CastleSharedObject.prototype.saveIsRedirectedWithFacebook = function (__s85param0) {
    this.networkCookie.setAttribute("IsRedirectedWithFacebook", __s85param0 ? 1 : 0);
  };
  CastleSharedObject.prototype.getIsRedirectedWithFacebook = function () {
    return !!this.networkCookie.hasAttribute("IsRedirectedWithFacebook") && !!this.networkCookie.getAttributeAsBoolean("IsRedirectedWithFacebook");
  };
  CastleSharedObject.prototype.saveUsername = function (__s89param0) {
    this.networkCookie.username = __s89param0;
  };
  CastleSharedObject.prototype.deleteLoginData = function () {
    this.saveFacebookID("");
    this.networkCookie.deleteLoginData();
  };
  CastleSharedObject.prototype.saveEventBookmark = function (__s93param0) {
    this.networkCookie.setAttribute("eventBookmark", __s93param0);
  };
  CastleSharedObject.prototype.readEventBookmark = function () {
    if (this.networkCookie.hasAttribute("eventBookmark")) {
      return this.networkCookie.getAttribute("eventBookmark");
    } else {
      return {
        buttonName: "",
        eventEndTimestamp: 0
      };
    }
  };
  CastleSharedObject.prototype.saveEventDifficultyForEvent = function (__s99param0, __s99param1, __s99param2) {
    this.networkCookie.setAttribute(__s99param2 + "difficulty" + __s99param0, __s99param1);
  };
  CastleSharedObject.prototype.readEventDifficultyForEvent = function (__s101param0, __s101param1) {
    if (this.networkCookie.hasAttribute(__s101param1 + "difficulty" + __s101param0)) {
      return this.networkCookie.getAttribute(__s101param1 + "difficulty" + __s101param0);
    } else {
      return 0;
    }
  };
  CastleSharedObject.prototype.savePlayerValue = function (__s105param0, __s105param1, __s105param2 = -1) {
    var __s105local0 = {
      playerID: __dep_export_CastleModel.CastleModel.userData.playerID,
      value: __s105param1,
      expirationTimeStamp: __s105param2
    };
    this.networkCookie.setAttribute(__s105param0, __s105local0);
  };
  CastleSharedObject.prototype.readPlayerValue = function (__s107param0) {
    var __s107local0;
    if (this.networkCookie.hasAttribute(__s107param0)) {
      __s107local0 = this.networkCookie.getAttribute(__s107param0);
    }
    if (__s107local0 && __s107local0.playerID == __dep_export_CastleModel.CastleModel.userData.playerID && (!__s107local0.expirationTimeStamp || __s107local0.expirationTimeStamp == -1 || __s107local0.expirationTimeStamp > __dep_export_CachedTimer.CachedTimer.getCachedTimer())) {
      return __s107local0.value;
    } else {
      return 0;
    }
  };
  CastleSharedObject.prototype.saveShoppingCartWarning = function (__s112param0, __s112param1) {
    this.networkCookie.setAttribute("showShoppingCartWarning", __s112param0 ? 1 : 0);
    this.networkCookie.setAttribute("showShoppingCartWarningEndTimeStamp", __s112param1);
  };
  CastleSharedObject.prototype.readShoppingCartWarning = function () {
    var __s114local0 = 0;
    if (this.networkCookie.hasAttribute("showShoppingCartWarningEndTimeStamp")) {
      __s114local0 = this.networkCookie.getAttributeAsInt("showShoppingCartWarningEndTimeStamp");
    }
    var __s114local1 = __s114local0 <= 0 || __s114local0 < __dep_export_CachedTimer.CachedTimer.getCachedTimer();
    return !this.networkCookie.hasAttribute("showShoppingCartWarning") || __s114local1 || this.networkCookie.getAttributeAsInt("showShoppingCartWarning") > 0;
  };
  return CastleSharedObject;
}(__dep_exact_9e901e8e2483a22f.BasicSharedObject);
exports.CastleSharedObject = __s0local0;
