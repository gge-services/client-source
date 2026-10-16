Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_opaque_1bc5cb62fa0fa0642df721a1 = require("gge-module:opaque_1bc5cb62fa0fa0642df721a1");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __s0local0 = createjs.EventDispatcher;
__dep_export_LoggerConfigurator.getLogger("sound");
var __s0local1 = function (__s1param0) {
  function SoundChannel() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_opaque_1bc5cb62fa0fa0642df721a1.__extends(SoundChannel, __s1param0);
  SoundChannel.prototype.stop = function () {
    var __s5local0 = this;
    if (this.soundInstance) {
      this.soundInstance.stop();
    } else {
      setTimeout(function () {
        __s5local0.stop();
      }, 50);
    }
  };
  Object.defineProperty(SoundChannel.prototype, "soundTransform", {
    get: function () {
      return this._soundTranform;
    },
    set: function (__s13param0) {
      this._soundTranform = __s13param0;
      if (this.soundInstance) {
        this.soundInstance.applyPlayProps({
          pan: __s13param0.pan,
          volume: __s13param0.volume
        });
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SoundChannel.prototype, "position", {
    get: function () {
      if (this.soundInstance) {
        return this.soundInstance.position;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  return SoundChannel;
}(__s0local0);
exports.SoundChannel = __s0local1;
