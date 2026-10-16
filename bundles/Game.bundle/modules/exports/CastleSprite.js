Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_Event2SignalController = require("gge-module:export_Event2SignalController");
var __s0local0 = function (__s1param0) {
  function CastleSprite() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSprite, __s1param0);
  CastleSprite.prototype.dispatchEvent = function (__s5param0) {
    if (__dep_export_Event2SignalController.Event2SignalController.isNativeEvent(__s5param0.type)) {
      var __s5local0 = __s1param0.prototype.dispatchEvent.call(this, __s5param0);
      return typeof __s5local0 == "boolean" && !!__s5local0;
    }
    __dep_export_Event2SignalController.Event2SignalController.dispatchSignal(this, __s5param0.type, __s5param0);
    return true;
  };
  CastleSprite.prototype.addEventListener = function (__s8param0, __s8param1, __s8param2 = false, __s8param3 = 0, __s8param4 = false) {
    if (__dep_export_Event2SignalController.Event2SignalController.isNativeEvent(__s8param0)) {
      __s1param0.prototype.addEventListener.call(this, __s8param0, __s8param1, __s8param2, __s8param3, __s8param4);
    } else {
      __dep_export_Event2SignalController.Event2SignalController.add(this, __s8param0, __s8param1);
    }
  };
  CastleSprite.prototype.removeEventListener = function (__s12param0, __s12param1, __s12param2 = false) {
    if (__dep_export_Event2SignalController.Event2SignalController.isNativeEvent(__s12param0)) {
      __s1param0.prototype.removeEventListener.call(this, __s12param0, __s12param1, __s12param2);
    } else {
      __dep_export_Event2SignalController.Event2SignalController.remove(this, __s12param0, __s12param1);
    }
  };
  CastleSprite.prototype.hasEventListener = function (__s16param0) {
    return __dep_export_Event2SignalController.Event2SignalController.hasEventListener(this, __s16param0);
  };
  return CastleSprite;
}(createjs.Container);
exports.CastleSprite = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "Container");
