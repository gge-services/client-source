Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstQuestCondition = require("gge-module:export_ClientConstQuestCondition");
var __dep_export_C2SGeneralUnlockVO = require("gge-module:export_C2SGeneralUnlockVO");
var __dep_export_C2SFinishQuestConditionVO = require("gge-module:export_C2SFinishQuestConditionVO");
var __dep_export_SublayerSwitcher = require("gge-module:export_SublayerSwitcher");
var __dep_export_GeneralsEvent = require("gge-module:export_GeneralsEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ClickFeedbackHoverBehaviour = require("gge-module:export_ClickFeedbackHoverBehaviour");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_GeneralSelection = require("gge-module:export_GeneralSelection");
var __dep_export_GeneralSelectionProperties = require("gge-module:export_GeneralSelectionProperties");
var __dep_export_GeneralsHelper = require("gge-module:export_GeneralsHelper");
var __dep_export_GeneralsOverviewDialogInfo = require("gge-module:export_GeneralsOverviewDialogInfo");
var __dep_export_GeneralsOverviewDialogStory = require("gge-module:export_GeneralsOverviewDialogStory");
var __dep_export_GeneralsOverviewDialogSublayerProperties = require("gge-module:export_GeneralsOverviewDialogSublayerProperties");
var __s0local0 = function (__s1param0) {
  function GeneralsOverviewDialog() {
    var __s3local0 = __s1param0.call(this, GeneralsOverviewDialog.NAME) || this;
    __s3local0._preventFlagReset = false;
    __s3local0.level100LoadedCount = 0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralsOverviewDialog, __s1param0);
  GeneralsOverviewDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.dialogDisp.changeTextFieldCacheScale(2);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.mc_right2.btn_close, this.dialogDisp.mc_right2.btn_help, this.dialogDisp.mc_left.btn_tavern, this.dialogDisp.mc_left.btn_ui_hide, this.dialogDisp.mc_left.btn_ui_show, this.dialogDisp.btn_unlock], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.mc_right.btn_info, this.dialogDisp.mc_right.btn_story, this.dialogDisp.mc_left.mc_selection.btn_player, this.dialogDisp.mc_left.mc_selection.btn_npc], __dep_exact_84d43d9c404bd4d8.BasicButton, 1);
    var __s5local0 = new __dep_export_ClickFeedbackHoverBehaviour.ClickFeedbackHoverBehaviour(this.dialogDisp.mc_right.btn_info);
    var __s5local1 = new __dep_export_ClickFeedbackHoverBehaviour.ClickFeedbackHoverBehaviour(this.dialogDisp.mc_right.btn_story);
    var __s5local2 = new __dep_export_ClickFeedbackHoverBehaviour.ClickFeedbackHoverBehaviour(this.dialogDisp.mc_left.mc_selection.btn_player);
    var __s5local3 = new __dep_export_ClickFeedbackHoverBehaviour.ClickFeedbackHoverBehaviour(this.dialogDisp.mc_left.mc_selection.btn_npc);
    __s5local0.addEventListener();
    __s5local1.addEventListener();
    __s5local2.addEventListener();
    __s5local3.addEventListener();
    this._sublayerSwitcher = new __dep_export_SublayerSwitcher.SublayerSwitcher(this.bindFunction(this.createSublayerProperties));
    this._sublayerSwitcher.add(GeneralsOverviewDialog.TAB_INFO, this.dialogDisp.mc_right.btn_info, new __dep_export_GeneralsOverviewDialogInfo.GeneralsOverviewDialogInfo(this.dialogDisp.mc_right.tab_info, this));
    this._sublayerSwitcher.add(GeneralsOverviewDialog.TAB_STORY, this.dialogDisp.mc_right.btn_story, new __dep_export_GeneralsOverviewDialogStory.GeneralsOverviewDialogStory(this.dialogDisp.mc_right.tab_story));
    this._sublayerSwitcher.add(GeneralsOverviewDialog.TAB_STORY_NPC, this.dialogDisp.mc_right.btn_story_npc, new __dep_export_GeneralsOverviewDialogStory.GeneralsOverviewDialogStory(this.dialogDisp.mc_right.tab_story_npc));
    this.dialogDisp.mc_right.btn_info.mc_icon.gotoAndStop(1);
    this.dialogDisp.mc_right.btn_story.mc_icon.gotoAndStop(2);
    this.dialogDisp.mc_right.btn_story_npc.mc_icon.gotoAndStop(2);
    this.dialogDisp.mc_left.mc_selection.btn_player.mc_icon.gotoAndStop(10);
    this.dialogDisp.mc_left.mc_selection.btn_npc.mc_icon.gotoAndStop(11);
    this.dialogDisp.mc_right.btn_info.toolTipText = "dialog_generals_overview_tab_skills_tooltip";
    this.dialogDisp.mc_right.btn_story.toolTipText = "dialog_generals_overview_tab_misc_tooltip";
    this.dialogDisp.mc_right.btn_story_npc.toolTipText = "dialog_generals_overview_tab_misc_tooltip";
    this.dialogDisp.mc_left.btn_tavern.toolTipText = "panel_action_generals_inn";
    this.dialogDisp.mc_left.mc_selection.btn_player.toolTipText = "dialog_generals_overview_selectGeneral_tab";
    this.dialogDisp.mc_left.mc_selection.btn_npc.toolTipText = "dialog_generals_overview_selectPvEGeneral_tab";
    this.dialogDisp.mc_left.btn_ui_hide.toolTipText = "dialog_generals_overview_vieGeneralOnly_hideUI_tootlip";
    this.dialogDisp.mc_left.btn_ui_show.toolTipText = "dialog_generals_overview_vieGeneralOnly_showUI_tootlip";
    this.itxt_tavernCounter = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.mc_left.btn_tavern.mc_bubble.txt_number, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    this.itxt_selectionHeader = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.mc_left.mc_selection.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_generals_overview_selectGeneral_tab"));
    __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.mc_loading.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_difficultyScaling_loading_desc"));
    __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.btn_unlock.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("unlock"));
    this.dialogDisp.mc_loading.visible = false;
    var __s5local4 = new __dep_export_GeneralSelectionProperties.GeneralSelectionProperties();
    __s5local4.textColor = 15921906;
    this._generalSelection = new __dep_export_GeneralSelection.GeneralSelection(this.dialogDisp.mc_left.mc_selection, __s5local4);
  };
  GeneralsOverviewDialog.prototype.onGeneralStarUp = function (__s7param0 = null) {
    if (this._generalSelection.selectedGeneralVO.currentStarLevel == this._generalSelection.selectedGeneralVO.maxStarLevel) {
      this.playLevel100Animation();
    } else {
      this.playUnlockAnimation();
    }
  };
  GeneralsOverviewDialog.prototype.onGeneralsUpdated = function (__s11param0 = null) {
    this.updateUnlockButton();
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_right.btn_info, this._generalSelection.selectedGeneralVO.isUnlocked);
    if (this.externalClip.cacheCanvas) {
      this.externalClip.updateCache();
    }
    if (this.dialogDisp.cacheCanvas) {
      this.dialogDisp.updateCache();
    }
    if (this._isPreviewBG && this._generalSelection.selectedGeneralVO && this._generalSelection.selectedGeneralVO.isUnlocked) {
      this.updateGeneralBackground();
    }
    if (this._generalSelection.selectedGeneralVO) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_right.btn_info, this._generalSelection.selectedGeneralVO.isUnlocked);
      if (this._generalSelection.selectedGeneralVO.hasLevelUp && this._generalSelection.selectedGeneralVO.getSkillPointsAvailable() <= 0) {
        this._generalSelection.selectedGeneralVO.resetFlags();
      }
    }
  };
  GeneralsOverviewDialog.prototype.onGeneralUnlocked = function (__s18param0 = null) {
    this._sublayerSwitcher.switchTo(GeneralsOverviewDialog.TAB_INFO);
    this.playUnlockAnimation();
  };
  GeneralsOverviewDialog.prototype.playUnlockAnimation = function () {
    this.dialogDisp.mc_unlock_front.visible = true;
    this.dialogDisp.mc_unlock_front.gotoAndPlay(2);
    this.dialogDisp.mc_unlock_bg.visible = true;
    this.dialogDisp.mc_unlock_bg.gotoAndPlay(2);
  };
  GeneralsOverviewDialog.prototype.playLevel100Animation = function () {
    if (this.dialogDisp.mc_lvl100_front.numChildren > 0) {
      this.hideLevel100Animation();
    }
    this.dialogDisp.mc_lvl100_front.visible = true;
    this.dialogDisp.mc_lvl100_back.visible = true;
    this.dialogDisp.mc_lvl100_front.scaleX = this.dialogDisp.mc_lvl100_front.scaleY = 0.5;
    this.dialogDisp.mc_lvl100_back.scaleX = this.dialogDisp.mc_lvl100_back.scaleY = 0.5;
    this.level100LoadedCount = 0;
    var __s22local0 = "Generals_Level100_" + this._generalSelection.selectedGeneralVO.generalXmlVO.rarity.name + "_front";
    var __s22local1 = "Generals_Level100_" + this._generalSelection.selectedGeneralVO.generalXmlVO.rarity.name + "_back";
    var __s22local2 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s22local0, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s22local0), null, 30, false);
    var __s22local3 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s22local1, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s22local1), null, 30, false);
    this.dialogDisp.mc_lvl100_front.addChild(__s22local2);
    this.dialogDisp.mc_lvl100_back.addChild(__s22local3);
    if (__s22local2.isLoaded) {
      this.level100AnimationLoaded();
    } else {
      __s22local2.doWhenLoaded(this.bindFunction(this.level100AnimationLoaded));
    }
    if (__s22local3.isLoaded) {
      this.level100AnimationLoaded();
    } else {
      __s22local3.doWhenLoaded(this.bindFunction(this.level100AnimationLoaded));
    }
  };
  GeneralsOverviewDialog.prototype.level100AnimationLoaded = function () {
    this.level100LoadedCount++;
    if (!(this.level100LoadedCount < 2)) {
      __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.playAllMovies(this.dialogDisp.mc_lvl100_front.getChildAt(0).currentshownDisplayObject);
      __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.playAllMovies(this.dialogDisp.mc_lvl100_back.getChildAt(0).currentshownDisplayObject);
    }
  };
  GeneralsOverviewDialog.prototype.hideUnlockAnimation = function () {
    this.dialogDisp.mc_unlock_front.visible = false;
    this.dialogDisp.mc_unlock_front.gotoAndStop(1);
    this.dialogDisp.mc_unlock_bg.visible = false;
    this.dialogDisp.mc_unlock_bg.gotoAndStop(1);
  };
  GeneralsOverviewDialog.prototype.hideLevel100Animation = function () {
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_lvl100_front);
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_lvl100_back);
    this.dialogDisp.mc_unlock_front.visible = false;
    this.dialogDisp.mc_unlock_bg.visible = false;
  };
  GeneralsOverviewDialog.prototype.showLoaded = function (__s36param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s36param0);
    this._preventFlagReset = true;
    this.currentCategory = null;
    this.setSelectionCategory(GeneralsOverviewDialog.SELECTION_PLAYER);
    __dep_export_CastleModel.CastleModel.generalsData.addEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
    __dep_export_CastleModel.CastleModel.generalsData.addEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERAL_UNLOCKED, this.bindFunction(this.onGeneralUnlocked));
    __dep_export_CastleModel.CastleModel.generalsData.addEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERAL_STAR_UP, this.bindFunction(this.onGeneralStarUp));
    __dep_export_CastleModel.CastleModel.generalsData.addEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_HUB_UPDATED, this.bindFunction(this.updateTavernButton));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.updateTavernButton));
    if (__dep_export_CastleModel.CastleModel.generalsIntroductionData.activeIntroductionQuest && __dep_export_CastleModel.CastleModel.generalsIntroductionData.activeIntroductionQuest.conditions[0].conditionType == __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_VISIT_GENERALS_OVERVIEW) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SFinishQuestConditionVO.C2SFinishQuestConditionVO(__dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_VISIT_GENERALS_OVERVIEW));
    }
    this.hideUnlockAnimation();
    this.hideLevel100Animation();
    if (this._generalSelection.selectedGeneralVO && this._generalSelection.selectedGeneralVO.currentStarLevel == this._generalSelection.selectedGeneralVO.maxStarLevel) {
      this.playLevel100Animation();
    } else {
      this.hideLevel100Animation();
    }
    this.updateUIVisibility(true);
    this.updateTavernButton(null);
  };
  GeneralsOverviewDialog.prototype.hideLoaded = function (__s41param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s41param0);
    __dep_export_CastleModel.CastleModel.generalsData.removeEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
    __dep_export_CastleModel.CastleModel.generalsData.removeEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERAL_UNLOCKED, this.bindFunction(this.onGeneralUnlocked));
    __dep_export_CastleModel.CastleModel.generalsData.removeEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERAL_STAR_UP, this.bindFunction(this.onGeneralStarUp));
    __dep_export_CastleModel.CastleModel.generalsData.removeEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_HUB_UPDATED, this.bindFunction(this.updateTavernButton));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.updateTavernButton));
    if (this._generalSelection) {
      this._generalSelection.onHide();
      this._generalSelection.onSelectSignal.remove(this.bindFunction(this.onSelectGeneral));
    }
    if (this._sublayerSwitcher) {
      this._sublayerSwitcher.hide();
    }
    __dep_export_CastleModel.CastleModel.generalsData.playerGenerals.forEach(function (__s45param0) {
      if (__s45param0.isNew) {
        __s45param0.resetFlags();
      }
    });
  };
  GeneralsOverviewDialog.prototype.updateGeneralBackground = function () {
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_general);
    var __s48local0 = this._generalSelection.selectedGeneralVO.generalID;
    this.showLoadingAnimation();
    this._isPreviewBG = !this._generalSelection.selectedGeneralVO.isImplemented;
    if (this.currentBGClip) {
      this.currentBGClip.clipLoaded.removeAll();
    }
    this.currentBGClip = __dep_export_GeneralsHelper.GeneralsHelper.getGeneralsBackground(__s48local0, this._isPreviewBG, 1, this.bindFunction(this.onBGLoaded));
    if (!this._isPreviewBG) {
      var __s48local1 = __dep_export_GeneralsHelper.GeneralsHelper.getGeneralClip(__s48local0, true);
      if (__s48local1) {
        this.dialogDisp.mc_general.addChild(__s48local1);
      }
    }
  };
  GeneralsOverviewDialog.prototype.showLoadingAnimation = function () {
    this.lockDialog();
    this.dialogDisp.mc_loading.visible = true;
  };
  GeneralsOverviewDialog.prototype.onBGLoaded = function (__s55param0) {
    if (__s55param0) {
      this.unLockDialog();
      __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.bg);
      this.dialogDisp.bg.addChild(__s55param0.currentshownDisplayObject);
      this.dialogDisp.mc_loading.visible = false;
      if (this._generalSelection.selectedGeneralVO.currentStarLevel == this._generalSelection.selectedGeneralVO.maxStarLevel) {
        this.playLevel100Animation();
      } else {
        this.hideLevel100Animation();
      }
    }
  };
  GeneralsOverviewDialog.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      var __s60local0 = 1;
      if (this.disp.stage.stageHeight < __s60local0 * 1096) {
        __s60local0 = this.disp.stage.stageHeight / 1096;
      }
      if (this.disp.stage.stageWidth / this.disp.stage.stageHeight < 4 / 3) {
        __s60local0 = Math.min(__s60local0, this.disp.stage.stageWidth / 1452);
      }
      this.disp.x = this.disp.stage.stageWidth * 0.5;
      this.disp.y = this.disp.stage.stageHeight * 0.5;
      this.disp.scaleX = this.disp.scaleY = __s60local0;
      this.disp.x = this.disp.x | 0;
      this.disp.y = this.disp.y | 0;
      var __s60local1 = Math.min(this.disp.stage.stageWidth, __s60local0 * 1936) * 0.5 / __s60local0;
      this.dialogDisp.mc_left.x = 22 - __s60local1;
      this.dialogDisp.mc_right.x = __s60local1 - 22;
      this.dialogDisp.mc_right2.x = __s60local1 - 22;
    }
  };
  GeneralsOverviewDialog.prototype.createSublayerProperties = function (__s65param0) {
    return new __dep_export_GeneralsOverviewDialogSublayerProperties.GeneralsOverviewDialogSublayerProperties(this._generalSelection.selectedGeneralVO);
  };
  GeneralsOverviewDialog.prototype.onSelectGeneral = function () {
    if (this._generalSelection.selectedGeneralVO && this._generalSelection.selectedGeneralVO.isImplemented) {
      this.dialogDisp.mc_right.visible = true;
      var __s67local0 = this._generalSelection.selectedGeneralVO.isUnlocked;
      if (__s67local0) {
        this._sublayerSwitcher.switchTo(GeneralsOverviewDialog.TAB_INFO);
      } else if (this._generalSelection.selectedGeneralVO.isNPCGeneral) {
        this._sublayerSwitcher.switchTo(GeneralsOverviewDialog.TAB_STORY_NPC);
      } else {
        this._sublayerSwitcher.switchTo(GeneralsOverviewDialog.TAB_STORY);
      }
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_right.btn_info, __s67local0);
      this.dialogDisp.mc_right.btn_info.visible = !this._generalSelection.selectedGeneralVO.isNPCGeneral;
      this.dialogDisp.mc_right.btn_story.visible = !this._generalSelection.selectedGeneralVO.isNPCGeneral;
      this.dialogDisp.mc_right.btn_story_npc.visible = this._generalSelection.selectedGeneralVO.isNPCGeneral;
      if (this._preventFlagReset) {
        this._preventFlagReset = false;
      } else if (this._generalSelection.selectedGeneralVO.isNew || this._generalSelection.selectedGeneralVO.hasLevelUp) {
        this._generalSelection.selectedGeneralVO.resetFlags();
      }
      this._sublayerSwitcher.show();
    } else {
      this.dialogDisp.mc_right.visible = false;
    }
    this.updateGeneralBackground();
    this.updateUnlockButton();
    this.hideUnlockAnimation();
    if (this._generalSelection.selectedGeneralVO.currentStarLevel == this._generalSelection.selectedGeneralVO.maxStarLevel) {
      this.playLevel100Animation();
    } else {
      this.hideLevel100Animation();
    }
  };
  GeneralsOverviewDialog.prototype.updateUnlockButton = function () {
    this.dialogDisp.addChild(this.dialogDisp.btn_unlock);
    this.dialogDisp.btn_unlock.visible = this._generalSelection.selectedGeneralVO.canBeUnlocked;
  };
  GeneralsOverviewDialog.prototype.updateTavernButton = function (__s80param0) {
    var __s80local0 = __dep_export_CastleModel.CastleModel.generalsData.getTotalAmountOfAvailableDraws();
    this.dialogDisp.mc_left.btn_tavern.mc_bubble.visible = __s80local0 > 0;
    this.itxt_tavernCounter.textContentVO.numberValue = Math.min(__s80local0, 99);
  };
  GeneralsOverviewDialog.prototype.updateUIVisibility = function (__s82param0) {
    this.dialogDisp.mc_left.btn_ui_show.visible = !__s82param0;
    this.dialogDisp.mc_left.btn_ui_hide.visible = __s82param0;
    this.dialogDisp.mc_left.mc_selection.visible = __s82param0;
    this.dialogDisp.mc_right.visible = __s82param0 && this._generalSelection.selectedGeneralVO && this._generalSelection.selectedGeneralVO.isImplemented;
  };
  GeneralsOverviewDialog.prototype.setSelectionCategory = function (__s84param0) {
    if (this.currentCategory != __s84param0) {
      this.currentCategory = __s84param0;
      var __s84local0 = [];
      switch (__s84param0) {
        case GeneralsOverviewDialog.SELECTION_PLAYER:
          __s84local0 = Array.from(__dep_export_CastleModel.CastleModel.generalsData.playerGenerals.values());
          this.itxt_selectionHeader.textContentVO.textId = "dialog_generals_overview_selectGeneral_tab";
          break;
        case GeneralsOverviewDialog.SELECTION_NPC:
          __s84local0 = (__s84local0 = Array.from(__dep_export_CastleModel.CastleModel.generalsData.npcGenerals.values())).filter(function (__s88param0) {
            return !__s88param0.generalXmlVO.isHiddenInOverview;
          });
          this.itxt_selectionHeader.textContentVO.textId = "dialog_generals_overview_selectPvEGeneral_tab";
      }
      this.dialogDisp.mc_left.mc_selection.btn_player.gotoAndStop(__s84param0 == GeneralsOverviewDialog.SELECTION_PLAYER ? 2 : 1);
      this.dialogDisp.mc_left.mc_selection.btn_npc.gotoAndStop(__s84param0 == GeneralsOverviewDialog.SELECTION_NPC ? 2 : 1);
      this._generalSelection.init(__s84local0);
      this._generalSelection.onShow();
      this._generalSelection.onSelectSignal.add(this.bindFunction(this.onSelectGeneral));
      this._generalSelection.selectIndex(0, true);
    }
  };
  GeneralsOverviewDialog.prototype.onClick = function (__s90param0) {
    __s1param0.prototype.onClick.call(this, __s90param0);
    switch (__s90param0.target) {
      case this.dialogDisp.mc_right2.btn_close:
        this.hide();
        break;
      case this.dialogDisp.mc_left.btn_tavern:
        this.hide();
        __dep_export_GeneralsHelper.GeneralsHelper.showGeneralsHubDialog();
        break;
      case this.dialogDisp.mc_right2.btn_help:
        __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30_2.Localize.text("help_generals_overview_01"));
        break;
      case this.dialogDisp.btn_unlock:
        __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGeneralUnlockVO.C2SGeneralUnlockVO(this._generalSelection.selectedGeneralVO.generalID));
        break;
      case this.dialogDisp.mc_left.btn_ui_show:
        this.updateUIVisibility(true);
        break;
      case this.dialogDisp.mc_left.btn_ui_hide:
        this.updateUIVisibility(false);
        break;
      case this.dialogDisp.mc_left.mc_selection.btn_player:
        this.setSelectionCategory(GeneralsOverviewDialog.SELECTION_PLAYER);
        break;
      case this.dialogDisp.mc_left.mc_selection.btn_npc:
        this.setSelectionCategory(GeneralsOverviewDialog.SELECTION_NPC);
    }
  };
  GeneralsOverviewDialog.NAME = "GeneralsOverviewExt6";
  GeneralsOverviewDialog.TAB_INFO = 0;
  GeneralsOverviewDialog.TAB_STORY = 1;
  GeneralsOverviewDialog.TAB_STORY_NPC = 2;
  GeneralsOverviewDialog.SELECTION_PLAYER = 0;
  GeneralsOverviewDialog.SELECTION_NPC = 1;
  return GeneralsOverviewDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.GeneralsOverviewDialog = __s0local0;
