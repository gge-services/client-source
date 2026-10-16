Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_IOErrorLOFactory = require("gge-module:class_IOErrorLOFactory");
var __dep_class_SecurityErrorLOFactory = require("gge-module:class_SecurityErrorLOFactory");
var __dep_class_ExternalLog = require("gge-module:class_ExternalLog");
var __dep_exact_becd07da092f4a09 = require("gge-module:exact_becd07da092f4a09");
var __s0local0 = function () {
  function LoadingQueueEndElement(__s3param0, __s3param1) {
    this._loaderObjectFinished = new __dep_exact_becd07da092f4a09.Signal();
    this.elementName = __s3param0;
    this.finishCallback = __s3param1;
  }
  Object.defineProperty(LoadingQueueEndElement.prototype, "loaderObjectFinished", {
    get: function () {
      return this._loaderObjectFinished;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoadingQueueEndElement.prototype, "loaderName", {
    get: function () {
      return this.elementName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoadingQueueEndElement.prototype, "totalBytes", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoadingQueueEndElement.prototype, "loadedBytes", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  LoadingQueueEndElement.prototype.startLoadingObject = function (__s13param0) {
    this._loaderObjectFinished.dispatch(this.elementName);
  };
  LoadingQueueEndElement.prototype.onLoadProgress = function (__s15param0) {};
  LoadingQueueEndElement.prototype.handleLoaderSecurityError = function (__s17param0) {
    __dep_class_ExternalLog.ExternalLog.logger.log(new __dep_class_SecurityErrorLOFactory.SecurityErrorLOFactory(__dep_class_SecurityErrorLOFactory.SecurityErrorLOFactory.GENERAL_LOADER_SECURITY_ERROR, __s17param0.text, __s17param0.target.url));
  };
  LoadingQueueEndElement.prototype.handleLoaderIOError = function (__s19param0) {
    __dep_class_ExternalLog.ExternalLog.logger.log(new __dep_class_IOErrorLOFactory.IOErrorLOFactory(__dep_class_IOErrorLOFactory.IOErrorLOFactory.GENERAL_LOADER_IO_ERROR, __s19param0.text, __s19param0.target.url));
  };
  LoadingQueueEndElement.prototype.onComplete = function (__s21param0) {
    if (this.finishCallback != null) {
      this.finishCallback();
    }
  };
  Object.defineProperty(LoadingQueueEndElement.prototype, "loaderInstance", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  LoadingQueueEndElement.prototype.dispose = function () {
    this._loaderObjectFinished.removeAll();
  };
  return LoadingQueueEndElement;
}();
exports.LoadingQueueEndElement = __s0local0;
