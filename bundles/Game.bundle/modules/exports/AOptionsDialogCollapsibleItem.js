Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_ACollapsibleItem = require("gge-module:export_ACollapsibleItem");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function AOptionsDialogCollapsibleItem(__s3param0, __s3param1, __s3param2 = true) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
    if (__s3local0._headerMC.totalFrames > 1) {
      __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0._headerMC], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    }
    if (__s3local0._headerMC.mc_open) {
      __s3local0._headerMC.mc_open.visible = __s3local0.isExpanded;
    }
    __s3local0._updateSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AOptionsDialogCollapsibleItem, __s1param0);
  AOptionsDialogCollapsibleItem.prototype.updateItem = function () {};
  AOptionsDialogCollapsibleItem.prototype.updateMask = function () {
    if (this.isExpanded) {
      this.contentMC.mask.height = this.contentHeight;
    }
  };
  AOptionsDialogCollapsibleItem.prototype.applyStateChange = function () {
    __s1param0.prototype.applyStateChange.call(this);
    if (this._headerMC.mc_open) {
      this._headerMC.mc_open.visible = this.isExpanded;
    }
  };
  AOptionsDialogCollapsibleItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    this._updateSignal.removeAll();
  };
  AOptionsDialogCollapsibleItem.prototype.onClick = function (__s17param0) {
    __s1param0.prototype.onClick.call(this, __s17param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this._headerMC)) {
      switch (__s17param0.target) {
        case this._headerMC:
          this.expand(!this._isExpanded, true);
      }
    }
  };
  Object.defineProperty(AOptionsDialogCollapsibleItem.prototype, "updateSignal", {
    get: function () {
      return this._updateSignal;
    },
    enumerable: true,
    configurable: true
  });
  AOptionsDialogCollapsibleItem.prototype.preExpand = function () {
    this._isExpanded = true;
    this._contentMC.alpha = 1;
    this._contentMC.visible = true;
    this._contentMC.mask.height = this._contentMC.height;
    this._headerMC.mc_open.visible = true;
  };
  return AOptionsDialogCollapsibleItem;
}(__dep_export_ACollapsibleItem.ACollapsibleItem);
exports.AOptionsDialogCollapsibleItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");
