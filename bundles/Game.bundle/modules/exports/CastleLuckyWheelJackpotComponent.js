Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_84d43d9c404bd4d8_1 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_JackpotPrizeDisplayComponent = require("gge-module:export_JackpotPrizeDisplayComponent");
var __s0local0 = createjs.Event;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = createjs.TimerEvent;
var __s0local3 = function () {
  function CastleLuckyWheelJackpotComponent(__s3param0, __s3param1) {
    this.ITEMS_PER_PAGE = 3;
    this.MAX_BUTTONS = 6;
    this._autoSwitchDelay = 10000;
    this._tickCount = 0;
    this._currentPreviewSetID = 0;
    this.previewLevel = 0;
    this.currentPage = 0;
    this.initialButtonPositionX = 0;
    this.buttonGap = 0;
    this._disp = __s3param0;
    this._eventVO = __s3param1;
    this.init();
  }
  CastleLuckyWheelJackpotComponent.prototype.update = function () {
    if (this._previewPageSelectorMCs) {
      this.repositionPreviewPageSelectorButtons();
      if (this.pageButtonsNeeded == 1) {
        this._autoSwitchTimer.stop();
      } else {
        this.restartTimer();
      }
      this.changePreviewPage(1);
    }
  };
  CastleLuckyWheelJackpotComponent.prototype.init = function () {
    this.initButtons();
    this.previewLevel = 0;
    this.currentPage = 1;
    this._disp.addEventListener(__s0local1.CLICK, this.bindFunction(this.onClick));
    this._pageButtonContainer = this._disp.mc_buttonList;
    var __s10local0 = this.initItemHolders();
    this._jackpotPrizeDisplayComponent = new __dep_export_JackpotPrizeDisplayComponent.JackpotPrizeDisplayComponent(__s10local0, this._disp.jackpot_preview_container);
    __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.tf_jackpot_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.eventVO.isProMode ? "dialog_luckyWheel_jackpotPro" : "dialog_luckyWheel_jackpotNormal"));
    this.itxt_previewLevel = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.mc_level.tf_jackpotLevel, new __dep_exact_92d05af59ee2ff30.NumberVO(this.previewLevel + 1));
    this._disp.mc_level.toolTipText = "dialog_luckyWheel_jackpotCurrent";
    this._disp.mc_level.mouseChildren = false;
    this._pageButtonContainer.gotoAndStop(this._pageButtonContainer.totalFrames);
    this._pageButtonContainer.addEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.initPageButtons));
    this._autoSwitchTimer = new __dep_exact_81dacdf05bd32292.Timer(this._autoSwitchDelay, 0);
    this._autoSwitchTimer.addEventListener(__s0local2.TIMER, this.bindFunction(this.onSwitchPreview));
  };
  CastleLuckyWheelJackpotComponent.prototype.initPageButtons = function (__s12param0) {
    if (this._pageButtonContainer.currentFrame + 1 == this._pageButtonContainer.totalFrames) {
      this._pageButtonContainer.removeEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.initPageButtons));
      this._previewPageSelectorMCs = [];
      this.initialButtonPositionX = this._pageButtonContainer.x;
      this.buttonGap = (this._pageButtonContainer.btn_lvl_jackpots2.x - this._pageButtonContainer.btn_lvl_jackpots1.x) / 2;
      var __s12local0 = [];
      for (var __s12local1 = 0; __s12local1 < this.MAX_BUTTONS; __s12local1++) {
        this._previewPageSelectorMCs[__s12local1] = this._pageButtonContainer["btn_lvl_jackpots" + (__s12local1 + 1)];
        __dep_export_ButtonHelper.ButtonHelper.initTwoStateButton(this._previewPageSelectorMCs[__s12local1]);
        __s12local0.push(this._previewPageSelectorMCs[__s12local1].basicButton);
      }
      if (__s12local0.length > 0) {
        this._buttonGroup = new __dep_exact_84d43d9c404bd4d8_1.BasicButtonGroup(__s12local0);
        this._buttonGroup.selectButton(__s12local0[0]);
      }
      this.repositionPreviewPageSelectorButtons();
    }
  };
  CastleLuckyWheelJackpotComponent.prototype.repositionPreviewPageSelectorButtons = function () {
    var __s18local0 = this.pageButtonsNeeded;
    this._pageButtonContainer.x = this.initialButtonPositionX + (this.MAX_BUTTONS - __s18local0) * this.buttonGap;
    for (var __s18local1 = 0; __s18local1 < this._previewPageSelectorMCs.length; __s18local1++) {
      this._previewPageSelectorMCs[__s18local1].visible = __s18local1 < __s18local0;
    }
  };
  CastleLuckyWheelJackpotComponent.prototype.initItemHolders = function () {
    var __s22local0 = [];
    __s22local0.push(this._disp.jackpot_current_0.mc_itemholder);
    __s22local0.push(this._disp.jackpot_current_1.mc_itemholder);
    __s22local0.push(this._disp.jackpot_current_2.mc_itemholder);
    __s22local0[0].addEventListener(__s0local1.ROLL_OVER, this.bindFunction(this.jackpotPreviewLevelSelectionRollOver));
    __s22local0[0].addEventListener(__s0local1.ROLL_OUT, this.bindFunction(this.jackpotPreviewLevelSelectionRollOut));
    __s22local0[1].addEventListener(__s0local1.ROLL_OVER, this.bindFunction(this.jackpotPreviewLevelSelectionRollOver));
    __s22local0[1].addEventListener(__s0local1.ROLL_OUT, this.bindFunction(this.jackpotPreviewLevelSelectionRollOut));
    __s22local0[2].addEventListener(__s0local1.ROLL_OVER, this.bindFunction(this.jackpotPreviewLevelSelectionRollOver));
    __s22local0[2].addEventListener(__s0local1.ROLL_OUT, this.bindFunction(this.jackpotPreviewLevelSelectionRollOut));
    return __s22local0;
  };
  CastleLuckyWheelJackpotComponent.prototype.onClick = function (__s24param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s24param0.target)) {
      switch (__s24param0.target) {
        case this._disp.btn_next:
          this.previewLevel++;
          this.changePreviewLevel(this.previewLevel);
          break;
        case this._disp.btn_previous:
          this.previewLevel--;
          this.changePreviewLevel(this.previewLevel);
      }
      if (__s24param0.target.basicButton && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s24param0.target.basicButton, "TwoStateButton")) {
        this.jackpotPreviewLevelSelectionClick(__s24param0);
      }
    }
  };
  CastleLuckyWheelJackpotComponent.prototype.onSwitchPreview = function (__s29param0 = null) {
    if (this._previewPageSelectorMCs) {
      this.currentPage++;
      if (this.currentPage > this.pageButtonsNeeded || this.currentPage < 1) {
        this.currentPage = 1;
      }
      this.changePreviewPage(this.currentPage);
    }
  };
  CastleLuckyWheelJackpotComponent.prototype.jackpotPreviewLevelSelectionClick = function (__s33param0) {
    var __s33local0 = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(__s33param0.target.name.substr(__s33param0.target.name.length - 1, 1)));
    this._tickCount = __s33local0;
    this.restartTimer();
    this.changePreviewPage(__s33local0);
  };
  CastleLuckyWheelJackpotComponent.prototype.changePreviewPage = function (__s35param0) {
    this.currentPage = __dep_exact_f855840627e6e145.int(Math.max(__s35param0, 1));
    if (!(this.pageButtonsNeeded <= 1) && !(this._previewPageSelectorMCs.length < this.currentPage)) {
      this._jackpotPrizeDisplayComponent.showItems(this.eventVO.getPreviewSet(this.eventVO.currentWinClass + this.previewLevel), __s35param0);
      this.updateTitle();
      this._buttonGroup.selectButton(this._previewPageSelectorMCs[__s35param0 - 1].basicButton);
    }
  };
  CastleLuckyWheelJackpotComponent.prototype.changePreviewLevel = function (__s38param0) {
    this.previewLevel = __s38param0;
    this.currentPage = 1;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.btn_next, this.eventVO.currentWinClass + __s38param0 < this.eventVO.winClassesAmount);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.btn_previous, __s38param0 > 0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this._disp.btn_next)) {
      this._disp.btn_next.toolTipText = {
        t: "dialog_luckyWheel_teaserRadioButton_tooltip",
        p: [__s38param0 + this.eventVO.currentWinClass + 1]
      };
      this._disp.btn_next.visible = true;
    } else {
      this._disp.btn_next.visible = false;
      this._disp.btn_next.toolTipText = null;
    }
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this._disp.btn_previous)) {
      this._disp.btn_previous.toolTipText = {
        t: "dialog_luckyWheel_teaserRadioButton_tooltip",
        p: [__s38param0 + this.eventVO.currentWinClass - 1]
      };
      this._disp.btn_previous.visible = true;
    } else {
      this._disp.btn_previous.visible = false;
      this._disp.btn_previous.toolTipText = null;
    }
    var __s38local0 = __dep_exact_f855840627e6e145.int(this.eventVO.currentWinClass + __s38param0);
    if (__s38local0 > this.eventVO.winClassesAmount) {
      __s38local0 = __dep_exact_f855840627e6e145.int(this.eventVO.winClassesAmount);
    }
    this._currentPreviewSetID = __s38local0;
    this._jackpotPrizeDisplayComponent.showItems(this.eventVO.getPreviewSet(this._currentPreviewSetID), 1);
    this.itxt_previewLevel.textContentVO.numberValue = __s38param0 + this.eventVO.currentWinClass;
    var __s38local1 = new __dep_exact_9e901e8e2483a22f.ColorMatrix();
    __s38local1.desaturate();
    if (__s38param0 > 0) {
      this._disp.mc_level.useFilters(null);
      this._disp.mc_level.useFilters([__s38local1.filter]);
    } else {
      this._disp.mc_level.useFilters(null);
    }
    this._disp.mc_level.toolTipText = __s38param0 == 0 ? "dialog_luckyWheel_jackpotCurrent" : {
      t: "dialog_luckyWheel_teaserRadioButton_tooltip",
      p: [__s38param0 + this.eventVO.currentWinClass]
    };
    this.updateTitle();
    this.update();
  };
  CastleLuckyWheelJackpotComponent.prototype.updateTitle = function () {
    if (this.eventVO.isAtMaxClass) {
      var __s47local0 = this.eventVO.isProMode ? "dialog_luckyWheel_jackpotPro" : "dialog_luckyWheel_jackpot";
      __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.tf_jackpot_preview_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s47local0));
    }
  };
  CastleLuckyWheelJackpotComponent.prototype.jackpotPreviewLevelSelectionRollOver = function (__s50param0) {
    this._autoSwitchTimer.stop();
  };
  CastleLuckyWheelJackpotComponent.prototype.jackpotPreviewLevelSelectionRollOut = function (__s52param0) {
    this.restartTimer();
  };
  CastleLuckyWheelJackpotComponent.prototype.restartTimer = function () {
    this._autoSwitchTimer.reset();
    this._autoSwitchTimer.start();
  };
  CastleLuckyWheelJackpotComponent.prototype.startDelayedAutoSwitch = function () {
    this._autoSwitchTimer.addEventListener(__s0local2.TIMER, this.bindFunction(this.onSwitchPreview));
    this.restartTimer();
  };
  CastleLuckyWheelJackpotComponent.prototype.stopDelayedAutoSwitch = function () {
    this._autoSwitchTimer.removeEventListener(__s0local2.TIMER, this.bindFunction(this.onSwitchPreview));
    this._autoSwitchTimer.stop();
  };
  CastleLuckyWheelJackpotComponent.prototype.dispose = function () {
    this.stopDelayedAutoSwitch();
    this.resetPosition();
  };
  CastleLuckyWheelJackpotComponent.prototype.resetPosition = function () {
    this._jackpotPrizeDisplayComponent.resetPosition();
  };
  CastleLuckyWheelJackpotComponent.prototype.initButtons = function () {
    this._disp.btn_next.basicButton = new __dep_exact_84d43d9c404bd4d8.BasicButton(this._disp.btn_next, true);
    this._disp.btn_previous.basicButton = new __dep_exact_84d43d9c404bd4d8.BasicButton(this._disp.btn_previous, true);
  };
  Object.defineProperty(CastleLuckyWheelJackpotComponent.prototype, "eventVO", {
    get: function () {
      return this._eventVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelJackpotComponent.prototype, "pageButtonsNeeded", {
    get: function () {
      var __s68local0 = __dep_exact_f855840627e6e145.int(Math.min(this.eventVO.currentWinClass + this.previewLevel, this.eventVO.winClassesAmount));
      return Math.ceil(this.eventVO.getPreviewSet(__s68local0).length / this.ITEMS_PER_PAGE);
    },
    enumerable: true,
    configurable: true
  });
  return CastleLuckyWheelJackpotComponent;
}();
exports.CastleLuckyWheelJackpotComponent = __s0local3;
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
