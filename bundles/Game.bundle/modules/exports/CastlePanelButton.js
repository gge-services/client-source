Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = function (__s1param0) {
  function CastlePanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePanelButton, __s1param0);
  CastlePanelButton.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onCastleListChanged));
  };
  CastlePanelButton.prototype.removeEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onCastleListChanged));
    __s1param0.prototype.removeEventListener.call(this);
  };
  CastlePanelButton.prototype.updateOnVisible = function () {
    this.iconMc.gotoAndStop(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID ? 2 : 1);
  };
  CastlePanelButton.prototype.isButtonVisible = function () {
    return __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP == __dep_export_CastleComponent.CastleComponent.layoutManager.currentState || __dep_export_CastleComponent.CastleComponent.layoutManager.currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_KINGDOMMAP;
  };
  CastlePanelButton.prototype.getButtonTooltip = function () {
    var __s13local0 = __dep_exact_81dacdf05bd32292_1.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID) {
      if (__s13local0 && __s13local0.isSpectator) {
        return "panel_action_castle_spectator";
      } else {
        return "panel_action_camp";
      }
    } else {
      return "panel_action_castle";
    }
  };
  Object.defineProperty(CastlePanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_Castle;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  CastlePanelButton.prototype.onButtonClicked = function () {
    __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.HIDE_PANEL_INFO, []));
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.JOIN_AREA_AND_SAVE_POSITION_COMMAND, __dep_export_CastleModel.CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel);
  };
  CastlePanelButton.prototype.onCastleListChanged = function (__s25param0) {
    this.update();
  };
  return CastlePanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.CastlePanelButton = __s0local0;
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
