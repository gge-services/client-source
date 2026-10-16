Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function PremiumFestivalItemVO(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5, __s3param6, __s3param7, __s3param8) {
    this.minLevel = 0;
    this.maxLevel = 0;
    this.foodCost = 0;
    this.c2Cost = 0;
    this.durationInSeconds = 0;
    this.boost = 0;
    this.sortOrder = 0;
    this.id = 0;
    this.id = __s3param0;
    this.minLevel = __s3param1;
    this.maxLevel = __s3param2;
    this.durationInSeconds = __s3param3;
    this.boost = __s3param4;
    this.foodCost = __s3param5;
    this.c2Cost = __s3param6;
    this.type = __s3param7;
    this.sortOrder = __s3param8;
  }
  Object.defineProperty(PremiumFestivalItemVO.prototype, "cost", {
    get: function () {
      if (this.foodCost > 0) {
        return this.foodCost;
      } else {
        return this.c2Cost;
      }
    },
    enumerable: true,
    configurable: true
  });
  PremiumFestivalItemVO.prototype.hasC2Costs = function () {
    return this.c2Cost > 0;
  };
  Object.defineProperty(PremiumFestivalItemVO.prototype, "assetName", {
    get: function () {
      return "Festival_Top_" + this.assetID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumFestivalItemVO.prototype, "assetID", {
    get: function () {
      return this.id % 6;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumFestivalItemVO.prototype, "nameTextID", {
    get: function () {
      return "dialog_festival_" + this.type + "Event";
    },
    enumerable: true,
    configurable: true
  });
  return PremiumFestivalItemVO;
}();
exports.PremiumFestivalItemVO = __s0local0;
