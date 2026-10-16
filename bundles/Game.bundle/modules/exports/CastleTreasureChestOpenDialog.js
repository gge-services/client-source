Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleTreasureChestOpenDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleTreasureChestOpenDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTreasureChestOpenDialog, __s1param0);
  CastleTreasureChestOpenDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_treasurechestOpen_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_treasurechestOpen_desc")).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
  };
  CastleTreasureChestOpenDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this);
    this.updateRewards();
  };
  CastleTreasureChestOpenDialog.prototype.updateRewards = function () {
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.dialogDisp, "mc_rewardItem"), this.getRewardList(), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED), function preRenderFunc(__s11param0) {
      __s11param0.clips.itemMc.mc_loading.visible = !__s11param0.itemVO;
    }, function afterRenderFunc(__s13param0) {
      __s13param0.setVisibility(true);
    });
  };
  CastleTreasureChestOpenDialog.prototype.onClick = function (__s15param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s15param0.target)) {
      __s1param0.prototype.onClick.call(this, __s15param0);
      switch (__s15param0.target) {
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  CastleTreasureChestOpenDialog.prototype.getRewardList = function () {
    var __s19local0;
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.properties, "CastlePrivateOfferDialogProperties")) {
      var __s19local1 = this.properties.offerVO;
      if (__s19local1) {
        __s19local0 = __s19local1.getTotalRewardListFromOfferVO();
      }
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.properties, "CastleTreasureChestOpenDialogProperties")) {
      __s19local0 = this.properties.rewardList;
    }
    return __s19local0;
  };
  CastleTreasureChestOpenDialog.__initialize_static_members = function () {
    CastleTreasureChestOpenDialog.NAME = "CastleTreasureChestOpen";
  };
  return CastleTreasureChestOpenDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleTreasureChestOpenDialog = __s0local0;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
