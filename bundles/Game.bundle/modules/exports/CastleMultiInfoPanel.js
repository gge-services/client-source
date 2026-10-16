Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_2 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_ClientConstAlliance = require("gge-module:export_ClientConstAlliance");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_CastleChatEvent = require("gge-module:export_CastleChatEvent");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleAllianceDataEvent = require("gge-module:export_CastleAllianceDataEvent");
var __dep_export_CastleMessageDataEvent = require("gge-module:export_CastleMessageDataEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleVIPDataEvent = require("gge-module:export_CastleVIPDataEvent");
var __dep_export_CastleXPChangedEvent = require("gge-module:export_CastleXPChangedEvent");
var __dep_export_SettingsEvent = require("gge-module:export_SettingsEvent");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleChatVO = require("gge-module:export_CastleChatVO");
var __dep_export_CastleAllianceDialogProperties = require("gge-module:export_CastleAllianceDialogProperties");
var __dep_export_CastleInboxDialogProperties = require("gge-module:export_CastleInboxDialogProperties");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleMultiInfoPanel() {
    var __s3local0 = this;
    __s3local0._state = -1;
    __s3local0.lastState = 0;
    __s3local0._CONTENT_WINDOW_TWEEN_VALUE = 48;
    __s3local0._isUp = false;
    __s3local0._speechBubbleIsUp = false;
    __s3local0._isMessageSpeechBubble = true;
    __s3local0._oldUnreadMessageCount = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, new Library.CastleInterfaceElements.MultiInfoPanel_Relicus()) || this)._isUp = true;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMultiInfoPanel, __s1param0);
  CastleMultiInfoPanel.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.initComponents();
    this.setState(CastleMultiInfoPanel.STATE_NO_INFO, false);
    this.setBtns();
    this.setVersionInfo();
    this.initSpeechBubble();
    this._buttons = new __dep_export_PanelButtonsComponent.PanelButtonsComponent(this.multiInfoPanel.mc_buttons, Library.CastleInterfaceElements.MultiInfoPanelButton, __dep_export_PanelButtonsComponent.PanelButtonsComponent.BUILD_DIRECTION_RIGHT);
    this.multiInfoPanel.mc_buttons.mc_backgroundDeco.visible = false;
    if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
      this.multiInfoPanel.scaleX = this.multiInfoPanel.scaleY = 0.8;
    }
  };
  CastleMultiInfoPanel.prototype.show = function () {
    if (this.hasLevelForShow()) {
      this._chatComponent.onShow();
      this._buttons.onShow();
      this.buildButtons();
      this.setMessagesCounter();
      __s1param0.prototype.show.call(this);
      if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
        this._isUp = true;
        this.togglePanel();
      }
      this.allowCaching = true;
    } else {
      this.hide();
    }
  };
  CastleMultiInfoPanel.prototype.hide = function () {
    this._buttons.onHide();
    this._chatComponent.onHide();
    __s1param0.prototype.hide.call(this);
  };
  CastleMultiInfoPanel.prototype.addEventListenerOnInit = function () {
    __s1param0.prototype.addEventListenerOnInit.call(this);
    this.controller.addEventListener(__dep_export_IsoEvent.IsoEvent.SHOW_PANEL_INFO, this.bindFunction(this.onShowBuildingInfo));
    this.controller.addEventListener(__dep_export_IsoEvent.IsoEvent.HIDE_PANEL_INFO, this.bindFunction(this.onHideInfo));
    this.controller.addEventListener(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SHOW_PLAYER_INFO, this.bindFunction(this.onShowMapObjectInfo));
    this.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onChangedCastleParameters));
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_CONSTRUCTION_ITEMS_UPDATED, this.bindFunction(this.onConstructionItemsUpdated));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
    this.controller.addEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
    this.controller.addEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.UPDATE_MESSAGELIST, this.bindFunction(this.setMessagesCounter));
    __dep_export_CastleModel.CastleModel.rewardHubData.addEventListener(__dep_export_RewardHubPanelNotificationEvent.RewardHubPanelNotificationEvent.NEW_REWARDS_ARRIVED, this.bindFunction(this.setRewardCounter));
  };
  CastleMultiInfoPanel.prototype.removeEventListenerOnDestroy = function () {
    this.controller.removeEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.UPDATE_MESSAGELIST, this.bindFunction(this.setMessagesCounter));
    this.controller.removeEventListener(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SHOW_PLAYER_INFO, this.bindFunction(this.onShowMapObjectInfo));
    this.controller.removeEventListener(__dep_export_IsoEvent.IsoEvent.SHOW_PANEL_INFO, this.bindFunction(this.onShowBuildingInfo));
    this.controller.removeEventListener(__dep_export_IsoEvent.IsoEvent.HIDE_PANEL_INFO, this.bindFunction(this.onHideInfo));
    this.controller.removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onChangedCastleParameters));
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_CONSTRUCTION_ITEMS_UPDATED, this.bindFunction(this.onConstructionItemsUpdated));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
    this.controller.removeEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
    __dep_export_CastleModel.CastleModel.chatData.removeEventListener(__dep_export_CastleChatEvent.CastleChatEvent.NEW_CHAT_MESSAGE_ARRIVED, this.bindFunction(this.onNewMessageArrived));
    __dep_export_CastleModel.CastleModel.chatData.removeEventListener(__dep_export_CastleChatEvent.CastleChatEvent.OPEN_CHAT, this.bindFunction(this.onOtherChatIsOpened));
    __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceUpdate));
    __dep_export_CastleModel.CastleModel.settingsData.removeEventListener(__dep_export_SettingsEvent.SettingsEvent.MINICHAT_VISIBILITY_CHANGED, this.bindFunction(this.onSettingChanged));
    __dep_export_CastleModel.CastleModel.vipData.removeEventListener(__dep_export_CastleVIPDataEvent.CastleVIPDataEvent.VIP_DATA_UPDATED, this.bindFunction(this.onVipDataChanged));
    __dep_export_CastleModel.CastleModel.rewardHubData.removeEventListener(__dep_export_RewardHubPanelNotificationEvent.RewardHubPanelNotificationEvent.NEW_REWARDS_ARRIVED, this.bindFunction(this.setRewardCounter));
    __s1param0.prototype.removeEventListenerOnDestroy.call(this);
  };
  CastleMultiInfoPanel.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.chatData.addEventListener(__dep_export_CastleChatEvent.CastleChatEvent.NEW_CHAT_MESSAGE_ARRIVED, this.bindFunction(this.onNewMessageArrived));
    __dep_export_CastleModel.CastleModel.chatData.addEventListener(__dep_export_CastleChatEvent.CastleChatEvent.OPEN_CHAT, this.bindFunction(this.onOtherChatIsOpened));
    __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceUpdate));
    __dep_export_CastleModel.CastleModel.settingsData.addEventListener(__dep_export_SettingsEvent.SettingsEvent.MINICHAT_VISIBILITY_CHANGED, this.bindFunction(this.onSettingChanged));
    __dep_export_CastleModel.CastleModel.vipData.addEventListener(__dep_export_CastleVIPDataEvent.CastleVIPDataEvent.VIP_DATA_UPDATED, this.bindFunction(this.onVipDataChanged));
  };
  CastleMultiInfoPanel.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this._buttons.destroy();
  };
  CastleMultiInfoPanel.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.chatData.removeEventListener(__dep_export_CastleChatEvent.CastleChatEvent.NEW_CHAT_MESSAGE_ARRIVED, this.bindFunction(this.onNewMessageArrived));
    __dep_export_CastleModel.CastleModel.chatData.removeEventListener(__dep_export_CastleChatEvent.CastleChatEvent.OPEN_CHAT, this.bindFunction(this.onOtherChatIsOpened));
    __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceUpdate));
    __dep_export_CastleModel.CastleModel.settingsData.removeEventListener(__dep_export_SettingsEvent.SettingsEvent.MINICHAT_VISIBILITY_CHANGED, this.bindFunction(this.onSettingChanged));
    __dep_export_CastleModel.CastleModel.vipData.removeEventListener(__dep_export_CastleVIPDataEvent.CastleVIPDataEvent.VIP_DATA_UPDATED, this.bindFunction(this.onVipDataChanged));
  };
  CastleMultiInfoPanel.prototype.initComponents = function () {
    this.multiInfoPanel.contentWindow.y += 2;
    this.buildingInfoLayer = new __dep_export_CastleMultiInfoBuildingLayer.CastleMultiInfoBuildingLayer(this.multiInfoPanel.contentWindow.mc_info);
    this.mapObjectInfoLayer = new __dep_export_WorldMapInfoLayer.WorldMapInfoLayer(this.multiInfoPanel.contentWindow.mc_playerinfo, this);
    this.multiInfoPanel.contentWindow.mc_chat.addChild(this.multiInfoPanel.contentWindow.mc_chat.txt_input);
    this._chatComponent = new __dep_export_CastleChatComponent.CastleChatComponent(new __dep_export_CastleChatVO.CastleChatVO(this.multiInfoPanel.contentWindow.mc_chat.txt_chat, this.multiInfoPanel.contentWindow.mc_chat.txt_input, this.multiInfoPanel.contentWindow.mc_chat.btn_enter, this.multiInfoPanel.contentWindow.mc_chat.mc_blockChat, this.multiInfoPanel.contentWindow.mc_chat.btn_up, this.multiInfoPanel.contentWindow.mc_chat.btn_down, this.multiInfoPanel.contentWindow.mc_chat.btn_slider, this.multiInfoPanel.contentWindow.mc_chat.mc_sliderLine), this);
  };
  CastleMultiInfoPanel.prototype.buildButtons = function () {
    this._buttons.switchCreationMode(true);
    this._buttons.addMainButton(new __dep_export_RankingPanelButton.RankingPanelButton()).defineSubButtons([new __dep_export_FamePanelButton.FamePanelButton(), new __dep_export_AchievementPanelButton.AchievementPanelButton()]);
    this._buttons.addMainButton(new __dep_export_AlliancePanelButton.AlliancePanelButton());
    this._buttons.addMainButton(new __dep_export_MessagePanelButton.MessagePanelButton());
    this._buttons.addMainButton(new __dep_export_ABGRankingPanelButton.ABGRankingPanelButton());
    this._buttons.addMainButton(new __dep_export_RewardHubPanelButton.RewardHubPanelButton()).defineSubButtons([new __dep_export_LostAndFoundPanelButton.LostAndFoundPanelButton()]);
    this._buttons.switchCreationMode(false);
  };
  CastleMultiInfoPanel.prototype.initSpeechBubble = function () {
    this.multiInfoPanel.mc_speechBubble.visible = false;
  };
  CastleMultiInfoPanel.prototype.setVersionInfo = function () {
    this.textFieldManager.registerTextField(this.multiInfoPanel.txt_build, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_CastleVersionInformation.CastleVersionInformation.versionInstance.versionText.replace(/\n/g, "")), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
  };
  CastleMultiInfoPanel.prototype.setBtns = function () {
    this.multiInfoPanel.contentWindow.btn_infos.toolTipText = "panel_multiinfo_infowindow";
    this.multiInfoPanel.contentWindow.btn_chat.toolTipText = "allianceChat";
    this.multiInfoPanel.contentWindow.btn_showHide.selectButton = this._isUp;
    this.setInfoBtn();
    this.setChatBtn();
  };
  CastleMultiInfoPanel.prototype.setBGTransparency = function (__s35param0) {
    this.multiInfoPanel.contentWindow.mc_pattern.alpha = __s35param0;
  };
  CastleMultiInfoPanel.prototype.setInfoBtn = function () {
    this.multiInfoPanel.contentWindow.btn_infos.visible = __dep_export_CastleModel.CastleModel.userData.isInAlliance && !__dep_export_CastleModel.CastleModel.settingsData.miniChatVisible;
  };
  CastleMultiInfoPanel.prototype.setChatBtn = function () {
    this.multiInfoPanel.contentWindow.btn_chat.visible = __dep_export_CastleModel.CastleModel.userData.isInAlliance && !__dep_export_CastleModel.CastleModel.settingsData.miniChatVisible;
  };
  CastleMultiInfoPanel.prototype.markChatButton = function (__s41param0) {
    var __s41local0 = __dep_exact_f855840627e6e145.int(__s41param0 && !__dep_export_CastleModel.CastleModel.chatData.isBigAllianceChatOpen ? 2 : 1);
    this.multiInfoPanel.contentWindow.btn_chat.icon.gotoAndStop(__s41local0);
  };
  CastleMultiInfoPanel.prototype.togglePanel = function () {
    if (this._isUp) {
      __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.multiInfoPanel.contentWindow, 0.2, {
        y: -this._CONTENT_WINDOW_TWEEN_VALUE
      }, {
        y: CastleMultiInfoPanel.PANEL_HEIGHT - this._CONTENT_WINDOW_TWEEN_VALUE,
        ease: __dep_exact_608de47b6498f9b0_1.Sine.easeIn,
        onUpdate: this.bindFunction(this.onTweenUpdate),
        onComplete: this.bindFunction(this.onTweenComplete)
      });
      this.multiInfoPanel.contentWindow.btn_chat.selectButton = false;
      this.multiInfoPanel.contentWindow.btn_infos.selectButton = false;
    } else {
      __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.multiInfoPanel.contentWindow, 0.2, {
        y: CastleMultiInfoPanel.PANEL_HEIGHT - this._CONTENT_WINDOW_TWEEN_VALUE
      }, {
        y: -this._CONTENT_WINDOW_TWEEN_VALUE,
        ease: __dep_exact_608de47b6498f9b0_1.Sine.easeIn,
        onUpdate: this.bindFunction(this.onTweenUpdate),
        onComplete: this.bindFunction(this.onTweenComplete)
      });
      if (this._state == CastleMultiInfoPanel.STATE_CHAT) {
        this.markChatButton(false);
        this.multiInfoPanel.contentWindow.mc_chat.visible = true;
      }
      this.multiInfoPanel.contentWindow.btn_chat.selectButton = this._state == CastleMultiInfoPanel.STATE_CHAT;
      this.multiInfoPanel.contentWindow.btn_infos.selectButton = this._state != CastleMultiInfoPanel.STATE_CHAT;
    }
    this._isUp = !this._isUp;
    this.lockPanel();
  };
  CastleMultiInfoPanel.prototype.onTweenUpdate = function () {
    if (this._allowCaching && this.dispToCache.cacheCanvas) {
      this.dispToCache.doCache();
    }
  };
  CastleMultiInfoPanel.prototype.onTweenComplete = function () {
    this.unLockPanel();
    this.multiInfoPanel.contentWindow.btn_showHide.selectButton = this._isUp;
    this.multiInfoPanel.contentWindow.mc_chat.visible = this._state == CastleMultiInfoPanel.STATE_CHAT && this._isUp;
    if (this._allowCaching && this.dispToCache.cacheCanvas) {
      this.dispToCache.doCache();
    }
  };
  CastleMultiInfoPanel.prototype.setState = function (__s54param0, __s54param1 = true) {
    if (!this._isUp && __s54param1) {
      this.togglePanel();
    }
    if (this._state != __s54param0) {
      switch (__s54param0) {
        case CastleMultiInfoPanel.STATE_CHAT:
          this.mapObjectInfoLayer.hide();
          this.buildingInfoLayer.hide();
          this.setBGTransparency(1);
          this.markChatButton(false);
          this.multiInfoPanel.contentWindow.mc_chat.visible = true;
          break;
        case CastleMultiInfoPanel.STATE_NO_INFO:
          this.mapObjectInfoLayer.hide();
          this.buildingInfoLayer.hide();
          this.setBGTransparency(1);
          this.multiInfoPanel.contentWindow.mc_chat.visible = false;
          break;
        case CastleMultiInfoPanel.STATE_MAPOBJECT_INFO:
          this.mapObjectInfoLayer.show();
          this.buildingInfoLayer.hide();
          this.multiInfoPanel.contentWindow.mc_chat.visible = false;
          this.setBGTransparency(0.4);
          break;
        case CastleMultiInfoPanel.STATE_BUILDING_INFO:
          this.buildingInfoLayer.show();
          this.mapObjectInfoLayer.hide();
          this.setBGTransparency(0.4);
          this.multiInfoPanel.contentWindow.mc_chat.visible = false;
      }
      this.lastState = this._state;
      this._state = __s54param0;
      this.multiInfoPanel.contentWindow.btn_chat.selectButton = this._state == CastleMultiInfoPanel.STATE_CHAT;
      this.multiInfoPanel.contentWindow.btn_infos.selectButton = this._state != CastleMultiInfoPanel.STATE_CHAT;
      this.updateCache();
    }
  };
  CastleMultiInfoPanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      var __s59local0 = __dep_exact_f855840627e6e145.int(this.disp.stage.stageHeight);
      if (this.env.hasNetworkBuddies) {
        __s59local0 -= __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCastle.ClientConstCastle.BUDDY_PANEL_HEIGHT);
      }
      this.disp.y = __s59local0;
      this.disp.x = 0;
    }
  };
  CastleMultiInfoPanel.prototype.setMessagesCounter = function (__s63param0 = null) {
    var __s63local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.messageData.countUnreadUnarchivedMessages([]));
    if (__s63local0 > this._oldUnreadMessageCount) {
      this.fadeInMessageBubble();
    }
    this._oldUnreadMessageCount = __s63local0;
    this.updateCache();
  };
  CastleMultiInfoPanel.prototype.setRewardCounter = function (__s66param0 = null) {
    this.fadeInRewardBubble();
    this.updateCache();
  };
  CastleMultiInfoPanel.prototype.fadeInRewardBubble = function () {
    if (!this._speechBubbleIsUp) {
      this.textFieldManager.registerTextField(this.multiInfoPanel.mc_speechBubble.txt_info, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("new_rewards"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
      this.multiInfoPanel.mc_speechBubble.visible = true;
      this._speechBubbleIsUp = true;
      this._isMessageSpeechBubble = false;
      __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.multiInfoPanel.mc_speechBubble, CastleMultiInfoPanel.MESSAGEBUBBLE_POPUP_FADE_DELAY, {
        x: CastleMultiInfoPanel.buttonX4,
        alpha: 0
      }, {
        alpha: 1,
        delay: 1,
        ease: __dep_exact_608de47b6498f9b0_2.Linear.easeIn,
        onUpdate: this.bindFunction(this.onBubbleUpdate),
        onComplete: this.bindFunction(this.fadeOutMessageBubbleDelayed)
      });
    }
  };
  CastleMultiInfoPanel.prototype.fadeInMessageBubble = function () {
    if (!this._speechBubbleIsUp) {
      this.textFieldManager.registerTextField(this.multiInfoPanel.mc_speechBubble.txt_info, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("unread_messages"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
      this.multiInfoPanel.mc_speechBubble.visible = true;
      this._speechBubbleIsUp = true;
      this._isMessageSpeechBubble = true;
      __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.multiInfoPanel.mc_speechBubble, CastleMultiInfoPanel.MESSAGEBUBBLE_POPUP_FADE_DELAY, {
        x: __dep_export_ABGHelper.ABGHelper.isOnABGServer ? CastleMultiInfoPanel.buttonX2 : CastleMultiInfoPanel.buttonX3,
        alpha: 0
      }, {
        alpha: 1,
        delay: 1,
        ease: __dep_exact_608de47b6498f9b0_2.Linear.easeIn,
        onUpdate: this.bindFunction(this.onBubbleUpdate),
        onComplete: this.bindFunction(this.fadeOutMessageBubbleDelayed)
      });
    }
  };
  CastleMultiInfoPanel.prototype.fadeOutMessageBubbleDelayed = function () {
    if (this._speechBubbleIsUp) {
      __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.multiInfoPanel.mc_speechBubble, CastleMultiInfoPanel.MESSAGEBUBBLE_POPUP_FADE_DELAY, {
        alpha: 1
      }, {
        alpha: 0,
        delay: CastleMultiInfoPanel.MESSAGEBUBBLE_POPUP_DELAY,
        ease: __dep_exact_608de47b6498f9b0_2.Linear.easeIn,
        onUpdate: this.bindFunction(this.onBubbleUpdate),
        onComplete: this.bindFunction(this.hideMessageBubble)
      });
    }
  };
  CastleMultiInfoPanel.prototype.fadeOutMessageBubble = function () {
    if (this._speechBubbleIsUp) {
      __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.multiInfoPanel.mc_speechBubble, CastleMultiInfoPanel.MESSAGEBUBBLE_POPUP_FADE_DELAY, {
        alpha: 1
      }, {
        alpha: 0,
        ease: __dep_exact_608de47b6498f9b0_2.Linear.easeIn,
        onUpdate: this.bindFunction(this.onBubbleUpdate),
        onComplete: this.bindFunction(this.hideMessageBubble)
      });
    }
  };
  CastleMultiInfoPanel.prototype.onBubbleUpdate = function () {
    this.updateCache();
  };
  CastleMultiInfoPanel.prototype.hideMessageBubble = function () {
    this.multiInfoPanel.mc_speechBubble.visible = false;
    this._speechBubbleIsUp = false;
    this.updateCache();
  };
  CastleMultiInfoPanel.prototype.hasLevelForShow = function () {
    return __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_INFO_WINDOW;
  };
  CastleMultiInfoPanel.prototype.onClick = function (__s86param0) {
    if (!this.isLocked && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s86param0.target) && (__s1param0.prototype.onClick.call(this, __s86param0), this.hasLevelForShow || __s86param0.target == this.multiInfoPanel.contentWindow.btn_showHide)) {
      switch (__s86param0.target) {
        case this.multiInfoPanel.contentWindow.btn_showHide:
          this.togglePanel();
          break;
        case this.multiInfoPanel.contentWindow.btn_infos:
          if (this._state == CastleMultiInfoPanel.STATE_CHAT) {
            this.setState(this.lastState, true);
          } else {
            this.setState(this._state, true);
          }
          break;
        case this.multiInfoPanel.contentWindow.btn_chat:
          this.setState(CastleMultiInfoPanel.STATE_CHAT, true);
          break;
        case this.multiInfoPanel.contentWindow.mc_chat.btn_bigChat:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceDialog.CastleAllianceDialog, new __dep_export_CastleAllianceDialogProperties.CastleAllianceDialogProperties(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_COMMUNICATION));
          break;
        case this.multiInfoPanel.mc_speechBubble:
          if (this._isMessageSpeechBubble) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleMessageInboxDialog.CastleMessageInboxDialog, new __dep_export_CastleInboxDialogProperties.CastleInboxDialogProperties());
          } else {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_RewardHubMainDialog.RewardHubMainDialog, new __dep_export_RewardHubDialogProperties.RewardHubDialogProperties(false));
          }
          this.fadeOutMessageBubble();
      }
    }
  };
  CastleMultiInfoPanel.prototype.onXPChanged = function (__s94param0) {
    if (this.disp.visible == 0 && this.hasLevelForShow()) {
      this.show();
    }
    if (this.disp.visible) {
      this._buttons.updateButtons();
    }
  };
  CastleMultiInfoPanel.prototype.onOtherChatIsOpened = function (__s98param0) {
    this.markChatButton(false);
    this.updateCache();
  };
  CastleMultiInfoPanel.prototype.onShowBuildingInfo = function (__s100param0) {
    if (!this.layoutManager.isInSpectatedCastle && !this.layoutManager.isInMyOccupiedCastle && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s100param0.params[0], "AEffectBuildingVO")) {
      var __s100local0 = __s100param0.params[0];
      if (this.buildingInfoLayer.setBuildingInfo(__s100local0)) {
        this.lastState = CastleMultiInfoPanel.STATE_BUILDING_INFO;
        if (this._state != CastleMultiInfoPanel.STATE_CHAT) {
          this.setState(CastleMultiInfoPanel.STATE_BUILDING_INFO, false);
        }
      }
    }
  };
  CastleMultiInfoPanel.prototype.onShowMapObjectInfo = function (__s105param0) {
    var __s105local0 = __s105param0.params[0];
    if (__s105local0) {
      this.mapObjectInfoLayer.setMapObjectInfo(__s105local0);
      this.lastState = CastleMultiInfoPanel.STATE_MAPOBJECT_INFO;
      if (this._state != CastleMultiInfoPanel.STATE_CHAT) {
        this.setState(CastleMultiInfoPanel.STATE_MAPOBJECT_INFO, false);
      }
    }
  };
  CastleMultiInfoPanel.prototype.onChangeLayoutState = function (__s109param0) {
    if (this._state != CastleMultiInfoPanel.STATE_CHAT) {
      this.onHideInfo(null);
    }
  };
  CastleMultiInfoPanel.prototype.onNewMessageArrived = function (__s112param0) {
    var __s112local0 = __dep_export_CastleModel.CastleModel.chatData.getLastAllianceMessage();
    if (!!__s112local0 && (this._state != CastleMultiInfoPanel.STATE_CHAT || !this._isUp) && __s112local0.playerID != __dep_export_CastleModel.CastleModel.userData.playerID) {
      this.markChatButton(true);
      this.updateCache();
    }
  };
  CastleMultiInfoPanel.prototype.onHideInfo = function (__s115param0) {
    if (this._state != CastleMultiInfoPanel.STATE_CHAT) {
      this.setState(CastleMultiInfoPanel.STATE_NO_INFO, false);
    } else {
      this.lastState = CastleMultiInfoPanel.STATE_NO_INFO;
    }
  };
  CastleMultiInfoPanel.prototype.onAllianceUpdate = function (__s119param0) {
    this.setInfoBtn();
    this.setChatBtn();
  };
  CastleMultiInfoPanel.prototype.onAllianceStatusChanged = function (__s121param0) {
    if (!__dep_export_CastleModel.CastleModel.userData.isInAlliance) {
      if (this._state == CastleMultiInfoPanel.STATE_CHAT) {
        this.setState(CastleMultiInfoPanel.STATE_NO_INFO, false);
      }
      this.markChatButton(false);
    }
    this.setInfoBtn();
    this.setChatBtn();
    this.updateCache();
  };
  CastleMultiInfoPanel.prototype.onSettingChanged = function (__s125param0) {
    if (this._state == CastleMultiInfoPanel.STATE_CHAT) {
      this.setState(CastleMultiInfoPanel.STATE_NO_INFO, false);
    }
    this.markChatButton(false);
    this.setInfoBtn();
    this.setChatBtn();
    this.updateCache();
  };
  CastleMultiInfoPanel.prototype.onConstructionItemsUpdated = function (__s128param0) {
    if (this._state == CastleMultiInfoPanel.STATE_BUILDING_INFO) {
      this.buildingInfoLayer.refreshBuildingInfo();
    }
    this.updateCache();
  };
  CastleMultiInfoPanel.prototype.onChangedCastleParameters = function (__s131param0) {
    if (this._state == CastleMultiInfoPanel.STATE_BUILDING_INFO) {
      this.buildingInfoLayer.refreshBuildingInfo();
    }
  };
  CastleMultiInfoPanel.prototype.onVipDataChanged = function (__s134param0) {
    if (this._state == CastleMultiInfoPanel.STATE_BUILDING_INFO) {
      this.buildingInfoLayer.refreshBuildingInfo();
    }
    this.updateCache();
  };
  Object.defineProperty(CastleMultiInfoPanel.prototype, "multiInfoPanel", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMultiInfoPanel.prototype, "buttons", {
    get: function () {
      return this._buttons;
    },
    enumerable: true,
    configurable: true
  });
  CastleMultiInfoPanel.NAME = "CastleMultiInfoPanel";
  CastleMultiInfoPanel.PANEL_HEIGHT = 135;
  CastleMultiInfoPanel.buttonX2 = 81;
  CastleMultiInfoPanel.buttonX3 = 128;
  CastleMultiInfoPanel.buttonX4 = 165;
  CastleMultiInfoPanel.MESSAGEBUBBLE_POPUP_DELAY = 5;
  CastleMultiInfoPanel.MESSAGEBUBBLE_POPUP_FADE_DELAY = 0.8;
  CastleMultiInfoPanel.STATE_CHAT = 0;
  CastleMultiInfoPanel.STATE_NO_INFO = 1;
  CastleMultiInfoPanel.STATE_BUILDING_INFO = 2;
  CastleMultiInfoPanel.STATE_MAPOBJECT_INFO = 3;
  return CastleMultiInfoPanel;
}(require("gge-module:export_CastleSublayerPanel").CastleSublayerPanel);
exports.CastleMultiInfoPanel = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleChatComponent = require("gge-module:export_CastleChatComponent");
var __dep_export_CastleAllianceDialog = require("gge-module:export_CastleAllianceDialog");
var __dep_export_CastleMessageInboxDialog = require("gge-module:export_CastleMessageInboxDialog");
var __dep_export_PanelButtonsComponent = require("gge-module:export_PanelButtonsComponent");
var __dep_export_CastleMultiInfoBuildingLayer = require("gge-module:export_CastleMultiInfoBuildingLayer");
var __dep_export_AchievementPanelButton = require("gge-module:export_AchievementPanelButton");
var __dep_export_AlliancePanelButton = require("gge-module:export_AlliancePanelButton");
var __dep_export_FamePanelButton = require("gge-module:export_FamePanelButton");
var __dep_export_LostAndFoundPanelButton = require("gge-module:export_LostAndFoundPanelButton");
var __dep_export_MessagePanelButton = require("gge-module:export_MessagePanelButton");
var __dep_export_RankingPanelButton = require("gge-module:export_RankingPanelButton");
var __dep_export_WorldMapInfoLayer = require("gge-module:export_WorldMapInfoLayer");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleVersionInformation = require("gge-module:export_CastleVersionInformation");
var __dep_export_ABGRankingPanelButton = require("gge-module:export_ABGRankingPanelButton");
var __dep_export_RewardHubPanelButton = require("gge-module:export_RewardHubPanelButton");
var __dep_export_RewardHubMainDialog = require("gge-module:export_RewardHubMainDialog");
var __dep_export_RewardHubDialogProperties = require("gge-module:export_RewardHubDialogProperties");
var __dep_export_RewardHubPanelNotificationEvent = require("gge-module:export_RewardHubPanelNotificationEvent");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
