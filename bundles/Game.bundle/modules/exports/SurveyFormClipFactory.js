Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function SurveyFormClipFactory() {}
  SurveyFormClipFactory.createForm = function (__s5param0, __s5param1) {
    var __s5local0 = 0;
    if (__s5param0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5param0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          var __s5local4 = SurveyFormClipFactory.createQuestionAndAnswersClip(__s5local3);
          __s5param1.addChild(__s5local4);
          __s5local4.y = __s5local0;
          __s5local0 += __s5local4.height + SurveyFormClipFactory.VERTICAL_QUESTION_SPACING;
        }
      }
    }
  };
  SurveyFormClipFactory.createQuestionAndAnswersClip = function (__s11param0) {
    var __s11local0 = __dep_exact_81dacdf05bd32292.getDefinitionByName(SurveyFormClipFactory.getQuestionTypeClipClassName(__s11param0.questionType));
    var __s11local1 = SurveyFormClipFactory.createQuestionClip();
    var __s11local2 = 0;
    for (var __s11local3 = 0; __s11local3 < __s11param0.answerCount; ++__s11local3) {
      var __s11local4 = new __s11local0();
      __s11local1.mc_answers.addChild(__s11local4);
      __s11local4.y = __s11local2;
      __s11local2 += __dep_exact_f855840627e6e145.int(__s11local4.height + SurveyFormClipFactory.VERTICAL_ANSWER_SPACING);
    }
    __s11local1.mc_bg.height = __s11local2 + __s11local1.txt_title.height + SurveyFormClipFactory.VERTICAL_ANSWER_SPACING + SurveyFormClipFactory.TITLE_SPACING_TOP * 2;
    return __s11local1;
  };
  SurveyFormClipFactory.getQuestionTypeClipClassName = function (__s15param0) {
    switch (__s15param0) {
      case __dep_exact_26a421b704832cff.SurveyConst.QUESTION_TYPE_TEXT:
        return "SurveyMessageTextInput";
      case __dep_exact_26a421b704832cff.SurveyConst.QUESTION_TYPE_RADIO:
        return "SurveyMessageRadioButton";
      case __dep_exact_26a421b704832cff.SurveyConst.QUESTION_TYPE_CHECKBOX:
        return "SurveyMessageCheckBox";
    }
    return null;
  };
  SurveyFormClipFactory.createQuestionClip = function () {
    return new (__dep_exact_81dacdf05bd32292.getDefinitionByName("SurveyMessageQuestion"))();
  };
  SurveyFormClipFactory.__initialize_static_members = function () {
    SurveyFormClipFactory.TITLE_SPACING_TOP = 2;
    SurveyFormClipFactory.VERTICAL_ANSWER_SPACING = 4;
    SurveyFormClipFactory.VERTICAL_QUESTION_SPACING = 8;
  };
  return SurveyFormClipFactory;
}();
exports.SurveyFormClipFactory = __s0local0;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
__s0local0.__initialize_static_members();
