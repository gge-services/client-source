Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_RewardHubDialogProperties = require("gge-module:export_RewardHubDialogProperties");
var __dep_export_RewardHubMainDialog = require("gge-module:export_RewardHubMainDialog");
var __dep_export_MysteryBoxOpeningAnimationHandler = require("gge-module:export_MysteryBoxOpeningAnimationHandler");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_MysteryBoxRewardsAnimationHandler = require("gge-module:export_MysteryBoxRewardsAnimationHandler");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function MysteryBoxOpeningDialog() {
    var __s3local0 = __s1param0.call(this, MysteryBoxOpeningDialog.NAME) || this;
    __s3local0._pagesToRewardItemsMap = new Map();
    __s3local0._currentPage = 1;
    __s3local0._maxPages = 1;
    __s3local0._countRewardAnimations = 1;
    __s3local0._isAnimatingRewardsPages = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MysteryBoxOpeningDialog, __s1param0);
  MysteryBoxOpeningDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_confirm, this.dialogDisp.btn_open_another, this.dialogDisp.btn_left, this.dialogDisp.btn_right], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_confirm.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_mysteryBoxSystem_mysteryBoxHUB_confirm"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_open_another.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_mysteryBoxSystem_mysteryBoxHUB_openAnotherBox"))).autoFitToBounds = true;
    this.dialogDisp.btn_confirm.txt_label.mouseEnabled = false;
    this.dialogDisp.btn_open_another.txt_label.mouseEnabled = false;
    this._animationBoxOpeningHandler = new __dep_export_MysteryBoxOpeningAnimationHandler.MysteryBoxOpeningAnimationHandler(this.dialogDisp.mc_animation_box);
    this._animationRewardsHandler = new __dep_export_MysteryBoxRewardsAnimationHandler.MysteryBoxRewardsAnimationHandler();
    this.dialogDisp.icon_key_progress.mouseChildren = false;
    this.dialogDisp.icon_key_progress.toolTipText = "dialog_mysteryBoxSystem_keyDraws_basics_tooltip";
    this.dialogDisp.hud_deco_darkbrown_circle_32.mouseChildren = false;
    this.dialogDisp.hud_deco_darkbrown_circle_32.toolTipText = "dialog_mysteryBoxSystem_keyDraws_basics_tooltip";
    this.bg.alpha = 0.65;
  };
  MysteryBoxOpeningDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this._isFirstTimeFill = false;
    this._wasBarFilled = false;
    this.updateOpenBoxTooltip();
    var __s7local0 = this.dialogProperties.oldProgressValue;
    var __s7local1 = __dep_export_CastleModel.CastleModel.lootBoxData.getMysteryKeyProgressMax();
    this.dialogDisp.mc_progress.mc_bar.scaleX = Math.min(__s7local0 / __s7local1, 1);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_progress.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("numbersXY", [__s7local0, __s7local1]));
    this.dialogDisp.key_tooltip_area.toolTipText = "currency_name_" + this.getKeyNameByKeyId(this.dialogProperties.selectedKey);
    this.dialogDisp.icon_key.gotoAndStop(this.getKeyIconByKeyId(this.dialogProperties.selectedKey));
    this._iTxtKeysAmount = this.textFieldManager.registerTextField(this.dialogDisp.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    this.updateKeyAmount();
    this._currentPage = 1;
    this._countRewardAnimations = 1;
    this._maxPages = Math.ceil(this.dialogProperties.rewards.length / MysteryBoxOpeningDialog.MAX_REWARDS_PER_PAGE);
    this._animationBoxOpeningHandler.animationCompleteSignal.add(this.bindFunction(this.OnAnimationBoxOpeningComplete));
    this._animationRewardsHandler.animationCompleteSignal.add(this.bindFunction(this.OnAnimationRewardsComplete));
    var __s7local2 = __dep_export_CastleModel.CastleModel.lootBoxData.xml.getHighestCategoryForRewards(this.dialogProperties.tombolaId, this.dialogProperties.rewardIds);
    this._animationBoxOpeningHandler.startAnimation(this.dialogProperties.boxName, this.dialogProperties.boxRarity, __s7local2);
    this.distributeRewardItemsToPages();
    this.populateRewards();
    this.dialogDisp.btn_left.visible = false;
    this.dialogDisp.btn_right.visible = false;
    this.dialogDisp.btn_confirm.mouseChildren = false;
    this.dialogDisp.btn_open_another.mouseChildren = false;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_confirm, false);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_open_another, false);
  };
  MysteryBoxOpeningDialog.prototype.getKeyIconByKeyId = function (__s9param0) {
    var __s9local0 = 0;
    switch (__s9param0) {
      case __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_COMMON:
        __s9local0 = 1;
        break;
      case __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_RARE:
        __s9local0 = 2;
        break;
      case __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_EPIC:
        __s9local0 = 3;
        break;
      case __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_LEGENDARY:
        __s9local0 = 4;
    }
    return __s9local0;
  };
  MysteryBoxOpeningDialog.prototype.getKeyNameByKeyId = function (__s12param0) {
    var __s12local0 = "";
    switch (__s12param0) {
      case __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_COMMON:
        __s12local0 = "CommonMysteryBoxKey";
        break;
      case __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_RARE:
        __s12local0 = "RareMysteryBoxKey";
        break;
      case __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_EPIC:
        __s12local0 = "EpicMysteryBoxKey";
        break;
      case __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_LEGENDARY:
        __s12local0 = "LegendaryMysteryBoxKey";
    }
    return __s12local0;
  };
  MysteryBoxOpeningDialog.prototype.updateKeysInfo = function () {
    var __s15local0 = false;
    if (this.dialogDisp.mc_progress.mc_bar.scaleX >= 1) {
      this.dialogDisp.mc_progress.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_STANDARD, false);
      this.dialogDisp.icon_key_progress.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_STANDARD, false);
      __s15local0 = true;
    }
    if (this.dialogProperties.barTimesFilled > 0) {
      this._wasBarFilled = true;
      if (__s15local0) {
        __dep_exact_608de47b6498f9b0.TweenLite.delayedCall(1, this.bindFunction(this.updateKeysProgress));
      } else {
        this.updateKeysProgress();
      }
    }
    this.dialogProperties.barTimesFilled--;
  };
  MysteryBoxOpeningDialog.prototype.updateKeysProgress = function () {
    var __s21local0;
    var __s21local1;
    var __s21local2;
    var __s21local3;
    var __s21local4 = this.dialogProperties.progressValue;
    var __s21local5 = __dep_export_CastleModel.CastleModel.lootBoxData.getMysteryKeyProgressMax();
    var __s21local6 = 0.5;
    if (this.dialogProperties.barTimesFilled > 0) {
      if (this.dialogProperties.progressValue == 0 && this._isFirstTimeFill) {
        __s21local4 = __s21local5 - 1;
        __s21local0 = 0;
        this.dialogDisp.mc_progress.mc_bar.scaleX = Math.min(__s21local0 / __s21local5, 1);
        this.textFieldManager.registerTextField(this.dialogDisp.mc_progress.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("numbersXY", [__s21local0, __s21local5]));
        __s21local3 = __s21local5;
      } else {
        __s21local0 = __s21local4 = this.dialogProperties.oldProgressValue;
        this.dialogDisp.mc_progress.mc_bar.scaleX = Math.min(__s21local0 / __s21local5, 1);
        this.textFieldManager.registerTextField(this.dialogDisp.mc_progress.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("numbersXY", [__s21local0, __s21local5]));
        __s21local3 = __s21local5 - __s21local4;
      }
      this.dialogDisp.mc_progress.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER, false);
      this.dialogDisp.icon_key_progress.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER, false);
      __s21local2 = 1;
      __s21local1 = __s21local5;
      __s21local6 = __s21local5 - 1 > this.dialogProperties.oldProgressValue ? 3 : 0.5;
    } else {
      if (this._wasBarFilled && this.dialogProperties.progressValue != 0) {
        __s21local0 = 0;
        this.dialogDisp.mc_progress.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER, false);
        this.dialogDisp.icon_key_progress.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER, false);
        this.dialogDisp.mc_progress.mc_bar.scaleX = 0;
        __s21local6 = 3;
        __s21local3 = __s21local4;
      } else {
        __s21local0 = __s21local4 - 1;
      }
      __s21local2 = Math.min(__s21local4 / __s21local5, 1);
      __s21local1 = __s21local4;
      if (!this._wasBarFilled) {
        __s21local3 = 1;
      }
    }
    var __s21local7 = {
      value: __s21local0
    };
    __dep_exact_608de47b6498f9b0.TweenLite.to(__s21local7, __s21local6, {
      value: __s21local1,
      onUpdateParams: [__s21local7],
      onUpdate: this.bindFunction(this.updateValues),
      ease: __dep_exact_608de47b6498f9b0.SteppedEase.config(__s21local3)
    });
    __dep_exact_608de47b6498f9b0.TweenLite.to(this.dialogDisp.mc_progress.mc_bar, __s21local6, {
      scaleX: __s21local2,
      onComplete: this.bindFunction(this.updateKeysInfo)
    });
    this._isFirstTimeFill = true;
  };
  MysteryBoxOpeningDialog.prototype.updateValues = function (__s30param0) {
    var __s30local0 = __dep_exact_f855840627e6e145.int(__s30param0.value);
    if (__s30local0 <= __dep_export_CastleModel.CastleModel.lootBoxData.getMysteryKeyProgressMax()) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_progress.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("numbersXY", [__s30local0, __dep_export_CastleModel.CastleModel.lootBoxData.getMysteryKeyProgressMax()]));
    }
  };
  MysteryBoxOpeningDialog.prototype.updateKeyAmount = function () {
    var __s33local0 = 0;
    if (this.dialogProperties.selectedKey > __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_COMMON) {
      __s33local0 = __dep_export_CastleModel.CastleModel.currencyData.getAmountById(this.dialogProperties.selectedKey);
      this._iTxtKeysAmount.textContentVO.numberValue = __s33local0;
      this._iTxtKeysAmount.color = __s33local0 <= 0 ? __dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_RED : __dep_export_ClientConstColor.ClientConstColor.GENERIC_WHITE;
      this.dialogDisp.txt_amount.visible = true;
      this.dialogDisp.icon_infinity.visible = false;
    } else {
      this.dialogDisp.txt_amount.visible = false;
      this.dialogDisp.icon_infinity.visible = true;
    }
  };
  MysteryBoxOpeningDialog.prototype.OnAnimationBoxOpeningComplete = function () {
    this._animationRewardsHandler.playAnimation(this.getRewardItemsForPage(this._currentPage));
    if (this._countRewardAnimations == 1) {
      this._countRewardAnimations = this._pagesToRewardItemsMap.size;
    }
    this.updateKeysProgress();
    this.updateKeyAmount();
  };
  MysteryBoxOpeningDialog.prototype.resetRewardItems = function () {
    var __s40local0;
    for (var __s40local1 = 1; __s40local1 <= MysteryBoxOpeningDialog.MAX_REWARDS_PER_PAGE; __s40local1++) {
      for (var __s40local2 = 1; __s40local2 <= __s40local1; __s40local2++) {
        __s40local0 = this.dialogDisp["mc_animation_rewards" + __s40local1 + "_" + __s40local2];
        __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s40local0.mc_icon);
        __s40local0.visible = false;
      }
    }
  };
  MysteryBoxOpeningDialog.prototype.distributeRewardItemsToPages = function () {
    this._pagesToRewardItemsMap.clear();
    var __s46local0;
    var __s46local1 = this.dialogProperties.rewards.length;
    var __s46local2 = 1;
    for (var __s46local3 = 0; __s46local3 < this._maxPages; __s46local3++) {
      __s46local0 = __s46local1 < MysteryBoxOpeningDialog.MAX_REWARDS_PER_PAGE ? __s46local1 : MysteryBoxOpeningDialog.MAX_REWARDS_PER_PAGE;
      this._pagesToRewardItemsMap.set(__s46local2, this.createRewardsArrayForPage(__s46local0));
      __s46local2++;
      __s46local1 -= __s46local0;
    }
  };
  MysteryBoxOpeningDialog.prototype.createRewardsArrayForPage = function (__s50param0) {
    var __s50local0;
    var __s50local1 = [];
    for (var __s50local2 = 1; __s50local2 <= __s50param0; __s50local2++) {
      if (__s50local0 = this.dialogDisp["mc_animation_rewards" + __s50param0 + "_" + __s50local2]) {
        __s50local1.push(__s50local0);
      }
    }
    return __s50local1;
  };
  MysteryBoxOpeningDialog.prototype.getRewardItemsForPage = function (__s55param0) {
    return this._pagesToRewardItemsMap.get(__s55param0);
  };
  MysteryBoxOpeningDialog.prototype.OnAnimationRewardsComplete = function () {
    if (this._countRewardAnimations > 1) {
      this._countRewardAnimations--;
      this._currentPage++;
      this._isAnimatingRewardsPages = true;
      __dep_exact_608de47b6498f9b0.TweenLite.delayedCall(1, this.bindFunction(this.switchPage));
    } else {
      this._countRewardAnimations = 1;
      this._isAnimatingRewardsPages = false;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_left, true);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_right, true);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_confirm, true);
      var __s57local0 = __dep_export_CastleModel.CastleModel.lootBoxData.getLootBoxesForCurrentType(this.dialogProperties.boxName, this.dialogProperties.boxRarity).length;
      var __s57local1 = __dep_export_CastleModel.CastleModel.currencyData.getAmountById(this.dialogProperties.selectedKey);
      var __s57local2 = __dep_export_CastleModel.CastleModel.currencyData.getXmlCurrencyById(this.dialogProperties.selectedKey).rareness == 1;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_open_another, __s57local0 > 0 && (__s57local1 > 0 || __s57local2));
    }
  };
  MysteryBoxOpeningDialog.prototype.onClick = function (__s61param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s61param0.target)) {
      __s1param0.prototype.onClick.call(this, __s61param0);
      switch (__s61param0.target) {
        case this.dialogDisp.btn_confirm:
          this.hide();
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_RewardHubMainDialog.RewardHubMainDialog, new __dep_export_RewardHubDialogProperties.RewardHubDialogProperties(false, __dep_export_RewardHubMainDialog.RewardHubMainDialog.TAB_MYSTERY_BOXES));
          break;
        case this.dialogDisp.btn_open_another:
          this.openAnotherBox();
          break;
        case this.dialogDisp.btn_left:
          this._currentPage--;
          this.switchPage();
          break;
        case this.dialogDisp.btn_right:
          this._currentPage++;
          this.switchPage();
      }
    }
  };
  MysteryBoxOpeningDialog.prototype.switchPage = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_left, !this._isAnimatingRewardsPages);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_right, !this._isAnimatingRewardsPages);
    if (this._currentPage > 1) {
      this.dialogDisp.btn_left.visible = true;
    } else {
      this.dialogDisp.btn_left.visible = false;
    }
    if (this._currentPage < this._maxPages) {
      this.dialogDisp.btn_right.visible = true;
    } else {
      this.dialogDisp.btn_right.visible = false;
    }
    this.populateRewards();
    this._animationRewardsHandler.playAnimation(this.getRewardItemsForPage(this._currentPage));
  };
  MysteryBoxOpeningDialog.prototype.populateRewards = function () {
    this.resetRewardItems();
    var __s71local0 = new __dep_export_CollectableList.CollectableList();
    for (var __s71local1 = 0; __s71local1 < MysteryBoxOpeningDialog.MAX_REWARDS_PER_PAGE; __s71local1++) {
      __s71local0.addItem(this.dialogProperties.rewards.getItemByIndex((this._currentPage - 1) * MysteryBoxOpeningDialog.MAX_REWARDS_PER_PAGE + __s71local1));
    }
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList().createByItemMcList(this.getRewardItemsForPage(this._currentPage)).addItemMcs("mc_item").addInfoBtns("parent.btn_info").addBuildingLevelMc("mc_item.mc_buildingLevel"), __s71local0, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(60, 60)), null, this.bindFunction(this.afterRenderFunc));
  };
  MysteryBoxOpeningDialog.prototype.afterRenderFunc = function (__s75param0) {
    if (__s75param0.itemVE) {
      __s75param0.itemVE.iconContainer.uncacheAllChildren();
    }
  };
  MysteryBoxOpeningDialog.prototype.updateOpenBoxTooltip = function () {
    if (__dep_export_CastleModel.CastleModel.lootBoxData.getLootBoxesForCurrentType(this.dialogProperties.boxName, this.dialogProperties.boxRarity).length <= 0) {
      this.dialogDisp.btn_open_another.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_mysteryBoxSystem_mysteryBoxHUB_openAnotherBox_noMoreBoxes");
    } else if (__dep_export_CastleModel.CastleModel.currencyData.getAmountById(this.dialogProperties.selectedKey) <= 0 && __dep_export_CastleModel.CastleModel.currencyData.getXmlCurrencyById(this.dialogProperties.selectedKey).rareness != 1) {
      this.dialogDisp.btn_open_another.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_mysteryBoxSystem_mysteryBoxHUB_openAnotherBox_noMoreKeys");
    } else {
      this.dialogDisp.btn_open_another.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_mysteryBoxSystem_keyDraws_basics_tooltip");
    }
  };
  MysteryBoxOpeningDialog.prototype.openAnotherBox = function () {
    __dep_export_CastleModel.CastleModel.lootBoxData.openLootBox(this.dialogProperties.boxId, this.dialogProperties.selectedKey, false);
    this.hideLoaded();
  };
  MysteryBoxOpeningDialog.prototype.hideLoaded = function (__s85param0 = null) {
    this._animationBoxOpeningHandler.animationCompleteSignal.remove(this.bindFunction(this.OnAnimationBoxOpeningComplete));
    this._animationRewardsHandler.animationCompleteSignal.remove(this.bindFunction(this.OnAnimationRewardsComplete));
    this._animationBoxOpeningHandler.reset();
    __s1param0.prototype.hideLoaded.call(this, __s85param0);
  };
  Object.defineProperty(MysteryBoxOpeningDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  MysteryBoxOpeningDialog.NAME = "MysteryBoxOpening";
  MysteryBoxOpeningDialog.MAX_REWARDS_PER_PAGE = 6;
  return MysteryBoxOpeningDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.MysteryBoxOpeningDialog = __s0local1;
