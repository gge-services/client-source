Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_5 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_6 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_7 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_8 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_9 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_10 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_11 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_3 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_4 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_5 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_6 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_7 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_8 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_9 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_10 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_c549e43d1112dfff = require("gge-module:exact_c549e43d1112dfff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_C2SGetUnsentPriceTrackingVO = require("gge-module:export_C2SGetUnsentPriceTrackingVO");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_IsoRenderStrategyEnum = require("gge-module:export_IsoRenderStrategyEnum");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleBasicLayoutManager = require("gge-module:export_CastleBasicLayoutManager");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_renderScheduler = require("gge-module:export_renderScheduler");
var __dep_export_CastleToolTipManager = require("gge-module:export_CastleToolTipManager");
var __dep_export_TextDarkTooltip = require("gge-module:export_TextDarkTooltip");
var __dep_export_CastleFusionCompareToolTip = require("gge-module:export_CastleFusionCompareToolTip");
var __dep_export_CastleDataHolder = require("gge-module:export_CastleDataHolder");
var __dep_export_DecoBuildingToolTipManager = require("gge-module:export_DecoBuildingToolTipManager");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_LegendSkillIconHelper = require("gge-module:export_LegendSkillIconHelper");
var __dep_export_PlaceholderToolTip = require("gge-module:export_PlaceholderToolTip");
var __dep_export_LayoutManagerErrorLOFactory = require("gge-module:export_LayoutManagerErrorLOFactory");
var __s0local0 = createjs.DisplayObject;
var __s0local1 = createjs.Container;
var __s0local2 = createjs.Event;
var __s0local3 = __dep_exact_c549e43d1112dfff.getLogger("CastleGame");
var __s0local4 = function (__s1param0) {
  function CastleLayoutManager() {
    var __s3local0 = this;
    __s3local0.lastShownDialog = "";
    __s3local0.uiCreator = new __dep_export_CastleUIComponentCreator.CastleUIComponentCreator();
    __s3local0._muteDialogs = false;
    __s3local0._dialogCastleSwitch = false;
    __s3local0._oldState = 0;
    __s3local0.defaultIngameUIComponentLayerIndex = 0;
    __s3local0._gamestageNeedsUpdate = false;
    __s3local0._gamestageUpdateThrottle = 0;
    __s3local0._uitageUpdateThrottle = 0;
    CONSTRUCTOR_HACK;
    __s3local0 = __s1param0.call(this) || this;
    if (__dep_exact_9e901e8e2483a22f_4.BasicLayoutManager.layoutManager) {
      throw new Error("Calling constructor not allowed! Use getInstance instead.");
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLayoutManager, __s1param0);
  CastleLayoutManager.getInstance = function () {
    __dep_exact_9e901e8e2483a22f_4.BasicLayoutManager.layoutManager ||= new CastleLayoutManager();
    return __dep_exact_9e901e8e2483a22f_4.BasicLayoutManager.layoutManager;
  };
  Object.defineProperty(CastleLayoutManager.prototype, "state", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f_4.BasicLayoutManager.prototype, "state").get.call(this);
    },
    set: function (__s10param0) {
      __dep_export_renderScheduler.renderScheduler.terminate();
      document.body.classList.remove("cursor-none");
      this._oldState = __dep_exact_f855840627e6e145.int(this._currentState);
      if (this.oldState != __s10param0) {
        Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f_4.BasicLayoutManager.prototype, "state").set.call(this, __s10param0);
        this.controller.dispatchEvent(new __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE_TIME_TRACKING, [this._currentState]));
      }
      if ((this.oldState == __dep_exact_9e901e8e2483a22f_4.BasicLayoutManager.STATE_CONNECT || this.oldState == __dep_exact_9e901e8e2483a22f_4.BasicLayoutManager.STATE_STARTSCREEN) && __s10param0 == CastleLayoutManager.STATE_ISO) {
        this.addAttackAlertComponent();
      }
      if (this.oldState == CastleLayoutManager.STATE_ISO && __s10param0 == CastleLayoutManager.STATE_ISO) {
        this.isoScreen.rebuildIsoRenderer();
      }
      this._currentState = __s10param0;
      __dep_exact_9e901e8e2483a22f_10.debug("layoutManager stateChange: " + this.currentState);
      this.controller.dispatchEvent(new __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, [this._currentState]));
      this.updateLayout();
      if (__s10param0 == CastleLayoutManager.STATE_WORLDMAP && __dep_export_CastleDataHolder.CastleDataHolder.instance.requestUptOnWorldmapSwitch) {
        __dep_export_CastleDataHolder.CastleDataHolder.instance.requestUptOnWorldmapSwitch = false;
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetUnsentPriceTrackingVO.C2SGetUnsentPriceTrackingVO());
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleLayoutManager.prototype.updateLayout = function () {
    if (this.worldmapScreen && this.worldmapScreen.renderer) {
      this.worldmapScreen.renderer.hideNavi();
    }
    var __s16local0 = CastleLayoutManager.LAYOUT_STRATEGIES.get(this.currentState);
    if (__s16local0) {
      try {
        __s16local0.setLayout(this, this.oldState);
      } catch (__s21local0) {
        this.reportStuckStartscreenState("layout-strategy-threw", __s21local0);
        throw __s21local0;
      }
    }
    if (this.currentState == __dep_exact_9e901e8e2483a22f_4.BasicLayoutManager.STATE_STARTSCREEN && this.isScreenActive(__dep_export_CastleIsoScreen.CastleIsoScreen)) {
      this.reportStuckStartscreenState("iso-screen-still-active", null);
    }
    this.addPopoverPanel();
    this.addKoreanPanel();
    if (__dep_export_CastleModel.CastleModel.userData.isCheater && this.isIngameState) {
      this.showPanel(__dep_export_CastleCheatPanel.CastleCheatPanel);
      var __s16local1 = this.fix_panels.get(__dep_export_CastleCheatPanel.CastleCheatPanel).disp;
      __s16local1.parent.setChildIndex(__s16local1, 0);
      this.uiStage.addChild(__s16local1);
    }
    this.controller.dispatchEvent(new __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE_FINISHED, [this._currentState]));
  };
  CastleLayoutManager.prototype.reportStuckStartscreenState = function (__s25param0, __s25param1) {
    var __s25local0 = window.bugsnagClient;
    if (__s25local0) {
      var __s25local1 = __s25param1 instanceof Error ? __s25param1 : new Error("Stuck start screen over active iso world (" + __s25param0 + ")");
      try {
        __s25local0.notify(__s25local1, {
          severity: "warning",
          metaData: {
            stuckStartscreen: {
              reason: __s25param0,
              oldState: this.oldState,
              currentState: this.currentState,
              isoScreenActive: this.isScreenActive(__dep_export_CastleIsoScreen.CastleIsoScreen),
              joinCastleCount: __dep_export_CastleModel.CastleModel.userData.joinCastleCount,
              persistentLogin: __dep_export_CastleModel.CastleModel.userData.persistentLogin,
              connectToTempServer: __dep_export_CastleModel.CastleModel.userData.connectToTempServer,
              gbdParsed: __dep_export_CastleDataHolder.CastleDataHolder.instance.gbdParsed
            }
          }
        });
      } catch (__s29local0) {}
    }
  };
  CastleLayoutManager.prototype.renderGamestage = function (__s31param0) {
    try {
      if (this._gamestageUpdateThrottle % (__s31param0.delta > 20 ? 2 : 1) == 0 || window.renderStaticStageOnNextTick) {
        if (this.gamestage) {
          this.gamestage.update(__s31param0);
        }
        this._gamestageUpdateThrottle = 1;
      } else {
        this._gamestageUpdateThrottle++;
      }
    } catch (__s37local0) {}
  };
  CastleLayoutManager.prototype.renderUIstage = function (__s39param0) {
    try {
      if (!__dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().isDisplayingAnyDialog && this.worldmapScreen && this.worldmapScreen.isVisible()) {
        if (this._uitageUpdateThrottle % (__s39param0.delta > 30 ? 2 : 1) == 0) {
          this._uiStage.update(__s39param0);
          this._uitageUpdateThrottle = 1;
        } else {
          this._uitageUpdateThrottle++;
        }
      } else if (this._uiStage) {
        this._uiStage.update(__s39param0);
      }
    } catch (__s46local0) {}
  };
  CastleLayoutManager.prototype.renderBGstage = function (__s48param0) {
    try {
      this._bgStage.update(__s48param0);
    } catch (__s51local0) {}
  };
  CastleLayoutManager.prototype.renderStaticstage = function (__s53param0) {
    try {
      this._staticStage.update(__s53param0);
    } catch (__s56local0) {}
  };
  Object.defineProperty(CastleLayoutManager.prototype, "stage", {
    get: function () {
      return this._uiStage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "uiStage", {
    get: function () {
      return this._uiStage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "bgStage", {
    get: function () {
      return this._bgStage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "staticStage", {
    get: function () {
      return this._staticStage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "gamestage", {
    get: function () {
      var __s66local0 = Object.getOwnPropertyDescriptor(__s0local0.prototype, "stage");
      if (__s66local0 && typeof __s66local0.get == "function") {
        try {
          return __s66local0.get.call(this);
        } catch (__s70local0) {
          console.warn("gamestage getter failed", __s70local0);
          return null;
        }
      }
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "castleTutorialStage", {
    get: function () {
      return this._castleTutorialStage;
    },
    enumerable: true,
    configurable: true
  });
  CastleLayoutManager.prototype.destroyPanel = function (__s74param0) {
    if (this.fix_panels.get(__s74param0)) {
      this.fix_panels.get(__s74param0).hide();
    }
  };
  Object.defineProperty(CastleLayoutManager.prototype, "muteDialogs", {
    set: function (__s77param0) {
      this._muteDialogs = __s77param0;
      if (!__s77param0) {
        __dep_exact_9e901e8e2483a22f_3.BasicDialogHandler.getInstance().init();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "tutorialPanel", {
    get: function () {
      return this._tutorialPanel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "guidancePanel", {
    get: function () {
      return this._guidancePanel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "isInEventState", {
    get: function () {
      return this.isInTreasureCamp || this.currentState == CastleLayoutManager.STATE_SEASON_WORLDMAP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "isIngameState", {
    get: function () {
      return this.currentState >= CastleLayoutManager.STATE_ISO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "isInMyCastle", {
    get: function () {
      if (this.currentState == CastleLayoutManager.STATE_ISO) {
        var __s88local0 = __dep_export_CastleModel.CastleModel.areaData.activeArea;
        if (__s88local0) {
          return __s88local0.isMyArea && !__s88local0.isUnderConquerProcess;
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "isInMyCastleBuildMode", {
    get: function () {
      return this.isInMyCastle && __dep_export_Iso.Iso.renderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILD_MODE);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "isInTreasureCamp", {
    get: function () {
      return this.currentState == CastleLayoutManager.STATE_ISO && !!__dep_export_Iso.Iso.data && __dep_export_Iso.Iso.data.areaData.isTreasureCamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "isInTreasureEvent", {
    get: function () {
      return this.currentState == CastleLayoutManager.STATE_ISO && !!__dep_export_Iso.Iso.data && __dep_export_Iso.Iso.data.areaData.isTreasureCamp || this.currentState == CastleLayoutManager.STATE_SEASON_WORLDMAP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "isInSpectatedCastle", {
    get: function () {
      if (this.currentState == CastleLayoutManager.STATE_ISO) {
        var __s98local0 = __dep_export_CastleModel.CastleModel.areaData.activeArea;
        if (__s98local0) {
          return !__s98local0.isMyArea && !__s98local0.isUnderConquerProcessByMe;
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "isOnMap", {
    get: function () {
      return this.currentState == CastleLayoutManager.STATE_WORLDMAP || this.currentState == CastleLayoutManager.STATE_WORLDMAP_RELOCATION || this.currentState == CastleLayoutManager.STATE_KINGDOMMAP || this.currentState == CastleLayoutManager.STATE_SEASON_WORLDMAP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "isInMyOccupiedCastle", {
    get: function () {
      return this.currentState == CastleLayoutManager.STATE_ISO && !!__dep_export_Iso.Iso.data && __dep_export_Iso.Iso.data.areaData.isUnderConquerProcessByMe;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "isInMyProperCastle", {
    get: function () {
      return this.isInMyCastle && !this.isInTreasureCamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "tutorialLayerSprite", {
    get: function () {
      return this.tutorialLayer;
    },
    enumerable: true,
    configurable: true
  });
  CastleLayoutManager.prototype.isInState = function (__s110param0) {
    return this._currentState == __s110param0;
  };
  Object.defineProperty(CastleLayoutManager.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleLayoutManager.prototype.initialize = function (__s114param0) {
    __s1param0.prototype.initialize.call(this, __s114param0);
    this._uiStageAnimatedUIComponents = [];
    this.gamestage.enableDOMEvents(false);
    this.gamestage.snapToPixelEnabled = true;
    this.gamestage.enableMouseOver(0);
    window.gamestage = this.gamestage;
    this.prepareUIStage();
    this.prepareTutorialStage();
    this.prepareStaticStage();
    this.prepareBGStage();
    __dep_export_CastleTimeSpendTrackingController.CastleTimeSpendTrackingController.getInstance();
    this.flashUIComponents = new Map();
    this.attackpanels = new Map();
    this.attackpanelLayer = new __s0local1();
    this.ingameUIComponentLayer = new __s0local1();
    this.ingameUIComponentLayer.mouseChildren = true;
    this.ingameTutorialLayer = new __s0local1();
    this.ingameTutorialLayer.mouseEnabled = false;
    this.panelTutorialLayer = new __s0local1();
    this.panelTutorialLayer.mouseEnabled = false;
    this.ingameMessageLayer = new __s0local1();
    this.ingameMessageLayer.mouseEnabled = false;
    this.ingameMessageLayer.mouseChildren = false;
    this.popoverLayer = new __s0local1();
    this.koreanLayer = new __s0local1();
    this.attackAlertLayer = new __s0local1();
    this.attackAlertLayer.mouseEnabled = false;
    this.attackAlertLayer.mouseChildren = false;
    this.interactiveToolTipLayer = new __s0local1();
    this.guidanceLayer = new __s0local1();
    this.staticIsoObjectLayer = new __s0local1();
    this.staticIsoObjectLayer.name = "staticIsoObjectLayer";
    this.initToolTipManager();
    this.locaLayer = new __dep_export_CastleLocationCheatPanel.CastleLocationCheatPanel();
    this.locaLayer.show();
    window.gamestage = this.gamestage;
    this.addChild(this.screenLayer);
    this.screenLayer.name = "screenLayer";
    this.addChild(this.backgroundLayer);
    this.backgroundLayer.name = "loginBackgroundLayer";
    this.staticStage.addChild(this.staticIsoObjectLayer);
    this.uiStage.addChild(this.ingameUIComponentLayer);
    this.uiStage.addChild(this.ingameTutorialLayer);
    this.uiStage.addChild(this.panelLayer);
    this.uiStage.addChild(this.panelTutorialLayer);
    this.uiStage.addChild(this.dialogLayer);
    this.uiStage.addChild(this.attackpanelLayer);
    this.uiStage.addChild(this.ingameMessageLayer);
    this.uiStage.addChild(this.guidanceLayer);
    this.uiStage.addChild(this.tutorialLayer);
    this.uiStage.addChild(this.locaLayer.disp);
    this.uiStage.addChild(this.interactiveToolTipLayer);
    this.uiStage.addChild(this.tooltipLayer);
    this.uiStage.addChild(this.adminLayer);
    this.uiStage.addChild(this._mouseLayer);
    this.uiStage.addChild(this.popoverLayer);
    this.uiStage.addChild(this.koreanLayer);
    this.uiStage.addChild(this.attackAlertLayer);
    this.defaultIngameUIComponentLayerIndex = __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f_4.BasicLayoutManager.layoutManager.getChildIndex(this.ingameUIComponentLayer));
    this.initPHPCallbacks();
    this.createIdleLayer();
    this.addAttackAlertComponent();
    this.optimizeLayersForPerformance();
    if (__dep_export_ClientConstCastle.ClientConstCastle.SHOW_FPS) {
      this.showFPS();
    }
    if (this.stage) {
      this.castleOnAddedToStage();
    } else {
      this.addEventListener(__s0local2.ADDED_TO_STAGE, this.bindFunction(this.castleOnAddedToStage));
    }
  };
  CastleLayoutManager.prototype.prepareTutorialStage = function () {
    this._castleTutorialStage = new createjs.Stage("CastleTutorial");
    this._castleTutorialStage.name = __dep_exact_81dacdf05bd32292_6.TUTORIAL_STAGE;
    this._castleTutorialStage.snapToPixelEnabled = true;
    this._castleTutorialStage.enableDOMEvents(false);
    window.tutorialStage = this._castleTutorialStage;
  };
  CastleLayoutManager.prototype.prepareBGStage = function () {
    this._bgStage = new createjs.Stage("CastleBG");
    this._bgStage.name = __dep_exact_81dacdf05bd32292_1.BG_STAGE;
    this._bgStage.snapToPixelEnabled = true;
    this._staticStage.nextStage = this._bgStage;
    this.bgStage.enableDOMEvents(false);
    this._bgStage.enableMouseOver(0);
    window.bgStage = this.bgStage;
    this.bgStage.addEventListener(__s0local2.ADDED, this.bindFunction(this.renderBGStage));
    this.bgStage.addEventListener(__s0local2.REMOVED, this.bindFunction(this.renderBGStage));
    this.bgStage.tickEnabled = this.bgStage.tickChildren = this.bgStage.tickOnUpdate = false;
  };
  CastleLayoutManager.prototype.prepareStaticStage = function () {
    this._staticStage = new createjs.Stage("CastleStatic");
    this._staticStage.name = __dep_exact_81dacdf05bd32292_4.STATIC_STAGE;
    this._staticStage.snapToPixelEnabled = true;
    this.gamestage.nextStage = this._staticStage;
    this._staticStage.enableDOMEvents(false);
    this._staticStage.enableMouseOver(0);
    window.staticStage = this._staticStage;
    this._staticStage.addEventListener(__s0local2.ADDED, this.bindFunction(this.renderBGStage));
    this._staticStage.addEventListener(__s0local2.REMOVED, this.bindFunction(this.renderBGStage));
    this._staticStage.tickEnabled = this._staticStage.tickChildren = this._staticStage.tickOnUpdate = false;
  };
  CastleLayoutManager.prototype.prepareUIStage = function () {
    this._uiStage = new createjs.Stage("CastleUI");
    this._uiStage.name = __dep_exact_81dacdf05bd32292_7.UI_STAGE;
    this._uiStage.nextStage = this.gamestage;
    this._uiStage.snapToPixelEnabled = true;
    this._uiStage.enableDOMEvents(true);
    this._uiStage.enableMouseOver(__dep_export_CastleGame.CastleGame.STAGE_MOUSEOVER_TIME);
    window.uiStage = this.uiStage;
    this.uiStage.addEventListener(__s0local2.ENTER_FRAME, this.bindFunction(this.onEnterFrameUI));
  };
  CastleLayoutManager.prototype.renderBGStage = function () {
    window.renderBgStageOnNextTick = true;
    window.renderStaticStageOnNextTick = true;
  };
  CastleLayoutManager.prototype.renderStaticStage = function () {
    window.renderStaticStageOnNextTick = true;
  };
  CastleLayoutManager.prototype.optimizeLayersForPerformance = function () {
    this.ingameMessageLayer.tickChildren = this.ingameMessageLayer.tickEnabled = false;
    this.locaLayer.disp.tickChildren = this.locaLayer.disp.tickEnabled = false;
    this.adminLayer.tickChildren = this.adminLayer.tickEnabled = false;
    this._mouseLayer.tickChildren = this._mouseLayer.tickEnabled = false;
    this.koreanLayer.tickChildren = this.koreanLayer.tickEnabled = false;
    this.attackAlertLayer.tickChildren = this.attackAlertLayer.tickEnabled = false;
  };
  CastleLayoutManager.prototype.nameLayers = function () {};
  CastleLayoutManager.prototype.castleOnAddedToStage = function (__s135param0 = null) {
    this.removeEventListener(__s0local2.ADDED_TO_STAGE, this.bindFunction(this.castleOnAddedToStage));
    this.stage.removeEventListener(__dep_exact_81dacdf05bd32292_3.FullScreenEvent.FULL_SCREEN, this.bindFunction(this.onFullScreenModeChanged));
    this.stage.addEventListener(__dep_exact_81dacdf05bd32292_3.FullScreenEvent.FULL_SCREEN, this.bindFunction(this.onFullScreenModeChanged));
    window.removeEventListener(__s0local2.RESIZE, this.bindFunction(this.onResize));
    window.addEventListener(__s0local2.RESIZE, this.bindFunction(this.onResize));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
    this.controller.addEventListener(__dep_export_IsoEvent.IsoEvent.ON_RENDERER_READY, this.bindFunction(this.onIsoRendererReady));
    this.onResize();
  };
  CastleLayoutManager.prototype.onIsoRendererReady = function (__s137param0) {
    __dep_export_CastleModel.CastleModel.settingsData.isLoginReady = true;
  };
  CastleLayoutManager.prototype.onResize = function (__s139param0 = null) {
    if (!__dep_exact_81dacdf05bd32292_1.currentBrowserInfo.isMobile || !__dep_exact_81dacdf05bd32292_1.TextField.isMobileKeyboardShown) {
      var __s139local0 = window.devicePixelRatio || 1;
      var __s139local1 = [this.gamestage, this.uiStage, this.bgStage, this.staticStage, this.castleTutorialStage];
      if (__dep_exact_81dacdf05bd32292_1.currentBrowserInfo.isMobile) {
        __s139local1.forEach(function (__s143param0) {
          var __s143local0 = __s143param0 && __s143param0.canvas;
          if (__s143local0) {
            __s143local0.style.width = "100%";
            __s143local0.style.height = "100%";
          }
        });
      }
      var __s139local2 = document.documentElement.clientWidth;
      var __s139local3 = document.documentElement.clientHeight;
      if (__s139local2 <= 0 || __s139local3 <= 0 || !isFinite(__s139local0) || __s139local0 <= 0) {
        console.warn("onResize: Invalid window dimensions or DPR, skipping resize", __s139local2, __s139local3, __s139local0);
      } else {
        for (var __s139local4 = 0; __s139local4 < __s139local1.length; __s139local4++) {
          var __s139local5 = __s139local1[__s139local4];
          if (__s139local5) {
            __s139local5.setBounds(0, 0, __s139local2, __s139local3);
            try {
              this.fixCanvasSize(__s139local5.canvas, __s139local2, __s139local3, __s139local0);
            } catch (__s152local0) {
              console.warn("fixCanvasSize function failed! more info: " + __s139local5.canvas.width + " " + __s139local5.canvas.height + " " + __s139local2 + " " + __s139local3 + " " + __s139local0 + " " + __s152local0);
            }
            __s139local5.scaleX = __s139local5.scaleY = __s139local0;
          }
        }
        this.controller.dispatchEvent(new __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.ON_RESIZE));
        this.updateGameStage();
        this.renderBGStage();
      }
    }
  };
  CastleLayoutManager.prototype.fixCanvasSize = function (__s154param0, __s154param1, __s154param2, __s154param3) {
    if (!__s154param0 || __s154param1 <= 0 || __s154param2 <= 0 || !isFinite(__s154param1) || !isFinite(__s154param2) || !isFinite(__s154param3) || __s154param3 <= 0) {
      console.warn("fixCanvasSize: Invalid canvas dimensions", __s154param1, __s154param2, __s154param3);
    } else {
      __s154param0.style.width = __s154param1 + "px";
      __s154param0.style.height = __s154param2 + "px";
      __s154param0.width = Math.round(__s154param1 * __s154param3);
      __s154param0.height = Math.round(__s154param2 * __s154param3);
      var __s154local0 = __s154param0.getContext("2d");
      if (__s154local0) {
        __s154local0.scale(__s154param3, __s154param3);
      } else {
        console.warn("fixCanvasSize: Failed to get 2D context for canvas", __s154param0.id);
      }
    }
  };
  CastleLayoutManager.prototype.onFullScreenModeChanged = function (__s160param0) {
    this.stage.addEventListener(__s0local2.ENTER_FRAME, this.bindFunction(this.onNextFrameAfterFullscreenChanged));
  };
  CastleLayoutManager.prototype.onNextFrameAfterFullscreenChanged = function (__s162param0) {
    this.stage.removeEventListener(__s0local2.ENTER_FRAME, this.bindFunction(this.onNextFrameAfterFullscreenChanged));
    this.controller.dispatchEvent(new __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_DISPLAYSTATE, [this.stage.displayState]));
  };
  CastleLayoutManager.prototype.isDialogVisibleByName = function (__s164param0) {
    if (this.fix_dialogs != null) {
      for (var __s164local0 = 0, __s164local1 = Array.from(this.fix_dialogs.values()); __s164local0 < __s164local1.length; __s164local0++) {
        var __s164local2 = __s164local1[__s164local0];
        if (__s164local2 !== undefined && __s164local2 && (typeof __s164param0 == "string" && __s164local2.constructor.NAME == __s164param0 || typeof __s164param0 == "function" && __s164local2.constructor == __s164param0)) {
          if (__dep_exact_81dacdf05bd32292_10.instanceOfClass(__s164local2, "CastleExternalDialog")) {
            return __s164local2.isVisible() && !!__s164local2.loaded;
          } else {
            return __s164local2.isVisible();
          }
        }
      }
    }
    return false;
  };
  CastleLayoutManager.prototype.hideAllDialogsExcept = function (__s172param0) {
    if (this.fix_dialogs != null) {
      for (var __s172local0 = 0, __s172local1 = Array.from(this.fix_dialogs.values()); __s172local0 < __s172local1.length; __s172local0++) {
        var __s172local2 = __s172local1[__s172local0];
        if (__s172local2 !== undefined && __s172local2.isVisible() && __s172param0.indexOf(__s172local2.constructor) < 0) {
          __s172local2.hide();
        }
      }
    }
  };
  CastleLayoutManager.prototype.onAllianceStatusChanged = function (__s178param0) {
    if (__dep_export_CastleDataHolder.CastleDataHolder.instance.gbdParsed && __dep_export_CastleModel.CastleModel.userData) {
      this.state = this._currentState;
    }
    if (this.worldmapScreen && this.worldmapScreen.renderer) {
      this.worldmapScreen.renderer.invalidateMap();
      this.worldmapScreen.renderer.invalideteMovements();
    }
  };
  CastleLayoutManager.prototype.showPanelRedirecter = function (__s182param0, __s182param1, __s182param2) {
    this.showPanel(__s182param0, __s182param1, __s182param2);
  };
  CastleLayoutManager.prototype.showDialogRedirecter = function (__s184param0, __s184param1, __s184param2) {
    this.showDialog(__s184param0, __s184param1, __s184param2);
  };
  CastleLayoutManager.prototype.showDialog = function (__s186param0, __s186param1 = null, __s186param2 = null) {
    if (__s186param0 != "DummyForServer") {
      if (this._muteDialogs) {
        __dep_exact_9e901e8e2483a22f_3.BasicDialogHandler.getInstance().removeDialog(__s186param0);
      } else {
        try {
          if (__s186param0.NAME && __s186param0.NAME != "CastleExternalPreloaderDialog") {
            if (this.dialogs.get(__s186param0) && this.dialogs.get(__s186param0).dialogClassName) {
              __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.lastShownDialog = this.dialogs.get(__s186param0).dialogClassName;
            } else if (typeof __s186param0 == "string") {
              __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.lastShownDialog = String(__s186param0);
            } else if (__s186param0.NAME) {
              __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.lastShownDialog = __s186param0.NAME;
            } else {
              __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.lastShownDialog = "";
            }
          }
          __s1param0.prototype.showDialog.call(this, __s186param0, __s186param1, __s186param2);
        } catch (__s197local0) {
          var __s186local0 = typeof __s186param0 == "string" ? String(__s186param0) : __s186param0.NAME;
          __s0local3.error("Error during displaying dialog! ", __s197local0);
          console.log("Error during displaying dialog: dialogKey: " + __s186param0 + ", properties: " + __s186param1 + ", layer: " + __s186param2);
          __dep_exact_9e901e8e2483a22f_7.ExternalLog.logger.log(new __dep_export_LayoutManagerErrorLOFactory.LayoutManagerErrorLOFactory(__s197local0, __s186local0));
        }
        __dep_export_TooltipManagerFacade.TooltipManagerFacade.hideAllTooltips();
        this.nativeCursor.stopAllDrag();
        this.controller.dispatchEvent(new __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.SHOW_DIALOG, [__s186param0]));
        if (this.gamestage) {
          this.gamestage.update();
          this.gamestage.tickEnabled = false;
        }
      }
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().blockDialogs = false;
    }
  };
  CastleLayoutManager.prototype.showFlashUIComponent = function (__s201param0, __s201param1) {
    var __s201local0;
    if (__s201param1 === undefined) {
      __s201param1 = null;
    }
    if (this.flashUIComponents.get(__s201param0)) {
      (__s201local0 = this.flashUIComponents.get(__s201param0)).setProperties(__s201param1);
    } else {
      (__s201local0 = this.createFlashComponent(__s201param0)).disp.visible = false;
      this.flashUIComponents.set(__s201param0, __s201local0);
      __s201local0.setProperties(__s201param1);
      this.panelLayer.addChild(__s201local0.disp);
    }
    if (!__s201local0.isVisible()) {
      __s201local0.show();
    }
  };
  CastleLayoutManager.prototype.getIngameUIComponent = function (__s207param0) {
    if (this.ingameUIComponents) {
      return this.ingameUIComponents.get(__s207param0);
    } else {
      return null;
    }
  };
  CastleLayoutManager.prototype.hideFlashUIComponent = function (__s211param0) {
    var __s211local0;
    if (this.flashUIComponents.get(__s211param0) && (__s211local0 = this.flashUIComponents.get(__s211param0)).isVisible()) {
      __s211local0.hide();
    }
  };
  CastleLayoutManager.prototype.clearAllFlashUIComponents = function () {
    if (this.flashUIComponents != null) {
      for (var __s214local0 = 0, __s214local1 = Array.from(this.flashUIComponents.values()); __s214local0 < __s214local1.length; __s214local0++) {
        var __s214local2 = __s214local1[__s214local0];
        if (__s214local2 !== undefined) {
          __s214local2.hide();
          __s214local2.destroy();
          __s214local2.disp.parent.removeChild(__s214local2.disp);
        }
      }
    }
    this.flashUIComponents = new Map();
  };
  CastleLayoutManager.prototype.checkWaitingAnimState = function (__s220param0) {
    if (this.fix_dialogs != null) {
      for (var __s220local0 = 0, __s220local1 = Array.from(this.fix_dialogs.values()); __s220local0 < __s220local1.length; __s220local0++) {
        __s220local1[__s220local0].checkWaitingAnimState(__s220param0);
      }
    }
    if (this.fix_panels != null) {
      for (var __s220local2 = 0, __s220local3 = Array.from(this.fix_panels.values()); __s220local2 < __s220local3.length; __s220local2++) {
        __s220local3[__s220local2].checkWaitingAnimState(__s220param0);
      }
    }
  };
  CastleLayoutManager.prototype.toggleFullscreen = function (__s228param0) {
    var __s228local0 = this;
    if (__s228param0 === undefined) {
      __s228param0 = false;
    }
    if (!this.isDocumentHidden()) {
      var __s228local1 = window.document;
      var __s228local2 = !!__s228local1.fullscreenElement || !!__s228local1.webkitFullscreenElement || !!__s228local1.mozFullScreenElement || !!__s228local1.msFullscreenElement;
      if (this.stage.displayState == __dep_exact_81dacdf05bd32292_5.StageDisplayState.FULL_SCREEN && __s228local2) {
        if (__s228param0) {
          return;
        }
        this.revertFullscreen();
      } else {
        try {
          var __s228local3 = document.body;
          var __s228local4 = undefined;
          if (__dep_exact_81dacdf05bd32292_2.ExternalInterface.available) {
            __dep_exact_81dacdf05bd32292_2.ExternalInterface.call("UIButtonClicked", ["fullscreen.on"]);
          } else if (__s228local3.msRequestFullscreen) {
            __s228local4 = __s228local3.msRequestFullscreen();
          } else if (__s228local3.mozRequestFullScreen) {
            __s228local4 = __s228local3.mozRequestFullScreen();
          } else if (__s228local3.webkitRequestFullscreen) {
            __s228local4 = __s228local3.webkitRequestFullscreen();
          } else if (__s228local3.requestFullscreen) {
            __s228local4 = __s228local3.requestFullscreen();
          }
          if (__s228local4 && __s228local4.catch) {
            __s228local4.catch(function (__s242param0) {
              __s228local0.stage.displayState = __dep_exact_81dacdf05bd32292_5.StageDisplayState.NORMAL;
              __dep_exact_9e901e8e2483a22f_11.warn("ERROR: Could not switch to FULL_SCREEN:", __s242param0);
            });
          }
          this.stage.displayState = __dep_exact_81dacdf05bd32292_5.StageDisplayState.FULL_SCREEN;
        } catch (__s244local0) {
          __dep_exact_9e901e8e2483a22f_11.warn("ERROR: Could not switch to FULL_SCREEN:", __s244local0);
        }
      }
    }
  };
  CastleLayoutManager.prototype.revertFullscreen = function () {
    if (!this.isDocumentHidden()) {
      var __s246local0 = this.stage.displayState;
      this.stage.displayState = __dep_exact_81dacdf05bd32292_5.StageDisplayState.NORMAL;
      if (__dep_exact_81dacdf05bd32292_2.ExternalInterface.available) {
        __dep_exact_81dacdf05bd32292_2.ExternalInterface.call("UIButtonClicked", ["fullscreen.off"]);
        this.controller.dispatchEvent(new __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_DISPLAYSTATE, [this.stage.displayState]));
      } else {
        __s1param0.prototype.revertFullscreen.call(this);
      }
      if (this.stage.displayState != __s246local0) {
        this.controller.dispatchEvent(new __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_DISPLAYSTATE, [this.stage.displayState]));
      }
    }
  };
  CastleLayoutManager.prototype.clearAllLayoutContent = function () {
    if (this.customCursor) {
      this.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f_2.BasicCustomCursor.CURSOR_ARROW);
    }
    this.removeTutorialPanel();
    this.removeGuidancePanel();
    this.removeTutorialArrows();
    this.removeAllIngameUIComponents();
    this.clearAllDialogs();
    this.clearAllPanels();
    this.clearAllFlashUIComponents();
    this.clearToolTipLayer();
    this.initToolTipManager();
    this.destroyAllScreens();
    this.removeKoreanPanel();
    this.removePopoverPanel();
    this.removeAttackAlertFrame();
    __dep_exact_9e901e8e2483a22f_8.GoodgameTextFieldManager.getInstance().unregisterAllTextFields();
  };
  CastleLayoutManager.prototype.clearAllDialogs = function () {
    var __s255local0;
    if (this.fix_dialogs != null) {
      for (var __s255local1 = 0, __s255local2 = Array.from(this.fix_dialogs.keys()); __s255local1 < __s255local2.length; __s255local1++) {
        if ((__s255local0 = __s255local2[__s255local1]) !== undefined) {
          var __s255local3 = __dep_exact_81dacdf05bd32292_8.castAs(this.fix_dialogs.get(__s255local0), "BasicDialog");
          if (__s255local3) {
            __s255local3.hide();
            __s255local3.destroy();
            if (__s255local3.disp && __s255local3.disp.parent == this.dialogLayer) {
              this.dialogLayer.removeChild(__s255local3.disp);
            }
            if (__s255local3.disp && __s255local3.disp.parent == this.adminLayer) {
              this.adminLayer.removeChild(__s255local3.disp);
            }
          }
        }
      }
    }
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().clearAllRegisteredDialogs();
    this.dialogs = new Map();
  };
  CastleLayoutManager.prototype.createFlashComponent = function (__s264param0) {
    return this.uiCreator.createFlashComponent(__s264param0);
  };
  CastleLayoutManager.prototype.showIngameUIComponent = function (__s266param0, __s266param1, __s266param2) {
    var __s266local0;
    if (__s266param2 === undefined) {
      __s266param2 = -1;
    }
    this.ingameUIComponents ||= new Map();
    if (__s266param2 == -1) {
      __s266param2 = this.defaultIngameUIComponentLayerIndex;
    }
    if (this.ingameUIComponentLayer.parent.getChildIndex(this.ingameUIComponentLayer) != __s266param2) {
      this.ingameUIComponentLayer.parent.setChildIndex(this.ingameUIComponentLayer, __s266param2);
    }
    if (this.ingameUIComponents.get(__s266param0)) {
      __s266local0 = this.ingameUIComponents.get(__s266param0);
    } else {
      var __s266local1 = this.createFlashComponent(__s266param0);
      if (__dep_exact_81dacdf05bd32292_10.instanceOfClass(__s266local1, "BasicIngameUIComponent") && (__s266local0 = __s266local1, this.ingameUIComponents.set(__s266param0, __s266local0), this.ingameUIComponentLayer.addChild(__s266local0.disp), __dep_exact_81dacdf05bd32292_10.instanceOfClass(__s266local0, "AnimatedFlashUIComponent"))) {
        var __s266local2 = __s266local0;
        this.addUIStageAnimUIComponent(__s266local2);
      }
    }
    if (__s266local0.isPermanent && !__s266local0.isVisible()) {
      this.hideAllIngameUIComponents();
    } else {
      this.hideAllNonPermanentUIComponents();
    }
    __s266local0.target = __s266param1;
    if (__dep_exact_81dacdf05bd32292_10.instanceOfClass(__s266local0, "AnimatedFlashUIComponent")) {
      var __s266local3 = __s266local0;
      this.addUIStageAnimUIComponent(__s266local3);
    }
    __s266local0.show();
    if (__dep_exact_81dacdf05bd32292_10.instanceOfClass(__s266local0, "FlashUIComponent")) {
      return __s266local0;
    } else {
      return null;
    }
  };
  CastleLayoutManager.prototype.hideAllNonPermanentUIComponents = function () {
    var __s279local0 = false;
    if (this.ingameUIComponents != null) {
      for (var __s279local1 = 0, __s279local2 = Array.from(this.ingameUIComponents.values()); __s279local1 < __s279local2.length; __s279local1++) {
        var __s279local3 = __s279local2[__s279local1];
        if (__s279local3 !== undefined) {
          if (!__s279local3.isPermanent) {
            __s279local3.hide();
            __s279local0 = true;
          }
        }
      }
    }
    return __s279local0;
  };
  CastleLayoutManager.prototype.hideIngameUIComponent = function (__s286param0) {
    if (this.ingameUIComponents && this.ingameUIComponents.get(__s286param0)) {
      this.ingameUIComponents.get(__s286param0).hide();
    }
  };
  CastleLayoutManager.prototype.hideAllIngameUIComponents = function () {
    var __s289local0 = false;
    if (this.ingameUIComponents != null) {
      for (var __s289local1 = 0, __s289local2 = Array.from(this.ingameUIComponents.values()); __s289local1 < __s289local2.length; __s289local1++) {
        var __s289local3 = __s289local2[__s289local1];
        if (__s289local3 !== undefined) {
          __s289local3.hide();
          __s289local0 = true;
        }
      }
    }
    if (this.worldmapScreen && this.worldmapScreen.renderer) {
      this.worldmapScreen.renderer.hideLines();
      __s289local0 = true;
    }
    return __s289local0;
  };
  CastleLayoutManager.prototype.hideWorldmapIngameUIComponents = function () {
    var __s296local0 = false;
    if (this.ingameUIComponents != null) {
      for (var __s296local1 = 0, __s296local2 = Array.from(this.ingameUIComponents.values()); __s296local1 < __s296local2.length; __s296local1++) {
        var __s296local3 = __s296local2[__s296local1];
        if (__s296local3 && __s296local3.isVisible()) {
          __s296local3.hide();
          __s296local0 = true;
        }
      }
    }
    return __s296local0;
  };
  CastleLayoutManager.prototype.hideAllRingMenus = function () {
    var __s302local0 = false;
    if (this.ingameUIComponents != null) {
      for (var __s302local1 = 0, __s302local2 = Array.from(this.ingameUIComponents.values()); __s302local1 < __s302local2.length; __s302local1++) {
        var __s302local3 = __s302local2[__s302local1];
        if (__s302local3 !== undefined) {
          if (__dep_exact_81dacdf05bd32292_10.instanceOfClass(__s302local3, "RingMenuBuilding")) {
            __s302local3.hide();
            __s302local0 = true;
          }
          if (__dep_exact_81dacdf05bd32292_10.instanceOfClass(__s302local3, "WorldMapRingMenu")) {
            __s302local3.hide();
            __s302local0 = true;
          }
        }
      }
    }
    return __s302local0;
  };
  CastleLayoutManager.prototype.hideWorldMapCastleInfoMenuWithMapObject = function (__s310param0) {
    if (this.ingameUIComponents != null) {
      for (var __s310local0 = 0, __s310local1 = Array.from(this.ingameUIComponents.values()); __s310local0 < __s310local1.length; __s310local0++) {
        var __s310local2 = __s310local1[__s310local0];
        if (__s310local2 !== undefined && __dep_exact_81dacdf05bd32292_10.instanceOfClass(__s310local2, "WorldMapCastleInfoMenu") && __s310local2.hideWithSpecificMapObject(__s310param0)) {
          return;
        }
      }
    }
  };
  CastleLayoutManager.prototype.removeAllIngameUIComponents = function () {
    if (this.ingameUIComponents != null) {
      for (var __s316local0 = 0, __s316local1 = Array.from(this.ingameUIComponents.values()); __s316local0 < __s316local1.length; __s316local0++) {
        var __s316local2 = __s316local1[__s316local0];
        if (__s316local2 !== undefined) {
          __s316local2.hide();
          __s316local2.destroy();
          __s316local2.disp.parent.removeChild(__s316local2.disp);
          this.removeUIStageAnimUIComponent(__s316local2);
          __s316local2 = null;
        }
      }
    }
    this.ingameUIComponents = null;
  };
  CastleLayoutManager.prototype.hideDialog = function (__s322param0) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().removeDialog(__s322param0);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().removeDialog(__s322param0.NAME);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().removeDialog(__s322param0.PO_NAME);
    if (this.fix_dialogs != null) {
      for (var __s322local0 = 0, __s322local1 = Array.from(this.fix_dialogs.values()); __s322local0 < __s322local1.length; __s322local0++) {
        var __s322local2 = __s322local1[__s322local0];
        if (__s322local2 !== undefined && __s322local2 && (typeof __s322param0 == "string" && __s322local2.constructor.NAME == __s322param0 || typeof __s322param0 == "function" && __s322local2 instanceof __s322param0) && (__dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().removeDisplayedDialogFromList(__s322param0) || __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().removeDisplayedDialogFromList(__s322param0.NAME) || __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().removeDisplayedDialogFromList(__s322param0.PO_NAME))) {
          this.controller.dispatchEvent(new __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.HIDE_DIALOG, [__s322param0]));
          if (__s322local2.isVisible()) {
            __s322local2.hide();
          }
        }
      }
    }
    if (!__dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().isDisplayingAnyDialog) {
      if (this.gamestage) {
        this.gamestage.tickEnabled = true;
      }
    }
  };
  CastleLayoutManager.prototype.hideDialogWithDialogKey = function (__s331param0) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().removeDialog(__s331param0);
    if (this.fix_dialogs && this.fix_dialogs.get(__s331param0) !== undefined) {
      var __s331local0 = this.fix_dialogs.get(__s331param0);
      if (__dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().removeDisplayedDialogFromList(__s331param0)) {
        this.controller.dispatchEvent(new __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.HIDE_DIALOG, [__s331param0]));
        if (__s331local0.isVisible()) {
          __s331local0.hide();
        }
      }
    }
    if (!__dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().isDisplayingAnyDialog) {
      if (this.gamestage) {
        this.gamestage.tickEnabled = true;
      }
    }
  };
  CastleLayoutManager.prototype.showEventBuildingPanel = function (__s338param0 = null) {
    var __s338local0 = CastleLayoutManager.LAYOUT_STRATEGIES.get(CastleLayoutManager.STATE_ISO);
    __s338local0.eventBuildingPanelProperties = __s338param0;
    __s338local0.openEventPanelFlag = true;
    if (!this.isInState(CastleLayoutManager.STATE_ISO)) {
      this.state = CastleLayoutManager.STATE_ISO;
    }
    if (__dep_export_Iso.Iso.renderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILD_MODE)) {
      __dep_export_Iso.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(false);
    }
    __dep_export_Iso.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
    __s338local0.openEventPanelFlag = false;
  };
  CastleLayoutManager.prototype.changeScreen = function (__s342param0, __s342param1) {
    if (this.fix_screens != null) {
      for (var __s342local0 = 0, __s342local1 = Array.from(this.fix_screens.values()); __s342local0 < __s342local1.length; __s342local0++) {
        var __s342local2 = __s342local1[__s342local0];
        if (__s342local2 !== undefined && __s342local2 != this.fix_screens.get(__s342param0) && __s342local2.isVisible()) {
          __s342local2.hide();
          this.screenLayer.removeChild(__s342local2.disp);
        }
      }
    }
    var __s342local3 = this.showScreen(__s342param0, __s342param1);
    var __s342local4 = false;
    switch (__s342param0) {
      case __dep_export_CastleIsoScreen.CastleIsoScreen:
        this.isoScreen = __s342local3;
        __s342local4 = true;
        break;
      case __dep_export_CastleWorldMapScreen.CastleWorldMapScreen:
        this.worldmapScreen = __s342local3;
    }
    this.controller.dispatchEvent(new __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.SCREEN_CHANGED, [__s342local4]));
    return __s342local3;
  };
  CastleLayoutManager.prototype.showScreen = function (__s349param0, __s349param1) {
    if (this.screens.get(__s349param0)) {
      var __s349local0 = this.screens.get(__s349param0);
      if (__s349local0.disp.parent != this.screenLayer) {
        this.screenLayer.addChild(__s349local0.disp);
      }
    }
    return __s1param0.prototype.showScreen.call(this, __s349param0, __s349param1);
  };
  CastleLayoutManager.prototype.isScreenActive = function (__s353param0) {
    return !!this.fix_screens.get(__s353param0) && this.fix_screens.get(__s353param0).isVisible();
  };
  CastleLayoutManager.prototype.removeTutorialArrows = function () {
    __dep_export_CastleTutorialArrowController.CastleTutorialArrowController.instance.clear();
    __dep_export_CastleTutorialClickBlocker.CastleTutorialClickBlocker.instance.clear();
    __dep_export_CastleTutorialSpotlight.CastleTutorialSpotlight.instance.clear();
    __dep_export_CastleTutorialDialogFilter.CastleTutorialDialogFilter.instance.clear();
  };
  CastleLayoutManager.prototype.removeTutorialPanel = function () {
    if (this._tutorialPanel) {
      this.castleTutorialStage.removeChild(this._tutorialPanel.disp);
      this._tutorialPanel = null;
    }
  };
  CastleLayoutManager.prototype.removeGuidancePanel = function () {
    if (this._guidancePanel) {
      this.guidanceLayer.removeChild(this._guidancePanel.disp);
      this._guidancePanel = null;
    }
  };
  CastleLayoutManager.prototype.switchKoreanLayerToFront = function (__s363param0) {
    var __s363local0 = __s363param0 ? this.uiStage.numChildren - 1 : this.uiStage.getChildIndex(this.panelLayer) - 1;
    this.uiStage.setChildIndex(this.koreanLayer, __s363local0);
  };
  CastleLayoutManager.prototype.removeKoreanPanel = function () {
    if (this._koreanPanel) {
      this.koreanLayer.removeChild(this._koreanPanel.disp);
      this._koreanPanel.destroy();
      this._koreanPanel = null;
    }
  };
  CastleLayoutManager.prototype.removeAttackAlertFrame = function () {
    if (this.attackAlertComponent) {
      this.attackAlertLayer.removeChild(this.attackAlertComponent.panelDisp);
      this.attackAlertComponent.destroy();
      this.attackAlertComponent = null;
      __dep_exact_9e901e8e2483a22f_9.MovieClipHelper.clearMovieClip(this.attackAlertLayer);
    }
  };
  CastleLayoutManager.prototype.destroyAllScreens = function () {
    if (this.fix_screens != null) {
      for (var __s371local0 = 0, __s371local1 = Array.from(this.fix_screens.values()); __s371local0 < __s371local1.length; __s371local0++) {
        var __s371local2 = __s371local1[__s371local0];
        if (__s371local2 !== undefined) {
          __s371local2.hide();
        }
      }
    }
  };
  CastleLayoutManager.prototype.showIngameMessage = function (__s377param0, __s377param1 = null) {
    this.showDialog(__s377param0, __s377param1, this.ingameMessageLayer);
  };
  CastleLayoutManager.prototype.hideAllAttackPanels = function () {
    if (this.attackpanels != null) {
      for (var __s379local0 = 0, __s379local1 = Array.from(this.attackpanels.values()); __s379local0 < __s379local1.length; __s379local0++) {
        var __s379local2 = __s379local1[__s379local0];
        if (__s379local2 !== undefined && __s379local2.isVisible()) {
          __s379local2.hide();
        }
      }
    }
  };
  CastleLayoutManager.prototype.addTutorialPanel = function () {
    if (!this._tutorialPanel) {
      this._tutorialPanel = new __dep_export_CastleTutorialPanel.CastleTutorialPanel(new Library.CastleInterfaceElements.TutorialPanel());
      this.castleTutorialStage.addChild(this._tutorialPanel.disp);
      this._tutorialPanel.hide();
    }
  };
  CastleLayoutManager.prototype.addGuidancePanel = function () {
    if (!this._guidancePanel) {
      this._guidancePanel = new __dep_export_GuidancePanel.GuidancePanel();
      this.guidanceLayer.addChild(this._guidancePanel.disp);
      this._guidancePanel.hide();
    }
  };
  CastleLayoutManager.prototype.addKoreanPanel = function () {
    if (!this._koreanPanel) {
      this._koreanPanel = new __dep_export_IdentityManagementView.IdentityManagementView();
      this.koreanLayer.addChild(this._koreanPanel.disp);
      this._koreanPanel.show();
    }
    if (this.env.currentCountryLanguageCode != "ko" || this.env.isIdentityManagementActive) {
      if (this.env.currentCountryLanguageCode != "ko" && this.env.isIdentityManagementActive) {
        __dep_exact_9e901e8e2483a22f_6.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f_1.BasicController.COMMAND_IDENTITY_MANAGEMENT, false);
      }
    } else {
      __dep_exact_9e901e8e2483a22f_6.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f_1.BasicController.COMMAND_IDENTITY_MANAGEMENT, true);
    }
    if (__dep_exact_9e901e8e2483a22f_5.BasicModel.identityManagement && __dep_exact_9e901e8e2483a22f_5.BasicModel.identityManagement.showStuff) {
      __dep_exact_9e901e8e2483a22f_5.BasicModel.identityManagement.resetLicenseTimer();
      __dep_exact_9e901e8e2483a22f_5.BasicModel.identityManagement.showStuff = false;
    }
  };
  CastleLayoutManager.prototype.addPopoverPanel = function () {
    if (!this.popoverPanel) {
      this.popoverPanel = new __dep_export_PopoverPanel.PopoverPanel();
      this.popoverLayer.addChild(this.popoverPanel.disp);
      this.popoverPanel.show();
    }
  };
  CastleLayoutManager.prototype.removePopoverPanel = function () {
    if (this.popoverPanel) {
      this.popoverPanel.hide();
      this.popoverLayer.removeChild(this.popoverPanel.disp);
      this.popoverPanel.destroy();
      this.popoverPanel = null;
    }
  };
  CastleLayoutManager.prototype.addAttackAlertComponent = function () {
    if (this.attackAlertLayer && !this.attackAlertComponent) {
      this.attackAlertComponent = new __dep_export_CastleAttackAlertFrameComponent.CastleAttackAlertFrameComponent();
      this.attackAlertLayer.addChild(this.attackAlertComponent.panelDisp);
    }
  };
  CastleLayoutManager.prototype.initToolTipManager = function () {
    this.tooltipManager = new __dep_export_CastleToolTipManager.CastleToolTipManager(this.tooltipLayer, __dep_exact_81dacdf05bd32292.getDefinitionByName("Tooltip_Body"), __dep_exact_81dacdf05bd32292.getDefinitionByName("Tooltip_Arrow"));
    this.tooltipLayer.addChild(__dep_export_EquipmentIconHelper.EquipmentIconHelper.equipToolTip.disp);
    this.tooltipLayer.addChild(__dep_export_EquipmentIconHelper.EquipmentIconHelper.relicEquipToolTip.disp);
    this.tooltipLayer.addChild(__dep_export_DecoBuildingToolTipManager.DecoBuildingToolTipManager.initDisp);
    this.tooltipLayer.addChild(__dep_export_CastleFusionCompareToolTip.CastleFusionCompareToolTip.initDisp);
    this.tooltipLayer.addChild(__dep_export_LegendSkillIconHelper.LegendSkillIconHelper.disp);
    this.tooltipLayer.addChild(__dep_export_ConstructionItemTooltipHelper.ConstructionItemTooltipHelper.disp);
    this.tooltipLayer.addChild(__dep_export_MaterialBagTooltipHelper.MaterialBagTooltipHelper.disp);
    this.tooltipLayer.addChild(__dep_export_LordEffectHelper.LordEffectHelper.disp);
    this.tooltipLayer.addChild(__dep_export_GeneralsSkillTooltipHelper.GeneralsSkillTooltipHelper.disp);
    this.tooltipLayer.addChild(__dep_export_TextDarkTooltip.TextDarkTooltip.getInstance().disp);
    this.tooltipLayer.addChild(__dep_export_PlaceholderToolTip.PlaceholderToolTip.disp);
    __dep_export_TooltipManagerFacade.TooltipManagerFacade.hideAllTooltips();
  };
  CastleLayoutManager.prototype.addInteractiveToolTip = function (__s409param0) {
    if (!this.interactiveToolTipLayer.contains(__s409param0)) {
      this.interactiveToolTipLayer.addChild(__s409param0);
    }
  };
  CastleLayoutManager.prototype.clearToolTipLayer = function () {
    this.tooltipManager.destroy();
    __dep_exact_9e901e8e2483a22f_9.MovieClipHelper.clearMovieClip(this.tooltipLayer);
    __dep_exact_9e901e8e2483a22f_9.MovieClipHelper.clearMovieClip(this.interactiveToolTipLayer);
  };
  CastleLayoutManager.prototype.initPHPCallbacks = function () {
    __dep_exact_81dacdf05bd32292_2.ExternalInterface.addCallback("showPrePaymentDialog", this.bindFunction(this.showPaymentSite));
  };
  CastleLayoutManager.prototype.showPaymentSite = function () {
    __dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.open(__dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.SOURCE_NETWORK_PANEL, __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.SOURCE_NETWORK_PANEL);
  };
  Object.defineProperty(CastleLayoutManager.prototype, "nativeCursor", {
    get: function () {
      return this.customCursor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "dialogCastleSwitch", {
    get: function () {
      return this._dialogCastleSwitch;
    },
    set: function (__s422param0) {
      this._dialogCastleSwitch = __s422param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleLayoutManager.prototype.findLayer = function (__s424param0) {
    if (!__s424param0) {
      return null;
    }
    var __s424local0;
    do {
      __s424local0 = __s424param0;
      __s424param0 = __s424param0.parent;
    } while (__s424param0 && __s424param0 != this && __s424param0 != this.uiStage && __s424param0 != this.root);
    if (__s424param0 != this && __s424param0 != this.uiStage) {
      return null;
    } else {
      return __s424local0;
    }
  };
  CastleLayoutManager.prototype.getTutorialLayer = function (__s431param0) {
    switch (this.findLayer(__s431param0)) {
      case this.backgroundLayer:
      case this.screenLayer:
      case this.ingameUIComponentLayer:
      case this.ingameTutorialLayer:
        return this.ingameTutorialLayer;
      case this.panelLayer:
      case this.panelTutorialLayer:
        return this.panelTutorialLayer;
      case this.dialogLayer:
      case this.attackpanelLayer:
      case this.ingameMessageLayer:
      case this.tutorialLayer:
        return this.tutorialLayer;
      default:
        console.warn("error getting tutorial layer - target is not in a layer managed by the layout manager");
        return this.tutorialLayer;
    }
  };
  CastleLayoutManager.prototype.getLayerInDialogLayer = function (__s434param0) {
    if (__s434param0.parent == this.dialogLayer) {
      return __s434param0;
    } else if (__s434param0 == this.stage) {
      return __s434param0;
    } else {
      return this.getLayerInDialogLayer(__s434param0.parent);
    }
  };
  Object.defineProperty(CastleLayoutManager.prototype, "highestShownDialog", {
    get: function () {
      var __s439local0;
      var __s439local1;
      var __s439local2 = null;
      if (this.fix_dialogs != null) {
        for (var __s439local3 = 0, __s439local4 = Array.from(this.fix_dialogs.values()); __s439local3 < __s439local4.length; __s439local3++) {
          var __s439local5 = __s439local4[__s439local3];
          if (__s439local5 !== undefined && this.dialogLayer.contains(__s439local5.disp)) {
            __s439local1 = __dep_exact_81dacdf05bd32292_10.instanceOfClass(__s439local5, "CastleExternalDialog") ? __s439local5.disp.parent == this.dialogLayer ? __s439local5.disp : __s439local5.disp.parent : __s439local5.disp;
            if (__s439local2 != null) {
              if (__s439local5 && __s439local5.isVisible() && this.dialogLayer.getChildIndex(__s439local1) > this.dialogLayer.getChildIndex(__s439local0)) {
                __s439local2 = __s439local5;
                __s439local0 = __s439local1;
              }
            } else {
              __s439local2 = __s439local5;
              __s439local0 = __s439local1;
            }
          }
        }
      }
      return __s439local2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "highestInteractiveShownDialog", {
    get: function () {
      var __s448local0 = this.highestShownDialog;
      if (__s448local0) {
        return __s448local0.disp;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleLayoutManager.prototype.getInteractiveAreas = function (__s452param0) {
    var __s452local0 = [];
    if (__s452param0 && (Array.isArray(__s452param0) && __s452param0.length ? __s452local0 = __s452local0.concat(__s452param0) : __s452local0 && __s452local0.push(__s452param0), __s452local0.length > 0)) {
      __s452local0.push(this.interactiveToolTipLayer);
      __s452local0.push(this.ingameUIComponentLayer);
      __s452local0.push(this.locaLayer.disp);
      __s452local0.push(this.guidanceLayer);
      return __s452local0;
    } else {
      return null;
    }
  };
  CastleLayoutManager.prototype.restrictToHighestDialog = function () {
    window.restrictedInteractiveArea = this.getInteractiveAreas(this.highestInteractiveShownDialog);
    for (var __s456local0 = 0; __s456local0 < this.dialogLayer.children.length; __s456local0++) {
      var __s456local1 = this.dialogLayer.children[__s456local0];
      if (__s456local0 == this.dialogLayer.children.length - 1) {
        __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(__s456local1);
        __s456local1.tickEnabled = true;
      } else if (!__s456local1.cacheCanvas) {
        try {
          __s456local1.doCache(0, Math.ceil(__s456local1.getDoCacheScale() * __s456local1.scaleX));
          __s456local1.tickEnabled = false;
        } catch (__s463local0) {
          console.warn("Failed to cache dialog in restrictToHighestDialog:", __s463local0);
        }
      }
    }
    var __s456local2 = this.highestShownDialog;
    if (__s456local2) {
      __s456local2.setTickEnablement();
    }
  };
  Object.defineProperty(CastleLayoutManager.prototype, "oldState", {
    get: function () {
      return this._oldState;
    },
    enumerable: true,
    configurable: true
  });
  CastleLayoutManager.prototype.updateGameStage = function () {
    this._gamestageNeedsUpdate = true;
  };
  Object.defineProperty(CastleLayoutManager.prototype, "gamestageNeedsUpdate", {
    get: function () {
      var __s470local0 = this._gamestageNeedsUpdate;
      this._gamestageNeedsUpdate = false;
      return __s470local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "fix_panels", {
    get: function () {
      return this.panels;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "fix_screens", {
    get: function () {
      return this.screens;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "fix_dialogs", {
    get: function () {
      return this.dialogs;
    },
    enumerable: true,
    configurable: true
  });
  CastleLayoutManager.prototype.clearDialog = function (__s478param0) {
    __s1param0.prototype.clearDialog.call(this, __s478param0);
  };
  CastleLayoutManager.prototype.forceHitTest = function (__s480param0) {
    var __s480local0 = __s480param0 && __s480param0.stage ? __s480param0.stage : this.stage;
    __s480local0._mouseOverX = 0;
    __s480local0._testMouseOver();
  };
  CastleLayoutManager.prototype.onEnterFrameUI = function (__s482param0) {
    for (var __s482local0 = 0, __s482local1 = this._uiStageAnimatedUIComponents; __s482local0 < __s482local1.length; __s482local0++) {
      __s482local1[__s482local0].onEnterFrameUpdate();
    }
  };
  CastleLayoutManager.prototype.addUIStageAnimUIComponent = function (__s486param0) {
    var __s486local0 = this._uiStageAnimatedUIComponents.indexOf(__s486param0);
    if (__s486local0 > -1) {
      this._uiStageAnimatedUIComponents[__s486local0] = __s486param0;
    } else {
      this._uiStageAnimatedUIComponents.push(__s486param0);
    }
  };
  CastleLayoutManager.prototype.removeUIStageAnimUIComponent = function (__s490param0) {
    for (var __s490local0 = 0; __s490local0 < this._uiStageAnimatedUIComponents.length; __s490local0++) {
      if (this._uiStageAnimatedUIComponents[__s490local0] == __s490param0) {
        this._uiStageAnimatedUIComponents.splice(__s490local0, 1);
      }
    }
  };
  CastleLayoutManager.__initialize_static_members = function () {
    var __s495local0;
    (__s495local0 = new Map()).set(__dep_exact_9e901e8e2483a22f_4.BasicLayoutManager.STATE_CONNECT, new __dep_export_CastleLayoutConnectingServer.CastleLayoutConnectingServer());
    __s495local0.set(__dep_exact_9e901e8e2483a22f_4.BasicLayoutManager.STATE_STARTSCREEN, new __dep_export_CastleLayoutStartScreen.CastleLayoutStartScreen());
    __s495local0.set(CastleLayoutManager.STATE_ISO, new __dep_export_CastleLayoutIso.CastleLayoutIso());
    __s495local0.set(CastleLayoutManager.STATE_WORLDMAP, new __dep_export_CastleLayoutWorldmap.CastleLayoutWorldmap());
    __s495local0.set(CastleLayoutManager.STATE_WORLDMAP_RELOCATION, new __dep_export_CastleLayoutWorldmapRelocation.CastleLayoutWorldmapRelocation());
    __s495local0.set(CastleLayoutManager.STATE_SEASON_WORLDMAP, new __dep_export_CastleLayoutSeasonWorldmap.CastleLayoutSeasonWorldmap());
    __s495local0.set(CastleLayoutManager.STATE_KINGDOMMAP, new __dep_export_CastleLayoutKingdomMap.CastleLayoutKingdomMap());
    CastleLayoutManager.LAYOUT_STRATEGIES = __s495local0;
  };
  CastleLayoutManager.STATE_ISO = 10;
  CastleLayoutManager.STATE_ISO_BUILD_MODE = 11;
  CastleLayoutManager.STATE_SEASON_WORLDMAP = 16;
  CastleLayoutManager.STATE_KINGDOMMAP = 17;
  CastleLayoutManager.STATE_WORLDMAP = 50;
  CastleLayoutManager.STATE_WORLDMAP_RELOCATION = 51;
  CastleLayoutManager.UI_SCALE_FACTOR = 1.25;
  return CastleLayoutManager;
}(__dep_export_CastleBasicLayoutManager.CastleBasicLayoutManager);
exports.CastleLayoutManager = __s0local4;
var __dep_export_CastleGame = require("gge-module:export_CastleGame");
var __dep_export_CastleTimeSpendTrackingController = require("gge-module:export_CastleTimeSpendTrackingController");
var __dep_export_CastleTutorialArrowController = require("gge-module:export_CastleTutorialArrowController");
var __dep_export_CastleTutorialClickBlocker = require("gge-module:export_CastleTutorialClickBlocker");
var __dep_export_CastleTutorialDialogFilter = require("gge-module:export_CastleTutorialDialogFilter");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLocationCheatPanel = require("gge-module:export_CastleLocationCheatPanel");
var __dep_export_CastleUIComponentCreator = require("gge-module:export_CastleUIComponentCreator");
var __dep_export_CastleAttackAlertFrameComponent = require("gge-module:export_CastleAttackAlertFrameComponent");
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
var __dep_export_TooltipManagerFacade = require("gge-module:export_TooltipManagerFacade");
var __dep_export_CastleTutorialSpotlight = require("gge-module:export_CastleTutorialSpotlight");
var __dep_export_ConstructionItemTooltipHelper = require("gge-module:export_ConstructionItemTooltipHelper");
var __dep_export_MaterialBagTooltipHelper = require("gge-module:export_MaterialBagTooltipHelper");
var __dep_export_CastleLayoutConnectingServer = require("gge-module:export_CastleLayoutConnectingServer");
var __dep_export_CastleLayoutIso = require("gge-module:export_CastleLayoutIso");
var __dep_export_CastleLayoutKingdomMap = require("gge-module:export_CastleLayoutKingdomMap");
var __dep_export_CastleLayoutSeasonWorldmap = require("gge-module:export_CastleLayoutSeasonWorldmap");
var __dep_export_CastleLayoutStartScreen = require("gge-module:export_CastleLayoutStartScreen");
var __dep_export_CastleLayoutWorldmap = require("gge-module:export_CastleLayoutWorldmap");
var __dep_export_CastleLayoutWorldmapRelocation = require("gge-module:export_CastleLayoutWorldmapRelocation");
var __dep_export_CastleCheatPanel = require("gge-module:export_CastleCheatPanel");
var __dep_export_CastleTutorialPanel = require("gge-module:export_CastleTutorialPanel");
var __dep_export_GuidancePanel = require("gge-module:export_GuidancePanel");
var __dep_export_IdentityManagementView = require("gge-module:export_IdentityManagementView");
var __dep_export_PopoverPanel = require("gge-module:export_PopoverPanel");
var __dep_export_CastleIsoScreen = require("gge-module:export_CastleIsoScreen");
var __dep_export_CastleWorldMapScreen = require("gge-module:export_CastleWorldMapScreen");
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
var __dep_export_GeneralsSkillTooltipHelper = require("gge-module:export_GeneralsSkillTooltipHelper");
var __dep_export_CastleOpenShopExecutor = require("gge-module:export_CastleOpenShopExecutor");
__dep_exact_81dacdf05bd32292_9.classImplementsInterfaces(__s0local4, "Container", "ILayoutManagerContext");
__s0local4.__initialize_static_members();
