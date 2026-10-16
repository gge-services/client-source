Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SJoinCampVO = require("gge-module:export_C2SJoinCampVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleArmyDataEvent = require("gge-module:export_CastleArmyDataEvent");
var __dep_export_AdvisorAttackHelper = require("gge-module:export_AdvisorAttackHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CrestVO = require("gge-module:export_CrestVO");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_TooltipManagerFacade = require("gge-module:export_TooltipManagerFacade");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_SupportToolTooltipHelper = require("gge-module:export_SupportToolTooltipHelper");
var __dep_export_GeneralSelectionItem = require("gge-module:export_GeneralSelectionItem");
var __dep_export_GeneralsHelper = require("gge-module:export_GeneralsHelper");
var __dep_export_UnitScrollItemVO = require("gge-module:export_UnitScrollItemVO");
var __dep_export_CastleArmyExternalDialog = require("gge-module:export_CastleArmyExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleCompactArmyDialog() {
    return __s1param0.call(this, CastleCompactArmyDialog.NAME, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("CastleMovementDetails_APR25")) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCompactArmyDialog, __s1param0);
  CastleCompactArmyDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this._movementDetails = new __dep_export_CastleMovementDetailsComponent.CastleMovementDetailsComponent(this.dialogDisp.mc_movementInfo);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_shortArmy_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_compact_left.mc_banner.txt_flank, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_battleLogDetail_flank"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_compact_middle.mc_banner.txt_flank, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_battleLogDetail_frontal"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_compact_right.mc_banner.txt_flank, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_battleLogDetail_flank"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_compact_yard.mc_banner.txt_flank, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_battleLogDetail_finalWave")).autoFitToBounds = true;
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.btn_ok);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.btn_close);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.btn_help);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.mc_movementInfo.btn_sendHome);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.mc_movementInfo.btn_retreat);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.mc_compact_left.btn_up);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.mc_compact_left.btn_down);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.mc_compact_middle.btn_up);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.mc_compact_middle.btn_down);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.mc_compact_right.btn_up);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.mc_compact_right.btn_down);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.mc_compact_yard.btn_left, this.dialogDisp.mc_compact_yard.btn_right], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    this.dialogDisp.mc_compact_yard.btn_left.visible = false;
    this.dialogDisp.mc_compact_yard.btn_right.visible = false;
  };
  CastleCompactArmyDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    this.setUnitCounter();
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onArmyDataUpdated));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onArmyRemoved));
    this._movementDetails.hideDistance(this.isAdventureMode);
    this._movementDetails.initComponent(this.armyAttackMapmovementVO, this.bindFunction(this.hide));
    this.dialogDisp.mc_compact_middle.mc_banner.bg.gotoAndStop(2);
    this.dialogDisp.mc_lordHolder.mouseChildren = false;
    if (this.mapMovementVO.lordVO) {
      var __s7local0 = this.mapMovementVO.lordVO;
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.addLordIcon(__s7local0, this.dialogDisp.mc_lordHolder, 50);
    }
    this.updateLord();
    this.updateSupportTools();
    this.updateAutoSkip();
    this.updateAdvisor();
  };
  CastleCompactArmyDialog.prototype.updateLord = function () {
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_lordHolder);
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_general);
    this.dialogDisp.mc_lordHolder.mouseChildren = false;
    if (this.mapMovementVO.lordVO) {
      var __s10local0 = this.mapMovementVO.lordVO;
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.addLordIcon(__s10local0, this.dialogDisp.mc_lordHolder, 50);
      var __s10local1 = this.mapMovementVO.isReturnHome ? this.mapMovementVO.sourceArea : this.mapMovementVO.targetArea;
      var __s10local2 = __dep_export_LordEffectHelper.LordEffectHelper.getFilterStrategyByMovementVO(this.mapMovementVO);
      this.lordTooltipTrigger.setProperties(__s10local0, null, __s10local1, __s10local2);
    }
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_general);
    this._generalIcon = new __dep_export_GeneralSelectionItem.GeneralSelectionItem(this.mapMovementVO.lordVO.assignedGeneralVO, this.dialogDisp.mc_general, false, true, false, true, null, true, this.dialogProperties.mapMovementVO.movementOwnerInfo.playerID == __dep_export_CastleModel.CastleModel.userData.playerID, true);
    this._generalIcon.onShow();
    this.dialogDisp.mc_general.visible = !!this.mapMovementVO.lordVO.assignedGeneralVO;
    this.dialogDisp.mc_general.scaleX = this.dialogDisp.mc_general.scaleY = 0.8;
    this.dialogDisp.mc_general.visible = !!this.mapMovementVO.lordVO.assignedGeneralVO;
    var __s10local3 = "";
    __s10local3 = this.mapMovementVO.lordVO.assignedGeneralVO && this.mapMovementVO.lordVO.assignedGeneralVO.isNPCGeneral ? this.mapMovementVO.lordVO.assignedGeneralVO.nameTextShort : __dep_exact_92d05af59ee2ff30.Localize.text("dialog_battleLog_activeGeneralEffects_tooltip");
    this.dialogDisp.mc_general.toolTipText = __s10local3;
    if (this.mapMovementVO.lordVO.assignedGeneralVO) {
      this.dialogDisp.mc_general.mouseChildren = false;
      var __s10local4 = "";
      if (this.mapMovementVO.lordVO.assignedGeneralVO.getPassiveEffects().length > 0 || this.mapMovementVO.lordVO.assignedGeneralVO.selectedAbilities.length > 0) {
        __s10local4 += __dep_exact_92d05af59ee2ff30.Localize.text("dialog_battleLog_activeGeneralEffects_tooltip");
        var __s10local5 = __dep_export_GeneralsHelper.GeneralsHelper.getLocalizedGeneralAbilitySummary(this.mapMovementVO.lordVO.assignedGeneralVO, true);
        if (__s10local5 != "") {
          __s10local4 += "\n\n" + __s10local5;
        }
        var __s10local6 = this.mapMovementVO.lordVO.assignedGeneralVO ? this.mapMovementVO.lordVO.assignedGeneralVO.getPassiveEffectsText() : "";
        if (__s10local6 != "") {
          __s10local4 += "\n\n" + __s10local6;
        }
      } else {
        __s10local4 += __dep_exact_92d05af59ee2ff30.Localize.text("dialog_generals_abilityDialog_noActiveAbilities");
      }
      this.dialogDisp.mc_general.toolTipText = {
        t: __s10local4,
        width: 500
      };
    }
  };
  CastleCompactArmyDialog.prototype.onArmyRemoved = function (__s18param0) {
    if (__s18param0.mapmovementVO.objectId == this.mapMovementVO.objectId) {
      this.hide();
    }
  };
  CastleCompactArmyDialog.prototype.hideLoaded = function (__s21param0 = null) {
    this._movementDetails.destroy();
    if (this._generalIcon) {
      this._generalIcon.onHide();
    }
    __s1param0.prototype.hideLoaded.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onArmyDataUpdated));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onArmyRemoved));
  };
  CastleCompactArmyDialog.prototype.setUnitCounter = function () {
    if (this.armyAttackMapmovementVO.attackArmyVO) {
      var __s24local0 = this.mapMovementVO.sourceOwnerInfo ? this.mapMovementVO.sourceOwnerInfo.crest : new __dep_export_CrestVO.CrestVO();
      var __s24local1 = this.mapMovementVO.targetOwnerInfo ? this.mapMovementVO.targetOwnerInfo.crest : new __dep_export_CrestVO.CrestVO();
      this.unitListLeft = this.setCompactArmyItemModernAttack(this.unitListLeft, this.dialogDisp.mc_compact_left, this.armyAttackMapmovementVO.attackArmyVO.itemsLeft, __s24local0, __s24local1);
      this.unitListMiddle = this.setCompactArmyItemModernAttack(this.unitListMiddle, this.dialogDisp.mc_compact_middle, this.armyAttackMapmovementVO.attackArmyVO.itemsMiddle, __s24local0, __s24local1);
      this.unitListRight = this.setCompactArmyItemModernAttack(this.unitListRight, this.dialogDisp.mc_compact_right, this.armyAttackMapmovementVO.attackArmyVO.itemsRight, __s24local0, __s24local1);
      this.unitListYard = this.setCompactArmyItemClassicAttack(this.unitListYard, this.dialogDisp.mc_compact_yard, this.armyAttackMapmovementVO.attackArmyVO.yardWave, __s24local0, __s24local1);
    }
  };
  CastleCompactArmyDialog.prototype.setCompactArmyItemModernAttack = function (__s27param0, __s27param1, __s27param2, __s27param3, __s27param4) {
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(__s27param1.mc_banner.crest1, __s27param3);
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(__s27param1.mc_banner.crest2, __s27param4);
    var __s27local0;
    var __s27local1 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_CastleCompactArmyDialogUnitItem.CastleCompactArmyDialogUnitItem, "CompactArmyList_TripleItem", "CastleMovementDetails_APR25");
    __s27local1.itemPaddingY = 2;
    __s27local1.useSmoothScroll = true;
    if (__s27param0 && __s27param0.scrollComponent.scrollVO) {
      __s27param0.onHide();
      __s27param0.destroy();
      __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(__s27param1.mc_content);
      __s27param0.scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    }
    (__s27param0 = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(__s27param1.mc_content).addSliderMc(__s27param1).addItemContainerMc(__s27param1.mc_content).addMaskMc(__s27param1.mc_mask), __s27local1)).setVisibility(true);
    var __s27local2 = [];
    for (var __s27local3 = __s27param2.getUnits(null), __s27local4 = 0; __s27local4 < __s27local3.length;) {
      var __s27local5 = {};
      for (var __s27local6 = 0; __s27local6 < 3; __s27local6++) {
        var __s27local7 = __s27local3.length > __s27local4 + __s27local6 ? __s27local3[__s27local4 + __s27local6] : null;
        (__s27local0 = new __dep_export_UnitScrollItemVO.UnitScrollItemVO()).unitVO = __s27local7;
        __s27local0.crestVO = __s27param3;
        __s27local0.levelIconOffset = new __s0local0(20, 20);
        __s27local0.levelIconSize = 20;
        __s27local0.maxUnitSize = 40;
        __s27local5["data" + __s27local6] = __s27local0;
      }
      __s27local4 += 3;
      __s27local2.push(__s27local5);
    }
    __s27param0.onShow();
    __s27param0.updateWithNewData(__s27local2, true);
    __s27param0.onShow();
    __s27param0.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    __s27param1.visible = true;
    return __s27param0;
  };
  CastleCompactArmyDialog.prototype.onScroll = function () {
    __dep_export_TooltipManagerFacade.TooltipManagerFacade.hideAllTooltips();
  };
  CastleCompactArmyDialog.prototype.setCompactArmyItemClassicAttack = function (__s36param0, __s36param1, __s36param2, __s36param3, __s36param4) {
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(__s36param1.mc_banner.crest1, __s36param3);
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(__s36param1.mc_banner.crest2, __s36param4);
    return this.setCompactArmyItem(__s36param0, __s36param1, __s36param2, __s36param3);
  };
  CastleCompactArmyDialog.prototype.setCompactArmyItem = function (__s38param0, __s38param1, __s38param2, __s38param3) {
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(__s38param1.mc_items);
    var __s38local0;
    var __s38local1 = __s38param2 ? __s38param2.getUnits(null) : [];
    __s38local1.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitSortOrder);
    if (__s38param0) {
      __s38param0.clear();
      __s38param0.remove();
      __s38param0 = null;
    }
    (__s38param0 = new __dep_exact_9e901e8e2483a22f_1.ItemScrollList(__s38param1)).scrollItemClass = __dep_export_UnitScrollListItem.UnitScrollListItem;
    for (var __s38local2 = 0; __s38local2 < __s38local1.length; __s38local2++) {
      var __s38local3 = __s38local1[__s38local2];
      (__s38local0 = new __dep_export_UnitScrollItemVO.UnitScrollItemVO()).unitVO = __s38local3;
      __s38local0.crestVO = __s38param3;
      __s38local0.levelIconOffset = new __s0local0(20, 20);
      __s38local0.levelIconSize = 20;
      __s38local0.maxUnitSize = 40;
      __s38param0.pushContent(__s38local0);
    }
    __s38param0.scrollStep = __s38param0.veList.length;
    __s38param0.initList();
    return __s38param0;
  };
  CastleCompactArmyDialog.prototype.onArmyDataUpdated = function (__s43param0) {
    if (this.mapMovementVO.getTimeUnitMovmentReachTargetInSeconds() < 2) {
      this.hide();
    } else {
      this._movementDetails.updateComponent();
    }
  };
  CastleCompactArmyDialog.prototype.onClick = function (__s47param0) {
    if (!this.isLocked && !this.isWaitingForServerMessage && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s47param0.target)) {
      __s1param0.prototype.onClick.call(this, __s47param0);
      switch (__s47param0.target) {
        case this.dialogDisp.btn_ok:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text(this.mapMovementVO.isReturnHome ? "help_armyDialog_return_player" : "help_armyDialog_player"));
      }
      if (this.checkEventCamps(__s47param0)) {
        __s47param0.preventDefault();
        if (__dep_export_FlashBlockHelper.FlashBlockHelper.checkFlashBlock(__s47param0.target.mapObject.mapID)) {
          return;
        }
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SJoinCampVO.C2SJoinCampVO(__s47param0.target.mapObject.mapID));
      }
    }
  };
  CastleCompactArmyDialog.prototype.checkEventCamps = function (__s53param0) {
    if (__s53param0.target.hasOwnProperty("mapObject") && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s53param0.target.mapObject, "EventCampMapobjectVO")) {
      var __s53local0 = __dep_exact_f855840627e6e145.int(__s53param0.target.mapObject.mapID);
      for (var __s53local1 = 0, __s53local2 = __dep_exact_26a421b704832cff_1.TreasureMapsConst.CRUSADE_MAP_IDS; __s53local1 < __s53local2.length; __s53local1++) {
        var __s53local3 = __s53local2[__s53local1];
        if (__s53local3 !== undefined && __s53local3 == __s53local0) {
          return true;
        }
      }
    }
    return false;
  };
  CastleCompactArmyDialog.prototype.updateSupportTools = function () {
    var __s59local0 = !!this.armyAttackMapmovementVO.attackArmyVO.itemsSupport && this.armyAttackMapmovementVO.attackArmyVO.itemsSupport.getToolCount() > 0;
    if (this.dialogDisp.bg_supportTools) {
      this.dialogDisp.bg_supportTools.visible = __s59local0;
    }
    if (this.dialogDisp.mc_supportTools) {
      this.dialogDisp.mc_supportTools.visible = __s59local0;
      this.dialogDisp.mc_supportTools.mouseChildren = false;
    }
    if (__s59local0) {
      var __s59local1 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_shortArmy_attackSupportTools_tooltip_header");
      this.dialogDisp.mc_supportTools.toolTipText = __dep_export_SupportToolTooltipHelper.SupportToolTooltipHelper.getToolTipByInventory(this.armyAttackMapmovementVO.attackArmyVO.itemsSupport, __s59local1);
    }
  };
  CastleCompactArmyDialog.prototype.updateAutoSkip = function () {
    if (__dep_export_CastleModel.CastleModel.subscriptionData.isAutoSkipTarget(this.dialogProperties.mapMovementVO.targetArea)) {
      this.dialogDisp.mc_autoskip.icon_actived.visible = this.armyAttackMapmovementVO.autoSkipCooldownType > __dep_exact_26a421b704832cff.AutoSkipCooldownConst.AUTO_SKIP_TYPE_OFF;
      this.dialogDisp.mc_autoskip.icon_deactivated.visible = this.armyAttackMapmovementVO.autoSkipCooldownType == __dep_exact_26a421b704832cff.AutoSkipCooldownConst.AUTO_SKIP_TYPE_OFF;
      this.dialogDisp.mc_autoskip.visible = true;
      this.dialogDisp.mc_autoskip.icon_deactivated.toolTipText = "dialog_armyDialog_autoCooldownSkip_inactive";
      if (this.armyAttackMapmovementVO.autoSkipCooldownType == __dep_exact_26a421b704832cff.AutoSkipCooldownConst.AUTO_SKIP_TYPE_MINUTE_SKIP) {
        this.dialogDisp.mc_autoskip.icon_actived.toolTipText = "dialog_armyDialog_autoCooldownSkip_active";
      } else if (this.armyAttackMapmovementVO.autoSkipCooldownType == __dep_exact_26a421b704832cff.AutoSkipCooldownConst.AUTO_SKIP_TYPE_C2) {
        this.dialogDisp.mc_autoskip.icon_actived.toolTipText = "dialog_armyDialog_autoCooldownSkip_active";
      }
      var __s64local0 = this.armyAttackMapmovementVO.autoSkipCooldownType == __dep_exact_26a421b704832cff.AutoSkipCooldownConst.AUTO_SKIP_TYPE_OFF ? "dialog_armyDialog_autoCooldownSkip_inactive" : "dialog_armyDialog_autoCooldownSkip_active";
      this.textFieldManager.registerTextField(this.dialogDisp.mc_autoskip.txt_autoskip, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s64local0));
    } else {
      this.dialogDisp.mc_autoskip.visible = false;
    }
  };
  CastleCompactArmyDialog.prototype.updateAdvisor = function () {
    var __s70local0 = this.armyAttackMapmovementVO.advisorType > 0 ? this.armyAttackMapmovementVO.advisorType : __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getAdvisorTypeByAreaType(this.armyAttackMapmovementVO.targetArea.areaType);
    this.dialogDisp.mc_advisor.visible = this.armyAttackMapmovementVO.advisorType;
    this.dialogDisp.mc_advisor.gotoAndStop(__s70local0);
    this.dialogDisp.mc_advisor.mouseChildren = false;
    this.dialogDisp.mc_advisor.toolTipText = "title_advisor_" + __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getTextIDSuffix(__s70local0);
  };
  Object.defineProperty(CastleCompactArmyDialog.prototype, "armyAttackMapmovementVO", {
    get: function () {
      return this.dialogProperties.mapMovementVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyDialog.prototype, "mapMovementVO", {
    get: function () {
      return this.dialogProperties.mapMovementVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyDialog.prototype, "isAdventureMode", {
    get: function () {
      return this.dialogProperties.isAdventureMode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleCompactArmyDialog.NAME = "CastleCompactArmyExt";
  return CastleCompactArmyDialog;
}(__dep_export_CastleArmyExternalDialog.CastleArmyExternalDialog);
exports.CastleCompactArmyDialog = __s0local1;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_FlashBlockHelper = require("gge-module:export_FlashBlockHelper");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleMovementDetailsComponent = require("gge-module:export_CastleMovementDetailsComponent");
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_UnitScrollListItem = require("gge-module:export_UnitScrollListItem");
var __dep_export_CastleCompactArmyDialogUnitItem = require("gge-module:export_CastleCompactArmyDialogUnitItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
