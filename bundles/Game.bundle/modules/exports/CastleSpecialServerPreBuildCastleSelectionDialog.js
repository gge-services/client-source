Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleTempServerConfirmationDialogProperties = require("gge-module:export_CastleTempServerConfirmationDialogProperties");
var __dep_export_CastleSpecialServerPreBuildCastleSelectionBuildingList = require("gge-module:export_CastleSpecialServerPreBuildCastleSelectionBuildingList");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleSpecialServerPreBuildCastleSelectionDialog() {
    var __s3local0 = this;
    __s3local0.selectedCastleIndex = -1;
    __s3local0._confirmedCastleIndex = -1;
    __s3local0.BUILDING_CATEGORIES = [__dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_CIVIL, __dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_MILITARY, __dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_DEFENCE, __dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_DECO];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleSpecialServerPreBuildCastleSelectionDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSpecialServerPreBuildCastleSelectionDialog, __s1param0);
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.mc_costs.mc_buySpecialCurrency.btn_buySpecialCurrency], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_buy], __dep_export_ClickFeedbackButton.ClickFeedbackButton, 1);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_buy2], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    this._buildingListBuilder = new __dep_export_CastleSpecialServerPreBuildCastleSelectionBuildingList.CastleSpecialServerPreBuildCastleSelectionBuildingList(this.dialogDisp.mc_items.mc_itemList);
    this._buildingList = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp.mc_items.mc_itemList).addMouseWheelElements([this.dialogDisp.mc_items]).addVisualElements([this.dialogDisp.mc_items.mc_itemList]).addMinusButton(this.dialogDisp.mc_items.mc_slider.btn_minus).addPlusButton(this.dialogDisp.mc_items.mc_slider.btn_plus).addSliderButton(this.dialogDisp.mc_items.mc_slider.btn_slider).addSliderLine(this.dialogDisp.mc_items.mc_slider.mc_sliderLine), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true, this.dialogDisp.mc_items.mc_mask.height));
    var __s5local0 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_CastleSpecialServerPreBuildCastleSelectionDialogPreBuiltItem.CastleSpecialServerPreBuildCastleSelectionDialogPreBuiltItem, "CastleSpecialServerPreBuildCastleSelectionPreBuiltItem", CastleSpecialServerPreBuildCastleSelectionDialog.NAME);
    __s5local0.itemPaddingY = 6;
    __s5local0.useSmoothScroll = true;
    this._preBuildList = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.dialogDisp.mc_preBuilts).addMaskMc(this.dialogDisp.mc_preBuilts.mc_mask).addSliderMc(this.dialogDisp.mc_preBuilts.mc_slider), __s5local0);
    this.dialogDisp.mc_costs.mc_buySpecialCurrency.btn_buySpecialCurrency.toolTipText = "dialog_tempServer_CastlePassageToken_button_tooltip";
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.onClick = function (__s7param0) {
    __s1param0.prototype.onClick.call(this, __s7param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s7param0.target)) {
      switch (__s7param0.target) {
        case this.dialogDisp.btn_buy:
        case this.dialogDisp.btn_buy2:
          this.onClickBuy();
          break;
        case this.dialogDisp.btn_close:
          this.onCloseOK();
          break;
        case this.dialogDisp.btn_help:
          if (this.isCastleTransportationOnly) {
            if (__dep_export_SpecialServerHelper.SpecialServerHelper.isOnSpecialServer) {
              __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30_2.Localize.text("help_tempServer_castleTransport"));
            } else {
              __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30_2.Localize.text("help_tempServer_castleTransport_main"));
            }
          } else {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30_2.Localize.text("help_chooseCastle"));
          }
          break;
        case this.dialogDisp.mc_costs.mc_buySpecialCurrency.btn_buySpecialCurrency:
          var __s7local0 = new __dep_export_CastleGenericBuyDialogProperties.CastleGenericBuyDialogProperties();
          __s7local0.specialEventVO = this.eventVO;
          __s7local0.eventPackageVO = this.currencyBuyPackgeVO;
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_ModernPackageShopBuyDialog.ModernPackageShopBuyDialog, __s7local0);
      }
    }
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.onClickBuy = function () {
    this._confirmedCastleIndex = this.selectedCastleIndex;
    var __s15local0 = this.presetVOs[this.selectedCastleIndex].costs;
    var __s15local1 = new __dep_export_CollectablesCosts.CollectablesCosts(__s15local0);
    if (!__dep_export_CostHelper.CostHelper.canAfford(__s15local1) && this.isCastleTransportationOnly) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_DarkOkDialog.DarkOkDialog, new __dep_exact_9e901e8e2483a22f_2.BasicStandardOkDialogProperties("dialog_insufficientCurrency_header", "dialog_insufficientCurrency_CastlePassageToken_desc"));
    } else if (__s15local0.length != 0 && __s15local0.list[0].amount != 0) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleTempServerCostConfirmationDialog.CastleTempServerCostConfirmationDialog, new __dep_export_CastleTempServerConfirmationDialogProperties.CastleTempServerConfirmationDialogProperties(this.presetVOs[this.selectedCastleIndex], this.dialogProperties.globalServerID, this.bindFunction(this.onConfirmed)));
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleTempServerConfirmationDialog.CastleTempServerConfirmationDialog, new __dep_export_CastleTempServerConfirmationDialogProperties.CastleTempServerConfirmationDialogProperties(this.presetVOs[this.selectedCastleIndex], this.dialogProperties.globalServerID, this.bindFunction(this.onConfirmed)));
    }
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.onConfirmed = function () {
    var __s20local0 = this.presetVOs ? this.presetVOs[this._confirmedCastleIndex] : null;
    if (__s20local0) {
      var __s20local1 = !!__s20local0.costs.containsType(__dep_export_CollectableEnum.CollectableEnum.C2);
      if (this.dialogProperties.type == __dep_export_CastleSpecialServerPreBuildCastleSelectionDialogProperties.CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_ABG) {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2STempServerSelectCastleVO.C2STempServerSelectCastleVO(__s20local0.preBuildCastleVO.id, __s20local1, false, this.dialogProperties.globalServerID));
        __dep_export_CastleModel.CastleModel.userData.connectToABGServer = true;
      } else if (this.dialogProperties.type == __dep_export_CastleSpecialServerPreBuildCastleSelectionDialogProperties.CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_TEMPSERVER) {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2STempServerSelectCastleVO.C2STempServerSelectCastleVO(__s20local0.preBuildCastleVO.id, __s20local1, false, this.dialogProperties.globalServerID));
        __dep_export_CastleModel.CastleModel.userData.connectToTempServer = true;
      } else if (this.dialogProperties.type == __dep_export_CastleSpecialServerPreBuildCastleSelectionDialogProperties.CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_STORMISLANDS) {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSelectKingdomCastleVO.C2SSelectKingdomCastleVO(__s20local0.preBuildCastleVO.id, 0, __s20local1, __dep_exact_26a421b704832cff_1.WorldIsland.KINGDOM_ID));
      }
    }
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.onCloseOK = function () {
    this.hide();
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.showLoaded = function (__s28param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s28param0);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    if (this.dialogProperties.type == __dep_export_CastleSpecialServerPreBuildCastleSelectionDialogProperties.CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_STORMISLANDS) {
      this.controller.addEventListener(__dep_export_CastleEilandEvent.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onIslandReset));
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.isCastleTransportationOnly ? "dialog_tempServer_castleTransport_header" : "dialog_chooseCastle_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title_content, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_preBuiltCastle_desc_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title_castle, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_preBuiltCastle_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_buy.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_preBuiltCastle_buyCastle_Button")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_buy2.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("build")));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.costs_1.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialoge_shapeshifter_Travel_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_castleTransportation.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tempServer_castleTransport_desc"));
    this.dialogDisp.mc_castleTransportation.visible = this.isCastleTransportationOnly;
    this.dialogDisp.mc_preBuilts.visible = !this.isCastleTransportationOnly;
    this._preBuildList.onShow();
    this._preBuildList.updateWithNewData(this.getPresetsAsVecObj());
    this._buildingList.show();
    this._buildingList.onScrollSignal.add(this.bindFunction(this.onValueChanged));
    this._buildingList.scrollToPercent(0);
    this.selectCastle(this.selectedCastleIndex == -1 ? 0 : this.selectedCastleIndex);
    if (this.isCastleTransportationOnly) {
      this.controller.addEventListener(__dep_export_CastlePrebuiltCastleDataEvent.CastlePrebuiltCastleDataEvent.MAIN_CASTLE_BUILDINGS_UPDATED, this.bindFunction(this.onMainCastleBuildingsUpdated));
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetCastleTransportationBuildingsVO.C2SGetCastleTransportationBuildingsVO());
    }
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.onMainCastleBuildingsUpdated = function (__s32param0) {
    this.selectCastle(this.selectedCastleIndex == -1 ? 0 : this.selectedCastleIndex);
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.onCurrenciesUpdated = function (__s34param0) {
    this.fillCosts();
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.onValueChanged = function () {
    this.dialogDisp.mc_items.mc_itemList.y = -this._buildingList.currentValue;
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.fillCosts = function () {
    this.dialogDisp.mc_costs.mc_discount.visible = this.presetVOs[this.selectedCastleIndex].preBuildCastleVO.shownDiscount > 0;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.mc_discount.txt_discount, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [this.presetVOs[this.selectedCastleIndex].preBuildCastleVO.shownDiscount]));
    this.dialogDisp.btn_buy.visible = true;
    this.dialogDisp.btn_buy2.visible = false;
    this.dialogDisp.mc_costs.mc_buySpecialCurrency.visible = false;
    this.dialogDisp.mc_costs.mc_buySpecialCurrency.mc_discount.visible = false;
    var __s38local0 = this.presetVOs[this.selectedCastleIndex].costs;
    if (__s38local0.length <= 1) {
      this.dialogDisp.mc_costs.costs_1.visible = true;
      this.dialogDisp.mc_costs.costs_2.visible = false;
      this.dialogDisp.mc_costs.costs_3.visible = false;
      this.dialogDisp.mc_costs.costs_4.visible = false;
      if (__s38local0.length == 0 || __s38local0.list[0].amount == 0) {
        this.dialogDisp.mc_costs.costs_1.txt_value.textColor = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
        this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.costs_1.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("forFree")));
        this.textFieldManager.registerTextField(this.dialogDisp.btn_buy2.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("build")));
        this.dialogDisp.btn_buy.visible = false;
        this.dialogDisp.btn_buy2.visible = true;
        __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_costs.costs_1.mc_icon);
      } else {
        var __s38local1 = __s38local0.list[0];
        var __s38local2 = new __dep_export_CollectablesCosts.CollectablesCosts(__s38local0);
        var __s38local3 = __dep_export_CostHelper.CostHelper.canAfford(__s38local2);
        this.fillStartResourceItem(this.dialogDisp.mc_costs.costs_1, __s38local1, new __s0local0(30, 30), __s38local3 ? __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR);
        this.textFieldManager.registerTextField(this.dialogDisp.btn_buy2.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_preBuiltCastle_buyCastle_Button")));
        this.dialogDisp.btn_buy.visible = __s38local1.itemType == __dep_export_CollectableEnum.CollectableEnum.C2;
        this.dialogDisp.btn_buy2.visible = __s38local1.itemType != __dep_export_CollectableEnum.CollectableEnum.C2;
        this.dialogDisp.mc_costs.mc_buySpecialCurrency.visible = !!this.currencyBuyPackgeVO;
        if (__s38local1.itemType == __dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY) {
          this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.costs_1.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [__s38local1.amount, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__s38local1.id)]));
        }
        if (this.currencyBuyPackgeVO && __dep_export_EventPackagePrimeSaleEventVO.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this.currencyBuyPackgeVO.packageID) > 0) {
          this.dialogDisp.mc_costs.mc_buySpecialCurrency.mc_discount.visible = true;
          var __s38local4 = __dep_export_EventPackagePrimeSaleEventVO.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this.currencyBuyPackgeVO.packageID);
          this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.mc_buySpecialCurrency.mc_discount.txt_discount, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [__s38local4]));
        }
      }
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.btn_buy2.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_preBuiltCastle_buyCastle_Button")));
      this.dialogDisp.btn_buy.visible = false;
      this.dialogDisp.btn_buy2.visible = true;
      this.dialogDisp.mc_costs.costs_1.visible = false;
      this.dialogDisp.mc_costs.costs_2.visible = __s38local0.length == 2;
      this.dialogDisp.mc_costs.costs_3.visible = __s38local0.length == 3;
      this.dialogDisp.mc_costs.costs_4.visible = __s38local0.length >= 4;
      var __s38local5 = __s38local0.length == 2 ? this.dialogDisp.mc_costs.costs_2 : __s38local0.length == 3 ? this.dialogDisp.mc_costs.costs_3 : this.dialogDisp.mc_costs.costs_4;
      for (var __s38local6 = 0; __s38local6 < 4; __s38local6++) {
        this.fillStartResourceItem(__s38local5["cost" + __s38local6], __s38local0.list.length > __s38local6 ? __s38local0.list[__s38local6] : null, new __s0local0(30, 30), null, true);
      }
    }
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.fillDescription = function () {
    this.dialogDisp.mc_items.mc_itemList.mc_header.mc_description.visible = true;
    var __s48local0 = "dialog_prebuiltCastle" + this.presetVOs[this.selectedCastleIndex].preBuildCastleVO.id + "_info";
    this.textFieldManager.registerTextField(this.dialogDisp.mc_items.mc_itemList.mc_header.mc_description.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s48local0));
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.fillStartCurrencies = function () {
    this.dialogDisp.mc_items.mc_itemList.mc_header.mc_description.visible = false;
    if (this.presetVOs[this.selectedCastleIndex].startPlayerLegendLevel > 0) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_items.mc_itemList.mc_header.txt_title1, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_castleTransport_startingLevel", [this.presetVOs[this.selectedCastleIndex].startPlayerLegendLevel])));
      this.dialogDisp.mc_items.mc_itemList.mc_header.icon_level.gotoAndStop(2);
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_items.mc_itemList.mc_header.txt_title1, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("castleLevel", [this.presetVOs[this.selectedCastleIndex].startPlayerLevel])));
      this.dialogDisp.mc_items.mc_itemList.mc_header.icon_level.gotoAndStop(1);
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title2, new __dep_exact_92d05af59ee2ff30.TextVO(this.presetVOs[this.selectedCastleIndex].getNameText()));
    var __s50local0 = [];
    var __s50local1 = [];
    for (var __s50local2 = 0, __s50local3 = this.presetVOs[this.selectedCastleIndex].startResourceVO.startResources.list; __s50local2 < __s50local3.length; __s50local2++) {
      var __s50local4 = __s50local3[__s50local2];
      if (__s50local4 !== undefined) {
        if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s50local4, "ACollectableItemResourceVO")) {
          __s50local0.push(__s50local4);
        } else {
          __s50local1.push(__s50local4);
        }
      }
    }
    var __s50local5 = 0;
    for (__s50local5 = 0; __s50local5 < 4; __s50local5++) {
      this.fillStartResourceItem(this.dialogDisp.mc_items.mc_itemList.mc_header["mc_currency" + __s50local5], __s50local1.length > __s50local5 ? __s50local1[__s50local5] : null, new __s0local0(22, 22));
    }
    for (__s50local5 = 0; __s50local5 < 8; __s50local5++) {
      this.fillStartResourceItem(this.dialogDisp.mc_items.mc_itemList.mc_header["mc_resource" + __s50local5], __s50local0.length > __s50local5 ? __s50local0[__s50local5] : null, new __s0local0(22, 22));
    }
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.fillStartResourceItem = function (__s63param0, __s63param1, __s63param2, __s63param3 = null, __s63param4 = false) {
    if (__s63param0) {
      if (__s63param3) {
        __s63param0.txt_value.textColor = __s63param3;
      }
      if (__s63param1) {
        __s63param0.visible = true;
        var __s63local0 = undefined;
        if (__s63param4) {
          var __s63local1 = __dep_export_CastleModel.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(__dep_exact_26a421b704832cff_2.WorldClassic.KINGDOM_ID);
          (__s63local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_COST_LIST, __s63param2)).costTextfield.useOtherResourceStorage = __s63local1.getResourcesAsCollectableList();
        } else {
          __s63local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_RESOURCE_LIST, __s63param2);
        }
        __s63local0.tooltip.useAmount = false;
        __s63local0.textfield.useAutoFitToBounds = false;
        var __s63local2 = new __dep_export_CollectableRenderClips.CollectableRenderClips();
        __s63local2.addIconMc(__s63param0.mc_icon);
        __s63local2.addTextfield(__s63param0.txt_value);
        __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, __s63local2, __s63param1, __s63local0);
      } else {
        __s63param0.visible = false;
        __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s63param0.mc_icon);
      }
    }
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.getPresetsAsVecObj = function () {
    var __s71local0 = [];
    var __s71local1 = 0;
    if (this.presetVOs != null) {
      for (var __s71local2 = 0, __s71local3 = this.presetVOs; __s71local2 < __s71local3.length; __s71local2++) {
        var __s71local4 = __s71local3[__s71local2];
        if (__s71local4 !== undefined) {
          __s71local0.push([__s71local4, __s71local1, this.bindFunction(this.selectCastle), this.dialogProperties.type]);
          __s71local1++;
        }
      }
    }
    return __s71local0;
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.getBuildingData = function () {
    var __s77local0 = [];
    for (var __s77local1 = 0; __s77local1 < this.BUILDING_CATEGORIES.length; __s77local1++) {
      __s77local0.push([]);
    }
    for (var __s77local2 = 0; __s77local2 < this.preBuildCastle.buildings.length; __s77local2++) {
      var __s77local3 = __dep_exact_f855840627e6e145.int(this.BUILDING_CATEGORIES.indexOf(this.preBuildCastle.buildings[__s77local2].buildingVO.buildingGroundType));
      if (__s77local3 < 0) {
        __s77local3 = __dep_exact_f855840627e6e145.int(this.BUILDING_CATEGORIES.indexOf(__dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_DEFENCE));
      }
      __s77local0[__s77local3].push(this.preBuildCastle.buildings[__s77local2]);
    }
    return __s77local0;
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.hideLoaded = function (__s84param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s84param0);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    this.controller.removeEventListener(__dep_export_CastlePrebuiltCastleDataEvent.CastlePrebuiltCastleDataEvent.MAIN_CASTLE_BUILDINGS_UPDATED, this.bindFunction(this.onMainCastleBuildingsUpdated));
    this.controller.removeEventListener(__dep_export_CastleEilandEvent.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onIslandReset));
    this._buildingList.hide();
    this._buildingList.onScrollSignal.remove(this.bindFunction(this.onValueChanged));
    this.selectedCastleIndex = -1;
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.selectCastle = function (__s86param0) {
    this.selectedCastleIndex = __s86param0;
    for (var __s86local0 = 0, __s86local1 = this._preBuildList.items; __s86local0 < __s86local1.length; __s86local0++) {
      var __s86local2 = __s86local1[__s86local0];
      if (__s86local2 !== undefined) {
        if (__s86param0 == __s86local2.index) {
          __s86local2.select();
        } else {
          __s86local2.unSelect();
        }
      }
    }
    this._buildingListBuilder.fillWithData(this.getBuildingData());
    this._buildingList.init(0, this.dialogDisp.mc_items.mc_itemList.height - this.dialogDisp.mc_items.mc_slider.height, 60, 60);
    this._buildingList.show();
    this._buildingList.scrollToPercent(0);
    this.fillStartCurrencies();
    this.fillCosts();
    if (this.dialogProperties.type == __dep_export_CastleSpecialServerPreBuildCastleSelectionDialogProperties.CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_STORMISLANDS) {
      this.fillDescription();
    }
  };
  Object.defineProperty(CastleSpecialServerPreBuildCastleSelectionDialog.prototype, "preBuildCastle", {
    get: function () {
      return this.presetVOs[this.selectedCastleIndex].preBuildCastleVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialServerPreBuildCastleSelectionDialog.prototype, "presetVOs", {
    get: function () {
      if (this.dialogProperties.type == __dep_export_CastleSpecialServerPreBuildCastleSelectionDialogProperties.CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_ABG) {
        return __dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.presetVOs;
      } else if (this.dialogProperties.type == __dep_export_CastleSpecialServerPreBuildCastleSelectionDialogProperties.CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_TEMPSERVER) {
        return __dep_export_TempServerHelper.TempServerHelper.tmpServerEvent.settingVO.presetVOs;
      } else if (this.dialogProperties.type == __dep_export_CastleSpecialServerPreBuildCastleSelectionDialogProperties.CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_STORMISLANDS) {
        return __dep_export_CastleModel.CastleModel.kingdomData.stormIslandsPreBuildCastles;
      } else {
        return undefined;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.onRefreshSpecialEvent = function (__s102param0) {
    if (this.dialogProperties.isEvent() && !this.eventVO) {
      this.hide();
    }
  };
  CastleSpecialServerPreBuildCastleSelectionDialog.prototype.onIslandReset = function (__s105param0) {
    if (this.dialogProperties.type == __dep_export_CastleSpecialServerPreBuildCastleSelectionDialogProperties.CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_STORMISLANDS) {
      this.hide();
    }
  };
  Object.defineProperty(CastleSpecialServerPreBuildCastleSelectionDialog.prototype, "eventVO", {
    get: function () {
      if (this.dialogProperties.globalServerID == __dep_exact_26a421b704832cff.GlobalServerConst.ALLIANCE_BATTLE_GROUND_SERVER) {
        return __dep_export_ABGHelper.ABGHelper.abgEvent;
      } else if (this.dialogProperties.globalServerID == __dep_exact_26a421b704832cff.GlobalServerConst.TEMP_SERVER) {
        return __dep_export_TempServerHelper.TempServerHelper.tmpServerEvent;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialServerPreBuildCastleSelectionDialog.prototype, "currencyBuyPackgeVO", {
    get: function () {
      return this.presetVOs[this.selectedCastleIndex].currencyBuyPackage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialServerPreBuildCastleSelectionDialog.prototype, "isCastleTransportationOnly", {
    get: function () {
      return this.presetVOs.length == 1 && this.presetVOs[0].preBuildCastleVO.isMainCastleCopy;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialServerPreBuildCastleSelectionDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpecialServerPreBuildCastleSelectionDialog.NAME = "CastleSpecialServerPreBuildCastleSelection_X";
  return CastleSpecialServerPreBuildCastleSelectionDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleSpecialServerPreBuildCastleSelectionDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleTempServerConfirmationDialog = require("gge-module:export_CastleTempServerConfirmationDialog");
var __dep_export_CastleTempServerCostConfirmationDialog = require("gge-module:export_CastleTempServerCostConfirmationDialog");
var __dep_export_CastleSpecialServerPreBuildCastleSelectionDialogPreBuiltItem = require("gge-module:export_CastleSpecialServerPreBuildCastleSelectionDialogPreBuiltItem");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_CastleSpecialServerPreBuildCastleSelectionDialogProperties = require("gge-module:export_CastleSpecialServerPreBuildCastleSelectionDialogProperties");
var __dep_export_TempServerHelper = require("gge-module:export_TempServerHelper");
var __dep_export_ModernPackageShopBuyDialog = require("gge-module:export_ModernPackageShopBuyDialog");
var __dep_export_CastleGenericBuyDialogProperties = require("gge-module:export_CastleGenericBuyDialogProperties");
var __dep_export_EventPackagePrimeSaleEventVO = require("gge-module:export_EventPackagePrimeSaleEventVO");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_CastlePrebuiltCastleDataEvent = require("gge-module:export_CastlePrebuiltCastleDataEvent");
var __dep_export_C2SGetCastleTransportationBuildingsVO = require("gge-module:export_C2SGetCastleTransportationBuildingsVO");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CollectablesCosts = require("gge-module:export_CollectablesCosts");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_DarkOkDialog = require("gge-module:export_DarkOkDialog");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleEilandEvent = require("gge-module:export_CastleEilandEvent");
var __dep_export_C2STempServerSelectCastleVO = require("gge-module:export_C2STempServerSelectCastleVO");
var __dep_export_C2SSelectKingdomCastleVO = require("gge-module:export_C2SSelectKingdomCastleVO");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
