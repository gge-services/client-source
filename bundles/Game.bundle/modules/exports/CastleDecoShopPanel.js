Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_C2SShowInventoryVO = require("gge-module:export_C2SShowInventoryVO");
var __dep_export_C2SGetFactionBalance = require("gge-module:export_C2SGetFactionBalance");
var __dep_export_CastleFactionBalanceEvent = require("gge-module:export_CastleFactionBalanceEvent");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleQuestDataEvent = require("gge-module:export_CastleQuestDataEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleXPChangedEvent = require("gge-module:export_CastleXPChangedEvent");
var __dep_export_CastleDecoShopPanelEvent = require("gge-module:export_CastleDecoShopPanelEvent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_IsoRenderStrategyEnum = require("gge-module:export_IsoRenderStrategyEnum");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_DecoStorageEvent = require("gge-module:export_DecoStorageEvent");
var __dep_export_PrivateOfferDataEvent = require("gge-module:export_PrivateOfferDataEvent");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_DecoBuildingToolTipManager = require("gge-module:export_DecoBuildingToolTipManager");
var __dep_export_CastleBuildingInfoDialogProperties = require("gge-module:export_CastleBuildingInfoDialogProperties");
var __dep_export_CastleConstructionSellDialogProperties = require("gge-module:export_CastleConstructionSellDialogProperties");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_FlagHelper = require("gge-module:export_FlagHelper");
var __dep_export_CastlePanel = require("gge-module:export_CastlePanel");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CastleDecoShopPanel() {
    var __s3local0 = this;
    __s3local0.maxPage = 0;
    __s3local0.currentPage = 0;
    __s3local0._prevCategory = __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_CIVIL;
    __s3local0._isActive = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, new Library.CastleInterfaceElements.DecoShopPanel_Dec24()) || this)._tfNothingBuy = __s3local0.textFieldManager.registerTextField(__s3local0.disp.mc_nothingBuyable.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("panel_deco_nothingToBuy"), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDecoShopPanel, __s1param0);
  CastleDecoShopPanel.prototype.init = function () {
    var __s5local0;
    __s1param0.prototype.init.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.decoShopPanel.btn_storage, -1, __dep_export_ClickFeedbackButtonBackground.ClickFeedbackButtonBackground);
    this.decoShopPanel.mc_buildingTooltip.visible = false;
    this.decoShopPanel.mc_buildingTooltip.mouseChildren = false;
    this.decoShopPanel.mc_buildingTooltip.mouseEnabled = false;
    this.decoShopPanel.btn_civil.toolTipText = "panel_deco_civil";
    this.decoShopPanel.btn_deco.toolTipText = "panel_deco_deco";
    this.decoShopPanel.btn_military.toolTipText = "panel_deco_military";
    this.decoShopPanel.btn_defence.toolTipText = "panel_deco_defence";
    this.decoShopPanel.btn_storage.toolTipText = "panel_deco_storage";
    this.decoShopPanel.btn_event.toolTipText = "panel_deco_military";
    this.decoShopPanel.btn_event.visible = false;
    this.decoShopPanel.bitmap_2.mouseEnabled = false;
    this._decoShopPanelItemComponents = [];
    for (var __s5local1 = 0; __s5local1 < CastleDecoShopPanel.ITEMS_PER_PAGE; __s5local1++) {
      (__s5local0 = new __dep_export_DecoShopPanelItemComponent.DecoShopPanelItemComponent(this.decoShopPanel.getChildByName("i" + __s5local1))).addOnMouseDownItem(this.bindFunction(this.onMouseDownItem));
      __s5local0.addOnClickUpgrade(this.bindFunction(this.onClickUpgrade));
      __s5local0.addOnClickItem(this.bindFunction(this.onShopItemClick));
      __s5local0.addOnClickInfo(this.bindFunction(this.onClickInfo));
      __s5local0.addOnClickSell(this.bindFunction(this.onClickSell));
      __s5local0.addOnClickJumpTo(this.bindFunction(this.onClickJumpTo));
      __s5local0.addOnMouseOverItem(this.bindFunction(this.onMouseOverItem));
      __s5local0.addOnMouseOverSell(this.bindFunction(this.onMouseOverSell));
      __s5local0.addOnMouseOutItem(this.bindFunction(this.onMouseOutItem));
      __s5local0.addOnMouseOutSell(this.bindFunction(this.onMouseOutSell));
      __s5local0.addOnLoaded(this.bindFunction(this.updateCache));
      this._decoShopPanelItemComponents.push(__s5local0);
    }
    this._toggleUpgradeViewBtn = new __dep_export_CastleToggleUpgradeViewButton.CastleToggleUpgradeViewButton(this.decoShopPanel.btn_switchUpgradeView);
    this._toggleWallViewBtn = new __dep_export_CastleToggleWallViewButton.CastleToggleWallViewButton(this.decoShopPanel.btn_switchWallVisibility);
    this._tfStorageCounter = this.textFieldManager.registerTextField(this.decoShopPanel.storage_counter.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    this._tfStorageCounter_civil = this.textFieldManager.registerTextField(this.decoShopPanel.storage_counter_civil.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    this._tfStorageCounter_military = this.textFieldManager.registerTextField(this.decoShopPanel.storage_counter_military.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    this._tfStorageCounter_deco = this.textFieldManager.registerTextField(this.decoShopPanel.storage_counter_deco.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    this._tfNothingBuy = this.textFieldManager.registerTextField(this.decoShopPanel.mc_nothingBuyable.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("panel_deco_nothingToBuy"), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    this._dragPreviewDispCreator = new __dep_export_DispCreatorComponent.DispCreatorComponent();
    this._dragPreviewDispCreator.init(new __s0local0());
    if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
      this.decoShopPanel.scaleX = this.decoShopPanel.scaleY = 0.8;
    }
  };
  CastleDecoShopPanel.prototype.show = function () {
    this._isActive = true;
    this.changeCategory(this.layoutManager.isInTreasureCamp ? __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_SEASONEVENT : __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_CIVIL);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEndSpecialEvent));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onRefreshShopItems));
    this.controller.addEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onChangeUserXP));
    __dep_export_CastleModel.CastleModel.questData.addEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onQuestStart));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onRefreshShopItems));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshShopItems));
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_CREATED, this.bindFunction(this.onRefreshShopItems));
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onRefreshShopItems));
    this.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.SHOW_DIALOG, this.bindFunction(this.onDialogOpened));
    this.controller.addEventListener(__dep_export_DecoStorageEvent.DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onRefreshShopItems));
    this.controller.addEventListener(__dep_export_DecoStorageEvent.DecoStorageEvent.ON_NEW_INDICATOR_UPDATED, this.bindFunction(this.onBuildingMarkUpdated));
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeResources));
    this.controller.addEventListener(__dep_export_IsoEvent.IsoEvent.ON_DRAG_OF_NEW_OBJECT_DONE, this.bindFunction(this.onNewBuildingPlaced));
    this.controller.addEventListener(__dep_export_IsoEvent.IsoEvent.ON_DRAG_OF_NEW_OBJECT_CANCELED, this.bindFunction(this.onNewBuildingPlaced));
    this.controller.addEventListener(__dep_export_IsoEvent.IsoEvent.ON_OBJECT_CHANGED, this.bindFunction(this.onRefreshShopItems));
    this.controller.addEventListener(__dep_export_IsoEvent.IsoEvent.ON_OBJECT_ADDED, this.bindFunction(this.onRefreshShopItems));
    this.controller.addEventListener(__dep_export_IsoEvent.IsoEvent.ON_OBJECT_REMOVED, this.bindFunction(this.onRefreshShopItems));
    this.controller.addEventListener(__dep_export_IsoEvent.IsoEvent.ON_DRAG_STARTED_STORAGE_DECO, this.bindFunction(this.onStorageDecoDragStarted));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendEmptyCommandVO(new __dep_export_C2SShowInventoryVO.C2SShowInventoryVO());
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
      __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleFactionBalanceEvent.CastleFactionBalanceEvent.FACTION_BALACE_UPDATED, this.bindFunction(this.onRefreshShopItems));
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendEmptyCommandVO(new __dep_export_C2SGetFactionBalance.C2SGetFactionBalance());
    }
    this.updateBuildingGroundViewButton();
    this._tfStorageCounter = this.textFieldManager.registerTextField(this.decoShopPanel.storage_counter.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    this._toggleUpgradeViewBtn.show();
    this._toggleWallViewBtn.show();
    this.fillItemsByGroup(this.currentCategory, this.currentPage, true);
    this.onBuildingMarkUpdated();
    __s1param0.prototype.show.call(this);
    this.allowCaching = true;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.decoShopPanel.btn_storage, __dep_export_CastleModel.CastleModel.userData.level > 2);
  };
  CastleDecoShopPanel.prototype.onNewBuildingPlaced = function (__s13param0) {
    this.removeDragItemFromShop();
    if (this.currentCategory == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_STORAGE) {
      this.changeCategory(this._prevCategory);
    }
  };
  CastleDecoShopPanel.prototype.onDialogOpened = function (__s16param0) {
    this.removeDragItemFromShop();
  };
  CastleDecoShopPanel.prototype.getPageWithFirstNewBuilding = function (__s18param0 = "", __s18param1 = null) {
    var __s18local0 = 0;
    __s18param1 = __s18param1 ?? __dep_export_CastleDecoShopItemArrayHelper.CastleDecoShopItemArrayHelper.getBuildingsByCategory(__s18param0);
    for (var __s18local1 = 0; __s18local1 < __s18param1.length; __s18local1++) {
      __s18local0 = Math.floor(__s18local1 / CastleDecoShopPanel.ITEMS_PER_PAGE);
      if (__dep_export_CastleModel.CastleModel.decoStorage.getCurrentStorage().isNew(__s18param1[__s18local1])) {
        return __s18local0;
      }
    }
    return __s18local0;
  };
  CastleDecoShopPanel.prototype.getPageWithHighestLevelItemAvailable = function (__s23param0 = "", __s23param1 = null) {
    var __s23local0 = 0;
    __s23param1 = __s23param1 ?? __dep_export_CastleDecoShopItemArrayHelper.CastleDecoShopItemArrayHelper.getBuildingsByCategory(__s23param0);
    for (var __s23local1 = 0; __s23local1 < __s23param1.length; __s23local1++) {
      if (!__s23param1[__s23local1].isAvailableByLevelAndEffect) {
        return __s23local0;
      }
      __s23local0 = Math.floor(__s23local1 / CastleDecoShopPanel.ITEMS_PER_PAGE);
    }
    return __s23local0;
  };
  CastleDecoShopPanel.prototype.sortByMorality = function (__s28param0, __s28param1) {
    if (__s28param0 == null || __s28param1 == null) {
      return 0;
    } else if (__s28param0.decoPoints < __s28param1.decoPoints) {
      return -1;
    } else if (__s28param0.decoPoints > __s28param1.decoPoints) {
      return 1;
    } else {
      return 0;
    }
  };
  CastleDecoShopPanel.prototype.autoScrollToPage = function (__s34param0, __s34param1, __s34param2) {
    var __s34local0 = __dep_exact_f855840627e6e145.int(this.getPageWithHighestLevelItemAvailable(__s34param0, __s34param2));
    if (__s34local0 >= 0) {
      return __s34local0;
    } else {
      return __s34param1;
    }
  };
  CastleDecoShopPanel.prototype.doAutoScrolling = function (__s38param0) {
    return [__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_DECO, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_STORAGE].indexOf(__s38param0) != -1;
  };
  CastleDecoShopPanel.prototype.initArrows = function (__s40param0) {
    this.maxPage = __dep_exact_f855840627e6e145.int((__s40param0 - 1) / CastleDecoShopPanel.ITEMS_PER_PAGE);
    this.decoShopPanel.btn_rightArrow.visible = this.maxPage > 0 && this.currentPage < this.maxPage;
    this.decoShopPanel.btn_rightArrow.enableButton = __dep_export_CastleModel.CastleModel.userData.hasLevelFor(__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_USE_ARROW_DECOSHOP);
    this.decoShopPanel.btn_leftArrow.visible = this.maxPage > 0 && this.currentPage > 0;
  };
  CastleDecoShopPanel.prototype.updatePrevCategory = function () {
    if (this.currentCategory != __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_STORAGE) {
      this._prevCategory = this.currentCategory;
    }
  };
  CastleDecoShopPanel.prototype.fillItemsByGroup = function (__s45param0, __s45param1, __s45param2) {
    this._allowCaching = false;
    var __s45local0 = __dep_export_CastleDecoShopItemArrayHelper.CastleDecoShopItemArrayHelper.getBuildingsByCategory(__s45param0);
    if (__s45param0 == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_STORAGE) {
      __s45local0 = this.sortForStorage(__s45local0);
    }
    if (this.doAutoScrolling(__s45param0) && !__s45param2) {
      __s45param1 = __dep_exact_f855840627e6e145.int(this.autoScrollToPage(__s45param0, __s45param1, __s45local0));
    }
    this.updatePrevCategory();
    this.currentCategory = __s45param0;
    this.currentPage = __s45param1;
    this.initArrows(__s45local0.length);
    var __s45local1;
    var __s45local2 = (__s45param1 = __dep_exact_f855840627e6e145.int(Math.min(__s45param1, this.maxPage))) * CastleDecoShopPanel.ITEMS_PER_PAGE;
    var __s45local3 = 0;
    for (var __s45local4 = 0; __s45local4 < CastleDecoShopPanel.ITEMS_PER_PAGE; __s45local4++) {
      var __s45local5 = this._decoShopPanelItemComponents[__s45local4];
      if (__s45local2 < __s45local0.length) {
        var __s45local6 = __dep_export_CastleModel.CastleModel.decoStorage.getCurrentStorage().getRelevantWodIdListForBuildMenu(__s45local0[__s45local2].wodId);
        var __s45local7 = __s45local6.length > 0 ? __s45local6[0] : __s45local0[__s45local2].wodId;
        __s45local1 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s45local7, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING);
        __s45local5.fillItem(__s45local1, this.currentCategory);
        __s45local3++;
      } else {
        __s45local5.disp.visible = false;
      }
      __s45local2++;
    }
    this.decoShopPanel.mc_nothingBuyable.visible = false;
    this.decoShopPanel.mc_nothingBuyable.mouseEnabled = false;
    this.decoShopPanel.mc_decoStorage.visible = false;
    if (this.currentCategory == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_STORAGE) {
      this.decoShopPanel.mc_decoStorage.visible = true;
    } else if (__s45local3 == 0) {
      this.decoShopPanel.mc_nothingBuyable.visible = true;
    }
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isMobile) {
      this.allowCaching = true;
    } else {
      this._allowCaching = true;
    }
    return __s45param1;
  };
  CastleDecoShopPanel.prototype.sortForStorage = function (__s57param0) {
    var __s57local0 = [];
    var __s57local1 = [];
    var __s57local2 = [];
    var __s57local3 = [];
    var __s57local4 = [];
    var __s57local5 = [];
    if (__s57param0 != null) {
      for (var __s57local6 = 0, __s57local7 = __s57param0; __s57local6 < __s57local7.length; __s57local6++) {
        var __s57local8 = __s57local7[__s57local6];
        if (__s57local8 !== undefined) {
          if (__s57local8.buildingGroundType == __dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_DECO) {
            if (__dep_export_CastleModel.CastleModel.decoStorage.getCurrentStorage().isNew(__s57local8)) {
              __s57local3.push(__s57local8);
            } else {
              __s57local0.push(__s57local8);
            }
          } else if (__s57local8.buildingGroundType == __dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_MILITARY) {
            if (__dep_export_CastleModel.CastleModel.decoStorage.getCurrentStorage().isNew(__s57local8)) {
              __s57local5.push(__s57local8);
            } else {
              __s57local2.push(__s57local8);
            }
          } else if (__s57local8.buildingGroundType == __dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_CIVIL) {
            if (__dep_export_CastleModel.CastleModel.decoStorage.getCurrentStorage().isNew(__s57local8)) {
              __s57local4.push(__s57local8);
            } else {
              __s57local1.push(__s57local8);
            }
          }
        }
      }
    }
    __s57local3.sort(this.bindFunction(this.sortByMorality));
    __s57local0.sort(this.bindFunction(this.sortByMorality));
    __s57local5.sort(__dep_export_CastleDecoShopItemArrayHelper.CastleDecoShopItemArrayHelper.defaultSortOrderBuilding);
    __s57local2.sort(__dep_export_CastleDecoShopItemArrayHelper.CastleDecoShopItemArrayHelper.defaultSortOrderBuilding);
    __s57local4.sort(__dep_export_CastleDecoShopItemArrayHelper.CastleDecoShopItemArrayHelper.defaultSortOrderBuilding);
    __s57local1.sort(__dep_export_CastleDecoShopItemArrayHelper.CastleDecoShopItemArrayHelper.defaultSortOrderBuilding);
    return __s57local0.concat(__s57local3, __s57local4, __s57local5, __s57local1, __s57local2);
  };
  CastleDecoShopPanel.prototype.onEndSpecialEvent = function (__s72param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s72param0.specialEventVO, "PrimeSaleEventVO")) {
      this.removeDragItem();
      this.fillItemsByGroup(this.currentCategory, this.currentPage, true);
    }
  };
  CastleDecoShopPanel.prototype.onChangeUserXP = function (__s75param0) {
    this.onRefreshShopItems();
    this.updateBuildingGroundViewButton();
  };
  CastleDecoShopPanel.prototype.setBuildingGroundButtonToolTip = function () {
    if (this.decoShopPanel.btn_switchBuildingGroundView.enabled) {
      if (this.isoRenderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW)) {
        this.decoShopPanel.btn_switchBuildingGroundView.toolTipText = "constructionMode_showBuildings";
      } else {
        this.decoShopPanel.btn_switchBuildingGroundView.toolTipText = "constructionMode_hideBuildings";
      }
    } else {
      this.decoShopPanel.btn_switchBuildingGroundView.toolTipText = "panel_shop_needQuestProgress";
    }
  };
  CastleDecoShopPanel.prototype.onQuestStart = function (__s83param0) {
    this.onRefreshShopItems(__s83param0);
  };
  CastleDecoShopPanel.prototype.onMouseDownItem = function (__s85param0) {
    if (!__dep_export_ClientConstCastle.ClientConstCastle.USE_PICK_AND_DROP) {
      this.addDragItemFromShop(__s85param0);
    }
  };
  CastleDecoShopPanel.prototype.onClick = function (__s88param0) {
    __s1param0.prototype.onClick.call(this, __s88param0);
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s88param0)) {
      __dep_export_DecoBuildingToolTipManager.DecoBuildingToolTipManager.hideToolTip();
    }
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s88param0.target)) {
      switch (__s88param0.target) {
        case this.decoShopPanel.btn_civil:
        case this.decoShopPanel.btn_deco:
        case this.decoShopPanel.btn_military:
        case this.decoShopPanel.btn_defence:
        case this.decoShopPanel.btn_storage:
        case this.decoShopPanel.btn_event:
          __dep_export_Iso.Iso.renderer.mouse.cancelDraggedTarget();
      }
      switch (__s88param0.target) {
        case this.decoShopPanel.btn_leftArrow:
        case this.decoShopPanel.btn_rightArrow:
          if (__dep_export_CastleModel.CastleModel.userData.hasLevelFor(__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_USE_ARROW_DECOSHOP)) {
            this.onClickArrow(__s88param0);
          }
          this.revertHighLightFilters();
          this.removeDragItemFromShop();
          break;
        case this.decoShopPanel.btn_close:
          this.revertHighLightFilters();
          this.removeDragItemFromShop();
          __dep_export_Iso.Iso.renderer.mouse.cancelDraggedTarget();
          if (__dep_export_Iso.Iso.controller.viewUpdater) {
            __dep_export_Iso.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(false);
          }
          break;
        case this.decoShopPanel.btn_switchBuildingGroundView:
          this.isoRenderer.strategies.toggle(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW);
          this.updateBuildingGroundViewButton();
          this.revertHighLightFilters();
          break;
        case this.decoShopPanel.btn_civil:
          this.changeCategory(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_CIVIL);
          break;
        case this.decoShopPanel.btn_deco:
          this.changeCategory(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_DECO);
          break;
        case this.decoShopPanel.btn_military:
          this.changeCategory(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MILITARY);
          break;
        case this.decoShopPanel.btn_defence:
          this.changeCategory(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_DEFENCE);
          break;
        case this.decoShopPanel.btn_storage:
          __dep_export_CastlePanel.CastlePanel.dialogHandler.registerDialogs(__dep_export_DecorationStorageDialog.DecorationStorageDialog);
          break;
        case this.decoShopPanel.btn_event:
          this.changeCategory(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_SEASONEVENT);
      }
    }
  };
  CastleDecoShopPanel.prototype.updateBuildingGroundViewButton = function () {
    this.decoShopPanel.btn_switchBuildingGroundView.enableButton = __dep_export_CastleModel.CastleModel.tutorialData.isTutorialFinished();
    this.decoShopPanel.btn_switchBuildingGroundView.selectButton = this.isoRenderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW);
    this.setBuildingGroundButtonToolTip();
  };
  CastleDecoShopPanel.prototype.onClickUpgrade = function (__s98param0) {
    this.onUpgrade(__s98param0.disp);
    this.revertHighLightFilters();
  };
  CastleDecoShopPanel.prototype.onClickInfo = function (__s100param0) {
    var __s100local0 = __s100param0.disp.shownShopVO ? __s100param0.disp.shownShopVO : __s100param0.disp.shopVO;
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleBuildingInfoDialog.CastleBuildingInfoDialog, new __dep_export_CastleBuildingInfoDialogProperties.CastleBuildingInfoDialogProperties(__s100local0));
    this.revertHighLightFilters();
  };
  CastleDecoShopPanel.prototype.onClickSell = function (__s102param0) {
    this.removeDragItem();
    var __s102local0 = __s102param0.disp.shopVO;
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleConstructionSellDialog.CastleConstructionSellDialog, new __dep_export_CastleConstructionSellDialogProperties.CastleConstructionSellDialogProperties(__s102local0));
    __s102param0.disp.btn_sell.visible = false;
    this.revertHighLightFilters();
  };
  CastleDecoShopPanel.prototype.onClickJumpTo = function (__s104param0) {
    console.log("Show HoL skill");
    var __s104local0 = __s104param0.disp.shopVO;
    var __s104local1 = __dep_export_CastleModel.CastleModel.legendSkillData.getTabBySkillId(__s104local0.sceatSkillLocked);
    var __s104local2 = new __dep_export_CastleLegendSkillDialogProperties.CastleLegendSkillDialogProperties(__s104local1, __s104local0.sceatSkillLocked);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleLegendSkillDialog.CastleLegendSkillDialog, __s104local2);
  };
  CastleDecoShopPanel.prototype.onMouseUp = function (__s106param0) {
    if (!__dep_export_ClientConstCastle.ClientConstCastle.USE_PICK_AND_DROP && this._selectedShopVO) {
      this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
      this.removeDragItem();
    }
  };
  CastleDecoShopPanel.prototype.onMouseOverItem = function (__s109param0) {
    this.showShopItemTooltip(__s109param0);
    this.setSellIconVisibility(__s109param0.disp, true);
  };
  CastleDecoShopPanel.prototype.onMouseOverSell = function (__s111param0) {
    this.setSellIconVisibility(__s111param0.disp, true);
  };
  CastleDecoShopPanel.prototype.onMouseOutItem = function (__s113param0) {
    this.decoShopPanel.mc_buildingTooltip.visible = false;
    this.setSellIconVisibility(__s113param0.disp, false);
    __dep_export_DecoBuildingToolTipManager.DecoBuildingToolTipManager.hideToolTip();
  };
  CastleDecoShopPanel.prototype.onMouseOutSell = function (__s115param0) {
    this.setSellIconVisibility(__s115param0.disp, false);
  };
  CastleDecoShopPanel.prototype.setSellIconVisibility = function (__s117param0, __s117param1) {
    var __s117local0 = __s117param1 && this.currentCategory == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_STORAGE && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s117param0.shopVO, "DecoBuildingVO") && __s117param0.shopVO.sellCostC1 > 0;
    __s117param0.btn_sell.visible = __s117local0;
  };
  CastleDecoShopPanel.prototype.showShopItemTooltip = function (__s119param0) {
    if (__dep_export_ClientConstCastle.ClientConstCastle.USE_PICK_AND_DROP || !__dep_export_ClientConstCastle.ClientConstCastle.USE_PICK_AND_DROP && !this._selectedShopVO) {
      var __s119local0 = __s119param0.disp.shopVO;
      if (!__s119param0.disp.mc_contentHolder.icon_lock.visible) {
        __dep_export_DecoBuildingToolTipManager.DecoBuildingToolTipManager.showToolTip(__s119param0.disp, __s119local0);
      }
    }
  };
  CastleDecoShopPanel.prototype.onUpgrade = function (__s123param0) {
    if (__s123param0) {
      var __s123local0 = __s123param0.shopVO;
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s123local0, "CastlewallDefenceVO")) {
        __dep_export_Iso.Iso.controller.server.requestWallUpgrade(__dep_export_Iso.Iso.data);
      } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s123local0, "BasicMoatVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s123local0, "PremiumMoatVO")) {
        if (__s123local0.level == 1) {
          __dep_export_Iso.Iso.controller.server.buyMoat(__s123local0.wodId);
        } else {
          __dep_export_Iso.Iso.controller.server.requestMoatUpgrade(__dep_export_Iso.Iso.data);
        }
      }
    }
  };
  CastleDecoShopPanel.prototype.onClickArrow = function (__s130param0) {
    var __s130local0 = this.currentPage;
    if (__s130param0.target == this.decoShopPanel.btn_leftArrow) {
      this.currentPage = __dep_exact_f855840627e6e145.int(Math.max(0, this.currentPage - 1));
    } else {
      this.currentPage = __dep_exact_f855840627e6e145.int(Math.min(this.maxPage, this.currentPage + 1));
    }
    if (__s130local0 != this.currentPage) {
      this.fillItemsByGroup(this.currentCategory, this.currentPage, true);
    }
  };
  CastleDecoShopPanel.prototype.hide = function () {
    this._isActive = false;
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEndSpecialEvent));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onRefreshShopItems));
    this.controller.removeEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onChangeUserXP));
    this.controller.removeEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onRefreshShopItems));
    __dep_export_CastleModel.CastleModel.questData.removeEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onQuestStart));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onRefreshShopItems));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshShopItems));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleFactionBalanceEvent.CastleFactionBalanceEvent.FACTION_BALACE_UPDATED, this.bindFunction(this.onRefreshShopItems));
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_CREATED, this.bindFunction(this.onRefreshShopItems));
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onRefreshShopItems));
    this.controller.removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.SHOW_DIALOG, this.bindFunction(this.onDialogOpened));
    this.controller.removeEventListener(__dep_export_DecoStorageEvent.DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onRefreshShopItems));
    this.controller.removeEventListener(__dep_export_DecoStorageEvent.DecoStorageEvent.ON_NEW_INDICATOR_UPDATED, this.bindFunction(this.onBuildingMarkUpdated));
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeResources));
    this.controller.removeEventListener(__dep_export_IsoEvent.IsoEvent.ON_DRAG_OF_NEW_OBJECT_DONE, this.bindFunction(this.onNewBuildingPlaced));
    this.controller.removeEventListener(__dep_export_IsoEvent.IsoEvent.ON_DRAG_OF_NEW_OBJECT_CANCELED, this.bindFunction(this.onNewBuildingPlaced));
    this.controller.removeEventListener(__dep_export_IsoEvent.IsoEvent.ON_OBJECT_CHANGED, this.bindFunction(this.onRefreshShopItems));
    this.controller.removeEventListener(__dep_export_IsoEvent.IsoEvent.ON_OBJECT_ADDED, this.bindFunction(this.onRefreshShopItems));
    this.controller.removeEventListener(__dep_export_IsoEvent.IsoEvent.ON_OBJECT_REMOVED, this.bindFunction(this.onRefreshShopItems));
    this.controller.removeEventListener(__dep_export_IsoEvent.IsoEvent.ON_DRAG_STARTED_STORAGE_DECO, this.bindFunction(this.onStorageDecoDragStarted));
    this.removeDragItem();
    this.revertHighLightFilters();
    this.currentPage = 0;
    this._toggleUpgradeViewBtn.hide();
    this._toggleWallViewBtn.hide();
    __s1param0.prototype.hide.call(this);
  };
  CastleDecoShopPanel.prototype.onBuildingMarkUpdated = function (__s137param0 = null) {
    this.updateStorageCounter();
  };
  CastleDecoShopPanel.prototype.updateStorageCounter = function () {
    var __s139local0 = __dep_export_CastleModel.CastleModel.decoStorage.getCurrentStorage();
    var __s139local1 = __s139local0.getCappedNewAmount();
    this.decoShopPanel.storage_counter.visible = __s139local1 > 0;
    this._tfStorageCounter.textContentVO.numberValue = __s139local1;
    var __s139local2 = __dep_export_CastleDecoShopItemArrayHelper.CastleDecoShopItemArrayHelper.getBuildingsByCategory(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_CIVIL).map(function (__s141param0) {
      return __s139local0.getRelevantWodIdListForBuildMenu(__s141param0.wodId);
    }).reduce(function (__s143param0, __s143param1) {
      return __s143param0.concat(__s143param1);
    }, []).reduce(function (__s145param0, __s145param1) {
      return __s145param0 + __s139local0.getNewAmountByWodID(__s145param1);
    }, 0);
    var __s139local3 = __dep_export_CastleDecoShopItemArrayHelper.CastleDecoShopItemArrayHelper.getBuildingsByCategory(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MILITARY).map(function (__s147param0) {
      return __s139local0.getRelevantWodIdListForBuildMenu(__s147param0.wodId);
    }).reduce(function (__s149param0, __s149param1) {
      return __s149param0.concat(__s149param1);
    }, []).reduce(function (__s151param0, __s151param1) {
      return __s151param0 + __s139local0.getNewAmountByWodID(__s151param1);
    }, 0);
    var __s139local4 = __dep_export_CastleDecoShopItemArrayHelper.CastleDecoShopItemArrayHelper.getBuildingsByCategory(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_DECO).map(function (__s153param0) {
      return __s139local0.getRelevantWodIdListForBuildMenu(__s153param0.wodId);
    }).reduce(function (__s155param0, __s155param1) {
      return __s155param0.concat(__s155param1);
    }, []).reduce(function (__s157param0, __s157param1) {
      return __s157param0 + __s139local0.getNewAmountByWodID(__s157param1);
    }, 0);
    this.decoShopPanel.storage_counter.visible = __s139local1 > 0;
    this._tfStorageCounter.textContentVO.numberValue = __s139local1;
    this.decoShopPanel.storage_counter_civil.visible = __s139local2 > 0;
    this._tfStorageCounter_civil.textContentVO.numberValue = __s139local2;
    this.decoShopPanel.storage_counter_military.visible = __s139local3 > 0;
    this._tfStorageCounter_military.textContentVO.numberValue = __s139local3;
    this.decoShopPanel.storage_counter_deco.visible = __s139local4 > 0;
    this._tfStorageCounter_deco.textContentVO.numberValue = __s139local4;
  };
  CastleDecoShopPanel.prototype.onChangeResources = function (__s159param0) {
    var __s159local0 = __dep_exact_81dacdf05bd32292.castAs(__s159param0.params[0], "CastleResourcesVO");
    if (__s159local0 && __dep_export_CastleModel.CastleModel.areaData.activeArea.areaId == __s159local0.castleID) {
      this.fillItemsByGroup(this.currentCategory, this.currentPage, true);
    }
  };
  CastleDecoShopPanel.prototype.refreshShopItems = function () {
    this.onRefreshShopItems();
  };
  CastleDecoShopPanel.prototype.onRefreshShopItems = function (__s164param0) {
    if ((__s164param0 === undefined && (__s164param0 = null), __s164param0 && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s164param0, "IsoEvent") && __s164param0.params) && __dep_exact_81dacdf05bd32292.castAs(__s164param0.params[0], "AIsoMovementVO")) {
      return;
    }
    if (__dep_export_Iso.Iso.data) {
      if (!this.currentCategory) {
        this.updatePrevCategory();
        this.currentCategory = __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_CIVIL;
      }
      this.fillItemsByGroup(this.currentCategory, this.currentPage, true);
      this.onBuildingMarkUpdated();
      this.updateCache();
    }
  };
  CastleDecoShopPanel.prototype.highLightFilteredArrayIndex = function (__s169param0) {
    if (!(__s169param0 < 0) && !(__s169param0 > CastleDecoShopPanel.ITEMS_PER_PAGE)) {
      var __s169local0 = this._decoShopPanelItemComponents[__s169param0];
      if (__s169local0) {
        __s169local0.useHighlightFilter();
      }
    }
  };
  CastleDecoShopPanel.prototype.revertHighLightFilters = function () {
    for (var __s173local0 = 0; __s173local0 < CastleDecoShopPanel.ITEMS_PER_PAGE; __s173local0++) {
      this._decoShopPanelItemComponents[__s173local0].removeHighlightFilter();
    }
  };
  CastleDecoShopPanel.prototype.changeCategory = function (__s177param0, __s177param1 = 0, __s177param2 = false) {
    if (this.currentCategory != __s177param0 || this.currentPage != __s177param1) {
      this.revertHighLightFilters();
      this.removeDragItemFromShop();
      this.currentPage = 0 + __s177param1;
      this.updatePrevCategory();
      this.currentCategory = __s177param0;
      switch (this.currentCategory) {
        case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_DEFENCE:
          __dep_export_Iso.Iso.renderer.strategies.switchBy(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.TRANSPARENT_DEFENCE_VIEW, false);
          break;
        default:
          __dep_export_Iso.Iso.renderer.strategies.switchBy(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.TRANSPARENT_DEFENCE_VIEW, true);
      }
      this.initButtons();
      this.currentPage = __dep_exact_f855840627e6e145.int(this.fillItemsByGroup(this.currentCategory, this.currentPage, __s177param2));
      this.controller.dispatchEvent(new __dep_export_CastleDecoShopPanelEvent.CastleDecoShopPanelEvent(__dep_export_CastleDecoShopPanelEvent.CastleDecoShopPanelEvent.CHANGE_CATEGORY, this.currentCategory));
    }
  };
  CastleDecoShopPanel.prototype.onRollOver = function (__s181param0) {
    if (this.selectedShopItem) {
      var __s181local0 = this.selectedShopItem;
      this.isoRenderer.mouse.cancelDraggedTarget();
      this.addDragItemFromShop(__s181local0);
    } else if (this.selectedShopVO) {
      var __s181local1 = this.selectedShopVO;
      this.isoRenderer.mouse.cancelDraggedTarget();
      this.addNewDragItem(__s181local1);
    }
    if (this._allowCaching && this.dispToCache.cacheCanvas) {
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(this.dispToCache);
    }
  };
  CastleDecoShopPanel.prototype.onRollOut = function (__s186param0) {
    this.onCursorOut(__s186param0);
    this.removeDragItem();
    if (this.selectedShopVO) {
      this.isoRenderer.mouse.startDraggingOfNewBuyObject(this.selectedShopVO);
    }
  };
  CastleDecoShopPanel.prototype.initButtons = function () {
    this.decoShopPanel.btn_civil.visible = !this.layoutManager.isInTreasureCamp;
    this.decoShopPanel.btn_civil.selectButton = this.currentCategory == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_CIVIL;
    this.decoShopPanel.btn_deco.selectButton = this.currentCategory == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_DECO;
    this.decoShopPanel.btn_military.selectButton = this.currentCategory == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_MILITARY;
    this.decoShopPanel.btn_military.visible = !this.layoutManager.isInTreasureCamp;
    this.decoShopPanel.btn_defence.selectButton = this.currentCategory == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_DEFENCE;
    this.decoShopPanel.btn_defence.visible = !this.layoutManager.isInTreasureCamp;
    this.decoShopPanel.btn_event.selectButton = this.currentCategory == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_SEASONEVENT;
    this.decoShopPanel.btn_event.visible = this.layoutManager.isInTreasureCamp;
    this.decoShopPanel.btn_switchBuildingGroundView.enableButton = __dep_export_CastleModel.CastleModel.tutorialData.isTutorialFinished();
  };
  CastleDecoShopPanel.prototype.destroy = function () {
    this.hide();
    for (var __s191local0 = 0; __s191local0 < CastleDecoShopPanel.ITEMS_PER_PAGE; __s191local0++) {
      this._decoShopPanelItemComponents[__s191local0].clearListeners();
    }
    __s1param0.prototype.destroy.call(this);
  };
  CastleDecoShopPanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.y = this.disp.stage.stageHeight;
      this.disp.x = this.disp.stage.stageWidth / 2;
      if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall() && this.disp.width > this.disp.stage.stageWidth) {
        this.disp.x = this.disp.stage.stageWidth - 410;
      }
      if (this.env.hasNetworkBuddies) {
        this.disp.y -= __dep_export_ClientConstCastle.ClientConstCastle.BUDDY_PANEL_HEIGHT;
      }
    }
  };
  Object.defineProperty(CastleDecoShopPanel.prototype, "decoShopPanel", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDecoShopPanel.prototype, "isActive", {
    get: function () {
      return this._isActive;
    },
    enumerable: true,
    configurable: true
  });
  CastleDecoShopPanel.prototype.centerAndHighlightBuildingInShop = function (__s204param0) {
    var __s204local0 = false;
    if (__s204param0.shopCategory != __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_NOT_IN_SHOP) {
      var __s204local1 = __dep_export_CastleDecoShopItemArrayHelper.CastleDecoShopItemArrayHelper.getBuildingsByCategory(__s204param0.shopCategory);
      __dep_exact_9e901e8e2483a22f_3.debug("centerAndHighLightBuildingInShop");
      for (var __s204local2 = 0; __s204local2 < __s204local1.length; __s204local2++) {
        if (__s204local1[__s204local2].wodId == __s204param0.getLowestDowngradeVO().wodId && !__dep_export_CastleModel.CastleModel.areaData.activeIsoData.objects.provider.hasMaxAmountOfObjectsByType(__s204param0)) {
          this.changeCategory(__s204param0.shopCategory, __dep_exact_f855840627e6e145.int(__s204local2 / CastleDecoShopPanel.ITEMS_PER_PAGE), true);
          this.revertHighLightFilters();
          this.highLightFilteredArrayIndex(__s204local2 % CastleDecoShopPanel.ITEMS_PER_PAGE);
          __s204local0 = true;
          break;
        }
      }
    }
    return __s204local0;
  };
  CastleDecoShopPanel.prototype.getShopVOFromItem = function (__s210param0) {
    var __s210local0 = __s210param0 ? __s210param0.disp.shopVO : null;
    var __s210local1 = __dep_export_CastleModel.CastleModel.decoStorage.getCurrentStorage();
    if (__s210local1.getAmountForBuildMenu(__s210local0.wodId) > 0) {
      return __s210local1.getHighestBuildingLevel(__s210local0.wodId);
    } else {
      return __s210local0;
    }
  };
  CastleDecoShopPanel.prototype.isItemAvailableForSelection = function (__s214param0) {
    var __s214local0 = __s214param0.disp.shopVO;
    return !!__dep_export_CastleModel.CastleModel.decoStorage.getCurrentStorage().getAmountForBuildMenu(__s214local0.wodId) || __s214local0.isAvailableByLevelAndEffect && !__s214param0.disp.mc_contentHolder.icon_lock_unreachable.visible || this.currentCategory == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_STORAGE;
  };
  CastleDecoShopPanel.prototype.onShopItemClick = function (__s216param0, __s216param1) {
    if (this.selectedShopItem != __s216param0) {
      if (__s216param0 && this.isItemAvailableForSelection(__s216param0)) {
        if (__s216param1) {
          var __s216local0 = __dep_exact_81dacdf05bd32292.currentBrowserInfo.getTouchEvent(__s216param1);
          if (__s216local0 && __s216local0.isLongPressed) {
            this.onMouseOverItem(__s216param0);
            __s216param1.stopImmediatePropagation();
            return;
          }
          __dep_export_DecoBuildingToolTipManager.DecoBuildingToolTipManager.hideToolTip();
        }
        this.addDragItemFromShop(__s216param0);
        this.revertHighLightFilters();
        if (__s216param1 && __dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s216param1)) {
          this.onRollOut(__s216param1);
        }
      }
    } else {
      this.removeDragItemFromShop();
    }
  };
  CastleDecoShopPanel.prototype.addDragItemFromShop = function (__s224param0) {
    if (this.currentCategory != __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_DEFENCE) {
      this.removeDragItemFromShop();
      this._selectedShopItem = __s224param0;
      this.addNewDragItem(this.getShopVOFromItem(__s224param0));
    }
  };
  CastleDecoShopPanel.prototype.onAddDragItemFromShopSuccessful = function () {
    this._selectedShopItem.bgStartDrag();
    this.initShopVO(this._selectedShopVO);
    this.layoutManager.nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_DRAG);
    this.controller.dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.ON_DECO_SHOP_DRAG_START, [this._selectedShopVO]));
  };
  CastleDecoShopPanel.prototype.removeDragItemFromShop = function () {
    this._selectedShopItem = null;
    this._selectedShopVO = null;
    this.removeDragItem();
    if (this._decoShopPanelItemComponents != null) {
      for (var __s229local0 = 0, __s229local1 = this._decoShopPanelItemComponents; __s229local0 < __s229local1.length; __s229local0++) {
        var __s229local2 = __s229local1[__s229local0];
        if (__s229local2 !== undefined) {
          __s229local2.bgStopDrag();
        }
      }
    }
    this.layoutManager.nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
  };
  CastleDecoShopPanel.prototype.addNewDragItem = function (__s235param0) {
    this._selectedShopVO = __s235param0;
    this.removeDragItem();
    this._dragPreviewDispCreator.reset();
    this._dragPreviewDispCreator.onLoadedSignal.add(this.bindFunction(this.onDragPreviewLoaded));
    this._dragPreviewDispCreator.switchCreationState(true);
    var __s235local0 = __s235param0.getVisualClassName();
    this._dragPreviewDispCreator.addClip(new __dep_exact_9e901e8e2483a22f.GoodgameDisplayObjectClipExternal(__s235local0, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(__s235local0), null, 24, false));
    this._dragPreviewDispCreator.switchCreationState(false);
  };
  CastleDecoShopPanel.prototype.onDragPreviewLoaded = function () {
    this._dragPreviewDispCreator.onLoadedSignal.remove(this.bindFunction(this.onDragPreviewLoaded));
    var __s237local0 = this._dragPreviewDispCreator.getClipMc(0);
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.stopAllMoviesGotoFrameOne(__s237local0);
    var __s237local1;
    var __s237local2 = __s237local0.getBounds(null);
    var __s237local3 = CastleDecoShopPanel.DRAG_ICON_DIMENSION.x / __s237local2.width;
    __s237local0.scaleX = __s237local0.scaleY = __s237local3;
    __s237local1 = __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID ? __dep_export_CrestHelper.CrestHelper.getPlayerOrFactionCrest(__dep_export_CastleModel.CastleModel.areaData.activeOwnerInfo) : __dep_export_CastleModel.CastleModel.areaData.activeOwnerInfo.crest;
    for (var __s237local4 = 0; __s237local4 < 5; __s237local4++) {
      if (__s237local0["flag" + __s237local4]) {
        __dep_export_FlagHelper.FlagHelper.colorFlag(__s237local0["flag" + __s237local4], __s237local1);
      }
    }
    if (__s237local0.flag) {
      __dep_export_FlagHelper.FlagHelper.colorFlag(__s237local0.flag, __s237local1);
    }
    if (__s237local0.flagb) {
      __dep_export_FlagHelper.FlagHelper.colorFlag(__s237local0.flagb, __s237local1);
    }
    this.layoutManager.nativeCursor.startDrag(__s237local0);
    if (this._selectedShopItem) {
      this.onAddDragItemFromShopSuccessful();
    }
    this._dragPreviewDispCreator.updateCache();
  };
  CastleDecoShopPanel.prototype.removeDragItem = function () {
    if (!(this._dragPreviewDispCreator.clipList.length <= 0)) {
      var __s245local0 = this._dragPreviewDispCreator.getClipMc(0);
      if (__s245local0) {
        __s245local0.scaleX = __s245local0.scaleY = 1;
        this.layoutManager.nativeCursor.stopDrag(__s245local0);
      }
      this._dragPreviewDispCreator.reset();
    }
  };
  CastleDecoShopPanel.prototype.initShopVO = function (__s249param0) {
    __s249param0.init(this.isoRenderer.isoData);
    __s249param0.updateData();
    if (__s249param0) {
      var __s249local0 = __s249param0;
      __s249local0.buildingState = __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_COMPLETED;
      __s249local0.hitPoints = 100;
    }
  };
  CastleDecoShopPanel.prototype.onStorageDecoDragStarted = function (__s252param0) {
    this.changeCategory(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_STORAGE);
    this.textFieldManager.registerTextField(this.decoShopPanel.mc_decoStorage.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s252param0.params[0], "ADecoBuildingVO") ? "panel_deco_storage_desc" : "panel_deco_storage_placeBuilding_desc"), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true)).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
  };
  Object.defineProperty(CastleDecoShopPanel.prototype, "isoRenderer", {
    get: function () {
      return __dep_export_Iso.Iso.renderer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDecoShopPanel.prototype, "selectedShopVO", {
    get: function () {
      return this._selectedShopVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDecoShopPanel.prototype, "selectedShopItem", {
    get: function () {
      return this._selectedShopItem;
    },
    enumerable: true,
    configurable: true
  });
  CastleDecoShopPanel.__initialize_static_members = function () {
    CastleDecoShopPanel.DRAG_ICON_DIMENSION = new __s0local1(23, 30);
  };
  CastleDecoShopPanel.NAME = "CastleDecoShopPanel";
  CastleDecoShopPanel.ITEMS_PER_PAGE = 5;
  return CastleDecoShopPanel;
}(__dep_export_CastlePanel.CastlePanel);
exports.CastleDecoShopPanel = __s0local2;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_DecoShopPanelItemComponent = require("gge-module:export_DecoShopPanelItemComponent");
var __dep_export_CastleBuildingInfoDialog = require("gge-module:export_CastleBuildingInfoDialog");
var __dep_export_CastleConstructionSellDialog = require("gge-module:export_CastleConstructionSellDialog");
var __dep_export_DecorationStorageDialog = require("gge-module:export_DecorationStorageDialog");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_CastleDecoShopItemArrayHelper = require("gge-module:export_CastleDecoShopItemArrayHelper");
var __dep_export_CastleToggleUpgradeViewButton = require("gge-module:export_CastleToggleUpgradeViewButton");
var __dep_export_CastleToggleWallViewButton = require("gge-module:export_CastleToggleWallViewButton");
var __dep_export_DispCreatorComponent = require("gge-module:export_DispCreatorComponent");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_ClickFeedbackButtonBackground = require("gge-module:export_ClickFeedbackButtonBackground");
var __dep_export_CastleLegendSkillDialog = require("gge-module:export_CastleLegendSkillDialog");
var __dep_export_CastleLegendSkillDialogProperties = require("gge-module:export_CastleLegendSkillDialogProperties");
__s0local2.__initialize_static_members();
