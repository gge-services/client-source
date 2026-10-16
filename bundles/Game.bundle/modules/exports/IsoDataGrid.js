Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_c549e43d1112dfff = require("gge-module:exact_c549e43d1112dfff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_IsoGridOriginEnum = require("gge-module:export_IsoGridOriginEnum");
var __dep_export_IsoDataGridOrigins = require("gge-module:export_IsoDataGridOrigins");
var __dep_export_IsoDataGridTile = require("gge-module:export_IsoDataGridTile");
var __s0local0 = createjs.Point;
var __s0local1 = createjs.Rectangle;
var __s0local2 = __dep_exact_c549e43d1112dfff.getLogger("createjs.ts Extensions");
var __s0local3 = function () {
  function IsoDataGrid(__s3param0) {
    this._pathfindingGraph = null;
    this._isPathfindingGraphValid = false;
    this._buildingTiles = new Map();
    this.workerPathfinderGraphNotified = false;
    this._isoData = __s3param0;
    this._origins = new __dep_export_IsoDataGridOrigins.IsoDataGridOrigins(this);
    this._map = this.createEmptyMap();
  }
  IsoDataGrid.prototype.createEmptyMap = function () {
    var __s5local0 = [];
    for (var __s5local1 = 0; __s5local1 < __dep_export_IsoConst.IsoConst.GRID_TOTAL_DIMENSION.y; ++__s5local1) {
      __s5local0[__s5local1] = [];
      for (var __s5local2 = 0; __s5local2 < __dep_export_IsoConst.IsoConst.GRID_TOTAL_DIMENSION.x; ++__s5local2) {
        __s5local0[__s5local1][__s5local2] = new __dep_export_IsoDataGridTile.IsoDataGridTile();
      }
    }
    return __s5local0;
  };
  IsoDataGrid.prototype.resetMap = function () {
    for (var __s11local0 = 0; __s11local0 < this.map.length; ++__s11local0) {
      for (var __s11local1 = 0; __s11local1 < this.map[__s11local0].length; ++__s11local1) {
        this.map[__s11local0][__s11local1].reset();
      }
    }
    this._buildingTiles.clear();
  };
  IsoDataGrid.prototype.updateCompleteMap = function () {
    this.resetMap();
    this.updateGrounds();
    for (var __s17local0 = 0, __s17local1 = this.isoData.objects.innerBuildings.list; __s17local0 < __s17local1.length; __s17local0++) {
      var __s17local2 = __s17local1[__s17local0];
      if (__s17local2 !== undefined) {
        this.addBuilding(__s17local2);
      }
    }
    this.updateDefence();
    this.updateOuterMap();
  };
  IsoDataGrid.prototype.updateGrounds = function () {
    for (var __s22local0 = 0, __s22local1 = this.isoData.objects.groundObjects.list; __s22local0 < __s22local1.length; __s22local0++) {
      var __s22local2 = __s22local1[__s22local0];
      if (__s22local2 !== undefined) {
        this.setTileInfoGround(__s22local2);
      }
    }
    this.origins.update();
  };
  IsoDataGrid.prototype.addBuilding = function (__s27param0) {
    this.setTileInfoObjectId(__s27param0);
    this.setTileInfoWalkable(__s27param0);
    this.setTileInfoSpawnPoint(__s27param0);
    this.invalidatePathfinderGraph();
  };
  IsoDataGrid.prototype.updateBuildingPos = function (__s29param0) {
    this.removeBuildingById(__s29param0.objectId);
    this.addBuilding(__s29param0);
    this.invalidatePathfinderGraph();
  };
  IsoDataGrid.prototype.removeBuildingById = function (__s31param0) {
    var __s31local0 = this._buildingTiles.get(__s31param0);
    if (__s31local0) {
      for (var __s31local1 = 0; __s31local1 < __s31local0.length; ++__s31local1) {
        var __s31local2 = __s31local0[__s31local1];
        if ((__s31local8 = this.getTile(__s31local2.x, __s31local2.y)) && __s31local8.objectId == __s31param0) {
          __s31local8.objectId = -1;
          __s31local8.isSpawnPoint = false;
          __s31local8.isWalkable = true;
        }
      }
      this._buildingTiles.delete(__s31param0);
    } else {
      var __s31local3 = __dep_export_IsoConst.IsoConst.GRID_START_POS;
      var __s31local4 = __dep_exact_f855840627e6e145.int(__dep_export_IsoConst.IsoConst.GRID_START_POS.x + __dep_export_IsoConst.IsoConst.GRID_TOTAL_DIMENSION.x);
      for (var __s31local5 = __dep_exact_f855840627e6e145.int(__dep_export_IsoConst.IsoConst.GRID_START_POS.y + __dep_export_IsoConst.IsoConst.GRID_TOTAL_DIMENSION.y), __s31local6 = __dep_exact_f855840627e6e145.int(__s31local3.y); __s31local6 < __s31local5; ++__s31local6) {
        for (var __s31local7 = __dep_exact_f855840627e6e145.int(__s31local3.x); __s31local7 < __s31local4; ++__s31local7) {
          var __s31local8;
          if ((__s31local8 = this.getTile(__s31local7, __s31local6)) && __s31local8.objectId == __s31param0) {
            __s31local8.objectId = -1;
            __s31local8.isSpawnPoint = false;
            __s31local8.isWalkable = true;
          }
        }
      }
    }
    this.invalidatePathfinderGraph();
  };
  IsoDataGrid.prototype.updateOuterMap = function () {
    var __s43local0;
    for (var __s43local1 = 0, __s43local2 = this.isoData.objects.eventBuildings.list; __s43local1 < __s43local2.length; __s43local1++) {
      __s43local0 = __s43local2[__s43local1];
      this.addBuilding(__s43local0);
    }
    for (var __s43local3 = 0, __s43local4 = this.isoData.objects.surroundings.list; __s43local3 < __s43local4.length; __s43local3++) {
      __s43local0 = __s43local4[__s43local3];
      this.addBuilding(__s43local0);
    }
    for (var __s43local5 = 0, __s43local6 = this.isoData.objects.fixedPositions.list; __s43local5 < __s43local6.length; __s43local5++) {
      __s43local0 = __s43local6[__s43local5];
      this.addBuilding(__s43local0);
    }
    this.invalidatePathfinderGraph();
  };
  IsoDataGrid.prototype.updateDefence = function () {
    var __s51local0 = this.isoData.objects.defences;
    var __s51local1 = 2;
    if (__s51local0.moat) {
      __s51local1 += 3;
    }
    __s51local1 = __s51local1 * 2 + 1;
    var __s51local2;
    var __s51local3;
    var __s51local4;
    var __s51local5 = this.isoData.objects.groundObjects.list;
    var __s51local6 = __dep_exact_f855840627e6e145.int(__s51local1 / 2);
    for (var __s51local7 = 0, __s51local8 = __s51local5; __s51local7 < __s51local8.length; __s51local7++) {
      var __s51local9 = __s51local8[__s51local7];
      if (__s51local9) {
        var __s51local10 = __s51local9.x - __s51local6;
        var __s51local11 = __s51local9.x2 + __s51local6;
        var __s51local12 = __s51local9.y - __s51local6;
        var __s51local13 = __s51local9.y2 + __s51local6;
        var __s51local14 = __s51local9.x + __s51local6 + 1;
        var __s51local15 = __s51local9.x2 - __s51local6 - 1;
        var __s51local16 = __s51local9.y + __s51local6 + 1;
        var __s51local17 = __s51local9.y2 - __s51local6 - 1;
        var __s51local18 = __s51local14 <= __s51local15 && __s51local16 <= __s51local17;
        for (__s51local3 = __s51local12; __s51local3 <= __s51local13; ++__s51local3) {
          if (!(__s51local3 < 0) && !(__s51local3 >= this._map.length) && this._map[__s51local3]) {
            var __s51local19 = __s51local18 && __s51local3 >= __s51local16 && __s51local3 <= __s51local17;
            for (__s51local2 = __s51local10; __s51local2 <= __s51local11; ++__s51local2) {
              if (__s51local19 && __s51local2 >= __s51local14 && __s51local2 <= __s51local15) {
                __s51local2 = __s51local15;
              } else if (!(__s51local2 < 0) && !(__s51local2 >= this._map[__s51local3].length) && !!(__s51local4 = this._map[__s51local3][__s51local2]) && !__s51local4.hasGround && !__s51local4.isSpawnPoint) {
                __s51local4.isWalkable = false;
              }
            }
          }
        }
      }
    }
    this.setTileInfoSpawnPoint(__s51local0.gate);
    if (__s51local0.moat && __s51local0.gate) {
      for (var __s51local20 = 0; __s51local20 < 3; ++__s51local20) {
        var __s51local21;
        var __s51local22;
        var __s51local23;
        if (__s51local0.moat.rotation == 0) {
          __s51local22 = __s51local0.gate.y + 1;
          __s51local23 = __s51local0.gate.x + 2 + __s51local20;
        } else {
          __s51local22 = __s51local0.gate.y + 2 + __s51local20;
          __s51local23 = __s51local0.gate.x + 1;
        }
        if (__s51local22 >= 0 && __s51local22 < this._map.length && this._map[__s51local22] && __s51local23 >= 0 && __s51local23 < this._map[__s51local22].length && (__s51local21 = this._map[__s51local22][__s51local23])) {
          __s51local21.isWalkable = true;
        }
      }
    }
    this.invalidatePathfinderGraph();
  };
  IsoDataGrid.prototype.setTileInfoGround = function (__s70param0) {
    if (__s70param0) {
      var __s70local0 = __dep_exact_f855840627e6e145.int(__s70param0.x + __s70param0.walkmapOffset.x);
      var __s70local1 = __dep_exact_f855840627e6e145.int(__s70param0.y + __s70param0.walkmapOffset.y);
      var __s70local2 = __dep_exact_f855840627e6e145.int(__s70param0.x2 + __s70param0.walkmapOffset.x);
      for (var __s70local3 = __dep_exact_f855840627e6e145.int(__s70param0.y2 + __s70param0.walkmapOffset.y), __s70local4 = __s70local1; __s70local4 <= __s70local3; ++__s70local4) {
        for (var __s70local5 = __s70local0; __s70local5 <= __s70local2; ++__s70local5) {
          var __s70local6 = this.getTile(__s70local5, __s70local4);
          if (__s70local6) {
            __s70local6.hasGround = true;
          }
        }
      }
    }
  };
  IsoDataGrid.prototype.setTileInfoObjectId = function (__s78param0) {
    if (__s78param0) {
      var __s78local0 = __dep_exact_f855840627e6e145.int(__s78param0.x + __s78param0.walkmapOffset.x);
      var __s78local1 = __dep_exact_f855840627e6e145.int(__s78param0.y + __s78param0.walkmapOffset.y);
      var __s78local2 = __dep_exact_f855840627e6e145.int(__s78param0.x2 + __s78param0.walkmapOffset.x);
      for (var __s78local3 = __dep_exact_f855840627e6e145.int(__s78param0.y2 + __s78param0.walkmapOffset.y), __s78local4 = [], __s78local5 = __s78local1; __s78local5 <= __s78local3; ++__s78local5) {
        for (var __s78local6 = __s78local0; __s78local6 <= __s78local2; ++__s78local6) {
          var __s78local7 = this.getTile(__s78local6, __s78local5);
          if (__s78local7) {
            __s78local7.objectId = __dep_exact_f855840627e6e145.int(__s78param0.objectId);
            __s78local4.push(new __s0local0(__s78local6, __s78local5));
          }
        }
      }
      this._buildingTiles.set(__s78param0.objectId, __s78local4);
    }
  };
  IsoDataGrid.prototype.setTileInfoWalkable = function (__s86param0) {
    if (__s86param0) {
      for (var __s86local0 = __s86param0.walkmap, __s86local1 = 0; __s86local1 < __s86local0.length; ++__s86local1) {
        var __s86local2 = __dep_exact_f855840627e6e145.int(__s86param0.y + __s86param0.walkmapOffset.y + __s86local1);
        for (var __s86local3 = 0; __s86local3 < __s86local0[__s86local1].length; ++__s86local3) {
          var __s86local4 = __dep_exact_f855840627e6e145.int(__s86param0.x + __s86param0.walkmapOffset.x + __s86local3);
          var __s86local5 = this.getTile(__s86local4, __s86local2);
          if (__s86local5) {
            __s86local5.isWalkable = __s86local0[__s86local1][__s86local3];
          }
        }
      }
    }
  };
  IsoDataGrid.prototype.setTileInfoSpawnPoint = function (__s94param0) {
    if (__s94param0) {
      for (var __s94local0 = 0, __s94local1 = __s94param0.spawnPoints; __s94local0 < __s94local1.length; __s94local0++) {
        var __s94local2 = __s94local1[__s94local0];
        if (__s94local2 !== undefined) {
          var __s94local3 = this.getTile(__s94param0.x + __s94param0.walkmapOffset.x + __s94local2.x, __s94param0.y + __s94param0.walkmapOffset.y + __s94local2.y);
          if (__s94local3) {
            __s94local3.isSpawnPoint = true;
            __s94local3.isWalkable = true;
          }
        }
      }
    }
  };
  IsoDataGrid.prototype.getTile = function (__s101param0, __s101param1) {
    if (this.map && __s101param1 >= 0 && __s101param1 < this.map.length && __s101param0 >= 0 && __s101param0 < this.map[0].length) {
      return this.map[__s101param1][__s101param0];
    } else {
      return null;
    }
  };
  IsoDataGrid.prototype.isPointOnBuildingGround = function (__s105param0) {
    var __s105local0 = this.getTile(__s105param0.x, __s105param0.y);
    return !!__s105local0 && __s105local0.hasGround;
  };
  IsoDataGrid.prototype.isDimensionOnBuildingGround = function (__s107param0, __s107param1) {
    var __s107local0 = __dep_exact_f855840627e6e145.int(__s107param0.x + __s107param1.x - 1);
    for (var __s107local1 = __dep_exact_f855840627e6e145.int(__s107param0.y + __s107param1.y - 1), __s107local2 = __dep_exact_f855840627e6e145.int(__s107param0.y); __s107local2 <= __s107local1; ++__s107local2) {
      for (var __s107local3 = __dep_exact_f855840627e6e145.int(__s107param0.x); __s107local3 <= __s107local0; ++__s107local3) {
        var __s107local4 = this.getTile(__s107local3, __s107local2);
        if (!__s107local4 || !__s107local4.hasGround) {
          return false;
        }
      }
    }
    return true;
  };
  IsoDataGrid.prototype.isDimensionFreeForBuild = function (__s114param0, __s114param1, __s114param2 = -1) {
    var __s114local0 = __dep_exact_f855840627e6e145.int(__s114param0.x + __s114param1.x - 1);
    for (var __s114local1 = __dep_exact_f855840627e6e145.int(__s114param0.y + __s114param1.y - 1), __s114local2 = __dep_exact_f855840627e6e145.int(__s114param0.y); __s114local2 <= __s114local1; ++__s114local2) {
      for (var __s114local3 = __dep_exact_f855840627e6e145.int(__s114param0.x); __s114local3 <= __s114local0; ++__s114local3) {
        var __s114local4 = this.getTile(__s114local3, __s114local2);
        if (!__s114local4 || !__s114local4.hasGround || __s114local4.objectId != __s114param2 && __s114local4.objectId >= 0) {
          return false;
        }
      }
    }
    return true;
  };
  IsoDataGrid.prototype.isDimensionInGroundBounds = function (__s121param0, __s121param1) {
    var __s121local0 = this.origins.getOriginPos(__dep_export_IsoGridOriginEnum.IsoGridOriginEnum.TOP_CORNER);
    var __s121local1 = this.origins.getOriginPos(__dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER);
    return __s121param0.x >= __s121local0.x && __s121param0.y >= __s121local0.y && __s121param0.x + __s121param1.x - 1 <= __s121local1.x && __s121param0.y + __s121param1.y - 1 <= __s121local1.y;
  };
  IsoDataGrid.prototype.getValidDragPosForBuilding = function (__s123param0, __s123param1) {
    var __s123local0 = new __s0local0(__s123param0.x, __s123param0.y);
    __s123local0.x = __s123local0.x - __s123local0.x % __dep_export_IsoConst.IsoConst.GRID_PATTERN_SIZE.x;
    __s123local0.y = __s123local0.y - __s123local0.y % __dep_export_IsoConst.IsoConst.GRID_PATTERN_SIZE.y;
    var __s123local1 = this.origins.getOriginPos(__dep_export_IsoGridOriginEnum.IsoGridOriginEnum.TOP_CORNER);
    var __s123local2 = this.origins.getOriginPos(__dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER);
    if (__s123local0.x < __s123local1.x) {
      __s123local0.x = __s123local1.x;
    }
    if (__s123local0.y < __s123local1.y) {
      __s123local0.y = __s123local1.y;
    }
    if (__s123local0.x + __s123param1.x > __s123local2.x) {
      __s123local0.x = __s123local2.x - __s123param1.x + 1;
    }
    if (__s123local0.y + __s123param1.y > __s123local2.y) {
      __s123local0.y = __s123local2.y - __s123param1.y + 1;
    }
    if (!this.isDimensionOnBuildingGround(__s123local0, __s123param1)) {
      __s123local0 = this.getNextPossiblePosOnGround(__s123local0, __s123param1);
    }
    return __s123local0;
  };
  IsoDataGrid.prototype.getNextPossiblePosOnGround = function (__s130param0, __s130param1) {
    var __s130local0 = [];
    __s130local0.push(this.getFirstPossiblePosOnGroundInDir(__s130param0, __s130param1, new __s0local0(-1, 0)));
    __s130local0.push(this.getFirstPossiblePosOnGroundInDir(__s130param0, __s130param1, new __s0local0(0, -1)));
    __s130local0.push(this.getFirstPossiblePosOnGroundInDir(__s130param0, __s130param1, new __s0local0(1, 0)));
    __s130local0.push(this.getFirstPossiblePosOnGroundInDir(__s130param0, __s130param1, new __s0local0(0, 1)));
    __s130local0.push(this.getFirstPossiblePosOnGroundInDir(__s130param0, __s130param1, new __s0local0(-1, -1)));
    __s130local0.push(this.getFirstPossiblePosOnGroundInDir(__s130param0, __s130param1, new __s0local0(-1, 1)));
    __s130local0.push(this.getFirstPossiblePosOnGroundInDir(__s130param0, __s130param1, new __s0local0(1, -1)));
    __s130local0.push(this.getFirstPossiblePosOnGroundInDir(__s130param0, __s130param1, new __s0local0(1, 1)));
    var __s130local1 = -1;
    var __s130local2 = __dep_exact_f855840627e6e145.int(Number.MAX_VALUE);
    for (var __s130local3 = 0; __s130local3 < __s130local0.length; ++__s130local3) {
      var __s130local4 = __s130local0[__s130local3];
      if (__s130local4.i >= 0 && __s130local4.i < __s130local2) {
        __s130local1 = __s130local3;
        __s130local2 = __dep_exact_f855840627e6e145.int(__s130local4.i);
      }
    }
    if (__s130local1 >= 0) {
      return __s130local0[__s130local1].pos;
    } else {
      return __s130param0;
    }
  };
  IsoDataGrid.prototype.getFirstPossiblePosOnGroundInDir = function (__s137param0, __s137param1, __s137param2) {
    var __s137local0 = new __s0local0(__s137param0.x, __s137param0.y);
    var __s137local1 = 0;
    for (__s137local1 = 0; !this.isDimensionOnBuildingGround(__s137local0, __s137param1); ++__s137local1) {
      if (!this.isDimensionInGroundBounds(__s137local0.add(__s137param2), __s137param1)) {
        __s137local1 = -1;
        break;
      }
      __s137local0.x += __s137param2.x;
      __s137local0.y += __s137param2.y;
    }
    return {
      pos: __s137local0,
      i: __s137local1
    };
  };
  IsoDataGrid.prototype.isWalkable = function (__s142param0, __s142param1) {
    var __s142local0 = this.getTile(__s142param0, __s142param1);
    return !!__s142local0 && (__s142local0.isWalkable || __s142local0.isSpawnPoint);
  };
  IsoDataGrid.prototype.getWidth = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_IsoConst.IsoConst.GRID_TOTAL_DIMENSION.x);
  };
  IsoDataGrid.prototype.getHeight = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_IsoConst.IsoConst.GRID_TOTAL_DIMENSION.y);
  };
  IsoDataGrid.prototype.invalidatePathfinderGraph = function () {
    this._isPathfindingGraphValid = false;
    this.workerPathfinderGraphNotified = false;
  };
  IsoDataGrid.prototype.getPathfindingGraph = function () {
    if (!this._isPathfindingGraphValid) {
      this._pathfindingGraph = __dep_exact_9e901e8e2483a22f.PathfindingGraph.generateFromMap(this);
      this._isPathfindingGraphValid = true;
    }
    return this._pathfindingGraph;
  };
  IsoDataGrid.prototype.traceInnerObjectIdMap = function () {
    this.traceWalkmap(new __s0local1(__dep_export_IsoConst.IsoConst.GRID_START_POS.x, __dep_export_IsoConst.IsoConst.GRID_START_POS.y, __dep_export_IsoConst.IsoConst.GRID_INNER_DIMENSION.x, __dep_export_IsoConst.IsoConst.GRID_INNER_DIMENSION.y));
  };
  IsoDataGrid.prototype.traceObjectIdMap = function (__s155param0) {
    __s0local2.debug("--------------IsoWorld-Map-ObjectIds-----------------");
    var __s155local0 = __dep_exact_f855840627e6e145.int(__s155param0.x + __s155param0.width);
    for (var __s155local1 = __dep_exact_f855840627e6e145.int(__s155param0.y + __s155param0.height), __s155local2 = __dep_exact_f855840627e6e145.int(__s155param0.y); __s155local2 < __s155local1; ++__s155local2) {
      var __s155local3 = "";
      for (var __s155local4 = __dep_exact_f855840627e6e145.int(__s155param0.x); __s155local4 < __s155local0; ++__s155local4) {
        var __s155local5 = __dep_exact_f855840627e6e145.int(this._map[__s155local2][__s155local4].objectId);
        if (__s155local5 < 0) {
          __s155local3 += " ";
        }
        if (__s155local5 >= 0 && __s155local5 < 10) {
          __s155local3 += "  ";
        }
        if (__s155local5 >= 10 && __s155local5 < 100) {
          __s155local3 += " ";
        }
        __s155local3 += String(__s155local5) + " ";
      }
      __s0local2.debug(__s155local3);
    }
  };
  IsoDataGrid.prototype.traceInnerWalkmap = function () {
    this.traceWalkmap(new __s0local1(__dep_export_IsoConst.IsoConst.GRID_START_POS.x, __dep_export_IsoConst.IsoConst.GRID_START_POS.y, __dep_export_IsoConst.IsoConst.GRID_INNER_DIMENSION.x, __dep_export_IsoConst.IsoConst.GRID_INNER_DIMENSION.y));
  };
  IsoDataGrid.prototype.traceInnerAndOuterWalkmap = function () {
    this.traceWalkmap(new __s0local1(__dep_export_IsoConst.IsoConst.GRID_START_POS.x - 20, __dep_export_IsoConst.IsoConst.GRID_START_POS.y - 20, __dep_export_IsoConst.IsoConst.GRID_INNER_DIMENSION.x + 40 + 10, __dep_export_IsoConst.IsoConst.GRID_INNER_DIMENSION.y + 40 + 10));
  };
  IsoDataGrid.prototype.traceWalkmap = function (__s168param0) {
    __s0local2.debug("--------------IsoWorld-Map-Walkmap-----------------");
    var __s168local0 = __dep_exact_f855840627e6e145.int(__s168param0.x + __s168param0.width);
    for (var __s168local1 = __dep_exact_f855840627e6e145.int(__s168param0.y + __s168param0.height), __s168local2 = __dep_exact_f855840627e6e145.int(__s168param0.y); __s168local2 < __s168local1; ++__s168local2) {
      var __s168local3 = "";
      for (var __s168local4 = __dep_exact_f855840627e6e145.int(__s168param0.x); __s168local4 < __s168local0; ++__s168local4) {
        var __s168local5 = this._map[__s168local2][__s168local4];
        if (__s168local5.isSpawnPoint) {
          __s168local3 += "╬";
        } else if (__s168local5.hasGround) {
          if (__s168local5.objectId >= 0) {
            if (__s168local5.isWalkable) {
              __s168local3 += "▒";
            } else {
              __s168local3 += "█";
            }
          } else {
            __s168local3 += "░";
          }
        } else if (__s168local5.isWalkable) {
          __s168local3 += "─";
        } else {
          __s168local3 += "█";
        }
        __s168local3 += " ";
      }
      __s0local2.debug(__s168local3);
    }
  };
  Object.defineProperty(IsoDataGrid.prototype, "map", {
    get: function () {
      return this._map;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataGrid.prototype, "origins", {
    get: function () {
      return this._origins;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataGrid.prototype, "isoData", {
    get: function () {
      return this._isoData;
    },
    enumerable: true,
    configurable: true
  });
  return IsoDataGrid;
}();
exports.IsoDataGrid = __s0local3;
var __dep_export_IsoConst = require("gge-module:export_IsoConst");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local3, "IPathfinderSearchableMap");
