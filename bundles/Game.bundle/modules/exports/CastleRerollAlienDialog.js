Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SReplaceAlienCampVO = require("gge-module:export_C2SReplaceAlienCampVO");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleRerollAlienDialog() {
    var __s3local0 = this;
    __s3local0.MAX_CURRENCY = 6;
    __s3local0.softCurrencyIndex = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleRerollAlienDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRerollAlienDialog, __s1param0);
  CastleRerollAlienDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_info, this.dialogDisp.btn_arrow_left, this.dialogDisp.btn_arrow_right, this.dialogDisp.btn_buy_soft, this.dialogDisp.btn_buy_hard], __dep_export_ClickFeedbackButton.ClickFeedbackButton, 1);
  };
  CastleRerollAlienDialog.prototype.onClick = function (__s7param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s7param0.target)) {
      __s1param0.prototype.onClick.call(this, __s7param0);
      switch (__s7param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_dethrone"));
          break;
        case this.dialogDisp.btn_arrow_left:
          this.currPage(-1);
          break;
        case this.dialogDisp.btn_arrow_right:
          this.currPage(1);
          break;
        case this.dialogDisp.btn_buy_soft:
          this.requestReroll(false);
          break;
        case this.dialogDisp.btn_buy_hard:
          this.requestReroll(true);
          break;
        case this.dialogDisp.btn_info:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleRerollAlienChancesDialog.CastleRerollAlienChancesDialog);
      }
    }
  };
  CastleRerollAlienDialog.prototype.requestReroll = function (__s11param0) {
    __dep_export_CastleModel.CastleModel.alienRerollData.requestRerollIsHard = __s11param0;
    __dep_export_CastleModel.CastleModel.alienRerollData.requestWMO = this.dialogProperties.worldMapObjectVO;
    if (__s11param0 && __dep_export_CastleModel.CastleModel.alienRerollData.showWarningPopup && this.dialogProperties.worldMapObjectVO.alreadyRerolled) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleRerollAlienWarningDialog.CastleRerollAlienWarningDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardYesNoDialogProperties("", "", this.bindFunction(this.onSendReroll)));
    } else {
      this.onSendReroll(__s11param0);
    }
  };
  CastleRerollAlienDialog.prototype.onSendReroll = function (__s15param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SReplaceAlienCampVO.C2SReplaceAlienCampVO(__s15param0 ? "C2" : this.currencyKeys[this.softCurrencyIndex], this.dialogProperties.worldMapObjectVO.absAreaPosX, this.dialogProperties.worldMapObjectVO.absAreaPosY));
    this.hide();
  };
  CastleRerollAlienDialog.prototype.currPage = function (__s17param0) {
    this.softCurrencyIndex += __s17param0;
    if (this.softCurrencyIndex < 0) {
      this.softCurrencyIndex = this.currencyKeys.length - 1;
    }
    if (this.softCurrencyIndex >= this.currencyKeys.length) {
      this.softCurrencyIndex = 0;
    }
    this.updateCosts();
    this.updateBuyButtons(false);
  };
  CastleRerollAlienDialog.prototype.updateCosts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_hard, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.alienRerollData.getCostHard()));
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.mc_soft).addIconMc(this.dialogDisp.mc_soft), this.getSoftCollectableVOFromIndex(this.softCurrencyIndex), this.iconRenderOptions);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_soft, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.alienRerollData.getCostSoftByKey(this.currencyKeys[this.softCurrencyIndex])));
  };
  CastleRerollAlienDialog.prototype.updateMinMaxInfo = function () {
    var __s23local0;
    var __s23local1;
    var __s23local2 = this.dialogProperties.worldMapObjectVO;
    if (this.dialogProperties.eventVO.isDifficultyScalingActivated && __s23local2.difficultyCamp) {
      __s23local0 = __s23local2.difficultyCamp.normalDiffDefStrengthBoostMinDefense;
      __s23local1 = __s23local2.difficultyCamp.normalDiffDefStrengthBoostMaxDefense;
      this.textFieldManager.registerTextField(this.dialogDisp.txt_soft_copy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("percentage_range_neutral_desc", [__s23local0, __s23local1]));
    } else {
      __s23local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.alienRerollData.softChancesReroll[0].amountUnits);
      __s23local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.alienRerollData.softChancesReroll[__dep_export_CastleModel.CastleModel.alienRerollData.softChancesReroll.length - 1].amountUnits);
      this.textFieldManager.registerTextField(this.dialogDisp.txt_soft_copy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("value_addRange", [__s23local0, __s23local1]));
    }
    if (this.dialogProperties.eventVO.isDifficultyScalingActivated && __s23local2.difficultyCamp) {
      __s23local0 = __s23local2.difficultyCamp.premiumDiffDefStrengthBoostMinDefense;
      __s23local1 = __s23local2.difficultyCamp.premiumDiffDefStrengthBoostMaxDefense;
      this.textFieldManager.registerTextField(this.dialogDisp.txt_hard_copy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("percentage_range_neutral_desc", [__s23local0, __s23local1]));
    } else {
      __s23local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.alienRerollData.hardChancesReroll[0].amountUnits);
      __s23local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.alienRerollData.hardChancesReroll[__dep_export_CastleModel.CastleModel.alienRerollData.hardChancesReroll.length - 1].amountUnits);
      this.textFieldManager.registerTextField(this.dialogDisp.txt_hard_copy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("value_addRange", [__s23local0, __s23local1]));
    }
  };
  CastleRerollAlienDialog.prototype.showLoaded = function (__s29param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s29param0);
    this.updateCurrencyInventory();
    this.updateCosts();
    this.updateMinMaxInfo();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_dethrone_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_dethrone_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_soft_title, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_dethrone_option_exile")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_hard_title, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_dethrone_option_fortify")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_buy_soft.txt_value, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("buy")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_buy_hard.txt_value, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("buy")));
    this.dialogDisp.btn_info.toolTipText = "dialog_dethrone_chances_tt";
    this.dialogDisp.btn_info.visible = !this.dialogProperties.eventVO.isDifficultyScalingActivated;
    this.dialogDisp.mc_ruby.toolTipText = "gold";
    this.dialogDisp.icon_diff_soldiercount.visible = this.dialogProperties.eventVO.isDifficultyScalingActivated;
    this.dialogDisp.icon_diff_soldiercount2.visible = this.dialogProperties.eventVO.isDifficultyScalingActivated;
    this.dialogDisp.icon_soldiercount.visible = !this.dialogProperties.eventVO.isDifficultyScalingActivated;
    this.dialogDisp.icon_soldiercount2.visible = !this.dialogProperties.eventVO.isDifficultyScalingActivated;
    this.updateBuyButtons(true);
  };
  CastleRerollAlienDialog.prototype.updateBuyButtons = function (__s31param0) {
    if (__s31param0) {
      __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.dialogDisp.btn_buy_soft, this.enoughSoftCurrency, 1);
      __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.dialogDisp.btn_buy_hard, this.enoughHardCurrency, 1);
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_buy_soft, this.enoughSoftCurrency);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_buy_hard, this.enoughHardCurrency);
    }
    this.dialogDisp.btn_buy_soft.toolTipText = this.enoughSoftCurrency ? null : new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("buy_insufficientCurrency", [this.getSoftCollectableVOFromIndex(this.softCurrencyIndex).getNameTextId()]);
    if (this.enoughHardCurrency) {
      this.dialogDisp.btn_buy_hard.toolTipText = null;
    } else {
      this.dialogDisp.btn_buy_hard.toolTipText = new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("buy_insufficientCurrency", [__dep_export_CastleModel.CastleModel.currencyData.c2.getNameTextId()]);
    }
  };
  Object.defineProperty(CastleRerollAlienDialog.prototype, "enoughSoftCurrency", {
    get: function () {
      if (this.currencyKeys[this.softCurrencyIndex] == "C1") {
        return __dep_export_CastleModel.CastleModel.currencyData.c1Amount >= __dep_export_CastleModel.CastleModel.alienRerollData.getCostSoftByKey(this.currencyKeys[this.softCurrencyIndex]);
      } else {
        return __dep_export_CastleModel.CastleModel.currencyData.getAmountByKey(this.currencyKeys[this.softCurrencyIndex]) >= __dep_export_CastleModel.CastleModel.alienRerollData.getCostSoftByKey(this.currencyKeys[this.softCurrencyIndex]);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRerollAlienDialog.prototype, "enoughHardCurrency", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.currencyData.c2Amount >= __dep_export_CastleModel.CastleModel.alienRerollData.getCostHard();
    },
    enumerable: true,
    configurable: true
  });
  CastleRerollAlienDialog.prototype.updateCurrencyInventory = function () {
    this.destroyCollectableRenderList();
    for (var __s43local0 = 0; __s43local0 < this.MAX_CURRENCY; __s43local0++) {
      if (__s43local0 < this.currencyKeys.length) {
        this.dialogDisp["i" + __s43local0].visible = true;
        var __s43local1 = 0;
        __s43local1 = this.currencyKeys[__s43local0] == "C1" ? __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.currencyData.c1Amount) : __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.currencyData.getAmountByKey(this.currencyKeys[__s43local0]));
        this.textFieldManager.registerTextField(this.dialogDisp["i" + __s43local0].txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s43local1));
        __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp["i" + __s43local0].mc_icon).addIconMc(this.dialogDisp["i" + __s43local0].mc_icon), this.getSoftCollectableVOFromIndex(__s43local0), this.iconRenderOptions);
      } else {
        this.dialogDisp["i" + __s43local0].visible = false;
      }
    }
  };
  Object.defineProperty(CastleRerollAlienDialog.prototype, "iconRenderOptions", {
    get: function () {
      if (!this._renderOptions) {
        this._renderOptions = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, new __s0local0(30, 30));
        this._renderOptions.tooltip.useAmount = false;
      }
      return this._renderOptions;
    },
    enumerable: true,
    configurable: true
  });
  CastleRerollAlienDialog.prototype.getSoftCollectableVOFromIndex = function (__s52param0) {
    if (this.currencyKeys[__s52param0] == "C1") {
      return __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.C1);
    } else {
      return __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 0, __dep_export_CastleModel.CastleModel.currencyData.getXmlCurrencyByKey(this.currencyKeys[__s52param0]).id);
    }
  };
  Object.defineProperty(CastleRerollAlienDialog.prototype, "currencyKeys", {
    get: function () {
      return this.dialogProperties.eventVO.rerollCurrencyKeys;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRerollAlienDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleRerollAlienDialog.NAME = "CastleRerollAlien2";
  return CastleRerollAlienDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleRerollAlienDialog = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleRerollAlienChancesDialog = require("gge-module:export_CastleRerollAlienChancesDialog");
var __dep_export_CastleRerollAlienWarningDialog = require("gge-module:export_CastleRerollAlienWarningDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
