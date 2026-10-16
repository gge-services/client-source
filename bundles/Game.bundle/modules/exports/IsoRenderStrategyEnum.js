Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function IsoRenderStrategyEnum(__s3param0) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoRenderStrategyEnum, __s1param0);
  Object.defineProperty(IsoRenderStrategyEnum, "set_defaultBuildMode", {
    get: function () {
      return [IsoRenderStrategyEnum.BUILD_MODE, IsoRenderStrategyEnum.TRANSPARENT_DEFENCE_VIEW];
    },
    enumerable: true,
    configurable: true
  });
  IsoRenderStrategyEnum.__initialize_static_members = function () {
    IsoRenderStrategyEnum.BUILD_MODE = new IsoRenderStrategyEnum("buildMode");
    IsoRenderStrategyEnum.BUILDING_GROUND_VIEW = new IsoRenderStrategyEnum("buildingGroundView");
    IsoRenderStrategyEnum.TRANSPARENT_DEFENCE_VIEW = new IsoRenderStrategyEnum("transparentDefenceView");
    IsoRenderStrategyEnum.UPGRADE_VIEW = new IsoRenderStrategyEnum("upgradeView");
  };
  return IsoRenderStrategyEnum;
}(require("gge-module:export_CastleEnum").CastleEnum);
exports.IsoRenderStrategyEnum = __s0local0;
__s0local0.__initialize_static_members();
