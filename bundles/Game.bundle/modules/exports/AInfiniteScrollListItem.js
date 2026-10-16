Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_DispCreatorComponent = require("gge-module:export_DispCreatorComponent");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function AInfiniteScrollListItem() {
    var __s3local0 = __s1param0.call(this, new __s0local0()) || this;
    __s3local0._onDispLoadedSignal = new __dep_exact_5c7bc328fca9e4de.Signal(AInfiniteScrollListItem);
    __s3local0._position = new __s0local1(0, 0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AInfiniteScrollListItem, __s1param0);
  AInfiniteScrollListItem.prototype.init = function (__s5param0) {
    this._parentComponent = __s5param0;
    this._dispCreator = new __dep_export_DispCreatorComponent.DispCreatorComponent();
    this._dispCreator.cacheDisp = false;
    this._dispCreator.init(this.disp);
    this._dispCreator.dispContainer.mouseChildren = true;
    this._dispCreator.onLoadedSignal.add(this.bindFunction(this.onDispLoaded));
    this._dispCreator.switchCreationState(true);
    this._dispCreator.addClip(new __dep_exact_9e901e8e2483a22f.GoodgameDisplayObjectClipExternal(__s5param0.options.itemAssetClipName, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(__s5param0.options.itemAssetFileName), null, 0, false));
    this._dispCreator.switchCreationState(false);
  };
  AInfiniteScrollListItem.prototype.initLoaded = function () {};
  AInfiniteScrollListItem.prototype.updateWithNewData = function (__s9param0) {
    this._data = __s9param0;
    this.update();
  };
  AInfiniteScrollListItem.prototype.update = function () {
    var __s11local0 = this.data != null;
    this.disp.visible = __s11local0;
    if (__s11local0) {
      this.fill();
    }
  };
  AInfiniteScrollListItem.prototype.fill = function () {};
  AInfiniteScrollListItem.prototype.isDispLoaded = function () {
    return this._dispCreator.isLoaded;
  };
  AInfiniteScrollListItem.prototype.getItemMc = function () {
    if (this._dispCreator.clipList.length > 0) {
      return this._dispCreator.getClipMc(0);
    } else {
      return null;
    }
  };
  AInfiniteScrollListItem.prototype.onDispLoaded = function () {
    this.initLoaded();
    this.update();
    this.onDispLoadedSignal.dispatch(this);
  };
  Object.defineProperty(AInfiniteScrollListItem.prototype, "parentComponent", {
    get: function () {
      return this._parentComponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AInfiniteScrollListItem.prototype, "data", {
    get: function () {
      return this._data;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AInfiniteScrollListItem.prototype, "onDispLoadedSignal", {
    get: function () {
      return this._onDispLoadedSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AInfiniteScrollListItem.prototype, "position", {
    get: function () {
      return this._position;
    },
    set: function (__s32param0) {
      this._position = __s32param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AInfiniteScrollListItem.prototype, "dispCreator", {
    get: function () {
      return this._dispCreator;
    },
    enumerable: true,
    configurable: true
  });
  return AInfiniteScrollListItem;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.AInfiniteScrollListItem = __s0local2;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
