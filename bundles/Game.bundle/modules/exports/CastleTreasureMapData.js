Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_C2SCreateTreasureHuntMovementVO = require("gge-module:export_C2SCreateTreasureHuntMovementVO");
var __dep_export_C2STreasureFinishMap = require("gge-module:export_C2STreasureFinishMap");
var __dep_export_C2STreasureMapsVO = require("gge-module:export_C2STreasureMapsVO");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleTreasureMapEvent = require("gge-module:export_CastleTreasureMapEvent");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleTreasureMapData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._configXML = __s3param0;
    __s3local0.parseTreasureMapXML();
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, __s3local0.bindFunction(__s3local0.onSpecialEventRemoved));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTreasureMapData, __s1param0);
  CastleTreasureMapData.prototype.executeUpdate = function (__s5param0) {
    if (this._activeTreasureMaps) {
      var __s5local0 = false;
      var __s5local1 = false;
      if (this._activeTreasureMaps != null) {
        for (var __s5local2 = 0, __s5local3 = Array.from(this._activeTreasureMaps.values()); __s5local2 < __s5local3.length; __s5local2++) {
          var __s5local4 = __s5local3[__s5local2];
          if (__s5local4 !== undefined) {
            if (!__s5local4) {
              return;
            }
            if (__s5local0 && __s5local1) {
              break;
            }
            if (__s5local4.isGoodsTransferActive || __s5local4.isTroopsTransferActive) {
              __s5local0 = true;
            }
            if (__s5local4.isGoodsTransferReady || __s5local4.isTroopTransferReady) {
              __s5local1 = true;
            }
          }
        }
      }
      if (__s5local1) {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2STreasureMapsVO.C2STreasureMapsVO());
      }
    }
  };
  CastleTreasureMapData.prototype.onSpecialEventRemoved = function (__s17param0) {
    var __s17local0 = __s17param0.specialEventVO;
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s17local0, "ASeasonEventVO")) {
      this.removeFromActiveTreasureMaps(__s17local0.mapID);
    }
  };
  CastleTreasureMapData.prototype.removeFromActiveTreasureMaps = function (__s20param0) {
    if (this._activeTreasureMaps && this._activeTreasureMaps.get(__s20param0)) {
      this._activeTreasureMaps.delete(__s20param0);
    }
  };
  CastleTreasureMapData.prototype.clearTreasureMap = function (__s23param0) {
    if (this.currentLowLevelSeasonMap && this.currentLowLevelSeasonMap.mapID == __s23param0) {
      __dep_export_CastleModel.CastleModel.specialEventData.removePrivateEventByType(__dep_export_PrivateEventEnum.PrivateEventEnum.getPrivateEventTypeFromName(CastleTreasureMapData.TREASUREMAP_NAME + this.currentLowLevelSeasonMap.mapID));
      __dep_export_CastleModel.CastleModel.specialEventData.removePrivateEventByType(__dep_export_PrivateEventEnum.PrivateEventEnum.LOW_LEVEL_UNIT_DEALER);
    }
    this.removeFromActiveTreasureMaps(__s23param0);
  };
  CastleTreasureMapData.prototype.parseTreasureMapXML = function () {
    this._tNodeXMLList = new Map();
    var __s26local0 = this._configXML.tmapnodes;
    if (__s26local0 != null) {
      for (var __s26local1 = 0, __s26local2 = __s26local0; __s26local1 < __s26local2.length; __s26local1++) {
        var __s26local3 = __s26local2[__s26local1];
        if (__s26local3 !== undefined) {
          var __s26local4 = parseInt(__s26local3.tmapnodeID || "");
          this._tNodeXMLList.set(__s26local4, __s26local3);
        }
      }
    }
    this._tMapsXMLList = new Map();
    var __s26local5 = this._configXML.tmaps;
    if (__s26local5 != null) {
      for (var __s26local6 = 0, __s26local7 = __s26local5; __s26local6 < __s26local7.length; __s26local6++) {
        var __s26local8 = __s26local7[__s26local6];
        if (__s26local8 !== undefined) {
          var __s26local9 = parseInt(__s26local8.mapID || "");
          this._tMapsXMLList.set(__s26local9, __s26local8);
        }
      }
    }
  };
  CastleTreasureMapData.prototype.createTreasureMapById = function (__s36param0) {
    var __s36local0 = new __dep_export_TreasureMapVO.TreasureMapVO();
    __s36local0.fillFromParamXML(this._tMapsXMLList.get(__s36param0));
    __s36local0.fillNodes(this._tNodeXMLList);
    return __s36local0;
  };
  CastleTreasureMapData.prototype.createTreasureMapNode = function (__s38param0, __s38param1) {
    var __s38local0 = new __dep_export_TreasureMapVO.TreasureMapVO();
    __s38local0.fillFromParamXML(this._tMapsXMLList.get(__s38param0));
    return __s38local0.createNode(this._tNodeXMLList, __s38param1);
  };
  CastleTreasureMapData.prototype.parse_TMP = function (__s40param0) {
    if (__s40param0) {
      var __s40local0 = this._currentLowLevelSeasonMap;
      if (!this._activeTreasureMaps || __s40param0.UA == 1) {
        this._activeTreasureMaps = new Map();
        this._currentLowLevelSeasonMap = null;
      }
      var __s40local1 = this.activeTreasuremapID;
      var __s40local2 = [];
      if (__s40param0.TM) {
        for (var __s40local3 = 0, __s40local4 = __s40param0.TM; __s40local3 < __s40local4.length; __s40local3++) {
          var __s40local5 = __s40local4[__s40local3];
          if (__s40local5 !== undefined) {
            var __s40local6;
            var __s40local7 = __dep_exact_f855840627e6e145.int(__s40local5.MID);
            if (this._activeTreasureMaps.get(__s40local7)) {
              __s40local6 = this._activeTreasureMaps.get(__s40local7);
            } else {
              __s40local6 = this.createTreasureMapById(__s40local7);
              this._activeTreasureMaps.set(__s40local7, __s40local6);
            }
            __s40local6.loadFromParamObject(__s40local5);
            if (__s40local1 == __s40local7) {
              if (__s40local6.progressType == __dep_exact_26a421b704832cff.TreasureMapsConst.PROGRESS_DESTROYED_END_NODE) {
                __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2STreasureFinishMap.C2STreasureFinishMap(__s40local6.mapID));
                this._activeTreasureMaps.delete(__s40local7);
              }
            } else if (__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO && __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO && __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.mapID == __s40local7 && __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.mapType == __dep_exact_26a421b704832cff.TreasureMapsConst.MAP_TYPE_CRUSADE) {
              __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_SEASON_INFODIALOG_COMMAND, [__s40local6, __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.eventId, __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.rewardList.getItemByIndexSave(0)]);
            }
            if ((__s40local1 = this.activeTreasuremapID) == CastleTreasureMapData.NO_MORE_MAPS) {
              this._currentNonSeasonTreasuremap = null;
            } else {
              this._currentNonSeasonTreasuremap = __s40local6;
            }
            if (__s40local6.mapType == __dep_exact_26a421b704832cff.TreasureMapsConst.MAP_TYPE_CRUSADE_TIMED) {
              this.setCurrentLowLevelSeasonMap(__s40local6);
            }
            __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_TREASUREHUNT_INFODIALOG_COMMAND, __s40local6);
            __s40local2.push(__s40local6);
          }
        }
      }
      if (!this._currentLowLevelSeasonMap && __s40local0) {
        __dep_export_CastleModel.CastleModel.specialEventData.removePrivateEventByType(__dep_export_PrivateEventEnum.PrivateEventEnum.getPrivateEventTypeFromName(CastleTreasureMapData.TREASUREMAP_NAME + __s40local0.mapID));
        __dep_export_CastleModel.CastleModel.specialEventData.removePrivateEventByType(__dep_export_PrivateEventEnum.PrivateEventEnum.LOW_LEVEL_UNIT_DEALER);
      }
      if (__s40local2 != null) {
        for (var __s40local8 = 0, __s40local9 = __s40local2; __s40local8 < __s40local9.length; __s40local8++) {
          var __s40local10 = __s40local9[__s40local8];
          if (__s40local10 !== undefined) {
            this.dispatchEvent(new __dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, __s40local10));
          }
        }
      }
    }
  };
  CastleTreasureMapData.prototype.getTreasureMapByID = function (__s61param0, __s61param1 = true) {
    if (__s61param1 || this._activeTreasureMaps && this._activeTreasureMaps.get(__s61param0)) {
      if (this._activeTreasureMaps) {
        return this._activeTreasureMaps.get(__s61param0);
      } else {
        return null;
      }
    } else {
      return this.createTreasureMapById(__s61param0);
    }
  };
  CastleTreasureMapData.prototype.sendTreasureHuntAttack = function (__s67param0, __s67param1, __s67param2, __s67param3, __s67param4) {
    if (__s67param0.isAttackComplete()) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCreateTreasureHuntMovementVO.C2SCreateTreasureHuntMovementVO(__s67param0.army.getArmyData(), __s67param1, __s67param2, __s67param0.treasureMapVO.mapID, __s67param0.tmapNode.nodeID, __s67param3 ? __s67param3.id : 0, __s67param4));
    }
  };
  CastleTreasureMapData.prototype.parse_TAI = function (__s70param0) {
    var __s70local0 = new __dep_export_CastleTreasureHuntFightscreenVO.CastleTreasureHuntFightscreenVO();
    __s70local0.targetActionType = __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_TREASUREATTACK;
    __s70local0.fillFromParamObject(__s70param0);
    return __s70local0;
  };
  Object.defineProperty(CastleTreasureMapData.prototype, "activeTreasuremapID", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.treasureHuntData.currentMapID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureMapData.prototype, "hasMapAvailable", {
    get: function () {
      return this.activeTreasuremapID != CastleTreasureMapData.NO_MORE_MAPS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureMapData.prototype, "currentNonSeasonTreasuremap", {
    get: function () {
      return this._currentNonSeasonTreasuremap;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureMapData.prototype, "hasTreasuremap", {
    get: function () {
      return this._currentNonSeasonTreasuremap != null;
    },
    enumerable: true,
    configurable: true
  });
  CastleTreasureMapData.prototype.reset = function () {
    this._currentNonSeasonTreasuremap = null;
    this._activeTreasureMaps = null;
  };
  CastleTreasureMapData.prototype.isIDEndNodeOfMap = function (__s82param0, __s82param1) {
    return __s82param0 == parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("endNodeID", this._tMapsXMLList.get(__s82param1), "0"));
  };
  Object.defineProperty(CastleTreasureMapData.prototype, "currentLowLevelSeasonMap", {
    get: function () {
      return this._currentLowLevelSeasonMap;
    },
    enumerable: true,
    configurable: true
  });
  CastleTreasureMapData.prototype.setCurrentLowLevelSeasonMap = function (__s86param0) {
    __dep_export_CastleModel.CastleModel.specialEventData.addPrivateEventByType(__dep_export_PrivateEventEnum.PrivateEventEnum.getPrivateEventTypeFromName(CastleTreasureMapData.TREASUREMAP_NAME + __s86param0.mapID), __s86param0.mapID);
    __dep_export_CastleModel.CastleModel.specialEventData.addPrivateEventByType(__dep_export_PrivateEventEnum.PrivateEventEnum.LOW_LEVEL_UNIT_DEALER, __s86param0.mapID);
    this._currentLowLevelSeasonMap = __s86param0;
  };
  CastleTreasureMapData.prototype.setMapHighlights = function (__s88param0, __s88param1) {
    var __s88local0 = this.getTreasureMapByID(__s88param0);
    if (__s88local0) {
      __s88local0.setMapHighlights(__s88param1);
      this.dispatchEvent(new __dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, __s88local0));
    }
  };
  CastleTreasureMapData.prototype.clearMapHighlights = function (__s91param0) {
    this.setMapHighlights(__s91param0, []);
  };
  CastleTreasureMapData.NO_MORE_MAPS = -1;
  CastleTreasureMapData.TREASUREMAP_NAME = "treasureMap";
  return CastleTreasureMapData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleTreasureMapData = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleTreasureHuntFightscreenVO = require("gge-module:export_CastleTreasureHuntFightscreenVO");
var __dep_export_PrivateEventEnum = require("gge-module:export_PrivateEventEnum");
var __dep_export_TreasureMapVO = require("gge-module:export_TreasureMapVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
