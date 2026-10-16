Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleMonumentProgressEvent(__s3param0, __s3param1, __s3param2 = false, __s3param3 = false) {
    var __s3local0 = this;
    __s3local0.donatedAmount = 0;
    __s3local0.objectID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this).donatedAmount = __s3param1[1];
    __s3local0.objectID = __dep_exact_f855840627e6e145.int(__s3param1[0]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMonumentProgressEvent, __s1param0);
  CastleMonumentProgressEvent.__initialize_static_members = function () {
    CastleMonumentProgressEvent.NEW_PROGRESS = "new_progress";
  };
  return CastleMonumentProgressEvent;
}(createjs.Event);
exports.CastleMonumentProgressEvent = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
__s0local0.__initialize_static_members();
