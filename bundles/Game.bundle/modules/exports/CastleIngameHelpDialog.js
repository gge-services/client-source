Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_4 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleTextScrollVO = require("gge-module:export_CastleTextScrollVO");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleInGameHelpCategoriesEnum = require("gge-module:export_CastleInGameHelpCategoriesEnum");
var __dep_export_HelpScrollItem = require("gge-module:export_HelpScrollItem");
var __dep_export_HelpScrollItemVO = require("gge-module:export_HelpScrollItemVO");
var __s0local0 = function (__s1param0) {
  function CastleIngameHelpDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleIngameHelpDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleIngameHelpDialog, __s1param0);
  CastleIngameHelpDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.mc_itemContainer.btn_down, this.dialogDisp.mc_itemContainer.btn_up]);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp.btn_discord, 1, __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.dialogDisp.btn_discord.toolTipText = "panel_option_discord";
  };
  CastleIngameHelpDialog.prototype.initCategoriesScrollList = function () {
    var __s7local0 = __dep_export_CastleInGameHelpCategoriesEnum.CastleInGameHelpCategoriesEnum.getInGameHelpCategories();
    this._itemScrollList = new __dep_exact_9e901e8e2483a22f_3.ItemScrollList(this.dialogDisp.mc_itemContainer);
    this._itemScrollList.scrollItemClass = __dep_export_HelpScrollItem.HelpScrollItem;
    if (__s7local0 != null) {
      for (var __s7local1 = 0, __s7local2 = __s7local0; __s7local1 < __s7local2.length; __s7local1++) {
        var __s7local3 = __s7local2[__s7local1];
        if (__s7local3 !== undefined) {
          var __s7local4 = new __dep_export_HelpScrollItemVO.HelpScrollItemVO();
          var __s7local5 = __dep_exact_92d05af59ee2ff30_3.Localize.text(__s7local3.getCategoryText());
          var __s7local6 = __dep_exact_92d05af59ee2ff30_3.Localize.text(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_ASSIGN_COLON, [__s7local3.key + 1, __s7local5]);
          __s7local4.itemText = __s7local6;
          this._itemScrollList.pushContent(__s7local4);
        }
      }
    }
  };
  CastleIngameHelpDialog.prototype.showLoaded = function (__s13param0 = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_forum, new __dep_exact_92d05af59ee2ff30_4.LocalizedTextVO("dialog_ingameHelp_discordText"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_4.LocalizedTextVO("panel_option_ingameHelp"));
    this._itxt_helpText = this.textFieldManager.registerTextField(this.dialogDisp.txt_helpText, new __dep_exact_92d05af59ee2ff30_2.HTMLTextCustomVO());
    this._scrollComponent = new __dep_export_CastleTextScrollComponent.CastleTextScrollComponent(new __dep_export_CastleTextScrollVO.CastleTextScrollVO(this.dialogDisp.txt_helpText, this.dialogDisp.mc_scrollHandle.btn_up, this.dialogDisp.mc_scrollHandle.btn_down, this.dialogDisp.mc_scrollHandle.btn_slider, this.dialogDisp.mc_scrollHandle.mc_sliderLine, [this.dialogDisp.mc_scrollHandle]));
    this._scrollComponent.invisibleOnFit = true;
    this._scrollComponent.hideArrowsOnScrollToEdges = true;
    this.initCategoriesScrollList();
    __s1param0.prototype.showLoaded.call(this, __s13param0);
    this._scrollComponent.onShow();
    this._itemScrollList.addEventListener(__dep_exact_9e901e8e2483a22f_4.ScrollItemEvent.CLICK, this.bindFunction(this.onCategoryClick));
    this._itxt_helpText.htmlLinkClick.add(this.bindFunction(this.onHyperLinkClick));
    this.initList();
  };
  CastleIngameHelpDialog.prototype.initList = function () {
    var __s15local0 = 0;
    if (this.dialogProperties) {
      this._itemScrollList.setActiveItemVO(this.dialogProperties.inGameHelpActiveID, true);
      __s15local0 = __dep_exact_f855840627e6e145.int(this.calculateScrollStepForIndex(this.dialogProperties.inGameHelpActiveID));
      this.showHelpText(this.dialogProperties.category);
    } else {
      this._itemScrollList.setActiveItemVO(0, true);
      this.showHelpText(__dep_export_CastleInGameHelpCategoriesEnum.CastleInGameHelpCategoriesEnum.WELCOME);
    }
    this._itemScrollList.initList(__s15local0);
  };
  CastleIngameHelpDialog.prototype.calculateScrollStepForIndex = function (__s19param0) {
    var __s19local0 = __s19param0 - CastleIngameHelpDialog.HELP_ITEM_COUNT_AT_ONCE;
    if (__s19local0 < CastleIngameHelpDialog.SCROLL_LIST_MIN_START_ITEM) {
      return CastleIngameHelpDialog.SCROLL_LIST_MIN_START_ITEM;
    } else {
      return __s19local0 + CastleIngameHelpDialog.SCROLL_LIST_ITEM_OFFSET;
    }
  };
  CastleIngameHelpDialog.prototype.hideLoaded = function (__s23param0 = null) {
    this._scrollComponent.onHide();
    this._itemScrollList.removeEventListener(__dep_exact_9e901e8e2483a22f_4.ScrollItemEvent.CLICK, this.bindFunction(this.onCategoryClick));
    this._itxt_helpText.htmlLinkClick.remove(this.bindFunction(this.onHyperLinkClick));
    __s1param0.prototype.hideLoaded.call(this, __s23param0);
  };
  CastleIngameHelpDialog.prototype.showHelpText = function (__s25param0) {
    var __s25local0 = __s25param0.getCategoryText();
    var __s25local1 = __s25param0.getCategoryContentText();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_category, new __dep_exact_92d05af59ee2ff30_4.LocalizedTextVO(__s25local0));
    this._itxt_helpText = this.textFieldManager.registerTextField(this.dialogDisp.txt_helpText, this.getHtmlTextVOById(__s25local1));
    this.dialogDisp.iconHolder.gotoAndStop(__s25param0.key + 1);
    this._scrollComponent.scrollToStart();
  };
  CastleIngameHelpDialog.prototype.getHtmlTextVOById = function (__s27param0) {
    var __s27local0 = new __dep_exact_92d05af59ee2ff30.HTMLLinkFormatVO(__dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR);
    var __s27local1 = new __dep_exact_92d05af59ee2ff30.HTMLLinkFormatVO(__dep_export_ClientConstColor.ClientConstColor.GENERIC_LIGHT_BLUE, __dep_exact_9e901e8e2483a22f_1.GGSTextDecoration.UNDERLINE);
    var __s27local2 = new __dep_exact_92d05af59ee2ff30_1.HTMLLinkFormatsVO(new __dep_exact_92d05af59ee2ff30.HTMLLinkFormatVO(__dep_export_ClientConstColor.ClientConstColor.HELP_LINK_COLOR), __s27local0, __s27local1);
    var __s27local3 = new __dep_exact_92d05af59ee2ff30_2.HTMLTextCustomVO();
    __s27local3.addLocalizedTextVO(new __dep_exact_92d05af59ee2ff30_4.LocalizedTextVO(__s27param0));
    __s27local3.linkFormats = __s27local2;
    return __s27local3;
  };
  CastleIngameHelpDialog.prototype.onHyperLinkClick = function (__s29param0, __s29param1) {
    var __s29local0 = __dep_exact_f855840627e6e145.int(Number(__s29param1));
    var __s29local1 = __dep_export_CastleInGameHelpCategoriesEnum.CastleInGameHelpCategoriesEnum.getCategoryFromKey(__s29local0 - 1);
    this._itemScrollList.initList(__s29local1.key);
    this._itemScrollList.setActiveItemVO(__s29local0 - 1, true);
    this.showHelpText(__s29local1);
  };
  CastleIngameHelpDialog.prototype.onClick = function (__s31param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s31param0.target)) {
      __s1param0.prototype.onClick.call(this, __s31param0);
      switch (__s31param0.target) {
        case this.dialogDisp.btn_discord:
          __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_CastleBasicController.CastleBasicController.OPEN_DISCORD, ["Info"]);
          break;
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  CastleIngameHelpDialog.prototype.onCategoryClick = function (__s35param0) {
    var __s35local0 = __dep_export_CastleInGameHelpCategoriesEnum.CastleInGameHelpCategoriesEnum.getCategoryFromKey(__s35param0.scrollItem.scrollItemVO.id);
    this._itemScrollList.setActiveItemVO(__s35param0.scrollItem.scrollItemVO.id, true);
    this.showHelpText(__s35local0);
  };
  Object.defineProperty(CastleIngameHelpDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleIngameHelpDialog.__initialize_static_members = function () {
    CastleIngameHelpDialog.NAME = "CastleIngameHelpEx2";
    CastleIngameHelpDialog.HELP_ITEM_COUNT_AT_ONCE = 10;
    CastleIngameHelpDialog.SCROLL_LIST_MIN_START_ITEM = 0;
    CastleIngameHelpDialog.SCROLL_LIST_ITEM_OFFSET = 1;
  };
  return CastleIngameHelpDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleIngameHelpDialog = __s0local0;
var __dep_export_CastleTextScrollComponent = require("gge-module:export_CastleTextScrollComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
