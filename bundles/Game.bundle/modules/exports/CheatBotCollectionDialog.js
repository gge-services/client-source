Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CheatAddNPCGeneralCommand = require("gge-module:export_CheatAddNPCGeneralCommand");
var __dep_export_CheatBuildingInfoCommand = require("gge-module:export_CheatBuildingInfoCommand");
var __dep_export_CheatUnitInfoCommand = require("gge-module:export_CheatUnitInfoCommand");
var __dep_export_CheatDialogNamesCommand = require("gge-module:export_CheatDialogNamesCommand");
var __dep_export_CheatEndOfTextPipesCommand = require("gge-module:export_CheatEndOfTextPipesCommand");
var __dep_export_CheatLifetimeSpentC2Command = require("gge-module:export_CheatLifetimeSpentC2Command");
var __dep_export_CheatMaintenanceDialogCommand = require("gge-module:export_CheatMaintenanceDialogCommand");
var __dep_export_CheatMysteryBoxChancesCommand = require("gge-module:export_CheatMysteryBoxChancesCommand");
var __dep_export_CheatOfferIDsInHeaderCommand = require("gge-module:export_CheatOfferIDsInHeaderCommand");
var __dep_export_CheatQuestIDsCommand = require("gge-module:export_CheatQuestIDsCommand");
var __dep_export_CheatRelicIDsCommand = require("gge-module:export_CheatRelicIDsCommand");
var __dep_export_CheatShowResearchGridCommand = require("gge-module:export_CheatShowResearchGridCommand");
var __dep_export_CheatShowResearchIDsCommand = require("gge-module:export_CheatShowResearchIDsCommand");
var __dep_export_CheatTextIDCommand = require("gge-module:export_CheatTextIDCommand");
var __dep_export_CheatToggleShowCIIDCommand = require("gge-module:export_CheatToggleShowCIIDCommand");
var __dep_export_CheatToggleShowEffectTypeIDCommand = require("gge-module:export_CheatToggleShowEffectTypeIDCommand");
var __dep_export_CheatUnitWODCommand = require("gge-module:export_CheatUnitWODCommand");
var __dep_export_CheatWelcomeCommand = require("gge-module:export_CheatWelcomeCommand");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CheatBotCollectionDialogItem = require("gge-module:export_CheatBotCollectionDialogItem");
var __s0local0 = function (__s1param0) {
  function CheatBotCollectionDialog() {
    var __s3local0 = this;
    __s3local0.currentTab = "";
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CheatBotCollectionDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CheatBotCollectionDialog, __s1param0);
  CheatBotCollectionDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    var __s5local0 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_CheatBotCollectionDialogItem.CheatBotCollectionDialogItem, "CheatBotCollection_Item", CheatBotCollectionDialog.NAME);
    __s5local0.itemPaddingY = 6;
    __s5local0.useSmoothScroll = true;
    this._scrollList = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.dialogDisp.mc_list).addMaskMc(this.dialogDisp.mc_list.mc_mask).addItemContainerMc(this.dialogDisp.mc_list.mc_items).addSliderMc(this.dialogDisp.mc_list.mc_slider).addMouseWheelAreaMc(this.dialogDisp), __s5local0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_bots, this.dialogDisp.btn_clientCheats], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    this.dialogDisp.btn_bots.visible = false;
  };
  CheatBotCollectionDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO("           CHEATS"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_bots.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO("Bots"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_bots.mc_selected.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO("Bots"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_clientCheats.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO("Client Cheats"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_clientCheats.mc_selected.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO("Client Cheats"));
    this._scrollList.onShow();
    if (this.currentTab == "") {
      this.updateItems(CheatBotCollectionDialog.TAB_CLIENT_CHEAT);
    }
  };
  CheatBotCollectionDialog.prototype.hideLoaded = function (__s10param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s10param0);
    this._scrollList.onHide();
  };
  CheatBotCollectionDialog.prototype.updateItems = function (__s12param0) {
    this.currentTab = __s12param0;
    this.dialogDisp.btn_bots.mc_selected.visible = __s12param0 == CheatBotCollectionDialog.TAB_BOT;
    this.dialogDisp.btn_clientCheats.mc_selected.visible = __s12param0 == CheatBotCollectionDialog.TAB_CLIENT_CHEAT;
    var __s12local0 = [];
    CheatBotCollectionDialog.BOT_ITEMS.forEach(function (__s14param0) {
      if (__s14param0.tab == __s12param0) {
        __s12local0.push(__s14param0);
      }
    });
    this._scrollList.updateWithNewData(__s12local0);
  };
  CheatBotCollectionDialog.prototype.onClick = function (__s17param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s17param0.target)) {
      switch (__s17param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_bots:
          this.updateItems(CheatBotCollectionDialog.TAB_BOT);
          break;
        case this.dialogDisp.btn_clientCheats:
          this.updateItems(CheatBotCollectionDialog.TAB_CLIENT_CHEAT);
      }
    }
  };
  CheatBotCollectionDialog.__initialize_static_members = function () {
    CheatBotCollectionDialog.NAME = "CheatBotCollection";
    CheatBotCollectionDialog.TAB_CLIENT_CHEAT = "cheat";
    CheatBotCollectionDialog.TAB_BOT = "bot";
    CheatBotCollectionDialog.BOT_ITEMS = [{
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "toggleShowCiIDs",
      description: "Toggles the visibility of ConstructionItemIDs",
      command: __dep_export_CheatToggleShowCIIDCommand.CheatToggleShowCIIDCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "toggleShowEffectTypeIDs",
      description: "Toggles the visibility of EffectTypeIDs for effects",
      command: __dep_export_CheatToggleShowEffectTypeIDCommand.CheatToggleShowEffectTypeIDCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "welcome {rewardID}",
      description: "Opens the 'Welcome Back'-Dialog",
      command: __dep_export_CheatWelcomeCommand.CheatWelcomeCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "mysteryBoxChance",
      description: "Shows the dropchances in the mysteryboxes dialog",
      command: __dep_export_CheatMysteryBoxChancesCommand.CheatMysteryBoxChancesCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "textID {textID} {replacements}",
      description: "Tests TextID IG",
      command: __dep_export_CheatTextIDCommand.CheatTextIDCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "pipesOn / pipesOff",
      description: "Shows Pipes '|' at the end of texts (saved in local storage)",
      command: __dep_export_CheatEndOfTextPipesCommand.CheatEndOfTextPipesCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "toggleOfferIDsInMessageSubject",
      description: "Shows OfferIDs in the message headers",
      command: __dep_export_CheatOfferIDsInHeaderCommand.CheatOfferIDsInHeaderCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "showQuestIDs on|off",
      description: "Shows QuestIDs in the quest book",
      command: __dep_export_CheatQuestIDsCommand.CheatQuestIDsCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "lifetimeSpent",
      description: "C2 Spent Lifetime for this account",
      command: __dep_export_CheatLifetimeSpentC2Command.CheatLifetimeSpentC2Command
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "noConnection",
      description: "Shows Maintenance (careful, its not closeable)",
      command: __dep_export_CheatMaintenanceDialogCommand.CheatMaintenanceDialogCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "toggleShowDialogName",
      description: "Toggles Dialogs Name above the Dialog",
      command: __dep_export_CheatDialogNamesCommand.CheatDialogNamesCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "showRelicIDS",
      description: "Toggles Showing Relic Equipment IDs",
      command: __dep_export_CheatRelicIDsCommand.CheatRelicIDsCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "addNPCGeneral",
      description: "Add a general as NPC",
      command: __dep_export_CheatAddNPCGeneralCommand.CheatAddNPCGeneralCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "buildingInfo",
      description: "Show a BuildingInfo dialog for buildingWOD",
      command: __dep_export_CheatBuildingInfoCommand.CheatBuildingInfoCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "unitInfo",
      description: "Show a UnitInfo dialog for unitWOD",
      command: __dep_export_CheatUnitInfoCommand.CheatUnitInfoCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "toggleUnitWodID",
      description: "Shows WODID for units",
      command: __dep_export_CheatUnitWODCommand.CheatUnitWODCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "showResearchIDs",
      description: "Show or hide researchIDs",
      command: __dep_export_CheatShowResearchIDsCommand.CheatShowResearchIDsCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "showResearchGrid",
      description: "Show or hide research grid",
      command: __dep_export_CheatShowResearchGridCommand.CheatShowResearchGridCommand
    }];
  };
  return CheatBotCollectionDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CheatBotCollectionDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
