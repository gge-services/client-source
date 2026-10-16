Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function ConstructionItemsActionProperties(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4 = -1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.lostAndFoundID = 0;
    __s3local0._constructionItemVO = __s3param0;
    __s3local0._slotVO = __s3param1;
    __s3local0._buildingVO = __s3param2;
    __s3local0._hideCallback = __s3param3;
    __s3local0.lostAndFoundID = __s3param4;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ConstructionItemsActionProperties, __s1param0);
  Object.defineProperty(ConstructionItemsActionProperties.prototype, "buildingVO", {
    get: function () {
      return this._buildingVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemsActionProperties.prototype, "constructionItemVO", {
    get: function () {
      return this._constructionItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemsActionProperties.prototype, "slotVO", {
    get: function () {
      return this._slotVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemsActionProperties.prototype, "hideCallback", {
    get: function () {
      return this._hideCallback;
    },
    enumerable: true,
    configurable: true
  });
  return ConstructionItemsActionProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.ConstructionItemsActionProperties = __s0local0;
