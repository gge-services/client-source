Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleStartAttackDialogProperties = require("gge-module:export_CastleStartAttackDialogProperties");
var __dep_export_CastleCharacterYesNoOKDialogProperties = require("gge-module:export_CastleCharacterYesNoOKDialogProperties");
var __s0local0 = function (__s1param0) {
  function ButtonSupportDefenceComponent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ButtonSupportDefenceComponent, __s1param0);
  ButtonSupportDefenceComponent.prototype.initAsRingmenuButton = function () {
    this._button.visible = this._worldMapObjectVO.canBeSupported();
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "FactionInteractiveMapobjectVO") && __dep_export_CastleModel.CastleModel.userData.castleList.listWithoutOcupiedOrDestroyedFactionCamps.length == 0) {
      this._button.enableButton = false;
      this._button.toolTipText = "panel_action_castle_spectator";
    }
  };
  ButtonSupportDefenceComponent.prototype.initAsDialogButton = function () {
    var __s8local0 = this._worldMapObjectVO.canBeSupported();
    __s8local0 = __s8local0 && (!__dep_export_ABGHelper.ABGHelper.isOnABGAndTower || this._worldMapObjectVO.ownerInfo.playerID != __dep_export_CastleModel.CastleModel.userData.playerID);
    this._button.enableButton = __s8local0;
    this._button.disp.toolTipText = "ringmenu_supportDefence";
  };
  Object.defineProperty(ButtonSupportDefenceComponent.prototype, "targetWMO", {
    set: function (__s10param0) {
      this._worldMapObjectVO = __s10param0;
    },
    enumerable: true,
    configurable: true
  });
  ButtonSupportDefenceComponent.prototype.onClick = function () {
    var __s12local0 = false;
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
      var __s12local1 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION);
      __s12local0 = __s12local1.remainingNoobProtectionTimeInSeconds > 0 || __s12local1.remainingFactionProtectionTimeInSeconds > 0;
    } else {
      __s12local0 = (__dep_export_CastleModel.CastleModel.userData.noobProtected || __dep_export_CastleModel.CastleModel.userData.isInPeaceMode) && !(this._worldMapObjectVO instanceof __dep_export_DaimyoTownshipMapObjectVO.DaimyoTownshipMapObjectVO);
    }
    if (__s12local0) {
      var __s12local2 = new __dep_export_CastleCharacterYesNoOKDialogProperties.CastleCharacterYesNoOKDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_supportWithNoobProtection"), __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_GENERAL, this.bindFunction(this.showSupportDefence), null, true, [this._worldMapObjectVO]);
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleCharacterYesNoOKDialog.CastleCharacterYesNoOKDialog, __s12local2);
    } else {
      this.showSupportDefence([this._worldMapObjectVO]);
    }
  };
  ButtonSupportDefenceComponent.prototype.showSupportDefence = function (__s18param0 = null) {
    var __s18local0 = __s18param0[0];
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStartAttackDialog.CastleStartAttackDialog, new __dep_export_CastleStartAttackDialogProperties.CastleStartAttackDialogProperties(__s18local0, __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE));
  };
  Object.defineProperty(ButtonSupportDefenceComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_supportDefence";
    },
    enumerable: true,
    configurable: true
  });
  return ButtonSupportDefenceComponent;
}(require("gge-module:export_ButtonBasicComponent").ButtonBasicComponent);
exports.ButtonSupportDefenceComponent = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStartAttackDialog = require("gge-module:export_CastleStartAttackDialog");
var __dep_export_CastleCharacterYesNoOKDialog = require("gge-module:export_CastleCharacterYesNoOKDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IWorldMapObjectRingmenuButtonComponent");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_DaimyoTownshipMapObjectVO = require("gge-module:export_DaimyoTownshipMapObjectVO");
