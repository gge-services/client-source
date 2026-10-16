Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleEnum = require("gge-module:export_CastleEnum");
var __dep_export_IsoGeneratorDefenceGate = require("gge-module:export_IsoGeneratorDefenceGate");
var __dep_export_IsoGeneratorDefenceMoat = require("gge-module:export_IsoGeneratorDefenceMoat");
var __dep_export_IsoGeneratorDefenceTower = require("gge-module:export_IsoGeneratorDefenceTower");
var __dep_export_IsoGeneratorDefenceWall = require("gge-module:export_IsoGeneratorDefenceWall");
var __s0local0 = function (__s1param0) {
  function IsoGeneratorDefenceEnum(__s3param0, __s3param1) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this)._clazz = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoGeneratorDefenceEnum, __s1param0);
  Object.defineProperty(IsoGeneratorDefenceEnum.prototype, "clazz", {
    get: function () {
      return this._clazz;
    },
    enumerable: true,
    configurable: true
  });
  IsoGeneratorDefenceEnum.__initialize_static_members = function () {
    IsoGeneratorDefenceEnum.COMMON = new IsoGeneratorDefenceEnum("", __dep_export_IsoGeneratorDefenceCommon.IsoGeneratorDefenceCommon);
    IsoGeneratorDefenceEnum.GATE = new IsoGeneratorDefenceEnum("", __dep_export_IsoGeneratorDefenceGate.IsoGeneratorDefenceGate);
    IsoGeneratorDefenceEnum.TOWER = new IsoGeneratorDefenceEnum("", __dep_export_IsoGeneratorDefenceTower.IsoGeneratorDefenceTower);
    IsoGeneratorDefenceEnum.WALL = new IsoGeneratorDefenceEnum("", __dep_export_IsoGeneratorDefenceWall.IsoGeneratorDefenceWall);
    IsoGeneratorDefenceEnum.MOAT = new IsoGeneratorDefenceEnum("", __dep_export_IsoGeneratorDefenceMoat.IsoGeneratorDefenceMoat);
  };
  return IsoGeneratorDefenceEnum;
}(__dep_export_CastleEnum.CastleEnum);
exports.IsoGeneratorDefenceEnum = __s0local0;
var __dep_export_IsoGeneratorDefenceCommon = require("gge-module:export_IsoGeneratorDefenceCommon");
__s0local0.__initialize_static_members();
