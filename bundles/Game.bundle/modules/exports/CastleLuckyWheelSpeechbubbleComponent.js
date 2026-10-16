Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = require("gge-module:exact_c549e43d1112dfff").getLogger("createjs.ts Extensions");
var __s0local1 = function () {
  function CastleLuckyWheelSpeechbubbleComponent(__s3param0, __s3param1) {
    this._allStates = [CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_FIRST_VISIT, CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_WIN, CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_LEVEL_UP, CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_REGULAR, CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_MAX_LEVEL, CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_PRO_MODE_FIRST_VISIT];
    this._textIDs = new Map();
    this._eventID = 0;
    this._tf = __s3param0;
    this._eventID = __s3param1;
    this.intitTexts();
  }
  CastleLuckyWheelSpeechbubbleComponent.prototype.intitTexts = function () {
    if (this._eventID == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_LUCKYWHEEL_SD) {
      this._textIDs.set(CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_FIRST_VISIT, "dialog_luckyWheel_saleDays_text_first");
      this._textIDs.set(CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_REGULAR, "dialog_luckyWheel_saleDays_text_regular");
    } else {
      this._textIDs.set(CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_FIRST_VISIT, "dialog_luckyWheel_text_first");
      this._textIDs.set(CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_REGULAR, "dialog_luckyWheel_text_regular");
    }
    this._textIDs.set(CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_WIN, "dialog_luckyWheel_text_win");
    this._textIDs.set(CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_LEVEL_UP, "dialog_luckyWheel_text_winclassLevelup");
    this._textIDs.set(CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_MAX_LEVEL, "dialog_luckyWheel_text_winclassMax");
    this._textIDs.set(CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_PRO_MODE_FIRST_VISIT, "dialog_luckyWheel_text_firstPro");
  };
  Object.defineProperty(CastleLuckyWheelSpeechbubbleComponent.prototype, "state", {
    set: function (__s9param0) {
      if (this._allStates.indexOf(__s9param0) != -1) {
        if (this._currentState != __s9param0) {
          this._currentState = __s9param0;
          if (this._ggsTF) {
            this._ggsTF.textContentVO.textId = this._textIDs.get(this._currentState);
          } else {
            this._ggsTF = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._tf, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this._textIDs.get(this._currentState)));
          }
          this._tf.mouseWheelEnabled = false;
        }
      } else {
        __s0local0.debug("CastleLuckyWheelPresentationCharacter.showState says: invalid state: " + __s9param0);
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_FIRST_VISIT = "SPEECH_STATE_FIRST_VISIT";
  CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_WIN = "SPEECH_STATE_WIN";
  CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_LEVEL_UP = "SPEECH_STATE_LEVEL_UP";
  CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_REGULAR = "SPEECH_STATE_REGULAR";
  CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_MAX_LEVEL = "SPEECH_STATE_MAX_LEVEL";
  CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_PRO_MODE_FIRST_VISIT = "SPEECH_STATE_PRO_MODE_FIRST_VISIT";
  return CastleLuckyWheelSpeechbubbleComponent;
}();
exports.CastleLuckyWheelSpeechbubbleComponent = __s0local1;
