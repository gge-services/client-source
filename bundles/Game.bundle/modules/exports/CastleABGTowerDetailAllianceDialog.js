Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SAllianceBattleGroundGetTowerCastlesInfoVO = require("gge-module:export_C2SAllianceBattleGroundGetTowerCastlesInfoVO");
var __dep_export_C2SGetAllianceTowerBuffInfoVO = require("gge-module:export_C2SGetAllianceTowerBuffInfoVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ABGTowerConnectionVO = require("gge-module:export_ABGTowerConnectionVO");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleWorldmapBookmarkSetDialogProperties = require("gge-module:export_CastleWorldmapBookmarkSetDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleABGTowerDetailAllianceDialog() {
    return __s1param0.call(this, CastleABGTowerDetailAllianceDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleABGTowerDetailAllianceDialog, __s1param0);
  CastleABGTowerDetailAllianceDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_support, this.dialogDisp.btn_defence, this.dialogDisp.btn_jumpTo], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
  };
  CastleABGTowerDetailAllianceDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_AllianceTower_towerDetails_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_players, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_AllianceTower_connectedPlayers_header")));
    this.dialogDisp.icon_abg_tower_points_M.toolTipText = "dialog_beyondTheHorizon_AllianceTower_tower_Statuette_tooltip";
    this.dialogDisp.icon_soldiercount.toolTipText = "dialog_beyondTheHorizon_AllianceTower_tower_troopsStationed_tooltip";
    this.tx_buff = this.textFieldManager.registerTextField(this.dialogDisp.txt_buff, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    new __dep_export_ABGTowerInfoComponent.ABGTowerInfoComponent(this.dialogDisp, new __s0local0(90, 150)).updateTowerInfo(this.dialogProperties.targetTowerVO);
    this.dialogDisp.btn_support.toolTipText = "dialog_beyondTheHorizon_AllianceTower_tower_stationTroops_tooltip";
    this.dialogDisp.btn_defence.toolTipText = "dialog_beyondTheHorizon_AllianceTower_tower_towerDefense_tooltip";
    this.dialogDisp.btn_jumpTo.toolTipText = "dialog_beyondTheHorizon_AllianceTower_tower_jumpTower_tooltip";
    this.buffInfo = null;
    this.towerSupportButton = new __dep_export_ButtonSupportDefenceComponent.ButtonSupportDefenceComponent(this.dialogDisp.btn_support.basicButton);
    this.towerDefenceButton = new __dep_export_ButtonDefenceComponent.ButtonDefenceComponent(this.dialogDisp.btn_defence.basicButton);
    __dep_exact_9e901e8e2483a22f_2.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceBattleGroundGetTowerCastlesInfoVO.C2SAllianceBattleGroundGetTowerCastlesInfoVO(this.dialogProperties.targetTowerVO.absAreaPosX, this.dialogProperties.targetTowerVO.absAreaPosY));
    __dep_exact_9e901e8e2483a22f_2.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAllianceTowerBuffInfoVO.C2SGetAllianceTowerBuffInfoVO(new __s0local0(this.dialogProperties.targetTowerVO.absAreaPosX, this.dialogProperties.targetTowerVO.absAreaPosY), this.dialogProperties.targetTowerVO.ownerInfo.allianceID));
    this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ABG_TOWER_CASTLES_INFO, this.bindFunction(this.onCastleInfoGot));
    this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ABG_TOWERS_BUFF_INFO, this.bindFunction(this.onBuffInfoGot));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  CastleABGTowerDetailAllianceDialog.prototype.onBuffInfoGot = function (__s9param0) {
    this.buffInfo = __s9param0.params[0];
  };
  CastleABGTowerDetailAllianceDialog.prototype.onCastleInfoGot = function (__s11param0) {
    this.castles = [];
    for (var __s11local0 = 0; __s11local0 < __s11param0.params.length; __s11local0++) {
      this.castles.push(__s11param0.params[__s11local0]);
    }
    this.fillList();
  };
  CastleABGTowerDetailAllianceDialog.prototype.onTimer = function (__s15param0) {
    if (this.buffInfo) {
      if (this.buffInfo.isActive) {
        this.tx_buff.textContentVO = new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_beyondTheHorizon_AllianceTower_buffStatus_active", [__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__dep_export_CastleModel.CastleModel.allianceBattlegroundData.remainingSecondsTillRevive)]);
      } else {
        this.tx_buff.textContentVO = new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_beyondTheHorizon_AllianceTower_buffStatus_inactive");
      }
      this.tx_buff.color = this.buffInfo.isActive ? 15974986 : 15388850;
    }
  };
  CastleABGTowerDetailAllianceDialog.prototype.fillList = function () {
    this.towerSupportButton.targetWMO = this.dialogProperties.targetTowerVO;
    this.towerSupportButton.initAsDialogButton();
    this.towerDefenceButton.targetWMO = this.dialogProperties.targetTowerVO;
    this.towerDefenceButton.init();
    this.supportCastleButtons = [];
    for (var __s20local0 = 0; __s20local0 < 5; __s20local0++) {
      var __s20local1 = this.dialogDisp["item" + __s20local0];
      if (this.dialogProperties.targetTowerVO.connections.length > __s20local0) {
        __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s20local1.mc_castle);
        __s20local1.visible = true;
        __s20local1.mc_castle.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(this.castles[__s20local0], new __s0local0(64, 46), true, false, true, "panel_action_jumpTo"));
        this.textFieldManager.registerTextField(__s20local1.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(this.castles[__s20local0].ownerInfo.playerName));
        this.textFieldManager.registerTextField(__s20local1.txt_points, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.castles[__s20local0].abgPlayerTowerPoints));
        __s20local1.mc_pointIcon.toolTipText = "stats_contributeAllianceStatuette";
        var __s20local2 = new __dep_export_ABGTowerConnectionStateComponent.ABGTowerConnectionStateComponent(__dep_export_ABGTowerConnectionStateComponent.ABGTowerConnectionStateComponent.TYPE_DIALOG, __dep_export_ABGTowerConnectionStateComponent.ABGTowerConnectionStateComponent.SIZE_DIALOG_BIG, true);
        var __s20local3 = new __dep_export_ABGTowerConnectionVO.ABGTowerConnectionVO();
        __s20local3.fillFromConnectionValues([this.castles[__s20local0].absAreaPosX, this.castles[__s20local0].absAreaPosY, this.castles[__s20local0].ownerInfo.playerName, this.castles[__s20local0].isABGTowerAttackable ? 1 : 0]);
        __s20local2.setConnection(__s20local3);
        __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s20local1.mc_connection);
        __s20local1.mc_connection.addChild(__s20local2.disp);
        __dep_export_ButtonHelper.ButtonHelper.initButtons([__s20local1.btn_support], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
        var __s20local4 = new __dep_export_ButtonSupportDefenceComponent.ButtonSupportDefenceComponent(__s20local1.btn_support.basicButton);
        __s20local4.targetWMO = this.castles[__s20local0];
        __s20local4.initAsDialogButton();
        this.supportCastleButtons.push(__s20local4);
        __s20local1.mc_pointIcon.tootTipText = "dialog_beyondTheHorizon_AllianceTower_connectedPlayers_header";
      } else {
        __s20local1.visible = false;
      }
    }
  };
  CastleABGTowerDetailAllianceDialog.prototype.hideLoaded = function (__s26param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    this.supportCastleButtons.forEach(function (__s28param0) {
      var __s28local0 = [];
      for (var __s28local1 = 1; __s28local1 < arguments.length; __s28local1++) {
        __s28local0[__s28local1 - 1] = arguments[__s28local1];
      }
      __s28param0.destroy();
    });
    this.towerSupportButton.destroy();
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ABG_TOWER_CASTLES_INFO, this.bindFunction(this.onCastleInfoGot));
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ABG_TOWERS_BUFF_INFO, this.bindFunction(this.onBuffInfoGot));
  };
  CastleABGTowerDetailAllianceDialog.prototype.onClick = function (__s32param0) {
    __s1param0.prototype.onClick.call(this, __s32param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s32param0.target)) {
      switch (__s32param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_bookmark:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleWorldmapBookmarkSetDialog.CastleWorldmapBookmarkSetDialog, new __dep_export_CastleWorldmapBookmarkSetDialogProperties.CastleWorldmapBookmarkSetDialogProperties(this.dialogProperties.targetTowerVO, __dep_export_CastleWorldmapBookmarkSetDialog.CastleWorldmapBookmarkSetDialog.CAT_PERSONAL_BOOKMARK));
          break;
        case this.dialogDisp.btn_jumpTo:
          __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [this.dialogProperties.targetTowerVO.kingdomID, this.dialogProperties.targetTowerVO.absAreaPos.x, this.dialogProperties.targetTowerVO.absAreaPos.y]);
          break;
        case this.dialogDisp.btn_support:
          this.towerSupportButton.onClick();
          break;
        case this.dialogDisp.btn_defence:
          this.towerDefenceButton.onClick();
          break;
        case this.dialogDisp.item0.btn_support:
          this.supportCastleButtons[0].onClick();
          break;
        case this.dialogDisp.item1.btn_support:
          this.supportCastleButtons[1].onClick();
          break;
        case this.dialogDisp.item2.btn_support:
          this.supportCastleButtons[2].onClick();
          break;
        case this.dialogDisp.item3.btn_support:
          this.supportCastleButtons[3].onClick();
          break;
        case this.dialogDisp.item4.btn_support:
          this.supportCastleButtons[4].onClick();
      }
    }
  };
  Object.defineProperty(CastleABGTowerDetailAllianceDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleABGTowerDetailAllianceDialog.NAME = "CastleABGTowerDetailsAlliance";
  return CastleABGTowerDetailAllianceDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleABGTowerDetailAllianceDialog = __s0local1;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_ABGTowerConnectionStateComponent = require("gge-module:export_ABGTowerConnectionStateComponent");
var __dep_export_ABGTowerInfoComponent = require("gge-module:export_ABGTowerInfoComponent");
var __dep_export_ButtonDefenceComponent = require("gge-module:export_ButtonDefenceComponent");
var __dep_export_ButtonSupportDefenceComponent = require("gge-module:export_ButtonSupportDefenceComponent");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_CastleWorldmapBookmarkSetDialog = require("gge-module:export_CastleWorldmapBookmarkSetDialog");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
