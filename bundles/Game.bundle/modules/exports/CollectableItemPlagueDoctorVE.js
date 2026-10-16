Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __s0local0 = function (__s1param0) {
  function CollectableItemPlagueDoctorVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemPlagueDoctorVE, __s1param0);
  CollectableItemPlagueDoctorVE.prototype.iconCreate = function () {
    this.dispCreator.addClip(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("Icon_PlaqueC2R", __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL("Icon_PlaqueC2R")));
  };
  return CollectableItemPlagueDoctorVE;
}(require("gge-module:export_ACollectableItemVE").ACollectableItemVE);
exports.CollectableItemPlagueDoctorVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
