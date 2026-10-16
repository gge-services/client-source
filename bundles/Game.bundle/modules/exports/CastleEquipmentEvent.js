Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleEquipmentEvent(__s3param0, __s3param1 = null, __s3param2 = true, __s3param3 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this;
    __s3local0.equipmentInventory = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEquipmentEvent, __s1param0);
  CastleEquipmentEvent.__initialize_static_members = function () {
    CastleEquipmentEvent.INVENTORY_UPDATED = "INVENTORY_UPDATED";
    CastleEquipmentEvent.EQUIPMENT_CRAFTED = "EQUIPMENT_CRAFTED";
    CastleEquipmentEvent.EQUIPMENT_CRAFTED_FAILED = "EQUIPMENT_CRAFTED_FAILED";
    CastleEquipmentEvent.LORDS_UPDATED = "LORDS_UPDATED";
    CastleEquipmentEvent.INVENTORY_SPACE_LEFT = "INVENTORY_SPACE_LEFT";
    CastleEquipmentEvent.EQUIPMENT_ENCHANTED = "EQUIPMENT_ENCHANTED";
    CastleEquipmentEvent.EQUIPMENT_ENCHANTING_FAILED = "EQUIPMENT_ENCHANTING_FAILED";
    CastleEquipmentEvent.EQUIPMENT_ENCHANTING_INVALID = "EQUIPMENT_ENCHANTING_INVALID";
    CastleEquipmentEvent.FORGE_DATA_RECEIVED = "FORGE_DATA_RECEIVED";
    CastleEquipmentEvent.FORGE_CRAFT_EXECUTED = "FORGE_CRAFT_EXECUTED";
    CastleEquipmentEvent.EQUIP_SUCCESSFUL = "EQUIP_SUCCESSFULL";
    CastleEquipmentEvent.EQUIP_FAILED = "EQUIP_FAILED";
  };
  CastleEquipmentEvent.INVENTORY_UPDATED = "INVENTORY_UPDATED";
  CastleEquipmentEvent.EQUIPMENT_CRAFTED = "EQUIPMENT_CRAFTED";
  CastleEquipmentEvent.EQUIPMENT_CRAFTED_FAILED = "EQUIPMENT_CRAFTED_FAILED";
  CastleEquipmentEvent.LORDS_UPDATED = "LORDS_UPDATED";
  CastleEquipmentEvent.INVENTORY_SPACE_LEFT = "INVENTORY_SPACE_LEFT";
  CastleEquipmentEvent.EQUIPMENT_ENCHANTED = "EQUIPMENT_ENCHANTED";
  CastleEquipmentEvent.EQUIPMENT_ENCHANTING_FAILED = "EQUIPMENT_ENCHANTING_FAILED";
  CastleEquipmentEvent.EQUIPMENT_ENCHANTING_INVALID = "EQUIPMENT_ENCHANTING_INVALID";
  CastleEquipmentEvent.FORGE_DATA_RECEIVED = "FORGE_DATA_RECEIVED";
  CastleEquipmentEvent.FORGE_CRAFT_EXECUTED = "FORGE_CRAFT_EXECUTED";
  CastleEquipmentEvent.EQUIP_SUCCESSFUL = "EQUIP_SUCCESSFULL";
  CastleEquipmentEvent.EQUIP_FAILED = "EQUIP_FAILED";
  CastleEquipmentEvent.NEW_RELICS_UPDATED = "newRelicsUpdated";
  CastleEquipmentEvent.OVERALL_NEW_RELICS_UPDATED = "overallNewRelicsUpdated";
  CastleEquipmentEvent.RELIC_UPGRADE_RECEIVED = "relicUpgradeReceived";
  CastleEquipmentEvent.GENERAL_ASSIGNED = "generalAssigned";
  return CastleEquipmentEvent;
}(createjs.Event);
exports.CastleEquipmentEvent = __s0local0;
__s0local0.__initialize_static_members();
