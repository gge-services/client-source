Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function SliderEvent(__s3param0, __s3param1, __s3param2 = true, __s3param3 = false) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this).newValues = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SliderEvent, __s1param0);
  Object.defineProperty(SliderEvent.prototype, "selectedValue", {
    get: function () {
      return this.newValues;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SliderEvent.prototype, "selectedValues", {
    get: function () {
      return this.newValues;
    },
    enumerable: true,
    configurable: true
  });
  SliderEvent.__initialize_static_members = function () {
    SliderEvent.VALUE_CHANGED = "valuechanged";
  };
  return SliderEvent;
}(require("gge-module:export_CastleEvent").CastleEvent);
exports.SliderEvent = __s0local0;
__s0local0.__initialize_static_members();
