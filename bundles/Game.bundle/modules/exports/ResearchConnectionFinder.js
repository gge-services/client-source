Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function ResearchConnectionFinder() {
    this.pathfinderHeuristic = new __dep_exact_9e901e8e2483a22f.PathfindingHeuristicNone();
  }
  ResearchConnectionFinder.prototype.getPathByVO = function (__s5param0, __s5param1, __s5param2) {
    return this.getPathByPos(new __s0local0(__s5param0.x, __s5param0.y), new __s0local0(__s5param1.x, __s5param1.y), __s5param2);
  };
  ResearchConnectionFinder.prototype.getPathByPos = function (__s7param0, __s7param1, __s7param2) {
    __s7param2.setWalkable(__s7param0.x, __s7param0.y, true);
    __s7param2.setWalkable(__s7param1.x, __s7param1.y, true);
    var __s7local0 = __dep_exact_9e901e8e2483a22f.PathfindingGraph.generateFromMap(__s7param2);
    var __s7local1 = __s7local0.getNodeIndexByPosition(__s7param0.x, __s7param0.y);
    var __s7local2 = new __dep_exact_9e901e8e2483a22f.PathfindingGoalConditionTargetPoint(__s7param1.x, __s7param1.y);
    var __s7local3 = new __dep_exact_9e901e8e2483a22f.Pathfinder(__s7local0, __s7local1, __s7local2, this.pathfinderHeuristic);
    __s7local3.solve();
    __s7param2.setWalkable(__s7param0.x, __s7param0.y, false);
    __s7param2.setWalkable(__s7param1.x, __s7param1.y, false);
    return __s7local3.getPath();
  };
  return ResearchConnectionFinder;
}();
exports.ResearchConnectionFinder = __s0local1;
