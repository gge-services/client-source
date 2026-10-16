Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function WorldmapPanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(WorldmapPanelButton, __s1param0);
  WorldmapPanelButton.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this.listenOnXPChanged();
  };
  Object.defineProperty(WorldmapPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_WorldMap;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  WorldmapPanelButton.prototype.isButtonEnabled = function () {
    return __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_TO_THE_WORLD_MAP;
  };
  WorldmapPanelButton.prototype.isButtonVisible = function () {
    return __dep_export_CastleComponent.CastleComponent.layoutManager.currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO;
  };
  WorldmapPanelButton.prototype.getButtonTooltip = function () {
    if (this.isButtonEnabled()) {
      return "panel_action_worldmap";
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_ClientConstTextIds.ClientConstTextIds.LEVEL_NEEDED, [__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_TO_THE_WORLD_MAP]);
    }
  };
  Object.defineProperty(WorldmapPanelButton.prototype, "iconDimension", {
    get: function () {
      return new __s0local0(40, 40);
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconDimension").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  WorldmapPanelButton.prototype.onButtonClicked = function () {
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID || __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION)) {
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND);
    } else {
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.JOIN_MAIN_CASTLE_COMMAND);
    }
  };
  return WorldmapPanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.WorldmapPanelButton = __s0local1;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
