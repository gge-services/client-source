Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function AAutoSellDialogCheckbox(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._currentState = 0;
    __s3local0._onStateChanged = new __dep_exact_5c7bc328fca9e4de.Signal(AAutoSellDialogCheckbox);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AAutoSellDialogCheckbox, __s1param0);
  AAutoSellDialogCheckbox.prototype.setState = function (__s5param0, __s5param1 = true) {
    this._currentState;
    this._currentState = __s5param0;
    this.disp.gotoAndStop(__dep_exact_f855840627e6e145.int(this._currentState + 1));
    if (__s5param1) {
      this.onStateChanged.dispatch(this);
    }
  };
  Object.defineProperty(AAutoSellDialogCheckbox.prototype, "currentState", {
    get: function () {
      return this._currentState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAutoSellDialogCheckbox.prototype, "onStateChanged", {
    get: function () {
      return this._onStateChanged;
    },
    enumerable: true,
    configurable: true
  });
  AAutoSellDialogCheckbox.STATE_UNSELECTED = 0;
  AAutoSellDialogCheckbox.STATE_SELECTED = 1;
  AAutoSellDialogCheckbox.STATE_MIXED = 2;
  return AAutoSellDialogCheckbox;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.AAutoSellDialogCheckbox = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
