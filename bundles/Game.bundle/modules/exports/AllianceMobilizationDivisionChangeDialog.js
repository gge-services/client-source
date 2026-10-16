Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SReadMessagesVO = require("gge-module:export_C2SReadMessagesVO");
var __dep_export_CastleMessageDataEvent = require("gge-module:export_CastleMessageDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceMobilizationEventEventVO = require("gge-module:export_AllianceMobilizationEventEventVO");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function AllianceMobilizationDivisionChangeDialog() {
    return __s1param0.call(this, AllianceMobilizationDivisionChangeDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceMobilizationDivisionChangeDialog, __s1param0);
  AllianceMobilizationDivisionChangeDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
  };
  AllianceMobilizationDivisionChangeDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.updateDialog();
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SReadMessagesVO.C2SReadMessagesVO(this.dialogProperties.messageVO.messageID));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.onMessageBody));
  };
  AllianceMobilizationDivisionChangeDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.onMessageBody));
    this.messageBody = null;
  };
  AllianceMobilizationDivisionChangeDialog.prototype.updateDialog = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(this.dialogProperties.messageVO.subject));
    this.dialogDisp.mc_promotion.visible = false;
    this.dialogDisp.mc_maintain.visible = false;
    this.dialogDisp.mc_demotion.visible = false;
    if (this.messageBody) {
      if (this.dialogProperties.messageVO.divisionChange > 0) {
        this.showPromotion();
      } else if (this.dialogProperties.messageVO.divisionChange < 0) {
        this.showDemotion();
      } else {
        this.showMaintain();
      }
    }
  };
  AllianceMobilizationDivisionChangeDialog.prototype.showPromotion = function () {
    this.dialogDisp.mc_promotion.visible = true;
    this.loadDivisionIcon(this.dialogDisp.mc_promotion.mc_divisionNew, this.newDivision, 70);
    this.loadDivisionIcon(this.dialogDisp.mc_promotion.mc_divisionOld, this.oldDivision, 60);
    this.loadDivisionIcon(this.dialogDisp.mc_division.mc_divisionNew, this.newDivision, 30);
    this.dialogDisp.mc_division.bg_divisionChanged.visible = true;
    this.dialogDisp.mc_division.mc_divisionChanged.visible = true;
    this.dialogDisp.mc_division.mc_divisionChanged.gotoAndStop(2);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_division.txt_divisionLabel, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("division_newdivision_popup_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_division.txt_divisionName, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.getDivisionNameTextID(this.newDivision)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("division_promotion_popup_text", [this.rank, this.points, this.pointsThreshold]));
  };
  AllianceMobilizationDivisionChangeDialog.prototype.showDemotion = function () {
    this.dialogDisp.mc_demotion.visible = true;
    this.loadDivisionIcon(this.dialogDisp.mc_demotion.mc_divisionNew, this.newDivision, 70);
    this.loadDivisionIcon(this.dialogDisp.mc_demotion.mc_divisionOld, this.oldDivision, 60);
    this.loadDivisionIcon(this.dialogDisp.mc_division.mc_divisionNew, this.newDivision, 30);
    this.dialogDisp.mc_division.bg_divisionChanged.visible = true;
    this.dialogDisp.mc_division.mc_divisionChanged.visible = true;
    this.dialogDisp.mc_division.mc_divisionChanged.gotoAndStop(1);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_division.txt_divisionLabel, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("division_newdivision_popup_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_division.txt_divisionName, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.getDivisionNameTextID(this.newDivision)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("division_demotion_popup_text", [this.rank, this.points, this.pointsThreshold]));
  };
  AllianceMobilizationDivisionChangeDialog.prototype.showMaintain = function () {
    this.dialogDisp.mc_maintain.visible = true;
    this.loadDivisionIcon(this.dialogDisp.mc_maintain.mc_divisionNew, this.newDivision, 70);
    this.loadDivisionIcon(this.dialogDisp.mc_division.mc_divisionNew, this.newDivision, 30);
    this.dialogDisp.mc_division.bg_divisionChanged.visible = false;
    this.dialogDisp.mc_division.mc_divisionChanged.visible = false;
    this.dialogDisp.mc_division.mc_divisionChanged.gotoAndStop(1);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_division.txt_divisionLabel, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("division_newdivision_popup_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_division.txt_divisionName, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.getDivisionNameTextID(this.newDivision)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("division_maintain_popup_text", [this.rank, this.points, this.pointsThreshold]));
  };
  AllianceMobilizationDivisionChangeDialog.prototype.getDivisionNameTextID = function (__s23param0) {
    var __s23local0 = "popup_ame_rewards_division_name_" + __s23param0;
    var __s23local1 = __dep_export_CastleModel.CastleModel.specialEventData.createEventVOByEventID(this.dialogProperties.messageVO.eventId);
    if (__s23local1) {
      return __s23local1.getEventSpecificTextID(__s23local0);
    } else {
      return __s23local0;
    }
  };
  AllianceMobilizationDivisionChangeDialog.prototype.loadDivisionIcon = function (__s27param0, __s27param1, __s27param2) {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s27param0);
    var __s27local0 = __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.getDivisionIconClip(__s27param1);
    __s27local0.doWhenLoaded(function () {
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.scaleToFit(__s27local0.currentshownDisplayObject, __s27param2, __s27param2);
    });
    __s27param0.addChild(__s27local0);
  };
  AllianceMobilizationDivisionChangeDialog.prototype.onMessageBody = function (__s31param0) {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.onMessageBody));
    this.messageBody = JSON.parse(__s31param0.params[0]);
    this.updateDialog();
  };
  AllianceMobilizationDivisionChangeDialog.prototype.onClick = function (__s33param0) {
    __s1param0.prototype.onClick.call(this, __s33param0);
    switch (__s33param0.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(AllianceMobilizationDivisionChangeDialog.prototype, "oldDivision", {
    get: function () {
      if (this.messageBody) {
        return this.messageBody.SD;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMobilizationDivisionChangeDialog.prototype, "newDivision", {
    get: function () {
      if (this.messageBody) {
        return this.messageBody.ED;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMobilizationDivisionChangeDialog.prototype, "rank", {
    get: function () {
      if (this.messageBody) {
        return this.messageBody.R;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMobilizationDivisionChangeDialog.prototype, "points", {
    get: function () {
      if (this.messageBody) {
        return this.messageBody.P;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMobilizationDivisionChangeDialog.prototype, "pointsThreshold", {
    get: function () {
      if (this.messageBody) {
        return this.messageBody.PT;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMobilizationDivisionChangeDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AllianceMobilizationDivisionChangeDialog.NAME = "AllianceMobilizationDivisionChangeExt";
  return AllianceMobilizationDivisionChangeDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.AllianceMobilizationDivisionChangeDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
