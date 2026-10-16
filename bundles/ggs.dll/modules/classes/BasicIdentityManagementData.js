Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_IdentityManagementConstants = require("gge-module:class_IdentityManagementConstants");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_LicenseRefresher = require("gge-module:class_LicenseRefresher");
var __dep_class_IdentityManagementEvent = require("gge-module:class_IdentityManagementEvent");
var __dep_class_IdentityManagementLicenseEvent = require("gge-module:class_IdentityManagementLicenseEvent");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_CommandController = require("gge-module:class_CommandController");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger("CoreJS.BasicIdentityManagementData");
var __s0local1 = function () {
  function BasicIdentityManagementData() {
    this.showStuff = false;
  }
  BasicIdentityManagementData.prototype.initialize = function () {
    this.initializeLicenseRefresher();
  };
  BasicIdentityManagementData.prototype.authenticateViaJS = function () {
    __dep_export_CSSMouseCursor.ExternalInterface.addCallback("triggerLogin", this.bindFunction(this.triggerLogin));
    __dep_export_CSSMouseCursor.ExternalInterface.addCallback("setIDCheckData", this.bindFunction(this.setIdCheckData));
    var __s7local0 = __dep_class_BasicModel.BasicModel.userData.playerID;
    var __s7local1 = __dep_class_BasicModel.BasicModel.instanceProxy.selectedInstanceVO.instanceId;
    var __s7local2 = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.networkId;
    var __s7local3 = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.gameId;
    this.startAgeCheck(__s7local0, __s7local1, __s7local2, __s7local3);
  };
  BasicIdentityManagementData.prototype.unregisterJSCallbacks = function () {
    __dep_export_CSSMouseCursor.ExternalInterface.addCallback("triggerLogin", function () {
      __s0local0.debug(" triggerLogin callback was removed. ignoring event");
    });
    __dep_export_CSSMouseCursor.ExternalInterface.addCallback("setIDCheckData", function () {
      __s0local0.debug("setIDCheckData callback was removed.  ignoring event ");
    });
  };
  BasicIdentityManagementData.prototype.startAgeCheck = function (__s15param0, __s15param1, __s15param2, __s15param3, __s15param4 = null) {
    if (__s15param4) {
      __dep_export_CSSMouseCursor.ExternalInterface.call("ggsOpenSirenAuthentification", __s15param0, __s15param1, __s15param2, __s15param3, __s15param4);
    } else {
      __dep_export_CSSMouseCursor.ExternalInterface.call("ggsOpenSirenAuthentification", __s15param0, __s15param1, __s15param2, __s15param3);
    }
  };
  BasicIdentityManagementData.prototype.triggerLogin = function () {
    this.unregisterJSCallbacks();
    __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.COMMAND_LOGIN);
  };
  BasicIdentityManagementData.prototype.setIdCheckData = function (__s21param0) {
    var __s21local0 = __s21param0.error;
    if (__s21local0) {
      var __s21local1;
      try {
        __s21local1 = JSON.parse(__s21local0);
      } catch (__s25local0) {
        __s0local0.warn("[BasicIdentityManagementData] JSON decoding error occured!");
        __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, __dep_class_IdentityManagementConstants.IdentityManagementConstants.ERROR_VERIFICATION_FAILED);
        return;
      }
      if ((__s21local1 = __s21local1 ? __s21local1.errors[0] : {}).name && __s21local1.type) {
        __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, __dep_class_IdentityManagementConstants.IdentityManagementConstants.ERROR_VERIFICATION_FAILED);
      }
    }
  };
  Object.defineProperty(BasicIdentityManagementData.prototype, "isUserAuthenticated", {
    get: function () {
      return this.env.identityManagementId != "";
    },
    enumerable: true,
    configurable: true
  });
  BasicIdentityManagementData.prototype.initializeLicenseRefresher = function () {
    this._licenseRefresher = new __dep_class_LicenseRefresher.LicenseRefresher(__dep_class_IdentityManagementConstants.IdentityManagementConstants.LICENSE_REFRESHER_INITIAL_SHOW_DELAY_SECONDS, __dep_class_IdentityManagementConstants.IdentityManagementConstants.LICENSE_SHOW_SCHEDULE_MINUTES, __dep_class_IdentityManagementConstants.IdentityManagementConstants.LICENSE_DISPLAY_DURATION_SECONDS);
    this._licenseRefresher.licenseAgeRatingShowed.add(this.bindFunction(this.onLicenseAgeRatingShow));
    this._licenseRefresher.licenseShowed.add(this.bindFunction(this.onLicenseShow));
    this._licenseRefresher.licenseHided.add(this.bindFunction(this.onLicenseHide));
    this._licenseRefresher.startRefreshing();
  };
  BasicIdentityManagementData.prototype.onLicenseAgeRatingShow = function () {
    var __s32local0 = new __dep_class_IdentityManagementEvent.IdentityManagementEvent(__dep_class_IdentityManagementLicenseEvent.IdentityManagementLicenseEvent.SHOW_LICENSE_INITIAL_AGE_RATING_TEXT);
    __dep_class_BasicController.BasicController.getInstance().dispatchEvent(__s32local0);
  };
  BasicIdentityManagementData.prototype.onLicenseShow = function () {
    var __s34local0 = new __dep_class_IdentityManagementEvent.IdentityManagementEvent(__dep_class_IdentityManagementLicenseEvent.IdentityManagementLicenseEvent.SHOW_LICENSE_LOGOS);
    __dep_class_BasicController.BasicController.getInstance().dispatchEvent(__s34local0);
  };
  BasicIdentityManagementData.prototype.onLicenseHide = function () {
    __dep_class_BasicController.BasicController.getInstance().dispatchEvent(new __dep_class_IdentityManagementEvent.IdentityManagementEvent(__dep_class_IdentityManagementLicenseEvent.IdentityManagementLicenseEvent.HIDE_LICENSE));
  };
  BasicIdentityManagementData.prototype.startLicenseRefresher = function () {
    if (this._licenseRefresher) {
      this._licenseRefresher.startRefreshing();
    } else {
      __s0local0.warn("licenseRefresher is null");
    }
  };
  BasicIdentityManagementData.prototype.resetLicenseTimer = function () {
    this._licenseRefresher.startRefreshing();
    this._licenseRefresher.onLicenseShowScheduleIntervalReached();
  };
  BasicIdentityManagementData.prototype.stopLicenseRefresher = function () {
    if (this._licenseRefresher) {
      this._licenseRefresher.stopRefreshing();
    } else {
      __s0local0.warn("licenseRefresher is null");
    }
  };
  BasicIdentityManagementData.prototype.dispose = function () {
    this.unregisterJSCallbacks();
    this.env.identityManagementId = null;
  };
  Object.defineProperty(BasicIdentityManagementData.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return BasicIdentityManagementData;
}();
exports.BasicIdentityManagementData = __s0local1;
