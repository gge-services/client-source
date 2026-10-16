Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoDefencePositions = require("gge-module:export_IsoDefencePositions");
var __s0local0 = function (__s1param0) {
  function IsoDataObjectGroupDefence() {
    var __s3local0 = this;
    __s3local0._walls = [];
    __s3local0._towers = [];
    __s3local0._emptyTowers = [];
    __s3local0._defencePositions = new __dep_export_IsoDefencePositions.IsoDefencePositions();
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoDataObjectGroupDefence, __s1param0);
  IsoDataObjectGroupDefence.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this._wallInfo = this.destroyObject(this._wallInfo);
    this._moat = this.destroyObject(this._moat);
    this._gate = this.destroyObject(this._gate);
    this._walls = __dep_export_IsoHelper.IsoHelper.data.destroyAndCreateNewVOList(this._walls);
    this._towers = __dep_export_IsoHelper.IsoHelper.data.destroyAndCreateNewVOList(this._towers);
    this._emptyTowers = __dep_export_IsoHelper.IsoHelper.data.destroyAndCreateNewVOList(this._emptyTowers);
  };
  IsoDataObjectGroupDefence.prototype.init = function (__s7param0) {
    __s1param0.prototype.init.call(this, __s7param0);
    this._defenceGenerator = new __dep_export_IsoGeneratorDefence.IsoGeneratorDefence(__s7param0);
  };
  IsoDataObjectGroupDefence.prototype.initObjects = function () {
    this._emptyTowers.length = 0;
    this._defencePositions = this.defenceGenerator.generate();
    this.initTowers();
    this.initGate();
    this.initWalls();
    this.initMoat();
  };
  IsoDataObjectGroupDefence.prototype.initTowers = function () {
    var __s11local0;
    var __s11local1;
    var __s11local2 = 0;
    for (var __s11local3 = 0, __s11local4 = this.defencePositions.necessaryTowers; __s11local3 < __s11local4.length; __s11local3++) {
      __s11local0 = __s11local4[__s11local3];
      __s11local1 = this.towers[__s11local2];
      this.updateVoByDefencePosition(__s11local1, __s11local0);
      __s11local2++;
    }
    var __s11local5 = this.getEmptyTowerClass();
    for (var __s11local6 = 0, __s11local7 = this.defencePositions.emptyTowers; __s11local6 < __s11local7.length; __s11local6++) {
      __s11local0 = __s11local7[__s11local6];
      __s11local1 = new __s11local5();
      this.emptyTowers.push(__s11local1);
      this.updateVoByDefencePosition(__s11local1, __s11local0);
    }
  };
  IsoDataObjectGroupDefence.prototype.initGate = function () {
    this.updateVoByDefencePosition(this.gate, this.defencePositions.gate);
  };
  IsoDataObjectGroupDefence.prototype.initWalls = function () {
    this._walls.length = 0;
    if (this.wallInfo) {
      var __s19local0;
      var __s19local1 = this.getWallClass();
      for (var __s19local2 = 0, __s19local3 = this.defencePositions.walls; __s19local2 < __s19local3.length; __s19local2++) {
        var __s19local4 = __s19local3[__s19local2];
        if (__s19local4 !== undefined) {
          (__s19local0 = new __s19local1()).wodId = this.wallInfo.wodId;
          __s19local0.objectId = this.wallInfo.objectId;
          this.walls.push(__s19local0);
          this.updateVoByDefencePosition(__s19local0, __s19local4);
        }
      }
    }
  };
  IsoDataObjectGroupDefence.prototype.initMoat = function () {
    if (this.moat) {
      this.moat.init(this.isoData);
      this.moat.positions = this.defencePositions.moat;
    }
  };
  IsoDataObjectGroupDefence.prototype.updateVoByDefencePosition = function (__s28param0, __s28param1) {
    if (__s28param0 && __s28param1 && __s28param1.pos) {
      __s28param0.init(this.isoData);
      __s28param0.x = __s28param1.pos.x;
      __s28param0.y = __s28param1.pos.y;
      __s28param0.rotation = __s28param1.rot;
      __s28param0.updateData();
    }
  };
  IsoDataObjectGroupDefence.prototype.addObject = function (__s31param0) {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s31param0, "BasicMoatVO")) {
      this._moat = __s31param0;
      this.initMoat();
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s31param0, "BasicGateVO")) {
      this._gate = __s31param0;
      this.initGate();
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s31param0, "ATowerVO")) {
      this._towers.push(__s31param0);
    }
  };
  IsoDataObjectGroupDefence.prototype.updateObjectByServer = function (__s36param0, __s36param1) {
    if (this.wallInfo && this.wallInfo.objectId == __s36param0) {
      __dep_export_IsoHelper.IsoHelper.data.updateIsoObjectByServer(this.wallInfo, __s36param1);
      this.initWalls();
      return this.wallInfo;
    }
    if (this.moat && this.moat.objectId == __s36param0) {
      var __s36local0 = this.moat.wodId;
      var __s36local1 = this.moat.mightValue;
      var __s36local2 = this.moat.previousMightValue;
      var __s36local3 = this.isoData.objects.completeTempObjectList.indexOf(this._moat);
      if (__s36local3 >= 0) {
        this.isoData.objects.completeTempObjectList.splice(__s36local3, 1);
      }
      this._moat = __dep_export_IsoHelper.IsoHelper.data.createIsoObjectVOByServer(__s36param1);
      this.isoData.objects.completeTempObjectList.push(this._moat);
      if (this._moat) {
        this._moat.previousMightValue = this._moat.wodId != __s36local0 ? __s36local1 : __s36local2;
      }
      this.initMoat();
      return this.moat;
    }
    if (this.gate && this.gate.objectId == __s36param0) {
      __dep_export_IsoHelper.IsoHelper.data.updateIsoObjectByServer(this.gate, __s36param1);
      this.initGate();
      return this.gate;
    }
    for (var __s36local4 = 0; __s36local4 < this.towers.length; ++__s36local4) {
      var __s36local5 = this.towers[__s36local4];
      if (__s36local5.objectId == __s36param0) {
        __dep_export_IsoHelper.IsoHelper.data.updateIsoObjectByServer(__s36local5, __s36param1);
        this.updateVoByDefencePosition(__s36local5, this.defencePositions.necessaryTowers[__s36local4]);
        return __s36local5;
      }
    }
    return null;
  };
  IsoDataObjectGroupDefence.prototype.parseGCA = function (__s46param0) {
    this.parseBulwarks(__s46param0.D);
    this.parseGate(__s46param0.G);
    this.parseTowers(__s46param0.T);
  };
  IsoDataObjectGroupDefence.prototype.parseBulwarks = function (__s48param0) {
    var __s48local0;
    var __s48local1 = __s48param0;
    if (__s48local1 && (this._wallInfo = null, this._moat = null, __s48local1 != null)) {
      for (var __s48local2 = 0, __s48local3 = __s48local1; __s48local2 < __s48local3.length; __s48local2++) {
        var __s48local4 = __s48local3[__s48local2];
        if (__s48local4 !== undefined) {
          __s48local0 = __dep_export_IsoHelper.IsoHelper.data.createIsoObjectVOByServer(__s48local4, this.isoData);
          if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s48local0, "CastlewallDefenceVO")) {
            this._wallInfo = __s48local0;
          } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s48local0, "BasicMoatVO")) {
            this._moat = __s48local0;
          }
        }
      }
    }
  };
  IsoDataObjectGroupDefence.prototype.parseGate = function (__s56param0) {
    var __s56local0 = __s56param0;
    if (__s56local0 && (this._gate = null, __s56local0 != null)) {
      for (var __s56local1 = 0, __s56local2 = __s56local0; __s56local1 < __s56local2.length; __s56local1++) {
        var __s56local3 = __s56local2[__s56local1];
        if (__s56local3 !== undefined) {
          this._gate = __dep_export_IsoHelper.IsoHelper.data.createIsoObjectVOByServer(__s56local3, this.isoData);
        }
      }
    }
  };
  IsoDataObjectGroupDefence.prototype.parseTowers = function (__s62param0) {
    var __s62local0 = __s62param0;
    if (__s62local0) {
      var __s62local1;
      this._towers.length = 0;
      if (__s62local0 != null) {
        for (var __s62local2 = 0, __s62local3 = __s62local0; __s62local2 < __s62local3.length; __s62local2++) {
          var __s62local4 = __s62local3[__s62local2];
          if (__s62local4 !== undefined) {
            __s62local1 = __dep_export_IsoHelper.IsoHelper.data.createIsoObjectVOByServer(__s62local4, this.isoData);
            this.towers.push(__s62local1);
          }
        }
      }
      this.towers.sort(__dep_export_ClientConstSort.ClientConstSort.sortByObjectId);
    }
  };
  IsoDataObjectGroupDefence.prototype.containsObjectById = function (__s69param0) {
    if (this.wallInfo && this.wallInfo.objectId == __s69param0 || this.gate && this.gate.objectId == __s69param0 || this.moat && this.moat.objectId == __s69param0) {
      return true;
    }
    if (this.towers != null) {
      for (var __s69local0 = 0, __s69local1 = this.towers; __s69local0 < __s69local1.length; __s69local0++) {
        var __s69local2 = __s69local1[__s69local0];
        if (__s69local2 !== undefined && __s69local2.objectId == __s69param0) {
          return true;
        }
      }
    }
    return false;
  };
  IsoDataObjectGroupDefence.prototype.containsObject = function (__s76param0) {
    if (!__s76param0) {
      return false;
    }
    if (this.wallInfo == __s76param0 || this.gate == __s76param0 || this.moat == __s76param0) {
      return true;
    }
    if (this.towers != null) {
      for (var __s76local0 = 0, __s76local1 = this.towers; __s76local0 < __s76local1.length; __s76local0++) {
        var __s76local2 = __s76local1[__s76local0];
        if (__s76local2 !== undefined && __s76local2 == __s76param0) {
          return true;
        }
      }
    }
    return false;
  };
  IsoDataObjectGroupDefence.prototype.fillInCompleteList = function (__s84param0) {
    var __s84local0;
    if (this.gate) {
      __s84param0.push(this.gate);
    }
    if (this.moat) {
      __s84param0.push(this.moat);
    }
    if (this.wallInfo) {
      __s84param0.push(this.wallInfo);
    }
    for (var __s84local1 = 0, __s84local2 = this.towers; __s84local1 < __s84local2.length; __s84local1++) {
      __s84local0 = __s84local2[__s84local1];
      __s84param0.push(__s84local0);
    }
    for (var __s84local3 = 0, __s84local4 = this.emptyTowers; __s84local3 < __s84local4.length; __s84local3++) {
      __s84local0 = __s84local4[__s84local3];
      __s84param0.push(__s84local0);
    }
  };
  IsoDataObjectGroupDefence.prototype.getEmptyTowerClass = function () {
    if (this.isoData.areaData.isFactionCamp) {
      return __dep_export_FactionEmptyTowerVO.FactionEmptyTowerVO;
    } else if (this.isoData.areaData.isSeasonCamp) {
      return __dep_export_LookoutTowerVO.LookoutTowerVO;
    } else {
      return __dep_export_EmptyTowerVO.EmptyTowerVO;
    }
  };
  IsoDataObjectGroupDefence.prototype.getWallClass = function () {
    if (this.isoData.areaData.isFactionCamp) {
      return __dep_export_FactionPalisadeDefenceVO.FactionPalisadeDefenceVO;
    } else if (this.isoData.areaData.isSeasonCamp) {
      return __dep_export_PalisadeDefenceVO.PalisadeDefenceVO;
    } else {
      return __dep_export_CastlewallDefenceVO.CastlewallDefenceVO;
    }
  };
  Object.defineProperty(IsoDataObjectGroupDefence.prototype, "currentWallLevel", {
    get: function () {
      if (this.wallInfo) {
        return this.wallInfo.level;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjectGroupDefence.prototype, "wallInfo", {
    get: function () {
      return this._wallInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjectGroupDefence.prototype, "moat", {
    get: function () {
      return this._moat;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjectGroupDefence.prototype, "towers", {
    get: function () {
      return this._towers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjectGroupDefence.prototype, "gate", {
    get: function () {
      return this._gate;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjectGroupDefence.prototype, "emptyTowers", {
    get: function () {
      return this._emptyTowers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjectGroupDefence.prototype, "defencePositions", {
    get: function () {
      return this._defencePositions;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjectGroupDefence.prototype, "walls", {
    get: function () {
      return this._walls;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjectGroupDefence.prototype, "defenceGenerator", {
    get: function () {
      return this._defenceGenerator;
    },
    enumerable: true,
    configurable: true
  });
  return IsoDataObjectGroupDefence;
}(require("gge-module:export_AIsoDataObjectGroup").AIsoDataObjectGroup);
exports.IsoDataObjectGroupDefence = __s0local0;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_IsoGeneratorDefence = require("gge-module:export_IsoGeneratorDefence");
var __dep_export_CastlewallDefenceVO = require("gge-module:export_CastlewallDefenceVO");
var __dep_export_FactionPalisadeDefenceVO = require("gge-module:export_FactionPalisadeDefenceVO");
var __dep_export_PalisadeDefenceVO = require("gge-module:export_PalisadeDefenceVO");
var __dep_export_EmptyTowerVO = require("gge-module:export_EmptyTowerVO");
var __dep_export_FactionEmptyTowerVO = require("gge-module:export_FactionEmptyTowerVO");
var __dep_export_LookoutTowerVO = require("gge-module:export_LookoutTowerVO");
