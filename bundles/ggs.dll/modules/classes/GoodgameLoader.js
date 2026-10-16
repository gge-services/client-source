Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_LoaderObject = require("gge-module:class_LoaderObject");
var __dep_class_LoadingQueueEndElement = require("gge-module:class_LoadingQueueEndElement");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __dep_export_CSSMouseCursor_1 = require("gge-module:export_CSSMouseCursor");
var __s0local0 = createjs.Event;
var __s0local1 = createjs.IOErrorEvent;
var __s0local2 = createjs.ProgressEvent;
var __s0local3 = createjs.SecurityErrorEvent;
var __dep_exact_becd07da092f4a09 = require("gge-module:exact_becd07da092f4a09");
var __s0local4 = function () {
  function GoodgameLoader(__s3param0, __s3param1 = true) {
    this._isLoading = false;
    this._loadingError = new __dep_exact_becd07da092f4a09.Signal();
    this._loadingQueueElementFinished = new __dep_exact_becd07da092f4a09.Signal();
    this._loadingQueueElementStarted = new __dep_exact_becd07da092f4a09.Signal();
    this._loaderMap = new Map();
    this._queue = [];
    this._finishedQueueEndElements = new Array();
    this.subloaderErrorLogging = true;
    this._loaderID = __s3param0;
    this.subloaderErrorLogging = __s3param1;
  }
  Object.defineProperty(GoodgameLoader.prototype, "loaderID", {
    get: function () {
      return this._loaderID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameLoader.prototype, "isLoading", {
    get: function () {
      return this._isLoading;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameLoader.prototype, "loadingError", {
    get: function () {
      return this._loadingError;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameLoader.prototype, "loadingQueueElementFinished", {
    get: function () {
      return this._loadingQueueElementFinished;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameLoader.prototype, "loadingQueueElementStarted", {
    get: function () {
      return this._loadingQueueElementStarted;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameLoader.prototype.addCookieSaverLoader = function (__s15param0, __s15param1 = "", __s15param2 = null, __s15param3 = null, __s15param4 = null, __s15param5 = false, __s15param6 = false) {
    if (this._loaderMap.get(__s15param0) && __s15param5 != 1) {
      return this._loaderMap.get(__s15param0);
    }
    if (this._loaderMap.get(__s15param0) && __s15param5 == 1) {
      var __s15local0 = this._loaderMap.get(__s15param0);
      var __s15local1 = __s15local0.loaderInstance;
      __s15local1.contentLoaderInfo.removeEventListener(__s0local1.IO_ERROR, __s15local0.bindFunction(__s15local0.handleLoaderIOError));
      __s15local1.contentLoaderInfo.removeEventListener(__s0local3.SECURITY_ERROR, __s15local0.bindFunction(__s15local0.handleLoaderSecurityError));
      __s15local1.contentLoaderInfo.removeEventListener(__s0local2.PROGRESS, __s15local0.bindFunction(__s15local0.onLoadProgress));
      __s15local1.contentLoaderInfo.removeEventListener(__s0local0.COMPLETE, __s15local0.bindFunction(__s15local0.onComplete));
      __s15local0.dispose();
    }
    if (!__s15param1) {
      return null;
    }
    __s15param2 = __s15param2 || new __dep_export_CSSMouseCursor_1.URLRequest(__s15param1);
    var __s15local2 = new __dep_export_CSSMouseCursor.Loader();
    var __s15local3 = new __dep_class_LoaderObject.LoaderObject(__s15local2, __s15param0, __s15param2, __s15param4);
    __s15local3.loaderObjectFinished.add(this.bindFunction(this.queueElementHasFinished));
    __s15local3.loadingProgressStarted.add(this.bindFunction(this.queueElementNowLoading));
    __s15local3.loadingError.add(this.loadingError.bindFunction(this.loadingError.dispatch));
    __s15local2.contentLoaderInfo.addEventListener(__s0local1.IO_ERROR, __s15local3.bindFunction(__s15local3.handleLoaderIOError));
    __s15local2.contentLoaderInfo.addEventListener(__s0local3.SECURITY_ERROR, __s15local3.bindFunction(__s15local3.handleLoaderSecurityError));
    __s15local2.contentLoaderInfo.addEventListener(__s0local2.PROGRESS, __s15local3.bindFunction(__s15local3.onLoadProgress));
    __s15local2.contentLoaderInfo.addEventListener(__s0local0.COMPLETE, __s15local3.bindFunction(__s15local3.onComplete));
    this._loaderMap.set(__s15param0, __s15local3);
    this._queue.push(__s15local3);
    this.startLoading();
    return __s15local3;
  };
  GoodgameLoader.prototype.addXMLLoader = function (__s20param0, __s20param1, __s20param2, __s20param3 = null, __s20param4 = false) {
    if (!this._loaderMap.get(__s20param0) || __s20param4 == 1) {
      if (this._loaderMap.get(__s20param0) && __s20param4 == 1) {
        var __s20local0 = this._loaderMap.get(__s20param0);
        var __s20local1 = __s20local0.loaderInstance;
        __s20local1.removeEventListener("complete", __s20local0.bindFunction(__s20local0.onComplete));
        __s20local1.removeEventListener("progress", __s20local0.bindFunction(__s20local0.onLoadProgress));
        __s20local1.removeEventListener("error", __s20local0.bindFunction(__s20local0.handleLoaderIOError));
        __s20local0.dispose();
      }
      var __s20local2 = new __dep_export_CSSMouseCursor_1.URLRequest(__s20param1);
      var __s20local3 = new createjs.LoadItem();
      __s20local3.id = __s20param0;
      __s20local3.src = __s20param1;
      __s20local3.type = __s20param2;
      var __s20local4 = new createjs.LoadQueue();
      var __s20local5 = new __dep_class_LoaderObject.LoaderObject(__s20local4, __s20param0, __s20local2, __s20param3);
      __s20local5.loaderObjectFinished.add(this.bindFunction(this.queueElementHasFinished));
      __s20local5.loadingProgressStarted.add(this.bindFunction(this.queueElementNowLoading));
      __s20local5.loadingError.add(this.loadingError.bindFunction(this.loadingError.dispatch));
      __s20local4.addEventListener("complete", __s20local5.bindFunction(__s20local5.onComplete));
      __s20local4.addEventListener("progress", __s20local5.bindFunction(__s20local5.onLoadProgress));
      __s20local4.addEventListener("error", __s20local5.bindFunction(__s20local5.handleLoaderIOError));
      __s20local4.loadFile(__s20local3, true);
      this._loaderMap.set(__s20param0, __s20local5);
      this._queue.push(__s20local5);
      this.startLoading();
    }
  };
  GoodgameLoader.prototype.addLoaderInfoObject = function (__s24param0, __s24param1, __s24param2 = null) {
    if (!this._loaderMap.get(__s24param0)) {
      var __s24local0 = new __dep_class_LoaderObject.LoaderObject(__s24param1, __s24param0, null, __s24param2);
      __s24local0.loaderObjectFinished.add(this.bindFunction(this.queueElementHasFinished));
      __s24local0.loadingProgressStarted.add(this.bindFunction(this.queueElementNowLoading));
      __s24local0.loadingError.add(this.loadingError.bindFunction(this.loadingError.dispatch));
      __s24param1.addEventListener(__s0local2.PROGRESS, __s24local0.bindFunction(__s24local0.onLoadProgress));
      __s24param1.addEventListener(__s0local0.COMPLETE, __s24local0.bindFunction(__s24local0.onComplete));
      this._loaderMap.set(__s24param0, __s24local0);
      this._queue.push(__s24local0);
      this.startLoading();
    }
  };
  GoodgameLoader.prototype.addURLRequest = function (__s27param0, __s27param1, __s27param2 = null) {
    if (!this._loaderMap.get(__s27param0)) {
      var __s27local0 = new __dep_export_CSSMouseCursor_1.URLLoader();
      var __s27local1 = new __dep_class_LoaderObject.LoaderObject(__s27local0, __s27param0, __s27param1, __s27param2);
      __s27local1.loaderObjectFinished.add(this.bindFunction(this.queueElementHasFinished));
      __s27local1.loadingProgressStarted.add(this.bindFunction(this.queueElementNowLoading));
      __s27local1.loadingError.add(this.loadingError.bindFunction(this.loadingError.dispatch));
      __s27local0.addEventListener(__s0local1.IO_ERROR, __s27local1.bindFunction(__s27local1.handleLoaderIOError));
      __s27local0.addEventListener(__s0local3.SECURITY_ERROR, __s27local1.bindFunction(__s27local1.handleLoaderSecurityError));
      __s27local0.addEventListener(__s0local2.PROGRESS, __s27local1.bindFunction(__s27local1.onLoadProgress));
      __s27local0.addEventListener(__s0local0.COMPLETE, __s27local1.bindFunction(__s27local1.onComplete));
      this._loaderMap.set(__s27param0, __s27local1);
      this._queue.push(__s27local1);
      this.startLoading();
    }
  };
  GoodgameLoader.prototype.addQueueEndElement = function (__s30param0, __s30param1 = null) {
    var __s30local0 = new __dep_class_LoadingQueueEndElement.LoadingQueueEndElement(__s30param0, __s30param1);
    __s30local0.loaderObjectFinished.add(this.bindFunction(this.queueElementHasFinished));
    this._queue.push(__s30local0);
    this.startLoading();
  };
  GoodgameLoader.prototype.hasQueEndElementFinished = function (__s32param0) {
    return this._finishedQueueEndElements[__s32param0] != null;
  };
  GoodgameLoader.prototype.getLoaderData = function (__s34param0) {
    var __s34local0 = this._loaderMap.get(__s34param0);
    if (!__s34local0) {
      return null;
    }
    if (__s34local0.currentState != __dep_class_LoaderObject.LoaderObject.STATE_LOADING_PROGRESS_FINISHED) {
      return null;
    }
    if (__s34local0.loaderInstance instanceof __dep_export_CSSMouseCursor_1.URLLoader) {
      return __s34local0.loaderInstance.data;
    }
    if (__s34local0.loaderInstance instanceof __dep_export_CSSMouseCursor.Loader) {
      return __s34local0.loaderInstance.contentLoaderInfo.content;
    }
    if (__s34local0.loaderInstance instanceof createjs.LoadQueue) {
      var __s34local1 = __s34local0.loaderInstance.getItems(true);
      if (__s34local1.length > 0) {
        return __s34local1[0].rawResult;
      } else {
        return null;
      }
    }
    return null;
  };
  GoodgameLoader.prototype.removeLoaderData = function (__s43param0) {
    return this._loaderMap.delete(__s43param0);
  };
  GoodgameLoader.prototype.getLoaderObject = function (__s45param0) {
    var __s45local0 = this._loaderMap.get(__s45param0);
    return __s45local0 || null;
  };
  GoodgameLoader.prototype.hasSubloaderFinished = function (__s47param0) {
    var __s47local0 = this._loaderMap.get(__s47param0);
    return !!__s47local0 && __s47local0.currentState == __dep_class_LoaderObject.LoaderObject.STATE_LOADING_PROGRESS_FINISHED;
  };
  GoodgameLoader.prototype.getCompleteProgress = function () {
    var __s49local0;
    var __s49local1;
    for (var __s49local2 = 0, __s49local3 = Array.from(this._loaderMap.values()); __s49local2 < __s49local3.length; __s49local2++) {
      var __s49local4 = __s49local3[__s49local2];
      __s49local0 += __s49local4.totalBytes;
      __s49local1 += __s49local4.loadedBytes;
    }
    return __s49local1 / __s49local0;
  };
  GoodgameLoader.prototype.getProgressOfSubloader = function (__s53param0) {
    var __s53local0 = this._loaderMap.get(__s53param0);
    if (__s53local0) {
      return __s53local0.loadedBytes / __s53local0.totalBytes;
    } else {
      return -1;
    }
  };
  GoodgameLoader.prototype.getProgressOfActualSubloader = function () {
    if (this._queue.length > 0) {
      var __s57local0 = this._queue[0];
      if (__s57local0) {
        if (__s57local0.loadedBytes != 0 || __s57local0.totalBytes != 0) {
          return __s57local0.loadedBytes / __s57local0.totalBytes;
        } else {
          return 0;
        }
      } else {
        return -1;
      }
    }
    return 0;
  };
  GoodgameLoader.prototype.calculateDataRate = function () {
    var __s64local0 = (Date.now() - this._loadingStartTime) / 1000;
    var __s64local1 = 0;
    for (var __s64local2 = 0, __s64local3 = Array.from(this._loaderMap.values()); __s64local2 < __s64local3.length; __s64local2++) {
      __s64local1 += __s64local3[__s64local2].loadedBytes / 1024;
    }
    return Math.round(__s64local1 / __s64local0);
  };
  GoodgameLoader.prototype.hasSubloader = function (__s68param0) {
    return !!this._loaderMap.get(__s68param0);
  };
  Object.defineProperty(GoodgameLoader.prototype, "elementsInQueue", {
    get: function () {
      return this._queue.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameLoader.prototype, "elementsAlreadyLoaded", {
    get: function () {
      var __s72local0 = 0;
      for (var __s72local1 = 0, __s72local2 = Array.from(this._loaderMap.values()); __s72local1 < __s72local2.length; __s72local1++) {
        __s72local2[__s72local1];
        __s72local0++;
      }
      return __s72local0 - this._queue.length;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameLoader.prototype.dispose = function () {
    this._loadingQueueElementFinished.removeAll();
    this._loadingQueueElementStarted.removeAll();
    for (var __s76local0 = 0, __s76local1 = Array.from(this._loaderMap.keys()); __s76local0 < __s76local1.length; __s76local0++) {
      var __s76local2 = __s76local1[__s76local0];
      this._loaderMap.get(__s76local2).dispose();
      this._loaderMap.delete(__s76local2);
    }
    this._loaderMap = null;
  };
  GoodgameLoader.prototype.startLoading = function () {
    if (this._queue.length > 1) {
      this._isLoading = true;
    } else {
      this._isLoading = false;
    }
    if (!this._isLoading) {
      if (this._queue.length > 0) {
        if (this.elementsAlreadyLoaded == 0) {
          this._loadingStartTime = Date.now();
        }
        this._queue[0].startLoadingObject(this.subloaderErrorLogging);
      }
    }
  };
  GoodgameLoader.prototype.queueElementNowLoading = function (__s87param0) {
    this._loadingQueueElementStarted.dispatch(this._loaderID, __s87param0);
  };
  GoodgameLoader.prototype.queueElementHasFinished = function (__s89param0) {
    if (this._queue.length !== 0 && this._queue[0].loaderName === __s89param0) {
      var __s89local0 = this._queue.shift();
      if (__s89local0 instanceof __dep_class_LoadingQueueEndElement.LoadingQueueEndElement) {
        __s89local0.onComplete(null);
        __s89local0.dispose();
        this._finishedQueueEndElements[__s89local0.loaderName] = __s89local0;
        this._isLoading = false;
      }
      var __s89local1 = __s89local0.loaderInstance;
      if (__s89local1 != null) {
        __s89local1.removeEventListener(__s0local1.IO_ERROR, __s89local0.bindFunction(__s89local0.handleLoaderIOError));
        __s89local1.removeEventListener(__s0local3.SECURITY_ERROR, __s89local0.bindFunction(__s89local0.handleLoaderSecurityError));
        __s89local1.removeEventListener(__s0local2.PROGRESS, __s89local0.bindFunction(__s89local0.onLoadProgress));
        __s89local1.removeEventListener(__s0local0.COMPLETE, __s89local0.bindFunction(__s89local0.onComplete));
      }
      this._loadingQueueElementFinished.dispatch(this._loaderID, __s89param0);
      if (this._queue.length > 0) {
        this._queue[0].startLoadingObject(this.subloaderErrorLogging);
      }
    }
  };
  return GoodgameLoader;
}();
exports.GoodgameLoader = __s0local4;
