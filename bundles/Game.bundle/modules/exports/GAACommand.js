Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __s0local0 = function (__s1param0) {
  function GAACommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GAACommand, __s1param0);
  Object.defineProperty(GAACommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_GET_AREAS;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  GAACommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    var __s9local0 = [];
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        try {
          var __s9local1 = JSON.parse(__s9param1[1]);
        } catch (__s13local0) {
          __dep_exact_9e901e8e2483a22f.debug("Invalid Json String appears");
          __dep_exact_9e901e8e2483a22f.debug(__s13local0.toString());
          return false;
        }
        __dep_export_CastleModel.CastleModel.userData.parse_UAP(__s9local1.uap);
        __dep_export_CastleModel.CastleModel.otherPlayerData.parseOwnerInfoArray(__s9local1.OI);
        var __s9local2 = 0;
        __s9local2 = __s9local1.KID ? __dep_exact_f855840627e6e145.int(__s9local1.KID) : __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
        if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __s9local2) {
          break;
        }
        if (__dep_export_CastleModel.CastleModel.worldmapData) {
          var __s9local3 = __dep_export_CastleModel.CastleModel.worldmapData.getExpiredRelocationObject();
          if (__s9local3) {
            __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.renderer.clearMapobjects(true);
            __dep_export_CastleModel.CastleModel.worldmapData.relocationObjects.splice(__dep_export_CastleModel.CastleModel.worldmapData.relocationObjects.indexOf(__s9local3), 1);
          }
          if (__s9local2 == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID && !__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION)) {
            __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.JOIN_MAIN_CASTLE_COMMAND);
            return;
          }
          __s9local0 = __dep_export_CastleModel.CastleModel.worldmapData.parseAreaInfos(__s9local1.AI);
          if (__s9local2 != __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID) {
            __dep_export_CastleModel.CastleModel.worldmapData.areaTiles.setReadyForRendering(__s9local0);
          }
        }
        if (this.layoutManager.worldmapScreen && this.layoutManager.worldmapScreen.renderer) {
          this.layoutManager.worldmapScreen.renderer.invalidateMap();
          this.layoutManager.worldmapScreen.renderer.invalideteMovements();
          this.layoutManager.updateGameStage();
          this.layoutManager.renderStaticStage();
        }
        break;
      case __dep_exact_26a421b704832cff.ERROR.TARGETAREA_DOES_NOT_EXSIST:
    }
    this.controller.dispatchEvent(new __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GAA_ARRIVED, [__s9local0]));
    return false;
  };
  return GAACommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.GAACommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
