Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoAdditionalClipEnum = require("gge-module:export_IsoAdditionalClipEnum");
var __s0local0 = function (__s1param0) {
  function ATreasurechestSurroundingsVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ATreasurechestSurroundingsVE, __s1param0);
  ATreasurechestSurroundingsVE.prototype.createAdditionalClips = function () {
    __s1param0.prototype.createAdditionalClips.call(this);
    this.additionalClips.addClips(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.EXCLAMATION_MARK);
  };
  Object.defineProperty(ATreasurechestSurroundingsVE.prototype, "treasureChestBuildingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return ATreasurechestSurroundingsVE;
}(require("gge-module:export_ASurroundingBuildingVE").ASurroundingBuildingVE);
exports.ATreasurechestSurroundingsVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
