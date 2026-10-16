Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function TreasureMapVO() {
    this._mapID = 0;
    this._initialPieces = 0;
    this._totalPieces = 0;
    this._costPiece = 0;
    this._initialPos = 0;
    this._mapType = 0;
    this._travelTime = 0;
    this._resourceTravelTaxRate = 0;
    this._unitTravelTaxRate = 0;
    this._endNodeID = 0;
    this._hasCamp = false;
    this._skipCostC2 = 0;
    this._durationInSeconds = 0;
    this._piecesFound = 0;
    this._progressType = 0;
    this._goodsArivalTimestamp = 0;
    this._troopsArivalTimestamp = 0;
    this._unitStorage = 0;
    this._maxSoldiers = 0;
    this._unitCount = 0;
    this._unitInventory = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
    this._morality = 0;
    this._mapbackground = 0;
    this._kingdomID = 0;
    this._endTimeStamp = 0;
    this._unitInventory.addEventListener(__dep_export_UnitInventoryEvent.UnitInventoryEvent.UPDATED, this.bindFunction(this.onUnitInventoryUpdated));
    this._resourceStorageCapacity = new __dep_export_CollectableList.CollectableList();
    this._resourcesStorage = new __dep_export_CollectableList.CollectableList();
  }
  TreasureMapVO.prototype.destroy = function () {
    this._unitInventory.removeEventListener(__dep_export_UnitInventoryEvent.UnitInventoryEvent.UPDATED, this.bindFunction(this.onUnitInventoryUpdated));
  };
  TreasureMapVO.prototype.loadFromParamObject = function (__s7param0) {
    this._achivedNodes = [];
    for (var __s7local0 = 0, __s7local1 = __s7param0.N; __s7local0 < __s7local1.length; __s7local0++) {
      var __s7local2 = __s7local1[__s7local0];
      if (__s7local2 !== undefined) {
        var __s7local3 = this.getNodeById(__s7local2.NID);
        if (__s7local3) {
          __s7local3.parseParamObject(__s7local2);
          if (__s7local2.A == 1) {
            this._achivedNodes.push(__s7local2.NID);
          }
        }
      }
    }
    this.fillAchivedNodes();
    this._piecesFound = __dep_exact_f855840627e6e145.int(__s7param0.PF ? __s7param0.PF : 0);
    this._progressType = __dep_exact_f855840627e6e145.int(__s7param0.PT);
    this.parseGoodsTransfer(__s7param0.RT);
    this.parseTroopsTransfer(__s7param0.UT);
    this.parseStorage(__s7param0.S);
    this._morality = __dep_exact_f855840627e6e145.int(__s7param0.M);
    this.parseUnitInventory(__s7param0.I);
    this._endTimeStamp = __s7param0.RS && __s7param0.RS > -1 ? __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s7param0.RS * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC : -1;
  };
  TreasureMapVO.prototype.parseUnitInventory = function (__s14param0) {
    this._unitInventory.fillFromWodAmountArray(__s14param0);
  };
  TreasureMapVO.prototype.onUnitInventoryUpdated = function (__s16param0) {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.INVENTORY_UPDATED));
  };
  TreasureMapVO.prototype.fillFromParamXML = function (__s18param0) {
    this._mapID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("mapID", __s18param0, "-1", true));
    this._tMapNodeIDs = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("tmapnodeIDs", __s18param0, "", true).split("+");
    this._initialPieces = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("initialpieces", __s18param0, "0"));
    this._totalPieces = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("totalpieces", __s18param0, "0"));
    this._costPiece = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("costpiece", __s18param0, "0"));
    this._initialPos = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("initialpos", __s18param0, "0", false));
    this._mapType = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("maptype", __s18param0, "0"));
    this._travelTime = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("travelTime", __s18param0, "0"));
    this._resourceTravelTaxRate = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("resourceTravelTaxRate", __s18param0, "0"));
    this._unitTravelTaxRate = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("unitTravelTaxRate", __s18param0, "0"));
    this._hasCamp = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("hasCamp", __s18param0, "0")) == 1;
    this._endNodeID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("endNodeID", __s18param0, "0"));
    this._skipCostC2 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("skipCostC2", __s18param0, "0"));
    this._rewardList = __dep_export_CastleModel.CastleModel.rewardData.getListById(parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rewardID", __s18param0, "0")));
    this._maxSoldiers = __s18param0.maxSoldiers !== undefined ? __dep_exact_f855840627e6e145.int(__s18param0.maxSoldiers) : Number.MAX_VALUE;
    var __s18local0 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("pixelSize", __s18param0, "10x10").split("x");
    this._pixelSize = new __s0local0(parseInt(__s18local0[0]), parseInt(__s18local0[1]));
    this._durationInSeconds = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("duration", __s18param0, "-1"));
    this._mapbackground = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("mapbackground", __s18param0, "", true));
    this._kingdomID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("kID", __s18param0, "0"));
    this._eventPackages = [];
    this.addEventPackages(String(__s18param0.packages || "").split("+"), this._eventPackages);
  };
  TreasureMapVO.prototype.addEventPackages = function (__s20param0, __s20param1) {
    for (var __s20local0 = 0; __s20local0 < __s20param0.length; __s20local0++) {
      var __s20local1 = __dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(__s20param0[__s20local0]);
      if (__s20local1) {
        __s20param1.push(__s20local1);
      }
    }
  };
  TreasureMapVO.prototype.parseStorage = function (__s25param0) {
    var __s25local0 = 0;
    var __s25local1 = 0;
    var __s25local2 = 0;
    var __s25local3 = 0;
    var __s25local4 = 0;
    var __s25local5 = 0;
    if (__s25param0) {
      this._unitStorage = __dep_exact_f855840627e6e145.int(__s25param0.MU);
      this._unitCount = __dep_exact_f855840627e6e145.int(__s25param0.U);
      __s25local0 = __dep_exact_f855840627e6e145.int(__s25param0.MRF);
      __s25local1 = __dep_exact_f855840627e6e145.int(__s25param0.MRW);
      __s25local2 = __dep_exact_f855840627e6e145.int(__s25param0.MRS);
      __s25local3 = __dep_exact_f855840627e6e145.int(__s25param0.F);
      __s25local4 = __dep_exact_f855840627e6e145.int(__s25param0.W);
      __s25local5 = __dep_exact_f855840627e6e145.int(__s25param0.S);
    }
    this._resourceStorageCapacity.clear();
    this._resourcesStorage.clear();
    this._resourceStorageCapacity.addItem(new __dep_export_CollectableItemWoodVO.CollectableItemWoodVO(__s25local1));
    this._resourceStorageCapacity.addItem(new __dep_export_CollectableItemStoneVO.CollectableItemStoneVO(__s25local2));
    this._resourceStorageCapacity.addItem(new __dep_export_CollectableItemFoodVO.CollectableItemFoodVO(__s25local0));
    this._resourcesStorage.addItem(new __dep_export_CollectableItemWoodVO.CollectableItemWoodVO(__s25local4));
    this._resourcesStorage.addItem(new __dep_export_CollectableItemStoneVO.CollectableItemStoneVO(__s25local5));
    this._resourcesStorage.addItem(new __dep_export_CollectableItemFoodVO.CollectableItemFoodVO(__s25local3));
  };
  TreasureMapVO.prototype.fillAchivedNodes = function () {
    this._achivedNodes.push(__dep_export_TMapNodeVO.TMapNodeVO.START_NODE_ID);
    this._tMapPortNodesVOs = [];
    if (this._tMapNodeVOs != null) {
      for (var __s28local0 = 0, __s28local1 = this._tMapNodeVOs; __s28local0 < __s28local1.length; __s28local0++) {
        var __s28local2 = __s28local1[__s28local0];
        if (__s28local2 !== undefined) {
          for (var __s28local3 = 0, __s28local4 = __s28local2.orUnlockIDs; __s28local3 < __s28local4.length; __s28local3++) {
            var __s28local5 = __s28local4[__s28local3];
            if (__s28local5 !== undefined && this._achivedNodes.indexOf(parseInt(__s28local5)) >= 0) {
              __s28local2.isUnlocked = true;
              break;
            }
          }
          if (__s28local2.andUnlockIDs != null) {
            for (var __s28local6 = 0, __s28local7 = __s28local2.andUnlockIDs; __s28local6 < __s28local7.length; __s28local6++) {
              var __s28local8 = __s28local7[__s28local6];
              if (__s28local8 !== undefined && this._achivedNodes.indexOf(parseInt(__s28local8)) < 0) {
                __s28local2.isUnlocked = false;
                __s28local2.isUnockedByPortLevel = false;
                break;
              }
            }
          }
          if (this._achivedNodes.indexOf(__s28local2.nodeID) >= 0) {
            __s28local2.isDefeated = true;
          }
          if (__s28local2.isPort) {
            this._tMapPortNodesVOs.push(__s28local2);
          }
        }
      }
    }
    if (this._tMapPortNodesVOs.length > 0) {
      this.sortPortNodes();
    }
  };
  TreasureMapVO.prototype.sortPortNodes = function () {
    var __s44local0;
    var __s44local1 = [];
    if (this._tMapPortNodesVOs != null) {
      for (var __s44local2 = 0, __s44local3 = this._tMapPortNodesVOs; __s44local2 < __s44local3.length; __s44local2++) {
        var __s44local4 = __s44local3[__s44local2];
        if (__s44local4 !== undefined) {
          var __s44local5 = false;
          if (this._tMapPortNodesVOs != null) {
            for (var __s44local6 = 0, __s44local7 = this._tMapPortNodesVOs; __s44local6 < __s44local7.length; __s44local6++) {
              var __s44local8 = __s44local7[__s44local6];
              if (__s44local8 !== undefined) {
                __s44local5 = __s44local5 || __s44local8.orUnlockIDs[0] == __s44local4.nodeID;
              }
            }
          }
          if (!__s44local5) {
            __s44local0 = __s44local4;
            break;
          }
        }
      }
    }
    while (__s44local0.orUnlockIDs[0] != 0) {
      __s44local1.push(__s44local0);
      __s44local0 = this.getNodeById(__s44local0.orUnlockIDs[0]);
    }
    __s44local1.push(__s44local0);
    this._tMapPortNodesVOs = __s44local1.reverse();
  };
  TreasureMapVO.prototype.fillNodes = function (__s57param0) {
    this._tMapNodeVOs = [];
    var __s57local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO ? __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.eventId : 0);
    this._tMapNodeVOs.push(this.generateStartNode());
    for (var __s57local1 = 0; __s57local1 < this._tMapNodeIDs.length; __s57local1++) {
      var __s57local2 = __dep_exact_f855840627e6e145.int(this._tMapNodeIDs[__s57local1]);
      var __s57local3 = this.createNode(__s57param0, __s57local2);
      __s57local3.eventID = __s57local0;
      this._tMapNodeVOs.push(__s57local3);
    }
  };
  TreasureMapVO.prototype.createNode = function (__s61param0, __s61param1) {
    var __s61local0 = new __dep_export_TMapNodeVO.TMapNodeVO();
    __s61local0.fillFromParamXML(__s61param0.get(__s61param1));
    __s61local0.isEndNode = __s61param1 == this.endNodeID;
    __s61local0.mapID = this._mapID;
    return __s61local0;
  };
  TreasureMapVO.prototype.generateStartNode = function () {
    var __s63local0 = new __dep_export_TMapNodeVO.TMapNodeVO();
    __s63local0.pos = this._initialPos;
    __s63local0.nodeID = __dep_exact_f855840627e6e145.int(__dep_export_TMapNodeVO.TMapNodeVO.START_NODE_ID);
    __s63local0.isUnlocked = true;
    __s63local0.isDefeated = true;
    __s63local0.orUnlockIDs = [0];
    return __s63local0;
  };
  TreasureMapVO.prototype.getNodeById = function (__s65param0) {
    if (this._tMapNodeVOs != null) {
      for (var __s65local0 = 0, __s65local1 = this._tMapNodeVOs; __s65local0 < __s65local1.length; __s65local0++) {
        var __s65local2 = __s65local1[__s65local0];
        if (__s65local2 !== undefined && __s65local2.nodeID == __s65param0) {
          return __s65local2;
        }
      }
    }
    return null;
  };
  TreasureMapVO.prototype.getEndNode = function () {
    return this.getNodeById(this._endNodeID);
  };
  TreasureMapVO.prototype.endNodeRewards = function () {
    return this.getEndNode().rewardLists;
  };
  TreasureMapVO.prototype.parseGoodsTransfer = function (__s75param0) {
    if (!__s75param0) {
      this._goodsArivalTimestamp = 0;
      this._goods = null;
      return;
    }
    this._goodsArivalTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s75param0.RS * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this._goods = __dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s75param0.G);
  };
  TreasureMapVO.prototype.parseTroopsTransfer = function (__s78param0) {
    if (!__s78param0) {
      this._troopsArivalTimestamp = 0;
      this._troops = null;
      return;
    }
    this._troopsArivalTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s78param0.RS * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this._troops = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
    this._troops.fillFromWodAmountArray(__s78param0.I);
  };
  Object.defineProperty(TreasureMapVO.prototype, "remainingGoodsTransferTimeInSeconds", {
    get: function () {
      return Math.ceil((this._goodsArivalTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "remainingTroopsTransferTimeInSeconds", {
    get: function () {
      return Math.ceil((this._troopsArivalTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "goodsTransferProgress", {
    get: function () {
      return 1 - Math.max(0, Math.min(1, this.remainingGoodsTransferTimeInSeconds / this.travelTime));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "troopsTransferProgress", {
    get: function () {
      return 1 - Math.max(0, Math.min(1, this.remainingTroopsTransferTimeInSeconds / this.travelTime));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "isGoodsTransferActive", {
    get: function () {
      return !!this._goods && this.remainingGoodsTransferTimeInSeconds > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "isTroopsTransferActive", {
    get: function () {
      return !!this._troops && this.remainingTroopsTransferTimeInSeconds > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "isGoodsTransferReady", {
    get: function () {
      return !!(this.remainingGoodsTransferTimeInSeconds < 0) && !!this._goods && (this._goods = null, true);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "isTroopTransferReady", {
    get: function () {
      return !!(this.remainingTroopsTransferTimeInSeconds < 0) && !!this._troops && (this._troops = null, true);
    },
    enumerable: true,
    configurable: true
  });
  TreasureMapVO.prototype.getShuffledPieces = function () {
    var __s97local0 = [];
    for (var __s97local1 = 0; __s97local1 < this.totalPieces; __s97local1++) {
      __s97local0.push(__s97local1);
    }
    for (var __s97local2 = __dep_exact_f855840627e6e145.int(__s97local0.length), __s97local3 = 0, __s97local4 = 0, __s97local5 = new __dep_exact_9e901e8e2483a22f.SimpleRandom(this.mapID); __s97local2--;) {
      __s97local3 = Math.floor(__s97local5.nextInt(99) / 100 * (__s97local2 + 1));
      __s97local4 = __dep_exact_f855840627e6e145.int(__s97local0[__s97local2]);
      __s97local0[__s97local2] = __s97local0[__s97local3];
      __s97local0[__s97local3] = __s97local4;
    }
    return __s97local0;
  };
  Object.defineProperty(TreasureMapVO.prototype, "tMapNodeVOs", {
    get: function () {
      return this._tMapNodeVOs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "mapID", {
    get: function () {
      return this._mapID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "tMapNodeIDs", {
    get: function () {
      return this._tMapNodeIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "totalPieces", {
    get: function () {
      return this._totalPieces;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "initialPos", {
    get: function () {
      return this._initialPos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "mapType", {
    get: function () {
      return this._mapType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "costPiece", {
    get: function () {
      return this._costPiece;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "missigPieces", {
    get: function () {
      return this._totalPieces - this._piecesFound;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "hasAllPieces", {
    get: function () {
      return this._totalPieces == this._piecesFound;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "mapbackground", {
    get: function () {
      return this._mapbackground;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "progressType", {
    get: function () {
      return this._progressType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "piecesFound", {
    get: function () {
      return this._piecesFound;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "endNodeID", {
    get: function () {
      return this._endNodeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "unitStorage", {
    get: function () {
      return this._unitStorage;
    },
    set: function (__s131param0) {
      this._unitStorage = __s131param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "unitCount", {
    get: function () {
      return this._unitCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "freeUnitSlots", {
    get: function () {
      return Math.max(0, this._unitStorage - this._unitCount);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "resStorageMinMixedCapacity", {
    get: function () {
      var __s137local0 = 0;
      for (var __s137local1 = 0; __s137local1 < this._resourceStorageCapacity.length; __s137local1++) {
        var __s137local2 = this._resourceStorageCapacity.getItemByIndex(__s137local1).amount;
        if (__s137local2 < __s137local0) {
          __s137local0 = __s137local2;
        }
      }
      return __s137local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "resStorageMaxMixedCapacity", {
    get: function () {
      var __s142local0 = 0;
      for (var __s142local1 = 0; __s142local1 < this._resourceStorageCapacity.length; __s142local1++) {
        var __s142local2 = this._resourceStorageCapacity.getItemByIndex(__s142local1).amount;
        if (__s142local2 > __s142local0) {
          __s142local0 = __s142local2;
        }
      }
      return __s142local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "resStorageCapacityWood", {
    get: function () {
      return this._resourceStorageCapacity.getItemByType(__dep_export_CollectableEnum.CollectableEnum.WOOD).amount;
    },
    set: function (__s149param0) {
      this.getResourceCapacityItemFromStorageCapacity(__dep_export_CollectableEnum.CollectableEnum.WOOD).amount = __s149param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "resStorageCapacityStone", {
    get: function () {
      return this._resourceStorageCapacity.getItemByType(__dep_export_CollectableEnum.CollectableEnum.STONE).amount;
    },
    set: function (__s153param0) {
      this.getResourceCapacityItemFromStorageCapacity(__dep_export_CollectableEnum.CollectableEnum.STONE).amount = __s153param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "resStorageCapacityFood", {
    get: function () {
      return this._resourceStorageCapacity.getItemByType(__dep_export_CollectableEnum.CollectableEnum.FOOD).amount;
    },
    set: function (__s157param0) {
      this.getResourceCapacityItemFromStorageCapacity(__dep_export_CollectableEnum.CollectableEnum.FOOD).amount = __s157param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "freeWoodCapacity", {
    get: function () {
      return this.resStorageCapacityWood - this.resStorageWood;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "freeStoneCapacity", {
    get: function () {
      return this.resStorageCapacityStone - this.resStorageStone;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "freeFoodCapacity", {
    get: function () {
      return this.resStorageCapacityFood - this.resStorageFood;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "resStorageWood", {
    get: function () {
      return this._resourcesStorage.getItemByType(__dep_export_CollectableEnum.CollectableEnum.WOOD).amount;
    },
    set: function (__s167param0) {
      this.getResourceItemFromStorage(__dep_export_CollectableEnum.CollectableEnum.WOOD).amount = __s167param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "resStorageStone", {
    get: function () {
      return this._resourcesStorage.getItemByType(__dep_export_CollectableEnum.CollectableEnum.STONE).amount;
    },
    set: function (__s171param0) {
      this.getResourceItemFromStorage(__dep_export_CollectableEnum.CollectableEnum.STONE).amount = __s171param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "resStorageFood", {
    get: function () {
      return this._resourcesStorage.getItemByType(__dep_export_CollectableEnum.CollectableEnum.FOOD).amount;
    },
    enumerable: true,
    configurable: true
  });
  TreasureMapVO.prototype.getRandomAchivedNodeByNodeID = function (__s175param0) {
    for (var __s175local0 = 0, __s175local1 = this.getNodeById(__s175param0).orUnlockIDs; __s175local0 < __s175local1.length; __s175local0++) {
      var __s175local2 = __s175local1[__s175local0];
      var __s175local3 = parseInt(__s175local2);
      if (__s175local3 !== undefined && this._achivedNodes != null) {
        for (var __s175local4 = 0, __s175local5 = this._achivedNodes; __s175local4 < __s175local5.length; __s175local4++) {
          var __s175local6 = __s175local5[__s175local4];
          if (__s175local6 !== undefined && __s175local3 == __s175local6) {
            var __s175local7 = true;
            var __s175local8 = this.getNodeById(__s175local3).andUnlockIDs;
            if (__s175local8) {
              for (var __s175local9 = 0, __s175local10 = __s175local8; __s175local9 < __s175local10.length; __s175local9++) {
                var __s175local11 = __s175local10[__s175local9];
                var __s175local12 = parseInt(__s175local11);
                if (__s175local12 !== undefined && this._achivedNodes.indexOf(__s175local12) < 0) {
                  __s175local7 = false;
                }
              }
            }
            if (!__s175local7) {
              continue;
            }
            if (this.getNodeById(__s175local3).isBridge) {
              return this.getRandomAchivedNodeByNodeID(__s175local3);
            } else {
              return this.getNodeById(__s175local3);
            }
          }
        }
      }
    }
    return null;
  };
  Object.defineProperty(TreasureMapVO.prototype, "treasureMovementsVOs", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.armyData.getTreasureMovementsByMapID(this._mapID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "hasDefeatedAll", {
    get: function () {
      var __s192local0 = 0;
      if (this._tMapNodeVOs != null) {
        for (var __s192local1 = 0, __s192local2 = this._tMapNodeVOs; __s192local1 < __s192local2.length; __s192local1++) {
          var __s192local3 = __s192local2[__s192local1];
          if (__s192local3 !== undefined && this._achivedNodes != null) {
            for (var __s192local4 = 0, __s192local5 = this._achivedNodes; __s192local4 < __s192local5.length; __s192local4++) {
              var __s192local6 = __s192local5[__s192local4];
              if (__s192local6 !== undefined && __s192local3.nodeID == __s192local6) {
                __s192local0++;
              }
            }
          }
        }
      }
      return this._tMapNodeVOs.length == __s192local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "hasDefeatedEndNode", {
    get: function () {
      if (this._achivedNodes != null) {
        for (var __s201local0 = 0, __s201local1 = this._achivedNodes; __s201local0 < __s201local1.length; __s201local0++) {
          var __s201local2 = __s201local1[__s201local0];
          if (__s201local2 !== undefined && __s201local2 == this.endNodeID) {
            return true;
          }
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "morality", {
    get: function () {
      return this._morality;
    },
    set: function (__s209param0) {
      this._morality = __s209param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "skipCostC2", {
    get: function () {
      return this._skipCostC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "hasCamp", {
    get: function () {
      return this._hasCamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "travelTime", {
    get: function () {
      return this._travelTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "resourceTravelTaxRate", {
    get: function () {
      return this._resourceTravelTaxRate;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "unitTravelTaxRate", {
    get: function () {
      return this._unitTravelTaxRate;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "troops", {
    get: function () {
      return this._troops;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "durationInSeconds", {
    get: function () {
      return this._durationInSeconds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "hasDuration", {
    get: function () {
      return this._durationInSeconds != -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "portLevel", {
    get: function () {
      var __s229local0 = 0;
      if (this._tMapPortNodesVOs != null) {
        for (var __s229local1 = 0, __s229local2 = this._tMapPortNodesVOs; __s229local1 < __s229local2.length; __s229local1++) {
          var __s229local3 = __s229local2[__s229local1];
          if (__s229local3 !== undefined && __s229local3.isDefeated) {
            __s229local0++;
          }
        }
      }
      return __s229local0 + 1;
    },
    enumerable: true,
    configurable: true
  });
  TreasureMapVO.prototype.getNextLockedPortNode = function () {
    if (this._tMapPortNodesVOs != null) {
      for (var __s235local0 = 0, __s235local1 = this._tMapPortNodesVOs; __s235local0 < __s235local1.length; __s235local0++) {
        var __s235local2 = __s235local1[__s235local0];
        if (__s235local2 !== undefined && !__s235local2.isDefeated) {
          return __s235local2;
        }
      }
    }
    return null;
  };
  Object.defineProperty(TreasureMapVO.prototype, "maxPortLevel", {
    get: function () {
      return this._tMapPortNodesVOs.length + 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "unitInventory", {
    get: function () {
      return this._unitInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "maxSoldiers", {
    get: function () {
      return this._maxSoldiers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "isTreasureMap", {
    get: function () {
      return this._mapType == 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "pixelSize", {
    get: function () {
      return this._pixelSize;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "kingdomID", {
    get: function () {
      return this._kingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "resources", {
    get: function () {
      return this._resourcesStorage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "resourceStorageCapacity", {
    get: function () {
      return this._resourceStorageCapacity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "goods", {
    get: function () {
      return this._goods;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "eventPackages", {
    get: function () {
      return this._eventPackages;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "remainingMapTimeInSeconds", {
    get: function () {
      if (this.hasRemainingTime) {
        return Math.max(0, (this._endTimeStamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
      } else {
        return Number.MAX_VALUE;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureMapVO.prototype, "hasRemainingTime", {
    get: function () {
      return this._endTimeStamp > 0;
    },
    enumerable: true,
    configurable: true
  });
  TreasureMapVO.prototype.setMapHighlights = function (__s267param0) {
    if (this._mapHighlights != null) {
      for (var __s267local0 = 0, __s267local1 = this._mapHighlights; __s267local0 < __s267local1.length; __s267local0++) {
        var __s267local2 = __s267local1[__s267local0];
        if (__s267local2 !== undefined) {
          this.getNodeById(__s267local2).isHighlighted = false;
        }
      }
    }
    this._mapHighlights = __s267param0;
    if (this._mapHighlights != null) {
      for (var __s267local3 = 0, __s267local4 = this._mapHighlights; __s267local3 < __s267local4.length; __s267local3++) {
        var __s267local5 = __s267local4[__s267local3];
        if (__s267local5 !== undefined) {
          this.getNodeById(__s267local5).isHighlighted = true;
        }
      }
    }
  };
  Object.defineProperty(TreasureMapVO.prototype, "mapHighlights", {
    get: function () {
      return this._mapHighlights;
    },
    enumerable: true,
    configurable: true
  });
  TreasureMapVO.prototype.getTotalSoldierCount = function () {
    var __s279local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.militaryData.unitInventory.getSoldierCount());
    var __s279local1 = 0;
    if (this.treasureMovementsVOs != null) {
      for (var __s279local2 = 0, __s279local3 = this.treasureMovementsVOs; __s279local2 < __s279local3.length; __s279local2++) {
        var __s279local4 = __s279local3[__s279local2];
        if (__s279local4 !== undefined) {
          __s279local1 += __dep_exact_f855840627e6e145.int(__s279local4.attackArmyVO.unitAmount);
        }
      }
    }
    return __s279local0 + __s279local1 + __dep_exact_f855840627e6e145.int(this.troops ? this.troops.getSoldierCount() : 0);
  };
  TreasureMapVO.prototype.getRemainingSoldierCapacity = function () {
    return this.unitStorage - this.getTotalSoldierCount();
  };
  TreasureMapVO.prototype.getResourceItemFromStorage = function (__s287param0) {
    return this._resourcesStorage.getItemByType(__s287param0);
  };
  TreasureMapVO.prototype.getResourceCapacityItemFromStorageCapacity = function (__s289param0) {
    return this._resourceStorageCapacity.getItemByType(__s289param0);
  };
  TreasureMapVO.prototype.getAvailableNodeIDs = function (__s291param0 = null) {
    var __s291local0 = [];
    if (this.tMapNodeVOs != null) {
      for (var __s291local1 = 0, __s291local2 = this.tMapNodeVOs; __s291local1 < __s291local2.length; __s291local1++) {
        var __s291local3 = __s291local2[__s291local1];
        if (__s291local3 !== undefined && __s291param0 && __s291param0(__s291local3)) {
          __s291local0.push(__s291local3.nodeID);
        }
      }
    }
    return __s291local0;
  };
  return TreasureMapVO;
}();
exports.TreasureMapVO = __s0local1;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableItemFoodVO = require("gge-module:export_CollectableItemFoodVO");
var __dep_export_CollectableItemStoneVO = require("gge-module:export_CollectableItemStoneVO");
var __dep_export_CollectableItemWoodVO = require("gge-module:export_CollectableItemWoodVO");
var __dep_export_UnitInventoryDictionary = require("gge-module:export_UnitInventoryDictionary");
var __dep_export_TMapNodeVO = require("gge-module:export_TMapNodeVO");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleMilitaryDataEvent = require("gge-module:export_CastleMilitaryDataEvent");
var __dep_export_UnitInventoryEvent = require("gge-module:export_UnitInventoryEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
