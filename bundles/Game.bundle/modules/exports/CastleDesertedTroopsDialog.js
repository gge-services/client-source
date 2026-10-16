Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_C2SGetDetailedCastleListVO = require("gge-module:export_C2SGetDetailedCastleListVO");
var __dep_export_C2SJoinCastleVO = require("gge-module:export_C2SJoinCastleVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleDetailedCastleListEvent = require("gge-module:export_CastleDetailedCastleListEvent");
var __dep_export_FlashBlockHelper = require("gge-module:export_FlashBlockHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleRecruitDialogProperties = require("gge-module:export_CastleRecruitDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleDesertedTroopsDialog() {
    var __s3local0 = this;
    __s3local0.hospitalAreaID = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleDesertedTroopsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDesertedTroopsDialog, __s1param0);
  CastleDesertedTroopsDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.disp.visible = false;
    this.itxt_troopCount = this.textFieldManager.registerTextField(this.dialogDisp.mc_troopCount.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    this.itxt_troopCount.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_RED;
    this.itxt_description = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.itxt_btnDescription = this.textFieldManager.registerTextField(this.dialogDisp.btn_hospitalLink.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.dialogDisp.btn_overseerLink.visible = false;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_hospitalLink, this.dialogDisp.btn_ok]);
  };
  CastleDesertedTroopsDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.infoProperties.messageVO.isBeef ? "dialog_desertedTroops_beefUnits_title" : this.infoProperties.messageVO.isMead ? "dialog_desertedTroops_meadUnits_title" : "dialog_desertedTroops_title"));
    this.dialogDisp.mc_troopCount.toolTipText = this.infoProperties.messageVO.isBeef ? "dialog_desertedTroops_beefUnits_tooltip" : this.infoProperties.messageVO.isMead ? "dialog_desertedTroops_meadUnits_tooltip" : "dialog_desertedTroops_tooltip";
    this.itxt_troopCount.textContentVO.numberValue = this.infoProperties.messageVO.dieCount;
    if (this.infoProperties.isCamp) {
      this.itxt_description.textContentVO.textId = "dialog_factionEvent_desertedTroops_copy";
    } else if (this.infoProperties.messageVO.isMead) {
      this.itxt_description.textContentVO.textId = "dialog_desertedTroops_meadUnits_copy";
    } else if (this.infoProperties.messageVO.isBeef) {
      this.itxt_description.textContentVO.textId = "dialog_desertedTroops_beefUnits_copy";
    } else {
      this.itxt_description.textContentVO.textId = "dialog_desertedTroops_copy";
    }
    this.dialogDisp.btn_hospitalLink.visible = this.dialogDisp.overseerHolder.visible = this.infoProperties.isHospitalEnabled;
    if (this.infoProperties.isHospitalEnabled) {
      this.initNursePicture();
      this.hospitalAreaID = this.findHospitalAreaID();
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_hospitalLink, false);
      if (this.hospitalAreaID != -1) {
        if (__dep_export_CastleModel.CastleModel.userCastleListDetailed.getCastlesWithHospitalsList().length == 0) {
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetDetailedCastleListVO.C2SGetDetailedCastleListVO());
          this.controller.addEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onCastleDataUpdated));
        } else {
          this.checkForHospital();
        }
      } else {
        this.textFieldManager.registerTextField(this.dialogDisp.btn_hospitalLink.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("target_not_owned")).verticalAlign = __dep_exact_9e901e8e2483a22f_1.GGSVerticalAlign.MIDDLE;
        this.dialogDisp.btn_hospitalLink.mc_hospitalAvailable.gotoAndStop(2);
      }
    }
    this.dialogDisp.mc_mead.visible = false;
  };
  CastleDesertedTroopsDialog.prototype.initNursePicture = function () {
    this.charIcon = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(CastleDesertedTroopsDialog.CHAR_ICON_NURSE_ASSET_NAME, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CastleDesertedTroopsDialog.CHAR_ICON_NURSE_ASSET_NAME), null, 0, false);
    if (this.charIcon.isLoaded) {
      this.onClipLoaded(this.charIcon);
    } else {
      this.charIcon.clipLoaded.add(this.bindFunction(this.onClipLoaded));
    }
  };
  CastleDesertedTroopsDialog.prototype.onClipLoaded = function (__s22param0) {
    this.dialogDisp.overseerHolder.addChild(__s22param0.currentshownDisplayObject);
  };
  CastleDesertedTroopsDialog.prototype.findHospitalAreaID = function () {
    switch (this.infoProperties.messageVO.areaType) {
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_KINGS_TOWER:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_MONUMENT:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_LABORATORY:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_VILLAGE:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ISLE_RESOURCE:
        return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(this.infoProperties.messageVO.kingdomID).objectId);
      default:
        var __s24local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(this.infoProperties.messageVO.areaID, this.infoProperties.messageVO.kingdomID);
        __s24local0 ||= __dep_export_CastleModel.CastleModel.userData.villageList.getVillageByID(this.infoProperties.messageVO.areaID, this.infoProperties.messageVO.kingdomID);
        if (__s24local0 && !__s24local0.isUnderConquerControl) {
          return __dep_exact_f855840627e6e145.int(this.infoProperties.messageVO.areaID);
        }
    }
    return -1;
  };
  CastleDesertedTroopsDialog.prototype.onCastleDataUpdated = function (__s28param0 = null) {
    this.controller.removeEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onCastleDataUpdated));
    this.checkForHospital();
  };
  CastleDesertedTroopsDialog.prototype.checkForHospital = function () {
    var __s30local0 = __dep_export_CastleModel.CastleModel.userCastleListDetailed.getVObyCastleID(this.hospitalAreaID, this.infoProperties.messageVO.kingdomID);
    var __s30local1 = !!__s30local0 && __s30local0.hasHospital;
    if (this.itxt_btnDescription.textContentVO) {
      if (__s30local1) {
        this.dialogDisp.btn_hospitalLink.mc_hospitalAvailable.gotoAndStop(1);
        this.itxt_btnDescription.textContentVO.textId = "dialog_desertedTroops_medicus";
      } else {
        this.dialogDisp.btn_hospitalLink.mc_hospitalAvailable.gotoAndStop(2);
        if (this.infoProperties.isCamp) {
          this.itxt_btnDescription.textContentVO.textId = "dialog_factionEvent_medicus_noHospital";
        } else {
          this.itxt_btnDescription.textContentVO.textId = "dialog_desertedTroops_medicus_noHospital";
        }
      }
      if (this.dialogDisp.btn_hospitalLink.cacheCanvas) {
        this.dialogDisp.btn_hospitalLink.updateCache();
      }
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_hospitalLink, __s30local1);
    }
  };
  CastleDesertedTroopsDialog.prototype.onClick = function (__s38param0) {
    __s1param0.prototype.onClick.call(this, __s38param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s38param0.target)) {
      switch (__s38param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_hospitalLink:
          if (__dep_export_FlashBlockHelper.FlashBlockHelper.checkFlashBlock(this.infoProperties.messageVO.kingdomID)) {
            return;
          }
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SJoinCastleVO.C2SJoinCastleVO(this.hospitalAreaID, this.infoProperties.messageVO.kingdomID));
          this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onSwitchedToHospitalLocation));
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  CastleDesertedTroopsDialog.prototype.hideLoaded = function (__s43param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s43param0);
    if (this.charIcon) {
      if (this.charIcon.currentshownDisplayObject && this.charIcon.currentshownDisplayObject.parent == this.dialogDisp.overseerHolder) {
        this.dialogDisp.overseerHolder.removeChild(this.charIcon.currentshownDisplayObject);
      }
      this.charIcon.dispose();
    }
  };
  CastleDesertedTroopsDialog.prototype.onSwitchedToHospitalLocation = function (__s47param0) {
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onSwitchedToHospitalLocation));
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitDialog.CastleRecruitDialog, new __dep_export_CastleRecruitDialogProperties.CastleRecruitDialogProperties(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HOSPITAL));
  };
  Object.defineProperty(CastleDesertedTroopsDialog.prototype, "infoProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleDesertedTroopsDialog.NAME = "CastleDesertedTroopsExt_R";
  CastleDesertedTroopsDialog.CHAR_ICON_NURSE_ASSET_NAME = "CharNurseIcon";
  return CastleDesertedTroopsDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleDesertedTroopsDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleRecruitDialog = require("gge-module:export_CastleRecruitDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
