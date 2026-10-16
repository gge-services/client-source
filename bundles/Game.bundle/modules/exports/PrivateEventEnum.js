Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __s0local0 = function (__s1param0) {
  function PrivateEventEnum(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5, __s3param6, __s3param7, __s3param8, __s3param9) {
    var __s3local0 = __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this;
    __s3local0._privateEventID = 0;
    __s3local0._minLevel = 0;
    __s3local0._maxLevel = 0;
    __s3local0._openWithLogin = false;
    __s3local0._privateEventID = __s3param1;
    __s3local0._privateEventClass = __s3param2;
    __s3local0._eventType = __s3param3;
    __s3local0._minLevel = __s3param4;
    __s3local0._maxLevel = __s3param5;
    __s3local0._openWithLogin = __s3param6;
    __s3local0._kIDs = __s3param7;
    __s3local0._areaTypes = __s3param8;
    __s3local0._mapIDs = __s3param9;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PrivateEventEnum, __s1param0);
  PrivateEventEnum.getPrivateEventTypeFromName = function (__s5param0) {
    return this.getByProperty(PrivateEventEnum, "name", __s5param0, PrivateEventEnum.UNDEFINED);
  };
  Object.defineProperty(PrivateEventEnum.prototype, "privateEventID", {
    get: function () {
      return this._privateEventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateEventEnum.prototype, "privateEventClass", {
    get: function () {
      return this._privateEventClass;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateEventEnum.prototype, "eventType", {
    get: function () {
      return this._eventType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateEventEnum.prototype, "minLevel", {
    get: function () {
      return this._minLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateEventEnum.prototype, "maxLevel", {
    get: function () {
      return this._maxLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateEventEnum.prototype, "openWithLogin", {
    get: function () {
      return this._openWithLogin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateEventEnum.prototype, "kIDs", {
    get: function () {
      return this._kIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateEventEnum.prototype, "areaTypes", {
    get: function () {
      return this._areaTypes;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateEventEnum.prototype, "mapIDs", {
    get: function () {
      return this._mapIDs;
    },
    enumerable: true,
    configurable: true
  });
  PrivateEventEnum.__initialize_static_members = function () {
    PrivateEventEnum.UNDEFINED = new PrivateEventEnum("undefined", 0, __dep_export_ASpecialEventVO.ASpecialEventVO, "", 6, 99, false, [], [], []);
    PrivateEventEnum.LOW_LEVEL_UNIT_DEALER = new PrivateEventEnum("unitDealer", 100, __dep_export_PrivateUnitDealerEventVO.PrivateUnitDealerEventVO, "UnitDealer", __dep_exact_26a421b704832cff.TreasureMapsConst.LOWLEVEL_UNDERWORLD_START_LEVEL, __dep_exact_26a421b704832cff.TreasureMapsConst.LOWLEVEL_UNDERWORLD_KILL_LEVEL, false, [0], [8], [30]);
  };
  return PrivateEventEnum;
}(__dep_exact_9e901e8e2483a22f.BasicEnum);
exports.PrivateEventEnum = __s0local0;
var __dep_export_ASpecialEventVO = require("gge-module:export_ASpecialEventVO");
var __dep_export_PrivateUnitDealerEventVO = require("gge-module:export_PrivateUnitDealerEventVO");
__s0local0.__initialize_static_members();
