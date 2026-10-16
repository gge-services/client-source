Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstAlliance = require("gge-module:export_ClientConstAlliance");
var __dep_export_C2SAllianceHelpRequestVO = require("gge-module:export_C2SAllianceHelpRequestVO");
var __dep_export_CastleAllianceHelpRequestDataEvent = require("gge-module:export_CastleAllianceHelpRequestDataEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleAllianceHelpRequestButtonComponent(__s3param0) {
    var __s3local0 = this;
    __s3local0._typeID = 0;
    __s3local0._isConfirmed = false;
    __s3local0._amountOfUnitsInQueue = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceHelpRequestButtonComponent, __s1param0);
  Object.defineProperty(CastleAllianceHelpRequestButtonComponent.prototype, "button", {
    get: function () {
      return this.disp.basicButton;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceHelpRequestButtonComponent.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.addEventListenersOnShow();
    this.updateButtons();
    this.onAddedToStage(null);
  };
  CastleAllianceHelpRequestButtonComponent.prototype.hide = function () {
    this.removeEventListenersOnHide();
    __s1param0.prototype.hide.call(this);
  };
  CastleAllianceHelpRequestButtonComponent.prototype.addEventListenersOnShow = function () {
    __dep_export_CastleModel.CastleModel.allianceHelpRequestData.addEventListener(__dep_export_CastleAllianceHelpRequestDataEvent.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, this.bindFunction(this.onDataUpdated));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
  };
  CastleAllianceHelpRequestButtonComponent.prototype.removeEventListenersOnHide = function () {
    __dep_export_CastleModel.CastleModel.allianceHelpRequestData.removeEventListener(__dep_export_CastleAllianceHelpRequestDataEvent.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, this.bindFunction(this.onDataUpdated));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
  };
  CastleAllianceHelpRequestButtonComponent.prototype.setParams = function (__s15param0, __s15param1 = null, __s15param2 = false, __s15param3 = 0) {
    this._typeID = __s15param0;
    this._optionalParams = __s15param1;
    this._isConfirmed = __s15param2;
    this._amountOfUnitsInQueue = __s15param3;
  };
  CastleAllianceHelpRequestButtonComponent.prototype.updateButtons = function () {
    if (__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive) {
      this.hide();
    } else {
      if (!__dep_export_CastleModel.CastleModel.userData.isInAlliance) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.button, false);
        this.setToolTipText("dialog_allianceHelp_requestButton_noAlliance");
        return;
      }
      var __s17local0 = 0;
      __s17local0 = this._isConfirmed ? __dep_exact_f855840627e6e145.int(__dep_export_ClientConstAlliance.ClientConstAlliance.STATUS_REQUEST_CONFIRMED) : __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceHelpRequestData.getStatusOfOwnRequestByID(this._typeID, this._optionalParams));
      this.setBtnState(__s17local0);
    }
  };
  CastleAllianceHelpRequestButtonComponent.prototype.setBtnState = function (__s22param0) {
    switch (__s22param0) {
      case __dep_export_ClientConstAlliance.ClientConstAlliance.STATUS_REQUEST_POSSIBLE:
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.button, true);
        this.setToolTipText(this.getRequestTextByType(this._typeID));
        break;
      case __dep_export_ClientConstAlliance.ClientConstAlliance.STATUS_REQUEST_CONFIRMED:
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.button, false);
        var __s22local0 = "dialog_allianceHelp_requestButton_requestCompleted";
        if (!__dep_exact_81dacdf05bd32292.instanceOfClass(this._optionalParams, "AllianceHelpRequestHealParamsVO") && this._amountOfUnitsInQueue < 5) {
          __s22local0 = "dialog_allianceHelp_requestButton_inactive_minimumFailed";
        }
        this.setToolTipText(__s22local0);
        break;
      case __dep_export_ClientConstAlliance.ClientConstAlliance.STATUS_REQUEST_PROCESSING:
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.button, false);
        this.setToolTipText("dialog_allianceHelp_requestButton_requestActive");
    }
  };
  CastleAllianceHelpRequestButtonComponent.prototype.getRequestTextByType = function (__s26param0) {
    switch (__s26param0) {
      case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_RECRUITMENT:
      case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_RECRUITMENT_LIST:
        return __dep_exact_92d05af59ee2ff30.Localize.text(this._amountOfUnitsInQueue >= 5 ? "dialog_allianceHelp_requestButton_allSlots_tooltip" : "dialog_allianceHelp_requestButton_inactive_minimumFailed");
      case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_LOOP_RECRUIT:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_recruit_help_looping");
      case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_HEAL_UNIT:
      case 7:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_hospital_allianceHelpButton_tooltip", [__dep_export_CastleModel.CastleModel.allianceHelpRequestData.unitHealTimeReduction]);
    }
    return "";
  };
  CastleAllianceHelpRequestButtonComponent.prototype.onClick = function (__s29param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s29param0.target)) {
      __s1param0.prototype.onClick.call(this, __s29param0);
      switch (this._typeID) {
        case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_RECRUITMENT:
        case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_LOOP_RECRUIT:
        case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_RECRUITMENT_LIST:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceHelpRequestVO.C2SAllianceHelpRequestVO(this._optionalParams.recruitID, this._typeID));
          break;
        case __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_HEAL_UNIT:
          var __s29local0 = this._optionalParams;
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceHelpRequestVO.C2SAllianceHelpRequestVO(__s29local0.id, __s29local0.hospitalListID));
      }
    }
  };
  CastleAllianceHelpRequestButtonComponent.prototype.onDataUpdated = function (__s33param0) {
    this.updateButtons();
  };
  CastleAllianceHelpRequestButtonComponent.prototype.onAllianceStatusChanged = function (__s35param0) {
    this.updateButtons();
  };
  CastleAllianceHelpRequestButtonComponent.prototype.setToolTipText = function (__s37param0) {
    this.button.disp.mouseChildren = false;
    this.button.disp.toolTipText = __s37param0;
  };
  Object.defineProperty(CastleAllianceHelpRequestButtonComponent.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceHelpRequestButtonComponent;
}(__dep_exact_9e901e8e2483a22f.FlashUIComponent);
exports.CastleAllianceHelpRequestButtonComponent = __s0local0;
