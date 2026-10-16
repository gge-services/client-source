Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function CollectableItemEquipmentUniqueVO(__s3param0 = -1) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, 1) || this).id = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemEquipmentUniqueVO, __s1param0);
  CollectableItemEquipmentUniqueVO.prototype.parseServerObject = function (__s5param0) {
    __s1param0.prototype.parseServerObject.call(this, __s5param0);
    this.id = __s5param0;
  };
  CollectableItemEquipmentUniqueVO.prototype.setRemainingTime = function (__s7param0) {
    if (this.equipmentVO) {
      this.equipmentVO.setRemainingTime(__s7param0);
    }
  };
  CollectableItemEquipmentUniqueVO.prototype.parseXmlObject = function (__s10param0) {
    this.id = __dep_exact_f855840627e6e145.int(__s10param0);
    this.amount = 1;
  };
  CollectableItemEquipmentUniqueVO.prototype.getTooltipTextId = function () {
    return "equipmentRareness_name";
  };
  CollectableItemEquipmentUniqueVO.__initialize_static_members = function () {
    CollectableItemEquipmentUniqueVO.SERVER_KEY = "UE";
    CollectableItemEquipmentUniqueVO.XML_KEY = "equipmentIDs";
  };
  return CollectableItemEquipmentUniqueVO;
}(require("gge-module:export_ACollectableItemEquipmentVO").ACollectableItemEquipmentVO);
exports.CollectableItemEquipmentUniqueVO = __s0local0;
__s0local0.__initialize_static_members();
