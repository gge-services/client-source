Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function IsoDataObjects(__s3param0) {
    this._groups = new Map();
    this._completeTempObjectList = [];
    this._isCompleteObjectListValid = false;
    this._isoData = __s3param0;
    this._provider = new __dep_export_IsoDataObjectsProvider.IsoDataObjectsProvider(this);
    this._groups = __dep_export_IsoHelper.IsoHelper.data.createObjectGroupDic(false);
    if (this.groups != null) {
      for (var __s3local0 = 0, __s3local1 = Array.from(this.groups.values()); __s3local0 < __s3local1.length; __s3local0++) {
        __s3local1[__s3local0].init(__s3param0);
      }
    }
  }
  IsoDataObjects.prototype.invalidateCompleteObjectsList = function () {
    this._isCompleteObjectListValid = false;
    if (this._completeTempObjectList.length > 0) {
      this._completeTempObjectList.length = 0;
    }
  };
  IsoDataObjects.prototype.destroy = function () {
    if (this.groups != null) {
      for (var __s11local0 = 0, __s11local1 = Array.from(this.groups.values()); __s11local0 < __s11local1.length; __s11local0++) {
        __s11local1[__s11local0].destroy();
      }
    }
    this._groups = null;
    this._completeTempObjectList = null;
  };
  IsoDataObjects.prototype.getGroupByType = function (__s16param0) {
    return this.groups.get(__s16param0);
  };
  IsoDataObjects.prototype.getCompleteObjectsList = function () {
    if (!this._isCompleteObjectListValid) {
      if (this.groups != null) {
        for (var __s18local0 = 0, __s18local1 = Array.from(this.groups.values()); __s18local0 < __s18local1.length; __s18local0++) {
          __s18local1[__s18local0].fillInCompleteList(this._completeTempObjectList);
        }
      }
      this._isCompleteObjectListValid = true;
    }
    return this._completeTempObjectList;
  };
  Object.defineProperty(IsoDataObjects.prototype, "background", {
    get: function () {
      return this.getGroupByType(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.BACKGROUND);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjects.prototype, "innerBuildings", {
    get: function () {
      return this.getGroupByType(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.INNER_BUILDINGS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjects.prototype, "eventBuildings", {
    get: function () {
      return this.getGroupByType(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.EVENT_BUILDINGS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjects.prototype, "defences", {
    get: function () {
      return this.getGroupByType(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.DEFENCE);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjects.prototype, "fixedPositions", {
    get: function () {
      return this.getGroupByType(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.FIXED_POSITIONS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjects.prototype, "groundObjects", {
    get: function () {
      return this.getGroupByType(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.GROUNDS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjects.prototype, "surroundings", {
    get: function () {
      return this.getGroupByType(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.SURROUNDINGS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjects.prototype, "expansions", {
    get: function () {
      return this.getGroupByType(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.EXPANSIONS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjects.prototype, "movements", {
    get: function () {
      return this.getGroupByType(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.MOVEMENTS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjects.prototype, "treasureChests", {
    get: function () {
      return this.getGroupByType(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.TREASURE_CHESTS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjects.prototype, "judgements", {
    get: function () {
      return this.getGroupByType(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.JUDGEMENTS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjects.prototype, "isoData", {
    get: function () {
      return this._isoData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjects.prototype, "groups", {
    get: function () {
      return this._groups;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjects.prototype, "provider", {
    get: function () {
      return this._provider;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjects.prototype, "completeTempObjectList", {
    get: function () {
      return this._completeTempObjectList;
    },
    enumerable: true,
    configurable: true
  });
  return IsoDataObjects;
}();
exports.IsoDataObjects = __s0local0;
var __dep_export_IsoObjectGroupEnum = require("gge-module:export_IsoObjectGroupEnum");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_IsoDataObjectsProvider = require("gge-module:export_IsoDataObjectsProvider");
