Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleAdvancedDefenceDialogHelper(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._defenceDialog = __s3param0.disp;
    __s3local0._fightDialog = __s3param0;
    __s3local0._displayType = __dep_export_CastleAdvancedTroopSelectionComponent.CastleAdvancedTroopSelectionComponent.TYPE_DEFENCE;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAdvancedDefenceDialogHelper, __s1param0);
  CastleAdvancedDefenceDialogHelper.prototype.handleTarget = function (__s5param0) {
    if (__dep_export_CastleModel.CastleModel.tutorialData.isInTutorial()) {
      this.handleDefault(__s5param0);
    } else {
      switch (__s5param0) {
        case this._defenceDialog.categoryMenu.mc_wall.wall_left:
        case this._defenceDialog.categoryMenu.mc_wall.wall_left.items_leftWall:
          this.setFightScreenConnectorByConnectorType(__dep_export_CastleAdvancedFightScreenConnectorHandler.CastleAdvancedFightScreenConnectorHandler.TOOLLEFT);
          this.display();
          break;
        case this._defenceDialog.categoryMenu.mc_wall.wall_middle:
        case this._defenceDialog.categoryMenu.mc_wall.wall_middle.items_middleWall:
          this.setFightScreenConnectorByConnectorType(__dep_export_CastleAdvancedFightScreenConnectorHandler.CastleAdvancedFightScreenConnectorHandler.TOOLFRONT);
          this.display();
          break;
        case this._defenceDialog.categoryMenu.mc_wall.wall_right:
        case this._defenceDialog.categoryMenu.mc_wall.wall_right.items_rightWall:
          this.setFightScreenConnectorByConnectorType(__dep_export_CastleAdvancedFightScreenConnectorHandler.CastleAdvancedFightScreenConnectorHandler.TOOLRIGHT);
          this.display();
          break;
        default:
          this.handleDefault(__s5param0);
      }
    }
  };
  CastleAdvancedDefenceDialogHelper.prototype.setFightScreenConnectorByConnectorType = function (__s10param0) {
    if (!__dep_export_CastleModel.CastleModel.tutorialData.isInTutorial()) {
      switch (__s10param0) {
        case __dep_export_CastleAdvancedFightScreenConnectorHandler.CastleAdvancedFightScreenConnectorHandler.TOOLLEFT:
          this._advancedFightScreenConnector = new __dep_export_CastleAdvancedFightScreenConnectorHandler.CastleAdvancedFightScreenConnectorHandler(__dep_export_CastleModel.CastleModel.defenceData.itemsLeftWall, [this._defenceDialog.leftFlankToolConnector], __s10param0, this._displayType);
          break;
        case __dep_export_CastleAdvancedFightScreenConnectorHandler.CastleAdvancedFightScreenConnectorHandler.TOOLFRONT:
          this._advancedFightScreenConnector = new __dep_export_CastleAdvancedFightScreenConnectorHandler.CastleAdvancedFightScreenConnectorHandler(__dep_export_CastleModel.CastleModel.defenceData.itemsMiddleWall, [this._defenceDialog.frontFlankToolConnector], __s10param0, this._displayType);
          break;
        case __dep_export_CastleAdvancedFightScreenConnectorHandler.CastleAdvancedFightScreenConnectorHandler.TOOLRIGHT:
          this._advancedFightScreenConnector = new __dep_export_CastleAdvancedFightScreenConnectorHandler.CastleAdvancedFightScreenConnectorHandler(__dep_export_CastleModel.CastleModel.defenceData.itemsRightWall, [this._defenceDialog.rightFlankToolConnector], __s10param0, this._displayType);
      }
    }
  };
  CastleAdvancedDefenceDialogHelper.prototype.handleDefault = function (__s14param0) {
    var __s14local0 = this._fightDialog.getDefenceCategory() == __dep_export_ClientConstCastle.ClientConstCastle.DEFENCE_CATEGORY_WALL;
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s14param0, "FightScreenSlotContainer") && __s14local0) {
      this.handleDialogSlotContainer(__s14param0);
      this.display();
    } else {
      this.hide();
    }
  };
  CastleAdvancedDefenceDialogHelper.prototype.update = function () {
    if (this._fightDialog.getDefenceCategory() == __dep_export_ClientConstCastle.ClientConstCastle.DEFENCE_CATEGORY_WALL) {
      __s1param0.prototype.update.call(this);
    }
  };
  CastleAdvancedDefenceDialogHelper.prototype.handleDialogSlotContainer = function (__s21param0) {
    var __s21local0 = __s21param0.itemContainer;
    var __s21local1 = __s21param0.itemVO;
    this.setFightScreenConnectorByFightItemContainer(__s21local0, __s21local1);
  };
  CastleAdvancedDefenceDialogHelper.prototype.setFightScreenConnectorByFightItemContainer = function (__s23param0, __s23param1) {
    if (!__dep_export_CastleModel.CastleModel.tutorialData.isInTutorial()) {
      switch (__s23param0) {
        case __dep_export_CastleModel.CastleModel.defenceData.itemsLeftWall:
          this._advancedFightScreenConnector = new __dep_export_CastleAdvancedFightScreenConnectorHandler.CastleAdvancedFightScreenConnectorHandler(__dep_export_CastleModel.CastleModel.defenceData.itemsLeftWall, [this._defenceDialog.leftFlankToolConnector], __dep_export_CastleAdvancedFightScreenConnectorHandler.CastleAdvancedFightScreenConnectorHandler.TOOLLEFT, this._displayType, __s23param1);
          break;
        case __dep_export_CastleModel.CastleModel.defenceData.itemsMiddleWall:
          this._advancedFightScreenConnector = new __dep_export_CastleAdvancedFightScreenConnectorHandler.CastleAdvancedFightScreenConnectorHandler(__dep_export_CastleModel.CastleModel.defenceData.itemsMiddleWall, [this._defenceDialog.frontFlankToolConnector], __dep_export_CastleAdvancedFightScreenConnectorHandler.CastleAdvancedFightScreenConnectorHandler.TOOLFRONT, this._displayType, __s23param1);
          break;
        case __dep_export_CastleModel.CastleModel.defenceData.itemsRightWall:
          this._advancedFightScreenConnector = new __dep_export_CastleAdvancedFightScreenConnectorHandler.CastleAdvancedFightScreenConnectorHandler(__dep_export_CastleModel.CastleModel.defenceData.itemsRightWall, [this._defenceDialog.rightFlankToolConnector], __dep_export_CastleAdvancedFightScreenConnectorHandler.CastleAdvancedFightScreenConnectorHandler.TOOLRIGHT, this._displayType, __s23param1);
      }
    }
  };
  return CastleAdvancedDefenceDialogHelper;
}(require("gge-module:export_CastleBasicAdvancedFightScreenDialogHelper").CastleBasicAdvancedFightScreenDialogHelper);
exports.CastleAdvancedDefenceDialogHelper = __s0local0;
var __dep_export_CastleAdvancedTroopSelectionComponent = require("gge-module:export_CastleAdvancedTroopSelectionComponent");
var __dep_export_CastleAdvancedFightScreenConnectorHandler = require("gge-module:export_CastleAdvancedFightScreenConnectorHandler");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IAdvancedFightscreenHandler");
