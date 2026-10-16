Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstEvent = require("gge-module:export_ClientConstEvent");
var __dep_export_C2SColossusGetHighscoreVO = require("gge-module:export_C2SColossusGetHighscoreVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __dep_export_CastleColossusDonateDialogProperties = require("gge-module:export_CastleColossusDonateDialogProperties");
var __dep_export_CastleColossusMeterDelegate = require("gge-module:export_CastleColossusMeterDelegate");
var __dep_export_ColossusEventDelegator = require("gge-module:export_ColossusEventDelegator");
var __s0local0 = createjs.MovieClip;
var __s0local1 = function (__s1param0) {
  function CastleColossusEventDialog() {
    return __s1param0.call(this, CastleColossusEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleColossusEventDialog, __s1param0);
  CastleColossusEventDialog.prototype.onDeposit = function () {
    if (this.isCoinColossusEvent()) {
      __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleCoinColossusDonateDialog.CastleCoinColossusDonateDialog, new __dep_export_CastleColossusDonateDialogProperties.CastleColossusDonateDialogProperties(this.eventVO));
    } else {
      __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleColossusDonateDialog.CastleColossusDonateDialog, new __dep_export_CastleColossusDonateDialogProperties.CastleColossusDonateDialogProperties(this.eventVO));
    }
  };
  CastleColossusEventDialog.prototype.onRefreshEvent = function (__s9param0) {
    if (__s9param0.specialEventVO.eventType == "Colossus") {
      var __s9local0 = __s9param0.specialEventVO;
      this.eventVO = __s9local0;
      this.listDelegate.eventVOUpdated();
      this.arrowDelegate.setLawOrderValue(__dep_exact_26a421b704832cff.ColossusConst.getDecoPoints(__s9local0.ownPoints));
      this.dialogDisp.mc_arrow.toolTipText = {
        t: "dialog_eventColossus_meter_tt",
        p: [__dep_exact_26a421b704832cff.ColossusConst.getDecoPoints(__s9local0.ownPoints)]
      };
    }
  };
  CastleColossusEventDialog.prototype.initLoaded = function (__s12param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_deposit, this.dialogDisp.mc_itemList.btn_up, this.dialogDisp.mc_itemList.btn_down, this.dialogDisp.btn_search]);
    this.dialogDisp.mc_arrow.mouseChildren = false;
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
  };
  CastleColossusEventDialog.prototype.showLoaded = function (__s14param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s14param0);
    this.eventVO = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByAnyEventId(__dep_export_ClientConstEvent.ClientConstEvent.COLOSSUS_EVENTS);
    this.eventDelegator = new __dep_export_ColossusEventDelegator.ColossusEventDelegator(this.eventVO.eventId);
    this.eventDelegator.showLoaded(this.dialogDisp);
    this.itxt_search = this.textFieldManager.registerTextField(this.dialogDisp.txt_input_search, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_highscore_search"));
    this._defaultSearchText = this.itxt_search.text;
    this.itxt_search = this.textFieldManager.registerTextField(this.dialogDisp.txt_input_search, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_highscore_search"));
    this._defaultSearchText = this.itxt_search.text;
    this.arrowDelegate = new __dep_export_CastleColossusMeterDelegate.CastleColossusMeterDelegate(this.dialogDisp.mc_arrow);
    this.listDelegate = new __dep_export_CastleColossusHighscoreListDelegate.CastleColossusHighscoreListDelegate(this.dialogDisp.mc_itemList);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onRefreshEvent));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    this.onUpdateEventTime();
    this.itxt_search.focusIn.add(this.bindFunction(this.onFocusIn));
    this.itxt_search.focusOut.add(this.bindFunction(this.onFocusOut));
    this.itxt_search.keyDown.add(this.bindFunction(this.checkEnterPress));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SColossusGetHighscoreVO.C2SColossusGetHighscoreVO());
    this.dialogDisp.mc_arrow.toolTipText = {
      t: "dialog_eventColossus_meter_tt",
      p: [__dep_exact_26a421b704832cff.ColossusConst.getDecoPoints(this.eventVO.ownPoints)]
    };
    var __s14local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("ResourcePointsIcon", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("ResourcePointsIcon"), null, 0, false);
    if (__s14local0.isLoaded) {
      this.onPointIconLoaded(__s14local0);
    } else {
      __s14local0.clipLoaded.addOnce(this.bindFunction(this.onPointIconLoaded));
    }
  };
  CastleColossusEventDialog.prototype.onPointIconLoaded = function (__s18param0) {
    var __s18local0 = __s18param0.asDisplayObject();
    this.dialogDisp.mc_rpicon_holder.addChild(__s18local0);
    this.dialogDisp.mc_rpicon_holder.mouseChildren = false;
    this.dialogDisp.mc_rpicon_holder.toolTipText = "colossus_donateResource_labelPoints";
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.scaleWithAntiAliasing(this.dialogDisp.mc_rpicon_holder, 25, 38, -1, false);
  };
  CastleColossusEventDialog.prototype.onUpdateEventTime = function (__s20param0 = null) {
    if (this.eventVO && this.itxt_time.textContentVO) {
      __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_time.txt_time, this.eventVO.remainingEventTimeInSeconds);
      __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_time, this.eventVO.remainingEventTimeInSeconds);
    }
  };
  CastleColossusEventDialog.prototype.setCopyTexts = function () {
    __s1param0.prototype.setCopyTexts.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rank_header, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("rank"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name_header, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_chronic_name"));
  };
  CastleColossusEventDialog.prototype.hideLoaded = function (__s25param0 = null) {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onRefreshEvent));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    this.itxt_search.focusIn.remove(this.bindFunction(this.onFocusIn));
    this.itxt_search.focusOut.remove(this.bindFunction(this.onFocusOut));
    this.itxt_search.keyDown.remove(this.bindFunction(this.checkEnterPress));
    if (this.listDelegate) {
      this.listDelegate.dispose();
      this.listDelegate = null;
    }
    if (this.arrowDelegate) {
      this.arrowDelegate.dispose();
      this.arrowDelegate = null;
    }
    __s1param0.prototype.hideLoaded.call(this);
  };
  CastleColossusEventDialog.prototype.onFocusOut = function (__s29param0) {
    if (__s29param0.text == "") {
      __s29param0.textContentVO = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this._defaultSearchText);
    }
  };
  CastleColossusEventDialog.prototype.onFocusIn = function (__s32param0) {
    if (__s32param0.text == this._defaultSearchText) {
      __s32param0.clearText();
    }
  };
  Object.defineProperty(CastleColossusEventDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleColossusEventDialog.prototype.onRemoveSpecialEvent = function (__s37param0) {
    if (__s37param0.specialEventVO.eventId == this.dialogProperties.eventVO.eventId) {
      this.arrowDelegate.setLawOrderValue(0);
      this.hide();
    }
  };
  CastleColossusEventDialog.prototype.setToolTips = function () {
    var __s40local0;
    __s40local0 = this.isCoinColossusEvent() ? "dialog_eventCoinColossus_btnDeposit_tt" : "dialog_eventColossus_btnDeposit_tt";
    this.dialogDisp.btn_deposit.toolTipText = __s40local0;
    this.dialogDisp.btn_close.toolTipText = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.BUTTON_CLOSE;
    this.dialogDisp.btn_search.toolTipText = "dialog_highscore_search";
  };
  CastleColossusEventDialog.prototype.onClick = function (__s42param0) {
    __s1param0.prototype.onClick.call(this, __s42param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s42param0.target)) {
      switch (__s42param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_deposit:
          this.onDeposit();
          break;
        case this.dialogDisp.mc_itemList.btn_up:
          this.listDelegate.pageUp();
          break;
        case this.dialogDisp.mc_itemList.btn_down:
          this.listDelegate.pageDown();
          break;
        case this.dialogDisp.btn_search:
          this.onSearch();
      }
      if (__s42param0.target instanceof __s0local0 && __s42param0.target.name.indexOf("item") > -1) {
        var __s42local0 = parseInt(__s42param0.target.name.slice(4));
        __s42local0 += __dep_exact_f855840627e6e145.int(this.listDelegate.offsetRank - __dep_export_CastleColossusHighscoreListDelegate.CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES + 1);
        var __s42local1 = this.eventVO.getRankingEntryByRank(__s42local0);
        if (__s42local1 && __s42local1.playerId > 0) {
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(__s42local1.playerId), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
        }
      }
    }
  };
  CastleColossusEventDialog.prototype.checkEnterPress = function (__s48param0) {
    if (__s48param0.key == __dep_exact_81dacdf05bd32292.Keyboard.ENTER) {
      this.onSearch();
    }
  };
  CastleColossusEventDialog.prototype.onJumpToTop = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SColossusGetHighscoreVO.C2SColossusGetHighscoreVO("1"));
  };
  CastleColossusEventDialog.prototype.onSearch = function () {
    var __s53local0 = this.itxt_search.text.trim();
    if (__s53local0 != "" && __dep_exact_9e901e8e2483a22f_2.TextValide.isSmartFoxValide(__s53local0)) {
      this.listDelegate.search(__s53local0);
    } else {
      this.listDelegate.resetSearchValue();
    }
  };
  CastleColossusEventDialog.prototype.isCoinColossusEvent = function () {
    return this.dialogProperties.eventVO.isCoinColossusEvent();
  };
  CastleColossusEventDialog.NAME = "CastleColossusEvent";
  return CastleColossusEventDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleColossusEventDialog = __s0local1;
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
var __dep_export_CastleCoinColossusDonateDialog = require("gge-module:export_CastleCoinColossusDonateDialog");
var __dep_export_CastleColossusDonateDialog = require("gge-module:export_CastleColossusDonateDialog");
var __dep_export_CastleColossusHighscoreListDelegate = require("gge-module:export_CastleColossusHighscoreListDelegate");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
