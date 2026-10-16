Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __s0local0 = function (__s1param0) {
  function CastleUIComponent(__s3param0) {
    var __s3local0 = this;
    __s3local0._collectableRenderList = [];
    __s3local0._enabled = true;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleUIComponent, __s1param0);
  CastleUIComponent.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.destroyCollectableRenderList();
  };
  Object.defineProperty(CastleUIComponent.prototype, "enableComponent", {
    set: function (__s7param0) {
      this._enabled = __s7param0;
      if (this._enabled) {
        this.disp.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
      } else {
        this.disp.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_COLOR_MATRIX);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUIComponent.prototype, "collectableRenderList", {
    get: function () {
      return this._collectableRenderList;
    },
    enumerable: true,
    configurable: true
  });
  CastleUIComponent.prototype.destroyCollectableRenderList = function () {
    if (this._collectableRenderList) {
      for (var __s13local0 = 0; __s13local0 < this._collectableRenderList.length; ++__s13local0) {
        this._collectableRenderList[__s13local0].destroy();
      }
    }
    this._collectableRenderList = [];
  };
  Object.defineProperty(CastleUIComponent, "dialogHandler", {
    get: function () {
      return __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUIComponent, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUIComponent, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUIComponent, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleUIComponent;
}(__dep_exact_9e901e8e2483a22f.FlashUIComponent);
exports.CastleUIComponent = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
