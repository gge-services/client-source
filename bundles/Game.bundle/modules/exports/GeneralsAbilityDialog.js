Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SGeneralSelectAbilities = require("gge-module:export_C2SGeneralSelectAbilities");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_GeneralsHelper = require("gge-module:export_GeneralsHelper");
var __s0local0 = function (__s1param0) {
  function GeneralsAbilityDialog() {
    var __s3local0 = __s1param0.call(this, GeneralsAbilityDialog.NAME) || this;
    __s3local0.NUM_SLOTS = 5;
    __s3local0.NUM_ITEMS_FOR_SLOT = 3;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralsAbilityDialog, __s1param0);
  GeneralsAbilityDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_reset.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("reset")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_save.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("save")));
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_reset, this.dialogDisp.btn_save, this.dialogDisp.mc_slot0, this.dialogDisp.mc_slot1, this.dialogDisp.mc_slot2, this.dialogDisp.mc_slot3, this.dialogDisp.mc_slot4, this.dialogDisp.mc_item0, this.dialogDisp.mc_item1, this.dialogDisp.mc_item2], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    this.dialogDisp.btn_help.toolTipText = "help";
    this.dialogDisp.btn_close.toolTipText = "generic_btn_close";
  };
  GeneralsAbilityDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.selectedAbilities = new Map();
    this.onReset();
    for (var __s7local0 = 0; __s7local0 < this.dialogProperties.generalVO.selectedAbilities.length; __s7local0++) {
      this.selectedAbilities.set(this.dialogProperties.generalVO.selectedAbilities[__s7local0][0], __dep_export_CastleModel.CastleModel.generalsData.getAbilityByID(this.dialogProperties.generalVO.selectedAbilities[__s7local0][1]).abilityGroupID);
    }
    this.updateSlots();
    this.selectSlot(this.dialogDisp.mc_slot0);
    if (this.dialogProperties.isAttack) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_overview_generalAbilities_attack_header")));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_overview_generalAbilities_defense_header")));
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_save, false);
  };
  GeneralsAbilityDialog.prototype.updateSlots = function () {
    for (var __s13local0 = 0; __s13local0 < this.NUM_SLOTS; __s13local0++) {
      var __s13local1 = this.getGeneralSlot(__s13local0);
      var __s13local2 = __s13local1 ? this.selectedAbilities.get(__s13local1.slotID) : -1;
      var __s13local3 = this.isSlotLocked(__s13local0);
      this.fillSlot(this.dialogDisp["mc_slot" + __s13local0], __s13local1, __s13local0);
      this.dialogDisp["mc_slot" + __s13local0].mc_locked.visible = __s13local3;
      this.dialogDisp["mc_slot" + __s13local0].toolTipText = __s13local3 ? "dialog_generals_abilityDialog_slotLocked" : __s13local2 <= 0 ? "dialog_generals_abilityDialog_noAbilityselected" : __dep_export_GeneralsHelper.GeneralsHelper.getLocalizedTitleForAbility(__s13local2) + "\n" + __dep_export_GeneralsHelper.GeneralsHelper.getLocalizedCopyForAbility(this.getHighestAvailableAbilityForGroup(__s13local2).abilityID, this.dialogProperties.isAttack);
    }
  };
  GeneralsAbilityDialog.prototype.fillSlot = function (__s17param0, __s17param1, __s17param2) {
    if (__s17param1) {
      __s17param0.visible = true;
      __s17param0.slotVO = __s17param1;
      __s17param0.slotIndex = __s17param2;
      var __s17local0 = this.getHighestAvailableAbilityForGroup(this.selectedAbilities.get(__s17param1.slotID));
      this.fillItemInfo(__s17param0, __s17local0 ? __s17local0.abilityGroupID : -1, __s17local0 ? __s17local0.level : -1, !this.isSlotLocked(__s17param2));
    } else {
      __s17param0.visible = false;
    }
  };
  GeneralsAbilityDialog.prototype.fillItemInfo = function (__s21param0, __s21param1, __s21param2, __s21param3) {
    __s21param0.mc_number.visible = __s21param1 > 0 && this.getHighestAvailableAbilityForGroup(__s21param1) || !__s21param3;
    __s21param0.mc_locked.visible = !__s21param3;
    __s21param0.mc_number.mc_locked.visible = !__s21param3 || !this.getHighestAvailableAbilityForGroup(__s21param1);
    this.textFieldManager.registerTextField(__s21param0.mc_number.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s21param2)).visible = !__s21param0.mc_number.mc_locked.visible;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s21param0.mc_icon);
    if (__s21param1 > 0) {
      var __s21local0 = this.getHighestAvailableAbilityForGroup(__s21param1) ? this.getHighestAvailableAbilityForGroup(__s21param1).abilityID : -1;
      __s21param0.mc_icon.addChild(__dep_export_GeneralsHelper.GeneralsHelper.getGeneralAbilityClip(__s21param1, 64, __s21local0, this.dialogProperties.isAttack));
    }
  };
  GeneralsAbilityDialog.prototype.fillAbilitiesForSlot = function (__s24param0, __s24param1) {
    var __s24local0 = this.isSlotLocked(__s24param1);
    for (var __s24local1 = 0; __s24local1 < this.NUM_ITEMS_FOR_SLOT; __s24local1++) {
      this.fillAbilityItem(this.dialogDisp["mc_item" + __s24local1], __s24param0.abilityGroupIDs[__s24local1], __s24param0.slotID, __s24local1, __s24local0);
    }
    this.dialogDisp.mc_locked_all.visible = __s24local0;
    this.dialogDisp.mc_locked_all.mouseEnabled = false;
  };
  GeneralsAbilityDialog.prototype.fillAbilityItem = function (__s28param0, __s28param1, __s28param2, __s28param3, __s28param4) {
    if (!__s28param1 || __s28param1 <= 0) {
      __s28param0.visible = false;
    } else {
      __s28param0.visible = true;
      __s28param0.mouseChildren = false;
      __s28param0.groupID = __s28param1;
      __s28param0.slotID = __s28param2;
      var __s28local0 = this.getHighestAvailableAbilityForGroup(__s28param1);
      __s28local0 ||= __dep_export_CastleModel.CastleModel.generalsData.getAbilityGroupByID(__s28param1)[0];
      var __s28local1 = !__dep_export_CastleModel.CastleModel.generalsData.isGeneralAbilityUnlocked(__s28local0.abilityID, this.dialogProperties.generalVO.generalID);
      __s28param0.mc_locked.visible = __s28local1 && !__s28param4;
      __s28param0.lockedToolTip = __s28local1;
      __s28param0.mc_selected.visible = this.selectedAbilities.get(__s28param2) == __s28param1;
      this.updateAbilityItemToolTip(__s28param0);
      var __s28local2 = __s28local0 ? __s28local0.level : 1;
      this.textFieldManager.registerTextField(__s28param0.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_generals_abilityDialog_AbilityName", [__s28param3 + 1, __dep_export_GeneralsHelper.GeneralsHelper.getLocalizedTitleForAbility(__s28local0.abilityGroupID)])));
      this.textFieldManager.registerTextField(__s28param0.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_GeneralsHelper.GeneralsHelper.getLocalizedCopyForAbility(__s28local0.abilityID, this.dialogProperties.isAttack))).autoFitToBounds = true;
      this.fillItemInfo(__s28param0.mc_item, __s28param1, __s28local2, !__s28param0.mc_locked.visible && !__s28param4);
      __s28param0.mc_item.mc_selected.visible = false;
      __s28param0.mc_baron.visible = !this.dialogProperties.isAttack;
      __s28param0.mc_commander.visible = this.dialogProperties.isAttack;
      if (__s28param0.mc_locked.visible || __s28param4) {
        __s28param0.basicButton.removeMouseEventListener();
      } else {
        __s28param0.basicButton.addMouseEventListener();
      }
    }
  };
  GeneralsAbilityDialog.prototype.updateAbilityItemToolTip = function (__s34param0) {
    var __s34local0 = "dialog_generals_overview_generalAbilities_selectAbility_tooltip";
    if (__s34param0.lockedToolTip) {
      __s34local0 = "dialog_generals_overview_generalAbilities_lockedAbility_tooltip";
    }
    if (__s34param0.mc_selected.visible) {
      __s34local0 = "dialog_generals_overview_generalAbilities_selectedAbility_tooltip";
    }
    __s34param0.toolTipText = {
      t: __s34local0,
      ox: -198
    };
  };
  GeneralsAbilityDialog.prototype.hideLoaded = function (__s38param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s38param0);
  };
  GeneralsAbilityDialog.prototype.onClick = function (__s40param0) {
    __s1param0.prototype.onClick.call(this, __s40param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s40param0.target)) {
      switch (__s40param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_generals_abilityDialog"));
          break;
        case this.dialogDisp.btn_reset:
          this.onReset();
          break;
        case this.dialogDisp.btn_save:
          __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_save, false);
          this.onSave();
      }
      if (__s40param0.target.slotVO) {
        this.selectSlot(__s40param0.target);
      }
      if (__s40param0.target.groupID && __s40param0.target.groupID > 0) {
        this.selectAbilityMC(__s40param0.target);
      }
    }
  };
  GeneralsAbilityDialog.prototype.selectSlot = function (__s46param0) {
    this.selectedSlot = __s46param0;
    for (var __s46local0 = 0; __s46local0 < this.NUM_SLOTS; __s46local0++) {
      this.dialogDisp["mc_slot" + __s46local0].mc_selected.visible = this.dialogDisp["mc_slot" + __s46local0] == __s46param0;
    }
    this.fillAbilitiesForSlot(__s46param0.slotVO, __s46param0.slotIndex);
  };
  GeneralsAbilityDialog.prototype.selectAbilityMC = function (__s50param0) {
    var __s50local0 = __s50param0.groupID;
    if (this.getHighestAvailableAbilityForGroup(__s50local0)) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_save, true);
      this.selectedAbilities.set(__s50param0.slotID, __s50local0);
      for (var __s50local1 = 0; __s50local1 < this.NUM_ITEMS_FOR_SLOT; __s50local1++) {
        this.dialogDisp["mc_item" + __s50local1].mc_selected.visible = this.dialogDisp["mc_item" + __s50local1].groupID == __s50param0.groupID;
        this.updateAbilityItemToolTip(this.dialogDisp["mc_item" + __s50local1]);
      }
      this.updateSlots();
    }
  };
  GeneralsAbilityDialog.prototype.onSave = function () {
    var __s55local0 = [];
    for (var __s55local1 = 0, __s55local2 = Array.from(this.selectedAbilities.keys()); __s55local1 < __s55local2.length; __s55local1++) {
      var __s55local3 = __s55local2[__s55local1];
      __s55local0.push([__s55local3, this.selectedAbilities.get(__s55local3) > 0 ? this.getHighestAvailableAbilityForGroup(this.selectedAbilities.get(__s55local3)).abilityID : -1]);
    }
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGeneralSelectAbilities.C2SGeneralSelectAbilities(__s55local0, this.dialogProperties.generalVO.generalID));
  };
  GeneralsAbilityDialog.prototype.onReset = function () {
    for (var __s59local0 = 0; __s59local0 < this.NUM_SLOTS; __s59local0++) {
      if (this.getGeneralSlot(__s59local0)) {
        this.selectedAbilities.set(this.getGeneralSlot(__s59local0).slotID, -1);
      }
    }
    this.updateSlots();
    if (this.selectedSlot) {
      this.fillAbilitiesForSlot(this.selectedSlot.slotVO, this.selectedSlot.slotIndex);
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_save, true);
  };
  GeneralsAbilityDialog.prototype.getHighestAvailableAbilityForGroup = function (__s65param0) {
    if (__s65param0 <= 0) {
      return null;
    }
    var __s65local0 = __dep_export_CastleModel.CastleModel.generalsData.getAbilityGroupByID(__s65param0);
    var __s65local1 = null;
    if (!__s65local0) {
      return null;
    }
    for (var __s65local2 = 0; __s65local2 < __s65local0.length; __s65local2++) {
      if (__dep_export_CastleModel.CastleModel.generalsData.isGeneralAbilityUnlocked(__s65local0[__s65local2].abilityID, this.dialogProperties.generalVO.generalID) && (!__s65local1 || __s65local1 && __s65local0[__s65local2].level > __s65local1.level)) {
        __s65local1 = __s65local0[__s65local2];
      }
    }
    return __s65local1;
  };
  GeneralsAbilityDialog.prototype.getGeneralSlot = function (__s72param0) {
    var __s72local0;
    if (__s72param0 >= (__s72local0 = this.dialogProperties.isAttack ? this.dialogProperties.generalVO.generalXmlVO.attackSlotXMLVOs : this.dialogProperties.generalVO.generalXmlVO.defenceSlotXMLVOs).length) {
      return null;
    } else {
      return __s72local0[__s72param0];
    }
  };
  GeneralsAbilityDialog.prototype.isSlotLocked = function (__s76param0) {
    var __s76local0 = false;
    for (var __s76local1 = 0; __s76local1 < this.NUM_ITEMS_FOR_SLOT; __s76local1++) {
      var __s76local2 = this.getGeneralSlot(__s76param0);
      var __s76local3 = __s76local2 ? this.getGeneralSlot(__s76param0).abilityGroupIDs[__s76local1] : null;
      var __s76local4 = __s76local3 && __s76local2 ? this.getHighestAvailableAbilityForGroup(__s76local3) : null;
      __s76local0 = __s76local0 || __s76local3 > 0 && !!__s76local4;
    }
    return !__s76local0;
  };
  Object.defineProperty(GeneralsAbilityDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsAbilityDialog.NAME = "GeneralsAbilities2";
  return GeneralsAbilityDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.GeneralsAbilityDialog = __s0local0;
