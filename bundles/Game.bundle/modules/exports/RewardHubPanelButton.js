Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleLootBoxDataEvent = require("gge-module:export_CastleLootBoxDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = function (__s1param0) {
  function RewardHubPanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RewardHubPanelButton, __s1param0);
  RewardHubPanelButton.prototype.addEventListener = function () {
    __dep_export_CastleModel.CastleModel.rewardHubData.addEventListener(__dep_export_RewardHubEvent.RewardHubEvent.PENDING_REWARDS_AMOUNT_UPDATED, this.bindFunction(this.onDataUpdated));
    __dep_export_CastleModel.CastleModel.lootBoxData.addEventListener(__dep_export_CastleLootBoxDataEvent.CastleLootBoxDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onDataUpdated));
    __s1param0.prototype.addEventListener.call(this);
    this.listenOnXPChanged();
  };
  RewardHubPanelButton.prototype.removeEventListener = function () {
    __dep_export_CastleModel.CastleModel.rewardHubData.removeEventListener(__dep_export_RewardHubEvent.RewardHubEvent.PENDING_REWARDS_AMOUNT_UPDATED, this.bindFunction(this.onDataUpdated));
    __dep_export_CastleModel.CastleModel.lootBoxData.removeEventListener(__dep_export_CastleLootBoxDataEvent.CastleLootBoxDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onDataUpdated));
    __s1param0.prototype.removeEventListener.call(this);
  };
  RewardHubPanelButton.prototype.updateOnVisible = function () {
    __s1param0.prototype.updateOnVisible.call(this);
    this.setMark(this.markForLostAndFound);
    this.setAmount(this.pendingRewards > 0 && !this.markForLostAndFound, this.pendingRewards);
  };
  RewardHubPanelButton.prototype.onMouseOver = function (__s11param0) {
    __s1param0.prototype.onMouseOver.call(this, __s11param0);
    this.setMark(false);
    this.setAmount(this.pendingRewards > 0, this.pendingRewards);
  };
  RewardHubPanelButton.prototype.onMouseOut = function (__s13param0) {
    __s1param0.prototype.onMouseOut.call(this, __s13param0);
    this.updateOnVisible();
  };
  Object.defineProperty(RewardHubPanelButton.prototype, "pendingRewards", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.rewardHubData.getAmountOfPendingRewards() + __dep_export_CastleModel.CastleModel.lootBoxData.allLootBoxAmount();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubPanelButton.prototype, "markForLostAndFound", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.lostAndFoundData.getItemAmount() > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubPanelButton.prototype, "iconClass", {
    get: function () {
      if (Library.CastleInterfaceElements_Icons) {
        return Library.CastleInterfaceElements_Icons.Icon_RewardHub;
      } else {
        return null;
      }
    },
    set: function (__s23param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s23param0);
    },
    enumerable: true,
    configurable: true
  });
  RewardHubPanelButton.prototype.isButtonEnabled = function () {
    return __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_LOST_AND_FOUND;
  };
  RewardHubPanelButton.prototype.getButtonTooltip = function () {
    if (this.isButtonEnabled()) {
      return "hud_rewardHub_hudButton_tt";
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_ClientConstTextIds.ClientConstTextIds.LEVEL_NEEDED, [__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_LOST_AND_FOUND]);
    }
  };
  RewardHubPanelButton.prototype.onButtonClicked = function () {
    __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_RewardHubMainDialog.RewardHubMainDialog, new __dep_export_RewardHubDialogProperties.RewardHubDialogProperties(false));
  };
  RewardHubPanelButton.prototype.onDataUpdated = function (__s33param0) {
    this.update();
  };
  return RewardHubPanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.RewardHubPanelButton = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_RewardHubMainDialog = require("gge-module:export_RewardHubMainDialog");
var __dep_export_RewardHubDialogProperties = require("gge-module:export_RewardHubDialogProperties");
var __dep_export_RewardHubEvent = require("gge-module:export_RewardHubEvent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
