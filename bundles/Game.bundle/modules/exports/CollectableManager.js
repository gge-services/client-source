Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CollectableManager() {}
  Object.defineProperty(CollectableManager, "sorter", {
    get: function () {
      return CollectableManager._sorter;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableManager, "parser", {
    get: function () {
      return CollectableManager._parser;
    },
    enumerable: true,
    configurable: true
  });
  CollectableManager.matchRarenessEquipments = function (__s9param0, __s9param1) {
    var __s9local0;
    var __s9local1;
    var __s9local2 = [];
    var __s9local3 = new __dep_export_CollectableList.CollectableList();
    if (__s9param0) {
      for (var __s9local4 = 0; __s9local4 < __s9param0.length; ++__s9local4) {
        __s9local0 = __s9param0.getItemByIndex(__s9local4);
        if (!__s9param1 || __s9local0.itemType != __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_RARENESS && __s9local0.itemType != __dep_export_CollectableEnum.CollectableEnum.HERO_RANDOM) {
          __s9local3.addItem(__s9local0);
        } else {
          for (var __s9local5 = 0; __s9local5 < __s9param1.length; ++__s9local5) {
            if (((__s9local1 = __s9param1.getItemByIndex(__s9local5)).itemType == __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_RARENESS || __s9local1.itemType == __dep_export_CollectableEnum.CollectableEnum.HERO_RANDOM) && __s9local2.indexOf(__s9local5) < 0 && __s9local0.equipmentVO.rareID == __s9local1.equipmentVO.rareID) {
              __s9local3.addItem(__s9local1);
              __s9local2.push(__s9local5);
              break;
            }
          }
        }
      }
    }
    return __s9local3;
  };
  CollectableManager.mergeLists = function (__s19param0, __s19param1 = false) {
    var __s19local0 = new __dep_export_CollectableList.CollectableList();
    if (__s19param0) {
      for (var __s19local1 = 0; __s19local1 < __s19param0.length; ++__s19local1) {
        if (__s19param0[__s19local1]) {
          __s19local0.addList(__s19param0[__s19local1], __s19param1);
        }
      }
    }
    return __s19local0;
  };
  CollectableManager.__initialize_static_members = function () {
    CollectableManager._sorter = new __dep_export_CollectableSorter.CollectableSorter();
    CollectableManager._parser = new __dep_export_CollectableParser.CollectableParser();
  };
  return CollectableManager;
}();
exports.CollectableManager = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableParser = require("gge-module:export_CollectableParser");
var __dep_export_CollectableSorter = require("gge-module:export_CollectableSorter");
__s0local0.__initialize_static_members();
