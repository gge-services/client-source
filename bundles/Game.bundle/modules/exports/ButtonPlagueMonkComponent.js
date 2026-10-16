Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_C2SGetSpyInfo = require("gge-module:export_C2SGetSpyInfo");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleToolTipManager = require("gge-module:export_CastleToolTipManager");
var __dep_export_CastleSpyDialogProperties = require("gge-module:export_CastleSpyDialogProperties");
var __s0local0 = function (__s1param0) {
  function ButtonPlagueMonkComponent(__s3param0, __s3param1 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._ignoreClick = false;
    __s3local0._ignoreClick = __s3param1;
    var __s3local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("Icon_PlaqueC2R", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Icon_PlaqueC2R"));
    __s3local1.clipSizeComponent = new __dep_exact_9e901e8e2483a22f.ClipSizeComponent(26, 32);
    if (__s3local0._button.disp.icon_plague) {
      __s3local0._button.disp.icon_plague.addChild(__s3local1);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ButtonPlagueMonkComponent, __s1param0);
  ButtonPlagueMonkComponent.prototype.initAsRingmenuButton = function () {
    if (this._worldMapObjectVO) {
      var __s6local0 = __dep_export_CastleModel.CastleModel.userData.hasLevelFor(__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_PLAGUE_ATTACK) && this._worldMapObjectVO.canBePlagueAttacked();
      if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_PLAGUE)) {
        this._button.disp.visible = __s6local0;
      } else {
        this._button.disp.visible = __s6local0 && __dep_export_CastleModel.CastleModel.spyData.availablePlagueMonks > 0;
      }
      if (this._button.disp.visible) {
        this._button.disp.toolTipText = null;
        this._button.enableButton = true;
        this._worldMapObjectVO.ownerInfo.playerLevel;
        __dep_export_CastleModel.CastleModel.userData.userLevel;
        if (__dep_export_CastleModel.CastleModel.userData.isInPeaceMode || __dep_export_CastleModel.CastleModel.userData.noobProtected) {
          this._button.enableButton = false;
          this._button.disp.toolTipText = "dialog_sabotage_cannot_plague_sabotage_inpeace_mode";
        } else if (__dep_export_CastleModel.CastleModel.spyData.availablePlagueMonks <= 0) {
          this._button.enableButton = false;
          this._button.disp.toolTipText = "ringmenu_plagueMonk_noUnits";
        } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "FactionInteractiveMapobjectVO") && this._button.disp.visible && __dep_export_CastleModel.CastleModel.userData.castleList.listWithoutOcupiedOrDestroyedFactionCamps.length == 0) {
          this._button.enableButton = false;
          this._button.disp.toolTipText = "panel_action_castle_spectator";
        } else if (!this._worldMapObjectVO.ownerInfo.isNoobProtected || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "FactionCampMapobjectVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "CapitalMapobjectVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "MetropolMapobjectVO")) {
          if (!this._worldMapObjectVO.ownerInfo.isPeaceProtected || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "FactionCampMapobjectVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "CapitalMapobjectVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "MetropolMapobjectVO")) {
            if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "FactionCampMapobjectVO") && this._worldMapObjectVO.ownerInfo.isFactionProtected && this._worldMapObjectVO.ownerInfo.isNoobProtected) {
              this._button.enableButton = false;
              var __s6local1 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getCantAttackTimeString(this._worldMapObjectVO.ownerInfo.isNoobProtected ? this._worldMapObjectVO.ownerInfo.remainingNoobTime : this._worldMapObjectVO.ownerInfo.remainingFactionProtectionTimeInSeconds);
              this._button.disp.toolTipText = "playerHasNoobProtectionPlague" + __dep_export_CastleToolTipManager.CastleToolTipManager.ID_PARAM_SEPERATOR + __s6local1;
            } else if (this._worldMapObjectVO.remainingCooldownSabotageTimeInSeconds > 0) {
              this._button.enableButton = false;
              var __s6local2 = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeString(this._worldMapObjectVO.remainingCooldownSabotageTimeInSeconds * 1000, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT);
              this._button.disp.toolTipText = "dialog_spy_plagueCooldown" + __dep_export_CastleToolTipManager.CastleToolTipManager.ID_PARAM_SEPERATOR + __s6local2;
            } else if (__dep_exact_26a421b704832cff.CombatConst.getMaxDamagedBuildings(this._worldMapObjectVO.ownerInfo.playerLevel) < 1) {
              this._button.enableButton = false;
              this._button.disp.toolTipText = "dialog_plague_enemyCooldown";
            } else if (this._worldMapObjectVO.temporarySabotageProtection) {
              this._button.enableButton = false;
              this._button.disp.toolTipText = "dialog_spy_plague_protectionActive";
            } else {
              this._button.disp.toolTipText = "dialog_spy_titlePlague";
            }
          } else {
            this._button.enableButton = false;
            var __s6local3 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getCantAttackTimeString(this._worldMapObjectVO.ownerInfo.remainingPeaceTime);
            this._button.disp.toolTipText = "playerHasNoobProtectionPlague" + __dep_export_CastleToolTipManager.CastleToolTipManager.ID_PARAM_SEPERATOR + __s6local3;
          }
        } else {
          this._button.enableButton = false;
          var __s6local4 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getCantAttackTimeString(this._worldMapObjectVO.ownerInfo.remainingNoobTime);
          this._button.disp.toolTipText = "playerHasNoobProtectionPlague" + __dep_export_CastleToolTipManager.CastleToolTipManager.ID_PARAM_SEPERATOR + __s6local4;
        }
      }
    }
  };
  Object.defineProperty(ButtonPlagueMonkComponent.prototype, "targetWMO", {
    set: function (__s24param0) {
      this._worldMapObjectVO = __s24param0;
      this.initAsRingmenuButton();
    },
    enumerable: true,
    configurable: true
  });
  ButtonPlagueMonkComponent.prototype.onClick = function () {
    if (!this._ignoreClick) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleSpyDialog.CastleSpyDialog, new __dep_export_CastleSpyDialogProperties.CastleSpyDialogProperties(this._worldMapObjectVO, __dep_export_CastleSpyDialog.CastleSpyDialog.TAB_PLAGUE));
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetSpyInfo.C2SGetSpyInfo(this._worldMapObjectVO.absAreaPosX, this._worldMapObjectVO.absAreaPosY, this._worldMapObjectVO.kingdomID));
    }
  };
  Object.defineProperty(ButtonPlagueMonkComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_plagueMonk";
    },
    enumerable: true,
    configurable: true
  });
  return ButtonPlagueMonkComponent;
}(require("gge-module:export_ButtonBasicComponent").ButtonBasicComponent);
exports.ButtonPlagueMonkComponent = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleSpyDialog = require("gge-module:export_CastleSpyDialog");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IWorldMapObjectRingmenuButtonComponent");
