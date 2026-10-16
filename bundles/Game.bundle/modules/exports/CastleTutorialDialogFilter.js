Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleTutorialDialogFilter(__s3param0) {
    this._allowedDialogs = [];
    this._active = false;
    if (__s3param0 == null) {
      throw new Error("do not instantiate, use instance getter");
    }
  }
  Object.defineProperty(CastleTutorialDialogFilter, "instance", {
    get: function () {
      CastleTutorialDialogFilter._instance ||= new CastleTutorialDialogFilter(new __s0local1());
      return CastleTutorialDialogFilter._instance;
    },
    enumerable: true,
    configurable: true
  });
  CastleTutorialDialogFilter.prototype.replace = function (__s8param0) {
    if (!__s8param0) {
      throw new ReferenceError("target must not be null!");
    }
    this.clear();
    this.add(__s8param0);
  };
  CastleTutorialDialogFilter.prototype.add = function (__s11param0) {
    if (!__s11param0) {
      throw new ReferenceError("target must not be null!");
    }
    if (this._allowedDialogs.indexOf(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog) < 0) {
      this._allowedDialogs.push(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog);
    }
    this._allowedDialogs.push(__s11param0);
    this._active = true;
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideAllDialogsExcept(this._allowedDialogs);
  };
  CastleTutorialDialogFilter.prototype.allowNoDialogs = function () {
    this.clear();
    this._active = true;
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideAllDialogs();
  };
  CastleTutorialDialogFilter.prototype.clear = function () {
    this._allowedDialogs = [];
    this._active = false;
  };
  CastleTutorialDialogFilter.prototype.isActive = function () {
    return this._active;
  };
  CastleTutorialDialogFilter.prototype.isAllowed = function (__s21param0) {
    return !this._active || this._allowedDialogs.indexOf(__s21param0) > -1;
  };
  CastleTutorialDialogFilter.prototype.isInAllowedDialogs = function (__s23param0) {
    return this._active && this._allowedDialogs.indexOf(__s23param0) > -1;
  };
  return CastleTutorialDialogFilter;
}();
exports.CastleTutorialDialogFilter = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleExternalPreloaderDialog = require("gge-module:export_CastleExternalPreloaderDialog");
var __s0local1 = function () {
  return function SingletonBlocker() {};
}();
exports.SingletonBlocker = __s0local1;
