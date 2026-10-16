Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SGetTargetDecosInAreaEventVO = require("gge-module:export_C2SGetTargetDecosInAreaEventVO");
var __dep_export_AreaHelper = require("gge-module:export_AreaHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_DecoStorageEvent = require("gge-module:export_DecoStorageEvent");
var __s0local0 = function (__s1param0) {
  function DecoStorageData() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._storages = new Map();
    __s3local0._tempDecos = new Map();
    __s3local0._isRequestingGTD = false;
    __s3local0.initStorages();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DecoStorageData, __s1param0);
  DecoStorageData.prototype.initStorages = function () {
    var __s5local0 = [__dep_exact_26a421b704832cff.DecorationConst.GLOBAL_DECORATION_STORAGE_ID, __dep_exact_26a421b704832cff.DecorationConst.AREA_INVENTORY_STORAGE_ID];
    for (var __s5local1 = 0; __s5local1 < DecoStorageData.ADDITIONAL_STORAGE_SPACE_IDS.length; ++__s5local1) {
      __s5local0.push(__dep_exact_26a421b704832cff.DecorationConst.getStorageID(DecoStorageData.ADDITIONAL_STORAGE_SPACE_IDS[__s5local1]));
    }
    this._storages = new Map();
    if (__s5local0 != null) {
      for (var __s5local2 = 0, __s5local3 = __s5local0; __s5local2 < __s5local3.length; __s5local2++) {
        var __s5local4 = __s5local3[__s5local2];
        if (__s5local4 !== undefined) {
          this._storages.set(__s5local4, new __dep_export_DecoStorageVO.DecoStorageVO(__s5local4));
        }
      }
    }
  };
  DecoStorageData.prototype.parseSIN = function (__s13param0) {
    if (__s13param0) {
      if (__s13param0 != null) {
        for (var __s13local0 = 0, __s13local1 = __s13param0; __s13local0 < __s13local1.length; __s13local0++) {
          var __s13local2 = __s13local1[__s13local0];
          if (__s13local2 !== undefined) {
            var __s13local3 = __dep_exact_f855840627e6e145.int(__s13local2.SID);
            var __s13local4 = this.getStorageById(__s13local3);
            if (__s13local4) {
              __s13local4.parseSIN(__s13local2);
            } else {
              __dep_exact_9e901e8e2483a22f.error("DecoStorageData.parseSIN(): unknown storageId was send (" + __s13local3 + "). Entry ignored.");
            }
          }
        }
      }
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_DecoStorageEvent.DecoStorageEvent(__dep_export_DecoStorageEvent.DecoStorageEvent.ON_INVENTORY_UPDATED));
    }
  };
  DecoStorageData.prototype.parseGTD = function (__s22param0) {
    this._isRequestingGTD = false;
    if (__s22param0) {
      if (__s22param0 != null) {
        var __s22local0 = undefined;
        for (var __s22local1 = 0, __s22local2 = __s22param0; __s22local1 < __s22local2.length; __s22local1++) {
          var __s22local3 = __s22local2[__s22local1];
          if (__s22local3 !== undefined) {
            var __s22local4 = __dep_exact_f855840627e6e145.int(__s22local3.AID);
            var __s22local5 = __dep_exact_f855840627e6e145.int(__s22local3.KID);
            var __s22local6 = __dep_export_AreaHelper.AreaHelper.getAreaKey(__s22local5, __s22local4);
            if (!(__s22local0 = this._tempDecos.get(__s22local6))) {
              __s22local0 = new __dep_export_DecoStorageTempDecoVO.DecoStorageTempDecoVO();
              this._tempDecos.set(__s22local6, __s22local0);
            }
            __s22local0.parseServerObject(__s22local3);
          }
        }
      }
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_DecoStorageEvent.DecoStorageEvent(__dep_export_DecoStorageEvent.DecoStorageEvent.ON_TEMP_DECOS_UPDATED));
    }
  };
  DecoStorageData.prototype.requestGTD = function () {
    if (!this._isRequestingGTD) {
      this._isRequestingGTD = true;
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetTargetDecosInAreaEventVO.C2SGetTargetDecosInAreaEventVO());
    }
  };
  DecoStorageData.prototype.getCurrentStorage = function () {
    var __s33local0 = __dep_export_CastleModel.CastleModel.areaData.activeArea ? __dep_exact_26a421b704832cff.DecorationConst.getStorageID(__dep_export_CastleModel.CastleModel.areaData.activeArea.spaceId) : __dep_exact_26a421b704832cff.DecorationConst.GLOBAL_DECORATION_STORAGE_ID;
    if (__s33local0 != __dep_exact_26a421b704832cff.DecorationConst.GLOBAL_DECORATION_STORAGE_ID) {
      return this.getStorageById(__s33local0);
    }
    var __s33local1 = new __dep_export_DecoStorageVO.DecoStorageVO(__dep_exact_26a421b704832cff.DecorationConst.GLOBAL_DECORATION_STORAGE_ID);
    __s33local1.addDecoStorage(this.getStorageById(__dep_exact_26a421b704832cff.DecorationConst.GLOBAL_DECORATION_STORAGE_ID));
    __s33local1.addDecoStorage(this.getStorageById(__dep_exact_26a421b704832cff.DecorationConst.AREA_INVENTORY_STORAGE_ID));
    return __s33local1;
  };
  DecoStorageData.prototype.getMainStorage = function () {
    return this.getStorageById(__dep_exact_26a421b704832cff.DecorationConst.GLOBAL_DECORATION_STORAGE_ID);
  };
  DecoStorageData.prototype.getTempDecos = function (__s38param0, __s38param1) {
    return this._tempDecos.get(__dep_export_AreaHelper.AreaHelper.getAreaKey(__s38param1, __s38param0));
  };
  DecoStorageData.prototype.getStorageById = function (__s40param0) {
    return this._storages.get(__s40param0);
  };
  Object.defineProperty(DecoStorageData.prototype, "storages", {
    get: function () {
      return this._storages;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageData.prototype, "isRequestingGTD", {
    get: function () {
      return this._isRequestingGTD;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageData.prototype, "tempDecos", {
    get: function () {
      return this._tempDecos;
    },
    enumerable: true,
    configurable: true
  });
  DecoStorageData.__initialize_static_members = function () {
    DecoStorageData.ADDITIONAL_STORAGE_SPACE_IDS = [__dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID].concat(__dep_exact_26a421b704832cff_2.TreasureMapsConst.CRUSADE_MAP_IDS);
  };
  return DecoStorageData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.DecoStorageData = __s0local0;
var __dep_export_DecoStorageTempDecoVO = require("gge-module:export_DecoStorageTempDecoVO");
var __dep_export_DecoStorageVO = require("gge-module:export_DecoStorageVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
__s0local0.__initialize_static_members();
