Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleCheatData = require("gge-module:export_CastleCheatData");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_TempServerSimpleRewardsComponent = require("gge-module:export_TempServerSimpleRewardsComponent");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function MysteryBoxInfoDialogListItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MysteryBoxInfoDialogListItem, __s1param0);
  MysteryBoxInfoDialogListItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
    this._rewards = new __dep_export_TempServerSimpleRewardsComponent.TempServerSimpleRewardsComponent(this.getItemMc(), true, false, 0);
  };
  MysteryBoxInfoDialogListItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._rewards.onShow();
  };
  MysteryBoxInfoDialogListItem.prototype.onHide = function () {
    this._rewards.onHide();
    __s1param0.prototype.onHide.call(this);
  };
  MysteryBoxInfoDialogListItem.prototype.fill = function () {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_copy0, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_mysteryBoxSystem_boxRarity_" + this.rewardCategory.toLocaleLowerCase()));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_copy1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_mysteryBoxSystem_mysteryBoxInfo_drawChances", [this.chance])).visible = __dep_export_CastleCheatData.CastleCheatData.cheatShowMysteryBoxChances;
    this.getItemMc().mc_legendary.visible = this.rewardCategory == "Legendary";
    this.getItemMc().mc_epic.visible = this.rewardCategory == "Epic";
    this.getItemMc().mc_rare.visible = this.rewardCategory == "Rare";
    this.getItemMc().mc_common.visible = this.rewardCategory == "Common";
    this._rewards.updateWithNewData(this.rewards);
  };
  Object.defineProperty(MysteryBoxInfoDialogListItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  MysteryBoxInfoDialogListItem.prototype.onClick = function (__s15param0) {
    __s1param0.prototype.onClick.call(this, __s15param0);
  };
  Object.defineProperty(MysteryBoxInfoDialogListItem.prototype, "rewards", {
    get: function () {
      return this.data.rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MysteryBoxInfoDialogListItem.prototype, "rewardCategory", {
    get: function () {
      return this.data.rewardCategory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MysteryBoxInfoDialogListItem.prototype, "chance", {
    get: function () {
      return this.data.chance;
    },
    enumerable: true,
    configurable: true
  });
  return MysteryBoxInfoDialogListItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.MysteryBoxInfoDialogListItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
