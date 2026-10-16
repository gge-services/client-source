Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_CastleSlotVOEvent = require("gge-module:export_CastleSlotVOEvent");
var __dep_export_CastleMilitaryDataEvent = require("gge-module:export_CastleMilitaryDataEvent");
var __dep_export_CastleResourceBoosterEvent = require("gge-module:export_CastleResourceBoosterEvent");
var __dep_export_CastleXPChangedEvent = require("gge-module:export_CastleXPChangedEvent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_DecoStorageEvent = require("gge-module:export_DecoStorageEvent");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleRecruitDialogProperties = require("gge-module:export_CastleRecruitDialogProperties");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastlePanel = require("gge-module:export_CastlePanel");
var __s0local0 = createjs.Event;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = function (__s1param0) {
  function CastleBuildingListPanel() {
    var __s3local0 = this;
    __s3local0.category = CastleBuildingListPanel.CAT_BUILD;
    __s3local0._isFolded = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, new Library.CastleInterfaceElements.CastleBuildlist1()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBuildingListPanel, __s1param0);
  CastleBuildingListPanel.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.buildingListPanelContent.btn_slide.basicButton = new __dep_exact_84d43d9c404bd4d8.BasicButton(this.buildingListPanelContent.btn_slide, true);
    this.buildingListPanelContent.cat_tools.basicButton = new __dep_exact_84d43d9c404bd4d8.BasicButton(this.buildingListPanelContent.cat_tools, true);
    this.buildingListPanelContent.cat_units.basicButton = new __dep_exact_84d43d9c404bd4d8.BasicButton(this.buildingListPanelContent.cat_units, true);
    this.buildingListPanelContent.cat_build.basicButton = new __dep_exact_84d43d9c404bd4d8.BasicButton(this.buildingListPanelContent.cat_build, true);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.buildingListPanelContent.btn_up, this.buildingListPanelContent.btn_down], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    this._buildListComponent = new __dep_export_CastleBuildingListComponent.CastleBuildingListComponent(this.buildingListPanelContent, __dep_export_BasicBuildListComponent.BasicBuildListComponent.ALIGN_VERTICAL);
    this.category = CastleBuildingListPanel.CAT_BUILD;
    this.buildingListPanelContent.walls_tools.visible = false;
    this.buildingListPanelContent.walls_build.visible = true;
    this.buildingListPanelContent.cat_tools.toolTipText = "tut_recruit_OpenProductionScreen_copy";
    this.buildingListPanelContent.cat_units.toolTipText = "tut_recruit_OpenRecruitmentScreen_copy";
    this.buildingListPanelContent.cat_build.toolTipText = "ingameHelp_category_4";
    this.onChangeResolution();
    if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
      this.disp.scaleX = this.disp.scaleY = 0.8;
    }
  };
  CastleBuildingListPanel.prototype.show = function () {
    if (!this.hasLevelForShow()) {
      this.controller.addEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
      this.hide();
      return;
    }
    this.buildingListPanelContent.cat_tools.basicButton.addMouseEventListener();
    this.buildingListPanelContent.cat_units.basicButton.addMouseEventListener();
    this.buildingListPanelContent.cat_build.basicButton.addMouseEventListener();
    this.controller.addEventListener(__dep_export_CastleSlotVOEvent.CastleSlotVOEvent.SLOT_UPDATE, this.bindFunction(this.onUpdateSlot));
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_CONSTRUCTION_LIST_CHANGED, this.bindFunction(this.onUpdateSlot));
    this.controller.addEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onUpdateSlot));
    this.controller.addEventListener(__dep_export_DecoStorageEvent.DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onUpdateSlot));
    __dep_export_CastleModel.CastleModel.boostData.addEventListener(__dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onUpdateSlot));
    if (this.disp && this.disp.stage) {
      window.addEventListener(__s0local0.RESIZE, this.bindFunction(this.onChangeResolution));
    }
    if (__dep_export_CastleModel.CastleModel.userData.userLevel < __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_SHOW_BUILDINGLIST || __dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
      this.foldPanel();
    } else {
      this.unFoldPanel();
    }
    __s1param0.prototype.show.call(this);
    this.updateLayout();
    this.onFoldComplete();
    this.onChangeResolution();
    if (this.disp.parent) {
      this.disp.parent.setChildIndex(this.disp, 0);
    }
    this.allowCaching = true;
  };
  CastleBuildingListPanel.prototype.onXPChanged = function (__s15param0) {
    this.controller.removeEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
    this.show();
  };
  CastleBuildingListPanel.prototype.destroy = function () {
    this.controller.removeEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
    __s1param0.prototype.destroy.call(this);
  };
  CastleBuildingListPanel.prototype.hide = function () {
    if (this.disp && this.disp.stage) {
      this._buildListComponent.clearItems();
    }
    this.controller.removeEventListener(__dep_export_CastleSlotVOEvent.CastleSlotVOEvent.SLOT_UPDATE, this.bindFunction(this.onUpdateSlot));
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_CONSTRUCTION_LIST_CHANGED, this.bindFunction(this.onUpdateSlot));
    this.controller.removeEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onUpdateSlot));
    this.controller.removeEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onUpdateSlot));
    this.controller.removeEventListener(__dep_export_DecoStorageEvent.DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onUpdateSlot));
    __dep_export_CastleModel.CastleModel.boostData.removeEventListener(__dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onUpdateSlot));
    if (this.disp && this.disp.stage) {
      window.removeEventListener(__s0local0.RESIZE, this.bindFunction(this.onChangeResolution));
    }
    if (__dep_export_Iso.Iso.renderer && __dep_export_Iso.Iso.renderer.layers.renderTarget) {
      __dep_export_Iso.Iso.renderer.layers.renderTarget.removeEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onMouseUpInIso));
    }
    this.buildingListPanelContent.cat_tools.basicButton.removeMouseEventListener();
    this.buildingListPanelContent.cat_units.basicButton.removeMouseEventListener();
    this.buildingListPanelContent.cat_build.basicButton.removeMouseEventListener();
    __s1param0.prototype.hide.call(this);
  };
  CastleBuildingListPanel.prototype.onMouseUpInIso = function (__s24param0) {
    if (!__s24param0.target || !this.buildingListPanelContent.contains(__s24param0.target)) {
      __dep_export_Iso.Iso.renderer.layers.renderTarget.removeEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onMouseUpInIso));
    }
  };
  CastleBuildingListPanel.prototype.onUpdateSlot = function (__s27param0) {
    this.updateLayout();
    this.updateCache();
  };
  CastleBuildingListPanel.prototype.onChangeResolution = function (__s29param0 = null) {
    if (this.disp && this.disp.stage) {
      this.updateLayout();
      this.updateCache();
    }
  };
  CastleBuildingListPanel.prototype.onClick = function (__s32param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s32param0.target)) {
      switch (__s32param0.target) {
        case this.buildingListPanelContent.btn_slide:
          this.toggleFolding();
          this.updateLayout();
          break;
        case this.buildingListPanelContent.cat_units:
          __dep_export_CastlePanel.CastlePanel.dialogHandler.registerDefaultDialogs(__dep_export_CastleRecruitDialog.CastleRecruitDialog, new __dep_export_CastleRecruitDialogProperties.CastleRecruitDialogProperties(this.getUnitsCategory()));
          break;
        case this.buildingListPanelContent.cat_tools:
          __dep_export_CastlePanel.CastlePanel.dialogHandler.registerDefaultDialogs(__dep_export_CastleRecruitDialog.CastleRecruitDialog, new __dep_export_CastleRecruitDialogProperties.CastleRecruitDialogProperties(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS));
      }
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s32param0.target, "BuildListItem1")) {
        var __s32local0 = __s32param0.target.bItem;
        if (__s32local0 && !__s32local0.isLocked && __s32local0.isFree) {
          this.layoutManager.hideAllIngameUIComponents();
          __dep_export_Iso.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
        }
      }
    }
  };
  CastleBuildingListPanel.prototype.updateLayout = function () {
    if (this.isVisible() && this.disp && this.disp.stage) {
      this.buildingListPanelContent.btn_slide.basicButton.enableButton = true;
      this.buildingListPanelContent.cat_tools.basicButton.enableButton = __dep_export_CastleModel.CastleModel.militaryData.isUnitCategoryAllowed(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS);
      this.buildingListPanelContent.cat_units.basicButton.enableButton = __dep_export_CastleModel.CastleModel.militaryData.isUnitCategoryAllowed(this.getUnitsCategory());
      this._buildListComponent.fillItems(__dep_export_CastleModel.CastleModel.areaData.activeConstructionList);
    }
  };
  CastleBuildingListPanel.prototype.foldPanel = function () {
    this._isFolded = true;
    this.buildingListPanelContent.x = CastleBuildingListPanel.SLIDE_X;
  };
  CastleBuildingListPanel.prototype.unFoldPanel = function () {
    this._isFolded = false;
    this.buildingListPanelContent.x = 0;
  };
  CastleBuildingListPanel.prototype.toggleFolding = function () {
    if (this.hasLevelForShow()) {
      if (this._isFolded) {
        __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.buildingListPanelContent, 0.3, {
          x: CastleBuildingListPanel.SLIDE_X
        }, {
          x: 0,
          ease: __dep_exact_608de47b6498f9b0.Linear.easeOut,
          onUpdate: this.bindFunction(this.onFoldUpdate),
          onComplete: this.bindFunction(this.onFoldComplete)
        });
      } else {
        __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.buildingListPanelContent, 0.3, {
          x: 0
        }, {
          x: CastleBuildingListPanel.SLIDE_X,
          ease: __dep_exact_608de47b6498f9b0.Linear.easeIn,
          onUpdate: this.bindFunction(this.onFoldUpdate),
          onComplete: this.bindFunction(this.onFoldComplete)
        });
      }
      this._isFolded = !this._isFolded;
    }
  };
  CastleBuildingListPanel.prototype.onFoldUpdate = function () {
    this.updateCache();
  };
  CastleBuildingListPanel.prototype.onFoldComplete = function () {
    this.buildingListPanelContent.btn_slide.gotoAndStop(this._isFolded ? 2 : 1);
    this.updateCache();
  };
  CastleBuildingListPanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.x = this.disp.stage.stageWidth;
      this.disp.y = 65;
    }
  };
  Object.defineProperty(CastleBuildingListPanel.prototype, "buildingListPanelContent", {
    get: function () {
      return this.disp.mc_content;
    },
    enumerable: true,
    configurable: true
  });
  CastleBuildingListPanel.prototype.hasLevelForShow = function () {
    return __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_PRODUCTION_QUEUE;
  };
  CastleBuildingListPanel.prototype.getUnitsCategory = function () {
    if (__dep_export_CastleModel.CastleModel.areaData.activeArea && __dep_export_CastleModel.CastleModel.areaData.activeArea.isFactionCamp) {
      return __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES;
    } else {
      return __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS;
    }
  };
  CastleBuildingListPanel.__initialize_static_members = function () {
    CastleBuildingListPanel.NAME = "CastleBuildingListPanel";
    CastleBuildingListPanel.CAT_BUILD = "buildings";
    CastleBuildingListPanel.SLIDE_X = 68;
  };
  return CastleBuildingListPanel;
}(__dep_export_CastlePanel.CastlePanel);
exports.CastleBuildingListPanel = __s0local2;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_BasicBuildListComponent = require("gge-module:export_BasicBuildListComponent");
var __dep_export_CastleRecruitDialog = require("gge-module:export_CastleRecruitDialog");
var __dep_export_CastleBuildingListComponent = require("gge-module:export_CastleBuildingListComponent");
__s0local2.__initialize_static_members();
