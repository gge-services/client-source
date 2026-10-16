Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __s0local0 = function (__s1param0) {
  function CastleArtifactEventDialogProperties(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.eventVO = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleArtifactEventDialogProperties, __s1param0);
  Object.defineProperty(CastleArtifactEventDialogProperties.prototype, "skinId", {
    get: function () {
      if (this.eventVO.skinID == __dep_exact_26a421b704832cff.ArtifactConst.SKIN_RENEGADE_DESERT_KINGDOM || this.eventVO.skinID == __dep_exact_26a421b704832cff.ArtifactConst.SKIN_RENEGADE_VOLCANO_KINGDOM) {
        return __dep_exact_26a421b704832cff.ArtifactConst.SKIN_RENEGADE_ICE_KINGDOM;
      } else {
        return this.eventVO.skinID;
      }
    },
    enumerable: true,
    configurable: true
  });
  return CastleArtifactEventDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleArtifactEventDialogProperties = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISkinnable");
