Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastlePrivateOfferDecorationFinishDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastlePrivateOfferDecorationFinishDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePrivateOfferDecorationFinishDialog, __s1param0);
  CastlePrivateOfferDecorationFinishDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    var __s5local0 = this.dialogProperties.offerVO.getTotalRewardListFromOfferVO();
    var __s5local1 = __s5local0.getItemByType(__dep_export_CollectableEnum.CollectableEnum.BUILDING).buildingVO;
    if (__s5local1) {
      __dep_export_WodPicHelper.WodPicHelper.addWodPic(__s5local1, this.dialogDisp.mc_decoHolder, 160, 120);
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.mc_decoHolder), __s5local0.getItemByType(__dep_export_CollectableEnum.CollectableEnum.BUILDING), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_TIME_CHALLENGE));
      var __s5local2 = __s5local1.buildingGroundType == __dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_DECO ? "dialog_specialOfferDeco_finished_copy" : "dialog_buildingOffer_finished_copy";
      this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_specialOfferDeco_finished_title"));
      this.itxt_copy = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s5local2));
    }
  };
  CastlePrivateOfferDecorationFinishDialog.prototype.initLoaded = function (__s8param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
  };
  CastlePrivateOfferDecorationFinishDialog.prototype.applyPropertiesLoaded = function (__s10param0 = null) {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_decoHolder);
    this.dialogDisp.mc_decoHolder.mouseEnabled = true;
    this.dialogDisp.mc_decoHolder.mouseChildren = false;
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.crest, __dep_export_CastleModel.CastleModel.userData.playerCrest);
  };
  CastlePrivateOfferDecorationFinishDialog.prototype.onClick = function (__s12param0) {
    __s1param0.prototype.onClick.call(this, __s12param0);
    switch (__s12param0.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastlePrivateOfferDecorationFinishDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivateOfferDecorationFinishDialog.__initialize_static_members = function () {
    CastlePrivateOfferDecorationFinishDialog.NAME = "CastlePrivateOfferDecorationFinish";
  };
  return CastlePrivateOfferDecorationFinishDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastlePrivateOfferDecorationFinishDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
