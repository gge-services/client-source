Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function GlobalOfferVO(__s3param0, __s3param1, __s3param2, __s3param3 = null, __s3param4 = true, __s3param5 = false, __s3param6 = 0) {
    this._offerType = 0;
    this._offerEndTimeStamp = 0;
    this._offerStartTimeStamp = 0;
    this._hasPopup = false;
    this._isTimeless = false;
    this._offerType = __s3param0;
    this._offerStartTimeStamp = __s3param6;
    this._offerEndTimeStamp = __s3param1;
    this._offerScope = __s3param2;
    this._additionalParams = __s3param3;
    this._hasPopup = __s3param4;
    this._isTimeless = __s3param5;
    this._offerStartTimeStamp = this.offerStartTimeStamp;
  }
  Object.defineProperty(GlobalOfferVO.prototype, "offerType", {
    get: function () {
      return this._offerType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalOfferVO.prototype, "offerStartTimeStamp", {
    get: function () {
      return this._offerStartTimeStamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalOfferVO.prototype, "offerEndTimeStamp", {
    get: function () {
      return this._offerEndTimeStamp;
    },
    enumerable: true,
    configurable: true
  });
  GlobalOfferVO.prototype.isOfferExpired = function (__s11param0) {
    return __s11param0 > this._offerEndTimeStamp;
  };
  GlobalOfferVO.prototype.remainingDuration = function (__s13param0) {
    return (this._offerEndTimeStamp - __s13param0) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
  };
  Object.defineProperty(GlobalOfferVO.prototype, "offerScope", {
    get: function () {
      return this._offerScope;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalOfferVO.prototype, "hasPopup", {
    get: function () {
      return this._hasPopup;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalOfferVO.prototype, "isTimeless", {
    get: function () {
      return this._isTimeless;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalOfferVO.prototype, "cashDiscount", {
    get: function () {
      return this._additionalParams.cashDiscount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalOfferVO.prototype, "goldDiscount", {
    get: function () {
      return this._additionalParams.goldDiscount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalOfferVO.prototype, "typeID", {
    get: function () {
      return this._additionalParams.typeID;
    },
    enumerable: true,
    configurable: true
  });
  return GlobalOfferVO;
}();
exports.GlobalOfferVO = __s0local0;
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
