Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceRaidbossEventEventVO = require("gge-module:export_AllianceRaidbossEventEventVO");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CastleStandardYesNoDialogProperties = require("gge-module:export_CastleStandardYesNoDialogProperties");
var __dep_export_ModernYesNoBlueBigLabeledDialog = require("gge-module:export_ModernYesNoBlueBigLabeledDialog");
var __dep_export_AllianceRaidHighlightedEffectTooltip = require("gge-module:export_AllianceRaidHighlightedEffectTooltip");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.ColorFilter;
var __s0local2 = function () {
  function AllianceRaidBossCardItem(__s3param0, __s3param1 = null) {
    this._isHovered = false;
    this._disp = __s3param0;
    this._rewardsCallback = __s3param1;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this._disp.btn_choose, this._disp.mc_inProgress.btn_abort, this._disp.mc_topInfo.btn_info, this._disp.mc_info.btn_info_selected, this._disp.mc_bossInfo.btn_rewards], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this._disp.btn_choose.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("")));
    this.textFieldManager.registerTextField(this._disp.mc_noPermission.txt_noPermission, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_are_no_alliance_permission_desc"));
    this.textFieldManager.registerTextField(this._disp.mc_victory.txt_maxLevel, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_are_raid_completed_desc"));
    this.textFieldManager.registerTextField(this._disp.mc_victory.txt_victory, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_are_raid_completed_title"));
    this.textFieldManager.registerTextField(this._disp.mc_locked.txt_locked, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_are_raid_locked_title"));
    this.textFieldManager.registerTextField(this._disp.mc_locked.txt_aborted, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_are_raid_aborted_title"));
    this._disp.mc_bossInfo.btn_rewards.toolTipText = "dialog_are_boss_defeated_rewards";
    this.textFieldManager.registerTextField(this._disp.mc_inProgress.txt_inProgress, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_are_raid_inprogress_title"));
    this.textFieldManager.registerTextField(this._disp.mc_inProgress.btn_abort.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("abort")));
    this._disp.mc_topInfo.mc_alliancePoints.visible = false;
  }
  AllianceRaidBossCardItem.prototype.onShow = function () {
    this._disp.addEventListener(__s0local0.ROLL_OVER, this.bindFunction(this.onRollOver));
    this._disp.addEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onRollOut));
    this._disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this._disp.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onEffectMouseOver));
    this._disp.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onEffectMouseOut));
    this._disp.mc_info.visible = false;
    this.setHover(false);
  };
  AllianceRaidBossCardItem.prototype.onHide = function () {
    this._disp.removeEventListener(__s0local0.ROLL_OVER, this.bindFunction(this.onRollOver));
    this._disp.removeEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onRollOut));
    this._disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this._disp.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onEffectMouseOver));
    this._disp.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onEffectMouseOut));
  };
  AllianceRaidBossCardItem.prototype.update = function (__s9param0) {
    this._cardVO = __s9param0;
    if (__s9param0) {
      this._disp.visible = true;
      this.updateBossInfo();
      this.applyCardStatus();
      this.setHover(this._isHovered);
    } else {
      this._disp.visible = false;
    }
  };
  Object.defineProperty(AllianceRaidBossCardItem.prototype, "portalBossID", {
    get: function () {
      if (this._cardVO) {
        return this._cardVO.portalBossID;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidBossCardItem.prototype, "cardVO", {
    get: function () {
      return this._cardVO;
    },
    enumerable: true,
    configurable: true
  });
  AllianceRaidBossCardItem.prototype.updateBossInfo = function () {
    var __s19local0 = this._cardVO.getXMLBossDataVO();
    if (__s19local0) {
      var __s19local1 = __s19local0.getBossLevel(__dep_exact_9e901e8e2483a22f.MathBase.clamp(this._cardVO.unlockedLevel + 1, 1, __s19local0.maxLevel));
      this._raidBossVO = __s19local0;
      this._levelVO = __s19local1;
      this.updateBackground(__s19local0);
      this.textFieldManager.registerTextField(this._disp.mc_bossInfo.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s19local0.getBossNameTextID()))).autoFitToBounds = true;
      this.textFieldManager.registerTextField(this._disp.mc_bossInfo.txt_LevelLabel, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("levelcount")).autoFitToBounds = true;
      if (__s19local1) {
        this.textFieldManager.registerTextField(this._disp.mc_bossInfo.txt_level, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s19local1.level));
      }
      this.textFieldManager.registerTextField(this._disp.mc_bossInfo.mc_rarity.txr_rarity, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("generals_rarity_" + __s19local0.rarity));
      this._disp.mc_bossInfo.mc_rarity.gotoAndStop(__s19local0.rarity);
      this.updateSelectionCardText(__s19local0);
      this.updateEffectInfo(__s19local0, __s19local1);
    }
  };
  AllianceRaidBossCardItem.prototype.updateSelectionCardText = function (__s23param0) {
    var __s23local0 = this._disp.mc_topInfo.mc_alliancePoints;
    var __s23local1 = !!__s23param0.selectionCardText;
    __s23local0.visible = __s23local1;
    if (__s23local1) {
      this.textFieldManager.registerTextField(__s23local0.txt_alliancePoints, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s23param0.selectionCardText)).autoFitToBounds = true;
    }
  };
  AllianceRaidBossCardItem.prototype.updateBackground = function (__s26param0) {
    var __s26local0 = this;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this._disp.mc_bg);
    var __s26local1 = "ARE_BossCard_" + __s26param0.name;
    if (this._cardVO.isLockedFinalDefeated) {
      __s26local1 += "_Victory";
    }
    var __s26local2 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s26local1, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s26local1), null, 0, false);
    this._disp.mc_bg.addChild(__s26local2);
    __s26local2.doWhenLoaded(function () {
      __s26local0._disp.mc_bg.useFilters(__s26local0.cardVO.isUnavailable || __s26local0.cardVO.isLockedAborted ? __dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_DESATURATED_BUTTON_COLOR_MATRIX : null);
    });
  };
  AllianceRaidBossCardItem.prototype.updateEffectInfo = function (__s31param0, __s31param1) {
    this.textFieldManager.registerTextField(this._disp.mc_info.txt_descriptionTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_island_main_overview_displayCarousel_description"));
    this.textFieldManager.registerTextField(this._disp.mc_info.txt_descriptionText, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_are_" + __s31param0.name + "_effect_info")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this._disp.mc_info.txt_highlightedEffects, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_are_boss_effect_category1"));
    var __s31local0 = __s31param1 && __s31param1.stages.length > 0 ? __s31param1.getAccumulatedHighlightEffects() : [];
    for (var __s31local1 = 0; __s31local1 < AllianceRaidBossCardItem.MAX_HIGHLIGHTED_EFFECTS; __s31local1++) {
      var __s31local2 = this._disp.mc_info["mc_effect" + __s31local1];
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s31local2.mc_icon);
      __s31local2.mouseChildren = false;
      __s31local2.visible = __s31local1 < __s31local0.length;
      if (__s31local2.visible) {
        var __s31local3 = new (__s31local0[__s31local1].effectType.type.getSimpleEffectIconClassForBoss(__s31local0[__s31local1].raidBossIDs))();
        __s31local2.mc_icon.addChild(__s31local3);
        __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.scaleWithAntiAliasing(__s31local3, 46, 46, -1, true);
        __s31local2.effectVO = __s31local0[__s31local1];
        __s31local2.mc_hover.visible = false;
      }
    }
  };
  AllianceRaidBossCardItem.prototype.applyCardStatus = function () {
    this._disp.mc_inProgress.visible = false;
    this._disp.mc_locked.visible = false;
    this._disp.mc_victory.visible = false;
    this._disp.btn_choose.visible = false;
    this._disp.mc_bossInfo.mc_lifebar.visible = false;
    switch (true) {
      case this._cardVO.isAvailable:
        this._disp.btn_choose.visible = true;
        this.textFieldManager.registerTextField(this._disp.btn_choose.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_are_selectButton")));
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.btn_choose, true);
        this._disp.btn_choose.toolTipText = null;
        this._disp.mc_topInfo.y = -217;
        this._disp.mc_info.btn_info_selected.y = -217;
        break;
      case this._cardVO.isUnavailable:
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.btn_choose, true);
        this.textFieldManager.registerTextField(this._disp.btn_choose.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("unavailable")));
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.btn_choose, false);
        this._disp.btn_choose.toolTipText = "dialog_are_raid_otherselected_desc";
        this._disp.mc_topInfo.y = -217;
        this._disp.mc_info.btn_info_selected.y = -217;
        break;
      case this._cardVO.isOngoing:
        this._disp.mc_inProgress.visible = true;
        this._disp.mc_bossInfo.mc_lifebar.visible = true;
        this.updateAbortButton();
        this.updateLifebar();
        this._disp.mc_topInfo.y = -185;
        this._disp.mc_info.btn_info_selected.y = -185;
        break;
      case this._cardVO.isLockedFinalDefeated:
        this._disp.mc_victory.visible = true;
        this._disp.mc_topInfo.y = -185;
        this._disp.mc_info.btn_info_selected.y = -185;
        break;
      case this._cardVO.isLockedAborted:
        this._disp.mc_locked.visible = true;
        this._disp.mc_topInfo.y = -185;
        this._disp.mc_info.btn_info_selected.y = -185;
    }
  };
  AllianceRaidBossCardItem.prototype.updateAbortButton = function () {
    var __s39local0 = this._disp.mc_inProgress.btn_abort;
    var __s39local1 = this.serverDataVO;
    var __s39local2 = !!__s39local1 && __s39local1.isLastPlayableBoss;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(__s39local0, !__s39local2);
    __s39local0.toolTipText = __s39local2 ? "dialog_are_abort_lastboss_desc" : null;
  };
  AllianceRaidBossCardItem.prototype.updateLifebar = function () {
    var __s41local0 = this.serverDataVO;
    if (__s41local0) {
      var __s41local1 = __s41local0.getCurrentXMLBossDataVO();
      var __s41local2 = __s41local0.getCurrentXMLBossLevelDataVO();
      if (__s41local1 && __s41local2) {
        var __s41local3 = this._disp.mc_bossInfo.mc_lifebar;
        var __s41local4 = __s41local2.stages;
        for (var __s41local5 = 0; __s41local5 <= 9; __s41local5++) {
          var __s41local6 = __s41local3["stage_" + __s41local5];
          __s41local6.visible = __s41local5 < __s41local4.length;
          if (__s41local6.visible) {
            __s41local6.x = __s41local3.healthbar_total.x + __s41local3.healthbar_total.width * (__s41local4[__s41local5].health / 100);
          }
        }
        var __s41local7 = new __dep_exact_81dacdf05bd32292.ColorTransform();
        __s41local7.color = __s41local1.lifebarColor;
        __s41local3.healthbar_total.useFilters([new __s0local1(__s41local7.redMultiplier, __s41local7.greenMultiplier, __s41local7.blueMultiplier, __s41local7.alphaMultiplier, __s41local7.redOffset, __s41local7.greenOffset, __s41local7.blueOffset, __s41local7.alphaOffset)]);
        __s41local3.healthbar_total.mask.scaleX = __dep_exact_9e901e8e2483a22f.MathBase.clamp(__s41local0.raidBossHealth / 100, 0, 1);
        __s41local3.healthbar_base.scaleX = __dep_exact_9e901e8e2483a22f.MathBase.clamp(__s41local0.raidBossHealthWithoutReviveUnits / 100, 0, 1);
        this.textFieldManager.registerTextField(__s41local3.txt_health, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [__s41local0.raidBossHealth]));
      }
    }
  };
  AllianceRaidBossCardItem.prototype.handleAbort = function () {
    if (this._cardVO.isOngoing) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_ModernYesNoBlueBigLabeledDialog.ModernYesNoBlueBigLabeledDialog, new __dep_export_CastleStandardYesNoDialogProperties.CastleStandardYesNoDialogProperties("dialog_are_abort_boss_title", "dialog_are_abort_boss_desc", function () {
        __dep_export_CastleModel.CastleModel.raidBossData.abortRaid();
        __dep_export_CastleModel.CastleModel.raidBossData.requestBossStatus();
      }, null, null, "abort", "cancel"));
    }
  };
  AllianceRaidBossCardItem.prototype.setHover = function (__s53param0) {
    this._isHovered = __s53param0;
    this._disp.mc_gradient_hover.visible = __s53param0;
    this._disp.mc_gradient_default.visible = !__s53param0;
    this._disp.mc_hover_frame.visible = __s53param0;
    this._disp.mc_overlay.visible = !__s53param0;
    this._disp.mc_bossInfo.y = __s53param0 ? 130 : 177;
    if (this.cardVO) {
      var __s53local0 = __dep_export_CastleModel.CastleModel.raidBossData.canManageAllianceRaid();
      this._disp.btn_choose.visible = __s53param0 && __s53local0 && (this.cardVO.isAvailable || this.cardVO.isUnavailable);
      this._disp.mc_inProgress.btn_abort.visible = __s53param0 && __s53local0 && this.cardVO.isOngoing;
      this._disp.mc_locked.txt_aborted.visible = __s53param0 && this.cardVO.isLockedAborted;
      this._disp.mc_noPermission.visible = __s53param0 && !__s53local0 && (this.cardVO.isAvailable || this.cardVO.isUnavailable || this.cardVO.isOngoing);
    }
  };
  AllianceRaidBossCardItem.prototype.onRollOver = function (__s56param0) {
    if (this._cardVO) {
      this.setHover(true);
    }
  };
  AllianceRaidBossCardItem.prototype.onRollOut = function (__s59param0) {
    this.setHover(false);
  };
  AllianceRaidBossCardItem.prototype.onEffectMouseOver = function (__s61param0) {
    if (this._raidBossVO && this._levelVO) {
      var __s61local0 = __s61param0.target;
      switch (__s61local0) {
        case this._disp.mc_info.mc_effect0:
        case this._disp.mc_info.mc_effect1:
        case this._disp.mc_info.mc_effect2:
          __dep_export_AllianceRaidHighlightedEffectTooltip.AllianceRaidHighlightedEffectTooltip.show(__s61local0, this._raidBossVO, this._levelVO);
      }
    }
  };
  AllianceRaidBossCardItem.prototype.onEffectMouseOut = function (__s65param0) {
    switch (__s65param0.target) {
      case this._disp.mc_info.mc_effect0:
      case this._disp.mc_info.mc_effect1:
      case this._disp.mc_info.mc_effect2:
        __dep_export_AllianceRaidHighlightedEffectTooltip.AllianceRaidHighlightedEffectTooltip.hideTooltip();
    }
  };
  AllianceRaidBossCardItem.prototype.onClick = function (__s68param0) {
    if (this._cardVO && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s68param0.target)) {
      switch (__s68param0.target) {
        case this._disp.btn_choose:
          if (this._cardVO.isSelectable) {
            __dep_export_CastleModel.CastleModel.raidBossData.selectRaidBoss(this.portalBossID);
            __dep_export_CastleModel.CastleModel.raidBossData.requestBossStatus();
          }
          break;
        case this._disp.mc_inProgress.btn_abort:
          this.handleAbort();
          break;
        case this._disp.mc_topInfo.btn_info:
          this._disp.mc_info.visible = true;
          break;
        case this._disp.mc_info.btn_info_selected:
          this._disp.mc_info.visible = false;
          break;
        case this._disp.mc_bossInfo.btn_rewards:
          if (this._rewardsCallback && this.portalBossID > 0) {
            this._rewardsCallback(this.portalBossID);
          }
      }
    }
  };
  Object.defineProperty(AllianceRaidBossCardItem.prototype, "serverDataVO", {
    get: function () {
      var __s74local0 = __dep_export_AllianceRaidbossEventEventVO.AllianceRaidbossEventEventVO.getActiveEventVO();
      if (__s74local0) {
        return __s74local0.raidBossServerDataVO;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidBossCardItem.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AllianceRaidBossCardItem.MAX_HIGHLIGHTED_EFFECTS = 3;
  return AllianceRaidBossCardItem;
}();
exports.AllianceRaidBossCardItem = __s0local2;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
