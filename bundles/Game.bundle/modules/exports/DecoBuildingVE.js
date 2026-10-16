Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_KingdomEnum = require("gge-module:export_KingdomEnum");
var __dep_export_IsoAdditionalClipEnum = require("gge-module:export_IsoAdditionalClipEnum");
var __dep_export_ADecoBuildingVE = require("gge-module:export_ADecoBuildingVE");
var __s0local0 = function (__s1param0) {
  function DecoBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DecoBuildingVE, __s1param0);
  DecoBuildingVE.prototype.createAdditionalClips = function () {
    __s1param0.prototype.createAdditionalClips.call(this);
    if (this.vo.type == "KingOfCommunity") {
      this.additionalClips.addClips(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.KOC_FIRE1);
      this.additionalClips.addClips(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.KOC_FIRE2);
      this.additionalClips.addClips(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.KOC_FIRE3);
      this.additionalClips.addClips(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.KOC_FIRE4);
    }
  };
  Object.defineProperty(DecoBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      if (this.decoBuildingVO.allBuildingEffects.length > 0) {
        return Library.CastleInterfaceElements_Icons.Icon_BuildingWithEffect;
      } else {
        return Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big;
      }
    },
    set: function (__s12param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ADecoBuildingVE.ADecoBuildingVE.prototype, "buildingGroundIconClass").set.call(this, __s12param0);
    },
    enumerable: true,
    configurable: true
  });
  DecoBuildingVE.prototype.getRingMenuButtons = function () {
    var __s14local0 = __s1param0.prototype.getRingMenuButtons.call(this);
    __s14local0.push(new __dep_export_RingMenuButtonFusionForge.RingMenuButtonFusionForge());
    return __s14local0;
  };
  DecoBuildingVE.prototype.onAllDispClipsLoaded = function () {
    __s1param0.prototype.onAllDispClipsLoaded.call(this);
    if (this.vo.type == "KingOfCommunity" && this.buildingClip) {
      var __s16local0 = __dep_exact_f855840627e6e145.int(this.isoRenderer.isoData.areaData.areaInfo.kingdomID);
      var __s16local1 = this.buildingClip.currentshownDisplayObject;
      __s16local1.getChildByName("mc_sand").visible = __s16local0 == __dep_export_KingdomEnum.KingdomEnum.DESSERT.id;
      __s16local1.getChildByName("mc_snow").visible = __s16local0 == __dep_export_KingdomEnum.KingdomEnum.ICE.id;
      __s16local1.getChildByName("mc_volcano").visible = __s16local0 == __dep_export_KingdomEnum.KingdomEnum.VOLCANO.id;
    }
  };
  return DecoBuildingVE;
}(__dep_export_ADecoBuildingVE.ADecoBuildingVE);
exports.DecoBuildingVE = __s0local0;
var __dep_export_RingMenuButtonFusionForge = require("gge-module:export_RingMenuButtonFusionForge");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
