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
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_UnitInventoryList = require("gge-module:export_UnitInventoryList");
var __dep_export_CastleToolTipManager = require("gge-module:export_CastleToolTipManager");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
var __dep_export_TooltipManagerFacade = require("gge-module:export_TooltipManagerFacade");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CharacterHelper = require("gge-module:export_CharacterHelper");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_GeneralSelectionItem = require("gge-module:export_GeneralSelectionItem");
var __dep_export_GeneralsHelper = require("gge-module:export_GeneralsHelper");
var __dep_export_CastleArmyExternalDialog = require("gge-module:export_CastleArmyExternalDialog");
var __dep_export_CastleCompactArmyDialogUnitItem = require("gge-module:export_CastleCompactArmyDialogUnitItem");
var __dep_export_CastleForwardMessageDialogProperties = require("gge-module:export_CastleForwardMessageDialogProperties");
var __dep_export_UnitScrollItemVO = require("gge-module:export_UnitScrollItemVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleSpyinfoDetailsDialog() {
    return __s1param0.call(this, CastleSpyinfoDetailsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSpyinfoDetailsDialog, __s1param0);
  CastleSpyinfoDetailsDialog.prototype.initLoaded = function (__s5param0 = null) {
    this.itxt_title ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_spy_military"));
    this.itxt_title.verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_compact_left.mc_banner.txt_flank, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_battleLogDetail_flank"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_compact_middle.mc_banner.txt_flank, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_battleLogDetail_frontal"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_compact_right.mc_banner.txt_flank, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_battleLogDetail_flank"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_compact_yard.mc_banner.txt_flank, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_battleLogDetail_courtyard"));
    this.dialogDisp.mc_compact_left.mc_banner.bg.gotoAndStop(1);
    this.dialogDisp.mc_compact_middle.mc_banner.bg.gotoAndStop(2);
    this.dialogDisp.mc_compact_right.mc_banner.bg.gotoAndStop(1);
    this.dialogDisp.mc_compact_yard.mc_banner.bg.gotoAndStop(3);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    var __s5local0 = new Array();
    if (this.dialogDisp.btn_close) {
      __s5local0.push(this.dialogDisp.btn_close);
    }
    if (this.dialogDisp.btn_cancel) {
      __s5local0.push(this.dialogDisp.btn_cancel);
    }
    if (this.dialogDisp.btn_forwarding) {
      __s5local0.push(this.dialogDisp.btn_forwarding);
    }
    if (this.dialogDisp.btn_help) {
      __s5local0.push(this.dialogDisp.btn_help);
    }
    if (this.dialogDisp.btn_ok) {
      __s5local0.push(this.dialogDisp.btn_ok);
    }
    if (this.dialogDisp.btn_attack) {
      __s5local0.push(this.dialogDisp.btn_attack);
    }
    if (this.dialogDisp.mc_compact_yard.btn_up) {
      __s5local0.push(this.dialogDisp.mc_compact_yard.btn_up);
    }
    if (this.dialogDisp.mc_compact_yard.btn_down) {
      __s5local0.push(this.dialogDisp.mc_compact_yard.btn_down);
    }
    this.initBasicButtons(__s5local0);
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  CastleSpyinfoDetailsDialog.prototype.showLoaded = function (__s15param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s15param0);
    __dep_export_CharacterHelper.CharacterHelper.createCharacterBig(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_SPY, this.dialogDisp.mc_char, 189, 164);
    this.dialogDisp.btn_forwarding.visible = !this.dialogProperties.forwarded && (!this.dialogProperties.spyInfoVO.enemyOwnerInfo.isDungeonOwner || this.dialogProperties.spyInfoVO.enemyOwnerInfo.isDungeonOwner && this.dialogProperties.spyInfoVO.enemyOwnerInfo.isShareableDungeon) && !this.dialogProperties.spyInfoVO.isFactionSpyLog && __dep_export_CastleModel.CastleModel.userData.isInAlliance && this.dialogProperties.messageId != -1;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_forwarding, this.dialogDisp.btn_forwarding.visible && __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO && __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.memberAmount > 1);
    this.dialogDisp.btn_forwarding.toolTipText = this.dialogDisp.btn_forwarding.enabled ? "dialog_forwardlog_tootlipp" : "dialog_forwardLog_noMember_tooltip";
    this.dialogDisp.icon_forward.toolTipText = "dialog_forwardlog_owner" + __dep_export_CastleToolTipManager.CastleToolTipManager.ID_PARAM_SEPERATOR + this.dialogProperties.forwardSender;
    this.dialogDisp.icon_forward.visible = this.dialogProperties.forwarded;
    this.dialogDisp.mc_compact_yard.btn_left.visible = false;
    this.dialogDisp.mc_compact_yard.btn_right.visible = false;
    if (this.dialogProperties.spyInfoVO.isFactionSpyLog) {
      __dep_export_CrestHelper.CrestHelper.getPlayerOrFactionCrest(this.dialogProperties.spyInfoVO.enemyOwnerInfo);
    } else {
      this.dialogProperties.spyInfoVO.enemyOwnerInfo.crest;
    }
    this.updateLord();
    var __s15local0;
    var __s15local1 = this.dialogProperties.spyInfoVO.enemyOwnerInfo.crest;
    var __s15local2 = __s15local1;
    if (this.dialogProperties.spyInfoVO.armyInfoVO) {
      this.unitListLeft = this.setCompactArmyItemModernAttack(this.unitListLeft, this.dialogDisp.mc_compact_left, this.dialogProperties.spyInfoVO.armyInfoVO.itemsLeft, __s15local1, __s15local2);
      this.unitListMiddle = this.setCompactArmyItemModernAttack(this.unitListMiddle, this.dialogDisp.mc_compact_middle, this.dialogProperties.spyInfoVO.armyInfoVO.itemsMiddle, __s15local1, __s15local2);
      this.unitListRight = this.setCompactArmyItemModernAttack(this.unitListRight, this.dialogDisp.mc_compact_right, this.dialogProperties.spyInfoVO.armyInfoVO.itemsRight, __s15local1, __s15local2);
      var __s15local3 = new __dep_export_UnitInventoryList.UnitInventoryList();
      __s15local3.addAll(this.dialogProperties.spyInfoVO.armyInfoVO.itemsKeep.getUnits(null));
      __s15local3.addAll(this.dialogProperties.spyInfoVO.armyInfoVO.itemsSupport.getUnits(null));
      this.unitListYard = this.setCompactArmyItemClassicAttack(this.unitListYard, this.dialogDisp.mc_compact_yard, __s15local3, __s15local1, __s15local2);
    }
    this.dialogDisp.btn_attack.visible = this.dialogProperties.spyInfoVO != null && this.dialogProperties.spyInfoVO.mapobjectVO.canBeAttacked() && !this.dialogProperties.messageVO.forwarded && !__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.spyInfoVO.mapobjectVO, "WolfkingCastleMapObjectVO");
    if (this.dialogProperties.spyInfoVO.mapobjectVO.kingdomID == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID && this.dialogProperties.spyInfoVO.enemyOwnerInfo.isFactionProtected) {
      __s15local0 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getCantAttackTimeString(this.dialogProperties.spyInfoVO.mapobjectVO.ownerInfo.remainingFactionProtectionTimeInSeconds);
      this.dialogDisp.btn_attack.toolTipText = {
        t: "playerHasNoobProtection",
        p: [__s15local0]
      };
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_attack, false);
    } else if (this.dialogProperties.spyInfoVO.mapobjectVO.kingdomID != __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID && this.dialogProperties.spyInfoVO.enemyOwnerInfo.isPeaceProtected && !this.dialogProperties.spyInfoVO.mapobjectVO.ignoresPeaceMode) {
      __s15local0 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getCantAttackTimeString(this.dialogProperties.spyInfoVO.mapobjectVO.ownerInfo.remainingPeaceTime);
      this.dialogDisp.btn_attack.toolTipText = {
        t: "playerHasNoobProtection",
        p: [__s15local0]
      };
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_attack, false);
    } else if (this.dialogProperties.spyInfoVO.enemyOwnerInfo.isNoobProtected && !this.dialogProperties.spyInfoVO.mapobjectVO.ignoresPeaceMode) {
      __s15local0 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getCantAttackTimeString(this.dialogProperties.spyInfoVO.mapobjectVO.ownerInfo.remainingNoobTime);
      this.dialogDisp.btn_attack.toolTipText = {
        t: "playerHasNoobProtection",
        p: [__s15local0]
      };
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_attack, false);
    } else if (this.dialogProperties.spyInfoVO.isFactionSpyLog && (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.spyInfoVO.mapobjectVO, "FactionTowerMapobjectVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.spyInfoVO.mapobjectVO, "FactionCapitalMapobjectVO"))) {
      this.dialogDisp.btn_attack.toolTipText = "ringmenu_military_menu_attack";
    } else {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.spyInfoVO.mapobjectVO, "VillageMapobjectVO") || this.dialogProperties.spyInfoVO.mapobjectVO.isNpcCapital || this.dialogProperties.spyInfoVO.isFactionSpyLog) {
        this.dialogDisp.btn_attack.toolTipText = "ringmenu_military_menu_village";
      } else {
        this.dialogDisp.btn_attack.toolTipText = "ringmenu_military_menu_attack";
      }
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_attack, true);
    }
    this.drawCastle();
    this.setLegendIcon();
    this.dialogDisp.mc_autoSpyIcon.visible = this.isAutoSpyLog();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.isAutoSpyLog() ? "dialog_spyLog_detailDescription_autoSpy_copy" : "dialog_spyLog_detailDescription"));
  };
  CastleSpyinfoDetailsDialog.prototype.addEventListenerOnShow = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
  };
  CastleSpyinfoDetailsDialog.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    if (this._generalIcon) {
      this._generalIcon.onHide();
    }
  };
  CastleSpyinfoDetailsDialog.prototype.onSpecialEventRemoved = function (__s32param0) {
    var __s32local0 = this.dialogProperties.spyInfoVO.mapobjectVO;
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s32local0, "AInvasionEventMapObjectVO") && __s32param0.specialEventVO.eventId == __s32local0.eventType) {
      this.hide();
    }
  };
  CastleSpyinfoDetailsDialog.prototype.updateLord = function () {
    this.dialogDisp.mc_lordHolder.mouseChildren = false;
    var __s35local0 = this.dialogProperties.spyInfoVO.lordVO;
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_lordHolder);
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_general);
    this.dialogDisp.mc_lordHolder.mouseChildren = false;
    if (__s35local0) {
      var __s35local1;
      if (__s35local0.isBaron) {
        __s35local1 = __dep_export_LordEffectHelper.LordEffectHelper.STRATEGY_DEFENCE_PVP;
      }
      var __s35local2 = __s35local0;
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.addLordIcon(__s35local2, this.dialogDisp.mc_lordHolder, 50);
      this.lordTooltipTrigger.setProperties(__s35local2, null, this.dialogProperties.spyInfoVO.mapobjectVO, __s35local1, false);
      this._generalIcon = new __dep_export_GeneralSelectionItem.GeneralSelectionItem(__s35local2.assignedGeneralVO, this.dialogDisp.mc_general, false, true, false, false, null, false, this.dialogProperties.spyInfoVO.enemyOwnerInfo.playerID == __dep_export_CastleModel.CastleModel.userData.playerID);
      this._generalIcon.onShow();
      this.dialogDisp.mc_general.scaleX = this.dialogDisp.mc_general.scaleY = 0.8;
      this.dialogDisp.mc_general.mouseChildren = false;
      this.dialogDisp.mc_general.visible = !!__s35local2.assignedGeneralVO;
      var __s35local3 = "";
      if (__s35local2.assignedGeneralVO) {
        if (__s35local2.assignedGeneralVO.isNPCGeneral) {
          __s35local3 = __s35local2.assignedGeneralVO.nameTextShort;
        } else {
          __s35local3 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_battleLog_activeGeneralEffects_tooltip");
          var __s35local4 = __dep_export_GeneralsHelper.GeneralsHelper.getLocalizedGeneralAbilitySummary(__s35local2.assignedGeneralVO, false);
          if (__s35local4 != "") {
            __s35local3 += "\n\n" + __s35local4;
          }
          var __s35local5 = __s35local2.assignedGeneralVO ? __s35local2.assignedGeneralVO.getPassiveEffectsText() : "";
          if (__s35local5 != "") {
            __s35local3 += "\n\n" + __s35local5;
          }
        }
      }
      this.dialogDisp.mc_general.toolTipText = {
        t: __s35local3,
        width: 500
      };
    }
  };
  CastleSpyinfoDetailsDialog.prototype.setCompactArmyItemModernAttack = function (__s44param0, __s44param1, __s44param2, __s44param3, __s44param4) {
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(__s44param1.mc_banner.crest1, __s44param3);
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(__s44param1.mc_banner.crest2, __s44param4);
    var __s44local0;
    var __s44local1 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_CastleCompactArmyDialogUnitItem.CastleCompactArmyDialogUnitItem, "CompactArmyList_TripleItem", "CastleMovementDetails_APR25");
    __s44local1.itemPaddingY = 2;
    __s44local1.useSmoothScroll = true;
    if (__s44param0 && __s44param0.scrollComponent.scrollVO) {
      __s44param0.onHide();
      __s44param0.destroy();
      __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(__s44param1.mc_content);
      __s44param0.scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    }
    (__s44param0 = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(__s44param1.mc_content).addSliderMc(__s44param1.mc_slider).addItemContainerMc(__s44param1.mc_content).addMaskMc(__s44param1.mc_mask), __s44local1)).setVisibility(true);
    var __s44local2 = [];
    for (var __s44local3 = __s44param2.getUnits(null), __s44local4 = 0; __s44local4 < __s44local3.length;) {
      var __s44local5 = {};
      for (var __s44local6 = 0; __s44local6 < 3; __s44local6++) {
        var __s44local7 = __s44local3.length > __s44local4 + __s44local6 ? __s44local3[__s44local4 + __s44local6] : null;
        (__s44local0 = new __dep_export_UnitScrollItemVO.UnitScrollItemVO()).unitVO = __s44local7;
        __s44local0.crestVO = __s44param3;
        __s44local0.levelIconOffset = new __s0local0(20, 20);
        __s44local0.levelIconSize = 20;
        __s44local0.maxUnitSize = 40;
        __s44local5["data" + __s44local6] = __s44local0;
      }
      __s44local4 += 3;
      __s44local2.push(__s44local5);
    }
    __s44param0.onShow();
    __s44param0.updateWithNewData(__s44local2, true);
    __s44param0.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    __s44param1.visible = true;
    return __s44param0;
  };
  CastleSpyinfoDetailsDialog.prototype.onScroll = function () {
    __dep_export_TooltipManagerFacade.TooltipManagerFacade.hideAllTooltips();
  };
  CastleSpyinfoDetailsDialog.prototype.setLegendIcon = function () {
    if (this.dialogProperties.spyInfoVO.enemyOwnerInfo.isLegend) {
      if (this.dialogProperties.spyInfoVO.spyOwnerInfo.isLegend) {
        this.dialogDisp.mc_legendIcon.gotoAndStop(1);
        this.dialogDisp.mc_legendIcon.toolTipText = "legendTemple_espionage_true";
      } else {
        this.dialogDisp.mc_legendIcon.gotoAndStop(2);
        this.dialogDisp.mc_legendIcon.toolTipText = "legendTemple_espionage_false";
      }
      this.dialogDisp.mc_legendIcon.visible = true;
      this.dialogDisp.mc_legendIcon_gold.visible = true;
      this.dialogDisp.mc_legendIcon.mouseChildren = false;
    } else {
      this.dialogDisp.mc_legendIcon.visible = false;
      this.dialogDisp.mc_legendIcon_gold.visible = false;
    }
  };
  CastleSpyinfoDetailsDialog.prototype.drawCastle = function () {
    var __s59local0 = this.dialogProperties.spyInfoVO.mapobjectVO;
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_castleIcon.mc_holder);
    var __s59local1 = __dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(__s59local0, new __s0local0(1000, 70));
    this.dialogDisp.mc_castleIcon.visible = true;
    this.dialogDisp.mc_castleIcon.mc_holder.addChild(__s59local1);
    var __s59local2 = __s59local0.absAreaPosX + " : " + __s59local0.absAreaPosY;
    if (__s59local0.absAreaPosX < 0 || __s59local0.absAreaPosY < 0) {
      __s59local2 = "-";
    }
    this.textFieldManager.registerTextField(this.dialogDisp.mc_castleIcon.mc_name.txt_name, new __dep_exact_92d05af59ee2ff30_2.TextVO(__s59local2));
    if (__dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(__s59local0.kingdomID)) {
      __s59local1.toolTipText = __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s59local0, "CastleMapobjectVO") ? "dialog_jumpto_castleSelected" : "dialog_jumpto_targetSelected";
      this.dialogDisp.mc_castleIcon.actLikeButton = true;
    } else {
      __s59local1.toolTipText = "not_unlocked";
      this.dialogDisp.mc_castleIcon.actLikeButton = false;
    }
    if (this.dialogProperties.spyInfoVO.isFactionSpyLog) {
      this.dialogDisp.mc_kingdomIndicator.gotoAndStop(5);
    } else if (this.dialogProperties.spyInfoVO.isIslandSpyLog) {
      this.dialogDisp.mc_kingdomIndicator.gotoAndStop(8);
    } else {
      this.dialogDisp.mc_kingdomIndicator.gotoAndStop(__s59local0.kingdomID + 1);
    }
  };
  CastleSpyinfoDetailsDialog.prototype.setCompactArmyItemClassicAttack = function (__s67param0, __s67param1, __s67param2, __s67param3, __s67param4) {
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(__s67param1.mc_banner.crest1, __s67param3);
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(__s67param1.mc_banner.crest2, __s67param4);
    return this.setCompactArmyItem(__s67param0, __s67param1, __s67param2, __s67param3);
  };
  CastleSpyinfoDetailsDialog.prototype.setCompactArmyItem = function (__s69param0, __s69param1, __s69param2, __s69param3) {
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(__s69param1.mc_items);
    var __s69local0;
    var __s69local1 = __s69param2 ? __s69param2.getUnits(null) : [];
    __s69local1.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitSortOrder);
    if (__s69param0) {
      __s69param0.clear();
      __s69param0.remove();
      __s69param0 = null;
    }
    (__s69param0 = new __dep_exact_9e901e8e2483a22f_1.ItemScrollList(__s69param1)).scrollItemClass = __dep_export_UnitScrollListItem.UnitScrollListItem;
    for (var __s69local2 = 0; __s69local2 < __s69local1.length; __s69local2++) {
      var __s69local3 = __s69local1[__s69local2];
      (__s69local0 = new __dep_export_UnitScrollItemVO.UnitScrollItemVO()).unitVO = __s69local3;
      __s69local0.crestVO = __s69param3;
      __s69local0.levelIconOffset = new __s0local0(20, 20);
      __s69local0.levelIconSize = 20;
      __s69local0.maxUnitSize = 40;
      __s69param0.pushContent(__s69local0);
    }
    __s69param0.scrollStep = __s69param0.veList.length;
    __s69param0.initList();
    return __s69param0;
  };
  CastleSpyinfoDetailsDialog.prototype.onClick = function (__s74param0) {
    __s1param0.prototype.onClick.call(this, __s74param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s74param0.target)) {
      switch (__s74param0.target) {
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text(this.isAutoSpyLog() ? "help_autoSpyDialog" : "help_spyLogDetail"));
          break;
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_attack:
          __dep_export_AttackHelper.AttackHelper.executeAttackCommand(this.dialogProperties.spyInfoVO.mapobjectVO, this.dialogProperties.spyInfoVO.mapobjectVO.attackType, this.bindFunction(this.hideBoth));
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_forwarding:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleForwardMessageDialog.CastleForwardMessageDialog, new __dep_export_CastleForwardMessageDialogProperties.CastleForwardMessageDialogProperties(this.dialogProperties.messageId, __dep_exact_26a421b704832cff_1.MessageConst.MESSAGE_TYPE_SPY_PLAYER));
      }
    }
  };
  CastleSpyinfoDetailsDialog.prototype.hideBoth = function () {
    if (this.dialogProperties.hideParentDialog) {
      this.dialogProperties.hideParentDialog();
    }
    this.hide();
  };
  CastleSpyinfoDetailsDialog.prototype.isAutoSpyLog = function () {
    return __dep_export_CastleModel.CastleModel.subscriptionData.isAutoSpyActiveForArea(this.dialogProperties.spyInfoVO.mapobjectVO);
  };
  Object.defineProperty(CastleSpyinfoDetailsDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpyinfoDetailsDialog.NAME = "CastleSpyinfoDetails_Generals";
  return CastleSpyinfoDetailsDialog;
}(__dep_export_CastleArmyExternalDialog.CastleArmyExternalDialog);
exports.CastleSpyinfoDetailsDialog = __s0local1;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_AttackHelper = require("gge-module:export_AttackHelper");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_CastleForwardMessageDialog = require("gge-module:export_CastleForwardMessageDialog");
var __dep_export_UnitScrollListItem = require("gge-module:export_UnitScrollListItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
