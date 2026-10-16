Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function OfferQuestConditionLogicEnum(__s3param0) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OfferQuestConditionLogicEnum, __s1param0);
  OfferQuestConditionLogicEnum.getConditionLogicByName = function (__s5param0) {
    return this.getByProperty(OfferQuestConditionLogicEnum, "name", __s5param0, null);
  };
  OfferQuestConditionLogicEnum.__initialize_static_members = function () {
    OfferQuestConditionLogicEnum.AND = new OfferQuestConditionLogicEnum("AND");
    OfferQuestConditionLogicEnum.OR = new OfferQuestConditionLogicEnum("OR");
    OfferQuestConditionLogicEnum.XOR = new OfferQuestConditionLogicEnum("XOR");
    OfferQuestConditionLogicEnum.NOT = new OfferQuestConditionLogicEnum("NOT");
  };
  return OfferQuestConditionLogicEnum;
}(__dep_exact_9e901e8e2483a22f.BasicEnum);
exports.OfferQuestConditionLogicEnum = __s0local0;
__s0local0.__initialize_static_members();
