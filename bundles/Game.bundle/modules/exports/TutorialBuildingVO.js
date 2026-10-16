Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function TutorialBuildingVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.hitPoints = 100;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TutorialBuildingVO, __s1param0);
  TutorialBuildingVO.prototype.getNameString = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("barracks_name");
  };
  return TutorialBuildingVO;
}(require("gge-module:export_AEffectBuildingVO").AEffectBuildingVO);
exports.TutorialBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
