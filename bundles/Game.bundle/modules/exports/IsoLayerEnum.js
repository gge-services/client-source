Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function IsoLayerEnum(__s3param0) {
    return __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoLayerEnum, __s1param0);
  IsoLayerEnum.__initialize_static_members = function () {
    IsoLayerEnum.BACKGROUND = new IsoLayerEnum("background");
    IsoLayerEnum.GROUND = new IsoLayerEnum("ground");
    IsoLayerEnum.GROUND_FILLER = new IsoLayerEnum("groundFiller");
    IsoLayerEnum.MOAT = new IsoLayerEnum("moat");
    IsoLayerEnum.STATIC_SURROUNDINGS = new IsoLayerEnum("surroundings");
    IsoLayerEnum.RESOURCE_FIELDS = new IsoLayerEnum("resourceFields");
    IsoLayerEnum.EXPAND_ARROWS = new IsoLayerEnum("expandArrows");
    IsoLayerEnum.ISO_OBJECTS = new IsoLayerEnum("isoObjects");
    IsoLayerEnum.INTERACTION = new IsoLayerEnum("interaction");
    IsoLayerEnum.FOG = new IsoLayerEnum("fog");
    IsoLayerEnum.EFFECT = new IsoLayerEnum("effect");
    IsoLayerEnum.DEBUG_Z_SORT = new IsoLayerEnum("zSort");
    IsoLayerEnum.DEBUG = new IsoLayerEnum("debug");
    IsoLayerEnum.UNKNOWN = new IsoLayerEnum("unknown");
  };
  return IsoLayerEnum;
}(require("gge-module:export_CastleEnum").CastleEnum);
exports.IsoLayerEnum = __s0local0;
__s0local0.__initialize_static_members();
