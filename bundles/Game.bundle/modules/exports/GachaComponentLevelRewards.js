Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_GachaEvent = require("gge-module:export_GachaEvent");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_AGachaComponent = require("gge-module:export_AGachaComponent");
var __dep_export_GachaOfferingRewardsDialog = require("gge-module:export_GachaOfferingRewardsDialog");
var __dep_export_GachaOfferingRewardsDialogProperies = require("gge-module:export_GachaOfferingRewardsDialogProperies");
var __s0local0 = function (__s1param0) {
  function GachaComponentLevelRewards(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._currentLevel = 0;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.disp.btn_info], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __s3local0.itxt_level = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.disp.mc_level.txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    __s3local0.itxt_progress = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.disp.mc_progress.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    __s3local0.disp.btn_info.toolTipText = "dialog_generals_inn_drawChances_header";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GachaComponentLevelRewards, __s1param0);
  GachaComponentLevelRewards.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._currentLevel = this.getEventVO().getCurrentLevel();
    this.disp.mc_progress.mc_highlight.alpha = 0;
    this.disp.mc_level.mc_highlight.alpha = 0;
    this.disp.mc_level.scaleX = this.disp.mc_level.scaleY = 1;
    this.updateLevelProgress();
  };
  GachaComponentLevelRewards.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    this.destroyCollectableRenderList();
  };
  GachaComponentLevelRewards.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_GachaEvent.GachaEvent.UPDATED, this.bindFunction(this.onGachaUpdate));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_GachaEvent.GachaEvent.MULTIPULL_CHANGED, this.bindFunction(this.onMultiPullChange));
  };
  GachaComponentLevelRewards.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_GachaEvent.GachaEvent.UPDATED, this.bindFunction(this.onGachaUpdate));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_GachaEvent.GachaEvent.MULTIPULL_CHANGED, this.bindFunction(this.onMultiPullChange));
  };
  GachaComponentLevelRewards.prototype.onClick = function (__s13param0) {
    __s1param0.prototype.onClick.call(this, __s13param0);
    switch (__s13param0.target) {
      case this.disp.btn_info:
        this.showLevelRewardDialog();
    }
  };
  GachaComponentLevelRewards.prototype.onGachaUpdate = function (__s16param0) {
    if (__s16param0.eventVO.eventId == this.getEventVO().eventId) {
      this.updateLevelProgress();
    }
  };
  GachaComponentLevelRewards.prototype.onMultiPullChange = function (__s19param0) {
    if (__s19param0.eventVO.eventId == this.getEventVO().eventId) {
      this.fillProgressBar();
    }
  };
  GachaComponentLevelRewards.prototype.showLevelRewardDialog = function () {
    __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_GachaOfferingRewardsDialog.GachaOfferingRewardsDialog, new __dep_export_GachaOfferingRewardsDialogProperies.GachaOfferingRewardsDialogProperies(this.getEventVO().eventId));
  };
  GachaComponentLevelRewards.prototype.updateLevelProgress = function () {
    if (this.getEventVO().getGachaVOs().length > 1) {
      this.disp.mc_level.visible = true;
      if (this.getEventVO().getCurrentLevel() > this._currentLevel) {
        this.playLevelUpAnimation();
      } else {
        this.fillProgressBar();
      }
    } else {
      this.disp.mc_level.visible = false;
      this.disp.mc_progress.progressbar.scaleX = 0;
      this.itxt_progress.textContentVO.textId = "rewards";
      this.itxt_progress.color = __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT_BRIGHT;
    }
  };
  GachaComponentLevelRewards.prototype.fillProgressBar = function () {
    if (this.getEventVO().getIsMaxLevel()) {
      this.disp.mc_progress.progressbar.scaleX = 1;
      this.itxt_progress.textContentVO.textId = "dialog_mainDonationEvent_maxLevel";
      this.itxt_progress.color = __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT;
    } else {
      this.disp.mc_progress.progressbar.scaleX = __dep_exact_9e901e8e2483a22f.MathBase.clamp(this.getEventVO().getCurrentLevelProgress() / this.getEventVO().getCurrentLevelMaxPulls(), 0, 1);
      this.disp.mc_progress.mc_foreshadow.scaleX = __dep_exact_9e901e8e2483a22f.MathBase.clamp(this.getEventVO().getCurrentLevelProgress(this.getEventVO().currentMultiPull) / this.getEventVO().getCurrentLevelMaxPulls(), 0, 1);
      this.itxt_progress.textContentVO.textId = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
      this.itxt_progress.textContentVO.textReplacements = [this.getEventVO().getCurrentLevelProgress(), this.getEventVO().getCurrentLevelMaxPulls()];
      this.itxt_progress.color = __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT;
    }
    var __s30local0 = this.getEventVO().getCurrentLevel();
    this.itxt_level.textContentVO.numberValue = __s30local0;
    this._currentLevel = __s30local0;
  };
  GachaComponentLevelRewards.prototype.playLevelUpAnimation = function () {
    var __s34local0 = this;
    this.disp.mc_progress.progressbar.scaleX = 1;
    var __s34local1 = this.getEventVO().getCurrentLevel();
    var __s34local2 = this.getEventVO().getGachaVOByLevel(__s34local1 - 1);
    var __s34local3 = __s34local2.maxPulls - __s34local2.minPulls;
    this.itxt_progress.textContentVO.textId = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
    this.itxt_progress.textContentVO.textReplacements = [__s34local3 + 1, __s34local3 + 1];
    this.itxt_progress.color = __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT;
    __dep_exact_608de47b6498f9b0.TweenMax.to(this.disp.mc_progress.mc_highlight, 0.33, {
      alpha: 0.5,
      onComplete: function () {
        __dep_exact_608de47b6498f9b0.TweenMax.to(__s34local0.disp.mc_progress.mc_highlight, 0.33, {
          alpha: 0
        });
      }
    });
    __dep_exact_608de47b6498f9b0.TweenMax.to(this.disp.mc_level.mc_highlight, 0.33, {
      alpha: 0.5,
      onComplete: function () {
        __dep_exact_608de47b6498f9b0.TweenMax.to(__s34local0.disp.mc_level.mc_highlight, 0.33, {
          alpha: 0
        });
      }
    });
    __dep_exact_608de47b6498f9b0.TweenMax.to(this.disp.mc_level, 0.33, {
      scaleX: 1.15,
      scaleY: 1.15,
      onComplete: function () {
        __dep_exact_608de47b6498f9b0.TweenMax.to(__s34local0.disp.mc_level, 0.33, {
          scaleX: 1,
          scaleY: 1
        });
        __s34local0.fillProgressBar();
      }
    });
  };
  GachaComponentLevelRewards.prototype.getEventVO = function () {
    return this._params[0];
  };
  return GachaComponentLevelRewards;
}(__dep_export_AGachaComponent.AGachaComponent);
exports.GachaComponentLevelRewards = __s0local0;
