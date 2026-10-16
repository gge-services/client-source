Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function () {
  function SurveyTextInput(__s3param0, __s3param1) {
    this.questionId = 0;
    this.questionId = __s3param0;
    this.disp = __s3param1;
    this.answerTextfield = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3param1.txt_answer, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.answerTextfield.maxChars = __dep_exact_26a421b704832cff.SurveyConst.MAX_ANSWER_LENGTH;
    this.remainingCharactersTextfield = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3param1.txt_remainingCharacters, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_messageLimit_charactersLeft"));
    this.remainingCharactersTextfield.visible = false;
  }
  SurveyTextInput.prototype.show = function () {
    this.answerTextfield.change.add(this.bindFunction(this.handleMaxSymbols));
  };
  SurveyTextInput.prototype.hide = function () {
    this.answerTextfield.change.remove(this.bindFunction(this.handleMaxSymbols));
  };
  SurveyTextInput.prototype.handleMaxSymbols = function (__s9param0) {
    var __s9local0 = __dep_exact_f855840627e6e145.int(Math.max(0, __dep_exact_26a421b704832cff.SurveyConst.MAX_ANSWER_LENGTH - this.answerTextfield.text.length));
    var __s9local1 = __s9local0 < SurveyTextInput.MIN_CHARS_LEFT_NO_COUNTDOWN;
    this.remainingCharactersTextfield.visible = __s9local1;
    if (__s9local1) {
      this.remainingCharactersTextfield.textContentVO.textReplacements = [__s9local0];
    }
  };
  SurveyTextInput.prototype.getJson = function () {
    return {
      ID: this.questionId,
      T: this.answerTextfield.text
    };
  };
  SurveyTextInput.__initialize_static_members = function () {
    SurveyTextInput.MIN_CHARS_LEFT_NO_COUNTDOWN = 100;
  };
  return SurveyTextInput;
}();
exports.SurveyTextInput = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISurveyFormField");
__s0local0.__initialize_static_members();
