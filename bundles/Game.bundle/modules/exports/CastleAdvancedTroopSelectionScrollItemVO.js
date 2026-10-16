Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function CastleAdvancedTroopSelectionScrollItemVO(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5) {
    var __s3local0 = this;
    __s3local0.selectedAmount = 0;
    __s3local0.freeUnitSpace = 0;
    __s3local0.fightDialogType = __dep_exact_f855840627e6e145.int(__dep_export_CastleAdvancedTroopSelectionComponent.CastleAdvancedTroopSelectionComponent.TYPE_ATTACK);
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).unitVO = __s3param0;
    __s3local0.selectedAmount = __s3param1;
    __s3local0.sourceArea = __s3param2;
    __s3local0.fightDialogType = __s3param3;
    __s3local0.possibleSlots = __s3param4;
    __s3local0.freeUnitSpace = __s3param5;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAdvancedTroopSelectionScrollItemVO, __s1param0);
  Object.defineProperty(CastleAdvancedTroopSelectionScrollItemVO.prototype, "maxAmount", {
    get: function () {
      return Math.min(this.freeUnitSpace + this.selectedAmount, this.unitVO.inventoryAmount);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAdvancedTroopSelectionScrollItemVO.prototype, "maxToolWaveAmount", {
    get: function () {
      if (this.fightDialogType == __dep_export_CastleAdvancedTroopSelectionComponent.CastleAdvancedTroopSelectionComponent.TYPE_ATTACK) {
        return Math.min(this.maxAmount, this.unitVO.amountPerWave);
      } else {
        return this.maxAmount;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAdvancedTroopSelectionScrollItemVO.prototype, "isAdjustable", {
    get: function () {
      return this.possibleSlots.length > 0 && this.freeUnitSpace > 0 && this.unitVO.inventoryAmount > 0 || this.selectedAmount > 0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAdvancedTroopSelectionScrollItemVO;
}(__dep_exact_9e901e8e2483a22f.ScrollItemVO);
exports.CastleAdvancedTroopSelectionScrollItemVO = __s0local0;
var __dep_export_CastleAdvancedTroopSelectionComponent = require("gge-module:export_CastleAdvancedTroopSelectionComponent");
