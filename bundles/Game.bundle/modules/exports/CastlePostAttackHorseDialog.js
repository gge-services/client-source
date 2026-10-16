Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_cxfResetCommandCache = require("gge-module:export_cxfResetCommandCache");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
var __dep_export_BasicPickerEvent = require("gge-module:export_BasicPickerEvent");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_AdvisorAttackHelper = require("gge-module:export_AdvisorAttackHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleAttackInfoVO = require("gge-module:export_CastleAttackInfoVO");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_UnitPicker = require("gge-module:export_UnitPicker");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CharacterHelper = require("gge-module:export_CharacterHelper");
var __dep_export_ModernYesNoDialog = require("gge-module:export_ModernYesNoDialog");
var __dep_export_SubscriptionPackageEnum = require("gge-module:export_SubscriptionPackageEnum");
var __s0local0 = function (__s1param0) {
  function CastlePostAttackHorseDialog() {
    var __s3local0 = __s1param0.call(this, CastlePostAttackHorseDialog.NAME) || this;
    __s3local0._currentAutoSkipCooldownType = 0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePostAttackHorseDialog, __s1param0);
  CastlePostAttackHorseDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initAutoskip();
    this.initAdvisorInfo();
  };
  CastlePostAttackHorseDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_export_CharacterHelper.CharacterHelper.createCharacterBig(this.getCharID(), this.dialogDisp.mc_char, 102, 133);
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.attackInfoVO.targetArea, "ResourceIsleMapobjectVO")) {
      var __s7local0 = __dep_export_CastleModel.CastleModel.eilandData.getIsleBlueprint(this.dialogProperties.attackInfoVO.targetArea.isleID);
      if (this.i_siegetime_txt_value) {
        this.i_siegetime_txt_value.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getTimeToString(__s7local0.occupationTime, __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.ONE_TIME_FORMAT, __dep_export_CastleModel.CastleModel.languageData.bindFunction(__dep_export_CastleModel.CastleModel.languageData.getTextById));
      }
    }
    this.initChargeCosts();
    this.showAutoSkip();
    this.showAdvisorInfo();
    if (__dep_export_ABGHelper.ABGHelper.isOnABGAndCollector && __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.attackInfoVO.targetArea, "CapitalMapobjectVO") && this.isActionTypeAnAttack) {
      var __s7local1 = __dep_exact_f855840627e6e145.int(__dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.scoringSystemVO.allianceSteal);
      var __s7local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.collectEventData.lastGotAmountForTarget * (__s7local1 / 100));
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_2.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30_2.Localize.text("dialog_beyondTheHorizon_gainInfluence_title"), __dep_exact_92d05af59ee2ff30_2.Localize.text("lootedInfluence_colonValue", [__s7local2]) + "\n\n" + __dep_exact_92d05af59ee2ff30_2.Localize.text("dialog_beyondTheHorizon_gainInfluence_desc", [__s7local1])));
    }
  };
  CastlePostAttackHorseDialog.prototype.initChargeCosts = function () {
    if (this.dialogDisp.mc_charge) {
      this.dialogDisp.mc_charge.visible = false;
      this.dialogDisp.mc_charge.visible;
    }
  };
  Object.defineProperty(CastlePostAttackHorseDialog.prototype, "isActionTypeAnAttack", {
    get: function () {
      switch (this.fightScreenInfoVO.targetActionType) {
        case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ATTACK:
        case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK:
        case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_BOSSDUNGEONATTACK:
        case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK:
        case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_VILLAGE_ATTACK:
        case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ISLAND_ATTACK:
        case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_OUTPOSTATTACK:
          return true;
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  CastlePostAttackHorseDialog.prototype.getHelperTextID = function () {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.attackInfoVO, "CastleSupportDefenceVO")) {
      return "help_extendedtravelPlanning_support";
    }
    var __s18local0 = __dep_export_CastleModel.CastleModel.subscriptionData.isAutoSkipTarget(this.fightScreenInfoVO.targetArea);
    var __s18local1 = __dep_export_CastleModel.CastleModel.subscriptionData.isAutoSkipActiveForArea(this.fightScreenInfoVO.targetArea);
    if (__s18local0 && __s18local1) {
      return "help_travelPlanning_autoCooldownSkip";
    } else {
      return __s1param0.prototype.getHelperTextID.call(this);
    }
  };
  CastlePostAttackHorseDialog.prototype.hideLoaded = function (__s23param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s23param0);
    if (this.supportTimePicker) {
      this.supportTimePicker.disp.removeEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onPickerChange));
      this.supportTimePicker.itxt_pick.change.remove(this.bindFunction(this.onTypeAmount));
    }
  };
  CastlePostAttackHorseDialog.prototype.initTimeSelection = function () {
    if (!this.supportTimePicker) {
      this.supportTimePicker = new __dep_export_UnitPicker.UnitPicker(this.dialogDisp.mc_supportTime.mc_picker);
      this.supportTimePicker.setNumItems(__dep_exact_26a421b704832cff_1.TravelConst.DEFENSE_SUPPORT_DURATION_HOURS_MAX);
      this.supportTimePicker.itxt_pick.restrict = "0-9";
      this.supportTimePicker.itxt_pick.maxChars = 2;
      this.supportTimePicker.itxt_pick.multiline = false;
    }
    this.supportTimePicker.disp.addEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onPickerChange));
    this.supportTimePicker.itxt_pick.change.add(this.bindFunction(this.onTypeAmount));
    this.itxt_c2Cost_support = this.textFieldManager.registerTextField(this.dialogDisp.mc_supportTime.mc_c2Cost.txt_c2, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(0));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_supportTime.txt_supportTime, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("generic_Supporttime")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_supportTime.txt_hours, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("generic_hours"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_supportTime.mc_c2Cost.txt_info, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_travelPlanning_buyMoreTime_C2"));
    this.dialogDisp.mc_supportTime.visible = this.fightScreenInfoVO.targetActionType == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE && this.fightScreenInfoVO.targetArea.areaType != __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER;
  };
  CastlePostAttackHorseDialog.prototype.onPickerChange = function (__s29param0) {
    this.updateC2Costs();
  };
  CastlePostAttackHorseDialog.prototype.getWaitTime = function () {
    return this.supportTimePicker.selectedValue + 1;
  };
  CastlePostAttackHorseDialog.prototype.onTypeAmount = function () {
    this.supportTimePicker.setValue(parseInt(this.supportTimePicker.itxt_pick.text) || 1);
  };
  CastlePostAttackHorseDialog.prototype.updateC2Costs = function () {
    __s1param0.prototype.updateC2Costs.call(this);
    var __s35local0 = this.getC2CostSupport();
    var __s35local1 = __dep_export_CastleModel.CastleModel.currencyData.c2Amount >= __s35local0;
    this.dialogDisp.mc_supportTime.mc_c2Cost.visible = __s35local0 > 0;
    this.dialogDisp.mc_supportTime.deco_noC2.visible = __s35local0 <= 0;
    this.itxt_c2Cost_support.textContentVO.numberValue = __s35local0;
    this.itxt_c2Cost_support.color = __s35local1 ? __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
  };
  CastlePostAttackHorseDialog.prototype.getTotalCostsC2 = function () {
    var __s37local0 = __s1param0.prototype.getTotalCostsC2.call(this);
    return __s37local0 += this.getC2CostSupport();
  };
  CastlePostAttackHorseDialog.prototype.getC2CostSupport = function () {
    var __s39local0 = 0;
    if (this.dialogDisp.mc_supportTime.visible) {
      var __s39local1 = this.fightScreenInfoVO.targetArea.isUnderConquerControl;
      var __s39local2 = __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.fightScreenInfoVO.targetArea, "CapitalMapobjectVO");
      var __s39local3 = __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.fightScreenInfoVO.targetArea, "MetropolMapobjectVO");
      __s39local0 = __dep_exact_26a421b704832cff_1.TravelConst.getSupportDurationCostC2(this.supportTimePicker.selectedValue + 1, __s39local1, __s39local2, __s39local3);
    }
    return __s39local0;
  };
  CastlePostAttackHorseDialog.prototype.initAutoskip = function () {
    this._autoSkipCooldownTypesByAreaID = new Map();
    this.textFieldManager.registerTextField(this.dialogDisp.mc_autoskip_preview.txt_preview, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_travelPlanning_autoCooldownSkip_preview_unlock_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_autoskip_preview.mc_tooltip.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_travelPlanning_autoCooldownSkip_preview_help_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_autoskip_preview.mc_tooltip.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_travelPlanning_autoCooldownSkip_preview_help_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_autoskip_preview.btn_buy.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("toTheShop")));
    this.dialogDisp.mc_autoskip_preview.icon_info.mouseChildren = false;
    this.dialogDisp.mc_autoskip_preview.mc_tooltip.visible = false;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.mc_autoskip_preview.btn_buy], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_cxfResetCommandCache.registerUIComponentToCXF(this.dialogDisp.mc_autoskip_preview.btn_buy, "btn_webshop", {
      page: "subscriptions",
      route: "/offer/3",
      sourceId: __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.CXF_SOURCE_TRAVEL_PLANNING_DIALOG_AUTOSKIP_PREVIEW
    });
    this.textFieldManager.registerTextField(this.dialogDisp.mc_autoskip_options.txt_autoskip_off, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_travelPlanning_autoCooldownSkip_active_radioButton_noSkip"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_autoskip_options.txt_autoskip_minuteskip, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_travelPlanning_autoCooldownSkip_active_radioButton_timeSkip"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_autoskip_options.txt_autoskip_c2, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.mc_autoskip_options.radio_autoskip_off, this.dialogDisp.mc_autoskip_options.radio_autoskip_minuteskip, this.dialogDisp.mc_autoskip_options.radio_autoskip_c2], __dep_exact_84d43d9c404bd4d8.TwoStateButton);
    this.dialogDisp.mc_autoskip_options.radio_autoskip_off.autoSkipCooldownType = __dep_exact_26a421b704832cff.AutoSkipCooldownConst.AUTO_SKIP_TYPE_OFF;
    this.dialogDisp.mc_autoskip_options.radio_autoskip_minuteskip.autoSkipCooldownType = __dep_exact_26a421b704832cff.AutoSkipCooldownConst.AUTO_SKIP_TYPE_MINUTE_SKIP;
    this.dialogDisp.mc_autoskip_options.radio_autoskip_c2.autoSkipCooldownType = __dep_exact_26a421b704832cff.AutoSkipCooldownConst.AUTO_SKIP_TYPE_C2;
    this.dialogDisp.mc_autoskip_options.txt_autoskip_c2.visible = false;
    this.dialogDisp.mc_autoskip_options.radio_autoskip_c2.visible = false;
  };
  CastlePostAttackHorseDialog.prototype.showAutoSkip = function () {
    var __s44local0 = this.dialogProperties.attackInfoVO.advisorAttacks > 0;
    var __s44local1 = __dep_export_CastleModel.CastleModel.subscriptionData.isAutoSkipTarget(this.fightScreenInfoVO.targetArea);
    var __s44local2 = __dep_export_CastleModel.CastleModel.subscriptionData.isAutoSkipActiveForArea(this.fightScreenInfoVO.targetArea);
    this.dialogDisp.mc_autoskip_preview.visible = __s44local1 && !__s44local2 && !__s44local0;
    this.dialogDisp.mc_autoskip_options.visible = __s44local1 && __s44local2 && !__s44local0;
    if (this._autoSkipCooldownTypesByAreaID.has(this.fightScreenInfoVO.targetArea.areaType) && !__s44local0) {
      this.selectAutoskipOption(this._autoSkipCooldownTypesByAreaID.get(this.fightScreenInfoVO.targetArea.areaType));
    } else {
      this.selectAutoskipOption(__dep_exact_26a421b704832cff.AutoSkipCooldownConst.AUTO_SKIP_TYPE_OFF);
    }
  };
  CastlePostAttackHorseDialog.prototype.initAdvisorInfo = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.mc_advisor.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("attack_advisor"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_advisor.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("advisor_attackInfo"));
  };
  CastlePostAttackHorseDialog.prototype.showAdvisorInfo = function () {
    var __s50local0 = this.dialogProperties.attackInfoVO.advisorAttacks > 0;
    this.dialogDisp.mc_advisor.visible = __s50local0;
    if (__s50local0) {
      this.shareViewCheckbox.isSelected = true;
      this.shareViewCheckboxVisible = false;
    }
  };
  CastlePostAttackHorseDialog.prototype.selectAutoskipOption = function (__s53param0) {
    [this.dialogDisp.mc_autoskip_options.radio_autoskip_off, this.dialogDisp.mc_autoskip_options.radio_autoskip_minuteskip, this.dialogDisp.mc_autoskip_options.radio_autoskip_c2].forEach(function (__s55param0) {
      if (__s53param0 == __s55param0.autoSkipCooldownType) {
        __dep_export_ButtonHelper.ButtonHelper.getBasicButton(__s55param0).selected();
      } else {
        __dep_export_ButtonHelper.ButtonHelper.getBasicButton(__s55param0).deselected();
      }
    });
    this._currentAutoSkipCooldownType = __s53param0;
  };
  CastlePostAttackHorseDialog.prototype.saveAutoskipSelection = function () {
    if (this.dialogProperties.attackInfoVO instanceof __dep_export_CastleAttackInfoVO.CastleAttackInfoVO) {
      this.dialogProperties.attackInfoVO.autoSkipCooldownType = this._currentAutoSkipCooldownType;
      this._autoSkipCooldownTypesByAreaID.set(this.fightScreenInfoVO.targetArea.areaType, this._currentAutoSkipCooldownType);
    }
  };
  CastlePostAttackHorseDialog.prototype.sendAttack = function (__s62param0, __s62param1) {
    this.saveAutoskipSelection();
    __s1param0.prototype.sendAttack.call(this, __s62param0, __s62param1);
  };
  CastlePostAttackHorseDialog.prototype.onMouseOver = function (__s64param0) {
    __s1param0.prototype.onMouseOver.call(this, __s64param0);
    switch (__s64param0.target) {
      case this.dialogDisp.mc_autoskip_preview.icon_info:
        this.dialogDisp.mc_autoskip_preview.parent.addChild(this.dialogDisp.mc_autoskip_preview);
        this.dialogDisp.mc_autoskip_preview.mc_tooltip.visible = true;
    }
  };
  CastlePostAttackHorseDialog.prototype.onMouseOut = function (__s67param0) {
    __s1param0.prototype.onMouseOut.call(this, __s67param0);
    switch (__s67param0.target) {
      case this.dialogDisp.mc_autoskip_preview.icon_info:
        this.dialogDisp.mc_autoskip_preview.mc_tooltip.visible = false;
    }
  };
  CastlePostAttackHorseDialog.prototype.onClick = function (__s70param0) {
    __s1param0.prototype.onClick.call(this, __s70param0);
    switch (__s70param0.target) {
      case this.dialogDisp.mc_autoskip_options.radio_autoskip_off:
      case this.dialogDisp.mc_autoskip_options.radio_autoskip_minuteskip:
      case this.dialogDisp.mc_autoskip_options.radio_autoskip_c2:
        this.selectAutoskipOption(__s70param0.target.autoSkipCooldownType);
    }
  };
  CastlePostAttackHorseDialog.prototype.startTravelAction = function () {
    if (this._currentAutoSkipCooldownType > __dep_exact_26a421b704832cff.AutoSkipCooldownConst.AUTO_SKIP_TYPE_OFF && __dep_export_CastleModel.CastleModel.subscriptionData.isPackageActive(__dep_export_SubscriptionPackageEnum.SubscriptionPackageEnum.PREMIUM) && this.getTotalTravelTime() > __dep_export_CastleModel.CastleModel.subscriptionData.getActivePackage(__dep_export_SubscriptionPackageEnum.SubscriptionPackageEnum.PREMIUM).getRemainingSeconds()) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_ModernYesNoDialog.ModernYesNoDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardYesNoDialogProperties("generic_alert_watchout", "dialog_travelPlanning_autoCooldownSkip_warning_desc", this.bindFunction(this.startAttack)));
    } else {
      this.startAttack();
    }
  };
  CastlePostAttackHorseDialog.prototype.initCleanState = function () {
    __s1param0.prototype.initCleanState.call(this);
    this.dialogDisp.mc_autoskip_preview.parent.addChild(this.dialogDisp.mc_autoskip_preview);
  };
  CastlePostAttackHorseDialog.prototype.getCharID = function () {
    var __s79local0 = __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getAdvisorTypeByAreaType(this.dialogProperties.attackInfoVO.targetArea.areaType);
    if (this.dialogProperties.attackInfoVO.advisorAttacks > 0) {
      return __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getCharacterByAdvisorType(__s79local0);
    } else {
      return __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_GENERAL;
    }
  };
  CastlePostAttackHorseDialog.NAME = "CastlePostActionHorse_APR25";
  return CastlePostAttackHorseDialog;
}(require("gge-module:export_CastlePostAttackDialog").CastlePostAttackDialog);
exports.CastlePostAttackHorseDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
