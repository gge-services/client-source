Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_IsoMovementActionEnum = require("gge-module:export_IsoMovementActionEnum");
var __dep_export_AIsoMovementAction = require("gge-module:export_AIsoMovementAction");
var __dep_export_postPathfinderRequest = require("gge-module:export_postPathfinderRequest");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function IsoMovementActionWalk(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = this;
    __s3local0._spawnPos = new __s0local0();
    __s3local0._targetPos = new __s0local0();
    __s3local0._defaultWalkSpeed = 0;
    __s3local0._currentWalkBoost = 0;
    __s3local0._currentNodeIndex = 0;
    __s3local0._currentPath = [];
    __s3local0._lastRenderCallUpdate = 0;
    __s3local0._useWorker = true;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param2, __s3param3) || this)._spawnPos.x = __s3param0.x;
    __s3local0._spawnPos.y = __s3param0.y;
    __s3local0._targetPos.x = __s3param1.x;
    __s3local0._targetPos.y = __s3param1.y;
    __s3local0._defaultWalkSpeed = __s3local0.getRandomWalkSpeed();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoMovementActionWalk, __s1param0);
  IsoMovementActionWalk.prototype.start = function () {
    var __s5local0 = this;
    this._lastRenderCallUpdate = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
    this.createPathFinder(this.spawnPos, this.targetPos).then(function (__s7param0) {
      if (__s7param0.solved) {
        __s5local0.movementVO.changePos(__s5local0.spawnPos.x, __s5local0.spawnPos.y);
        __s5local0._currentNodeIndex = 0;
        __s5local0._currentPath = __s7param0.path;
        __s5local0.onReachingNode();
        if (__s5local0.willFadeIn) {
          __s5local0.fadeIn();
        }
      } else {
        __s5local0.onActionDone();
      }
    }).catch(function (__s12param0) {
      return __s5local0.onActionDone();
    });
  };
  IsoMovementActionWalk.prototype.update = function (__s14param0) {
    __s1param0.prototype.update.call(this, __s14param0);
    if (this.currentWalkBoost > 0) {
      this.currentWalkBoost -= __dep_export_IsoConst.IsoConst.MOVEMENTS_WALK_BOOST_DECREASE;
      if (this.currentWalkBoost < 0) {
        this.currentWalkBoost = 0;
      }
    }
    if (this.currentWalkTargetNode) {
      var __s14local0 = (__s14param0 - this._lastRenderCallUpdate) / 30;
      var __s14local1 = this.currentWalkSpeed * __s14local0;
      var __s14local2 = this.movementVO.precisePos.x;
      var __s14local3 = this.movementVO.precisePos.y;
      switch (this.movementVO.rotation) {
        case 0:
          __s14local2 += __s14local1;
          break;
        case 1:
          __s14local3 += __s14local1;
          break;
        case 2:
          __s14local3 -= __s14local1;
          break;
        case 3:
          __s14local2 -= __s14local1;
      }
      var __s14local4 = __dep_exact_f855840627e6e145.int(__s14local2);
      var __s14local5 = __dep_exact_f855840627e6e145.int(__s14local3);
      this.movementVO.changePos(__s14local2, __s14local3, this.movementVO.x != __s14local4 || this.movementVO.y != __s14local5);
      if (this.hasReachedNode()) {
        this.onReachingNode();
      }
      this._lastRenderCallUpdate = __s14param0;
    }
  };
  IsoMovementActionWalk.prototype.setPathNodeProgress = function (__s21param0) {
    if (this.currentPath) {
      var __s21local0 = __dep_exact_f855840627e6e145.int(Math.min(Math.max(__s21param0, 0), this.currentPath.length - 1));
      this._currentNodeIndex = __s21local0;
      this.onReachingNode();
    }
  };
  IsoMovementActionWalk.prototype.giveSpeedBoost = function () {
    this._currentWalkBoost = __dep_export_IsoConst.IsoConst.MOVEMENTS_WALK_BOOST;
  };
  IsoMovementActionWalk.prototype.hasReachedNode = function () {
    if (!this.currentWalkTargetNode) {
      return true;
    }
    switch (this.movementVO.rotation) {
      case 0:
        if (this.movementVO.precisePos.x >= this.currentWalkTargetNode.x) {
          return true;
        }
        break;
      case 1:
        if (this.movementVO.precisePos.y >= this.currentWalkTargetNode.y) {
          return true;
        }
        break;
      case 2:
        if (this.movementVO.precisePos.y < this.currentWalkTargetNode.y) {
          return true;
        }
        break;
      case 3:
        if (this.movementVO.precisePos.x < this.currentWalkTargetNode.x) {
          return true;
        }
    }
    return false;
  };
  IsoMovementActionWalk.prototype.onReachingNode = function () {
    if (this.currentWalkTargetNode) {
      this.movementVO.changePos(this.currentWalkTargetNode.x, this.currentWalkTargetNode.y);
    }
    this._currentNodeIndex++;
    if (this.currentNodeIndex >= this.currentPath.length - 1 && this.willFadeOut) {
      this.fadeOut();
    }
    if (this.currentNodeIndex >= this.currentPath.length) {
      this.onActionDone();
    } else {
      var __s34local0 = new __s0local0(this.currentWalkTargetNode.x - this.movementVO.precisePos.x, this.currentWalkTargetNode.y - this.movementVO.precisePos.y);
      if (__s34local0.x > 0) {
        this.movementVO.rotation = 0;
      } else if (__s34local0.x < 0) {
        this.movementVO.rotation = 3;
      } else if (__s34local0.y > 0) {
        this.movementVO.rotation = 1;
      } else if (__s34local0.y < 0) {
        this.movementVO.rotation = 2;
      }
    }
  };
  IsoMovementActionWalk.prototype.createPathFinder = function (__s44param0, __s44param1) {
    var __s44local0 = this.grid.getPathfindingGraph();
    if (window.Worker && this._useWorker) {
      var __s44local1 = null;
      if (!this.grid.workerPathfinderGraphNotified) {
        __s44local1 = __s44local0;
        this.grid.workerPathfinderGraphNotified = true;
      }
      return __dep_export_postPathfinderRequest.postPathfinderRequest(__s44param0, __s44param1, __s44local1);
    }
    return new Promise(function (__s48param0, __s48param1) {
      var __s48local0 = __s44local0.getNodeIndexByPosition(__s44param1.x, __s44param1.y);
      var __s48local1 = new __dep_exact_9e901e8e2483a22f_1.PathfindingGoalConditionTargetPoint(__s44param0.x, __s44param0.y);
      var __s48local2 = new __dep_exact_9e901e8e2483a22f_2.PathfindingHeuristicManhattan(__s44param0.x, __s44param0.y);
      var __s48local3 = new __dep_exact_9e901e8e2483a22f.Pathfinder(__s44local0, __s48local0, __s48local1, __s48local2);
      __s48local3.solve();
      __s48param0({
        solved: __s48local3.solved,
        path: __s48local3.getPath()
      });
    });
  };
  Object.defineProperty(IsoMovementActionWalk.prototype, "actionType", {
    get: function () {
      return __dep_export_IsoMovementActionEnum.IsoMovementActionEnum.WALK;
    },
    set: function (__s52param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AIsoMovementAction.AIsoMovementAction.prototype, "actionType").set.call(this, __s52param0);
    },
    enumerable: true,
    configurable: true
  });
  IsoMovementActionWalk.prototype.getRandomWalkSpeed = function () {
    return __dep_export_IsoConst.IsoConst.MOVEMENTS_SPEED_MIN + (__dep_export_IsoConst.IsoConst.MOVEMENTS_SPEED_MAX - __dep_export_IsoConst.IsoConst.MOVEMENTS_SPEED_MIN) * __dep_export_ClientConstUtils.ClientConstUtils.getRandomInt(1, 100) / 100;
  };
  Object.defineProperty(IsoMovementActionWalk.prototype, "currentWalkTargetNode", {
    get: function () {
      if (this.currentNodeIndex < this.currentPath.length) {
        return this.currentPath[this.currentNodeIndex];
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionWalk.prototype, "currentWalkSpeed", {
    get: function () {
      return this._defaultWalkSpeed + this._currentWalkBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionWalk.prototype, "currentWalkBoost", {
    get: function () {
      return this._currentWalkBoost;
    },
    set: function (__s64param0) {
      this._currentWalkBoost = __s64param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionWalk.prototype, "defaultWalkSpeed", {
    set: function (__s66param0) {
      this._defaultWalkSpeed = __s66param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionWalk.prototype, "currentPath", {
    get: function () {
      return this._currentPath;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionWalk.prototype, "currentNodeIndex", {
    get: function () {
      return this._currentNodeIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionWalk.prototype, "spawnPos", {
    get: function () {
      return this._spawnPos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionWalk.prototype, "targetPos", {
    get: function () {
      return this._targetPos;
    },
    enumerable: true,
    configurable: true
  });
  return IsoMovementActionWalk;
}(__dep_export_AIsoMovementAction.AIsoMovementAction);
exports.IsoMovementActionWalk = __s0local1;
var __dep_export_IsoConst = require("gge-module:export_IsoConst");
