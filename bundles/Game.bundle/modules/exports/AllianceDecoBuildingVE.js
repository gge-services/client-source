Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleAllianceDataEvent = require("gge-module:export_CastleAllianceDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleAllianceCrestHelper = require("gge-module:export_CastleAllianceCrestHelper");
var __s0local0 = function (__s1param0) {
  function AllianceDecoBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceDecoBuildingVE, __s1param0);
  AllianceDecoBuildingVE.prototype.updateColorChange = function () {
    if (__dep_export_CastleAllianceCrestHelper.CastleAllianceCrestHelper.getMyAllianceCrestVO()) {
      __dep_export_CastleAllianceCrestHelper.CastleAllianceCrestHelper.colorizeFlags(this.buildingClip.currentshownDisplayObject, __dep_export_CastleAllianceCrestHelper.CastleAllianceCrestHelper.getMyAllianceCrestVO().colors);
    }
  };
  AllianceDecoBuildingVE.prototype.onMyAllianceInfoUpdated = function (__s8param0) {
    this.updateColorChange();
  };
  AllianceDecoBuildingVE.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onMyAllianceUpdate));
  };
  AllianceDecoBuildingVE.prototype.removeEventListener = function () {
    __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onMyAllianceUpdate));
    __s1param0.prototype.removeEventListener.call(this);
  };
  AllianceDecoBuildingVE.prototype.onMyAllianceUpdate = function (__s14param0) {
    this.updateColorChange();
  };
  return AllianceDecoBuildingVE;
}(require("gge-module:export_DecoBuildingVE").DecoBuildingVE);
exports.AllianceDecoBuildingVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
