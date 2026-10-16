Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_SublayerSwitcher = require("gge-module:export_SublayerSwitcher");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_PrebuiltCastleSelectionProperties = require("gge-module:export_PrebuiltCastleSelectionProperties");
var __s0local0 = function (__s1param0) {
  function ACastleHandleSpaceDialog() {
    return __s1param0.call(this, "CastleKingdom") || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACastleHandleSpaceDialog, __s1param0);
  ACastleHandleSpaceDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.titleTextfield = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.titleTextfield.autoFitToBounds = true;
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close]);
    this.sublayers = new __dep_export_SublayerSwitcher.SublayerSwitcher(this.bindFunction(this.getSublayerProperties));
    this.sublayers.addOnSwitchedListener(this.bindFunction(this.onShowSublayer));
    this.sublayers.add(ACastleHandleSpaceDialog.SUBLAYER_SELECT_CASTLE, null, new __dep_export_CastleKingdomSelectCastle.CastleKingdomSelectCastle(this.dialogDisp.sublayer_castleSelection, this.bindFunction(this.onCastleSelected)));
    this.sublayers.add(ACastleHandleSpaceDialog.SUBLAYER_CASTLE_DETAILS, null, new __dep_export_CastleKingdomCastleDetails.CastleKingdomCastleDetails(this.dialogDisp.sublayer_castleDetails, this.bindFunction(this.onBackToCastleSelection), __dep_export_CastleModel.CastleModel.kingdomData.tempTargetSpaceID));
  };
  ACastleHandleSpaceDialog.prototype.getSublayerProperties = function (__s7param0) {
    return this.selectionProperties;
  };
  ACastleHandleSpaceDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    this.selectionProperties = new __dep_export_PrebuiltCastleSelectionProperties.PrebuiltCastleSelectionProperties();
    this.selectionProperties.spaceId = __dep_exact_f855840627e6e145.int(this.dialogProperties.getSpaceID());
    this.selectionProperties.name = this.dialogProperties.getName();
    this.showCurrentSublayer();
    this.updateBackgroundSkin();
    this.updateCrests();
    this.sublayers.show();
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.titleTextfield.textContentVO.stringValue = this.dialogProperties.getTitleString();
  };
  ACastleHandleSpaceDialog.prototype.updateBackgroundSkin = function () {
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_backgroundSkin);
    this.backgroundDisp = null;
    this.backgroundSkinClip = null;
    this.countdownTextfield = null;
    var __s11local0 = this.dialogProperties.getBackgroundSkinClassName();
    this.backgroundSkinClip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s11local0, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s11local0), null, 0, false);
    this.dialogDisp.mc_backgroundSkin.addChild(this.backgroundSkinClip.asDisplayObject());
    if (this.backgroundSkinClip.isLoaded) {
      this.onBackgroundSkinLoaded(this.backgroundSkinClip);
    } else {
      this.backgroundSkinClip.clipLoaded.addOnce(this.bindFunction(this.onBackgroundSkinLoaded));
    }
  };
  ACastleHandleSpaceDialog.prototype.updateBackgroundSkinElementsVisibility = function () {
    this.backgroundDisp.mc_btnBackground.visible = this.sublayers.activeTab == ACastleHandleSpaceDialog.SUBLAYER_SELECT_CASTLE;
    this.backgroundDisp.mc_banner.visible = this.sublayers.activeTab != ACastleHandleSpaceDialog.SUBLAYER_CASTLE_DETAILS;
  };
  ACastleHandleSpaceDialog.prototype.onBackgroundSkinLoaded = function (__s17param0) {
    this.backgroundDisp = __s17param0.currentshownDisplayObject;
    this.updateBackgroundSkinElementsVisibility();
    if (this.dialogProperties.hasTimer()) {
      this.countdownTextfield = this.textFieldManager.registerTextField(this.backgroundDisp.mc_time.txt_time, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
      this.countdownTextfield.autoFitToBounds = true;
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
      this.onTimer();
    }
  };
  ACastleHandleSpaceDialog.prototype.updateCrests = function () {
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.crest1, this.dialogProperties.getCrestLeft());
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.crest2, this.dialogProperties.getCrestRight());
  };
  ACastleHandleSpaceDialog.prototype.hideLoaded = function (__s22param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s22param0);
    this.sublayers.hide();
    if (this.backgroundSkinClip) {
      this.backgroundSkinClip.clipLoaded.removeAll();
    }
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  ACastleHandleSpaceDialog.prototype.onTimer = function (__s25param0 = null) {
    var __s25local0 = this.dialogProperties.getRemainingTime();
    this.countdownTextfield.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.getTimeToString(__s25local0, __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text, false, true);
    if (__s25local0 <= 0) {
      this.hide();
    }
  };
  ACastleHandleSpaceDialog.prototype.showCurrentSublayer = function () {
    if (this.dialogProperties.isUnlocked()) {
      this.sublayers.switchTo(ACastleHandleSpaceDialog.SUBLAYER_SUPPORT);
    } else {
      this.sublayers.switchTo(ACastleHandleSpaceDialog.SUBLAYER_SELECT_CASTLE);
    }
  };
  ACastleHandleSpaceDialog.prototype.onClick = function (__s32param0) {
    __s1param0.prototype.onClick.call(this, __s32param0);
    switch (__s32param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        this.sublayers.showHelp();
    }
  };
  ACastleHandleSpaceDialog.prototype.onShowSublayer = function (__s35param0) {
    if (this.backgroundDisp) {
      this.updateBackgroundSkinElementsVisibility();
    }
  };
  ACastleHandleSpaceDialog.prototype.onCastleSelected = function (__s38param0) {
    this.selectionProperties.castleSelectionIndex = __s38param0;
    this.sublayers.switchTo(ACastleHandleSpaceDialog.SUBLAYER_CASTLE_DETAILS);
  };
  ACastleHandleSpaceDialog.prototype.onBackToCastleSelection = function (__s40param0) {
    this.selectionProperties.castleSelectionIndex = __s40param0;
    this.sublayers.switchTo(ACastleHandleSpaceDialog.SUBLAYER_SELECT_CASTLE);
  };
  Object.defineProperty(ACastleHandleSpaceDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  ACastleHandleSpaceDialog.SUBLAYER_SUPPORT = 0;
  ACastleHandleSpaceDialog.SUBLAYER_SELECT_CASTLE = 1;
  ACastleHandleSpaceDialog.SUBLAYER_CASTLE_DETAILS = 2;
  return ACastleHandleSpaceDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.ACastleHandleSpaceDialog = __s0local0;
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_CastleKingdomCastleDetails = require("gge-module:export_CastleKingdomCastleDetails");
var __dep_export_CastleKingdomSelectCastle = require("gge-module:export_CastleKingdomSelectCastle");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
