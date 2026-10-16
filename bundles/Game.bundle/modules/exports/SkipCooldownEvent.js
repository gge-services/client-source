Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function SkipCooldownEvent(__s3param0, __s3param1, __s3param2 = false, __s3param3 = false) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this)._mapObjectVO = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SkipCooldownEvent, __s1param0);
  Object.defineProperty(SkipCooldownEvent.prototype, "mapObjectVO", {
    get: function () {
      return this._mapObjectVO;
    },
    enumerable: true,
    configurable: true
  });
  SkipCooldownEvent.__initialize_static_members = function () {
    SkipCooldownEvent.UPDATE = "update";
  };
  return SkipCooldownEvent;
}(createjs.Event);
exports.SkipCooldownEvent = __s0local0;
__s0local0.__initialize_static_members();
