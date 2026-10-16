Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_951b78d9b55b391b = require("gge-module:exact_951b78d9b55b391b");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstABTests = require("gge-module:export_ClientConstABTests");
var __dep_export_CastleUserData = require("gge-module:export_CastleUserData");
var __dep_export_BasicMicroservice = require("gge-module:export_BasicMicroservice");
var __s0local0 = function (__s1param0) {
  function CastleEquipmentFavoritesMicroservice() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0.retriedGetEquip = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEquipmentFavoritesMicroservice, __s1param0);
  Object.defineProperty(CastleEquipmentFavoritesMicroservice, "Instance", {
    get: function () {
      return this._instance ||= new this();
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentFavoritesMicroservice.prototype.initialize = function () {
    if (!this._isInitialized) {
      this._isInitialized = true;
      this.equipmentItemUpdatedSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
      this.gemItemUpdatedSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
      this.gemMarkedAsFavorite = new __dep_exact_5c7bc328fca9e4de.Signal();
      this.favoriteListDataArrivedSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
      this.getFavoriteEquipmentSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
      this.putFavoriteEquipmentSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
      this.equipmentItemUpdatedSignal.add(this.bindFunction(this.onEquipmentItemUpdated));
      this.gemItemUpdatedSignal.add(this.bindFunction(this.onGemItemUpdated));
      this.getFavoriteEquipmentSignal.add(this.bindFunction(this.onRequestFavoriteEquipment));
      this.putFavoriteEquipmentSignal.add(this.bindFunction(this.onSaveFavoriteEquipment));
      __dep_export_CastleModel.CastleModel.userData.onAPITokenRequestSignal.add(this.bindFunction(this.onForceRequestFavoriteEquipment));
    }
  };
  CastleEquipmentFavoritesMicroservice.prototype.reset = function () {
    this._isInitialized = false;
    this.equipmentItemUpdatedSignal.remove(this.bindFunction(this.onEquipmentItemUpdated));
    this.gemItemUpdatedSignal.remove(this.bindFunction(this.onGemItemUpdated));
    this.getFavoriteEquipmentSignal.remove(this.bindFunction(this.onRequestFavoriteEquipment));
    this.putFavoriteEquipmentSignal.remove(this.bindFunction(this.onSaveFavoriteEquipment));
    __dep_export_CastleModel.CastleModel.userData.onAPITokenRequestSignal.remove(this.bindFunction(this.onForceRequestFavoriteEquipment));
  };
  CastleEquipmentFavoritesMicroservice.prototype.onEquipmentItemUpdated = function (__s12param0) {
    this.updateCurrentList(__s12param0, __dep_export_CastleModel.CastleModel.equipData.favoriteEquipmentIdsList);
  };
  CastleEquipmentFavoritesMicroservice.prototype.onGemItemUpdated = function (__s14param0) {
    this.gemMarkedAsFavorite.dispatch(__s14param0);
    this.updateCurrentList(__s14param0, __dep_exact_81dacdf05bd32292.instanceOfClass(__s14param0, "RelicGemVO") ? __dep_export_CastleModel.CastleModel.equipData.favoriteRelicGemsIdsList : __dep_export_CastleModel.CastleModel.equipData.favoriteGemsIdsList);
  };
  CastleEquipmentFavoritesMicroservice.prototype.updateCurrentList = function (__s16param0, __s16param1) {
    if (__s16param1) {
      var __s16local0 = false;
      for (var __s16local1 = 0; __s16local1 < __s16param1.length; __s16local1++) {
        if (__s16param1[__s16local1] == __s16param0.id && !__s16param0.isFavorite) {
          __s16param1.splice(__s16param1.indexOf(__s16param0.id, 0), 1);
          __s16local0 = true;
          break;
        }
      }
      if (!__s16local0 && __s16param0.isFavorite) {
        __s16param1.push(__s16param0.id);
      }
      var __s16local2;
      var __s16local3 = [];
      for (__s16local1 = 0; __s16local1 < __s16param1.length; __s16local1++) {
        __s16local2 = __s16param1[__s16local1];
        if (__s16local3.indexOf(__s16local2) === -1) {
          __s16local3.push(__s16local2);
        } else {
          __s16param1.splice(__s16param1.indexOf(__s16param0.id, 0), 1);
        }
      }
    }
  };
  CastleEquipmentFavoritesMicroservice.prototype.getFavoriteEquipment = function () {
    if (__dep_export_CastleModel.CastleModel.userData.checkAndRequestApiTokenForRequestMethod(__dep_export_CastleUserData.CastleUserData.CALLER_METHOD_GET, true)) {
      var __s27local0 = {
        method: __dep_export_BasicMicroservice.BasicMicroservice.REQUEST_METHOD_GET,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + __dep_export_CastleModel.CastleModel.userData.apiToken
        },
        body: ""
      };
      var __s27local1 = {
        endPoint: this.getDataEndpoint(this.pingParams()),
        options: __s27local0
      };
      this.axiosLog(__dep_export_BasicMicroservice.BasicMicroservice.REQUEST_METHOD_GET, false);
      this.requestGET(__s27local1).then(this.bindFunction(this.requestGETSuccess)).catch(this.bindFunction(this.requestFail));
    }
  };
  CastleEquipmentFavoritesMicroservice.prototype.onForceRequestFavoriteEquipment = function (__s30param0) {
    if (__s30param0 == __dep_export_CastleUserData.CastleUserData.CALLER_METHOD_GET) {
      this.getFavoriteEquipment();
    } else if (__s30param0 == __dep_export_CastleUserData.CastleUserData.CALLER_METHOD_PUT) {
      this.saveFavoriteEquipment();
    }
  };
  CastleEquipmentFavoritesMicroservice.prototype.onRequestFavoriteEquipment = function () {
    this.getFavoriteEquipment();
  };
  CastleEquipmentFavoritesMicroservice.prototype.onSaveFavoriteEquipment = function () {
    this.updateModels(true);
    this.saveFavoriteEquipment();
  };
  CastleEquipmentFavoritesMicroservice.prototype.saveFavoriteEquipment = function () {
    if (__dep_export_CastleModel.CastleModel.userData.checkAndRequestApiTokenForRequestMethod(__dep_export_CastleUserData.CastleUserData.CALLER_METHOD_PUT, true)) {
      var __s38local0 = {
        equipment: __dep_export_CastleModel.CastleModel.equipData.favoriteEquipmentIdsList,
        gem: __dep_export_CastleModel.CastleModel.equipData.favoriteGemsIdsList,
        relicGem: __dep_export_CastleModel.CastleModel.equipData.favoriteRelicGemsIdsList
      };
      var __s38local1 = {
        endPoint: this.getDataEndpoint(this.pingParams()),
        options: __s38local0,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + __dep_export_CastleModel.CastleModel.userData.apiToken
        }
      };
      this.requestPUT(__s38local1).then(function (__s41param0) {}).catch(this.bindFunction(this.requestFail));
    }
  };
  CastleEquipmentFavoritesMicroservice.prototype.updateModelFavorites = function (__s43param0, __s43param1, __s43param2) {
    var __s43local0;
    var __s43local1 = false;
    for (var __s43local2 = 0; __s43local2 < __s43param1.length; __s43local2++) {
      __s43local1 = false;
      for (var __s43local3 = 0; __s43local3 < __s43param0.length; __s43local3++) {
        if ((__s43local0 = __s43param0[__s43local3]).id == __s43param1[__s43local2]) {
          __s43local0.isFavorite = true;
          __s43local1 = true;
        }
      }
      if (!__s43local1 && __s43param2) {
        __s43param1.splice(__s43param1.indexOf(__s43param1[__s43local2], 0), 1);
      }
    }
  };
  CastleEquipmentFavoritesMicroservice.prototype.requestGET = function (__s51param0 = null) {
    return __dep_exact_951b78d9b55b391b.default.get(__s51param0.endPoint, __s51param0.options);
  };
  CastleEquipmentFavoritesMicroservice.prototype.requestPUT = function (__s53param0 = null) {
    return __dep_exact_951b78d9b55b391b.default.put(__s53param0.endPoint, __s53param0.options, {
      headers: __s53param0.headers
    });
  };
  CastleEquipmentFavoritesMicroservice.prototype.requestGETSuccess = function (__s55param0) {
    __dep_export_CastleModel.CastleModel.equipData.favoriteEquipmentIdsList = __s55param0.data.favequip.equipment || [];
    __dep_export_CastleModel.CastleModel.equipData.favoriteGemsIdsList = __s55param0.data.favequip.gem || [];
    __dep_export_CastleModel.CastleModel.equipData.favoriteRelicGemsIdsList = __s55param0.data.favequip.relicGem || [];
    this.updateModels(false);
    this.favoriteListDataArrivedSignal.dispatch();
  };
  CastleEquipmentFavoritesMicroservice.prototype.requestFail = function (__s57param0) {
    __s1param0.prototype.requestFail.call(this, __s57param0);
    if (this.retriedGetEquip) {
      this.retriedGetEquip = false;
    } else {
      __dep_export_CastleModel.CastleModel.userData.resetApiToken();
      this.retriedGetEquip = true;
      this.getFavoriteEquipment();
    }
  };
  CastleEquipmentFavoritesMicroservice.prototype.updateModels = function (__s61param0) {
    var __s61local0 = [].concat(__dep_export_CastleModel.CastleModel.equipData.playerInventory).concat(__dep_export_CastleModel.CastleModel.equipData.craftingInventory).concat(__dep_export_CastleModel.CastleModel.equipData.dragInventory);
    __s61local0 = (__s61local0 = __s61local0.concat(this.getFavoriteEquipmentFromSlots(__dep_export_CastleModel.CastleModel.lordData.commanders))).concat(this.getFavoriteEquipmentFromSlots(__dep_export_CastleModel.CastleModel.lordData.barons));
    this.updateModelFavorites(__s61local0, __dep_export_CastleModel.CastleModel.equipData.favoriteEquipmentIdsList, __s61param0);
    var __s61local1 = [].concat(__dep_export_CastleModel.CastleModel.gemData.playerInventory).concat(__dep_export_CastleModel.CastleModel.gemData.craftingInventory).concat(__dep_export_CastleModel.CastleModel.gemData.craftingCenterInventory).concat(__dep_export_CastleModel.CastleModel.gemData.dragInventory);
    var __s61local2 = [].concat(__dep_export_CastleModel.CastleModel.gemData.relicGemsInventory).concat(__dep_export_CastleModel.CastleModel.gemData.relicDragInventory);
    this.updateModelFavorites(__s61local1, __dep_export_CastleModel.CastleModel.equipData.favoriteGemsIdsList, __s61param0);
    this.updateModelFavorites(__s61local2, __dep_export_CastleModel.CastleModel.equipData.favoriteRelicGemsIdsList, __s61param0);
  };
  CastleEquipmentFavoritesMicroservice.prototype.getFavoriteEquipmentFromSlots = function (__s63param0) {
    if (!__s63param0) {
      return [];
    }
    var __s63local0;
    var __s63local1;
    var __s63local2 = [];
    for (var __s63local3 = 0; __s63local3 < __s63param0.length; __s63local3++) {
      for (var __s63local4 in (__s63local0 = __s63param0[__s63local3]).equipmentSlots) {
        if ((__s63local1 = __s63local0.equipmentSlots[__s63local4]).equipmentVO && __s63local1.equipmentVO.isFavorite) {
          __s63local2.push(__s63local1.equipmentVO);
        }
      }
    }
    return __s63local2;
  };
  CastleEquipmentFavoritesMicroservice.prototype.getDataEndpoint = function (__s71param0) {
    if (__dep_export_ClientConstABTests.ClientConstABTests.isOnQAServerInstance) {
      return "" + CastleEquipmentFavoritesMicroservice.QA_DATA_ENDPOINT + __s71param0 + "/data/" + CastleEquipmentFavoritesMicroservice.FAVORITE_EQUIPMENT_KEY;
    } else if (__dep_export_ClientConstABTests.ClientConstABTests.isOnDevServerInstance) {
      return "" + CastleEquipmentFavoritesMicroservice.DEV_DATA_ENDPOINT + __s71param0 + "/data/" + CastleEquipmentFavoritesMicroservice.FAVORITE_EQUIPMENT_KEY;
    } else {
      return "" + CastleEquipmentFavoritesMicroservice.LIVE_DATA_ENDPOINT + __s71param0 + "/data/" + CastleEquipmentFavoritesMicroservice.FAVORITE_EQUIPMENT_KEY;
    }
  };
  CastleEquipmentFavoritesMicroservice.prototype.pingParams = function () {
    return __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.gameId + "-" + __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.networkId + "-" + __dep_exact_9e901e8e2483a22f.BasicModel.instanceProxy.selectedInstanceVO.instanceId + "-" + __dep_export_CastleModel.CastleModel.userData.playerID;
  };
  CastleEquipmentFavoritesMicroservice.FAVORITE_EQUIPMENT_KEY_TEST = "thiskeyisnonsense";
  CastleEquipmentFavoritesMicroservice.FAVORITE_EQUIPMENT_KEY = "favequip";
  CastleEquipmentFavoritesMicroservice.LIVE_DATA_ENDPOINT = "https://player-kv.public.ggs-ep.com/api/players/";
  CastleEquipmentFavoritesMicroservice.QA_DATA_ENDPOINT = "https://player-kv-test.public.ggs-ep.com/api/players/";
  CastleEquipmentFavoritesMicroservice.DEV_DATA_ENDPOINT = "https://player-kv-dev.public.ggs-ep.com/api/players/";
  return CastleEquipmentFavoritesMicroservice;
}(__dep_export_BasicMicroservice.BasicMicroservice);
exports.CastleEquipmentFavoritesMicroservice = __s0local0;
