Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleStormIslandsTitleLostDialogProperties(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._messageVO = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStormIslandsTitleLostDialogProperties, __s1param0);
  Object.defineProperty(CastleStormIslandsTitleLostDialogProperties.prototype, "isStormLord", {
    get: function () {
      return this.messageVO.titleID == CastleStormIslandsTitleLostDialogProperties.STORM_LORD_TITLE_ID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStormIslandsTitleLostDialogProperties.prototype, "messageVO", {
    get: function () {
      return this._messageVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleStormIslandsTitleLostDialogProperties.STORM_LORD_TITLE_ID = 50;
  return CastleStormIslandsTitleLostDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleStormIslandsTitleLostDialogProperties = __s0local0;
