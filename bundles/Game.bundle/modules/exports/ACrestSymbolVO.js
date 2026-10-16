Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ACrestSymbolVO(__s3param0) {
    this._id = 0;
    this._id = __s3param0;
  }
  Object.defineProperty(ACrestSymbolVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACrestSymbolVO.prototype, "graphicClassName", {
    get: function () {
      return "extCrestSymbol_" + this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACrestSymbolVO.prototype, "assetUrl", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("CastleCrestSymbols");
    },
    enumerable: true,
    configurable: true
  });
  return ACrestSymbolVO;
}();
exports.ACrestSymbolVO = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
