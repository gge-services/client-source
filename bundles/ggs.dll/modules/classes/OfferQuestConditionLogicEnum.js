Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function OfferQuestConditionLogicEnum(__s3param0) {
    this._operation = __s3param0;
  }
  OfferQuestConditionLogicEnum.getConditionLogicByName = function (__s5param0) {
    switch (__s5param0) {
      case "AND":
        return OfferQuestConditionLogicEnum.AND;
      case "OR":
        return OfferQuestConditionLogicEnum.OR;
      case "XOR":
        return OfferQuestConditionLogicEnum.XOR;
      case "NOT":
        return OfferQuestConditionLogicEnum.NOT;
    }
    return null;
  };
  OfferQuestConditionLogicEnum.prototype.toString = function () {
    return this._operation;
  };
  OfferQuestConditionLogicEnum.AND = new OfferQuestConditionLogicEnum("AND");
  OfferQuestConditionLogicEnum.OR = new OfferQuestConditionLogicEnum("OR");
  OfferQuestConditionLogicEnum.XOR = new OfferQuestConditionLogicEnum("XOR");
  OfferQuestConditionLogicEnum.NOT = new OfferQuestConditionLogicEnum("NOT");
  return OfferQuestConditionLogicEnum;
}();
exports.OfferQuestConditionLogicEnum = __s0local0;
