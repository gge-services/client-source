Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_BasicGateVE = require("gge-module:export_BasicGateVE");
var __dep_export_BasicMoatVE = require("gge-module:export_BasicMoatVE");
var __dep_export_ATowerVE = require("gge-module:export_ATowerVE");
var __s0local0 = function (__s1param0) {
  function IsoViewObjectGroupDefence() {
    var __s3local0 = this;
    __s3local0._towers = [];
    __s3local0._walls = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoViewObjectGroupDefence, __s1param0);
  IsoViewObjectGroupDefence.prototype.destroy = function () {
    this._gate = this.destroyObject(this._gate);
    this._moat = this.destroyObject(this._moat);
    this._towers = this.destroyAndCreateNewObjectList(this._towers);
    this._walls = this.destroyAndCreateNewObjectList(this._walls);
    __s1param0.prototype.destroy.call(this);
  };
  IsoViewObjectGroupDefence.prototype.initObjects = function () {
    this.initTowers();
    this.initWalls();
    this.initGate();
    this.initMoat();
  };
  IsoViewObjectGroupDefence.prototype.initGate = function () {
    if (this.gate) {
      this._gate = this.destroyObject(this.gate);
    }
    this._gate = this.createObjectAndAddToLayer(this.isoData.objects.defences.gate);
  };
  IsoViewObjectGroupDefence.prototype.initWalls = function () {
    if (this.walls && this.walls.length > 0) {
      this._walls = this.destroyAndCreateNewObjectList(this.walls);
    }
    this.createObjectsAndAddToLayerAndList(this.isoData.objects.defences.walls, this.walls);
  };
  IsoViewObjectGroupDefence.prototype.initTowers = function () {
    if (this.towers && this.towers.length > 0) {
      this._towers = this.destroyAndCreateNewObjectList(this.towers);
    }
    this.createObjectsAndAddToLayerAndList(this.isoData.objects.defences.towers, this.towers);
    this.createObjectsAndAddToLayerAndList(this.isoData.objects.defences.emptyTowers, this.towers);
  };
  IsoViewObjectGroupDefence.prototype.initMoat = function () {
    if (this.moat) {
      this._moat = this.destroyObject(this.moat);
    }
    this._moat = this.createObjectAndAddToLayer(this.isoData.objects.defences.moat);
  };
  IsoViewObjectGroupDefence.prototype.render = function () {
    if (this.gate) {
      this.gate.updateDisp();
    }
    if (this.moat) {
      this.moat.updateDisp();
    }
    this.updateTowers();
    this.updateWalls();
  };
  IsoViewObjectGroupDefence.prototype.addObject = function (__s25param0) {
    if (__s25param0 instanceof __dep_export_BasicGateVE.BasicGateVE) {
      this.initGate();
    } else if (__s25param0 instanceof __dep_export_BasicMoatVE.BasicMoatVE) {
      this.initMoat();
    } else if (__s25param0 instanceof __dep_export_ATowerVE.ATowerVE) {
      this.initTowers();
    }
  };
  IsoViewObjectGroupDefence.prototype.updateWalls = function () {
    if (this.walls != null) {
      for (var __s30local0 = 0, __s30local1 = this.walls; __s30local0 < __s30local1.length; __s30local0++) {
        var __s30local2 = __s30local1[__s30local0];
        if (__s30local2) {
          __s30local2.updateDisp();
        }
      }
    }
  };
  IsoViewObjectGroupDefence.prototype.updateTowers = function () {
    if (this.towers != null) {
      for (var __s36local0 = 0, __s36local1 = this.towers; __s36local0 < __s36local1.length; __s36local0++) {
        var __s36local2 = __s36local1[__s36local0];
        if (__s36local2) {
          __s36local2.updateDisp();
        }
      }
    }
  };
  IsoViewObjectGroupDefence.prototype.removeObjectByVE = function (__s42param0) {
    if (this.gate && this.gate == __s42param0) {
      this._gate = this.destroyObject(this._gate);
    } else if (this.moat && this.moat == __s42param0) {
      this._moat = this.destroyObject(this._moat);
    } else {
      var __s42local0;
      for (var __s42local1 = 0, __s42local2 = this.towers; __s42local1 < __s42local2.length; __s42local1++) {
        if ((__s42local0 = __s42local2[__s42local1]) == __s42param0) {
          this.removeObjectFromList(__s42local0, this.towers);
          return;
        }
      }
      for (var __s42local3 = 0, __s42local4 = this.walls; __s42local3 < __s42local4.length; __s42local3++) {
        if ((__s42local0 = __s42local4[__s42local3]) == __s42param0) {
          this.removeObjectFromList(__s42local0, this.walls);
          return;
        }
      }
    }
  };
  IsoViewObjectGroupDefence.prototype.containsObject = function (__s53param0) {
    if (!__s53param0) {
      return false;
    }
    if (__s53param0 == this.moat || __s53param0 == this.gate) {
      return true;
    }
    for (var __s53local0 = 0, __s53local1 = this.towers; __s53local0 < __s53local1.length; __s53local0++) {
      if (__s53local1[__s53local0] == __s53param0) {
        return true;
      }
    }
    for (var __s53local2 = 0, __s53local3 = this.walls; __s53local2 < __s53local3.length; __s53local2++) {
      if (__s53local3[__s53local2] == __s53param0) {
        return true;
      }
    }
    return false;
  };
  IsoViewObjectGroupDefence.prototype.fillInCompleteList = function (__s63param0) {
    var __s63local0;
    if (this.gate) {
      __s63param0.push(this.gate);
    }
    if (this.moat) {
      __s63param0.push(this.moat);
    }
    for (var __s63local1 = 0, __s63local2 = this.walls; __s63local1 < __s63local2.length; __s63local1++) {
      __s63local0 = __s63local2[__s63local1];
      __s63param0.push(__s63local0);
    }
    for (var __s63local3 = 0, __s63local4 = this.towers; __s63local3 < __s63local4.length; __s63local3++) {
      __s63local0 = __s63local4[__s63local3];
      __s63param0.push(__s63local0);
    }
  };
  Object.defineProperty(IsoViewObjectGroupDefence.prototype, "gate", {
    get: function () {
      return this._gate;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjectGroupDefence.prototype, "moat", {
    get: function () {
      return this._moat;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjectGroupDefence.prototype, "towers", {
    get: function () {
      return this._towers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjectGroupDefence.prototype, "walls", {
    get: function () {
      return this._walls;
    },
    enumerable: true,
    configurable: true
  });
  return IsoViewObjectGroupDefence;
}(require("gge-module:export_AIsoViewObjectGroup").AIsoViewObjectGroup);
exports.IsoViewObjectGroupDefence = __s0local0;
