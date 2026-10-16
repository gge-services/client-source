Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_BasicPickerEvent = require("gge-module:export_BasicPickerEvent");
var __dep_export_SliderEvent = require("gge-module:export_SliderEvent");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_MapHelper = require("gge-module:export_MapHelper");
var __dep_export_CastleToolTipManager = require("gge-module:export_CastleToolTipManager");
var __dep_export_ComboboxItemRendererVO = require("gge-module:export_ComboboxItemRendererVO");
var __dep_export_InputMaxPicker = require("gge-module:export_InputMaxPicker");
var __dep_export_MultiSlider = require("gge-module:export_MultiSlider");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_PlayerHelper = require("gge-module:export_PlayerHelper");
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function ACastleSpyDialogState(__s3param0) {
    this.sliderValue = 0.5;
    this.dialog = __s3param0;
    this.initTextFields();
    this.initElements();
  }
  ACastleSpyDialogState.prototype.initTextFields = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.tfFrom, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_startAttack_from"));
    this.textFieldManager.registerTextField(this.dialogDisp.tfTo, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_startAttack_to"));
    this.tfTitle = this.textFieldManager.registerTextField(this.dialogDisp.txtTitle, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
    this.tfDamage = this.textFieldManager.registerTextField(this.dialogDisp.sabotageDamage.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE));
    this.guardAmount = this.textFieldManager.registerTextField(this.dialogDisp.guardAmount.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    this.tfDistance = this.textFieldManager.registerTextField(this.dialogDisp.mcDistance.txt_distance, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0, true, 1));
    this.tfTravelTime = this.textFieldManager.registerTextField(this.dialogDisp.travelTime.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.tfRisk = this.textFieldManager.registerTextField(this.dialogDisp.risk.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE));
    this.tfCosts = this.textFieldManager.registerTextField(this.dialogDisp.costs.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    this.tfSabotageTargets = this.textFieldManager.registerTextField(this.dialogDisp.sabotageTargets.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    this.tfTargetCastleName = this.textFieldManager.registerTextField(this.dialogDisp.nameTarget.castleName_txt, new __dep_exact_92d05af59ee2ff30.TextVO(""));
  };
  ACastleSpyDialogState.prototype.initElements = function () {
    this.createSliderComponent();
    this.dialogDisp.castleListCombobox.visible = false;
    this.dialogDisp.costs.x = this.dialogDisp.costs.y = 0;
    this.dialogDisp.risk.x = this.dialogDisp.risk.y = 0;
  };
  ACastleSpyDialogState.prototype.createSliderComponent = function () {
    this.slider = new __dep_export_MultiSlider.MultiSlider(this.dialogDisp.slider, 1, 24, 424, Library.CastleInterfaceElements.DefenceUnitAllocationSliderButton, false, [""]);
    this.slider.enableComponent = false;
    this.setSliderButtonVisibility(false);
  };
  ACastleSpyDialogState.prototype.updateElements = function () {
    this.checkSliderComponent();
    this.setPlagueTab();
    this.setSabotageTab();
    this.setSpyTab();
    this.slider.enableComponent = true;
    this.setSliderButtonVisibility(true);
    this.costHolder.addChild(this.dialogDisp.costs);
    this.riskHolder.addChild(this.dialogDisp.risk);
    this.setCrest();
    this.addBgCharacter();
    this.amountPicker = new __dep_export_InputMaxPicker.InputMaxPicker(this.dialogDisp.amountPicker);
    this.drawTargetCastle();
  };
  ACastleSpyDialogState.prototype.checkSliderComponent = function () {
    if (this.slider && !this.slider.buttons) {
      this.createSliderComponent();
    }
  };
  ACastleSpyDialogState.prototype.setCrest = function () {
    var __s16local0;
    var __s16local1;
    if (this.dialogProperties.worldmapObjectVO.kingdomID == __dep_exact_26a421b704832cff_4.FactionConst.KINGDOM_ID) {
      __s16local0 = this.factionEventVO.ownFaction == __dep_exact_26a421b704832cff_4.FactionConst.BLUE_FACTION ? __dep_export_FactionEventVO.FactionEventVO.BLUE_CREST_VO : __dep_export_FactionEventVO.FactionEventVO.RED_CREST_VO;
      if (this.dialogProperties.worldmapObjectVO.ownerInfo) {
        __s16local1 = this.dialogProperties.worldmapObjectVO.ownerInfo.factionID == __dep_exact_26a421b704832cff_4.FactionConst.BLUE_FACTION ? __dep_export_FactionEventVO.FactionEventVO.BLUE_CREST_VO : __dep_export_FactionEventVO.FactionEventVO.RED_CREST_VO;
      }
    } else {
      __s16local0 = __dep_export_CastleModel.CastleModel.userData.playerCrest;
      if (this.dialogProperties.worldmapObjectVO.ownerInfo) {
        __s16local1 = this.dialogProperties.worldmapObjectVO.ownerInfo.crest;
      }
    }
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mcCrest0, __s16local0);
    if (__s16local1) {
      __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mcCrest1, __s16local1);
      this.dialogDisp.mcCrest1.visible = true;
      this.dialogDisp.mc_crestShadowEnemy.visible = true;
    } else {
      this.dialogDisp.mcCrest1.visible = false;
      this.dialogDisp.mc_crestShadowEnemy.visible = false;
    }
  };
  ACastleSpyDialogState.prototype.setSliderButtonVisibility = function (__s24param0) {
    for (var __s24local0 = 0; __s24local0 < this.slider.buttons.length; __s24local0++) {
      this.slider.buttons[__s24local0].visible = __s24param0;
    }
  };
  Object.defineProperty(ACastleSpyDialogState.prototype, "factionEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  ACastleSpyDialogState.prototype.addBgCharacter = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  ACastleSpyDialogState.prototype.updateTexts = function () {
    this.dialogDisp.mcDistance.toolTipText = "distance";
    this.guardAmount.textContentVO.numberValue = this.startSpyVO.guardCount;
  };
  ACastleSpyDialogState.prototype.addEventListenerOnShow = function () {
    if (this.castleList) {
      this.castleList.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeUserCastle));
    }
    this.amountPicker.disp.addEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onPickerChange));
    this.slider.addEventListener(__dep_export_SliderEvent.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderChange));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondTimer));
  };
  ACastleSpyDialogState.prototype.removeEventListenerOnHide = function () {
    if (this.castleList) {
      this.castleList.disp.removeEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeUserCastle));
    }
    if (this.amountPicker) {
      this.amountPicker.disp.removeEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onPickerChange));
    }
    if (this.slider) {
      this.slider.removeEventListener(__dep_export_SliderEvent.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderChange));
    }
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondTimer));
  };
  ACastleSpyDialogState.prototype.onSecondTimer = function (__s42param0) {
    this.setPlagueTab();
    this.setSabotageTab();
  };
  ACastleSpyDialogState.prototype.addCastleList = function () {
    this.castleList = new __dep_export_ComboboxComponent.ComboboxComponent(this.dialogDisp.castleListCombobox, "", 1, 40, 45);
    this.dialogDisp.castleListCombobox.visible = true;
    this.fillCastleList();
    this.drawSourceCastle();
  };
  ACastleSpyDialogState.prototype.onChangeUserCastle = function (__s46param0) {
    if (this.startSpyVO) {
      this.drawSourceCastle();
      this.updateData();
    }
  };
  ACastleSpyDialogState.prototype.drawSourceCastle = function (__s49param0 = null) {
    __dep_exact_9e901e8e2483a22f_4.MovieClipHelper.clearMovieClip(this.dialogDisp.sourceCastleContainer);
    var __s49local0 = this.castleList.selectedData;
    var __s49local1 = __dep_exact_f855840627e6e145.int(__s49local0.objectId);
    var __s49local2 = __dep_exact_f855840627e6e145.int(__s49local0.kingdomID);
    var __s49local3 = __dep_export_CastleModel.CastleModel.userData.getOwnCastle(__s49local1, __s49local2);
    this.dialogDisp.sourceCastleContainer.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(__s49local3, new __s0local0(100, 75), true, false, true, "panel_action_jumpTo"));
  };
  ACastleSpyDialogState.prototype.drawTargetCastle = function () {
    __dep_exact_9e901e8e2483a22f_4.MovieClipHelper.clearMovieClip(this.dialogDisp.targetCastleContainer);
    this.dialogDisp.targetCastleContainer.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(this.dialogProperties.worldmapObjectVO, new __s0local0(100, 75), true, false, true, "panel_action_jumpTo"));
    this.tfTargetCastleName.textContentVO.stringValue = this.dialogProperties.worldmapObjectVO.areaNameString;
    this.dialogDisp.nameTarget.mc_dove.visible = false;
    this.dialogDisp.nameTarget.mc_rank.visible = false;
    this.dialogDisp.nameTarget.mc_searchAlliance.visible = false;
  };
  ACastleSpyDialogState.prototype.fillCastleList = function () {
    var __s53local0;
    var __s53local1;
    this.castleList.clearItems();
    if ((__s53local0 = this.dialogProperties.worldmapObjectVO.kingdomID == __dep_exact_26a421b704832cff_4.FactionConst.KINGDOM_ID ? __dep_export_CastleModel.CastleModel.userData.castleList.listWithoutOcupiedOrDestroyedFactionCamps : __dep_export_CastleModel.CastleModel.userData.castleList.listWithoutOcupiedOutposts) != null) {
      for (var __s53local2 = 0, __s53local3 = __s53local0; __s53local2 < __s53local3.length; __s53local2++) {
        var __s53local4 = __s53local3[__s53local2];
        if (__s53local4 !== undefined && __s53local4.kingdomID == this.dialogProperties.worldmapObjectVO.kingdomID) {
          (__s53local1 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).itemLabel = __s53local4.areaNameString;
          __s53local1.data = __s53local4;
          this.castleList.addItem(__s53local1);
        }
      }
    }
    var __s53local5 = 0;
    var __s53local6 = -1;
    var __s53local7 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
    for (var __s53local8 = 0; __s53local8 < this.castleList.itemData.length; __s53local8++) {
      var __s53local9 = this.castleList.itemData[__s53local8].data;
      var __s53local10 = __dep_export_MapHelper.MapHelper.getDistanceByMapobjects(__s53local9, this.dialogProperties.worldmapObjectVO, true);
      if (__s53local9.kingdomID == this.dialogProperties.worldmapObjectVO.kingdomID) {
        var __s53local11 = __s53local7.objectId == __s53local9.objectId;
        if (__s53local10 < __s53local6 || __s53local6 < 0 || __s53local10 == __s53local6 && __s53local11) {
          __s53local5 = __s53local8;
          __s53local6 = __s53local10;
        }
      }
    }
    this.castleList.selectItemIndex(__s53local5);
    this.castleList.enabled = this.castleList.itemData.length > 1;
  };
  ACastleSpyDialogState.prototype.onSliderChange = function (__s63param0) {
    this.sliderValue = __s63param0.selectedValues[0];
    this.updateData();
  };
  ACastleSpyDialogState.prototype.onPickerChange = function (__s65param0) {
    this.updateData();
  };
  ACastleSpyDialogState.prototype.setPlagueTab = function () {
    this.plagueButton ||= new __dep_export_ButtonPlagueMonkComponent.ButtonPlagueMonkComponent(this.dialogDisp.btnTabPlague.basicButton);
    this.plagueButton.targetWMO = this.dialogProperties.worldmapObjectVO;
  };
  ACastleSpyDialogState.prototype.setSabotageTab = function () {
    var __s69local0 = this.dialogProperties.worldmapObjectVO.ownerInfo.isLegend;
    var __s69local1 = {
      t: "dialog_spy_titleSabotage"
    };
    var __s69local2 = false;
    var __s69local3 = this.dialogProperties.worldmapObjectVO.ownerInfo.playerLevel - __dep_export_CastleModel.CastleModel.userData.userLevel;
    if (__dep_export_PlayerHelper.PlayerHelper.isNPCPlayer(this.dialogProperties.worldmapObjectVO.ownerInfo.playerID)) {
      __s69local1 = "dialog_sabotage_cannot_sabotage_npcs";
    } else if (this.dialogProperties.worldmapObjectVO.ownerInfo.playerLevel < __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_SABOTAGE) {
      __s69local1 = "errorCode_120";
    } else if (__dep_export_CastleModel.CastleModel.userData.userLevel < __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_SABOTAGE) {
      __s69local1 = {
        t: "expansion_higherLevelNeeded",
        p: [__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_SABOTAGE]
      };
    } else if (__dep_export_CastleModel.CastleModel.userData.userLevel < __dep_exact_26a421b704832cff_3.SpyConst.MIN_LEVEL_SPY_ALL && __s69local3 > __dep_exact_26a421b704832cff_3.SpyConst.MAX_DELTA_LEVEL_SPY) {
      __s69local1 = {
        t: "dialog_spy_sabotage_wrongLevel_tt",
        p: [__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_SABOTAGE, Math.min(__dep_exact_26a421b704832cff.PlayerConst.LEVEL_CAP, __dep_export_CastleModel.CastleModel.userData.userLevel + __dep_exact_26a421b704832cff_3.SpyConst.MAX_DELTA_LEVEL_SPY)]
      };
    } else if (__dep_export_CastleModel.CastleModel.userData.isInPeaceMode || __dep_export_CastleModel.CastleModel.userData.noobProtected) {
      __s69local1 = "dialog_sabotage_cannot_plague_sabotage_inpeace_mode";
    } else if (__dep_export_CastleModel.CastleModel.spyData.getNumAllSpies(__s69local0) == 0) {
      __s69local1 = {
        t: "ringmenu_toolTip_noAgents"
      };
    } else if (__dep_export_CastleModel.CastleModel.spyData.getNumAvailableSpies(__s69local0) == 0) {
      __s69local1 = {
        t: "ringmenu_toolTip_noFreeAgents"
      };
    } else if (this.dialogProperties.worldmapObjectVO.remainingCooldownSabotageTimeInSeconds > 0) {
      __s69local1 = {
        t: "dialog_spy_sabotageCooldown",
        p: [__dep_exact_9e901e8e2483a22f_3.TimeStringHelper.getShortTimeString(this.dialogProperties.worldmapObjectVO.remainingCooldownSabotageTimeInSeconds * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC, __dep_exact_9e901e8e2483a22f_3.TimeStringHelper.ONE_TIME_FORMAT)]
      };
    } else if (this.dialogProperties.worldmapObjectVO.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_ISLE_RESOURCE || this.dialogProperties.worldmapObjectVO.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_VILLAGE || this.dialogProperties.worldmapObjectVO.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_KINGS_TOWER || this.dialogProperties.worldmapObjectVO.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_MONUMENT || this.dialogProperties.worldmapObjectVO.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_LABORATORY) {
      __s69local1 = "dialog_sabotage_cannot_sabotage_this_target";
    } else if (this.dialogProperties.worldmapObjectVO.temporarySabotageProtection) {
      __s69local1 = "dialog_spy_sabotage_protectionActive";
    } else if (this.dialogProperties.worldmapObjectVO.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_METROPOL || this.dialogProperties.worldmapObjectVO.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_CAPITAL) {
      __s69local2 = true;
    } else if (this.dialogProperties.worldmapObjectVO.ownerInfo.isPeaceProtected) {
      var __s69local4 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getCantAttackTimeString(this.dialogProperties.worldmapObjectVO.ownerInfo.remainingPeaceTime);
      __s69local1 = "playerHasNoobProtectionSabotage" + __dep_export_CastleToolTipManager.CastleToolTipManager.ID_PARAM_SEPERATOR + __s69local4;
    } else if (this.dialogProperties.worldmapObjectVO.ownerInfo.isNoobProtected) {
      var __s69local5 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getCantAttackTimeString(this.dialogProperties.worldmapObjectVO.ownerInfo.remainingNoobTime);
      __s69local1 = "playerHasNoobProtectionSabotage" + __dep_export_CastleToolTipManager.CastleToolTipManager.ID_PARAM_SEPERATOR + __s69local5;
    } else if (__dep_exact_26a421b704832cff_1.CombatConst.getMaxDamagedBuildings(this.dialogProperties.worldmapObjectVO.ownerInfo.playerLevel) < 1) {
      __s69local1 = "dialog_sabotage_enemyLvlToLow";
    } else if (this.dialogProperties.worldmapObjectVO.kingdomID == __dep_exact_26a421b704832cff_4.FactionConst.KINGDOM_ID) {
      __s69local1 = "dialog_sabotage_cannot_sabotage_this_target";
    } else {
      __s69local2 = true;
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btnTabSabotage, __s69local2);
    this.dialogDisp.btnTabSabotage.toolTipText = __s69local1;
    this.dialogDisp.btnTabSabotage.visible = !__dep_export_ABGHelper.ABGHelper.isOnABGServer;
  };
  ACastleSpyDialogState.prototype.setSpyTab = function () {
    var __s87local0 = this.dialogProperties.worldmapObjectVO.ownerInfo.isLegend;
    var __s87local1 = {
      t: "dialog_spy_title"
    };
    var __s87local2 = false;
    if (this.dialogProperties.worldmapObjectVO.isInSpyLevelRange) {
      if (__dep_export_CastleModel.CastleModel.spyData.getNumAllSpies(__s87local0) == 0) {
        __s87local1 = {
          t: "ringmenu_toolTip_noAgents"
        };
      } else if (__dep_export_CastleModel.CastleModel.spyData.getNumAvailableSpies(__s87local0) == 0) {
        __s87local1 = {
          t: "ringmenu_toolTip_noFreeAgents"
        };
      } else {
        __s87local2 = true;
      }
    } else {
      __s87local1 = "ringmenu_toolTip_levelTooLow";
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btnTabSpy, __s87local2);
    this.dialogDisp.btnTabSpy.toolTipText = __s87local1;
  };
  ACastleSpyDialogState.prototype.onClick = function (__s94param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s94param0.target)) {
      switch (__s94param0.target) {
        case this.dialogDisp.btnOk:
          this.spyCastle();
          break;
        case this.dialogDisp.btnTabSpy:
          this.dialog.setState(this.dialog.spyState);
          break;
        case this.dialogDisp.btnTabSabotage:
          this.dialog.setState(this.dialog.sabotageState);
          break;
        case this.dialogDisp.btnTabPlague:
          this.dialog.setState(this.dialog.plagueState);
          break;
        case this.dialogDisp.btnClose:
        case this.dialogDisp.btnCancel:
          this.dialog.hide();
      }
    }
  };
  ACastleSpyDialogState.prototype.spyCastle = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  ACastleSpyDialogState.prototype.onHidePostDialog = function (__s100param0 = null) {
    this.dialog.hide();
  };
  ACastleSpyDialogState.prototype.setSliderToValue = function () {
    if (this.sliderValue != this.slider.getPercentValues()[0]) {
      this.slider.setSliderTo(0, this.sliderValue * 100);
    }
  };
  ACastleSpyDialogState.prototype.updateData = function () {
    this.setSliderToValue();
    this.updateSpyVO();
    this.tfDistance.textContentVO.numberValue = this.startSpyVO.distance;
    this.tfCosts.textContentVO.numberValue = this.startSpyVO.cost;
    this.tfRisk.textContentVO.textReplacements = [String(this.startSpyVO.risk)];
    if (this.startSpyVO.cost > __dep_export_CastleModel.CastleModel.currencyData.c1Amount) {
      this.tfCosts.color = __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    } else {
      this.tfCosts.color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    }
    this.drawRiskBars();
  };
  ACastleSpyDialogState.prototype.updateSpyVO = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  ACastleSpyDialogState.prototype.updateSliderForDamage = function () {
    var __s111local0 = this.slider.getPercentValues();
    var __s111local1 = 1 / (__dep_exact_26a421b704832cff_3.SpyConst.MAX_DAMAGE - __dep_exact_26a421b704832cff_3.SpyConst.MIN_DAMAGE);
    var __s111local2 = __s111local0[0] / __s111local1 + __dep_exact_26a421b704832cff_3.SpyConst.MIN_DAMAGE;
    var __s111local3 = __dep_exact_f855840627e6e145.int(this.amountPicker.selectedValue + 1);
    var __s111local4 = __dep_exact_26a421b704832cff_1.CombatConst.getMaxDamagedBuildings(this.dialogProperties.worldmapObjectVO.ownerInfo.playerLevel) * __dep_exact_26a421b704832cff_3.SpyConst.DAMAGE_PER_BUILDING;
    var __s111local5 = false;
    if (__dep_exact_26a421b704832cff_3.SpyConst.MIN_DAMAGE == __s111local4) {
      __s111local2 = __s111local4;
      this.slider.setSliderTo(0, 0);
      this.slider.buttons[0].disp.toolTipText = "spy_dialog_sabotageMaxDamageReached_02";
      this.slider.enableComponent = false;
      __s111local5 = true;
    } else if (__s111local4 <= __s111local2) {
      __s111local2 = __s111local4;
      this.slider.enableComponent = true;
      this.slider.buttons[0].disp.toolTipText = "spy_dialog_sabotageMaxDamageReached_02";
      __s111local5 = __s111local2 < __dep_exact_26a421b704832cff_3.SpyConst.MAX_DAMAGE;
    } else {
      this.slider.enableComponent = true;
      __s111local5 = false;
      this.slider.buttons[0].disp.toolTipText = "spy_dialog_sabotageDamage";
    }
    this.startSpyVO.setSabotageValues(__s111local2, __s111local3);
    this.tfDamage.textContentVO.textReplacements = [String(this.startSpyVO.damage)];
    this.tfSabotageTargets.textContentVO.numberValue = Math.ceil(this.startSpyVO.damage / __dep_exact_26a421b704832cff_3.SpyConst.DAMAGE_PER_BUILDING);
    if (__s111local5) {
      this.dialogDisp.sabotageDamage.toolTipText = "spy_dialog_sabotageMaxDamageReached_02";
      this.tfDamage.color = __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    } else {
      this.dialogDisp.sabotageDamage.toolTipText = "spy_dialog_sabotageDamage";
      this.tfDamage.color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    }
  };
  ACastleSpyDialogState.prototype.drawRiskBars = function () {
    this.dialogDisp.slider.bar0.mc_mask.scaleX = this.scaleGreen;
    this.dialogDisp.slider.bar1.mc_mask.scaleX = this.scaleYellow;
  };
  ACastleSpyDialogState.prototype.getAccuracyByRisk = function (__s120param0, __s120param1, __s120param2) {
    var __s120local0 = !__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.worldmapObjectVO, "OutpostMapobjectVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.worldmapObjectVO, "OutpostMapobjectVO") && this.dialogProperties.worldmapObjectVO.ownerInfo.playerID > 0;
    for (var __s120local1 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_3.SpyConst.MIN_ACCURACY); __s120local1 < __dep_exact_26a421b704832cff_3.SpyConst.MAX_ACCURACY; __s120local1++) {
      if (__dep_exact_26a421b704832cff_3.SpyConst.getSpyRisk(__s120param0, __s120param1, __s120local1, __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.worldmapObjectVO, "DungeonMapobjectVO"), __s120local0) > __s120param2) {
        return __s120local1;
      }
    }
    return 100;
  };
  ACastleSpyDialogState.prototype.getDamageByRisk = function (__s125param0, __s125param1, __s125param2) {
    for (var __s125local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_3.SpyConst.MIN_DAMAGE); __s125local0 < __dep_exact_26a421b704832cff_3.SpyConst.MAX_DAMAGE; __s125local0++) {
      if (__dep_exact_26a421b704832cff_3.SpyConst.getSabotageRisk(__s125param0, __s125param1, __s125local0) > __s125param2) {
        return __s125local0;
      }
    }
    return 100;
  };
  Object.defineProperty(ACastleSpyDialogState.prototype, "scaleGreen", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleSpyDialogState.prototype, "scaleYellow", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  ACastleSpyDialogState.prototype.resetState = function () {
    this.removeEventListenerOnHide();
    if (this.amountPicker) {
      this.amountPicker.dispose();
    }
    if (this.castleList) {
      this.dialogDisp.castleListCombobox.bg.scaleY = 1;
      this.dialogDisp.castleListCombobox.visible = false;
      this.castleList.clearItems();
      this.castleList.dispose();
      this.castleList = null;
    }
    if (this.slider) {
      this.slider.enableComponent = false;
      this.setSliderButtonVisibility(false);
    }
  };
  ACastleSpyDialogState.prototype.destroy = function () {
    this.resetState();
    this.slider.dispose();
  };
  Object.defineProperty(ACastleSpyDialogState.prototype, "costHolder", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleSpyDialogState.prototype, "riskHolder", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleSpyDialogState.prototype, "startSpyVO", {
    get: function () {
      return this.dialog.startSpyVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleSpyDialogState.prototype, "dialogDisp", {
    get: function () {
      return this.dialog.dialogDisp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleSpyDialogState.prototype, "dialogProperties", {
    get: function () {
      return this.dialog.dialogProperties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleSpyDialogState.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleSpyDialogState.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleSpyDialogState.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleSpyDialogState, "dialogHandler", {
    get: function () {
      return __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return ACastleSpyDialogState;
}();
exports.ACastleSpyDialogState = __s0local1;
var __dep_export_FactionEventVO = require("gge-module:export_FactionEventVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_ButtonPlagueMonkComponent = require("gge-module:export_ButtonPlagueMonkComponent");
var __dep_export_ComboboxComponent = require("gge-module:export_ComboboxComponent");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICastleSpyDialogState");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
