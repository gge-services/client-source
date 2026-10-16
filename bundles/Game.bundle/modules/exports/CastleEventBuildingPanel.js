Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_IsoRenderStrategyEnum = require("gge-module:export_IsoRenderStrategyEnum");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PrivateOfferDataEvent = require("gge-module:export_PrivateOfferDataEvent");
var __dep_export_PrivateOfferStateEnum = require("gge-module:export_PrivateOfferStateEnum");
var __dep_export_CastleBuildingInfoDialogProperties = require("gge-module:export_CastleBuildingInfoDialogProperties");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_FlagHelper = require("gge-module:export_FlagHelper");
var __dep_export_CastlePanel = require("gge-module:export_CastlePanel");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleEventBuildingPanel() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, new Library.CastleInterfaceElements.EventBuildingPanel()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEventBuildingPanel, __s1param0);
  CastleEventBuildingPanel.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.eventBuildingPanel.mc_buildingTooltip.visible = false;
    this.eventBuildingPanel.mc_buildingTooltip.mouseChildren = false;
    this.eventBuildingPanel.mc_buildingTooltip.mouseEnabled = false;
    this.decoShopPanelItemComponent = new __dep_export_DecoShopPanelItemComponent.DecoShopPanelItemComponent(this.eventBuildingPanel.i0);
    this.decoShopPanelItemComponent.addOnMouseOutItem(this.bindFunction(this.onMouseOutItem));
    this.decoShopPanelItemComponent.addOnMouseOverItem(this.bindFunction(this.onMouseOverItem));
    this.decoShopPanelItemComponent.addOnClickItem(this.bindFunction(this.onShopItemClick));
    this.decoShopPanelItemComponent.addOnClickInfo(this.bindFunction(this.onClickInfo));
    this._toggleUpgradeViewBtn = new __dep_export_CastleToggleUpgradeViewButton.CastleToggleUpgradeViewButton(this.eventBuildingPanel.btn_switchUpgradeView);
    this._toggleWallViewBtn = new __dep_export_CastleToggleWallViewButton.CastleToggleWallViewButton(this.eventBuildingPanel.btn_switchWallVisibility);
  };
  CastleEventBuildingPanel.prototype.show = function () {
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.onPrivateOfferStateChanged));
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onPrivateOfferDeleted));
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeResources));
    this.controller.addEventListener(__dep_export_IsoEvent.IsoEvent.ON_DRAG_OF_NEW_OBJECT_DONE, this.bindFunction(this.onNewBuildingPlaced));
    this.controller.addEventListener(__dep_export_IsoEvent.IsoEvent.ON_DRAG_OF_NEW_OBJECT_CANCELED, this.bindFunction(this.onNewBuildingPlaced));
    this.updateBuildingGroundViewButton();
    __s1param0.prototype.show.call(this);
    this.fillItemInfo(this.panelProperties.wodID);
    this._toggleUpgradeViewBtn.show();
    this._toggleWallViewBtn.show();
  };
  CastleEventBuildingPanel.prototype.hide = function () {
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.onPrivateOfferStateChanged));
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onPrivateOfferDeleted));
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeResources));
    this.controller.removeEventListener(__dep_export_IsoEvent.IsoEvent.ON_DRAG_OF_NEW_OBJECT_DONE, this.bindFunction(this.onNewBuildingPlaced));
    this.controller.removeEventListener(__dep_export_IsoEvent.IsoEvent.ON_DRAG_OF_NEW_OBJECT_CANCELED, this.bindFunction(this.onNewBuildingPlaced));
    this.removeDragItem();
    this._toggleUpgradeViewBtn.hide();
    this._toggleWallViewBtn.hide();
    __s1param0.prototype.hide.call(this);
  };
  CastleEventBuildingPanel.prototype.updateBuildingGroundViewButton = function () {
    this.eventBuildingPanel.btn_switchBuildingGroundView.enableButton = __dep_export_CastleModel.CastleModel.tutorialData.isTutorialFinished();
    this.eventBuildingPanel.btn_switchBuildingGroundView.selectButton = this.isoRenderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW);
    this.setBuildingGroundButtonToolTip();
  };
  CastleEventBuildingPanel.prototype.onNewBuildingPlaced = function (__s13param0) {
    this.removeDragItemFromShop();
  };
  CastleEventBuildingPanel.prototype.destroy = function () {
    this.hide();
    if (this.decoShopPanelItemComponent) {
      this.decoShopPanelItemComponent.clearListeners();
    }
    __s1param0.prototype.destroy.call(this);
  };
  CastleEventBuildingPanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.y = this.disp.stage.stageHeight;
      this.disp.x = this.disp.stage.stageWidth / 2;
      if (this.env.hasNetworkBuddies) {
        this.disp.y -= __dep_export_ClientConstCastle.ClientConstCastle.BUDDY_PANEL_HEIGHT;
      }
    }
  };
  CastleEventBuildingPanel.prototype.closePanel = function () {
    if (!this.layoutManager.isInState(__dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO)) {
      this.layoutManager.state = __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO;
    }
    __dep_export_Iso.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(false);
  };
  CastleEventBuildingPanel.prototype.setBuildingGroundButtonToolTip = function () {
    if (this.eventBuildingPanel.btn_switchBuildingGroundView.enabled) {
      if (this.isoRenderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW)) {
        this.eventBuildingPanel.btn_switchBuildingGroundView.toolTipText = "constructionMode_showBuildings";
      } else {
        this.eventBuildingPanel.btn_switchBuildingGroundView.toolTipText = "constructionMode_hideBuildings";
      }
    } else {
      this.eventBuildingPanel.btn_switchBuildingGroundView.toolTipText = "panel_shop_needQuestProgress";
    }
  };
  CastleEventBuildingPanel.prototype.showShopItemTooltip = function (__s31param0) {
    if (__dep_export_ClientConstCastle.ClientConstCastle.USE_PICK_AND_DROP || !__dep_export_ClientConstCastle.ClientConstCastle.USE_PICK_AND_DROP && !this.selectedShopVO) {
      var __s31local0 = __s31param0.shopVO;
      __dep_export_DecoBuildingToolTipManager.DecoBuildingToolTipManager.showToolTip(__s31param0, __s31local0);
    }
  };
  CastleEventBuildingPanel.prototype.fillItemInfo = function (__s34param0) {
    var __s34local0 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s34param0, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING);
    this.decoShopPanelItemComponent.fillItem(__s34local0, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_SEASONEVENT);
  };
  CastleEventBuildingPanel.prototype.onClick = function (__s36param0) {
    __s1param0.prototype.onClick.call(this, __s36param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s36param0.target)) {
      switch (__s36param0.target) {
        case this.eventBuildingPanel.btn_close:
          this.removeDragItemFromShop();
          this.closePanel();
          break;
        case this.eventBuildingPanel.btn_switchBuildingGroundView:
          this.isoRenderer.strategies.toggle(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW);
          this.updateBuildingGroundViewButton();
      }
    }
  };
  CastleEventBuildingPanel.prototype.onClickInfo = function (__s40param0) {
    var __s40local0 = __s40param0.disp.shopVO;
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleBuildingInfoDialog.CastleBuildingInfoDialog, new __dep_export_CastleBuildingInfoDialogProperties.CastleBuildingInfoDialogProperties(__s40local0));
  };
  CastleEventBuildingPanel.prototype.onMouseUp = function (__s42param0) {
    if (!__dep_export_ClientConstCastle.ClientConstCastle.USE_PICK_AND_DROP && this.selectedItemMc) {
      this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f_1.BasicCustomCursor.CURSOR_ARROW);
      this.removeDragItem();
    }
  };
  CastleEventBuildingPanel.prototype.onMouseOutItem = function (__s45param0) {
    this.eventBuildingPanel.mc_buildingTooltip.visible = false;
    __dep_export_DecoBuildingToolTipManager.DecoBuildingToolTipManager.hideToolTip();
  };
  CastleEventBuildingPanel.prototype.onMouseOverItem = function (__s47param0) {
    this.showShopItemTooltip(__s47param0.disp);
  };
  CastleEventBuildingPanel.prototype.onRollOver = function (__s49param0) {
    if (this.selectedShopItem) {
      this.isoRenderer.mouse.cancelDraggedTarget();
      this.addNewDragItem(this.getShopVOFromItem(this.selectedShopItem));
    }
  };
  CastleEventBuildingPanel.prototype.onRollOut = function (__s52param0) {
    this.onCursorOut(__s52param0);
    this.removeDragItem();
    if (this.selectedShopVO) {
      this.isoRenderer.mouse.startDraggingOfNewBuyObject(this.selectedShopVO);
    }
  };
  CastleEventBuildingPanel.prototype.onPrivateOfferDeleted = function (__s55param0) {
    if (this.panelProperties.privateOfferVO && __s55param0.offerVO.id == this.panelProperties.privateOfferVO.id) {
      this.closePanel();
    }
  };
  CastleEventBuildingPanel.prototype.onPrivateOfferStateChanged = function (__s58param0) {
    if (this.panelProperties.privateOfferVO && __s58param0.offerVO.id == this.panelProperties.privateOfferVO.id && __s58param0.offerVO.offerState == __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.PRECONDITION) {
      this.closePanel();
    }
  };
  CastleEventBuildingPanel.prototype.onChangeResources = function (__s61param0) {
    var __s61local0 = __dep_exact_81dacdf05bd32292_1.castAs(__s61param0.params[0], "CastleResourcesVO");
    if (__s61local0 && __dep_export_CastleModel.CastleModel.areaData.activeArea.areaId == __s61local0.castleID) {
      this.fillItemInfo(this.panelProperties.wodID);
    }
  };
  CastleEventBuildingPanel.prototype.getShopVOFromItem = function (__s64param0) {
    if (__s64param0) {
      return __s64param0.disp.shopVO;
    } else {
      return null;
    }
  };
  CastleEventBuildingPanel.prototype.isItemAvailableForSelection = function (__s68param0) {
    return __s68param0.disp.shopVO.isAvailableByLevelAndEffect && !__s68param0.disp.mc_contentHolder.icon_lock_unreachable.visible;
  };
  CastleEventBuildingPanel.prototype.onShopItemClick = function (__s70param0) {
    if (this.selectedShopItem != __s70param0) {
      if (__s70param0 && this.isItemAvailableForSelection(__s70param0)) {
        this.addDragItemFromShop(__s70param0);
      }
    } else {
      this.removeDragItemFromShop();
    }
  };
  CastleEventBuildingPanel.prototype.addDragItemFromShop = function (__s75param0) {
    this.removeDragItemFromShop();
    var __s75local0 = this.getShopVOFromItem(__s75param0);
    if (this.addNewDragItem(__s75local0)) {
      __s75param0.bgStartDrag();
      this._selectedShopItem = __s75param0;
      this._selectedShopVO = __s75local0;
      this.initShopVO(this._selectedShopVO);
      this.layoutManager.nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f_1.BasicCustomCursor.CURSOR_DRAG);
      this.controller.dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.ON_DECO_SHOP_DRAG_START, [__s75local0]));
    }
  };
  CastleEventBuildingPanel.prototype.removeDragItemFromShop = function () {
    this._selectedShopItem = null;
    this._selectedShopVO = null;
    this.removeDragItem();
    this.decoShopPanelItemComponent.bgStopDrag();
    this.layoutManager.nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f_1.BasicCustomCursor.CURSOR_CLICK);
  };
  CastleEventBuildingPanel.prototype.addNewDragItem = function (__s80param0) {
    this.removeDragItem();
    try {
      var __s80local0 = __dep_exact_81dacdf05bd32292.getDefinitionByName(__s80param0.getVisualClassName());
      this._selectedItemMc = new __s80local0();
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.stopAllMoviesGotoFrameOne(this._selectedItemMc);
    } catch (__s83local0) {
      this._selectedItemMc = null;
      return false;
    }
    var __s80local1;
    var __s80local2 = this._selectedItemMc.getBounds(null);
    var __s80local3 = CastleEventBuildingPanel.DRAG_ICON_DIMENSION.x / __s80local2.width;
    this._selectedItemMc.scaleX = this._selectedItemMc.scaleY = __s80local3;
    __s80local1 = __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID ? __dep_export_CrestHelper.CrestHelper.getPlayerOrFactionCrest(__dep_export_CastleModel.CastleModel.areaData.activeOwnerInfo) : __dep_export_CastleModel.CastleModel.areaData.activeOwnerInfo.crest;
    for (var __s80local4 = 0; __s80local4 < 5; __s80local4++) {
      if (this._selectedItemMc["flag" + __s80local4]) {
        __dep_export_FlagHelper.FlagHelper.colorFlag(this._selectedItemMc["flag" + __s80local4], __s80local1);
      }
    }
    if (this._selectedItemMc.flag) {
      __dep_export_FlagHelper.FlagHelper.colorFlag(this._selectedItemMc.flag, __s80local1);
    }
    if (this._selectedItemMc.flagb) {
      __dep_export_FlagHelper.FlagHelper.colorFlag(this._selectedItemMc.flagb, __s80local1);
    }
    this.layoutManager.nativeCursor.startDrag(this._selectedItemMc);
    return true;
  };
  CastleEventBuildingPanel.prototype.removeDragItem = function () {
    if (this._selectedItemMc) {
      this.layoutManager.nativeCursor.stopDrag(this._selectedItemMc);
      this._selectedItemMc = null;
    }
  };
  CastleEventBuildingPanel.prototype.initShopVO = function (__s93param0) {
    __s93param0.init(this.isoRenderer.isoData);
    __s93param0.updateData();
    if (__s93param0) {
      var __s93local0 = __s93param0;
      __s93local0.buildingState = __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_COMPLETED;
      __s93local0.hitPoints = 100;
    }
  };
  Object.defineProperty(CastleEventBuildingPanel.prototype, "eventBuildingPanel", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEventBuildingPanel.prototype, "panelProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEventBuildingPanel.prototype, "isoRenderer", {
    get: function () {
      return __dep_export_Iso.Iso.renderer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEventBuildingPanel.prototype, "selectedShopItem", {
    get: function () {
      return this._selectedShopItem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEventBuildingPanel.prototype, "selectedShopVO", {
    get: function () {
      return this._selectedShopVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEventBuildingPanel.prototype, "selectedItemMc", {
    get: function () {
      return this._selectedItemMc;
    },
    enumerable: true,
    configurable: true
  });
  CastleEventBuildingPanel.__initialize_static_members = function () {
    CastleEventBuildingPanel.DRAG_ICON_DIMENSION = new __s0local0(23, 30);
  };
  CastleEventBuildingPanel.NAME = "CastleEventBuildingPanel";
  return CastleEventBuildingPanel;
}(__dep_export_CastlePanel.CastlePanel);
exports.CastleEventBuildingPanel = __s0local1;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_DecoShopPanelItemComponent = require("gge-module:export_DecoShopPanelItemComponent");
var __dep_export_DecoBuildingToolTipManager = require("gge-module:export_DecoBuildingToolTipManager");
var __dep_export_CastleBuildingInfoDialog = require("gge-module:export_CastleBuildingInfoDialog");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_CastleToggleUpgradeViewButton = require("gge-module:export_CastleToggleUpgradeViewButton");
var __dep_export_CastleToggleWallViewButton = require("gge-module:export_CastleToggleWallViewButton");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
__s0local1.__initialize_static_members();
