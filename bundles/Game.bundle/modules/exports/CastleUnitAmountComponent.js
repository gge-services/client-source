Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_BasicPickerEvent = require("gge-module:export_BasicPickerEvent");
var __dep_export_SliderEvent = require("gge-module:export_SliderEvent");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_AttackDialogTrackingHelper = require("gge-module:export_AttackDialogTrackingHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_UnitPicker = require("gge-module:export_UnitPicker");
var __dep_export_BasicSliderVO = require("gge-module:export_BasicSliderVO");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CastleUnitAmountComponent() {
    var __s3local0 = this;
    __s3local0._numberOfItems = 1;
    __s3local0._minAmount = 1;
    __s3local0._maxChars = 5;
    __s3local0._textfieldFocused = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleUnitAmountComponent, __s1param0);
  CastleUnitAmountComponent.prototype.init = function (__s5param0, __s5param1, __s5param2 = null) {
    this._unitPickerMc = __s5param1;
    this._buttonMaxMc = __s5param2;
    this._sliderData = new __dep_export_BasicSliderVO.BasicSliderVO(__s5param0.sliderBar, __s5param0.btn_slider, 1, 1, __s5param0);
    this._sliderComponent = new __dep_export_ScrollComponent.ScrollComponent(this._sliderData, __dep_export_ScrollComponent.ScrollComponent.HORIZONTAL_SLIDER);
    this._sliderComponent.addEventListener(__dep_export_SliderEvent.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderValueChange));
    this._pickerComponent = new __dep_export_UnitPicker.UnitPicker(__s5param1);
    this._pickerComponent.disp.addEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onPickerValueChange));
    this._pickerComponent.itxt_pick.focusIn.add(this.bindFunction(this.onPickerFocusIn));
    this._pickerComponent.itxt_pick.focusOut.add(this.bindFunction(this.onPickerFocusOut));
    this._pickerComponent.itxt_pick.click.add(this.bindFunction(this.onClickInPicker));
    this._pickerComponent.itxt_pick.keyDown.add(this.bindFunction(this.onPickerKeyDown));
    this._pickerComponent.itxt_pick.change.add(this.bindFunction(this.onPickerTextChanged));
    if (this._buttonMaxMc) {
      this._buttonMaxMc.addEventListener(__s0local0.CLICK, this.bindFunction(this.onMaxButtonClick));
    }
    if (this._unitPickerMc) {
      this._unitPickerMc.addEventListener(__s0local0.CLICK, this.bindFunction(this.onUnitPickerClick));
    }
    if (this._unitPickerMc.mc_selected) {
      this._unitPickerMc.mc_selected.visible = false;
    }
    if (this._unitPickerMc.bg) {
      this._unitPickerMc.bg.mouseChildren = false;
    }
  };
  CastleUnitAmountComponent.prototype.registerOnReturnKeyPressed = function (__s11param0) {
    this._onReturnKeyPressed = __s11param0;
  };
  CastleUnitAmountComponent.prototype.setNumberOfItems = function (__s13param0) {
    this._numberOfItems = __dep_exact_f855840627e6e145.int(Math.max(this.minAmount, __s13param0));
    this._pickerComponent.setNumItems(this._numberOfItems + (1 - this.minAmount));
    this._sliderData.maxValue = this._numberOfItems;
    this.setPickText(this.minAmount);
  };
  CastleUnitAmountComponent.prototype.setMaxNumberOfItems = function (__s15param0) {
    var __s15local0 = this.getSelectedAmount();
    this.setNumberOfItems(__s15param0);
    this.setSelectedAmount(__s15local0);
  };
  CastleUnitAmountComponent.prototype.setSelectedAmount = function (__s17param0) {
    if (__s17param0 < this._minAmount) {
      __s17param0 = this._minAmount;
    } else if (__s17param0 > this._numberOfItems) {
      __s17param0 = this._numberOfItems;
    }
    this.setPickText(__s17param0);
  };
  CastleUnitAmountComponent.prototype.getSelectedAmount = function () {
    return __dep_exact_f855840627e6e145.int(this._pickerComponent.selectedValue + this.minAmount);
  };
  CastleUnitAmountComponent.prototype.selectTextfield = function () {
    if (!CastleUnitAmountComponent.isLimitedByTutorial && !__dep_exact_81dacdf05bd32292.currentBrowserInfo.isMobile) {
      this._pickerComponent.itxt_pick.setFocus();
      this._pickerComponent.itxt_pick.setSelection(0, this._pickerComponent.itxt_pick.text.length);
    }
  };
  CastleUnitAmountComponent.prototype.validatePickCount = function (__s26param0 = false) {
    var __s26local0 = this.getNumberFromPicker();
    if (__s26local0 > this._pickerComponent.numItems - 1 + this._pickerComponent.minAmount) {
      this.setPickText(this._pickerComponent.numItems - 1 + this._pickerComponent.minAmount);
    } else if (!__s26param0 && __s26local0 < this._minAmount) {
      this.setPickText(this._minAmount);
    } else {
      this.setPickText(__s26local0);
    }
  };
  CastleUnitAmountComponent.prototype.setPickText = function (__s31param0) {
    this._pickerComponent.setValue(__s31param0);
    this._sliderComponent.setSelectedIndex(__s31param0 - this.minAmount);
  };
  CastleUnitAmountComponent.prototype.getNumberFromPicker = function () {
    return __dep_exact_f855840627e6e145.int(this._pickerComponent.itxt_pick.text.replace(new RegExp(/[.,\s]/), ""));
  };
  CastleUnitAmountComponent.prototype.syncSliderFromPicker = function () {
    this._sliderComponent.setSelectedIndex(this._pickerComponent.selectedValue);
    this.dispatchEvent(new __dep_export_BasicPickerEvent.BasicPickerEvent(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE));
  };
  CastleUnitAmountComponent.prototype.syncPickerFromSlider = function () {
    if (!this._textfieldFocused) {
      this._pickerComponent.selectedValue = this._sliderComponent.selectedIndex;
    }
    this.dispatchEvent(new __dep_export_BasicPickerEvent.BasicPickerEvent(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE));
  };
  CastleUnitAmountComponent.prototype.enableComponent = function (__s40param0) {
    this.enableSliderComponent(__s40param0);
    this.enablePickerComponent(__s40param0);
    if (this.buttonMaxMc) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.buttonMaxMc, __s40param0);
    }
    this.updateMouseFocusForPickerComponent(__s40param0);
  };
  CastleUnitAmountComponent.prototype.enableSliderComponent = function (__s43param0) {
    this._sliderComponent.enableComponent = __s43param0;
  };
  CastleUnitAmountComponent.prototype.enablePickerComponent = function (__s45param0) {
    this._pickerComponent.enabled = __s45param0;
  };
  CastleUnitAmountComponent.prototype.destroy = function () {
    this._sliderComponent.dispose();
    this._sliderComponent.removeEventListener(__dep_export_SliderEvent.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderValueChange));
    if (this._pickerComponent.itxt_pick) {
      this._pickerComponent.itxt_pick.focusIn.remove(this.bindFunction(this.onPickerFocusIn));
      this._pickerComponent.itxt_pick.focusOut.remove(this.bindFunction(this.onPickerFocusOut));
      this._pickerComponent.itxt_pick.click.remove(this.bindFunction(this.onClickInPicker));
      this._pickerComponent.itxt_pick.keyDown.remove(this.bindFunction(this.onPickerKeyDown));
      this._pickerComponent.itxt_pick.change.remove(this.bindFunction(this.onPickerTextChanged));
    }
    this._pickerComponent.dispose();
    if (this._pickerComponent.disp) {
      this._pickerComponent.disp.removeEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onPickerValueChange));
    }
    if (this._buttonMaxMc) {
      this._buttonMaxMc.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onMaxButtonClick));
    }
    if (this._unitPickerMc) {
      this._unitPickerMc.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onUnitPickerClick));
    }
  };
  CastleUnitAmountComponent.prototype.onMaxButtonClick = function (__s53param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s53param0.target)) {
      switch (__s53param0.target) {
        case this._buttonMaxMc:
          this._pickerComponent.selectMaxValue();
          __dep_export_AttackDialogTrackingHelper.AttackDialogTrackingHelper.getInstance().trackDetailCounter(__dep_export_AttackDialogTrackingHelper.AttackDialogTrackingHelper.TRACK_MANUAL_CLICK);
      }
    }
  };
  CastleUnitAmountComponent.prototype.onUnitPickerClick = function (__s57param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s57param0.target)) {
      switch (__s57param0.target) {
        case this._unitPickerMc.bg:
          this._pickerComponent.itxt_pick.setFocus();
      }
    }
  };
  CastleUnitAmountComponent.prototype.onClickInPicker = function (__s61param0) {
    if (this._pickerComponent.itxt_pick.text != "") {
      this.validatePickCount();
    }
    if (!CastleUnitAmountComponent.isLimitedByTutorial) {
      this._pickerComponent.itxt_pick.setSelection(0, this._pickerComponent.itxt_pick.text.length);
    }
    this._pickerComponent.itxt_pick.restrict = "0-9";
    this._pickerComponent.itxt_pick.maxChars = this._maxChars;
    __dep_export_AttackDialogTrackingHelper.AttackDialogTrackingHelper.getInstance().trackDetailCounter(__dep_export_AttackDialogTrackingHelper.AttackDialogTrackingHelper.TRACK_MANUAL_CLICK);
  };
  CastleUnitAmountComponent.prototype.onPickerTextChanged = function (__s65param0) {
    if (this._pickerComponent.itxt_pick.text != "") {
      this.validatePickCount(true);
      this._sliderComponent.setSelectedIndex(this.getNumberFromPicker() - this.minAmount);
    } else {
      this._sliderComponent.setSelectedIndex(0);
    }
  };
  CastleUnitAmountComponent.prototype.onPickerKeyDown = function (__s69param0) {
    __s69param0.stopPropagation();
    if (__s69param0.key == __dep_exact_81dacdf05bd32292.Keyboard.ENTER) {
      document.activeElement.blur();
      if (!CastleUnitAmountComponent.isLimitedByTutorial && this._onReturnKeyPressed != null) {
        this._onReturnKeyPressed();
      }
    }
  };
  CastleUnitAmountComponent.prototype.onPickerFocusIn = function (__s73param0) {
    this.setPickText(this.getNumberFromPicker());
    this._pickerComponent.itxt_pick.restrict = "0-9";
    this._pickerComponent.itxt_pick.maxChars = this._maxChars;
    if (!CastleUnitAmountComponent.isLimitedByTutorial) {
      this._pickerComponent.itxt_pick.setSelection(0, this._pickerComponent.itxt_pick.text.length);
    }
    if (this._unitPickerMc.mc_selected) {
      this._unitPickerMc.mc_selected.visible = true;
    }
    this._textfieldFocused = true;
  };
  CastleUnitAmountComponent.prototype.onPickerFocusOut = function (__s77param0) {
    if (__s77param0) {
      this._textfieldFocused = false;
      this.validatePickCount();
      this._pickerComponent.selectedValue = this.getNumberFromPicker() - this.minAmount;
      this.onChangeUnitAmount();
      if (this._unitPickerMc.mc_selected) {
        this._unitPickerMc.mc_selected.visible = false;
      }
    }
  };
  CastleUnitAmountComponent.prototype.onChangeUnitAmount = function (__s81param0 = null) {
    this.syncSliderFromPicker();
    this.setPickText(this.getSelectedAmount());
  };
  CastleUnitAmountComponent.prototype.onPickerValueChange = function (__s83param0) {
    this._sliderComponent.removeEventListener(__dep_export_SliderEvent.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderValueChange));
    this.syncSliderFromPicker();
    this._sliderComponent.addEventListener(__dep_export_SliderEvent.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderValueChange));
  };
  CastleUnitAmountComponent.prototype.onSliderValueChange = function (__s85param0) {
    this._pickerComponent.disp.removeEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onPickerValueChange));
    this.syncPickerFromSlider();
    this._pickerComponent.disp.addEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onPickerValueChange));
  };
  Object.defineProperty(CastleUnitAmountComponent.prototype, "stage", {
    get: function () {
      return this._unitPickerMc.stage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnitAmountComponent.prototype, "unitPickerMc", {
    get: function () {
      return this._unitPickerMc;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnitAmountComponent.prototype, "buttonMaxMc", {
    get: function () {
      return this._buttonMaxMc;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnitAmountComponent.prototype, "numberOfItems", {
    get: function () {
      return this._numberOfItems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnitAmountComponent.prototype, "minAmount", {
    get: function () {
      return this._minAmount;
    },
    set: function (__s97param0) {
      this._minAmount = __s97param0;
      this._pickerComponent.minAmount = __s97param0;
      this._sliderData.minValue = __s97param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnitAmountComponent.prototype, "centerSliderButtonOnDefault", {
    set: function (__s99param0) {
      this._sliderComponent.centerButtonOnDefault = __s99param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleUnitAmountComponent.prototype.updateMouseFocusForPickerComponent = function (__s101param0) {
    var __s101local0 = this._pickerComponent.itxt_pick.originalTextField;
    if (!__s101param0 && __s101local0 && __s101local0.isFocused) {
      this._disablePickerTextField = __s101local0;
      document.activeElement.blur();
    }
    if (this._disablePickerTextField && this._disablePickerTextField.selectable != __s101param0) {
      this._disablePickerTextField.selectable = __s101param0;
    }
  };
  CastleUnitAmountComponent.prototype.configureTextField = function (__s105param0, __s105param1 = false) {
    this._pickerComponent.itxt_pick.autoFitToBounds = true;
    this._maxChars = __s105param0;
  };
  CastleUnitAmountComponent.prototype.enableTracking = function (__s107param0) {
    this._pickerComponent.enableTracking(__s107param0);
  };
  CastleUnitAmountComponent.prototype.setLooping = function (__s109param0) {
    this._pickerComponent.setLooping(__s109param0);
  };
  CastleUnitAmountComponent.isLimitedByTutorial = false;
  return CastleUnitAmountComponent;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.CastleUnitAmountComponent = __s0local1;
var __dep_export_ScrollComponent = require("gge-module:export_ScrollComponent");
