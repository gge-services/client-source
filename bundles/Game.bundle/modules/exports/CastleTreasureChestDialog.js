Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleTreasureChestDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleTreasureChestDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTreasureChestDialog, __s1param0);
  CastleTreasureChestDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_treasurechest_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_treasurechest_desc"));
    this.itxt_costs = this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
  };
  CastleTreasureChestDialog.prototype.setToolTips = function () {
    this.dialogDisp.mc_costs.toolTipText = {
      t: "generic_amount_reward",
      p: [new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.dialogProperties.offerVO.getCostsForOfferAcception().getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C2)), __dep_export_ClientConstTextIds.ClientConstTextIds.C2]
    };
    this.dialogDisp.mc_costs.mouseChildren = false;
  };
  CastleTreasureChestDialog.prototype.applyPropertiesLoaded = function (__s9param0 = null) {
    var __s9local0 = __dep_exact_f855840627e6e145.int(this.dialogProperties.offerVO.getCostsForOfferAcception().getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C2));
    this.itxt_costs.textContentVO.numberValue = __s9local0;
    this.updateRewards();
  };
  CastleTreasureChestDialog.prototype.updateRewards = function () {
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.dialogDisp, "mc_rewardItem"), this.getRewardList(), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED), function preRenderFunc(__s13param0) {
      __s13param0.clips.itemMc.mc_loading.visible = false;
    });
  };
  CastleTreasureChestDialog.prototype.onClick = function (__s15param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s15param0.target)) {
      __s1param0.prototype.onClick.call(this, __s15param0);
      switch (__s15param0.target) {
        case this.dialogDisp.btn_ok:
          __dep_export_CastleModel.CastleModel.privateOfferData.sendOfferPay(this.dialogProperties.offerVO.id);
          this.hide();
          break;
        case this.dialogDisp.btn_cancel:
          this.hide();
      }
    }
  };
  CastleTreasureChestDialog.prototype.getRewardList = function () {
    return this.dialogProperties.offerVO.getTotalRewardListFromOfferVO();
  };
  Object.defineProperty(CastleTreasureChestDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTreasureChestDialog.__initialize_static_members = function () {
    CastleTreasureChestDialog.NAME = "CastleTreasureChest";
  };
  return CastleTreasureChestDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleTreasureChestDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
