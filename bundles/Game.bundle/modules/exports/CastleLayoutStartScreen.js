Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ModernStartscreenPanel = require("gge-module:export_ModernStartscreenPanel");
var __dep_export_StartscreenHelper = require("gge-module:export_StartscreenHelper");
var __s0local0 = function (__s1param0) {
  function CastleLayoutStartScreen() {
    var __s3local0 = this;
    __s3local0.oldAgeGateActive = false;
    __s3local0.oldAgeGateValidationSuccessful = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLayoutStartScreen, __s1param0);
  CastleLayoutStartScreen.prototype.setLayout = function (__s5param0, __s5param1) {
    var __s5local0 = __dep_exact_9e901e8e2483a22f_1.BasicModel.ageGateData.isAgeGateActive;
    var __s5local1 = !!__dep_exact_9e901e8e2483a22f_1.BasicModel.ageGateData.validationSucceeded;
    if (__s5param1 != __dep_exact_9e901e8e2483a22f.BasicLayoutManager.STATE_STARTSCREEN || this.env.isFacebook || this.oldAgeGateActive != __s5local0 || this.oldAgeGateValidationSuccessful != __s5local1) {
      __s5param0.hideAllDialogs();
      __s5param0.hideAllPanels();
      __s5param0.removeAllIngameUIComponents();
      __s5param0.hideAllScreens();
      this.oldAgeGateActive = __s5local0;
      this.oldAgeGateValidationSuccessful = __s5local1;
      if (this.oldAgeGateActive && !this.oldAgeGateValidationSuccessful) {
        __s5param0.showDialogRedirecter(__dep_export_CastleAgeGateCheckDialog.CastleAgeGateCheckDialog, null, null);
      } else {
        this.setStartScreenPanel(__s5param0);
      }
    }
  };
  CastleLayoutStartScreen.prototype.setStartScreenPanel = function (__s10param0) {
    if (__dep_exact_81dacdf05bd32292.ExternalInterface.available) {
      __dep_exact_81dacdf05bd32292.ExternalInterface.call("ggsRedirectToLandingPage");
    }
    if (this.env.loginIsKeyBased || this.env.isFacebook) {
      __s10param0.showPanelRedirecter(__dep_export_CastleSocialStartscreenPanel.CastleSocialStartscreenPanel, null, false);
    } else if (__dep_export_StartscreenHelper.StartscreenHelper.usesModernStartscreen()) {
      __s10param0.showPanelRedirecter(__dep_export_ModernStartscreenPanel.ModernStartscreenPanel, null, false);
    } else {
      __s10param0.showPanelRedirecter(__dep_export_CastleStartscreenPanel.CastleStartscreenPanel, null, false);
    }
  };
  return CastleLayoutStartScreen;
}(require("gge-module:export_ACastleLayoutStrategy").ACastleLayoutStrategy);
exports.CastleLayoutStartScreen = __s0local0;
var __dep_export_CastleAgeGateCheckDialog = require("gge-module:export_CastleAgeGateCheckDialog");
var __dep_export_CastleSocialStartscreenPanel = require("gge-module:export_CastleSocialStartscreenPanel");
var __dep_export_CastleStartscreenPanel = require("gge-module:export_CastleStartscreenPanel");
