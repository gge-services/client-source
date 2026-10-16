Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_5 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_6 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_7 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_8 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_9 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_10 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_11 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_12 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_13 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_14 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_15 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_3 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_e9ed30ab7bbf7f50 = require("gge-module:exact_e9ed30ab7bbf7f50");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_2 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_ClientConstInstanceIDs = require("gge-module:export_ClientConstInstanceIDs");
var __dep_export_CastleRegisterErrorEvent = require("gge-module:export_CastleRegisterErrorEvent");
var __dep_export_CastleFacebookSDKEvent = require("gge-module:export_CastleFacebookSDKEvent");
var __dep_export_ClientBetaHelper = require("gge-module:export_ClientBetaHelper");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleVersionInformation = require("gge-module:export_CastleVersionInformation");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_CastleStartscreenComponent = require("gge-module:export_CastleStartscreenComponent");
var __dep_export_ComboboxItemRendererServerSelection = require("gge-module:export_ComboboxItemRendererServerSelection");
var __dep_export_ComboboxItemRendererVO = require("gge-module:export_ComboboxItemRendererVO");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_CastleLostPasswordDialogProperties = require("gge-module:export_CastleLostPasswordDialogProperties");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CastlePanel = require("gge-module:export_CastlePanel");
var __dep_export_AGBLinkComponent = require("gge-module:export_AGBLinkComponent");
var __dep_export_StartScreenAdBannerLoader = require("gge-module:export_StartScreenAdBannerLoader");
var __s0local0 = createjs.Point;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = function (__s1param0) {
  function CastleStartscreenPanel() {
    var __s3local0 = this;
    __s3local0.loginIsVisible = false;
    __s3local0.focusState = CastleStartscreenPanel.FOCUS_REGISTER;
    __s3local0._registerBtnAlreadyClicked = false;
    __s3local0.loginBlocked = false;
    __s3local0._wasUserNameModified = false;
    __s3local0._wasPasswordModified = false;
    __s3local0.currentSelectedInstanceForTest = -1;
    __s3local0._deltaPoint = new __s0local0();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, new Library.CastleStartscreen.CastleStartscreen_zzz39Facebook_Toaster()) || this).defaultMailStringID = "generic_email";
    __s3local0.defaultNameStringID = "generic_username_login";
    __s3local0.defaultPasswordStringID = "generic_login_password";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStartscreenPanel, __s1param0);
  CastleStartscreenPanel.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.bannerUpdater = new __dep_export_StartScreenAdBannerLoader.StartScreenAdBannerLoader(this.registerDisp);
    this.checkBoxComp = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.loginDisp.mc_slideArea.mc_checkboxLogin);
    this.loginDisp.mc_slideArea.btn_loginArrow.mouseChildren = false;
    this.loginDisp.mc_slideArea.btn_login.mouseChildren = false;
    this.initRegister();
    this.initLogin();
    this.registerDisp.mc_korean.visible = false;
    this.textFieldManager.registerTextField(this.registerDisp.mc_nameSelection.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("error_name_propositions"));
    this.textFieldManager.registerTextField(this.registerDisp.mc_username.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.defaultNameStringID));
    this.textFieldManager.registerTextField(this.registerDisp.mc_password.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.defaultPasswordStringID));
    this.textFieldManager.registerTextField(this.registerDisp.btn_register.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("empirePlay")).verticalAlign = __dep_exact_9e901e8e2483a22f_12.GGSVerticalAlign.MIDDLE;
    this.initLanguageSelection();
    __dep_export_ClientBetaHelper.ClientBetaHelper.setSupportContextMenu();
    this.layoutManager.showServerAndClientVersion();
    this.applyCache();
    if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
      var __s5local0 = this.panelDisp.getBounds();
      var __s5local1 = __s5local0.x;
      var __s5local2 = __s5local0.y;
      var __s5local3 = __s5local0.width;
      var __s5local4 = __s5local0.height;
      var __s5local5 = new createjs.Shape();
      __s5local5.graphics.beginFill("#ffffff").drawRect(__s5local1 - 120, __s5local2, __s5local3, __s5local4);
      __s5local5.alpha = 0.01;
      __s5local5.cache(__s5local1 - 120, __s5local2, __s5local3, __s5local4);
      this.panelDisp.addChildAt(__s5local5, 0);
      this.panelDisp.swapChildren(this.loginDisp, this.countryDisp);
    }
  };
  CastleStartscreenPanel.prototype.applyCache = function () {
    if (this.loginDisp.getChildAt(0)) {
      this.loginDisp.getChildAt(0).doCache();
    }
    if (this.loginDisp.mc_slideArea.getChildAt(0)) {
      this.loginDisp.mc_slideArea.getChildAt(0).doCache();
    }
    if (this.registerDisp.mc_username.getChildAt(0)) {
      this.registerDisp.mc_username.getChildAt(0).doCache();
    }
    if (this.registerDisp.mc_password.getChildAt(0)) {
      this.registerDisp.mc_password.getChildAt(0).doCache();
    }
  };
  CastleStartscreenPanel.prototype.versionInfo = function () {
    return "Transpiled 2.156.3\n" + __dep_export_CastleVersionInformation.CastleVersionInformation.versionInstance.versionText;
  };
  CastleStartscreenPanel.prototype.destroy = function () {
    this.removeListener();
    __s1param0.prototype.destroy.call(this);
  };
  CastleStartscreenPanel.prototype.addListener = function () {
    this._txtInput_usernameRegister.focusIn.add(this.bindFunction(this.onFocusRegister));
    this._txtInput_usernameRegister.focusOut.add(this.bindFunction(this.onFocusOutRegister));
    this._txtInput_passwordRegister.focusIn.add(this.bindFunction(this.onFocusRegister));
    this._txtInput_passwordRegister.focusOut.add(this.bindFunction(this.onFocusOutRegister));
    this._txtInput_passwordRegister.keyDown.add(this.bindFunction(this.onKeyUp));
    this._txtInput_usernameRegister.click.add(this.bindFunction(this.hideErrorsAndFocusRegisterFields));
    this._txtInput_passwordRegister.click.add(this.bindFunction(this.hideErrorsAndFocusRegisterFields));
    this._txtInput_passwordLogin.focusIn.add(this.bindFunction(this.onFocusLogin));
    this._txtInput_passwordLogin.focusOut.add(this.bindFunction(this.onFocusOutPasswordLogin));
    this._txtInput_usernameLogin.focusIn.add(this.bindFunction(this.onFocusLogin));
    this._txtInput_usernameLogin.focusOut.add(this.bindFunction(this.onFocusOutUsernameLogin));
    this._txtInput_usernameLogin.click.add(this.bindFunction(this.hideErrorsAndFocusLoginFields));
    this._txtInput_passwordLogin.click.add(this.bindFunction(this.hideErrorsAndFocusLoginFields));
    this._txtInput_passwordLogin.keyDown.add(this.bindFunction(this.keyDownPwLogin));
    this.selectCountryComponent.addEventListener(__dep_exact_9e901e8e2483a22f_9.CountrySelectComponentEvent.COUNTRY_VIEW_OPENED, this.bindFunction(this.onOpenCountryList));
    this.selectCountryComponent.addEventListener(__dep_exact_9e901e8e2483a22f_9.CountrySelectComponentEvent.COUNTRY_CHANGED, this.bindFunction(this.onCountrySelected));
    this.selectServerCombobox.userClickItemSignal.add(this.bindFunction(this.onTrackSelectWorld));
    this.countryDisp.cbx_world.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXSELECT, this.bindFunction(this.onClickWorldSelection));
    this.countryDisp.cbx_world.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectWorld));
    this.controller.addEventListener(__dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.REGISTER_ERROR, this.bindFunction(this.onRegisterError));
    this.controller.addEventListener(__dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.LLI_ERROR, this.bindFunction(this.onLoginError));
    this.layoutManager.addEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onMouseUpOnLayoutManager));
    __dep_exact_9e901e8e2483a22f_2.BasicLanguageFontManager.getInstance().addEventListener(__dep_exact_9e901e8e2483a22f_13.LanguageDataEvent.FONT_LOAD_COMPLETE, this.bindFunction(this.updateElementsOnFontsLoaded), false, -50);
  };
  CastleStartscreenPanel.prototype.onFocusOutRegister = function (__s20param0) {
    __s20param0.textContentVO = new __dep_exact_92d05af59ee2ff30_2.TextVO(__s20param0.text);
  };
  CastleStartscreenPanel.prototype.removeListener = function () {
    this._txtInput_usernameRegister.focusIn.remove(this.bindFunction(this.onFocusRegister));
    this._txtInput_usernameRegister.focusOut.remove(this.bindFunction(this.onFocusOutRegister));
    this._txtInput_passwordRegister.focusIn.remove(this.bindFunction(this.onFocusRegister));
    this._txtInput_passwordRegister.keyDown.remove(this.bindFunction(this.onKeyUp));
    this._txtInput_usernameRegister.click.remove(this.bindFunction(this.hideErrorsAndFocusRegisterFields));
    this._txtInput_passwordRegister.click.remove(this.bindFunction(this.hideErrorsAndFocusRegisterFields));
    this._txtInput_passwordLogin.focusIn.remove(this.bindFunction(this.onFocusLogin));
    this._txtInput_passwordLogin.focusOut.remove(this.bindFunction(this.onFocusOutPasswordLogin));
    this._txtInput_usernameLogin.focusIn.remove(this.bindFunction(this.onFocusLogin));
    this._txtInput_usernameLogin.focusOut.remove(this.bindFunction(this.onFocusOutUsernameLogin));
    this._txtInput_usernameLogin.click.remove(this.bindFunction(this.hideErrorsAndFocusLoginFields));
    this._txtInput_passwordLogin.click.remove(this.bindFunction(this.hideErrorsAndFocusLoginFields));
    this._txtInput_passwordLogin.keyDown.remove(this.bindFunction(this.keyDownPwLogin));
    this.selectCountryComponent.removeEventListener(__dep_exact_9e901e8e2483a22f_9.CountrySelectComponentEvent.COUNTRY_VIEW_OPENED, this.bindFunction(this.onOpenCountryList));
    this.selectCountryComponent.removeEventListener(__dep_exact_9e901e8e2483a22f_9.CountrySelectComponentEvent.COUNTRY_CHANGED, this.bindFunction(this.onCountrySelected));
    this.selectServerCombobox.userClickItemSignal.remove(this.bindFunction(this.onTrackSelectWorld));
    this.countryDisp.cbx_world.removeEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXSELECT, this.bindFunction(this.onClickWorldSelection));
    this.countryDisp.cbx_world.removeEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectWorld));
    this.controller.removeEventListener(__dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.REGISTER_ERROR, this.bindFunction(this.onRegisterError));
    this.controller.removeEventListener(__dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.LLI_ERROR, this.bindFunction(this.onLoginError));
    this.layoutManager.removeEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onMouseUpOnLayoutManager));
    __dep_exact_9e901e8e2483a22f_2.BasicLanguageFontManager.getInstance().removeEventListener(__dep_exact_9e901e8e2483a22f_13.LanguageDataEvent.FONT_LOAD_COMPLETE, this.bindFunction(this.updateElementsOnFontsLoaded));
  };
  CastleStartscreenPanel.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.enableLoginButtons();
    this.checkReferral();
    this.addListener();
    this.setFocusToRegister();
    if (this.env.isLandingPageClient) {
      this.showLoginPanelImmediately();
    }
    if (__dep_exact_9e901e8e2483a22f_10.EnvGlobalsHandler.globals.isClosedBeta) {
      this.registerDisp.visible = false;
      this._closedBetaBanner = new Library.CastleInterfaceElements.BetaTestBanner();
      this.textFieldManager.registerTextField(this._closedBetaBanner.txt_beta, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("generic_country_closedbeta")).verticalAlign = __dep_exact_9e901e8e2483a22f_12.GGSVerticalAlign.MIDDLE;
      this._closedBetaBanner.x = 6;
      this._closedBetaBanner.y = 300;
      this._closedBetaBanner.scaleX = this._closedBetaBanner.scaleY = 2;
      this.panelDisp.addChild(this._closedBetaBanner);
    } else {
      this.registerDisp.visible = true;
      if (this._closedBetaBanner) {
        this.panelDisp.removeChild(this._closedBetaBanner);
        this._closedBetaBanner = null;
      }
    }
    __dep_export_CastleStartscreenComponent.CastleStartscreenComponent.onStartScreenShown.dispatch();
    this.bannerUpdater.startLoad();
    this.update();
    if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
      this.panelDisp.addEventListener(__s0local1.PRESS_MOVE, this.bindFunction(this.onMobilePressMove));
      this.panelDisp.addEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onMobilePressUp));
      this.panelDisp.addEventListener(__s0local1.DOUBLE_CLICK, this.bindFunction(this.onMobileDoubleClick));
    }
  };
  CastleStartscreenPanel.prototype.onMobilePressMove = function (__s31param0) {
    if (__dep_exact_81dacdf05bd32292_3.currentBrowserInfo.isTouchEvent(__s31param0)) {
      if (this.lastMobileTouchPoint) {
        this._deltaPoint.x = __s31param0.stageX - this.lastMobileTouchPoint.x;
        this._deltaPoint.y = __s31param0.stageY - this.lastMobileTouchPoint.y;
        var __s31local0 = this.panelDisp.y + this._deltaPoint.y;
        if (__s31local0 <= 0 && __s31local0 >= this.panelDisp.stage.stageHeight - 650) {
          this.panelDisp.y = __s31local0;
          this.loginDisp.y -= this._deltaPoint.y;
          this.countryDisp.y -= this._deltaPoint.y;
          __dep_export_CastleStartscreenComponent.CastleStartscreenComponent.onTouchMoveSignal.signal(this._deltaPoint);
        }
      } else {
        this.lastMobileTouchPoint = new __s0local0();
      }
      this.lastMobileTouchPoint.x = __s31param0.stageX;
      this.lastMobileTouchPoint.y = __s31param0.stageY;
    }
  };
  CastleStartscreenPanel.prototype.onMobilePressUp = function (__s37param0) {
    this.lastMobileTouchPoint = null;
  };
  CastleStartscreenPanel.prototype.onMobileDoubleClick = function () {
    this.layoutManager.toggleFullscreen();
  };
  CastleStartscreenPanel.prototype.checkReferral = function () {
    var __s41local0 = this.env.urlVariables;
    if (__s41local0) {
      if (__s41local0.friendInviteCode) {
        this._inviterCode = __s41local0.friendInviteCode;
        var __s41local1 = __s41local0.friendInviteZoneId;
        __dep_exact_9e901e8e2483a22f_15.debug("--------------- going to try to find zone " + __s41local1);
        this.selectInstanceByZoneID(__s41local1);
      } else {
        this._inviterCode = "";
      }
      if (__s41local0.urlParams.has("refer_method")) {
        this._invite_refer_method = __s41local0.urlParams.get("refer_method");
      } else {
        this._invite_refer_method = "";
      }
    }
  };
  CastleStartscreenPanel.prototype.applyProperties = function () {
    this.isWaitingForServerMessage = false;
    this._txtInput_usernameRegister.maxChars = __dep_exact_e9ed30ab7bbf7f50.CredentialsValidationConstants.USERNAME_MAX_LENGTH;
    this._txtInput_passwordRegister.maxChars = __dep_exact_e9ed30ab7bbf7f50.CredentialsValidationConstants.PASSWORD_MAX_LENGTH;
    this.selectCountryComponent.setDefaultCountry(__dep_exact_9e901e8e2483a22f_11.GGSCountryController.instance.currentCountry);
    this.layoutManager.disableProgressbar();
    this.hideAllErrorMessages();
    this.update();
    this.unLockPanel();
    __dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState("joined_startscreen");
    this.layoutManager.renderBGStage();
  };
  CastleStartscreenPanel.prototype.hide = function () {
    this.layoutManager.enableProgressbar();
    this.selectServerCombobox.hideItems();
    this.removeListener();
    __s1param0.prototype.hide.call(this);
    this.layoutManager.renderBGStage();
    if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
      this.panelDisp.removeEventListener(__s0local1.PRESS_MOVE, this.bindFunction(this.onMobilePressMove));
      this.panelDisp.removeEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onMobilePressUp));
      this.panelDisp.removeEventListener(__s0local1.DOUBLE_CLICK, this.bindFunction(this.onMobileDoubleClick));
      this.lastMobileTouchPoint = null;
      __dep_export_CastleStartscreenComponent.CastleStartscreenComponent.onTouchMoveSignal.signal(null);
    }
  };
  CastleStartscreenPanel.prototype.onFocusRegister = function (__s53param0) {
    this.setFocusToRegister();
  };
  CastleStartscreenPanel.prototype.onFocusLogin = function (__s55param0) {
    this.setFocusToLogin();
  };
  CastleStartscreenPanel.prototype.onFocusOutUsernameLogin = function (__s57param0) {
    if (this._txtInput_usernameLogin.text == "") {
      this._wasUserNameModified = false;
    }
  };
  CastleStartscreenPanel.prototype.onFocusOutPasswordLogin = function (__s60param0) {
    if (this._txtInput_passwordLogin.text == "") {
      this._wasPasswordModified = false;
    }
  };
  CastleStartscreenPanel.prototype.initLanguageSelection = function () {
    this.selectServerCombobox = new __dep_export_ComboboxComponent.ComboboxComponent(this.countryDisp.cbx_world, "", -1, 25, 17, -1, 0, new __dep_export_ComboboxItemRendererServerSelection.ComboboxItemRendererServerSelection(), 8, false, false, 6, "comboBgrTop");
    this.selectCountryComponent = new __dep_exact_9e901e8e2483a22f_8.CountrySelectComponent(this.countryDisp.mc_language, new Library.CastleStartscreen.CountrySelectionTooltip(), __dep_exact_9e901e8e2483a22f_11.GGSCountryController.instance.activeCountries, 2, __dep_exact_9e901e8e2483a22f_3.BasicModel.languageData.getTextById);
    this.selectCountryComponent.glowFilter = __dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_STANDARD[0];
  };
  CastleStartscreenPanel.prototype.updateElementsOnFontsLoaded = function (__s65param0) {
    this.initSelectServerCombobox();
  };
  CastleStartscreenPanel.prototype.initRegister = function () {
    this.registerDisp.btn_register.mc_hoverState.visible = false;
    this.registerDisp.btn_register.mc_pressedState.visible = false;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.loginDisp.mc_slideArea.btn_login);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.loginDisp.mc_slideArea.btn_fblogin);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.registerDisp.btn_register);
    this.registerDisp.btn_fbRegister.visible = false;
    this.registerDisp.txt_facebook_header.visible = false;
    this._txtInput_usernameRegister = this.textFieldManager.registerTextField(this.registerDisp.mc_username.txt_input, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this._txtInput_usernameRegister.type = __dep_exact_81dacdf05bd32292_1.TextFieldType.INPUT;
    this._txtInput_usernameRegister.multiline = false;
    this._txtInput_passwordRegister = this.textFieldManager.registerTextField(this.registerDisp.mc_password.txt_input, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this._txtInput_passwordRegister.displayAsPassword = true;
    this._txtInput_passwordRegister.type = __dep_exact_81dacdf05bd32292_1.TextFieldType.INPUT;
    this._txtInput_passwordRegister.multiline = false;
    this.agbLink = new __dep_export_AGBLinkComponent.AGBLinkComponent(this.registerDisp.agb_link);
  };
  CastleStartscreenPanel.prototype.initLogin = function () {
    this._txtInput_usernameLogin = this.textFieldManager.registerTextField(this.loginDisp.mc_slideArea.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.defaultNameStringID));
    this._txtInput_usernameLogin.type = __dep_exact_81dacdf05bd32292_1.TextFieldType.INPUT;
    this._txtInput_usernameLogin.textContentDefaultVO = new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.defaultNameStringID);
    this._txtInput_usernameLogin.multiline = false;
    this._txtInput_passwordLogin = this.textFieldManager.registerTextField(this.loginDisp.mc_slideArea.txt_password, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.defaultPasswordStringID));
    this._txtInput_passwordLogin.type = __dep_exact_81dacdf05bd32292_1.TextFieldType.INPUT;
    this._txtInput_passwordLogin.textContentDefaultVO = new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.defaultPasswordStringID);
    this._txtInput_passwordLogin.displayAsPassword = true;
    this._txtInput_passwordLogin.multiline = false;
    this._wasUserNameModified = false;
    this._wasPasswordModified = false;
    __dep_export_CastleModel.CastleModel.userData.persistentLogin = this.checkBoxComp.isSelected;
    this.loginDisp.btn_alreadyLoggedIn.actLikeButton = true;
    this.loginDisp.mc_slideArea.btn_lostpassword.actLikeButton = true;
    this.loginDisp.mc_slideArea.btn_lostpassword.mouseChildren = false;
    this.textFieldManager.registerTextField(this.loginDisp.mc_slideArea.btn_lostpassword.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("generic_login_lostpassword"));
    this.textFieldManager.registerTextField(this.loginDisp.mc_slideArea.btn_fblogin.btnText, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("facebook_connect"));
    this.loginDisp.mc_slideArea.btn_lostpassword.visible = !__dep_export_SpecialServerHelper.SpecialServerHelper.isOnKeyLoginToNormalLoginServer;
    this.textFieldManager.registerTextField(this.loginDisp.mc_slideArea.txt_savedata, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("generic_login_rememberpassword")).mouseEnabled = false;
    this.loginDisp.mc_slideArea.btn_login.actLikeButton = true;
    this.loginDisp.mc_slideArea.btn_login.mc_hoverState.visible = false;
    this.loginDisp.mc_slideArea.btn_login.mc_pressedState.visible = false;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.loginDisp.mc_slideArea.btn_fblogin);
    this.loginDisp.mc_slideArea.btn_fblogin.mc_hoverState.visible = false;
    this.loginDisp.mc_slideArea.btn_fblogin.visible = __dep_export_CastleFacebookModule.CastleFacebookModule.available;
    this.enableSaveData();
  };
  CastleStartscreenPanel.prototype.keyDownPwLogin = function (__s71param0) {
    if (__s71param0.key == __dep_exact_81dacdf05bd32292.Keyboard.ENTER) {
      this.onLogin();
      __s71param0.stopImmediatePropagation();
    }
  };
  CastleStartscreenPanel.prototype.onOpenCountryList = function (__s74param0) {
    if (this.selectServerCombobox.isOpen) {
      this.selectServerCombobox.hideItems();
    }
    if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
      this.layoutManager.toggleFullscreen(true);
    }
    this.countryDisp.setChildIndex(this.countryDisp.cbx_world, this.countryDisp.numChildren - 2);
    this.countryDisp.setChildIndex(this.countryDisp.mc_language, this.countryDisp.numChildren - 1);
    __dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.COUNTRY_SELECTION);
  };
  CastleStartscreenPanel.prototype.onCountrySelected = function (__s78param0) {
    var __s78local0 = __s78param0.selectedCountry;
    var __s78local1 = __dep_exact_9e901e8e2483a22f_11.GGSCountryController.instance.currentCountry;
    this.currentSelectedInstanceForTest = this.env.isTest && !__dep_exact_9e901e8e2483a22f_10.EnvGlobalsHandler.globals.urlVariables.urlParams.get("hideTestServers") ? __dep_exact_9e901e8e2483a22f_3.BasicModel.instanceProxy.selectedInstanceVO.instanceId : -1;
    if (__s78local1.ggsCountryCode != __s78local0.ggsCountryCode) {
      __dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.COUNTRY_CHANGED);
    }
    __dep_exact_9e901e8e2483a22f_7.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f_1.BasicController.COMMAND_CHANGE_COUNTRY, __s78local0);
    if (this.agbLink) {
      this.agbLink.update(this.env.urlAGB);
    }
    if (__s78local0.ggsCountryCode != "KR" || this.env.isIdentityManagementActive) {
      if (__s78local0.ggsCountryCode != "KR" && this.env.isIdentityManagementActive) {
        __dep_exact_9e901e8e2483a22f_7.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f_1.BasicController.COMMAND_IDENTITY_MANAGEMENT, false);
      }
    } else {
      __dep_exact_9e901e8e2483a22f_7.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f_1.BasicController.COMMAND_IDENTITY_MANAGEMENT, true);
    }
    this.bannerUpdater.startLoad();
    var __s78local2 = __dep_exact_9e901e8e2483a22f_3.BasicModel.instanceProxy.selectedInstanceVO;
    if (__dep_exact_9e901e8e2483a22f_3.BasicModel.branchesModel && __dep_exact_9e901e8e2483a22f_3.BasicModel.branchesModel.branchByZoneId(__s78local2.zoneId.toString()) != __dep_exact_9e901e8e2483a22f_3.BasicModel.branchesModel.currentBranch) {
      __dep_exact_9e901e8e2483a22f_7.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f_1.BasicController.COMMAND_RELOAD_PAGE_WITH_ZONE_ID, __s78local2);
    }
    this.enableLoginButtons();
  };
  CastleStartscreenPanel.prototype.onClickWorldSelection = function (__s86param0) {
    if (__s86param0.state == 0) {
      this.countryDisp.setChildIndex(this.countryDisp.cbx_world, this.countryDisp.numChildren - 2);
      this.countryDisp.setChildIndex(this.countryDisp.mc_language, this.countryDisp.numChildren - 1);
    } else {
      this.countryDisp.setChildIndex(this.countryDisp.cbx_world, this.countryDisp.numChildren - 1);
      this.countryDisp.setChildIndex(this.countryDisp.mc_language, this.countryDisp.numChildren - 2);
    }
    if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
      this.layoutManager.toggleFullscreen(true);
    }
    this.selectCountryComponent.hideChoiceCountry();
    __dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.SERVER_SELECTION);
  };
  CastleStartscreenPanel.prototype.initSelectServerCombobox = function () {
    var __s91local0;
    this.selectServerCombobox.clearItems();
    var __s91local1 = __dep_exact_9e901e8e2483a22f_3.BasicModel.instanceProxy.instanceMap;
    var __s91local2 = false;
    this.selectServerCombobox.disp.visible = true;
    if (this.env.isTest || !this.hasEmptyServerInstance(__s91local1)) {
      for (var __s91local3 = __dep_exact_f855840627e6e145.int(__s91local1.length - 1); __s91local3 >= 0; __s91local3--) {
        var __s91local4 = __s91local1[__s91local3];
        if ((!__dep_exact_9e901e8e2483a22f_10.EnvGlobalsHandler.globals.urlVariables.urlParams.get("hideTestServers") || !(__s91local4.instanceId >= __dep_export_ClientConstInstanceIDs.ClientConstInstanceIDs.INSTANCE_ID_TESTSERVER_START)) && __s91local4.instanceId != __dep_export_ClientConstInstanceIDs.ClientConstInstanceIDs.INSTANCE_ID_TEMP && __s91local4.instanceId != __dep_export_ClientConstInstanceIDs.ClientConstInstanceIDs.INSTANCE_ID_ABG) {
          (__s91local0 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).itemLabel = __dep_exact_92d05af59ee2ff30.Localize.text(__s91local4.instanceLocaId) + ": " + __s91local4.instanceCountID;
          __s91local0.data = __s91local4;
          __s91local0.autoFitToBounds = true;
          this.selectServerCombobox.addItem(__s91local0);
          if (this.currentSelectedInstanceForTest >= 0 && __s91local4.instanceId == this.currentSelectedInstanceForTest) {
            __s91local2 = true;
          }
        }
      }
      this.selectInstance(__s91local2 ? this.currentSelectedInstanceForTest : __dep_exact_9e901e8e2483a22f_3.BasicModel.instanceProxy.selectedInstanceVO.instanceId);
    } else {
      this.selectServerCombobox.disp.visible = false;
    }
  };
  CastleStartscreenPanel.prototype.hasEmptyServerInstance = function (__s99param0) {
    return __s99param0.length == 1 && !__s99param0[0].instanceLocaId;
  };
  CastleStartscreenPanel.prototype.selectInstance = function (__s101param0) {
    for (var __s101local0 = 0; __s101local0 < this.selectServerCombobox.itemData.length; __s101local0++) {
      if (this.selectServerCombobox.itemData[__s101local0].data.instanceId == __s101param0) {
        this.selectServerCombobox.selectItemIndex(__s101local0);
        return;
      }
    }
    this.selectServerCombobox.selectItemIndex(0);
  };
  CastleStartscreenPanel.prototype.selectInstanceByZoneID = function (__s106param0) {
    for (var __s106local0 = 0; __s106local0 < this.selectServerCombobox.itemData.length; __s106local0++) {
      if (this.selectServerCombobox.itemData[__s106local0].data.zoneId == __s106param0) {
        this.selectServerCombobox.selectItemIndex(__s106local0);
        var __s106local1 = this.selectServerCombobox.selectedData;
        if (__s106local1.instanceId != __dep_exact_9e901e8e2483a22f_3.BasicModel.instanceProxy.selectedInstanceVO.instanceId) {
          __dep_export_CastleModel.CastleModel.specialEventData.clearActiveEvents();
          __dep_exact_9e901e8e2483a22f_7.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f_1.BasicController.COMMAND_CONNECT_TO_INSTANCEVO, __s106local1);
        }
        return;
      }
    }
    this.selectServerCombobox.selectItemIndex(0);
  };
  CastleStartscreenPanel.prototype.update = function () {
    this.hideAllErrorMessages();
    this.setFocusToRegister();
    this.initSelectServerCombobox();
    this.registerDisp.scaleY *= 1.0001;
    this.registerDisp.scaleX *= 1.0001;
    this.textFieldManager.registerTextField(this.loginDisp.mc_slideArea.btn_login.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("generic_login_login")).autoFitToBounds = true;
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(this.loginDisp.btn_alreadyLoggedIn);
    this.textFieldManager.registerTextField(this.loginDisp.btn_alreadyLoggedIn.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("generic_login_login"));
    this.textFieldManager.registerTextField(this.loginDisp.mc_slideArea.btn_lostpassword.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("generic_login_lostpassword"));
    this.textFieldManager.registerTextField(this.loginDisp.mc_slideArea.txt_savedata, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("generic_login_rememberpassword"));
    if (this.agbLink) {
      this.agbLink.update(this.env.urlAGB);
    }
    this.unLockPanel();
  };
  CastleStartscreenPanel.prototype.hideErrorsAndFocusRegisterFields = function (__s115param0) {
    this.hideAllErrorMessages();
    this.setFocusToRegister();
  };
  CastleStartscreenPanel.prototype.hideErrorsAndFocusLoginFields = function (__s117param0) {
    this.hideAllErrorMessages();
    this.setFocusToLogin();
  };
  CastleStartscreenPanel.prototype.onClick = function (__s119param0) {
    __s1param0.prototype.onClick.call(this, __s119param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s119param0.target)) {
      switch (__s119param0.target) {
        case this.loginDisp.mc_slideArea.btn_loginArrow:
          this.hideArrow();
          if (this.loginIsVisible) {
            this.hideLoginPanel();
          } else {
            this.showLoginPanel();
          }
          break;
        case this.loginDisp.btn_alreadyLoggedIn:
          this.showLoginPanel();
          break;
        case this.registerDisp.btn_register:
          this.onRegister();
          if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
            this.layoutManager.toggleFullscreen(true);
          }
          break;
        case this.loginDisp.mc_slideArea.btn_login:
          this.hideArrow();
          this.onLogin();
          if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
            this.layoutManager.toggleFullscreen(true);
          }
          break;
        case this.loginDisp.mc_slideArea.btn_fblogin:
          this.hideArrow();
          this.onFacebookLogin();
          this.disableLoginButtons();
          break;
        case this.loginDisp.mc_slideArea.txt_password:
          if (!this._txtInput_passwordLogin.containsDefaultTextContent) {
            this._wasPasswordModified = true;
          }
          break;
        case this.loginDisp.mc_slideArea.txt_name:
          if (!this._txtInput_usernameLogin.containsDefaultTextContent) {
            this._wasUserNameModified = true;
          }
          break;
        case this.loginDisp.mc_slideArea.mc_checkboxLogin:
          this.hideArrow();
          this.onToggleSaveData();
          break;
        case this.loginDisp.mc_slideArea.btn_lostpassword:
          this.hideArrow();
          this.focusState = CastleStartscreenPanel.FOCUS_NONE;
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleLostPasswordDialog.CastleLostPasswordDialog, new __dep_export_CastleLostPasswordDialogProperties.CastleLostPasswordDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_login_lostpassword_title"), __dep_exact_92d05af59ee2ff30.Localize.text("generic_login_lostpassword_copy"), null, null, __dep_exact_92d05af59ee2ff30.Localize.text("generic_btn_okay"), __dep_exact_92d05af59ee2ff30.Localize.text("generic_btn_cancel")));
          break;
        case this.registerDisp.mc_nameSelection.i0:
        case this.registerDisp.mc_nameSelection.i1:
        case this.registerDisp.mc_nameSelection.i2:
        case this.registerDisp.mc_nameSelection.i3:
          var __s119local0 = __s119param0.target;
          this._txtInput_usernameRegister.clearText();
          this._txtInput_usernameRegister.textContentVO = new __dep_exact_92d05af59ee2ff30_2.TextVO(this.textFieldManager.getTextField(__s119local0.txt_Name).text);
          this.hideAllErrorMessages();
          __dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.PICKED_SUGGESTED_USERNAME);
      }
    }
  };
  CastleStartscreenPanel.prototype.onFacebookLogin = function () {
    if (!this._registerBtnAlreadyClicked) {
      this._registerBtnAlreadyClicked = true;
      this.hideAllErrorMessages();
      this.controller.addEventListener(__dep_export_CastleFacebookSDKEvent.CastleFacebookSDKEvent.NOT_AUTHORIZED, this.bindFunction(this.onFbCancelled));
      this.controller.addEventListener(__dep_export_CastleFacebookSDKEvent.CastleFacebookSDKEvent.NOT_CONNECTED, this.bindFunction(this.onFbCancelled));
      this.controller.addEventListener(__dep_export_CastleFacebookSDKEvent.CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onLoginWithFacebookDetails));
      __dep_export_CastleFacebookModule.CastleFacebookModule.login();
    }
  };
  CastleStartscreenPanel.prototype.onLoginWithFacebookDetails = function (__s132param0) {
    this._registerBtnAlreadyClicked = false;
    this.controller.removeEventListener(__dep_export_CastleFacebookSDKEvent.CastleFacebookSDKEvent.NOT_AUTHORIZED, this.bindFunction(this.onFbCancelled));
    this.controller.removeEventListener(__dep_export_CastleFacebookSDKEvent.CastleFacebookSDKEvent.NOT_CONNECTED, this.bindFunction(this.onFbCancelled));
    this.controller.removeEventListener(__dep_export_CastleFacebookSDKEvent.CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onLoginWithFacebookDetails));
    __dep_exact_9e901e8e2483a22f_7.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f_1.BasicController.COMMAND_LOGIN, __s132param0.authResponse);
  };
  CastleStartscreenPanel.prototype.onToggleSaveData = function () {
    if (this.checkBoxComp.isSelected) {
      this.disableSaveData();
    } else {
      this.enableSaveData();
    }
  };
  CastleStartscreenPanel.prototype.enableSaveData = function () {
    __dep_export_CastleModel.CastleModel.userData.persistentLogin = true;
    this.checkBoxComp.selected();
  };
  CastleStartscreenPanel.prototype.disableSaveData = function () {
    this.checkBoxComp.deselected();
    __dep_export_CastleModel.CastleModel.userData.persistentLogin = false;
  };
  CastleStartscreenPanel.prototype.onRegister = function () {
    if (!this.loginBlocked && !this._registerBtnAlreadyClicked) {
      this.hideAllErrorMessages();
      if (!this.checkEmptyOK()) {
        return;
      }
      __dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.CLICK_REGISTER_WITH_DATA);
      if (!this.checkTooShortOK() || !this.checkInvalidOK()) {
        return;
      }
      var __s142local0 = [];
      __s142local0.push(this._txtInput_passwordRegister.text);
      if (!this.usernameIsValid()) {
        return;
      }
      __s142local0.push(__dep_exact_9e901e8e2483a22f_14.TextValide.getValideSmartFoxText(this._txtInput_usernameRegister.text));
      if (this._inviterCode) {
        __dep_exact_9e901e8e2483a22f_10.EnvGlobalsHandler.globals.inviterCode = this._inviterCode;
      } else {
        __dep_exact_9e901e8e2483a22f_10.EnvGlobalsHandler.globals.inviterCode = "";
      }
      if (this._invite_refer_method) {
        __dep_exact_9e901e8e2483a22f_10.EnvGlobalsHandler.globals.invite_refer_method = this._invite_refer_method;
      } else {
        __dep_exact_9e901e8e2483a22f_10.EnvGlobalsHandler.globals.invite_refer_method = "";
      }
      this._registerBtnAlreadyClicked = true;
      __dep_exact_9e901e8e2483a22f_7.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f_1.BasicController.COMMAND_REGISTER_USER, __s142local0);
      this.disableLoginButtons();
    }
  };
  CastleStartscreenPanel.prototype.usernameIsValid = function () {
    if (!__dep_exact_9e901e8e2483a22f_14.TextValide.isUsernameValide(this._txtInput_usernameRegister.text)) {
      __dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.ERROR_NAME_INVALID);
      this.showNameError("error_name_invalid");
      var __s152local0 = __dep_exact_9e901e8e2483a22f_14.TextValide.getValidUsername(this._txtInput_usernameRegister.text);
      if (__s152local0 != "" && __dep_exact_9e901e8e2483a22f_14.TextValide.isUsernameValide(__s152local0)) {
        this.initNameSelection([__s152local0]);
      }
      return false;
    }
    return true;
  };
  CastleStartscreenPanel.prototype.checkEmptyLoginCredentials = function () {
    return (!!this._wasUserNameModified || !this._txtInput_usernameLogin.containsDefaultTextContent) && (!!this._wasPasswordModified || !this._txtInput_passwordLogin.containsDefaultTextContent) || (__dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_4.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("generic_login_wronglogin"))), false);
  };
  CastleStartscreenPanel.prototype.checkEmptyOK = function () {
    if (this._txtInput_usernameRegister.text.length == 0 && this._txtInput_passwordRegister.text.length == 0) {
      __dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.ERROR_CLICK_REGISTER_WITHOUT_DATA);
      this.showNameError("error_name_empty");
      return false;
    }
    if (this._txtInput_usernameRegister.text.length == 0) {
      __dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.ERROR_NAME_EMPTY);
      this.showNameError("error_name_empty");
      return false;
    }
    if (/(\s)\1+/g.test(this._txtInput_usernameRegister.text)) {
      this.showNameError("error_name_invalid_consecutiveSpaces");
      return false;
    } else {
      return this._txtInput_passwordRegister.text.length != 0 || (__dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.ERROR_PASS_EMPTY), this.showPasswordError("error_password_empty"), false);
    }
  };
  CastleStartscreenPanel.prototype.checkTooShortOK = function () {
    if (this._txtInput_usernameRegister.text.length < __dep_exact_9e901e8e2483a22f_3.BasicModel.basicLocalization.getUsernameMinLength) {
      __dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.ERROR_NAME_TOO_SHORT);
      this.showNameError("error_name_too_short");
      return false;
    } else {
      return !(this._txtInput_passwordRegister.text.length < __dep_exact_e9ed30ab7bbf7f50.CredentialsValidationConstants.PASSWORD_MIN_LENGTH) || (__dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.ERROR_PASS_TOO_SHORT), this.showPasswordError("error_password_too_short"), false);
    }
  };
  CastleStartscreenPanel.prototype.checkInvalidOK = function () {
    return !!__dep_exact_9e901e8e2483a22f_14.TextValide.isSmartFoxValide(this._txtInput_passwordRegister.text) || (__dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.ERROR_PASS_INVALID), this.showPasswordError("error_password_invalid"), false);
  };
  CastleStartscreenPanel.prototype.onKeyUp = function (__s170param0) {
    if (!this.isLocked) {
      if (__s170param0.key == __dep_exact_81dacdf05bd32292.Keyboard.ENTER) {
        switch (this.focusState) {
          case CastleStartscreenPanel.FOCUS_LOGIN:
            this.onLogin();
            break;
          case CastleStartscreenPanel.FOCUS_REGISTER:
            this.onRegister();
            return;
        }
      }
      var __s170local0 = /\n/g;
      var __s170local1 = /\t/g;
      this._txtInput_usernameRegister.textContentVO.stringValue = this._txtInput_usernameRegister.text.replace(__s170local0, "");
      this._txtInput_passwordRegister.textContentVO.stringValue = this._txtInput_passwordRegister.text.replace(__s170local0, "");
      this._txtInput_usernameRegister.textContentVO.stringValue = this._txtInput_usernameRegister.text.replace(__s170local1, "");
      this._txtInput_passwordRegister.textContentVO.stringValue = this._txtInput_passwordRegister.text.replace(__s170local1, "");
      switch (__s170param0.target) {
        case this.registerDisp.mc_username.txt_input:
          if (!this._txtInput_usernameRegister.data.sended) {
            __dep_exact_9e901e8e2483a22f_15.debug("---- sending username Register");
            this._txtInput_usernameRegister.data.sended = true;
            __dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.ENTER_NAME);
          }
          break;
        case this.registerDisp.mc_password.txt_input:
          if (__dep_exact_e9ed30ab7bbf7f50.CredentialsValidationConstants.PASSWORD_MAX_LENGTH <= this._txtInput_passwordRegister.text.length) {
            this.showPasswordError("error_password_too_long");
          } else {
            this.hideAllErrorMessages();
          }
          if (!this._txtInput_passwordRegister.data.sended) {
            __dep_exact_9e901e8e2483a22f_15.debug("---- sending password Register");
            this._txtInput_passwordRegister.data.sended = true;
            __dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.ENTER_PASSWORD);
          }
          break;
        case this.loginDisp.mc_slideArea.txt_password:
          if (!this._txtInput_passwordLogin.containsDefaultTextContent && !this._txtInput_passwordLogin.data.sended) {
            __dep_exact_9e901e8e2483a22f_15.debug("---- sending password login");
            this._txtInput_passwordLogin.data.sended = true;
            this._wasPasswordModified = true;
            __dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.LOGIN_ENTER_PASSWORD);
          }
          break;
        case this.loginDisp.mc_slideArea.txt_name:
          if (!this._txtInput_usernameLogin.containsDefaultTextContent && !this._txtInput_usernameLogin.data.sended) {
            __dep_exact_9e901e8e2483a22f_15.debug("---- sending username login");
            this._txtInput_usernameLogin.data.sended = true;
            this._wasUserNameModified = true;
            __dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.LOGIN_ENTER_NAME);
          }
      }
    }
  };
  CastleStartscreenPanel.prototype.onLoginError = function (__s182param0) {
    this.enableLoginButtons();
  };
  CastleStartscreenPanel.prototype.onRegisterError = function (__s184param0) {
    switch (__s184param0.errorType) {
      case __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.INVALID_NAME:
        __dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.ERROR_NAME_INVALID);
        this.showNameError("error_name_invalid");
        this.initNameSelection(__s184param0.params.NS);
        break;
      case __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.NAME_ALREADY_IN_USE:
        __dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.ERROR_NAME_EXISTS);
        this.showNameError("error_name_exists");
        this.initNameSelection(__s184param0.params.NS);
        break;
      case __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.NAME_HAS_ONLY_NUMBERS:
        __dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.ERROR_NAME_INVALID);
        this.showNameError("error_name_is_number");
        this.initNameSelection(__s184param0.params.NS);
        break;
      case __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.USAGE_OF_BADWORDS:
        __dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.ERROR_NAME_BADWORD);
        this.showNameError("error_badword");
        this.initNameSelection(__s184param0.params.NS);
        break;
      case __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.INVALID_PASSWORD:
        __dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.ERROR_PASS_INVALID);
        this.showPasswordError("error_password_invalid");
        break;
      case __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.INVALID_LOGIN_FIELD:
        __dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.ERROR_INVALID_LOGIN_FIELD);
        this._txtInput_usernameLogin.textContentVO = new __dep_exact_92d05af59ee2ff30_2.TextVO(this._txtInput_usernameRegister.text);
        this._txtInput_passwordLogin.textContentVO = new __dep_exact_92d05af59ee2ff30_2.TextVO(this._txtInput_passwordRegister.text);
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkLoginDialog.CastleStandardOkLoginDialog, new __dep_exact_9e901e8e2483a22f_4.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("generic_login_accountexists"), this.bindFunction(this.openLoginAndShowArrow)));
    }
    this._registerBtnAlreadyClicked = false;
    this.enableLoginButtons();
  };
  CastleStartscreenPanel.prototype.openLoginAndShowArrow = function () {
    this.showLoginPanel();
    __dep_export_CastleTutorialArrowController.CastleTutorialArrowController.instance.replace(this.loginDisp.mc_slideArea.btn_login, true, true);
  };
  CastleStartscreenPanel.prototype.hideArrow = function () {
    __dep_export_CastleTutorialArrowController.CastleTutorialArrowController.instance.clear();
  };
  CastleStartscreenPanel.prototype.initNameSelection = function (__s191param0) {
    var __s191local0;
    var __s191local1 = this.registerDisp.mc_nameSelection;
    for (var __s191local2 = 0; __s191local2 < 4; __s191local2++) {
      var __s191local3 = __s191local1["i" + __s191local2];
      __s191local3.actLikeButton = true;
      __s191local3.mouseChildren = false;
      __s191local3.visible = true;
      __s191local0 = "";
      if (__s191param0 && __s191local2 < __s191param0.length) {
        __s191local0 = __s191param0[__s191local2];
      }
      if (__s191local0 != "") {
        this.textFieldManager.registerTextField(__s191local3.txt_Name, new __dep_exact_92d05af59ee2ff30_2.TextVO(__s191local0));
        __s191local3.suggestedName = __s191local0;
      } else {
        __s191local3.visible = false;
      }
    }
    __dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.ERROR_NAME_DIALOG_CHOOSE_NAME);
    if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
      if (__dep_exact_81dacdf05bd32292.MobileHelper.isPortrait()) {
        __s191local1.x = 15;
        __s191local1.y = 175;
      } else {
        __s191local1.x = 250;
        __s191local1.y = 175;
      }
    }
    __s191local1.visible = !!__s191param0;
    __dep_exact_608de47b6498f9b0_2.TweenMax.fromTo(__s191local1, 0.5, {
      scaleX: 0,
      scaleY: 0
    }, {
      scaleX: 1,
      scaleY: 1,
      ease: __dep_exact_608de47b6498f9b0.Bounce.easeOut
    });
  };
  CastleStartscreenPanel.prototype.hideAllErrorMessages = function () {
    this.selectCountryComponent.hideChoiceCountry();
    this.selectServerCombobox.hideItems();
    this.registerDisp.mc_nameSelection.visible = false;
    this.hideSmallErrorMessages();
  };
  CastleStartscreenPanel.prototype.hideSmallErrorMessages = function () {
    this.registerDisp.mc_errorName.visible = false;
    this.registerDisp.mc_errorPassword.visible = false;
  };
  CastleStartscreenPanel.prototype.showNameError = function (__s205param0) {
    var __s205local0 = this.registerDisp.mc_errorName;
    this.textFieldManager.registerTextField(__s205local0.txt_errorText, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s205param0)).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
      if (__dep_exact_81dacdf05bd32292.MobileHelper.isPortrait()) {
        __s205local0.x = -30;
        __s205local0.y = 55;
      } else {
        __s205local0.x = 135;
        __s205local0.y = 85;
      }
    }
    __s205local0.visible = true;
    __dep_exact_608de47b6498f9b0_2.TweenMax.fromTo(__s205local0, 0.5, {
      scaleX: 0,
      scaleY: 0
    }, {
      scaleX: 1,
      scaleY: 1,
      ease: __dep_exact_608de47b6498f9b0.Bounce.easeOut
    });
  };
  CastleStartscreenPanel.prototype.showPasswordError = function (__s210param0) {
    var __s210local0 = this.registerDisp.mc_errorPassword;
    this.textFieldManager.registerTextField(__s210local0.txt_errorText, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s210param0)).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
      if (__dep_exact_81dacdf05bd32292.MobileHelper.isPortrait()) {
        __s210local0.x = -30;
        __s210local0.y = 124;
      } else {
        __s210local0.x = 135;
        __s210local0.y = 154;
      }
    }
    __s210local0.visible = true;
    __dep_exact_608de47b6498f9b0_2.TweenMax.fromTo(__s210local0, 0.5, {
      scaleX: 0,
      scaleY: 0
    }, {
      scaleX: 1,
      scaleY: 1,
      ease: __dep_exact_608de47b6498f9b0.Bounce.easeOut
    });
  };
  CastleStartscreenPanel.prototype.onSelectWorld = function (__s215param0) {
    __dep_export_ClientBetaHelper.ClientBetaHelper.setSupportContextMenu();
    if (this.selectServerCombobox.selectedId != -1) {
      var __s215local0 = this.selectServerCombobox.selectedData;
      var __s215local1 = __dep_exact_9e901e8e2483a22f_3.BasicModel.branchesModel;
      var __s215local2 = __dep_exact_9e901e8e2483a22f_3.BasicModel.branchesModel.branchByZoneId(__s215local0.zoneId.toString());
      var __s215local3 = __dep_exact_9e901e8e2483a22f_3.BasicModel.branchesModel.currentBranch;
      var __s215local4 = __dep_exact_9e901e8e2483a22f_3.BasicModel.instanceProxy.selectedInstanceVO;
      var __s215local5 = __s215local3.id == "default";
      var __s215local6 = __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s215local0, "TestInstanceVO") || __s215local0.zone.indexOf("Test") > 0;
      var __s215local7 = __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s215local4, "TestInstanceVO") || __s215local0.zone.indexOf("Test") > 0;
      if (!__s215local1 || __s215local2 == null == __s215local5 || __s215local2 == __s215local3 || __s215local6 || __s215local7) {
        if (__dep_export_StartscreenHelper.StartscreenHelper.usesModernStartscreen(__s215local0.zoneId)) {
          __dep_exact_9e901e8e2483a22f_7.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f_1.BasicController.COMMAND_RELOAD_PAGE_WITH_ZONE_ID, __s215local0);
        } else if (__s215local0.instanceId != __dep_exact_9e901e8e2483a22f_3.BasicModel.instanceProxy.selectedInstanceVO.instanceId) {
          __dep_export_CastleModel.CastleModel.specialEventData.clearActiveEvents();
          __dep_exact_9e901e8e2483a22f_7.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f_1.BasicController.COMMAND_CONNECT_TO_INSTANCEVO, __s215local0);
          __dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.SERVER_SELECTION);
        }
      } else {
        __dep_exact_9e901e8e2483a22f_7.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f_1.BasicController.COMMAND_RELOAD_PAGE_WITH_ZONE_ID, __s215local0);
      }
    } else if (this.selectServerCombobox.itemData.length > 0) {
      this.selectServerCombobox.selectItemIndex(0);
    }
  };
  CastleStartscreenPanel.prototype.onTrackSelectWorld = function (__s223param0) {
    if (__s223param0) {
      __dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.SERVER_CHANGED);
    }
  };
  CastleStartscreenPanel.prototype.onMouseUpOnLayoutManager = function (__s226param0) {
    if (!__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s226param0.target, "Btn_OpenClose_CountrySelection") && __s226param0.target != this.registerDisp.mc_language) {
      this.selectCountryComponent.hideChoiceCountry();
    }
  };
  CastleStartscreenPanel.prototype.setFocusToRegister = function () {
    this.focusState = CastleStartscreenPanel.FOCUS_REGISTER;
    this._txtInput_usernameLogin.tabEnabled = false;
    this._txtInput_passwordLogin.tabEnabled = false;
    this._txtInput_usernameRegister.tabIndex = 1;
    this._txtInput_passwordRegister.tabIndex = 2;
    this._txtInput_usernameRegister.tabEnabled = true;
    this._txtInput_passwordRegister.tabEnabled = true;
  };
  CastleStartscreenPanel.prototype.setFocusToLogin = function () {
    this.focusState = CastleStartscreenPanel.FOCUS_LOGIN;
    this._txtInput_usernameRegister.tabEnabled = false;
    this._txtInput_passwordRegister.tabEnabled = false;
    this._txtInput_usernameLogin.tabIndex = 1;
    this._txtInput_passwordLogin.tabIndex = 2;
    this._txtInput_usernameLogin.tabEnabled = true;
    this._txtInput_passwordLogin.tabEnabled = true;
  };
  CastleStartscreenPanel.prototype.onMouseOver = function (__s233param0) {
    __s1param0.prototype.onMouseOver.call(this, __s233param0);
    if (!this.isLocked) {
      switch (__s233param0.target) {
        case this.registerDisp.btn_register:
          this.registerDisp.btn_register.mc_hoverState.visible = true;
          break;
        case this.loginDisp.mc_slideArea.btn_login:
          this.loginDisp.mc_slideArea.btn_login.mc_hoverState.visible = true;
          break;
        case this.loginDisp.mc_slideArea.btn_fblogin:
          this.loginDisp.mc_slideArea.btn_fblogin.mc_hoverState.visible = __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.loginDisp.mc_slideArea.btn_fblogin);
          break;
        case this.registerDisp.mc_nameSelection.i0:
        case this.registerDisp.mc_nameSelection.i1:
        case this.registerDisp.mc_nameSelection.i2:
        case this.registerDisp.mc_nameSelection.i3:
          var __s233local0 = __s233param0.target;
          __s233local0.scaleX = __s233local0.scaleY = 1.05;
      }
    }
  };
  CastleStartscreenPanel.prototype.onMouseOut = function (__s237param0) {
    __s1param0.prototype.onMouseOut.call(this, __s237param0);
    if (!this.isLocked) {
      switch (__s237param0.target) {
        case this.registerDisp.btn_register:
          this.registerDisp.btn_register.mc_hoverState.visible = false;
          this.registerDisp.btn_register.mc_pressedState.visible = false;
          break;
        case this.loginDisp.mc_slideArea.btn_login:
          this.loginDisp.mc_slideArea.btn_login.mc_hoverState.visible = false;
          this.loginDisp.mc_slideArea.btn_login.mc_pressedState.visible = false;
          break;
        case this.loginDisp.mc_slideArea.btn_fblogin:
          this.loginDisp.mc_slideArea.btn_fblogin.mc_hoverState.visible = false;
          break;
        case this.registerDisp.mc_nameSelection.i0:
        case this.registerDisp.mc_nameSelection.i1:
        case this.registerDisp.mc_nameSelection.i2:
        case this.registerDisp.mc_nameSelection.i3:
          var __s237local0 = __s237param0.target;
          __s237local0.scaleX = __s237local0.scaleY = 1;
      }
    }
  };
  CastleStartscreenPanel.prototype.onMouseDown = function (__s241param0) {
    __s1param0.prototype.onMouseDown.call(this, __s241param0);
    if (!this.isLocked) {
      switch (__s241param0.target) {
        case this.registerDisp.btn_register:
          this.registerDisp.btn_register.mc_pressedState.visible = true;
          break;
        case this.loginDisp.mc_slideArea.btn_login:
          this.loginDisp.mc_slideArea.btn_login.mc_pressedState.visible = true;
          break;
        case this.registerDisp.mc_nameSelection.i0:
        case this.registerDisp.mc_nameSelection.i1:
        case this.registerDisp.mc_nameSelection.i2:
        case this.registerDisp.mc_nameSelection.i3:
          var __s241local0 = __s241param0.target;
          this._txtInput_usernameRegister.textContentVO = new __dep_exact_92d05af59ee2ff30_2.TextVO(__s241local0.suggestedName);
      }
    }
  };
  CastleStartscreenPanel.prototype.onMouseUp = function (__s245param0) {
    __s1param0.prototype.onMouseUp.call(this, __s245param0);
    if (!this.isLocked) {
      switch (__s245param0.target) {
        case this.registerDisp.btn_register:
          this.registerDisp.btn_register.mc_pressedState.visible = false;
          break;
        case this.loginDisp.mc_slideArea.btn_login:
          this.loginDisp.mc_slideArea.btn_login.mc_pressedState.visible = false;
      }
    }
  };
  CastleStartscreenPanel.prototype.showLoginPanelImmediately = function () {
    if (!this.loginIsVisible) {
      this.setFocusToLogin();
      this.hideAllErrorMessages();
      this.loginDisp.mc_slideArea.y += 150;
      this.loginIsVisible = true;
      this.loginDisp.mc_slideArea.btn_loginArrow.gotoAndStop(2);
    }
  };
  CastleStartscreenPanel.prototype.showLoginPanel = function () {
    if (!this.loginIsVisible) {
      this.setFocusToLogin();
      this.hideAllErrorMessages();
      __dep_exact_608de47b6498f9b0_2.TweenMax.to(this.loginDisp.mc_slideArea, 0.5, {
        y: -2,
        ease: __dep_exact_608de47b6498f9b0_1.Linear.easeIn
      });
      this.loginIsVisible = true;
      this.loginDisp.mc_slideArea.btn_loginArrow.gotoAndStop(2);
    }
  };
  CastleStartscreenPanel.prototype.hideLoginPanel = function () {
    this.hideAllErrorMessages();
    this.setFocusToRegister();
    __dep_exact_608de47b6498f9b0_2.TweenMax.to(this.loginDisp.mc_slideArea, 0.5, {
      y: -152,
      ease: __dep_exact_608de47b6498f9b0_1.Linear.easeIn
    });
    this.loginIsVisible = false;
    this.loginDisp.mc_slideArea.btn_loginArrow.gotoAndStop(1);
  };
  CastleStartscreenPanel.prototype.onLogin = function () {
    if (!this.loginBlocked) {
      if (this.checkEmptyLoginCredentials()) {
        this.lockPanel();
        this.hideAllErrorMessages();
        __dep_export_CastleModel.CastleModel.userData.userName = __dep_exact_9e901e8e2483a22f_14.TextValide.getValideSmartFoxJSONTextMessage(this._txtInput_usernameLogin.text);
        __dep_export_CastleModel.CastleModel.userData.loginPwd = __dep_exact_9e901e8e2483a22f_14.TextValide.getValideSmartFoxJSONTextMessage(this._txtInput_passwordLogin.text);
        if (!__dep_export_CastleModel.CastleModel.userData.persistentLogin) {
          __dep_export_CastleModel.CastleModel.localData.saveUsername("");
        }
        __dep_exact_9e901e8e2483a22f_7.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f_1.BasicController.COMMAND_LOGIN);
        __dep_exact_9e901e8e2483a22f_7.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.INIT_EQUIPMENT_FAVORITES);
        __dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.LOGIN_CLICKED);
        this.disableLoginButtons();
      }
    }
  };
  CastleStartscreenPanel.prototype.updatePosition = function () {
    if (this.panelDisp && this.panelDisp.stage) {
      var __s262local0 = __dep_exact_f855840627e6e145.int(this.panelDisp.stage.stageWidth);
      var __s262local1 = __dep_exact_f855840627e6e145.int(this.panelDisp.stage.stageHeight);
      this.panelDisp.x = __s262local0 * 0.5;
      this.panelDisp.y = 0;
      this.registerDisp.x = 0;
      this.registerDisp.y = 170;
      var __s262local2 = __s262local0 - __dep_exact_f855840627e6e145.int(__s262local0 * 0.5 + 200);
      this.loginDisp.x = 200 + __s262local2 * 0.5;
      this.loginDisp.y = 0;
      this.countryDisp.x = 0;
      this.countryDisp.y = CastleStartscreenPanel.getBottomOffset(__s262local0, __s262local1) - 10;
      if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
        this.loginDisp.x = 0;
        __dep_export_CastleStartscreenComponent.CastleStartscreenComponent.onTouchMoveSignal.signal(null);
        if (__dep_exact_81dacdf05bd32292.MobileHelper.isLandscape()) {
          this.loginDisp.x = __s262local0 / 2 - 100;
          this.countryDisp.x = __s262local0 / 2 - 110;
        }
      }
    }
  };
  CastleStartscreenPanel.prototype.onResize = function (__s267param0) {
    if (!__dep_exact_81dacdf05bd32292_3.currentBrowserInfo.isMobile || !__dep_exact_81dacdf05bd32292.TextField.isMobileKeyboardShown) {
      __s1param0.prototype.onResize.call(this, __s267param0);
      this.updatePosition();
    }
  };
  CastleStartscreenPanel.prototype.onFontsLoaded = function (__s270param0) {
    if (this.isVisible()) {
      this.update();
    }
  };
  Object.defineProperty(CastleStartscreenPanel.prototype, "countryDisp", {
    get: function () {
      return this.panelDisp.mc_countrySelection;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartscreenPanel.prototype, "registerDisp", {
    get: function () {
      return this.panelDisp.mc_register;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartscreenPanel.prototype, "loginDisp", {
    get: function () {
      return this.panelDisp.mc_login;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartscreenPanel.prototype, "panelDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleStartscreenPanel.prototype.onFbCancelled = function (__s281param0) {
    this.controller.removeEventListener(__dep_export_CastleFacebookSDKEvent.CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onLoginWithFacebookDetails));
    this.controller.removeEventListener(__dep_export_CastleFacebookSDKEvent.CastleFacebookSDKEvent.NOT_AUTHORIZED, this.bindFunction(this.onFbCancelled));
    this.controller.removeEventListener(__dep_export_CastleFacebookSDKEvent.CastleFacebookSDKEvent.NOT_CONNECTED, this.bindFunction(this.onFbCancelled));
    this._registerBtnAlreadyClicked = false;
    this.unLockPanel();
    this.enableLoginButtons();
  };
  CastleStartscreenPanel.__initialize_static_members = function () {
    CastleStartscreenPanel.NAME = "CastleStartscreenPanel";
    CastleStartscreenPanel.FOCUS_LOGIN = "FOCUS_LOGIN";
    CastleStartscreenPanel.FOCUS_REGISTER = "FOCUS_REGISTER";
    CastleStartscreenPanel.FOCUS_NONE = "FOCUS_NONE";
  };
  CastleStartscreenPanel.getBottomOffset = function (__s285param0, __s285param1) {
    var __s285local0 = __dep_exact_f855840627e6e145.int(document.getElementById("edgeStartscreenVideoReplacement").clientHeight);
    return Math.min(__s285param1, __s285local0);
  };
  CastleStartscreenPanel.prototype.enableLoginButtons = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.loginDisp.mc_slideArea.btn_login, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.loginDisp.mc_slideArea.btn_fblogin, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.registerDisp.btn_register, true);
    this.loginBlocked = false;
    this._registerBtnAlreadyClicked = false;
  };
  CastleStartscreenPanel.prototype.disableLoginButtons = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.loginDisp.mc_slideArea.btn_login, false);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.loginDisp.mc_slideArea.btn_fblogin, false);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.registerDisp.btn_register, false);
    this.loginBlocked = true;
  };
  return CastleStartscreenPanel;
}(__dep_export_CastlePanel.CastlePanel);
exports.CastleStartscreenPanel = __s0local2;
var __dep_export_CastleTutorialArrowController = require("gge-module:export_CastleTutorialArrowController");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleFacebookModule = require("gge-module:export_CastleFacebookModule");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ComboboxComponent = require("gge-module:export_ComboboxComponent");
var __dep_export_CastleStandardOkLoginDialog = require("gge-module:export_CastleStandardOkLoginDialog");
var __dep_export_CastleLostPasswordDialog = require("gge-module:export_CastleLostPasswordDialog");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_StartscreenHelper = require("gge-module:export_StartscreenHelper");
__s0local2.__initialize_static_members();
