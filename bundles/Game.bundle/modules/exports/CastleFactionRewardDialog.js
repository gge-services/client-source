Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleFactionRewardDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleFactionRewardDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionRewardDialog, __s1param0);
  CastleFactionRewardDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
  };
  CastleFactionRewardDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s7param0);
    this.setupTextIDs();
  };
  CastleFactionRewardDialog.prototype.setupTextIDs = function () {
    this.dialogDisp.mc_threshold.icon_points.toolTipText = "dialog_berimond_nobilityPoints";
    if (this.dialogProperties.isFactionInvasion) {
      if (this.dialogProperties.isAlliance) {
        this._mc_topx_txt_copy = this.dialogProperties.isFirstPrize ? "dialog_berimondInvasion_alliance_gotRoyalRewardAlliancebank_copy" : this.dialogProperties.isTopX ? "dialog_berimondInvasion_alliance_gotTopXRewardAlliancebank_copy" : "dialog_berimondInvasion_alliance_gotRewardAlliancebank_copy";
        this._txt_header = this.dialogProperties.isFirstPrize ? "dialog_berimondInvasion_alliance_gotRoyalReward_title" : this.dialogProperties.isTopX ? "dialog_berimondInvasion_alliance_gotTopXReward_title" : "dialog_berimondInvasion_alliance_gotReward_title";
        if (this.dialogProperties.isFirstPrize) {
          this._mc_message_box_txt_message = "dialog_berimondInvasion_alliance_gotRoyalReward";
        } else if (this.dialogProperties.isTopX) {
          this._mc_message_box_txt_message = "dialog_berimondInvasion_alliance_gotTopXReward";
        } else if (this.dialogProperties.rewardList.grantType < __dep_exact_26a421b704832cff_1.RewardConst.ALLIANCE_MEMBER) {
          this._mc_message_box_txt_message = "dialog_berimondInvasion_alliance_gotRewardAlliancebank_copy";
        } else {
          this._mc_message_box_txt_message = "dialog_berimondInvasion_alliance_gotReward";
        }
      } else {
        switch (this.dialogProperties.faction) {
          case __dep_exact_26a421b704832cff.FactionConst.BLUE_FACTION:
            this._mc_topx_txt_copy = this.dialogProperties.isFirstPrize ? "dialog_berimond_gotRoyalReward_copy" : "dialog_berimond_gotTopxReward_copy";
            this._txt_header = this.dialogProperties.isFirstPrize ? "dialog_berimond_gotRoyalReward_title" : this.dialogProperties.isTopX ? "dialog_berimond_gotTopxReward_title" : "dialog_berimond_gotReward_title";
            this._mc_message_box_txt_message = "dialog_berimondInvasion_sp_blue_gotReward";
            break;
          case __dep_exact_26a421b704832cff.FactionConst.RED_FACTION:
            this._mc_topx_txt_copy = this.dialogProperties.isFirstPrize ? "dialog_berimondInvasion_sp_red_gotRoyalReward" : "dialog_berimondInvasion_sp_red_gotTopXReward";
            this._txt_header = this.dialogProperties.isFirstPrize ? "dialog_berimondInvasion_sp_red_gotRoyalReward_title" : this.dialogProperties.isTopX ? "dialog_berimondInvasion_sp_red_gotTopXReward_title" : "dialog_berimondInvasion_sp_red_gotReward_title";
            this._mc_message_box_txt_message = "dialog_berimondInvasion_sp_red_gotReward";
        }
      }
    } else {
      this._mc_topx_txt_copy = this.dialogProperties.isFirstPrize ? "dialog_berimond_gotRoyalReward_copy" : "dialog_berimond_gotTopxReward_copy";
      this._txt_header = this.dialogProperties.isFirstPrize ? "dialog_berimond_gotRoyalReward_title" : this.dialogProperties.isTopX ? "dialog_berimond_gotTopxReward_title" : "dialog_berimond_gotReward_title";
      this._mc_threshold_txt_copy1 = "dialog_berimond_gotReward_copy1";
      this._mc_threshold_txt_copy2 = "dialog_berimond_gotReward_copy2";
    }
  };
  CastleFactionRewardDialog.prototype.showLoaded = function (__s20param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s20param0);
    this.dialogDisp.mc_topx.visible = !this.dialogProperties.isFactionInvasion && (this.dialogProperties.isFirstPrize || this.dialogProperties.isTopX);
    this.dialogDisp.mc_threshold.visible = !this.dialogProperties.isFactionInvasion && !this.dialogProperties.isFirstPrize && !this.dialogProperties.isTopX;
    this.dialogDisp.mc_message_box.visible = this.dialogProperties.isFactionInvasion;
    this.dialogDisp.background.gotoAndStop(this.getBackgroundFrame());
    this.dialogDisp.mc_rewards.gotoAndStop(this.getRewardsFrame());
    this.textFieldManager.registerTextField(this.dialogDisp.txt_header, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this._txt_header)).autoFitToBounds = true;
    if (this.dialogProperties.isFirstPrize || this.dialogProperties.isTopX) {
      this.dialogDisp.mc_topx.mc_color.gotoAndStop(this.dialogProperties.faction * 2 + 1 + (this.dialogProperties.isTopX ? 1 : 0));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_topx.txt_rank, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.dialogProperties.ownRank));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_topx.txt_name, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_CastleModel.CastleModel.userData.userName));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_topx.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("-"));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_topx.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this._mc_topx_txt_copy, [this.dialogProperties.points, this.dialogProperties.topXCount]));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_threshold.txt_copy1, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this._mc_threshold_txt_copy1));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_threshold.txt_points, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.dialogProperties.points)).autoFitToBounds = true;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_threshold.txt_copy2, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this._mc_threshold_txt_copy2));
    }
    if (this.dialogDisp.mc_message_box.visible) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_message_box.txt_message, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this._mc_message_box_txt_message, [this.dialogProperties.points, this.dialogProperties.topXCount]));
    }
    if (this.dialogProperties.rewardList.length > 0) {
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.dialogDisp.mc_rewards, "reward").addItemMcs("mc_item").addInfoBtns("parent.btn_info"), this.dialogProperties.rewardList, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, CastleFactionRewardDialog.ICON_SIZE));
    }
  };
  CastleFactionRewardDialog.prototype.getRewardsFrame = function () {
    if (this.dialogProperties.isAlliance) {
      return CastleFactionRewardDialog.AMOUNT_OF_FRAMES_PER_TYPE * 2 + this.dialogProperties.rewardList.length + CastleFactionRewardDialog.NO_REWARD_FRAME_OFFSET;
    } else {
      return this.dialogProperties.faction * CastleFactionRewardDialog.AMOUNT_OF_FRAMES_PER_TYPE + this.dialogProperties.rewardList.length + CastleFactionRewardDialog.NO_REWARD_FRAME_OFFSET;
    }
  };
  CastleFactionRewardDialog.prototype.getBackgroundFrame = function () {
    if (this.dialogProperties.isAlliance) {
      return 3;
    } else {
      return this.dialogProperties.faction + 1;
    }
  };
  CastleFactionRewardDialog.prototype.onClick = function (__s34param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s34param0.target)) {
      switch (__s34param0.target) {
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleFactionRewardDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionRewardDialog.__initialize_static_members = function () {
    CastleFactionRewardDialog.NAME = "CastleFactionReward";
    CastleFactionRewardDialog.AMOUNT_OF_FRAMES_PER_TYPE = 3;
    CastleFactionRewardDialog.NO_REWARD_FRAME_OFFSET = 1;
    CastleFactionRewardDialog.ICON_SIZE = new __s0local0(100, 100);
  };
  return CastleFactionRewardDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleFactionRewardDialog = __s0local1;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
