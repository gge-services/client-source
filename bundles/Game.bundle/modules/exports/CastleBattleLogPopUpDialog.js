Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleLogDataEvent = require("gge-module:export_CastleLogDataEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectValueSimple = require("gge-module:export_EffectValueSimple");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ModernComboboxComponentItem = require("gge-module:export_ModernComboboxComponentItem");
var __dep_export_SimpleComboboxComponent = require("gge-module:export_SimpleComboboxComponent");
var __dep_export_SimpleComboboxComponentConfig = require("gge-module:export_SimpleComboboxComponentConfig");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_GeneralSelectionItem = require("gge-module:export_GeneralSelectionItem");
var __dep_export_GeneralsHelper = require("gge-module:export_GeneralsHelper");
var __dep_export_ClickFeedBackHoverSliderButton = require("gge-module:export_ClickFeedBackHoverSliderButton");
var __dep_export_CastleBattleLogUnitScrollItemVO = require("gge-module:export_CastleBattleLogUnitScrollItemVO");
var __s0local0 = createjs.MovieClip;
var __s0local1 = function (__s1param0) {
  function CastleBattleLogPopUpDialog() {
    var __s3local0 = this;
    __s3local0._filter_units = true;
    __s3local0._filter_tools = true;
    __s3local0._filter_general = true;
    __s3local0._currentUnitItems = [];
    __s3local0._currentToolItems = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleBattleLogPopUpDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBattleLogPopUpDialog, __s1param0);
  CastleBattleLogPopUpDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.filter_tools, this.dialogDisp.filter_units, this.dialogDisp.filter_general]);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.mc_selector_flank.mc_selector, this.dialogDisp.mc_selector_wave.mc_selector], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.mc_slider_attacker.btn_slider, this.dialogDisp.mc_slider_defender.btn_slider], __dep_export_ClickFeedBackHoverSliderButton.ClickFeedBackHoverSliderButton, 1);
    this.dialogDisp.mc_selector_flank.mc_items = this.dialogDisp.mc_selector_flank.mc_list;
    this.dialogDisp.mc_selector_wave.mc_items = this.dialogDisp.mc_selector_wave.mc_list;
    this.dialogDisp.icon_tools.toolTipText = "tools";
    this.dialogDisp.icon_units.toolTipText = "units";
    this.dialogDisp.icon_general.toolTipText = "dialog_battleLogDetails_generalAbilities_header";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_battleLogDetails_vsDialog_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_right_empty.txt_text, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_battleLogDetails_vsDialog_finalWaveNoDefense_desc"));
    this.itxt_empty = this.textFieldManager.registerTextField(this.dialogDisp.txt_empty, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_battleLogDetails_vsDialog_defenderDetailsHidden_desc"));
    this._itxt_wave = this.textFieldManager.registerTextField(this.dialogDisp.mc_selector_wave.mc_selector.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this._itxt_flank = this.textFieldManager.registerTextField(this.dialogDisp.mc_selector_flank.mc_selector.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this._waveSelector = new __dep_export_SimpleComboboxComponent.SimpleComboboxComponent(this.dialogDisp.mc_selector_wave, new __dep_export_SimpleComboboxComponentConfig.SimpleComboboxComponentConfig(-2, 1));
    this._flankSelector = new __dep_export_SimpleComboboxComponent.SimpleComboboxComponent(this.dialogDisp.mc_selector_flank, new __dep_export_SimpleComboboxComponentConfig.SimpleComboboxComponentConfig(-2, 1));
    var __s5local0 = new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(false, this.dialogDisp.list_attacker.mask.height, true);
    var __s5local1 = new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp.mc_slider_attacker).addMouseWheelElements([this.dialogDisp.bg_attacker, this.dialogDisp.list_attacker]);
    this._scrollComponentAttacker = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(__s5local1, __s5local0);
    this._scrollYAttacker = this.dialogDisp.list_attacker.y;
    var __s5local2 = new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(false, this.dialogDisp.list_defender.mask.height, true);
    var __s5local3 = new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp.mc_slider_defender).addMouseWheelElements([this.dialogDisp.bg_defender, this.dialogDisp.list_defender]);
    this._scrollComponentDefender = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(__s5local3, __s5local2);
    this._scrollYDefender = this.dialogDisp.list_defender.y;
  };
  CastleBattleLogPopUpDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    var __s7local0 = [];
    for (var __s7local1 = -1; __s7local1 <= 2; __s7local1++) {
      var __s7local2 = new __dep_export_ModernComboboxComponentItem.ModernComboboxComponentItem("CastleBattlePopUp_DropdownElement", CastleBattleLogPopUpDialog.NAME, this.bindFunction(this.fillFlankItem), __s7local1);
      __s7local0.push(__s7local2);
      this._flankSelector.updateWithNewValues(__s7local0);
    }
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.list_attacker);
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.list_defender);
    this.controller.addEventListener(__dep_export_CastleLogDataEvent.CastleLogDataEvent.NEW_FULL_LOG, this.bindFunction(this.onDetailedDataAvailable));
    if (this.dialogProperties.logVO.hasDetailedInfo) {
      this.displayPopUp();
    } else {
      __dep_export_CastleModel.CastleModel.messageData.getBattleLogDetailed(this.dialogProperties.logVO.logID);
    }
  };
  CastleBattleLogPopUpDialog.prototype.onDetailedDataAvailable = function (__s13param0 = null) {
    this.controller.removeEventListener(__dep_export_CastleLogDataEvent.CastleLogDataEvent.NEW_FULL_LOG, this.bindFunction(this.onDetailedDataAvailable));
    this.displayPopUp();
  };
  CastleBattleLogPopUpDialog.prototype.displayPopUp = function () {
    var __s15local0 = this.dialogProperties.logVO;
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this._waveSelector.disp.mc_item);
    var __s15local1 = [];
    var __s15local2 = 0;
    __s15local1.push(new __dep_export_ModernComboboxComponentItem.ModernComboboxComponentItem("CastleBattlePopUp_DropdownElement", CastleBattleLogPopUpDialog.NAME, this.bindFunction(this.fillWaveItem), CastleBattleLogPopUpDialog.WAVE_INDEX_SUMMARY));
    __s15local2++;
    if (__s15local0.detailedPreCombatWave) {
      __s15local1.push(new __dep_export_ModernComboboxComponentItem.ModernComboboxComponentItem("CastleBattlePopUp_DropdownElement", CastleBattleLogPopUpDialog.NAME, this.bindFunction(this.fillWaveItem), CastleBattleLogPopUpDialog.WAVE_INDEX_PRE_ATTACK));
      __s15local2++;
    }
    __s15local1.push(new __dep_export_ModernComboboxComponentItem.ModernComboboxComponentItem("CastleBattlePopUp_DropdownElement", CastleBattleLogPopUpDialog.NAME, this.bindFunction(this.fillWaveItem), CastleBattleLogPopUpDialog.WAVE_INDEX_SUPPORT_TOOLS));
    __s15local2++;
    for (var __s15local3 = 0; __s15local3 <= __s15local0.lastWaveIndex; __s15local3++) {
      var __s15local4 = new __dep_export_ModernComboboxComponentItem.ModernComboboxComponentItem("CastleBattlePopUp_DropdownElement", CastleBattleLogPopUpDialog.NAME, this.bindFunction(this.fillWaveItem), __s15local3);
      __s15local1.push(__s15local4);
    }
    if (__s15local0.detailedPostCombatWave) {
      __s15local1.push(new __dep_export_ModernComboboxComponentItem.ModernComboboxComponentItem("CastleBattlePopUp_DropdownElement", CastleBattleLogPopUpDialog.NAME, this.bindFunction(this.fillWaveItem), CastleBattleLogPopUpDialog.WAVE_INDEX_POST_ATTACK));
    }
    if (this.dialogProperties.currentWave == CastleBattleLogPopUpDialog.WAVE_INDEX_SUMMARY) {
      __s15local2 = 1;
    }
    this._waveSelector.updateWithNewValues(__s15local1);
    this._waveSelector.onShow();
    this._waveSelector.selectIndex(this.dialogProperties.currentWave + __s15local2);
    this._waveSelector.onSelectionChanged.add(this.bindFunction(this.onComboboxChange));
    this._flankSelector.onShow();
    this._flankSelector.selectIndex(this.dialogProperties.currentFlank + 1);
    this._flankSelector.onSelectionChanged.add(this.bindFunction(this.onComboboxChange));
    this._flankSelector.update();
    if (__s15local0.isFactionBattleLog) {
      __dep_export_CrestHelper.CrestHelper.replaceIntoPlaceHolder(this.dialogDisp.crest_attacker, __dep_export_CrestHelper.CrestHelper.getPlayerOrFactionCrest(__s15local0.attackerBattleInfo.ownerInfoVO));
      __dep_export_CrestHelper.CrestHelper.replaceIntoPlaceHolder(this.dialogDisp.crest_defender, __dep_export_CrestHelper.CrestHelper.getPlayerOrFactionCrest(__s15local0.defenderBattleInfo.ownerInfoVO));
    } else {
      __dep_export_CrestHelper.CrestHelper.replaceIntoPlaceHolder(this.dialogDisp.crest_attacker, __s15local0.attackerBattleInfo.ownerInfoVO.crest);
      __dep_export_CrestHelper.CrestHelper.replaceIntoPlaceHolder(this.dialogDisp.crest_defender, __s15local0.defenderBattleInfo.ownerInfoVO.crest);
    }
    this.setPlayerName(this.dialogDisp.txt_name_attacker, this.dialogProperties.logVO.attackerBattleInfo);
    this.setPlayerName(this.dialogDisp.txt_name_defender, this.dialogProperties.logVO.defenderBattleInfo, true);
    this.displayCurrentSelection();
  };
  CastleBattleLogPopUpDialog.prototype.fillFlankItem = function (__s24param0) {
    __s24param0.disp.basicButton = null;
    __s24param0.getItemMc().mc_default.txt_waveNumber.visible = false;
    __s24param0.getItemMc().mc_hover.txt_waveNumber.visible = false;
    __s24param0.getItemMc().mc_default.icon.gotoAndStop(__s24param0.data + 2);
    __s24param0.getItemMc().mc_hover.icon.gotoAndStop(__s24param0.data + 2);
    __s24param0.getItemMc().gotoAndStop(1);
    __dep_export_ButtonHelper.ButtonHelper.initButton(__s24param0.getItemMc(), 1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    var __s24local0 = __s24param0.data != -1 || this.dialogProperties.currentWave <= -1;
    this.textFieldManager.registerTextField(__s24param0.getItemMc().txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(this.getFlankName(__s24param0.data, __s24local0)));
    __s24param0.enableComponent(__s24local0);
    __s24param0.disp.mouseChildren = __s24param0.isEnabled;
  };
  CastleBattleLogPopUpDialog.prototype.fillWaveItem = function (__s26param0) {
    __s26param0.disp.basicButton = null;
    var __s26local0 = this.textFieldManager.registerTextField(__s26param0.getItemMc().mc_default.txt_waveNumber, new __dep_exact_92d05af59ee2ff30.TextVO(" "), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    var __s26local1 = this.textFieldManager.registerTextField(__s26param0.getItemMc().mc_hover.txt_waveNumber, new __dep_exact_92d05af59ee2ff30.TextVO(" "), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    var __s26local2 = true;
    switch (__s26param0.data) {
      case CastleBattleLogPopUpDialog.WAVE_INDEX_SUMMARY:
        __s26param0.getItemMc().mc_default.icon.visible = false;
        __s26param0.getItemMc().mc_hover.icon.visible = false;
        break;
      case CastleBattleLogPopUpDialog.WAVE_INDEX_PRE_ATTACK:
        __s26param0.getItemMc().mc_default.icon.visible = true;
        __s26param0.getItemMc().mc_hover.icon.visible = true;
        __s26param0.getItemMc().mc_default.icon.gotoAndStop(5);
        __s26param0.getItemMc().mc_hover.icon.gotoAndStop(5);
        break;
      case CastleBattleLogPopUpDialog.WAVE_INDEX_POST_ATTACK:
        __s26param0.getItemMc().mc_default.icon.visible = true;
        __s26param0.getItemMc().mc_hover.icon.visible = true;
        __s26param0.getItemMc().mc_default.icon.gotoAndStop(6);
        __s26param0.getItemMc().mc_hover.icon.gotoAndStop(6);
        break;
      case this.dialogProperties.logVO.reinforcementWaveIndex:
        __s26param0.getItemMc().mc_default.icon.visible = true;
        __s26param0.getItemMc().mc_hover.icon.visible = true;
        __s26param0.getItemMc().mc_default.icon.gotoAndStop(8);
        __s26param0.getItemMc().mc_hover.icon.gotoAndStop(8);
        break;
      case CastleBattleLogPopUpDialog.WAVE_INDEX_SUPPORT_TOOLS:
        __s26param0.getItemMc().mc_default.icon.visible = true;
        __s26param0.getItemMc().mc_hover.icon.visible = true;
        __s26param0.getItemMc().mc_default.icon.gotoAndStop(7);
        __s26param0.getItemMc().mc_hover.icon.gotoAndStop(7);
        break;
      default:
        __s26param0.getItemMc().mc_default.icon.visible = false;
        __s26param0.getItemMc().mc_hover.icon.visible = false;
        __s26local0.text = "" + (__s26param0.data + 1);
        __s26local1.text = "" + (__s26param0.data + 1);
        __s26local2 = this.dialogProperties.currentFlank != -1;
    }
    __s26param0.getItemMc().gotoAndStop(1);
    this.textFieldManager.registerTextField(__s26param0.getItemMc().txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(this.getWaveName(__s26param0.data, false, __s26local2)), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __s26param0.enableComponent(__s26local2);
    __dep_export_ButtonHelper.ButtonHelper.initButton(__s26param0.getItemMc(), 1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __s26param0.disp.mouseChildren = __s26param0.isEnabled;
  };
  CastleBattleLogPopUpDialog.prototype.getWaveName = function (__s29param0, __s29param1, __s29param2 = true) {
    if (__s29param0 == this.dialogProperties.logVO.reinforcementWaveIndex) {
      return __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_battleLogDetail_finalWave");
    } else if (__s29param0 == CastleBattleLogPopUpDialog.WAVE_INDEX_SUMMARY) {
      return __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_battleLogDetail_summary");
    } else if (__s29param0 == CastleBattleLogPopUpDialog.WAVE_INDEX_PRE_ATTACK) {
      return __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_battleLogDetails_waveSelection_preBattle");
    } else if (__s29param0 == CastleBattleLogPopUpDialog.WAVE_INDEX_POST_ATTACK) {
      return __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_battleLogDetails_waveSelection_postBattle");
    } else if (__s29param0 == CastleBattleLogPopUpDialog.WAVE_INDEX_SUPPORT_TOOLS) {
      return __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_battleLogDetails_waveSelection_support");
    } else if (__s29param1) {
      return __dep_exact_92d05af59ee2ff30_1.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_ASSIGN_COLON, [__dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_battleLogDetail_wave"), (__s29param0 + 1 < 10 ? "0" : "") + (__s29param0 + 1)]);
    } else if (__s29param2) {
      return __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_battleLogDetail_wave");
    } else {
      return __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_battleLogDetails_waveSelection_waveDisabled");
    }
  };
  CastleBattleLogPopUpDialog.prototype.getFlankName = function (__s39param0, __s39param1 = true) {
    switch (__s39param0) {
      case -1:
        if (__s39param1) {
          return __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_battleLogDetail_courtyard");
        } else {
          return __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_battleLogDetails_waveSelection_finalWaveDisabled");
        }
      case 0:
        return __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_defence_leftFlank");
      case 1:
        return __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_battleLogDetail_frontal");
      case 2:
        return __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_defence_rightFlank");
    }
    return "";
  };
  CastleBattleLogPopUpDialog.prototype.getFlankNameBattleLog = function () {
    switch (this.dialogProperties.currentFlank) {
      case -3:
        return "EW";
      case -2:
        return "PW";
      case -1:
        return "Y";
      case 0:
        return "L";
      case 1:
        return "M";
      case 2:
        return "R";
    }
    return "";
  };
  CastleBattleLogPopUpDialog.prototype.displayCurrentSelection = function () {
    this.dialogDisp.mc_selector_flank.visible = this.isFlankSelectorVisible;
    this.dialogDisp.mc_right_empty.visible = this.isReinforcementWave;
    this.dialogDisp.filter_units.gotoAndStop(this.isUnitsFilterEnabled ? this._filter_units ? 2 : 1 : 3);
    this.dialogDisp.filter_tools.gotoAndStop(this.isToolsFilterEnabled ? this._filter_tools ? 2 : 1 : 3);
    this.dialogDisp.filter_general.gotoAndStop(this.isGeneralsAbilityFilterEnabled ? this._filter_general ? 2 : 1 : 3);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.filter_units, this.isUnitsFilterEnabled);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.filter_tools, this.isToolsFilterEnabled);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.filter_general, this.isGeneralsAbilityFilterEnabled);
    this._itxt_wave.textContentVO.stringValue = this.getWaveName(this.dialogProperties.currentWave, true);
    this._itxt_flank.textContentVO.stringValue = this.getFlankName(this.dialogProperties.currentFlank);
    this.clearItems();
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.list_attacker);
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.list_defender);
    var __s47local0 = 0;
    var __s47local1 = 0;
    __s47local0 = this.createScrollContent(this.dialogDisp.list_attacker, true);
    if (this.dialogProperties.logVO.hasDefenderInfos && !this.isReinforcementWave) {
      __s47local1 = this.createScrollContent(this.dialogDisp.list_defender, false);
    }
    __s47local0 = Math.max(0, __s47local0 - this.dialogDisp.list_attacker.mask.height);
    __s47local1 = Math.max(0, __s47local1 - this.dialogDisp.list_attacker.mask.height);
    this.itxt_empty.visible = !this.dialogProperties.logVO.hasDefenderInfos;
    this._scrollComponentAttacker.init(0, __s47local0, 50, 50);
    this._scrollComponentAttacker.show();
    this._scrollComponentAttacker.scrollToValue(0);
    this._scrollComponentAttacker.onScrollSignal.add(this.bindFunction(this.onScrollAttack));
    this._scrollComponentDefender.init(0, __s47local1, 50, 50);
    this._scrollComponentDefender.show();
    this._scrollComponentDefender.scrollToValue(0);
    this._scrollComponentDefender.onScrollSignal.add(this.bindFunction(this.onScrollDefense));
  };
  CastleBattleLogPopUpDialog.prototype.createScrollContent = function (__s50param0, __s50param1) {
    var __s50local0 = this.dialogProperties.logVO;
    var __s50local1 = __s50param1 ? __s50local0.attackerBattleInfo : __s50local0.defenderBattleInfo;
    var __s50local2 = CastleBattleLogPopUpDialog.ITEM_GAP_BIG;
    if (this._filter_tools && this.isToolsFilterEnabled) {
      var __s50local3 = this.createUnitHeader(__s50param1, 1);
      __s50local3.y = __s50local2;
      __s50param0.addChild(__s50local3);
      __s50local2 += __s50local3.height + CastleBattleLogPopUpDialog.ITEM_GAP_MIDDLE;
      var __s50local4 = this.generateUnitList(__s50param0, this._currentToolItems, __s50local1, __s50param1, 1);
      __s50local4.y = __s50local2;
      __s50local2 += __s50local4.height + CastleBattleLogPopUpDialog.ITEM_GAP_BIG;
    }
    if (this._filter_units && this.isUnitsFilterEnabled) {
      var __s50local5 = this.createUnitHeader(__s50param1, 0);
      __s50local5.y = __s50local2;
      __s50param0.addChild(__s50local5);
      __s50local2 += __s50local5.height + CastleBattleLogPopUpDialog.ITEM_GAP_MIDDLE;
      var __s50local6 = this.generateUnitList(__s50param0, this._currentUnitItems, __s50local1, __s50param1, 0);
      __s50local6.y = __s50local2;
      __s50local2 += __s50local6.height + CastleBattleLogPopUpDialog.ITEM_GAP_BIG;
    }
    if (this._filter_general && this.isGeneralsAbilityFilterEnabled) {
      var __s50local7 = this.createGeneralContent(__s50param1);
      if (__s50local7) {
        __s50local7.y = __s50local2;
        __s50param0.addChild(__s50local7);
        __s50local2 += __s50local7.height + CastleBattleLogPopUpDialog.ITEM_GAP_BIG;
      }
    }
    return Math.max(0, __s50local2 - (CastleBattleLogPopUpDialog.ITEM_GAP_BIG - CastleBattleLogPopUpDialog.ITEM_GAP_MIDDLE));
  };
  CastleBattleLogPopUpDialog.prototype.createUnitHeader = function (__s56param0, __s56param1) {
    var __s56local0 = __s56param1 == 0 ? "dialog_battleLogDetails_vsDialog_units" : "dialog_battleLogDetails_vsDialog_tools";
    var __s56local1 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("BattleLogPopUp_ListHeader"))();
    this.textFieldManager.registerTextField(__s56local1.txt_label, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__s56local0), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true)).color = __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT_BRIGHT;
    __s56local1.icon.gotoAndStop(__s56param1 == 0 ? 2 : 1);
    return __s56local1;
  };
  CastleBattleLogPopUpDialog.prototype.generateUnitList = function (__s58param0, __s58param1, __s58param2, __s58param3, __s58param4) {
    var __s58local0 = new __s0local0();
    var __s58local1 = [];
    var __s58local2 = [];
    var __s58local3 = this.dialogProperties.logVO;
    if (this.isSupportWave) {
      __s58local1 = __s58param3 ? this.dialogProperties.logVO.supportToolsAttacker : this.dialogProperties.logVO.supportToolsDefender;
    } else if (this.isReinforcementWave && __s58param4 == 0) {
      __s58local1 = __s58local3.reinforcementUnits;
    } else if (!this.isReinforcementWave) {
      var __s58local4 = this.getWaveVO(__s58local3);
      if (__s58local4) {
        if (__s58param4 == 0) {
          __s58local1 = this.getSoldiers(__s58param3, __s58local3, __s58local4);
        } else {
          var __s58local5 = this.getFlankVO(__s58param3, __s58local4);
          if (this.isYardWave) {
            __s58local2 = [];
            __s58local1 = __s58param3 ? this.dialogProperties.logVO.detailedCourtyardAttacker : this.dialogProperties.logVO.detailedCourtyardDefender;
          } else if (__s58local5) {
            __s58local2 = __s58local5.effects;
            __s58local1 = __s58local5.tools;
          } else {
            __s58local2 = [];
            __s58local1 = [];
          }
        }
      }
    }
    __s58param0.addChild(__s58local0);
    this.drawEffects(__s58local0, __s58param1, __s58local2, __s58param2);
    this.drawUnitsAndTools(__s58local0, __s58param1, __s58local1, __s58param2, __s58param4, __s58local2.length > 0);
    return __s58local0;
  };
  CastleBattleLogPopUpDialog.prototype.drawUnitsAndTools = function (__s69param0, __s69param1, __s69param2, __s69param3, __s69param4, __s69param5 = false) {
    var __s69local0 = 0;
    var __s69local1 = 0;
    for (var __s69local2 = 0; __s69local2 < __s69param2.length; __s69local2++) {
      var __s69local3 = __s69param2[__s69local2];
      var __s69local4 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s69local3.wodID, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT);
      if ((__s69param4 != 0 || __dep_exact_81dacdf05bd32292.instanceOfClass(__s69local4, "SoldierUnitVO")) && (__s69param4 != 1 || __dep_exact_81dacdf05bd32292.instanceOfClass(__s69local4, "ToolUnitVO"))) {
        var __s69local5 = new __dep_export_CastleBattleLogUnitScrollItemVO.CastleBattleLogUnitScrollItemVO();
        __s69local5.isEffect = false;
        __s69local5.unitVO = __s69local4;
        __s69local5.participantVO = __s69param3;
        __s69local5.logUnitVO = __s69local3;
        var __s69local6 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("BattleLogPopUp_UnitItem"))();
        __s69local6.x = CastleBattleLogPopUpDialog.ITEM_START_X + __s69local1 % CastleBattleLogPopUpDialog.ITEMS_PER_ROW * CastleBattleLogPopUpDialog.ITEM_OFFSET_X;
        __s69local6.y = Math.floor(__s69local1 / CastleBattleLogPopUpDialog.ITEMS_PER_ROW) * CastleBattleLogPopUpDialog.ITEM_OFFSET_Y;
        __s69param0.addChild(__s69local6);
        var __s69local7 = new __dep_export_CastleBattleLogUnitScrollListItem.CastleBattleLogUnitScrollListItem(__s69local6);
        __s69local7.fillWithContent(__s69local5);
        __s69local7.show();
        __s69param1.push(__s69local7);
        __s69local0++;
        __s69local1++;
      }
    }
    if (__s69local0 <= 0 && !__s69param5) {
      var __s69local8 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("BattleLogPopUp_IsEmpty"))();
      this.textFieldManager.registerTextField(__s69local8.txt_copy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__s69param4 == 0 ? "dialog_battleLogDetails_vsDialog_noUnitsUsed" : "dialog_battleLogDetails_vsDialog_noToolsUsed"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
      __s69param0.addChild(__s69local8);
    }
  };
  CastleBattleLogPopUpDialog.prototype.drawEffects = function (__s75param0, __s75param1, __s75param2, __s75param3) {
    for (var __s75local0 = 0; __s75local0 < __s75param2.length; ++__s75local0) {
      var __s75local1 = __s75param2[__s75local0];
      var __s75local2 = new __dep_export_CastleBattleLogUnitScrollItemVO.CastleBattleLogUnitScrollItemVO();
      __s75local2.unitVO = __s75local1;
      __s75local2.isEffect = true;
      __s75local2.participantVO = __s75param3;
      __s75local2.effectInventoryAmount = __s75local1.inventoryAmount;
      var __s75local3 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("BattleLogPopUp_UnitItem"))();
      __s75local3.x = CastleBattleLogPopUpDialog.ITEM_START_X + __s75local0 % CastleBattleLogPopUpDialog.ITEMS_PER_ROW * CastleBattleLogPopUpDialog.ITEM_OFFSET_X;
      __s75local3.y = Math.floor(__s75local0 / CastleBattleLogPopUpDialog.ITEMS_PER_ROW) * CastleBattleLogPopUpDialog.ITEM_OFFSET_Y;
      __s75param0.addChild(__s75local3);
      var __s75local4 = new __dep_export_CastleBattleLogUnitScrollListItem.CastleBattleLogUnitScrollListItem(__s75local3);
      __s75local4.fillWithContent(__s75local2);
      __s75param1.push(__s75local4);
    }
  };
  CastleBattleLogPopUpDialog.prototype.getSoldiers = function (__s79param0, __s79param1, __s79param2) {
    if (__s79param0) {
      if (this.dialogProperties.currentFlank != -1 || __s79param2.isPreOrPostWave) {
        if (__s79param2.attacker.getFlank(this.dialogProperties.currentFlank)) {
          return __s79param2.attacker.getFlank(this.dialogProperties.currentFlank).soldiers;
        } else {
          return [];
        }
      } else {
        return __s79param1.detailedCourtyardAttacker;
      }
    } else if (this.dialogProperties.currentFlank != -1 || __s79param2.isPreOrPostWave) {
      if (__s79param2.defender.getFlank(this.dialogProperties.currentFlank)) {
        return __s79param2.defender.getFlank(this.dialogProperties.currentFlank).soldiers;
      } else {
        return [];
      }
    } else {
      return __s79param1.detailedCourtyardDefender;
    }
  };
  CastleBattleLogPopUpDialog.prototype.getFlankVO = function (__s90param0, __s90param1) {
    if (__s90param0) {
      return __s90param1.attacker.getFlank(this.dialogProperties.currentFlank);
    } else {
      return __s90param1.defender.getFlank(this.dialogProperties.currentFlank);
    }
  };
  CastleBattleLogPopUpDialog.prototype.getWaveVO = function (__s94param0) {
    switch (this.dialogProperties.currentWave) {
      case CastleBattleLogPopUpDialog.WAVE_INDEX_POST_ATTACK:
        return __s94param0.detailedPostCombatWave;
      case CastleBattleLogPopUpDialog.WAVE_INDEX_PRE_ATTACK:
        return __s94param0.detailedPreCombatWave;
      case CastleBattleLogPopUpDialog.WAVE_INDEX_SUMMARY:
        return __s94param0.detailedSummaryWave;
      default:
        return __s94param0.detailedBattleWaves[__s94param0.detailedPreCombatWave ? this.dialogProperties.currentWave + 1 : this.dialogProperties.currentWave];
    }
  };
  CastleBattleLogPopUpDialog.prototype.createGeneralContent = function (__s97param0) {
    var __s97local0 = __s97param0 ? this.dialogProperties.logVO.commanderVO ? this.dialogProperties.logVO.commanderVO.assignedGeneralVO : null : this.dialogProperties.logVO.baronVO ? this.dialogProperties.logVO.baronVO.assignedGeneralVO : null;
    if (__s97local0) {
      var __s97local1 = new __s0local0();
      var __s97local2 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("BattleLogPopUp_GeneralHeader"))();
      var __s97local3 = undefined;
      var __s97local4 = undefined;
      if (__dep_export_CastleModel.CastleModel.raidBossData.getRaidBossByGeneralID(__s97local0.generalID)) {
        __s97local3 = this.textFieldManager.registerTextField(__s97local2.txt_effects, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("are_boss_name_" + __dep_export_CastleModel.CastleModel.raidBossData.getRaidBossByGeneralID(__s97local0.generalID).name), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
        __s97local4 = this.textFieldManager.registerTextField(__s97local2.txt_name, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(" "), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
      } else {
        __s97local3 = this.textFieldManager.registerTextField(__s97local2.txt_effects, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_battleLogDetails_generalAbilities_header"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
        __s97local4 = this.textFieldManager.registerTextField(__s97local2.txt_name, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__s97local0.nameText), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
      }
      __s97local3.color = __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT_BRIGHT;
      __s97local4.color = __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT_BRIGHT;
      __s97local4.autoFitToBounds = true;
      new __dep_export_GeneralSelectionItem.GeneralSelectionItem(__s97local0, __s97local2.mc_general, false, false, false, false, null, true, (__s97param0 ? this.dialogProperties.logVO.attackerBattleInfo.playerID : this.dialogProperties.logVO.defenderBattleInfo.playerID) == __dep_export_CastleModel.CastleModel.userData.playerID);
      __s97local1.addChild(__s97local2);
      __s97local2.mc_general.scaleX = __s97local2.mc_general.scaleY = 0.6;
      var __s97local5 = __s97local2.height + CastleBattleLogPopUpDialog.ITEM_GAP_SMALL;
      var __s97local6 = 0;
      for (var __s97local7 = 0, __s97local8 = __s97param0 ? this.dialogProperties.logVO.attackerAbilities : this.dialogProperties.logVO.defenderAbilities; __s97local7 < __s97local8.length; __s97local7++) {
        var __s97local9 = __s97local8[__s97local7];
        var __s97local10 = undefined;
        __s97local10 = this.dialogProperties.currentWave == CastleBattleLogPopUpDialog.WAVE_INDEX_SUMMARY ? undefined : this.isReinforcementWave ? CastleBattleLogPopUpDialog.WAVE_INDEX_SUMMARY : this.dialogProperties.currentWave;
        var __s97local11 = this.getFlankNameBattleLog();
        if (this.checkAbilityTriggerConditions(__s97local9, __s97local10, __s97local11)) {
          var __s97local12 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("BattleLogPopUp_AbilityItem"))();
          var __s97local13 = this.textFieldManager.registerTextField(__s97local12.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_GeneralsHelper.GeneralsHelper.getLocalizedTitleForAbility(__s97local9.abilityXmlVO.abilityGroupID)), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
          var __s97local14 = new (__s97local9.abilityXmlVO.getAbilitEffect(__s97param0).getEffect(0).effect.effectType.valueClass)();
          if (__s97local9.abilityXmlVO.name == "Plunder") {
            __s97local14 = new __dep_export_EffectValueSimple.EffectValueSimple();
          }
          if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s97local14, "EffectValueAyalaFalcon")) {
            if (this.dialogProperties.currentWave == CastleBattleLogPopUpDialog.WAVE_INDEX_SUMMARY) {
              __s97local14.parseFromValueArray([(__s97param0 ? __s97local9.abilityXmlVO.abilityAttackEffect : __s97local9.abilityXmlVO.abilityDefenseEffect).getEffect(0).strength]);
            } else {
              __s97local14.parseFromValueArray([this.dialogProperties.currentWave + 1]);
            }
          } else {
            __s97local14.parseFromValueArray([__s97local9.getValueForWave(__s97local10, __s97local11)]);
          }
          var __s97local15 = this.getAbilityTextType(__s97local9, __s97param0);
          this.textFieldManager.registerTextField(__s97local12.txt_effect, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_GeneralsHelper.GeneralsHelper.getLocalizedCopyForAbility(__s97local9.abilityID, __s97param0, __s97local15, __s97local14)), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true)).color = __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT_BRIGHT;
          __s97local13.color = __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT_BRIGHT;
          __s97local12.mc_ability.addChild(__dep_export_GeneralsHelper.GeneralsHelper.getGeneralAbilityClip(__s97local9.abilityXmlVO.abilityGroupID, 46, -1, __s97param0));
          __s97local12.y = __s97local5;
          __s97local1.addChild(__s97local12);
          __s97local5 += __s97local12.height + CastleBattleLogPopUpDialog.ITEM_GAP_SMALL;
          __s97local6++;
        }
      }
      if (__s97local6 <= 0 && !__s97local0.isNPCGeneral) {
        var __s97local16 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("BattleLogPopUp_IsEmpty"))();
        __s97local16.y = __s97local5;
        this.textFieldManager.registerTextField(__s97local16.txt_copy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_battleLogDetails_generalsAbilities_noAbilities_desc"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
        __s97local1.addChild(__s97local16);
      }
      __s97local3.autoFitToBounds = true;
      return __s97local1;
    }
    return null;
  };
  CastleBattleLogPopUpDialog.prototype.getAbilityTextType = function (__s111param0, __s111param1) {
    if (__s111param0.abilityXmlVO.abilityGroupID == 1022 && (this.dialogProperties.currentWave == CastleBattleLogPopUpDialog.WAVE_INDEX_SUMMARY || __s111param1 && !this.dialogProperties.logVO.hasDefenderInfos)) {
      return __dep_export_GeneralsHelper.GeneralsHelper.ABILITY_TEXT_SHORT;
    } else if (__s111param0.abilityXmlVO.abilityGroupID != 1021 && __s111param0.abilityXmlVO.abilityGroupID != 1019 || this.dialogProperties.currentWave != CastleBattleLogPopUpDialog.WAVE_INDEX_SUMMARY) {
      return __dep_export_GeneralsHelper.GeneralsHelper.ABILITY_TEXT_SHORT_VALUE;
    } else {
      return __dep_export_GeneralsHelper.GeneralsHelper.ABILITY_TEXT_SHORT;
    }
  };
  CastleBattleLogPopUpDialog.prototype.checkAbilityTriggerConditions = function (__s116param0, __s116param1, __s116param2) {
    return __s116param1 != this.dialogProperties.logVO.reinforcementWaveIndex && (__s116param0.isTriggerdInWave(__s116param1, this.getFlankNameBattleLog()) || __s116param2 === undefined && __s116param0.isTriggerdInWave(undefined, this.getFlankNameBattleLog()));
  };
  CastleBattleLogPopUpDialog.prototype.onComboboxChange = function (__s118param0 = null) {
    this.dialogProperties.currentWave = this._waveSelector.getSelectedItem().data;
    this.dialogProperties.currentFlank = this._flankSelector.getSelectedItem().data;
    this.displayCurrentSelection();
    this._waveSelector.update();
    this._flankSelector.update();
  };
  CastleBattleLogPopUpDialog.prototype.onScrollAttack = function () {
    this.dialogDisp.list_attacker.y = this._scrollYAttacker - this._scrollComponentAttacker.currentValue;
  };
  CastleBattleLogPopUpDialog.prototype.onScrollDefense = function () {
    this.dialogDisp.list_defender.y = this._scrollYDefender - this._scrollComponentDefender.currentValue;
  };
  CastleBattleLogPopUpDialog.prototype.onClick = function (__s124param0) {
    __s1param0.prototype.onClick.call(this, __s124param0);
    switch (__s124param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.filter_tools:
        this._filter_tools = !this._filter_tools;
        this.displayCurrentSelection();
        break;
      case this.dialogDisp.filter_units:
        this._filter_units = !this._filter_units;
        this.displayCurrentSelection();
        break;
      case this.dialogDisp.filter_general:
        this._filter_general = !this._filter_general;
        this.displayCurrentSelection();
    }
  };
  CastleBattleLogPopUpDialog.prototype.hideLoaded = function (__s127param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s127param0);
    if (this._waveSelector) {
      this._waveSelector.onHide();
      this._waveSelector.onSelectionChanged.remove(this.bindFunction(this.onComboboxChange));
    }
    if (this._flankSelector) {
      this._flankSelector.onHide();
      this._flankSelector.onSelectionChanged.remove(this.bindFunction(this.onComboboxChange));
    }
    if (this._scrollComponentAttacker) {
      this._scrollComponentAttacker.hide();
      this._scrollComponentAttacker.onScrollSignal.remove(this.bindFunction(this.onScrollAttack));
    }
    if (this._scrollComponentDefender) {
      this._scrollComponentDefender.hide();
      this._scrollComponentAttacker.onScrollSignal.remove(this.bindFunction(this.onScrollAttack));
    }
    this.clearItems();
    this.controller.removeEventListener(__dep_export_CastleLogDataEvent.CastleLogDataEvent.NEW_FULL_LOG, this.bindFunction(this.onDetailedDataAvailable));
  };
  CastleBattleLogPopUpDialog.prototype.clearItems = function () {
    this._currentToolItems.forEach(function (__s135param0) {
      __s135param0.hide();
      __s135param0.remove();
    });
    this._currentToolItems.forEach(function (__s137param0) {
      __s137param0.hide();
      __s137param0.remove();
    });
    this._currentToolItems = [];
    this._currentUnitItems = [];
  };
  Object.defineProperty(CastleBattleLogPopUpDialog.prototype, "isReinforcementWave", {
    get: function () {
      return this.dialogProperties.currentWave == this.dialogProperties.logVO.reinforcementWaveIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBattleLogPopUpDialog.prototype, "isPreCombatWave", {
    get: function () {
      return this.dialogProperties.currentWave == CastleBattleLogPopUpDialog.WAVE_INDEX_PRE_ATTACK;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBattleLogPopUpDialog.prototype, "isPostCombatWave", {
    get: function () {
      return this.dialogProperties.currentWave == CastleBattleLogPopUpDialog.WAVE_INDEX_POST_ATTACK;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBattleLogPopUpDialog.prototype, "isSupportWave", {
    get: function () {
      return this.dialogProperties.currentWave == CastleBattleLogPopUpDialog.WAVE_INDEX_SUPPORT_TOOLS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBattleLogPopUpDialog.prototype, "isYardWave", {
    get: function () {
      return this.dialogProperties.currentFlank == -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBattleLogPopUpDialog.prototype, "isToolsFilterEnabled", {
    get: function () {
      return !this.isReinforcementWave && !this.isPreCombatWave && !this.isPostCombatWave;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBattleLogPopUpDialog.prototype, "isUnitsFilterEnabled", {
    get: function () {
      return !this.isSupportWave;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBattleLogPopUpDialog.prototype, "isGeneralsAbilityFilterEnabled", {
    get: function () {
      return !this.isSupportWave;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBattleLogPopUpDialog.prototype, "isFlankSelectorVisible", {
    get: function () {
      return !this.isSupportWave && !this.isReinforcementWave;
    },
    enumerable: true,
    configurable: true
  });
  CastleBattleLogPopUpDialog.prototype.setPlayerName = function (__s157param0, __s157param1, __s157param2 = false) {
    if (__s157param1.ownerIsAlliance) {
      this.textFieldManager.registerTextField(__s157param0, new __dep_exact_92d05af59ee2ff30.TextVO(__s157param1.ownerInfoVO.allianceName)).autoFitToBounds = true;
    } else if (__s157param1.ownerInfoVO.playerName == "") {
      this.textFieldManager.registerTextField(__s157param0, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("deleted_Player"));
    } else {
      if (__s157param2 && this.dialogProperties.logVO.isBaronRaidBoss) {
        var __s157local0 = __dep_export_CastleModel.CastleModel.raidBossData.getRaidBossByGeneralID(this.dialogProperties.logVO.baronVO.assignedGeneralVO.generalID).name;
        this.textFieldManager.registerTextField(__s157param0, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("are_boss_name_" + __s157local0)).autoFitToBounds = true;
        return;
      }
      this.textFieldManager.registerTextField(__s157param0, new __dep_exact_92d05af59ee2ff30.TextVO(__s157param1.ownerInfoVO.playerName)).autoFitToBounds = true;
    }
  };
  Object.defineProperty(CastleBattleLogPopUpDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleBattleLogPopUpDialog.NAME = "CastleBattleLogPopUp_Generals2";
  CastleBattleLogPopUpDialog.ITEMS_PER_ROW = 5;
  CastleBattleLogPopUpDialog.ITEM_START_X = 54;
  CastleBattleLogPopUpDialog.ITEM_OFFSET_X = 50;
  CastleBattleLogPopUpDialog.ITEM_OFFSET_Y = 64;
  CastleBattleLogPopUpDialog.ITEM_GAP_BIG = 30;
  CastleBattleLogPopUpDialog.ITEM_GAP_MIDDLE = 16;
  CastleBattleLogPopUpDialog.ITEM_GAP_SMALL = 10;
  CastleBattleLogPopUpDialog.WAVE_INDEX_SUMMARY = -1;
  CastleBattleLogPopUpDialog.WAVE_INDEX_PRE_ATTACK = -2;
  CastleBattleLogPopUpDialog.WAVE_INDEX_POST_ATTACK = -3;
  CastleBattleLogPopUpDialog.WAVE_INDEX_SUPPORT_TOOLS = -4;
  return CastleBattleLogPopUpDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleBattleLogPopUpDialog = __s0local1;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_CastleBattleLogUnitScrollListItem = require("gge-module:export_CastleBattleLogUnitScrollListItem");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
