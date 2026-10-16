Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function ACastleFactionChooseFactionDialog(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACastleFactionChooseFactionDialog, __s1param0);
  ACastleFactionChooseFactionDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
  };
  ACastleFactionChooseFactionDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  ACastleFactionChooseFactionDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
  };
  ACastleFactionChooseFactionDialog.prototype.onRemoveEvent = function (__s11param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s11param0.specialEventVO, "FactionEventVO")) {
      this.hide();
    }
  };
  ACastleFactionChooseFactionDialog.prototype.onClick = function (__s14param0) {
    switch (__s14param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_FACTION_EVENT_MAIN_DIALOG, __dep_export_FactionEventMainDialog.FactionEventMainDialog.SUBLAYER_INTRODUCTION);
        this.hide();
    }
  };
  return ACastleFactionChooseFactionDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.ACastleFactionChooseFactionDialog = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_FactionEventMainDialog = require("gge-module:export_FactionEventMainDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
