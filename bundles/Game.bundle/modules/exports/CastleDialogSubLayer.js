Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CollectableRendererList = require("gge-module:export_CollectableRendererList");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CastleDialogSubLayer(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._isSublayerActive = false;
    __s3local0.buttonArray = [];
    __s3local0._disp = __s3param0;
    __s3local0._disp.visible = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDialogSubLayer, __s1param0);
  CastleDialogSubLayer.prototype.show = function (__s5param0) {
    this._params = __s5param0;
    this._disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this._disp.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this._disp.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this._disp.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this._isSublayerActive = this._disp.visible = true;
  };
  CastleDialogSubLayer.prototype.onMouseWheel = function (__s7param0) {};
  CastleDialogSubLayer.prototype.hide = function () {
    this._disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this._disp.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this._disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this._disp.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this._isSublayerActive = this._disp.visible = false;
    this.destroyCollectableRenderList();
    if (this.buttonArray != null) {
      for (var __s9local0 = 0, __s9local1 = this.buttonArray; __s9local0 < __s9local1.length; __s9local0++) {
        var __s9local2 = __s9local1[__s9local0];
        if (__s9local2 !== undefined) {
          __s9local2.resetHoverState();
        }
      }
    }
  };
  CastleDialogSubLayer.prototype.onClick = function (__s15param0) {};
  CastleDialogSubLayer.prototype.onMouseUp = function (__s17param0) {};
  CastleDialogSubLayer.prototype.onMouseDown = function (__s19param0) {};
  CastleDialogSubLayer.prototype.onMouseOver = function (__s21param0) {};
  CastleDialogSubLayer.prototype.onMouseOut = function (__s23param0) {};
  CastleDialogSubLayer.prototype.showHelp = function () {};
  Object.defineProperty(CastleDialogSubLayer.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDialogSubLayer, "dialogHandler", {
    get: function () {
      return __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDialogSubLayer.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDialogSubLayer.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDialogSubLayer.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleDialogSubLayer.prototype.destroy = function () {};
  Object.defineProperty(CastleDialogSubLayer.prototype, "isSublayerActive", {
    get: function () {
      return this._isSublayerActive;
    },
    enumerable: true,
    configurable: true
  });
  CastleDialogSubLayer.prototype.initBasicButtons = function (__s41param0) {
    if (__s41param0 != null) {
      for (var __s41local0 = 0, __s41local1 = __s41param0; __s41local0 < __s41local1.length; __s41local0++) {
        var __s41local2 = __s41local1[__s41local0];
        if (__s41local2 !== undefined) {
          __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s41local2);
          __s41local2.mouseChildren = false;
          this.buttonArray.push(__s41local2.basicButton);
        }
      }
    }
  };
  Object.defineProperty(CastleDialogSubLayer.prototype, "subLayerDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleDialogSubLayer.prototype.isOutOfTutorial = function () {
    return __dep_export_CastleModel.CastleModel.userData.userXP >= __dep_exact_26a421b704832cff.TutorialConst.LAST_TUTORIAL_STEP_XP;
  };
  Object.defineProperty(CastleDialogSubLayer.prototype, "castleEnv", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return CastleDialogSubLayer;
}(__dep_export_CollectableRendererList.CollectableRendererList);
exports.CastleDialogSubLayer = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
