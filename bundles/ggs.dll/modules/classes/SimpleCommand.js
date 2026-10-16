Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function SimpleCommand(__s3param0 = false) {
    this._executed = false;
    this._singleExecution = false;
    this._commandReceiver = [];
    this._singleExecution = __s3param0;
  }
  Object.defineProperty(SimpleCommand.prototype, "executed", {
    get: function () {
      return this._executed;
    },
    set: function (__s7param0) {
      this._executed = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleCommand.prototype, "singleExecution", {
    get: function () {
      return this._singleExecution;
    },
    set: function (__s11param0) {
      this._singleExecution = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleCommand.prototype, "commandReceiver", {
    get: function () {
      return this._commandReceiver;
    },
    enumerable: true,
    configurable: true
  });
  SimpleCommand.prototype.execute = function (__s15param0 = null) {};
  SimpleCommand.prototype.addReceiver = function (__s17param0) {
    this._commandReceiver.push(__s17param0);
  };
  SimpleCommand.prototype.removeReceiver = function (__s19param0) {
    for (var __s19local0 = 0; __s19local0 < this._commandReceiver.length; __s19local0++) {
      if (this._commandReceiver[__s19local0] == __s19param0) {
        this._commandReceiver.splice(__s19local0, 1);
      }
    }
  };
  SimpleCommand.prototype.removeAllReceiver = function () {
    for (var __s24local0 = 0; __s24local0 < this._commandReceiver.length; __s24local0++) {
      this._commandReceiver[__s24local0] = null;
    }
  };
  return SimpleCommand;
}();
exports.SimpleCommand = __s0local0;
