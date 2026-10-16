Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SGeneralAddXpVO = require("gge-module:export_C2SGeneralAddXpVO");
var __dep_export_C2SGeneralStarUpgradeVO = require("gge-module:export_C2SGeneralStarUpgradeVO");
var __dep_export_C2SGeneralUnlockVO = require("gge-module:export_C2SGeneralUnlockVO");
var __dep_export_BasicPickerEvent = require("gge-module:export_BasicPickerEvent");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ACollapsibleItem = require("gge-module:export_ACollapsibleItem");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleUnitAmountComponent = require("gge-module:export_CastleUnitAmountComponent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_ModernYesNoDialog = require("gge-module:export_ModernYesNoDialog");
var __s0local2 = function (__s1param0) {
  function GeneralsLevelUpDialogListItem(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("GeneralsLevelUp_Item"))(), __s3param1) || this;
    __s3local0._data = __s3param0;
    __s3local0.fill();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralsLevelUpDialogListItem, __s1param0);
  GeneralsLevelUpDialogListItem.prototype.fill = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.disp.contentMC.btn_use, this.disp.headerMC.btn_use, this.disp.contentMC.btn_nextLevel, this.disp.contentMC.mc_selection.mc_slider.btn_slider, this.disp.contentMC.mc_selection.btn_all], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    this.disp.headerMC.mc_hover.mouseEnabled = false;
    this.disp.headerMC.mc_down.mouseEnabled = false;
    this.disp.headerMC.mc_hover.visible = false;
    this.disp.headerMC.mc_down.visible = false;
    this.disp.headerMC.txt_copy.mouseEnabled = false;
    this.disp.headerMC.txt_title.mouseEnabled = false;
    this.disp.headerMC.mc_selected.mouseChildren = false;
    this.disp.headerMC.mc_arrow.mouseChildren = false;
    this.disp.headerMC.mc_bg.mouseChildren = false;
    var __s5local0 = __dep_export_CastleModel.CastleModel.currencyData.getAmountById(this.currencyID);
    var __s5local1 = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __s5local0, this.currencyID);
    if (this.isXPCurrency) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.headerMC.txt_title_middle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(" "));
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.headerMC.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s5local1.getNameTextId()));
    } else {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.headerMC.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(" "));
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.headerMC.txt_title_middle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s5local1.getNameTextId()));
    }
    if (this.isXPCurrency) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.headerMC.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("value_xp", [__dep_export_CastleModel.CastleModel.generalsData.getXPItemByCurrencyID(this.currencyID).xpAmount]));
    } else {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.headerMC.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(" "));
    }
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.contentMC.btn_nextLevel.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("value_multiplied", [this.getAmountForLevelUp()]));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.headerMC.btn_use.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("value_multiplied", [this.getAmountForLevelUp()]));
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.contentMC.btn_nextLevel, __s5local0 >= this.getAmountForLevelUp());
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.headerMC.btn_use, __s5local0 >= this.getAmountForLevelUp());
    if (this.isXPCurrency) {
      if (__s5local0 < this.getAmountForLevelUp()) {
        this.disp.contentMC.btn_nextLevel.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_generals_levelUpDialog_boostLevel_insufficientBoosters_tooltip", [__s5local1.getNameTextId(), this.generalVO.nameTextShort]);
      } else {
        this.disp.contentMC.btn_nextLevel.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_generals_levelUpDialog_boostLevel_tooltip", [this.getAmountForLevelUp(), __s5local1.getNameTextId(), this.generalVO.nameTextShort, this.generalVO.currentLevel + 1]);
      }
    } else if (__s5local0 < this.getAmountForLevelUp()) {
      this.disp.contentMC.btn_nextLevel.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_generals_levelUpDialog_boostStar_insufficientShards_tooltip", [this.generalVO.nameTextShort]);
      this.disp.headerMC.btn_use.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_generals_levelUpDialog_boostStar_insufficientShards_tooltip", [this.generalVO.nameTextShort]);
    } else {
      this.disp.contentMC.btn_nextLevel.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_generals_levelUpDialog_boostStar_tooltip", [this.getAmountForLevelUp(), this.generalVO.nameTextShort, this.generalVO.currentStarLevel + 1]);
      this.disp.headerMC.btn_use.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_generals_levelUpDialog_boostStar_tooltip", [this.getAmountForLevelUp(), this.generalVO.nameTextShort, this.generalVO.currentStarLevel + 1]);
    }
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.disp.headerMC.mc_item.mc_item).addIconMc(this.disp.headerMC.mc_item.mc_item.mc_icon).addInfoBtn(this.disp.headerMC.mc_item.btn_info).addTextfield(this.disp.headerMC.mc_item.mc_item.txt_amount), __s5local1, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local1(70, 70)));
    this.initAmountPicker();
    if (this._amountComponent) {
      var __s5local2 = Math.ceil(this.generalVO.nextXpNeededForCap / __dep_export_CastleModel.CastleModel.generalsData.getXPItemByCurrencyID(this.currencyID).xpAmount);
      this._amountComponent.setMaxNumberOfItems(Math.min(__s5local0, __s5local2));
    }
    this.applyStateChange();
    this.checkIfIsItemAvailable();
  };
  GeneralsLevelUpDialogListItem.prototype.initAmountPicker = function () {
    if (this._amountComponent) {
      this._amountComponent.removeEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onValueChange));
      this._amountComponent.destroy();
    }
    this.disp.contentMC.mc_selection.visible = this.isXPCurrency;
    this.disp.contentMC.btn_use.visible = this.isXPCurrency;
    this.disp.headerMC.btn_use.visible = !this.isXPCurrency;
    if (this.isXPCurrency) {
      this._amountComponent = new __dep_export_CastleUnitAmountComponent.CastleUnitAmountComponent();
      this._amountComponent.init(this.disp.contentMC.mc_selection.mc_slider, this.disp.contentMC.mc_selection.amountPicker, this.disp.contentMC.mc_selection.btn_all);
      this._amountComponent.minAmount = 1;
      this._amountComponent.centerSliderButtonOnDefault = false;
      this._amountComponent.addEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onValueChange));
      this.onValueChange();
    }
  };
  GeneralsLevelUpDialogListItem.prototype.onValueChange = function (__s21param0 = null) {
    this.disp.contentMC.mc_selection.mc_slider.mc_line.scaleX = (this._amountComponent.getSelectedAmount() - 1) / (Math.max(this._amountComponent.numberOfItems, 2) - 1);
  };
  GeneralsLevelUpDialogListItem.prototype.checkIfIsItemAvailable = function () {
    var __s23local0 = this.isXPCurrency ? this.generalVO.nextLevelXP : this.generalVO.requiredShards;
    if (!this.isXPCurrency && this.generalVO.isXpUpgradeable || this.isXPCurrency && this.generalVO.isStarLevelUpgradeable || __s23local0 <= 0) {
      var __s23local1 = new __dep_exact_9e901e8e2483a22f.ColorMatrix();
      __s23local1.desaturate();
      this.disp.useFilters([__s23local1.filter], true);
      this.disp.mouseChildren = false;
      var __s23local2 = undefined;
      if (!this.isXPCurrency && this.generalVO.currentStarLevel >= this.generalVO.maxStarLevel) {
        __s23local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_generals_levelUpDialog_generalMaxStarRating_tooltip", [this.generalVO.nameTextShort]);
      } else if (this.isXPCurrency || this.generalVO.isStarLevelUpgradeable) {
        if (this.isXPCurrency && this.generalVO.currentLevel >= this.generalVO.maxLevel) {
          __s23local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_generals_levelUpDialog_generalMaxLevel_tooltip", [this.generalVO.nameTextShort]);
        } else if (this.isXPCurrency && !this.generalVO.isXpUpgradeable) {
          __s23local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_generals_levelUpDialog_starRatingNeeded_tooltip", [this.generalVO.nameTextShort]);
        }
      } else {
        __s23local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_generals_levelUpDialog_levelUpRequired_desc", [this.generalVO.nameTextShort]);
      }
      this.disp.toolTipText = {
        t: __s23local2,
        ox: this.disp.headerMC.width / 2
      };
    } else {
      this.disp.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
      this.disp.mouseChildren = true;
      this.disp.toolTipText = null;
    }
  };
  GeneralsLevelUpDialogListItem.prototype.onMouseOver = function (__s32param0) {
    __s1param0.prototype.onMouseOver.call(this, __s32param0);
    if (this.isXPCurrency) {
      switch (__s32param0.target) {
        case this.disp.headerMC.mc_selected:
        case this.disp.headerMC.mc_arrow:
        case this.disp.headerMC.mc_bg:
          this.disp.headerMC.mc_hover.visible = true;
      }
    }
  };
  GeneralsLevelUpDialogListItem.prototype.onMouseOut = function (__s36param0) {
    __s1param0.prototype.onMouseOut.call(this, __s36param0);
    if (this.isXPCurrency) {
      switch (__s36param0.target) {
        case this.disp.headerMC.mc_selected:
        case this.disp.headerMC.mc_arrow:
        case this.disp.headerMC.mc_bg:
          this.disp.headerMC.mc_hover.visible = false;
          this.disp.headerMC.mc_down.visible = false;
      }
    }
  };
  GeneralsLevelUpDialogListItem.prototype.onMouseDown = function (__s40param0) {
    if (this.isXPCurrency) {
      switch (__s40param0.target) {
        case this.disp.headerMC.mc_selected:
        case this.disp.headerMC.mc_arrow:
        case this.disp.headerMC.mc_bg:
          this.disp.headerMC.mc_down.visible = true;
      }
    }
  };
  GeneralsLevelUpDialogListItem.prototype.onMouseUp = function (__s44param0) {
    if (this.isXPCurrency) {
      switch (__s44param0.target) {
        case this.disp.headerMC.mc_selected:
        case this.disp.headerMC.mc_arrow:
        case this.disp.headerMC.mc_bg:
          this.disp.headerMC.mc_down.visible = false;
      }
    }
  };
  GeneralsLevelUpDialogListItem.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    if (this.disp) {
      this.disp.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  GeneralsLevelUpDialogListItem.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    if (this.disp) {
      this.disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  GeneralsLevelUpDialogListItem.prototype.applyStateChange = function () {
    __s1param0.prototype.applyStateChange.call(this);
    this.disp.headerMC.mc_selected.visible = this.isExpanded;
  };
  GeneralsLevelUpDialogListItem.prototype.onClick = function (__s56param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s56param0.target)) {
      __s1param0.prototype.onClick.call(this, __s56param0);
      switch (__s56param0.target) {
        case this.disp.headerMC.mc_selected:
        case this.disp.headerMC.mc_arrow:
        case this.disp.headerMC.mc_bg:
          if (!this.isXPCurrency) {
            return;
          }
          this.expand(!this.isExpanded, true);
          break;
        case this.disp.contentMC.btn_use:
          __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.disp.contentMC.btn_use, true, 1);
          if (this.isXPCurrency) {
            if (this.getLostXPOnUse(this.currencyID, this._amountComponent.getSelectedAmount()) > 0) {
              __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_ModernYesNoDialog.ModernYesNoDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardYesNoDialogProperties("generic_alert_watchout", __dep_exact_92d05af59ee2ff30.Localize.text("dialog_generals_levelUpDialog_levelCapXpLoss_desc", [this.getLostXPOnUse(this.currencyID, this._amountComponent.getSelectedAmount())]), this.bindFunction(this.sendXPSelected)));
            } else {
              this.sendXPSelected();
            }
          } else if (this.generalVO.isUnlocked) {
            __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGeneralStarUpgradeVO.C2SGeneralStarUpgradeVO(this.generalVO.generalID, this.currencyID));
          } else {
            __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGeneralUnlockVO.C2SGeneralUnlockVO(this.generalVO.generalID));
          }
          break;
        case this.disp.headerMC.btn_use:
        case this.disp.contentMC.btn_nextLevel:
          __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.disp.contentMC.btn_nextLevel, true, 1);
          __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.disp.headerMC.btn_use, true, 1);
          if (this.isXPCurrency) {
            if (this.getLostXPOnUse(this.currencyID, this.getAmountForLevelUp()) > 0) {
              __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_ModernYesNoDialog.ModernYesNoDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardYesNoDialogProperties("generic_alert_watchout", __dep_exact_92d05af59ee2ff30.Localize.text("dialog_generals_levelUpDialog_levelCapXpLoss_desc", [this.getLostXPOnUse(this.currencyID, this.getAmountForLevelUp())]), this.bindFunction(this.sendXPToLevelUp)));
            } else {
              this.sendXPToLevelUp();
            }
          } else if (this.generalVO.isUnlocked) {
            __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGeneralStarUpgradeVO.C2SGeneralStarUpgradeVO(this.generalVO.generalID, this.currencyID));
          } else {
            __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGeneralUnlockVO.C2SGeneralUnlockVO(this.generalVO.generalID));
          }
      }
    }
  };
  GeneralsLevelUpDialogListItem.prototype.sendXPSelected = function () {
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGeneralAddXpVO.C2SGeneralAddXpVO(this.generalVO.generalID, this.currencyID, this._amountComponent.getSelectedAmount()));
  };
  GeneralsLevelUpDialogListItem.prototype.sendXPToLevelUp = function () {
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGeneralAddXpVO.C2SGeneralAddXpVO(this.generalVO.generalID, this.currencyID, this.getAmountForLevelUp()));
  };
  GeneralsLevelUpDialogListItem.prototype.getLostXPOnUse = function (__s75param0, __s75param1) {
    var __s75local0 = __dep_export_CastleModel.CastleModel.generalsData.getXPItemByCurrencyID(__s75param0);
    var __s75local1 = this.generalVO.nextXpNeededForCap;
    var __s75local2 = __s75local0.xpAmount * __s75param1;
    return Math.max(0, __s75local2 - __s75local1);
  };
  GeneralsLevelUpDialogListItem.prototype.getAmountForLevelUp = function () {
    if (this.isXPCurrency) {
      var __s77local0 = __dep_export_CastleModel.CastleModel.generalsData.getXPItemByCurrencyID(this.currencyID);
      var __s77local1 = this.generalVO.nextLevelXP - this.generalVO.currentLevelXP;
      return Math.ceil(__s77local1 / __s77local0.xpAmount);
    }
    return this.generalVO.requiredShards;
  };
  Object.defineProperty(GeneralsLevelUpDialogListItem.prototype, "isXPCurrency", {
    get: function () {
      return !!__dep_export_CastleModel.CastleModel.generalsData.getXPItemByCurrencyID(this.currencyID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsLevelUpDialogListItem.prototype, "height", {
    get: function () {
      if (this.isExpanded) {
        return this.disp.contentMC.y + 62;
      } else {
        return this.disp.headerMC.height;
      }
    },
    set: function (__s86param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACollapsibleItem.ACollapsibleItem.prototype, "height").set.call(this, __s86param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsLevelUpDialogListItem.prototype, "generalVO", {
    get: function () {
      return this._data[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsLevelUpDialogListItem.prototype, "currencyID", {
    get: function () {
      return this._data[1];
    },
    enumerable: true,
    configurable: true
  });
  return GeneralsLevelUpDialogListItem;
}(__dep_export_ACollapsibleItem.ACollapsibleItem);
exports.GeneralsLevelUpDialogListItem = __s0local2;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");
