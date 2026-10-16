Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function IsoViewScaleScheduler(__s3param0) {
    this.autoTerminateDelay = 0;
    this.isRunning = false;
    this.camera = __s3param0;
  }
  IsoViewScaleScheduler.prototype.start = function () {
    if (!this.isRunning) {
      createjs.Ticker.addEventListener("tick", this.bindFunction(this.process));
      this.isRunning = true;
    }
  };
  IsoViewScaleScheduler.prototype.process = function () {
    var __s8local0 = this.camera.isoRenderer.objects.getCompleteObjectsList();
    var __s8local1 = this.camera.getCurrentZoomValue() > 0.5 ? 1 : 0.6;
    var __s8local2 = 0;
    for (var __s8local3 = __s8local0.length - 1; __s8local3 >= 0; __s8local3--) {
      if (__s8local2 > 3) {
        return;
      }
      var __s8local4 = __s8local0[__s8local3];
      if (!this.canSkip(__s8local4) && __s8local4.needsReCache(__s8local1)) {
        __s8local4.onCameraZoomChanged();
        __s8local2++;
      }
    }
    if (__s8local2 === 0) {
      this.autoTerminateDelay++;
      if (this.autoTerminateDelay > 100) {
        this.terminate();
      }
    } else {
      this.autoTerminateDelay = 0;
    }
  };
  IsoViewScaleScheduler.prototype.canSkip = function (__s17param0) {
    return __s17param0 instanceof __dep_export_AIsoMovementVE.AIsoMovementVE || __s17param0 instanceof __dep_export_CastleGroundVE.CastleGroundVE;
  };
  IsoViewScaleScheduler.prototype.terminate = function () {
    createjs.Ticker.removeEventListener("tick", this.bindFunction(this.process));
    this.isRunning = false;
    this.autoTerminateDelay = 0;
  };
  return IsoViewScaleScheduler;
}();
exports.IsoViewScaleScheduler = __s0local0;
var __dep_export_CastleGroundVE = require("gge-module:export_CastleGroundVE");
var __dep_export_AIsoMovementVE = require("gge-module:export_AIsoMovementVE");
