Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleStartAttackDialogProperties = require("gge-module:export_CastleStartAttackDialogProperties");
var __s0local0 = function (__s1param0) {
  function ButtonSendTroopsComponent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ButtonSendTroopsComponent, __s1param0);
  Object.defineProperty(ButtonSendTroopsComponent.prototype, "targetWMO", {
    set: function (__s5param0) {
      this._worldMapObjectVO = __s5param0;
    },
    enumerable: true,
    configurable: true
  });
  ButtonSendTroopsComponent.prototype.initAsRingmenuButton = function () {
    this._button.visible = this._worldMapObjectVO.canBeTroupsSended();
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldMapObjectVO, "FactionInteractiveMapobjectVO") && __dep_export_CastleModel.CastleModel.userData.castleList.listWithoutOcupiedOrDestroyedFactionCamps.length == 0) {
      this._button.enableButton = false;
      this._button.toolTipText = "panel_action_castle_spectator";
    }
  };
  ButtonSendTroopsComponent.prototype.onClick = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStartAttackDialog.CastleStartAttackDialog, new __dep_export_CastleStartAttackDialogProperties.CastleStartAttackDialogProperties(this._worldMapObjectVO, __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SENDTROUPS));
  };
  Object.defineProperty(ButtonSendTroopsComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_sendTroups";
    },
    enumerable: true,
    configurable: true
  });
  return ButtonSendTroopsComponent;
}(require("gge-module:export_ButtonBasicComponent").ButtonBasicComponent);
exports.ButtonSendTroopsComponent = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStartAttackDialog = require("gge-module:export_CastleStartAttackDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IWorldMapObjectRingmenuButtonComponent");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
