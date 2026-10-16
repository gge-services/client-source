Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function CastleEventDispatcher() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEventDispatcher, __s1param0);
  Object.defineProperty(CastleEventDispatcher.prototype, "castleEnv", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return CastleEventDispatcher;
}(createjs.EventDispatcher);
exports.CastleEventDispatcher = __s0local0;
