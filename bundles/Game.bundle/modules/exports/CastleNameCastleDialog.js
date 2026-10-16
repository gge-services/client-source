Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_C2SRenameCastleVO = require("gge-module:export_C2SRenameCastleVO");
var __dep_export_CastleEilandEvent = require("gge-module:export_CastleEilandEvent");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_LaboratoryEvent = require("gge-module:export_LaboratoryEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_MonumentEvent = require("gge-module:export_MonumentEvent");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_BasicRenameDialog = require("gge-module:export_BasicRenameDialog");
var __dep_export_NameCastleItemVO = require("gge-module:export_NameCastleItemVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleNameCastleDialog() {
    return __s1param0.call(this, CastleNameCastleDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleNameCastleDialog, __s1param0);
  Object.defineProperty(CastleNameCastleDialog.prototype, "defaultName", {
    get: function () {
      return this.getInsertTextReplacement();
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicRenameDialog.BasicRenameDialog.prototype, "defaultName").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNameCastleDialog.prototype, "textMaxChars", {
    get: function () {
      return __dep_exact_26a421b704832cff.PlayerConst.CASTLE_NAME_MAX_LENGTH;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicRenameDialog.BasicRenameDialog.prototype, "textMaxChars").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleNameCastleDialog.prototype.showLoaded = function (__s13param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s13param0);
    CastleNameCastleDialog.__initialize_static_members();
    if (!this.nameDialogProperties.worldmapVO || this.nameDialogProperties.worldmapVO.isOwnMapobject) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
      if (this.nameDialogProperties.worldmapVO) {
        this.dialogDisp.mc_cood.visible = this.nameDialogProperties.worldmapVO.absAreaPosX >= 0 && this.nameDialogProperties.worldmapVO.absAreaPosY >= 0;
        __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_castleHolder);
        this.dialogDisp.mc_castleHolder.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(this.nameDialogProperties.worldmapVO, new __s0local0(80, 50), true, false, false));
        this.itxt_cood = this.textFieldManager.registerTextField(this.dialogDisp.mc_cood.txt_coordinate, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_4.GenericTextIds.VALUE_COORDS, [this.nameDialogProperties.worldmapVO.absAreaPosX, this.nameDialogProperties.worldmapVO.absAreaPosY]));
        this.itxt_cood.autoFitToBounds = true;
        this.initStaticText(this.dialogDisp.txt_title, this.getTextIdByType(__dep_export_NameCastleItemVO.NameCastleItemVO.TEXT_ID_TYPE_TITLE)).autoFitToBounds = true;
        this.initStaticText(this.dialogDisp.txt_copy, this.getTextIdByType(__dep_export_NameCastleItemVO.NameCastleItemVO.TEXT_ID_TYPE_DESCRIPTION)).autoFitToBounds = true;
        this.initStaticText(this.dialogDisp.txt_insertTitle, this.getTextIdByType(__dep_export_NameCastleItemVO.NameCastleItemVO.TEXT_ID_TYPE_INSERT_TITLE)).autoFitToBounds = true;
        if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.nameDialogProperties.worldmapVO, "FactionCampMapobjectVO")) {
          var __s13local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_FACTION).ownFaction == __dep_exact_26a421b704832cff_4.FactionConst.BLUE_FACTION ? __dep_export_FactionEventVO.FactionEventVO.BLUE_CREST_VO : __dep_export_FactionEventVO.FactionEventVO.RED_CREST_VO;
          __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest1, __s13local0);
          __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest2, __s13local0);
        } else {
          __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest1, __dep_export_CastleModel.CastleModel.userData.playerCrest);
          __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest2, __dep_export_CastleModel.CastleModel.userData.playerCrest);
        }
      }
    } else {
      this.hide();
    }
  };
  CastleNameCastleDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ARC_ARRIVED, this.bindFunction(this.onServerOk));
    this.controller.addEventListener(__dep_export_CastleEilandEvent.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onEilandReset));
    this.controller.addEventListener(__dep_export_MonumentEvent.MonumentEvent.MONUMENTS_RESET_WARNING, this.bindFunction(this.onMonumentReset));
    this.controller.addEventListener(__dep_export_LaboratoryEvent.LaboratoryEvent.LABORATORY_RESET_WARNING, this.bindFunction(this.onLaboratoryReset));
    if (this.nameDialogProperties.worldmapVO.kingdomID == __dep_exact_26a421b704832cff_4.FactionConst.KINGDOM_ID) {
      __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    }
  };
  CastleNameCastleDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ARC_ARRIVED, this.bindFunction(this.onServerOk));
    this.controller.removeEventListener(__dep_export_CastleEilandEvent.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onEilandReset));
    this.controller.removeEventListener(__dep_export_MonumentEvent.MonumentEvent.MONUMENTS_RESET_WARNING, this.bindFunction(this.onMonumentReset));
    this.controller.removeEventListener(__dep_export_LaboratoryEvent.LaboratoryEvent.LABORATORY_RESET_WARNING, this.bindFunction(this.onLaboratoryReset));
    if (this.nameDialogProperties.worldmapVO.kingdomID == __dep_exact_26a421b704832cff_4.FactionConst.KINGDOM_ID) {
      __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    }
  };
  CastleNameCastleDialog.prototype.onEventRemoved = function (__s26param0) {
    if (__s26param0.specialEventVO.eventId == __dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_FACTION) {
      this.hide();
    }
  };
  CastleNameCastleDialog.prototype.onEilandReset = function (__s29param0) {
    if (this.nameDialogProperties.kingdomID == __dep_exact_26a421b704832cff_1.WorldIsland.KINGDOM_ID) {
      this.hide();
    }
  };
  CastleNameCastleDialog.prototype.onMonumentReset = function (__s32param0) {
    if (this.nameDialogProperties.worldmapVO.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_MONUMENT) {
      __dep_exact_9e901e8e2483a22f_1.debug("gonna hide that error dialog");
      this.layoutManager.hideDialog(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog);
      this.hide();
    }
  };
  CastleNameCastleDialog.prototype.onLaboratoryReset = function (__s35param0) {
    if (this.nameDialogProperties.worldmapVO.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_LABORATORY) {
      __dep_exact_9e901e8e2483a22f_1.debug("gonna hide that error dialog");
      this.layoutManager.hideDialog(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog);
      this.hide();
    }
  };
  CastleNameCastleDialog.prototype.validate = function () {
    var __s38local0 = this.itxt_insert.text;
    __s38local0.substr(0, __dep_exact_26a421b704832cff.PlayerConst.CASTLE_NAME_MAX_LENGTH);
    if (__s38local0.length < __dep_exact_9e901e8e2483a22f.BasicModel.basicLocalization.getUsernameMinLength) {
      this.alert("dialog_eiland_titleMenu_error", "alert_castlenameTooShort");
    } else {
      if (__dep_exact_9e901e8e2483a22f_2.TextValide.isUsernameValide(__s38local0) || this.itxt_cood.text == this.itxt_insert.text) {
        return true;
      }
      this.alert("generic_alert_watchout", "errorCode_28");
    }
    return false;
  };
  CastleNameCastleDialog.prototype.sendCommand = function () {
    var __s43local0 = __dep_exact_f855840627e6e145.int(this.nameDialogProperties.worldmapVO ? this.nameDialogProperties.worldmapVO.objectId : this.nameDialogProperties.castleID);
    if (this.nameDialogProperties.worldmapVO) {
      var __s43local1 = this.itxt_insert.text;
      __s43local1.substr(0, __dep_exact_26a421b704832cff.PlayerConst.CASTLE_NAME_MAX_LENGTH);
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SRenameCastleVO.C2SRenameCastleVO(__s43local0, this.nameDialogProperties.kingdomID, __s43local1, 0, this.nameDialogProperties.worldmapVO.areaType));
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
    }
  };
  CastleNameCastleDialog.prototype.onServerOk = function (__s46param0) {
    var __s46local0 = JSON.parse(__s46param0.params[1]);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
    if (this.nameDialogProperties.castleID == __dep_exact_f855840627e6e145.int(__s46local0.CID)) {
      this.hide();
    }
  };
  CastleNameCastleDialog.prototype.getTextIdByType = function (__s49param0) {
    var __s49local0 = CastleNameCastleDialog.TEXT_ID_LIST.get(__dep_export_ClientConstUtils.ClientConstUtils.getClassFromObject(this.nameDialogProperties.worldmapVO));
    if (__s49local0) {
      return __dep_exact_92d05af59ee2ff30_1.Localize.text(__s49local0[__s49param0]);
    } else {
      return "";
    }
  };
  CastleNameCastleDialog.prototype.getInsertTextReplacement = function () {
    var __s53local0 = this.nameDialogProperties.worldmapVO;
    var __s53local1 = "";
    var __s53local2 = null;
    switch (true) {
      case __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s53local0, "KingdomCastleMapobjectVO"):
      case __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s53local0, "CastleMapobjectVO"):
        __s53local1 = "castle_placeholder";
        __s53local2 = [__dep_export_CastleModel.CastleModel.userData.userName];
        break;
      case __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s53local0, "CapitalMapobjectVO"):
        __s53local1 = "capital_placeholder";
        __s53local2 = [__dep_export_CastleModel.CastleModel.userData.userName];
        break;
      case __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s53local0, "MetropolMapobjectVO"):
        __s53local1 = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("metropol_name_short");
        __s53local2 = [__dep_export_CastleModel.CastleModel.userData.userName];
        break;
      case __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s53local0, "OutpostMapobjectVO"):
        __s53local1 = "outpost_placeholder";
        __s53local2 = [__dep_export_CastleModel.CastleModel.userData.userName];
        break;
      case __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s53local0, "VillageMapobjectVO"):
      case __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s53local0, "MonumentMapobjectVO"):
      case __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s53local0, "KingstowerMapobjectVO"):
      case __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s53local0, "LaboratoryMapobjectVO"):
        __s53local1 = __dep_exact_9e901e8e2483a22f_4.GenericTextIds.VALUE_COORDS;
        __s53local2 = [this.nameDialogProperties.worldmapVO.absAreaPosX, this.nameDialogProperties.worldmapVO.absAreaPosY];
        break;
      case __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s53local0, "FactionCampMapobjectVO"):
        if (CastleNameCastleDialog.isMyFactionMainCamp(__s53local0)) {
          __s53local1 = "faction_camp_placeholder";
          __s53local2 = [__dep_export_CastleModel.CastleModel.userData.userName];
        } else {
          __s53local1 = __dep_exact_9e901e8e2483a22f_4.GenericTextIds.VALUE_COORDS;
          __s53local2 = [this.nameDialogProperties.worldmapVO.absAreaPosX, this.nameDialogProperties.worldmapVO.absAreaPosY];
        }
    }
    return __dep_export_CastleModel.CastleModel.languageData.getTextById(__s53local1, __s53local2).substr(0, __dep_exact_26a421b704832cff.PlayerConst.CASTLE_NAME_MAX_LENGTH);
  };
  CastleNameCastleDialog._createTextIdList = function () {
    var __s58local0 = new Map();
    __s58local0.set(__dep_export_KingdomCastleMapobjectVO.KingdomCastleMapobjectVO, new __dep_export_NameCastleItemVO.NameCastleItemVO("kingdomCastle_name", "dialog_nameCastle_copy_kingdomCastle", "dialog_nameCastle_insertTitle"));
    __s58local0.set(__dep_export_CastleMapobjectVO.CastleMapobjectVO, new __dep_export_NameCastleItemVO.NameCastleItemVO("dialog_nameCastle_title", "dialog_nameCastle_copy", "dialog_nameCastle_insertTitle"));
    __s58local0.set(__dep_export_CapitalMapobjectVO.CapitalMapobjectVO, new __dep_export_NameCastleItemVO.NameCastleItemVO(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("capital"), "dialog_nameCastle_copy_capital", "dialog_nameCastle_insertTitle_capital"));
    __s58local0.set(__dep_export_MetropolMapobjectVO.MetropolMapobjectVO, new __dep_export_NameCastleItemVO.NameCastleItemVO(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("metropol"), __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_nameCastle_copy_metropol"), __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_nameCastle_insertTitle_metropol")));
    __s58local0.set(__dep_export_OutpostMapobjectVO.OutpostMapobjectVO, new __dep_export_NameCastleItemVO.NameCastleItemVO("outpost_name", "dialog_nameCastle_copy_outpost", "dialog_nameCastle_insertTitle_outpost"));
    __s58local0.set(__dep_export_ResourceIsleMapobjectVO.ResourceIsleMapobjectVO, new __dep_export_NameCastleItemVO.NameCastleItemVO("resourceIsland_name", "dialog_nameCastle_copy_resourceIsland", "dialog_nameCastle_insertTitle_resourceIsland"));
    __s58local0.set(__dep_export_VillageMapobjectVO.VillageMapobjectVO, new __dep_export_NameCastleItemVO.NameCastleItemVO("village_name", "dialog_nameCastle_copy_village", "dialog_nameVillage_insertTitle"));
    __s58local0.set(__dep_export_KingstowerMapobjectVO.KingstowerMapobjectVO, new __dep_export_NameCastleItemVO.NameCastleItemVO(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("kingstower_name"), __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_nameCastle_copy_kingstower"), __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_nameCastle_insertTitle_kingstower")));
    __s58local0.set(__dep_export_MonumentMapobjectVO.MonumentMapobjectVO, new __dep_export_NameCastleItemVO.NameCastleItemVO("monument_name", "dialog_nameCastle_copy_monument", "dialog_nameCastle_insertTitle_monument"));
    __s58local0.set(__dep_export_LaboratoryMapobjectVO.LaboratoryMapobjectVO, new __dep_export_NameCastleItemVO.NameCastleItemVO("laboratory_name", "dialog_nameCastle_copy_laboratory", "dialog_nameCastle_insertTitle_laboratory"));
    __s58local0.set(__dep_export_FactionCampMapobjectVO.FactionCampMapobjectVO, new __dep_export_NameCastleItemVO.NameCastleItemVO("faction_camp", "dialog_nameCastle_copy_factionCamp", "dialog_nameCastle_insertTitle_factionCamp"));
    return __s58local0;
  };
  CastleNameCastleDialog.isMyFactionMainCamp = function (__s60param0) {
    if (!__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s60param0, "FactionCampMapobjectVO")) {
      return false;
    }
    var __s60local0 = __dep_export_CastleModel.CastleModel.userData.castleList ? __dep_export_CastleModel.CastleModel.userData.castleList.getMainFactionCastle() : null;
    return !!__s60local0 && __s60local0.absAreaPosX == __s60param0.absAreaPosX && __s60local0.absAreaPosY == __s60param0.absAreaPosY;
  };
  Object.defineProperty(CastleNameCastleDialog.prototype, "nameDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleNameCastleDialog.__initialize_static_members = function () {
    CastleNameCastleDialog.TEXT_ID_LIST = CastleNameCastleDialog._createTextIdList();
  };
  CastleNameCastleDialog.NAME = "CastleNameCastle";
  return CastleNameCastleDialog;
}(__dep_export_BasicRenameDialog.BasicRenameDialog);
exports.CastleNameCastleDialog = __s0local1;
var __dep_export_FactionEventVO = require("gge-module:export_FactionEventVO");
var __dep_export_CapitalMapobjectVO = require("gge-module:export_CapitalMapobjectVO");
var __dep_export_CastleMapobjectVO = require("gge-module:export_CastleMapobjectVO");
var __dep_export_FactionCampMapobjectVO = require("gge-module:export_FactionCampMapobjectVO");
var __dep_export_KingdomCastleMapobjectVO = require("gge-module:export_KingdomCastleMapobjectVO");
var __dep_export_KingstowerMapobjectVO = require("gge-module:export_KingstowerMapobjectVO");
var __dep_export_LaboratoryMapobjectVO = require("gge-module:export_LaboratoryMapobjectVO");
var __dep_export_MetropolMapobjectVO = require("gge-module:export_MetropolMapobjectVO");
var __dep_export_MonumentMapobjectVO = require("gge-module:export_MonumentMapobjectVO");
var __dep_export_OutpostMapobjectVO = require("gge-module:export_OutpostMapobjectVO");
var __dep_export_ResourceIsleMapobjectVO = require("gge-module:export_ResourceIsleMapobjectVO");
var __dep_export_VillageMapobjectVO = require("gge-module:export_VillageMapobjectVO");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
__s0local1.__initialize_static_members();
