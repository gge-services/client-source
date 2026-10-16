Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function JudgementConditionEnum(__s3param0, __s3param1) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this)._collectable = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(JudgementConditionEnum, __s1param0);
  JudgementConditionEnum.getConditionTypeFromString = function (__s5param0) {
    return this.getByProperty(JudgementConditionEnum, "name", __s5param0, JudgementConditionEnum.UNDEFINED);
  };
  Object.defineProperty(JudgementConditionEnum.prototype, "collectable", {
    get: function () {
      return this._collectable;
    },
    enumerable: true,
    configurable: true
  });
  JudgementConditionEnum.__initialize_static_members = function () {
    JudgementConditionEnum.UNDEFINED = new JudgementConditionEnum("UNDEFINED", null);
    JudgementConditionEnum.WOOD = new JudgementConditionEnum("wood", __dep_export_CollectableEnum.CollectableEnum.WOOD);
    JudgementConditionEnum.STONE = new JudgementConditionEnum("stone", __dep_export_CollectableEnum.CollectableEnum.STONE);
    JudgementConditionEnum.C1 = new JudgementConditionEnum("currency1", __dep_export_CollectableEnum.CollectableEnum.C1);
    JudgementConditionEnum.UNITS = new JudgementConditionEnum("units", __dep_export_CollectableEnum.CollectableEnum.UNITS);
  };
  return JudgementConditionEnum;
}(require("gge-module:export_CastleEnum").CastleEnum);
exports.JudgementConditionEnum = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
