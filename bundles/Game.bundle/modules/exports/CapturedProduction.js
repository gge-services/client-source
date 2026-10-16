Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CapturedProduction(__s3param0, __s3param1) {
    this._capturedProductionValue = 0;
    this._productionType = __s3param0;
    this._capturedProductionValue = __s3param1;
  }
  Object.defineProperty(CapturedProduction.prototype, "productionType", {
    get: function () {
      return this._productionType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CapturedProduction.prototype, "capturedProductionValue", {
    get: function () {
      return this._capturedProductionValue;
    },
    enumerable: true,
    configurable: true
  });
  CapturedProduction.__initialize_static_members = function () {
    CapturedProduction.CAPTURED_PRODUCTION = "capturedProduction";
    CapturedProduction.FOOD = "Food";
    CapturedProduction.WOOD = "Wood";
    CapturedProduction.STONE = "Stone";
    CapturedProduction.CAPTURED_PRODUCTION_TYPES = [CapturedProduction.FOOD, CapturedProduction.WOOD, CapturedProduction.STONE];
  };
  return CapturedProduction;
}();
exports.CapturedProduction = __s0local0;
__s0local0.__initialize_static_members();
