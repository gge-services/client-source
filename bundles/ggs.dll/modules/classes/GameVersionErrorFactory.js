Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_ExternalLoggingConstants = require("gge-module:class_ExternalLoggingConstants");
var __s0local0 = function (__s1param0) {
  function GameVersionErrorFactory(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.GAME_ID = "gameId";
    __s3local0.ERROR_MESSAGE = "errorMessage";
    __s3local0._gameId = __s3param0;
    __s3local0._errorMessage = __s3param1;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(GameVersionErrorFactory, __s1param0);
  GameVersionErrorFactory.prototype.create = function () {
    var __s5local0 = __s1param0.prototype.create.call(this);
    __s5local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, GameVersionErrorFactory.EVENT_ID.toString());
    __s5local0.logData.set(this.GAME_ID, this._gameId.toString());
    __s5local0.logData.set(this.ERROR_MESSAGE, this._errorMessage);
    return __s5local0;
  };
  GameVersionErrorFactory.BASIC_LOADER_DATA_NOT_SUPPORTED = "Cache Breaker doesn't support basic loader data.";
  GameVersionErrorFactory.CACHE_BREAKER_DATA_NOT_SUPPORTED = "Game doesn't support cache breaker data.";
  GameVersionErrorFactory.EVENT_ID = 60;
  return GameVersionErrorFactory;
}(require("gge-module:class_BasicLogObjectFactory").BasicLogObjectFactory);
exports.GameVersionErrorFactory = __s0local0;
