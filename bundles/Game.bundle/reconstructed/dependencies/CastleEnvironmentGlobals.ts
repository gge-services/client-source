import { AgeCheck } from "../../../ggs.dll/reconstructed/exports/AgeCheck";
import { BasicConstants } from "../../../ggs.dll/reconstructed/exports/BasicConstants";
import { BasicEnvironmentGlobals } from "../../../ggs.dll/reconstructed/exports/BasicEnvironmentGlobals";
import { CastleVersionInformation } from "./CastleVersionInformation";
import { IdentitiyManagementLicenseTableRegistrationVO } from "../../../ggs.dll/reconstructed/exports/IdentitiyManagementLicenseTableRegistrationVO";
export class CastleEnvironmentGlobals extends BasicEnvironmentGlobals {
  _invite_refer_method: any;
  _inviterCode: any;
  _isCrossplay: any;
  _isOnAllianceBattleGroundServer: any;
  _isOnTemporaryServer: any;
  _isSpecialServerConnectStarted: any;
  _isTemporaryServerTestRun: any;
  _lastExternalClip: any;
  _lastShownDialog: any;
  _lastUsedCommandName: any;
  _originalInstanceVOBeforeSpecialServer: any;
  _specialServer: any;
  static _firstLoaderURL: any;

  constructor() {
    super();
    this._isOnTemporaryServer = false;
    this._isOnAllianceBattleGroundServer = false;
    this._isTemporaryServerTestRun = false;
    this._isCrossplay = false;
    this._isSpecialServerConnectStarted = false;
  }
  get gameId() {
    if (this.isClosedBeta) {
      return 39;
    } else {
      return 12;
    }
  }
  set gameId(value) {
    super.gameId = value;
  }
  get gameTitle() {
    return "Castle";
  }
  set gameTitle(value) {
    super.gameTitle = value;
  }
  get currentGameTitle() {
    return "Goodgame Empire";
  }
  set currentGameTitle(value) {
    super.currentGameTitle = value;
  }
  get versionDateGame() {
    return CastleVersionInformation.versionInstance.buildNumberGame;
  }
  set versionDateGame(value) {
    super.versionDateGame = value;
  }
  get numOfItemLibs() {
    return 0;
  }
  set numOfItemLibs(value) {
    super.numOfItemLibs = value;
  }
  get analyticsTrackingPath() {
    return "/goodgameCastle";
  }
  set analyticsTrackingPath(value) {
    super.analyticsTrackingPath = value;
  }
  get useAutoLogin() {
    return true;
  }
  set useAutoLogin(value) {
    super.useAutoLogin = value;
  }
  get isLoggingActive() {
    return true;
  }
  set isLoggingActive(value) {
    super.isLoggingActive = value;
  }
  get useABTest() {
    return false;
  }
  set useABTest(value) {
    super.useABTest = value;
  }
  get showLoadingText() {
    return true;
  }
  set showLoadingText(value) {
    super.showLoadingText = value;
  }
  get useVersionedFontSWF() {
    return false;
  }
  set useVersionedFontSWF(value) {
    super.useVersionedFontSWF = value;
  }
  get useLegacyFontManagement() {
    return false;
  }
  set useLegacyFontManagement(value) {
    super.useLegacyFontManagement = value;
  }
  get useShortPaymentHashValidity() {
    return true;
  }
  set useShortPaymentHashValidity(value) {
    super.useShortPaymentHashValidity = value;
  }
  get versionInformation() {
    return CastleVersionInformation.versionInstance;
  }
  set versionInformation(value) {
    super.versionInformation = value;
  }
  get fractionalDigits() {
    return 2;
  }
  set fractionalDigits(value) {
    super.fractionalDigits = value;
  }
  get trailingZeros() {
    return false;
  }
  set trailingZeros(value) {
    super.trailingZeros = value;
  }
  get identityManagmentLicenseVO() {
    var __s71local0 = new IdentitiyManagementLicenseTableRegistrationVO();
    __s71local0.gameTitle = "굿게임엠파이어(Goodgame Empire)";
    __s71local0.license_cc_np = "CC-NP-131015-013";
    __s71local0.ageRating = AgeCheck.OverTwelve;
    __s71local0.gameRatingBoardConcessionDate = new Date(2013, 10, 15);
    __s71local0.gameRatingBoardConcessionId = -9999;
    __s71local0.productionDate = new Date(2013, 6, 1);
    return __s71local0;
  }
  set identityManagmentLicenseVO(value) {
    super.identityManagmentLicenseVO = value;
  }
  get sendUserActivityStatusToTheServer() {
    return true;
  }
  set sendUserActivityStatusToTheServer(value) {
    super.sendUserActivityStatusToTheServer = value;
  }
  get useLegacySocialRegistration() {
    return false;
  }
  set useLegacySocialRegistration(value) {
    super.useLegacySocialRegistration = value;
  }
  get ageGateFeatureIsActive() {
    return false;
  }
  set ageGateFeatureIsActive(value) {
    super.ageGateFeatureIsActive = value;
  }
  get storeId() {
    var __s87local0 = this.urlVariables.nativeStore;
    if (__s87local0 == CastleEnvironmentGlobals.NATIVE_STORE_STEAM) {
      return CastleEnvironmentGlobals.STORE_ID_STEAM;
    } else if (__s87local0 == BasicConstants.NATIVE_STORE_MICROSOFT) {
      return BasicConstants.STORE_ID_MS;
    } else {
      return BasicConstants.STORE_ID_WEB;
    }
  }
  get platformId() {
    var __s92local0 = this.urlVariables.nativeStore;
    if (__s92local0 == CastleEnvironmentGlobals.NATIVE_STORE_STEAM) {
      return CastleEnvironmentGlobals.PLATFORM_ID_STEAM;
    } else if (__s92local0 == BasicConstants.NATIVE_STORE_MICROSOFT) {
      return BasicConstants.PLATFORM_ID_MS;
    } else {
      return BasicConstants.PLATFORM_ID_WEB;
    }
  }
  get inviterCode() {
    return this._inviterCode;
  }
  set inviterCode(value) {
    this._inviterCode = value;
  }
  get invite_refer_method() {
    return this._invite_refer_method;
  }
  set invite_refer_method(value) {
    this._invite_refer_method = value;
  }
  get localizeReplacements() {
    return true;
  }
  set localizeReplacements(value) {
    super.localizeReplacements = value;
  }
  getStillfrontPolicyLanguage() {
    var __s109local0 = this.currentCountryLanguageCode;
    if (__s109local0) {
      if ((__s109local0 = __s109local0.toLowerCase()).indexOf("zh") == 0) {
        return "zh";
      } else if (CastleEnvironmentGlobals.STILLFRONT_POLICY_LANGUAGES.indexOf(__s109local0) != -1) {
        return __s109local0;
      } else {
        return "en";
      }
    } else {
      return "en";
    }
  }
  get urlAGB() {
    return CastleEnvironmentGlobals.STILLFRONT_POLICIES_BASE + this.getStillfrontPolicyLanguage() + "/terms/";
  }
  get urlPolicy() {
    return CastleEnvironmentGlobals.STILLFRONT_POLICIES_BASE + this.getStillfrontPolicyLanguage() + "/privacy/";
  }
  get isClosedBeta() {
    return !!CastleEnvironmentGlobals._firstLoaderURL && !!(CastleEnvironmentGlobals._firstLoaderURL.length > 0) && (CastleEnvironmentGlobals._firstLoaderURL.indexOf("test-sns.goodgamestudios.com/rendered/www/39/") != -1 || CastleEnvironmentGlobals._firstLoaderURL.indexOf("-closedbeta") != -1 || CastleEnvironmentGlobals._firstLoaderURL.indexOf("empireclosedbeta.goodgamestudios.com/") != -1) || !!this.referrer && !!(this.referrer.length > 0) && (this.referrer.indexOf("-closedbeta") != -1 || this.referrer.indexOf("empireclosedbeta") != -1) || !!this.baseURL && !!(this.baseURL.length > 0) && this.baseURL.indexOf("-closedbeta") != -1;
  }
  get cacheBreakerUrl() {
    if (this.isClosedBeta) {
      return BasicConstants.DOMAIN_PROTOCOL + "://" + this.cachebreakerSubDomain + "." + this.domain + "/loader-closedbeta/" + this.gameDir + "/" + this.gameTitle + "CacheBreakerSwf.swf";
    }
    return super.cacheBreakerUrl;
  }
  set cacheBreakerUrl(value) {
    super.cacheBreakerUrl = value;
  }
  get firstLoaderURL() {
    return super.firstLoaderURL;
  }
  set firstLoaderURL(value) {
    CastleEnvironmentGlobals._firstLoaderURL = value;
    super.firstLoaderURL = value;
  }
  get blueboxPort() {
    return 443;
  }
  set blueboxPort(value) {
    super.blueboxPort = value;
  }
  get isOnTemporaryServer() {
    return this._isOnTemporaryServer;
  }
  set isOnTemporaryServer(value) {
    this._isOnTemporaryServer = value;
  }
  get specialServer() {
    return this._specialServer;
  }
  set specialServer(value) {
    this._specialServer = value;
  }
  get lastShownDialog() {
    return this._lastShownDialog;
  }
  set lastShownDialog(value) {
    this._lastShownDialog = value;
  }
  get lastUsedCommandName() {
    return this._lastUsedCommandName;
  }
  set lastUsedCommandName(value) {
    this._lastUsedCommandName = value;
  }
  get lastExternalClip() {
    return this._lastExternalClip;
  }
  set lastExternalClip(value) {
    this._lastExternalClip = value;
  }
  get isTemporaryServerTestRun() {
    return this._isTemporaryServerTestRun;
  }
  set isTemporaryServerTestRun(value) {
    this._isTemporaryServerTestRun = value;
  }
  get originalInstanceVOBeforeSpecialServer() {
    return this._originalInstanceVOBeforeSpecialServer;
  }
  set originalInstanceVOBeforeSpecialServer(value) {
    this._originalInstanceVOBeforeSpecialServer = value;
  }
  get isOnAllianceBattleGroundServer() {
    return this._isOnAllianceBattleGroundServer;
  }
  set isOnAllianceBattleGroundServer(value) {
    this._isOnAllianceBattleGroundServer = value;
  }
  get isSpecialServerConnectStarted() {
    return this._isSpecialServerConnectStarted;
  }
  set isSpecialServerConnectStarted(value) {
    this._isSpecialServerConnectStarted = value;
  }
  get isOnSpecialServer() {
    return this.isOnTemporaryServer || this.isOnAllianceBattleGroundServer;
  }
  get isCrossplay() {
    return this._isCrossplay;
  }
  set isCrossplay(value) {
    this._isCrossplay = value;
  }
  static NATIVE_STORE_STEAM = "steam";
  static STORE_ID_STEAM = 12;
  static PLATFORM_ID_STEAM = 5;
  static STILLFRONT_POLICIES_BASE = "https://policies.stillfront.com/stillfront-germany/";
  static STILLFRONT_POLICY_LANGUAGES = ["ar", "bg", "cs", "da", "de", "el", "en", "es", "fi", "fr", "hu", "it", "ja", "ko", "nl", "no", "pl", "pt", "ro", "ru", "sk", "sv", "tr", "zh"];
}
