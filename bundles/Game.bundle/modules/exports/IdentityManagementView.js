Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_5 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_6 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_7 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastlePanel = require("gge-module:export_CastlePanel");
var __dep_export_StartscreenHelper = require("gge-module:export_StartscreenHelper");
var __dep_export_Siren24ViewUtil = require("gge-module:export_Siren24ViewUtil");
var __s0local0 = createjs.Container;
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __s0local1 = function (__s1param0) {
  function IdentityManagementView() {
    var __s3local0 = this;
    __s3local0._ingameShowIcons = false;
    __s3local0._ingameShowNotice = false;
    __s3local0._ingameShowTeenageProtectionNotice = false;
    __s3local0._outgameShow = false;
    __s3local0._showTimer = false;
    __s3local0._shutDownTimeMC = new Library.CastleInterfaceElements.InfoTooltip_Building();
    CONSTRUCTOR_HACK;
    __s3local0 = __s1param0.call(this, new __s0local0()) || this;
    __dep_export_Siren24ViewUtil.Siren24ViewUtil.loadKoreanAssets(__s3local0.bindFunction(__s3local0.onKoreanAssetsLoaded));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IdentityManagementView, __s1param0);
  IdentityManagementView.prototype.onKoreanAssetsLoaded = function () {
    __dep_exact_9e901e8e2483a22f.BasicController.getInstance().addEventListener(__dep_exact_9e901e8e2483a22f_3.IdentityManagementEvent.ID_MANAGEMENT_ACTIVE, this.bindFunction(this.onIdManagementActivated));
    __dep_exact_9e901e8e2483a22f.BasicController.getInstance().addEventListener(__dep_exact_9e901e8e2483a22f_3.IdentityManagementEvent.ID_MANAGEMENT_INCTIVE, this.bindFunction(this.onIdManagementDeactivated));
    __dep_exact_9e901e8e2483a22f.BasicController.getInstance().addEventListener(__dep_exact_9e901e8e2483a22f_5.LanguageDataEvent.FONT_LOAD_COMPLETE, this.bindFunction(this.updateElementsOnFontsLoaded));
    __dep_exact_9e901e8e2483a22f.BasicController.getInstance().addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    __dep_exact_9e901e8e2483a22f.BasicController.getInstance().addEventListener(__dep_exact_9e901e8e2483a22f_4.IdentityManagementLicenseEvent.SHOW_LICENSE_INITIAL_AGE_RATING_TEXT, this.bindFunction(this.onIngameInitialAgeRating));
    __dep_exact_9e901e8e2483a22f.BasicController.getInstance().addEventListener(__dep_exact_9e901e8e2483a22f_4.IdentityManagementLicenseEvent.SHOW_LICENSE_LOGOS, this.bindFunction(this.onShowIngameLicense));
    __dep_exact_9e901e8e2483a22f.BasicController.getInstance().addEventListener(__dep_exact_9e901e8e2483a22f_4.IdentityManagementLicenseEvent.HIDE_LICENSE, this.bindFunction(this.onHideIngameLicense));
    __dep_exact_9e901e8e2483a22f.BasicController.getInstance().addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.CPS_ARRIVED, this.bindFunction(this.onCPSArrived));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.ON_RESIZE, this.bindFunction(this.onStageResize));
    this.initialize();
  };
  IdentityManagementView.prototype.onCPSArrived = function (__s7param0) {
    if (__s7param0.params) {
      this._showTimer = true;
      this._shutDownTimer = __s7param0.params[0];
      this._shutDownTimer.showCountDownTimer.add(this.bindFunction(this.onTimerTick));
      this._shutDownTimer.hideCountDownTimer.add(this.bindFunction(this.onTimerComplete));
      this.panelDisp.addChild(this._shutDownTimeMC);
      this.updatePosition();
    }
  };
  IdentityManagementView.prototype.onTimerComplete = function () {
    this._showTimer = false;
    this.updatePosition();
  };
  IdentityManagementView.prototype.onTimerTick = function () {
    this.textFieldManager.registerTextField(this._shutDownTimeMC.txt_line1, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_exact_9e901e8e2483a22f_6.TimeStringHelper.getShortTimeString((__dep_exact_9e901e8e2483a22f_2.IdentityManagementConstants.SHUTDOWN_CONTROL_TIMER - this._shutDownTimer.shutDownTimer.currentCount) * 1000)));
  };
  IdentityManagementView.prototype.onHideIngameLicense = function (__s14param0) {
    this._ingameShowIcons = false;
    this._ingameShowTeenageProtectionNotice = false;
    this._ingameShowNotice = false;
    this.updatePosition();
    __dep_export_CastleModel.CastleModel.koreanData.koreaHoursPlayed++;
  };
  IdentityManagementView.prototype.onShowIngameLicense = function (__s16param0) {
    this._ingameShowIcons = true;
    this._ingameShowTeenageProtectionNotice = true;
    this.updatePosition();
  };
  IdentityManagementView.prototype.onIngameInitialAgeRating = function (__s18param0) {
    this._ingameShowIcons = true;
    this._ingameShowNotice = true;
    this.updatePosition();
  };
  IdentityManagementView.prototype.onChangeLayoutState = function (__s20param0) {
    if (this.layoutManager) {
      this.layoutManager.switchKoreanLayerToFront(this.layoutManager.isIngameState);
    }
    this._outgameShow = this.env.isIdentityManagementActive && this.layoutManager != null && !this.layoutManager.isIngameState;
    this._showTimer = this._showTimer && !!this.layoutManager && this.layoutManager.isIngameState;
    this.updatePosition();
  };
  IdentityManagementView.prototype.initialize = function () {
    if (this.env.isIdentityManagementActive) {
      this.onIdManagementActivated(null);
    } else {
      this.onIdManagementDeactivated(null);
    }
  };
  IdentityManagementView.prototype.onCountryInstanceMappingProcessComplete = function (__s27param0) {
    this.createLogos();
    this.updatePosition();
  };
  IdentityManagementView.prototype.createLogos = function () {
    try {
      this._ageRatingLogo ||= this._idManagementBtn.addChild(__dep_export_Siren24ViewUtil.Siren24ViewUtil.ageRatingLogo);
      this._contentDesriptorLogo ||= this._idManagementBtn.addChild(__dep_export_Siren24ViewUtil.Siren24ViewUtil.contentDescriptorLogo);
      if (!this._licenceTable) {
        this.updateLicenseTable();
      }
      if (!this._ingameNotice) {
        this._ingameNotice = new Library.CastleInterfaceElements.KoreanIdentityNotify();
        this.textFieldManager.registerTextField(this._ingameNotice.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(IdentityManagementView.NOTIFICATION_TEXT_ID));
        this.panelDisp.addChild(this._ingameNotice);
      }
      if (!this._teenagerProtectionNotice) {
        this._teenagerProtectionNotice = new Library.CastleInterfaceElements.KoreanTeengarProtectionNotification();
        this._itxtTeenProtection = this.textFieldManager.registerTextField(this._teenagerProtectionNotice.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("-"));
        this._teenagerProtectionNotice.visible = false;
        this.panelDisp.addChild(this._teenagerProtectionNotice);
      }
    } catch (__s35local0) {
      __dep_exact_9e901e8e2483a22f_7.error("Logos not available yet");
    }
  };
  IdentityManagementView.prototype.updateLicenseTable = function () {
    var __s37local0;
    if (window.gamestage.stageHeight <= IdentityManagementView.LOW_GAME_HEIGHT) {
      this._isWideScreen = true;
      if (this._currentTableType != IdentityManagementView.KOREAN_TABLE_COMPACT && window.gamestage.stageWidth > IdentityManagementView.GAME_WIDTH_WIDE_SCREEN) {
        this._currentTableType = IdentityManagementView.KOREAN_TABLE_COMPACT;
        __s37local0 = __dep_export_Siren24ViewUtil.Siren24ViewUtil.licenceTable(IdentityManagementView.KOREAN_TABLE_COMPACT);
      } else if (this._currentTableType != IdentityManagementView.KOREAN_TABLE_VERTICAL && window.gamestage.stageWidth <= IdentityManagementView.GAME_WIDTH_WIDE_SCREEN) {
        this._currentTableType = IdentityManagementView.KOREAN_TABLE_VERTICAL;
        __s37local0 = __dep_export_Siren24ViewUtil.Siren24ViewUtil.licenceTable(IdentityManagementView.KOREAN_TABLE_VERTICAL);
      }
    } else if (window.gamestage.stageHeight > IdentityManagementView.LOW_GAME_HEIGHT) {
      this._isWideScreen = false;
      if (this._currentTableType != IdentityManagementView.KOREAN_TABLE_COMPACT && window.gamestage.stageWidth <= IdentityManagementView.GAME_WIDTH_DEFAULT && window.gamestage.stageWidth > IdentityManagementView.GAME_WIDTH_WIDE_SCREEN) {
        this._currentTableType = IdentityManagementView.KOREAN_TABLE_COMPACT;
        __s37local0 = __dep_export_Siren24ViewUtil.Siren24ViewUtil.licenceTable(IdentityManagementView.KOREAN_TABLE_COMPACT);
      } else if (this._currentTableType != IdentityManagementView.KOREAN_TABLE_DEFAULT && window.gamestage.stageWidth > IdentityManagementView.GAME_WIDTH_DEFAULT) {
        this._currentTableType = IdentityManagementView.KOREAN_TABLE_DEFAULT;
        __s37local0 = __dep_export_Siren24ViewUtil.Siren24ViewUtil.licenceTable(IdentityManagementView.KOREAN_TABLE_DEFAULT);
      } else if (this._currentTableType != IdentityManagementView.KOREAN_TABLE_VERTICAL && window.gamestage.stageWidth <= IdentityManagementView.GAME_WIDTH_WIDE_SCREEN) {
        this._currentTableType = IdentityManagementView.KOREAN_TABLE_VERTICAL;
        __s37local0 = __dep_export_Siren24ViewUtil.Siren24ViewUtil.licenceTable(IdentityManagementView.KOREAN_TABLE_VERTICAL);
      }
    }
    if (__s37local0) {
      if (this.panelDisp.table) {
        this.panelDisp.removeChild(this.panelDisp.table);
      }
      this.panelDisp.table = __s37local0;
      this._licenceTable = this.panelDisp.addChild(__s37local0);
      this._licenceTable.x = (this._ageRatingLogo ? this._ageRatingLogo.x : 0) - this._licenceTable.width / 2;
      this._licenceTable.y = this._ageRatingLogo ? this._ageRatingLogo.y : 0;
      this.updatePosition();
    }
  };
  IdentityManagementView.prototype.onStageResize = function (__s48param0) {
    this.updateLicenseTable();
  };
  IdentityManagementView.prototype.onIdManagementDeactivated = function (__s50param0) {
    __dep_exact_9e901e8e2483a22f.BasicController.getInstance().removeEventListener(__dep_exact_9e901e8e2483a22f_1.CountryInstanceMappingEvent.PROCESS_COMPLETE, this.bindFunction(this.onCountryInstanceMappingProcessComplete));
    if (this._idManagementBtn) {
      this._outgameShow = false;
      this.updatePosition();
    }
  };
  IdentityManagementView.prototype.onIdManagementActivated = function (__s53param0) {
    if (this.layoutManager) {
      this.layoutManager.switchKoreanLayerToFront(this.layoutManager.isIngameState);
    }
    if (!this._idManagementBtn) {
      this._idManagementBtn = new __s0local0();
      this.panelDisp.addChild(this._idManagementBtn);
    }
    __dep_exact_9e901e8e2483a22f.BasicController.getInstance().addEventListener(__dep_exact_9e901e8e2483a22f_1.CountryInstanceMappingEvent.PROCESS_COMPLETE, this.bindFunction(this.onCountryInstanceMappingProcessComplete));
    this.createLogos();
    this._outgameShow = true;
    this.updatePosition();
  };
  IdentityManagementView.prototype.updatePosition = function () {
    if (this.panelDisp.stage) {
      if (this.layoutManager.isIngameState) {
        this._shutDownTimeMC.visible = this._showTimer;
        this._shutDownTimeMC.x = this.panelDisp.stage.stageWidth / 2 - this._shutDownTimeMC.width / 2;
        this._shutDownTimeMC.y = this._shutDownTimeMC.height + 20;
        if (this._idManagementBtn) {
          this._idManagementBtn.visible = this._ingameShowIcons;
          if (this._ageRatingLogo) {
            this._ageRatingLogo.x = 0;
          }
          if (this._contentDesriptorLogo) {
            this._contentDesriptorLogo.x = this._ageRatingLogo.width + 10;
            this._contentDesriptorLogo.y = 0;
          }
          this.scaleObjectToPercentOfStage(this._idManagementBtn, IdentityManagementView.MIN_SCALE_AGECONTENT_DESC);
          this._idManagementBtn.y = 50;
          this._idManagementBtn.x = this.panelDisp.stage.stageWidth - this._idManagementBtn.width - 50;
        }
        if (this._ingameNotice) {
          this._ingameNotice.visible = this._ingameShowNotice;
          this.scaleObjectToPercentOfStage(this._ingameNotice, IdentityManagementView.MIN_SCALE_NOTICE_DESC);
          this._ingameNotice.x = this.panelDisp.stage.stageWidth / 2;
          this._ingameNotice.y = this._idManagementBtn.y + this._idManagementBtn.height + 10 + this._ingameNotice.height / 2;
        }
        if (this._licenceTable) {
          this._licenceTable.visible = false;
        }
        if (this._teenagerProtectionNotice) {
          var __s57local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.koreanData.koreaHoursPlayed);
          this._teenagerProtectionNotice.visible = this._ingameShowTeenageProtectionNotice && __s57local0 > 0;
          this._itxtTeenProtection.textContentVO.textId = IdentityManagementView.TEENAGE_PROTECTION_TEXT_ID;
          this._itxtTeenProtection.textContentVO.textReplacements = [__s57local0.toString()];
          this.scaleObjectToPercentOfStage(this._ingameNotice, IdentityManagementView.MIN_SCALE_NOTICE_DESC);
          this._teenagerProtectionNotice.x = this.panelDisp.stage.stageWidth - this._teenagerProtectionNotice.width - IdentityManagementView.NOTIFICATION_OFFSET_X;
          this._teenagerProtectionNotice.y = this._idManagementBtn.y + this._idManagementBtn.height + 10 + this._ingameNotice.height / 2;
        }
      } else {
        this._shutDownTimeMC.visible = false;
        if (this._ingameNotice) {
          this._ingameNotice.visible = false;
        }
        if (this._teenagerProtectionNotice) {
          this._teenagerProtectionNotice.visible = false;
        }
        if (this._licenceTable) {
          this._licenceTable.visible = this._outgameShow;
          var __s57local1 = 1;
          var __s57local2 = 0;
          var __s57local3 = 0;
          switch (this._currentTableType) {
            case IdentityManagementView.KOREAN_TABLE_DEFAULT:
              __s57local1 = Math.min(800 / 1049, this.panelDisp.stage.stageWidth / 1049);
              __s57local3 = 50;
              if (__dep_export_StartscreenHelper.StartscreenHelper.usesModernStartscreen()) {
                __s57local3 = 0;
                __s57local2 = -50;
              }
              break;
            case IdentityManagementView.KOREAN_TABLE_COMPACT:
              __s57local1 = Math.min(1092 / 1450, this.panelDisp.stage.stageWidth / 1450);
              __s57local2 = 30;
              if (!this._isWideScreen) {
                __s57local3 = 75;
              }
              break;
            case IdentityManagementView.KOREAN_TABLE_VERTICAL:
              __s57local1 = Math.min(1092 / 1450, this.panelDisp.stage.stageWidth / 1450);
              __s57local2 = 80;
              __s57local3 = this._isWideScreen ? -20 : 75;
          }
          this._licenceTable.scaleX = this._licenceTable.scaleY = __s57local1;
          this._licenceTable.x = this.panelDisp.stage.stageWidth / 2 + __s57local2;
          this._licenceTable.y = this.panelDisp.stage.stageHeight - this._licenceTable.height / 2 - __s57local3;
          if (this._idManagementBtn) {
            this._idManagementBtn.visible = false;
          }
        }
      }
    }
  };
  IdentityManagementView.prototype.scaleObjectToPercentOfStage = function (__s75param0, __s75param1) {
    var __s75local0 = __s75param0.width / __s75param0.height;
    var __s75local1 = __s75param1 * (this.panelDisp.stage.stageWidth * this.panelDisp.stage.stageHeight);
    var __s75local2 = Math.sqrt(__s75local1 / __s75local0);
    __s75param0.width = __s75local0 * __s75local2;
    __s75param0.height = __s75local2;
  };
  IdentityManagementView.prototype.updateElementsOnFontsLoaded = function (__s77param0) {
    this.initialize();
    this.updatePosition();
  };
  Object.defineProperty(IdentityManagementView.prototype, "panelDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  IdentityManagementView.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    __dep_exact_9e901e8e2483a22f.BasicController.getInstance().removeEventListener(__dep_exact_9e901e8e2483a22f_3.IdentityManagementEvent.ID_MANAGEMENT_ACTIVE, this.bindFunction(this.onIdManagementActivated));
    __dep_exact_9e901e8e2483a22f.BasicController.getInstance().removeEventListener(__dep_exact_9e901e8e2483a22f_3.IdentityManagementEvent.ID_MANAGEMENT_INCTIVE, this.bindFunction(this.onIdManagementDeactivated));
    __dep_exact_9e901e8e2483a22f.BasicController.getInstance().removeEventListener(__dep_exact_9e901e8e2483a22f_5.LanguageDataEvent.FONT_LOAD_COMPLETE, this.bindFunction(this.updateElementsOnFontsLoaded));
    __dep_exact_9e901e8e2483a22f.BasicController.getInstance().removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    __dep_exact_9e901e8e2483a22f.BasicController.getInstance().removeEventListener(__dep_exact_9e901e8e2483a22f_4.IdentityManagementLicenseEvent.SHOW_LICENSE_INITIAL_AGE_RATING_TEXT, this.bindFunction(this.onIngameInitialAgeRating));
    __dep_exact_9e901e8e2483a22f.BasicController.getInstance().removeEventListener(__dep_exact_9e901e8e2483a22f_4.IdentityManagementLicenseEvent.SHOW_LICENSE_LOGOS, this.bindFunction(this.onShowIngameLicense));
    __dep_exact_9e901e8e2483a22f.BasicController.getInstance().removeEventListener(__dep_exact_9e901e8e2483a22f_4.IdentityManagementLicenseEvent.HIDE_LICENSE, this.bindFunction(this.onHideIngameLicense));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.ON_RESIZE, this.bindFunction(this.onStageResize));
  };
  IdentityManagementView.__initialize_static_members = function () {
    IdentityManagementView.NAME = "IdentityManagementView";
    IdentityManagementView.MIN_SCALE_FACTOR_LICENCE = 0.11;
    IdentityManagementView.MIN_SCALE_AGECONTENT_DESC = 0.05;
    IdentityManagementView.MIN_SCALE_NOTICE_DESC = 0.26;
    IdentityManagementView.NOTIFICATION_OFFSET_X = 5;
    IdentityManagementView.NOTIFICATION_TEXT_ID = "generic_childProtectionNotification_korea";
    IdentityManagementView.TEENAGE_PROTECTION_TEXT_ID = "dialog_warning_playtime_korea";
  };
  IdentityManagementView.KOREAN_TABLE_DEFAULT = "MC_KoreaTable";
  IdentityManagementView.KOREAN_TABLE_COMPACT = "MC_KoreaTableCompact";
  IdentityManagementView.KOREAN_TABLE_VERTICAL = "MC_KoreaTableVertical";
  IdentityManagementView.LOW_GAME_HEIGHT = 900;
  IdentityManagementView.GAME_WIDTH_WIDE_SCREEN = 1000;
  IdentityManagementView.GAME_WIDTH_DEFAULT = 1092;
  return IdentityManagementView;
}(__dep_export_CastlePanel.CastlePanel);
exports.IdentityManagementView = __s0local1;
__s0local1.__initialize_static_members();
