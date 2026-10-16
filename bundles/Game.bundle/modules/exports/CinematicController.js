Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_DarkOkDialog = require("gge-module:export_DarkOkDialog");
var __s0local0 = createjs.Ticker;
var __s0local1 = createjs.Event;
var __s0local2 = function () {
  function CinematicController() {
    this._musicMuted = false;
    if (CinematicController._instance) {
      throw new Error("Singleton class! Use CinematicController.getInstance() instead...");
    }
  }
  CinematicController.getInstance = function () {
    CinematicController._instance ||= new CinematicController();
    return CinematicController._instance;
  };
  CinematicController.prototype.playCinematic = function (__s8param0) {
    var __s8local0 = this;
    var __s8local1 = document.getElementById("cinematics");
    var __s8local2 = document.getElementById("close");
    var __s8local3 = document.documentElement.clientWidth;
    var __s8local4 = document.documentElement.clientHeight;
    var __s8local5 = CinematicController.CINEMATICS_PATH_URL + __s8param0.fileName;
    if (__s8local1.src.indexOf(__s8local5) == -1) {
      __s8local1.src = __s8local5;
    }
    __s8local1.height = __s8local4;
    __s8local1.width = __s8local3;
    __s8local1.style.display = "block";
    __s8local2.style.display = "block";
    this._musicMuted = __dep_exact_9e901e8e2483a22f_1.BasicController.getInstance().soundController.isMusicMuted;
    if (!this._musicMuted) {
      __dep_exact_9e901e8e2483a22f_1.BasicController.getInstance().soundController.muteMusic();
    }
    __s8local1.addEventListener("stalled", this.bindFunction(this.onStalled));
    var __s8local6 = __s8local1.play();
    if (__s8local6 && __s8local6.then) {
      __s8local6.then(function () {
        __s8local1.addEventListener("ended", __s8local0.bindFunction(__s8local0.onCinematicEnd));
        __s8local2.addEventListener("click", __s8local0.bindFunction(__s8local0.onCinematicSkip));
        window.addEventListener(__s0local1.RESIZE, __s8local0.bindFunction(__s8local0.onResize));
      }, function (__s15param0) {
        __s8local0.stopCinematic(true);
        __s8local0.showError();
      });
    }
    __s8param0.onPlayCinematic();
    __s0local0.paused = true;
  };
  CinematicController.prototype.stopCinematic = function (__s17param0 = false) {
    __s0local0.paused = false;
    var __s17local0 = document.getElementById("cinematics");
    var __s17local1 = document.getElementById("close");
    __s17local0.removeEventListener("ended", this.bindFunction(this.onCinematicEnd));
    __s17local1.removeEventListener("click", this.bindFunction(this.onCinematicSkip));
    window.removeEventListener(__s0local1.RESIZE, this.bindFunction(this.onResize));
    if (!this._musicMuted) {
      __dep_exact_9e901e8e2483a22f_1.BasicController.getInstance().soundController.unMuteMusic();
    }
    if (__s17param0) {
      __s17local0.load();
    }
    __s17local0.style.display = "none";
    __s17local1.style.display = "none";
  };
  CinematicController.prototype.showError = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_DarkOkDialog.DarkOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties("attention", "alert_cinematics_videoCannotDisplay"));
  };
  CinematicController.prototype.onCinematicEnd = function (__s23param0) {
    CinematicController.getInstance().stopCinematic(false);
  };
  CinematicController.prototype.onCinematicSkip = function (__s25param0) {
    CinematicController.getInstance().stopCinematic(true);
  };
  CinematicController.prototype.onStalled = function (__s27param0) {
    CinematicController.getInstance().stopCinematic(true);
    this.showError();
  };
  CinematicController.prototype.onResize = function (__s29param0) {
    var __s29local0 = document.getElementById("cinematics");
    var __s29local1 = document.documentElement.clientWidth;
    var __s29local2 = document.documentElement.clientHeight;
    __s29local0.height = __s29local2;
    __s29local0.width = __s29local1;
  };
  CinematicController.CINEMATICS_PATH_URL = "../cinematics/";
  return CinematicController;
}();
exports.CinematicController = __s0local2;
