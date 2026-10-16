Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_5 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_6 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function JAACommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(JAACommand, __s1param0);
  Object.defineProperty(JAACommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_JOIN_AREA;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  JAACommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        __dep_exact_9e901e8e2483a22f_6.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_KINGDOM_COMMAND, __s9local0.KID);
        var __s9local1 = __dep_export_AreaFactory.AreaFactory.createAreaFromServer(__s9local0.T, __s9local0.gca);
        if (!__s9local1) {
          return false;
        }
        __dep_export_CastleModel.CastleModel.resourcePoolData.reset();
        __dep_export_Iso.Iso.renderer.destroy();
        __dep_export_CastleModel.CastleModel.areaData.addArea(__s9local1);
        __s9local1.updater.parseJAA(__s9local0);
        this.layoutManager.state = __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO;
        __dep_export_IsoConst.IsoConst.MOVEMENTS_ACTIVATED = false;
        if (__s9local0.gsm) {
          __dep_export_CastleModel.CastleModel.mineData.parse_GSM(__s9local0.gsm);
        }
        __dep_export_CastleModel.CastleModel.militaryData.parse_SPL(__s9local0.spl0);
        __dep_export_CastleModel.CastleModel.militaryData.parse_SPL(__s9local0.spl1);
        __dep_export_CastleModel.CastleModel.militaryData.parse_SPL(__s9local0.spl2);
        __dep_export_CastleModel.CastleModel.militaryData.parse_SPL(__s9local0.spl3);
        __dep_export_CastleModel.CastleModel.militaryData.parse_GUI(__s9local0.gui);
        __dep_export_CastleModel.CastleModel.userData.parse_UAP(__s9local0.uap);
        if (__s9local0.gca && __s9local0.gca.O) {
          __dep_export_CastleModel.CastleModel.titleData.parseO(__s9local0.gca.O);
        }
        if (__s9local0.hin) {
          __dep_export_CastleModel.CastleModel.hunterData.parse_HIN(__s9local0.hin);
        }
        if (__s9local0.sin) {
          __dep_export_CastleModel.CastleModel.decoStorage.parseSIN(__s9local0.sin);
        }
        if (__dep_export_CastleModel.CastleModel.userData.joinCastleCount == 0) {
          this.checkTipText();
          if (__dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals.accountCookie.sessionType == __dep_exact_9e901e8e2483a22f.SessionTypes.FIRST_SESSION) {
            var __s9local2 = new __dep_exact_9e901e8e2483a22f_3.BasicProfilingTrackingCommandVO();
            __dep_exact_9e901e8e2483a22f_6.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f_2.BasicController.COMMAND_TRACK_PROFILING, __s9local2);
          }
          __dep_exact_9e901e8e2483a22f_5.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_4.ClientFunnelGameStates.GAME_PLAYABLE);
          __dep_export_GZPTrackingController.GZPTrackingController.getInstance().startTracking();
          this.sentPingTracking();
        }
        __dep_export_CastleModel.CastleModel.userData.joinCastleCount++;
        if (__s9local0.rci) {
          __dep_export_CastleModel.CastleModel.resourceCartsData.parse_RCI(__s9local0.rci);
        }
        if (__dep_export_Iso.Iso.controller && __dep_export_Iso.Iso.controller.dataUpdater) {
          var __s9local3 = __dep_export_Iso.Iso.controller.dataUpdater.movementUpdater;
          if (__s9local3) {
            __dep_export_renderScheduler.renderScheduler.addTask(function () {
              __dep_export_IsoConst.IsoConst.MOVEMENTS_ACTIVATED = true;
              __s9local3.spawnMaxMovements(true);
            });
          }
        }
        if (__s9local0.abpi) {
          __dep_export_CastleModel.CastleModel.breweryData.parse_ABPI(__s9local0.abpi[0], true);
        }
        if (__s9local1.isFactionCamp) {
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetDetailedCastleListVO.C2SGetDetailedCastleListVO());
        }
        if (__s9local0.crai) {
          __dep_export_CastleModel.CastleModel.craftingData.parseAllQueueData(__s9local0.crai);
        }
        if (__dep_export_CastleModel.CastleModel.userData.toShowDialogsAfterJAA.length > 0) {
          for (var __s9local4 = 0; __s9local4 < __dep_export_CastleModel.CastleModel.userData.toShowDialogsAfterJAA.length; __s9local4++) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleModel.CastleModel.userData.toShowDialogsAfterJAA[__s9local4]);
          }
          __dep_export_CastleModel.CastleModel.userData.toShowDialogsAfterJAA = [];
        }
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    this.controller.dispatchEvent(new __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED));
    return false;
  };
  JAACommand.prototype.sentPingTracking = function () {
    var __s30local0 = Math.random() * __dep_export_ClientConstTime.ClientConstTime.MINUTES_2_MILLISEC;
    window.setTimeout(function () {
      __dep_exact_9e901e8e2483a22f_5.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_4.ClientFunnelGameStates.PING);
    }, __s30local0);
  };
  JAACommand.prototype.checkTipText = function () {
    if (__dep_export_CastleModel.CastleModel.areaData.activeArea.areaInfo.isOwnMapobject && __dep_export_CastleModel.CastleModel.areaData.activeArea.commonInfo.isCastleBurning) {
      __dep_exact_9e901e8e2483a22f_6.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_TIP_DIALOG_COMMAND, [__dep_export_ClientConstCastle.ClientConstCastle.TIP_REPAIR, false]);
      this.controller.dispatchEvent(new __dep_export_AreaDataEvent.AreaDataEvent(__dep_export_AreaDataEvent.AreaDataEvent.ON_BURNING_CASTLE_UPDATED));
    }
  };
  return JAACommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.JAACommand = __s0local0;
var __dep_export_AreaFactory = require("gge-module:export_AreaFactory");
var __dep_export_IsoConst = require("gge-module:export_IsoConst");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_renderScheduler = require("gge-module:export_renderScheduler");
var __dep_export_C2SGetDetailedCastleListVO = require("gge-module:export_C2SGetDetailedCastleListVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_GZPTrackingController = require("gge-module:export_GZPTrackingController");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
