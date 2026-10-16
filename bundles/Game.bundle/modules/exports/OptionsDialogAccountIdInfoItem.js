Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_OptionsDialogAccountInfoItem = require("gge-module:export_OptionsDialogAccountInfoItem");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __s0local0 = function (__s1param0) {
  function OptionsDialogAccountIdInfoItem(__s3param0, __s3param1, __s3param2 = null, __s3param3) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
    __s3local0._hasVerifiedAccount = __s3param3;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OptionsDialogAccountIdInfoItem, __s1param0);
  OptionsDialogAccountIdInfoItem.prototype.setText = function (__s5param0) {
    this._iAccountIdTextfield = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this._headerMC.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(__s5param0), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    this._iAccountIdTextfield.selectable = this._hasVerifiedAccount;
  };
  OptionsDialogAccountIdInfoItem.prototype.onClick = function (__s7param0) {
    __s1param0.prototype.onClick.call(this, __s7param0);
    switch (__s7param0.target) {
      case this._headerMC.txt_value:
        this.selectAccountId();
    }
  };
  OptionsDialogAccountIdInfoItem.prototype.selectAccountId = function () {
    this._iAccountIdTextfield.setFocus();
    this._iAccountIdTextfield.setSelection(0, this._iAccountIdTextfield.text.length);
  };
  return OptionsDialogAccountIdInfoItem;
}(__dep_export_OptionsDialogAccountInfoItem.OptionsDialogAccountInfoItem);
exports.OptionsDialogAccountIdInfoItem = __s0local0;
