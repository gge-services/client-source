Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function AllianceMemberNameButton(__s3param0 = null, __s3param1 = false) {
    return __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceMemberNameButton, __s1param0);
  AllianceMemberNameButton.prototype.onRollOver = function (__s5param0) {
    this._nameTextField ||= __s5param0.target.txt_playerName;
    this.updateFontSize(13);
  };
  AllianceMemberNameButton.prototype.onRollOut = function (__s7param0) {
    this._nameTextField ||= __s7param0.target.txt_playerName;
    this.updateFontSize(12);
  };
  AllianceMemberNameButton.prototype.updateFontSize = function (__s9param0) {
    if (this._nameTextField) {
      var __s9local0 = this._nameTextField.getTextFormat();
      __s9local0.size = __s9param0;
      this._nameTextField.setTextFormat(__s9local0);
      this._nameTextField.updateCacheIfCached(2);
    }
  };
  return AllianceMemberNameButton;
}(require("gge-module:exact_84d43d9c404bd4d8").BasicButton);
exports.AllianceMemberNameButton = __s0local0;
