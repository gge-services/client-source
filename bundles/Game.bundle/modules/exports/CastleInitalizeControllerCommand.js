Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleSoundController = require("gge-module:export_CastleSoundController");
var __s0local0 = function (__s1param0) {
  function CastleInitalizeControllerCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleInitalizeControllerCommand, __s1param0);
  CastleInitalizeControllerCommand.prototype.initializeGameControllers = function () {
    __dep_exact_9e901e8e2483a22f_1.info("Initialize controllers");
    this.layoutManager.onStartProgressbar();
    if (!__dep_exact_9e901e8e2483a22f.BasicController.getInstance().soundController) {
      this.initSoundController(new __dep_export_CastleSoundController.CastleSoundController());
    }
  };
  Object.defineProperty(CastleInitalizeControllerCommand.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleInitalizeControllerCommand;
}(__dep_exact_9e901e8e2483a22f.BasicInitalizeControllerCommand);
exports.CastleInitalizeControllerCommand = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
