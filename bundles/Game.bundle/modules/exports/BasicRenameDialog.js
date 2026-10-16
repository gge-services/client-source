Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CastleFullScreenInputBlocker = require("gge-module:export_CastleFullScreenInputBlocker");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function BasicRenameDialog(__s3param0) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0 || BasicRenameDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BasicRenameDialog, __s1param0);
  BasicRenameDialog.prototype.initLoaded = function (__s5param0 = null) {
    var __s5local0 = new Array();
    if (this.buttonOk) {
      __s5local0.push(this.buttonOk);
    }
    if (this.buttonBack) {
      __s5local0.push(this.buttonBack);
    }
    if (this.buttonClose) {
      __s5local0.push(this.buttonClose);
    }
    this.initBasicButtons(__s5local0);
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  BasicRenameDialog.prototype.showLoaded = function (__s10param0 = null) {
    this.itxt_insert = this.initDynamicText(this.nameTextField, this.defaultName);
    this.itxt_insert.type = __dep_exact_81dacdf05bd32292.TextFieldType.INPUT;
    this.itxt_insert.maxChars = this.textMaxChars;
    this.newName = this.defaultName;
    if (this.blockMovieClip) {
      new __dep_export_CastleFullScreenInputBlocker.CastleFullScreenInputBlocker(this.blockMovieClip);
      __dep_exact_9e901e8e2483a22f.BasicLayoutManager.getInstance().revertFullscreen();
    }
    __s1param0.prototype.showLoaded.call(this, __s10param0);
  };
  Object.defineProperty(BasicRenameDialog.prototype, "nameTextField", {
    get: function () {
      return this.disp.txt_insert;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicRenameDialog.prototype, "blockMovieClip", {
    get: function () {
      return this.disp.mc_block;
    },
    enumerable: true,
    configurable: true
  });
  BasicRenameDialog.prototype.onClick = function (__s17param0) {
    __s1param0.prototype.onClick.call(this, __s17param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s17param0.target)) {
      switch (__s17param0.target) {
        case this.buttonOk:
          this.validateAndSend();
          break;
        case this.buttonBack:
        case this.buttonClose:
          this.hide();
      }
    }
  };
  Object.defineProperty(BasicRenameDialog.prototype, "buttonClose", {
    get: function () {
      return this.disp.btn_close;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicRenameDialog.prototype, "buttonBack", {
    get: function () {
      return this.disp.btn_back;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicRenameDialog.prototype, "buttonOk", {
    get: function () {
      return this.disp.btn_ok;
    },
    enumerable: true,
    configurable: true
  });
  BasicRenameDialog.prototype.validateAndSend = function () {
    if (this.validate()) {
      this.sendCommand();
    }
  };
  BasicRenameDialog.prototype.validate = function () {
    return true;
  };
  BasicRenameDialog.prototype.sendCommand = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  BasicRenameDialog.prototype.alert = function (__s34param0, __s34param1) {
    this.layoutManager.showDialog(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text(__s34param0), __dep_exact_92d05af59ee2ff30.Localize.text(__s34param1)));
  };
  BasicRenameDialog.prototype.initStaticText = function (__s36param0, __s36param1) {
    return this.textFieldManager.registerTextField(__s36param0, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s36param1));
  };
  BasicRenameDialog.prototype.initDynamicText = function (__s38param0, __s38param1) {
    if (this.textFieldManager.getTextField(__s38param0)) {
      this.textFieldManager.unregisterTextField(__s38param0);
    }
    return this.textFieldManager.registerTextField(__s38param0, new __dep_exact_92d05af59ee2ff30_2.TextVO(__s38param1));
  };
  Object.defineProperty(BasicRenameDialog.prototype, "defaultName", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicRenameDialog.prototype, "textMaxChars", {
    get: function () {
      return BasicRenameDialog.DEFAULT_MAX_CHARS;
    },
    enumerable: true,
    configurable: true
  });
  BasicRenameDialog.prototype.addEventListenerOnShow = function () {
    this.itxt_insert.focusIn.add(this.bindFunction(this.onFocusIn));
    this.itxt_insert.focusOut.add(this.bindFunction(this.onFocusOut));
  };
  BasicRenameDialog.prototype.removeEventListenerOnHide = function () {
    this.itxt_insert.focusIn.remove(this.bindFunction(this.onFocusIn));
    this.itxt_insert.focusOut.remove(this.bindFunction(this.onFocusOut));
  };
  BasicRenameDialog.prototype.onFocusIn = function (__s49param0) {
    if (this.itxt_insert.text == this.defaultName) {
      this.newName = "";
      this.itxt_insert.clearText();
    }
  };
  BasicRenameDialog.prototype.onFocusOut = function (__s52param0) {
    if (this.itxt_insert.text == "") {
      this.newName = this.defaultName;
    } else {
      this.newName = this.itxt_insert.text.trim();
    }
  };
  Object.defineProperty(BasicRenameDialog.prototype, "newName", {
    get: function () {
      return this.itxt_insert.textContentVO.stringValue;
    },
    set: function (__s58param0) {
      this.itxt_insert.textContentVO.stringValue = __s58param0;
    },
    enumerable: true,
    configurable: true
  });
  BasicRenameDialog.__initialize_static_members = function () {
    BasicRenameDialog.NAME = "CastleNameAlliance";
    BasicRenameDialog.DEFAULT_MAX_CHARS = 30;
  };
  return BasicRenameDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.BasicRenameDialog = __s0local0;
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
