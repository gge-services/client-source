Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ToolEffectView(__s3param0, __s3param1, __s3param2, __s3param3) {
    this._effectIndex = 0;
    this._iconWidth = 0;
    this._iconHeight = 0;
    this._disp = __s3param0;
    this._effectIndex = __s3param1;
    this._iconWidth = __s3param2;
    this._iconHeight = __s3param3;
    this._textField = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3param0.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this._textField.autoFitToBounds = true;
    __s3param0.mouseChildren = false;
  }
  ToolEffectView.prototype.update = function (__s5param0, __s5param1 = 1) {
    if (__s5param0 != null && this._effectIndex < __s5param0.effectTypes.length) {
      __dep_export_WodPicHelper.WodPicHelper.addToolEffectIcon(__s5param0, this._disp.mc_icon, this._iconWidth, this._iconHeight, this._effectIndex);
      this._disp.toolTipText = __s5param0.getTooltipString(__s5param1, this._effectIndex);
      if (this._textField.model) {
        this._textField.textContentVO = __s5param0.getBonusString(this._effectIndex);
      }
      this.show();
    } else {
      this.hide();
    }
  };
  ToolEffectView.prototype.show = function () {
    this._disp.visible = true;
    this._disp.doCache();
  };
  ToolEffectView.prototype.hide = function () {
    this._disp.visible = false;
  };
  return ToolEffectView;
}();
exports.ToolEffectView = __s0local0;
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
