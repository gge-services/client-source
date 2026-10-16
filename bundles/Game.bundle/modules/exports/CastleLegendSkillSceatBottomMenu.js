Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleSceatSkillVO = require("gge-module:export_CastleSceatSkillVO");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleLegendSkillItem = require("gge-module:export_CastleLegendSkillItem");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstLegendSkills = require("gge-module:export_ClientConstLegendSkills");
var __dep_export_C2SSkipSceatSkillActivationVO = require("gge-module:export_C2SSkipSceatSkillActivationVO");
var __s0local0 = function (__s1param0) {
  function CastleLegendSkillSceatBottomMenu(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._isExpanded = true;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3param0.btn_dropdown, __s3param0.btn_rubyskip, __s3param0.btn_minuteskip], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __s3local0._expandY = __s3param0.y;
    __s3local0._collapseY = __s3local0._expandY + (__s3param0.height - __s3param0.btn_dropdown.height);
    __s3local0._itxtTime = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.disp.mc_timer.txt_time, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0.collapse();
    __s3local0.disp.btn_minuteskip.visible = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLegendSkillSceatBottomMenu, __s1param0);
  CastleLegendSkillSceatBottomMenu.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    if (this._isExpanded) {
      __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.disp.btn_rubyskip, true, 2000);
    }
  };
  CastleLegendSkillSceatBottomMenu.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    if (this._skillInProgressItem) {
      this._skillInProgressItem.show();
    }
  };
  CastleLegendSkillSceatBottomMenu.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    if (this._skillInProgressItem) {
      this.removeSkillItem();
      this._skillInProgress = null;
    }
  };
  CastleLegendSkillSceatBottomMenu.prototype.update = function (__s14param0) {
    this._sublayerID = __s14param0;
    var __s14local0 = __dep_export_CastleModel.CastleModel.legendSkillData.sceatTreeTabMap.get(__s14param0);
    var __s14local1 = false;
    for (var __s14local2 = 0, __s14local3 = __dep_export_CastleModel.CastleModel.legendSkillData.sceatSkillsInProgress; __s14local2 < __s14local3.length; __s14local2++) {
      var __s14local4 = __s14local3[__s14local2];
      if (__s14local0.indexOf(__s14local4.skillTreeID) > -1 && __s14local4 instanceof __dep_export_CastleSceatSkillVO.CastleSceatSkillVO) {
        __s14local1 = true;
        if (!this._skillInProgress && !this._isExpanded) {
          this.expand();
        }
        this._skillInProgress = __s14local4;
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_dropdown, true);
        this.disp.btn_dropdown.toolTipText = null;
        this.fillSkillInfo();
        break;
      }
    }
    if (!__s14local1) {
      if (this._isExpanded) {
        this.collapse();
      }
      this._skillInProgress = null;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_dropdown, false);
      this.disp.btn_dropdown.toolTipText = "noSkillactivationOngoing";
    }
  };
  CastleLegendSkillSceatBottomMenu.prototype.fillSkillInfo = function () {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_skillName, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this._skillInProgress.nameTextID));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_oldLevel, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("ci_level", [this._skillInProgress.level - 1]));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_newLevel, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("ci_level", [this._skillInProgress.level]));
    var __s22local0 = this._skillInProgress.isActive && this._skillInProgress.level == __dep_export_CastleModel.CastleModel.legendSkillData.getMaxSkillLevelInGroup(this._skillInProgress.skillTreeID, this._skillInProgress.tier, this._skillInProgress.skillGroupID) ? __dep_export_ClientConstLegendSkills.ClientConstLegendSkills.COLORCODE_YELLOW : __dep_export_ClientConstLegendSkills.ClientConstLegendSkills.COLORCODE_LIGHTWHITE;
    var __s22local1 = this._skillInProgress.composeSkillTextVO(__s22local0, this._skillInProgress.getUnlockLevel());
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_desc, __s22local1);
    this.removeSkillItem();
    this._skillInProgressItem = new __dep_export_CastleLegendSkillItem.CastleLegendSkillItem(this._skillInProgress, false, true);
    this._skillInProgressItem.show();
    this.disp.component_container_hol_basic.addChild(this._skillInProgressItem.dispContainer);
    this.onTimer(null);
  };
  CastleLegendSkillSceatBottomMenu.prototype.removeSkillItem = function () {
    if (this._skillInProgressItem) {
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.disp.component_container_hol_basic);
      this._skillInProgressItem.hide();
      this._skillInProgressItem = null;
    }
  };
  CastleLegendSkillSceatBottomMenu.prototype.onTimer = function (__s27param0) {
    if (this._skillInProgress) {
      this._itxtTime.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this._skillInProgress.getRemainingActivationTime());
      this.disp.mc_timer.progress.scaleX = 1 - __dep_exact_9e901e8e2483a22f.MathBase.clamp(this._skillInProgress.getRemainingActivationTime() / this._skillInProgress.activationTime, 0, 1);
      var __s27local0 = this._skillInProgress.getSkipCosts();
      switch (__s27local0) {
        case 0:
          this.disp.btn_rubyskip.toolTipText = {
            t: "freeSkipButton_tooltip",
            p: [__s27local0]
          };
          break;
        case 1:
          this.disp.btn_rubyskip.toolTipText = {
            t: "fullSkipButtonCooldown_tooltip_singular",
            p: [__s27local0]
          };
          break;
        default:
          this.disp.btn_rubyskip.toolTipText = {
            t: "fullSkipButtonCooldown_tooltip",
            p: [__s27local0]
          };
      }
      if (this._skillInProgress.getRemainingActivationTime() < 0) {
        this._skillInProgress = null;
        this.removeSkillItem();
        if (this._isExpanded) {
          this.collapse();
        }
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_dropdown, false);
      }
    }
  };
  CastleLegendSkillSceatBottomMenu.prototype.onClick = function (__s33param0) {
    __s1param0.prototype.onClick.call(this, __s33param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s33param0.target)) {
      switch (__s33param0.target) {
        case this.disp.btn_rubyskip:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSkipSceatSkillActivationVO.C2SSkipSceatSkillActivationVO(this._sublayerID));
          break;
        case this.disp.btn_dropdown:
          this.toggleExpansion();
      }
    }
  };
  CastleLegendSkillSceatBottomMenu.prototype.toggleExpansion = function () {
    if (this._isExpanded) {
      this.collapse();
    } else {
      this.expand();
    }
  };
  CastleLegendSkillSceatBottomMenu.prototype.expand = function () {
    if (!this._isExpanded) {
      this._isExpanded = true;
      __dep_exact_608de47b6498f9b0_1.TweenMax.killTweensOf(this.disp);
      __dep_exact_608de47b6498f9b0_1.TweenMax.to(this.disp, 0.2, {
        y: this._expandY,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeOut,
        onComplete: this.bindFunction(this.onExpandComplete)
      });
      __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.disp.btn_rubyskip, true, 2000);
    }
  };
  CastleLegendSkillSceatBottomMenu.prototype.collapse = function () {
    if (this._isExpanded) {
      this._isExpanded = false;
      __dep_exact_608de47b6498f9b0_1.TweenMax.killTweensOf(this.disp);
      __dep_exact_608de47b6498f9b0_1.TweenMax.to(this.disp, 0.2, {
        y: this._collapseY,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeOut,
        onComplete: this.bindFunction(this.onExpandComplete)
      });
    }
  };
  CastleLegendSkillSceatBottomMenu.prototype.onExpandComplete = function () {
    this.disp.btn_dropdown.arrow_down.visible = this._isExpanded;
    this.disp.btn_dropdown.arrow_up.visible = !this._isExpanded;
  };
  return CastleLegendSkillSceatBottomMenu;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.CastleLegendSkillSceatBottomMenu = __s0local0;
