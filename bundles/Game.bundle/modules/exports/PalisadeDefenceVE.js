Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastlewallDefenceVE = require("gge-module:export_CastlewallDefenceVE");
var __s0local0 = function (__s1param0) {
  function PalisadeDefenceVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PalisadeDefenceVE, __s1param0);
  PalisadeDefenceVE.prototype.updateFlagVisibility = function () {};
  Object.defineProperty(PalisadeDefenceVE.prototype, "assetClipName", {
    get: function () {
      return "SeasonCamp_Castlewall";
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlewallDefenceVE.CastlewallDefenceVE.prototype, "assetClipName").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PalisadeDefenceVE.prototype, "assetFileName", {
    get: function () {
      return "Castlewall_SeasonCamp_" + __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.eventId;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlewallDefenceVE.CastlewallDefenceVE.prototype, "assetFileName").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  return PalisadeDefenceVE;
}(__dep_export_CastlewallDefenceVE.CastlewallDefenceVE);
exports.PalisadeDefenceVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
