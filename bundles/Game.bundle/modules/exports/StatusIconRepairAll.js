Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ACastleStatusIcon = require("gge-module:export_ACastleStatusIcon");
var __s0local0 = function (__s1param0) {
  function StatusIconRepairAll() {
    var __s3local0 = __s1param0.call(this, "Btn_repairAllHud", __dep_export_ACastleStatusIcon.ACastleStatusIcon.PRIORITY_LOW) || this;
    __s3local0.setTooltip("btn_burnCastle");
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconRepairAll, __s1param0);
  StatusIconRepairAll.prototype.addEventListenerForVisibility = function () {
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_BURNING_CASTLE_UPDATED, this.bindFunction(this.onUpdateCastleData));
  };
  StatusIconRepairAll.prototype.removeEventListenerForVisibility = function () {
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_BURNING_CASTLE_UPDATED, this.bindFunction(this.onUpdateCastleData));
  };
  StatusIconRepairAll.prototype.onUpdateCastleData = function (__s9param0) {
    this.setVisibility();
  };
  StatusIconRepairAll.prototype.setVisibilityLoaded = function () {
    var __s11local0 = __dep_export_CastleModel.CastleModel.areaData.activeArea;
    if (__dep_export_IsoHelper.IsoHelper.view.isInIsoScreen && __s11local0 && __s11local0.isMyArea && !__s11local0.isUnderConquerProcess && __s11local0.commonInfo.isCastleBurning) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconRepairAll.prototype.onClick = function () {
    if (__dep_export_CastleModel.CastleModel.areaData.activeArea) {
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_TIP_DIALOG_COMMAND, [__dep_export_ClientConstCastle.ClientConstCastle.TIP_REPAIR, true]);
    } else {
      this.setVisibilityLoaded();
    }
  };
  return StatusIconRepairAll;
}(__dep_export_ACastleStatusIcon.ACastleStatusIcon);
exports.StatusIconRepairAll = __s0local0;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
