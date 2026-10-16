Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_C2SBindGem = require("gge-module:export_C2SBindGem");
var __dep_export_C2SCraftGemVO = require("gge-module:export_C2SCraftGemVO");
var __dep_export_C2SExtractGemVO = require("gge-module:export_C2SExtractGemVO");
var __dep_export_C2SSellGemVO = require("gge-module:export_C2SSellGemVO");
var __dep_export_CastleGemEvent = require("gge-module:export_CastleGemEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_EquipableDragLocationVO = require("gge-module:export_EquipableDragLocationVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_RelicGemVO = require("gge-module:export_RelicGemVO");
var __dep_export_CastleGemLevelInfoVO = require("gge-module:export_CastleGemLevelInfoVO");
var __dep_export_CastleGemVO = require("gge-module:export_CastleGemVO");
var __dep_export_GemColorVO = require("gge-module:export_GemColorVO");
var __dep_export_RandomGemVO = require("gge-module:export_RandomGemVO");
var __s0local0 = function (__s1param0) {
  function CastleGemData() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._numberOfGemColors = 0;
    __s3local0._playerInventory = [];
    __s3local0._extractOldGem = false;
    __s3local0._playerInventorySpace = 0;
    __s3local0._playerTotalInventorySpace = 0;
    __s3local0._relicGemsInventory = [];
    __s3local0._relicGemsInventorySpace = 0;
    __s3local0._playerInventorySpace = 0;
    __s3local0._relicGemsInventorySpace = 0;
    __s3local0._playerTotalInventorySpace = 0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleGemData, __s1param0);
  CastleGemData.prototype.parseXML = function (__s5param0) {
    this.parseGemLevels(__s5param0);
    this.parseGems(__s5param0);
    this.parseGemColors(__s5param0);
    this.createRandomGems();
  };
  CastleGemData.prototype.parseGemColors = function (__s7param0) {
    this._gemColors = new Map();
    this._numberOfGemColors = 0;
    var __s7local0 = __s7param0.gemColors;
    if (__s7local0) {
      for (var __s7local1 = 0, __s7local2 = __s7local0; __s7local1 < __s7local2.length; __s7local1++) {
        var __s7local3 = __s7local2[__s7local1];
        if (__s7local3 !== undefined) {
          var __s7local4 = new __dep_export_GemColorVO.GemColorVO();
          __s7local4.parseXml(__s7local3);
          this._gemColors.set(__s7local4.id, __s7local4);
          this._numberOfGemColors++;
        }
      }
    }
  };
  CastleGemData.prototype.createRandomGems = function () {
    for (var __s13local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.GemConst.MIN_GEM_LEVEL); __s13local0 <= __dep_exact_26a421b704832cff.GemConst.MAX_GEM_LEVEL; __s13local0++) {
      var __s13local1 = this.getLevelInfo(__s13local0);
      var __s13local2 = new __dep_export_RandomGemVO.RandomGemVO(__s13local1);
      this.gems.set(-__s13local2.level, __s13local2);
    }
  };
  CastleGemData.prototype.parseGemLevels = function (__s17param0) {
    this.levelInfos = new Map();
    this.levelInfos.set(0, new __dep_export_CastleGemLevelInfoVO.CastleGemLevelInfoVO());
    var __s17local0;
    var __s17local1 = __s17param0.gemlevels;
    if (__s17local1 != null) {
      for (var __s17local2 = 0, __s17local3 = __s17local1; __s17local2 < __s17local3.length; __s17local2++) {
        var __s17local4 = __s17local3[__s17local2];
        if (__s17local4 !== undefined) {
          (__s17local0 = new __dep_export_CastleGemLevelInfoVO.CastleGemLevelInfoVO()).parseXML(__s17local4);
          this.levelInfos.set(__s17local0.levelID, __s17local0);
        }
      }
    }
  };
  CastleGemData.prototype.parseGems = function (__s23param0) {
    this.gems = new Map();
    var __s23local0;
    var __s23local1 = __s23param0.gems;
    if (__s23local1 != null) {
      for (var __s23local2 = 0, __s23local3 = __s23local1; __s23local2 < __s23local3.length; __s23local2++) {
        var __s23local4 = __s23local3[__s23local2];
        if (__s23local4 !== undefined) {
          (__s23local0 = new __dep_export_CastleGemVO.CastleGemVO(__s23local4)).sellCurrencies = __dep_export_CollectableManager.CollectableManager.parser.x2cList.createList(__s23local4, __dep_export_ClientConstCollectable.ClientConstCollectable.XML_PREFIX_SELL);
          this.gems.set(__s23local0.id, __s23local0);
          if (__s23local0.isUnique && __s23local0.setID > 0) {
            __s23local0.setVO.addItem(__s23local0);
          }
        }
      }
    }
  };
  CastleGemData.prototype.parse_GEC = function (__s30param0) {
    this.updateInventory(__s30param0);
    this.notifyOnInvetoryChange();
  };
  CastleGemData.prototype.parseGGM = function (__s32param0) {
    this._playerInventory = [];
    this._craftingInventory = [];
    this._craftingCenterInventory = [];
    this._dragInventory = [];
    this._relicGemsInventory = [];
    this._relicGemsDragInventory = [];
    this.updateInventory(__s32param0.GEM);
    this.updateRelicInventory(__s32param0.RGEM);
    this.notifyOnInvetoryChange();
  };
  CastleGemData.prototype.parse_FRC = function (__s34param0) {
    if (__s34param0) {
      var __s34local0;
      if (__s34param0.RGEM) {
        var __s34local1 = new __dep_export_RelicGemVO.RelicGemVO();
        __s34local1.parseServerObject(__s34param0.RGEM);
        this._relicGemsInventory.push(__s34local1);
        __s34local0 = __s34local1;
      } else if (__s34param0.GEM) {
        __s34local0 = this.getGemVO(__dep_exact_f855840627e6e145.int(__s34param0.GEM));
        this._playerInventory.push(__s34local0);
      }
      this.controller.dispatchEvent(new __dep_export_CastleGemEvent.CastleGemEvent(__dep_export_CastleGemEvent.CastleGemEvent.ALLIANCE_FORGE_GEMCRAFT_EXECUTED, [__s34local0]));
    }
  };
  CastleGemData.prototype.updateInventory = function (__s39param0) {
    var __s39local0;
    var __s39local1 = 0;
    var __s39local2 = 0;
    var __s39local3 = 0;
    var __s39local4 = 0;
    for (var __s39local5 = 0; __s39local5 < __s39param0.length; __s39local5++) {
      __s39local1 = __dep_exact_f855840627e6e145.int(__s39param0[__s39local5][0]);
      __s39local2 = __dep_exact_f855840627e6e145.int(__s39param0[__s39local5][1]);
      __s39local0 = this.getGemVO(__s39local1);
      if (__s39local2 > 0) {
        for (__s39local4 = 0; __s39local4 < __s39local2; __s39local4++) {
          this._playerInventory.push(__s39local0);
        }
      } else if (__s39local2 < 0 && (__s39local3 = __dep_exact_f855840627e6e145.int(this._playerInventory.indexOf(__s39local0))) > -1) {
        this._playerInventory.splice(__s39local3, -__s39local2);
      }
    }
    this.updateInventorySpace();
  };
  CastleGemData.prototype.getGemVO = function (__s47param0) {
    if (__dep_exact_9e901e8e2483a22f.DictionaryUtil.containsKey(this.gems, __s47param0)) {
      return this.gems.get(__s47param0);
    } else {
      return null;
    }
  };
  CastleGemData.prototype.getLevelInfo = function (__s51param0) {
    if (__dep_exact_9e901e8e2483a22f.DictionaryUtil.containsKey(this.levelInfos, __s51param0)) {
      return this.levelInfos.get(__s51param0);
    } else {
      return null;
    }
  };
  Object.defineProperty(CastleGemData.prototype, "playerInventory", {
    get: function () {
      return this._playerInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemData.prototype, "craftingInventory", {
    get: function () {
      return this._craftingInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemData.prototype, "craftingCenterInventory", {
    get: function () {
      return this._craftingCenterInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemData.prototype, "dragInventory", {
    get: function () {
      return this._dragInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemData.prototype, "centerGem", {
    get: function () {
      if (this._craftingCenterInventory.length > 0) {
        return this._craftingCenterInventory[0];
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleGemData.prototype.bindGem = function (__s67param0, __s67param1, __s67param2, __s67param3) {
    if (__s67param1) {
      this._boundGem = __s67param0;
      this._targetEquipment = __s67param1;
      this._extractOldGem = __s67param3;
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBindGem.C2SBindGem(__s67param0.id, __s67param1.id, __s67param2, __s67param3, __dep_exact_81dacdf05bd32292.instanceOfClass(__s67param0, "RelicGemVO")));
    }
  };
  CastleGemData.prototype.gemBoundToEquipmentSuccess = function () {
    if (this._targetEquipment) {
      if (this._extractOldGem && this._targetEquipment.gemVO) {
        if (__dep_exact_81dacdf05bd32292.instanceOfClass(this._targetEquipment.gemVO, "RelicGemVO")) {
          this.relicGemsInventory.push(this._targetEquipment.gemVO);
        } else {
          this._playerInventory.push(this._targetEquipment.gemVO);
        }
      }
      this._targetEquipment.gemVO = this._boundGem;
      this.notifyOnInvetoryChange();
    }
  };
  Object.defineProperty(CastleGemData.prototype, "isInventoryFull", {
    get: function () {
      return this._playerInventorySpace <= 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemData.prototype, "inventorySpace", {
    get: function () {
      return this._playerInventorySpace;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemData.prototype, "playerTotalInventorySpace", {
    get: function () {
      return this._playerTotalInventorySpace;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemData.prototype, "filledInventorySpace", {
    get: function () {
      return this._playerTotalInventorySpace - this._playerInventorySpace;
    },
    enumerable: true,
    configurable: true
  });
  CastleGemData.prototype.parse_CGE = function (__s84param0) {
    if (__s84param0.S == 1) {
      if (!this._craftingCenterInventory[0]) {
        return;
      }
      var __s84local0 = this.getGemVO(this._craftingCenterInventory[0].upgradeId);
      this._playerInventory.push(__s84local0);
      this.clearCraftingInventory(true, null);
      this.dispatchEvent(new __dep_export_CastleGemEvent.CastleGemEvent(__dep_export_CastleGemEvent.CastleGemEvent.GEM_CRAFTING_SUCCESS, [__s84local0]));
    } else {
      this.clearCraftingInventory(false, null);
      this.dispatchEvent(new __dep_export_CastleGemEvent.CastleGemEvent(__dep_export_CastleGemEvent.CastleGemEvent.GEM_CRAFTING_FAILURE, null));
    }
  };
  CastleGemData.prototype.notifyOnInvetoryChange = function () {
    this.dispatchEvent(new __dep_export_CastleGemEvent.CastleGemEvent(__dep_export_CastleGemEvent.CastleGemEvent.GEM_INVENTORY_UPDATE, this._playerInventory));
  };
  CastleGemData.prototype.craftGem = function (__s91param0) {
    if (this._craftingCenterInventory[0]) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCraftGemVO.C2SCraftGemVO(this._craftingCenterInventory[0].id, this.extractGemIDs(this._craftingInventory), __s91param0));
    }
  };
  CastleGemData.prototype.cgeError = function () {
    this.dispatchEvent(new __dep_export_CastleGemEvent.CastleGemEvent(__dep_export_CastleGemEvent.CastleGemEvent.GEM_CRAFTING_SERVER_ERROR, null));
  };
  CastleGemData.prototype.extractGemIDs = function (__s96param0) {
    var __s96local0 = [];
    if (__s96param0 != null) {
      for (var __s96local1 = 0, __s96local2 = __s96param0; __s96local1 < __s96local2.length; __s96local1++) {
        var __s96local3 = __s96local2[__s96local1];
        if (__s96local3 !== undefined) {
          __s96local0.push(__s96local3.id);
        }
      }
    }
    return __s96local0;
  };
  CastleGemData.prototype.sell = function (__s102param0, __s102param1 = -1) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSellGemVO.C2SSellGemVO(__s102param0.id, __dep_exact_81dacdf05bd32292.instanceOfClass(__s102param0, "RelicGemVO"), __s102param1));
  };
  CastleGemData.prototype.extractGem = function (__s104param0, __s104param1) {
    if (__s104param0) {
      this._targetEquipment = __s104param0;
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SExtractGemVO.C2SExtractGemVO(__s104param0.id, __s104param1));
    }
  };
  CastleGemData.prototype.gemExtractionSuccess = function () {
    if (this._targetEquipment) {
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(this._targetEquipment.gemVO, "RelicGemVO")) {
        this._relicGemsInventory.push(this._targetEquipment.gemVO);
      } else {
        this._playerInventory.push(this._targetEquipment.gemVO);
      }
      this._targetEquipment.gemVO = null;
      this.updateInventorySpace();
      this.notifyOnInvetoryChange();
    }
  };
  CastleGemData.prototype.parse_SGE = function () {
    this.dispatchEvent(new __dep_export_CastleGemEvent.CastleGemEvent(__dep_export_CastleGemEvent.CastleGemEvent.GEM_SOLD, [this._gemToSell]));
  };
  CastleGemData.prototype.startDrag = function (__s114param0, __s114param1) {
    switch (__s114param1.locationType) {
      case __dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_CRAFTING:
        this.moveItem(__s114param0, this._craftingInventory, this._dragInventory);
        break;
      case __dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_CRAFTING_CENTER:
        this.moveItem(__s114param0, this._craftingCenterInventory, this._dragInventory);
        break;
      case __dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY:
        this.moveItem(__s114param0, this._playerInventory, this._dragInventory);
    }
  };
  CastleGemData.prototype.stopDrag = function (__s117param0, __s117param1, __s117param2) {
    switch (__s117param2.locationType) {
      case __dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_CRAFTING:
        this.moveItem(__s117param0, this._dragInventory, this._craftingInventory);
        break;
      case __dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_CRAFTING_CENTER:
        this.moveItem(__s117param0, this._dragInventory, this._craftingCenterInventory);
        break;
      case __dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_SLOT:
        this.moveItem(__s117param0, this._dragInventory, null);
        break;
      case __dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY:
        this.moveItem(__s117param0, this._dragInventory, this._playerInventory);
        break;
      case __dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_SELL_SLOT:
        this.moveItem(__s117param0, this._dragInventory, null);
    }
  };
  CastleGemData.prototype.returnCraftingToInventory = function () {
    this.clearCraftingInventory(true, this._playerInventory);
  };
  CastleGemData.prototype.clearCraftingInventory = function (__s122param0, __s122param1) {
    if (__s122param1) {
      if (this._craftingInventory != null) {
        for (var __s122local0 = 0, __s122local1 = this._craftingInventory; __s122local0 < __s122local1.length; __s122local0++) {
          var __s122local2 = __s122local1[__s122local0];
          if (__s122local2 !== undefined) {
            __s122param1.push(__s122local2);
          }
        }
      }
      if (__s122param0 && this._craftingCenterInventory != null) {
        for (var __s122local3 = 0, __s122local4 = this._craftingCenterInventory; __s122local3 < __s122local4.length; __s122local3++) {
          var __s122local5 = __s122local4[__s122local3];
          if (__s122local5 !== undefined) {
            __s122param1.push(__s122local5);
          }
        }
      }
    }
    if (__s122param0) {
      this._craftingCenterInventory = [];
    }
    this._craftingInventory = [];
  };
  CastleGemData.prototype.moveItem = function (__s134param0, __s134param1, __s134param2) {
    if (__s134param1) {
      var __s134local0 = __dep_exact_f855840627e6e145.int(__s134param1.indexOf(__s134param0));
      if (__s134local0 > -1) {
        if (__s134param2) {
          __s134param2.push(__s134param1.splice(__s134local0, 1)[0]);
        } else {
          __s134param1.splice(__s134local0, 1);
        }
      }
    } else {
      __s134param2.push(__s134param0);
    }
  };
  CastleGemData.prototype.parse_ESL = function (__s141param0) {
    if (__s141param0) {
      this._playerInventorySpace = __dep_exact_f855840627e6e145.int(__s141param0.G);
      this._playerTotalInventorySpace = __dep_exact_f855840627e6e145.int(__s141param0.TG);
      this.updateInventorySpace();
    }
  };
  Object.defineProperty(CastleGemData.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemData.prototype, "gemColors", {
    get: function () {
      return this._gemColors;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemData.prototype, "numberOfGemColors", {
    get: function () {
      return this._numberOfGemColors;
    },
    enumerable: true,
    configurable: true
  });
  CastleGemData.prototype.updateInventorySpace = function () {
    this._playerInventorySpace = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.gemData.playerTotalInventorySpace - this._playerInventory.length - this._relicGemsInventory.length);
    this.controller.dispatchEvent(new __dep_export_CastleGemEvent.CastleGemEvent(__dep_export_CastleGemEvent.CastleGemEvent.INVENTORY_SPACE_LEFT));
  };
  Object.defineProperty(CastleGemData.prototype, "relicGemsInventory", {
    get: function () {
      return this._relicGemsInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemData.prototype, "relicDragInventory", {
    get: function () {
      return this._relicGemsDragInventory;
    },
    enumerable: true,
    configurable: true
  });
  CastleGemData.prototype.getRelicGem = function (__s156param0) {
    if (this.relicGemsInventory != null) {
      for (var __s156local0 = 0, __s156local1 = this.relicGemsInventory; __s156local0 < __s156local1.length; __s156local0++) {
        var __s156local2 = __s156local1[__s156local0];
        if (__s156local2 !== undefined && __s156local2.id == __s156param0) {
          return __s156local2;
        }
      }
    }
    return null;
  };
  CastleGemData.prototype.updateRelicInventory = function (__s162param0) {
    if (__s162param0) {
      if (__s162param0 != null) {
        for (var __s162local0 = 0, __s162local1 = __s162param0; __s162local0 < __s162local1.length; __s162local0++) {
          var __s162local2 = __s162local1[__s162local0];
          if (__s162local2 !== undefined) {
            var __s162local3 = new __dep_export_RelicGemVO.RelicGemVO();
            __s162local3.parseServerObject(__s162local2);
            this._relicGemsInventory.push(__s162local3);
          }
        }
      }
      this.updateInventorySpace();
    }
  };
  CastleGemData.prototype.startRelicDrag = function (__s169param0, __s169param1) {
    this.moveRelicItem(__s169param0, this._relicGemsInventory, this._relicGemsDragInventory);
  };
  CastleGemData.prototype.stopRelicDrag = function (__s171param0, __s171param1, __s171param2) {
    switch (__s171param2.locationType) {
      case __dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_SLOT:
        this.moveRelicItem(__s171param0, this._relicGemsDragInventory, null);
        break;
      case __dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_INVENTORY:
        this.moveRelicItem(__s171param0, this._relicGemsDragInventory, this._relicGemsInventory);
        break;
      case __dep_export_EquipableDragLocationVO.EquipableDragLocationVO.TYPE_SELL_SLOT:
        this.moveRelicItem(__s171param0, this._relicGemsDragInventory, null);
    }
  };
  CastleGemData.prototype.moveRelicItem = function (__s174param0, __s174param1, __s174param2) {
    if (__s174param1) {
      var __s174local0 = __dep_exact_f855840627e6e145.int(__s174param1.indexOf(__s174param0));
      if (__s174local0 > -1) {
        if (__s174param2) {
          __s174param2.push(__s174param1.splice(__s174local0, 1)[0]);
        } else {
          __s174param1.splice(__s174local0, 1);
        }
      }
    } else {
      __s174param2.push(__s174param0);
    }
  };
  return CastleGemData;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.CastleGemData = __s0local0;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
