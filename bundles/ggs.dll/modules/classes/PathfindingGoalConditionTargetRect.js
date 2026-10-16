Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_IntPoint = require("gge-module:class_IntPoint");
var __s0local0 = function () {
  function PathfindingGoalConditionTargetRect(__s3param0) {
    this._target = __s3param0;
  }
  PathfindingGoalConditionTargetRect.prototype.isSatisfied = function (__s5param0, __s5param1) {
    return this._target.containsPoint(new __dep_class_IntPoint.IntPoint(__s5param0, __s5param1));
  };
  PathfindingGoalConditionTargetRect.prototype.isUnreachable = function (__s7param0) {
    for (var __s7local0 = this._target.x; __s7local0 < this._target.right; __s7local0++) {
      for (var __s7local1 = this._target.y; __s7local1 < this._target.bottom; __s7local1++) {
        if (__s7param0.hasNodeAtPosition(__s7local0, __s7local1)) {
          return false;
        }
      }
    }
    return true;
  };
  return PathfindingGoalConditionTargetRect;
}();
exports.PathfindingGoalConditionTargetRect = __s0local0;
