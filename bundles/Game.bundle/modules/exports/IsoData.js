Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AAreaDataComponent = require("gge-module:export_AAreaDataComponent");
var __dep_export_IsoUpdaterData = require("gge-module:export_IsoUpdaterData");
var __s0local0 = function (__s1param0) {
  function IsoData() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoData, __s1param0);
  IsoData.prototype.init = function (__s5param0) {
    __s1param0.prototype.init.call(this, __s5param0);
    this._objects = new __dep_export_IsoDataObjects.IsoDataObjects(this);
    this._grid = new __dep_export_IsoDataGrid.IsoDataGrid(this);
    this._updater = new __dep_export_IsoUpdaterData.IsoUpdaterData(this);
    this._updater.init();
  };
  IsoData.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this._updater.destroy();
    this._updater = null;
  };
  Object.defineProperty(IsoData.prototype, "updater", {
    get: function () {
      return this._updater;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoData.prototype, "objects", {
    get: function () {
      return this._objects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoData.prototype, "grid", {
    get: function () {
      return this._grid;
    },
    enumerable: true,
    configurable: true
  });
  return IsoData;
}(__dep_export_AAreaDataComponent.AAreaDataComponent);
exports.IsoData = __s0local0;
var __dep_export_IsoDataGrid = require("gge-module:export_IsoDataGrid");
var __dep_export_IsoDataObjects = require("gge-module:export_IsoDataObjects");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IAreaDataComponent");
