Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CinematicController = require("gge-module:export_CinematicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = function (__s1param0) {
  function GeneralIntroductionCinematicsPlaylistDialog() {
    return __s1param0.call(this, GeneralIntroductionCinematicsPlaylistDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralIntroductionCinematicsPlaylistDialog, __s1param0);
  GeneralIntroductionCinematicsPlaylistDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_generals_inn_cinematics_header_desc"));
    var __s5local0 = new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp).addSliderBackground(this.dialogDisp.mc_sliderBG).addMouseWheelElements([this.dialogDisp]);
    var __s5local1 = new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(false, this.dialogDisp.mc_list.mask.height, true);
    this._scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(__s5local0, __s5local1);
    this._scrollY = this.dialogDisp.mc_list.y;
  };
  GeneralIntroductionCinematicsPlaylistDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.createPlaylist();
    var __s7local0 = this.dialogDisp.mc_list.height;
    var __s7local1 = Math.max(0, __s7local0 - this.dialogDisp.mc_list.mask.height);
    this._scrollComponent.init(0, __s7local1, 110, 110);
    this._scrollComponent.scrollToValue(0);
    this._scrollComponent.show();
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  GeneralIntroductionCinematicsPlaylistDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    this._scrollComponent.hide();
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
  };
  GeneralIntroductionCinematicsPlaylistDialog.prototype.createPlaylist = function () {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_list);
    var __s11local0 = 0;
    for (var __s11local1 = 0, __s11local2 = this.getAvailableCinematics(); __s11local1 < __s11local2.length; __s11local1++) {
      var __s11local3 = __s11local2[__s11local1];
      var __s11local4 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("GeneralIntroductionCinematicsPlaylist_Item"))();
      var __s11local5 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("GeneralIntroductionCinematics_Thumbnail_" + __s11local3.id))();
      this.dialogDisp.mc_list.addChild(__s11local4);
      this.textFieldManager.registerTextField(__s11local4.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s11local3.title));
      this.textFieldManager.registerTextField(__s11local4.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s11local3.description));
      this.textFieldManager.registerTextField(__s11local4.txt_length, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s11local3.length));
      __dep_export_ButtonHelper.ButtonHelper.initButton(__s11local4, 1, __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
      __s11local4.mc_thumbnail.addChild(__s11local5);
      __s11local4.cinematicVO = __s11local3;
      __s11local4.y = __s11local0;
      __s11local0 = __s11local0 + __s11local4.height + 3;
    }
  };
  GeneralIntroductionCinematicsPlaylistDialog.prototype.onScroll = function () {
    this.dialogDisp.mc_list.y = this._scrollY - this._scrollComponent.currentValue;
  };
  GeneralIntroductionCinematicsPlaylistDialog.prototype.onClick = function (__s17param0) {
    __s1param0.prototype.onClick.call(this, __s17param0);
    switch (__s17param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30_1.Localize.text("help_generals_inn_cinematics_header_desc"));
    }
    if (__s17param0.target && __s17param0.target.cinematicVO) {
      __dep_export_CinematicController.CinematicController.getInstance().playCinematic(__s17param0.target.cinematicVO);
    }
  };
  GeneralIntroductionCinematicsPlaylistDialog.prototype.getAvailableCinematics = function () {
    return __dep_export_CastleModel.CastleModel.generalsIntroductionData.getAvailableCinematics();
  };
  GeneralIntroductionCinematicsPlaylistDialog.NAME = "GeneralIntroductionCinematicsPlaylistExt";
  return GeneralIntroductionCinematicsPlaylistDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.GeneralIntroductionCinematicsPlaylistDialog = __s0local0;
