Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstInstanceIDs = require("gge-module:export_ClientConstInstanceIDs");
var __dep_export_CastleZoomEvent = require("gge-module:export_CastleZoomEvent");
var __dep_export_HelpshiftHelper = require("gge-module:export_HelpshiftHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleNewsHubOverlay = require("gge-module:export_CastleNewsHubOverlay");
var __dep_export_NewsHubTrackingEvent = require("gge-module:export_NewsHubTrackingEvent");
var __dep_export_CastleWelcomeBetaTestDialog = require("gge-module:export_CastleWelcomeBetaTestDialog");
var __dep_export_CastleWelcomeBetaTestDialogProperties = require("gge-module:export_CastleWelcomeBetaTestDialogProperties");
var __dep_export_OptionsDialog = require("gge-module:export_OptionsDialog");
var __dep_export_OptionsDialogProperties = require("gge-module:export_OptionsDialogProperties");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleForumHelper = require("gge-module:export_CastleForumHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CastleSublayerPanel = require("gge-module:export_CastleSublayerPanel");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CastleOptionPanel() {
    return __s1param0.call(this, new Library.CastleInterfaceElements.OptionPanel2()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleOptionPanel, __s1param0);
  CastleOptionPanel.prototype.initBetaBanner = function () {
    this.panelDisp.betaTestBanner.visible = __dep_export_ClientConstInstanceIDs.ClientConstInstanceIDs.isBetaInstance() || __dep_exact_81dacdf05bd32292.instanceOfClass(this.env, "CastleEnvironmentGlobals") && this.env.isClosedBeta;
  };
  CastleOptionPanel.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.addSublayer(this.panelDisp.sublayer_help);
    this.addSublayer(this.panelDisp.sublayer_help_newsHub);
    this.addSublayer(this.panelDisp.sublayer_options);
    this.panelDisp.addEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onSublayerRollOut));
    this.panelDisp.btn_logout.toolTipText = "panel_option_logout";
    this.panelDisp.btn_logout.visible = !this.env.loginIsKeyBased || __dep_exact_9e901e8e2483a22f.BasicModel.socialData.logoutSupported();
    this.panelDisp.btn_help.toolTipText = "generic_help";
    this.panelDisp.btn_zoomIn.toolTipText = "panel_option_zoomIn";
    this.panelDisp.btn_zoomOut.toolTipText = "panel_option_zoomOut";
    this.panelDisp.btn_options.toolTipText = "panel_option_config";
    this.panelDisp.btn_discord.toolTipText = "panel_option_discord";
    this.panelDisp.sublayer_options.btn_fullscreen.toolTipText = "panel_option_fullscreen";
    this.panelDisp.sublayer_options.btn_settings.toolTipText = "panel_option_options";
    this.panelDisp.sublayer_options.btn_music.toolTipText = "generic_music";
    this.panelDisp.sublayer_help.btn_ingameHelp.toolTipText = this.panelDisp.sublayer_help.btn_ingameHelp.enabled ? "panel_option_ingameHelp" : "dialog_needQuestProgress_tooltip";
    this.panelDisp.sublayer_help_newsHub.btn_ingameHelp.toolTipText = this.panelDisp.sublayer_help_newsHub.btn_ingameHelp.enabled ? "panel_option_ingameHelp" : "dialog_needQuestProgress_tooltip";
    this.panelDisp.sublayer_help.btn_commHub.toolTipText = "panel_option_communityHub";
    this.panelDisp.sublayer_help_newsHub.btn_commHub.toolTipText = "panel_option_communityHub";
    this.panelDisp.sublayer_help_newsHub.btn_newshub.toolTipText = "dialog_newshub_title";
    if (this.panelDisp.sublayer_help.mc_new) {
      this.panelDisp.sublayer_help.mc_new.visible = false;
      this.panelDisp.sublayer_help.mc_new.mouseEnable = false;
    }
    if (this.panelDisp.sublayer_help_newsHub.mc_new) {
      this.panelDisp.sublayer_help_newsHub.mc_new.visible = false;
      this.panelDisp.sublayer_help_newsHub.mc_new.mouseEnable = false;
    }
    if (this.panelDisp.sublayer_help.btn_helpshift) {
      this.panelDisp.sublayer_help.btn_helpshift.toolTipText = "panel_option_supportChat";
    }
    if (this.panelDisp.sublayer_help_newsHub.btn_helpshift) {
      this.panelDisp.sublayer_help_newsHub.btn_helpshift.toolTipText = "panel_option_supportChat";
    }
    if (this.panelDisp.mc_new) {
      this.panelDisp.mc_new.visible = false;
      this.panelDisp.mc_new.mouseEnable = false;
    }
    this.initBetaBanner();
    this.setSoundButtons();
    this.textFieldManager.registerTextField(this.panelDisp.betaTestBanner.txt_beta, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_testServer_banner")).autoFitToBounds = true;
    this.allowCaching = true;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.panelDisp.sublayer_options.btn_settings, this.panelDisp.sublayer_help.btn_commHub, this.panelDisp.sublayer_help.btn_helpshift, this.panelDisp.sublayer_help_newsHub.btn_commHub, this.panelDisp.sublayer_help_newsHub.btn_helpshift, this.panelDisp.sublayer_help_newsHub.btn_newshub]);
    __dep_export_HelpshiftHelper.HelpshiftHelper.getInstance().newMessage.add(this.bindFunction(this.onNewHelpshiftMessages));
    this.onNewHelpshiftMessages();
  };
  CastleOptionPanel.prototype.destroy = function () {
    this.panelDisp.removeEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onSublayerRollOut));
    __dep_export_HelpshiftHelper.HelpshiftHelper.getInstance().newMessage.remove(this.bindFunction(this.onNewHelpshiftMessages));
    __s1param0.prototype.destroy.call(this);
  };
  CastleOptionPanel.prototype.onNewHelpshiftMessages = function (__s16param0 = 0) {
    if (this.panelDisp.sublayer_help.mc_new) {
      this.panelDisp.sublayer_help.mc_new.visible = __dep_export_HelpshiftHelper.HelpshiftHelper.getInstance().newMessagesCount > 0;
      if (this.panelDisp.sublayer_help_newsHub.mc_new) {
        this.panelDisp.sublayer_help_newsHub.mc_new.visible = __dep_export_HelpshiftHelper.HelpshiftHelper.getInstance().newMessagesCount > 0;
        this.panelDisp.mc_new.visible = __dep_export_HelpshiftHelper.HelpshiftHelper.getInstance().newMessagesCount > 0;
        __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(this.panelDisp);
      }
    }
  };
  CastleOptionPanel.prototype.onKeyUp = function (__s20param0) {
    __s1param0.prototype.onKeyUp.call(this, __s20param0);
    if (__s20param0.ctrlKey && __s20param0.altKey && __s20param0.key == __dep_exact_81dacdf05bd32292.Keyboard.M) {
      this.onToggleMusic();
    }
  };
  CastleOptionPanel.prototype.onClick = function (__s23param0) {
    if (!this.isLocked && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s23param0.target)) {
      __s1param0.prototype.onClick.call(this, __s23param0);
      this.layoutManager.hideAllIngameUIComponents();
      switch (__s23param0.target) {
        case this.panelDisp.btn_logout:
          __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_LOGOUT);
          break;
        case this.panelDisp.btn_help:
          this.showSubLayer(__dep_export_CastleModel.CastleModel.userData.enableNewsHub ? this.panelDisp.sublayer_help_newsHub : this.panelDisp.sublayer_help);
          if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s23param0)) {
            this.hideSubLayer(this.panelDisp.sublayer_options, true);
          }
          break;
        case this.panelDisp.btn_zoomIn:
          this.controller.dispatchEvent(new __dep_export_CastleZoomEvent.CastleZoomEvent(__dep_export_CastleZoomEvent.CastleZoomEvent.ZOOM, __dep_export_CastleZoomEvent.CastleZoomEvent.ZOOM_IN));
          break;
        case this.panelDisp.btn_zoomOut:
          this.controller.dispatchEvent(new __dep_export_CastleZoomEvent.CastleZoomEvent(__dep_export_CastleZoomEvent.CastleZoomEvent.ZOOM, __dep_export_CastleZoomEvent.CastleZoomEvent.ZOOM_OUT));
          break;
        case this.panelDisp.btn_options:
          var __s23local0 = this.panelDisp.sublayer_options;
          var __s23local1 = __s23local0.visible;
          this.showSubLayer(__s23local0);
          if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s23param0)) {
            if (__s23local1) {
              this.hideSubLayer(__s23local0, true);
            } else if (this.panelDisp.cacheCanvas) {
              __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(this.panelDisp);
            }
          }
          break;
        case this.panelDisp.sublayer_help.btn_commHub:
        case this.panelDisp.sublayer_help_newsHub.btn_commHub:
          if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s23param0)) {
            this.hideSubLayer(this.panelDisp.sublayer_options, true);
          }
          var __s23local2 = new __dep_exact_81dacdf05bd32292.URLRequest("https://communityhub.goodgamestudios.com/");
          __dep_exact_9e901e8e2483a22f.BrowserUtil.executeNavigateToURL(__s23local2, "_blank");
          break;
        case this.panelDisp.sublayer_options.btn_fullscreen:
          if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s23param0)) {
            this.hideSubLayer(this.panelDisp.sublayer_options, true);
          }
          this.layoutManager.toggleFullscreen();
          break;
        case this.panelDisp.sublayer_options.btn_settings:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_OptionsDialog.OptionsDialog, new __dep_export_OptionsDialogProperties.OptionsDialogProperties());
          if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s23param0)) {
            this.hideSubLayer(this.panelDisp.sublayer_options, true);
          }
          break;
        case this.panelDisp.sublayer_options.btn_music:
          this.onToggleMusic();
          break;
        case this.panelDisp.sublayer_help.btn_faq:
        case this.panelDisp.sublayer_help_newsHub.btn_faq:
          if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s23param0)) {
            this.hideSubLayer(this.panelDisp.sublayer_options, true);
          }
          __dep_export_CastleForumHelper.CastleForumHelper.goToWiki();
          this.layoutManager.revertFullscreen();
          break;
        case this.panelDisp.sublayer_help.btn_ingameHelp:
        case this.panelDisp.sublayer_help_newsHub.btn_ingameHelp:
          __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_INGAMEHELP_COMMAND);
          break;
        case this.panelDisp.sublayer_help.btn_helpshift:
        case this.panelDisp.sublayer_help_newsHub.btn_helpshift:
          __dep_export_HelpshiftHelper.HelpshiftHelper.getInstance().showChatWidget();
          break;
        case this.panelDisp.betaTestBanner:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleWelcomeBetaTestDialog.CastleWelcomeBetaTestDialog, new __dep_export_CastleWelcomeBetaTestDialogProperties.CastleWelcomeBetaTestDialogProperties());
          break;
        case this.panelDisp.sublayer_help_newsHub.btn_newshub:
          __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_CastleBasicController.CastleBasicController.TRACK_NEWSHUB_OPENED, [__dep_export_NewsHubTrackingEvent.NewsHubTrackingEvent.SOURCE_SETTINGS_BAR]);
          __dep_export_CastleNewsHubOverlay.CastleNewsHubOverlay.open();
          break;
        case this.panelDisp.btn_discord:
          __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_CastleBasicController.CastleBasicController.OPEN_DISCORD);
      }
    }
  };
  CastleOptionPanel.prototype.onToggleMusic = function () {
    __dep_exact_9e901e8e2483a22f.BasicController.getInstance().soundController.toggleMuteMusic();
    __dep_exact_9e901e8e2483a22f.BasicController.getInstance().saveSoundSettings();
    this.setSoundButtons();
  };
  CastleOptionPanel.prototype.setSoundButtons = function () {
    this.panelDisp.sublayer_options.btn_music.selectButton = __dep_exact_9e901e8e2483a22f.BasicController.getInstance().soundController.isMusicMuted;
  };
  CastleOptionPanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.y = 0;
      this.disp.x = this.disp.stage.stageWidth;
    }
  };
  Object.defineProperty(CastleOptionPanel.prototype, "panelDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleOptionPanel.NAME = "CastleOptionPanel";
  return CastleOptionPanel;
}(__dep_export_CastleSublayerPanel.CastleSublayerPanel);
exports.CastleOptionPanel = __s0local1;
