Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SReadMessagesVO = require("gge-module:export_C2SReadMessagesVO");
var __dep_export_CastleMessageDataEvent = require("gge-module:export_CastleMessageDataEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleEilandRewardDialog() {
    var __s3local0 = this;
    __s3local0.rewardID = 0;
    __s3local0.standardXpos = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleEilandRewardDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEilandRewardDialog, __s1param0);
  CastleEilandRewardDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.txt_forAlliance, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_rankreward_reward_alliance")).autoFitToBounds = true;
    this.dialogDisp.mc_reward.mc_c2.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    this.dialogDisp.mc_reward.mc_c1.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C1;
    this.rewards = __dep_export_CastleModel.CastleModel.kingdomData.eilandRewards;
    this.standardXpos = this.dialogDisp.mc_reward.mc_multireward_item0.x;
  };
  CastleEilandRewardDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SReadMessagesVO.C2SReadMessagesVO(this.dialogProperties.messageID));
    this.controller.addEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.onMessageDataGet));
  };
  CastleEilandRewardDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    this.controller.removeEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.onMessageDataGet));
  };
  CastleEilandRewardDialog.prototype.onMessageDataGet = function (__s11param0) {
    this.rewardID = __dep_exact_f855840627e6e145.int(__s11param0.params[0]);
    this.applyReward(this.rewards.getReward(this.rewardID));
  };
  CastleEilandRewardDialog.prototype.applyReward = function (__s13param0) {
    this.destroyCollectableRenderList();
    var __s13local0 = __s13param0.rewardList.clone();
    var __s13local1 = this.getCustomRewardComponent(this.dialogDisp.mc_reward.mc_decoReward, new __s0local0(60, 60));
    var __s13local2 = this.getCustomRewardComponent(this.dialogDisp.mc_reward.mc_multireward_item0);
    var __s13local3 = this.getCustomRewardComponent(this.dialogDisp.mc_reward.mc_multireward_item1);
    this.collectableRenderList.push(__s13local1);
    this.collectableRenderList.push(__s13local2);
    this.collectableRenderList.push(__s13local3);
    var __s13local4 = __s13local0.getItemByType(__dep_export_CollectableEnum.CollectableEnum.C1);
    var __s13local5 = __s13local0.getItemByType(__dep_export_CollectableEnum.CollectableEnum.C2);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.mc_c2RewardValue.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s13local5.amount));
    __s13local0.removeByItem(__s13local5);
    if (__s13param0.isTopXReward) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("message_header_eiland_reward_topx", [__dep_export_CastleEilandRewardsVO.CastleEilandRewardsVO.TOPX_MIN_RANK])).autoFitToBounds = true;
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_eilandMessage_reward_topx", [__dep_export_CastleEilandRewardsVO.CastleEilandRewardsVO.TOPX_MIN_RANK]));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("message_header_eiland_reward")).autoFitToBounds = true;
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_eilandMessage_reward", [new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s13param0.cargoPointsNeeded)]));
    }
    if (__s13local4 && __s13local4.amount > 0) {
      this.dialogDisp.mc_reward.mc_c1RewardValue.visible = true;
      this.dialogDisp.mc_reward.mc_c1.visible = true;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.mc_c1RewardValue.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s13local4.amount));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.txt_forPlayer, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_rankreward_reward_alliance")).autoFitToBounds = true;
      __s13local0.removeByItem(__s13local4);
    } else {
      this.dialogDisp.mc_reward.mc_c1RewardValue.visible = false;
      this.dialogDisp.mc_reward.mc_c1.visible = false;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.txt_forPlayer, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_rankreward_reward")).autoFitToBounds = true;
    }
    this.dialogDisp.mc_reward.visible = true;
    __s13local2.setVisibility(false);
    __s13local3.setVisibility(false);
    __s13local1.setVisibility(false);
    if (__s13local0.containsType(__dep_export_CollectableEnum.CollectableEnum.BUILDING)) {
      __s13local1.updateWithNewVO(__s13local0.getItemByType(__dep_export_CollectableEnum.CollectableEnum.BUILDING));
      __s13local1.setVisibility(true);
    } else {
      __s13local2.clips.itemMc.x = __s13local0.length < 2 ? this.standardXpos + CastleEilandRewardDialog.SINGLE_REWARD_OFFSET.x : this.standardXpos;
      var __s13local6 = __s13local0.getItemByIndexSave(0);
      if (__s13local6) {
        __s13local2.setVisibility(true);
        __s13local2.updateWithNewVO(__s13local6);
      }
      if (__s13local6 = __s13local0.getItemByIndexSave(1)) {
        __s13local3.setVisibility(true);
        __s13local3.updateWithNewVO(__s13local6);
      }
    }
    this.dialogDisp.mc_reward.deco_background.visible = __s13local0.containsType(__dep_export_CollectableEnum.CollectableEnum.BUILDING);
  };
  CastleEilandRewardDialog.prototype.getCustomRewardComponent = function (__s23param0, __s23param1 = null) {
    return new __dep_export_CollectableRenderer.CollectableRenderer(new __dep_export_CollectableRenderClips.CollectableRenderClips(__s23param0), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, __s23param1 || CastleEilandRewardDialog.DEFAULT_ICON_DIMENSION));
  };
  CastleEilandRewardDialog.prototype.onClick = function (__s25param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s25param0.target)) {
      __s1param0.prototype.onClick.call(this, __s25param0);
      switch (__s25param0.target) {
        case this.dialogDisp.btn_ok:
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleEilandRewardDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleEilandRewardDialog.__initialize_static_members = function () {
    CastleEilandRewardDialog.NAME = "CastleEilandReward";
    CastleEilandRewardDialog.SINGLE_REWARD_OFFSET = new __s0local0(23, 0);
    CastleEilandRewardDialog.DEFAULT_ICON_DIMENSION = new __s0local0(40, 40);
  };
  return CastleEilandRewardDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleEilandRewardDialog = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableRenderer = require("gge-module:export_CollectableRenderer");
var __dep_export_CastleEilandRewardsVO = require("gge-module:export_CastleEilandRewardsVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
