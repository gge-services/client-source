Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_4 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleAgeGateCheckFailedDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleAgeGateCheckFailedDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAgeGateCheckFailedDialog, __s1param0);
  CastleAgeGateCheckFailedDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_4.LocalizedTextVO(""));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_4.LocalizedTextVO("error_age_underage"));
    var __s5local0 = "[url=" + __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.urlPolicy + "]" + __dep_exact_92d05af59ee2ff30_3.Localize.text("agb.dataprivacy") + "[/url]";
    __s5local0 += " | ";
    __s5local0 += "[url=" + __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.urlAGB + "]" + __dep_exact_92d05af59ee2ff30_3.Localize.text("impressum") + "[/url]";
    __s5local0 += " | ";
    __s5local0 += "[url=https://support.goodgamestudios.com/?g=12]" + __dep_exact_92d05af59ee2ff30_3.Localize.text("support") + "[/url]";
    __s5local0 += " | ";
    __s5local0 += "[url=https://en.board.goodgamestudios.com/empire]" + __dep_exact_92d05af59ee2ff30_3.Localize.text("forum") + "[/url]";
    var __s5local1 = __dep_exact_92d05af59ee2ff30_3.Localize.text("copyright");
    __s5local1 += "[url=https://www.goodgamestudios.com]" + __dep_exact_92d05af59ee2ff30_3.Localize.text("generic_ggs") + "[/url]";
    __s5local1 += " " + __dep_exact_92d05af59ee2ff30_3.Localize.text("generic_register_all_rights_reserved");
    this.buildLinkText(this.dialogDisp.txt_copy3, __s5local0);
    this.buildLinkText(this.dialogDisp.txt_copy2, __s5local1);
  };
  CastleAgeGateCheckFailedDialog.prototype.buildLinkText = function (__s7param0, __s7param1) {
    var __s7local0 = __s7param0.defaultTextFormat.color;
    __s7param0.wordWrap = true;
    __s7param0.defaultTextFormat.align = __dep_exact_9e901e8e2483a22f_1.GGSTextAlign.LEFT;
    var __s7local1 = new __dep_exact_92d05af59ee2ff30_2.HTMLTextCustomVO();
    __s7local1.addLocalizedTextVO(new __dep_exact_92d05af59ee2ff30_4.LocalizedTextVO(__s7param1));
    var __s7local2 = new __dep_exact_92d05af59ee2ff30.HTMLLinkFormatVO(__s7local0, __dep_exact_9e901e8e2483a22f_2.GGSTextDecoration.UNDERLINE);
    var __s7local3 = new __dep_exact_92d05af59ee2ff30.HTMLLinkFormatVO(__s7local0, __dep_exact_9e901e8e2483a22f_2.GGSTextDecoration.UNDERLINE);
    var __s7local4 = new __dep_exact_92d05af59ee2ff30.HTMLLinkFormatVO(7033400, __dep_exact_9e901e8e2483a22f_2.GGSTextDecoration.NONE);
    __s7local1.linkFormats = new __dep_exact_92d05af59ee2ff30_1.HTMLLinkFormatsVO(__s7local2, __s7local3, __s7local4);
    this.textFieldManager.registerTextField(__s7param0, __s7local1).htmlLinkClick.add(this.bindFunction(this.callBackFunction));
  };
  CastleAgeGateCheckFailedDialog.prototype.callBackFunction = function (__s9param0, __s9param1) {
    try {
      var __s9local0 = new __dep_exact_81dacdf05bd32292.URLRequest(__s9param1);
      __dep_exact_81dacdf05bd32292_2.navigateToURL(__s9local0, "goodgamestudios");
    } catch (__s12local0) {
      __dep_exact_9e901e8e2483a22f_3.error("cant navigate to url");
    }
  };
  CastleAgeGateCheckFailedDialog.__initialize_static_members = function () {
    CastleAgeGateCheckFailedDialog.NAME = "CastleAgeGateCheckFailed";
  };
  return CastleAgeGateCheckFailedDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleAgeGateCheckFailedDialog = __s0local0;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
