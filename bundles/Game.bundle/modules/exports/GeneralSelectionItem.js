Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_GeneralsEvent = require("gge-module:export_GeneralsEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ClickFeedbackHoverBehaviour = require("gge-module:export_ClickFeedbackHoverBehaviour");
var __dep_export_GeneralsHelper = require("gge-module:export_GeneralsHelper");
var __s0local0 = createjs.MovieClip;
var __s0local1 = function (__s1param0) {
  function GeneralSelectionItem(__s3param0, __s3param1 = null, __s3param2 = true, __s3param3 = true, __s3param4 = true, __s3param5 = false, __s3param6 = null, __s3param7 = true, __s3param8 = true, __s3param9 = false, __s3param10 = false) {
    var __s3local0 = __s1param0.call(this, new __s0local0()) || this;
    __s3local0.onFilled = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0._generalVO = __s3param0;
    __s3local0._showStarLevel = __s3param3;
    __s3local0._clickable = __s3param4;
    __s3local0._displayBlock = __s3param7;
    __s3local0._isOwnGeneral = __s3param8;
    __s3local0._forcedShowAsMoving = __s3param9;
    __s3local0._hideAllInfo = __s3param10 || __s3param0 && __s3param0.isNPCGeneral;
    if (__s3param6) {
      __s3local0.onFilled.add(__s3param6);
    }
    if (__s3param5) {
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s3param1);
    }
    if (__s3param1) {
      __s3param1.addChild(__s3local0.disp);
    }
    __s3local0._useToolTip = __s3param2;
    __s3local0._onClickSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0._containerClip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(GeneralSelectionItem.CONTAINER_ASSET_NAME, __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl(GeneralSelectionItem.CONTAINER_ASSET_NAME), null, 0, false);
    __s3local0.disp.addChild(__s3local0._containerClip);
    __s3local0.disp.mouseChildren = false;
    __s3local0._containerClip.doWhenLoaded(function (__s8param0) {
      return __s3local0.fillItem();
    });
    __s3local0.onFilled.dispatch();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralSelectionItem, __s1param0);
  GeneralSelectionItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    if (this._containerClip.isLoaded) {
      this.updateItem();
    }
  };
  GeneralSelectionItem.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleModel.CastleModel.generalsData.addEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
    if (this._clickFeedBack && this._clickable) {
      this._clickFeedBack.addEventListener();
    }
  };
  GeneralSelectionItem.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleModel.CastleModel.generalsData.removeEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
    if (this._clickFeedBack) {
      this._clickFeedBack.removeEventListener();
    }
    if (this.onClickSignal) {
      this.onClickSignal.removeAll();
    }
  };
  GeneralSelectionItem.prototype.onGeneralsUpdated = function (__s20param0) {
    if (this._containerClip.isLoaded) {
      this.updateItem();
    }
  };
  GeneralSelectionItem.prototype.fillItem = function () {
    this.containerMC.mc.mc_selected.visible = false;
    this.containerMC.mc.mc_selected_locked.visible = false;
    this.containerMC.mc.txt_progress.defaultCacheScale = 2;
    this.containerMC.mc_inMovement.visible = false;
    this.updateItem();
    this.setSelected(false);
  };
  GeneralSelectionItem.prototype.fillIcon = function () {
    var __s25local0;
    var __s25local1 = this;
    var __s25local2 = this.generalVO ? this.generalVO.generalID : -1;
    __s25local0 = this.generalVO === undefined ? GeneralSelectionItem.GENERAL_ICON_ASSET_PREFIX + GeneralSelectionItem.GENERAL_ICON_ASSET_UNKNOWN_SUFFIX : this.generalVO == null ? GeneralSelectionItem.GENERAL_ICON_ASSET_PREFIX + GeneralSelectionItem.GENERAL_ICON_ASSET_GENERIC_SUFFIX : this.generalVO.isImplemented ? GeneralSelectionItem.GENERAL_ICON_ASSET_PREFIX + __s25local2 : GeneralSelectionItem.GENERAL_ICON_ASSET_PREFIX + __s25local2 + GeneralSelectionItem.GENERAL_ICON_ASSET_PREVIEW_SUFFIX;
    var __s25local3 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s25local0, __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s25local0), null, 0, false);
    __s25local3.doWhenLoaded(function (__s27param0) {
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s25local1.containerMC.mc.mc_iconHolder);
      __s25local1.containerMC.mc.mc_iconHolder.addChild(__s25local3);
      __s25local1.containerMC.mc.mc_iconHolder.scaleX = __s25local1.containerMC.mc.mc_iconHolder.scaleY = 0.52;
      __s25local1.onFilled.dispatch();
    });
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.containerMC.mc.mc_lvl100_front);
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.containerMC.mc.mc_lvl100_back);
    if (this.generalVO && this.generalVO.currentStarLevel >= this.generalVO.maxStarLevel) {
      var __s25local4 = "GeneralIcon100_front_" + this.generalVO.generalXmlVO.rarityString;
      var __s25local5 = "GeneralIcon100_back_" + this.generalVO.generalXmlVO.rarityString;
      var __s25local6 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s25local4, __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Generals100_PortraisIcons"), null, 24, true);
      var __s25local7 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s25local5, __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Generals100_PortraisIcons"), null, 24, true);
      __s25local6.doWhenLoaded(function (__s30param0) {
        __s25local1.containerMC.mc.mc_lvl100_front.addChild(__s25local6);
        __s25local1.containerMC.mc.mc_lvl100_front.scaleX = __s25local1.containerMC.mc.mc_lvl100_front.scaleY = 0.5;
        __s30param0.currentshownDisplayObject.gotoAndPlay(1);
      });
      __s25local7.doWhenLoaded(function (__s32param0) {
        __s25local1.containerMC.mc.mc_lvl100_back.addChild(__s25local7);
        __s25local1.containerMC.mc.mc_lvl100_back.scaleX = __s25local1.containerMC.mc.mc_lvl100_back.scaleY = 0.5;
        __s32param0.currentshownDisplayObject.gotoAndPlay(1);
      });
    }
  };
  GeneralSelectionItem.prototype.initClickFeedback = function () {
    this.containerMC.mc.mc_hover.visible = false;
    this.containerMC.mc.mc_down.visible = false;
    this.containerMC.mc.mc_hover_locked.visible = false;
    this.containerMC.mc.mc_down_locked.visible = false;
    var __s34local0 = this.generalVO && this.generalVO.isUnlocked ? this.containerMC.mc.mc_hover : this.containerMC.mc.mc_hover_locked;
    var __s34local1 = this.generalVO && this.generalVO.isUnlocked ? this.containerMC.mc.mc_down : this.containerMC.mc.mc_down_locked;
    if (this._clickFeedBack) {
      this._clickFeedBack.removeEventListener();
    }
    this._clickFeedBack = new __dep_export_ClickFeedbackHoverBehaviour.ClickFeedbackHoverBehaviour(this.disp, __s34local0, __s34local1);
    if (this._clickable) {
      this._clickFeedBack.addEventListener();
    }
  };
  GeneralSelectionItem.prototype.updateItem = function () {
    this._itxt_level = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.containerMC.mc.mc_level.txt_value, new __dep_exact_92d05af59ee2ff30_2.NumberVO(1), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    this._itxt_progress = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.containerMC.mc.txt_progress, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, null), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    this._itxt_progress.autoFitToBounds = true;
    this.fillIcon();
    this.initClickFeedback();
    this.updateFrame();
    this.updateLordIcon();
    this.updateLevel();
    this.updateIndicators();
    this.updateStars();
    this.updateShardProgress();
    this.updateToolTip();
    this.onFilled.dispatch();
  };
  GeneralSelectionItem.prototype.updateFrame = function () {
    var __s40local0 = 1;
    if (!!this.generalVO && (!this.generalVO.isNPCGeneral || !!__dep_export_CastleModel.CastleModel.raidBossData.getRaidBossByGeneralID(this.generalVO.generalID))) {
      __s40local0 = this.generalVO.generalRarityID + 1;
    }
    this.containerMC.mc.mc_frame.gotoAndStop(__s40local0);
  };
  GeneralSelectionItem.prototype.updateLordIcon = function () {
    var __s43local0 = this.generalVO && this.generalVO.isUnlocked && !!this.generalVO.assignedLord;
    this.containerMC.mc.mc_castellan.visible = __s43local0 && this.generalVO.assignedLord.isBaron && !this._hideAllInfo;
    this.containerMC.mc.mc_commander.visible = __s43local0 && !this.generalVO.assignedLord.isBaron && !this._hideAllInfo;
    this.containerMC.mc.mc_inMovement.visible = (!this.isAvailable() && this._isOwnGeneral || this._forcedShowAsMoving) && !this._hideAllInfo;
    this.containerMC.mc.mc_inMovement_bg_small.visible = (!this.isAvailable() && this._isOwnGeneral || this._forcedShowAsMoving) && !this._showStarLevel && !this._hideAllInfo;
    this.containerMC.mc.mc_inMovement_bg.visible = (!this.isAvailable() && this._isOwnGeneral || this._forcedShowAsMoving) && this._showStarLevel && !this._hideAllInfo;
  };
  GeneralSelectionItem.prototype.updateLevel = function () {
    if (this.generalVO && this.generalVO.isUnlocked && !this._hideAllInfo) {
      var __s45local0 = this.generalVO.currentLevel >= this.generalVO.maxLevel;
      this.containerMC.mc.mc_level.visible = true;
      this._itxt_level.visible = !__s45local0;
      this.containerMC.mc.mc_level.mc_max.visible = __s45local0;
      this._itxt_level.textContentVO.numberValue = this.generalVO.currentLevel;
    } else {
      this.containerMC.mc.mc_level.visible = false;
    }
  };
  GeneralSelectionItem.prototype.updateIndicators = function () {
    this.containerMC.mc.mc_levelUp.visible = this._isOwnGeneral && this.generalVO && this.generalVO.isUnlocked && this.generalVO.hasLevelUp && !this._hideAllInfo;
    this.containerMC.mc.mc_new.visible = this._isOwnGeneral && this.generalVO && this.generalVO.isUnlocked && this.generalVO.isNew && !this._hideAllInfo;
    this.containerMC.mc.mc_unlockable.visible = this._isOwnGeneral && this.generalVO && this.generalVO.canBeUnlocked && !this._hideAllInfo;
  };
  GeneralSelectionItem.prototype.updateStars = function () {
    if (this.generalVO && this.generalVO.isUnlocked && this._showStarLevel && !this._hideAllInfo) {
      this.containerMC.mc.mc_stars.visible = true;
      __dep_export_GeneralsHelper.GeneralsHelper.updateStarLevel(this.containerMC.mc.mc_stars, this.generalVO);
    } else {
      this.containerMC.mc.mc_stars.visible = false;
    }
  };
  GeneralSelectionItem.prototype.updateShardProgress = function () {
    this.containerMC.mc.mc_locked.visible = this.generalVO && !this.generalVO.isUnlocked && !this._hideAllInfo;
    this._itxt_progress.visible = this.generalVO && this.generalVO.isImplemented && !this.generalVO.isUnlocked && !this._hideAllInfo;
    if (!!this.generalVO && !this.generalVO.isUnlocked && !this._hideAllInfo) {
      this._itxt_progress.textContentVO.textReplacements = [__dep_export_CastleModel.CastleModel.currencyData.getAmountById(this.generalVO.unlockCurrencyID), this.generalVO.requiredShards];
    }
  };
  GeneralSelectionItem.prototype.updateToolTip = function () {
    if (this._useToolTip) {
      if (this.generalVO) {
        if (this.generalVO.isImplemented) {
          if (this.generalVO.isUnlocked || this.generalVO.isNPCGeneral) {
            if (this.isEnabled) {
              this.disp.toolTipText = this.generalVO.nameText;
            } else {
              this.disp.toolTipText = {
                t: "dialog_generals_generalTravelling_tooltip",
                p: [this._generalVO.nameTextShort]
              };
            }
          } else {
            this.disp.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_generals_overview_selectGeneral_notOwned", [this.generalVO.nameText]);
          }
        } else {
          this.disp.toolTipText = "dialog_generals_overview_selectGeneral_unknown";
        }
      } else {
        this.disp.toolTipText = "dialog_generals_overview_selectGeneral_assignNobody";
      }
    }
  };
  GeneralSelectionItem.prototype.onClick = function (__s69param0) {
    __s1param0.prototype.onClick.call(this, __s69param0);
    if (this.isEnabled) {
      this._onClickSignal.dispatch(this);
    }
  };
  GeneralSelectionItem.prototype.setSelected = function (__s72param0) {
    var __s72local0 = this;
    this._containerClip.doWhenLoaded(function () {
      __s72local0.containerMC.mc.mc_selected.visible = __s72param0 && !!__s72local0.generalVO && __s72local0.generalVO.isUnlocked;
      __s72local0.containerMC.mc.mc_selected_locked.visible = __s72param0 && (!__s72local0.generalVO || !__s72local0.generalVO.isUnlocked);
      __s72local0.onFilled.dispatch();
    });
  };
  GeneralSelectionItem.prototype.enableComponent = function (__s76param0) {
    __s1param0.prototype.enableComponent.call(this, __s76param0);
    this.disp.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
    if (this.containerMC && this.containerMC.mc) {
      if (__s76param0) {
        this.containerMC.mc.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
      } else {
        this.containerMC.mc.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_COLOR_MATRIX);
      }
      this.containerMC.mc_inMovement.visible = !__s76param0;
    }
  };
  GeneralSelectionItem.prototype.disableIfNotAvailable = function () {
    this.enableComponent(this.isAvailable());
  };
  GeneralSelectionItem.prototype.isAvailable = function () {
    return !this._displayBlock || !this.generalVO || !this.generalVO.assignedLord || this.generalVO.assignedLord.isAvailableForEquip;
  };
  Object.defineProperty(GeneralSelectionItem.prototype, "containerMC", {
    get: function () {
      return this._containerClip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSelectionItem.prototype, "generalVO", {
    get: function () {
      return this._generalVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSelectionItem.prototype, "onClickSignal", {
    get: function () {
      return this._onClickSignal;
    },
    enumerable: true,
    configurable: true
  });
  GeneralSelectionItem.CONTAINER_ASSET_NAME = "GeneralIconContainer2";
  GeneralSelectionItem.GENERAL_ICON_ASSET_PREFIX = "GeneralIcon_";
  GeneralSelectionItem.GENERAL_ICON_ASSET_PREVIEW_SUFFIX = "_Preview";
  GeneralSelectionItem.GENERAL_ICON_ASSET_GENERIC_SUFFIX = "Generic";
  GeneralSelectionItem.GENERAL_ICON_ASSET_UNKNOWN_SUFFIX = "Unknown";
  return GeneralSelectionItem;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.GeneralSelectionItem = __s0local1;
