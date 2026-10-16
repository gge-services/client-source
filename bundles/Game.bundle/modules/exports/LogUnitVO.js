Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function LogUnitVO(__s3param0, __s3param1 = null, __s3param2 = false) {
    this._wodID = 0;
    this._count = 0;
    this._lost = 0;
    this.isPreOrPostWave = false;
    if (__s3param1) {
      this.initAsSummary(__s3param1, __s3param2);
    } else {
      this.initByParams(__s3param0);
    }
  }
  LogUnitVO.prototype.initByParams = function (__s7param0) {
    this._wodID = __dep_exact_f855840627e6e145.int(__s7param0[LogUnitVO.WOD_ID]);
    this._count = __dep_exact_f855840627e6e145.int(__s7param0[LogUnitVO.AMOUNT]);
    this._lost = __dep_exact_f855840627e6e145.int(__s7param0[LogUnitVO.AMOUNT_LOST]);
  };
  LogUnitVO.prototype.initAsSummary = function (__s9param0, __s9param1) {
    this._wodID = __dep_exact_f855840627e6e145.int(__s9param0[0].wodID);
    this._count = 0;
    this._lost = 0;
    var __s9local0;
    var __s9local1 = false;
    if (__s9param0 != null) {
      for (var __s9local2 = 0, __s9local3 = __s9param0; __s9local2 < __s9local3.length; __s9local2++) {
        var __s9local4 = __s9local3[__s9local2];
        if (__s9local4 !== undefined) {
          if (__s9local4.isPreOrPostWave) {
            this._count = __s9local4.count;
            __s9local1 = true;
          } else if (!__s9local1) {
            this._count += __s9local4.count;
            if (__s9param1 && __s9local0) {
              this._count -= __s9local0.count + __s9local0.lost;
            }
            __s9local0 = __s9local4;
          }
          this._lost += __s9local4.lost;
        }
      }
    }
  };
  Object.defineProperty(LogUnitVO.prototype, "wodID", {
    get: function () {
      return this._wodID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LogUnitVO.prototype, "count", {
    get: function () {
      return this._count;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LogUnitVO.prototype, "lost", {
    get: function () {
      return this._lost;
    },
    enumerable: true,
    configurable: true
  });
  LogUnitVO.__initialize_static_members = function () {
    LogUnitVO.WOD_ID = 0;
    LogUnitVO.AMOUNT = 1;
    LogUnitVO.AMOUNT_LOST = 2;
  };
  return LogUnitVO;
}();
exports.LogUnitVO = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
__s0local0.__initialize_static_members();
