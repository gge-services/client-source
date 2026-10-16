Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_IsoAdditionalClipEnum = require("gge-module:export_IsoAdditionalClipEnum");
var __dep_export_ADecoBuildingVE = require("gge-module:export_ADecoBuildingVE");
var __s0local0 = function (__s1param0) {
  function CustomDecoBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CustomDecoBuildingVE, __s1param0);
  CustomDecoBuildingVE.prototype.createAdditionalClips = function () {
    __s1param0.prototype.createAdditionalClips.call(this);
    if (!!this.buildingVO.buildingState.isFunctionally && (this.vo.wodId == __dep_export_ClientConstCastle.ClientConstCastle.COLOSS_DECO_WOD || this.vo.wodId == __dep_export_ClientConstCastle.ClientConstCastle.COIN_COLOSSUS_DECO_WOD)) {
      this.additionalClips.addClips(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.COLOSSUS_FIRE);
    }
  };
  Object.defineProperty(CustomDecoBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big;
    },
    set: function (__s10param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ADecoBuildingVE.ADecoBuildingVE.prototype, "buildingGroundIconClass").set.call(this, __s10param0);
    },
    enumerable: true,
    configurable: true
  });
  return CustomDecoBuildingVE;
}(__dep_export_ADecoBuildingVE.ADecoBuildingVE);
exports.CustomDecoBuildingVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
