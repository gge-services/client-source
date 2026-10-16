Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTutorialEvent = require("gge-module:export_CastleTutorialEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_C2SQuestStarterClickVO = require("gge-module:export_C2SQuestStarterClickVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function TutorialBasicActionCommand() {
    var __s3local0 = this;
    __s3local0._triggeredByQuestId = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TutorialBasicActionCommand, __s1param0);
  TutorialBasicActionCommand.prototype.onConnectionLost = function (__s5param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.removeEventListener(__dep_exact_9e901e8e2483a22f_2.SmartfoxEvent.CONNECTION_LOST, this.bindFunction(this.onConnectionLost), false);
    this.clearBlockers();
  };
  TutorialBasicActionCommand.prototype.execute = function (__s7param0 = null) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.addEventListener(__dep_exact_9e901e8e2483a22f_2.SmartfoxEvent.CONNECTION_LOST, this.bindFunction(this.onConnectionLost), false, -1);
    this._tutorialStepVO = __s7param0[0];
    this._triggeredByQuestId = __dep_exact_f855840627e6e145.int(__s7param0[1]);
    if (this.actionConditionValid()) {
      this.internalExecute();
    } else {
      this.finishStep();
    }
  };
  TutorialBasicActionCommand.prototype.internalExecute = function () {};
  TutorialBasicActionCommand.prototype.actionConditionValid = function () {
    return true;
  };
  TutorialBasicActionCommand.prototype.finishStep = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.removeEventListener(__dep_exact_9e901e8e2483a22f_2.SmartfoxEvent.CONNECTION_LOST, this.bindFunction(this.onConnectionLost), false);
    this.tutorialController.finishStep();
    this.controller.dispatchEvent(new __dep_export_CastleTutorialEvent.CastleTutorialEvent(__dep_export_CastleTutorialEvent.CastleTutorialEvent.STEP_FINISHED, [this._tutorialStepVO.id]));
  };
  Object.defineProperty(TutorialBasicActionCommand.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TutorialBasicActionCommand.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  TutorialBasicActionCommand.prototype.getPanelDisp = function (__s21param0) {
    if (__s21param0 == __dep_export_CastleActionPanel.CastleActionPanel) {
      return this.layoutManager.getPanel(__s21param0).actionPanel;
    } else {
      return this.layoutManager.getPanel(__s21param0).disp;
    }
  };
  TutorialBasicActionCommand.prototype.getDialogDisp = function (__s25param0) {
    return this.layoutManager.getDialog(__s25param0).disp;
  };
  TutorialBasicActionCommand.prototype.getActionPanelButton = function (__s27param0) {
    return this.layoutManager.getPanel(__dep_export_CastleActionPanel.CastleActionPanel).buttons.getAnyButtonByClass(__s27param0);
  };
  TutorialBasicActionCommand.prototype.getActionPanelButtonDisp = function (__s29param0) {
    var __s29local0 = this.getActionPanelButton(__s29param0);
    if (__s29local0) {
      return __s29local0.buttonMc;
    } else {
      return null;
    }
  };
  TutorialBasicActionCommand.prototype.replaceActionPanelButtonInBlocker = function (__s33param0) {
    var __s33local0 = this.getActionPanelButton(__s33param0);
    this.blocker.replace(__s33local0.disp);
    this.blocker.add(__s33local0.buttonMc);
  };
  Object.defineProperty(TutorialBasicActionCommand.prototype, "arrows", {
    get: function () {
      return __dep_export_CastleTutorialArrowController.CastleTutorialArrowController.instance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TutorialBasicActionCommand.prototype, "blocker", {
    get: function () {
      return __dep_export_CastleTutorialClickBlocker.CastleTutorialClickBlocker.instance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TutorialBasicActionCommand.prototype, "filter", {
    get: function () {
      return __dep_export_CastleTutorialDialogFilter.CastleTutorialDialogFilter.instance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TutorialBasicActionCommand.prototype, "spotlight", {
    get: function () {
      return __dep_export_CastleTutorialSpotlight.CastleTutorialSpotlight.instance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TutorialBasicActionCommand.prototype, "tutorialController", {
    get: function () {
      return __dep_export_CastleTutorialController.CastleTutorialController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  TutorialBasicActionCommand.prototype.clearBlockers = function () {
    __dep_export_CastleModel.CastleModel.tutorialData.clearBlockers();
  };
  TutorialBasicActionCommand.prototype.tutorialData = function () {
    return __dep_export_CastleModel.CastleModel.tutorialData;
  };
  TutorialBasicActionCommand.prototype.trackStep = function (__s49param0, __s49param1 = true) {
    if (__s49param0 != "") {
      __dep_exact_9e901e8e2483a22f_3.debug("[TRACKING] " + __s49param0);
      __dep_exact_9e901e8e2483a22f.ClientFunnelTrackingController.getInstance().trackState(__s49param0);
      if (__s49param1) {
        __dep_exact_9e901e8e2483a22f.ClientFunnelTrackingController.getInstance().trackState(__s49param0);
      }
    }
  };
  TutorialBasicActionCommand.prototype.finishTriggerQuest = function () {
    if (this._triggeredByQuestId > -1) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SQuestStarterClickVO.C2SQuestStarterClickVO(this._triggeredByQuestId));
    }
  };
  TutorialBasicActionCommand.__initialize_static_members = function () {
    TutorialBasicActionCommand.TUT_ARROW_ACTION_PANEL_OFFSET = new __s0local0(15, 5);
    TutorialBasicActionCommand.TUT_ARROW_DUNGEON_OFFSET = new __s0local0(30, 30);
  };
  TutorialBasicActionCommand.WODID = "wodID";
  TutorialBasicActionCommand.AMOUNT = "unitAmount";
  return TutorialBasicActionCommand;
}(__dep_exact_9e901e8e2483a22f_1.SimpleCommand);
exports.TutorialBasicActionCommand = __s0local1;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleTutorialSpotlight = require("gge-module:export_CastleTutorialSpotlight");
var __dep_export_CastleTutorialArrowController = require("gge-module:export_CastleTutorialArrowController");
var __dep_export_CastleTutorialClickBlocker = require("gge-module:export_CastleTutorialClickBlocker");
var __dep_export_CastleTutorialController = require("gge-module:export_CastleTutorialController");
var __dep_export_CastleTutorialDialogFilter = require("gge-module:export_CastleTutorialDialogFilter");
var __dep_export_CastleActionPanel = require("gge-module:export_CastleActionPanel");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ISimpleCommand");
__s0local1.__initialize_static_members();
