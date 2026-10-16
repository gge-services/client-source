Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_DecorationForgeSelectProperties = require("gge-module:export_DecorationForgeSelectProperties");
var __s0local0 = function (__s1param0) {
  function DecorationForgeMergeButtonsComponent(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._buttons = [];
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._onSelectionFunc = __s3param1;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DecorationForgeMergeButtonsComponent, __s1param0);
  DecorationForgeMergeButtonsComponent.prototype.init = function () {
    this._buttons = [this._buttonSource = new __dep_export_DecorationForgeMergeButton.DecorationForgeMergeButton(this.disp.btn_mergeSource, this.bindFunction(this.onMergeButtonClicked)), this._buttonTarget = new __dep_export_DecorationForgeMergeButton.DecorationForgeMergeButton(this.disp.btn_mergeTarget, this.bindFunction(this.onMergeButtonClicked)), this._buttonCatalyst = new __dep_export_DecorationForgeMergeButton.DecorationForgeMergeButton(this.disp.btn_mergeCatalyst, this.bindFunction(this.onMergeButtonClicked))];
  };
  DecorationForgeMergeButtonsComponent.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this.reset();
    if (this._buttons != null) {
      for (var __s7local0 = 0, __s7local1 = this._buttons; __s7local0 < __s7local1.length; __s7local0++) {
        var __s7local2 = __s7local1[__s7local0];
        if (__s7local2 !== undefined) {
          __s7local2.onShow();
        }
      }
    }
  };
  DecorationForgeMergeButtonsComponent.prototype.onHide = function () {
    if (this._buttons != null) {
      for (var __s13local0 = 0, __s13local1 = this._buttons; __s13local0 < __s13local1.length; __s13local0++) {
        var __s13local2 = __s13local1[__s13local0];
        if (__s13local2 !== undefined) {
          __s13local2.onHide();
        }
      }
    }
    __s1param0.prototype.onHide.call(this);
  };
  DecorationForgeMergeButtonsComponent.prototype.updateButtons = function () {
    this.updateButton(this._buttonSource);
    this.updateButton(this._buttonCatalyst);
    this.updateArrows();
  };
  DecorationForgeMergeButtonsComponent.prototype.updateButton = function (__s21param0) {
    switch (this._buttonTarget.currentState) {
      case __dep_export_DecorationForgeMergeButton.DecorationForgeMergeButton.STATE_DISABLED:
        __s21param0.setSelection(null);
        __s21param0.setState(__dep_export_DecorationForgeMergeButton.DecorationForgeMergeButton.STATE_DISABLED);
        __s21param0.updateInfo();
        break;
      case __dep_export_DecorationForgeMergeButton.DecorationForgeMergeButton.STATE_READY:
        break;
      case __dep_export_DecorationForgeMergeButton.DecorationForgeMergeButton.STATE_SET:
        if (__s21param0.currentState != __dep_export_DecorationForgeMergeButton.DecorationForgeMergeButton.STATE_SET) {
          __s21param0.setState(__dep_export_DecorationForgeMergeButton.DecorationForgeMergeButton.STATE_READY);
        }
        __s21param0.updateInfo();
    }
  };
  DecorationForgeMergeButtonsComponent.prototype.updateArrows = function () {
    this.disp.mc_arrowSource.gotoAndStop(this._buttonSource.currentState == __dep_export_DecorationForgeMergeButton.DecorationForgeMergeButton.STATE_SET ? 2 : 1);
    this.disp.mc_arrowCatalyst.gotoAndStop(this._buttonCatalyst.currentState == __dep_export_DecorationForgeMergeButton.DecorationForgeMergeButton.STATE_SET ? 2 : 1);
  };
  DecorationForgeMergeButtonsComponent.prototype.reset = function () {
    if (this._buttons != null) {
      for (var __s27local0 = 0, __s27local1 = this._buttons; __s27local0 < __s27local1.length; __s27local0++) {
        var __s27local2 = __s27local1[__s27local0];
        if (__s27local2 !== undefined) {
          __s27local2.reset();
        }
      }
    }
    this._buttonTarget.setState(__dep_export_DecorationForgeMergeButton.DecorationForgeMergeButton.STATE_READY);
    this.updateArrows();
  };
  DecorationForgeMergeButtonsComponent.prototype.openSelectDialog = function (__s33param0, __s33param1) {
    if (__s33param0.currentState != __dep_export_DecorationForgeMergeButton.DecorationForgeMergeButton.STATE_DISABLED) {
      __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDialogs(__s33param1, new __dep_export_DecorationForgeSelectProperties.DecorationForgeSelectProperties(this, this.bindFunction(this.onSelectionDone), this.bindFunction(this.onSelectionAbort)));
    }
  };
  DecorationForgeMergeButtonsComponent.prototype.selectItem = function (__s36param0) {
    if (__s36param0.itemVO && __s36param0.btn) {
      __s36param0.btn.setSelection(__s36param0);
      __s36param0.btn.setState(__dep_export_DecorationForgeMergeButton.DecorationForgeMergeButton.STATE_SET);
      __s36param0.btn.updateInfo();
    }
    if (__s36param0.btn == this._buttonTarget) {
      this._buttonSource.reset();
      this._buttonCatalyst.reset();
    }
    this.updateButtons();
    if (this._onSelectionFunc) {
      this._onSelectionFunc();
    }
  };
  DecorationForgeMergeButtonsComponent.prototype.areAllButtonsSelected = function () {
    if (this._buttons != null) {
      for (var __s41local0 = 0, __s41local1 = this._buttons; __s41local0 < __s41local1.length; __s41local0++) {
        var __s41local2 = __s41local1[__s41local0];
        if (__s41local2 !== undefined && !__s41local2.currentSelectionVO) {
          return false;
        }
      }
    }
    return true;
  };
  DecorationForgeMergeButtonsComponent.prototype.isTargetSelected = function () {
    return this._buttonTarget.currentSelectionVO != null;
  };
  DecorationForgeMergeButtonsComponent.prototype.areSourceAndCatalystSelected = function () {
    return this._buttonSource.currentSelectionVO != null && this._buttonCatalyst.currentSelectionVO != null;
  };
  DecorationForgeMergeButtonsComponent.prototype.onClick = function (__s51param0) {
    __s1param0.prototype.onClick.call(this, __s51param0);
  };
  DecorationForgeMergeButtonsComponent.prototype.onMergeButtonClicked = function (__s53param0) {
    switch (__s53param0) {
      case this._buttonSource:
      case this._buttonCatalyst:
        this.openSelectDialog(__s53param0, __dep_export_DecorationForgeSelectSourceAndCatalystDialog.DecorationForgeSelectSourceAndCatalystDialog);
        break;
      case this._buttonTarget:
        this.openSelectDialog(__s53param0, __dep_export_DecorationForgeSelectTargetDialog.DecorationForgeSelectTargetDialog);
    }
  };
  DecorationForgeMergeButtonsComponent.prototype.onSelectionDone = function (__s56param0) {
    this.selectItem(__s56param0);
  };
  DecorationForgeMergeButtonsComponent.prototype.onSelectionAbort = function (__s58param0) {};
  Object.defineProperty(DecorationForgeMergeButtonsComponent.prototype, "buttonSource", {
    get: function () {
      return this._buttonSource;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeMergeButtonsComponent.prototype, "buttonTarget", {
    get: function () {
      return this._buttonTarget;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeMergeButtonsComponent.prototype, "buttonCatalyst", {
    get: function () {
      return this._buttonCatalyst;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeMergeButtonsComponent.prototype, "buttons", {
    get: function () {
      return this._buttons;
    },
    enumerable: true,
    configurable: true
  });
  return DecorationForgeMergeButtonsComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.DecorationForgeMergeButtonsComponent = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_DecorationForgeMergeButton = require("gge-module:export_DecorationForgeMergeButton");
var __dep_export_DecorationForgeSelectSourceAndCatalystDialog = require("gge-module:export_DecorationForgeSelectSourceAndCatalystDialog");
var __dep_export_DecorationForgeSelectTargetDialog = require("gge-module:export_DecorationForgeSelectTargetDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
