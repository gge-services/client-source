Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleGenericBuyDialogProperties() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0.buyType = -1;
    __s3local0.buyTypeId = -1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleGenericBuyDialogProperties, __s1param0);
  CastleGenericBuyDialogProperties.prototype.parseDataFromScrollItem = function (__s5param0) {
    this.specialEventVO = __s5param0.specialEventVO;
    this.eventPackageVO = __s5param0.eventPackageVO;
    this.buyType = __s5param0.buyType;
    this.buyTypeId = __s5param0.buyTypeId;
    if (this.privateOfferVO == null) {
      this.privateOfferVO = __s5param0.offerVO;
    }
  };
  return CastleGenericBuyDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleGenericBuyDialogProperties = __s0local0;
