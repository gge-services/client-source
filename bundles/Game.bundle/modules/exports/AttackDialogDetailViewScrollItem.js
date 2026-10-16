Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_MovieClipLayoutable = require("gge-module:export_MovieClipLayoutable");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function AttackDialogDetailViewScrollItem(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3param0], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    __s3local0._waveKey = __s3param1;
    if (typeof __s3local0._waveKey == "number") {
      var __s3local1 = (__s3local0._waveKey + 1 < 10 ? "0" : "") + (__s3local0._waveKey + 1) + ".";
      if (__dep_exact_92d05af59ee2ff30.Localize.text("dialog_attack_rework2022_numberedWave_short") != "dialog_attack_rework2022_numberedWave_short") {
        __s3local1 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_attack_rework2022_numberedWave_short", [(__s3local0._waveKey + 1 < 10 ? "0" : "") + (__s3local0._waveKey + 1)]);
      }
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0.disp.txt_wave, new __dep_exact_92d05af59ee2ff30.TextVO(__s3local1));
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0.disp.mc_selected.txt_wave, new __dep_exact_92d05af59ee2ff30.TextVO(__s3local1));
    }
    __s3local0.disp.addEventListener(__s0local0.CLICK, __s3local0.bindFunction(__s3local0.onClick));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AttackDialogDetailViewScrollItem, __s1param0);
  Object.defineProperty(AttackDialogDetailViewScrollItem.prototype, "waveKey", {
    get: function () {
      return this._waveKey;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogDetailViewScrollItem.prototype.onClick = function (__s9param0) {
    __dep_export_AttackDialogController.AttackDialogController.getInstance().selectedDetailView = this.waveKey;
  };
  AttackDialogDetailViewScrollItem.prototype.destroy = function () {
    this.disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
  };
  return AttackDialogDetailViewScrollItem;
}(__dep_export_MovieClipLayoutable.MovieClipLayoutable);
exports.AttackDialogDetailViewScrollItem = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ILayoutable");
