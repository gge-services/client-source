Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AdvisorAttackOverviewCancelDialog = require("gge-module:export_AdvisorAttackOverviewCancelDialog");
var __dep_export_AdvisorAttackOverviewCancelDialogProperties = require("gge-module:export_AdvisorAttackOverviewCancelDialogProperties");
var __dep_export_CastleAskRereatDialogProperties = require("gge-module:export_CastleAskRereatDialogProperties");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function WorldMapArmyAttackMenu() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, new Library.CastleInterfaceElements.RingMenu_ArmyAttack()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(WorldMapArmyAttackMenu, __s1param0);
  WorldMapArmyAttackMenu.prototype.onClick = function (__s5param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s5param0.target)) {
      __s1param0.prototype.onClick.call(this, __s5param0);
      switch (__s5param0.target) {
        case this.ringMenu.btn_info:
          __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_MOVEMENT_INFO_DIALOG_COMMAND, this.mapMovementVO);
          this.hide();
          break;
        case this.ringMenu.btn_sendHome:
        case this.ringMenu.btn_retreat:
          if (this.mapMovementVO.advisorType > 0) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_AdvisorAttackOverviewCancelDialog.AdvisorAttackOverviewCancelDialog, new __dep_export_AdvisorAttackOverviewCancelDialogProperties.AdvisorAttackOverviewCancelDialogProperties([this.mapMovementVO], this.bindFunction(this.hide)));
          } else {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAskRetreatDialog.CastleAskRetreatDialog, new __dep_export_CastleAskRereatDialogProperties.CastleAskRereatDialogProperties(this.mapMovementVO, this.bindFunction(this.hide)));
          }
      }
    }
  };
  WorldMapArmyAttackMenu.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.ringMenu.mc_infoText.visible = false;
    this.ringMenu.mc_infoText.txt_cost0.visible = false;
    this.ringMenu.btn_retreat.enableButton = true;
    this.ringMenu.btn_retreat.visible = this.mapMovementVO.canBeRetreated && !this.mapMovementVO.sourceArea.isUnderConquerControl;
    this.ringMenu.btn_sendHome.visible = this.mapMovementVO.canBeSendHome;
  };
  WorldMapArmyAttackMenu.prototype.updateMenuPosition = function () {
    __s1param0.prototype.updateMenuPosition.call(this);
    if (this.mapMovementVO) {
      if (this.ringMenu.btn_retreat.visible && this.ringMenu.btn_retreat.enabled) {
        var __s13local0 = this.mapMovementVO.canBeRetreated && !this.mapMovementVO.tooLateToBeRetreated;
        this.ringMenu.btn_retreat.enableButton = __s13local0;
        this.ringMenu.btn_retreat.toolTipText = __s13local0 ? null : "ringmenu_building_cantRetreat";
      }
    } else {
      this.hide();
    }
  };
  WorldMapArmyAttackMenu.prototype.onMouseOver = function (__s18param0) {
    __s1param0.prototype.onMouseOver.call(this, __s18param0);
    this.hideInfoTexts();
    switch (__s18param0.target) {
      case this.ringMenu.btn_info:
        this.showInfoText("ringmenu_info");
        break;
      case this.ringMenu.btn_retreat:
        this.showInfoText("ringmenu_retreat");
        break;
      case this.ringMenu.btn_sendHome:
        this.showInfoText("dialog_moveOverview_sendHome");
    }
  };
  WorldMapArmyAttackMenu.prototype.onMouseOut = function (__s21param0) {
    __s1param0.prototype.onMouseOut.call(this, __s21param0);
    this.hideInfoTexts();
  };
  WorldMapArmyAttackMenu.prototype.showInfoText = function (__s23param0) {
    this.ringMenu.mc_infoText.visible = true;
    this.iTxt = this.textFieldManager.registerTextField(this.ringMenu.mc_infoText.txt_info, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s23param0));
  };
  WorldMapArmyAttackMenu.prototype.hideInfoTexts = function () {
    this.ringMenu.mc_infoText.visible = false;
  };
  Object.defineProperty(WorldMapArmyAttackMenu.prototype, "mapMovementVO", {
    get: function () {
      if (this._target) {
        return this._target.mapMovementVO;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapArmyAttackMenu.prototype, "ringMenu", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  WorldMapArmyAttackMenu.__initialize_static_members = function () {
    WorldMapArmyAttackMenu.NAME = "WorldMapArmyAttackMenu";
  };
  return WorldMapArmyAttackMenu;
}(require("gge-module:export_WorldMapMovementRingMenu").WorldMapMovementRingMenu);
exports.WorldMapArmyAttackMenu = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleAskRetreatDialog = require("gge-module:export_CastleAskRetreatDialog");
__s0local0.__initialize_static_members();
