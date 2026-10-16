Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_VectorSortHelper = require("gge-module:class_VectorSortHelper");
var __dep_class_BasicLayoutManager = require("gge-module:class_BasicLayoutManager");
var __dep_class_BasicDialogVO = require("gge-module:class_BasicDialogVO");
var __s0local0 = function () {
  function BasicDialogHandler() {
    this._blockDialogs = false;
    this.init();
    if (BasicDialogHandler.dialogHandler) {
      throw new Error("Calling constructor not allowed! Use getInstance instead.");
    }
  }
  BasicDialogHandler.prototype.init = function () {
    this._dialogs = [];
  };
  BasicDialogHandler.getInstance = function () {
    BasicDialogHandler.dialogHandler ||= new BasicDialogHandler();
    return BasicDialogHandler.dialogHandler;
  };
  BasicDialogHandler.prototype.registerDialogs = function (__s10param0, __s10param1 = null, __s10param2 = false, __s10param3 = BasicDialogHandler.PRIORITY_LOW, __s10param4 = 0) {
    var __s10local0 = new __dep_class_BasicDialogVO.BasicDialogVO();
    __s10local0.key = __s10param0;
    __s10local0.properties = __s10param1;
    __s10local0.blockDialogs = __s10param2;
    __s10local0.delay = __s10param4;
    __s10local0.priority = __s10param3;
    this._dialogs.push(__s10local0);
    __dep_class_VectorSortHelper.VectorSortHelper.sort(this._dialogs, this.sortDialogs);
  };
  BasicDialogHandler.prototype.sortDialogs = function (__s12param0, __s12param1) {
    if (__s12param0.priority > __s12param1.priority) {
      return -1;
    } else if (__s12param0.priority < __s12param1.priority) {
      return 1;
    } else {
      return 0;
    }
  };
  BasicDialogHandler.prototype.forceShowDialog = function (__s17param0) {
    if (this.isThereADialog) {
      for (var __s17local0 = 0, __s17local1 = this._dialogs; __s17local0 < __s17local1.length; __s17local0++) {
        if (__s17local1[__s17local0].key === __s17param0) {
          this._dialog = this._dialogs.shift();
          this._blockDialogs = this._blockDialogs || this._dialog.blockDialogs;
          this.layoutManager.showDialog(this._dialog.key, this._dialog.properties);
        }
      }
    }
  };
  BasicDialogHandler.prototype.showDialog = function (__s23param0 = 0) {
    if (this.isThereADialog) {
      if (!this._blockDialogs) {
        this.performDialogDisplay();
      }
    }
  };
  BasicDialogHandler.prototype.performDialogDisplay = function () {
    this._dialog = this._dialogs.shift();
    this._blockDialogs = this._dialog.blockDialogs;
    this.layoutManager.showDialog(this._dialog.key, this._dialog.properties);
  };
  BasicDialogHandler.prototype.onHideCurrentDialog = function () {
    if (this._dialog) {
      this._dialog = null;
      this.blockDialogs = false;
    }
  };
  BasicDialogHandler.prototype.removeDialog = function (__s32param0) {
    for (var __s32local0 = 0; __s32local0 < this._dialogs.length; __s32local0++) {
      if (this._dialogs[__s32local0].key === __s32param0) {
        this._dialogs.splice(__s32local0, 1);
        __s32local0 = -1;
      }
    }
  };
  BasicDialogHandler.prototype.isDialogRegistered = function (__s37param0) {
    for (var __s37local0 = 0; __s37local0 < this._dialogs.length; __s37local0++) {
      if (this._dialogs[__s37local0].key === __s37param0) {
        return true;
      }
    }
    return false;
  };
  Object.defineProperty(BasicDialogHandler.prototype, "isThereADialog", {
    get: function () {
      return this._dialogs.length > 0;
    },
    enumerable: true,
    configurable: true
  });
  BasicDialogHandler.prototype.destroy = function () {
    this._dialogs = [];
  };
  Object.defineProperty(BasicDialogHandler.prototype, "layoutManager", {
    get: function () {
      return __dep_class_BasicLayoutManager.BasicLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicDialogHandler.prototype, "blockDialogs", {
    get: function () {
      return this._blockDialogs;
    },
    set: function (__s50param0) {
      this._blockDialogs = __s50param0;
    },
    enumerable: true,
    configurable: true
  });
  BasicDialogHandler.PRIORITY_LOW = 1;
  BasicDialogHandler.PRIORITY_MIDDLE = 2;
  BasicDialogHandler.PRIORITY_HIGH = 3;
  BasicDialogHandler.PRIORITY_TOP = 4;
  return BasicDialogHandler;
}();
exports.BasicDialogHandler = __s0local0;
