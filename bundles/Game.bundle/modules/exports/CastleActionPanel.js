Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleQuestDataEvent = require("gge-module:export_CastleQuestDataEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CastlePanel = require("gge-module:export_CastlePanel");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CastleActionPanel() {
    var __s3local0 = this;
    __s3local0._isActivePanel = false;
    __s3local0._touchMoved = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, new Library.CastleInterfaceElements.ActionPanel_Relicus()) || this)._touchDragHelper = new __dep_export_TouchScrollHelper.TouchScrollHelper();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleActionPanel, __s1param0);
  CastleActionPanel.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.actionPanel.mc_tax.comp_taxComponent.btn_tax.toolTipText = "panel_action_tax";
    this.actionPanel.mc_tax.comp_taxComponent.mc_taxTime.toolTipText = "panel_action_collecttime";
    this._taxComponent = new __dep_export_CastleTaxComponent.CastleTaxComponent(this.actionPanel.mc_tax.comp_taxComponent);
    this._castleList = new __dep_export_CastleListActionPanelComponent.CastleListActionPanelComponent(this.actionPanel.mc_castleList, this.actionPanel.btn_jumpTo, this);
    this._buttons = new __dep_export_PanelButtonsComponent.PanelButtonsComponent(this.actionPanel.mc_buttons, Library.CastleInterfaceElements.ActionPanelButton);
    this.actionPanel.mc_buttons.mc_backgroundDeco.visible = false;
    if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
      this.actionPanel.scaleX = this.actionPanel.scaleY = 0.8;
    }
  };
  CastleActionPanel.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this._castleList.destroy();
    this._buttons.destroy();
  };
  CastleActionPanel.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this._taxComponent.active = true;
    this.activatePanel();
    this._buttons.onShow();
    this.buildButtons();
    this.updateComponents();
    if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
      this._touchDragHelper.setup(this.actionPanel);
      this.actionPanel.addEventListener(__s0local0.PRESS_MOVE, this.bindFunction(this.onPortraitPressMove));
    }
  };
  CastleActionPanel.prototype.hide = function () {
    this._taxComponent.active = false;
    this._buttons.onHide();
    if (this.layoutManager.isInMyCastleBuildMode) {
      this.deactivatePanel();
    } else {
      __s1param0.prototype.hide.call(this);
    }
    if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
      if (this._touchDragHelper) {
        this._touchDragHelper.dispose();
      }
      this.actionPanel.removeEventListener(__s0local0.PRESS_MOVE, this.bindFunction(this.onPortraitPressMove));
    }
  };
  CastleActionPanel.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onCastleDataUpdated));
    this.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onLayoutStateChanged));
    __dep_export_CastleModel.CastleModel.questData.addEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onNewQuest));
    this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onEnteredCastle));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
  };
  CastleActionPanel.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onCastleDataUpdated));
    this.controller.removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onLayoutStateChanged));
    __dep_export_CastleModel.CastleModel.questData.removeEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onNewQuest));
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onEnteredCastle));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
  };
  CastleActionPanel.prototype.onPortraitPressMove = function (__s23param0) {
    if (__dep_exact_81dacdf05bd32292.MobileHelper.isPortrait()) {
      var __s23local0 = __s23param0.stageX - this._touchDragHelper.touchStageRefPoint.x;
      if (Math.abs(__s23local0) > 5) {
        this._touchMoved = true;
        var __s23local1 = this.disp.x + __s23local0 * 0.8;
        if (__s23local1 >= this.disp.stage.stageWidth) {
          this.disp.x = __s23local1;
        }
        this._touchDragHelper.touchStageRefPoint.x = __s23param0.stageX;
      }
    }
  };
  CastleActionPanel.prototype.removeEventListenerOnDestroy = function () {
    __s1param0.prototype.removeEventListenerOnDestroy.call(this);
    this.removeEventListenerOnHide();
  };
  CastleActionPanel.prototype.updateComponents = function () {
    this.actionPanel.mc_tax.visible = true;
    this._castleList.enabled = __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_CHOOSE_LOCATION;
  };
  CastleActionPanel.prototype.activatePanel = function () {
    this.actionPanel.mouseChildren = true;
    this._isActivePanel = true;
    this.actionPanel.filters = __dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER;
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(this.actionPanel);
  };
  CastleActionPanel.prototype.deactivatePanel = function () {
    this.actionPanel.mouseChildren = false;
    this._isActivePanel = false;
    this.actionPanel.filters = __dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_DESATURATED_BUTTON_COLOR_MATRIX;
    this.actionPanel.doCache();
  };
  CastleActionPanel.prototype.buildButtons = function () {
    this._buttons.switchCreationMode(true);
    this._buttons.addMainButton(new __dep_export_FusionForgePanelButton.FusionForgePanelButton()).defineSubButtons([new __dep_export_CraftingPanelButton.CraftingPanelButton(__dep_export_IsoObjectEnum.IsoObjectEnum.REFINERY), new __dep_export_CraftingPanelButton.CraftingPanelButton(__dep_export_IsoObjectEnum.IsoObjectEnum.TOOLSMITH), new __dep_export_CraftingPanelButton.CraftingPanelButton(__dep_export_IsoObjectEnum.IsoObjectEnum.DRAGONHOARD)]);
    this._buttons.addMainButton(new __dep_export_MovementsPanelButton.MovementsPanelButton());
    this._buttons.addMainButton(new __dep_export_PremiumMarketPanelButton.PremiumMarketPanelButton());
    this._buttons.addMainButton(new __dep_export_OverviewPanelButton.OverviewPanelButton()).defineSubButtons([new __dep_export_ResearchPanelButton.ResearchPanelButton(), new __dep_export_ManagementPanelButton.ManagementPanelButton(), new __dep_export_HunterPanelButton.HunterPanelButton(), new __dep_export_BreweryPanelButton.BreweryPanelButton(), new __dep_export_ResourceIslandsPanelButton.ResourceIslandsPanelButton(), new __dep_export_FactionCampsPanelButton.FactionCampsPanelButton(), new __dep_export_ResourceVillagesPanelButton.ResourceVillagesPanelButton(), new __dep_export_TreasureMapPanelButton.TreasureMapPanelButton()]);
    this._buttons.addMainButton(new __dep_export_RecruitPanelButton.RecruitPanelButton()).defineSubButtons([new __dep_export_BuildToolsPanelButton.BuildToolsPanelButton(), new __dep_export_DefencePanelButton.DefencePanelButton(), new __dep_export_HospitalPanelButton.HospitalPanelButton(), new __dep_export_LegendHallPanelButton.LegendHallPanelButton()]);
    this._buttons.addMainButton(new __dep_export_SearchEnemyPanelButton.SearchEnemyPanelButton());
    this._buttons.addMainButton(new __dep_export_BuildMenuPanelButton.BuildMenuPanelButton()).defineSubButtons([new __dep_export_ConstructionItemsPanelButton.ConstructionItemsPanelButton(), new __dep_export_DistrictGachaEventPanelButton.DistrictGachaEventPanelButton()]);
    this._buttons.addMainButton(new __dep_export_EquipmentPanelButton.EquipmentPanelButton()).defineSubButtons([new __dep_export_RelicUpgradePanelButton.RelicUpgradePanelButton(), new __dep_export_GeneralsHubPanelButton.GeneralsHubPanelButton(), new __dep_export_GeneralsOverviewPanelButton.GeneralsOverviewPanelButton()]);
    this._buttons.addMainButton(new __dep_export_CastlePanelButton.CastlePanelButton());
    this._buttons.addMainButton(new __dep_export_WorldmapPanelButton.WorldmapPanelButton());
    this._buttons.addMainButton(new __dep_export_KingdomMapPanelButton.KingdomMapPanelButton());
    this._buttons.addMainButton(new __dep_export_BackToMainServerButton.BackToMainServerButton());
    this._buttons.addMainButton(new __dep_export_ActionPlaceHolderButton.ActionPlaceHolderButton());
    this._buttons.addMainButton(new __dep_export_ActionPlaceHolderButton.ActionPlaceHolderButton());
    this._buttons.addMainButton(new __dep_export_ActionPlaceHolderButton.ActionPlaceHolderButton());
    this._buttons.switchCreationMode(false);
  };
  CastleActionPanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.x = this.disp.stage.stageWidth;
      this.disp.y = this.disp.stage.stageHeight;
      if (this.env.hasNetworkBuddies) {
        this.disp.y -= __dep_export_ClientConstCastle.ClientConstCastle.BUDDY_PANEL_HEIGHT;
      }
    }
  };
  CastleActionPanel.prototype.onClick = function (__s42param0) {
    if (!this._isActivePanel && __dep_export_CastleModel.CastleModel.areaData.activeArea.isMyArea && __dep_export_CastleModel.CastleModel.tutorialData.isTutorialFinished()) {
      if (!this.layoutManager.isInState(__dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO)) {
        this.layoutManager.state = __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO;
      }
    } else if (!this.isLocked && !this.isWaitingForServerMessage) {
      if (this._touchMoved) {
        this._touchMoved = true;
        __s42param0.stopImmediatePropagation();
        return;
      }
      __s1param0.prototype.onClick.call(this, __s42param0);
      if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s42param0.target)) {
        switch (__s42param0.target) {
          case this.actionPanel.btn_jumpTo:
            this._castleList.onClickJumpToButton();
        }
      }
    }
  };
  CastleActionPanel.prototype.onLayoutStateChanged = function (__s50param0) {
    this._buttons.updateButtons();
    this.updateComponents();
  };
  CastleActionPanel.prototype.onEnteredCastle = function (__s52param0) {
    this.updateComponents();
    this._buttons.updateButtons();
    this.unLockPanel();
    this.updatePosition();
  };
  CastleActionPanel.prototype.onNewQuest = function (__s54param0) {
    this._buttons.updateButtons();
  };
  CastleActionPanel.prototype.onCastleDataUpdated = function (__s56param0) {
    this._buttons.updateButtons();
  };
  CastleActionPanel.prototype.onLevelUp = function (__s58param0) {
    this._buttons.updateButtons();
  };
  Object.defineProperty(CastleActionPanel.prototype, "actionPanel", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleActionPanel.prototype, "buttons", {
    get: function () {
      return this._buttons;
    },
    enumerable: true,
    configurable: true
  });
  CastleActionPanel.NAME = "CastleActionPanel_Relicus";
  return CastleActionPanel;
}(__dep_export_CastlePanel.CastlePanel);
exports.CastleActionPanel = __s0local1;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleListActionPanelComponent = require("gge-module:export_CastleListActionPanelComponent");
var __dep_export_CastleTaxComponent = require("gge-module:export_CastleTaxComponent");
var __dep_export_BackToMainServerButton = require("gge-module:export_BackToMainServerButton");
var __dep_export_BuildMenuPanelButton = require("gge-module:export_BuildMenuPanelButton");
var __dep_export_BuildToolsPanelButton = require("gge-module:export_BuildToolsPanelButton");
var __dep_export_CastlePanelButton = require("gge-module:export_CastlePanelButton");
var __dep_export_ConstructionItemsPanelButton = require("gge-module:export_ConstructionItemsPanelButton");
var __dep_export_CraftingPanelButton = require("gge-module:export_CraftingPanelButton");
var __dep_export_DefencePanelButton = require("gge-module:export_DefencePanelButton");
var __dep_export_DistrictGachaEventPanelButton = require("gge-module:export_DistrictGachaEventPanelButton");
var __dep_export_EquipmentPanelButton = require("gge-module:export_EquipmentPanelButton");
var __dep_export_FactionCampsPanelButton = require("gge-module:export_FactionCampsPanelButton");
var __dep_export_FusionForgePanelButton = require("gge-module:export_FusionForgePanelButton");
var __dep_export_GeneralsHubPanelButton = require("gge-module:export_GeneralsHubPanelButton");
var __dep_export_GeneralsOverviewPanelButton = require("gge-module:export_GeneralsOverviewPanelButton");
var __dep_export_HunterPanelButton = require("gge-module:export_HunterPanelButton");
var __dep_export_KingdomMapPanelButton = require("gge-module:export_KingdomMapPanelButton");
var __dep_export_ManagementPanelButton = require("gge-module:export_ManagementPanelButton");
var __dep_export_MovementsPanelButton = require("gge-module:export_MovementsPanelButton");
var __dep_export_LegendHallPanelButton = require("gge-module:export_LegendHallPanelButton");
var __dep_export_HospitalPanelButton = require("gge-module:export_HospitalPanelButton");
var __dep_export_OverviewPanelButton = require("gge-module:export_OverviewPanelButton");
var __dep_export_PremiumMarketPanelButton = require("gge-module:export_PremiumMarketPanelButton");
var __dep_export_RecruitPanelButton = require("gge-module:export_RecruitPanelButton");
var __dep_export_RelicUpgradePanelButton = require("gge-module:export_RelicUpgradePanelButton");
var __dep_export_ResearchPanelButton = require("gge-module:export_ResearchPanelButton");
var __dep_export_ResourceIslandsPanelButton = require("gge-module:export_ResourceIslandsPanelButton");
var __dep_export_ResourceVillagesPanelButton = require("gge-module:export_ResourceVillagesPanelButton");
var __dep_export_SearchEnemyPanelButton = require("gge-module:export_SearchEnemyPanelButton");
var __dep_export_TreasureMapPanelButton = require("gge-module:export_TreasureMapPanelButton");
var __dep_export_WorldmapPanelButton = require("gge-module:export_WorldmapPanelButton");
var __dep_export_PanelButtonsComponent = require("gge-module:export_PanelButtonsComponent");
var __dep_export_TouchScrollHelper = require("gge-module:export_TouchScrollHelper");
var __dep_export_BreweryPanelButton = require("gge-module:export_BreweryPanelButton");
var __dep_export_ActionPlaceHolderButton = require("gge-module:export_ActionPlaceHolderButton");
