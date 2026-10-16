Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SAllianceBattleGroundGetTowerCastlesInfoVO = require("gge-module:export_C2SAllianceBattleGroundGetTowerCastlesInfoVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ABGTowerConnectionVO = require("gge-module:export_ABGTowerConnectionVO");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleWorldmapBookmarkSetDialogProperties = require("gge-module:export_CastleWorldmapBookmarkSetDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleABGTowerDetailDialog() {
    return __s1param0.call(this, CastleABGTowerDetailDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleABGTowerDetailDialog, __s1param0);
  CastleABGTowerDetailDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_attack, this.dialogDisp.btn_bookmark, this.dialogDisp.btn_jumpTo], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
  };
  CastleABGTowerDetailDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_AllianceTower_towerDetails_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_players, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_AllianceTower_connectedPlayers_header")));
    new __dep_export_ABGTowerInfoComponent.ABGTowerInfoComponent(this.dialogDisp, new __s0local0(90, 150)).updateTowerInfo(this.dialogProperties.targetTowerVO);
    this.dialogDisp.mc_pointIcon.toolTipText = "dialog_beyondTheHorizon_AllianceTower_tower_Statuette_tooltip";
    this.dialogDisp.btn_attack.toolTipText = "ringmenu_military_menu_attack";
    this.dialogDisp.btn_bookmark.toolTipText = "ringmenu_markLocation";
    this.dialogDisp.btn_jumpTo.toolTipText = "dialog_beyondTheHorizon_AllianceTower_tower_jumpTower_tooltip";
    this.towerAttackButton = new __dep_export_ButtonAttackComponent.ButtonAttackComponent(this.dialogDisp.btn_attack.basicButton);
    __dep_exact_9e901e8e2483a22f_2.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceBattleGroundGetTowerCastlesInfoVO.C2SAllianceBattleGroundGetTowerCastlesInfoVO(this.dialogProperties.targetTowerVO.absAreaPosX, this.dialogProperties.targetTowerVO.absAreaPosY));
    this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ABG_TOWER_CASTLES_INFO, this.bindFunction(this.onCastleInfoGot));
  };
  CastleABGTowerDetailDialog.prototype.onCastleInfoGot = function (__s9param0) {
    this.castles = [];
    for (var __s9local0 = 0; __s9local0 < __s9param0.params.length; __s9local0++) {
      this.castles.push(__s9param0.params[__s9local0]);
    }
    this.fillList();
  };
  CastleABGTowerDetailDialog.prototype.fillList = function () {
    this.towerAttackButton.targetWMO = this.dialogProperties.targetTowerVO;
    this.towerAttackButton.initAttackButton(true);
    this.attackCastleButtons = [];
    for (var __s13local0 = 0; __s13local0 < 5; __s13local0++) {
      var __s13local1 = this.dialogDisp["item" + __s13local0];
      if (this.castles.length > __s13local0) {
        __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s13local1.mc_castle);
        __s13local1.visible = true;
        __s13local1.mc_castle.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(this.castles[__s13local0], new __s0local0(64, 46), true, false, true, "panel_action_jumpTo"));
        this.textFieldManager.registerTextField(__s13local1.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(this.castles[__s13local0].ownerInfo.playerName));
        var __s13local2 = new __dep_export_ABGTowerConnectionStateComponent.ABGTowerConnectionStateComponent(__dep_export_ABGTowerConnectionStateComponent.ABGTowerConnectionStateComponent.TYPE_DIALOG, __dep_export_ABGTowerConnectionStateComponent.ABGTowerConnectionStateComponent.SIZE_DIALOG_BIG, true);
        var __s13local3 = new __dep_export_ABGTowerConnectionVO.ABGTowerConnectionVO();
        __s13local3.fillFromConnectionValues([this.castles[__s13local0].absAreaPosX, this.castles[__s13local0].absAreaPosY, this.castles[__s13local0].ownerInfo.playerName, this.castles[__s13local0].isABGTowerAttackable ? 1 : 0]);
        __s13local2.setConnection(__s13local3);
        __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s13local1.mc_connect);
        __s13local1.mc_connect.addChild(__s13local2.disp);
        __dep_export_ButtonHelper.ButtonHelper.initButtons([__s13local1.btn_attack], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
        var __s13local4 = new __dep_export_ButtonAttackComponent.ButtonAttackComponent(__s13local1.btn_attack.basicButton);
        __s13local4.targetWMO = this.castles[__s13local0];
        __s13local4.initAttackButton(true);
        this.attackCastleButtons.push(__s13local4);
      } else {
        __s13local1.visible = false;
      }
    }
  };
  CastleABGTowerDetailDialog.prototype.hideLoaded = function (__s19param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    if (this.attackCastleButtons) {
      this.attackCastleButtons.forEach(function (__s22param0) {
        var __s22local0 = [];
        for (var __s22local1 = 1; __s22local1 < arguments.length; __s22local1++) {
          __s22local0[__s22local1 - 1] = arguments[__s22local1];
        }
        __s22param0.destroy();
      });
    }
    this.towerAttackButton.destroy();
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ABG_TOWER_CASTLES_INFO, this.bindFunction(this.onCastleInfoGot));
  };
  CastleABGTowerDetailDialog.prototype.onClick = function (__s26param0) {
    __s1param0.prototype.onClick.call(this, __s26param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s26param0.target)) {
      switch (__s26param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_bookmark:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleWorldmapBookmarkSetDialog.CastleWorldmapBookmarkSetDialog, new __dep_export_CastleWorldmapBookmarkSetDialogProperties.CastleWorldmapBookmarkSetDialogProperties(this.dialogProperties.targetTowerVO, __dep_export_CastleWorldmapBookmarkSetDialog.CastleWorldmapBookmarkSetDialog.CAT_PERSONAL_BOOKMARK));
          break;
        case this.dialogDisp.btn_jumpTo:
          __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [this.dialogProperties.targetTowerVO.kingdomID, this.dialogProperties.targetTowerVO.absAreaPos.x, this.dialogProperties.targetTowerVO.absAreaPos.y]);
          break;
        case this.dialogDisp.btn_attack:
          this.towerAttackButton.onClick();
          break;
        case this.dialogDisp.item0.btn_attack:
          this.attackCastleButtons[0].onClick();
          break;
        case this.dialogDisp.item1.btn_attack:
          this.attackCastleButtons[1].onClick();
          break;
        case this.dialogDisp.item2.btn_attack:
          this.attackCastleButtons[2].onClick();
          break;
        case this.dialogDisp.item3.btn_attack:
          this.attackCastleButtons[3].onClick();
          break;
        case this.dialogDisp.item4.btn_attack:
          this.attackCastleButtons[4].onClick();
      }
    }
  };
  Object.defineProperty(CastleABGTowerDetailDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleABGTowerDetailDialog.NAME = "CastleABGTowerDetails";
  return CastleABGTowerDetailDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleABGTowerDetailDialog = __s0local1;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_ABGTowerConnectionStateComponent = require("gge-module:export_ABGTowerConnectionStateComponent");
var __dep_export_ABGTowerInfoComponent = require("gge-module:export_ABGTowerInfoComponent");
var __dep_export_ButtonAttackComponent = require("gge-module:export_ButtonAttackComponent");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_CastleWorldmapBookmarkSetDialog = require("gge-module:export_CastleWorldmapBookmarkSetDialog");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
