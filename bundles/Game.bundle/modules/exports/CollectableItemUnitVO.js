Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CollectableItemUnitVO(__s3param0 = -1, __s3param1 = 0) {
    var __s3local0 = this;
    __s3local0._id = -1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param1) || this).id = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemUnitVO, __s1param0);
  CollectableItemUnitVO.prototype.parseServerObject = function (__s5param0) {
    __s1param0.prototype.parseServerObject.call(this, __s5param0);
    this.id = __dep_exact_f855840627e6e145.int(__s5param0[0]);
    this.amount = __s5param0[1];
  };
  CollectableItemUnitVO.prototype.parseXmlObject = function (__s7param0) {
    var __s7local0 = __s7param0.split("+");
    this.id = __dep_exact_f855840627e6e145.int(__s7local0[0]);
    this.amount = __dep_exact_f855840627e6e145.int(__s7local0[1]);
  };
  CollectableItemUnitVO.prototype.updateUnitVO = function () {
    this._unitVO = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_UNIT).get(this.id);
  };
  CollectableItemUnitVO.prototype.clone = function () {
    var __s11local0 = __s1param0.prototype.clone.call(this);
    __s11local0.unitVO = this.unitVO;
    return __s11local0;
  };
  CollectableItemUnitVO.prototype.getDescriptionTextId = function () {
    if (this.unitVO) {
      return this.unitVO.getShortInfoString();
    } else {
      return __s1param0.prototype.getDescriptionTextId.call(this);
    }
  };
  CollectableItemUnitVO.prototype.getNameTextId = function () {
    if (this.unitVO) {
      return this.unitVO.getNameString();
    } else {
      return __s1param0.prototype.getNameTextId.call(this);
    }
  };
  CollectableItemUnitVO.prototype.isCombineAbleWith = function (__s21param0) {
    return __s1param0.prototype.isCombineAbleWith.call(this, __s21param0) && this.id == __s21param0.id;
  };
  Object.defineProperty(CollectableItemUnitVO.prototype, "unitVO", {
    get: function () {
      return this._unitVO;
    },
    set: function (__s25param0) {
      this._unitVO = __s25param0;
      this._id = __dep_exact_f855840627e6e145.int(this._unitVO ? this._unitVO.wodId : -1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemUnitVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (__s29param0) {
      this._id = __s29param0;
      this.updateUnitVO();
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemUnitVO.__initialize_static_members = function () {
    CollectableItemUnitVO.SERVER_KEY = "U";
    CollectableItemUnitVO.XML_KEY = "units";
  };
  return CollectableItemUnitVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.CollectableItemUnitVO = __s0local0;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
__s0local0.__initialize_static_members();
