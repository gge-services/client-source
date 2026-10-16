Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_GeneralsEvent = require("gge-module:export_GeneralsEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedBackHoverSliderButton = require("gge-module:export_ClickFeedBackHoverSliderButton");
var __dep_export_GeneralSelectionItem = require("gge-module:export_GeneralSelectionItem");
var __s0local0 = function (__s1param0) {
  function GeneralSelection(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._items = [];
    __s3local0._selectedGeneral = null;
    __s3local0._canPlaceDivider = false;
    __s3local0._dividerClips = [];
    __s3local0._properties = __s3param1;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.disp.btn_slider], __dep_export_ClickFeedBackHoverSliderButton.ClickFeedBackHoverSliderButton, 1);
    var __s3local1 = new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(__s3local0.disp).addMouseWheelElements([__s3local0.disp]);
    var __s3local2 = new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(false, __s3local0.disp.mc_content.mask.height, true);
    __s3local0._scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(__s3local1, __s3local2);
    __s3local0._scrollY = __s3local0.disp.mc_content.y;
    __s3local0._onSelectSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralSelection, __s1param0);
  GeneralSelection.prototype.init = function (__s5param0) {
    var __s5local0 = this;
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.disp.mc_content);
    this._items.forEach(function (__s7param0) {
      return __s7param0.onHide();
    });
    this._items.forEach(function (__s9param0) {
      return __s9param0.onClickSignal.remove(__s5local0.bindFunction(__s5local0.onClickGeneral));
    });
    this._items = [];
    for (var __s5local1 = 0, __s5local2 = __s5param0; __s5local1 < __s5local2.length; __s5local1++) {
      var __s5local3 = __s5local2[__s5local1];
      var __s5local4 = new __dep_export_GeneralSelectionItem.GeneralSelectionItem(__s5local3, this.disp.mc_content);
      this._items.push(__s5local4);
    }
    this.updateItemPositions();
    if (this._properties.disableMovingGenerals) {
      this._items.forEach(function (__s14param0) {
        return __s14param0.disableIfNotAvailable();
      });
    }
  };
  GeneralSelection.prototype.updateItemPositions = function () {
    var __s16local0 = this;
    this._items = this._items.sort(GeneralSelection.sortGenerals);
    var __s16local1 = this._items.filter(function (__s18param0) {
      return __s18param0.generalVO && __s18param0.generalVO.isImplemented && __s18param0.generalVO.isUnlocked;
    });
    var __s16local2 = this._items.filter(function (__s20param0) {
      return __s20param0.generalVO && __s20param0.generalVO.isImplemented && !__s20param0.generalVO.isUnlocked;
    });
    var __s16local3 = this._items.filter(function (__s22param0) {
      return __s22param0.generalVO && !__s22param0.generalVO.isImplemented;
    });
    var __s16local4 = this._items.filter(function (__s24param0) {
      return !__s24param0.generalVO;
    });
    this._items = __s16local1.concat(__s16local2).concat(__s16local4);
    if (this._properties.showPreviewGenerals) {
      this._items = this._items.concat(__s16local3);
    } else {
      __s16local3.forEach(function (__s28param0) {
        return __s28param0.disp.visible = false;
      });
    }
    this._dividerClips.forEach(function (__s30param0) {
      return __s16local0.disp.mc_content.removeChild(__s30param0);
    });
    this._canPlaceDivider = false;
    this._dividerClips = [];
    var __s16local5 = this._properties.padding;
    __s16local5 = this.positionItems(__s16local1, __s16local5);
    __s16local5 = this.positionDivider(__s16local2, __s16local5);
    __s16local5 = this.positionItems(__s16local2, __s16local5);
    if (this._properties.showPreviewGenerals) {
      __s16local5 = this.positionDividerLabel(__s16local3, __s16local5, "dialog_generals_overview_selectGeneral_comingSoon");
      __s16local5 = this.positionItems(__s16local3, __s16local5);
    }
    __s16local5 = this.positionDividerLabel(__s16local4, __s16local5, "dialog_generals_overview_selectGeneral_assignNobody");
    return (__s16local5 = this.positionItems(__s16local4, __s16local5)) + this._properties.padding;
  };
  GeneralSelection.prototype.positionItems = function (__s33param0, __s33param1) {
    if (__s33param0.length == 0) {
      return __s33param1;
    }
    var __s33local0;
    this._canPlaceDivider = true;
    for (var __s33local1 = 0; __s33local1 < __s33param0.length; __s33local1++) {
      __s33local0 = __s33param0[__s33local1];
      if (__s33local1 != 0 && __s33local1 % this._properties.itemsPerRow == 0) {
        __s33param1 += this._properties.itemYOffset;
      }
      __s33local0.disp.y = __s33param1;
      __s33local0.disp.x = this._properties.itemXStart + __s33local1 % this._properties.itemsPerRow * this._properties.itemXOffset;
    }
    return __s33param1 + this._properties.itemYOffset;
  };
  GeneralSelection.prototype.positionDivider = function (__s39param0, __s39param1) {
    if (__s39param0.length > 0 && this._canPlaceDivider) {
      var __s39local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(GeneralSelection.DIVIDER_CLASS_NAME, __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__dep_export_GeneralSelectionItem.GeneralSelectionItem.CONTAINER_ASSET_NAME), null, 0, false);
      this.disp.mc_content.addChild(__s39local0);
      __s39param1 = (__s39param1 = __s39local0.y = __s39param1 + this._properties.padding) + 2 + this._properties.padding;
      this._dividerClips.push(__s39local0);
    }
    return __s39param1;
  };
  GeneralSelection.prototype.positionDividerLabel = function (__s42param0, __s42param1, __s42param2) {
    var __s42local0 = this;
    if (__s42param0.length > 0 && this._canPlaceDivider) {
      var __s42local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(GeneralSelection.DIVIDER_LABEL_CLASS__NAME, __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__dep_export_GeneralSelectionItem.GeneralSelectionItem.CONTAINER_ASSET_NAME), null, 0, false);
      this.disp.mc_content.addChild(__s42local1);
      __s42param1 = (__s42param1 = __s42local1.y = __s42param1 + this._properties.padding) + 30 + this._properties.padding;
      __s42local1.doWhenLoaded(function (__s45param0) {
        var __s45local0 = __s42local1.currentshownDisplayObject.txt_label;
        __s45local0.defaultCacheScale = 2;
        __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s45local0, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s42param2), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true)).color = __s42local0._properties.textColor;
      });
      this._dividerClips.push(__s42local1);
    }
    return __s42param1;
  };
  GeneralSelection.prototype.onShow = function () {
    var __s47local0 = this;
    __s1param0.prototype.onShow.call(this);
    var __s47local1 = this.updateItemPositions();
    __s47local1 = __s47local1 * this.disp.mc_content.scaleY + this._properties.padding;
    this._items.forEach(function (__s49param0) {
      return __s49param0.onShow();
    });
    this._items.forEach(function (__s51param0) {
      return __s51param0.onClickSignal.add(__s47local0.bindFunction(__s47local0.onClickGeneral));
    });
    var __s47local2 = Math.max(0, __s47local1 - this.disp.mc_content.mask.height);
    this._scrollComponent.init(0, __s47local2, this._properties.itemYOffset, this._properties.itemYOffset);
    this._scrollComponent.scrollToValue(0);
    this._scrollComponent.show();
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    __dep_export_CastleModel.CastleModel.generalsData.addEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
  };
  GeneralSelection.prototype.onHide = function () {
    var __s53local0 = this;
    __s1param0.prototype.onHide.call(this);
    this._items.forEach(function (__s55param0) {
      return __s55param0.onHide();
    });
    this._items.forEach(function (__s57param0) {
      return __s57param0.onClickSignal.remove(__s53local0.bindFunction(__s53local0.onClickGeneral));
    });
    this._scrollComponent.hide();
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    __dep_export_CastleModel.CastleModel.generalsData.removeEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
  };
  GeneralSelection.prototype.onGeneralsUpdated = function () {
    var __s59local0 = this.updateItemPositions();
    __s59local0 = __s59local0 * this.disp.mc_content.scaleY + this._properties.padding;
    this.updateItemPositions();
    var __s59local1 = Math.max(0, __s59local0 - this.disp.mc_content.mask.height);
    var __s59local2 = Math.min(this._scrollComponent.currentValue, __s59local1);
    this._scrollComponent.init(0, __s59local1, this._properties.itemYOffset, this._properties.itemYOffset);
    this._scrollComponent.scrollToValue(__s59local2);
  };
  GeneralSelection.prototype.onScroll = function () {
    this.disp.mc_content.y = this._scrollY - this._scrollComponent.currentValue;
  };
  GeneralSelection.prototype.onClickGeneral = function (__s63param0, __s63param1 = true) {
    var __s63local0 = this._selectedGeneral == __s63param0 && this._properties.canDeselect ? null : __s63param0;
    if (this._selectedGeneral) {
      this._selectedGeneral.setSelected(false);
    }
    this._selectedGeneral = __s63local0;
    if (this._selectedGeneral) {
      this._selectedGeneral.setSelected(true);
    }
    if (__s63param1) {
      this._onSelectSignal.dispatch(this._selectedGeneral ? this._selectedGeneral.generalVO : null);
    }
  };
  Object.defineProperty(GeneralSelection.prototype, "selectedGeneralVO", {
    get: function () {
      if (this._selectedGeneral) {
        return this._selectedGeneral.generalVO;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSelection.prototype, "onSelectSignal", {
    get: function () {
      return this._onSelectSignal;
    },
    enumerable: true,
    configurable: true
  });
  GeneralSelection.prototype.selectGeneralVO = function (__s74param0, __s74param1 = false) {
    var __s74local0 = this._items.find(function (__s76param0) {
      return __s76param0.generalVO == __s74param0;
    });
    this.onClickGeneral(__s74local0, __s74param1);
  };
  GeneralSelection.prototype.selectIndex = function (__s78param0, __s78param1 = false) {
    this.onClickGeneral(this._items[__s78param0], __s78param1);
  };
  GeneralSelection.sortGenerals = function (__s80param0, __s80param1) {
    if (__s80param0.generalVO) {
      if (__s80param1.generalVO) {
        if (__s80param1.generalVO.generalRarityID - __s80param0.generalVO.generalRarityID != 0) {
          return __s80param1.generalVO.generalRarityID - __s80param0.generalVO.generalRarityID;
        } else if (__s80param1.generalVO.currentLevel - __s80param0.generalVO.currentLevel != 0) {
          return __s80param1.generalVO.generalRarityID - __s80param0.generalVO.generalRarityID;
        } else {
          return __s80param0.generalVO.nameTextShort.localeCompare(__s80param1.generalVO.nameTextShort);
        }
      } else {
        return -1;
      }
    } else {
      return 1;
    }
  };
  Object.defineProperty(GeneralSelection.prototype, "items", {
    get: function () {
      return this._items;
    },
    enumerable: true,
    configurable: true
  });
  GeneralSelection.DIVIDER_CLASS_NAME = "GeneralSelectionDivider";
  GeneralSelection.DIVIDER_LABEL_CLASS__NAME = "GeneralSelectionDividerLabel";
  return GeneralSelection;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.GeneralSelection = __s0local0;
