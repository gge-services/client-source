Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleNomadInvasionAllianceCampRewardDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleNomadInvasionAllianceCampRewardDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleNomadInvasionAllianceCampRewardDialog, __s1param0);
  CastleNomadInvasionAllianceCampRewardDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nomadInvasion_khanRewards_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rewards, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nomadInvasion_khanRewards_yourReward_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_gotoShop.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nomadInvasion_khanRewards_visitStore_desc"));
    this.itxt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nomadInvasion_khanRewards_desc"));
    this.itxt_desc.autoFitToBounds = true;
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.centeredRewardList = new __dep_export_CastleCenteredRewardRendererListComponent.CastleCenteredRewardRendererListComponent(this.dialogDisp.rewards, CastleNomadInvasionAllianceCampRewardDialog.ITEM_DIMENSION);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_ok, this.dialogDisp.btn_gotoShop]);
  };
  CastleNomadInvasionAllianceCampRewardDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.dialogDisp.btn_gotoShop.visible = this.eventVO != null;
    this.showRewards();
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  CastleNomadInvasionAllianceCampRewardDialog.prototype.showRewards = function () {
    var __s9local0 = new __dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO(__dep_exact_26a421b704832cff.EventConst.LEAGUETYPE_EVENT_SUBTYPE_ALLIANCE_CAMP_INVASION);
    __s9local0.eventId = __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE;
    __s9local0.parseData(null, __dep_export_CastleModel.CastleModel.specialEventData.configXml, this.dialogProperties.params);
    var __s9local1 = new __dep_export_CollectableList.CollectableList();
    for (var __s9local2 = 0; __s9local2 < __s9local0.rewardsReceived; __s9local2++) {
      var __s9local3 = __s9local0.rewardLists[__s9local2];
      __s9local1.addList(__s9local3, true);
    }
    this.centeredRewardList.showRewards(__s9local1);
    this.itxt_desc.textContentVO.textReplacements = [__s9local0.ownPoints];
    this.dialogDisp.mc_singleRewardDeco.visible = __s9local1.length == 1;
  };
  CastleNomadInvasionAllianceCampRewardDialog.prototype.hideLoaded = function (__s13param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s13param0);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  CastleNomadInvasionAllianceCampRewardDialog.prototype.onRemoveEvent = function (__s15param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s15param0.specialEventVO, "NomadInvasionVendorEventVO")) {
      this.dialogDisp.btn_gotoShop.visible = false;
    }
  };
  CastleNomadInvasionAllianceCampRewardDialog.prototype.onClick = function (__s18param0) {
    __s1param0.prototype.onClick.call(this, __s18param0);
    switch (__s18param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_khanRewardDialog"));
        break;
      case this.dialogDisp.btn_gotoShop:
        this.hide();
        this.eventVO.openDialog();
    }
  };
  Object.defineProperty(CastleNomadInvasionAllianceCampRewardDialog.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION_VENDOR);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNomadInvasionAllianceCampRewardDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleNomadInvasionAllianceCampRewardDialog.__initialize_static_members = function () {
    CastleNomadInvasionAllianceCampRewardDialog.NAME = "CastleNomadInvasionAllianceCampReward";
    CastleNomadInvasionAllianceCampRewardDialog.ITEM_DIMENSION = new __s0local0(88, 82);
  };
  return CastleNomadInvasionAllianceCampRewardDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleNomadInvasionAllianceCampRewardDialog = __s0local1;
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_ALeagueTypeScoreEventVO = require("gge-module:export_ALeagueTypeScoreEventVO");
var __dep_export_CastleCenteredRewardRendererListComponent = require("gge-module:export_CastleCenteredRewardRendererListComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
