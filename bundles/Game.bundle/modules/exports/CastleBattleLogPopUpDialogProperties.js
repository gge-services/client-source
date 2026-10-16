Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleBattleLogPopUpDialogProperties(__s3param0, __s3param1, __s3param2, __s3param3 = 0) {
    var __s3local0 = this;
    __s3local0._currentWave = 0;
    __s3local0.currentFlank = 0;
    __s3local0.unitType = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).logVO = __s3param0;
    __s3local0.currentWave = __s3param1;
    __s3local0.currentFlank = __s3param2;
    __s3local0.unitType = __s3param3;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBattleLogPopUpDialogProperties, __s1param0);
  Object.defineProperty(CastleBattleLogPopUpDialogProperties.prototype, "currentWave", {
    get: function () {
      return this._currentWave;
    },
    set: function (__s7param0) {
      this._currentWave = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleBattleLogPopUpDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleBattleLogPopUpDialogProperties = __s0local0;
