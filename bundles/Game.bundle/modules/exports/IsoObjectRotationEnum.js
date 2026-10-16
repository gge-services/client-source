Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function IsoObjectRotationEnum(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._id = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this)._id = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoObjectRotationEnum, __s1param0);
  IsoObjectRotationEnum.getTypeById = function (__s5param0) {
    return this.getByProperty(IsoObjectRotationEnum, "id", __s5param0, IsoObjectRotationEnum.NONE);
  };
  Object.defineProperty(IsoObjectRotationEnum.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  IsoObjectRotationEnum.__initialize_static_members = function () {
    IsoObjectRotationEnum.NONE = new IsoObjectRotationEnum("none", 1);
    IsoObjectRotationEnum._1FrameFor2Dir = new IsoObjectRotationEnum("1FrameFor2Dir", 2);
    IsoObjectRotationEnum._2FramesFor4Dir = new IsoObjectRotationEnum("2FramesFor4Dir", 3);
    IsoObjectRotationEnum._4FramesFor4Dir = new IsoObjectRotationEnum("4FramesFor4Dir", 4);
    IsoObjectRotationEnum._4GfxFor4Dir = new IsoObjectRotationEnum("4GfxFor4Dir", 5);
  };
  return IsoObjectRotationEnum;
}(require("gge-module:export_CastleEnum").CastleEnum);
exports.IsoObjectRotationEnum = __s0local0;
__s0local0.__initialize_static_members();
