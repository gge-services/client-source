Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleCheatData = require("gge-module:export_CastleCheatData");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function GeneralsHubInfoDialogListItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralsHubInfoDialogListItem, __s1param0);
  GeneralsHubInfoDialogListItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
  };
  GeneralsHubInfoDialogListItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
  };
  GeneralsHubInfoDialogListItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
  };
  GeneralsHubInfoDialogListItem.prototype.fill = function () {
    if (__dep_export_CastleCheatData.CastleCheatData.cheatShowMysteryBoxChances) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_mysteryBoxSystem_mysteryBoxInfo_drawChances", [this.chance]));
    } else {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.reward ? this.reward.getNameTextId() : " "));
    }
    var __s11local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local0(64, 64));
    __s11local0.tooltip.showEquipmentCountdown = false;
    __s11local0.icon.unitLevelDimension = new __s0local0(26, 26);
    if (this.reward) {
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.getItemMc().mc_item).addTextfieldBgMc(this.getItemMc().mc_item.mc_bg).addTextfield(this.getItemMc().mc_item.txt_amount).addInfoBtn(this.getItemMc().btn_info), this.reward, __s11local0);
    }
  };
  Object.defineProperty(GeneralsHubInfoDialogListItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  GeneralsHubInfoDialogListItem.prototype.onClick = function (__s18param0) {
    __s1param0.prototype.onClick.call(this, __s18param0);
  };
  Object.defineProperty(GeneralsHubInfoDialogListItem.prototype, "reward", {
    get: function () {
      return this.data.reward;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsHubInfoDialogListItem.prototype, "rewardCategory", {
    get: function () {
      return this.data.rewardCategory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsHubInfoDialogListItem.prototype, "chance", {
    get: function () {
      return this.data.chance;
    },
    enumerable: true,
    configurable: true
  });
  return GeneralsHubInfoDialogListItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.GeneralsHubInfoDialogListItem = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
