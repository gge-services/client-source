Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = createjs.Point;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRendererList = require("gge-module:export_CollectableRendererList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __s0local1 = function (__s1param0) {
  function AModernWelcomebackDialog(__s3param0 = null) {
    var __s3local0 = this;
    __s3local0.rewardListIndex = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0 || AModernWelcomebackDialog.NAME_BIG, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(AModernWelcomebackDialog.ASSET_NAME)) || this).renderClips = [new __dep_export_CollectableRendererList.CollectableRendererList(), new __dep_export_CollectableRendererList.CollectableRendererList(), new __dep_export_CollectableRendererList.CollectableRendererList()];
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AModernWelcomebackDialog, __s1param0);
  AModernWelcomebackDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    this.rewardListIndex = 0;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_left, this.dialogDisp.btn_right], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_welcomeBack_welcomeBack_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_welcomeBack_welcomeBack_desc1"));
    var __s5local0 = new __dep_exact_92d05af59ee2ff30.HTMLTextCustomVO();
    __s5local0.addLocalizedTextVO(new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_welcomeBack_welcomeBack_desc2"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, __s5local0);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("webshop_offer_growthpackage_claimNow")));
    this.displayRewards();
    __dep_exact_9e901e8e2483a22f.ClientFunnelTrackingController.getInstance().trackState("welcome_back_dialog_shown");
  };
  AModernWelcomebackDialog.prototype.onClick = function (__s7param0) {
    __s1param0.prototype.onClick.call(this, __s7param0);
    switch (__s7param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
        break;
      case this.dialogDisp.btn_left:
        this.rewardListIndex = this.rewardListIndex == 0 ? this.amountRewardPages - 1 : this.rewardListIndex - 1;
        this.displayRewards();
        break;
      case this.dialogDisp.btn_right:
        this.rewardListIndex = this.rewardListIndex >= this.amountRewardPages - 1 ? 0 : this.rewardListIndex + 1;
        this.displayRewards();
    }
  };
  AModernWelcomebackDialog.prototype.hideLoaded = function (__s10param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s10param0);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().clearAllRegisteredDialogs();
  };
  AModernWelcomebackDialog.prototype.displayRewards = function () {
    var __s12local0;
    this.dialogDisp.btn_left.visible = this.dialogDisp.btn_right.visible = this.amountRewardPages > 1;
    __s12local0 = 0;
    for (; __s12local0 < this.amountRewardContainer; __s12local0++) {
      var __s12local1 = __s12local0 + this.rewardListIndex * this.amountRewardContainer;
      var __s12local2 = this.dialogDisp["mc_reward" + __s12local0];
      if (__s12local1 >= this.dialogProperties.rewardList.length) {
        __s12local2.visible = false;
      } else {
        __s12local2.visible = true;
        this.fillReward(__s12local2, this.dialogProperties.rewardList.getItemByIndex(__s12local1), __s12local0);
      }
    }
  };
  AModernWelcomebackDialog.prototype.fillReward = function (__s18param0, __s18param1, __s18param2) {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s18param0.mc_reward.mc_icon);
    if (__s18param1.itemType == __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_UNIQUE) {
      __s18param1.equipmentVO.isSkinItem();
    }
    var __s18local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local0(60, 60));
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this.renderClips[__s18param2], new __dep_export_CollectableRenderClips.CollectableRenderClips(__s18param0.mc_reward.mc_item.mc_item).addIconMc(__s18param0.mc_reward.mc_item.mc_item.mc_icon).addInfoBtn(__s18param0.mc_reward.mc_item.btn_info).addBuildingLevelMc(__s18param0.mc_reward.mc_item.mc_buildingLevel).addTextfield(__s18param0.mc_reward.mc_item.mc_item.txt_text).addTextfieldBgMc(__s18param0.mc_reward.mc_item.mc_item.mc_textBackground), __s18param1, __s18local0);
    this.textFieldManager.registerTextField(__s18param0.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s18param1.getNameTextId()));
  };
  Object.defineProperty(AModernWelcomebackDialog.prototype, "amountRewardPages", {
    get: function () {
      return Math.ceil(this.dialogProperties.rewardList.length / this.amountRewardContainer);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AModernWelcomebackDialog.prototype, "amountRewardContainer", {
    get: function () {
      if (this.dialogClassName == AModernWelcomebackDialog.NAME_SMALL) {
        return 2;
      } else {
        return 3;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AModernWelcomebackDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AModernWelcomebackDialog.__initialize_static_members = function () {
    AModernWelcomebackDialog.NAME_BIG = "ModernWelcomeBack_Big";
    AModernWelcomebackDialog.NAME_SMALL = "ModernWelcomeBack_Small";
    AModernWelcomebackDialog.ASSET_NAME = "ModernWelcomeBack";
  };
  return AModernWelcomebackDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.AModernWelcomebackDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
