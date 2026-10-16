Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __s0local0 = createjs.Graphics;
var __s0local1 = createjs.Container;
var __s0local2 = createjs.Shape;
var __s0local3 = createjs.Point;
var __s0local4 = createjs.Ticker;
var __s0local5 = function () {
  function CastleTutorialSpotlight(__s3param0) {
    this.onTick = function (__s5param0) {
      if (!__s0local4.paused) {
        try {
          __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().castleTutorialStage.update(__s5param0);
        } catch (__s9local0) {}
      }
    };
    if (__s3param0 == null) {
      throw new Error("do not instantiate, use instance getter");
    }
    this.createSprite();
  }
  Object.defineProperty(CastleTutorialSpotlight, "instance", {
    get: function () {
      CastleTutorialSpotlight._instance ||= new CastleTutorialSpotlight(new __s0local6());
      return CastleTutorialSpotlight._instance;
    },
    enumerable: true,
    configurable: true
  });
  CastleTutorialSpotlight.prototype.createSprite = function () {
    this.tutorialStage = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().castleTutorialStage;
    __s0local4.addEventListener("tick", this.onTick);
    this._sprite = new __s0local1();
    this._rect = new __s0local1();
    this._rect.graphics.beginFill(0, 0.5).drawRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);
    this._hole = new __s0local2(new __s0local0().beginFill(0, 0.7).drawCircle(0, 0, 150));
    this._hole.compositeOperation = "destination-out";
    this.tutorialStage.addChildAt(this._sprite, 0);
    this._sprite.addChild(this._rect);
    this._sprite.addChild(this._hole);
    this._sprite.visible = false;
  };
  CastleTutorialSpotlight.prototype.onResize = function (__s16param0) {
    if (this.isVisible) {
      this._rect.graphics.clear();
      this._rect.graphics.beginFill(0, 0.5).drawRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);
      this.updateRect();
    }
  };
  CastleTutorialSpotlight.prototype.destroyTutorialCanvas = function () {
    if (this.tutorialStage) {
      __s0local4.removeEventListener("tick", this.onTick);
      this.controller.removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.ON_RESIZE, this.bindFunction(this.onResize));
      try {
        this.tutorialStage.clear();
      } catch (__s23local0) {}
      this.tutorialStage = null;
      this.clear();
      CastleTutorialSpotlight._instance = null;
    }
  };
  CastleTutorialSpotlight.prototype.updateRect = function () {
    this._rect.width = this.tutorialStage.canvas.width;
    this._rect.height = this.tutorialStage.canvas.height;
    this.correctPosition();
  };
  CastleTutorialSpotlight.prototype.replace = function (__s27param0, __s27param1 = null) {
    if (!__s27param0) {
      throw new ReferenceError("mc must not be null!");
    }
    this._offset = __s27param1;
    this.showSpotlightToMc(__s27param0, this.isVisible);
  };
  CastleTutorialSpotlight.prototype.showSpotlightToMc = function (__s30param0, __s30param1) {
    this._targetObject = __s30param0;
    if (this._targetObject && this._targetObject.stage) {
      var __s30local0 = this.targetPoint;
      if (__s30local0) {
        if (!__s30param1) {
          this._hole.x = __s30local0.x;
          this._hole.y = __s30local0.y;
          this.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.ON_RESIZE, this.bindFunction(this.onResize));
        }
        this._sprite.visible = true;
        if (__s30param1) {
          this._tween = __dep_exact_608de47b6498f9b0_1.TweenMax.to(this._hole, 0.5, {
            x: __s30local0.x,
            y: __s30local0.y,
            ease: __dep_exact_608de47b6498f9b0.Power2.easeInOut,
            onUpdate: this.bindFunction(this.updateTween),
            onComplete: this.bindFunction(this.correctPosition)
          });
        }
      } else {
        this.clear();
      }
    } else {
      this.clear();
    }
  };
  CastleTutorialSpotlight.prototype.correctPosition = function () {
    if (this._targetObject && this._targetObject.stage) {
      window.setTimeout(this.bindFunction(function () {
        var __s41local0 = this.targetPoint;
        if (this._hole && __s41local0 && (this._hole.x != __s41local0.x || this._hole.y != __s41local0.y)) {
          this._tween = __dep_exact_608de47b6498f9b0_1.TweenMax.to(this._hole, 0.5, {
            x: __s41local0.x,
            y: __s41local0.y,
            ease: __dep_exact_608de47b6498f9b0.Power2.easeInOut,
            onUpdate: this.bindFunction(this.updateTween),
            onComplete: this.bindFunction(this.correctPosition)
          });
        }
      }), 250);
    } else {
      this.clear();
    }
  };
  CastleTutorialSpotlight.prototype.updateTween = function () {
    if (this._tween) {
      var __s45local0 = this.targetPoint;
      if (__s45local0) {
        this._tween.updateTo({
          x: __s45local0.x,
          y: __s45local0.y
        }, false);
      }
    }
  };
  CastleTutorialSpotlight.prototype.clear = function () {
    this._targetObject = null;
    this._sprite.visible = false;
    this.controller.removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.ON_RESIZE, this.bindFunction(this.onResize));
  };
  Object.defineProperty(CastleTutorialSpotlight.prototype, "targetPoint", {
    get: function () {
      if (!this._targetObject) {
        return null;
      }
      if (!this._targetObject.parent) {
        return null;
      }
      var __s51local0 = this._targetObject.parent.localToGlobal(new __s0local3(this._targetObject.x, this._targetObject.y));
      if (this._offset) {
        return __s51local0.add(this._offset);
      } else {
        return __s51local0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTutorialSpotlight.prototype, "isVisible", {
    get: function () {
      return this._sprite && this._sprite.visible;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTutorialSpotlight.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleTutorialSpotlight;
}();
exports.CastleTutorialSpotlight = __s0local5;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __s0local6 = function () {
  return function SingletonBlocker() {};
}();
exports.SingletonBlocker = __s0local6;
