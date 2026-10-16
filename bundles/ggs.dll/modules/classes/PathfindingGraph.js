Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function PathfindingGraph(__s3param0 = false) {
    this._nodeX = [];
    this._nodeY = [];
    this._nodeNeighbors = [];
    this._useVariedCosts = __s3param0;
    if (this._useVariedCosts) {
      this._nodeConnectionCosts = [];
    }
  }
  Object.defineProperty(PathfindingGraph.prototype, "nodeCount", {
    get: function () {
      return this._nodeX.length;
    },
    enumerable: true,
    configurable: true
  });
  PathfindingGraph.prototype.addNode = function (__s8param0, __s8param1) {
    this._nodeX.push(__s8param0);
    this._nodeY.push(__s8param1);
    this._nodeNeighbors.push([]);
    if (this._useVariedCosts) {
      this._nodeConnectionCosts.push([]);
    }
    return this._nodeX.length - 1;
  };
  PathfindingGraph.prototype.addNeighbor = function (__s11param0, __s11param1, __s11param2 = PathfindingGraph.TRAVERSE_COST_DIAGONAL) {
    this._nodeNeighbors[__s11param0].push(__s11param1);
    if (this._useVariedCosts) {
      this._nodeConnectionCosts[__s11param0].push(__s11param2);
    }
  };
  PathfindingGraph.prototype.getNodeX = function (__s14param0) {
    return this._nodeX[__s14param0];
  };
  PathfindingGraph.prototype.getNodeY = function (__s16param0) {
    return this._nodeY[__s16param0];
  };
  PathfindingGraph.prototype.getNodeNeighbors = function (__s18param0) {
    return this._nodeNeighbors[__s18param0];
  };
  PathfindingGraph.prototype.getConnectionCosts = function (__s20param0) {
    if (this._useVariedCosts) {
      return this._nodeConnectionCosts[__s20param0];
    } else {
      return null;
    }
  };
  PathfindingGraph.prototype.getNodeIndexByPosition = function (__s24param0, __s24param1) {
    for (var __s24local0 = 0; __s24local0 < this.nodeCount; __s24local0++) {
      if (this._nodeX[__s24local0] == __s24param0 && this._nodeY[__s24local0] == __s24param1) {
        return __s24local0;
      }
    }
    return -1;
  };
  PathfindingGraph.prototype.hasNodeAtPosition = function (__s29param0, __s29param1) {
    for (var __s29local0 = 0; __s29local0 < this.nodeCount; __s29local0++) {
      if (this._nodeX[__s29local0] == __s29param0 && this._nodeY[__s29local0] == __s29param1) {
        return true;
      }
    }
    return false;
  };
  Object.defineProperty(PathfindingGraph.prototype, "traverseCostStandard", {
    get: function () {
      return PathfindingGraph.TRAVERSE_COST_STANDARD;
    },
    enumerable: true,
    configurable: true
  });
  PathfindingGraph.generateFromMap = function (__s36param0, __s36param1 = false) {
    var __s36local0;
    for (var __s36local1 = __s36param0.getWidth(), __s36local2 = __s36param0.getHeight(), __s36local3 = new PathfindingGraph(__s36param1), __s36local4 = new Array(__s36local1), __s36local5 = 0; __s36local5 < __s36local1; __s36local5++) {
      __s36local4[__s36local5] = new Array(__s36local2);
      for (var __s36local6 = 0; __s36local6 < __s36local2; __s36local6++) {
        if (__s36param0.isWalkable(__s36local5, __s36local6)) {
          __s36local4[__s36local5][__s36local6] = __s36local3.addNode(__s36local5, __s36local6);
        } else {
          __s36local4[__s36local5][__s36local6] = -1;
        }
      }
    }
    for (__s36local5 = 0; __s36local5 < __s36local1; __s36local5++) {
      for (__s36local6 = 0; __s36local6 < __s36local2; __s36local6++) {
        if ((__s36local0 = __s36local4[__s36local5][__s36local6]) >= 0) {
          if (__s36local5 > 0 && __s36local4[__s36local5 - 1][__s36local6] >= 0) {
            __s36local3.addNeighbor(__s36local0, __s36local4[__s36local5 - 1][__s36local6], PathfindingGraph.TRAVERSE_COST_STANDARD);
          }
          if (__s36local5 < __s36local1 - 1 && __s36local4[__s36local5 + 1][__s36local6] >= 0) {
            __s36local3.addNeighbor(__s36local0, __s36local4[__s36local5 + 1][__s36local6], PathfindingGraph.TRAVERSE_COST_STANDARD);
          }
          if (__s36local6 > 0 && __s36local4[__s36local5][__s36local6 - 1] >= 0) {
            __s36local3.addNeighbor(__s36local0, __s36local4[__s36local5][__s36local6 - 1], PathfindingGraph.TRAVERSE_COST_STANDARD);
          }
          if (__s36local6 < __s36local2 - 1 && __s36local4[__s36local5][__s36local6 + 1] >= 0) {
            __s36local3.addNeighbor(__s36local0, __s36local4[__s36local5][__s36local6 + 1], PathfindingGraph.TRAVERSE_COST_STANDARD);
          }
          if (__s36param1) {
            if (__s36local5 > 0 && __s36local6 > 0 && __s36local4[__s36local5 - 1][__s36local6 - 1] >= 0 && __s36local4[__s36local5 - 1][__s36local6] >= 0 && __s36local4[__s36local5][__s36local6 - 1] >= 0) {
              __s36local3.addNeighbor(__s36local0, __s36local4[__s36local5 - 1][__s36local6 - 1], PathfindingGraph.TRAVERSE_COST_DIAGONAL);
            }
            if (__s36local5 < __s36local1 - 1 && __s36local6 > 0 && __s36local4[__s36local5 + 1][__s36local6 - 1] >= 0 && __s36local4[__s36local5 + 1][__s36local6] >= 0 && __s36local4[__s36local5][__s36local6 - 1] >= 0) {
              __s36local3.addNeighbor(__s36local0, __s36local4[__s36local5 + 1][__s36local6 - 1], PathfindingGraph.TRAVERSE_COST_DIAGONAL);
            }
            if (__s36local5 > 0 && __s36local6 < __s36local2 - 1 && __s36local4[__s36local5 - 1][__s36local6 + 1] >= 0 && __s36local4[__s36local5 - 1][__s36local6] >= 0 && __s36local4[__s36local5][__s36local6 + 1] >= 0) {
              __s36local3.addNeighbor(__s36local0, __s36local4[__s36local5 - 1][__s36local6 + 1], PathfindingGraph.TRAVERSE_COST_DIAGONAL);
            }
            if (__s36local5 < __s36local1 - 1 && __s36local6 < __s36local2 - 1 && __s36local4[__s36local5 + 1][__s36local6 + 1] >= 0 && __s36local4[__s36local5 + 1][__s36local6] >= 0 && __s36local4[__s36local5][__s36local6 + 1] >= 0) {
              __s36local3.addNeighbor(__s36local0, __s36local4[__s36local5 + 1][__s36local6 + 1], PathfindingGraph.TRAVERSE_COST_DIAGONAL);
            }
          }
        }
      }
    }
    return __s36local3;
  };
  PathfindingGraph.TRAVERSE_COST_STANDARD = 100;
  PathfindingGraph.TRAVERSE_COST_DIAGONAL = 133;
  return PathfindingGraph;
}();
exports.PathfindingGraph = __s0local0;
