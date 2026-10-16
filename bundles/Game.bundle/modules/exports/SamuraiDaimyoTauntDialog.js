Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstNPCs = require("gge-module:export_ClientConstNPCs");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function SamuraiDaimyoTauntDialog() {
    return __s1param0.call(this, SamuraiDaimyoTauntDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SamuraiDaimyoTauntDialog, __s1param0);
  SamuraiDaimyoTauntDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30_2.Localize.text("dialog_tauntDaimyo_header"))));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tauntDaimyo_desc"));
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
  };
  SamuraiDaimyoTauntDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.showSourceCastle();
    this.showTargetCastle();
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnd));
  };
  SamuraiDaimyoTauntDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnd));
  };
  SamuraiDaimyoTauntDialog.prototype.showSourceCastle = function () {
    this.itxtNameSourceCastle = this.textFieldManager.registerTextField(this.dialogDisp.info_sourceCastle.txt_castleName, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.itxtNameSourceCastle.autoFitToBounds = true;
    this.itxtNameSourceCastle.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    var __s11local0 = __dep_export_CastleModel.CastleModel.daimyoCastleXmlData.getDaimyoCastle(this.dialogProperties.townshipMapObjectVO.daimyoXmlVO.rank, -1, this.dialogProperties.townshipMapObjectVO.eventAutoScalingCampID);
    var __s11local1 = new __dep_export_DaimyoCastleMapObjectVO.DaimyoCastleMapObjectVO();
    __s11local1.daimyoXmlVO = __s11local0;
    __s11local1.ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(__dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_DAIMYO_CASTLE);
    this.itxtNameSourceCastle.textContentVO.stringValue = __s11local1.areaNameString;
    this.itxtNameSourceCastle.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.icon_sourceCastle);
    this.dialogDisp.icon_sourceCastle.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(__s11local1, SamuraiDaimyoTauntDialog.CASTLE_SIZE, true, false, false, "", null));
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest_source, __s11local1.ownerInfo.crest, null, true);
  };
  SamuraiDaimyoTauntDialog.prototype.showTargetCastle = function () {
    this.itxtNameTargetCastle = this.textFieldManager.registerTextField(this.dialogDisp.info_targetCastle.txt_castleName, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.itxtNameTargetCastle.autoFitToBounds = true;
    this.itxtNameTargetCastle.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.itxtNameTargetCastle.textContentVO.stringValue = this.dialogProperties.townshipMapObjectVO.areaNameString;
    this.itxtNameTargetCastle.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.icon_targetCastle);
    this.dialogDisp.icon_targetCastle.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(this.dialogProperties.townshipMapObjectVO, SamuraiDaimyoTauntDialog.CASTLE_SIZE, true, false, false, "", null));
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest_target, this.dialogProperties.townshipMapObjectVO.ownerInfo.crest, null, true);
  };
  SamuraiDaimyoTauntDialog.prototype.onEventEnd = function (__s15param0) {
    if (__s15param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION) {
      this.hide();
    }
  };
  SamuraiDaimyoTauntDialog.prototype.onClick = function (__s18param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s18param0.target)) {
      switch (__s18param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30_2.Localize.text("help_tauntDaimyo"));
          break;
        case this.dialogDisp.btn_ok:
          this.tauntDaimyo();
      }
      __s1param0.prototype.onClick.call(this, __s18param0);
    }
  };
  SamuraiDaimyoTauntDialog.prototype.tauntDaimyo = function () {
    __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_SamuraiDaimyoBoosterSelectDialog.SamuraiDaimyoBoosterSelectDialog, this.properties);
    this.hide();
  };
  Object.defineProperty(SamuraiDaimyoTauntDialog.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoTauntDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  SamuraiDaimyoTauntDialog.__initialize_static_members = function () {
    SamuraiDaimyoTauntDialog.CASTLE_SIZE = new __s0local0(80, 70);
  };
  SamuraiDaimyoTauntDialog.NAME = "SamuraiDaimyoTaunt";
  return SamuraiDaimyoTauntDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.SamuraiDaimyoTauntDialog = __s0local1;
var __dep_export_DaimyoCastleMapObjectVO = require("gge-module:export_DaimyoCastleMapObjectVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_SamuraiDaimyoBoosterSelectDialog = require("gge-module:export_SamuraiDaimyoBoosterSelectDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
