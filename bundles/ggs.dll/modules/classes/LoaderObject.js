Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_SecurityErrorLOFactory = require("gge-module:class_SecurityErrorLOFactory");
var __dep_class_ExternalLog = require("gge-module:class_ExternalLog");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __dep_exact_becd07da092f4a09 = require("gge-module:exact_becd07da092f4a09");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __s0local0 = createjs.TimerEvent;
var __s0local1 = __dep_export_LoggerConfigurator.getLogger("LoaderObject");
var __s0local2 = function () {
  function LoaderObject(__s3param0, __s3param1, __s3param2, __s3param3 = null) {
    this._loaderObjectFinished = new __dep_exact_becd07da092f4a09.Signal();
    this.loadingProgressStarted = new __dep_exact_becd07da092f4a09.Signal();
    this.loadingError = new __dep_exact_becd07da092f4a09.Signal();
    this.loadingProgressDeltaTimer = new __dep_export_CSSMouseCursor.Timer(1000);
    this.loadingProgressDeltaNullTicks = 0;
    this.subloaderErrorLogging = true;
    this._loaderInstance = __s3param0;
    this._loaderName = __s3param1;
    this._request = __s3param2;
    this._onCompleteCallback = __s3param3 !== null ? this.bindFunction(__s3param3) : null;
    this._currentState = LoaderObject.STATE_IDLE;
    this.loadingProgressDeltaTimer.addEventListener(__s0local0.TIMER, this.bindFunction(this.handleLoadingProgressDeltaTimerTick));
  }
  Object.defineProperty(LoaderObject.prototype, "currentState", {
    get: function () {
      return this._currentState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoaderObject.prototype, "isLoadingFinished", {
    get: function () {
      return this._currentState == LoaderObject.STATE_LOADING_PROGRESS_FINISHED;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoaderObject.prototype, "loaderName", {
    get: function () {
      return this._loaderName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoaderObject.prototype, "loaderInstance", {
    get: function () {
      return this._loaderInstance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoaderObject.prototype, "totalBytes", {
    get: function () {
      if (this._currentState == LoaderObject.STATE_LOADING_PROGRESS_STARTED || this._currentState == LoaderObject.STATE_LOADING_PROGRESS_FINISHED) {
        return this._totalBytes;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoaderObject.prototype, "loadedBytes", {
    get: function () {
      if (this._currentState == LoaderObject.STATE_LOADING_PROGRESS_STARTED || this._currentState == LoaderObject.STATE_LOADING_PROGRESS_FINISHED) {
        return this._loadedBytes;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoaderObject.prototype, "loaderObjectFinished", {
    get: function () {
      return this._loaderObjectFinished;
    },
    enumerable: true,
    configurable: true
  });
  LoaderObject.prototype.dispose = function () {
    this._loaderObjectFinished.removeAll();
    this.loadingProgressStarted.removeAll();
    this._onCompleteCallback = null;
    this._loaderInstance = null;
    this.removeTimer();
  };
  LoaderObject.prototype.startLoadingObject = function (__s25param0) {
    this.subloaderErrorLogging = __s25param0;
    this.loadingProgressDeltaTimer.start();
    if (this._loaderInstance instanceof __dep_export_CSSMouseCursor.Loader) {
      this._loaderInstance.load(this._request);
    } else if (this._loaderInstance instanceof __dep_export_CSSMouseCursor.URLLoader) {
      this._loaderInstance.load(this._request);
    }
  };
  LoaderObject.prototype.onLoadProgress = function (__s29param0) {};
  LoaderObject.prototype.handleLoadingProgressDeltaTimerTick = function (__s31param0) {
    if (this.loadingProgressDelta <= 0) {
      this.loadingProgressDeltaNullTicks++;
    } else {
      this.loadingProgressDeltaNullTicks = 0;
    }
    if (this.loadingProgressDeltaNullTicks >= 5) {
      this.subloaderErrorLogging;
    }
  };
  LoaderObject.prototype.handleLoaderSecurityError = function (__s36param0) {
    if (this.subloaderErrorLogging) {
      __dep_class_ExternalLog.ExternalLog.logger.log(new __dep_class_SecurityErrorLOFactory.SecurityErrorLOFactory(__dep_class_SecurityErrorLOFactory.SecurityErrorLOFactory.GENERAL_LOADER_SECURITY_ERROR, __s36param0.text, this._request.url));
    }
    this._currentState = LoaderObject.STATE_LOADING_ERROR;
    this.loadingError.dispatch(this._loaderName, __s36param0);
    this.loaderObjectFinished.dispatch(this._loaderName);
    this.removeTimer();
  };
  LoaderObject.prototype.handleLoaderIOError = function (__s39param0) {
    this.subloaderErrorLogging;
    this._currentState = LoaderObject.STATE_LOADING_ERROR;
    this.loadingError.dispatch(this._loaderName, __s39param0);
    this.loaderObjectFinished.dispatch(this._loaderName);
    this.removeTimer();
  };
  LoaderObject.prototype.onComplete = function (__s41param0) {
    this._currentState = LoaderObject.STATE_LOADING_PROGRESS_FINISHED;
    this._loaderObjectFinished.dispatch(this._loaderName);
    this.removeTimer();
    if (this._onCompleteCallback != null) {
      try {
        this._onCompleteCallback(this.loaderName);
      } catch (__s45local0) {
        __s0local1.error(__s45local0);
      }
    }
  };
  LoaderObject.prototype.removeTimer = function () {
    if (this.loadingProgressDeltaTimer) {
      this.loadingProgressDeltaTimer.stop();
      this.loadingProgressDeltaTimer.removeEventListener(__s0local0.TIMER, this.bindFunction(this.handleLoadingProgressDeltaTimerTick));
    }
  };
  LoaderObject.STATE_IDLE = 1;
  LoaderObject.STATE_LOADING_PROGRESS_INITIATED = 2;
  LoaderObject.STATE_LOADING_PROGRESS_STARTED = 3;
  LoaderObject.STATE_LOADING_PROGRESS_FINISHED = 4;
  LoaderObject.STATE_LOADING_ERROR = 5;
  return LoaderObject;
}();
exports.LoaderObject = __s0local2;
