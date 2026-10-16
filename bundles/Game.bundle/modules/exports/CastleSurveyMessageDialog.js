Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTracking = require("gge-module:export_ClientConstTracking");
var __dep_export_C2SGetSurveyInfoVO = require("gge-module:export_C2SGetSurveyInfoVO");
var __dep_export_C2SReportUserSurveyVO = require("gge-module:export_C2SReportUserSurveyVO");
var __dep_export_C2SClientSideTrackingVO = require("gge-module:export_C2SClientSideTrackingVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleScrollComponent = require("gge-module:export_CastleScrollComponent");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CheckboxesGroup = require("gge-module:export_CheckboxesGroup");
var __dep_export_RadioButtonsGroup = require("gge-module:export_RadioButtonsGroup");
var __dep_export_SurveyFormClipFactory = require("gge-module:export_SurveyFormClipFactory");
var __dep_export_SurveyTextInput = require("gge-module:export_SurveyTextInput");
var __s0local0 = function (__s1param0) {
  function CastleSurveyMessageDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleSurveyMessageDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSurveyMessageDialog, __s1param0);
  CastleSurveyMessageDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel, this.dialogDisp.btn_up, this.dialogDisp.btn_down, this.dialogDisp.btn_slider]);
    this.scroll = new __dep_export_CastleScrollComponent.CastleScrollComponent(this.dialogDisp, 0);
    this.initTexts();
  };
  CastleSurveyMessageDialog.prototype.showLoaded = function (__s7param0 = null) {
    if (this.dialogProperties.questions) {
      this.dialogReady();
    } else {
      __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.SUR_ARRIVED, this.bindFunction(this.onSurArrived));
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetSurveyInfoVO.C2SGetSurveyInfoVO(this.dialogProperties.surveyId));
    }
  };
  CastleSurveyMessageDialog.prototype.onSurArrived = function (__s11param0) {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.SUR_ARRIVED, this.bindFunction(this.onSurArrived));
    try {
      var __s11local0 = __dep_exact_f855840627e6e145.int(__s11param0.params[0]);
      var __s11local1 = JSON.parse(__s11param0.params[1][1]);
      if (__s11local0 == __dep_exact_26a421b704832cff.ERROR.ALL_OK && __s11local1.hasOwnProperty("QS") && __s11local1.hasOwnProperty("ST")) {
        var __s11local2 = __s11local1.QS;
        this.dialogProperties.surveyType = __s11local1.ST;
        this.dialogProperties.questions = __dep_export_MessageUserSurveyVO.MessageUserSurveyVO.createQuestionsFromCommand(__s11local2);
        if (this.dialogProperties.questions) {
          this.dialogReady();
          return;
        }
      }
    } catch (__s16local0) {
      __dep_exact_9e901e8e2483a22f_2.error(__s16local0.stack);
    }
    this.dialogNotReady();
  };
  CastleSurveyMessageDialog.prototype.dialogReady = function () {
    __s1param0.prototype.showLoaded.call(this);
    this.showSurvey();
  };
  CastleSurveyMessageDialog.prototype.dialogNotReady = function () {
    __s1param0.prototype.showLoaded.call(this);
    this.hide();
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("error_text_invalid")));
  };
  CastleSurveyMessageDialog.prototype.showSurvey = function () {
    this.txt_title.textContentVO.textId = this.getTextIdPrefix() + "_title";
    this.txt_description.textContentVO.textId = this.getTextIdPrefix() + "_description";
    this.initFormFields();
    this.setScrollBarVisibility(this.isScrollBarNecessary());
    if (this.isScrollBarNecessary()) {
      this.scroll.show();
      this.scroll.scrollToStart();
    }
    var __s22local0 = new __s0local1();
    __s22local0.SID = __dep_exact_f855840627e6e145.int(this.dialogProperties.surveyId);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SClientSideTrackingVO.C2SClientSideTrackingVO(__dep_export_ClientConstTracking.ClientConstTracking.TRACKING_USER_SURVEY_SEEN, __s22local0));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
  };
  CastleSurveyMessageDialog.prototype.onEventRemoved = function (__s25param0) {
    if (__s25param0 && __s25param0.specialEventVO && __s25param0.specialEventVO.eventId == __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_USER_SURVEY) {
      this.hideLoaded();
    }
  };
  CastleSurveyMessageDialog.prototype.hideLoaded = function (__s28param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s28param0);
    this.scroll.hide();
    if (this.formFields != null) {
      for (var __s28local0 = 0, __s28local1 = this.formFields; __s28local0 < __s28local1.length; __s28local0++) {
        var __s28local2 = __s28local1[__s28local0];
        if (__s28local2 !== undefined) {
          __s28local2.hide();
        }
      }
    }
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
  };
  CastleSurveyMessageDialog.prototype.setScrollBarVisibility = function (__s34param0) {
    this.dialogDisp.mc_sliderLine.visible = this.dialogDisp.btn_slider.visible = this.dialogDisp.btn_up.visible = this.dialogDisp.btn_down.visible = __s34param0;
  };
  CastleSurveyMessageDialog.prototype.isScrollBarNecessary = function () {
    return this.dialogDisp.mc_contentHolder.height > this.dialogDisp.mc_mask.height;
  };
  CastleSurveyMessageDialog.prototype.initTexts = function () {
    this.txt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_titleDialog, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.txt_description = this.textFieldManager.registerTextField(this.dialogDisp.txt_titleHead, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
  };
  CastleSurveyMessageDialog.prototype.initFormFields = function () {
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_contentHolder);
    __dep_export_SurveyFormClipFactory.SurveyFormClipFactory.createForm(this.dialogProperties.questions, this.dialogDisp.mc_contentHolder);
    this.formFields = [];
    for (var __s40local0 = 0; __s40local0 < this.dialogProperties.questions.length; ++__s40local0) {
      var __s40local1 = this.dialogProperties.questions[__s40local0];
      var __s40local2 = this.dialogDisp.mc_contentHolder.getChildAt(__s40local0);
      var __s40local3 = this.getQuestionTextId(__s40local1.questionId);
      this.textFieldManager.registerTextField(__s40local2.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s40local3)).autoFitToBounds = true;
      var __s40local4 = this.createQuestionTypeComponent(__s40local2.mc_answers, __s40local1);
      this.formFields.push(__s40local4);
      __s40local4.show();
    }
  };
  CastleSurveyMessageDialog.prototype.addLeadingZeros = function (__s44param0) {
    if (__s44param0 < 10) {
      return "000" + __s44param0;
    } else if (__s44param0 < 100) {
      return "00" + __s44param0;
    } else if (__s44param0 < 1000) {
      return "0" + __s44param0;
    } else {
      return "" + __s44param0;
    }
  };
  CastleSurveyMessageDialog.prototype.getTextIdPrefix = function () {
    if (this.dialogProperties.isOldSurvey) {
      return "dialog_survey_" + this.dialogProperties.surveyId;
    } else {
      return "survey_" + this.addLeadingZeros(this.dialogProperties.surveyType);
    }
  };
  CastleSurveyMessageDialog.prototype.getQuestionTextId = function (__s54param0) {
    return this.getTextIdPrefix() + "_question_" + __s54param0;
  };
  CastleSurveyMessageDialog.prototype.getAnswersTextIdPrefix = function (__s56param0) {
    return this.getQuestionTextId(__s56param0) + "_answer_";
  };
  CastleSurveyMessageDialog.prototype.createQuestionTypeComponent = function (__s58param0, __s58param1) {
    var __s58local0 = [];
    for (var __s58local1 = 0; __s58local1 < __s58param0.numChildren; ++__s58local1) {
      __s58local0.push(__s58param0.getChildAt(__s58local1));
    }
    var __s58local2 = this.getAnswersTextIdPrefix(__s58param1.questionId);
    var __s58local3 = 0;
    if (!this.dialogProperties.isOldSurvey) {
      __s58local3 = 1;
    }
    switch (__s58param1.questionType) {
      case __dep_exact_26a421b704832cff_2.SurveyConst.QUESTION_TYPE_TEXT:
        return new __dep_export_SurveyTextInput.SurveyTextInput(__s58param1.questionId, __s58local0[0]);
      case __dep_exact_26a421b704832cff_2.SurveyConst.QUESTION_TYPE_RADIO:
        return new __dep_export_RadioButtonsGroup.RadioButtonsGroup(__s58param1.questionId, __s58local0, __s58param0, __s58local2, __s58local3);
      case __dep_exact_26a421b704832cff_2.SurveyConst.QUESTION_TYPE_CHECKBOX:
        return new __dep_export_CheckboxesGroup.CheckboxesGroup(__s58param1.questionId, __s58local0, __s58param0, __s58local2, __s58local3);
    }
    return null;
  };
  CastleSurveyMessageDialog.prototype.createUserSurveyCommand = function () {
    var __s64local0 = [];
    if (this.formFields != null) {
      for (var __s64local1 = 0, __s64local2 = this.formFields; __s64local1 < __s64local2.length; __s64local1++) {
        var __s64local3 = __s64local2[__s64local1];
        if (__s64local3 !== undefined) {
          __s64local0.push(__s64local3.getJson());
        }
      }
    }
    return new __dep_export_C2SReportUserSurveyVO.C2SReportUserSurveyVO(this.dialogProperties.surveyId, this.dialogProperties.surveyType, __s64local0);
  };
  CastleSurveyMessageDialog.prototype.onClick = function (__s70param0) {
    __s1param0.prototype.onClick.call(this, __s70param0);
    switch (__s70param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(this.createUserSurveyCommand());
        this.hide();
        __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDialogsWithType(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_newMessage_message"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_newMessage_messageSent")), false, __dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_LOW, 0, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_MODAL);
        break;
      case this.dialogDisp.btn_cancel:
        this.hide();
    }
  };
  Object.defineProperty(CastleSurveyMessageDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSurveyMessageDialog.__initialize_static_members = function () {
    CastleSurveyMessageDialog.NAME = "CastleSurveyMessage";
  };
  return CastleSurveyMessageDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleSurveyMessageDialog = __s0local0;
var __dep_export_MessageUserSurveyVO = require("gge-module:export_MessageUserSurveyVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __s0local1 = function () {
  return function UserSurveySeenData() {
    this.SID = 0;
  };
}();
__s0local0.__initialize_static_members();
