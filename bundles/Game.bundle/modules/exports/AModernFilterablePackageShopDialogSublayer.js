Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleOpenShopExecutor = require("gge-module:export_CastleOpenShopExecutor");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_LayoutMargin = require("gge-module:export_LayoutMargin");
var __dep_export_SimpleLayoutStrategyHorizontal = require("gge-module:export_SimpleLayoutStrategyHorizontal");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_MovieClipLayoutable = require("gge-module:export_MovieClipLayoutable");
var __dep_export_SimpleComboboxComponent = require("gge-module:export_SimpleComboboxComponent");
var __dep_export_SimpleComboboxComponentConfig = require("gge-module:export_SimpleComboboxComponentConfig");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_HighlightAndClearInputTextBehaviour = require("gge-module:export_HighlightAndClearInputTextBehaviour");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_AModernPackageShopDialogSublayer = require("gge-module:export_AModernPackageShopDialogSublayer");
var __dep_export_InfiniteScrollPackageShopList = require("gge-module:export_InfiniteScrollPackageShopList");
var __dep_export_ModernPackageShopFilterItem = require("gge-module:export_ModernPackageShopFilterItem");
var __s0local0 = createjs.Point;
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
var __s0local1 = function (__s1param0) {
  function AModernFilterablePackageShopDialogSublayer(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._currentActiveRelationFilters = [];
    __s3local0._filterItems = [];
    __s3local0._filterPanelVisible = false;
    __s3local0._assetName = __s3param1;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AModernFilterablePackageShopDialogSublayer, __s1param0);
  AModernFilterablePackageShopDialogSublayer.prototype.init = function () {
    if (this._assetName) {
      this._listComponent = new __dep_export_InfiniteScrollPackageShopList.InfiniteScrollPackageShopList(this.dialogDisp.mc_itemList, this._assetName);
      this.subLayerDisp.mc_empty.visible = false;
      this.subLayerDisp.mc_filterMenu.visible = false;
      this.subLayerDisp.mc_timeCurrency.mc_time.mouseChildren = false;
      this.subLayerDisp.mc_timeCurrency.mc_c2.btn_add.toolTipText = "add_Gold";
      this.subLayerDisp.btn_filter_active.visible = false;
      this.subLayerDisp.btn_filter.toolTipText = "filters";
      this.subLayerDisp.btn_filter_active.toolTipText = "filters";
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_empty.txt_empty, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("merchants_filter_empty"));
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_filterMenu.btn_reset.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("equipmentFilter_reset"));
      __dep_export_ButtonHelper.ButtonHelper.initButtons([this.subLayerDisp.mc_timeCurrency.mc_c2.btn_add, this.subLayerDisp.btn_filter, this.subLayerDisp.btn_filter_active, this.subLayerDisp.mc_filterMenu.btn_reset], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
      this._castleSelector = new __dep_export_SimpleComboboxComponent.SimpleComboboxComponent(this.subLayerDisp.castleSelector, new __dep_export_SimpleComboboxComponentConfig.SimpleComboboxComponentConfig(-2, 1.025));
      this._castleSelector.disp.visible = false;
      this._itxt_search = this.textFieldManager.registerTextField(this.dialogDisp.txt_search, new __dep_exact_92d05af59ee2ff30_1.TextVO("search"));
      this._itxt_search.selectable = true;
      this._inputBehaviourSearch = new __dep_export_HighlightAndClearInputTextBehaviour.HighlightAndClearInputTextBehaviour(this.dialogDisp.mc_search, this._itxt_search, true);
      this.subLayerDisp.mc_filterMenu.addChild(this.subLayerDisp.mc_filterMenu.mc_slider);
      this._filterList = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.subLayerDisp.mc_filterMenu.mc_slider).addMouseWheelElements([this.subLayerDisp.mc_filterMenu]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true, this.subLayerDisp.mc_filterMenu.mc_list.mask.height));
      this._filterStartPosY = this.subLayerDisp.mc_filterMenu.mc_list.y;
      this._relationFilterByCurrency = new Map();
    }
  };
  AModernFilterablePackageShopDialogSublayer.prototype.initTimeAndCurrency = function () {
    this.subLayerDisp.mc_timeCurrency.mc_time.visible = this.getRemainingTime() > -1;
    this.subLayerDisp.mc_timeCurrency.mc_currency.visible = this.getCurrencyType() && this.getCurrencyType().type != __dep_export_CollectableEnum.CollectableEnum.C2;
    this.subLayerDisp.mc_timeCurrency.mc_c2.visible = this.displayC2() || this.getCurrencyType() && this.getCurrencyType().type == __dep_export_CollectableEnum.CollectableEnum.C2;
    var __s8local0 = new __dep_export_LayoutMargin.LayoutMargin(0, 0, 5, 5);
    var __s8local1 = [];
    if (this.subLayerDisp.mc_timeCurrency.deco_left) {
      __s8local1.push(new __dep_export_MovieClipLayoutable.MovieClipLayoutable(this.subLayerDisp.mc_timeCurrency.deco_left, __s8local0));
    }
    if (this.subLayerDisp.mc_timeCurrency.mc_time.visible) {
      __s8local1.push(new __dep_export_MovieClipLayoutable.MovieClipLayoutable(this.subLayerDisp.mc_timeCurrency.mc_time, __s8local0));
    }
    if (this.subLayerDisp.mc_timeCurrency.mc_currency.visible) {
      __s8local1.push(new __dep_export_MovieClipLayoutable.MovieClipLayoutable(this.subLayerDisp.mc_timeCurrency.mc_currency, __s8local0));
    }
    if (this.subLayerDisp.mc_timeCurrency.mc_c2.visible) {
      __s8local1.push(new __dep_export_MovieClipLayoutable.MovieClipLayoutable(this.subLayerDisp.mc_timeCurrency.mc_c2, __s8local0));
    }
    if (this.subLayerDisp.mc_timeCurrency.deco_right) {
      __s8local1.push(new __dep_export_MovieClipLayoutable.MovieClipLayoutable(this.subLayerDisp.mc_timeCurrency.deco_right, __s8local0));
    }
    new __dep_export_SimpleLayoutStrategyHorizontal.SimpleLayoutStrategyHorizontal(__dep_export_SimpleLayoutStrategyHorizontal.SimpleLayoutStrategyHorizontal.ALIGNMENT_CENTER).apply(__s8local1, this.subLayerDisp.mc_timeCurrency.getBounds());
  };
  AModernFilterablePackageShopDialogSublayer.prototype.show = function (__s15param0) {
    this._currencyType = __s15param0[0];
    this._currentActiveRelationFilters = this._relationFilterByCurrency.get(this._currencyType) || [];
    __s1param0.prototype.show.call(this, __s15param0);
    if (this.getRemainingTime() > -1) {
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    }
    this.updateCastleSelector();
    this.initTimeAndCurrency();
    this.updateFilterPanelVisibility();
    this.subLayerDisp.btn_filter_active.visible = this._currentActiveRelationFilters.length > 0;
    this._castleSelector.onShow();
    this._castleSelector.onSelectionChanged.add(this.bindFunction(this.onCastleSelected));
    this._inputBehaviourSearch.onShow();
    this._itxt_search.keyUp.add(this.bindFunction(this.onSearchFieldKeyDown));
    this._itxt_search.change.add(this.bindFunction(this.onSearchFieldChange));
    this._filterList.show();
    this._filterList.onScrollSignal.add(this.bindFunction(this.onScrollFilters));
  };
  AModernFilterablePackageShopDialogSublayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    if (this._castleSelector) {
      this._castleSelector.onHide();
      this._castleSelector.onSelectionChanged.remove(this.bindFunction(this.onCastleSelected));
    }
    if (this._inputBehaviourSearch) {
      this._inputBehaviourSearch.onHide();
    }
    this._itxt_search.keyUp.removeAll();
    this._itxt_search.change.removeAll();
    this._filterList.scrollToValue(0);
    this._filterList.hide();
    this._filterList.onScrollSignal.remove(this.bindFunction(this.onScrollFilters));
    this._filterItems.forEach(function (__s22param0) {
      return __s22param0.onHide();
    });
    this._filterItems = [];
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_filterMenu.mc_list);
    this.subLayerDisp.mc_filterMenu.visible = false;
    this._relationFilterByCurrency.set(this.currencyType, this._currentActiveRelationFilters);
  };
  AModernFilterablePackageShopDialogSublayer.prototype.updateCurrency = function () {
    var __s24local0 = this.getCurrencyType();
    if (__s24local0 && __s24local0.type != __dep_export_CollectableEnum.CollectableEnum.C2) {
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.mc_timeCurrency.mc_currency), __dep_export_CollectableHelper.CollectableHelper.createVO(__s24local0.type, __dep_export_CostHelper.CostHelper.getAvailableGoods(__s24local0), __s24local0.id), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_STORAGE, new __s0local0(30, 30)));
      var __s24local1 = __dep_export_CastleModel.CastleModel.currencyData.getXmlCurrencyById(__s24local0.id);
      var __s24local2 = __s24local1 ? __s24local1.softCap : 0;
      if (__s24local2 > 0) {
        var __s24local3 = this.textFieldManager.registerTextField(this.dialogDisp.mc_timeCurrency.mc_currency.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("numbersXY", [__dep_export_CostHelper.CostHelper.getAvailableGoods(__s24local0), __s24local2]));
        __s24local3.color = __dep_export_CostHelper.CostHelper.getAvailableGoods(__s24local0) < __s24local2 ? __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT : __dep_export_ClientConstColor.ClientConstColor.GENERIC_RED;
        __s24local3.autoFitToBounds = true;
      } else {
        this.textFieldManager.getTextField(this.dialogDisp.mc_timeCurrency.mc_currency.txt_text).color = __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT;
      }
    }
    if (this.displayC2() || __s24local0 && __s24local0.type == __dep_export_CollectableEnum.CollectableEnum.C2) {
      var __s24local4 = new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.C2);
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.mc_timeCurrency.mc_c2.mc_currency), __dep_export_CollectableHelper.CollectableHelper.createVO(__s24local4.type, __dep_export_CostHelper.CostHelper.getAvailableGoods(__s24local4), __s24local4.id), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(28, 20)));
    }
  };
  AModernFilterablePackageShopDialogSublayer.prototype.toggleFilterPanel = function () {
    this._filterPanelVisible = !this._filterPanelVisible;
    this.updateFilterPanelVisibility();
  };
  AModernFilterablePackageShopDialogSublayer.prototype.updateFilterPanelVisibility = function () {
    if (this._filterPanelVisible) {
      this.updateFilters();
      this._filterList.show();
      this.subLayerDisp.mc_filterMenu.visible = true;
    } else {
      this.subLayerDisp.mc_filterMenu.visible = false;
      this._filterList.hide();
    }
  };
  AModernFilterablePackageShopDialogSublayer.prototype.updateFilters = function () {
    var __s36local0 = this;
    var __s36local1 = this.getEventPackages();
    if (!this._inputBehaviourSearch.isEmpty()) {
      __s36local1 = __s36local1.filter(function (__s39param0) {
        return __s39param0.getSearchString().includes(__s36local0._itxt_search.text.toLowerCase());
      });
    }
    var __s36local2 = [];
    var __s36local3 = [];
    for (var __s36local4 = 0, __s36local5 = __s36local1; __s36local4 < __s36local5.length; __s36local4++) {
      for (var __s36local6 = 0, __s36local7 = __s36local5[__s36local4].filterRelationVOs; __s36local6 < __s36local7.length; __s36local6++) {
        var __s36local8 = __s36local7[__s36local6];
        if (__s36local3.indexOf(__s36local8) == -1) {
          __s36local3.push(__s36local8);
        }
        if (this._currentActiveRelationFilters.indexOf(__s36local8) > -1 && __s36local2.indexOf(__s36local8) == -1) {
          __s36local2.push(__s36local8);
        }
      }
    }
    this._currentActiveRelationFilters = __s36local2;
    if (this._filterPanelVisible) {
      this._filterItems.forEach(function (__s48param0) {
        return __s48param0.onHide();
      });
      this._filterItems = [];
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_filterMenu.mc_list);
      for (var __s36local9 = 0, __s36local10 = __s36local3; __s36local9 < __s36local10.length; __s36local9++) {
        if ((__s36local8 = __s36local10[__s36local9]).filterID != -1) {
          var __s36local11 = this.getFilterItem(AModernFilterablePackageShopDialogSublayer.FILTER_CATEGORY, __s36local8);
          if (__s36local11) {
            __s36local11.addRelationVO(__s36local8);
          } else {
            this.createFilterItem(AModernFilterablePackageShopDialogSublayer.FILTER_CATEGORY, __s36local8);
          }
          if (__s36local14 = this.getFilterItem(AModernFilterablePackageShopDialogSublayer.FILTER_FILTER, __s36local8)) {
            __s36local14.addRelationVO(__s36local8);
          } else {
            this.createFilterItem(AModernFilterablePackageShopDialogSublayer.FILTER_FILTER, __s36local8);
          }
          if (__s36local8.subFilterID > -1) {
            if (!this.getFilterItem(AModernFilterablePackageShopDialogSublayer.FILTER_SUBFILTER, __s36local8)) {
              this.createFilterItem(AModernFilterablePackageShopDialogSublayer.FILTER_SUBFILTER, __s36local8);
            }
          }
        }
      }
      this._filterItems.sort(this.sortByFilterRelation);
      this._filterItems.forEach(function (__s59param0) {
        return __s59param0.updateCheckbox(__s36local0._currentActiveRelationFilters);
      });
      var __s36local12 = -2;
      for (var __s36local13 = 0; __s36local13 < this._filterItems.length; __s36local13++) {
        var __s36local14;
        (__s36local14 = this._filterItems[__s36local13]).disp.y = __s36local12;
        __s36local12 += __s36local14.disp.height;
      }
      var __s36local15 = Math.max(0, this.subLayerDisp.mc_filterMenu.mc_list.height - this.subLayerDisp.mc_filterMenu.mc_list.mask.height);
      this._filterList.init(0, __s36local15, 50, 100);
      this._filterList.scrollToValue(0);
    }
  };
  AModernFilterablePackageShopDialogSublayer.prototype.getFilterItem = function (__s63param0, __s63param1) {
    switch (__s63param0) {
      case AModernFilterablePackageShopDialogSublayer.FILTER_CATEGORY:
        return this._filterItems.find(function (__s66param0) {
          return __s66param0.type == __s63param0 && __s66param0.relationVOs[0].categoryID == __s63param1.categoryID;
        });
      case AModernFilterablePackageShopDialogSublayer.FILTER_FILTER:
        return this._filterItems.find(function (__s68param0) {
          return __s68param0.type == __s63param0 && __s68param0.relationVOs[0].categoryID == __s63param1.categoryID && __s68param0.relationVOs[0].filterID == __s63param1.filterID;
        });
      case AModernFilterablePackageShopDialogSublayer.FILTER_SUBFILTER:
        return this._filterItems.find(function (__s70param0) {
          return __s70param0.type == __s63param0 && __s70param0.relationVOs[0].categoryID == __s63param1.categoryID && __s70param0.relationVOs[0].filterID == __s63param1.filterID && __s70param0.relationVOs[0].subFilterID == __s63param1.subFilterID;
        });
    }
  };
  AModernFilterablePackageShopDialogSublayer.prototype.createFilterItem = function (__s72param0, __s72param1) {
    var __s72local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s72param0[0], __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.filterItemAssetName), null, 0, false);
    var __s72local1 = new __dep_export_ModernPackageShopFilterItem.ModernPackageShopFilterItem(__s72local0.currentshownDisplayObject, __s72param0, this.bindFunction(this.onFilterSelect));
    __s72local1.addRelationVO(__s72param1);
    this._filterItems.push(__s72local1);
    this.subLayerDisp.mc_filterMenu.mc_list.addChild(__s72local0);
  };
  AModernFilterablePackageShopDialogSublayer.prototype.updatePackageList = function () {
    var __s74local0 = this;
    this.subLayerDisp.btn_filter_active.visible = this._currentActiveRelationFilters.length > 0;
    this._filterItems.forEach(function (__s76param0) {
      return __s76param0.updateCheckbox(__s74local0._currentActiveRelationFilters);
    });
    this._listComponent.updateWithNewData(this.getFilteredPackages(), this.getEventVO(), this.getBuyType(), this.getBuyTypeId());
  };
  AModernFilterablePackageShopDialogSublayer.prototype.onClick = function (__s78param0) {
    __s1param0.prototype.onClick.call(this, __s78param0);
    this._castleSelector.onOutOfBoundsClickCheck(__s78param0.target);
    switch (__s78param0.target) {
      case this.dialogDisp.mc_timeCurrency.mc_c2.btn_add:
        this.onClickC2Button(__dep_exact_f855840627e6e145.int(__dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.SOURCE_UNKNOWN), __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.SOURCE_MERCHANT_DIALOG);
        break;
      case this.dialogDisp.btn_filter:
      case this.dialogDisp.btn_filter_active:
        this.toggleFilterPanel();
        break;
      case this.subLayerDisp.mc_filterMenu.btn_reset:
        this._currentActiveRelationFilters = [];
        this.updatePackageList();
    }
  };
  AModernFilterablePackageShopDialogSublayer.prototype.onClickC2Button = function (__s81param0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.SOURCE_UNKNOWN), __s81param1 = __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.SOURCE_UNKNOWN, __s81param2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.SHOP_TAB_DEFAULT)) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.dialogDisp.mc_timeCurrency.mc_c2.btn_add)) {
      __dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.open(__s81param0, __s81param1, __s81param2);
    }
  };
  AModernFilterablePackageShopDialogSublayer.prototype.onTickEvent = function (__s84param0) {
    this.updateRemainingEventTime();
  };
  AModernFilterablePackageShopDialogSublayer.prototype.onSearchFieldKeyDown = function (__s86param0) {
    if (__s86param0.key == __dep_exact_81dacdf05bd32292.Keyboard.ENTER) {
      document.activeElement.blur();
    }
  };
  AModernFilterablePackageShopDialogSublayer.prototype.onSearchFieldChange = function (__s89param0) {
    this.updatePackageList();
    this.updateFilters();
  };
  AModernFilterablePackageShopDialogSublayer.prototype.onFilterSelect = function (__s91param0, __s91param1) {
    var __s91local0 = this;
    if (__s91param1) {
      __s91param0.forEach(function (__s94param0) {
        if (__s91local0._currentActiveRelationFilters.indexOf(__s94param0) == -1) {
          __s91local0._currentActiveRelationFilters.push(__s94param0);
        }
      });
    } else {
      __s91param0.forEach(function (__s98param0) {
        var __s98local0 = __s91local0._currentActiveRelationFilters.indexOf(__s98param0);
        if (__s98local0 > -1) {
          __s91local0._currentActiveRelationFilters.splice(__s98local0, 1);
        }
      });
    }
    this.updatePackageList();
  };
  AModernFilterablePackageShopDialogSublayer.prototype.onScrollFilters = function () {
    this.subLayerDisp.mc_filterMenu.mc_list.y = this._filterStartPosY - this._filterList.currentValue;
  };
  AModernFilterablePackageShopDialogSublayer.prototype.updateCastleSelector = function () {
    this._castleSelector.updateWithNewValues([]);
    this._castleSelector.selectIndex(0);
    this._castleSelector.disp.visible = false;
  };
  AModernFilterablePackageShopDialogSublayer.prototype.fillTypeItemContent = function (__s105param0) {
    this.textFieldManager.registerTextField(__s105param0.getItemMc().txt_text, new __dep_exact_92d05af59ee2ff30_1.TextVO("")).autoFitToBounds = true;
  };
  AModernFilterablePackageShopDialogSublayer.prototype.onCastleSelected = function () {
    this._castleSelector.getSelectedItem();
    this.textFieldManager.registerTextField(this._castleSelector.getSelectorMc().txt_text, new __dep_exact_92d05af59ee2ff30_1.TextVO("")).autoFitToBounds = true;
  };
  AModernFilterablePackageShopDialogSublayer.prototype.updateRemainingEventTime = function () {
    var __s109local0 = this.getRemainingTime();
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_timeCurrency.mc_time.txt_time, __s109local0);
    this.dialogDisp.mc_timeCurrency.mc_time.toolTipText = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventToolTipString(__s109local0);
  };
  AModernFilterablePackageShopDialogSublayer.prototype.getRemainingTime = function () {
    var __s111local0 = this.getEventVO();
    if (__s111local0) {
      return __s111local0.remainingEventTimeInSeconds;
    } else {
      return -1;
    }
  };
  AModernFilterablePackageShopDialogSublayer.prototype.getFilteredPackages = function () {
    var __s115local0 = this;
    var __s115local1 = this.getEventPackages();
    if (!this._inputBehaviourSearch.isEmpty()) {
      __s115local1 = __s115local1.filter(function (__s118param0) {
        return __s118param0.getSearchString().includes(__s115local0._itxt_search.text.toLowerCase());
      });
    }
    if (this._currentActiveRelationFilters.length > 0) {
      var __s115local2 = this.createFilterValidationMap();
      __s115local1 = __s115local1.filter(function (__s121param0) {
        return __s115local0.isPackageFiltered(__s121param0, __s115local2);
      });
    }
    this.subLayerDisp.mc_empty.visible = __s115local1.length == 0;
    return __s115local1;
  };
  AModernFilterablePackageShopDialogSublayer.prototype.createFilterValidationMap = function () {
    var __s123local0 = new Map();
    for (var __s123local1 = 0, __s123local2 = this._currentActiveRelationFilters; __s123local1 < __s123local2.length; __s123local1++) {
      var __s123local3 = __s123local2[__s123local1];
      if (!__s123local0.has(__s123local3.categoryID)) {
        __s123local0.set(__s123local3.categoryID, new Map());
      }
      if (!__s123local0.get(__s123local3.categoryID).has(__s123local3.filterID)) {
        __s123local0.get(__s123local3.categoryID).set(__s123local3.filterID, []);
      }
      __s123local0.get(__s123local3.categoryID).get(__s123local3.filterID).push(__s123local3);
    }
    return __s123local0;
  };
  AModernFilterablePackageShopDialogSublayer.prototype.isPackageFiltered = function (__s129param0, __s129param1) {
    return Array.from(__s129param1.values()).some(function (__s131param0) {
      return Array.from(__s131param0.values()).every(function (__s133param0) {
        return __s129param0.filterRelationVOs.some(function (__s135param0) {
          return __s133param0.indexOf(__s135param0) > -1;
        });
      });
    });
  };
  AModernFilterablePackageShopDialogSublayer.prototype.displayC2 = function () {
    return false;
  };
  AModernFilterablePackageShopDialogSublayer.prototype.sortByFilterRelation = function (__s139param0, __s139param1) {
    var __s139local0 = __s139param0.relationVOs[0];
    var __s139local1 = __s139param1.relationVOs[0];
    if (__s139local0.categoryID == __s139local1.categoryID) {
      if (__s139local0.filterID == __s139local1.filterID) {
        if (__s139local0.subFilterID == __s139local1.subFilterID) {
          return __s139param0.type[1] - __s139param1.type[1];
        } else {
          return __s139local0.subFilterID - __s139local1.subFilterID;
        }
      } else {
        return __s139local0.filterID - __s139local1.filterID;
      }
    } else {
      return __s139local0.categoryID - __s139local1.categoryID;
    }
  };
  AModernFilterablePackageShopDialogSublayer.prototype.resetFilters = function () {
    this._relationFilterByCurrency = new Map();
    this._currentActiveRelationFilters = [];
  };
  AModernFilterablePackageShopDialogSublayer.prototype.getCurrencyType = function () {
    return this._currencyType;
  };
  Object.defineProperty(AModernFilterablePackageShopDialogSublayer.prototype, "filterItemAssetName", {
    get: function () {
      return this._assetName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AModernFilterablePackageShopDialogSublayer.prototype, "currencyType", {
    get: function () {
      return this._currencyType;
    },
    enumerable: true,
    configurable: true
  });
  AModernFilterablePackageShopDialogSublayer.FILTER_CATEGORY = ["Filter_Category", 1];
  AModernFilterablePackageShopDialogSublayer.FILTER_FILTER = ["Filter_Filter", 2];
  AModernFilterablePackageShopDialogSublayer.FILTER_SUBFILTER = ["Filter_Subfilter", 3];
  return AModernFilterablePackageShopDialogSublayer;
}(__dep_export_AModernPackageShopDialogSublayer.AModernPackageShopDialogSublayer);
exports.AModernFilterablePackageShopDialogSublayer = __s0local1;
