Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_GeneralsEvent = require("gge-module:export_GeneralsEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableItemGenericCurrencyVO = require("gge-module:export_CollectableItemGenericCurrencyVO");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_ModernSimpleCostDialog = require("gge-module:export_ModernSimpleCostDialog");
var __dep_export_ModernSimpleCostDialogProperties = require("gge-module:export_ModernSimpleCostDialogProperties");
var __dep_export_CastleGenericBuyDialogProperties = require("gge-module:export_CastleGenericBuyDialogProperties");
var __dep_export_ModernPackageShopBuyDialog = require("gge-module:export_ModernPackageShopBuyDialog");
var __dep_export_ClickFeedBackHoverSliderButton = require("gge-module:export_ClickFeedBackHoverSliderButton");
var __dep_export_GeneralSelectionItem = require("gge-module:export_GeneralSelectionItem");
var __dep_export_GeneralsSkillTreeComponent = require("gge-module:export_GeneralsSkillTreeComponent");
var __s0local0 = function (__s1param0) {
  function GeneralsSkillTreeDialog() {
    return __s1param0.call(this, GeneralsSkillTreeDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralsSkillTreeDialog, __s1param0);
  GeneralsSkillTreeDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_reset, this.dialogDisp.btn_buyTokens], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_slider], __dep_export_ClickFeedBackHoverSliderButton.ClickFeedBackHoverSliderButton, 1);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_skillTree_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_reset.txt_label, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("reset")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_availableLabel, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_generals_skillTree_pointsAvailable"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_spentLabel, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_generals_skillTree_pointsSpend"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_locked.mc_alert.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_generals_skillTree_generalTravelling_popup"));
    this.dialogDisp.btn_buyTokens.toolTipText = "dialog_generals_skillTree_buy_resetToken_tooltip";
    this.dialogDisp.icon_resetToken.toolTipText = "currency_name_GeneralsSkillsResetToken";
    this.dialogDisp.mc_locked.mouseChildren = false;
    this._itxt_name = this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this._itxt_pointsAvailable = this.textFieldManager.registerTextField(this.dialogDisp.txt_available, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(0));
    this._itxt_pointsSpent = this.textFieldManager.registerTextField(this.dialogDisp.txt_spent, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(0));
    this._itxt_resetTokens = this.textFieldManager.registerTextField(this.dialogDisp.txt_resetTokens, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(0));
    var __s5local0 = new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp).addMouseWheelElements([this.dialogDisp]);
    var __s5local1 = new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(false, this.dialogDisp.mc_list.mask.height, true);
    this._scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(__s5local0, __s5local1);
    this._scrollY = this.dialogDisp.mc_list.y;
  };
  GeneralsSkillTreeDialog.prototype.showLoaded = function (__s7param0) {
    var __s7local0 = this;
    if (__s7param0 === undefined) {
      __s7param0 = null;
    }
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.dialogDisp.mc_locked.visible = false;
    var __s7local1 = this.dialogProperties.generalVO.getSkillPointsSpent();
    this._itxt_name.textContentVO.stringValue = this.dialogProperties.generalVO.nameText;
    this._itxt_pointsAvailable.textContentVO.numberValue = this.dialogProperties.generalVO.getSkillPointsAvailable();
    this._itxt_pointsSpent.textContentVO.numberValue = __s7local1;
    this._itxt_resetTokens.textContentVO.numberValue = __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_GENERAL_SKILL_RESET_TOKEN);
    this.updateResetButton();
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_generalIcon);
    this._generalIcon = new __dep_export_GeneralSelectionItem.GeneralSelectionItem(this.dialogProperties.generalVO, this.dialogDisp.mc_generalIcon, false, false, false);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_list);
    this._treeComponent = new __dep_export_GeneralsSkillTreeComponent.GeneralsSkillTreeComponent(this.dialogProperties.generalVO.generalID, this.dialogProperties.attackHighlight);
    this.dialogDisp.mc_list.addChild(this._treeComponent.disp);
    this._treeComponent.tierComponents.forEach(function (__s10param0) {
      return __s10param0.skillItems.forEach(function (__s12param0) {
        return __s12param0.clickSignal.add(__s7local0.bindFunction(__s7local0.onClickSkill));
      });
    });
    this._treeComponent.show();
    var __s7local2 = this._treeComponent.height;
    var __s7local3 = Math.max(0, __s7local2 - this.dialogDisp.mc_list.mask.height);
    this._scrollComponent.init(0, __s7local3, 110, 110);
    this._scrollComponent.scrollToValue(0);
    this._scrollComponent.show();
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    this.onScroll();
    __dep_export_CastleModel.CastleModel.generalsData.addEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
  };
  GeneralsSkillTreeDialog.prototype.hideLoaded = function (__s14param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s14param0);
    if (this._scrollComponent) {
      this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    }
    if (this._treeComponent) {
      this._treeComponent.hide();
    }
    __dep_export_CastleModel.CastleModel.generalsData.removeEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
  };
  GeneralsSkillTreeDialog.prototype.updateResetButton = function () {
    var __s18local0 = this.dialogProperties.generalVO.getSkillPointsSpent();
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_reset, __s18local0 > 0);
    this.dialogDisp.btn_reset.toolTipText = __s18local0 == 0 ? "dialog_generals_skillTree_reset_noSkillpointsSpent_tooltip" : null;
  };
  GeneralsSkillTreeDialog.prototype.showResetDialog = function () {
    var __s20local0 = new __dep_export_CollectableList.CollectableList();
    __s20local0.addItem(new __dep_export_CollectableItemGenericCurrencyVO.CollectableItemGenericCurrencyVO(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_GENERAL_SKILL_RESET_TOKEN, 1));
    var __s20local1 = new __dep_export_ModernSimpleCostDialogProperties.ModernSimpleCostDialogProperties("dialog_generals_skillTree_resetDialog_header", __dep_exact_92d05af59ee2ff30.Localize.text("dialog_generals_skillTree_resetDialog_desc", [this.dialogProperties.generalVO.nameTextShort]), __s20local0, this.bindFunction(this.onConfirmReset));
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_ModernSimpleCostDialog.ModernSimpleCostDialog, __s20local1);
  };
  GeneralsSkillTreeDialog.prototype.showBuyResetTokenDialog = function () {
    var __s22local0 = new __dep_export_CastleGenericBuyDialogProperties.CastleGenericBuyDialogProperties();
    __s22local0.buyType = __dep_exact_26a421b704832cff.PackageConst.BUY_TYPE_GENERAL_SKILLS_RESET_TOKEN;
    __s22local0.eventPackageVO = __dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(GeneralsSkillTreeDialog.PACKAGE_ID_RESET_TOKEN);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_ModernPackageShopBuyDialog.ModernPackageShopBuyDialog, __s22local0);
  };
  GeneralsSkillTreeDialog.prototype.onGeneralsUpdated = function (__s24param0) {
    var __s24local0 = this.dialogProperties.generalVO.getSkillPointsSpent();
    this._itxt_pointsAvailable.textContentVO.numberValue = this.dialogProperties.generalVO.getSkillPointsAvailable();
    this._itxt_pointsSpent.textContentVO.numberValue = __s24local0;
    if (this._treeComponent) {
      this._treeComponent.updateTree();
    }
    this.updateResetButton();
  };
  GeneralsSkillTreeDialog.prototype.onCurrenciesUpdated = function (__s27param0) {
    this._itxt_resetTokens.textContentVO.numberValue = __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_GENERAL_SKILL_RESET_TOKEN);
  };
  GeneralsSkillTreeDialog.prototype.onScroll = function () {
    this.dialogDisp.mc_list.y = this._scrollY - this._scrollComponent.currentValue;
  };
  GeneralsSkillTreeDialog.prototype.onConfirmReset = function () {
    this.dialogProperties.generalVO.resetSkills();
  };
  GeneralsSkillTreeDialog.prototype.onClickSkill = function (__s33param0) {
    var __s33local0 = this.dialogProperties.generalVO.assignedLord;
    if (__s33local0 && !__s33local0.isAvailableForEquip) {
      this.dialogDisp.mc_locked.visible = true;
    } else {
      this.dialogProperties.generalVO.unlockSkill(__s33param0);
    }
  };
  GeneralsSkillTreeDialog.prototype.onClick = function (__s37param0) {
    __s1param0.prototype.onClick.call(this, __s37param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s37param0.target)) {
      switch (__s37param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_generals_skillTree"));
          break;
        case this.dialogDisp.btn_buyTokens:
          this.showBuyResetTokenDialog();
          break;
        case this.dialogDisp.btn_reset:
          this.showResetDialog();
          break;
        case this.dialogDisp.mc_locked:
          this.dialogDisp.mc_locked.visible = false;
      }
    }
  };
  Object.defineProperty(GeneralsSkillTreeDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsSkillTreeDialog.NAME = "GeneralSkillTreeDialogExt1";
  GeneralsSkillTreeDialog.PACKAGE_ID_RESET_TOKEN = 10518;
  return GeneralsSkillTreeDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.GeneralsSkillTreeDialog = __s0local0;
