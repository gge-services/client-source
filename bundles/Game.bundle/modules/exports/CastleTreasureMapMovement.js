Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function CastleTreasureMapMovement(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4 = false) {
    this._from = 0;
    this._to = 0;
    this._isReversed = false;
    this._movementVO = __s3param1;
    this._disp = __s3param0;
    this._from = __s3param2;
    this._to = __s3param3;
    this._isReversed = __s3param4;
    if (this._disp) {
      this._disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
      this._disp.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this._disp.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    }
  }
  CastleTreasureMapMovement.prototype.update = function () {
    var __s6local0 = __dep_exact_f855840627e6e145.int(this._movementVO.currentProgress * 100);
    if (this._disp) {
      if (this._isReversed) {
        this._disp.gotoAndStop(Math.max(1, Math.min(100 - __s6local0)));
      } else {
        this._disp.gotoAndStop(Math.min(100, Math.max(__s6local0)));
      }
    }
  };
  CastleTreasureMapMovement.prototype.onClick = function (__s11param0) {
    __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_MOVEMENT_INFO_DIALOG_COMMAND, this._movementVO);
  };
  CastleTreasureMapMovement.prototype.onMouseOver = function (__s13param0) {
    if (this._disp) {
      this._disp.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_STANDARD);
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  CastleTreasureMapMovement.prototype.onMouseOut = function (__s16param0) {
    if (this._disp) {
      this._disp.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
    }
  };
  CastleTreasureMapMovement.prototype.dispose = function () {
    if (this._disp) {
      this._disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
      this._disp.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this._disp.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    }
  };
  Object.defineProperty(CastleTreasureMapMovement.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureMapMovement.prototype, "movementVO", {
    get: function () {
      return this._movementVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureMapMovement.prototype, "target", {
    get: function () {
      return this._to;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTreasureMapMovement;
}();
exports.CastleTreasureMapMovement = __s0local1;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
