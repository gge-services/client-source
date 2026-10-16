Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_IOErrorLOFactory = require("gge-module:class_IOErrorLOFactory");
var __dep_class_ExternalLog = require("gge-module:class_ExternalLog");
var __dep_class_CommandController = require("gge-module:class_CommandController");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_exact_1aff78853490291e = require("gge-module:exact_1aff78853490291e");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __dep_class_BasicConstants = require("gge-module:class_BasicConstants");
var __dep_class_ClientFunnelGameStates = require("gge-module:class_ClientFunnelGameStates");
var __dep_class_ClientFunnelTrackingController = require("gge-module:class_ClientFunnelTrackingController");
var __dep_class_PathProvider = require("gge-module:class_PathProvider");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("Connection.BasicCheckMaintenanceCommand");
var __s0local1 = function (__s1param0) {
  function BasicCheckMaintenanceCommand() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0.MAINTENANCE_TIMER_DELAY = 60;
    __s3local0.GGS_UTC_LOAD_TRIGGER_OFFSET_IN_SECONDS = 900;
    __s3local0.UTC_REQUEST_URL = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://time.goodgamestudios.com";
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicCheckMaintenanceCommand, __s1param0);
  BasicCheckMaintenanceCommand.prototype.execute = function (__s5param0 = null) {
    this.noMaintenanceCommandName = __s5param0 == null ? null : __s5param0;
    this.executeDefaultBehavior();
  };
  BasicCheckMaintenanceCommand.prototype.executeDefaultBehavior = function () {
    if (this.env.urlVariables.forcedMaintenance != __dep_exact_1aff78853490291e.ForcedMaintenanceEnum.OFF) {
      if (this.env.urlVariables.forcedMaintenance != __dep_exact_1aff78853490291e.ForcedMaintenanceEnum.ON) {
        this.loadMaintenance(__dep_class_PathProvider.PathProvider.instance.maintenanceConfigURL);
      } else {
        this.setMaintenance(true);
      }
    } else {
      this.executeNoMaintenance();
    }
  };
  BasicCheckMaintenanceCommand.prototype.loadMaintenance = function (__s13param0) {
    var __s13local0 = this;
    var __s13local1 = new __dep_export_CSSMouseCursor.URLLoaderService(new __dep_export_CSSMouseCursor.URLRequest(__s13param0));
    __s13local1.load().then(function (__s15param0) {
      __s13local1.dispose();
      try {
        __s13local0.checkMaintenance(JSON.parse(__s15param0));
      } catch (__s18local0) {
        __s0local0.warn("Error while executing something in checkMaintenance: ", __s18local0);
        window.bugsnagClient.notify(__s18local0);
      }
    }).catch(function (__s20param0) {
      __s0local0.warn("IOError (" + __s20param0 + ") while loading Maintenancecheck");
      __dep_class_ExternalLog.ExternalLog.logger.log(new __dep_class_IOErrorLOFactory.IOErrorLOFactory(__dep_class_IOErrorLOFactory.IOErrorLOFactory.GENERAL_LOADER_IO_ERROR, __s20param0.toString(), __s13param0));
      __s13local0.executeNoMaintenance();
    });
  };
  BasicCheckMaintenanceCommand.prototype.checkMaintenance = function (__s22param0) {
    var __s22local0 = this;
    var __s22local1 = __dep_class_BasicModel.BasicModel.instanceProxy.selectedInstanceVO.zoneId.toString();
    var __s22local2 = Object.keys(__s22param0).find(function (__s24param0) {
      return __s24param0 == __s22local1;
    });
    if (__s22local2) {
      var __s22local3 = parseInt(__s22param0[__s22local1]);
      var __s22local4 = new Date(__s22local3 * 1000);
      __s0local0.debug(__s22local2 + " will be in maintenance until " + __s22local4);
      var __s22local5;
      var __s22local6 = Date.now() / 1000;
      function __s26local0(__s27param0) {
        if (__s27param0 <= 0) {
          __s0local0.debug("Mainteance is over!");
          __s22local0.setMaintenance(false);
        } else {
          clearTimeout(__s22local0.reloadTimeout);
          var __s27local0 = Math.min(__s22local0.MAINTENANCE_TIMER_DELAY, __s27param0);
          __s0local0.debug("MaintenanceTimer Default delay " + __s22local0.MAINTENANCE_TIMER_DELAY + " vs  remainingMaintenance " + __s27param0 + " --> will reload file in " + __s27local0 + " seconds");
          __s22local0.reloadTimeout = window.setTimeout(function () {
            return __s22local0.loadMaintenance(__dep_class_PathProvider.PathProvider.instance.maintenanceConfigURL);
          }, __s27local0 * 1000);
          __s22local0.setMaintenance(true);
        }
      }
      if (__s22local3 > __s22local6) {
        this.maintenanceTimeInSeconds = __s22local3 - __s22local6;
        __s0local0.debug("Maintenance will last for " + this.maintenanceTimeInSeconds + " more seconds ");
        if (this.maintenanceTimeInSeconds > this.GGS_UTC_LOAD_TRIGGER_OFFSET_IN_SECONDS) {
          new __dep_export_CSSMouseCursor.URLLoaderService(new __dep_export_CSSMouseCursor.URLRequest(this.UTC_REQUEST_URL)).load().then(function (__s35param0) {
            __s22local5 = Number(__s35param0);
            __s0local0.debug("clientUTC " + __s22local6 + "  -  server UTC " + __s22local5);
            __s22local0.maintenanceTimeInSeconds = __s22local3 - __s22local5;
            __s26local0(__s22local0.maintenanceTimeInSeconds);
          }).catch(function (__s37param0) {
            __s0local0.warn("IOError (" + __s37param0.message + ") while loading UTC - will prodeed without Maintenance behaviour");
            __dep_class_ExternalLog.ExternalLog.logger.log(new __dep_class_IOErrorLOFactory.IOErrorLOFactory(__dep_class_IOErrorLOFactory.IOErrorLOFactory.GENERAL_LOADER_IO_ERROR, __s37param0.message, __s22local0.UTC_REQUEST_URL));
            __s22local0.clearMaintenance();
          });
        } else {
          __s26local0(this.maintenanceTimeInSeconds);
        }
      } else {
        __s0local0.warn("according to maintenance file our zone is under maintenance - but according to client UTC maintenance time is already over");
        this.setMaintenance(false);
      }
    } else {
      this.setMaintenance(false);
    }
  };
  BasicCheckMaintenanceCommand.prototype.setMaintenance = function (__s42param0) {
    if (__s42param0) {
      if (this.env.maintenanceMode) {
        this.updateMaintenance();
      } else if (__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.loginIsKeyBased) {
        this.executeSocialMaintenance();
      } else {
        this.executeNWMaintenance();
      }
      __dep_class_ClientFunnelTrackingController.ClientFunnelTrackingController.getInstance().trackState(__dep_class_ClientFunnelGameStates.ClientFunnelGameStates.MAINTENANCE_SCREEN);
    } else if (this.env.maintenanceMode) {
      this.clearMaintenance();
    } else {
      this.executeNoMaintenance();
    }
    this.env.maintenanceMode = __s42param0;
  };
  BasicCheckMaintenanceCommand.prototype.updateMaintenance = function () {};
  BasicCheckMaintenanceCommand.prototype.clearMaintenance = function () {
    clearTimeout(this.reloadTimeout);
    this.executeNoMaintenance();
  };
  BasicCheckMaintenanceCommand.prototype.executeNWMaintenance = function () {
    this.executeNoMaintenance();
    throw new Error("executeNWMaintenance must be overridden by Game (will proceed with default No_Maintenance behaviour");
  };
  BasicCheckMaintenanceCommand.prototype.executeSocialMaintenance = function () {
    this.executeNoMaintenance();
    throw new Error("executeSocialMaintenance must be overridden by Game (will proceed with default No_Maintenance behaviour");
  };
  BasicCheckMaintenanceCommand.prototype.executeNoMaintenance = function () {
    if (this.noMaintenanceCommandName != null) {
      __dep_class_CommandController.CommandController.instance.executeCommand(this.noMaintenanceCommandName);
    } else {
      __s0local0.debug("No noMaintenanceCommandName set! Nothing will happen!");
    }
  };
  Object.defineProperty(BasicCheckMaintenanceCommand.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return BasicCheckMaintenanceCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.BasicCheckMaintenanceCommand = __s0local1;
