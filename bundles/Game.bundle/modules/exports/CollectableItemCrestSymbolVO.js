Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CollectableItemCrestSymbolVO(__s3param0 = 0) {
    var __s3local0 = this;
    __s3local0._id = -1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, 1) || this).id = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemCrestSymbolVO, __s1param0);
  CollectableItemCrestSymbolVO.prototype.parseServerObject = function (__s5param0) {
    __s1param0.prototype.parseServerObject.call(this, __s5param0);
    this.id = __dep_exact_f855840627e6e145.int(__s5param0);
  };
  CollectableItemCrestSymbolVO.prototype.parseXmlObject = function (__s7param0) {
    this.id = __dep_exact_f855840627e6e145.int(__s7param0);
  };
  CollectableItemCrestSymbolVO.prototype.updateCrestSymbolVO = function () {
    this._crestSymbolVO = __dep_export_CastleModel.CastleModel.crestSymbolData.getCrestSymbolVOByID(this._id);
  };
  CollectableItemCrestSymbolVO.prototype.clone = function () {
    var __s11local0 = __s1param0.prototype.clone.call(this);
    __s11local0.crestSymbolVO = this.crestSymbolVO;
    return __s11local0;
  };
  CollectableItemCrestSymbolVO.prototype.isCombineAbleWith = function (__s13param0) {
    return false;
  };
  Object.defineProperty(CollectableItemCrestSymbolVO.prototype, "crestSymbolVO", {
    get: function () {
      return this._crestSymbolVO;
    },
    set: function (__s17param0) {
      this._crestSymbolVO = __s17param0;
      this._id = __dep_exact_f855840627e6e145.int(this.crestSymbolVO ? this.crestSymbolVO.id : -1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemCrestSymbolVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (__s21param0) {
      this._id = __s21param0;
      this.updateCrestSymbolVO();
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemCrestSymbolVO.__initialize_static_members = function () {
    CollectableItemCrestSymbolVO.SERVER_KEY = "CS";
    CollectableItemCrestSymbolVO.XML_KEY = "crestSymbolIDs";
  };
  return CollectableItemCrestSymbolVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.CollectableItemCrestSymbolVO = __s0local0;
__s0local0.__initialize_static_members();
