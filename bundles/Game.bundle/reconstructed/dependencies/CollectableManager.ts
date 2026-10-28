import { CollectableEnum } from "./CollectableEnum";
import { CollectableList } from "./CollectableList";
import { CollectableParser } from "./CollectableParser";
import { CollectableSorter } from "./CollectableSorter";
export class CollectableManager {
  static _sorter: any;
  static _parser: any;
  static get sorter() {
    return CollectableManager._sorter;
  }
  static get parser() {
    return CollectableManager._parser;
  }
  static matchRarenessEquipments(argument0, argument1) {
    var __s9local0;
    var __s9local1;
    var __s9local2 = [];
    var __s9local3 = new CollectableList();
    if (argument0) {
      for (var __s9local4 = 0; __s9local4 < argument0.length; ++__s9local4) {
        __s9local0 = argument0.getItemByIndex(__s9local4);
        if (!argument1 || __s9local0.itemType != CollectableEnum.EQUIPMENT_RARENESS && __s9local0.itemType != CollectableEnum.HERO_RANDOM) {
          __s9local3.addItem(__s9local0);
        } else {
          for (var __s9local5 = 0; __s9local5 < argument1.length; ++__s9local5) {
            if (((__s9local1 = argument1.getItemByIndex(__s9local5)).itemType == CollectableEnum.EQUIPMENT_RARENESS || __s9local1.itemType == CollectableEnum.HERO_RANDOM) && __s9local2.indexOf(__s9local5) < 0 && __s9local0.equipmentVO.rareID == __s9local1.equipmentVO.rareID) {
              __s9local3.addItem(__s9local1);
              __s9local2.push(__s9local5);
              break;
            }
          }
        }
      }
    }
    return __s9local3;
  }
  static mergeLists(argument0, argument1 = false) {
    var __s19local0 = new CollectableList();
    if (argument0) {
      for (var __s19local1 = 0; __s19local1 < argument0.length; ++__s19local1) {
        if (argument0[__s19local1]) {
          __s19local0.addList(argument0[__s19local1], argument1);
        }
      }
    }
    return __s19local0;
  }
  static __initialize_static_members() {
    CollectableManager._sorter = new CollectableSorter();
    CollectableManager._parser = new CollectableParser();
  }
}
CollectableManager.__initialize_static_members();
