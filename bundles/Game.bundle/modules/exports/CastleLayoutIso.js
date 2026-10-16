Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoRenderStrategyEnum = require("gge-module:export_IsoRenderStrategyEnum");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleLayoutIso() {
    var __s3local0 = this;
    __s3local0._openEventPanelFlag = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLayoutIso, __s1param0);
  CastleLayoutIso.prototype.setLayout = function (__s5param0, __s5param1) {
    this._context = __s5param0;
    __s1param0.prototype.setLayout.call(this, __s5param0, __s5param1);
    if (!__s5param0.isScreenActive(__dep_export_CastleIsoScreen.CastleIsoScreen)) {
      __s5param0.changeScreen(__dep_export_CastleIsoScreen.CastleIsoScreen, null);
    }
    this.addPanels();
    this._context = null;
  };
  CastleLayoutIso.prototype.addPanels = function () {
    var __s8local0 = this.getAreaData();
    if (__dep_export_ABGHelper.ABGHelper.isOnABGAndCollector && __s8local0.areaInfo.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_METROPOL && __s8local0.isMyArea) {
      this.context.showPanelRedirecter(__dep_export_ABGAllianceCollectorPointDepletionInfoPanel.ABGAllianceCollectorPointDepletionInfoPanel, null, false);
    }
    if (__dep_export_ABGHelper.ABGHelper.isOnABGAndCollector && __s8local0.isMyArea) {
      this.context.showPanelRedirecter(__dep_export_ABGAllianceCollectorPointPanel.ABGAllianceCollectorPointPanel, null, false);
    }
    if (__dep_export_ABGHelper.ABGHelper.isOnABGAndTower) {
      this.context.showPanelRedirecter(__dep_export_ABGAllianceTowerPanel.ABGAllianceTowerPanel, null, false);
      this.context.showPanelRedirecter(__dep_export_ABGAllianceTowerPointMalusInfoPanel.ABGAllianceTowerPointMalusInfoPanel, null, false);
    }
    if (__s8local0.areaInfo.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_TREASURE_CAMP) {
      if (this.isInBuildMode()) {
        this.setByMyTreasureCampBuildMode();
      } else {
        this.setByMyTreasureCamp();
      }
    } else if (__s8local0.isMyArea) {
      if (__s8local0.isUnderConquerProcess) {
        this.setByOtherCastle();
      } else if (this.isInBuildMode()) {
        this.setByMyCastleBuildMode();
      } else {
        this.setByMyCastle();
      }
    } else if (__s8local0.isUnderConquerProcessByMe) {
      this.setByOccupiedCastle();
    } else {
      this.setByOtherCastle();
    }
  };
  CastleLayoutIso.prototype.setByMyCastle = function () {
    __dep_exact_9e901e8e2483a22f.BasicDialogHandler.getInstance().blockDialogs = false;
    this.context.showPanelRedirecter(__dep_export_CastleBuildingListPanel.CastleBuildingListPanel, null, false);
    this.context.showPanelRedirecter(__dep_export_CastleBuildingListPanel.CastleBuildingListPanel, null, true);
    this.addCorrectResourcePanel(this.context);
    this.context.showPanelRedirecter(__dep_export_CastleOptionPanel.CastleOptionPanel, null, true);
    this.context.addTutorialPanel();
    this.context.dialogCastleSwitch = false;
    this.context.showPanelRedirecter(__dep_export_CastleActionPanel.CastleActionPanel, null, false);
  };
  CastleLayoutIso.prototype.setByMyTreasureCamp = function () {
    this.context.showPanelRedirecter(__dep_export_CastleBuildingListPanel.CastleBuildingListPanel, null, false);
    this.context.showPanelRedirecter(__dep_export_CastleBuildingListPanel.CastleBuildingListPanel, null, true);
    this.context.showPanelRedirecter(__dep_export_CastleResourcePanel_Season.CastleResourcePanel_Season, null, false);
    this.context.showPanelRedirecter(__dep_export_CastleOptionPanel.CastleOptionPanel, null, true);
    this.context.showPanelRedirecter(__dep_export_CastleSeasonEventActionPanel.CastleSeasonEventActionPanel, null, false);
  };
  CastleLayoutIso.prototype.setByOtherCastle = function () {
    this.setByOccupiedCastle();
    this.context.addTutorialPanel();
  };
  CastleLayoutIso.prototype.setByOccupiedCastle = function () {
    __dep_exact_9e901e8e2483a22f.BasicDialogHandler.getInstance().blockDialogs = false;
    this.context.showPanelRedirecter(__dep_export_CastleOtherPlayerInfoPanel.CastleOtherPlayerInfoPanel, null, false);
    this.context.showPanelRedirecter(__dep_export_CastleActionPanel.CastleActionPanel, null, false);
  };
  CastleLayoutIso.prototype.setByMyCastleBuildMode = function () {
    __dep_exact_9e901e8e2483a22f.BasicDialogHandler.getInstance().blockDialogs = false;
    this.context.showPanelRedirecter(__dep_export_CastleBuildingListPanel.CastleBuildingListPanel, null, false);
    this.context.showPanelRedirecter(__dep_export_CastleBuildingListPanel.CastleBuildingListPanel, null, true);
    this.context.showPanelRedirecter(__dep_export_CastleOptionPanel.CastleOptionPanel, null, true);
    this.addCorrectResourcePanel(this.context);
    this.context.addTutorialPanel();
    if (this.openEventPanelFlag) {
      this.context.showPanelRedirecter(__dep_export_CastleEventBuildingPanel.CastleEventBuildingPanel, this.eventBuildingPanelProperties, true);
    } else {
      var __s30local0 = __dep_export_CastleModel.CastleModel.tutorialData;
      if (!__s30local0.isInTutorial || !__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall() || __s30local0.currentTutorialCommand !== "expandCastle") {
        this.context.showPanelRedirecter(__dep_export_CastleDecoShopPanel.CastleDecoShopPanel, null, true);
      }
    }
    this.context.showPanelRedirecter(__dep_export_CastleActionPanel.CastleActionPanel, null, false);
  };
  CastleLayoutIso.prototype.setByMyTreasureCampBuildMode = function () {
    this.context.showPanelRedirecter(__dep_export_CastleBuildingListPanel.CastleBuildingListPanel, null, false);
    this.context.showPanelRedirecter(__dep_export_CastleBuildingListPanel.CastleBuildingListPanel, null, true);
    this.context.showPanelRedirecter(__dep_export_CastleOptionPanel.CastleOptionPanel, null, true);
    this.context.showPanelRedirecter(__dep_export_CastleResourcePanel_Season.CastleResourcePanel_Season, null, false);
    this.context.hidePanel(__dep_export_CastleSeasonEventActionPanel.CastleSeasonEventActionPanel);
    this.context.showPanelRedirecter(__dep_export_CastleDecoShopPanel.CastleDecoShopPanel, null, true);
  };
  CastleLayoutIso.prototype.getAreaData = function () {
    return __dep_export_CastleModel.CastleModel.areaData.activeArea;
  };
  CastleLayoutIso.prototype.isInBuildMode = function () {
    return __dep_export_Iso.Iso.renderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILD_MODE);
  };
  Object.defineProperty(CastleLayoutIso.prototype, "context", {
    get: function () {
      return this._context;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutIso.prototype, "eventBuildingPanelProperties", {
    get: function () {
      return this._eventBuildingPanelProperties;
    },
    set: function (__s45param0) {
      this._eventBuildingPanelProperties = __s45param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutIso.prototype, "openEventPanelFlag", {
    get: function () {
      return this._openEventPanelFlag;
    },
    set: function (__s49param0) {
      this._openEventPanelFlag = __s49param0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleLayoutIso;
}(require("gge-module:export_CastleBasicLayout").CastleBasicLayout);
exports.CastleLayoutIso = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_ABGAllianceCollectorPointDepletionInfoPanel = require("gge-module:export_ABGAllianceCollectorPointDepletionInfoPanel");
var __dep_export_ABGAllianceCollectorPointPanel = require("gge-module:export_ABGAllianceCollectorPointPanel");
var __dep_export_ABGAllianceTowerPanel = require("gge-module:export_ABGAllianceTowerPanel");
var __dep_export_ABGAllianceTowerPointMalusInfoPanel = require("gge-module:export_ABGAllianceTowerPointMalusInfoPanel");
var __dep_export_CastleActionPanel = require("gge-module:export_CastleActionPanel");
var __dep_export_CastleSeasonEventActionPanel = require("gge-module:export_CastleSeasonEventActionPanel");
var __dep_export_CastleBuildingListPanel = require("gge-module:export_CastleBuildingListPanel");
var __dep_export_CastleDecoShopPanel = require("gge-module:export_CastleDecoShopPanel");
var __dep_export_CastleOptionPanel = require("gge-module:export_CastleOptionPanel");
var __dep_export_CastleOtherPlayerInfoPanel = require("gge-module:export_CastleOtherPlayerInfoPanel");
var __dep_export_CastleEventBuildingPanel = require("gge-module:export_CastleEventBuildingPanel");
var __dep_export_CastleResourcePanel_Season = require("gge-module:export_CastleResourcePanel_Season");
var __dep_export_CastleIsoScreen = require("gge-module:export_CastleIsoScreen");
