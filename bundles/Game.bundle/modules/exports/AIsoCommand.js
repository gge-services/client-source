Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function AIsoCommand() {
    var __s3local0 = this;
    __s3local0._isExecuted = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AIsoCommand, __s1param0);
  AIsoCommand.prototype.execute = function () {};
  Object.defineProperty(AIsoCommand.prototype, "isExecuted", {
    get: function () {
      return this._isExecuted;
    },
    set: function (__s9param0) {
      this._isExecuted = __s9param0;
    },
    enumerable: true,
    configurable: true
  });
  return AIsoCommand;
}(require("gge-module:export_CastleComponent").CastleComponent);
exports.AIsoCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
