Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = createjs.TimerEvent;
var __s0local1 = function (__s1param0) {
  function UpgradableLandmarkData() {
    var __s3local0 = this;
    __s3local0._currentlyShownLandmarks = [];
    __s3local0._alreadyReset = false;
    __s3local0._remainingResetTime = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(UpgradableLandmarkData, __s1param0);
  UpgradableLandmarkData.prototype.addToShownList = function (__s5param0) {
    if (!(this._currentlyShownLandmarks.indexOf(__s5param0) > -1)) {
      this._currentlyShownLandmarks.push(__s5param0);
    }
  };
  UpgradableLandmarkData.prototype.resetShownLandmarks = function () {
    if (this._currentlyShownLandmarks != null) {
      for (var __s8local0 = 0, __s8local1 = this._currentlyShownLandmarks; __s8local0 < __s8local1.length; __s8local0++) {
        var __s8local2 = __s8local1[__s8local0];
        if (__s8local2 !== undefined) {
          __s8local2.reset();
        }
      }
    }
    this._currentlyShownLandmarks = [];
  };
  UpgradableLandmarkData.prototype.updateLandmark = function (__s14param0) {
    var __s14local0 = this.userList.getVOByID(__s14param0.OID);
    if (__s14local0) {
      __s14local0.updateProgress(__s14param0.OID, __s14param0.CP);
    }
  };
  UpgradableLandmarkData.prototype.resetLandmarks = function () {
    if (!this._alreadyReset) {
      this.resetShownLandmarks();
      this._alreadyReset = true;
      var __s17local0 = new __dep_exact_81dacdf05bd32292.Timer(10000, 1);
      __s17local0.addEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onResetWarningCooldown));
      __s17local0.start();
    }
  };
  UpgradableLandmarkData.prototype.onResetWarningCooldown = function (__s20param0) {
    var __s20local0 = __s20param0.target;
    __s20local0.stop();
    __s20local0 = null;
    this._alreadyReset = false;
  };
  UpgradableLandmarkData.prototype.resetComplete = function () {
    this.resetLandmarks();
    if (__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP) {
      var __s22local0 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.renderer.camera.getAreaViewportRectangle();
      __dep_export_CastleModel.CastleModel.worldmapData.updateAreaRange(__s22local0.x, __s22local0.y, __s22local0.x + __s22local0.width, __s22local0.y + __s22local0.height);
    }
  };
  Object.defineProperty(UpgradableLandmarkData.prototype, "userList", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  return UpgradableLandmarkData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.UpgradableLandmarkData = __s0local1;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "IUpdatable");
