Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoAdditionalClipEnum = require("gge-module:export_IsoAdditionalClipEnum");
var __s0local0 = function (__s1param0) {
  function OfferBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OfferBuildingVE, __s1param0);
  OfferBuildingVE.prototype.createDisp = function () {
    this.dispComponent.addClip(this.loadExternalClip(this.assetClipName));
  };
  OfferBuildingVE.prototype.createAdditionalClips = function () {
    this.additionalClips.addClips(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.CAMP_FIRE);
    this.additionalClips.addClips(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.EXCLAMATION_MARK);
  };
  OfferBuildingVE.prototype.onMouseClick = function () {
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_PRIVATE_OFFER_DIALOG_COMMAND, this.offerBuildingVO.offerVO);
  };
  Object.defineProperty(OfferBuildingVE.prototype, "offerBuildingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return OfferBuildingVE;
}(require("gge-module:export_AEventBuildingVE").AEventBuildingVE);
exports.OfferBuildingVE = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
