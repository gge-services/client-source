Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function () {
  function CollectablesCosts(__s3param0) {
    this._collectables = __s3param0;
  }
  Object.defineProperty(CollectablesCosts.prototype, "costC1", {
    get: function () {
      return this.basicCostC1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectablesCosts.prototype, "costC2", {
    get: function () {
      return this.basicCostC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectablesCosts.prototype, "basicCostC1", {
    get: function () {
      return this._collectables.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectablesCosts.prototype, "basicCostC2", {
    get: function () {
      return this._collectables.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C2);
    },
    enumerable: true,
    configurable: true
  });
  CollectablesCosts.prototype.getCost = function (__s13param0) {
    return __dep_exact_f855840627e6e145.int(this._collectables.getAmountOrDefaultByTypeVO(__s13param0));
  };
  CollectablesCosts.prototype.getCostTypes = function () {
    return this._collectables.getContainingTypes();
  };
  Object.defineProperty(CollectablesCosts.prototype, "collectables", {
    get: function () {
      return this._collectables;
    },
    enumerable: true,
    configurable: true
  });
  return CollectablesCosts;
}();
exports.CollectablesCosts = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICostVO");
