Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_AAutoSellDialogCheckbox = require("gge-module:export_AAutoSellDialogCheckbox");
var __s0local0 = function (__s1param0) {
  function AutoSellDialogActiveStateCheckbox(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = this;
    __s3local0._row = -1;
    __s3local0._column = -1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._row = __s3param1;
    __s3local0._column = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AutoSellDialogActiveStateCheckbox, __s1param0);
  AutoSellDialogActiveStateCheckbox.prototype.onClick = function (__s5param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s5param0.target)) {
      __s1param0.prototype.onClick.call(this, __s5param0);
      switch (this.currentState) {
        case __dep_export_AAutoSellDialogCheckbox.AAutoSellDialogCheckbox.STATE_UNSELECTED:
          this.setState(__dep_export_AAutoSellDialogCheckbox.AAutoSellDialogCheckbox.STATE_SELECTED);
          break;
        case __dep_export_AAutoSellDialogCheckbox.AAutoSellDialogCheckbox.STATE_SELECTED:
          this.setState(__dep_export_AAutoSellDialogCheckbox.AAutoSellDialogCheckbox.STATE_UNSELECTED);
          break;
        case __dep_export_AAutoSellDialogCheckbox.AAutoSellDialogCheckbox.STATE_MIXED:
          this.setState(__dep_export_AAutoSellDialogCheckbox.AAutoSellDialogCheckbox.STATE_SELECTED);
      }
    }
  };
  Object.defineProperty(AutoSellDialogActiveStateCheckbox.prototype, "row", {
    get: function () {
      return this._row;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoSellDialogActiveStateCheckbox.prototype, "column", {
    get: function () {
      return this._column;
    },
    enumerable: true,
    configurable: true
  });
  return AutoSellDialogActiveStateCheckbox;
}(__dep_export_AAutoSellDialogCheckbox.AAutoSellDialogCheckbox);
exports.AutoSellDialogActiveStateCheckbox = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
