Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CommandDelayController = require("gge-module:export_CommandDelayController");
var __s0local0 = function (__s1param0) {
  function CastleCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCommand, __s1param0);
  Object.defineProperty(CastleCommand.prototype, "env", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_3.EnvGlobalsHandler.globals;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f.BasicCommand.prototype, "env").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    if (this.delayCommandController.isDelayedCommand(this.cmdId)) {
      this.delayCommandController.addDelayCommand(this.cmdId, this, [__s9param0, __s9param1]);
    } else {
      this.exec([__s9param0, __s9param1]);
    }
    return false;
  };
  CastleCommand.prototype.exec = function (__s13param0) {
    throw new Error("method needs to be overriden");
  };
  CastleCommand.prototype.showErrorDialog = function (__s15param0, __s15param1) {
    if (__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive) {
      switch (__s15param0) {
        case __dep_exact_26a421b704832cff.ERROR.INVALID_OBJECT_ID:
          return;
      }
    } else {
      __dep_exact_9e901e8e2483a22f_2.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f_1.BasicController.COMMAND_HANDLE_SERVER_ERROR, new __dep_exact_9e901e8e2483a22f_4.ServerErrorVO(__s15param0, __s15param1, this.cmdId));
    }
  };
  Object.defineProperty(CastleCommand.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCommand.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCommand.prototype, "delayCommandController", {
    get: function () {
      return __dep_export_CommandDelayController.CommandDelayController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleCommand;
}(__dep_exact_9e901e8e2483a22f.BasicCommand);
exports.CastleCommand = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
