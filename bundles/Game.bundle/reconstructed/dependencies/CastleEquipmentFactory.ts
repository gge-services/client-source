import { BasicEquipmentVO } from "./BasicEquipmentVO";
import { CastleHeroVO } from "./CastleHeroVO";
import { EquipmentConst } from "../../../ggs.dll/reconstructed/exports/EquipmentConst";
import { RelicEquipmentVO } from "./RelicEquipmentVO";
export class CastleEquipmentFactory {
  static createEquipmentVO(argument0, argument1?: any) {
    var __s5local0;
    if (argument1 === undefined) {
      argument1 = false;
    }
    if (argument0.length >= 12 && argument0[11] == EquipmentConst.EQUIPMENT_TYPE_ID_RELIC) {
      __s5local0 = new RelicEquipmentVO();
    } else {
      switch (argument0[1]) {
        case EquipmentConst.SLOT_HERO:
          __s5local0 = new CastleHeroVO();
          break;
        default:
          __s5local0 = new BasicEquipmentVO();
      }
    }
    if (argument1) {
      __s5local0.parseCustomPrivateOfferEquipment(argument0);
    } else {
      __s5local0.parseEquipFromArray(argument0);
    }
    return __s5local0;
  }
}
