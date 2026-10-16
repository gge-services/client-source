Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function PeaceOfferVO(__s3param0, __s3param1, __s3param2 = 50, __s3param3 = true, __s3param4 = 0) {
    this._percentageOfferedOrDemanded = 0;
    this._isDemanded = false;
    this._opposingAllianceID = 0;
    this.remainingTimeInSeconds = 0;
    this._opposingAllianceID = __s3param0;
    this._opposingAllianceName = __s3param1;
    this._percentageOfferedOrDemanded = __s3param2;
    this._isDemanded = __s3param3;
    this._endTimestamp = new Date();
    this._endTimestamp.setTime(this._endTimestamp.getTime() + __s3param4 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
    this.remainingTimeInSeconds = __dep_exact_f855840627e6e145.int(__s3param4);
  }
  Object.defineProperty(PeaceOfferVO.prototype, "endTimestamp", {
    get: function () {
      return this._endTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PeaceOfferVO.prototype, "percentageOfferedOrDemanded", {
    get: function () {
      return this._percentageOfferedOrDemanded;
    },
    set: function (__s9param0) {
      this._percentageOfferedOrDemanded = __s9param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PeaceOfferVO.prototype, "isDemanded", {
    get: function () {
      return this._isDemanded;
    },
    set: function (__s13param0) {
      this._isDemanded = __s13param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PeaceOfferVO.prototype, "opposingAllianceID", {
    get: function () {
      return this._opposingAllianceID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PeaceOfferVO.prototype, "opposingAllianceName", {
    get: function () {
      return this._opposingAllianceName;
    },
    enumerable: true,
    configurable: true
  });
  return PeaceOfferVO;
}();
exports.PeaceOfferVO = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
