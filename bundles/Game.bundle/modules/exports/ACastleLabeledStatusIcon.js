Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_ACastleStatusIcon = require("gge-module:export_ACastleStatusIcon");
var __s0local0 = function (__s1param0) {
  function ACastleLabeledStatusIcon(__s3param0, __s3param1 = "txt_label", __s3param2 = null, __s3param3 = __dep_exact_f855840627e6e145.int(__dep_export_ACastleStatusIcon.ACastleStatusIcon.PRIORITY_LOW), __s3param4 = null) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param3) || this;
    __s3local0.preInit(__s3param4);
    __s3local0.textVO = __s3param2 || new __dep_exact_92d05af59ee2ff30.TextVO("");
    __s3local0._textFieldName = __s3param1;
    __s3local0.init();
    __s3local0.setVisibility();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACastleLabeledStatusIcon, __s1param0);
  ACastleLabeledStatusIcon.prototype.preInit = function (__s5param0 = null) {};
  ACastleLabeledStatusIcon.prototype.init = function () {
    if (this.textVO && this._textFieldName) {
      __s1param0.prototype.init.call(this);
    }
  };
  ACastleLabeledStatusIcon.prototype.setVisibility = function () {
    if (this.textVO && this._textFieldName) {
      __s1param0.prototype.setVisibility.call(this);
    }
  };
  ACastleLabeledStatusIcon.prototype.initLoaded = function (__s13param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initTextField();
    var __s13local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().getPanel(__dep_export_CastleStatusPanel.CastleStatusPanel), "CastleStatusPanel");
    if (__s13local0) {
      __s13local0.updatePosition();
    }
  };
  ACastleLabeledStatusIcon.prototype.initTextField = function () {
    if (this._textFieldName.indexOf(".") > -1) {
      this.tf = __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.iterateThroughMc(this.iconDisp, this._textFieldName);
    } else {
      this.tf = this.iconDisp.getChildByName(this._textFieldName);
    }
    if (this.tf != null) {
      this._itxt_label = this.textFieldManager.registerTextField(this.tf, this.textVO);
      if (this._itxt_label && this._itxt_label.multiline) {
        this._itxt_label.verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
      }
      this.textVO.propertyChangedSignal.add(this.bindFunction(this.updateCache));
    }
  };
  ACastleLabeledStatusIcon.prototype.disposeLoaded = function () {
    __s1param0.prototype.disposeLoaded.call(this);
    if (this.textVO) {
      this.textVO.propertyChangedSignal.remove(this.bindFunction(this.updateCache));
    }
    this.textFieldManager.unregisterTextField(this.tf);
    this._itxt_label = null;
    this.tf = null;
  };
  Object.defineProperty(ACastleLabeledStatusIcon.prototype, "timerData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.timerData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleLabeledStatusIcon.prototype, "itxt_label", {
    get: function () {
      return this._itxt_label;
    },
    enumerable: true,
    configurable: true
  });
  return ACastleLabeledStatusIcon;
}(__dep_export_ACastleStatusIcon.ACastleStatusIcon);
exports.ACastleLabeledStatusIcon = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleStatusPanel = require("gge-module:export_CastleStatusPanel");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
