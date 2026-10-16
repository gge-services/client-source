Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_AttackDialogTrackingHelper = require("gge-module:export_AttackDialogTrackingHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_BasicPicker = require("gge-module:export_BasicPicker");
var __s0local0 = function (__s1param0) {
  function UnitPicker(__s3param0) {
    var __s3local0 = this;
    __s3local0._minAmount = 1;
    __s3local0._enableTracking = true;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).initTextField();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(UnitPicker, __s1param0);
  UnitPicker.prototype.initTextField = function () {
    this._disp.txt_pick.restrict = null;
    this._disp.txt_pick.type = __dep_exact_81dacdf05bd32292.TextFieldType.INPUT;
    this._itxt_pick = this.textFieldManager.registerTextField(this._disp.txt_pick, new __dep_exact_92d05af59ee2ff30.NumberVO(0));
    this._itxt_pick.textAlign = __dep_exact_9e901e8e2483a22f.GGSTextAlign.CENTER;
    this.enableTextfield(this._isEnabled);
  };
  UnitPicker.prototype.updateInfo = function () {
    if (this.selectedValue > -1 && this._itxt_pick.textContentVO) {
      var __s7local0 = __dep_exact_f855840627e6e145.int((this.selectedValue + this.minAmount) * this.amountFactor);
      this._itxt_pick.textContentVO.numberValue = __s7local0;
    }
  };
  UnitPicker.prototype.setValue = function (__s10param0, __s10param1 = true) {
    if (this._itxt_pick.textContentVO) {
      this._itxt_pick.textContentVO.numberValue = __s10param0;
    }
    if (__s10param1) {
      this._selectedValue = __s10param0 - this.minAmount;
    }
    this.updateButtons();
  };
  Object.defineProperty(UnitPicker.prototype, "enabled", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_BasicPicker.BasicPicker.prototype, "enabled").get.call(this);
    },
    set: function (__s16param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicPicker.BasicPicker.prototype, "enabled").set.call(this, __s16param0);
      this.enableTextfield(__s16param0);
    },
    enumerable: true,
    configurable: true
  });
  UnitPicker.prototype.enableTextfield = function (__s18param0) {
    if (this._itxt_pick && this._itxt_pick.textContentVO) {
      this._itxt_pick.tabEnabled = __s18param0;
      this._itxt_pick.mouseEnabled = __s18param0;
    }
  };
  Object.defineProperty(UnitPicker.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPicker.prototype, "itxt_pick", {
    get: function () {
      return this._itxt_pick;
    },
    enumerable: true,
    configurable: true
  });
  UnitPicker.prototype.dispose = function () {
    __s1param0.prototype.dispose.call(this);
    this.textFieldManager.unregisterTextFieldByReference(this._itxt_pick);
  };
  UnitPicker.prototype.onClick = function (__s27param0) {
    if (this._isEnabled && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s27param0.target)) {
      __s1param0.prototype.onClick.call(this, __s27param0);
      switch (__s27param0.target) {
        case this._disp.btn_left:
        case this._disp.btn_right:
          if (this._enableTracking) {
            __dep_export_AttackDialogTrackingHelper.AttackDialogTrackingHelper.getInstance().trackDetailCounter(__dep_export_AttackDialogTrackingHelper.AttackDialogTrackingHelper.TRACK_MANUAL_FILLING);
            __dep_export_AttackDialogTrackingHelper.AttackDialogTrackingHelper.getInstance().trackDetailCounter(__dep_export_AttackDialogTrackingHelper.AttackDialogTrackingHelper.TRACK_MANUAL_FILLING);
          }
      }
    }
  };
  Object.defineProperty(UnitPicker.prototype, "minAmount", {
    get: function () {
      return this._minAmount;
    },
    set: function (__s34param0) {
      this._minAmount = __s34param0;
    },
    enumerable: true,
    configurable: true
  });
  UnitPicker.prototype.enableTracking = function (__s36param0) {
    this._enableTracking = __s36param0;
  };
  return UnitPicker;
}(__dep_export_BasicPicker.BasicPicker);
exports.UnitPicker = __s0local0;
