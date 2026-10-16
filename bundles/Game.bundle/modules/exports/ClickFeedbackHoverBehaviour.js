Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MouseEvent;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __s0local1 = function () {
  function ClickFeedbackHoverBehaviour(__s3param0, __s3param1 = null, __s3param2 = null) {
    this._disp = __s3param0;
    this._hoverStateMC = __s3param1 || this._disp.mc_mouseOver;
    this._downStateMC = __s3param2 || this._disp.mc_downState;
    this._hoverStateMC.visible = false;
    this._downStateMC.visible = false;
    this._hoverStateMC.mouseEnabled = false;
    this._downStateMC.mouseEnabled = false;
  }
  ClickFeedbackHoverBehaviour.prototype.addEventListener = function () {
    if (this._disp) {
      this._disp.addEventListener(__s0local0.ROLL_OVER, this.bindFunction(this.onRollOver));
      this._disp.addEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onRollOut));
      this._disp.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this._disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onMouseUp));
    }
  };
  ClickFeedbackHoverBehaviour.prototype.removeEventListener = function () {
    if (this._disp) {
      this._disp.removeEventListener(__s0local0.ROLL_OVER, this.bindFunction(this.onRollOver));
      this._disp.removeEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onRollOut));
      this._disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this._disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onMouseUp));
    }
  };
  ClickFeedbackHoverBehaviour.prototype.onMouseDown = function (__s11param0) {
    this._hoverStateMC.visible = false;
    this._downStateMC.visible = true;
    if (this._disp.cacheCanvas && this._updateCacheOnChange) {
      this._disp.updateCache();
    }
  };
  ClickFeedbackHoverBehaviour.prototype.onMouseUp = function (__s14param0) {
    this._hoverStateMC.visible = false;
    this._downStateMC.visible = false;
    if (this._disp.cacheCanvas && this._updateCacheOnChange) {
      this._disp.updateCache();
    }
  };
  ClickFeedbackHoverBehaviour.prototype.onRollOver = function (__s17param0) {
    this._hoverStateMC.visible = true;
    this._downStateMC.visible = false;
    if (this._disp.cacheCanvas && this._updateCacheOnChange) {
      this._disp.updateCache();
    }
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
  };
  ClickFeedbackHoverBehaviour.prototype.onRollOut = function (__s20param0) {
    this._hoverStateMC.visible = false;
    this._downStateMC.visible = false;
    if (this._disp.cacheCanvas && this._updateCacheOnChange) {
      this._disp.updateCache();
    }
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
  };
  Object.defineProperty(ClickFeedbackHoverBehaviour.prototype, "updateCacheOnChange", {
    set: function (__s23param0) {
      this._updateCacheOnChange = __s23param0;
    },
    enumerable: true,
    configurable: true
  });
  return ClickFeedbackHoverBehaviour;
}();
exports.ClickFeedbackHoverBehaviour = __s0local1;
