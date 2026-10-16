Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_C2SGetNewsletterSubscriptionStatusVO = require("gge-module:export_C2SGetNewsletterSubscriptionStatusVO");
var __dep_export_C2SNewsletterSubscriptionVO = require("gge-module:export_C2SNewsletterSubscriptionVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_LinkComponent = require("gge-module:export_LinkComponent");
var __dep_export_AOptionsDialogCollapsibleItem = require("gge-module:export_AOptionsDialogCollapsibleItem");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function OptionsDialogNewsletterItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("CastleOptions_NewsletterItem"))(), __s3param0) || this;
    __s3local0._achievedBonusAlready = false;
    __s3local0._isSubscribed = false;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.contentMC.mc_with_rewards.btn_ok, __s3local0.contentMC.mc_no_rewards.btn_ok], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._headerMC.txt_default, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_newsletterConfirm_header"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._headerMC.mc_open.txt_selected, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_newsletterConfirm_header"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.contentMC.mc_with_rewards.btn_ok.txt_label, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_accountInfo_newsletterRequest_button")), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.contentMC.mc_no_rewards.btn_ok.txt_label, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_accountInfo_newsletterRequest_button")), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.contentMC.mc_with_rewards.txt_header, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_options_newsletter_desc1"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __s3local0._isSubscribed = __dep_export_CastleModel.CastleModel.playerEmailData.hasNewsletterSubscription;
    __s3local0._achievedBonusAlready = __dep_export_CastleModel.CastleModel.playerEmailData.gotNewsletterReward;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OptionsDialogNewsletterItem, __s1param0);
  OptionsDialogNewsletterItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this.contentMC.mc_with_rewards.visible = false;
    this.contentMC.mc_no_rewards.visible = false;
    this.contentMC.mc_no_rewards.cbx_newsletter.visible = true;
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.MNS_ARRIVED, this.bindFunction(this.onStatusArrived));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetNewsletterSubscriptionStatusVO.C2SGetNewsletterSubscriptionStatusVO());
  };
  OptionsDialogNewsletterItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    if (this._linkComponent) {
      this._linkComponent.dispose();
    }
  };
  OptionsDialogNewsletterItem.prototype.onStatusArrived = function (__s10param0) {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.MNS_ARRIVED, this.bindFunction(this.onStatusArrived));
    this._isSubscribed = __s10param0.params[0];
    this._achievedBonusAlready = __s10param0.params[1];
    this.updateSignal.dispatch();
  };
  OptionsDialogNewsletterItem.prototype.updateItem = function () {
    __s1param0.prototype.updateItem.call(this);
    this.disp.visible = __dep_export_CastleModel.CastleModel.userData.hasValidatedEmail && !this._isSubscribed && !__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.loginIsKeyBased && !__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isOnSpecialServer && !__dep_export_SpecialServerHelper.SpecialServerHelper.isOnKeyLoginToNormalLoginServer;
    this.contentMC.mc_no_rewards.btn_ok.visible = false;
    if (this._isSubscribed && this._achievedBonusAlready) {
      this.contentMC.mc_no_rewards.visible = true;
      this.contentMC.mc_no_rewards.cbx_newsletter.visible = false;
      this.contentMC.mc_with_rewards.btn_ok.visible = false;
      this._linkComponent = new __dep_export_LinkComponent.LinkComponent(this.contentMC.mc_no_rewards.mc_link, "", "");
    } else if (!this._isSubscribed && this._achievedBonusAlready) {
      this.contentMC.mc_no_rewards.visible = true;
      this.contentMC.mc_no_rewards.cbx_newsletter.mouseChildren = false;
      this._checkboxMC = this.contentMC.mc_no_rewards.cbx_newsletter;
      this._checkboxNewsletter = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.contentMC.mc_no_rewards.cbx_newsletter, true);
      this._checkboxNewsletter.deselected();
      this._linkComponent = new __dep_export_LinkComponent.LinkComponent(this.contentMC.mc_no_rewards.mc_link, "", "");
      this.updateOkButton();
    } else {
      this.contentMC.mc_with_rewards.visible = true;
      this.contentMC.mc_no_rewards.visible = false;
      this.contentMC.mc_with_rewards.cbx_newsletter.mouseChildren = false;
      this._checkboxMC = this.contentMC.mc_with_rewards.cbx_newsletter;
      this._checkboxNewsletter = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.contentMC.mc_with_rewards.cbx_newsletter, true);
      this._checkboxNewsletter.deselected();
      this._linkComponent = new __dep_export_LinkComponent.LinkComponent(this.contentMC.mc_with_rewards.mc_link, "", "");
      this.updateRewardsComponent();
      this.updateOkButton();
    }
    this.updateLinkComponent();
    this.updateMask();
  };
  OptionsDialogNewsletterItem.prototype.updateLinkComponent = function () {
    var __s17local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_options_newsletter_desc2");
    if (this._isSubscribed && this._achievedBonusAlready) {
      __s17local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_accountInfo_newsletterSubscription_playerIsSubscribed_copy");
    } else if (!this._isSubscribed && this._achievedBonusAlready) {
      __s17local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_accountInfo_newsletterSubscriptionNoReward_copy");
    }
    var __s17local1 = "";
    if (__dep_exact_9e901e8e2483a22f_1.EnvironmentProvider.instance.current.data.languageCode == "ar") {
      __s17local1 = __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.urlPolicy;
    }
    this._linkComponent.colorData = [__dep_export_ClientConstColor.ClientConstColor.DEFAULT_SUBSCRIPTION, __dep_export_ClientConstColor.ClientConstColor.DEFAULT_SUBSCRIPTION, __dep_export_ClientConstColor.ClientConstColor.DEFAULT_SUBSCRIPTION];
    this._linkComponent.verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.TOP;
    this._linkComponent.update(__s17local1, __s17local0);
  };
  OptionsDialogNewsletterItem.prototype.updateRewardsComponent = function () {
    var __s22local0 = new __dep_export_CollectableList.CollectableList();
    __dep_export_CastleModel.CastleModel.newsletterData.newsletterVOs.forEach(function (__s24param0) {
      __s22local0.addList(__dep_export_CastleModel.CastleModel.rewardData.getListById(__s24param0.rewardID));
    });
    var __s22local1 = new __dep_export_CollectableRenderClips.CollectableRenderClips(this.contentMC.mc_with_rewards.mc_reward.mc_item).addInfoBtn(this.contentMC.mc_with_rewards.mc_reward.btn_info);
    var __s22local2 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, new __s0local0(136, 132));
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, __s22local1, __s22local0.getItemByIndex(0), __s22local2);
  };
  OptionsDialogNewsletterItem.prototype.updateOkButton = function () {
    this.contentMC.mc_no_rewards.btn_ok.visible = true;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.contentMC.mc_with_rewards.btn_ok, this._checkboxNewsletter.isSelected && __dep_export_CastleModel.CastleModel.userData.hasValidatedEmail);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.contentMC.mc_no_rewards.btn_ok, this._checkboxNewsletter.isSelected && __dep_export_CastleModel.CastleModel.userData.hasValidatedEmail);
    if (__dep_export_CastleModel.CastleModel.userData.hasValidatedEmail) {
      if (this._checkboxNewsletter.isSelected) {
        this.contentMC.mc_with_rewards.btn_ok.toolTipText = null;
        this.contentMC.mc_no_rewards.btn_ok.toolTipText = null;
      } else {
        this.contentMC.mc_no_rewards.btn_ok.toolTipText = "dialog_options_subscribe_checkBox_tooltip";
        this.contentMC.mc_with_rewards.btn_ok.toolTipText = "dialog_options_subscribe_checkBox_tooltip";
      }
    } else {
      this.contentMC.mc_no_rewards.btn_ok.toolTipText = "dialog_options_subscribe_saveAccount_tooltip";
      this.contentMC.mc_with_rewards.btn_ok.toolTipText = "dialog_options_subscribe_saveAccount_tooltip";
    }
  };
  OptionsDialogNewsletterItem.prototype.onClick = function (__s32param0) {
    __s1param0.prototype.onClick.call(this, __s32param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s32param0.target)) {
      switch (__s32param0.target) {
        case this.contentMC.mc_with_rewards.btn_ok:
        case this.contentMC.mc_no_rewards.btn_ok:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SNewsletterSubscriptionVO.C2SNewsletterSubscriptionVO());
          __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.MNS_ARRIVED, this.bindFunction(this.onStatusArrived));
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetNewsletterSubscriptionStatusVO.C2SGetNewsletterSubscriptionStatusVO());
          break;
        case this._checkboxMC:
          this._checkboxNewsletter.toggleSelected();
          this.updateOkButton();
      }
    }
  };
  Object.defineProperty(OptionsDialogNewsletterItem.prototype, "contentHeight", {
    get: function () {
      return (this.contentMC.mc_with_rewards.visible ? this.contentMC.mc_with_rewards : this.contentMC.mc_no_rewards).height;
    },
    enumerable: true,
    configurable: true
  });
  return OptionsDialogNewsletterItem;
}(__dep_export_AOptionsDialogCollapsibleItem.AOptionsDialogCollapsibleItem);
exports.OptionsDialogNewsletterItem = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");
