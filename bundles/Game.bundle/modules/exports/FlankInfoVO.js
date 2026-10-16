Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function FlankInfoVO(__s3param0, __s3param1 = null, __s3param2 = false) {
    this._soldierAmount = 0;
    this._soldierAmountLost = 0;
    this._toolsAmountUsed = 0;
    this.isPreOrPostWave = false;
    if (__s3param1) {
      this.initAsSummary(__s3param1, __s3param2);
    } else {
      this.initByParams(__s3param0);
    }
  }
  FlankInfoVO.prototype.initAsSummary = function (__s7param0, __s7param1) {
    var __s7local0;
    this._soldierAmount = 0;
    this._soldierAmountLost = 0;
    this._toolsAmountUsed = 0;
    var __s7local1 = false;
    if (__s7param0 != null) {
      for (var __s7local2 = 0, __s7local3 = __s7param0; __s7local2 < __s7local3.length; __s7local2++) {
        var __s7local4 = __s7local3[__s7local2];
        if (__s7local4 !== undefined) {
          if (__s7local4.isPreOrPostWave) {
            this._soldierAmount = __s7local4._soldierAmount;
            __s7local1 = true;
          } else if (!__s7local1) {
            this._soldierAmount += __s7local4.soldierAmount;
            if (__s7param1 && __s7local0) {
              this._soldierAmount -= __s7local0.soldierAmountSurvived;
            }
            __s7local0 = __s7local4;
          }
          this._soldierAmountLost += __s7local4.soldierAmountLost;
          this._toolsAmountUsed += __s7local4.toolsAmountUsed;
        }
      }
    }
  };
  FlankInfoVO.prototype.initByParams = function (__s16param0) {
    this._soldierAmount = __dep_exact_f855840627e6e145.int(__s16param0[FlankInfoVO.SOLDIERS_AMOUNT]);
    this._toolsAmountUsed = __dep_exact_f855840627e6e145.int(__s16param0[FlankInfoVO.TOOLS_USED]);
    this._soldierAmountLost = __dep_exact_f855840627e6e145.int(__s16param0[FlankInfoVO.SOLDIERS_LOST]);
  };
  Object.defineProperty(FlankInfoVO.prototype, "soldierAmount", {
    get: function () {
      return this._soldierAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FlankInfoVO.prototype, "soldierAmountLost", {
    get: function () {
      return this._soldierAmountLost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FlankInfoVO.prototype, "toolsAmountUsed", {
    get: function () {
      return this._toolsAmountUsed;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FlankInfoVO.prototype, "soldierAmountSurvived", {
    get: function () {
      return this._soldierAmount + this._soldierAmountLost;
    },
    enumerable: true,
    configurable: true
  });
  FlankInfoVO.__initialize_static_members = function () {
    FlankInfoVO.SOLDIERS_AMOUNT = 0;
    FlankInfoVO.TOOLS_USED = 1;
    FlankInfoVO.SOLDIERS_LOST = 2;
  };
  return FlankInfoVO;
}();
exports.FlankInfoVO = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
__s0local0.__initialize_static_members();
