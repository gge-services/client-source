Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SPointEventGetPointsVO = require("gge-module:export_C2SPointEventGetPointsVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ADistrictGachaEventVO = require("gge-module:export_ADistrictGachaEventVO");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleExternalSubLayerDialog = require("gge-module:export_CastleExternalSubLayerDialog");
var __dep_export_GachaEventMainDistrict = require("gge-module:export_GachaEventMainDistrict");
var __s0local0 = function (__s1param0) {
  function GachaEventMainDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, GachaEventMainDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GachaEventMainDialog, __s1param0);
  GachaEventMainDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_district, this.dialogDisp.tab_0, this.dialogDisp.tab_1, this.dialogDisp.tab_2, this.dialogDisp.tab_3], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tenthAnniversary_timer")));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_timer.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    var __s5local0 = new __dep_export_GachaEventMainDistrict.GachaEventMainDistrict(this.dialogDisp.sublayer_gacha);
    this._subLayer = new Map();
    for (var __s5local1 = 0; __s5local1 < GachaEventMainDialog.MAX_TABS; __s5local1++) {
      this._subLayer.set("tab_" + __s5local1, __s5local0);
      this.dialogDisp["tab_" + __s5local1].visible = this.getActiveGachaEvents().length >= __s5local1;
    }
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.mc_timer.toolTipText = "dialog_tenthAnniversary_timer";
    this.loadTabIcons();
  };
  GachaEventMainDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    this.changeCategory(GachaEventMainDialog.TAB_MAIN);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
  };
  GachaEventMainDialog.prototype.hideLoaded = function (__s11param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s11param0);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
  };
  GachaEventMainDialog.prototype.onSpecialEventRemoved = function (__s13param0) {
    if (this.getActiveGachaEvents().length < 1) {
      this.hide();
    } else {
      this.loadTabIcons();
      this.changeCategory(GachaEventMainDialog.TAB_MAIN);
    }
  };
  GachaEventMainDialog.prototype.onLockDialog = function (__s17param0) {
    this.lockDialog();
  };
  GachaEventMainDialog.prototype.onUnlockDialog = function (__s19param0) {
    this.unLockDialog();
  };
  GachaEventMainDialog.prototype.onTimerUpdate = function (__s21param0) {
    this.updateTimer();
  };
  GachaEventMainDialog.prototype.onClick = function (__s23param0) {
    __s1param0.prototype.onClick.call(this, __s23param0);
    if (!this.isLocked && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s23param0.target)) {
      if (__s23param0.target.name && __s23param0.target.name.indexOf("tab_") == 0 && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s23param0.target)) {
        this.changeCategory(__s23param0.target.name);
      } else {
        switch (__s23param0.target) {
          case this.dialogDisp.btn_close:
            this.hide();
            break;
          case this.dialogDisp.btn_help:
            __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", "helpPopup_GachaDeco2x2");
            break;
          case this.dialogDisp.btn_district:
            this.hide();
            this.openDistrictDialog();
        }
      }
    }
  };
  GachaEventMainDialog.prototype.changeCategory = function (__s29param0) {
    __s1param0.prototype.changeCategory.call(this, __s29param0);
    this.updateActiveEvent();
    for (var __s29local0 = 0; __s29local0 < 4; __s29local0++) {
      this.dialogDisp["tab_" + __s29local0].mc_selected.visible = this._currentCategory == "tab_" + __s29local0;
      if (this.dialogDisp["tab_" + __s29local0].mc_icon.children.length > 0) {
        this.dialogDisp["tab_" + __s29local0].mc_icon.children[0].y = this._currentCategory == "tab_" + __s29local0 ? 0 : 7;
      }
      if (this.dialogDisp["tab_" + __s29local0].cacheCanvas) {
        this.dialogDisp["tab_" + __s29local0].updateCache();
      }
    }
    this.showSublayer(this._subLayer.get(__s29param0), [this._selectedEvent]);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SPointEventGetPointsVO.C2SPointEventGetPointsVO(this._selectedEvent.eventId));
  };
  GachaEventMainDialog.prototype.loadTabIcons = function () {
    var __s35local0 = this;
    var __s35local1 = 0;
    this.getActiveGachaEvents().forEach(function (__s37param0, __s37param1) {
      var __s37local0 = GachaEventMainDialog.NAME + "_Elements_" + __s37param0.assetName();
      var __s37local1 = GachaEventMainDialog.NAME + "_TabIcon_" + __s37param0.assetName();
      var __s37local2 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s37local1, __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s37local0), null, 0, false);
      var __s37local3 = __s35local0.dialogDisp["tab_" + __s37param1];
      __s37local3.toolTipText = __s37param0.eventBuildingNameId;
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s37local3.mc_icon);
      __s37local3.mc_icon.addChild(__s37local2);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(__s37local3, true);
      __s35local1++;
    });
    if (__s35local1 < GachaEventMainDialog.MAX_TABS - 1) {
      var __s35local2 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("GenericGachaIcon", __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(GachaEventMainDialog.NAME), null, 0, false);
      var __s35local3 = this.dialogDisp["tab_" + __s35local1];
      __s35local3.toolTipText = "comingSoon";
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s35local3.mc_icon);
      __s35local3.mc_icon.addChild(__s35local2);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(__s35local3, false);
    }
  };
  GachaEventMainDialog.prototype.updateActiveEvent = function () {
    var __s40local0 = parseInt(this._currentCategory.replace("tab_", ""));
    var __s40local1 = this.getActiveGachaEvents();
    var __s40local2 = __s40local1[__s40local0].assetName();
    var __s40local3 = GachaEventMainDialog.NAME + "_Elements_" + __s40local2;
    var __s40local4 = GachaEventMainDialog.NAME + "_DistrictIcon_" + __s40local2;
    var __s40local5 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s40local4, __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s40local3), null, 0, false);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.btn_district.mc_icon);
    this.dialogDisp.btn_district.mc_icon.addChild(__s40local5);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_district, __s40local1[__s40local0].hasDistrict());
    if (__s40local1[__s40local0].hasDistrict()) {
      this.dialogDisp.btn_district.toolTipText = __s40local1[__s40local0].getDistrictBuildingVO().getNameString();
    } else {
      this.dialogDisp.btn_district.toolTipText = "DecoDistrict2x2_notbuilt";
    }
    this._selectedEvent = __s40local1[__s40local0];
    this.updateTimer();
  };
  GachaEventMainDialog.prototype.updateTimer = function () {
    var __s44local0 = this._selectedEvent.remainingEventTimeInSeconds;
    this.itxt_time.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s44local0);
  };
  GachaEventMainDialog.prototype.openDistrictDialog = function () {
    this._selectedEvent.openDistrictDialog();
  };
  GachaEventMainDialog.prototype.getActiveGachaEvents = function () {
    return Array.from(__dep_export_CastleModel.CastleModel.specialEventData.activeEvents.values()).filter(function (__s50param0) {
      return __s50param0 instanceof __dep_export_ADistrictGachaEventVO.ADistrictGachaEventVO;
    });
  };
  GachaEventMainDialog.NAME = "GachaEventMain";
  GachaEventMainDialog.TAB_MAIN = "tab_0";
  GachaEventMainDialog.MAX_TABS = 4;
  return GachaEventMainDialog;
}(__dep_export_CastleExternalSubLayerDialog.CastleExternalSubLayerDialog);
exports.GachaEventMainDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
