Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleConstructionSellDialogProperties = require("gge-module:export_CastleConstructionSellDialogProperties");
var __dep_export_DecorationForgeMainDialogProperties = require("gge-module:export_DecorationForgeMainDialogProperties");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function DecorationStorageDialogListItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DecorationStorageDialogListItem, __s1param0);
  DecorationStorageDialogListItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
    var __s5local0 = this.getItemMc();
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s5local0.btn_build, __s5local0.btn_sell], __dep_export_ClickFeedbackButtonBackground.ClickFeedbackButtonBackground);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s5local0.btn_buildSmall, __s5local0.btn_fusion], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s5local0.btn_build.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("btn_place")).autoFitToBounds = true;
    __s5local0.mc_new.toolTipText = "new";
    __s5local0.btn_buildSmall.toolTipText = "btn_place";
    __s5local0.mc_local.toolTipText = "LocalBuildingIndicatorBubble_tooltip";
    __s5local0.mc_local.mouseChildren = false;
  };
  DecorationStorageDialogListItem.prototype.fill = function () {
    this.updateName();
    this.updateIcon();
    this.updateValues();
    this.updateButtons();
    this.updateNewIndicator();
    this.updateLocalIndicator();
  };
  DecorationStorageDialogListItem.prototype.updateName = function () {
    var __s9local0 = this.getItemMc();
    if (this.vo.buildingVO.downgradeWodID > 0 || this.vo.buildingVO.upgradeWodID > 0) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s9local0.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("ownername_level", [__dep_exact_92d05af59ee2ff30_3.Localize.text(this.vo.buildingVO.getNameString()), this.vo.buildingVO.level])).autoFitToBounds = true;
    } else {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s9local0.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.vo.buildingVO.getNameString())).autoFitToBounds = true;
    }
  };
  DecorationStorageDialogListItem.prototype.updateIcon = function () {
    var __s13local0 = this.getItemMc();
    var __s13local1 = __s13local0.mc_item;
    var __s13local2 = __dep_exact_81dacdf05bd32292_1.castAs(this.vo.buildingVO, "ADecoBuildingVO");
    var __s13local3 = new __dep_export_CollectableItemBuildingVO.CollectableItemBuildingVO();
    __s13local3.buildingVO = this.vo.buildingVO;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s13local1).addInfoBtn(__s13local0.btn_info), __s13local3, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, new __s0local0(124, 102)));
    var __s13local4 = __s13local1.mc_amount;
    if (__s13local2 && __s13local2.isUnique()) {
      __s13local4.visible = false;
    } else {
      __s13local4.visible = true;
      var __s13local5 = __dep_exact_f855840627e6e145.int(__dep_exact_81dacdf05bd32292_2.instanceOfClass(this.vo.buildingVO, "CustomDecoBuildingVO") ? 1 : __dep_export_CastleModel.CastleModel.decoStorage.getCurrentStorage().getAmount(this.vo.buildingVO.wodId));
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s13local4.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s13local5)).autoFitToBounds = true;
    }
    var __s13local6 = this.vo.getFusionInfoVO();
    __s13local1.mc_fusionTarget.visible = __s13local6 && __s13local6.isFusionTarget;
    __s13local1.mc_fusionSource.visible = __s13local6 && __s13local6.isFusionSource;
    __s13local1.mc_fusionUnique.visible = !!__s13local2 && __s13local2.isUnique();
    __s13local1.mc_effect.visible = !!__s13local2 && !!__s13local2.allBuildingEffects && __s13local2.allBuildingEffects.length > 0;
    __s13local1.mc_relic.visible = this.vo.buildingVO.isRelicBuilding;
    if (__s13local1.cacheCanvas) {
      __s13local1.uncache();
    }
  };
  DecorationStorageDialogListItem.prototype.updateButtons = function () {
    var __s18local0 = this.getItemMc();
    var __s18local1 = !!__dep_exact_81dacdf05bd32292_2.instanceOfClass(this.vo.buildingVO, "ADecoBuildingVO") && this.vo.buildingVO.fusionInfoVO.isFusionTarget;
    __s18local1 = __s18local1 && !__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isCrossplay;
    __s18local0.btn_buildSmall.visible = __s18local1;
    __s18local0.btn_fusion.visible = __s18local1;
    __s18local0.btn_build.visible = !__s18local1;
    var __s18local2 = __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_FUSION_FORGE;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(__s18local0.btn_fusion, __s18local2);
    __s18local0.btn_fusion.toolTipText = __s18local2 ? "fusionUpgrade_tt" : "requiresLevel70_tt";
    this.updateSellButton(__s18local0);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s18local0.btn_sell.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("sell_tooltip"))).autoFitToBounds = true;
    __s18local0.btn_sell.toolTipText = this.vo.canBeSold() ? null : "notSellable";
    if (__dep_export_CastleModel.CastleModel.areaData.activeArea) {
      var __s18local3 = this.vo.buildingVO.isAvailableInAreaType(__dep_export_CastleModel.CastleModel.areaData.activeArea.areaInfo.areaType);
      var __s18local4 = this.vo.buildingVO.isAvailableByKingdomId(__dep_export_CastleModel.CastleModel.areaData.activeArea.areaInfo.kingdomID);
      var __s18local5 = this.vo.buildingVO.canBeBuildByResourceFields();
      var __s18local6 = __s18local3 && __s18local4 && __s18local5;
      var __s18local7 = __dep_export_CastleModel.CastleModel.areaData.activeIsoData.objects.provider.hasMaxAmountOfObjectsByType(this.vo.buildingVO);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(__s18local0.btn_build, __s18local6 && !__s18local7);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(__s18local0.btn_buildSmall, __s18local6 && !__s18local7);
      var __s18local8 = null;
      var __s18local9 = "btn_place";
      if (__s18local4) {
        if (__s18local3 && __s18local5) {
          if (__s18local7) {
            __s18local8 = "panel_shop_maxBuildingAmount";
            __s18local9 = "panel_shop_maxBuildingAmount";
          }
        } else {
          __s18local8 = "alert_buildingNotPlacableInArea";
          __s18local9 = "alert_buildingNotPlacableInArea";
        }
      } else {
        __s18local8 = "errorCode_177";
        __s18local9 = "errorCode_177";
      }
      __s18local0.btn_build.toolTipText = __s18local8;
      __s18local0.btn_buildSmall.toolTipText = __s18local9;
    }
    if (__s18local0.btn_sell.cacheCanvas) {
      __s18local0.btn_sell.updateCache();
    }
  };
  DecorationStorageDialogListItem.prototype.updateSellButton = function (__s27param0) {
    if (this.vo.getSellPrice() > 0) {
      __s27param0.btn_sell.visible = !__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isCrossplay;
    } else {
      __s27param0.btn_sell.visible = false;
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(__s27param0.btn_sell, this.vo.canBeSold());
  };
  DecorationStorageDialogListItem.prototype.updateValues = function () {
    for (var __s31local0 = 0; __s31local0 < 6; ++__s31local0) {
      this.getValueMc(__s31local0).visible = false;
    }
    var __s31local1 = this.vo.buildingVO;
    if (__s31local1) {
      var __s31local2 = __s31local1.storageDialogVO.items.length;
      this.fillItemsFromDialogueVO(__s31local1.storageDialogVO, 0, __s31local2);
      if (__s31local1.buildingGroundType != __dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_DECO && !this.isRelicBuilding(__s31local1)) {
        this.fillItemsFromDialogueVO(__s31local1.infoDialogVO, __s31local2, DecorationStorageDialogListItem.NUMBER_OF_VALUE_ITEMS, true);
      }
    }
  };
  DecorationStorageDialogListItem.prototype.isRelicBuilding = function (__s37param0) {
    return __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s37param0, "RelicFarmBuildingVO") || __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s37param0, "RelicQuarryBuildingVO") || __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s37param0, "RelicWoodcutterBuildingVO");
  };
  DecorationStorageDialogListItem.prototype.fillItemsFromDialogueVO = function (__s39param0, __s39param1, __s39param2, __s39param3) {
    var __s39local0;
    if (__s39param3 === undefined) {
      __s39param3 = false;
    }
    __s39local0 = __s39param3 ? __s39param0.items.filter(function (__s42param0) {
      return __s42param0.isVisibleInInfoDialog;
    }) : __s39param0.items;
    var __s39local1 = 0;
    for (var __s39local2 = __s39param1; __s39local2 < __s39param2; ++__s39local2) {
      var __s39local3 = this.getValueMc(__s39local2);
      if (__s39local3) {
        var __s39local4 = __s39local0[__s39local1];
        __s39local1++;
        __s39local3.mouseChildren = false;
        if (__s39local4) {
          __s39local3.visible = true;
          __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s39local3.txt_value, __s39local4.textVO).autoFitToBounds = true;
          __s39local3.toolTipText = __s39local4.tooltipText;
          __dep_exact_9e901e8e2483a22f.MovieClipHelper.replaceMovieClip(__s39local3.mc_icon, __s39local4.iconClass);
          if (__s39local4.iconClass != null) {
            __dep_exact_9e901e8e2483a22f.MovieClipHelper.scaleToFit(__s39local3.mc_icon, 30, 30);
          }
        }
      }
    }
  };
  DecorationStorageDialogListItem.prototype.updateNewIndicator = function () {
    if (this.vo) {
      this.getItemMc().mc_new.visible = __dep_export_CastleModel.CastleModel.decoStorage.getCurrentStorage().isNew(this.vo.buildingVO);
    }
  };
  DecorationStorageDialogListItem.prototype.updateLocalIndicator = function () {
    if (this.vo) {
      this.getItemMc().mc_local.visible = __dep_export_CastleModel.CastleModel.decoStorage.getCurrentStorage().isInLocalStorage(this.vo.buildingVO);
    }
  };
  DecorationStorageDialogListItem.prototype.getValueMc = function (__s55param0) {
    return this.getItemMc().getChildByName("mc_value" + __s55param0);
  };
  DecorationStorageDialogListItem.prototype.onClick = function (__s57param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s57param0.target)) {
      __s1param0.prototype.onClick.call(this, __s57param0);
      var __s57local0 = this.getItemMc();
      switch (__s57param0.target) {
        case __s57local0.btn_buildSmall:
        case __s57local0.btn_build:
          this.onBuildButtonClicked();
          break;
        case __s57local0.btn_fusion:
          this.onFusionButtonClicked();
          break;
        case __s57local0.btn_sell:
          this.onSellButtonClicked();
      }
    }
  };
  DecorationStorageDialogListItem.prototype.onBuildButtonClicked = function () {
    __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.ON_DRAG_STARTED_STORAGE_DECO, [this.vo.buildingVO]));
    __dep_export_Iso.Iso.renderer.mouse.startDraggingOfNewBuyObject(this.vo.buildingVO);
  };
  DecorationStorageDialogListItem.prototype.onFusionButtonClicked = function () {
    var __s63local0 = new __dep_export_CollectableItemBuildingVO.CollectableItemBuildingVO();
    __s63local0.buildingVO = this.vo.buildingVO;
    var __s63local1 = new __dep_export_DecorationForgeSelectResultVO.DecorationForgeSelectResultVO(__s63local0);
    __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_DecorationForgeMainDialog.DecorationForgeMainDialog, new __dep_export_DecorationForgeMainDialogProperties.DecorationForgeMainDialogProperties(__s63local1));
  };
  DecorationStorageDialogListItem.prototype.onSellButtonClicked = function () {
    __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleConstructionSellDialog.CastleConstructionSellDialog, new __dep_export_CastleConstructionSellDialogProperties.CastleConstructionSellDialogProperties(this.vo.buildingVO));
  };
  Object.defineProperty(DecorationStorageDialogListItem.prototype, "vo", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  DecorationStorageDialogListItem.NUMBER_OF_VALUE_ITEMS = 6;
  return DecorationStorageDialogListItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.DecorationStorageDialogListItem = __s0local1;
var __dep_export_CollectableItemBuildingVO = require("gge-module:export_CollectableItemBuildingVO");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleConstructionSellDialog = require("gge-module:export_CastleConstructionSellDialog");
var __dep_export_DecorationForgeSelectResultVO = require("gge-module:export_DecorationForgeSelectResultVO");
var __dep_export_DecorationForgeMainDialog = require("gge-module:export_DecorationForgeMainDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClickFeedbackButtonBackground = require("gge-module:export_ClickFeedbackButtonBackground");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
