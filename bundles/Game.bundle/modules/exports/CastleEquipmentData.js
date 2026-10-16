Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SCraftEquipmentVO = require("gge-module:export_C2SCraftEquipmentVO");
var __dep_export_C2SEquipEquipmentVO = require("gge-module:export_C2SEquipEquipmentVO");
var __dep_export_C2SSellEquipmentVO = require("gge-module:export_C2SSellEquipmentVO");
var __dep_export_C2SGetCastleListVO = require("gge-module:export_C2SGetCastleListVO");
var __dep_export_CastleEquipmentEvent = require("gge-module:export_CastleEquipmentEvent");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_EquipableDragLocationVO = require("gge-module:export_EquipableDragLocationVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEquipmentFactory = require("gge-module:export_CastleEquipmentFactory");
var __dep_export_BasicEquipmentVO = require("gge-module:export_BasicEquipmentVO");
var __dep_export_RandomEquipmentVO = require("gge-module:export_RandomEquipmentVO");
var __dep_export_RandomHeroVO = require("gge-module:export_RandomHeroVO");
var __dep_export_RelicEquipmentXml = require("gge-module:export_RelicEquipmentXml");
var __dep_export_EquipmentXml = require("gge-module:export_EquipmentXml");
var __s0local0 = function (__s1param0) {
  function CastleEquipmentData() {
    var __s3local0 = this;
    __s3local0._equipmentXml = new __dep_export_EquipmentXml.EquipmentXml();
    __s3local0._relicXml = new __dep_export_RelicEquipmentXml.RelicEquipmentXml();
    __s3local0._playerInventorySpace = 0;
    __s3local0._playerTotalInventorySpace = 0;
    __s3local0._favoriteEquipmentIdsList = [];
    __s3local0._favoriteGemsIdsList = [];
    __s3local0._favoriteRelicGemsIdsList = [];
    __s3local0._isEquipRunning = false;
    __s3local0._hasNewRelics = false;
    __s3local0._newRelicEquipmentsList = [];
    __s3local0._newRelicGemsList = [];
    __s3local0._hasRelicEnchanter = false;
    __s3local0._showEquipmentIds = false;
    __s3local0._relicFragmentBoost = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).reset();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEquipmentData, __s1param0);
  CastleEquipmentData.prototype.reset = function () {
    this._playerInventory = [];
    this._dragInventory = [];
    this._craftingInventory = [];
    this._playerInventorySpace = 0;
    this._playerTotalInventorySpace = 0;
    this._hasRelicEnchanter = false;
    this._relicFragmentBoost = 0;
  };
  CastleEquipmentData.prototype.parseXml = function (__s7param0) {
    this._configXML = __s7param0;
    this._configXML = __s7param0;
    this._equipmentXml.parseXml(__s7param0);
    this._relicXml.parseXml(__s7param0);
    this.initUniqueItemsAndSets();
  };
  CastleEquipmentData.prototype.parse_GEI = function (__s9param0) {
    if (__s9param0) {
      this._playerInventory = [];
      for (var __s9local0 = 0, __s9local1 = __s9param0.I; __s9local0 < __s9local1.length; __s9local0++) {
        var __s9local2 = __s9local1[__s9local0];
        if (__s9local2 !== undefined) {
          var __s9local3 = __dep_export_CastleEquipmentFactory.CastleEquipmentFactory.createEquipmentVO(__s9local2);
          if (!(this._dragInventory.length > 0) || this._dragInventory[0].id != __s9local3.id) {
            this._playerInventory.push(__s9local3);
          }
        }
      }
      this._playerInventorySpace = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.equipData.playerTotalInventorySpace - this._playerInventory.length - this._dragInventory.length);
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleEquipmentEvent.CastleEquipmentEvent(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_SPACE_LEFT));
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleEquipmentEvent.CastleEquipmentEvent(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_UPDATED));
    }
  };
  CastleEquipmentData.prototype.parse_CEQ = function (__s16param0) {
    if (__s16param0) {
      var __s16local0 = __dep_export_CastleEquipmentFactory.CastleEquipmentFactory.createEquipmentVO(__s16param0.E);
      this._playerInventory.push(__s16local0);
      this.clearCraftingInventory(null);
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleEquipmentEvent.CastleEquipmentEvent(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIPMENT_CRAFTED, [__s16local0]));
    }
  };
  CastleEquipmentData.prototype.parse_FRC = function (__s19param0) {
    if (__s19param0) {
      var __s19local0 = __dep_export_CastleEquipmentFactory.CastleEquipmentFactory.createEquipmentVO(__s19param0.E);
      this._playerInventory.push(__s19local0);
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleEquipmentEvent.CastleEquipmentEvent(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.FORGE_CRAFT_EXECUTED, [__s19local0]));
    }
  };
  CastleEquipmentData.prototype.parse_ESL = function (__s22param0) {
    if (__s22param0) {
      this._playerInventorySpace = parseInt(__s22param0.E);
      this._playerTotalInventorySpace = parseInt(__s22param0.TE);
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleEquipmentEvent.CastleEquipmentEvent(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_SPACE_LEFT));
    }
  };
  CastleEquipmentData.prototype.parse_EEQ = function () {
    this._isEquipRunning = false;
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleEquipmentEvent.CastleEquipmentEvent(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIP_SUCCESSFUL));
  };
  CastleEquipmentData.prototype.error_EEQ = function (__s27param0) {
    this._isEquipRunning = false;
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleEquipmentEvent.CastleEquipmentEvent(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIP_FAILED));
  };
  CastleEquipmentData.prototype.parse_MSP = function (__s29param0) {
    if (__s29param0.R) {
      var __s29local0 = __dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s29param0.R).getFilteredListByTypes([__dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_RARENESS, __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_UNIQUE]);
      if (__s29local0.length > 0) {
        for (var __s29local1 = 0; __s29local1 < __s29local0.length; __s29local1++) {
          this._playerInventory.push(__s29local0.getItemByIndex(__s29local1).equipmentVO);
        }
        __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleEquipmentEvent.CastleEquipmentEvent(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_UPDATED));
      }
    }
  };
  CastleEquipmentData.prototype.parseNRF = function (__s35param0) {
    this._hasNewRelics = __s35param0.NR == 1;
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleEquipmentEvent.CastleEquipmentEvent(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.OVERALL_NEW_RELICS_UPDATED));
  };
  CastleEquipmentData.prototype.parseGNR = function (__s37param0) {
    this.clearNewEquipmentLists();
    if (__s37param0.E) {
      for (var __s37local0 = 0, __s37local1 = __s37param0.E; __s37local0 < __s37local1.length; __s37local0++) {
        var __s37local2 = __s37local1[__s37local0];
        if (__s37local2 !== undefined) {
          this._newRelicEquipmentsList.push(__s37local2);
        }
      }
    }
    if (__s37param0.RGEM) {
      for (var __s37local3 = 0, __s37local4 = __s37param0.RGEM; __s37local3 < __s37local4.length; __s37local3++) {
        __s37local2 = __s37local4[__s37local3];
        this._newRelicGemsList.push(__s37local2);
      }
    }
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleEquipmentEvent.CastleEquipmentEvent(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.NEW_RELICS_UPDATED));
  };
  CastleEquipmentData.prototype.isEquipableNew = function (__s46param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s46param0, "RelicEquipmentVO")) {
      return this._newRelicEquipmentsList.indexOf(__s46param0.id) >= 0;
    } else {
      return !!__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s46param0, "RelicGemVO") && this._newRelicGemsList.indexOf(__s46param0.id) >= 0;
    }
  };
  CastleEquipmentData.prototype.hasLordAndSlotNewRelics = function (__s50param0, __s50param1, __s50param2) {
    var __s50local0;
    if (__s50param2 === undefined) {
      __s50param2 = false;
    }
    if (__s50param2) {
      for (var __s50local1 = 0, __s50local2 = __dep_export_CastleModel.CastleModel.gemData.relicGemsInventory; __s50local1 < __s50local2.length; __s50local1++) {
        if ((__s50local0 = __s50local2[__s50local1]).lordType == __s50param0 && this.isEquipableNew(__s50local0)) {
          return true;
        }
      }
    } else {
      for (var __s50local3 = 0, __s50local4 = this._playerInventory; __s50local3 < __s50local4.length; __s50local3++) {
        if ((__s50local0 = __s50local4[__s50local3]).lordType == __s50param0 && __s50local0.slotTypeId == __s50param1 && this.isEquipableNew(__s50local0)) {
          return true;
        }
      }
    }
    return false;
  };
  CastleEquipmentData.prototype.hasLordTypeNewRelic = function (__s61param0) {
    var __s61local0;
    for (var __s61local1 = 0, __s61local2 = this._playerInventory; __s61local1 < __s61local2.length; __s61local1++) {
      if ((__s61local0 = __s61local2[__s61local1]).lordTypeId == __s61param0 && this.isEquipableNew(__s61local0)) {
        return true;
      }
    }
    for (var __s61local3 = 0, __s61local4 = __dep_export_CastleModel.CastleModel.gemData.relicGemsInventory; __s61local3 < __s61local4.length; __s61local3++) {
      if ((__s61local0 = __s61local4[__s61local3]).lordTypeId == __s61param0 && this.isEquipableNew(__s61local0)) {
        return true;
      }
    }
    return false;
  };
  CastleEquipmentData.prototype.clearNewEquipmentLists = function () {
    this._newRelicEquipmentsList = [];
    this._newRelicGemsList = [];
  };
  CastleEquipmentData.prototype.resetOverallNewEquipmentMark = function () {
    this._hasNewRelics = false;
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleEquipmentEvent.CastleEquipmentEvent(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.OVERALL_NEW_RELICS_UPDATED));
  };
  CastleEquipmentData.prototype.initUniqueItemsAndSets = function () {
    this._uniqueItems = new Map();
    this._uniqueItems.set(-__dep_exact_26a421b704832cff.EquipmentConst.RARENESS_COMMON, new __dep_export_RandomEquipmentVO.RandomEquipmentVO(__dep_exact_26a421b704832cff.EquipmentConst.RARENESS_COMMON));
    this._uniqueItems.set(-__dep_exact_26a421b704832cff.EquipmentConst.RARENESS_RARE, new __dep_export_RandomEquipmentVO.RandomEquipmentVO(__dep_exact_26a421b704832cff.EquipmentConst.RARENESS_RARE));
    this._uniqueItems.set(-__dep_exact_26a421b704832cff.EquipmentConst.RARENESS_EPIC, new __dep_export_RandomEquipmentVO.RandomEquipmentVO(__dep_exact_26a421b704832cff.EquipmentConst.RARENESS_EPIC));
    this._uniqueItems.set(-__dep_exact_26a421b704832cff.EquipmentConst.RARENESS_LEGENDARY, new __dep_export_RandomEquipmentVO.RandomEquipmentVO(__dep_exact_26a421b704832cff.EquipmentConst.RARENESS_LEGENDARY));
    this._uniqueItems.set(-__dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_EPIC, new __dep_export_RandomHeroVO.RandomHeroVO(__dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_EPIC));
    this._uniqueItems.set(-__dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_LEGENDARY, new __dep_export_RandomHeroVO.RandomHeroVO(__dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_LEGENDARY));
    this._uniqueItems.set(-__dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_COMMON, new __dep_export_RandomHeroVO.RandomHeroVO(__dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_COMMON));
    this._uniqueItems.set(-__dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_RARE, new __dep_export_RandomHeroVO.RandomHeroVO(__dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_RARE));
    var __s73local0 = this._configXML.equipments;
    if (__s73local0 != null) {
      for (var __s73local1 = 0, __s73local2 = __s73local0; __s73local1 < __s73local2.length; __s73local1++) {
        var __s73local3 = __s73local2[__s73local1];
        if (__s73local3 !== undefined) {
          var __s73local4 = this.createBasicEquipmentVOFromXML(__s73local3);
          this._uniqueItems.set(__s73local4.uniqueID, __s73local4);
        }
      }
    }
  };
  CastleEquipmentData.prototype.craftEquipment = function (__s79param0) {
    var __s79local0 = [];
    if (this._craftingInventory != null) {
      for (var __s79local1 = 0, __s79local2 = this._craftingInventory; __s79local1 < __s79local2.length; __s79local1++) {
        var __s79local3 = __s79local2[__s79local1];
        if (__s79local3 !== undefined) {
          __s79local0.push(__s79local3.id);
        }
      }
    }
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCraftEquipmentVO.C2SCraftEquipmentVO(__s79local0, __s79param0));
  };
  CastleEquipmentData.prototype.sell = function (__s85param0, __s85param1, __s85param2) {
    if (__s85param0) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSellEquipmentVO.C2SSellEquipmentVO(__s85param0.id, __s85param1, __s85param2));
    }
  };
  CastleEquipmentData.prototype.startDrag = function (__s88param0, __s88param1) {
    switch (__s88param1.locationType) {
      case __dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_CRAFTING:
        this.moveItem(__s88param0, this._craftingInventory, this._dragInventory);
        break;
      case __dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_SLOT:
        this.moveItem(__s88param0, null, this._dragInventory);
        if (__s88param1.lordID != -1) {
          this._isEquipRunning = true;
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SEquipEquipmentVO.C2SEquipEquipmentVO(__s88param0.id, __s88param1.lordID, false));
          if (__s88param0.isSkinItem()) {
            __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetCastleListVO.C2SGetCastleListVO(__dep_export_CastleModel.CastleModel.userData.playerID));
          }
        }
        break;
      case __dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY:
        this.moveItem(__s88param0, this._playerInventory, this._dragInventory);
    }
  };
  CastleEquipmentData.prototype.stopDrag = function (__s93param0, __s93param1, __s93param2) {
    switch (__s93param2.locationType) {
      case __dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_CRAFTING:
        this.moveItem(__s93param0, this._dragInventory, this._craftingInventory);
        break;
      case __dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_SLOT:
        if (__dep_export_CastleModel.CastleModel.lordData.getLordByID(__s93param2.lordID)) {
          if (__s93param1 != __s93param2) {
            __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SEquipEquipmentVO.C2SEquipEquipmentVO(__s93param0.id, __s93param2.lordID, true));
            if (__s93param0.isSkinItem()) {
              __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetCastleListVO.C2SGetCastleListVO(__dep_export_CastleModel.CastleModel.userData.playerID));
            }
          }
          __dep_export_CastleModel.CastleModel.lordData.getLordByID(__s93param2.lordID).setEquipment(__s93param0);
          this.moveItem(__s93param0, this._dragInventory, null);
        } else {
          this.moveItem(__s93param0, this._dragInventory, this._playerInventory);
        }
        break;
      case __dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY:
        this.moveItem(__s93param0, this._dragInventory, this._playerInventory);
        break;
      case __dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_SELL_SLOT:
        this.moveItem(__s93param0, this._dragInventory, null);
    }
  };
  CastleEquipmentData.prototype.returnCraftingToInventory = function () {
    this.clearCraftingInventory(this._playerInventory);
  };
  CastleEquipmentData.prototype.clearCraftingInventory = function (__s102param0) {
    if (__s102param0 && this._craftingInventory != null) {
      for (var __s102local0 = 0, __s102local1 = this._craftingInventory; __s102local0 < __s102local1.length; __s102local0++) {
        var __s102local2 = __s102local1[__s102local0];
        if (__s102local2 !== undefined) {
          __s102param0.push(__s102local2);
        }
      }
    }
    this._craftingInventory = [];
  };
  CastleEquipmentData.prototype.moveItem = function (__s108param0, __s108param1, __s108param2) {
    if (__s108param1) {
      var __s108local0 = __dep_exact_f855840627e6e145.int(__s108param1.indexOf(__s108param0));
      if (__s108local0 > -1) {
        if (__s108param2) {
          __s108param2.push(__s108param1.splice(__s108local0, 1)[0]);
        } else {
          __s108param1.splice(__s108local0, 1);
        }
      }
    } else {
      __s108param2.push(__s108param0);
    }
  };
  CastleEquipmentData.prototype.createBasicEquipmentVOFromXML = function (__s115param0) {
    var __s115local0 = [0, parseInt(__s115param0.slotID || "")];
    var __s115local1 = __dep_export_CastleEquipmentFactory.CastleEquipmentFactory.createEquipmentVO(__s115local0);
    __s115local1.parseXML(__s115param0);
    __s115local1.sellCurrencies = __dep_export_CollectableManager.CollectableManager.parser.x2cList.createList(__s115param0, __dep_export_ClientConstCollectable.ClientConstCollectable.XML_PREFIX_SELL);
    if (__s115local1.setID > 0) {
      this.equipmentXml.getEquipmentSet(__s115local1.setID).addItem(__s115local1);
    }
    return __s115local1;
  };
  CastleEquipmentData.prototype.getEquipmentByUniqueID = function (__s118param0, __s118param1 = false) {
    if (__s118param1) {
      var __s118local0 = this.getEquipmentByUniqueIDFromXML(__s118param0);
      if (__s118local0) {
        return __s118local0;
      }
    }
    if (!this._uniqueItems) {
      this.initUniqueItemsAndSets();
    }
    if (this._uniqueItems.get(__s118param0)) {
      return this._uniqueItems.get(__s118param0);
    } else {
      return this.getEquipmentByUniqueIDFromXML(__s118param0);
    }
  };
  CastleEquipmentData.prototype.getEquipmentByUniqueIDFromXML = function (__s125param0) {
    var __s125local0 = this._configXML.equipments;
    if (__s125local0 != null) {
      for (var __s125local1 = 0, __s125local2 = __s125local0; __s125local1 < __s125local2.length; __s125local1++) {
        var __s125local3 = __s125local2[__s125local1];
        if (__s125local3 !== undefined) {
          if (__s125param0 == parseInt(__s125local3.equipmentID || "")) {
            return this.createBasicEquipmentVOFromXML(__s125local3);
          }
        }
      }
    }
    return null;
  };
  CastleEquipmentData.prototype.getRareStringFromRareID = function (__s132param0) {
    switch (__s132param0) {
      case __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_COMMON:
        return __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_COMMON;
      case __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_RARE:
        return __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_RARE;
      case __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_EPIC:
        return __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_EPIC;
      case __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_LEGENDARY:
        return __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_LEGENDARY;
      default:
        return __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_UNIQUE;
    }
  };
  Object.defineProperty(CastleEquipmentData.prototype, "isInventoryFull", {
    get: function () {
      return this._playerInventorySpace <= 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "filledInventorySpace", {
    get: function () {
      return this._playerTotalInventorySpace - this._playerInventorySpace;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentData.prototype.getUniqueHerosByAlienString = function (__s139param0) {
    var __s139local0 = [];
    if (this._uniqueItems != null) {
      for (var __s139local1 = 0, __s139local2 = Array.from(this._uniqueItems.keys()); __s139local1 < __s139local2.length; __s139local1++) {
        var __s139local3 = __s139local2[__s139local1];
        if (__s139local3 !== undefined && __dep_exact_81dacdf05bd32292_1.instanceOfClass(this._uniqueItems.get(__s139local3), "CastleHeroVO") && this._uniqueItems.get(__s139local3).alienString == __s139param0) {
          __s139local0.push(this._uniqueItems.get(__s139local3));
        }
      }
    }
    return __s139local0;
  };
  Object.defineProperty(CastleEquipmentData.prototype, "relicXml", {
    get: function () {
      return this._relicXml;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "equipmentXml", {
    get: function () {
      return this._equipmentXml;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "uniqueItems", {
    get: function () {
      return this._uniqueItems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "playerInventory", {
    get: function () {
      return this._playerInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "craftingInventory", {
    get: function () {
      return this._craftingInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "dragInventory", {
    get: function () {
      return this._dragInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "favoriteEquipmentIdsList", {
    get: function () {
      return this._favoriteEquipmentIdsList;
    },
    set: function (__s159param0) {
      this._favoriteEquipmentIdsList = __s159param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "favoriteGemsIdsList", {
    get: function () {
      return this._favoriteGemsIdsList;
    },
    set: function (__s163param0) {
      this._favoriteGemsIdsList = __s163param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "favoriteRelicGemsIdsList", {
    get: function () {
      return this._favoriteRelicGemsIdsList;
    },
    set: function (__s167param0) {
      this._favoriteRelicGemsIdsList = __s167param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentData.prototype.isEQFav = function (__s169param0) {
    return this._favoriteEquipmentIdsList.indexOf(__s169param0) >= 0;
  };
  CastleEquipmentData.prototype.isGemFav = function (__s171param0, __s171param1) {
    if (__s171param1) {
      return this._favoriteRelicGemsIdsList.indexOf(__s171param0) >= 0;
    } else {
      return this._favoriteGemsIdsList.indexOf(__s171param0) >= 0;
    }
  };
  CastleEquipmentData.prototype.handleGemInserted = function (__s175param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s175param0, "CastleGemVO")) {
      var __s175local0 = false;
      var __s175local1 = undefined;
      for (var __s175local2 = 0; __s175local2 < __dep_export_CastleModel.CastleModel.gemData.playerInventory.length; __s175local2++) {
        __s175local1 = __dep_export_CastleModel.CastleModel.gemData.playerInventory[__s175local2];
        if (__s175param0.id == __s175local1.id && __s175local1.isFavorite) {
          __s175local0 = true;
          break;
        }
      }
      if (!__s175local0) {
        this._favoriteGemsIdsList.splice(this._favoriteGemsIdsList.indexOf(__s175param0.id, 0), 1);
      }
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s175param0, "RelicGemVO")) {
      this.favoriteRelicGemsIdsList.splice(this._favoriteRelicGemsIdsList.indexOf(__s175param0.id, 0), 1);
    }
  };
  Object.defineProperty(CastleEquipmentData.prototype, "isEquiqInProgress", {
    get: function () {
      return this._isEquipRunning;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "inventorySpace", {
    get: function () {
      return this._playerInventorySpace;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "playerTotalInventorySpace", {
    get: function () {
      return this._playerTotalInventorySpace;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "hasNewRelics", {
    get: function () {
      return this._hasNewRelics;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "newRelicEquipmentsList", {
    get: function () {
      return this._newRelicEquipmentsList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "newRelicGemsList", {
    get: function () {
      return this._newRelicGemsList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "showEquipmentIds", {
    get: function () {
      return this._showEquipmentIds;
    },
    set: function (__s197param0) {
      this._showEquipmentIds = __s197param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentData.prototype.setRelicEnchanterBuildingData = function (__s199param0) {
    if (__s199param0) {
      this._hasRelicEnchanter = !!__s199param0 && __s199param0.objectType == __dep_export_IsoObjectEnum.IsoObjectEnum.RELIC_ENCHANTER && __s199param0.buildingState.isFunctionally;
      if (__dep_export_Iso.Iso.data.areaData.isMyHomeCastle) {
        this._relicFragmentBoost = __s199param0.relicFragmentBoost;
      }
    }
  };
  Object.defineProperty(CastleEquipmentData.prototype, "relicFragmentBoost", {
    get: function () {
      return this._relicFragmentBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "hasRelicEnchanter", {
    get: function () {
      return this._hasRelicEnchanter;
    },
    enumerable: true,
    configurable: true
  });
  return CastleEquipmentData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleEquipmentData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "ICastleBasicData");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
