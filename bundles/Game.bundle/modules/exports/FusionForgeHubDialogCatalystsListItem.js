Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstFusion = require("gge-module:export_ClientConstFusion");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_DecorationForgeCatalystConversionDialogProperties = require("gge-module:export_DecorationForgeCatalystConversionDialogProperties");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function FusionForgeHubDialogCatalystsListItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, new __s0local0()) || this;
    __s3local0._currencyVO = __s3param0;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FusionForgeHubDialogCatalystsListItem, __s1param0);
  FusionForgeHubDialogCatalystsListItem.prototype.init = function () {
    this._clip = new __dep_exact_9e901e8e2483a22f.GoodgameDisplayObjectClipExternal(FusionForgeHubDialogCatalystsListItem.ASSET_NAME, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(FusionForgeHubDialogCatalystsListItem.ASSET_FILE_NAME));
    this.disp.addChild(this._clip);
    var __s5local0 = this.getItemMc();
    __dep_export_ButtonHelper.ButtonHelper.initButton(__s5local0.btn_add, -1, __dep_export_ClickFeedbackButtonBackground.ClickFeedbackButtonBackground);
    this.update();
  };
  FusionForgeHubDialogCatalystsListItem.prototype.destroy = function () {
    this._clip = null;
    __s1param0.prototype.destroy.call(this);
  };
  FusionForgeHubDialogCatalystsListItem.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
  };
  FusionForgeHubDialogCatalystsListItem.prototype.removeEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    __s1param0.prototype.removeEventListener.call(this);
  };
  FusionForgeHubDialogCatalystsListItem.prototype.update = function () {
    var __s13local0 = this.getItemMc();
    var __s13local1 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, new __s0local1(93, 59));
    __s13local1.tooltip.useAmount = false;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s13local0.mc_item).addInfoBtn(__s13local0.btn_info), this._currencyVO, __s13local1);
    __dep_export_ClientConstFusion.ClientConstFusion.setCatalystTextfield(__s13local0.mc_item.txt_amount, this._currencyVO);
    __s13local0.mc_item.mc_empty.visible = this._currencyVO.amount <= 0;
  };
  FusionForgeHubDialogCatalystsListItem.prototype.getItemMc = function () {
    return this._clip.currentshownDisplayObject;
  };
  FusionForgeHubDialogCatalystsListItem.prototype.onClick = function (__s17param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s17param0.target)) {
      __s1param0.prototype.onClick.call(this, __s17param0);
      switch (__s17param0.target) {
        case this.getItemMc().btn_add:
          __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDialogs(__dep_export_DecorationForgeCatalystConversionDialog.DecorationForgeCatalystConversionDialog, new __dep_export_DecorationForgeCatalystConversionDialogProperties.DecorationForgeCatalystConversionDialogProperties(this._currencyVO));
      }
    }
  };
  FusionForgeHubDialogCatalystsListItem.prototype.onCurrenciesUpdated = function (__s21param0) {
    this._currencyVO.amount = __dep_export_CastleModel.CastleModel.currencyData.getAmountById(this._currencyVO.id);
    this.update();
  };
  FusionForgeHubDialogCatalystsListItem.__initialize_static_members = function () {
    FusionForgeHubDialogCatalystsListItem.ASSET_NAME = "FusionForgeHub_Catalysts_Item";
    FusionForgeHubDialogCatalystsListItem.ASSET_FILE_NAME = "FusionForgeHub";
  };
  return FusionForgeHubDialogCatalystsListItem;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.FusionForgeHubDialogCatalystsListItem = __s0local2;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_DecorationForgeCatalystConversionDialog = require("gge-module:export_DecorationForgeCatalystConversionDialog");
var __dep_export_ClickFeedbackButtonBackground = require("gge-module:export_ClickFeedbackButtonBackground");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
__s0local2.__initialize_static_members();
