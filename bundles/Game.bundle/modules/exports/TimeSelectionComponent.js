Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_TimeRangeValidator = require("gge-module:export_TimeRangeValidator");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleMathHelper = require("gge-module:export_CastleMathHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function TimeSelectionComponent(__s3param0, __s3param1, __s3param2, __s3param3 = null) {
    this._animateDateSwitch = true;
    this.disp = __s3param0;
    this.callbackOnChanged = __s3param3;
    this.toolTipNoMoreThanXTime = __s3param2;
    this.toolTipNoLessThanXTime = __s3param1;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3param0.btn_plus_hour, __s3param0.btn_minus_hour, __s3param0.btn_plus_minute, __s3param0.btn_minus_minute, __s3param0.btn_plus_date, __s3param0.btn_minus_date]);
    this.itxt_hour = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3param0.txt_hour, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.itxt_hour.maxChars = 2;
    this.itxt_hour.restrict = "0-9";
    this.itxt_hour.tabIndex = TimeSelectionComponent.BASE_TAB_INDEX;
    this.itxt_minutes = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3param0.txt_minute, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.itxt_minutes.maxChars = 2;
    this.itxt_minutes.restrict = "0-9";
    this.itxt_minutes.tabIndex = TimeSelectionComponent.BASE_TAB_INDEX + 1;
    this.itxt_date = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3param0.mc_date.txt, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this._editedDate = new Date();
    this._oldEditDate = new Date();
  }
  TimeSelectionComponent.prototype.show = function (__s5param0, __s5param1, __s5param2) {
    this._timeValidator = new __dep_export_TimeRangeValidator.TimeRangeValidator(__s5param1, __s5param2);
    this.disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this.itxt_minutes.focusIn.add(this.bindFunction(this.onTextFieldFocusIn));
    this.itxt_minutes.focusOut.add(this.bindFunction(this.onTextFieldFocusOut));
    this.itxt_minutes.keyUp.add(this.bindFunction(this.onMinuteTyping));
    this.itxt_hour.focusIn.add(this.bindFunction(this.onTextFieldFocusIn));
    this.itxt_hour.focusOut.add(this.bindFunction(this.onTextFieldFocusOut));
    this.itxt_hour.keyUp.add(this.bindFunction(this.onHourTyping));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondsTick));
    this.reset(__s5param0);
  };
  TimeSelectionComponent.prototype.reset = function (__s7param0) {
    this._oldEditDate.setTime(this._editedDate.setTime(__s7param0));
    this.validateAndUpdate();
  };
  TimeSelectionComponent.prototype.hide = function () {
    this.disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this.itxt_hour.focusIn.remove(this.bindFunction(this.onTextFieldFocusIn));
    this.itxt_hour.focusOut.remove(this.bindFunction(this.onTextFieldFocusOut));
    this.itxt_hour.keyUp.remove(this.bindFunction(this.onHourTyping));
    this.itxt_minutes.focusIn.remove(this.bindFunction(this.onTextFieldFocusIn));
    this.itxt_minutes.focusOut.remove(this.bindFunction(this.onTextFieldFocusOut));
    this.itxt_minutes.keyUp.remove(this.bindFunction(this.onMinuteTyping));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondsTick));
  };
  Object.defineProperty(TimeSelectionComponent.prototype, "selectedTime", {
    get: function () {
      return this._editedDate.getTime();
    },
    enumerable: true,
    configurable: true
  });
  TimeSelectionComponent.prototype.onClick = function (__s13param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s13param0.target)) {
      switch (__s13param0.target) {
        case this.disp.btn_plus_hour:
          this.adjustTime(__dep_export_ClientConstTime.ClientConstTime.HOURES_2_MILLISEC);
          break;
        case this.disp.btn_minus_hour:
          this.adjustTime(-__dep_export_ClientConstTime.ClientConstTime.HOURES_2_MILLISEC);
          break;
        case this.disp.btn_plus_minute:
          this.adjustTime(__dep_export_ClientConstTime.ClientConstTime.MINUTES_2_MILLISEC);
          break;
        case this.disp.btn_minus_minute:
          this.adjustTime(-__dep_export_ClientConstTime.ClientConstTime.MINUTES_2_MILLISEC);
          break;
        case this.disp.btn_plus_date:
          this._animateDateSwitch = false;
          this.adjustTime(__dep_export_ClientConstTime.ClientConstTime.DAYS_2_MILLISEC);
          this._animateDateSwitch = true;
          break;
        case this.disp.btn_minus_date:
          this._animateDateSwitch = false;
          this.adjustTime(-__dep_export_ClientConstTime.ClientConstTime.DAYS_2_MILLISEC, true);
          this._animateDateSwitch = true;
      }
    }
  };
  TimeSelectionComponent.prototype.onHourTyping = function (__s17param0) {
    if (__s17param0.key == __dep_exact_81dacdf05bd32292.Keyboard.ENTER) {
      if (this.disp && this.disp.stage && this.disp.stage.focus == this.disp.txt_hour) {
        document.activeElement.blur();
      }
      var __s17local0 = this.itxt_hour.text;
      this._editedDate.setHours(__dep_export_CastleMathHelper.CastleMathHelper.clamp(parseFloat(__s17local0), 0, 23));
      this.validateAndUpdate();
    }
  };
  TimeSelectionComponent.prototype.onMinuteTyping = function (__s21param0) {
    if (__s21param0.key == __dep_exact_81dacdf05bd32292.Keyboard.ENTER) {
      if (this.disp && this.disp.stage && this.disp.stage.focus == this.disp.txt_minute) {
        document.activeElement.blur();
      }
      var __s21local0 = this.itxt_minutes.text;
      this._editedDate.setMinutes(__dep_export_CastleMathHelper.CastleMathHelper.clamp(parseFloat(__s21local0), 0, 59));
      this.validateAndUpdate();
    }
  };
  TimeSelectionComponent.prototype.onTextFieldFocusIn = function (__s25param0) {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondsTick));
  };
  TimeSelectionComponent.prototype.onTextFieldFocusOut = function (__s27param0) {
    var __s27local0 = __s27param0.textContentVO;
    if (__s27param0.text.length == 0) {
      __s27param0.text = __s27local0.stringValue;
      this.validateAndUpdate();
    } else if (__s27param0.text != __s27local0.stringValue) {
      var __s27local1 = new __dep_exact_81dacdf05bd32292_1.KeyboardEvent(__dep_exact_81dacdf05bd32292_1.KeyboardEvent.KEY_UP, false, false, 0, __dep_exact_81dacdf05bd32292.Keyboard.ENTER);
      if (__s27param0 == this.itxt_hour) {
        this.onHourTyping(__s27local1);
      } else if (__s27param0 == this.itxt_minutes) {
        this.onMinuteTyping(__s27local1);
      }
    }
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondsTick));
  };
  TimeSelectionComponent.prototype.onSecondsTick = function (__s33param0) {
    this._oldEditDate.setTime(this._editedDate.getTime());
    this.validateAndUpdate();
  };
  TimeSelectionComponent.prototype.adjustTime = function (__s35param0, __s35param1 = false) {
    this._oldEditDate.setTime(this._editedDate.getTime());
    this._editedDate.setTime(this._editedDate.getTime() + __s35param0);
    this.validateAndUpdate(__s35param1);
  };
  TimeSelectionComponent.prototype.validateAndUpdate = function (__s37param0 = false) {
    this._timeValidator.updateCurrentTime();
    this._timeValidator.validateTime(this._editedDate, __s37param0);
    this.itxt_date.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30_1.Localize.datetime(this._editedDate, __dep_exact_92d05af59ee2ff30.DateTimeStyle.SHORT, __dep_exact_92d05af59ee2ff30.DateTimeStyle.NONE);
    this.itxt_hour.textContentVO.stringValue = TimeSelectionComponent.forceTwoDigitFormat(this._editedDate.getHours());
    this.itxt_minutes.textContentVO.stringValue = TimeSelectionComponent.forceTwoDigitFormat(this._editedDate.getMinutes());
    this.updateButtons();
    if (this._animateDateSwitch && this.hasDateChanged) {
      this.playDateChangeAnimation();
    }
    if (this.bindFunction(this.callbackOnChanged)) {
      this.callbackOnChanged();
    }
  };
  TimeSelectionComponent.prototype.updateButtons = function () {
    var __s41local0 = this._timeValidator.canIncreaseHours(this._editedDate);
    var __s41local1 = this._timeValidator.canDecreaseHours(this._editedDate);
    var __s41local2 = this._timeValidator.canIncreaseMinutes(this._editedDate);
    var __s41local3 = this._timeValidator.canDecreaseMinutes(this._editedDate);
    var __s41local4 = this._timeValidator.canIncreaseDate(this._editedDate);
    var __s41local5 = this._timeValidator.canDecreaseDate(this._editedDate);
    this.itxt_hour.selectable = __s41local0 || __s41local1;
    this.itxt_minutes.selectable = __s41local2 || __s41local3;
    TimeSelectionComponent.updateButton(this.disp.btn_plus_hour, __s41local0, this.toolTipNoMoreThanXTime);
    TimeSelectionComponent.updateButton(this.disp.btn_minus_hour, __s41local1, this.toolTipNoLessThanXTime);
    TimeSelectionComponent.updateButton(this.disp.btn_plus_minute, __s41local2, this.toolTipNoMoreThanXTime);
    TimeSelectionComponent.updateButton(this.disp.btn_minus_minute, __s41local3, this.toolTipNoLessThanXTime);
    TimeSelectionComponent.updateButton(this.disp.btn_plus_date, __s41local4, this.toolTipNoMoreThanXTime);
    TimeSelectionComponent.updateButton(this.disp.btn_minus_date, __s41local5, this.toolTipNoLessThanXTime);
  };
  TimeSelectionComponent.prototype.canIncreaseTime = function () {
    return this._timeValidator.canIncreaseHours(this._editedDate) || this._timeValidator.canIncreaseMinutes(this._editedDate) || this._timeValidator.canIncreaseDate(this._editedDate);
  };
  TimeSelectionComponent.updateButton = function (__s45param0, __s45param1, __s45param2) {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(__s45param0, __s45param1);
    __s45param0.toolTipText = __s45param1 ? "" : __s45param2;
  };
  TimeSelectionComponent.forceTwoDigitFormat = function (__s47param0) {
    var __s47local0 = String(__s47param0);
    if (__s47local0.length == 1) {
      __s47local0 = "0" + __s47local0;
    }
    return __s47local0;
  };
  Object.defineProperty(TimeSelectionComponent.prototype, "hasDateChanged", {
    get: function () {
      return this._oldEditDate.getDate() != this._editedDate.getDate() || this._oldEditDate.getMonth() != this._editedDate.getMonth() || this._oldEditDate.getFullYear() != this._editedDate.getFullYear();
    },
    enumerable: true,
    configurable: true
  });
  TimeSelectionComponent.prototype.playDateChangeAnimation = function () {
    __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.disp.mc_date, 0.33, {
      scaleX: 1,
      scaleY: 1
    }, {
      scaleX: 1.1,
      scaleY: 1.1,
      repeat: 3,
      yoyo: true,
      onComplete: this.onCompleteFadeInNowFadeOut
    });
  };
  TimeSelectionComponent.prototype.onCompleteFadeInNowFadeOut = function () {
    if (this.disp != null && this.disp.mc_date != null) {
      __dep_exact_608de47b6498f9b0.TweenMax.to(this.disp.mc_date, 0.33, {
        scaleX: 1,
        scaleY: 1
      });
    }
  };
  TimeSelectionComponent.__initialize_static_members = function () {
    TimeSelectionComponent.BASE_TAB_INDEX = 10;
  };
  return TimeSelectionComponent;
}();
exports.TimeSelectionComponent = __s0local1;
__s0local1.__initialize_static_members();
