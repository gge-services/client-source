Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleABGTowerInfoDialogProperties = require("gge-module:export_CastleABGTowerInfoDialogProperties");
var __dep_export_CastleWorldmapBookmarkSetDialogProperties = require("gge-module:export_CastleWorldmapBookmarkSetDialogProperties");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function ABGTowerInfoComponent(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._maxSize = __s3param1;
    if (__s3param0.txt_name) {
      __s3local0.itxt_name = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3param0.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    }
    if (__s3param0.txt_level) {
      __s3local0.itxt_level = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3param0.txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    }
    if (__s3param0.txt_xp) {
      __s3local0.itxt_xp = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3param0.txt_xp, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    }
    if (__s3param0.txt_points) {
      __s3local0.itxt_points = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3param0.txt_points, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0));
    }
    if (__s3param0.txt_units) {
      __s3local0.itxt_units = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3param0.txt_units, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    }
    if (__s3param0.txt_alliance) {
      __s3local0.itxt_alliance = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3param0.txt_alliance, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    }
    if (__s3param0.icon_points) {
      __s3param0.icon_points.toolTipText = "dialog_beyondTheHorizon_AllianceTower_tower_Statuette_tooltip";
    }
    if (__s3param0.icon_units) {
      __s3param0.icon_units.toolTipText = "dialog_beyondTheHorizon_AllianceTower_tower_troopsStationed_tooltip";
    }
    if (__s3param0.btn_info) {
      __s3local0.infoButton = __s3param0.btn_info;
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param0.btn_info);
    }
    if (__s3param0.btn_bookmark) {
      __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3param0.btn_bookmark], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
      __s3param0.btn_bookmark.toolTipText = "ringmenu_markLocation";
    }
    if (__s3param0.mc_connections) {
      __s3local0.connectionsComponent = new __dep_export_ABGTowerConnectionsComponent.ABGTowerConnectionsComponent(__s3param0.mc_connections, __dep_export_ABGTowerConnectionStateComponent.ABGTowerConnectionStateComponent.TYPE_DIALOG, __dep_export_ABGTowerConnectionStateComponent.ABGTowerConnectionStateComponent.SIZE_DIALOG, __dep_export_ABGTowerConnectionStateComponent.ABGTowerConnectionStateComponent.SPACING_DIALOG);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ABGTowerInfoComponent, __s1param0);
  ABGTowerInfoComponent.prototype.updateTowerInfo = function (__s16param0) {
    this.towerVO = __s16param0;
    if (this.itxt_name) {
      this.itxt_name.textContentVO.textId = __s16param0.areaNameString;
    }
    if (this.itxt_alliance) {
      this.itxt_alliance.textContentVO.stringValue = __s16param0.allianceName;
    }
    if (this.itxt_level) {
      this.itxt_level.textContentVO.textId = "levelX";
      this.itxt_level.textContentVO.textReplacements = [__s16param0.level];
    }
    if (this.itxt_xp) {
      this.itxt_xp.textContentVO.textId = "value_proportional_value";
      this.itxt_xp.textContentVO.textReplacements = [__s16param0.currentVictoryCountFromLevel, __s16param0.neededVictoryCountForLevel];
    }
    if (this.itxt_points) {
      this.itxt_points.textContentVO.numberValue = __s16param0.currentTowerPoints;
    }
    if (this.itxt_units) {
      this.itxt_units.textContentVO.textId = "value_proportional_value";
      this.itxt_units.textContentVO.textReplacements = [__s16param0.getCurrentUnitSupport(), __s16param0.towerInfoVO.unitCapacity];
    }
    if (this.disp.mc_level) {
      this.disp.mc_level.mc_xpBar.scaleX = __s16param0.currentVictoryCountFromLevel / __s16param0.neededVictoryCountForLevel;
    }
    if (this.disp.mc_tower) {
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp.mc_tower);
      if (this._maxSize.y > 145) {
        this.disp.mc_tower.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(__s16param0, this._maxSize, true, false, true, "panel_action_jumpTo", null, true));
      } else {
        this.disp.mc_tower.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(__s16param0, this._maxSize, true, false, true, "panel_action_jumpTo"));
      }
    }
    if (this.disp.mc_connections) {
      this.connectionsComponent.setConnections(__s16param0.connections);
    }
    if (this.disp.mc_myTower) {
      var __s16local0 = false;
      for (var __s16local1 = 0, __s16local2 = __s16param0.connections; __s16local1 < __s16local2.length; __s16local1++) {
        var __s16local3 = __s16local2[__s16local1];
        if (__s16local3 !== undefined && __s16local3.playerName == __dep_export_CastleModel.CastleModel.userData.userName) {
          __s16local0 = true;
        }
      }
      this.disp.mc_myTower.visible = __s16local0;
    }
  };
  ABGTowerInfoComponent.prototype.onClick = function (__s33param0) {
    __s1param0.prototype.onClick.call(this, __s33param0);
    switch (__s33param0.target) {
      case this.infoButton:
        if (this.towerVO.ownerInfo.allianceID == __dep_export_CastleModel.CastleModel.userData.allianceID) {
          __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDialogsWithTypeAndDefaultValues(__dep_export_CastleABGTowerDetailAllianceDialog.CastleABGTowerDetailAllianceDialog, new __dep_export_CastleABGTowerInfoDialogProperties.CastleABGTowerInfoDialogProperties(this.towerVO));
        } else {
          __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDialogsWithTypeAndDefaultValues(__dep_export_CastleABGTowerDetailDialog.CastleABGTowerDetailDialog, new __dep_export_CastleABGTowerInfoDialogProperties.CastleABGTowerInfoDialogProperties(this.towerVO));
        }
        break;
      case this.disp.btn_bookmark:
        __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleWorldmapBookmarkSetDialog.CastleWorldmapBookmarkSetDialog, new __dep_export_CastleWorldmapBookmarkSetDialogProperties.CastleWorldmapBookmarkSetDialogProperties(this.towerVO, __dep_export_CastleWorldmapBookmarkSetDialog.CastleWorldmapBookmarkSetDialog.CAT_PERSONAL_BOOKMARK));
    }
  };
  return ABGTowerInfoComponent;
}(require("gge-module:export_CastleItemRenderer").CastleItemRenderer);
exports.ABGTowerInfoComponent = __s0local0;
var __dep_export_CastleABGTowerDetailAllianceDialog = require("gge-module:export_CastleABGTowerDetailAllianceDialog");
var __dep_export_CastleABGTowerDetailDialog = require("gge-module:export_CastleABGTowerDetailDialog");
var __dep_export_CastleWorldmapBookmarkSetDialog = require("gge-module:export_CastleWorldmapBookmarkSetDialog");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ABGTowerConnectionsComponent = require("gge-module:export_ABGTowerConnectionsComponent");
var __dep_export_ABGTowerConnectionStateComponent = require("gge-module:export_ABGTowerConnectionStateComponent");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
