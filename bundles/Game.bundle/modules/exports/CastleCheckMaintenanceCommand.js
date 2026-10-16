Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_c549e43d1112dfff = require("gge-module:exact_c549e43d1112dfff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = __dep_exact_c549e43d1112dfff.getLogger("Connection.CastleCheckMaintenanceCommand");
var __s0local1 = function (__s1param0) {
  function CastleCheckMaintenanceCommand() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCheckMaintenanceCommand, __s1param0);
  CastleCheckMaintenanceCommand.prototype.executeDefaultBehavior = function () {
    var __s5local0 = this.env.urlVariables;
    if (__s5local0 && __s5local0.urlParams && __s5local0.urlParams.get("maintenance") === "off") {
      __s0local0.debug("maintenance=off url parameter set: skipping maintenance check");
      this.executeNoMaintenance();
      return;
    }
    __s1param0.prototype.executeDefaultBehavior.call(this);
  };
  CastleCheckMaintenanceCommand.prototype.executeNWMaintenance = function () {
    __s0local0.debug("Server under maintenance: show Maintanance screen");
    this.showMaintenanceScreen();
  };
  CastleCheckMaintenanceCommand.prototype.executeSocialMaintenance = function () {
    __s0local0.debug("Social/Network platform Maintenance: Server under maintenance: show Maintanance screen");
    this.executeNWMaintenance();
  };
  CastleCheckMaintenanceCommand.prototype.clearMaintenance = function () {
    __dep_export_CastleNewsHubOverlay.CastleNewsHubOverlay.closeMaintenance();
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideDialog(__dep_export_CastleNoConnectionDialog.CastleNoConnectionDialog);
    __s1param0.prototype.clearMaintenance.call(this);
  };
  CastleCheckMaintenanceCommand.prototype.showMaintenanceScreen = function () {
    __dep_exact_9e901e8e2483a22f_2.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_1.ClientFunnelGameStates.MAINTENANCE_SCREEN);
    var __s14local0 = this.env.urlVariables;
    var __s14local1 = __s14local0 && __s14local0.urlParams && __s14local0.urlParams.get("maintenance") === "on";
    if (this.env.isTest && !__s14local1) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleWorldSelectionDialog.CastleWorldSelectionDialog);
    } else {
      __dep_export_CastleNewsHubOverlay.CastleNewsHubOverlay.openMaintenance();
    }
  };
  CastleCheckMaintenanceCommand.prototype.executeNoMaintenance = function () {
    try {
      __s1param0.prototype.executeNoMaintenance.call(this);
      var __s18local0 = __dep_exact_9e901e8e2483a22f_3.EnvGlobalsHandler.globals;
      var __s18local1 = __dep_export_CastleModel.CastleModel.smartfoxClient.isConnected;
      __s0local0.debug("server isConnected: " + __s18local1 + " - game should useAutologin:" + __s18local0.useAutoLogin + " and login isKeyBased: " + __s18local0.loginIsKeyBased);
      if (!!__s18local0.loginIsKeyBased || !__s18local0.useAutoLogin) {
        __s0local0.debug("server is NOT under maintenance --> show LoginScreen");
      }
      if (__s18local0.useAutoLogin) {
        __s0local0.debug("server is connected and NOT under maintenance.  -->  proceed to autologin");
      }
    } catch (__s23local0) {
      __s0local0.error(__s23local0);
      window.bugsnagClient.notify(__s23local0);
    }
  };
  return CastleCheckMaintenanceCommand;
}(__dep_exact_9e901e8e2483a22f.BasicCheckMaintenanceCommand);
exports.CastleCheckMaintenanceCommand = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleNewsHubOverlay = require("gge-module:export_CastleNewsHubOverlay");
var __dep_export_CastleNoConnectionDialog = require("gge-module:export_CastleNoConnectionDialog");
var __dep_export_CastleWorldSelectionDialog = require("gge-module:export_CastleWorldSelectionDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ISimpleCommand");
