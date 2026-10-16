Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleRerollAlienDialogProperties = require("gge-module:export_CastleRerollAlienDialogProperties");
var __s0local0 = function (__s1param0) {
  function ButtonAlienRerollComponent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ButtonAlienRerollComponent, __s1param0);
  Object.defineProperty(ButtonAlienRerollComponent.prototype, "targetWMO", {
    set: function (__s5param0) {
      this._worldMapObjectVO = __s5param0;
    },
    enumerable: true,
    configurable: true
  });
  ButtonAlienRerollComponent.prototype.initAsRingmenuButton = function () {
    this._button.enableButton = true;
    if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(this._worldMapObjectVO, "AAlienInvasionMapobjectVO")) {
      var __s7local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this._worldMapObjectVO.eventType), "AAlienInvasionEventVO");
      if (__s7local0 && __s7local0.rerollCurrencyKeys.length > 0 && __s7local0.useReroll) {
        this._button.visible = __dep_exact_81dacdf05bd32292_2.instanceOfClass(this._worldMapObjectVO, "AAlienInvasionMapobjectVO");
        var __s7local1 = __dep_export_CastleModel.CastleModel.armyData.getMyMovementsToAreaPos(this._worldMapObjectVO).length > 0;
        var __s7local2 = __dep_export_CastleModel.CastleModel.armyData.getMovementsFromAreaPos(this._worldMapObjectVO).length > 0;
        if (this.hasLevelForReroll) {
          if (__s7local1) {
            this._button.enableButton = false;
            this._button.toolTipText = "ringmenu_dethrone_attack";
            return;
          } else if (__s7local2) {
            this._button.enableButton = false;
            this._button.toolTipText = "ringmenu_dethrone_attackOnPlayer";
            return;
          } else {
            this._button.toolTipText = null;
            return;
          }
        } else {
          this._button.enableButton = false;
          this._button.toolTipText = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("needLevel", [70]);
          return;
        }
      }
    }
    this._button.visible = false;
  };
  Object.defineProperty(ButtonAlienRerollComponent.prototype, "hasLevelForReroll", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.level >= 70;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ButtonAlienRerollComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_dethrone";
    },
    enumerable: true,
    configurable: true
  });
  ButtonAlienRerollComponent.prototype.onClick = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleRerollAlienDialog.CastleRerollAlienDialog, new __dep_export_CastleRerollAlienDialogProperties.CastleRerollAlienDialogProperties(this._worldMapObjectVO));
  };
  return ButtonAlienRerollComponent;
}(require("gge-module:export_ButtonBasicComponent").ButtonBasicComponent);
exports.ButtonAlienRerollComponent = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleRerollAlienDialog = require("gge-module:export_CastleRerollAlienDialog");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IWorldMapObjectRingmenuButtonComponent");
