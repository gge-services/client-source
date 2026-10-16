Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_BasicEquippableVO = require("gge-module:export_BasicEquippableVO");
var __dep_export_CastleGemVO = require("gge-module:export_CastleGemVO");
var __s0local0 = function (__s1param0) {
  function RandomGemVO(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._id = __s3param0.levelID;
    __s3local0._upgradeId = -1;
    __s3local0._levelInfos = __s3param0;
    __s3local0._lordType = __dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_ALL;
    __s3local0._slotType = __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ALL;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RandomGemVO, __s1param0);
  Object.defineProperty(RandomGemVO.prototype, "nameString", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("gem_effect_name_gemRandom", [this.level]);
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGemVO.CastleGemVO.prototype, "nameString").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RandomGemVO.prototype, "bonusDescriptionText", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("gem_effect_description_gemRandom", [this.level]);
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGemVO.CastleGemVO.prototype, "bonusDescriptionText").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  return RandomGemVO;
}(__dep_export_CastleGemVO.CastleGemVO);
exports.RandomGemVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEquippableVO");
