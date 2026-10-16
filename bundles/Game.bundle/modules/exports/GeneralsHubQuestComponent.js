Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_C2SSpinCharacterTombolaVO = require("gge-module:export_C2SSpinCharacterTombolaVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRendererList = require("gge-module:export_CollectableRendererList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_BasicIngameUIComponent = require("gge-module:export_BasicIngameUIComponent");
var __dep_export_CastleGenericBuyDialogProperties = require("gge-module:export_CastleGenericBuyDialogProperties");
var __dep_export_ModernPackageShopBuyDialog = require("gge-module:export_ModernPackageShopBuyDialog");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function GeneralsHubQuestComponent(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.tombolaIndex = 0;
    __s3local0.questID = __s3param1;
    __s3local0.questVO = __dep_export_CastleModel.CastleModel.generalsData.getGeneralsHubQuestVOByCharacterID(__s3local0.questID);
    __s3local0.initComponent();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralsHubQuestComponent, __s1param0);
  GeneralsHubQuestComponent.prototype.initComponent = function () {
    __s1param0.prototype.initComponent.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dispClip.btn_left, this.dispClip.btn_right, this.dispClip.btn_offering, this.dispClip.btn_buyOffering, this.dispClip.btn_free], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
  };
  GeneralsHubQuestComponent.prototype.updateCostsSection = function () {
    var __s7local0 = this.questVO.getCostVOForPayQuest(this.tombolaIndex);
    var __s7local1 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON, new __s0local1(35, 35));
    var __s7local2 = new __dep_export_CollectableRenderClips.CollectableRenderClips().addIconMc(this.dispClip.mc_icon);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(new __dep_export_CollectableRendererList.CollectableRendererList(), __s7local2, __s7local0, __s7local1);
    this.dispClip.btn_left.visible = this.dispClip.btn_right.visible = this.questVO.amountOfTombolas > 1;
    var __s7local3 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON, new __s0local1(38, 38));
    __s7local3.icon.useDropShadowIcon = true;
    var __s7local4 = new __dep_export_CollectableRenderClips.CollectableRenderClips().addIconMc(this.dispClip.btn_offering.mc_icon);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(new __dep_export_CollectableRendererList.CollectableRendererList(), __s7local4, __s7local0, __s7local3);
  };
  GeneralsHubQuestComponent.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.updateDisp();
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    this.disp.parent.addEventListener(__s0local0.CLICK, this.bindFunction(this.onMouseClick));
  };
  GeneralsHubQuestComponent.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    this.disp.parent.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onMouseClick));
  };
  GeneralsHubQuestComponent.prototype.updateDisp = function () {
    var __s13local0 = this.questVO.availableQuests > 0;
    var __s13local1 = this.questVO.getTombolaOfferingCurrencyID(this.tombolaIndex);
    var __s13local2 = this.questVO.getPackageVOForCurrencyID(__s13local1);
    var __s13local3 = __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__s13local1);
    var __s13local4 = this.questVO.getTombolaID(this.tombolaIndex) == this.questVO.freeOpeningTombolaID;
    var __s13local5 = !__s13local0 && __s13local3 > 0;
    var __s13local6 = !__s13local0 && __s13local3 <= 0;
    this.dispClip.btn_free.visible = __s13local0;
    this.dispClip.btn_buyOffering.visible = __s13local6;
    this.dispClip.btn_offering.visible = __s13local5;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.dispClip.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.questVO.nameTextID));
    this.updateTime();
    this.dispClip.mc_time.visible = __s13local4 && !__s13local0;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.dispClip.btn_free.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_inn_draw_button")));
    var __s13local7 = "";
    if (__s13local4 && __s13local0) {
      __s13local7 += __dep_exact_92d05af59ee2ff30.Localize.text("dialog_generals_inn_freeDrawAvailable_tooltip") + "\n";
      __s13local7 += __dep_exact_92d05af59ee2ff30.Localize.text("numbersXY", [this.questVO.availableQuests, this.questVO.maxFreeOpenings]);
    } else if (!__s13local4) {
      __s13local7 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_generals_inn_noFreeDraw_tooltip");
    }
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.dispClip.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__s13local7)).visible = __s13local7.length > 0;
    var __s13local8 = __s13local4 && __s13local0 ? 0 : 1;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.dispClip.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("xamount", [__s13local8]));
    var __s13local9 = __dep_export_CastleModel.CastleModel.currencyData.getAmountById(this.questVO.getTombolaOfferingCurrencyID(this.tombolaIndex));
    this.dispClip.btn_free.visible = __s13local4 && __s13local0;
    this.dispClip.btn_buyOffering.visible = !this.dispClip.btn_free.visible && __s13local9 <= 1 && !!__s13local2;
    this.dispClip.btn_offering.visible = !this.dispClip.btn_free.visible && __s13local9 > 0;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.dispClip.btn_offering.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_inn_offering_button")));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.dispClip.btn_buyOffering.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_inn_buyOffering_button")));
    this.updateCostsSection();
  };
  GeneralsHubQuestComponent.prototype.updateTime = function () {
    var __s17local0 = "";
    __s17local0 += __dep_exact_92d05af59ee2ff30.Localize.text("dialog_generals_inn_freeDrawCountdown_tooltip") + "\n";
    __s17local0 += __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.questVO.remainingCoolDownInSeconds, __dep_export_ClientConstTime.ClientConstTime.SECONDS_PER_DAY, 1);
    var __s17local1 = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.dispClip.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(__s17local0));
    if (__s17local1.numLines >= 3) {
      __s17local1.textContentVO.stringValue = __s17local1.textContentVO.stringValue.replace("\n", " ");
    }
    if (__s17local1.numLines >= 3) {
      __s17local1.autoFitToBounds = true;
    }
    __s17local1.visible = this.questVO.getTombolaID(this.tombolaIndex) == this.questVO.freeOpeningTombolaID && this.questVO.availableQuests <= 0;
  };
  GeneralsHubQuestComponent.prototype.onMouseClick = function (__s21param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s21param0.target)) {
      switch (__s21param0.target) {
        case this.dispClip.btn_offering:
          this.onPaidQuest();
          break;
        case this.dispClip.btn_buyOffering:
          this.onBuyOffer();
          break;
        case this.dispClip.btn_free:
          this.onFreeQuest();
          break;
        case this.dispClip.btn_left:
          if (this.tombolaIndex <= 0) {
            this.tombolaIndex = this.questVO.amountOfTombolas - 1;
          } else {
            this.tombolaIndex--;
          }
          this.updateDisp();
          break;
        case this.dispClip.btn_right:
          if (this.tombolaIndex >= this.questVO.amountOfTombolas - 1) {
            this.tombolaIndex = 0;
          } else {
            this.tombolaIndex++;
          }
          this.updateDisp();
      }
    }
  };
  GeneralsHubQuestComponent.prototype.onFreeQuest = function () {
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSpinCharacterTombolaVO.C2SSpinCharacterTombolaVO(this.questID, this.questVO.getTombolaOfferingCurrencyID(this.tombolaIndex), 1, 1));
    __dep_export_CastleModel.CastleModel.generalsData.lastPayedQuestCurrency = this.questVO.getTombolaOfferingCurrencyID(this.tombolaIndex);
  };
  GeneralsHubQuestComponent.prototype.onPaidQuest = function () {
    __dep_export_CastleModel.CastleModel.generalsData.lastPayedQuestCurrency = this.questVO.getTombolaOfferingCurrencyID(this.tombolaIndex);
    if (__dep_export_CastleModel.CastleModel.currencyData.getAmountById(this.questVO.getTombolaOfferingCurrencyID(this.tombolaIndex)) > 0) {
      __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSpinCharacterTombolaVO.C2SSpinCharacterTombolaVO(this.questID, this.questVO.getTombolaOfferingCurrencyID(this.tombolaIndex), 0, 1));
    }
  };
  GeneralsHubQuestComponent.prototype.onBuyOffer = function () {
    var __s34local0 = new __dep_export_CastleGenericBuyDialogProperties.CastleGenericBuyDialogProperties();
    __s34local0.eventPackageVO = __dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(this.questVO.getPackageVOForCurrencyID(this.questVO.getTombolaOfferingCurrencyID(this.tombolaIndex)).packageID);
    __s34local0.buyType = __dep_exact_26a421b704832cff.PackageConst.BUY_TYPE_OFFERINGS;
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_ModernPackageShopBuyDialog.ModernPackageShopBuyDialog, __s34local0);
  };
  Object.defineProperty(GeneralsHubQuestComponent.prototype, "dispClip", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  return GeneralsHubQuestComponent;
}(__dep_export_BasicIngameUIComponent.BasicIngameUIComponent);
exports.GeneralsHubQuestComponent = __s0local2;
