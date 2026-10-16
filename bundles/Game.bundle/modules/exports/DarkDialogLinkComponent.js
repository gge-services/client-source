Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __s0local0 = function (__s1param0) {
  function DarkDialogLinkComponent(__s3param0, __s3param1, __s3param2) {
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DarkDialogLinkComponent, __s1param0);
  DarkDialogLinkComponent.prototype.build = function () {
    var __s5local0 = this._disp.txt_desc.defaultTextFormat.color;
    var __s5local1 = new __dep_exact_92d05af59ee2ff30_2.HTMLTextCustomVO();
    __s5local1.addLocalizedTextVO(new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(this._textId));
    var __s5local2 = new __dep_exact_92d05af59ee2ff30.HTMLLinkFormatVO(__s5local0, __dep_exact_9e901e8e2483a22f.GGSTextDecoration.UNDERLINE);
    var __s5local3 = new __dep_exact_92d05af59ee2ff30.HTMLLinkFormatVO(__s5local0, __dep_exact_9e901e8e2483a22f.GGSTextDecoration.UNDERLINE);
    var __s5local4 = new __dep_exact_92d05af59ee2ff30.HTMLLinkFormatVO(__dep_export_ClientConstColor.ClientConstColor.DARK_LINK_COLOR, __dep_exact_9e901e8e2483a22f.GGSTextDecoration.UNDERLINE);
    __s5local1.linkFormats = new __dep_exact_92d05af59ee2ff30_1.HTMLLinkFormatsVO(__s5local2, __s5local3, __s5local4);
    this._txtLabel = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.txt_desc, __s5local1);
    this._txtLabel.htmlLinkClick.add(this.bindFunction(this.onClick));
  };
  return DarkDialogLinkComponent;
}(require("gge-module:export_LinkComponent").LinkComponent);
exports.DarkDialogLinkComponent = __s0local0;
