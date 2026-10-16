Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SAllianceInvitePlayerVO = require("gge-module:export_C2SAllianceInvitePlayerVO");
var __dep_export_C2SMarketInfoVO = require("gge-module:export_C2SMarketInfoVO");
var __dep_export_C2SGetDetailPlayerInfo = require("gge-module:export_C2SGetDetailPlayerInfo");
var __dep_export_CastlePlayerInfoEvent = require("gge-module:export_CastlePlayerInfoEvent");
var __dep_export_CastleAllianceDataEvent = require("gge-module:export_CastleAllianceDataEvent");
var __dep_export_CastleBookmarkDataEvent = require("gge-module:export_CastleBookmarkDataEvent");
var __dep_export_CastleMessageDataEvent = require("gge-module:export_CastleMessageDataEvent");
var __dep_export_CastleTradeDataEvent = require("gge-module:export_CastleTradeDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_AllianceCrestEnum = require("gge-module:export_AllianceCrestEnum");
var __dep_export_AllianceCrestSizeEnum = require("gge-module:export_AllianceCrestSizeEnum");
var __dep_export_CastleAllianceCrestHelper = require("gge-module:export_CastleAllianceCrestHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleAllianceInfoDialogProperties = require("gge-module:export_CastleAllianceInfoDialogProperties");
var __dep_export_CastleAllianceDialogProperties = require("gge-module:export_CastleAllianceDialogProperties");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleNewMessageDialogProperties = require("gge-module:export_CastleNewMessageDialogProperties");
var __dep_export_CastleExternalPreloaderDialogProperties = require("gge-module:export_CastleExternalPreloaderDialogProperties");
var __dep_export_CastleSendGoodsDialogProperties = require("gge-module:export_CastleSendGoodsDialogProperties");
var __dep_export_CastlePlayerInfoCastleListEntryVO = require("gge-module:export_CastlePlayerInfoCastleListEntryVO");
var __s0local0 = function (__s1param0) {
  function CastlePlayerInfoDialog() {
    var __s3local0 = this;
    __s3local0._isLoaded = false;
    __s3local0.currentView = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastlePlayerInfoDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePlayerInfoDialog, __s1param0);
  CastlePlayerInfoDialog.prototype.initLoaded = function (__s5param0 = null) {
    this.initBasicButtons([this.dialogDisp.btn_gift, this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_message, this.dialogDisp.btn_allianceInvite, this.dialogDisp.btn_allianceInfo, this.dialogDisp.mc_guild, this.dialogDisp.btn_trade, this.dialogDisp.btn_gift, this.dialogDisp.btn_castleTab, this.dialogDisp.btn_villageTab, this.dialogDisp.btn_friendRequest, this.dialogDisp.mc_castleList.btn_up, this.dialogDisp.mc_castleList.btn_down]);
    this.currentView = CastlePlayerInfoDialog.TAB_CASTLE_LIST;
    this.giftButton ||= new __dep_export_ButtonGiftComponent.ButtonGiftComponent(this.dialogDisp.btn_gift.basicButton);
    this.showLoading();
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  CastlePlayerInfoDialog.prototype.onBookmarksUpdated = function (__s7param0) {
    this.updateDialog();
  };
  CastlePlayerInfoDialog.prototype.onGetPlayerInfo = function (__s9param0) {
    this.controller.removeEventListener(__dep_export_CastlePlayerInfoEvent.CastlePlayerInfoEvent.GET_PLAYERINFO, this.bindFunction(this.onGetPlayerInfo));
    this.hideLoading();
    this._isLoaded = true;
    this._castleList = __s9param0.params[0];
    this.updateDialog();
  };
  CastlePlayerInfoDialog.prototype.updateDialog = function () {
    if (this._isLoaded && this._castleList) {
      this._playerVO = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this._castleList.ownerID);
      if (this._playerVO) {
        this.setToolTips_0();
        this.dialogDisp.mc_guild.visible = this._playerVO.isInAlliance;
        this.dialogDisp.mc_guild.toolTipText = "dialog_alliance_info";
        this.dialogDisp.mc_guild.mouseChildren = false;
        this.setTexts();
        this.handleButtons();
        __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_playercrest, this._playerVO.crest, null, true);
        __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.alliance_symbol_container);
        __dep_export_CastleAllianceCrestHelper.CastleAllianceCrestHelper.setCrestGraphics(this.dialogDisp.alliance_symbol_container, this._playerVO.allianceCrestVO, __dep_export_AllianceCrestSizeEnum.AllianceCrestSizeEnum.SIZE_PLAYERINFO, __dep_export_AllianceCrestEnum.AllianceCrestEnum.DEFAULT_CREST);
        this.fillCastleList();
        this.updateMessageRestrictions();
        this.dialogDisp.visible = true;
        this.hideLoading();
      }
    }
  };
  CastlePlayerInfoDialog.prototype.setTexts = function () {
    if (this.dialogDisp.mc_guild.visible) {
      this.itxt_guildName.textContentVO.stringValue = this._playerVO.allianceName;
    }
    this.dialogDisp.mc_honor.visible = false;
    if (this._playerVO.isLegend) {
      this.itxt_playerLevel.textContentVO.numberValue = this._playerVO.playerLevel;
      this.itxt_playerLevel2.textContentVO.numberValue = this._playerVO.playerLevel;
      this.itxt_playerLegendLevel.textContentVO.numberValue = this._playerVO.playerLegendLevel;
      this.dialogDisp.mc_level.visible = false;
      this.dialogDisp.mc_legendLevel.visible = true;
    } else {
      this.itxt_playerLevel.textContentVO.numberValue = this._playerVO.playerLevel;
      this.itxt_playerLevel2.textContentVO.numberValue = this._playerVO.playerLevel;
      this.itxt_playerLegendLevel.textContentVO.numberValue = this._playerVO.playerLegendLevel;
      this.dialogDisp.mc_level.visible = true;
      this.dialogDisp.mc_legendLevel.visible = false;
    }
    this.itxt_playerName.textContentVO.stringValue = this._playerVO.playerName;
    this.itxt_playerName.selectable = true;
    this.itxt_playerTitle.textContentVO.stringValue = __dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.getSingleMoreImportantTitle(this._playerVO);
    this.itxt_honorPoints.textContentVO.numberValue = this._playerVO.honor;
    this.itxt_mightPoints.textContentVO.numberValue = this._playerVO.might;
    this.itxt_achievementPoints.textContentVO.numberValue = this._playerVO.achievementPoints;
    this.itxt_numCastles.textContentVO.numberValue = this._castleList.listForActionPanel.length;
  };
  CastlePlayerInfoDialog.prototype.setToolTips_0 = function () {
    this.dialogDisp.info_castles.toolTipText = "dialog_playerInfo_infoCastles";
    this.dialogDisp.info_achievements.toolTipText = "dialog_playerInfo_infoAchievements";
    this.dialogDisp.btn_message.toolTipText = "dialog_inbox_writeNewMessage";
    this.dialogDisp.mc_level.toolTipText = "level";
    this.dialogDisp.mc_legendLevel.normal.toolTipText = "level";
    this.dialogDisp.mc_legendLevel.legend.toolTipText = "legendLevel";
    this.dialogDisp.mc_honor.toolTipText = "honorPoints";
    this.dialogDisp.mc_might.toolTipText = "playerMight";
    this.dialogDisp.btn_allianceInvite.toolTipText = "dialog_alliance_invite";
    this.dialogDisp.btn_allianceInfo.toolTipText = "dialog_alliance_info";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.mc_might.mouseChildren = false;
    this.dialogDisp.mc_legendLevel.normal.mouseChildren = false;
    this.dialogDisp.mc_legendLevel.legend.mouseChildren = false;
    this.dialogDisp.mc_level.mouseChildren = false;
  };
  CastlePlayerInfoDialog.prototype.handleButtons = function () {
    var __s22local0 = __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_TRADE;
    var __s22local1 = this._playerVO.playerLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_RECEIVE_RESOURCE_WAGONS;
    this.giftButton.initAsPlayerInfoButton();
    this.dialogDisp.btn_trade.toolTipText = __dep_export_CastleModel.CastleModel.userData.getTradeResourceTooltip(this._playerVO);
    this.dialogDisp.btn_trade.visible = !this.isMe;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_trade, !this.isMe && __s22local0 && __s22local1 && !this._playerVO.isRuin);
    this.dialogDisp.btn_message.mc_counter.visible = false;
    this.dialogDisp.btn_message.visible = this._playerVO.playerID != __dep_export_CastleModel.CastleModel.userData.playerID;
    this.updateMessageRestrictions();
    this.dialogDisp.btn_allianceInvite.visible = !this._playerVO.isInAlliance && __dep_export_CastleModel.CastleModel.userData.canInviteToAlliance;
    this.dialogDisp.btn_allianceInfo.visible = this._playerVO.isInAlliance && this._playerVO.allianceID != __dep_export_CastleModel.CastleModel.userData.allianceID && !this._playerVO.isRuin;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_allianceInvite, true);
    this.dialogDisp.btn_allianceInvite.toolTipText = "dialog_alliance_invite";
    var __s22local2;
    var __s22local3 = [];
    for (var __s22local4 = 0, __s22local5 = this.playerInteractionButtons; __s22local4 < __s22local5.length; __s22local4++) {
      if ((__s22local2 = __s22local5[__s22local4]).visible) {
        __s22local3.push(__s22local2);
      }
    }
    var __s22local6 = __dep_exact_f855840627e6e145.int((5 - __s22local3.length) * 42.5);
    for (var __s22local7 = 0; __s22local7 < __s22local3.length; __s22local7++) {
      (__s22local2 = __s22local3[__s22local7]).x = 160 + __s22local6 + __s22local7 * 85;
    }
  };
  CastlePlayerInfoDialog.prototype.updateMessageRestrictions = function () {
    if (this._playerVO) {
      this.dialogDisp.btn_friendRequest.visible = false;
      var __s29local0 = __dep_export_CastleModel.CastleModel.messageData.getMessageRestrictionVOByMessageType(__dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_USER_OUT);
      var __s29local1 = !!__s29local0 && __s29local0.currentPlayerAmount >= __s29local0.dailyLimit;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_message, !__s29local1 && __dep_export_CastleModel.CastleModel.userData.canWriteMessageTo(this._playerVO) && __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_CastleModel.CastleModel.messageData.minLevelForSendingP2PMessages);
      this.dialogDisp.btn_message.toolTipText = __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.dialogDisp.btn_message) ? __dep_export_CastleModel.CastleModel.userData.getMessageTooltip(this._playerVO) : __dep_export_ClientConstTextIds.ClientConstTextIds.NOT_AVAILABLE;
      if (__dep_export_CastleModel.CastleModel.userData.userLevel < __dep_export_CastleModel.CastleModel.messageData.minLevelForSendingP2PMessages) {
        this.dialogDisp.btn_message.toolTipText = "dialog_inbox_writeNewMessage_blocked_lowLevel_tooltip";
      }
      if (__s29local1) {
        this.dialogDisp.btn_message.toolTipText = "dialog_inbox_writeNewMessage_blocked_dailyLimit_tooltip";
      }
    }
  };
  CastlePlayerInfoDialog.prototype.handleTabs = function () {
    this.dialogDisp.btn_castleTab.mouseChildren = false;
    this.dialogDisp.btn_villageTab.mouseChildren = false;
    this.dialogDisp.btn_castleTab.toolTipText = "castles_tooltip";
    if (this._castleList.hasVillages) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_villageTab, true);
      this.dialogDisp.btn_villageTab.toolTipText = "dialog_villageListOverview_title";
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_villageTab, false);
      this.dialogDisp.btn_villageTab.toolTipText = "dialog_villageList_noVillages";
    }
    if (this.currentView == CastlePlayerInfoDialog.TAB_CASTLE_LIST) {
      this.dialogDisp.btn_castleTab.gotoAndStop(1);
      this.dialogDisp.btn_villageTab.gotoAndStop(1);
    } else {
      this.dialogDisp.btn_castleTab.gotoAndStop(2);
      this.dialogDisp.btn_villageTab.gotoAndStop(2);
    }
  };
  Object.defineProperty(CastlePlayerInfoDialog.prototype, "isMe", {
    get: function () {
      return this._playerVO.playerID == __dep_export_CastleModel.CastleModel.userData.playerID;
    },
    enumerable: true,
    configurable: true
  });
  CastlePlayerInfoDialog.prototype.fillCastleList = function () {
    if (this._castleList) {
      var __s42local0;
      this.handleTabs();
      if (this.scroller) {
        this.scroller.remove();
      }
      this.scroller = new __dep_exact_9e901e8e2483a22f_1.ItemScrollList(this.dialogDisp.mc_castleList);
      this.scroller.scrollItemClass = __dep_export_CastlePlayerInfoCastleListEntry.CastlePlayerInfoCastleListEntry;
      if ((__s42local0 = this.currentView == CastlePlayerInfoDialog.TAB_VILLAGE_LIST ? this._castleList.sortedVillages : this._castleList.listForPlayerInfo) != null) {
        for (var __s42local1 = 0, __s42local2 = __s42local0; __s42local1 < __s42local2.length; __s42local1++) {
          var __s42local3 = __s42local2[__s42local1];
          if (__s42local3 !== undefined) {
            this.scroller.pushContent(new __dep_export_CastlePlayerInfoCastleListEntryVO.CastlePlayerInfoCastleListEntryVO(__s42local3));
          }
        }
      }
      this.scroller.initList(0);
    }
  };
  CastlePlayerInfoDialog.prototype.onClick = function (__s50param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s50param0.target)) {
      __s1param0.prototype.onClick.call(this, __s50param0);
      switch (__s50param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30_3.Localize.text("help_playerInfo"));
          break;
        case this.dialogDisp.btn_message:
          if (__dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this.infoProperties.playerID)) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNewMessageDialog.CastleNewMessageDialog, new __dep_export_CastleNewMessageDialogProperties.CastleNewMessageDialogProperties(__dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this.infoProperties.playerID).playerName));
          }
          break;
        case this.dialogDisp.btn_allianceInvite:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardYesNoDialog.CastleStandardYesNoDialog, new __dep_exact_9e901e8e2483a22f_2.BasicStandardYesNoDialogProperties(__dep_exact_92d05af59ee2ff30_3.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30_3.Localize.text("dialog_allianceInvitationSecurityAlert_desc"), this.bindFunction(this.onInvitePlayerToAlliance)));
          break;
        case this.dialogDisp.btn_allianceInfo:
        case this.dialogDisp.mc_guild:
          this.onShowAllianceInfo();
          break;
        case this.dialogDisp.btn_trade:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SMarketInfoVO.C2SMarketInfoVO());
          break;
        case this.dialogDisp.btn_gift:
          this.giftButton.onClick();
          break;
        case this.dialogDisp.btn_castleTab:
          if (this.dialogDisp.btn_castleTab.enabled) {
            this.changeTab(CastlePlayerInfoDialog.TAB_CASTLE_LIST);
          }
          break;
        case this.dialogDisp.btn_villageTab:
          if (this.dialogDisp.btn_villageTab.enabled) {
            this.changeTab(CastlePlayerInfoDialog.TAB_VILLAGE_LIST);
          }
      }
    }
  };
  CastlePlayerInfoDialog.prototype.changeTab = function (__s57param0) {
    if (__s57param0 != this.currentView) {
      this.currentView = __s57param0;
      this.fillCastleList();
    }
  };
  CastlePlayerInfoDialog.prototype.onShowAllianceInfo = function () {
    if (__dep_export_CastleModel.CastleModel.userData.isInAlliance && __dep_export_CastleModel.CastleModel.userData.allianceID == this._playerVO.allianceID) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceDialog.CastleAllianceDialog, new __dep_export_CastleAllianceDialogProperties.CastleAllianceDialogProperties());
    } else {
      var __s60local0;
      var __s60local1 = __dep_export_CastleModel.CastleModel.allianceData.getAllianceInfoVOByID(__dep_export_CastleModel.CastleModel.userData.allianceID);
      if (__s60local1) {
        var __s60local2 = __s60local1.getStatusListByStatus(__dep_exact_26a421b704832cff_1.AllianceConst.DIPLOMACY_SOFT_ALLIED);
        if (__s60local2 != null) {
          for (var __s60local3 = 0, __s60local4 = __s60local2; __s60local3 < __s60local4.length; __s60local3++) {
            var __s60local5 = __s60local4[__s60local3];
            if (__s60local5 !== undefined && __s60local5.allianceID == this._playerVO.allianceID) {
              __s60local0 = __s60local5;
              break;
            }
          }
        }
      }
      if (__s60local0 == null) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastleAllianceInfoDialog.CastleAllianceInfoDialog, new __dep_export_CastleAllianceInfoDialogProperties.CastleAllianceInfoDialogProperties(this._playerVO.allianceID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      } else {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastleAllianceInfoDialog.CastleAllianceInfoDialog, new __dep_export_CastleAllianceInfoDialogProperties.CastleAllianceInfoDialogProperties(this._playerVO.allianceID, this._playerVO.allianceName, __s60local0.allianceStatus, __s60local0.allianceStatusConfirmed), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      }
    }
  };
  CastlePlayerInfoDialog.prototype.onInvitePlayerToAlliance = function (__s71param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceInvitePlayerVO.C2SAllianceInvitePlayerVO(String(this._playerVO.playerID)));
  };
  CastlePlayerInfoDialog.prototype.showLoading = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithType(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog, new __dep_export_CastleExternalPreloaderDialogProperties.CastleExternalPreloaderDialogProperties(null), false, __dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_TOP, 0, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
  };
  CastlePlayerInfoDialog.prototype.hideLoading = function () {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideDialog(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog);
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().restrictToHighestDialog();
  };
  CastlePlayerInfoDialog.prototype.showLoaded = function (__s77param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s77param0);
    if (this._isLoaded) {
      this.hideLoading();
    } else {
      this.showLoading();
    }
    this.dialogDisp.mc_guild.mouseChildren = false;
    this.dialogDisp.mc_guild.actLikeButton = true;
    if (this.playerInteractionButtons == null) {
      this.playerInteractionButtons = [this.dialogDisp.btn_allianceInfo, this.dialogDisp.btn_allianceInvite, this.dialogDisp.btn_trade, this.dialogDisp.btn_message, this.dialogDisp.btn_gift];
    }
    this.itxt_playerName ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.itxt_playerName.autoFitToBounds = true;
    this.itxt_playerTitle ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.itxt_playerLevel ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_level.txt_level, new __dep_exact_92d05af59ee2ff30_1.NumberVO(""));
    this.itxt_playerLevel2 ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_legendLevel.normal.txt_level, new __dep_exact_92d05af59ee2ff30_1.NumberVO(""));
    this.itxt_playerLegendLevel ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_legendLevel.legend.txt_legendLevel, new __dep_exact_92d05af59ee2ff30_1.NumberVO(""));
    if (!this.itxt_guildName) {
      this.dialogDisp.mc_guild.txt_guildname.defaultCacheScale = 2;
      this.itxt_guildName = this.textFieldManager.registerTextField(this.dialogDisp.mc_guild.txt_guildname, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    }
    this.itxt_guildName.autoFitToBounds = true;
    this.itxt_achievementPoints ||= this.textFieldManager.registerTextField(this.dialogDisp.info_achievements.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0));
    this.itxt_honorPoints ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_honor.txt_honor, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0));
    this.itxt_mightPoints ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_might.txt_honor, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0));
    this.itxt_numCastles ||= this.textFieldManager.registerTextField(this.dialogDisp.info_castles.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0));
    this.updateMessageRestrictions();
    this._isLoaded = false;
    this.controller.addEventListener(__dep_export_CastlePlayerInfoEvent.CastlePlayerInfoEvent.GET_PLAYERINFO, this.bindFunction(this.onGetPlayerInfo));
    __dep_export_CastleModel.CastleModel.bookmarkData.addEventListener(__dep_export_CastleBookmarkDataEvent.CastleBookmarkDataEvent.ON_LIST_CHANGED, this.bindFunction(this.onBookmarksUpdated));
    this.controller.addEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.MESSAGE_RESTRICTIONS_UPDATED, this.bindFunction(this.updateMessageRestrictions));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetDetailPlayerInfo.C2SGetDetailPlayerInfo(this.infoProperties.playerID));
    this.giftButton.targetPlayerID = this.infoProperties.playerID;
    this.dialogDisp.visible = false;
  };
  CastlePlayerInfoDialog.prototype.hideLoaded = function (__s83param0 = null) {
    this.currentView = CastlePlayerInfoDialog.TAB_CASTLE_LIST;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.alliance_symbol_container);
    this.controller.removeEventListener(__dep_export_CastlePlayerInfoEvent.CastlePlayerInfoEvent.GET_PLAYERINFO, this.bindFunction(this.onGetPlayerInfo));
    __dep_export_CastleModel.CastleModel.bookmarkData.removeEventListener(__dep_export_CastleBookmarkDataEvent.CastleBookmarkDataEvent.ON_LIST_CHANGED, this.bindFunction(this.onBookmarksUpdated));
    this.controller.removeEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.MESSAGE_RESTRICTIONS_UPDATED, this.bindFunction(this.updateMessageRestrictions));
    __s1param0.prototype.hideLoaded.call(this, __s83param0);
  };
  CastlePlayerInfoDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.tradeData.addEventListener(__dep_export_CastleTradeDataEvent.CastleTradeDataEvent.GET_MARKET_INFOS, this.bindFunction(this.onGetMarketInfos));
    __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onOwnAllianceDataUpdated));
  };
  CastlePlayerInfoDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.tradeData.removeEventListener(__dep_export_CastleTradeDataEvent.CastleTradeDataEvent.GET_MARKET_INFOS, this.bindFunction(this.onGetMarketInfos));
    __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onOwnAllianceDataUpdated));
  };
  CastlePlayerInfoDialog.prototype.onOwnAllianceDataUpdated = function (__s89param0) {
    this.updateDialog();
  };
  CastlePlayerInfoDialog.prototype.onGetMarketInfos = function (__s91param0) {
    if (__s91param0.openDialog) {
      var __s91local0 = this._castleList.getMainCastleByKingdomID(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
      if (!__s91local0) {
        var __s91local1 = this._castleList.getFilteredList(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
        __s91local1 ||= this._castleList.getFilteredList(__dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID);
        if (!(__s91local0 = __s91local1[0])) {
          __s91local0 = this._castleList[0];
        }
      }
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleSendGoodsDialog.CastleSendGoodsDialog, new __dep_export_CastleSendGoodsDialogProperties.CastleSendGoodsDialogProperties(__s91local0, __s91param0.tradeInfoVO));
    }
  };
  Object.defineProperty(CastlePlayerInfoDialog.prototype, "infoProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePlayerInfoDialog.NAME = "CastlePlayerInfoEx_ABG";
  CastlePlayerInfoDialog.TAB_CASTLE_LIST = 0;
  CastlePlayerInfoDialog.TAB_VILLAGE_LIST = 1;
  return CastlePlayerInfoDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastlePlayerInfoDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_ButtonGiftComponent = require("gge-module:export_ButtonGiftComponent");
var __dep_export_CastleTitleSystemHelper = require("gge-module:export_CastleTitleSystemHelper");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_CastleAllianceInfoDialog = require("gge-module:export_CastleAllianceInfoDialog");
var __dep_export_CastleAllianceDialog = require("gge-module:export_CastleAllianceDialog");
var __dep_export_CastleStandardYesNoDialog = require("gge-module:export_CastleStandardYesNoDialog");
var __dep_export_CastleNewMessageDialog = require("gge-module:export_CastleNewMessageDialog");
var __dep_export_CastleExternalPreloaderDialog = require("gge-module:export_CastleExternalPreloaderDialog");
var __dep_export_CastleSendGoodsDialog = require("gge-module:export_CastleSendGoodsDialog");
var __dep_export_CastlePlayerInfoCastleListEntry = require("gge-module:export_CastlePlayerInfoCastleListEntry");
