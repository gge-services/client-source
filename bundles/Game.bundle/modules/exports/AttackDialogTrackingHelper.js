Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __s0local0 = function () {
  function AttackDialogTrackingHelper() {
    this._startTime = 0;
    this.detailCounters = {};
    this.isTracked = false;
  }
  AttackDialogTrackingHelper.getInstance = function () {
    AttackDialogTrackingHelper.instance ||= new AttackDialogTrackingHelper();
    return AttackDialogTrackingHelper.instance;
  };
  AttackDialogTrackingHelper.prototype.startAndResetSession = function () {
    this._startTime = Math.round(new Date().getTime() / 1000);
    this.detailCounters = {};
    this.isTracked = false;
  };
  AttackDialogTrackingHelper.prototype.trackDetailCounter = function (__s9param0) {
    this.detailCounters[__s9param0] ||= 0;
    this.detailCounters[__s9param0]++;
  };
  AttackDialogTrackingHelper.prototype.getDetailCounterJSON = function () {
    return JSON.stringify(this.detailCounters);
  };
  AttackDialogTrackingHelper.prototype.endSessionAndTrack = function (__s13param0) {
    if (!this.isTracked) {
      this.isTracked = true;
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_CastleBasicController.CastleBasicController.TRACK_GENERALS_ATTACK_SCREEN, [this._startTime, this.getDetailCounterJSON(), __s13param0]);
    }
  };
  AttackDialogTrackingHelper.TRACK_AUTOFILL_ALL = "autofill_all";
  AttackDialogTrackingHelper.TRACK_PRESET_1ST_WAVE = "preset_1st_wave";
  AttackDialogTrackingHelper.TRACK_PRESET_NEXT_WAVE = "preset_next_wave";
  AttackDialogTrackingHelper.TRACK_PRESET_SELECTED = "preset_selected";
  AttackDialogTrackingHelper.TRACK_MANUAL_CLICK = "manual_click";
  AttackDialogTrackingHelper.TRACK_MANUAL_FILLING = "manual_filling";
  return AttackDialogTrackingHelper;
}();
exports.AttackDialogTrackingHelper = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
