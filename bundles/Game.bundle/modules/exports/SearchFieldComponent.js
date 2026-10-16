Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function SearchFieldComponent(__s3param0) {
    var __s3local0 = this;
    __s3local0._onSearchValueChanged = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0._isFocusedIn = false;
    __s3local0._currentSearchValue = "";
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SearchFieldComponent, __s1param0);
  SearchFieldComponent.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.disp.btn_cancel, -1, __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_helpText, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("searchDeco_name"));
    this._txtInput = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_value, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this._txtInput.maxChars = SearchFieldComponent.SEARCH_FIELD_MAX_CHARS;
    this._txtInput.multiline = false;
    this._txtInput.wordwrap = false;
  };
  SearchFieldComponent.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    if (this._txtInput) {
      this._txtInput.change.add(this.bindFunction(this.onValueChanged));
      this._txtInput.focusIn.add(this.bindFunction(this.onSearchFieldFocusIn));
      this._txtInput.focusOut.add(this.bindFunction(this.onSearchFieldFocusOut));
    }
  };
  SearchFieldComponent.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    if (this._txtInput) {
      this._txtInput.change.remove(this.bindFunction(this.onValueChanged));
      this._txtInput.focusIn.remove(this.bindFunction(this.onSearchFieldFocusIn));
      this._txtInput.focusOut.remove(this.bindFunction(this.onSearchFieldFocusOut));
    }
  };
  SearchFieldComponent.prototype.updateVisuals = function () {
    var __s13local0 = this._currentSearchValue.length > 0;
    this.disp.txt_helpText.visible = !__s13local0 && !this._isFocusedIn;
    this.disp.mc_background.gotoAndStop(this._isFocusedIn ? 2 : 1);
    this.disp.btn_search.visible = !__s13local0;
    this.disp.btn_cancel.visible = __s13local0;
  };
  SearchFieldComponent.prototype.clearSearchField = function () {
    this._txtInput.clearText();
    this._currentSearchValue = "";
    this.updateVisuals();
    if (this._onSearchValueChanged) {
      this._onSearchValueChanged.dispatch();
    }
  };
  SearchFieldComponent.prototype.onClick = function (__s18param0) {
    __s1param0.prototype.onClick.call(this, __s18param0);
    switch (__s18param0.target) {
      case this.disp.btn_cancel:
        this.clearSearchField();
        break;
      default:
        this._txtInput.setFocus();
    }
  };
  SearchFieldComponent.prototype.onValueChanged = function (__s21param0) {
    this._currentSearchValue = this._txtInput.text.toLowerCase();
    this.updateVisuals();
    if (this._onSearchValueChanged) {
      this._onSearchValueChanged.dispatch();
    }
  };
  SearchFieldComponent.prototype.onSearchFieldFocusIn = function (__s24param0) {
    this._isFocusedIn = true;
    this.updateVisuals();
  };
  SearchFieldComponent.prototype.onSearchFieldFocusOut = function (__s26param0) {
    this._isFocusedIn = false;
    this.updateVisuals();
  };
  Object.defineProperty(SearchFieldComponent.prototype, "currentSearchValue", {
    get: function () {
      return this._currentSearchValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SearchFieldComponent.prototype, "onSearchValueChanged", {
    get: function () {
      return this._onSearchValueChanged;
    },
    enumerable: true,
    configurable: true
  });
  SearchFieldComponent.__initialize_static_members = function () {
    SearchFieldComponent.SEARCH_FIELD_MAX_CHARS = 100;
  };
  return SearchFieldComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.SearchFieldComponent = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
