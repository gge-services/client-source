Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = createjs.Event;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = function (__s1param0) {
  function Stats(__s3param0 = null) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._theme = {
      bg: "#000033",
      fps: "#ffff00",
      ms: "#00ff00",
      mem: "#00ffff",
      memmax: "#ff0070"
    };
    if (__s3param0) {
      if (__s3param0.bg != null) {
        __s3local0._theme.bg = __s3param0.bg;
      }
      if (__s3param0.fps != null) {
        __s3local0._theme.fps = __s3param0.fps;
      }
      if (__s3param0.ms != null) {
        __s3local0._theme.ms = __s3param0.ms;
      }
      if (__s3param0.mem != null) {
        __s3local0._theme.mem = __s3param0.mem;
      }
      if (__s3param0.memmax != null) {
        __s3local0._theme.memmax = __s3param0.memmax;
      }
    }
    __s3local0.addEventListener(__s0local0.ADDED_TO_STAGE, __s3local0.bindFunction(__s3local0.init));
    __s3local0.addEventListener(__s0local0.REMOVED_FROM_STAGE, __s3local0.bindFunction(__s3local0.kill));
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(Stats, __s1param0);
  Stats.prototype.kill = function (__s11param0) {
    this.removeEventListener(__s0local0.ADDED_TO_STAGE, this.bindFunction(this.init));
    this.removeEventListener(__s0local0.REMOVED_FROM_STAGE, this.bindFunction(this.kill));
    this.removeEventListener(__s0local1.CLICK, this.bindFunction(this.onClick));
    this.removeEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.update));
  };
  Stats.prototype.init = function (__s13param0) {};
  Stats.prototype.update = function (__s15param0) {};
  Stats.prototype.onClick = function (__s17param0) {};
  Stats.prototype.hex2css = function (__s19param0) {
    return "#" + __s19param0.toString(16);
  };
  return Stats;
}(createjs.Container);
exports.Stats = __s0local2;
