Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function PathfindingHeuristicManhattan(__s3param0, __s3param1) {
    this._targetX = __s3param0;
    this._targetY = __s3param1;
  }
  PathfindingHeuristicManhattan.prototype.calculate = function (__s5param0, __s5param1, __s5param2) {
    return (Math.abs(__s5param1 - this._targetX) + Math.abs(__s5param2 - this._targetY)) * __s5param0.traverseCostStandard;
  };
  return PathfindingHeuristicManhattan;
}();
exports.PathfindingHeuristicManhattan = __s0local0;
