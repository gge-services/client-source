Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SCraftConstructionItemVO = require("gge-module:export_C2SCraftConstructionItemVO");
var __dep_export_C2SGetConstructionCraftingInfoVO = require("gge-module:export_C2SGetConstructionCraftingInfoVO");
var __dep_export_C2SGetContructionItemsInventoryVO = require("gge-module:export_C2SGetContructionItemsInventoryVO");
var __dep_export_C2SMinuteSkipCraftingVO = require("gge-module:export_C2SMinuteSkipCraftingVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function () {
  function CastleConstructionItemsCraftingSublayerProgress(__s3param0) {
    this.timerRunning = false;
    this.crafting = __s3param0;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3param0.idle.button, __s3param0.progress.btn_full_skip, __s3param0.progress.btn_minute_skip]);
    CastleConstructionItemsCraftingSublayerProgress.textFieldManager.registerTextField(__s3param0.title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ci_crafting"));
    CastleConstructionItemsCraftingSublayerProgress.textFieldManager.registerTextField(__s3param0.idle.button.text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ci_crafting_button"));
    CastleConstructionItemsCraftingSublayerProgress.textFieldManager.registerTextField(__s3param0.idle.text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ci_crafting_idle")).autoFitToBounds = true;
    this._processText = CastleConstructionItemsCraftingSublayerProgress.textFieldManager.registerTextField(__s3param0.progress.description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ci_crafting_process"));
    this._processText.autoFitToBounds = true;
    this._remainingTimeText = CastleConstructionItemsCraftingSublayerProgress.textFieldManager.registerTextField(__s3param0.progress.bar.text, new __dep_exact_92d05af59ee2ff30.TextVO(""));
  }
  CastleConstructionItemsCraftingSublayerProgress.prototype.hide = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.craftingTimer));
    this.timerRunning = false;
  };
  CastleConstructionItemsCraftingSublayerProgress.prototype.craftingTimer = function (__s7param0) {
    __dep_export_CastleModel.CastleModel.constructionItemData.craftingSeconds--;
    if (__dep_export_CastleModel.CastleModel.constructionItemData.craftingSeconds < 0) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetConstructionCraftingInfoVO.C2SGetConstructionCraftingInfoVO());
      this.craftingButton();
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetContructionItemsInventoryVO.C2SGetContructionItemsInventoryVO());
    } else {
      this.setCraftingValues();
    }
    var __s7local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.ConstructionConst.getFastCompleteCostC2(__dep_export_CastleModel.CastleModel.constructionItemData.craftingSeconds, 2));
    switch (__s7local0) {
      case 0:
        this.crafting.progress.btn_full_skip.toolTipText = {
          t: "freeSkipButton_tooltip",
          p: [__s7local0]
        };
        break;
      case 1:
        this.crafting.progress.btn_full_skip.toolTipText = {
          t: "fullSkipButtonCooldown_tooltip_singular",
          p: [__s7local0]
        };
        break;
      default:
        this.crafting.progress.btn_full_skip.toolTipText = {
          t: "fullSkipButtonCooldown_tooltip",
          p: [__s7local0]
        };
    }
  };
  CastleConstructionItemsCraftingSublayerProgress.prototype.craftingButton = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.craftingTimer));
    this.timerRunning = false;
    this.crafting.idle.visible = !(this.crafting.progress.visible = false);
  };
  CastleConstructionItemsCraftingSublayerProgress.prototype.craftingProgress = function () {
    if (!this.timerRunning && (__dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.craftingTimer)), this.timerRunning = true, __dep_export_CastleModel.CastleModel.constructionItemData.craftingRecipe)) {
      var __s14local0 = __dep_export_CastleModel.CastleModel.constructionItemData.craftingRecipe.constructionItem;
      this._processText.textContentVO.textReplacements = [__s14local0.nameTextId, __s14local0.level];
    }
    this.setCraftingValues();
  };
  CastleConstructionItemsCraftingSublayerProgress.prototype.setCraftingValues = function () {
    var __s17local0 = __dep_exact_f855840627e6e145.int(Math.max(1, __dep_export_CastleModel.CastleModel.constructionItemData.totalCraftingTime));
    this.crafting.progress.bar.bg.scaleX = Math.max(0, Math.min(1, 1 - __dep_export_CastleModel.CastleModel.constructionItemData.craftingSeconds / __s17local0));
    this._remainingTimeText.textContentVO = new __dep_exact_92d05af59ee2ff30.TextVO(__dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeStringBySeconds(__dep_export_CastleModel.CastleModel.constructionItemData.craftingSeconds));
    this.crafting.idle.visible = !(this.crafting.progress.visible = true);
  };
  CastleConstructionItemsCraftingSublayerProgress.prototype.update = function () {
    if (__dep_export_CastleModel.CastleModel.constructionItemData.craftingSeconds > -1) {
      this.craftingProgress();
    } else {
      this.craftingButton();
    }
  };
  CastleConstructionItemsCraftingSublayerProgress.prototype.onCICArrived = function (__s23param0) {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.CIC_ARRIVED, this.bindFunction(this.onCICArrived));
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.crafting.idle.button, true);
    if (__dep_exact_f855840627e6e145.int(__s23param0.params[0]) == __dep_exact_26a421b704832cff.ERROR.ALL_OK) {
      this.craftingProgress();
    } else {
      this.craftingButton();
    }
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetContructionItemsInventoryVO.C2SGetContructionItemsInventoryVO());
  };
  CastleConstructionItemsCraftingSublayerProgress.prototype.onClick = function (__s27param0, __s27param1) {
    switch (__s27param0) {
      case this.crafting.idle.button:
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.crafting.idle.button, false);
        __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.CIC_ARRIVED, this.bindFunction(this.onCICArrived));
        if (__dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId)) {
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCraftConstructionItemVO.C2SCraftConstructionItemVO(__s27param1.id, __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId));
        } else {
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCraftConstructionItemVO.C2SCraftConstructionItemVO(__s27param1.id, __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID, __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID).objectId));
        }
        break;
      case this.crafting.progress.btn_minute_skip:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleMinuteSkipDialog.CastleMinuteSkipDialog, new __dep_export_ConstructionItemCraftingMinuteSkipProperties.ConstructionItemCraftingMinuteSkipProperties(__s27param1));
        break;
      case this.crafting.progress.btn_full_skip:
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SMinuteSkipCraftingVO.C2SMinuteSkipCraftingVO("-", 1));
    }
  };
  Object.defineProperty(CastleConstructionItemsCraftingSublayerProgress, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleConstructionItemsCraftingSublayerProgress.prototype.disableButton = function (__s34param0) {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.crafting.idle.button, false);
    this.crafting.idle.button.toolTipText = __s34param0;
  };
  CastleConstructionItemsCraftingSublayerProgress.prototype.enableButton = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.crafting.idle.button, true);
    this.crafting.idle.button.toolTipText = null;
  };
  return CastleConstructionItemsCraftingSublayerProgress;
}();
exports.CastleConstructionItemsCraftingSublayerProgress = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleMinuteSkipDialog = require("gge-module:export_CastleMinuteSkipDialog");
var __dep_export_ConstructionItemCraftingMinuteSkipProperties = require("gge-module:export_ConstructionItemCraftingMinuteSkipProperties");
