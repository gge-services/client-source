Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function CastleResourceVillageListItemVO(__s3param0, __s3param1, __s3param2 = null) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._level = 0;
    __s3local0._resourceBonus = 0;
    __s3local0._resourceVillageType = 0;
    __s3local0._wmo = __s3param0;
    __s3local0._unitInventory = __s3param1;
    __s3local0._privateResourceVillage = __s3param2;
    if (__s3param0 && __dep_exact_81dacdf05bd32292.instanceOfClass(__s3param0, "VillageMapobjectVO")) {
      __s3local0._resourceBonus = __dep_exact_f855840627e6e145.int(__s3param0.productivityBoost);
      __s3local0._resourceVillageType = __dep_exact_f855840627e6e145.int(__s3param0.villageType);
    } else if (__s3local0._privateResourceVillage) {
      __s3local0._level = __dep_exact_f855840627e6e145.int(__s3local0._privateResourceVillage.villageInfo.villageLevel);
      __s3local0._resourceBonus = __dep_exact_f855840627e6e145.int(__s3local0._privateResourceVillage.villageInfo.bonus.strength);
      __s3local0._resourceVillageType = __dep_exact_f855840627e6e145.int(__s3local0._privateResourceVillage.villageInfo.type);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleResourceVillageListItemVO, __s1param0);
  Object.defineProperty(CastleResourceVillageListItemVO.prototype, "wmo", {
    get: function () {
      return this._wmo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceVillageListItemVO.prototype, "unitInventory", {
    get: function () {
      return this._unitInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceVillageListItemVO.prototype, "privateResourceVillage", {
    get: function () {
      return this._privateResourceVillage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceVillageListItemVO.prototype, "showResourceBonus", {
    get: function () {
      return !!this.wmo && __dep_exact_81dacdf05bd32292.instanceOfClass(this.wmo, "VillageMapobjectVO") || !!this._privateResourceVillage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceVillageListItemVO.prototype, "resourceBonus", {
    get: function () {
      return this._resourceBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceVillageListItemVO.prototype, "resourceVillageType", {
    get: function () {
      return this._resourceVillageType;
    },
    enumerable: true,
    configurable: true
  });
  return CastleResourceVillageListItemVO;
}(__dep_exact_9e901e8e2483a22f.ScrollItemVO);
exports.CastleResourceVillageListItemVO = __s0local0;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
