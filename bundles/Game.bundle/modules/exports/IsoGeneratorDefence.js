Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_Iso = require("gge-module:export_Iso");
var __s0local0 = function () {
  function IsoGeneratorDefence(__s3param0) {
    this._subGenerators = new Map();
    this._numberOfOwningTowers = 0;
    this._isoData = __s3param0;
    this._subGenerators = new Map();
    for (var __s3local0 = 0, __s3local1 = __dep_export_CastleEnum.CastleEnum.getEnumListByClass(__dep_export_IsoGeneratorDefenceEnum.IsoGeneratorDefenceEnum); __s3local0 < __s3local1.length; __s3local0++) {
      var __s3local2 = __s3local1[__s3local0];
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s3local2, "IsoGeneratorDefenceEnum")) {
        var __s3local3 = __s3local2;
        var __s3local4 = new __s3local3.clazz();
        __s3local4.init(this);
        this.subGenerators.set(__s3local3.clazz, __s3local4);
      }
    }
  }
  IsoGeneratorDefence.prototype.generate = function () {
    this._result = new __dep_export_IsoDefencePositions.IsoDefencePositions();
    this._grounds = this.isoData.objects.groundObjects.list;
    this._grid = this.isoData.grid;
    this._numberOfOwningTowers = __dep_exact_f855840627e6e145.int(this.isoData.objects.defences.towers.length);
    if (this.grounds && this.grounds.length > 0) {
      this._grounds = this.grounds.sort(this.bindFunction(this.sortGroundFunc));
      for (var __s8local0 = 0, __s8local1 = __dep_export_CastleEnum.CastleEnum.getEnumListByClass(__dep_export_IsoGeneratorDefenceEnum.IsoGeneratorDefenceEnum); __s8local0 < __s8local1.length; __s8local0++) {
        var __s8local2 = __s8local1[__s8local0];
        if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s8local2, "IsoGeneratorDefenceEnum")) {
          var __s8local3 = __s8local2;
          this.subGenerators.get(__s8local3.clazz).execute();
        }
      }
    }
    this.cleanup();
    return this.result;
  };
  IsoGeneratorDefence.prototype.cleanup = function () {
    for (var __s14local0 = 0, __s14local1 = __dep_export_CastleEnum.CastleEnum.getEnumListByClass(__dep_export_IsoGeneratorDefenceEnum.IsoGeneratorDefenceEnum); __s14local0 < __s14local1.length; __s14local0++) {
      var __s14local2 = __s14local1[__s14local0];
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s14local2, "IsoGeneratorDefenceEnum")) {
        var __s14local3 = __s14local2;
        this.subGenerators.get(__s14local3.clazz).cleanup();
      }
    }
    this._grid = null;
    this._grounds = null;
    this._numberOfOwningTowers = 0;
  };
  IsoGeneratorDefence.prototype.sortGroundFunc = function (__s19param0, __s19param1) {
    if (__s19param0.x2 > __s19param1.x2) {
      return 1;
    } else if (__s19param0.x2 < __s19param1.x2) {
      return -1;
    } else if (__s19param0.y2 > __s19param1.y2) {
      return 1;
    } else if (__s19param0.y2 < __s19param1.y2) {
      return -1;
    } else {
      return 0;
    }
  };
  Object.defineProperty(IsoGeneratorDefence.prototype, "grid", {
    get: function () {
      return this._grid;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoGeneratorDefence.prototype, "grounds", {
    get: function () {
      return this._grounds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoGeneratorDefence.prototype, "result", {
    get: function () {
      return this._result;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoGeneratorDefence.prototype, "numberOfOwningTowers", {
    get: function () {
      return this._numberOfOwningTowers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoGeneratorDefence.prototype, "subGenerators", {
    get: function () {
      return this._subGenerators;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoGeneratorDefence.prototype, "isoData", {
    get: function () {
      return __dep_export_Iso.Iso.data;
    },
    enumerable: true,
    configurable: true
  });
  return IsoGeneratorDefence;
}();
exports.IsoGeneratorDefence = __s0local0;
var __dep_export_IsoGeneratorDefenceEnum = require("gge-module:export_IsoGeneratorDefenceEnum");
var __dep_export_CastleEnum = require("gge-module:export_CastleEnum");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_IsoDefencePositions = require("gge-module:export_IsoDefencePositions");
