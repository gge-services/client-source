Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_OfferQuestConditionInteger = require("gge-module:class_OfferQuestConditionInteger");
var __dep_class_OfferQuestConditionContainer = require("gge-module:class_OfferQuestConditionContainer");
var __s0local0 = function () {
  function BasicOfferQuestConditionFactory(__s3param0) {
    this.modelData = __s3param0;
  }
  BasicOfferQuestConditionFactory.prototype.createOfferQuestCondition = function (__s5param0, __s5param1) {
    return new __dep_class_OfferQuestConditionInteger.OfferQuestConditionInteger(__s5param0, __s5param1);
  };
  BasicOfferQuestConditionFactory.prototype.createOfferQuestContainer = function (__s7param0) {
    return new __dep_class_OfferQuestConditionContainer.OfferQuestConditionContainer(__s7param0, this.modelData);
  };
  BasicOfferQuestConditionFactory.prototype.dispose = function () {
    this.modelData = null;
  };
  return BasicOfferQuestConditionFactory;
}();
exports.BasicOfferQuestConditionFactory = __s0local0;
