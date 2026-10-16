Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CastleKoreanData() {
    var __s3local0 = this;
    __s3local0._koreaHoursPlayed = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleKoreanData, __s1param0);
  Object.defineProperty(CastleKoreanData.prototype, "koreaHoursPlayed", {
    get: function () {
      return this._koreaHoursPlayed;
    },
    set: function (__s7param0) {
      this._koreaHoursPlayed = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleKoreanData;
}(require("gge-module:export_CastleBasicData").CastleBasicData);
exports.CastleKoreanData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
