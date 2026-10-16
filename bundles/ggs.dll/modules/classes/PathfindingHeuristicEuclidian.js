Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function PathfindingHeuristicEuclidian(__s3param0, __s3param1) {
    this._targetX = 0;
    this._targetY = 0;
    this._targetX = __s3param0;
    this._targetY = __s3param1;
  }
  PathfindingHeuristicEuclidian.prototype.calculate = function (__s5param0, __s5param1, __s5param2) {
    return Math.sqrt((this._targetX - __s5param1) * (this._targetX - __s5param1) + (this._targetY - __s5param2) * (this._targetY - __s5param2)) * __s5param0.traverseCostStandard;
  };
  return PathfindingHeuristicEuclidian;
}();
exports.PathfindingHeuristicEuclidian = __s0local0;
