Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleInboxMessageCountDisplay(__s3param0, __s3param1, __s3param2, __s3param3) {
    this._iconFrame = 0;
    this._toolTipText = "";
    this._toolTipTextFull = "";
    this._disp = __s3param0;
    this._iconFrame = __dep_exact_f855840627e6e145.int(__s3param1);
    this._toolTipText = __s3param2;
    this._toolTipTextFull = __s3param3;
  }
  CastleInboxMessageCountDisplay.prototype.update = function (__s5param0, __s5param1) {
    this._disp.visible = true;
    this._disp.mouseChildren = false;
    this._disp.status_icon.gotoAndStop(this._iconFrame);
    __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.txt_progress, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s5param0), new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s5param1)]));
    this._disp.progress_bar.scaleX = Math.min(__s5param0 / __s5param1, 1);
    if (__s5param0 >= __s5param1) {
      this._disp.progress_bar.gotoAndStop(2);
      this._disp.toolTipText = this._toolTipTextFull;
    } else {
      this._disp.progress_bar.gotoAndStop(1);
      this._disp.toolTipText = this._toolTipText;
    }
  };
  return CastleInboxMessageCountDisplay;
}();
exports.CastleInboxMessageCountDisplay = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
