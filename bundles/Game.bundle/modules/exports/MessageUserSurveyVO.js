Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleSurveyMessageDialogProperties = require("gge-module:export_CastleSurveyMessageDialogProperties");
var __dep_export_SurveyQuestionVO = require("gge-module:export_SurveyQuestionVO");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __s0local0 = function (__s1param0) {
  function MessageUserSurveyVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageUserSurveyVO, __s1param0);
  MessageUserSurveyVO.prototype.parseMessageHeader = function (__s5param0) {
    try {
      this.props = MessageUserSurveyVO.createProperties(__s5param0);
    } catch (__s8local0) {
      __dep_exact_9e901e8e2483a22f.error(__s8local0.stack);
    }
  };
  MessageUserSurveyVO.createProperties = function (__s10param0) {
    var __s10local0;
    var __s10local1 = __s10param0.split(__dep_exact_26a421b704832cff_1.MessageConst.SUBTYPE_META_DATA_SPLITTER);
    var __s10local2 = __dep_exact_f855840627e6e145.int(__s10local1[0]);
    if (__s10local1.length > 1) {
      __s10local0 = MessageUserSurveyVO.createQuestionsFromHeader(__s10local1[1]);
      var __s10local3 = new __dep_export_CastleSurveyMessageDialogProperties.CastleSurveyMessageDialogProperties(__s10local2, __s10local0);
      __s10local3.isOldSurvey = true;
      return __s10local3;
    }
    return new __dep_export_CastleSurveyMessageDialogProperties.CastleSurveyMessageDialogProperties(__s10local2, __s10local0);
  };
  MessageUserSurveyVO.createQuestionsFromHeader = function (__s13param0) {
    for (var __s13local0 = __s13param0.split("+"), __s13local1 = [], __s13local2 = 0; __s13local2 < __s13local0.length; ++__s13local2) {
      var __s13local3 = String(__s13local0[__s13local2]).split("*");
      var __s13local4 = new __dep_export_SurveyQuestionVO.SurveyQuestionVO();
      __s13local4.questionId = parseInt(__s13local3[0]);
      __s13local4.questionType = parseInt(__s13local3[1]);
      __s13local4.answerCount = __s13local3.length > 2 ? parseInt(__s13local3[2]) : 1;
      if (MessageUserSurveyVO.AVAILABE_QUESTION_TYPES.indexOf(__s13local4.questionType) < 0) {
        throw new Error("Question id '" + __s13local4.questionId + "' has invalid question type " + __s13local4.questionType);
      }
      __s13local1.push(__s13local4);
    }
    return __s13local1;
  };
  MessageUserSurveyVO.createQuestionsFromCommand = function (__s18param0) {
    if (!__s18param0) {
      return null;
    }
    var __s18local0 = [];
    if (__s18param0 != null) {
      for (var __s18local1 = 0, __s18local2 = __s18param0; __s18local1 < __s18local2.length; __s18local1++) {
        var __s18local3 = __s18local2[__s18local1];
        if (__s18local3 !== undefined) {
          var __s18local4 = new __dep_export_SurveyQuestionVO.SurveyQuestionVO();
          __s18local4.questionId = __dep_exact_f855840627e6e145.int(__s18local3[__dep_exact_26a421b704832cff.CommKeys.QUESTION_ID]);
          __s18local4.questionType = __dep_exact_f855840627e6e145.int(__s18local3.QT);
          __s18local4.answerCount = __dep_exact_f855840627e6e145.int(__s18local3.AC);
          if (MessageUserSurveyVO.AVAILABE_QUESTION_TYPES.indexOf(__s18local4.questionType) < 0) {
            throw new Error("Question id '" + __s18local4.questionId + "' has invalid question type " + __s18local4.questionType);
          }
          __s18local0.push(__s18local4);
        }
      }
    }
    return __s18local0;
  };
  Object.defineProperty(MessageUserSurveyVO.prototype, "dialogInfo", {
    get: function () {
      return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleSurveyMessageDialog.CastleSurveyMessageDialog, this.props);
    },
    set: function (__s28param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "dialogInfo").set.call(this, __s28param0);
    },
    enumerable: true,
    configurable: true
  });
  MessageUserSurveyVO.prototype.parseSubject = function () {
    if (this.props.isOldSurvey) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_survey_" + this.props.surveyId + "_title");
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text("survey_titleHead");
    }
  };
  MessageUserSurveyVO.prototype.parseSender = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("system");
  };
  MessageUserSurveyVO.__initialize_static_members = function () {
    MessageUserSurveyVO.AVAILABE_QUESTION_TYPES = [__dep_exact_26a421b704832cff_2.SurveyConst.QUESTION_TYPE_TEXT, __dep_exact_26a421b704832cff_2.SurveyConst.QUESTION_TYPE_RADIO, __dep_exact_26a421b704832cff_2.SurveyConst.QUESTION_TYPE_CHECKBOX];
  };
  return MessageUserSurveyVO;
}(__dep_export_AMessageVO.AMessageVO);
exports.MessageUserSurveyVO = __s0local0;
var __dep_export_CastleSurveyMessageDialog = require("gge-module:export_CastleSurveyMessageDialog");
__s0local0.__initialize_static_members();
