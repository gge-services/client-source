Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleOpenShopExecutor = require("gge-module:export_CastleOpenShopExecutor");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleTimerComponent = require("gge-module:export_CastleTimerComponent");
var __s0local0 = function () {
  function ACastleWorldCupDialogState(__s3param0) {
    this.dialog = __s3param0;
    this.initTextFields();
    this.initElements();
  }
  ACastleWorldCupDialogState.prototype.stopTimer = function () {
    this.remainingTimeComponent.stop();
  };
  ACastleWorldCupDialogState.prototype.initTextFields = function () {
    this.tfBubble = this.textFieldManager.registerTextField(this.dialogDisp.tfBubble, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.tfRemainingTime = this.textFieldManager.registerTextField(this.dialogDisp.tfRemainingTime, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.tfRules = this.textFieldManager.registerTextField(this.dialogDisp.btnRules.tfRules, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_worldCup_rules"));
    this.tfDesc = this.textFieldManager.registerTextField(this.dialogDisp.tfDesc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_worldCup_regularTime"));
    this.tfDesc.autoFitToBounds = true;
    this.tfBox = this.textFieldManager.registerTextField(this.dialogDisp.tfBox, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.tfTeamA = this.textFieldManager.registerTextField(this.dialogDisp.btnTeamA.tfTeam, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.tfTeamB = this.textFieldManager.registerTextField(this.dialogDisp.btnTeamB.tfTeam, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.tfTeamDraw = this.textFieldManager.registerTextField(this.dialogDisp.btnDraw.tfDraw, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.tfBonus = this.textFieldManager.registerTextField(this.dialogDisp.tfBonus, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_privatePrimeTime_bonusValue"));
    this.tfBonus.autoFitToBounds = true;
    this.tfC2 = this.textFieldManager.registerTextField(this.dialogDisp.tfC2, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("plus_value_gold"));
    this.tfC2.autoFitToBounds = true;
    this.tfRemainingTime.mouseEnabled = false;
    this.remainingTimeComponent = new __dep_export_CastleTimerComponent.CastleTimerComponent(this.tfRemainingTime, this.bindFunction(this.getTimerText));
  };
  ACastleWorldCupDialogState.prototype.initElements = function () {
    this.dialogDisp.btnRules.mouseChildren = false;
    this.dialogDisp.btnTeamA.mouseChildren = false;
    this.dialogDisp.btnTeamB.mouseChildren = false;
    this.dialogDisp.btnDraw.mouseChildren = false;
    this.dialogDisp.btnRules.toolTipText = "generic_help";
    this.buyC2Component = new __dep_export_ButtonAddGoldComponent.ButtonAddGoldComponent(this.dialogDisp.btnBuyC2);
  };
  ACastleWorldCupDialogState.prototype.updateTexts = function () {
    this.remainingTimeComponent.start(this.worldCupEventVO.remainingEventTimeInSeconds);
    this.tfBubble.textContentVO.textId = "";
    this.tfTeamA.textContentVO.textId = this.getTeamString(this.worldCupEventVO.teamA);
    this.tfTeamB.textContentVO.textId = this.getTeamString(this.worldCupEventVO.teamB);
    this.tfTeamDraw.textContentVO.textId = "dialog_worldCup_draw";
    this.tfBonus.textContentVO.textReplacements = [this.worldCupEventVO.bonusC2];
    this.tfC2.textContentVO.textReplacements = [this.worldCupEventVO.bonusRubies];
    this.buyC2Component.init();
    this.dialogDisp.bgRemainingTime.toolTipText = "resttime";
  };
  ACastleWorldCupDialogState.prototype.updateElements = function () {
    this.updateFlag(this.dialogDisp.flagAContainer, this.flagA, this.worldCupEventVO.teamA);
    this.updateFlag(this.dialogDisp.flagBContainer, this.flagB, this.worldCupEventVO.teamB);
  };
  ACastleWorldCupDialogState.prototype.updateFlag = function (__s15param0, __s15param1, __s15param2) {
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(__s15param0);
    __s15param1 = this.getTeamFlagClip(__s15param2);
    __s15param0.addChild(__s15param1);
  };
  ACastleWorldCupDialogState.prototype.getTeamFlagClip = function (__s17param0) {
    var __s17local0 = ACastleWorldCupDialogState.FLAG_ASSET_NAME_PREFIX + __s17param0;
    return new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s17local0, ACastleWorldCupDialogState.assetFileURL(__s17local0), null, 0, false);
  };
  ACastleWorldCupDialogState.assetFileURL = function (__s19param0) {
    return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s19param0);
  };
  ACastleWorldCupDialogState.prototype.getTimerText = function (__s21param0) {
    return __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s21param0);
  };
  ACastleWorldCupDialogState.prototype.activateButton = function (__s23param0) {
    __s23param0.bg.gotoAndStop(ACastleWorldCupDialogState.BUTTON_NORMAL_STATE);
    __s23param0.actLikeButton = true;
    __s23param0.enabled = true;
    __s23param0.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
  };
  ACastleWorldCupDialogState.prototype.deactivateButton = function (__s25param0) {
    __s25param0.enabled = false;
    __s25param0.bg.gotoAndStop(ACastleWorldCupDialogState.BUTTON_NORMAL_STATE);
    __s25param0.actLikeButton = false;
    __s25param0.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_DESATURATED_BUTTON_COLOR_MATRIX);
    __s25param0.scaleX = __s25param0.scaleY = ACastleWorldCupDialogState.DEFAULT_SCALE;
  };
  ACastleWorldCupDialogState.prototype.getTeamString = function (__s27param0) {
    return "dialog_worldCup_team" + __s27param0.toString();
  };
  ACastleWorldCupDialogState.prototype.onClick = function (__s29param0) {
    switch (__s29param0.target) {
      case this.dialogDisp.btnClose:
        this.dialog.hideDialog();
        break;
      case this.dialogDisp.btnRules:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("dialog_worldCup_rules_text"));
        break;
      case this.dialogDisp.btnBuyC2:
        this.buyC2Component.onClickButton(__dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.SOURCE_PRIME_TIME_WORLDCUP, __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.SOURCE_PRIME_TIME_WORLDCUP);
    }
  };
  ACastleWorldCupDialogState.prototype.destroy = function () {
    if (this.buyC2Component) {
      this.buyC2Component.destroy();
    }
  };
  ACastleWorldCupDialogState.prototype.resetState = function () {
    this.stopTimer();
  };
  Object.defineProperty(ACastleWorldCupDialogState.prototype, "dialogDisp", {
    get: function () {
      return this.dialog.dialogDisp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleWorldCupDialogState.prototype, "worldCupEventVO", {
    get: function () {
      return this.dialog.dialogProperties.worldCupEventVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleWorldCupDialogState.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleWorldCupDialogState.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  ACastleWorldCupDialogState.__initialize_static_members = function () {
    ACastleWorldCupDialogState.FLAG_ASSET_NAME_PREFIX = "WorldCupFlagTeam";
    ACastleWorldCupDialogState.MOUSE_OVER_SCALE = 1.05;
    ACastleWorldCupDialogState.DEFAULT_SCALE = 1;
    ACastleWorldCupDialogState.BUTTON_NORMAL_STATE = 1;
    ACastleWorldCupDialogState.BUTTON_SELECTED_STATE = 2;
  };
  return ACastleWorldCupDialogState;
}();
exports.ACastleWorldCupDialogState = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_ButtonAddGoldComponent = require("gge-module:export_ButtonAddGoldComponent");
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICastleWorldCupDialogState");
__s0local0.__initialize_static_members();
