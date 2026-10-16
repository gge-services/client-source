Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function PathfindingGoalConditionTargetRectAdjacent(__s3param0, __s3param1 = false) {
    this._target = __s3param0.clone();
    this._useCorners = __s3param1;
  }
  PathfindingGoalConditionTargetRectAdjacent.prototype.isSatisfied = function (__s5param0, __s5param1) {
    if (this._useCorners) {
      return (__s5param0 == this._target.left - 1 || __s5param0 == this._target.right) && __s5param1 >= this._target.top - 1 && __s5param1 <= this._target.bottom || (__s5param1 == this._target.top - 1 || __s5param1 == this._target.bottom) && __s5param0 >= this._target.left && __s5param0 < this._target.right;
    } else {
      return (__s5param0 == this._target.left - 1 || __s5param0 == this._target.right) && __s5param1 >= this._target.top && __s5param1 < this._target.bottom || (__s5param1 == this._target.top - 1 || __s5param1 == this._target.bottom) && __s5param0 >= this._target.left && __s5param0 < this._target.right;
    }
  };
  PathfindingGoalConditionTargetRectAdjacent.prototype.isUnreachable = function (__s9param0) {
    var __s9local0 = this._target.left - 1;
    var __s9local1 = 0;
    for (__s9local1 = this._target.top; __s9local1 < this._target.bottom; __s9local1++) {
      if (__s9param0.hasNodeAtPosition(__s9local0, __s9local1)) {
        return false;
      }
    }
    __s9local0 = this._target.right;
    __s9local1 = this._target.top;
    for (; __s9local1 < this._target.bottom; __s9local1++) {
      if (__s9param0.hasNodeAtPosition(__s9local0, __s9local1)) {
        return false;
      }
    }
    __s9local1 = this._target.top - 1;
    __s9local0 = this._target.left;
    for (; __s9local0 < this._target.right; __s9local0++) {
      if (__s9param0.hasNodeAtPosition(__s9local0, __s9local1)) {
        return false;
      }
    }
    __s9local1 = this._target.bottom;
    __s9local0 = this._target.left;
    for (; __s9local0 < this._target.right; __s9local0++) {
      if (__s9param0.hasNodeAtPosition(__s9local0, __s9local1)) {
        return false;
      }
    }
    return !this._useCorners || !__s9param0.hasNodeAtPosition(this._target.left - 1, this._target.top - 1) && !__s9param0.hasNodeAtPosition(this._target.right, this._target.top - 1) && !__s9param0.hasNodeAtPosition(this._target.left - 1, this._target.bottom) && !__s9param0.hasNodeAtPosition(this._target.right, this._target.bottom);
  };
  return PathfindingGoalConditionTargetRectAdjacent;
}();
exports.PathfindingGoalConditionTargetRectAdjacent = __s0local0;
