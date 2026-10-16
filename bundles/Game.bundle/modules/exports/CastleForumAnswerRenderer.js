Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function CastleForumAnswerRenderer(__s3param0, __s3param1, __s3param2, __s3param3) {
    this._contentText = "";
    this._isDraggingSliderButton = false;
    this._parentLayer = __s3param0;
    this._disp = __s3param1;
    this._answerButtonMc = __s3param2;
    this._topicDetailVO = __s3param3;
    this.textFieldManager.registerTextField(__s3param2.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_communication_sendAnswer_button"));
    this._scrollComponent = new __dep_export_CastleTextScrollComponent.CastleTextScrollComponent(new __dep_export_CastleTextScrollVO.CastleTextScrollVO(this._disp.txt_text, null, null, this._disp.btn_slider, this._disp.mc_slider));
  }
  CastleForumAnswerRenderer.prototype.onShow = function () {
    this.resetComponent();
    this._scrollComponent.onShow();
    this.removeEventListener();
    this.addEventListener();
  };
  CastleForumAnswerRenderer.prototype.onHide = function () {
    this._scrollComponent.onHide();
    this.removeEventListener();
  };
  CastleForumAnswerRenderer.prototype.addEventListener = function () {
    this.disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onMouseClick));
    this.answerButtonMc.addEventListener(__s0local0.CLICK, this.bindFunction(this.onMouseClick));
    this._itxt_text.change.add(this.bindFunction(this.onTextChanged));
  };
  CastleForumAnswerRenderer.prototype.removeEventListener = function () {
    this.disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onMouseClick));
    this.answerButtonMc.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onMouseClick));
    this._itxt_text.change.remove(this.bindFunction(this.onTextChanged));
  };
  CastleForumAnswerRenderer.prototype.onMouseClick = function (__s13param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s13param0.target)) {
      switch (__s13param0.target) {
        case this.answerButtonMc:
          if (__dep_export_CastleAllianceForumData.CastleAllianceForumData.hasValidPostText(this._itxt_text.text)) {
            this.parentLayer.onSendingAnswer();
          }
      }
    }
  };
  CastleForumAnswerRenderer.prototype.focusTextfield = function () {
    if (this._itxt_text && this.disp) {
      this._itxt_text.setFocus();
    }
  };
  CastleForumAnswerRenderer.prototype.getAnswerText = function () {
    return this._itxt_text.text;
  };
  CastleForumAnswerRenderer.prototype.onTextChanged = function (__s23param0) {
    if (__dep_export_CastleAllianceForumData.CastleAllianceForumData.getForumValidText(this._itxt_text.text).length > __dep_exact_26a421b704832cff.AllianceConst.MAX_REPLY_TEXT) {
      this._itxt_text.textContentVO.stringValue = this._contentText;
    } else {
      this._contentText = this._itxt_text.text;
    }
    this.updateAnswerButton();
  };
  CastleForumAnswerRenderer.prototype.resetComponent = function () {
    if (this._itxt_text) {
      this._itxt_text.clearText();
    } else {
      this._itxt_text = this.textFieldManager.registerTextField(this.disp.txt_text, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
      this._itxt_text.maxChars = __dep_exact_26a421b704832cff.AllianceConst.MAX_REPLY_TEXT;
    }
    this.updateAnswerButton();
  };
  CastleForumAnswerRenderer.prototype.updateAnswerButton = function () {
    var __s31local0 = __dep_export_CastleAllianceForumData.CastleAllianceForumData.isTopicFull(this._topicDetailVO);
    var __s31local1 = __dep_export_CastleAllianceForumData.CastleAllianceForumData.hasValidPostText(this._itxt_text.text);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.answerButtonMc, __s31local1 && !__s31local0);
    this.answerButtonMc.toolTipText = __s31local0 ? "dialog_alliance_communication_topicAnswersFull_tooltip" : __s31local1 ? null : this._itxt_text && this._itxt_text.text && this._itxt_text.text.length > 0 ? "alert_textTooShort" : "dialog_alliance_communication_NoText_tooltip";
  };
  Object.defineProperty(CastleForumAnswerRenderer.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumAnswerRenderer.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumAnswerRenderer.prototype, "answerButtonMc", {
    get: function () {
      return this._answerButtonMc;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumAnswerRenderer.prototype, "parentLayer", {
    get: function () {
      return this._parentLayer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumAnswerRenderer.prototype, "topicDetailVO", {
    set: function (__s41param0) {
      this._topicDetailVO = __s41param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleForumAnswerRenderer.__initialize_static_members = function () {
    CastleForumAnswerRenderer.STEP = 1;
  };
  return CastleForumAnswerRenderer;
}();
exports.CastleForumAnswerRenderer = __s0local1;
var __dep_export_CastleTextScrollComponent = require("gge-module:export_CastleTextScrollComponent");
var __dep_export_CastleAllianceForumData = require("gge-module:export_CastleAllianceForumData");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTextScrollVO = require("gge-module:export_CastleTextScrollVO");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
__s0local1.__initialize_static_members();
