Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function ACollectableItemEquipmentVO(__s3param0 = 0) {
    var __s3local0 = this;
    __s3local0._id = -1;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACollectableItemEquipmentVO, __s1param0);
  ACollectableItemEquipmentVO.prototype.updateEquipmentVO = function () {
    this.equipmentVO = __dep_export_CastleModel.CastleModel.equipData.getEquipmentByUniqueID(this.id, true);
  };
  ACollectableItemEquipmentVO.prototype.equals = function (__s7param0) {
    return __s1param0.prototype.equals.call(this, __s7param0) && this.id == __s7param0.id;
  };
  ACollectableItemEquipmentVO.prototype.clone = function () {
    var __s9local0 = __s1param0.prototype.clone.call(this);
    __s9local0.equipmentVO = this.equipmentVO;
    return __s9local0;
  };
  ACollectableItemEquipmentVO.prototype.getDescriptionTextId = function () {
    if (this.equipmentVO && this.equipmentVO.visualRareID == __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_UNIQUE) {
      return this.equipmentVO.extraTextId;
    }
    return "randomEquipment_short_info";
  };
  ACollectableItemEquipmentVO.prototype.getNameTextId = function () {
    if (this.equipmentVO) {
      return this.equipmentVO.nameString;
    } else {
      return __s1param0.prototype.getNameTextId.call(this);
    }
  };
  ACollectableItemEquipmentVO.prototype.isCombineAbleWith = function (__s18param0) {
    return false;
  };
  Object.defineProperty(ACollectableItemEquipmentVO.prototype, "equipmentVO", {
    get: function () {
      return this._equipmentVO;
    },
    set: function (__s22param0) {
      this._equipmentVO = __s22param0;
      this._id = __dep_exact_f855840627e6e145.int(__s22param0 ? __s22param0.uniqueID : -1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemEquipmentVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (__s26param0) {
      this._id = __s26param0;
      this.updateEquipmentVO();
    },
    enumerable: true,
    configurable: true
  });
  ACollectableItemEquipmentVO.prototype.getSearchString = function () {
    var __s28local0 = "";
    __s28local0 += this.equipmentVO.nameString;
    __s28local0 += this.equipmentVO.typeDescriptionText;
    __s28local0 += this.equipmentVO.bonusDescriptionText;
    if (this.equipmentVO.gemVO) {
      __s28local0 += this.equipmentVO.gemVO.bonusDescriptionText;
    }
    if (this.equipmentVO.setVO) {
      __s28local0 += this.equipmentVO.setVO.name;
    }
    return __s28local0;
  };
  return ACollectableItemEquipmentVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.ACollectableItemEquipmentVO = __s0local0;
