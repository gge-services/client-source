Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function BasicPicker(__s3param0) {
    this._selectedValue = 0;
    this._numItems = 4;
    this._isEnabled = true;
    this._maxNumItems = 4;
    this._amountFactor = 1;
    this._loop = true;
    this._disp = __s3param0;
    this._disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this._disp.btn_left, this._disp.btn_right], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
  }
  BasicPicker.prototype.onClick = function (__s5param0) {
    if (this._isEnabled && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s5param0.target)) {
      switch (__s5param0.target) {
        case this._disp.btn_left:
          this.selectedValue--;
          break;
        case this._disp.btn_right:
          this.selectedValue++;
      }
    }
  };
  BasicPicker.prototype.selectRandomValue = function () {
    this.selectedValue = __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f_1.Random.integer(0, this._numItems));
  };
  BasicPicker.prototype.updateInfo = function () {};
  Object.defineProperty(BasicPicker.prototype, "selectedValue", {
    get: function () {
      return this._selectedValue;
    },
    set: function (__s15param0) {
      this.setSelectedValue(__s15param0, this._loop);
    },
    enumerable: true,
    configurable: true
  });
  BasicPicker.prototype.selectMaxValue = function () {
    this.selectedValue = this._numItems - 1;
    if (this.maxBlocked) {
      this._disp.dispatchEvent(new __dep_export_BasicPickerEvent.BasicPickerEvent(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE_MAX_BLOCKED));
    }
  };
  BasicPicker.prototype.setSelectedValueWithoutLoop = function (__s20param0) {
    this.setSelectedValue(__s20param0, false);
  };
  BasicPicker.prototype.setSelectedValue = function (__s22param0, __s22param1) {
    var __s22local0 = __dep_exact_f855840627e6e145.int(Math.min(this._numItems, this._maxNumItems));
    if (__s22param0 < 0) {
      if (__s22param1) {
        this._selectedValue = __dep_exact_f855840627e6e145.int(Math.max(__s22local0 - 1, 0));
        if (this.maxBlocked) {
          this._disp.dispatchEvent(new __dep_export_BasicPickerEvent.BasicPickerEvent(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE_MAX_BLOCKED));
        }
      } else {
        this._selectedValue = 0;
      }
    } else if (__s22param0 >= __s22local0) {
      if (this.maxBlocked) {
        this._selectedValue = __s22local0 - 1;
        this._disp.dispatchEvent(new __dep_export_BasicPickerEvent.BasicPickerEvent(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE_MAX_BLOCKED));
      } else {
        this._selectedValue = __s22param1 ? 0 : __s22local0 - 1;
      }
    } else {
      this._selectedValue = __s22param0;
    }
    this._disp.dispatchEvent(new __dep_export_BasicPickerEvent.BasicPickerEvent(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE));
    this.updateInfo();
    this.updateButtons();
  };
  BasicPicker.prototype.setNumItems = function (__s32param0, __s32param1 = __dep_exact_f855840627e6e145.int(-Number.MAX_VALUE)) {
    this._numItems = __s32param0;
    if (__s32param1 == -Number.MAX_VALUE) {
      this._maxNumItems = __s32param0;
    } else {
      this._maxNumItems = __s32param1;
    }
    this.updateInfo();
  };
  Object.defineProperty(BasicPicker.prototype, "numItems", {
    get: function () {
      return this._numItems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicPicker.prototype, "maxNumItems", {
    get: function () {
      return this._maxNumItems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicPicker.prototype, "maxBlocked", {
    get: function () {
      return this._numItems < this._maxNumItems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicPicker.prototype, "enabled", {
    get: function () {
      return this._isEnabled;
    },
    set: function (__s44param0) {
      this._isEnabled = __s44param0;
      if (this._colorMatrix == null) {
        this._colorMatrix = new __dep_exact_9e901e8e2483a22f.ColorMatrix();
        this._colorMatrix.desaturate();
      }
      this._disp.mouseEnabled = __s44param0;
      this._disp.mouseChildren = __s44param0;
      if (__s44param0) {
        this._disp.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
      } else {
        this._disp.useFilters([this._colorMatrix.filter]);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicPicker.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicPicker.prototype, "amountFactor", {
    get: function () {
      return this._amountFactor;
    },
    set: function (__s53param0) {
      this._amountFactor = __s53param0;
    },
    enumerable: true,
    configurable: true
  });
  BasicPicker.prototype.dispose = function () {
    this._disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
  };
  Object.defineProperty(BasicPicker.prototype, "buttonsEnabled", {
    set: function (__s57param0) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.btn_left, __s57param0);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.btn_right, __s57param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicPicker.prototype, "buttonsVisible", {
    set: function (__s59param0) {
      this._disp.btn_left.visible = __s59param0;
      this._disp.btn_right.visible = __s59param0;
    },
    enumerable: true,
    configurable: true
  });
  BasicPicker.prototype.setLooping = function (__s61param0) {
    this._loop = __s61param0;
    this.updateButtons();
  };
  BasicPicker.prototype.updateButtons = function () {
    if (!this._loop) {
      var __s63local0 = __dep_exact_f855840627e6e145.int(Math.min(this._numItems, this._maxNumItems));
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.btn_left, this._selectedValue > 0);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.btn_right, this._selectedValue < __s63local0 - 1);
    }
  };
  return BasicPicker;
}();
exports.BasicPicker = __s0local1;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_BasicPickerEvent = require("gge-module:export_BasicPickerEvent");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
