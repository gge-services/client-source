Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEquipmentFactory = require("gge-module:export_CastleEquipmentFactory");
var __s0local0 = function (__s1param0) {
  function CollectableItemEquipmentRarenessVO(__s3param0 = -1, __s3param1 = 1) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param1) || this).id = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemEquipmentRarenessVO, __s1param0);
  CollectableItemEquipmentRarenessVO.prototype.parseServerObject = function (__s5param0) {
    __s1param0.prototype.parseServerObject.call(this, __s5param0);
    var __s5local0 = __s5param0;
    var __s5local1 = true;
    var __s5local2 = 0;
    if (typeof __s5param0 == "number") {
      __s5local2 = __dep_exact_f855840627e6e145.int(-__s5param0);
    } else if (__s5local0 && __s5local0.length == 1) {
      __s5local2 = __dep_exact_f855840627e6e145.int(-__s5local0[0]);
    } else {
      __s5local1 = false;
    }
    this.equipmentVO = __s5local1 ? __dep_export_CastleModel.CastleModel.equipData.getEquipmentByUniqueID(__s5local2) : __dep_export_CastleEquipmentFactory.CastleEquipmentFactory.createEquipmentVO(__s5local0, __s5local0.length == 5);
  };
  CollectableItemEquipmentRarenessVO.prototype.parseXmlObject = function (__s10param0) {
    this.id = -__dep_exact_f855840627e6e145.int(__s10param0);
  };
  CollectableItemEquipmentRarenessVO.prototype.getTooltipTextId = function () {
    return "randomEquipment_name";
  };
  CollectableItemEquipmentRarenessVO.__initialize_static_members = function () {
    CollectableItemEquipmentRarenessVO.SERVER_KEY = "GE";
    CollectableItemEquipmentRarenessVO.XML_KEY = "equipmentRarenessID";
  };
  return CollectableItemEquipmentRarenessVO;
}(require("gge-module:export_ACollectableItemEquipmentVO").ACollectableItemEquipmentVO);
exports.CollectableItemEquipmentRarenessVO = __s0local0;
__s0local0.__initialize_static_members();
