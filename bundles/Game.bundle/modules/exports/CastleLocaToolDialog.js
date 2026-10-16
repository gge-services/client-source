Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __s0local0 = function (__s1param0) {
  function CastleLocaToolDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, new Library.CastleInterfaceElements.CastleServerMessageBig()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLocaToolDialog, __s1param0);
  CastleLocaToolDialog.prototype.applyProperties = function () {
    var __s5local0 = new __dep_exact_92d05af59ee2ff30.HTMLTextCustomVO();
    var __s5local1 = this.createContent();
    __s5local0.addLocalizedTextVO(new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__s5local1));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, __s5local0);
  };
  CastleLocaToolDialog.prototype.createContent = function () {
    var __s7local0 = this.dialogProperties.textId;
    if (__s7local0 == "") {
      return this.errorTextNoTextID + "\n\n" + this.howToUseText;
    }
    var __s7local1 = this.dialogProperties.params.concat();
    if (__s7local1.length == 1 && __s7local1[0] == "") {
      __s7local1 = [];
    } else {
      for (var __s7local2 = 0; __s7local2 < __s7local1.length; __s7local2++) {
        __s7local1[__s7local2] = "<font color=\"#" + __dep_exact_9e901e8e2483a22f.Random.integer(0, __dep_export_ClientConstColor.ClientConstColor.GENERIC_WHITE) + "\">" + __s7local1[__s7local2] + "</font>";
      }
    }
    var __s7local3 = "TextID : " + __s7local0 + "<br /><br />";
    if (__s7local1.length > 0) {
      __s7local3 += "Params : " + __s7local1 + "<br /><br />";
    }
    __s7local3 += "Displayed Text:<br />";
    __s7local3 += __dep_exact_92d05af59ee2ff30_1.Localize.text(__s7local0, __s7local1);
    return __s7local3 += "\n\n\n" + this.howToUseText;
  };
  CastleLocaToolDialog.prototype.onClick = function (__s15param0) {
    __s1param0.prototype.onClick.call(this, __s15param0);
    switch (__s15param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleLocaToolDialog.prototype, "errorTextNoTextID", {
    get: function () {
      return "No TextID found! Use this Format: <font color=\"#008800\">/i18n</font> <font color=\"#FF0000\">textID</font> <font color=\"#0000FF\">1,2,3,4</font><br /><font color=\"#0000FF\">for more Placeholder use ',' to add them</font>";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLocaToolDialog.prototype, "howToUseText", {
    get: function () {
      return "To insert your text into a textfield:\nuse Ctrl + L\nand click on your target while this cheat is in the input text field of your cheat panel.\n<font color=\"#880000\">You don't need to push ENTER</font>";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLocaToolDialog.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLocaToolDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleLocaToolDialog.__initialize_static_members = function () {
    CastleLocaToolDialog.NAME = "CastleLocaToolDialog";
  };
  return CastleLocaToolDialog;
}(require("gge-module:export_CastleDialog").CastleDialog);
exports.CastleLocaToolDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
