Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleLoginBonusEvent = require("gge-module:export_CastleLoginBonusEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ACastleStatusIcon = require("gge-module:export_ACastleStatusIcon");
var __s0local0 = function (__s1param0) {
  function StatusIconStartupLoginBonusComponent() {
    var __s3local0 = __s1param0.call(this, "Btn_Registration_Reward", 0) || this;
    __s3local0.setTooltip("dialog_registerreward_title");
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconStartupLoginBonusComponent, __s1param0);
  StatusIconStartupLoginBonusComponent.prototype.addEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.startUpBonusData.addEventListener(__dep_export_CastleLoginBonusEvent.CastleLoginBonusEvent.LOGINBONUS_UPDATE, this.bindFunction(this.onLoginBonusUpdate));
  };
  StatusIconStartupLoginBonusComponent.prototype.removeEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.startUpBonusData.removeEventListener(__dep_export_CastleLoginBonusEvent.CastleLoginBonusEvent.LOGINBONUS_UPDATE, this.bindFunction(this.onLoginBonusUpdate));
  };
  StatusIconStartupLoginBonusComponent.prototype.onLoginBonusUpdate = function (__s9param0) {
    this.setVisibility();
  };
  StatusIconStartupLoginBonusComponent.prototype.onClick = function () {
    if (!__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStartupLoginBonusDialog.CastleStartupLoginBonusDialog);
    }
  };
  StatusIconStartupLoginBonusComponent.prototype.setVisibilityLoaded = function () {
    var __s14local0 = !this.layoutManager.isInSpectatedCastle && !this.layoutManager.isInMyOccupiedCastle;
    if (__dep_export_CastleModel.CastleModel.userData.userLevel >= 5 && __dep_export_CastleModel.CastleModel.startUpBonusData.nextStartupLoginBonusID >= 0 && this.layoutManager.currentState != __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_KINGDOMMAP && __s14local0) {
      if (__dep_export_CastleModel.CastleModel.startUpBonusData.canCollectBonus) {
        this.iconDisp.gotoAndStop(2);
      } else {
        this.iconDisp.gotoAndStop(1);
      }
      this.show();
    } else {
      this.hide();
    }
  };
  Object.defineProperty(StatusIconStartupLoginBonusComponent.prototype, "width", {
    get: function () {
      return 68;
    },
    set: function (__s22param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastleStatusIcon.ACastleStatusIcon.prototype, "width").set.call(this, __s22param0);
    },
    enumerable: true,
    configurable: true
  });
  return StatusIconStartupLoginBonusComponent;
}(__dep_export_ACastleStatusIcon.ACastleStatusIcon);
exports.StatusIconStartupLoginBonusComponent = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleStartupLoginBonusDialog = require("gge-module:export_CastleStartupLoginBonusDialog");
