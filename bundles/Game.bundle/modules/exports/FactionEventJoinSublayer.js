Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SSelectFactionCampVO = require("gge-module:export_C2SSelectFactionCampVO");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleConfirmCostsDialogProperties = require("gge-module:export_CastleConfirmCostsDialogProperties");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __s0local0 = function (__s1param0) {
  function FactionEventJoinSublayer(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.sublayerSwitcher = __s3param1;
    __s3local0.initBasicButtons([__s3param0.btn_introduction, __s3param0.btn_rankings, __s3param0.mc_bottom.btn_join]);
    __s3local0.textFieldManager.registerTextField(__s3param0.txt_header, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_factionJoin_header"));
    __s3local0.textFieldManager.registerTextField(__s3param0.txt_introduction, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_factionJoin_tutorial"));
    __s3local0.textFieldManager.registerTextField(__s3param0.txt_rankings, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_factionJoin_rewards"));
    __s3local0.textFieldManager.registerTextField(__s3param0.txt_chooseCamp, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_factionJoin_chooseCamp"));
    __s3local0.textFieldManager.registerTextField(__s3param0.mc_bottom.btn_join.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_factionJoin_join_button"));
    __s3local0.textFieldManager.registerTextField(__s3param0.mc_warning.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_factionJoin_lastManStanding_header"));
    __s3local0.textFieldManager.registerTextField(__s3param0.mc_warning.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_factionJoin_lastManStanding_copy"));
    __s3param0.btn_introduction.toolTipText = "dialog_factionJoin_tutorial_tooltip";
    __s3param0.btn_rankings.toolTipText = "dialog_factionJoin_rewards_tooltip";
    __s3local0.campSelection = new __dep_export_PrebuiltCastleSelector.PrebuiltCastleSelector(__s3param0.mc_factionCamps, "mc_castle", 3);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionEventJoinSublayer, __s1param0);
  FactionEventJoinSublayer.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.campSelection.show(__dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID);
    this.campSelection.selectionIndex = 1;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.mc_bottom.btn_join, true);
    this.updateShowLMSWarning();
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_EVENT_LAST_MAN_STANDING_UPDATE, this.bindFunction(this.onLMSChanged));
  };
  FactionEventJoinSublayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.campSelection.hide();
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_EVENT_LAST_MAN_STANDING_UPDATE, this.bindFunction(this.onLMSChanged));
  };
  FactionEventJoinSublayer.prototype.onLMSChanged = function (__s9param0) {
    this.updateShowLMSWarning();
  };
  FactionEventJoinSublayer.prototype.updateShowLMSWarning = function () {
    var __s11local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_2.EventConst.EVENTTYPE_FACTION).isOneLMSActive;
    this.subLayerDisp.mc_bottom.visible = !__s11local0;
    this.subLayerDisp.mc_warning.visible = __s11local0;
  };
  FactionEventJoinSublayer.prototype.onClick = function (__s13param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s13param0.target)) {
      switch (__s13param0.target) {
        case this.subLayerDisp.btn_introduction:
          this.sublayerSwitcher.switchTo(__dep_export_FactionEventMainDialog.FactionEventMainDialog.SUBLAYER_INTRODUCTION);
          break;
        case this.subLayerDisp.btn_rankings:
          this.sublayerSwitcher.switchTo(__dep_export_FactionEventMainDialog.FactionEventMainDialog.SUBLAYER_RANKINGS);
          break;
        case this.subLayerDisp.mc_bottom.btn_join:
          this.onJoinFactionEventButtonClicked();
      }
    }
  };
  FactionEventJoinSublayer.prototype.onJoinFactionEventButtonClicked = function () {
    if (!__dep_export_FlashBlockHelper.FlashBlockHelper.checkFlashBlock(__dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID)) {
      if (this.haveEnoughResourcesToEnter()) {
        var __s17local0 = __dep_export_CastleModel.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(__dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID).getResourcesAsCollectableList();
        try {
          __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(__dep_export_CastleConfirmCostsDialog.CastleConfirmCostsDialog, new __dep_export_CastleConfirmCostsDialogProperties.CastleConfirmCostsDialogProperties(__dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_factionJoin_confirm_header"), __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_factionJoin_confirmCamp" + this.campSelection.selectionData.id), this.campSelection.selectionData.primaryCosts, __s17local0, this.bindFunction(this.buyCamp)));
        } catch (__s22local0) {
          console.error("selectionData is null, selectedIndex: " + this.campSelection.selectionIndex);
        }
      } else {
        this.buyCamp();
      }
    }
  };
  FactionEventJoinSublayer.prototype.buyCamp = function (__s25param0 = null) {
    __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.subLayerDisp.mc_bottom.btn_join, true);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSelectFactionCampVO.C2SSelectFactionCampVO(this.campSelection.selectionData.id, this.campSelection.selectionData.isPremium(), __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID, false));
  };
  FactionEventJoinSublayer.prototype.haveEnoughResourcesToEnter = function () {
    if (this.campSelection.selectionData) {
      for (var __s27local0 = this.campSelection.selectionData.primaryCosts, __s27local1 = 0; __s27local1 < __s27local0.length; ++__s27local1) {
        var __s27local2 = __s27local0.getItemByIndexSave(__s27local1);
        if (__s27local2) {
          var __s27local3 = __dep_export_CastleModel.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(__dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID);
          if (__dep_export_CostHelper.CostHelper.getAvailableGoodsFromDetailedCastleVO(__s27local3, new __dep_export_CollectableTypeVO.CollectableTypeVO().initByCollectable(__s27local2)) < __s27local2.amount) {
            return false;
          }
        }
      }
    }
    return true;
  };
  return FactionEventJoinSublayer;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.FactionEventJoinSublayer = __s0local0;
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_FlashBlockHelper = require("gge-module:export_FlashBlockHelper");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_CastleConfirmCostsDialog = require("gge-module:export_CastleConfirmCostsDialog");
var __dep_export_PrebuiltCastleSelector = require("gge-module:export_PrebuiltCastleSelector");
var __dep_export_FactionEventMainDialog = require("gge-module:export_FactionEventMainDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
