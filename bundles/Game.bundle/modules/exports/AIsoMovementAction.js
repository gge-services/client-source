Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AIsoMovementAction(__s3param0, __s3param1) {
    this._willFadeIn = false;
    this._willFadeOut = false;
    this._currentTransparency = 1;
    this._transparencyDelta = 0;
    this._actionIsFinished = false;
    this._willFadeIn = __s3param0;
    this._willFadeOut = __s3param1;
  }
  AIsoMovementAction.prototype.init = function (__s5param0) {
    this._movementVO = __s5param0;
  };
  AIsoMovementAction.prototype.start = function () {};
  AIsoMovementAction.prototype.update = function (__s9param0) {
    this.updateFading();
  };
  AIsoMovementAction.prototype.destroy = function () {};
  AIsoMovementAction.prototype.updateFading = function () {
    this._currentTransparency += this._transparencyDelta;
    this._currentTransparency = __dep_exact_9e901e8e2483a22f.MathBase.clamp(this._currentTransparency, 0, 1);
  };
  AIsoMovementAction.prototype.fadeOut = function () {
    this._currentTransparency = 1;
    this._transparencyDelta = -__dep_export_IsoConst.IsoConst.MOVEMENTS_FADE_SPEED;
  };
  AIsoMovementAction.prototype.fadeIn = function () {
    this._currentTransparency = 0;
    this._transparencyDelta = __dep_export_IsoConst.IsoConst.MOVEMENTS_FADE_SPEED;
  };
  Object.defineProperty(AIsoMovementAction.prototype, "actionType", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementAction.prototype, "movementVO", {
    get: function () {
      return this._movementVO;
    },
    enumerable: true,
    configurable: true
  });
  AIsoMovementAction.prototype.onActionDone = function () {
    if (!this.actionIsFinished) {
      this._actionIsFinished = true;
      this.movementVO.onCurrentActionDone();
    }
  };
  Object.defineProperty(AIsoMovementAction.prototype, "grid", {
    get: function () {
      return this.movementVO.isoData.grid;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementAction.prototype, "willFadeIn", {
    get: function () {
      return this._willFadeIn;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementAction.prototype, "willFadeOut", {
    get: function () {
      return this._willFadeOut;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementAction.prototype, "actionIsFinished", {
    get: function () {
      return this._actionIsFinished;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementAction.prototype, "currentTransparency", {
    get: function () {
      return this._currentTransparency;
    },
    enumerable: true,
    configurable: true
  });
  return AIsoMovementAction;
}();
exports.AIsoMovementAction = __s0local0;
var __dep_export_IsoConst = require("gge-module:export_IsoConst");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
