Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = createjs.EventDispatcher;
var __s0local1 = createjs.LoadQueue;
var __s0local2 = createjs.Event;
var __dep_class_LoadingItem = require("gge-module:class_LoadingItem");
var __s0local3 = require("gge-module:export_LoggerConfigurator").getLogger("BulkLoader");
var __s0local4 = function (__s1param0) {
  function BulkLoader(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.loadingList = new Map();
    __s3local0.loadQueue = new __s0local1();
    __s3local0._numConnections = 0;
    __s3local0.id = __s3param0;
    __s3local0.loadQueue.setMaxConnections(50);
    __s3local0.loadQueue.maintainScriptOrder = true;
    if (__s3param0 === "assetLoader") {
      window.AssetLoader = __s3local0.loadQueue;
    }
    __s3local0.loadQueue.on(BulkLoader.COMPLETE, function (__s6param0) {
      setTimeout(function () {
        __s3local0.dispatchEvent(new __s0local2(__s0local2.COMPLETE, true));
      }, 1);
    }, __s3local0);
    __s3local0.loadQueue.on(BulkLoader.ERROR, function (__s10param0) {
      setTimeout(function () {
        __s3local0.dispatchEvent(__s10param0);
      }, 1);
    }, __s3local0);
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BulkLoader, __s1param0);
  BulkLoader.prototype.start = function (__s14param0 = -1) {
    if (__s14param0 > 0) {
      this._numConnections = __s14param0;
    }
  };
  BulkLoader.prototype.add = function (__s17param0, __s17param1) {
    var __s17local0;
    __s17param1.src = __s17param0;
    if (this.isLoaded(__s17param0)) {
      if ((__s17local0 = BulkLoader.loadedList.get(__s17param0)).loaded) {
        var __s17local1 = new createjs.LoaderEvent(__s0local2.COMPLETE, false, true);
        __s17local1.result = __s17local0.getResult();
        __s17local1.url = __s17param0;
        __s17local1.rawResult = __s17local0.getResult(__s17param0, true);
        setTimeout(function () {
          __s17local0.dispatchEvent(__s17local1);
        }, 1);
      }
    } else {
      __s17local0 = this.loadQueue.loadFile(__s17param1);
    }
    return __s17local0;
  };
  BulkLoader.prototype.addAssetBundle = function (__s24param0, __s24param1) {
    var __s24local0 = this;
    if (this.loadingList.has(__s24param0)) {
      return this.loadingList.get(__s24param0);
    }
    var __s24local1 = __s24param0 + ".js";
    var __s24local2 = __s24param0 + ".json";
    var __s24local3 = new __dep_class_LoadingItem.LoadingItem();
    this.loadingList.set(__s24param0, __s24local3);
    var __s24local4 = 0;
    function __s24local5(__s27param0, __s27param1) {
      BulkLoader.loadedList.set(__s24param0 + "." + __s27param1.currentTarget._item.ext, __s27param1.currentTarget);
      if (++__s24local4 === 2) {
        var __s27local0 = new createjs.LoaderEvent(__s0local2.COMPLETE, false, true);
        __s27local0.url = __s24param0;
        __s0local3.debug("Finished loading: " + __s24param0);
        __s24local0.loadingList.delete(__s24param0);
        var __s27local1 = __s27param0.replace("Script", "");
        var __s27local2 = window.setInterval(function () {
          if (window.AssetLoader.getResult(__s27local1)) {
            window.clearInterval(__s27local2);
            __s24local3.dispatchEvent(__s27local0);
          }
        }, 2);
      }
    }
    if (this.isLoaded(__s24local1)) {
      __s24local4++;
    } else {
      var __s24local6 = this.add(__s24local1, {
        id: __s24param1.id + "Script",
        type: createjs.AbstractLoader.JAVASCRIPT,
        priority: __s24param1.priority || 1
      });
      __s24local6.addEventListener(__s0local2.COMPLETE, __s24local5.bind(this, __s24param1.id + "Script"));
      __s24local6.addEventListener(__s0local2.COMPLETE, function (__s35param0) {
        __s24local6.removeAllEventListeners();
      });
      __s24local6.addEventListener("error", function (__s37param0) {
        __s24local3.onLoadingErrorOccured();
        setTimeout(function () {
          if (__s24local3.errorTryCount < 3) {
            __s0local3.warn("A js loading error occured, but we will try again.");
            __s24local6.load();
          } else {
            __s24local3.dispatchEvent(__s37param0);
            __s24local6.removeAllEventListeners();
          }
        }, 1);
      });
      __s24local6.addEventListener("fileerror", function (__s43param0) {
        __s24local3.onLoadingErrorOccured();
        setTimeout(function () {
          if (__s24local3.errorTryCount < 3) {
            __s0local3.warn("A js loading error occured, but we will try again.");
            __s24local6.load();
          } else {
            __s24local3.dispatchEvent(__s43param0);
            __s24local6.removeAllEventListeners();
          }
        }, 1);
      });
    }
    if (this.isLoaded(__s24local2)) {
      __s24local4++;
    } else {
      var __s24local7 = this.add(__s24local2, {
        id: __s24param1.id,
        type: createjs.AbstractLoader.SPRITESHEET,
        priority: __s24param1.priority || 1
      });
      __s24local7.addEventListener(__s0local2.COMPLETE, __s24local5.bind(this, __s24param1.id));
      __s24local7.addEventListener(__s0local2.COMPLETE, function (__s51param0) {
        __s24local7.removeAllEventListeners();
      });
      __s24local7.addEventListener("error", function (__s53param0) {
        __s24local3.onLoadingErrorOccured();
        setTimeout(function () {
          if (__s24local3.errorTryCount < 3) {
            __s0local3.warn("A Spritesheet loading error occured, but we will try again.");
            __s24local7.load();
          } else {
            __s24local3.dispatchEvent(__s53param0);
            __s24local7.removeAllEventListeners();
          }
        }, 1);
      });
      __s24local7.addEventListener("fileerror", function (__s59param0) {
        __s24local3.onLoadingErrorOccured();
        setTimeout(function () {
          if (__s24local3.errorTryCount < 3) {
            __s0local3.warn("A Spritesheet loading error occured, but we will try again.");
            __s24local7.load();
          } else {
            __s24local3.dispatchEvent(__s59param0);
            __s24local7.removeAllEventListeners();
          }
        }, 1);
      });
    }
    if (this.isLoaded(__s24local1) && this.isLoaded(__s24local2)) {
      __s24local3._isLoaded = true;
    }
    return __s24local3;
  };
  Object.defineProperty(BulkLoader.prototype, "isRunning", {
    get: function () {
      return !this.loadQueue.loaded;
    },
    enumerable: true,
    configurable: true
  });
  BulkLoader.prototype.removeAll = function () {
    this.loadQueue.cancel();
    this.loadQueue.removeAll();
    this.loadQueue.close();
  };
  BulkLoader.prototype.isLoaded = function (__s70param0) {
    return BulkLoader.loadedList.has(__s70param0) || BulkLoader.loadedList.has(__s70param0 + ".js") && BulkLoader.loadedList.has(__s70param0 + ".json") && BulkLoader.loadedList.get(__s70param0 + ".json").loaded;
  };
  Object.defineProperty(BulkLoader.prototype, "isFinished", {
    get: function () {
      return this.loadQueue._loadQueue.length === 0;
    },
    enumerable: true,
    configurable: true
  });
  BulkLoader.loadedList = new Map();
  BulkLoader.COMPLETE = "complete";
  BulkLoader.PROGRESS = "progress";
  BulkLoader.ERROR = "error";
  BulkLoader.FILE_LOAD = "fileload";
  BulkLoader.FILE_PROGRESS = "fileprogress";
  return BulkLoader;
}(__s0local0);
exports.BulkLoader = __s0local4;
