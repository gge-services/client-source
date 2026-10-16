Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function AllianceLanguageSelectionItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceLanguageSelectionItem, __s1param0);
  AllianceLanguageSelectionItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.getItemMc()], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    this._itxt_default = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.getItemMc().mc_default.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this._itxt_selected = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.getItemMc().mc_selected.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(""));
  };
  AllianceLanguageSelectionItem.prototype.fill = function () {
    this._itxt_default.textAlign = this.vo.languageCode == "ar" ? __dep_exact_9e901e8e2483a22f.GGSTextAlign.RIGHT : __dep_exact_9e901e8e2483a22f.GGSTextAlign.LEFT;
    this._itxt_selected.textAlign = this.vo.languageCode == "ar" ? __dep_exact_9e901e8e2483a22f.GGSTextAlign.RIGHT : __dep_exact_9e901e8e2483a22f.GGSTextAlign.LEFT;
    this._itxt_default.textContentVO.stringValue = this.vo.localizedLanguage;
    this._itxt_selected.textContentVO.stringValue = this.vo.localizedLanguage;
    this.getItemMc().mc_selected.visible = this.vo.languageCode == this.vo.parentDialog.selectedLanguageCode;
  };
  AllianceLanguageSelectionItem.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    if (!this.getItemMc().mc_selected.visible) {
      this.vo.parentDialog.selectedLanguageCode = this.vo.languageCode;
    }
  };
  Object.defineProperty(AllianceLanguageSelectionItem.prototype, "vo", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  return AllianceLanguageSelectionItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.AllianceLanguageSelectionItem = __s0local0;
