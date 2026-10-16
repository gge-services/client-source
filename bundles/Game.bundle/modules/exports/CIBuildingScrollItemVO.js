Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CIBuildingScrollItemVO(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._buildingVO = __s3param0;
    __s3local0._interactionData = __s3param1;
    __s3local0._slotClickCallback = __s3param2;
    __s3local0._scrollItemClickCallback = __s3param3;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CIBuildingScrollItemVO, __s1param0);
  Object.defineProperty(CIBuildingScrollItemVO.prototype, "buildingVO", {
    get: function () {
      return this._buildingVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CIBuildingScrollItemVO.prototype, "interactionData", {
    get: function () {
      return this._interactionData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CIBuildingScrollItemVO.prototype, "slotClickCallback", {
    get: function () {
      return this._slotClickCallback;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CIBuildingScrollItemVO.prototype, "scrollItemClickCallback", {
    get: function () {
      return this._scrollItemClickCallback;
    },
    enumerable: true,
    configurable: true
  });
  return CIBuildingScrollItemVO;
}(require("gge-module:exact_9e901e8e2483a22f").ScrollItemVO);
exports.CIBuildingScrollItemVO = __s0local0;
