Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastlewallDefenceVE = require("gge-module:export_CastlewallDefenceVE");
var __s0local0 = function (__s1param0) {
  function FactionPalisadeDefenceVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionPalisadeDefenceVE, __s1param0);
  FactionPalisadeDefenceVE.prototype.updateFlagVisibility = function () {};
  Object.defineProperty(FactionPalisadeDefenceVE.prototype, "assetClipName", {
    get: function () {
      var __s7local0 = __dep_exact_f855840627e6e145.int(this.vo.isoData.objects.defences.currentWallLevel);
      return "FactionCamp_Castlewall_Level" + Math.min(__s7local0, 3);
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlewallDefenceVE.CastlewallDefenceVE.prototype, "assetClipName").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionPalisadeDefenceVE.prototype, "assetFileName", {
    get: function () {
      return "Event" + __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION + "Lib";
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlewallDefenceVE.CastlewallDefenceVE.prototype, "assetFileName").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  return FactionPalisadeDefenceVE;
}(__dep_export_CastlewallDefenceVE.CastlewallDefenceVE);
exports.FactionPalisadeDefenceVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
