Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_DispCreatorComponent = require("gge-module:export_DispCreatorComponent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __s0local0 = createjs.MovieClip;
var __s0local1 = function (__s1param0) {
  function ASimpleComboboxComponentItem() {
    var __s3local0 = this;
    __s3local0._onItemClicked = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0._onFillContentCompleted = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0._dispCreator = new __dep_export_DispCreatorComponent.DispCreatorComponent();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, new __s0local0()) || this).init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ASimpleComboboxComponentItem, __s1param0);
  ASimpleComboboxComponentItem.prototype.init = function () {
    this._dispCreator.init(this.disp);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.disp, 1);
  };
  ASimpleComboboxComponentItem.prototype.destroy = function () {
    this._dispCreator.destroy();
    this._onFillContentCompleted.removeAll();
    this._onItemClicked.removeAll();
    __s1param0.prototype.destroy.call(this);
  };
  ASimpleComboboxComponentItem.prototype.updateDisp = function () {
    this._dispCreator.reset();
    this._dispCreator.onLoadedSignal.add(this.bindFunction(this.onAllClipsLoaded));
    this._dispCreator.switchCreationState(true);
    this.createDisp();
    this._dispCreator.switchCreationState(false);
    this._dispCreator.onLoadedSignal.remove(this.bindFunction(this.onAllClipsLoaded));
  };
  ASimpleComboboxComponentItem.prototype.createDisp = function () {};
  ASimpleComboboxComponentItem.prototype.triggerOnFillContentCompleted = function () {
    this._onFillContentCompleted.dispatch(this);
  };
  ASimpleComboboxComponentItem.prototype.triggerOnItemClicked = function () {
    this._onItemClicked.dispatch(this);
  };
  ASimpleComboboxComponentItem.prototype.onClick = function (__s17param0) {
    __s1param0.prototype.onClick.call(this, __s17param0);
    if (this.isEnabled) {
      this.triggerOnItemClicked();
    }
  };
  ASimpleComboboxComponentItem.prototype.onAllClipsLoaded = function () {
    this.triggerOnFillContentCompleted();
  };
  Object.defineProperty(ASimpleComboboxComponentItem.prototype, "onFillContentCompleted", {
    get: function () {
      return this._onFillContentCompleted;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASimpleComboboxComponentItem.prototype, "dispCreator", {
    get: function () {
      return this._dispCreator;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASimpleComboboxComponentItem.prototype, "onItemClicked", {
    get: function () {
      return this._onItemClicked;
    },
    enumerable: true,
    configurable: true
  });
  return ASimpleComboboxComponentItem;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.ASimpleComboboxComponentItem = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
