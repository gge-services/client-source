Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function IsoExpansionEnum(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._id = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this)._id = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoExpansionEnum, __s1param0);
  IsoExpansionEnum.getTypeById = function (__s5param0) {
    return this.getByProperty(IsoExpansionEnum, "id", __s5param0, IsoExpansionEnum.NORMAL);
  };
  Object.defineProperty(IsoExpansionEnum.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  IsoExpansionEnum.__initialize_static_members = function () {
    IsoExpansionEnum.PREMIUM = new IsoExpansionEnum("premium", 0);
    IsoExpansionEnum.NORMAL = new IsoExpansionEnum("normal", 1);
  };
  return IsoExpansionEnum;
}(require("gge-module:export_CastleEnum").CastleEnum);
exports.IsoExpansionEnum = __s0local0;
__s0local0.__initialize_static_members();
