Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_5 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_6 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_C2SGetTaxInfoVO = require("gge-module:export_C2SGetTaxInfoVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleDialogEvent = require("gge-module:export_CastleDialogEvent");
var __dep_export_CastleResourceBoosterEvent = require("gge-module:export_CastleResourceBoosterEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleBoosterSaleData = require("gge-module:export_CastleBoosterSaleData");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleCharacterYesNoOKDialogProperties = require("gge-module:export_CastleCharacterYesNoOKDialogProperties");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleCollectTaxElementEvent = require("gge-module:export_CastleCollectTaxElementEvent");
var __dep_export_CollectTaxElementVO = require("gge-module:export_CollectTaxElementVO");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CastleCollectTaxStartDialog() {
    var __s3local0 = this;
    __s3local0.taxVOs = [];
    __s3local0.isAllowedSecondUpdate = false;
    __s3local0.dragScrollButton = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleCollectTaxStartDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCollectTaxStartDialog, __s1param0);
  CastleCollectTaxStartDialog.prototype.initLoaded = function (__s5param0 = null) {
    this.dialogDisp.btn_bribe.toolTipText = "dialog_collecttax_btn_bribe";
    this.dialogDisp.infoBribeBonus.toolTipText = "dialog_collecttax_bribebonus";
    this.dialogDisp.infoBribeBonus.mouseChildren = false;
    this.dialogDisp.infoPopulation.toolTipText = "population";
    this.dialogDisp.infoPopulation.mouseChildren = false;
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    for (var __s5local0 = 0; __s5local0 < CastleCollectTaxStartDialog.TAX_ITEMS_COUNT; __s5local0++) {
      this.taxVOs.push(new __dep_export_CollectTaxElementVO.CollectTaxElementVO(__s5local0));
    }
    if (!this.scrollList) {
      this.scrollList = new __dep_exact_9e901e8e2483a22f_3.ItemScrollList(this.dialogDisp.mc_taxList);
      this.scrollList.scrollItemClass = __dep_export_CastleCollectTaxElement.CastleCollectTaxElement;
      this.scrollList.hideButtons = false;
      this.scrollList.clear();
      if (this.taxVOs != null) {
        for (var __s5local1 = 0, __s5local2 = this.taxVOs; __s5local1 < __s5local2.length; __s5local1++) {
          var __s5local3 = __s5local2[__s5local1];
          if (__s5local3 !== undefined) {
            this.scrollList.pushContent(__s5local3);
          }
        }
      }
      this.scrollList.initList();
    }
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_bribe, this.dialogDisp.btn_help, this.dialogDisp.mc_taxList.btn_slider, this.dialogDisp.mc_taxList.btn_up, this.dialogDisp.mc_taxList.btn_down]);
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  CastleCollectTaxStartDialog.prototype.showLoaded = function (__s14param0 = null) {
    this.itxt_population ||= this.textFieldManager.registerTextField(this.dialogDisp.infoPopulation.txt_value, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.itxt_bribeBonus ||= this.textFieldManager.registerTextField(this.dialogDisp.infoBribeBonus.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.itxt_description ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("collect_tax_description"));
    this.isAllowedSecondUpdate = false;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetTaxInfoVO.C2SGetTaxInfoVO());
    this.lockDialog();
    __dep_exact_9e901e8e2483a22f_4.MovieClipHelper.clearMovieClip(this.dialogDisp.charHolder);
    var __s14local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("CharTaxes", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("CharTaxes"), null, 0, false, __dep_exact_81dacdf05bd32292_1.getDefinitionByName("QuestGiverBig_" + __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_UNKNOWN));
    __s14local0.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_1.ClipSizeComponent(202, 229);
    this.dialogDisp.charHolder.addChild(__s14local0);
    this.updateScrollPart();
    this.handleButtons();
    this.updateBoosterDisplay();
    __s1param0.prototype.showLoaded.call(this, __s14param0);
  };
  CastleCollectTaxStartDialog.prototype.updateScrollPart = function () {
    this.scrollList.initList();
    this.updateSliderPos();
  };
  CastleCollectTaxStartDialog.prototype.onBoosterDataRefreshed = function (__s18param0) {
    this.updateScrollPart();
    this.updateBoosterDisplay();
    this.fillItems();
  };
  CastleCollectTaxStartDialog.prototype.updateBoosterDisplay = function () {
    if (__dep_export_CastleModel.CastleModel.boostData.taxBribeVO.isActive) {
      this.dialogDisp.infoBribeBonus.toolTipText = __dep_exact_9e901e8e2483a22f_6.TimeStringHelper.getTimeToString(__dep_export_CastleModel.CastleModel.boostData.taxBribeVO.remainingTimeInSeconds, __dep_exact_9e901e8e2483a22f_6.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text);
      this.itxt_bribeBonus.textContentVO.textId = __dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PERCENTAGE;
      this.itxt_bribeBonus.textContentVO.textReplacements = [Math.round(__dep_exact_26a421b704832cff.BoosterConst.TAX_BRIBE_BOOST * 100)];
    } else {
      this.dialogDisp.infoBribeBonus.toolTipText = "dialog_collecttax_bribebonus";
      this.dialogDisp.btn_bribe.enabled = this.isOutOfTutorial();
      this.itxt_bribeBonus.textContentVO.textId = "-";
    }
    this.dialogDisp.btn_bribe.visible = this.isOutOfTutorial();
    __dep_export_CastleModel.CastleModel.boosterSaleData.handleMc(this.dialogDisp.btn_bribe.mc_discount, __dep_exact_26a421b704832cff.BoosterConst.TAX);
    this.dialogDisp.btn_bribe.mc_discount.visible = false;
  };
  CastleCollectTaxStartDialog.prototype.handleButtons = function () {
    this.scrollList.unlockList();
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_bribe, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_close, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_taxList.btn_slider, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_help, true);
  };
  CastleCollectTaxStartDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.TXI_ARRIVED, this.bindFunction(this.onTXIArrived));
    this.scrollList.addEventListener(__dep_exact_9e901e8e2483a22f_5.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onTaxItemsScrolled));
    this.dialogDisp.addEventListener(__s0local0.PRESS_MOVE, this.bindFunction(this.onSliding));
    __dep_export_CastleModel.CastleModel.boostData.addEventListener(__dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterDataRefreshed));
    __dep_export_CastleModel.CastleModel.boosterSaleData.addEventListener(__dep_export_CastleBoosterSaleData.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataRefreshed));
    for (var __s26local0 = 0; __s26local0 < this.scrollList.veList.length; __s26local0++) {
      this.scrollList.veList[__s26local0].addEventListener(__dep_export_CastleCollectTaxElementEvent.CastleCollectTaxElementEvent.START_TAX_COLLECTION, this.bindFunction(this._onStartTaxCollection));
    }
  };
  CastleCollectTaxStartDialog.prototype._onStartTaxCollection = function (__s30param0) {
    this.setTaxElements(false);
  };
  CastleCollectTaxStartDialog.prototype.setTaxElements = function (__s32param0) {
    for (var __s32local0 = 0; __s32local0 < this.scrollList.veList.length; __s32local0++) {
      this.scrollList.veList[__s32local0].isActive = __s32param0;
    }
  };
  CastleCollectTaxStartDialog.prototype.removeEventListenerOnHide = function () {
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.TXI_ARRIVED, this.bindFunction(this.onTXIArrived));
    this.scrollList.removeEventListener(__dep_exact_9e901e8e2483a22f_5.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onTaxItemsScrolled));
    this.dialogDisp.mc_taxList.removeEventListener(__s0local0.PRESS_MOVE, this.bindFunction(this.onSliding));
    __dep_export_CastleModel.CastleModel.boostData.removeEventListener(__dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterDataRefreshed));
    __dep_export_CastleModel.CastleModel.boosterSaleData.removeEventListener(__dep_export_CastleBoosterSaleData.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataRefreshed));
    for (var __s36local0 = 0; __s36local0 < this.scrollList.veList.length; __s36local0++) {
      this.scrollList.veList[__s36local0].removeEventListener(__dep_export_CastleCollectTaxElementEvent.CastleCollectTaxElementEvent.START_TAX_COLLECTION, this.bindFunction(this._onStartTaxCollection));
    }
    __s1param0.prototype.removeEventListenerOnHide.call(this);
  };
  CastleCollectTaxStartDialog.prototype.fillItems = function () {
    this.setTaxElements(true);
    this.updateSliderPos();
    this.controller.dispatchEvent(new __dep_export_CastleDialogEvent.CastleDialogEvent(__dep_export_CastleDialogEvent.CastleDialogEvent.TAX_ITEMS_FILLED));
  };
  CastleCollectTaxStartDialog.prototype.onTaxItemsScrolled = function (__s42param0) {
    this.updateSliderPos();
  };
  CastleCollectTaxStartDialog.prototype.updateSliderPos = function () {
    var __s44local0 = __dep_exact_f855840627e6e145.int(CastleCollectTaxStartDialog.TAX_ITEMS_COUNT - this.scrollList.itemsVisibleAtOnce);
    var __s44local1 = __dep_exact_f855840627e6e145.int(this.dialogDisp.mc_taxList.mc_sliderLine.height / __s44local0);
    var __s44local2 = this.dialogDisp.mc_taxList.btn_slider.height / 2;
    this.dialogDisp.mc_taxList.btn_slider.y = __s44local1 * this.scrollList.currentStartIndex + this.dialogDisp.mc_taxList.mc_sliderLine.y - __s44local2;
  };
  CastleCollectTaxStartDialog.prototype.onSliding = function (__s46param0) {
    if (this.dragScrollButton) {
      var __s46local0 = this.dialogDisp.mc_taxList;
      var __s46local1 = (Math.min(Math.max(__s46local0.mouseY, __s46local0.mc_sliderLine.y), __s46local0.mc_sliderLine.y + __s46local0.mc_sliderLine.height) - __s46local0.mc_sliderLine.y) / __s46local0.mc_sliderLine.height;
      __s46local1 = Math.min(Math.max(__s46local1, 0), 1);
      var __s46local2 = __dep_exact_f855840627e6e145.int(CastleCollectTaxStartDialog.TAX_ITEMS_COUNT - this.scrollList.itemsVisibleAtOnce);
      var __s46local3 = __dep_exact_f855840627e6e145.int(__s46local0.mc_sliderLine.height / __s46local2);
      var __s46local4 = Math.round(__s46local0.mc_sliderLine.height * __s46local1 / __s46local3);
      this.scrollList.initList(__s46local4);
      this.updateSliderPos();
    }
  };
  CastleCollectTaxStartDialog.prototype.onTXIArrived = function (__s49param0) {
    this.isAllowedSecondUpdate = true;
    this.onTaxDataUpdated();
  };
  CastleCollectTaxStartDialog.prototype.onTaxDataUpdated = function (__s51param0 = null) {
    if (this.isAllowedSecondUpdate && this.taxInfoVO) {
      if (this.taxInfoVO.population <= 0) {
        this.hide();
        __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleCharacterYesNoOKDialog.CastleCharacterYesNoOKDialog, new __dep_export_CastleCharacterYesNoOKDialogProperties.CastleCharacterYesNoOKDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_warning"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_nofolk_copy"), 2, null, null, false));
      }
      this.unLockDialog();
      this.itxt_population.textContentVO.stringValue = String(this.taxInfoVO.population);
      this.itxt_bribeBonus = this.textFieldManager.registerTextField(this.dialogDisp.infoBribeBonus.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PERCENTAGE, [Math.round(__dep_exact_26a421b704832cff.BoosterConst.TAX_BRIBE_BOOST * 100)]));
      this.updateBoosterDisplay();
      this.fillItems();
    }
  };
  CastleCollectTaxStartDialog.prototype.onMouseDown = function (__s55param0) {
    __s1param0.prototype.onMouseDown.call(this, __s55param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s55param0.target) && __s55param0.target == this.dialogDisp.mc_taxList.btn_slider) {
      this.dragScrollButton = true;
    }
  };
  CastleCollectTaxStartDialog.prototype.onMouseUp = function (__s58param0) {
    __s1param0.prototype.onMouseUp.call(this, __s58param0);
    this.dragScrollButton = false;
  };
  CastleCollectTaxStartDialog.prototype.onClick = function (__s60param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s60param0.target)) {
      __s1param0.prototype.onClick.call(this, __s60param0);
      switch (__s60param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_bribe:
          __dep_export_CastleModel.CastleModel.boostData.taxBribeVO.clickedBuyButton();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_tax_start"));
      }
    }
  };
  CastleCollectTaxStartDialog.prototype.checkWaitingAnimState = function (__s64param0) {
    switch (__s64param0) {
      case __dep_export_ClientConstSF.ClientConstSF.C2S_START_COLLECT_TAX:
        this.unLockDialog();
        __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleCollectTaxProgressDialog.CastleCollectTaxProgressDialog);
        this.hide();
        break;
      case __dep_export_ClientConstSF.ClientConstSF.C2S_BRIBE_TAX_COLLECTOR:
        this.unLockDialog();
    }
  };
  Object.defineProperty(CastleCollectTaxStartDialog.prototype, "taxInfoVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.taxData.taxInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleCollectTaxStartDialog.prototype.onMouseOver = function (__s69param0) {
    if (__s69param0.target == this.dialogDisp.infoBribeBonus && __dep_export_CastleModel.CastleModel.boostData.taxBribeVO.isActive) {
      this.dialogDisp.infoBribeBonus.toolTipText = __dep_exact_9e901e8e2483a22f_6.TimeStringHelper.getTimeToString(__dep_export_CastleModel.CastleModel.boostData.taxBribeVO.remainingTimeInSeconds, __dep_exact_9e901e8e2483a22f_6.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text);
    }
    __s1param0.prototype.onMouseOver.call(this, __s69param0);
  };
  CastleCollectTaxStartDialog.prototype.blockScrollList = function (__s72param0) {
    if (__s72param0) {
      this.scrollList.lockList();
    } else {
      this.scrollList.unlockList();
    }
  };
  CastleCollectTaxStartDialog.__initialize_static_members = function () {
    CastleCollectTaxStartDialog.TAX_ITEMS_COUNT = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.TaxConst.COLLECTOR_DURATION.length);
  };
  CastleCollectTaxStartDialog.NAME = "CastleCollectTax";
  return CastleCollectTaxStartDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleCollectTaxStartDialog = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleCharacterYesNoOKDialog = require("gge-module:export_CastleCharacterYesNoOKDialog");
var __dep_export_CastleCollectTaxElement = require("gge-module:export_CastleCollectTaxElement");
var __dep_export_CastleCollectTaxProgressDialog = require("gge-module:export_CastleCollectTaxProgressDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
