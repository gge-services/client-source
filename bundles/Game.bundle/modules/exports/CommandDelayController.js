Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CommandDelayController(__s3param0) {
    if (__s3param0 == null) {
      throw new Error("do not instantiate, use getInstance()");
    }
    this.delayCommandVOs = [];
  }
  CommandDelayController.getInstance = function () {
    CommandDelayController.commandDelayController ||= new CommandDelayController(new __s0local1());
    return CommandDelayController.commandDelayController;
  };
  CommandDelayController.prototype.addDelayCommandID = function (__s8param0, __s8param1 = true) {
    if (this.delayCommandVOs != null) {
      for (var __s8local0 = 0, __s8local1 = this.delayCommandVOs; __s8local0 < __s8local1.length; __s8local0++) {
        var __s8local2 = __s8local1[__s8local0];
        if (__s8local2 !== undefined && __s8local2.commandID == __s8param0) {
          return;
        }
      }
    }
    this.delayCommandVOs.push(new __dep_export_CastleDelayCommandVO.CastleDelayCommandVO(__s8param0, __s8param1));
  };
  CommandDelayController.prototype.addDelayCommand = function (__s14param0, __s14param1, __s14param2) {
    this.getCommandVO(__s14param0).addCommand(__s14param1, __s14param2);
  };
  CommandDelayController.prototype.isDelayedCommand = function (__s16param0) {
    if (this.delayCommandVOs != null) {
      for (var __s16local0 = 0, __s16local1 = this.delayCommandVOs; __s16local0 < __s16local1.length; __s16local0++) {
        var __s16local2 = __s16local1[__s16local0];
        if (__s16local2 !== undefined && __s16local2.commandID == __s16param0) {
          return true;
        }
      }
    }
    return false;
  };
  CommandDelayController.prototype.finishDelayOfCommand = function (__s22param0) {
    var __s22local0 = this.getCommandVO(__s22param0);
    if (__s22local0) {
      this.executeCommand(__s22local0);
      this.destroyCommandVO(__s22local0);
    }
  };
  CommandDelayController.prototype.finishDelayOfAllCommands = function () {
    if (this.delayCommandVOs != null) {
      for (var __s25local0 = 0, __s25local1 = this.delayCommandVOs; __s25local0 < __s25local1.length; __s25local0++) {
        var __s25local2 = __s25local1[__s25local0];
        if (__s25local2 !== undefined) {
          this.executeCommand(__s25local2);
          __s25local2.commandList = null;
          __s25local2.paramList = null;
        }
      }
    }
    this.delayCommandVOs.splice(0, this.delayCommandVOs.length);
  };
  CommandDelayController.prototype.executeCommand = function (__s31param0) {
    var __s31local0 = __s31param0.commandList;
    var __s31local1 = __s31param0.paramList;
    var __s31local2 = __s31local0.length;
    for (var __s31local3 = __dep_exact_f855840627e6e145.int(__s31local2 - 1); __s31local3 > -1; __s31local3--) {
      var __s31local4 = __s31local0.splice(__s31local3, 1)[0];
      var __s31local5 = __s31local1.splice(__s31local3, 1)[0];
      __s31local4.exec(__s31local5);
    }
  };
  CommandDelayController.prototype.destroyCommandVO = function (__s35param0) {
    this.delayCommandVOs.splice(this.delayCommandVOs.indexOf(__s35param0), 1);
    __s35param0.commandList = null;
    __s35param0.paramList = null;
  };
  CommandDelayController.prototype.getCommandVO = function (__s37param0) {
    if (this.delayCommandVOs != null) {
      for (var __s37local0 = 0, __s37local1 = this.delayCommandVOs; __s37local0 < __s37local1.length; __s37local0++) {
        var __s37local2 = __s37local1[__s37local0];
        if (__s37local2 !== undefined && __s37local2.commandID == __s37param0) {
          return __s37local2;
        }
      }
    }
    return null;
  };
  return CommandDelayController;
}();
exports.CommandDelayController = __s0local0;
var __s0local1 = function () {
  return function SingletonBlocker() {};
}();
exports.SingletonBlocker = __s0local1;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleDelayCommandVO = require("gge-module:export_CastleDelayCommandVO");
