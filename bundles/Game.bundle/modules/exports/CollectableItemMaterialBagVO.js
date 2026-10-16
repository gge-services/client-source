Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CollectableItemMaterialBagVO(__s3param0 = -1, __s3param1 = 0) {
    var __s3local0 = this;
    __s3local0._id = -1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param1) || this)._id = __s3param0;
    __s3local0.updateMaterialBagVO();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemMaterialBagVO, __s1param0);
  CollectableItemMaterialBagVO.prototype.parseServerObject = function (__s5param0) {
    __s1param0.prototype.parseServerObject.call(this, __s5param0);
    this.id = parseInt(__s5param0[0]);
    this.amount = parseInt(__s5param0[1]);
  };
  CollectableItemMaterialBagVO.prototype.parseXmlObject = function (__s7param0) {
    var __s7local0 = __s7param0.split("+");
    this.id = parseInt(__s7local0[0]);
    this.amount = parseInt(__s7local0[1]);
  };
  CollectableItemMaterialBagVO.prototype.updateMaterialBagVO = function () {
    this._materialBagVO = __dep_export_CastleModel.CastleModel.craftingMaterialData.craftingMaterialBags.get(this.id);
  };
  CollectableItemMaterialBagVO.prototype.getDescriptionTextId = function () {
    return "ciMaterialSack_short_info";
  };
  CollectableItemMaterialBagVO.prototype.getNameTextId = function () {
    if (this.materialBagVO) {
      return this.materialBagVO.nameTextID;
    } else {
      return __s1param0.prototype.getNameTextId.call(this);
    }
  };
  CollectableItemMaterialBagVO.prototype.getNameTextParams = function () {
    if (this._materialBagVO && this._materialBagVO.focused) {
      var __s17local0 = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 0, this._materialBagVO.focusedMaterialContent.craftingMaterial.id);
      return [__dep_exact_92d05af59ee2ff30.Localize.text(__s17local0.getNameTextId())];
    }
    return __s1param0.prototype.getNameTextParams.call(this);
  };
  CollectableItemMaterialBagVO.prototype.clone = function () {
    var __s20local0 = __s1param0.prototype.clone.call(this);
    __s20local0.materialBagVO = this.materialBagVO;
    return __s20local0;
  };
  CollectableItemMaterialBagVO.prototype.isCombineAbleWith = function (__s22param0) {
    return __s1param0.prototype.isCombineAbleWith.call(this, __s22param0) && this.id == __s22param0.id;
  };
  Object.defineProperty(CollectableItemMaterialBagVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (__s26param0) {
      this._id = __s26param0;
      this.updateMaterialBagVO();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemMaterialBagVO.prototype, "materialBagVO", {
    get: function () {
      return this._materialBagVO;
    },
    set: function (__s30param0) {
      this._materialBagVO = __s30param0;
      this._id = __dep_exact_f855840627e6e145.int(this.materialBagVO ? this.materialBagVO.bagID : -1);
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemMaterialBagVO.__initialize_static_members = function () {
    CollectableItemMaterialBagVO.SERVER_KEY = "RB";
    CollectableItemMaterialBagVO.XML_KEY = "rewardBags";
  };
  return CollectableItemMaterialBagVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.CollectableItemMaterialBagVO = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
__s0local0.__initialize_static_members();
