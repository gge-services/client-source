Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_GoodgameTextFieldManager = require("gge-module:class_GoodgameTextFieldManager");
var __s0local0 = createjs.Event;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = function (__s1param0) {
  function AnimatedSpeechTextField(__s3param0, __s3param1, __s3param2, __s3param3 = null) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._isRunning = false;
    __s3local0.lastCharacterIndex = 0;
    __s3local0.currentSkippedCharacters = 0;
    __s3local0.fullText = __s3param1;
    __s3local0.textField = __s3param0;
    __s3local0.delayBetweenCharacters = __s3param2;
    __s3local0.mouseChildren = false;
    __s3local0.updateCallback = __s3param3;
    __s3local0.prepareTextField();
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(AnimatedSpeechTextField, __s1param0);
  AnimatedSpeechTextField.prototype.prepareTextField = function () {
    __dep_class_GoodgameTextFieldManager.GoodgameTextFieldManager.getInstance().setText(this.textField, this.fullText, false);
    this.addChild(this.textField);
    this.stop();
  };
  AnimatedSpeechTextField.prototype.start = function () {
    this._isRunning = true;
    this.startTime = Date.now();
    this.addEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
    this.addEventListener(__s0local1.CLICK, this.bindFunction(this.skip));
    this.currentSkippedCharacters = 0;
  };
  AnimatedSpeechTextField.prototype.skip = function (__s9param0 = null) {
    this.stop();
    this.fillText(this.fullText.length);
  };
  AnimatedSpeechTextField.prototype.stop = function () {
    this._isRunning = false;
    this.removeEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
    this.removeEventListener(__s0local1.CLICK, this.bindFunction(this.skip));
    this.currentSkippedCharacters = 0;
  };
  AnimatedSpeechTextField.prototype.onEnterFrame = function (__s13param0) {
    var __s13local0 = (Date.now() - this.startTime) / this.delayBetweenCharacters + this.currentSkippedCharacters;
    if (__s13local0 !== this.lastCharacterIndex) {
      this.fillText(__s13local0);
      if (__s13local0 >= this.fullText.length) {
        this.stop();
      }
    }
    this.lastCharacterIndex = __s13local0;
  };
  AnimatedSpeechTextField.prototype.fillText = function (__s17param0) {
    var __s17local0 = this.fullText.substr(0, __s17param0);
    var __s17local1 = __s17local0.substr(__s17param0 - 5);
    if (__s17local1.lastIndexOf("&") > __s17local1.lastIndexOf(";")) {
      var __s17local2 = this.fullText.substr(__s17param0, 5).indexOf(";");
      if (__s17local2 >= 0) {
        __s17param0 += __s17local2 + 1;
        this.currentSkippedCharacters += __s17local2 + 1;
      }
    }
    for (var __s17local3 = this.getLengthOfNextWord(__s17param0), __s17local4 = 0; __s17local4 < __s17local3; __s17local4++) {
      __s17local0 += " ";
    }
    __dep_class_GoodgameTextFieldManager.GoodgameTextFieldManager.getInstance().setText(this.textField, __s17local0, false);
    if (this.updateCallback !== null && this.updateCallback !== undefined) {
      this.updateCallback();
    }
  };
  AnimatedSpeechTextField.prototype.getLengthOfNextWord = function (__s24param0) {
    return this.fullText.substr(__s24param0).indexOf(" ", 1);
  };
  AnimatedSpeechTextField.prototype.isRunning = function () {
    return this._isRunning;
  };
  AnimatedSpeechTextField.prototype.destroy = function () {
    this.stop();
    this.updateCallback = null;
    this.textField = null;
  };
  return AnimatedSpeechTextField;
}(createjs.Container);
exports.AnimatedSpeechTextField = __s0local2;
