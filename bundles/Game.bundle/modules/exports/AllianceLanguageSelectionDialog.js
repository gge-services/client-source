Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_HighlightAndClearInputTextBehaviour = require("gge-module:export_HighlightAndClearInputTextBehaviour");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_AllianceLanguageSelectionItemVO = require("gge-module:export_AllianceLanguageSelectionItemVO");
var __dep_export_AllianceLanguageSelectionItem = require("gge-module:export_AllianceLanguageSelectionItem");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleAllianceForumData = require("gge-module:export_CastleAllianceForumData");
var __s0local0 = function (__s1param0) {
  function AllianceLanguageSelectionDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, AllianceLanguageSelectionDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceLanguageSelectionDialog, __s1param0);
  AllianceLanguageSelectionDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("selectlanguage")));
    this._itxt_search = this.textFieldManager.registerTextField(this.dialogDisp.mc_search.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_exact_92d05af59ee2ff30_1.Localize.text("search")));
    this._inputBehaviour = new __dep_export_HighlightAndClearInputTextBehaviour.HighlightAndClearInputTextBehaviour(this.dialogDisp.mc_search, this._itxt_search);
    var __s5local0 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_AllianceLanguageSelectionItem.AllianceLanguageSelectionItem, "SelectLanguageItem", AllianceLanguageSelectionDialog.NAME);
    __s5local0.itemPaddingY = 4;
    __s5local0.useSmoothScroll = true;
    this._scrollList = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.dialogDisp).addMaskMc(this.dialogDisp.mc_items.mask), __s5local0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
  };
  AllianceLanguageSelectionDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this._itxt_search.color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    this._selectedLanguageCode = this.dialogProperties.preselectedLanguage;
    this._languageVOs = [];
    for (var __s7local0 = 0, __s7local1 = AllianceLanguageSelectionDialog.LANGUAGE_CODES; __s7local0 < __s7local1.length; __s7local0++) {
      var __s7local2 = __s7local1[__s7local0];
      this._languageVOs.push(new __dep_export_AllianceLanguageSelectionItemVO.AllianceLanguageSelectionItemVO(__s7local2, __dep_exact_92d05af59ee2ff30_1.Localize.text("language_native_" + __s7local2), this));
    }
    this.updateItems();
    this._scrollList.onShow();
    this._scrollList.scrollToData(0);
    this._inputBehaviour.onShow();
    this._itxt_search.keyUp.add(this.bindFunction(this.onSearchFieldKeyDown));
    this._itxt_search.change.add(this.bindFunction(this.onSearchFieldChange));
  };
  AllianceLanguageSelectionDialog.prototype.hideLoaded = function (__s11param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s11param0);
    this._scrollList.onHide();
    this._inputBehaviour.onHide();
    this._itxt_search.keyUp.removeAll();
    this._itxt_search.change.removeAll();
  };
  AllianceLanguageSelectionDialog.prototype.onSearchFieldKeyDown = function (__s13param0) {
    if (__s13param0.key == __dep_exact_81dacdf05bd32292_1.Keyboard.ENTER) {
      document.activeElement.blur();
    }
  };
  AllianceLanguageSelectionDialog.prototype.onSearchFieldChange = function (__s16param0) {
    this.updateItems();
  };
  AllianceLanguageSelectionDialog.prototype.updateItems = function (__s18param0) {
    var __s18local0 = this;
    if (__s18param0 === undefined) {
      __s18param0 = true;
    }
    var __s18local1 = [];
    if (this.dialogProperties.includeAllLanguageSelection) {
      __s18local1.push(new __dep_export_AllianceLanguageSelectionItemVO.AllianceLanguageSelectionItemVO("", __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_allLanguages_desc"), this));
    }
    __s18local1 = __s18local1.concat(this._languageVOs);
    if (!this._inputBehaviour.isEmpty()) {
      __s18local1 = __s18local1.filter(function (__s23param0) {
        var __s23local0 = [];
        for (var __s23local1 = 1; __s23local1 < arguments.length; __s23local1++) {
          __s23local0[__s23local1 - 1] = arguments[__s23local1];
        }
        return __s23param0.localizedLanguage.toLowerCase().includes(__s18local0._itxt_search.text.toLowerCase());
      });
    }
    var __s18local2 = __s18local1.length == 0 ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    if (__dep_exact_81dacdf05bd32292.ColorTransform.colorNumToString(__s18local2) != this._itxt_search.color) {
      this._itxt_search.color = __s18local2;
      this.dialogDisp.mc_search.txt_text.getTextFieldHTMLElement().style.color = this._itxt_search.color;
    }
    this._scrollList.updateWithNewData(__s18local1, __s18param0);
  };
  AllianceLanguageSelectionDialog.prototype.onClick = function (__s28param0) {
    __s1param0.prototype.onClick.call(this, __s28param0);
    switch (__s28param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        this.dialogProperties.onConfirmCallBack(this._selectedLanguageCode);
        this.hide();
    }
  };
  Object.defineProperty(AllianceLanguageSelectionDialog.prototype, "selectedLanguageCode", {
    get: function () {
      return this._selectedLanguageCode;
    },
    set: function (__s33param0) {
      this._selectedLanguageCode = __s33param0;
      __dep_export_CastleAllianceForumData.CastleAllianceForumData.LAST_SEARCHED_LANGUAGE = __s33param0;
      this.updateItems(false);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceLanguageSelectionDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AllianceLanguageSelectionDialog.NAME = "CastleSelectLanguage";
  AllianceLanguageSelectionDialog.LANGUAGE_CODES = ["en", "de", "fr", "pl", "ru", "it", "nl", "pt", "es", "ar", "da", "no", "fi", "sv", "ja", "ko", "el", "tr", "zh_cn", "zh_tw", "cs", "ro", "sk", "hu", "bg"];
  return AllianceLanguageSelectionDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.AllianceLanguageSelectionDialog = __s0local0;
