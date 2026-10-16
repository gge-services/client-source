Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_IntPoint = require("gge-module:class_IntPoint");
var __dep_class_IndexedPriorityQueue = require("gge-module:class_IndexedPriorityQueue");
var __s0local0 = function () {
  function Pathfinder(__s3param0, __s3param1, __s3param2, __s3param3) {
    this._nodeStart = 0;
    this._nodeGoal = 0;
    this._state = Pathfinder.STATE_UNSOLVED;
    this._graph = __s3param0;
    this._nodeStart = __s3param1;
    this._goalcondition = __s3param2;
    this._heuristic = __s3param3;
  }
  Pathfinder.prototype.solve = function () {
    var __s5local0 = false;
    if (this._nodeStart >= 0 && this._nodeStart < this._graph.nodeCount && !this._goalcondition.isUnreachable(this._graph)) {
      var __s5local1 = Array(this._graph.nodeCount).fill(0);
      this._node_parent = Array(this._graph.nodeCount).fill(0);
      var __s5local2 = Array(this._graph.nodeCount).fill(0);
      var __s5local3 = Array(this._graph.nodeCount).fill(0);
      var __s5local4 = Array(this._graph.nodeCount).fill(0);
      var __s5local5 = new __dep_class_IndexedPriorityQueue.IndexedPriorityQueue(__s5local4);
      var __s5local6 = this._nodeStart;
      __s5local1[__s5local6] = Pathfinder.NODE_OPEN;
      __s5local5.sortInto(__s5local6);
      while (!__s5local0 && __s5local5.length() > 0) {
        __s5local6 = __s5local5.pop();
        if (this._goalcondition.isSatisfied(this._graph.getNodeX(__s5local6), this._graph.getNodeY(__s5local6))) {
          this._nodeGoal = __s5local6;
          __s5local0 = true;
        } else {
          for (var __s5local7 = this._graph.getNodeNeighbors(__s5local6), __s5local8 = this._graph.getConnectionCosts(__s5local6), __s5local9 = 0, __s5local10 = 0, __s5local11 = 0; __s5local11 < __s5local7.length; __s5local11++) {
            if (__s5local1[__s5local9 = __s5local7[__s5local11]] != Pathfinder.NODE_CLOSED) {
              __s5local10 = __s5local8 != null ? __s5local2[__s5local6] + __s5local8[__s5local11] : __s5local2[__s5local6] + this._graph.traverseCostStandard;
              if (__s5local1[__s5local9] == Pathfinder.NODE_NEW) {
                __s5local2[__s5local9] = __s5local10;
                __s5local3[__s5local9] = this._heuristic.calculate(this._graph, this._graph.getNodeX(__s5local9), this._graph.getNodeY(__s5local9));
                __s5local4[__s5local9] = __s5local2[__s5local9] + __s5local3[__s5local9];
                this._node_parent[__s5local9] = __s5local6;
                __s5local5.sortInto(__s5local9);
                __s5local1[__s5local9] = Pathfinder.NODE_OPEN;
              } else if (__s5local10 < __s5local2[__s5local9]) {
                __s5local2[__s5local9] = __s5local10;
                __s5local4[__s5local9] = __s5local10 + __s5local3[__s5local9];
                this._node_parent[__s5local9] = __s5local6;
              }
            }
          }
          __s5local1[__s5local6] = Pathfinder.NODE_CLOSED;
        }
      }
    }
    this._state = __s5local0 ? Pathfinder.STATE_SOLUTION_FOUND : Pathfinder.STATE_NO_SOLUTION_FOUND;
    return __s5local0;
  };
  Pathfinder.prototype.getPath = function () {
    var __s17local0 = null;
    if (this._state == Pathfinder.STATE_SOLUTION_FOUND) {
      __s17local0 = [];
      for (var __s17local1 = this._nodeGoal; __s17local1 != this._nodeStart;) {
        __s17local0.push(new __dep_class_IntPoint.IntPoint(this._graph.getNodeX(__s17local1), this._graph.getNodeY(__s17local1)));
        __s17local1 = this._node_parent[__s17local1];
      }
      __s17local0.push(new __dep_class_IntPoint.IntPoint(this._graph.getNodeX(__s17local1), this._graph.getNodeY(__s17local1)));
    }
    return __s17local0;
  };
  Object.defineProperty(Pathfinder.prototype, "solved", {
    get: function () {
      return this._state == Pathfinder.STATE_SOLUTION_FOUND;
    },
    enumerable: true,
    configurable: true
  });
  Pathfinder.STATE_UNSOLVED = 0;
  Pathfinder.STATE_SOLUTION_FOUND = 1;
  Pathfinder.STATE_NO_SOLUTION_FOUND = 2;
  Pathfinder.NODE_NEW = 0;
  Pathfinder.NODE_OPEN = 1;
  Pathfinder.NODE_CLOSED = 2;
  return Pathfinder;
}();
exports.Pathfinder = __s0local0;
