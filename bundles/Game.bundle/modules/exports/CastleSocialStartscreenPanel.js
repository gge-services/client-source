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
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_e9ed30ab7bbf7f50 = require("gge-module:exact_e9ed30ab7bbf7f50");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_CastleRegisterErrorEvent = require("gge-module:export_CastleRegisterErrorEvent");
var __dep_export_ClientBetaHelper = require("gge-module:export_ClientBetaHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_ComboboxItemRendererServerSelection = require("gge-module:export_ComboboxItemRendererServerSelection");
var __dep_export_ComboboxItemRendererVO = require("gge-module:export_ComboboxItemRendererVO");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __s0local0 = function (__s1param0) {
  function CastleSocialStartscreenPanel() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, new (__dep_exact_81dacdf05bd32292.getDefinitionByName("CastleSocialStartscreen_Toaster"))()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSocialStartscreenPanel, __s1param0);
  CastleSocialStartscreenPanel.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.initGoodgameTextfields();
    this.initLanguageSelection();
    this.initServerSelection();
  };
  CastleSocialStartscreenPanel.prototype.initGoodgameTextfields = function () {
    this.initUsernameInputTextField();
    this.textFieldManager.registerTextField(this.panelDisp.mc_username.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("generic_username_login"));
    this.textFieldManager.registerTextField(this.panelDisp.mc_nameSelection.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_createAccount_chooseName"));
    this.i_register_txt_label = this.textFieldManager.registerTextField(this.panelDisp.btn_register.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("generic_register_letsgo"));
    this.i_register_txt_label.verticalAlign = __dep_exact_9e901e8e2483a22f_11.GGSVerticalAlign.MIDDLE;
  };
  CastleSocialStartscreenPanel.prototype.initUsernameInputTextField = function () {
    this.defaultNameString = this.getDefaultNameString();
    this.i_username_txt_input = this.textFieldManager.registerTextField(this.panelDisp.mc_username.txt_input, new __dep_exact_92d05af59ee2ff30_2.TextVO(this.defaultNameString));
    this.i_username_txt_input.textContentDefaultVO = new __dep_exact_92d05af59ee2ff30_2.TextVO(this.defaultNameString);
    this.i_username_txt_input.maxChars = __dep_exact_e9ed30ab7bbf7f50.CredentialsValidationConstants.USERNAME_MAX_LENGTH;
    this.updateSocialPlayerName(__dep_exact_9e901e8e2483a22f_3.BasicModel.socialData.displayNameExistingPlayer);
  };
  CastleSocialStartscreenPanel.prototype.updateSocialPlayerName = function (__s11param0) {
    this.defaultNameString = this.getDefaultNameString();
    if (__s11param0 && __s11param0 != "") {
      this.i_username_txt_input.textContentVO.stringValue = __s11param0;
      this.i_username_txt_input.type = __dep_exact_81dacdf05bd32292_1.TextFieldType.DYNAMIC;
      this.i_username_txt_input.selectable = false;
      this.panelDisp.mc_username.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_DESATURATED_BUTTON_COLOR_MATRIX);
    } else {
      this.i_username_txt_input.textContentVO.stringValue = this.defaultNameString;
      this.i_username_txt_input.type = __dep_exact_81dacdf05bd32292_1.TextFieldType.INPUT;
      this.i_username_txt_input.selectable = true;
      this.panelDisp.mc_username.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
    }
  };
  CastleSocialStartscreenPanel.prototype.getDefaultNameString = function () {
    var __s15local0 = this.env.displayName;
    var __s15local1 = __dep_exact_9e901e8e2483a22f_3.BasicModel.socialData.displayNameExistingPlayer;
    this.defaultNameString = __s15local1 && __s15local1 != "" ? __s15local1 : __s15local0 && __s15local0 != "" ? __s15local0.substr(0, this.env.maxUsernameLength) : __dep_exact_92d05af59ee2ff30.Localize.text("generic_username_login");
    return this.defaultNameString;
  };
  CastleSocialStartscreenPanel.prototype.initServerSelection = function () {
    this.selectServerCombobox = new __dep_export_ComboboxComponent.ComboboxComponent(this.panelDisp.cbx_world, "", -1, 25, 17, -1, 0, new __dep_export_ComboboxItemRendererServerSelection.ComboboxItemRendererServerSelection(), 8, false, false, 6, "comboBgrTop");
    __dep_export_ClientBetaHelper.ClientBetaHelper.setSupportContextMenu();
  };
  CastleSocialStartscreenPanel.prototype.initLanguageSelection = function () {
    this.selectCountryComponent = new __dep_exact_9e901e8e2483a22f_7.CountrySelectComponent(this.panelDisp.mc_language, new (__dep_exact_81dacdf05bd32292.getDefinitionByName("CountrySelectionTooltip"))(), __dep_exact_9e901e8e2483a22f_10.GGSCountryController.instance.activeCountries, 2, __dep_exact_9e901e8e2483a22f_3.BasicModel.languageData.getTextById);
    this.panelDisp.mc_language.visible = __dep_export_CastleModel.CastleModel.worldAssignment.facade.activeCountries.length > 1;
    this.panelDisp.setChildIndex(this.panelDisp.mc_language, this.panelDisp.numChildren - 1);
  };
  CastleSocialStartscreenPanel.prototype.destroy = function () {
    this.removeEventlistener();
    __s1param0.prototype.destroy.call(this);
  };
  CastleSocialStartscreenPanel.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.addEventlistener();
  };
  CastleSocialStartscreenPanel.prototype.hide = function () {
    this.layoutManager.enableProgressbar();
    this.removeEventlistener();
    __s1param0.prototype.hide.call(this);
  };
  CastleSocialStartscreenPanel.prototype.addEventlistener = function () {
    __dep_exact_9e901e8e2483a22f_10.GGSCountryController.instance.currentCountryChanged.add(this.bindFunction(this.onCountryChanged));
    this.selectCountryComponent.addEventListener(__dep_exact_9e901e8e2483a22f_8.CountrySelectComponentEvent.COUNTRY_CHANGED, this.bindFunction(this.onCountrySelected));
    __dep_exact_9e901e8e2483a22f_2.BasicLanguageFontManager.getInstance().addEventListener(__dep_exact_9e901e8e2483a22f_13.LanguageDataEvent.FONT_LOAD_COMPLETE, this.bindFunction(this.updateElementsOnFontsLoaded), false, -50);
    this.controller.addEventListener(__dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.REGISTER_ERROR, this.bindFunction(this.onRegisterError));
    this.panelDisp.cbx_world.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectWorld));
    this.selectServerCombobox.userClickItemSignal.add(this.bindFunction(this.onTrackSelectWorld));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_exact_9e901e8e2483a22f_14.SocialDataEvent.SOCIAL_PLAYER_NAME_CHANGED, this.bindFunction(this.onSocialPlayerNameChanged));
    this.i_username_txt_input.click.add(this.bindFunction(this.clickHandler));
  };
  CastleSocialStartscreenPanel.prototype.removeEventlistener = function () {
    __dep_exact_9e901e8e2483a22f_10.GGSCountryController.instance.currentCountryChanged.remove(this.bindFunction(this.onCountryChanged));
    this.selectCountryComponent.removeEventListener(__dep_exact_9e901e8e2483a22f_8.CountrySelectComponentEvent.COUNTRY_CHANGED, this.bindFunction(this.onCountrySelected));
    __dep_exact_9e901e8e2483a22f_2.BasicLanguageFontManager.getInstance().removeEventListener(__dep_exact_9e901e8e2483a22f_13.LanguageDataEvent.FONT_LOAD_COMPLETE, this.bindFunction(this.updateElementsOnFontsLoaded));
    this.controller.removeEventListener(__dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.REGISTER_ERROR, this.bindFunction(this.onRegisterError));
    this.panelDisp.cbx_world.removeEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectWorld));
    this.selectServerCombobox.userClickItemSignal.remove(this.bindFunction(this.onTrackSelectWorld));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_exact_9e901e8e2483a22f_14.SocialDataEvent.SOCIAL_PLAYER_NAME_CHANGED, this.bindFunction(this.onSocialPlayerNameChanged));
    this.i_username_txt_input.click.remove(this.bindFunction(this.clickHandler));
  };
  CastleSocialStartscreenPanel.prototype.applyProperties = function () {
    this.layoutManager.disableProgressbar();
    this.panelDisp.btn_register.mc_hoverState.visible = false;
    this.panelDisp.btn_register.mc_pressedState.visible = false;
    var __s31local0 = __dep_exact_9e901e8e2483a22f_10.GGSCountryController.instance.currentCountry;
    this.selectCountryComponent.setDefaultCountry(__s31local0);
    this.update();
    __dep_exact_9e901e8e2483a22f_5.ClientFunnelTrackingController.getInstance().trackState("joined_startscreen");
  };
  CastleSocialStartscreenPanel.prototype.clickHandler = function (__s33param0) {
    this.hideAllErrorMessages();
  };
  CastleSocialStartscreenPanel.prototype.updateElementsOnFontsLoaded = function (__s35param0) {
    this.update();
  };
  CastleSocialStartscreenPanel.prototype.onSocialPlayerNameChanged = function (__s37param0) {
    this.updateSocialPlayerName(__s37param0.playerName);
  };
  CastleSocialStartscreenPanel.prototype.onSelectWorld = function (__s39param0) {
    if (this.selectServerCombobox.selectedId != -1) {
      var __s39local0 = this.selectServerCombobox.selectedData;
      if (__s39local0.instanceId != __dep_exact_9e901e8e2483a22f_3.BasicModel.instanceProxy.selectedInstanceVO.instanceId) {
        __dep_export_CastleModel.CastleModel.specialEventData.clearActiveEvents();
        __dep_exact_9e901e8e2483a22f_6.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f_1.BasicController.COMMAND_CONNECT_TO_INSTANCEVO, __s39local0);
      }
      __dep_export_ClientBetaHelper.ClientBetaHelper.setSupportContextMenu();
    } else if (this.selectServerCombobox.itemData.length > 0) {
      this.selectServerCombobox.selectItemIndex(0);
    }
  };
  CastleSocialStartscreenPanel.prototype.initSelectServerCombobox = function () {
    var __s44local0;
    this.selectServerCombobox.clearItems();
    var __s44local1 = this.env.isTest ? __dep_exact_9e901e8e2483a22f_3.BasicModel.instanceProxy.instanceMap : __dep_exact_9e901e8e2483a22f_3.BasicModel.instanceProxy.getInstancesForActualCountry();
    for (var __s44local2 = __dep_exact_f855840627e6e145.int(__s44local1.length - 1); __s44local2 >= 0; __s44local2--) {
      var __s44local3 = __s44local1[__s44local2];
      (__s44local0 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).itemLabel = __dep_exact_92d05af59ee2ff30.Localize.text(__s44local3.instanceLocaId);
      __s44local0.data = __s44local3;
      this.selectServerCombobox.addItem(__s44local0);
    }
    this.selectInstance(__dep_exact_9e901e8e2483a22f_3.BasicModel.instanceProxy.selectedInstanceVO.instanceId);
    this.selectServerCombobox.disp.visible = __s44local1.length > 1 || this.env.isTest;
  };
  CastleSocialStartscreenPanel.prototype.selectInstance = function (__s48param0) {
    for (var __s48local0 = 0; __s48local0 < this.selectServerCombobox.itemData.length; __s48local0++) {
      if (this.selectServerCombobox.itemData[__s48local0].data.instanceId == __s48param0) {
        this.selectServerCombobox.selectItemIndex(__s48local0);
        return;
      }
    }
    this.selectServerCombobox.selectItemIndex(1);
  };
  CastleSocialStartscreenPanel.prototype.onCountryChanged = function (__s53param0) {
    this.update();
  };
  CastleSocialStartscreenPanel.prototype.onClick = function (__s55param0) {
    __s1param0.prototype.onClick.call(this, __s55param0);
    switch (__s55param0.target) {
      case this.panelDisp.btn_register:
        this.onRegister();
        break;
      case this.panelDisp.mc_nameSelection.i0:
      case this.panelDisp.mc_nameSelection.i1:
      case this.panelDisp.mc_nameSelection.i2:
      case this.panelDisp.mc_nameSelection.i3:
        var __s55local0 = __s55param0.target;
        this.i_username_txt_input.clearText();
        this.i_username_txt_input.textContentVO = new __dep_exact_92d05af59ee2ff30_2.TextVO(this.textFieldManager.getTextField(__s55local0.txt_Name).text);
        this.hideAllErrorMessages();
    }
  };
  CastleSocialStartscreenPanel.prototype.onRegister = function () {
    this.hideAllErrorMessages();
    if (this.i_username_txt_input.text.length == 0 || this.i_username_txt_input.text == __dep_exact_92d05af59ee2ff30.Localize.text("generic_username_login")) {
      __dep_exact_9e901e8e2483a22f_5.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_4.ClientFunnelGameStates.ERROR_CLICK_REGISTER_WITHOUT_DATA_SSO);
      __dep_exact_9e901e8e2483a22f_5.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_4.ClientFunnelGameStates.ERROR_NAME_EMPTY);
      this.showNameError("error_name_empty");
      return;
    }
    __dep_exact_9e901e8e2483a22f_5.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_4.ClientFunnelGameStates.CLICK_REGISTER_WITH_DATA_SSO);
    if (this.i_username_txt_input.text.length < __dep_exact_9e901e8e2483a22f_3.BasicModel.basicLocalization.getUsernameMinLength) {
      __dep_exact_9e901e8e2483a22f_5.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_4.ClientFunnelGameStates.ERROR_NAME_TOO_SHORT);
      this.showNameError("error_name_too_short");
      return;
    }
    if (__dep_exact_9e901e8e2483a22f_15.TextValide.isUsernameValide(this.i_username_txt_input.text)) {
      __dep_exact_9e901e8e2483a22f_3.BasicModel.socialData.setDisplayNameExistingPlayer(this.i_username_txt_input.text);
      __dep_exact_9e901e8e2483a22f_6.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f_1.BasicController.COMMAND_SOCIAL_LOGIN);
    } else {
      __dep_exact_9e901e8e2483a22f_5.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_4.ClientFunnelGameStates.ERROR_NAME_INVALID);
      this.showNameError("error_name_invalid");
      var __s58local0 = __dep_exact_9e901e8e2483a22f_15.TextValide.getValidUsername(this.i_username_txt_input.text);
      if (__s58local0 != "" && __dep_exact_9e901e8e2483a22f_15.TextValide.isUsernameValide(__s58local0)) {
        this.initNameSelection([__s58local0]);
      }
    }
  };
  CastleSocialStartscreenPanel.prototype.update = function () {
    this.hideAllErrorMessages();
    this.panelDisp.btn_register.actLikeButton = true;
    this.panelDisp.scaleY *= 1.0001;
    this.panelDisp.scaleX *= 1.0001;
    this.unLockPanel();
    this.initSelectServerCombobox();
    this.updatePosition();
  };
  CastleSocialStartscreenPanel.prototype.hideAllErrorMessages = function () {
    if (this.selectCountryComponent) {
      this.selectCountryComponent.hideChoiceCountry();
    }
    this.panelDisp.mc_nameSelection.visible = false;
    this.panelDisp.mc_errorName.visible = false;
  };
  CastleSocialStartscreenPanel.prototype.showNameError = function (__s70param0) {
    if (this.i_errorname_txt_error) {
      this.i_errorname_txt_error.textContentVO.textId = __s70param0;
    } else {
      this.i_errorname_txt_error = this.textFieldManager.registerTextField(this.panelDisp.mc_errorName.txt_errorText, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s70param0));
      this.i_errorname_txt_error.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.MIDDLE;
    }
    this.panelDisp.mc_username.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
    this.i_username_txt_input.type = __dep_exact_81dacdf05bd32292_1.TextFieldType.INPUT;
    this.i_username_txt_input.selectable = true;
    this.panelDisp.mc_errorName.visible = true;
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.panelDisp.mc_errorName, 0.5, {
      scaleX: 0,
      scaleY: 0
    }, {
      scaleX: 1,
      scaleY: 1,
      ease: __dep_exact_608de47b6498f9b0.Bounce.easeOut
    });
  };
  CastleSocialStartscreenPanel.prototype.initNameSelection = function (__s74param0) {
    var __s74local0;
    for (var __s74local1 = 0; __s74local1 < 4; __s74local1++) {
      var __s74local2 = this.panelDisp.mc_nameSelection["i" + __s74local1];
      __s74local2.actLikeButton = true;
      __s74local2.mouseChildren = false;
      __s74local0 = "";
      if (__s74local1 < __s74param0.length) {
        __s74local0 = __s74param0[__s74local1];
      }
      if (__s74local0 != "") {
        if (__s74local2.itxt_name) {
          __s74local2.itxt_name.textContentVO.stringValue = __s74local0;
        } else {
          this.textFieldManager.registerTextField(__s74local2.txt_Name, new __dep_exact_92d05af59ee2ff30_2.TextVO(__s74local0));
        }
      } else {
        __s74local2.visible = false;
      }
    }
    this.panelDisp.mc_nameSelection.visible = true;
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.panelDisp.mc_nameSelection, 0.5, {
      scaleX: 0,
      scaleY: 0
    }, {
      scaleX: 1.3,
      scaleY: 1.3,
      ease: __dep_exact_608de47b6498f9b0.Bounce.easeOut
    });
  };
  CastleSocialStartscreenPanel.prototype.onCountrySelected = function (__s83param0) {
    var __s83local0 = __s83param0.selectedCountry;
    __dep_exact_9e901e8e2483a22f_6.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f_1.BasicController.COMMAND_CHANGE_COUNTRY, __s83local0);
    __dep_exact_9e901e8e2483a22f_9.ExternalInterfaceController.instance.executeJavaScriptFunction(new __dep_exact_9e901e8e2483a22f_12.JavascriptCallSetLanguageFactory());
    var __s83local1 = __dep_exact_9e901e8e2483a22f_3.BasicModel.instanceProxy.selectedInstanceVO;
    if (__dep_exact_9e901e8e2483a22f_3.BasicModel.branchesModel && __dep_exact_9e901e8e2483a22f_3.BasicModel.branchesModel.branchByZoneId(__s83local1.zoneId.toString()) != __dep_exact_9e901e8e2483a22f_3.BasicModel.branchesModel.currentBranch) {
      __dep_exact_9e901e8e2483a22f_6.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f_1.BasicController.COMMAND_RELOAD_PAGE_WITH_ZONE_ID, __s83local1);
    }
  };
  CastleSocialStartscreenPanel.prototype.onTrackSelectWorld = function (__s86param0) {
    if (__s86param0) {
      __dep_exact_9e901e8e2483a22f_5.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_4.ClientFunnelGameStates.SERVER_CHANGED);
    }
  };
  CastleSocialStartscreenPanel.prototype.onRegisterError = function (__s89param0) {
    switch (__s89param0.errorType) {
      case __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.INVALID_NAME:
        __dep_exact_9e901e8e2483a22f_5.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_4.ClientFunnelGameStates.ERROR_NAME_INVALID);
        this.showNameError("error_name_invalid");
        break;
      case __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.USAGE_OF_BADWORDS:
        __dep_exact_9e901e8e2483a22f_5.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_4.ClientFunnelGameStates.ERROR_NAME_BADWORD);
        this.showNameError("error_badword");
        break;
      case __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.NAME_ALREADY_IN_USE:
        __dep_exact_9e901e8e2483a22f_5.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_4.ClientFunnelGameStates.ERROR_NAME_EXISTS);
        this.showNameError("error_name_exists");
        this.initNameSelection(__s89param0.params.NS);
        break;
      case __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.NAME_HAS_ONLY_NUMBERS:
        __dep_exact_9e901e8e2483a22f_5.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_4.ClientFunnelGameStates.ERROR_NAME_INVALID);
        this.showNameError("error_name_is_number");
    }
  };
  CastleSocialStartscreenPanel.prototype.onKeyUp = function (__s92param0) {
    if (!this.isLocked) {
      switch (__s92param0.target) {
        case this.panelDisp.mc_username.txt_input:
          if (this.panelDisp.mc_username.txt_input.length == 1) {
            __dep_exact_9e901e8e2483a22f_5.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_4.ClientFunnelGameStates.ENTER_NAME);
          }
      }
    }
  };
  CastleSocialStartscreenPanel.prototype.onMouseOver = function (__s97param0) {
    __s1param0.prototype.onMouseOver.call(this, __s97param0);
    switch (__s97param0.target) {
      case this.panelDisp.btn_register:
        this.panelDisp.btn_register.mc_hoverState.visible = true;
        break;
      case this.panelDisp.mc_nameSelection.i0:
      case this.panelDisp.mc_nameSelection.i1:
      case this.panelDisp.mc_nameSelection.i2:
      case this.panelDisp.mc_nameSelection.i3:
        var __s97local0 = __s97param0.target;
        __s97local0.scaleX = __s97local0.scaleY = 1.05;
    }
  };
  CastleSocialStartscreenPanel.prototype.onMouseOut = function (__s100param0) {
    __s1param0.prototype.onMouseOut.call(this, __s100param0);
    switch (__s100param0.target) {
      case this.panelDisp.btn_register:
        this.panelDisp.btn_register.mc_hoverState.visible = false;
        this.panelDisp.btn_register.mc_pressedState.visible = false;
        break;
      case this.panelDisp.mc_nameSelection.i0:
      case this.panelDisp.mc_nameSelection.i1:
      case this.panelDisp.mc_nameSelection.i2:
      case this.panelDisp.mc_nameSelection.i3:
        var __s100local0 = __s100param0.target;
        __s100local0.scaleX = __s100local0.scaleY = 1;
    }
  };
  CastleSocialStartscreenPanel.prototype.onMouseDown = function (__s103param0) {
    __s1param0.prototype.onMouseDown.call(this, __s103param0);
    switch (__s103param0.target) {
      case this.panelDisp.btn_register:
        this.panelDisp.btn_register.mc_pressedState.visible = true;
    }
  };
  CastleSocialStartscreenPanel.prototype.onMouseUp = function (__s106param0) {
    __s1param0.prototype.onMouseUp.call(this, __s106param0);
    switch (__s106param0.target) {
      case this.panelDisp.btn_register:
        this.panelDisp.btn_register.mc_pressedState.visible = false;
    }
  };
  CastleSocialStartscreenPanel.prototype.updatePosition = function () {
    if (this.panelDisp && this.panelDisp.stage) {
      var __s109local0 = __dep_exact_f855840627e6e145.int(this.panelDisp.stage.stageWidth);
      var __s109local1 = __dep_exact_f855840627e6e145.int(this.panelDisp.stage.stageHeight);
      this.panelDisp.x = __s109local0 * 0.5;
      this.panelDisp.y = 0;
      this.panelDisp.mc_username.y = 250;
      this.panelDisp.btn_register.y = this.panelDisp.mc_username.y + 170;
      this.panelDisp.mc_errorName.y = this.panelDisp.mc_username.y + this.i_username_txt_input.y + this.i_username_txt_input.height / 2;
      this.panelDisp.mc_nameSelection.y = this.panelDisp.mc_errorName.y + 120;
      this.panelDisp.mc_nameSelection.x += 15;
      __dep_exact_f855840627e6e145.int(__s109local0 * 0.5 - 200);
      if (this.panelDisp.mc_language.visible && this.panelDisp.cbx_world.visible) {
        var __s109local2 = __dep_exact_f855840627e6e145.int((this.panelDisp.mc_language.width + CastleSocialStartscreenPanel.LANGUAGE_WORLD_SPACING + this.panelDisp.cbx_world.width) / 2);
        this.panelDisp.mc_language.x = this.panelDisp.mc_language.width - __s109local2;
        this.panelDisp.mc_language.y = __s109local1 - 10;
        this.panelDisp.cbx_world.x = this.panelDisp.mc_language.x + CastleSocialStartscreenPanel.LANGUAGE_WORLD_SPACING;
        this.panelDisp.cbx_world.y = __s109local1 - 10 - 31.5;
      } else {
        this.panelDisp.mc_language.x = this.panelDisp.mc_language.width * 0.5;
        this.panelDisp.mc_language.y = __s109local1 - 10;
        this.panelDisp.cbx_world.x = this.panelDisp.cbx_world.width * -0.5;
        this.panelDisp.cbx_world.y = __s109local1 - 10 - 31.5;
      }
    }
  };
  Object.defineProperty(CastleSocialStartscreenPanel.prototype, "panelDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleSocialStartscreenPanel.__initialize_static_members = function () {
    CastleSocialStartscreenPanel.NAME = "CastleSocialStartscreenPanel";
    CastleSocialStartscreenPanel.LANGUAGE_WORLD_SPACING = 20;
  };
  return CastleSocialStartscreenPanel;
}(require("gge-module:export_CastlePanel").CastlePanel);
exports.CastleSocialStartscreenPanel = __s0local0;
var __dep_export_ComboboxComponent = require("gge-module:export_ComboboxComponent");
__s0local0.__initialize_static_members();
