Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_C2SMoveConstructionItemVO = require("gge-module:export_C2SMoveConstructionItemVO");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicBuildListComponent = require("gge-module:export_BasicBuildListComponent");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleCraneTeaserDialogProperties = require("gge-module:export_CastleCraneTeaserDialogProperties");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CastleBuildingListComponent(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1, 3) || this;
    __s3local0._componentMC.addEventListener(__s0local0.CLICK, __s3local0.bindFunction(__s3local0.onClick));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBuildingListComponent, __s1param0);
  CastleBuildingListComponent.prototype.createBuildListItem = function () {
    var __s5local0 = new __dep_export_CastleBuildingListItem.CastleBuildingListItem(__dep_exact_9e901e8e2483a22f.assetsPool.obtain(Library.CastleInterfaceElements.BuildListItem1));
    var __s5local1 = __s5local0.disp;
    if (!__dep_export_ButtonHelper.ButtonHelper.hasBasicButton(__s5local1)) {
      __dep_export_ButtonHelper.ButtonHelper.initButton(__s5local1, 1, __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    }
    return __s5local0;
  };
  CastleBuildingListComponent.prototype.initBuildListItem = function (__s8param0) {
    var __s8local0 = __dep_exact_81dacdf05bd32292.castAs(__s8param0, "CastleBuildingListItem");
    if (__s8local0 && __s8local0.constructionSlotVO && __dep_export_Iso.Iso.renderer) {
      __s8local0.targetBuilding = __dep_export_Iso.Iso.renderer.objects.provider.getObjectById(__s8local0.constructionSlotVO.objectId);
    }
    __s1param0.prototype.initBuildListItem.call(this, __s8param0);
  };
  CastleBuildingListComponent.prototype.onItemLockedClick = function (__s11param0) {
    if (!__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive) {
      var __s11local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.areaData.activeConstructionList.nextAllowedCraneLevelRequirement);
      var __s11local1 = __dep_export_CastleModel.CastleModel.areaData.activeConstructionList.craneBuilding;
      var __s11local2 = __dep_export_CastleModel.CastleModel.areaData.activeConstructionList.buildersBuilding;
      var __s11local3 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.areaData.activeConstructionList.nextAllowedBuildersLevelRequirement);
      if (__s11param0.slotVO.pos < __dep_export_CastleModel.CastleModel.areaData.activeConstructionList.numConstructionSlots) {
        if (__s11local2) {
          __dep_export_Iso.Iso.renderer.mouse.changeSelectedTarget(__s11local2);
          __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.SHOW_PANEL_INFO, [__s11local2.buildingVO]));
        } else if (__dep_export_CastleModel.CastleModel.userData.userLevel >= __s11local3) {
          this.layoutManager.hideAllIngameUIComponents();
          __dep_export_Iso.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
          if (this.layoutManager.isInMyCastleBuildMode) {
            this.highlightBuildersQuarters();
          }
        }
      } else if (__s11local1) {
        __dep_export_Iso.Iso.renderer.mouse.changeSelectedTarget(__s11local1);
        __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.SHOW_PANEL_INFO, [__s11local1.buildingVO]));
      } else if (__dep_export_CastleModel.CastleModel.userData.userLevel >= __s11local0) {
        if (__dep_export_CastleModel.CastleModel.areaData.activeConstructionList.isDiscountActive) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleCraneTeaserDialog.CastleCraneTeaserDialog, new __dep_export_CastleCraneTeaserDialogProperties.CastleCraneTeaserDialogProperties(__dep_export_CastleModel.CastleModel.areaData.activeConstructionList.lastDiscountLevel, __dep_export_CastleModel.CastleModel.areaData.activeConstructionList.discount));
        } else {
          this.layoutManager.hideAllIngameUIComponents();
          __dep_export_Iso.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
          if (this.layoutManager.isInMyCastleBuildMode) {
            this.highlightCrane();
          }
        }
      }
    }
  };
  CastleBuildingListComponent.prototype.onClick = function (__s23param0) {
    switch (__s23param0.target) {
      case this._componentMC.btn_down:
        this.setCurrentIndex(1);
        break;
      case this._componentMC.btn_up:
        this.setCurrentIndex(-1);
    }
  };
  CastleBuildingListComponent.prototype.highlightCrane = function () {
    var __s26local0;
    __s26local0 = __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_TREASURE_CAMP ? __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_SEASONEVENT : __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_CIVIL;
    var __s26local1 = this.layoutManager.getPanel(__dep_export_CastleDecoShopPanel.CastleDecoShopPanel);
    __s26local1.revertHighLightFilters();
    for (var __s26local2 = __dep_export_CastleDecoShopItemArrayHelper.CastleDecoShopItemArrayHelper.getBuildingsByCategory(__s26local0), __s26local3 = 0; __s26local3 < __s26local2.length; __s26local3++) {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s26local2[__s26local3], "CraneBuildingVO")) {
        __s26local1.changeCategory(__s26local0, __dep_exact_f855840627e6e145.int(__s26local3 / __dep_export_CastleDecoShopPanel.CastleDecoShopPanel.ITEMS_PER_PAGE), true);
        __s26local1.highLightFilteredArrayIndex(__s26local3 % __dep_export_CastleDecoShopPanel.CastleDecoShopPanel.ITEMS_PER_PAGE);
      }
    }
  };
  CastleBuildingListComponent.prototype.highlightBuildersQuarters = function () {
    var __s31local0 = __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_CIVIL;
    var __s31local1 = this.layoutManager.getPanel(__dep_export_CastleDecoShopPanel.CastleDecoShopPanel);
    __s31local1.revertHighLightFilters();
    for (var __s31local2 = __dep_export_CastleDecoShopItemArrayHelper.CastleDecoShopItemArrayHelper.getBuildingsByCategory(__s31local0), __s31local3 = 0; __s31local3 < __s31local2.length; __s31local3++) {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s31local2[__s31local3], "BuildersQuartersBuildingVO")) {
        __s31local1.changeCategory(__s31local0, __dep_exact_f855840627e6e145.int(__s31local3 / __dep_export_CastleDecoShopPanel.CastleDecoShopPanel.ITEMS_PER_PAGE), true);
        __s31local1.highLightFilteredArrayIndex(__s31local3 % __dep_export_CastleDecoShopPanel.CastleDecoShopPanel.ITEMS_PER_PAGE);
      }
    }
  };
  CastleBuildingListComponent.prototype.requestMoveFromServer = function (__s36param0) {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_CONSTRUCTION_LIST_CHANGED, this.bindFunction(this.onUpdated));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SMoveConstructionItemVO.C2SMoveConstructionItemVO(__s36param0.slotVO.objectId, __s36param0.pos));
  };
  CastleBuildingListComponent.prototype.additionalBlockForSwitchItemPos = function (__s38param0, __s38param1) {
    return __dep_export_CastleModel.CastleModel.areaData.activeConstructionList.getSlotByPos(__s38param1).objectId <= 0;
  };
  CastleBuildingListComponent.prototype.onUpdated = function (__s40param0 = null) {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_CONSTRUCTION_LIST_CHANGED, this.bindFunction(this.onUpdated));
    this.updateAllPositions();
  };
  return CastleBuildingListComponent;
}(__dep_export_BasicBuildListComponent.BasicBuildListComponent);
exports.CastleBuildingListComponent = __s0local1;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleCraneTeaserDialog = require("gge-module:export_CastleCraneTeaserDialog");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDecoShopPanel = require("gge-module:export_CastleDecoShopPanel");
var __dep_export_CastleDecoShopItemArrayHelper = require("gge-module:export_CastleDecoShopItemArrayHelper");
var __dep_export_CastleBuildingListItem = require("gge-module:export_CastleBuildingListItem");
