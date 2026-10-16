Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_5 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleAllianceInfoDialogProperties = require("gge-module:export_CastleAllianceInfoDialogProperties");
var __dep_export_CastleAllianceDialogProperties = require("gge-module:export_CastleAllianceDialogProperties");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __dep_export_AllianceCrestEnum = require("gge-module:export_AllianceCrestEnum");
var __dep_export_AllianceCrestSizeEnum = require("gge-module:export_AllianceCrestSizeEnum");
var __dep_export_CastleAllianceCrestHelper = require("gge-module:export_CastleAllianceCrestHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = createjs.MovieClip;
var __s0local1 = function (__s1param0) {
  function WorldMapInfoLayer(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._playerInfoCreationTime = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._parentPanel = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(WorldMapInfoLayer, __s1param0);
  Object.defineProperty(WorldMapInfoLayer.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapInfoLayer.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapInfoLayer.prototype, "playerInfoLayer", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  WorldMapInfoLayer.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.itxt_coordinates = this.textFieldManager.registerTextField(this.playerInfoLayer.mc_coordinates.txt_coordinate, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
    this.itxt_noobProtectionTime = this.textFieldManager.registerTextField(this.playerInfoLayer.mc_noobProtection.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(""));
  };
  WorldMapInfoLayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAArrived));
  };
  WorldMapInfoLayer.prototype.setMapObjectInfo = function (__s15param0) {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAArrived));
    this.parsePlayerInfo(__s15param0);
  };
  WorldMapInfoLayer.prototype.onGAAArrived = function (__s17param0) {
    this.updatePlayerInfo();
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAArrived));
  };
  WorldMapInfoLayer.prototype.parsePlayerInfo = function (__s19param0) {
    this._mapObject = __s19param0;
    var __s19local0 = this.getCreatorByKingdomID(__s19param0.worldmapObjectVO.kingdomID);
    __s19local0.createWorldMapInfo(__s19param0.worldmapObjectVO);
    this._playerInfo = __s19local0.worldMapInfo;
    this._playerInfoCreationTime = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer());
    this.updatePlayerInfo();
  };
  WorldMapInfoLayer.prototype.updatePlayerInfo = function () {
    if (this._mapObject && this._playerInfo) {
      this.fillBasicInfo();
      if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_4.WorldIsland.KINGDOM_ID && __dep_exact_81dacdf05bd32292.instanceOfClass(this._mapObject, "ResourceIsleMapobject")) {
        this.fillIslandKingdomInfo();
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(this._mapObject, "MonumentMapobject")) {
        this.fillMonumentInfo();
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(this._mapObject, "LaboratoryMapobject")) {
        this.fillLaboratoryInfo();
      } else {
        this.playerInfoLayer.mc_ressi.visible = false;
      }
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(this._mapObject, "ABGAllianceTowerMapobject")) {
        this.fillABGAllianceTowerInfo();
      } else if (this._allianceCrestContainer) {
        __dep_exact_9e901e8e2483a22f_4.MovieClipHelper.clearMovieClip(this._allianceCrestContainer);
        this._allianceCrestContainer.visible = false;
      }
      if (this._playerInfo.isProtected) {
        this.fillProtectedPlayerInfo();
      } else {
        this.fillUnprotectedPlayerInfo();
      }
      this.playerInfoLayer.btn_allianceName.visible = this._playerInfo.isInAlliance;
      if (this._playerInfo.isInAlliance) {
        this.fillAlliancePlayerInfo();
      }
      this._parentPanel.updateCache();
    }
  };
  WorldMapInfoLayer.prototype.fillBasicInfo = function () {
    this.playerInfoLayer.mc_ressi.mouseChildren = false;
    var __s33local0 = this.textFieldManager.registerTextField(this.playerInfoLayer.txt_castleName, this._playerInfo.castleNameTextVO);
    this.textFieldManager.registerTextField(this.playerInfoLayer.txt_level, this._playerInfo.levelTextVO);
    var __s33local1 = this.textFieldManager.registerTextField(this.playerInfoLayer.btn_playerName.txt_label, this._playerInfo.playerNameTextVO);
    this.playerInfoLayer.btn_playerName.enableButton = this._playerInfo.isPlayerClickAble;
    if (this.playerInfoLayer.btn_playerName.cacheCanvas) {
      this.playerInfoLayer.btn_playerName.updateCache();
    }
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.playerInfoLayer.mc_playercrest, this._playerInfo.crestVO, null, true);
    this.playerInfoLayer.btn_playerName.visible = true;
    this.playerInfoLayer.mc_playercrest.visible = true;
    try {
      __s33local0.autoFitToBounds = true;
      __s33local1.autoFitToBounds = true;
    } catch (__s37local0) {
      __dep_exact_9e901e8e2483a22f_3.debug(__s37local0.stack);
    }
  };
  WorldMapInfoLayer.prototype.fillIslandKingdomInfo = function () {
    var __s39local0 = 0;
    this.playerInfoLayer.mc_ressi.visible = true;
    var __s39local1 = __dep_export_CastleModel.CastleModel.eilandData.getIsleBlueprint(this._mapObject.isleVO.isleID);
    var __s39local2 = 0;
    switch (this._mapObject.isleVO.typeName) {
      case "Aquamarine":
        __s39local2 = 9;
        __s39local0 = __s39local1.fixedLootAquamarine;
        break;
      case "Stone":
        __s39local2 = 2;
        __s39local0 = __s39local1.fixedLootStone;
        break;
      case "Wood":
        __s39local2 = 1;
        __s39local0 = __s39local1.fixedLootWood;
        break;
      case "Food":
        __s39local2 = 3;
        __s39local0 = __s39local1.fixedLootFood;
    }
    __s39local1 = __dep_export_CastleModel.CastleModel.eilandData.getIsleBlueprint(this._mapObject.isleVO.isleID);
    this.playerInfoLayer.mc_ressi.icon_ressi.gotoAndStop(__s39local2);
    this.textFieldManager.registerTextField(this.playerInfoLayer.mc_ressi.txt_ressiAmount, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s39local0));
    this.playerInfoLayer.mc_ressi.toolTipText = null;
  };
  WorldMapInfoLayer.prototype.fillMonumentInfo = function () {
    this.playerInfoLayer.mc_ressi.icon_ressi.gotoAndStop(10);
    this.textFieldManager.registerTextField(this.playerInfoLayer.mc_ressi.txt_ressiAmount, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("value_percentage", [this._mapObject.worldmapObjectVO.landmarkBonus]));
    this.playerInfoLayer.mc_ressi.visible = true;
    this.playerInfoLayer.mc_ressi.toolTipText = "dialog_monument_fameMonuments_tooltip";
  };
  WorldMapInfoLayer.prototype.fillLaboratoryInfo = function () {
    var __s44local0 = this._mapObject.worldmapObjectVO;
    var __s44local1 = 0;
    var __s44local2 = "dialog_laboratory_resourceBonus_tooltip";
    switch (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID) {
      case __dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID:
        __s44local1 = 11;
        __s44local2 = "dialog_laboratory_EisenerzBonus_tooltip";
        break;
      case __dep_exact_26a421b704832cff_5.WorldIce.KINGDOM_ID:
        __s44local1 = 6;
        __s44local2 = "dialog_laboratory_coalBonus_tooltip";
        break;
      case __dep_exact_26a421b704832cff.WorldDessert.KINGDOM_ID:
        __s44local1 = 7;
        __s44local2 = "dialog_laboratory_oilBonus_tooltip";
        break;
      case __dep_exact_26a421b704832cff_3.WorldVolcano.KINGDOM_ID:
        __s44local1 = 8;
        __s44local2 = "dialog_laboratory_glasBonus_tooltip";
    }
    this.playerInfoLayer.mc_ressi.icon_ressi.gotoAndStop(__s44local1);
    this.textFieldManager.registerTextField(this.playerInfoLayer.mc_ressi.txt_ressiAmount, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("value_percentage", [__s44local0.landmarkBonus]));
    this.playerInfoLayer.mc_ressi.visible = true;
    this.playerInfoLayer.mc_ressi.toolTipText = {
      t: __s44local2,
      p: [__s44local0.landmarkBonus]
    };
  };
  WorldMapInfoLayer.prototype.fillABGAllianceTowerInfo = function () {
    this.textFieldManager.registerTextField(this.playerInfoLayer.txt_level, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.playerInfoLayer.btn_playerName.visible = false;
    this.playerInfoLayer.mc_playercrest.visible = false;
    if (!this._allianceCrestContainer) {
      this._allianceCrestContainer = new __s0local0();
      this._allianceCrestContainer.x = this.playerInfoLayer.mc_playercrest.x;
      this._allianceCrestContainer.y = this.playerInfoLayer.mc_playercrest.y;
      this.playerInfoLayer.addChild(this._allianceCrestContainer);
    }
    this._allianceCrestContainer.visible = true;
    __dep_export_CastleAllianceCrestHelper.CastleAllianceCrestHelper.setCrestGraphics(this._allianceCrestContainer, this._mapObject.worldmapObjectVO.ownerInfo.allianceCrestVO, __dep_export_AllianceCrestSizeEnum.AllianceCrestSizeEnum.SIZE_MAP_INFO, __dep_export_AllianceCrestEnum.AllianceCrestEnum.DEFAULT_CREST_SIMPLE);
  };
  WorldMapInfoLayer.prototype.fillProtectedPlayerInfo = function () {
    this.playerInfoLayer.mc_coordinates.visible = false;
    this.playerInfoLayer.mc_noobProtection.visible = true;
    if (this._mapObject.worldmapObjectVO.isOwnMapobject) {
      this.playerInfoLayer.mc_noobProtection.toolTipText = {
        t: "panel_attackWarning_noobProtection"
      };
    } else {
      this.playerInfoLayer.mc_noobProtection.toolTipText = {
        t: "panel_multiInfos_noobProtected"
      };
    }
    this.updateNoobTimeText();
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    this.playerInfoLayer.mc_noobProtection.mouseChildren = false;
    this.playerInfoLayer.mc_noobProtection.enabled = false;
    this.playerInfoLayer.mc_noobProtection.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
  };
  WorldMapInfoLayer.prototype.fillUnprotectedPlayerInfo = function () {
    if (this.playerInfoLayer && (this.playerInfoLayer.mc_coordinates && (this.playerInfoLayer.mc_coordinates.visible = true), this.playerInfoLayer.mc_noobProtection && (this.playerInfoLayer.mc_noobProtection.visible = false), this.itxt_coordinates && this.itxt_coordinates.textContentVO)) {
      try {
        this.itxt_coordinates.autoFitToBounds = true;
        this.itxt_coordinates.selectable = true;
      } catch (__s58local0) {
        __dep_exact_9e901e8e2483a22f_3.debug(__s58local0.toString());
      }
      this.itxt_coordinates.textContentVO.textId = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_COORDS;
      if (this._playerInfo) {
        this.itxt_coordinates.textContentVO.textReplacements = [this._playerInfo.xPos, this._playerInfo.yPos];
      }
    }
  };
  WorldMapInfoLayer.prototype.fillAlliancePlayerInfo = function () {
    this.playerInfoLayer.btn_allianceName.enableButton = this._playerInfo.isClanNameClickAble;
    this.textFieldManager.registerTextField(this.playerInfoLayer.btn_allianceName.txt_label, this._playerInfo.clanNameTextVO);
  };
  WorldMapInfoLayer.prototype.updateNoobTimeText = function () {
    if (this.itxt_noobProtectionTime && (!this.itxt_noobProtectionTime || this.itxt_noobProtectionTime.textContentVO)) {
      var __s63local0 = __dep_exact_f855840627e6e145.int(this._playerInfo.remainingProtectionTime - (__dep_export_CachedTimer.CachedTimer.getCachedTimer() - this._playerInfoCreationTime) / 1000);
      var __s63local1 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getCantAttackTimeString(__s63local0);
      this.itxt_noobProtectionTime.textContentVO.stringValue = __s63local1;
      try {
        this.itxt_noobProtectionTime.autoFitToBounds = true;
      } catch (__s67local0) {
        __dep_exact_9e901e8e2483a22f_3.debug(__s67local0.toString());
      }
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.restoreWidth(this.itxt_noobProtectionTime);
      this._parentPanel.updateCache();
    }
  };
  WorldMapInfoLayer.prototype.onTimerUpdate = function (__s69param0) {
    this.updateNoobTimeText();
  };
  WorldMapInfoLayer.prototype.getCreatorByKingdomID = function (__s71param0) {
    if (__s71param0 == __dep_exact_26a421b704832cff_2.FactionConst.KINGDOM_ID) {
      return new __dep_export_FactionWorldMapObjectInfoCreator.FactionWorldMapObjectInfoCreator();
    } else {
      return new __dep_export_BaseWorldMapObjectInfoCreator.BaseWorldMapObjectInfoCreator();
    }
  };
  WorldMapInfoLayer.prototype.onClick = function (__s75param0) {
    __s1param0.prototype.onClick.call(this, __s75param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s75param0.target) && !__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive) {
      switch (__s75param0.target) {
        case this.playerInfoLayer.btn_allianceName:
          if (this._playerInfo.allianceID == __dep_export_CastleModel.CastleModel.userData.allianceID) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceDialog.CastleAllianceDialog, new __dep_export_CastleAllianceDialogProperties.CastleAllianceDialogProperties());
          } else {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastleAllianceInfoDialog.CastleAllianceInfoDialog, new __dep_export_CastleAllianceInfoDialogProperties.CastleAllianceInfoDialogProperties(this._playerInfo.allianceID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
          }
          break;
        case this.playerInfoLayer.btn_playerName:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(this._playerInfo.playerID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      }
    }
  };
  return WorldMapInfoLayer;
}(__dep_exact_9e901e8e2483a22f.FlashUIComponent);
exports.WorldMapInfoLayer = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleAllianceInfoDialog = require("gge-module:export_CastleAllianceInfoDialog");
var __dep_export_CastleAllianceDialog = require("gge-module:export_CastleAllianceDialog");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_BaseWorldMapObjectInfoCreator = require("gge-module:export_BaseWorldMapObjectInfoCreator");
var __dep_export_FactionWorldMapObjectInfoCreator = require("gge-module:export_FactionWorldMapObjectInfoCreator");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleTextFieldHelper = require("gge-module:export_CastleTextFieldHelper");
