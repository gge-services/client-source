Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function PathfindingGoalConditionTargetPoint(__s3param0, __s3param1) {
    this._targetX = __s3param0;
    this._targetY = __s3param1;
  }
  PathfindingGoalConditionTargetPoint.prototype.isSatisfied = function (__s5param0, __s5param1) {
    return __s5param0 == this._targetX && __s5param1 == this._targetY;
  };
  PathfindingGoalConditionTargetPoint.prototype.isUnreachable = function (__s7param0) {
    return !__s7param0.hasNodeAtPosition(this._targetX, this._targetY);
  };
  return PathfindingGoalConditionTargetPoint;
}();
exports.PathfindingGoalConditionTargetPoint = __s0local0;
