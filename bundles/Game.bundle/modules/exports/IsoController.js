Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.TimerEvent;
var __s0local1 = function () {
  function IsoController() {
    this._updateTimer = new __dep_exact_81dacdf05bd32292.Timer(1000, 0);
    this._updateTimer.start();
    this._updateTimer.addEventListener(__s0local0.TIMER, this.bindFunction(this.onTimerUpdate));
    this._processor = new __dep_export_IsoCommandProcessor.IsoCommandProcessor();
    this._server = new __dep_export_IsoServerCommands.IsoServerCommands();
    this._keyWords = new __dep_export_IsoKeyWordManager.IsoKeyWordManager();
  }
  IsoController.prototype.destroy = function () {
    if (this._updateTimer) {
      this._updateTimer.removeEventListener(__s0local0.TIMER, this.bindFunction(this.onTimerUpdate));
      this._updateTimer = null;
    }
    this.unregisterViewUpdater();
    this._keyWords = null;
    this._server = null;
    this._processor = null;
  };
  IsoController.prototype.registerViewUpdater = function () {
    if (this.viewUpdater) {
      this.unregisterViewUpdater();
    }
    this._viewUpdater = new __dep_export_IsoUpdaterView.IsoUpdaterView();
    this.viewUpdater.init();
    return this.viewUpdater;
  };
  IsoController.prototype.unregisterViewUpdater = function () {
    if (this.viewUpdater) {
      this.viewUpdater.destroy();
    }
    this._viewUpdater = null;
  };
  Object.defineProperty(IsoController.prototype, "dataUpdater", {
    get: function () {
      var __s14local0 = __dep_export_Iso.Iso.data;
      if (__s14local0) {
        return __s14local0.updater;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  IsoController.prototype.onTimerUpdate = function (__s18param0) {
    var __s18local0 = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
    if (__dep_export_IsoHelper.IsoHelper.view.isInIsoScreen) {
      if (this.dataUpdater) {
        this.dataUpdater.update(__s18local0);
      }
      if (this.viewUpdater && this.viewUpdater.isoRenderer.isReady) {
        this.viewUpdater.updateOnTimer(__s18local0);
      }
    }
  };
  Object.defineProperty(IsoController.prototype, "viewUpdater", {
    get: function () {
      return this._viewUpdater;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoController.prototype, "keyWords", {
    get: function () {
      return this._keyWords;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoController.prototype, "processor", {
    get: function () {
      return this._processor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoController.prototype, "server", {
    get: function () {
      return this._server;
    },
    enumerable: true,
    configurable: true
  });
  return IsoController;
}();
exports.IsoController = __s0local1;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_IsoCommandProcessor = require("gge-module:export_IsoCommandProcessor");
var __dep_export_IsoKeyWordManager = require("gge-module:export_IsoKeyWordManager");
var __dep_export_IsoUpdaterView = require("gge-module:export_IsoUpdaterView");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoServerCommands = require("gge-module:export_IsoServerCommands");
