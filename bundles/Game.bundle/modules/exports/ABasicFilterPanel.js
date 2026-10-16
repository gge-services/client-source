Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function () {
  function ABasicFilterPanel(__s3param0, __s3param1) {
    this.changed = new __dep_exact_5c7bc328fca9e4de.Signal();
    this._disp = __s3param0;
    this._emptyFilterMC = __s3param1;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this._disp.btn_reset, this._disp.btn_filter], __dep_export_ClickFeedbackButton.ClickFeedbackButton, 1);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this._disp.mc_input.btn_del], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initCheckBoxes([this._disp.cbx_set, this._disp.cbx_favorite]);
    this.cbx_set = __dep_export_ButtonHelper.ButtonHelper.getBasicButton(this._disp.cbx_set);
    this.cbx_favorite = __dep_export_ButtonHelper.ButtonHelper.getBasicButton(this._disp.cbx_favorite);
    this._disp.btn_filter.mc_arrow.gotoAndStop(1);
    this._disp.mc_input.txt_input.type = __dep_exact_81dacdf05bd32292.TextFieldType.INPUT;
    this.textFieldManager.registerTextField(this._disp.btn_reset.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("equipmentFilter_reset")));
    this._disp.btn_filter.toolTipText = "filterPanel_collapse";
    this._disp.btn_reset.toolTipText = "equipmentFilter_reset_tt";
    this._disp.cbx_favorite.toolTipText = "equipmentFilter_favorites";
    this.updateSetButtonToolTip();
  }
  ABasicFilterPanel.prototype.toggleShowHideSetsOption = function (__s5param0, __s5param1) {
    this._disp.icon_set.visible = __s5param0;
    this._disp.cbx_set.visible = __s5param0;
    if (__s5param1 && !__s5param0) {
      this._disp.cbx_favorite.x -= this._disp.cbx_favorite.width / 4;
      this._disp.icon_favorite.x -= this._disp.icon_favorite.width / 4;
    }
  };
  ABasicFilterPanel.prototype.updateSetButtonToolTip = function () {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._selectedLord, "CommanderVO")) {
      this._disp.cbx_set.toolTipText = "equipmentFilter_setPieces_" + this.setButtonWordID() + "_com_tt";
    }
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._selectedLord, "BaronVO")) {
      this._disp.cbx_set.toolTipText = "equipmentFilter_setPieces_" + this.setButtonWordID() + "_cast_tt";
    }
  };
  ABasicFilterPanel.prototype.setButtonWordID = function () {
    return "";
  };
  ABasicFilterPanel.prototype.showEmptyFilterMC = function () {
    this._emptyFilterMC.visible = true;
    this.textFieldManager.registerTextField(this._emptyFilterMC.txt_none, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("equipmentFilter_empty")));
  };
  ABasicFilterPanel.prototype.hideEmptyFilterMC = function () {
    this._emptyFilterMC.visible = false;
  };
  ABasicFilterPanel.prototype.onClick = function (__s18param0) {
    switch (__s18param0.target) {
      case this._disp.cbx_set:
        this.toggleCheckbox(this.cbx_set);
        this._disp.mc_blockInput.visible = this.cbx_set.isSelected;
        break;
      case this._disp.cbx_favorite:
        this.toggleCheckbox(this.cbx_favorite);
        break;
      case this._disp.btn_filter:
        this.hide();
        break;
      case this._disp.btn_reset:
        this.reset(true);
        break;
      case this._disp.mc_input.btn_del:
        this.resetInputTextField();
        this.changed.dispatch();
    }
  };
  ABasicFilterPanel.prototype.onTyping = function (__s21param0) {
    this.changed.dispatch();
  };
  ABasicFilterPanel.prototype.onFocusIn = function (__s23param0) {
    if (__s23param0 == this.tf_input && this.tf_input.text == this.defaultSearchString) {
      this.tf_input.textContentVO.stringValue = "";
    }
    var __s23local0 = __s23param0.originalTextField.parent.mc_selected;
    var __s23local1 = __s23param0.originalTextField.parent.btn_del;
    var __s23local2 = __s23param0.originalTextField.parent.mc_input;
    if (__s23local0) {
      __s23local0.visible = true;
    }
    if (__s23local1) {
      __s23local1.visible = true;
      if (__s23local2) {
        __s23local2.visible = !__s23local1.visible;
      }
    }
  };
  ABasicFilterPanel.prototype.onFocusOut = function (__s29param0) {
    if (__s29param0 == this.tf_input && (this.searchString == "" || this.searchString == this.defaultSearchString)) {
      this.resetInputTextField();
    }
    var __s29local0 = __s29param0.originalTextField.parent.mc_selected;
    if (__s29local0) {
      __s29local0.visible = false;
    }
  };
  ABasicFilterPanel.prototype.show = function () {
    this._disp.visible = true;
    this.tf_input.keyUp.add(this.bindFunction(this.onTyping));
    this.tf_input.focusIn.add(this.bindFunction(this.onFocusIn));
    this.tf_input.focusOut.add(this.bindFunction(this.onFocusOut));
    this.changed.dispatch();
  };
  ABasicFilterPanel.prototype.hide = function () {
    this._disp.visible = false;
    this.tf_input.keyUp.remove(this.bindFunction(this.onTyping));
    this.tf_input.focusIn.remove(this.bindFunction(this.onFocusIn));
    this.tf_input.focusOut.remove(this.bindFunction(this.onFocusOut));
  };
  ABasicFilterPanel.prototype.toggleCheckbox = function (__s37param0) {
    __s37param0.toggleSelected();
    this.changed.dispatch();
  };
  ABasicFilterPanel.prototype.reset = function (__s39param0 = false) {
    this.cbx_set.deselected();
    this.cbx_favorite.deselected();
    this._disp.mc_blockInput.visible = false;
    this.resetInputTextField();
    if (__s39param0) {
      this.changed.dispatch();
    }
  };
  ABasicFilterPanel.prototype.resetInputTextField = function () {
    this.tf_input ||= this.textFieldManager.registerTextField(this._disp.mc_input.txt_input, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.tf_input.textContentVO.stringValue = this.defaultSearchString;
    this._disp.mc_input.mc_selected.visible = false;
    this._disp.mc_input.mc_input.visible = true;
    this._disp.mc_input.btn_del.visible = false;
  };
  Object.defineProperty(ABasicFilterPanel.prototype, "searchString", {
    get: function () {
      if (this.tf_input.text == this.defaultSearchString) {
        return "";
      } else {
        return this.tf_input.text;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicFilterPanel.prototype, "defaultSearchString", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30_1.Localize.text("generic_btn_search");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicFilterPanel.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicFilterPanel.prototype, "selectedLord", {
    set: function (__s52param0) {
      this._selectedLord = __s52param0;
      this.updateSetButtonToolTip();
    },
    enumerable: true,
    configurable: true
  });
  return ABasicFilterPanel;
}();
exports.ABasicFilterPanel = __s0local0;
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
