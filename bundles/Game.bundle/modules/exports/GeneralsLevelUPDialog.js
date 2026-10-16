Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_GeneralsEvent = require("gge-module:export_GeneralsEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_GeneralVO = require("gge-module:export_GeneralVO");
var __dep_export_AccordionComponentProperties = require("gge-module:export_AccordionComponentProperties");
var __dep_export_GenericCollapsibleItemProperties = require("gge-module:export_GenericCollapsibleItemProperties");
var __dep_export_LayoutMargin = require("gge-module:export_LayoutMargin");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_DynamicSliderAccordionComponent = require("gge-module:export_DynamicSliderAccordionComponent");
var __dep_export_GeneralSelectionItem = require("gge-module:export_GeneralSelectionItem");
var __dep_export_GeneralsLevelUpDialogListItem = require("gge-module:export_GeneralsLevelUpDialogListItem");
var __s0local0 = function (__s1param0) {
  function GeneralsLevelUPDialog() {
    var __s3local0 = __s1param0.call(this, GeneralsLevelUPDialog.NAME) || this;
    __s3local0.state = 0;
    __s3local0._currentProgressAmount = -1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralsLevelUPDialog, __s1param0);
  GeneralsLevelUPDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.mc_switch.btn_switch], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    var __s5local0 = new __dep_export_AccordionComponentProperties.AccordionComponentProperties();
    __s5local0.scrollStrategy = __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical;
    __s5local0.disableButtons = true;
    __s5local0.scrollToOpened = true;
    this._scrollList = new __dep_export_DynamicSliderAccordionComponent.DynamicSliderAccordionComponent(this.dialogDisp.mc_list, __s5local0);
    this.itemProperties = new __dep_export_GenericCollapsibleItemProperties.GenericCollapsibleItemProperties(new __dep_export_LayoutMargin.LayoutMargin(0, 4, 0, 0), true, 0.2, 0.2, false);
  };
  GeneralsLevelUPDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.state = 0;
    this.dialogDisp.txt_gotXP.alpha = 0;
    if (this.generalVO.isStarLevelUpgradeable) {
      this.changeState(GeneralsLevelUPDialog.STATE_STAR);
    } else if (this.generalVO.isXpUpgradeable) {
      this.changeState(GeneralsLevelUPDialog.STATE_XP);
    }
    this.updateItems();
    this._scrollList.show();
    __dep_export_CastleModel.CastleModel.generalsData.addEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onProgressChanged));
    __dep_export_CastleModel.CastleModel.generalsData.addEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERAL_STAR_UP, this.bindFunction(this.onStarUp));
  };
  GeneralsLevelUPDialog.prototype.hideLoaded = function (__s11param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s11param0);
    this._generalIcon.onHide();
    this._scrollList.hide();
    if (this._tweenSwitch) {
      this._tweenSwitch.kill();
    }
    if (this._tweenXP) {
      this._tweenXP.kill();
    }
    __dep_export_CastleModel.CastleModel.generalsData.removeEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onProgressChanged));
    __dep_export_CastleModel.CastleModel.generalsData.removeEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERAL_STAR_UP, this.bindFunction(this.onStarUp));
  };
  GeneralsLevelUPDialog.prototype.updateItems = function () {
    this._scrollList.clear();
    var __s15local0 = [];
    var __s15local1 = [];
    if (this.isStarState) {
      var __s15local2 = [];
      if (this.generalVO.isUnlocked) {
        __s15local2 = this.generalVO.upgradeCurrencyIDs;
      } else {
        __s15local2.push(this.generalVO.generalXmlVO.unlockCurrencyID);
      }
      for (var __s15local3 = 0, __s15local4 = __s15local2; __s15local3 < __s15local4.length; __s15local3++) {
        var __s15local5 = __s15local4[__s15local3];
        if (__dep_export_CastleModel.CastleModel.currencyData.getAmountById(__s15local5) > 0) {
          __s15local1.push(__s15local5);
        }
      }
    } else {
      for (var __s15local6 = 0, __s15local7 = __dep_export_CastleModel.CastleModel.generalsData.getAllXPCurrencies(); __s15local6 < __s15local7.length; __s15local6++) {
        __s15local5 = __s15local7[__s15local6];
        if (__dep_export_CastleModel.CastleModel.currencyData.getAmountById(__s15local5) > 0) {
          __s15local1.push(__s15local5);
        }
      }
    }
    for (var __s15local8 = 0, __s15local9 = __s15local1; __s15local8 < __s15local9.length; __s15local8++) {
      var __s15local10 = __s15local9[__s15local8];
      var __s15local11 = new __dep_export_GeneralsLevelUpDialogListItem.GeneralsLevelUpDialogListItem([this.generalVO, __s15local10], this.itemProperties);
      __s15local0.push(__s15local11);
    }
    for (var __s15local12 = 0; __s15local12 < __s15local0.length; __s15local12++) {
      this._scrollList.addItem(__s15local0[__s15local12]);
    }
    this.dialogDisp.mc_list.mc_empty.visible = __s15local0.length <= 0;
    this._scrollList.show();
  };
  GeneralsLevelUPDialog.prototype.changeState = function (__s31param0) {
    if (__s31param0 != this.state) {
      this.state = __s31param0;
      this.onSwitch();
    }
  };
  GeneralsLevelUPDialog.prototype.onSwitch = function () {
    this._currentProgressAmount = -1;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(this.generalVO.nameText));
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_general);
    this._generalIcon = new __dep_export_GeneralSelectionItem.GeneralSelectionItem(this.generalVO, this.dialogDisp.mc_general, false, true, false);
    this._generalIcon.disp.y -= 3;
    this._generalIcon.onShow();
    if (this.isStarState) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_levelUpDialog_header")));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_switch.btn_switch.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_levelUp_link_button"))).autoFitToBounds = true;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_switch.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_generals_levelUpDialog_levelUpRequired_desc"));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_list.mc_empty.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_generals_levelUpDialog_noShards_desc"));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_levelUpDialog_header")));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_switch.btn_switch.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_starRating_link_button"))).autoFitToBounds = true;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_switch.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_generals_levelUpDialog_starRatingRequired_desc"));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_list.mc_empty.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_generals_levelUpDialog_noBoosters_desc"));
    }
    this.updateItems();
    this.onProgressChanged();
  };
  GeneralsLevelUPDialog.prototype.onStarUp = function () {
    this.hide();
  };
  GeneralsLevelUPDialog.prototype.onProgressChanged = function () {
    this.updateItems();
    var __s40local0 = this.generalVO.currentLevel >= this.generalVO.maxLevel - 1;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_starLevel.txt_currentLevel, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.generalVO.currentStarLevel));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_starLevel.txt_nextLevel, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.generalVO.currentStarLevel + 1));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_level.mc_currentLevel.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.generalVO.currentLevel));
    this.dialogDisp.mc_level.mc_currentLevel.mc_maxLevel.visible = false;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_level.mc_nextLevel.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.generalVO.currentLevel + 1)).visible = !__s40local0;
    this.dialogDisp.mc_level.mc_nextLevel.mc_maxLevel.visible = __s40local0;
    var __s40local1 = this.isStarState ? 0 : this.generalVO.currentLevelXP;
    var __s40local2 = this.isStarState ? this.generalVO.requiredShards : this.generalVO.nextLevelXP;
    var __s40local3 = false;
    this.dialogDisp.mc_starLevel.visible = this.isStarState && this.generalVO.isStarLevelUpgradeable && this.generalVO.isUnlocked && __s40local2 > 0;
    this.dialogDisp.mc_starLevel.mc_currentLevel.gotoAndStop(this.generalVO.currentStarLevel <= 0 ? 1 : this.generalVO.currentStarLevel <= 5 ? 2 : 3);
    this.dialogDisp.mc_starLevel.mc_nextLevel.gotoAndStop(this.generalVO.currentStarLevel < 5 ? 2 : 3);
    this.dialogDisp.mc_level.visible = this.isXPState && this.generalVO.isXpUpgradeable && this.generalVO.isUnlocked && __s40local2 > 0;
    if (this.isXPState) {
      var __s40local4 = this.generalVO.currentLevel;
      if (this._currentProgressAmount != -1 && this._currentProgressAmount != __s40local4) {
        var __s40local5 = __s40local4 - this._currentProgressAmount;
        if (__s40local5 <= 1) {
          this.textFieldManager.registerTextField(this.dialogDisp.txt_gotXP, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_battleLog_generalXP_levelProgress_desc", [__s40local5]));
        } else {
          this.textFieldManager.registerTextField(this.dialogDisp.txt_gotXP, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_battleLog_generalXP_levelProgress_plural_desc", [__s40local5]));
        }
        this._tweenXP = __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.dialogDisp.txt_gotXP, 3, {
          alpha: 1
        }, {
          alpha: 0,
          ease: __dep_exact_608de47b6498f9b0.Linear.ease,
          delay: 0,
          yoyo: false,
          repeat: 0
        });
        __s40local3 = true;
      }
      this._currentProgressAmount = __s40local4;
    }
    var __s40local6 = this.isXPState && this.generalVO.isStarLevelUpgradeable;
    this.dialogDisp.mc_progressBar.visible = !__s40local6 && __s40local2 > 0;
    this.dialogDisp.mc_progressBar.mc_bar.scaleX = __dep_exact_9e901e8e2483a22f.MathBase.clamp(__s40local1 / Math.max(__s40local2, 1), 0, 1);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_progressBar.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("numbersXY", [__s40local1, __s40local2]));
    if (__s40local3 && __s40local6 && !this.dialogDisp.mc_switch.visible) {
      this._tweenSwitch = __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.dialogDisp.mc_switch, 0, {
        visible: false
      }, {
        visible: true,
        ease: __dep_exact_608de47b6498f9b0.Linear.ease,
        delay: 3,
        repeat: 0
      });
    } else {
      this.dialogDisp.mc_switch.visible = __s40local6;
    }
    if (this._colorMatrix == null) {
      this._colorMatrix = new __dep_exact_9e901e8e2483a22f.ColorMatrix();
      this._colorMatrix.desaturate();
    }
  };
  Object.defineProperty(GeneralsLevelUPDialog.prototype, "isStarState", {
    get: function () {
      return this.state == GeneralsLevelUPDialog.STATE_STAR;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsLevelUPDialog.prototype, "isXPState", {
    get: function () {
      return this.state == GeneralsLevelUPDialog.STATE_XP;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsLevelUPDialog.prototype.onClick = function (__s53param0) {
    __s1param0.prototype.onClick.call(this, __s53param0);
    switch (__s53param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.mc_switch.btn_switch:
        this.changeState(this.isStarState ? GeneralsLevelUPDialog.STATE_XP : GeneralsLevelUPDialog.STATE_STAR);
    }
  };
  Object.defineProperty(GeneralsLevelUPDialog.prototype, "generalVO", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.generalsData.playerGenerals.get(this.dialogProperties.generalID)) {
        return __dep_export_CastleModel.CastleModel.generalsData.playerGenerals.get(this.dialogProperties.generalID);
      } else {
        return new __dep_export_GeneralVO.GeneralVO(this.dialogProperties.generalID);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsLevelUPDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsLevelUPDialog.NAME = "GeneralsLevelUp2";
  GeneralsLevelUPDialog.STATE_STAR = 1;
  GeneralsLevelUPDialog.STATE_XP = 2;
  return GeneralsLevelUPDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.GeneralsLevelUPDialog = __s0local0;
