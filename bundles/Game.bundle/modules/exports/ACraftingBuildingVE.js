Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CraftingEvent = require("gge-module:export_CraftingEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_RingMenuButtonCrafting = require("gge-module:export_RingMenuButtonCrafting");
var __dep_export_IsoStatusIconEnum = require("gge-module:export_IsoStatusIconEnum");
var __s0local0 = function (__s1param0) {
  function ACraftingBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACraftingBuildingVE, __s1param0);
  ACraftingBuildingVE.prototype.createStatusIcons = function () {
    __s1param0.prototype.createStatusIcons.call(this);
    if (this.buildingVO.buildingState.isFunctionally && !this.statusIcons.isUpgradeIconActive && this.crafingQueueVO) {
      this.statusIcons.addIcon(this.crafingQueueVO.isProducing() ? __dep_export_IsoStatusIconEnum.IsoStatusIconEnum.PRODUCTIVE : __dep_export_IsoStatusIconEnum.IsoStatusIconEnum.UNPRODUCTIVE);
    }
  };
  Object.defineProperty(ACraftingBuildingVE.prototype, "crafingQueueVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.craftingData.getQueueVOByID(this.craftingBuildingVO.craftingQueueId);
    },
    enumerable: true,
    configurable: true
  });
  ACraftingBuildingVE.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleModel.CastleModel.craftingData.addEventListener(__dep_export_CraftingEvent.CraftingEvent.CRAFTING_QUEUE_UPDATED, this.bindFunction(this.onCraftingQueueUpdated));
  };
  ACraftingBuildingVE.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleModel.CastleModel.craftingData.removeEventListener(__dep_export_CraftingEvent.CraftingEvent.CRAFTING_QUEUE_UPDATED, this.bindFunction(this.onCraftingQueueUpdated));
  };
  ACraftingBuildingVE.prototype.onCraftingQueueUpdated = function (__s14param0) {
    this.updateStatusIcon();
  };
  ACraftingBuildingVE.prototype.getRingMenuButtons = function () {
    var __s16local0 = __s1param0.prototype.getRingMenuButtons.call(this);
    __s16local0.push(new __dep_export_RingMenuButtonCrafting.RingMenuButtonCrafting());
    return __s16local0;
  };
  Object.defineProperty(ACraftingBuildingVE.prototype, "craftingBuildingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return ACraftingBuildingVE;
}(require("gge-module:export_ABasicBuildingVE").ABasicBuildingVE);
exports.ACraftingBuildingVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
