Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Shape;
var __s0local2 = function () {
  function CastleTieredPrimeDayProgressBar(__s3param0, __s3param1, __s3param2) {
    this._progressBars = [];
    this._disp = __s3param0;
    this._progressDisplays = __s3param1;
    this._eventVO = __s3param2;
    this.checkInitBars();
    this.resizeBar();
    this.positionSegmentDisplays();
    this.initProgressBars();
    this.initText();
  }
  CastleTieredPrimeDayProgressBar.prototype.initText = function () {
    for (var __s5local0 = 0; __s5local0 < this._progressDisplays.length; __s5local0++) {
      var __s5local1 = this._disp["mc_display" + __s5local0];
      CastleTieredPrimeDayProgressBar.textFieldManager.registerTextField(__s5local1.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("buy_imperative"));
      CastleTieredPrimeDayProgressBar.textFieldManager.registerTextField(__s5local1.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("xRubies", [this._eventVO.rewards[__s5local0].c2ForReward]));
    }
    this._itxt_progress = CastleTieredPrimeDayProgressBar.textFieldManager.registerTextField(this._disp.txt_progress, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_factionOverview_nextReward_points", [this._eventVO.c2BoughtInCurrentCycle, this._eventVO.c2ForComplete]));
  };
  CastleTieredPrimeDayProgressBar.prototype.checkInitBars = function () {
    var __s9local0 = this.getGuideWithInitPosition();
    if (__s9local0.numChildren > 0) {
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s9local0);
    }
  };
  CastleTieredPrimeDayProgressBar.prototype.resizeBar = function () {
    var __s12local0 = this._disp.mc_bar;
    var __s12local1 = this.getWidthFromTiers(this._progressDisplays.length - 1);
    __s12local0.width = __s12local1 + CastleTieredPrimeDayProgressBar.BORDER_OFFSET * 2;
  };
  CastleTieredPrimeDayProgressBar.prototype.initProgressBars = function () {
    var __s14local0 = this.getGuideWithInitPosition();
    for (var __s14local1 = 0; __s14local1 < this._progressDisplays.length; __s14local1++) {
      var __s14local2 = this._progressDisplays[__s14local1];
      var __s14local3 = new __s0local0();
      var __s14local4 = new __s0local1();
      __s14local4.graphics.beginFill(11121231);
      __s14local4.graphics.drawRect(0, 0, __s14local2.width - CastleTieredPrimeDayProgressBar.TIER_BOX_SHADOW_LENGTH, CastleTieredPrimeDayProgressBar._BAR_HEIGHT);
      __s14local4.graphics.endFill();
      __s14local4.setBounds(0, 0, __s14local2.width - CastleTieredPrimeDayProgressBar.TIER_BOX_SHADOW_LENGTH, CastleTieredPrimeDayProgressBar._BAR_HEIGHT);
      __s14local3.addChild(__s14local4);
      var __s14local5 = __s14local1 > 0 ? this.getWidthFromTiers(__s14local1 - 1) : 0;
      __s14local3.x += __s14local5;
      __s14local3.name = "mc_progressBar" + __s14local1;
      __s14local3.scaleX = 0;
      __s14local0.addChild(__s14local3);
      this._progressBars.push(__s14local3);
    }
  };
  CastleTieredPrimeDayProgressBar.prototype.getWidthFromTiers = function (__s18param0) {
    var __s18local0 = 0;
    for (; __s18param0 >= 0; __s18param0--) {
      __s18local0 += this._progressDisplays[__s18param0].width - CastleTieredPrimeDayProgressBar.TIER_BOX_SHADOW_LENGTH;
    }
    return __s18local0;
  };
  CastleTieredPrimeDayProgressBar.prototype.positionSegmentDisplays = function () {
    var __s22local0 = this.getGuideWithInitPosition();
    for (var __s22local1 = 0; __s22local1 < this._progressDisplays.length; __s22local1++) {
      var __s22local2 = this._progressDisplays[__s22local1];
      var __s22local3 = this._disp["mc_display" + __s22local1];
      var __s22local4 = this._disp["mc_arrow" + __s22local1];
      var __s22local5 = __s22local1 > 0 ? this.getWidthFromTiers(__s22local1 - 1) : 0;
      var __s22local6 = __s22local0.x + __s22local5;
      __s22local3.x = __s22local6 + __s22local2.width * 0.5 - CastleTieredPrimeDayProgressBar.TIER_BOX_SHADOW_LENGTH;
      __s22local4.x = __s22local6 + __s22local2.width - CastleTieredPrimeDayProgressBar.TIER_BOX_SHADOW_LENGTH;
      if (__s22local1 != this._progressDisplays.length - 1) {
        this._disp["mc_line" + __s22local1].x = __s22local4.x;
      }
    }
  };
  CastleTieredPrimeDayProgressBar.prototype.getGuideWithInitPosition = function () {
    var __s27local0 = this._disp.mc_guide;
    var __s27local1 = this._disp.mc_bar;
    __s27local0.x = -__s27local1.width * 0.5 + CastleTieredPrimeDayProgressBar.HOLDER_MC_BORDER_OFFSET;
    return __s27local0;
  };
  CastleTieredPrimeDayProgressBar.prototype.setProgressForBar = function (__s29param0, __s29param1) {
    this._progressBars[__s29param0].scaleX = __s29param1;
  };
  CastleTieredPrimeDayProgressBar.prototype.updateProgress = function (__s31param0 = null) {
    var __s31local0 = this._eventVO.c2BoughtInCurrentCycle;
    for (var __s31local1 = 0; __s31local1 < this._eventVO.rewards.length; __s31local1++) {
      var __s31local2 = 0;
      var __s31local3 = __dep_exact_f855840627e6e145.int(__s31local1 > 0 ? this._eventVO.rewards[__s31local1 - 1].c2ForReward : 0);
      if (__s31local0 > __s31local3) {
        __s31local2 = (__s31local2 = (__s31local0 - __s31local3) / (this._eventVO.rewards[__s31local1].c2ForReward - __s31local3)) > 1 ? 1 : __s31local2;
      }
      this.setProgressForBar(__s31local1, __s31local2);
    }
    this._itxt_progress.textContentVO.textReplacements = [this._eventVO.c2BoughtInCurrentCycle, this._eventVO.c2ForComplete];
  };
  Object.defineProperty(CastleTieredPrimeDayProgressBar, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleTieredPrimeDayProgressBar.__initialize_static_members = function () {
    CastleTieredPrimeDayProgressBar._BAR_HEIGHT = 16;
    CastleTieredPrimeDayProgressBar.TIER_BOX_SHADOW_LENGTH = 3;
    CastleTieredPrimeDayProgressBar.BORDER_OFFSET = 10;
    CastleTieredPrimeDayProgressBar.HOLDER_MC_BORDER_OFFSET = 8;
  };
  return CastleTieredPrimeDayProgressBar;
}();
exports.CastleTieredPrimeDayProgressBar = __s0local2;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
__s0local2.__initialize_static_members();
