Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_BasicEquippableVO = require("gge-module:export_BasicEquippableVO");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function GemFilterPanel(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this;
    __dep_export_ButtonHelper.ButtonHelper.initCheckBoxes([__s3local0._disp.cbx_unique, __s3local0._disp.cbx_relic]);
    __s3local0.cbx_unique = __dep_export_ButtonHelper.ButtonHelper.getBasicButton(__s3local0._disp.cbx_unique);
    __s3local0.cbx_relic = __dep_export_ButtonHelper.ButtonHelper.getBasicButton(__s3local0._disp.cbx_relic);
    __s3local0._disp.cbx_relic.toolTipText = "equipment_rarity_relic";
    __s3local0._disp.cbx_unique.toolTipText = "equipment_rarity_unique";
    __s3local0.reset();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GemFilterPanel, __s1param0);
  GemFilterPanel.prototype.setButtonWordID = function () {
    return "gem";
  };
  GemFilterPanel.prototype.resetInputTextFields = function () {
    if (!this.tf_input_min) {
      this.tf_input_min = this.textFieldManager.registerTextField(this._disp.mc_min.txt_input, new __dep_exact_92d05af59ee2ff30.TextVO("0"));
      this.tf_input_min.restrict = "0-9";
      this._disp.mc_min.txt_input.type = __dep_exact_81dacdf05bd32292.TextFieldType.INPUT;
    }
    if (!this.tf_input_max) {
      this.tf_input_max = this.textFieldManager.registerTextField(this._disp.mc_max.txt_input, new __dep_exact_92d05af59ee2ff30.TextVO("13"));
      this.tf_input_max.restrict = "0-9";
      this._disp.mc_max.txt_input.type = __dep_exact_81dacdf05bd32292.TextFieldType.INPUT;
    }
    this.tf_input_min.textContentVO.stringValue = "0";
    this.tf_input_max.textContentVO.stringValue = "13";
    this._disp.mc_min.mc_selected.visible = false;
    this._disp.mc_max.mc_selected.visible = false;
  };
  GemFilterPanel.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.tf_input_min.keyUp.add(this.bindFunction(this.onTypingLevel));
    this.tf_input_min.focusOut.add(this.bindFunction(this.onFocusOutLevel));
    this.tf_input_min.focusIn.add(this.bindFunction(this.onFocusIn));
    this.tf_input_min.focusOut.add(this.bindFunction(this.onFocusOut));
    this.tf_input_max.keyUp.add(this.bindFunction(this.onTypingLevel));
    this.tf_input_max.focusOut.add(this.bindFunction(this.onFocusOutLevel));
    this.tf_input_max.focusIn.add(this.bindFunction(this.onFocusIn));
    this.tf_input_max.focusOut.add(this.bindFunction(this.onFocusOut));
  };
  GemFilterPanel.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.tf_input_min.keyUp.remove(this.bindFunction(this.onTypingLevel));
    this.tf_input_min.focusOut.remove(this.bindFunction(this.onFocusOutLevel));
    this.tf_input_min.focusIn.remove(this.bindFunction(this.onFocusIn));
    this.tf_input_min.focusOut.remove(this.bindFunction(this.onFocusOut));
    this.tf_input_max.keyUp.remove(this.bindFunction(this.onTypingLevel));
    this.tf_input_max.focusOut.remove(this.bindFunction(this.onFocusOutLevel));
    this.tf_input_max.focusIn.remove(this.bindFunction(this.onFocusIn));
    this.tf_input_max.focusOut.remove(this.bindFunction(this.onFocusOut));
  };
  GemFilterPanel.prototype.checkLevelInput = function () {
    var __s15local0 = Math.min(13, Math.max(parseInt(this.tf_input_min.text), 0));
    this.tf_input_min.textContentVO.stringValue = __s15local0.toString();
    __s15local0 = Math.min(13, Math.max(parseInt(this.tf_input_max.text), 0));
    this.tf_input_max.textContentVO.stringValue = __s15local0.toString();
    this.changed.dispatch();
  };
  GemFilterPanel.prototype.onTypingLevel = function () {
    var __s17local0 = [];
    for (var __s17local1 = 0; __s17local1 < arguments.length; __s17local1++) {
      __s17local0[__s17local1] = arguments[__s17local1];
    }
    this.checkLevelInput();
  };
  GemFilterPanel.prototype.onFocusOutLevel = function () {
    var __s21local0 = [];
    for (var __s21local1 = 0; __s21local1 < arguments.length; __s21local1++) {
      __s21local0[__s21local1] = arguments[__s21local1];
    }
    this.checkLevelInput();
  };
  GemFilterPanel.prototype.filter = function (__s25param0) {
    var __s25local0 = [];
    for (var __s25local1 = 0; __s25local1 < __s25param0.length; __s25local1++) {
      if (__s25param0[__s25local1] && (!this.cbx_favorite.isSelected || this.checkForFavorite(__s25param0[__s25local1]))) {
        if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s25param0[__s25local1], "RelicGemVO")) {
          var __s25local2 = __s25param0[__s25local1];
          if (__s25local2.lordType == __dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_BARON && !__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._selectedLord, "BaronVO") || __s25local2.lordType != __dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_BARON && __dep_exact_81dacdf05bd32292_1.instanceOfClass(this._selectedLord, "BaronVO")) {
            continue;
          }
        }
        if (this.cbx_set.isSelected) {
          if (!this.checkForSetID(__s25param0[__s25local1], this._selectedLord)) {
            continue;
          }
        } else {
          if (!this.eqFitsRareness(__s25param0[__s25local1])) {
            continue;
          }
          if (this.searchString != "" && !this.searchForNameString(__s25param0[__s25local1])) {
            continue;
          }
        }
        __s25local0.push(__s25param0[__s25local1]);
      }
    }
    return __s25local0;
  };
  GemFilterPanel.prototype.eqFitsRareness = function (__s37param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s37param0, "RelicGemVO")) {
      return this.cbx_relic.isSelected;
    }
    var __s37local0 = __s37param0;
    if (__s37local0.isUnique) {
      return this.cbx_unique.isSelected;
    } else {
      return parseInt(this.tf_input_max.text) >= parseInt(this.tf_input_min.text) && __s37local0.level <= parseInt(this.tf_input_max.text) && __s37local0.level >= parseInt(this.tf_input_min.text) || parseInt(this.tf_input_max.text) < parseInt(this.tf_input_min.text) && __s37local0.level <= parseInt(this.tf_input_max.text);
    }
  };
  GemFilterPanel.prototype.searchForNameString = function (__s42param0) {
    if (__s42param0.nameString.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1) {
      return true;
    }
    if (__s42param0.extraText.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1) {
      return true;
    }
    if (__s42param0.typeDescriptionText.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1) {
      return true;
    }
    if (__s42param0.bonusDescriptionText.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1) {
      return true;
    }
    if (__s42param0.setVO) {
      if (__s42param0.setVO.name.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1) {
        return true;
      }
      if (__s42param0.setVO.getSetBonusText().toLowerCase().indexOf(this.searchString.toLowerCase()) > -1) {
        return true;
      }
    }
    return false;
  };
  GemFilterPanel.prototype.checkForFavorite = function (__s51param0) {
    return !!__s51param0.isFavoriteSaved;
  };
  GemFilterPanel.prototype.checkForSetID = function (__s53param0, __s53param1) {
    if (!this._selectedLord) {
      return false;
    }
    var __s53local0 = __s53param0.setID;
    var __s53local1 = 0;
    var __s53local2 = 0;
    for (var __s53local3 in __s53param1.equipmentSlots) {
      var __s53local4 = __s53param1.equipmentSlots[__s53local3];
      if (__s53local4 !== undefined && __s53local4.equipmentVO) {
        __s53local1 = __dep_exact_f855840627e6e145.int(__s53local4.equipmentVO.setID);
        __s53local2 = __dep_exact_f855840627e6e145.int(__s53local4.equipmentVO.gemVO ? __s53local4.equipmentVO.gemVO.setID : -1);
        if (__s53local0 > 0 && __s53local0 == __s53local1) {
          return true;
        }
        if (__s53local0 > 0 && __s53local0 == __s53local2) {
          return true;
        }
      }
    }
    return false;
  };
  GemFilterPanel.prototype.onClick = function (__s61param0) {
    __s1param0.prototype.onClick.call(this, __s61param0);
    switch (__s61param0.target) {
      case this._disp.cbx_unique:
        this.toggleCheckbox(this.cbx_unique);
        break;
      case this._disp.cbx_relic:
        this.toggleCheckbox(this.cbx_relic);
    }
  };
  GemFilterPanel.prototype.reset = function (__s64param0 = false) {
    __s1param0.prototype.reset.call(this, __s64param0);
    this.cbx_unique.selected();
    this.cbx_relic.selected();
    this.resetInputTextFields();
    if (__s64param0) {
      this.changed.dispatch();
    }
  };
  return GemFilterPanel;
}(require("gge-module:export_ABasicFilterPanel").ABasicFilterPanel);
exports.GemFilterPanel = __s0local0;
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
