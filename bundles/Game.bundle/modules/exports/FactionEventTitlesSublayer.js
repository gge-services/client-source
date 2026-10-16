Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstTitle = require("gge-module:export_ClientConstTitle");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleTitleMainDialogProperties = require("gge-module:export_CastleTitleMainDialogProperties");
var __dep_export_CastleTitleSublayer = require("gge-module:export_CastleTitleSublayer");
var __s0local0 = function (__s1param0) {
  function FactionEventTitlesSublayer(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.subLayerDisp.btn_titleDialog.toolTipText = "gloryTitles_plural";
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0.subLayerDisp.btn_titleDialog);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionEventTitlesSublayer, __s1param0);
  FactionEventTitlesSublayer.prototype.onClick = function (__s5param0) {
    __s1param0.prototype.onClick.call(this, __s5param0);
    if (__s5param0.target == this.subLayerDisp.btn_titleDialog) {
      __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(__dep_export_CastleTitleMainDialog.CastleTitleMainDialog, new __dep_export_CastleTitleMainDialogProperties.CastleTitleMainDialogProperties(__dep_export_ClientConstTitle.ClientConstTitle.GLORY_TITLE));
    }
  };
  FactionEventTitlesSublayer.prototype.setUpTitleBarPosition = function (__s8param0 = null) {
    this.subLayerDisp.mc_titleInfo.titleDetails_selectedProgress.x = __s8param0 ? __s8param0.x : 0;
    this.subLayerDisp.mc_titleInfo.titleDetails_selectedProgress.y = __s8param0 ? __s8param0.y : this.titleInfoProgressBarOriginalPosition.y;
  };
  FactionEventTitlesSublayer.prototype.setUpMightInfoPosition = function (__s10param0 = null) {
    this.subLayerDisp.mc_titleInfo.mc_might.x = __s10param0 ? __s10param0.x : 0;
    this.subLayerDisp.mc_titleInfo.mc_might.y = __s10param0 ? __s10param0.y : this.mightPointsOriginalPosition.y;
  };
  Object.defineProperty(FactionEventTitlesSublayer.prototype, "isSubscriptionActive", {
    get: function () {
      return false;
    },
    set: function (__s14param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleTitleSublayer.CastleTitleSublayer.prototype, "isSubscriptionActive").set.call(this, __s14param0);
    },
    enumerable: true,
    configurable: true
  });
  return FactionEventTitlesSublayer;
}(__dep_export_CastleTitleSublayer.CastleTitleSublayer);
exports.FactionEventTitlesSublayer = __s0local0;
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleTitleMainDialog = require("gge-module:export_CastleTitleMainDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
