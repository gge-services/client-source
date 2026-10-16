Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleDialogVO = require("gge-module:export_CastleDialogVO");
var __s0local0 = function (__s1param0) {
  function CastleDialogHandler() {
    var __s3local0 = __s1param0.call(this) || this;
    if (__dep_exact_9e901e8e2483a22f.BasicDialogHandler.dialogHandler) {
      throw new Error("Calling constructor not allowed! Use getInstance instead.");
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDialogHandler, __s1param0);
  CastleDialogHandler.prototype.init = function () {
    this._dialogsRegistered = [];
    this._dialogsDisplayed = [];
    this.initDialogsBehavior();
  };
  CastleDialogHandler.prototype.initDialogsBehavior = function () {
    this._dialogsBehavior = new Map();
    this._dialogsBehavior.set(__dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_DEFAULT, new __dep_export_CastleDefaultDialogBehavior.CastleDefaultDialogBehavior());
    this._dialogsBehavior.set(__dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_MODAL, new __dep_export_CastleModalDialogBehavior.CastleModalDialogBehavior());
    this._dialogsBehavior.set(__dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PRELOADER, new __dep_export_CastlePreloaderDialogBehavior.CastlePreloaderDialogBehavior());
    this._dialogsBehavior.set(__dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE, new __dep_export_CastleSingleDialogBehavior.CastleSingleDialogBehavior());
    this._dialogsBehavior.set(__dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_MODAL_SINGLE, new __dep_export_CastleModalSingleDialogBehavior.CastleModalSingleDialogBehavior());
    this._dialogsBehavior.set(__dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_LOGIN, new __dep_export_CastleLoginDialogBehavior.CastleLoginDialogBehavior());
    this._dialogsBehavior.set(__dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE_INSTANCE, new __dep_export_SingleInstanceDialogBehavior.SingleInstanceDialogBehavior());
    var __s8local0 = new __dep_export_CastlePaymentDialogBehavior.CastlePaymentDialogBehavior();
    this._dialogsBehavior.set(__dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIVATE_PRIME_TIME, __s8local0);
    this._dialogsBehavior.set(__dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_TIME, __s8local0);
    this._dialogsBehavior.set(__dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIVATE_PRIME_DAY, __s8local0);
    this._dialogsBehavior.set(__dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_DAY, __s8local0);
    this._dialogsBehavior.set(__dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIVATE_PRIME_SALE, __s8local0);
    this._dialogsBehavior.set(__dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_SALE, __s8local0);
    this._dialogsBehavior.set(__dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PAYMENT_DEFAULT, __s8local0);
  };
  CastleDialogHandler.getInstance = function () {
    __dep_exact_9e901e8e2483a22f.BasicDialogHandler.dialogHandler ||= new CastleDialogHandler();
    if (__dep_exact_9e901e8e2483a22f.BasicDialogHandler.dialogHandler instanceof CastleDialogHandler) {
      return __dep_exact_9e901e8e2483a22f.BasicDialogHandler.dialogHandler;
    } else {
      return null;
    }
  };
  CastleDialogHandler.prototype.registerDialogsWithType = function (__s14param0, __s14param1 = null, __s14param2 = false, __s14param3 = __dep_exact_f855840627e6e145.int(__dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_LOW), __s14param4 = 0, __s14param5 = __dep_exact_f855840627e6e145.int(__dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_DEFAULT)) {
    if (require("gge-module:export_DialogBlocker").DialogBlocker.isAllowedToShowDialog(__s14param0, __s14param1)) {
      if (__s14param5 == __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_DEFAULT && typeof __s14param0 == "function" && __s14param0.hasOwnProperty("DEFAULT_BEHAVIOR")) {
        __s14param5 = __dep_exact_f855840627e6e145.int(__s14param0.DEFAULT_BEHAVIOR);
      }
      var __s14local0 = new __dep_export_CastleDialogVO.CastleDialogVO();
      __s14local0.key = __s14param0;
      __s14local0.properties = __s14param1;
      __s14local0.blockDialogs = __s14param2;
      __s14local0.delay = __s14param4;
      __s14local0.priority = __s14param3;
      __s14local0.type = __s14param5;
      if (this._dialogsBehavior.get(__s14local0.type).checkRegisterBehavior(__s14local0, this._dialogsRegistered, this._dialogsDisplayed)) {
        if (this._dialogsBehavior.get(__s14local0.type).checkRemoveDisplayedWhenRegisterBehavior() && __dep_exact_81dacdf05bd32292.instanceOfClass(this.layoutManager, "CastleLayoutManager")) {
          this.layoutManager.hideDialogWithDialogKey(__s14local0.key);
        }
        this._dialogsRegistered.push(__s14local0);
        __dep_exact_9e901e8e2483a22f_2.VectorSortHelper.sort(this._dialogsRegistered, this.bindFunction(this.sortCastleDialogs));
      }
    }
  };
  CastleDialogHandler.prototype.registerDialogs = function (__s20param0, __s20param1 = null, __s20param2 = false, __s20param3 = __dep_exact_f855840627e6e145.int(__dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_LOW), __s20param4 = 0) {
    this.registerDialogsWithType(__s20param0, __s20param1, __s20param2, __s20param3, __s20param4, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_LOGIN);
  };
  CastleDialogHandler.prototype.registerDefaultDialogs = function (__s22param0, __s22param1 = null, __s22param2 = false, __s22param3 = __dep_exact_f855840627e6e145.int(__dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_LOW), __s22param4 = 0) {
    this.registerDialogsWithType(__s22param0, __s22param1, __s22param2, __s22param3, __s22param4, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_DEFAULT);
  };
  CastleDialogHandler.prototype.registerDialogsWithTypeAndDefaultValues = function (__s24param0, __s24param1 = null, __s24param2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_DEFAULT)) {
    this.registerDialogsWithType(__s24param0, __s24param1, false, __dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_LOW, 0, __s24param2);
  };
  CastleDialogHandler.prototype.sortCastleDialogs = function (__s26param0, __s26param1) {
    if (__s26param0.priority > __s26param1.priority) {
      return -1;
    } else if (__s26param0.priority < __s26param1.priority) {
      return 1;
    } else {
      return 0;
    }
  };
  CastleDialogHandler.prototype.forceShowDialog = function (__s31param0) {
    if (this.isThereADialog && this._dialogsRegistered != null) {
      for (var __s31local0 = 0, __s31local1 = this._dialogsRegistered; __s31local0 < __s31local1.length; __s31local0++) {
        var __s31local2 = __s31local1[__s31local0];
        if (__s31local2 !== undefined && __s31local2.key == __s31param0) {
          __dep_exact_9e901e8e2483a22f_3.debug("Using CastleDialogHandlerForcedShowDialog");
          this._forcedDialog = this._dialogsRegistered.shift();
          this.blockDialogs = this.blockDialogs || this._forcedDialog.blockDialogs;
          this._dialogsDisplayed.push(this._forcedDialog);
          this.layoutManager.showDialog(this._forcedDialog.key, this._forcedDialog.properties, null);
        }
      }
    }
  };
  CastleDialogHandler.prototype.showDialog = function (__s37param0 = 0) {
    if (this.isThereADialog) {
      this.performDialogDisplay();
    }
  };
  CastleDialogHandler.prototype.showHelper = function (__s40param0, __s40param1, __s40param2 = null) {
    CastleDialogHandler.getInstance().registerDialogsWithType(__dep_export_CastleHelperDialog.CastleHelperDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardOkDialogProperties(__s40param0, __s40param1, __s40param2), false, __dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_LOW, 0, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_MODAL);
  };
  CastleDialogHandler.prototype.performDialogDisplay = function () {
    for (var __s42local0 = 0; __s42local0 < this._dialogsRegistered.length;) {
      var __s42local1 = this._dialogsRegistered[__s42local0];
      if (this._dialogsBehavior.get(__s42local1.type).checkDisplayBehavior(__s42local1, this._dialogsRegistered, this._dialogsDisplayed, __s42local0, this.blockDialogs)) {
        this._dialogVO = __s42local1;
        this._dialogsRegistered.splice(__s42local0, 1);
        if (this._dialogsBehavior.get(this._dialogVO.type).canModifyBlockDialogs()) {
          this.blockDialogs = this._dialogVO.blockDialogs;
        }
        this._dialogsDisplayed.push(this._dialogVO);
        this.layoutManager.showDialog(this._dialogVO.key, this._dialogVO.properties, null);
        console.log("Show Dialog: key = " + this._dialogVO.key.name + ", type = " + this._dialogVO.type);
        return;
      }
      __s42local0++;
    }
  };
  CastleDialogHandler.prototype.removeDialog = function (__s48param0) {
    if (__s48param0) {
      var __s48local0;
      var __s48local1 = -1;
      for (var __s48local2 = __dep_exact_f855840627e6e145.int(this._dialogsRegistered.length), __s48local3 = 0; __s48local3 < __s48local2; __s48local3++) {
        if ((__s48local0 = this._dialogsRegistered[__s48local3]).key == __s48param0) {
          __s48local1 = __s48local0.type;
          break;
        }
      }
      if (__s48local1 != -1 && this._dialogsBehavior.get(__s48local1).checkRemoveRegisteredWhenHideBehavior()) {
        for (var __s48local4 = __dep_exact_f855840627e6e145.int(this._dialogsRegistered.length - 1); __s48local4 >= 0; __s48local4--) {
          if (this._dialogsRegistered[__s48local4].key == __s48param0) {
            this._dialogsRegistered.splice(__s48local4, 1);
          }
        }
      }
    }
  };
  CastleDialogHandler.prototype.clearAllRegisteredDialogs = function () {
    this._dialogsRegistered.length = 0;
    this._dialogsRegistered = [];
  };
  CastleDialogHandler.prototype.removeDisplayedDialogFromList = function (__s60param0) {
    if (!__s60param0) {
      return false;
    }
    var __s60local0;
    for (var __s60local1 = __dep_exact_f855840627e6e145.int(this._dialogsDisplayed.length - 1); __s60local1 >= 0; __s60local1--) {
      if (this._dialogsDisplayed[__s60local1].key == __s60param0) {
        __s60local0 = this._dialogsDisplayed[__s60local1];
        if (this._dialogsBehavior.get(__s60local0.type).canModifyBlockDialogs()) {
          this.blockDialogs = false;
        }
        __s60local0 = null;
        this._dialogsDisplayed.splice(__s60local1, 1);
        return true;
      }
    }
    return false;
  };
  CastleDialogHandler.prototype.isDialogRegistered = function (__s67param0) {
    for (var __s67local0 = 0; __s67local0 < this._dialogsRegistered.length; __s67local0++) {
      if (this._dialogsRegistered[__s67local0].key == __s67param0) {
        return true;
      }
    }
    return false;
  };
  Object.defineProperty(CastleDialogHandler.prototype, "isThereADialog", {
    get: function () {
      return this._dialogsRegistered.length > 0;
    },
    set: function (__s74param0) {
      Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f.BasicDialogHandler.prototype, "isThereADialog").set.call(this, __s74param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDialogHandler.prototype, "isDisplayingAnyDialog", {
    get: function () {
      return this._dialogsDisplayed && this._dialogsDisplayed.length > 0;
    },
    enumerable: true,
    configurable: true
  });
  CastleDialogHandler.prototype.destroy = function () {
    this._dialogsRegistered = [];
  };
  CastleDialogHandler.prototype.onHideCurrentDialog = function () {
    if (this._forcedDialog) {
      this.removeDisplayedDialogFromList(this._forcedDialog.key);
      this._forcedDialog = null;
      this.blockDialogs = false;
    }
  };
  return CastleDialogHandler;
}(__dep_exact_9e901e8e2483a22f.BasicDialogHandler);
exports.CastleDialogHandler = __s0local0;
var __dep_export_CastleDefaultDialogBehavior = require("gge-module:export_CastleDefaultDialogBehavior");
var __dep_export_CastleLoginDialogBehavior = require("gge-module:export_CastleLoginDialogBehavior");
var __dep_export_CastleModalDialogBehavior = require("gge-module:export_CastleModalDialogBehavior");
var __dep_export_CastleModalSingleDialogBehavior = require("gge-module:export_CastleModalSingleDialogBehavior");
var __dep_export_CastlePaymentDialogBehavior = require("gge-module:export_CastlePaymentDialogBehavior");
var __dep_export_CastlePreloaderDialogBehavior = require("gge-module:export_CastlePreloaderDialogBehavior");
var __dep_export_CastleSingleDialogBehavior = require("gge-module:export_CastleSingleDialogBehavior");
var __dep_export_SingleInstanceDialogBehavior = require("gge-module:export_SingleInstanceDialogBehavior");
var __dep_export_CastleHelperDialog = require("gge-module:export_CastleHelperDialog");
