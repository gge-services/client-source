Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstAlliance = require("gge-module:export_ClientConstAlliance");
var __dep_export_C2SFindNextMapObjectVO = require("gge-module:export_C2SFindNextMapObjectVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleAllianceDataEvent = require("gge-module:export_CastleAllianceDataEvent");
var __dep_export_CastleArmyDataEvent = require("gge-module:export_CastleArmyDataEvent");
var __dep_export_CastleScoreEventEvent = require("gge-module:export_CastleScoreEventEvent");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_MovieClipLayoutable = require("gge-module:export_MovieClipLayoutable");
var __dep_export_SimpleMaskScrollComponent = require("gge-module:export_SimpleMaskScrollComponent");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_AttackHelper = require("gge-module:export_AttackHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleAllianceDialog = require("gge-module:export_CastleAllianceDialog");
var __dep_export_CastleAllianceDialogProperties = require("gge-module:export_CastleAllianceDialogProperties");
var __dep_export_CastleAllianceDialogTreasury = require("gge-module:export_CastleAllianceDialogTreasury");
var __dep_export_AllianceRaidEventBossStageComponent = require("gge-module:export_AllianceRaidEventBossStageComponent");
var __dep_export_AllianceRaidEventDialogMovementItem = require("gge-module:export_AllianceRaidEventDialogMovementItem");
var __dep_export_AllianceRaidEventDialogSublayer = require("gge-module:export_AllianceRaidEventDialogSublayer");
var __dep_export_AllianceRaidEventMainDialog = require("gge-module:export_AllianceRaidEventMainDialog");
var __dep_export_AllianceRaidHighlightedEffectTooltip = require("gge-module:export_AllianceRaidHighlightedEffectTooltip");
var __dep_export_ARE_WallStatus_Component = require("gge-module:export_ARE_WallStatus_Component");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function AllianceRaidEventDialogOverview(__s3param0, __s3param1 = null, __s3param2 = null) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._shopButtonAtAttackList = false;
    __s3local0._allianceBuffsHeight = 0;
    __s3local0._bossSelectionCallback = __s3param1;
    __s3local0._activityRewardsCallback = __s3param2;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceRaidEventDialogOverview, __s1param0);
  AllianceRaidEventDialogOverview.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.subLayerDisp.mc_statusMenu.btn_jumpTo, this.subLayerDisp.mc_statusMenu.btn_attack, this.subLayerDisp.mc_rewards.btn_rewards], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.subLayerDisp.mc_attacks.btn_expand]);
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_bossName.txt_levelStatic, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("levelcount"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_descriptionSmall.txt_descriptionTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_island_main_overview_displayCarousel_description"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_descriptionBig.txt_descriptionTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_island_main_overview_displayCarousel_description"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_rewards.txt_rewards, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_are_activityreward_title"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_rewards.mc_completed.txt_completed, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_are_activityRewards_allRewardsEarned")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_timer.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("remainingTime"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_attacks.txt_attacksTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_are_currentAttacks_title"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_attacks.txt_empty, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_are_currentAttacks_empty_desc"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_statusMenu.btn_jumpTo.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_are_btn_jump_to_map"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_statusMenu.btn_attack.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_are_btn_attack_boss")));
    this._itxt_rarity = this.textFieldManager.registerTextField(this.subLayerDisp.mc_bossName.txt_rarity, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this._itxt_points = this.textFieldManager.registerTextField(this.subLayerDisp.mc_rewards.mc_progress.txt_progress, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this._itxt_timer = this.textFieldManager.registerTextField(this.subLayerDisp.mc_timer.txt_remainingTime, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.subLayerDisp.mc_effects.mc_top.mc_effect0.mouseChildren = false;
    this.subLayerDisp.mc_effects.mc_top.mc_effect1.mouseChildren = false;
    this.subLayerDisp.mc_effects.mc_top.mc_effect2.mouseChildren = false;
    this._statusComponent = new __dep_export_ARE_WallStatus_Component.ARE_WallStatus_Component(this.subLayerDisp.mc_statusMenu, true, false);
    this._effectList = new __dep_export_SimpleMaskScrollComponent.SimpleMaskScrollComponent(this.subLayerDisp.mc_effects);
    var __s5local0 = this.subLayerDisp.mc_attacks.mc_allianceBuffs;
    if (__s5local0) {
      __dep_export_ButtonHelper.ButtonHelper.initButtons([__s5local0.btn_allianceBuffs], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
      this.textFieldManager.registerTextField(__s5local0.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_treasury_alliBoosters_header"));
      this._allianceBuffsHeight = __s5local0.height;
      if (__s5local0.mc_new) {
        __s5local0.mc_new.mouseEnabled = __s5local0.mc_new.mouseChildren = false;
      }
    }
    if (this.subLayerDisp.mc_attacks.mc_mask) {
      this.subLayerDisp.mc_attacks.mc_items.mask = this.subLayerDisp.mc_attacks.mc_mask;
    }
    var __s5local1 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_AllianceRaidEventDialogMovementItem.AllianceRaidEventDialogMovementItem, "ARE_Main_CurrentAttackItem", __dep_export_AllianceRaidEventMainDialog.AllianceRaidEventMainDialog.NAME);
    this._movementList = this.createScrollList(this.subLayerDisp.mc_attacks, __s5local1);
    this._bossStageComponent = new __dep_export_AllianceRaidEventBossStageComponent.AllianceRaidEventBossStageComponent(this.subLayerDisp.mc_bossStages);
  };
  AllianceRaidEventDialogOverview.prototype.show = function (__s10param0) {
    __s1param0.prototype.show.call(this, __s10param0);
    this.onTimerUpdate();
    this.updateMovements();
    this.updateRewards();
    this._statusComponent.show();
    if (this.eventVO.raidBossServerDataVO) {
      this.updateBossElements();
    } else {
      this.subLayerDisp.visible = false;
    }
    this.subLayerDisp.mc_statusMenu.btn_jumpTo.visible = !this.dialogProperties.wmoPortal;
    this.subLayerDisp.mc_statusMenu.btn_attack.visible = !!this.dialogProperties.wmoPortal;
    this.subLayerDisp.mc_descriptionSmall.mc_descriptionTooltip.visible = false;
    this.subLayerDisp.mc_descriptionSmall.icon_tooltip.mouseChildren = false;
    this.subLayerDisp.mc_bossStages.mc_tooltip.visible = false;
    this.subLayerDisp.mc_bossStages.icon_tooltip.mouseChildren = false;
    this.subLayerDisp.mc_effects.mc_top.mc_tooltip.visible = false;
    if (this.subLayerDisp.mc_attacks.mc_allianceBuffs && this.subLayerDisp.mc_attacks.mc_allianceBuffs.mc_new) {
      this.subLayerDisp.mc_attacks.mc_allianceBuffs.mc_new.visible = __dep_export_CastleModel.CastleModel.localData.readPlayerValue(AllianceRaidEventDialogOverview.ALLIANCE_BUFFS_NEW_SEEN_KEY) != 1;
    }
    this.controller.addEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onMovementChanged));
    this.controller.addEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    __dep_export_CastleModel.CastleModel.raidBossData.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ARE_BOSS_UPDATED_FULL, this.bindFunction(this.onBSEArrived));
    __dep_export_CastleModel.CastleModel.raidBossData.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ARE_BOSS_UPDATED_BASE, this.bindFunction(this.onBSSArrived));
    __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
    this._bossStageComponent.onShow();
    this._bossStageComponent.selectionChangeSignal.add(this.bindFunction(this.onBossStageSelectionChanged));
    this._bossStageComponent.selectCurrentStage();
    __dep_export_CastleModel.CastleModel.raidBossData.requestBossStatus();
  };
  AllianceRaidEventDialogOverview.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this._statusComponent) {
      this._statusComponent.hide();
    }
    if (this._shopButtonDefaultPos) {
      this.resetShopButtonPosition();
    }
    if (this._effectList) {
      this._effectList.onHide();
    }
    if (this._movementList) {
      this._movementList.onHide();
    }
    if (this._bossStageComponent) {
      this._bossStageComponent.onHide();
    }
    this.controller.removeEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onMovementChanged));
    this.controller.removeEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    __dep_export_CastleModel.CastleModel.raidBossData.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ARE_BOSS_UPDATED_FULL, this.bindFunction(this.onBSEArrived));
    __dep_export_CastleModel.CastleModel.raidBossData.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ARE_BOSS_UPDATED_BASE, this.bindFunction(this.onBSSArrived));
    __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
  };
  AllianceRaidEventDialogOverview.prototype.updateBossElements = function () {
    this.updateBossInfo();
    this.updateEffects();
    this.updateBossStages();
  };
  AllianceRaidEventDialogOverview.prototype.updateBossInfo = function () {
    if (this.eventVO.raidBossServerDataVO.raidBossID > 0) {
      var __s24local0 = this.eventVO.raidBossServerDataVO.getCurrentXMLBossDataVO();
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_bossName.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s24local0.getBossNameTextID()))).autoFitToBounds = true;
      this._itxt_rarity.textContentVO.textId = "generals_rarity_" + __s24local0.rarity;
      this._itxt_rarity.color = __s24local0.rarityTextColor;
      var __s24local1 = this.eventVO.raidBossServerDataVO.getCurrentXMLBossLevelDataVO();
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_bossName.txt_levelValue, new __dep_exact_92d05af59ee2ff30_3.LocalizedNumberVO(__s24local1.level)).autoFitToBounds = true;
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_descriptionBig.txt_descriptionText, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_are_boss_narrativ_short_desc_" + __s24local0.name)).autoFitToBounds = true;
      var __s24local2 = this.textFieldManager.registerTextField(this.subLayerDisp.mc_descriptionSmall.mc_descriptionTooltip.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_are_boss_narrativ_short_desc_" + __s24local0.name));
      __s24local2.height = __s24local2.textHeight;
      this.subLayerDisp.mc_descriptionSmall.mc_descriptionTooltip.bg.height = __s24local2.textHeight + 12;
    }
  };
  AllianceRaidEventDialogOverview.prototype.updateEffects = function () {
    this.subLayerDisp.mc_effects.mc_top.mc_stage.mc_divider.visible = false;
    this._bossStageComponent.initButtonState(this.subLayerDisp.mc_effects.mc_top.mc_stage, this._bossStageComponent.selectedStageIndex);
    this._bossStageComponent.updateButtonState(this.subLayerDisp.mc_effects.mc_top.mc_stage, this._bossStageComponent.selectedStageIndex);
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_effects.mc_top.txt_effectsTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_are_boss_effect_title"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_effects.mc_top.txt_highlightedEffects, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_are_boss_effect_category1"));
    if (this._bossStageComponent.selectedStageVO) {
      var __s27local0 = this._bossStageComponent.selectedStageVO.getHighlightedEffects();
      for (var __s27local1 = 0; __s27local1 < AllianceRaidEventDialogOverview.MAX_HIGHLIGHTED_EFFECTS; __s27local1++) {
        var __s27local2 = this.subLayerDisp.mc_effects.mc_top["mc_effect" + __s27local1];
        __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s27local2.mc_icon);
        __s27local2.visible = __s27local1 < __s27local0.length;
        if (__s27local2.visible) {
          var __s27local3 = new (__s27local0[__s27local1].effectType.type.getSimpleEffectIconClassForBoss(__s27local0[__s27local1].raidBossIDs))();
          __s27local2.mc_icon.addChild(__s27local3);
          __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.scaleWithAntiAliasing(__s27local3, 46, 46, -1, true);
          __s27local2.effectVO = __s27local0[__s27local1];
          __s27local2.mc_hover.visible = false;
        }
      }
      this._effectList.clear();
      this.createEffectCategory("dialog_are_boss_effect_category3", this._bossStageComponent.selectedStageVO.attackerBattleEffects, 23);
      this.createEffectCategory("dialog_are_boss_effect_category4", this._bossStageComponent.selectedStageVO.attackerStageEffects.concat(this._bossStageComponent.selectedStageVO.defenderStageEffects).concat(this._bossStageComponent.selectedStageVO.defenderWallRegenerationEffects), 30);
      this.createEffectCategory("dialog_are_boss_effect_category5", this._bossStageComponent.selectedStageVO.attackerPostBattleEffects.concat(this._bossStageComponent.selectedStageVO.defenderPostBattleEffects), 30);
      this._effectList.onShow();
    }
  };
  AllianceRaidEventDialogOverview.prototype.createEffectCategory = function (__s33param0, __s33param1, __s33param2) {
    var __s33local0 = this;
    if (__s33param1.length > 0) {
      var __s33local1 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("ARE_Main_EffectCategoryItem"))();
      var __s33local2 = new __dep_export_MovieClipLayoutable.MovieClipLayoutable(__s33local1);
      this.textFieldManager.registerTextField(__s33local1.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s33param0), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
      this._effectList.addItem(__s33local2);
      __s33param1.forEach(function (__s36param0) {
        var __s36local0 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("ARE_Main_EffectItem"))();
        var __s36local1 = new __dep_export_MovieClipLayoutable.MovieClipLayoutable(__s36local0);
        var __s36local2 = __s33local0.textFieldManager.registerTextField(__s36local0.txt_description, new __dep_exact_92d05af59ee2ff30.TextVO(__s36param0.descriptionText), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
        __s36local2.height = __s36local2.textHeight;
        __s36local1.customHeight = Math.max(44, __s36local2.y + __s36local2.textHeight + 2);
        if (__s36param0.effect.effectType.type && __s36param0.effect.effectType.type.simpleEffectIconClass) {
          var __s36local3 = new (__s36param0.effect.effectType.type.getSimpleEffectIconClassForBoss(__s36param0.effect.raidBossIDs))();
          __s36local0.mc_icon.addChild(__s36local3);
          __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.scaleWithAntiAliasing(__s36local3, __s33param2, __s33param2);
          __s36local3.y = __s36local3.x = 0;
        }
        __s33local0._effectList.addItem(__s36local1);
      });
    }
  };
  AllianceRaidEventDialogOverview.prototype.updateBossStages = function () {
    if (this._backgroundClip) {
      this.updateBackground(this._backgroundClip);
    }
    this._bossStageComponent.updateComponent();
  };
  AllianceRaidEventDialogOverview.prototype.updateRewards = function () {
    var __s42local0 = this.eventVO ? this.eventVO.scoreEventVO : null;
    if (__s42local0 && __s42local0.pointThresholds && __s42local0.pointThresholds.length > 0) {
      this.subLayerDisp.mc_rewards.visible = true;
      var __s42local1 = __s42local0.ownPoints;
      var __s42local2 = Math.min(__s42local0.rewardsReceived, __s42local0.pointThresholds.length - 1);
      var __s42local3 = __s42local2 - 1 >= 0 ? __s42local0.pointThresholds[__s42local2 - 1] : 0;
      var __s42local4 = __s42local0.pointThresholds[__s42local2];
      this._itxt_points.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30_2.Localize.text(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s42local1 || 0), new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s42local4 || 0)]);
      this.subLayerDisp.mc_rewards.mc_progress.progressBar.scaleX = __dep_exact_9e901e8e2483a22f_1.MathBase.clamp((__s42local1 - __s42local3) / (__s42local4 - __s42local3), 0, 1);
      var __s42local5 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(64, 62));
      if (__s42local0.rewardsReceived == __s42local0.pointThresholds.length) {
        this.subLayerDisp.mc_rewards.mc_completed.visible = true;
        this.subLayerDisp.mc_rewards.item0.visible = false;
        this.subLayerDisp.mc_rewards.item1.visible = false;
      } else {
        this.subLayerDisp.mc_rewards.mc_completed.visible = false;
        this.subLayerDisp.mc_rewards.item0.visible = true;
        this.subLayerDisp.mc_rewards.item1.visible = true;
        var __s42local6 = __s42local0.rewardLists[__s42local2];
        __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.subLayerDisp.mc_rewards, "item").addItemMcs("mc_item").addInfoBtns("parent.btn_info"), __s42local6, __s42local5);
      }
    } else {
      this.subLayerDisp.mc_rewards.visible = false;
    }
  };
  AllianceRaidEventDialogOverview.prototype.updateMovements = function (__s48param0 = true) {
    var __s48local0 = Array.from(__dep_export_CastleModel.CastleModel.armyData.mapMovements.values()).filter(function (__s50param0) {
      return __s50param0.targetArea.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_ARE_PORTAL && !__s50param0.isReturnHome;
    }).sort(function (__s52param0, __s52param1) {
      return __s52param0.getTimeUntiMovmentReachTargetInMilliSeconds() - __s52param1.getTimeUntiMovmentReachTargetInMilliSeconds();
    });
    this._movementList.onShow();
    this._movementList.updateWithNewData(__s48local0, __s48param0);
    this.subLayerDisp.mc_attacks.txt_empty.visible = __s48local0.length == 0;
  };
  AllianceRaidEventDialogOverview.prototype.onBSEArrived = function (__s54param0) {
    if (this.switchToBossSelectionWithoutBoss()) {
      this.subLayerDisp.visible = this.isSublayerActive;
      this.updateBossElements();
    }
  };
  AllianceRaidEventDialogOverview.prototype.onBSSArrived = function (__s57param0) {
    if (this.switchToBossSelectionWithoutBoss()) {
      this.updateBossElements();
    }
  };
  AllianceRaidEventDialogOverview.prototype.switchToBossSelectionWithoutBoss = function () {
    return !!this.hasSelectedBoss() || (this._bossSelectionCallback && this._bossSelectionCallback(), false);
  };
  AllianceRaidEventDialogOverview.prototype.hasSelectedBoss = function () {
    return !!this.eventVO && !!this.eventVO.raidBossServerDataVO && !!this.eventVO.raidBossServerDataVO.hasActiveRaid && !!this.eventVO.raidBossServerDataVO.getCurrentXMLBossDataVO() && !!this.eventVO.raidBossServerDataVO.getCurrentXMLBossLevelDataVO() && !!this.eventVO.raidBossServerDataVO.getCurrentXMLBossStageDataVO();
  };
  AllianceRaidEventDialogOverview.prototype.onMovementChanged = function (__s64param0 = null) {
    this.updateMovements(false);
  };
  AllianceRaidEventDialogOverview.prototype.onTimerUpdate = function (__s66param0 = null) {
    this._itxt_timer.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.eventVO.remainingEventTimeInSeconds);
    if (this._movementList) {
      this._movementList.items.forEach(function (__s69param0) {
        __s69param0.updateRemainingTime();
      });
    }
  };
  AllianceRaidEventDialogOverview.prototype.onUpdatePoints = function (__s71param0) {
    this.updateRewards();
  };
  AllianceRaidEventDialogOverview.prototype.onAllianceDataUpdated = function (__s73param0) {
    this.updateMovements(false);
  };
  AllianceRaidEventDialogOverview.prototype.onBossStageSelectionChanged = function (__s75param0) {
    this.updateEffects();
  };
  AllianceRaidEventDialogOverview.prototype.onClick = function (__s77param0) {
    __s1param0.prototype.onClick.call(this, __s77param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s77param0.target)) {
      var __s77local0 = this.subLayerDisp.mc_attacks.mc_allianceBuffs;
      if (__s77local0 && __s77param0.target == __s77local0.btn_allianceBuffs) {
        if (__s77local0.mc_new) {
          __s77local0.mc_new.visible = false;
          __dep_export_CastleModel.CastleModel.localData.savePlayerValue(AllianceRaidEventDialogOverview.ALLIANCE_BUFFS_NEW_SEEN_KEY, 1);
        }
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceDialog.CastleAllianceDialog, new __dep_export_CastleAllianceDialogProperties.CastleAllianceDialogProperties(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_TREASURY, __dep_export_CastleAllianceDialogTreasury.CastleAllianceDialogTreasury.TAB_BOOSTER));
        return;
      }
      switch (__s77param0.target) {
        case this.subLayerDisp.mc_statusMenu.btn_jumpTo:
          __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideAllDialogs();
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SFindNextMapObjectVO.C2SFindNextMapObjectVO(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_ARE_PORTAL, __dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID, -1, -1, __dep_exact_26a421b704832cff.DungeonConst.BASIC_ARE_PORTAL_PLAYER_ID));
          break;
        case this.subLayerDisp.mc_statusMenu.btn_attack:
          if (this.dialogProperties.wmoPortal) {
            __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideAllDialogs();
            __dep_export_AttackHelper.AttackHelper.executeAttackCommand(this.dialogProperties.wmoPortal, this.dialogProperties.wmoPortal.attackType, null);
          }
          break;
        case this.subLayerDisp.mc_attacks.btn_expand:
          if (this.subLayerDisp.mc_attacks.x > this._width) {
            this.subLayerDisp.mc_attacks.x = this._width;
          } else {
            this.subLayerDisp.mc_attacks.x = this._width + this.subLayerDisp.mc_attacks.bg.width;
          }
          this.updateShopButtonPosition();
          break;
        case this.subLayerDisp.mc_rewards.btn_rewards:
          if (this._activityRewardsCallback) {
            this._activityRewardsCallback();
          }
      }
    }
  };
  AllianceRaidEventDialogOverview.prototype.onMouseOver = function (__s87param0) {
    __s1param0.prototype.onMouseOver.call(this, __s87param0);
    switch (__s87param0.target) {
      case this.subLayerDisp.mc_descriptionSmall.icon_tooltip:
        this.subLayerDisp.mc_descriptionSmall.mc_descriptionTooltip.visible = true;
        break;
      case this.subLayerDisp.mc_bossStages.icon_tooltip:
        this.subLayerDisp.mc_bossStages.mc_tooltip.visible = true;
        break;
      case this.subLayerDisp.mc_effects.mc_top.mc_effect0:
      case this.subLayerDisp.mc_effects.mc_top.mc_effect1:
      case this.subLayerDisp.mc_effects.mc_top.mc_effect2:
        this.showHighlightedEffectTooltip(__s87param0.target);
    }
  };
  AllianceRaidEventDialogOverview.prototype.onMouseOut = function (__s90param0) {
    __s1param0.prototype.onMouseOut.call(this, __s90param0);
    switch (__s90param0.target) {
      case this.subLayerDisp.mc_descriptionSmall.icon_tooltip:
        this.subLayerDisp.mc_descriptionSmall.mc_descriptionTooltip.visible = false;
        break;
      case this.subLayerDisp.mc_bossStages.icon_tooltip:
        this.subLayerDisp.mc_bossStages.mc_tooltip.visible = false;
        break;
      case this.subLayerDisp.mc_effects.mc_top.mc_effect0:
      case this.subLayerDisp.mc_effects.mc_top.mc_effect1:
      case this.subLayerDisp.mc_effects.mc_top.mc_effect2:
        __dep_export_AllianceRaidHighlightedEffectTooltip.AllianceRaidHighlightedEffectTooltip.hideTooltip();
    }
  };
  AllianceRaidEventDialogOverview.prototype.showHighlightedEffectTooltip = function (__s93param0) {
    __dep_export_AllianceRaidHighlightedEffectTooltip.AllianceRaidHighlightedEffectTooltip.show(__s93param0, this.eventVO.raidBossServerDataVO.getCurrentXMLBossDataVO(), this.eventVO.raidBossServerDataVO.getCurrentXMLBossLevelDataVO());
  };
  AllianceRaidEventDialogOverview.prototype.updatePosition = function (__s95param0, __s95param1) {
    __s1param0.prototype.updatePosition.call(this, __s95param0, __s95param1);
    this._width = __s95param0;
    var __s95local0 = this.subLayerDisp.parent;
    var __s95local1 = __s95param1 / 800 * AllianceRaidEventDialogOverview.TOP_Y;
    this.subLayerDisp.mc_rewards.x = 0;
    this.subLayerDisp.mc_rewards.y = __s95param1;
    this.subLayerDisp.mc_bossName.x = 0;
    this.subLayerDisp.mc_bossName.y = __s95local1;
    this.subLayerDisp.mc_descriptionBig.x = 0;
    this.subLayerDisp.mc_descriptionBig.y = __s95local1 + this.subLayerDisp.mc_bossName.height;
    this.subLayerDisp.mc_descriptionSmall.x = 0;
    this.subLayerDisp.mc_descriptionSmall.y = __s95local1 + this.subLayerDisp.mc_bossName.height;
    var __s95local2 = this.subLayerDisp.mc_rewards.y - this.subLayerDisp.mc_rewards.height;
    var __s95local3 = __s95local2 - (this.subLayerDisp.mc_descriptionBig.y + this.subLayerDisp.mc_descriptionBig.height) < 250;
    this.subLayerDisp.mc_descriptionBig.visible = !__s95local3;
    this.subLayerDisp.mc_descriptionSmall.visible = __s95local3;
    var __s95local4 = __s95local2 - (this.subLayerDisp.mc_effects.y = __s95local3 ? this.subLayerDisp.mc_descriptionSmall.y + this.subLayerDisp.mc_descriptionSmall.bg.height : this.subLayerDisp.mc_descriptionBig.y + this.subLayerDisp.mc_descriptionBig.height);
    this.subLayerDisp.mc_effects.bg.height = __s95local4;
    this.subLayerDisp.mc_effects.mc_items.mask.height = __s95local4 - this.subLayerDisp.mc_effects.mc_items.mask.y;
    this.subLayerDisp.mc_effects.mc_scroll.mc_sliderLine.height = __s95local4 - this.subLayerDisp.mc_effects.mc_scroll.y - 2;
    this._effectList.reInit();
    this.resetShopButtonPosition();
    var __s95local5 = __s95local0.mc_tabs.btn_blacksmith;
    var __s95local6 = __s95local0.mc_tabs.width;
    this.subLayerDisp.mc_statusMenu.x = __s95param0;
    this.subLayerDisp.mc_statusMenu.y = __s95param1;
    __s95local2 = this.subLayerDisp.mc_statusMenu.y - this.subLayerDisp.mc_statusMenu.height;
    var __s95local7 = __s95param0 - __s95local6 - __s95local0.mc_buttons.width - this.subLayerDisp.mc_timer.width - 30;
    var __s95local8 = __s95local7 >= this.subLayerDisp.mc_bossStages.width;
    if (__s95local8) {
      this.subLayerDisp.mc_timer.x = __s95param0 - __s95local0.mc_buttons.width - 10;
      this.subLayerDisp.mc_timer.y = 5;
    } else {
      this.subLayerDisp.mc_timer.x = __s95param0;
      __s95local2 = this.subLayerDisp.mc_timer.y = __s95local2 - this.subLayerDisp.mc_timer.height - 4;
      __s95local7 += this.subLayerDisp.mc_timer.width;
    }
    this._shopButtonAtAttackList = __s95local7 < this.subLayerDisp.mc_bossStages.width;
    if (this._shopButtonAtAttackList) {
      var __s95local9 = 0;
      for (var __s95local10 = 0, __s95local11 = __s95local0.mc_tabs.children; __s95local10 < __s95local11.length; __s95local10++) {
        var __s95local12 = __s95local11[__s95local10];
        if (__s95local12 != __s95local5) {
          __s95local9 = Math.max(__s95local9, __s95local12.x + __s95local12.width);
        }
      }
      __s95local7 = __s95local7 + __s95local6 - __s95local9;
      __s95local6 = __s95local9;
    }
    var __s95local13 = __s95local2 - __s95local1 - 10;
    var __s95local14 = __s95local13;
    if (this.subLayerDisp.mc_attacks.mc_allianceBuffs) {
      this.subLayerDisp.mc_attacks.mc_allianceBuffs.y = __s95local13 - this._allianceBuffsHeight;
      __s95local14 = this.subLayerDisp.mc_attacks.mc_allianceBuffs.y;
    }
    this.resizeScrollComponent(this._movementList, __s95local13, __s95local14);
    this.subLayerDisp.mc_attacks.y = __s95local1;
    this.subLayerDisp.mc_attacks.txt_empty.y = __s95local13 / 2;
    this.subLayerDisp.mc_attacks.btn_expand.y = __s95local13 / 2;
    this.subLayerDisp.mc_attacks.btn_expand.visible = !__s95local8;
    this.subLayerDisp.mc_attacks.x = __s95local8 ? __s95param0 : __s95param0 + this.subLayerDisp.mc_attacks.bg.width;
    this.updateShopButtonPosition();
    this.subLayerDisp.mc_bossStages.x = __s95local6 + __s95local7 / 2;
    this.updateMovements();
    this.updateEffects();
  };
  Object.defineProperty(AllianceRaidEventDialogOverview.prototype, "shopButton", {
    get: function () {
      return this.subLayerDisp.parent.mc_tabs.btn_blacksmith;
    },
    enumerable: true,
    configurable: true
  });
  AllianceRaidEventDialogOverview.prototype.resetShopButtonPosition = function () {
    var __s106local0 = this.shopButton;
    this._shopButtonDefaultPos ||= new __s0local0(__s106local0.x, __s106local0.y);
    __s106local0.x = this._shopButtonDefaultPos.x;
    __s106local0.y = this._shopButtonDefaultPos.y;
    this._shopButtonAtAttackList = false;
  };
  AllianceRaidEventDialogOverview.prototype.updateShopButtonPosition = function () {
    if (this._shopButtonAtAttackList) {
      var __s108local0 = this.shopButton;
      __s108local0.x = this.subLayerDisp.mc_attacks.x - this.subLayerDisp.mc_attacks.bg.width - __s108local0.width / 2 - 10;
      __s108local0.y = this.subLayerDisp.mc_attacks.y + __s108local0.height / 2 + 10;
    }
  };
  AllianceRaidEventDialogOverview.prototype.resizeScrollComponent = function (__s111param0, __s111param1, __s111param2 = -1) {
    if (__s111param2 < 0) {
      __s111param2 = __s111param1;
    }
    __s111param0.clips.itemMc.bg.height = __s111param1;
    __s111param0.clips.maskMc.height = __s111param2 - __s111param0.clips.maskMc.y;
    __s111param0.clips.sliderMc.mc_sliderLine.height = __s111param2 - __s111param0.clips.sliderMc.y - 2;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s111param0.clips.itemContainerMc);
    __s111param0.onHide();
    __s111param0.destroy();
    __s111param0.reInit();
  };
  AllianceRaidEventDialogOverview.prototype.updateBackground = function (__s114param0) {
    this._backgroundClip = __s114param0;
    if (this.eventVO && this.eventVO.raidBossServerDataVO) {
      var __s114local0 = __s114param0.currentshownDisplayObject;
      __s114local0.wall_left.visible = this.eventVO.raidBossServerDataVO.leftWallPercent > 0;
      __s114local0.wall_left_damaged.visible = this.eventVO.raidBossServerDataVO.leftWallPercent <= 0;
      __s114local0.wall_right.visible = this.eventVO.raidBossServerDataVO.rightWallPercent > 0;
      __s114local0.wall_right_damaged.visible = this.eventVO.raidBossServerDataVO.rightWallPercent <= 0;
      __s114local0.gate.visible = this.eventVO.raidBossServerDataVO.middleWallPercent > 0;
      __s114local0.gate_damaged.visible = this.eventVO.raidBossServerDataVO.middleWallPercent <= 0;
      var __s114local1 = this.eventVO.raidBossServerDataVO.getCurrentXMLBossStageDataVO();
      for (var __s114local2 = 0, __s114local3 = __s114local0.children; __s114local2 < __s114local3.length; __s114local2++) {
        var __s114local4 = __s114local3[__s114local2];
        if (__s114local4.name.startsWith("keep_")) {
          __s114local4.visible = !!__s114local1 && __s114local4.name.endsWith(__s114local1.generalID.toString());
        }
      }
    }
  };
  AllianceRaidEventDialogOverview.TOP_Y = 74;
  AllianceRaidEventDialogOverview.MAX_HIGHLIGHTED_EFFECTS = 3;
  AllianceRaidEventDialogOverview.ALLIANCE_BUFFS_NEW_SEEN_KEY = "seenAREAllianceBuffsButtonNew";
  return AllianceRaidEventDialogOverview;
}(__dep_export_AllianceRaidEventDialogSublayer.AllianceRaidEventDialogSublayer);
exports.AllianceRaidEventDialogOverview = __s0local1;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
