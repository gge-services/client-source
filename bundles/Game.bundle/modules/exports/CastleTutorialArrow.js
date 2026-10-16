Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Event;
var __s0local1 = createjs.Point;
var __s0local2 = function () {
  function CastleTutorialArrow(__s3param0) {
    if (!__s3param0) {
      throw new Error("target must not be null");
    }
    this.arrow = new __dep_exact_9e901e8e2483a22f.GoodgameDisplayObjectClip(__dep_exact_81dacdf05bd32292.getDefinitionByName("TutorialArrow"), null, 30, false, true);
    this._targetLayer = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().getTutorialLayer(__s3param0);
    this.arrow.asDisplayObject().addEventListener(__s0local0.ADDED_TO_STAGE, this.bindFunction(this.onArrowAddedToStage));
    this._target = __s3param0;
  }
  Object.defineProperty(CastleTutorialArrow.prototype, "scale", {
    set: function (__s6param0) {
      this.arrow.scaleX = Math.abs(this.arrow.scaleX) / this.arrow.scaleX * __s6param0;
      this.arrow.scaleY = Math.abs(this.arrow.scaleY) / this.arrow.scaleY * __s6param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleTutorialArrow.prototype.mirror = function () {
    this.arrow.scaleX *= -1;
  };
  CastleTutorialArrow.prototype.flip = function () {
    this.arrow.scaleY *= -1;
  };
  Object.defineProperty(CastleTutorialArrow.prototype, "offset", {
    set: function (__s12param0) {
      __s12param0 ||= new __s0local1(0, 0);
      this._offset = __s12param0;
      var __s12local0 = this._target.localToGlobal(this._offset);
      var __s12local1 = this._targetLayer.globalToLocal(__s12local0);
      this.arrow.x = __s12local1.x;
      this.arrow.y = __s12local1.y;
    },
    enumerable: true,
    configurable: true
  });
  CastleTutorialArrow.prototype.updatePosition = function (__s14param0 = null) {
    var __s14local0 = this.arrow.asDisplayObject();
    if (__s14local0.parent && !__s14local0.parent.stage) {
      __s14local0.parent.removeChild(__s14local0);
    }
    this.offset = this._offset;
  };
  CastleTutorialArrow.prototype.display = function () {
    this._targetLayer.addChild(this.arrow.asDisplayObject());
  };
  CastleTutorialArrow.prototype.onArrowAddedToStage = function (__s19param0) {
    this.updatePosition();
    this.arrow.asDisplayObject().addEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.updatePosition), false, -1000);
    this.arrow.play();
  };
  CastleTutorialArrow.prototype.onArrowRemovedFromStage = function (__s21param0) {
    this.arrow.asDisplayObject().removeEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.updatePosition), false);
    this.arrow.stop();
  };
  CastleTutorialArrow.prototype.destroy = function () {
    if (this._targetLayer.contains(this.arrow.asDisplayObject())) {
      this._targetLayer.removeChild(this.arrow.asDisplayObject());
    }
    this.arrow.asDisplayObject().removeEventListener(__s0local0.ADDED_TO_STAGE, this.bindFunction(this.onArrowRemovedFromStage));
    this.arrow.asDisplayObject().removeEventListener(__s0local0.REMOVED_FROM_STAGE, this.bindFunction(this.onArrowRemovedFromStage));
  };
  Object.defineProperty(CastleTutorialArrow.prototype, "target", {
    get: function () {
      return this._target;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTutorialArrow;
}();
exports.CastleTutorialArrow = __s0local2;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
