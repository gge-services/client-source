Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function IsoObjectLayerEnum(__s3param0) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoObjectLayerEnum, __s1param0);
  IsoObjectLayerEnum.__initialize_static_members = function () {
    IsoObjectLayerEnum.FLOOR = new IsoObjectLayerEnum("floor");
    IsoObjectLayerEnum.BUILDING_GROUND = new IsoObjectLayerEnum("buildingGround");
    IsoObjectLayerEnum.DISP = new IsoObjectLayerEnum("disp");
    IsoObjectLayerEnum.ADDITIONAL_CLIPS = new IsoObjectLayerEnum("additionalClips");
    IsoObjectLayerEnum.STATUS_ICONS = new IsoObjectLayerEnum("statusIcons");
    IsoObjectLayerEnum.RESOURCES = new IsoObjectLayerEnum("resources");
    IsoObjectLayerEnum.DEBUG_CROSS = new IsoObjectLayerEnum("debugCross");
  };
  return IsoObjectLayerEnum;
}(require("gge-module:export_CastleEnum").CastleEnum);
exports.IsoObjectLayerEnum = __s0local0;
__s0local0.__initialize_static_members();
