Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function AllianceCrestEnum(__s3param0, __s3param1 = false) {
    var __s3local0 = this;
    __s3local0._isSimple = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this)._isSimple = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceCrestEnum, __s1param0);
  Object.defineProperty(AllianceCrestEnum.prototype, "isSimpleCrest", {
    get: function () {
      return this._isSimple;
    },
    enumerable: true,
    configurable: true
  });
  AllianceCrestEnum.__initialize_static_members = function () {
    AllianceCrestEnum.DEFAULT_CREST = new AllianceCrestEnum("Normal");
    AllianceCrestEnum.DEFAULT_CREST_SIMPLE = new AllianceCrestEnum("Simple", true);
  };
  return AllianceCrestEnum;
}(require("gge-module:export_CastleEnum").CastleEnum);
exports.AllianceCrestEnum = __s0local0;
__s0local0.__initialize_static_members();
