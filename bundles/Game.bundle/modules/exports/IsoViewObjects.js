Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AIsoViewComponent = require("gge-module:export_AIsoViewComponent");
var __dep_export_IsoViewObjectsProvider = require("gge-module:export_IsoViewObjectsProvider");
var __s0local0 = function (__s1param0) {
  function IsoViewObjects() {
    var __s3local0 = this;
    __s3local0._groups = new Map();
    __s3local0._isoLayerObjects = [];
    __s3local0._completeTempObjectList = [];
    __s3local0._isCompleteObjectListValid = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._provider = new __dep_export_IsoViewObjectsProvider.IsoViewObjectsProvider(__s3local0);
    __s3local0._groups = __dep_export_IsoHelper.IsoHelper.data.createObjectGroupDic(true);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoViewObjects, __s1param0);
  IsoViewObjects.prototype.init = function (__s5param0) {
    __s1param0.prototype.init.call(this, __s5param0);
    if (this.groups != null) {
      this.groups.forEach(function (__s8param0) {
        __s8param0.init(__s5param0);
      });
    }
  };
  IsoViewObjects.prototype.reset = function () {
    __s1param0.prototype.reset.call(this);
    this.invalidateCompleteObjectsList();
    this._isoLayerObjects.length = 0;
  };
  IsoViewObjects.prototype.setup = function () {
    __s1param0.prototype.setup.call(this);
    if (this.groups != null) {
      this.groups.forEach(function (__s15param0) {
        __s15param0.initObjects();
      });
    }
    this.invalidateCompleteObjectsList();
  };
  IsoViewObjects.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this._isoLayerObjects.length = 0;
    if (this.groups != null) {
      this.groups.forEach(function (__s20param0) {
        __s20param0.destroy();
      });
    }
    this.invalidateCompleteObjectsList();
  };
  IsoViewObjects.prototype.render = function (__s22param0 = false) {
    if (this.groups != null) {
      this.groups.forEach(function (__s25param0) {
        __s25param0.render(__s22param0);
      });
    }
  };
  IsoViewObjects.prototype.getGroupByType = function (__s27param0) {
    return this._groups.get(__s27param0);
  };
  IsoViewObjects.prototype.invalidateCompleteObjectsList = function () {
    this._isCompleteObjectListValid = false;
    if (this._completeTempObjectList.length > 0) {
      this._completeTempObjectList = [];
    }
  };
  IsoViewObjects.prototype.getCompleteObjectsList = function () {
    if (!this._isCompleteObjectListValid) {
      if (this.groups != null) {
        var __s32local0 = this._completeTempObjectList;
        this.groups.forEach(function (__s36param0) {
          __s36param0.fillInCompleteList(__s32local0);
        });
      }
      this._isCompleteObjectListValid = true;
    }
    return this._completeTempObjectList;
  };
  Object.defineProperty(IsoViewObjects.prototype, "background", {
    get: function () {
      return this.getGroupByType(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.BACKGROUND);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjects.prototype, "innerBuildings", {
    get: function () {
      return this.getGroupByType(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.INNER_BUILDINGS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjects.prototype, "eventBuildings", {
    get: function () {
      return this.getGroupByType(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.EVENT_BUILDINGS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjects.prototype, "defenceObjects", {
    get: function () {
      return this.getGroupByType(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.DEFENCE);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjects.prototype, "fixedPositions", {
    get: function () {
      return this.getGroupByType(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.FIXED_POSITIONS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjects.prototype, "groundObjects", {
    get: function () {
      return this.getGroupByType(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.GROUNDS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjects.prototype, "surroundings", {
    get: function () {
      return this.getGroupByType(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.SURROUNDINGS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjects.prototype, "effects", {
    get: function () {
      return this.getGroupByType(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.EFFECTS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjects.prototype, "expansions", {
    get: function () {
      return this.getGroupByType(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.EXPANSIONS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjects.prototype, "floorMarks", {
    get: function () {
      return this.getGroupByType(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.FLOOR_MARKS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjects.prototype, "movements", {
    get: function () {
      return this.getGroupByType(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.MOVEMENTS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjects.prototype, "judgements", {
    get: function () {
      return this.getGroupByType(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.JUDGEMENTS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjects.prototype, "groups", {
    get: function () {
      return this._groups;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjects.prototype, "isoLayerObjects", {
    get: function () {
      return this._isoLayerObjects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjects.prototype, "provider", {
    get: function () {
      return this._provider;
    },
    enumerable: true,
    configurable: true
  });
  return IsoViewObjects;
}(__dep_export_AIsoViewComponent.AIsoViewComponent);
exports.IsoViewObjects = __s0local0;
var __dep_export_IsoObjectGroupEnum = require("gge-module:export_IsoObjectGroupEnum");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
