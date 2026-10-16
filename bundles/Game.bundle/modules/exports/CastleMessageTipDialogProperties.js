Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleMessageTipDialogProperties(__s3param0 = null, __s3param1 = -1, __s3param2 = -1) {
    var __s3local0 = this;
    __s3local0._offerID = 0;
    __s3local0._privateOfferType = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).messageVO = __s3param0;
    if (__s3param0) {
      __s3local0._offerID = __s3param0.offerID;
      __s3local0._privateOfferType = __s3param0.privateOfferType;
    } else {
      __s3local0._offerID = __s3param1;
      __s3local0._privateOfferType = __s3param2;
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMessageTipDialogProperties, __s1param0);
  Object.defineProperty(CastleMessageTipDialogProperties.prototype, "offerID", {
    get: function () {
      return this._offerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMessageTipDialogProperties.prototype, "privateOfferType", {
    get: function () {
      return this._privateOfferType;
    },
    enumerable: true,
    configurable: true
  });
  return CastleMessageTipDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleMessageTipDialogProperties = __s0local0;
