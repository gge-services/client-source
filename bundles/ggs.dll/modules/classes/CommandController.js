Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_14ac9999fc46bb45 = require("gge-module:exact_14ac9999fc46bb45");
var __dep_exact_ba3768902da9162c = require("gge-module:exact_ba3768902da9162c");
var __s0local0 = function () {
  function CommandController() {
    this.commandMap = new Map();
    if (CommandController._instance) {
      throw new Error("this is a singleton. cannot instanciate more than once");
    }
  }
  Object.defineProperty(CommandController, "instance", {
    get: function () {
      CommandController._instance ||= new CommandController();
      return CommandController._instance;
    },
    enumerable: true,
    configurable: true
  });
  CommandController.prototype.registerCommand = function (__s8param0, __s8param1, __s8param2 = null, __s8param3 = false) {
    var __s8local0 = this.commandMap.get(__s8param0);
    if (__s8local0) {
      __s8local0.removeAllReceiver();
    }
    __s8local0 = new __s8param1();
    this.commandMap.set(__s8param0, __s8local0);
    __s8local0.singleExecution = __s8param3;
    if (__s8param2) {
      __s8local0.addReceiver(__s8param2);
    }
  };
  CommandController.prototype.addReceiverToCommand = function (__s12param0, __s12param1) {
    var __s12local0 = this.commandMap.get(__s12param1);
    if (__s12local0) {
      __s12local0.addReceiver(__s12param0);
    } else {
      __dep_exact_14ac9999fc46bb45.fatal("cannot add commandreceiver to non existing command");
    }
  };
  CommandController.prototype.removeReceiverFromCommand = function (__s16param0, __s16param1) {
    var __s16local0 = this.commandMap.get(__s16param1);
    if (__s16local0) {
      __s16local0.removeReceiver(__s16param0);
    } else {
      __dep_exact_14ac9999fc46bb45.fatal("cannot remove commandreceiver from non existing command");
    }
  };
  CommandController.prototype.executeCommand = function (__s20param0, __s20param1) {
    var __s20local0;
    if (__s20param1 === undefined) {
      __s20param1 = null;
    }
    if (this.commandMap.get(__s20param0)) {
      if ((__s20local0 = this.commandMap.get(__s20param0)).executed && __s20local0.singleExecution) {
        var __s20local1 = __s20param0 + " was already executed";
        __dep_exact_ba3768902da9162c.warn(__s20local1);
      } else {
        __s20local0.execute(__s20param1);
        for (var __s20local2 = __s20local0.commandReceiver.length, __s20local3 = 0; __s20local3 < __s20local2; __s20local3++) {
          __s20local0.commandReceiver[__s20local3].handleCommand(__s20param0, __s20param1);
        }
        __s20local0.executed = true;
      }
    } else {
      __dep_exact_ba3768902da9162c.warn(__s20param0 + " has no instance in commandmap");
    }
  };
  CommandController.prototype.getExecFunctionFromCommand = function (__s29param0) {
    for (var __s29local0 = 0, __s29local1 = Array.from(this.commandMap.keys()); __s29local0 < __s29local1.length; __s29local0++) {
      var __s29local2 = __s29local1[__s29local0];
      if (__s29param0 == __s29local2) {
        if (this.commandMap.get(__s29local2)) {
          return this.commandMap.get(__s29local2).execute;
        } else {
          __dep_exact_14ac9999fc46bb45.fatal(__s29param0 + "has no instance in commandmap");
          return null;
        }
      }
    }
    __dep_exact_14ac9999fc46bb45.fatal(__s29param0 + "unknown error while retrieving execute function from command");
    return null;
  };
  return CommandController;
}();
exports.CommandController = __s0local0;
