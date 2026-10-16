Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleConstructionItemsEvent = require("gge-module:export_CastleConstructionItemsEvent");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = createjs.TimerEvent;
var __s0local1 = function (__s1param0) {
  function ConstructionItemData(__s3param0 = null) {
    var __s3local0 = this;
    __s3local0._constructionItems = new Map();
    __s3local0._ciEnabledBuildings = new Map();
    __s3local0._effectGroupLimits = new Map();
    __s3local0._constructionItemGroups = new Map();
    __s3local0._craftingSeconds = 0;
    __s3local0._inventorySpaceLeft = 0;
    __s3local0._dissassemblingTombolas = new Map();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._playerInventory = new __dep_export_CollectableList.CollectableList();
    __s3local0.parseFromXML(__s3param0);
    __s3local0._inventorySpaceLeft = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.ConstructionItemConst.INVENTORY_SOFTCAP);
    __s3local0._nextExpirationTimer = new __dep_exact_81dacdf05bd32292_2.Timer(0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ConstructionItemData, __s1param0);
  ConstructionItemData.prototype.reset = function () {
    if (this._nextExpirationTimer) {
      this._nextExpirationTimer.removeEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onCIExpiration));
    }
  };
  ConstructionItemData.prototype.parseFromXML = function (__s8param0) {
    for (var __s8local0 = 0, __s8local1 = __s8param0.constructionItems; __s8local0 < __s8local1.length; __s8local0++) {
      var __s8local2 = __s8local1[__s8local0];
      if (__s8local2) {
        var __s8local3 = new __dep_export_ConstructionItemVO.ConstructionItemVO(__s8local2);
        this._constructionItems.set(__s8local3.id, __s8local3);
        if (this._constructionItemGroups.get(__s8local3.groupId)) {
          this._constructionItemGroups.get(__s8local3.groupId).push(__s8local3);
        } else {
          this._constructionItemGroups.set(__s8local3.groupId, [__s8local3]);
        }
      }
    }
    this._ciEnabledBuildings.set(__dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_NONE, new Map());
    this.createItemGroups();
    for (var __s8local4 = 0, __s8local5 = __s8param0.constructionItemsEffectGroups; __s8local4 < __s8local5.length; __s8local4++) {
      var __s8local6 = __s8local5[__s8local4];
      if (__s8local6 != null) {
        var __s8local7 = parseInt(__s8local6.constructionItemEffectGroupID || "");
        this._effectGroupLimits.set(__s8local7, parseInt(__s8local6.areaLimit || ""));
      }
    }
    for (var __s8local8 = 0, __s8local9 = __s8param0.constructionItemDisassemblingTombolas; __s8local8 < __s8local9.length; __s8local8++) {
      var __s8local10 = __s8local9[__s8local8];
      if (__s8local10) {
        var __s8local11 = new __dep_export_ConstructionItemDisassemblingTombolaVO.ConstructionItemDisassemblingTombolaVO();
        __s8local11.parseXML(__s8local10);
        if (this._dissassemblingTombolas.get(__s8local11.tombolaID)) {
          this._dissassemblingTombolas.get(__s8local11.tombolaID).push(__s8local11);
        } else {
          this._dissassemblingTombolas.set(__s8local11.tombolaID, [__s8local11]);
        }
      }
    }
  };
  ConstructionItemData.prototype.createItemGroups = function () {
    var __s23local0 = new Map();
    for (var __s23local1 = 0, __s23local2 = Array.from(__dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).values()); __s23local1 < __s23local2.length; __s23local1++) {
      var __s23local3 = __s23local2[__s23local1];
      if (__s23local3 !== undefined) {
        var __s23local4 = __dep_exact_81dacdf05bd32292.castAs(__s23local3, "ABasicBuildingVO");
        if (__s23local4 && __s23local4.constructionItemGroupIds.length > 0) {
          for (var __s23local5 = 0, __s23local6 = __s23local4.constructionItemGroupIds; __s23local5 < __s23local6.length; __s23local5++) {
            var __s23local7 = __s23local6[__s23local5];
            if (__s23local7 !== undefined) {
              var __s23local8 = __s23local0.get(__s23local7);
              if (!__s23local8) {
                __s23local0.set(__s23local7, __s23local8 = []);
              }
              __s23local8.push(__s23local4);
            }
          }
          if (!this._ciEnabledBuildings.get(__s23local4.buildingGroundType)) {
            this._ciEnabledBuildings.set(__s23local4.buildingGroundType, new Map());
          }
          if (!this._ciEnabledBuildings.get(__s23local4.buildingGroundType).has(__s23local4.name)) {
            this._ciEnabledBuildings.get(__s23local4.buildingGroundType).set(__s23local4.name, __s23local4);
          }
          if (!this._ciEnabledBuildings.get(__dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_NONE).has(__s23local4.name)) {
            this._ciEnabledBuildings.get(__dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_NONE).set(__s23local4.name, __s23local4);
          }
        }
      }
    }
    if (this._constructionItems != null) {
      for (var __s23local9 = 0, __s23local10 = Array.from(this._constructionItems.values()); __s23local9 < __s23local10.length; __s23local9++) {
        var __s23local11 = __s23local10[__s23local9];
        if (__s23local11 !== undefined) {
          __s23local11.applicableBuildings = __s23local0.get(__s23local11.groupId);
        }
      }
    }
    if (this._ciEnabledBuildings != null) {
      for (var __s23local12 = 0, __s23local13 = Array.from(this._ciEnabledBuildings.keys()); __s23local12 < __s23local13.length; __s23local12++) {
        var __s23local14 = __s23local13[__s23local12];
        if (__s23local14 !== undefined) {
          var __s23local15 = [];
          for (var __s23local16 = 0, __s23local17 = Array.from(this._ciEnabledBuildings.get(__s23local14).values()); __s23local16 < __s23local17.length; __s23local16++) {
            var __s23local18 = __s23local17[__s23local16];
            if (__s23local18 !== undefined) {
              __s23local15.push(__s23local18);
            }
          }
          __s23local15.sort(ConstructionItemData.sortByName);
          this._ciEnabledBuildings.set(__s23local14, __s23local15);
        }
      }
    }
  };
  ConstructionItemData.sortByName = function (__s47param0, __s47param1) {
    var __s47local0 = __dep_exact_f855840627e6e145.int(__dep_exact_92d05af59ee2ff30.Localize.text(__s47param0.getNameString()).localeCompare(__dep_exact_92d05af59ee2ff30.Localize.text(__s47param1.getNameString())));
    if (__s47local0 != 0) {
      return __s47local0;
    } else {
      return 0;
    }
  };
  ConstructionItemData.prototype.getCIEnabledBuildings = function (__s51param0 = __dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_NONE) {
    return this._ciEnabledBuildings.get(__s51param0);
  };
  ConstructionItemData.prototype.getConstructionItemVO = function (__s53param0) {
    return this._constructionItems.get(__s53param0);
  };
  ConstructionItemData.prototype.getPlayerInventory = function (__s55param0 = null) {
    if (__s55param0) {
      return this._playerInventory.filter(__s55param0);
    } else {
      return this._playerInventory;
    }
  };
  ConstructionItemData.prototype.hasConstructionItem = function (__s59param0) {
    for (var __s59local0 = 0, __s59local1 = this._playerInventory.list; __s59local0 < __s59local1.length; __s59local0++) {
      var __s59local2 = __s59local1[__s59local0];
      if (__s59local2 !== undefined && __s59local2.id == __s59param0) {
        return true;
      }
    }
    return false;
  };
  ConstructionItemData.prototype.getConstructionItemVOById = function (__s64param0) {
    for (var __s64local0 = 0, __s64local1 = this._playerInventory.list; __s64local0 < __s64local1.length; __s64local0++) {
      var __s64local2 = __s64local1[__s64local0];
      if (__s64local2 !== undefined && __s64local2.id == __s64param0) {
        return __s64local2;
      }
    }
    return null;
  };
  ConstructionItemData.prototype.getPlayerInventoryBySlotTypeAndBuilding = function (__s69param0 = ConstructionItemData.ALL_SLOTS, __s69param1 = null, __s69param2 = "", __s69param3 = 0, __s69param4 = -1) {
    return this.getPlayerInventory(this.getItemFilterBySlotType(__s69param0, __s69param1, __s69param2, __s69param3, __s69param4));
  };
  ConstructionItemData.prototype.getItemFilterBySlotType = function (__s71param0, __s71param1 = null, __s71param2 = "", __s71param3 = 0, __s71param4 = -1) {
    return function (__s73param0) {
      var __s73local0 = [];
      for (var __s73local1 = 1; __s73local1 < arguments.length; __s73local1++) {
        __s73local0[__s73local1 - 1] = arguments[__s73local1];
      }
      if (!__s73param0 || !__s73param0.constructionItemVO) {
        return false;
      }
      var __s73local2 = __s73param0.constructionItemVO;
      var __s73local3 = true;
      if (__s71param2 != "" && (__s73local3 = false, __s73local2.applicableBuildings)) {
        for (var __s73local4 = 0, __s73local5 = __s73local2.applicableBuildings; __s73local4 < __s73local5.length; __s73local4++) {
          var __s73local6 = __s73local5[__s73local4];
          if (__s73local6 !== undefined && __s73local6.buildingGroundType == __s71param2) {
            __s73local3 = true;
          }
        }
      }
      return (__s73local2.slotType == __s71param0 || __s71param0 == ConstructionItemData.ALL_SLOTS) && (!__s71param1 || __s71param1.constructionItemGroupIds.indexOf(__s73local2.groupId) > -1) && __s73local3 && (__s71param3 == 0 || __s73local2.effectsAmount == __s71param3) && (__s71param4 == -1 || __s73local2.rarity == __s71param4);
    };
  };
  ConstructionItemData.prototype.updateInventory = function (__s82param0) {
    this._playerInventory.clear();
    var __s82local0 = 0;
    for (var __s82local1 = 0, __s82local2 = __s82param0.CI; __s82local1 < __s82local2.length; __s82local1++) {
      var __s82local3 = __s82local2[__s82local1];
      if (__s82local3 !== undefined) {
        this._playerInventory.addItem(new __dep_export_CollectableItemConstructionItemVO.CollectableItemConstructionItemVO(__s82local3[0], __s82local3[1]));
        __s82local0 += __s82local3[1];
      }
    }
    this._inventorySpaceLeft = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.ConstructionItemConst.INVENTORY_SOFTCAP - __s82local0);
    this.dispatchEvent(new __dep_export_CastleConstructionItemsEvent.CastleConstructionItemsEvent(__dep_export_CastleConstructionItemsEvent.CastleConstructionItemsEvent.INVENTORY_UPDATED));
    this.dispatchEvent(new __dep_export_CastleConstructionItemsEvent.CastleConstructionItemsEvent(__dep_export_CastleConstructionItemsEvent.CastleConstructionItemsEvent.INVENTORY_SPACE_UPDATED));
  };
  ConstructionItemData.prototype.parse_CSP = function (__s87param0) {
    if (__s87param0) {
      this._inventorySpaceLeft = parseInt(__s87param0.C);
      this.dispatchEvent(new __dep_export_CastleConstructionItemsEvent.CastleConstructionItemsEvent(__dep_export_CastleConstructionItemsEvent.CastleConstructionItemsEvent.INVENTORY_SPACE_UPDATED));
    }
  };
  Object.defineProperty(ConstructionItemData.prototype, "isInventoryFull", {
    get: function () {
      return this._inventorySpaceLeft <= 0;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemData.prototype.getLimitByEffectGroup = function (__s92param0) {
    return __dep_exact_f855840627e6e145.int(this._effectGroupLimits.get(__s92param0) ? this._effectGroupLimits.get(__s92param0) : 0);
  };
  ConstructionItemData.prototype.getNextLevelItem = function (__s94param0) {
    return this.checkCandidates(__s94param0, 1);
  };
  ConstructionItemData.prototype.getPreviousLevelItem = function (__s96param0) {
    return this.checkCandidates(__s96param0, -1);
  };
  ConstructionItemData.prototype.checkCandidates = function (__s98param0, __s98param1) {
    if (!__s98param0) {
      return null;
    }
    var __s98local0 = this._constructionItems.get(__s98param0.id + __s98param1);
    if (__s98local0 && __s98local0.name == __s98param0.name && __s98local0.level == __s98param0.level + __s98param1) {
      return __s98local0;
    }
    if (!__s98param0.isAppearanceItem && this._constructionItems != null) {
      for (var __s98local1 = 0, __s98local2 = this.getConstructionItemGroup(__s98param0.groupId); __s98local1 < __s98local2.length; __s98local1++) {
        if ((__s98local0 = __s98local2[__s98local1]) !== undefined && __s98local0 && __s98local0.name == __s98param0.name && __s98local0.level == __s98param0.level + __s98param1) {
          return __s98local0;
        }
      }
    }
    return null;
  };
  Object.defineProperty(ConstructionItemData.prototype, "totalCraftingTime", {
    get: function () {
      if (this._craftingRecipe) {
        return this._craftingRecipe.durationInSeconds;
      } else {
        return 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemData.prototype, "craftingRecipe", {
    get: function () {
      return this._craftingRecipe;
    },
    set: function (__s112param0) {
      this._craftingRecipe = __s112param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemData.prototype, "craftingSeconds", {
    get: function () {
      if (this._craftingRecipe) {
        return this._craftingSeconds;
      } else {
        return -1;
      }
    },
    set: function (__s118param0) {
      this._craftingSeconds = __s118param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemData.prototype, "inventorySpaceLeft", {
    get: function () {
      return this._inventorySpaceLeft;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemData.prototype.parse_NEC = function (__s122param0) {
    this._nextExpirationTimer.stop();
    if (__s122param0.NCRS > -1) {
      this._nextExpirationTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s122param0.NCRS * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
      this._nextExpirationTimer.delay = __s122param0.NCRS * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
      this._nextExpirationTimer.repeatCount = 1;
      this._nextExpirationTimer.start();
      this._nextExpirationTimer.addEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onCIExpiration));
    }
    this._lastExpirationTimestamp = __s122param0.LECT;
    this.dispatchEvent(new __dep_export_CastleConstructionItemsEvent.CastleConstructionItemsEvent(__dep_export_CastleConstructionItemsEvent.CastleConstructionItemsEvent.NEC_RECEIVED));
  };
  ConstructionItemData.prototype.parse_AEC = function (__s125param0) {
    var __s125local0;
    this._expiredAreas = [];
    for (var __s125local1 = 0; __s125local1 < __s125param0.length; __s125local1++) {
      (__s125local0 = new __dep_export_ConstructionItemExpiredAreaVO.ConstructionItemExpiredAreaVO()).parseParams(__s125param0[__s125local1]);
      if (__s125local0.castleWMO) {
        this._expiredAreas.push(__s125local0);
      }
    }
    this.dispatchEvent(new __dep_export_CastleConstructionItemsEvent.CastleConstructionItemsEvent(__dep_export_CastleConstructionItemsEvent.CastleConstructionItemsEvent.AEC_RECEIVED));
  };
  ConstructionItemData.prototype.onCIExpiration = function (__s130param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetNextExpiringConstructionItemVO.C2SGetNextExpiringConstructionItemVO());
    this._nextExpirationTimer.removeEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onCIExpiration));
  };
  Object.defineProperty(ConstructionItemData.prototype, "expiredAreas", {
    get: function () {
      return this._expiredAreas || [];
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemData.prototype.getExpiredAreaVO = function (__s134param0) {
    if (this.expiredAreas) {
      for (var __s134local0 = 0, __s134local1 = this.expiredAreas; __s134local0 < __s134local1.length; __s134local0++) {
        var __s134local2 = __s134local1[__s134local0];
        if (__s134local2.castleWMO.equalsOtherWMO(__s134param0.objectId, __s134param0.kingdomID)) {
          return __s134local2;
        }
      }
    }
    return null;
  };
  ConstructionItemData.prototype.getDisassemblingTobola = function (__s140param0) {
    if (this._dissassemblingTombolas.get(__s140param0)) {
      return this._dissassemblingTombolas.get(__s140param0);
    } else {
      return [];
    }
  };
  ConstructionItemData.prototype.hasNewExpiredItems = function () {
    var __s144local0 = __dep_export_CastleModel.CastleModel.localData.readPlayerValue(ConstructionItemData.LAST_EXPIRATION_TIMESTAMP_SEEN_KEY);
    return this._lastExpirationTimestamp > -1 && this._lastExpirationTimestamp > __s144local0;
  };
  ConstructionItemData.prototype.saveLastExpirationTimestampSeen = function () {
    __dep_export_CastleModel.CastleModel.localData.savePlayerValue(ConstructionItemData.LAST_EXPIRATION_TIMESTAMP_SEEN_KEY, this._lastExpirationTimestamp);
    this.dispatchEvent(new __dep_export_CastleConstructionItemsEvent.CastleConstructionItemsEvent(__dep_export_CastleConstructionItemsEvent.CastleConstructionItemsEvent.LAST_EXPIRATION_TIME_SAVED));
  };
  ConstructionItemData.prototype.getConstructionItemGroup = function (__s148param0) {
    if (this._constructionItemGroups.has(__s148param0)) {
      return this._constructionItemGroups.get(__s148param0);
    } else {
      return [];
    }
  };
  ConstructionItemData.ALL_SLOTS = -1;
  ConstructionItemData.LAST_EXPIRATION_TIMESTAMP_SEEN_KEY = "ciExpirationTimestamp_lastSeen";
  ConstructionItemData.MAX_EFFECTS_PER_CI = 3;
  return ConstructionItemData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.ConstructionItemData = __s0local1;
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableItemConstructionItemVO = require("gge-module:export_CollectableItemConstructionItemVO");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_ConstructionItemVO = require("gge-module:export_ConstructionItemVO");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_ConstructionItemExpiredAreaVO = require("gge-module:export_ConstructionItemExpiredAreaVO");
var __dep_export_ConstructionItemDisassemblingTombolaVO = require("gge-module:export_ConstructionItemDisassemblingTombolaVO");
var __dep_export_C2SGetNextExpiringConstructionItemVO = require("gge-module:export_C2SGetNextExpiringConstructionItemVO");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "IUpdatable");
