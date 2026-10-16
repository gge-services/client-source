Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ACraftingBuildingVE = require("gge-module:export_ACraftingBuildingVE");
var __dep_export_CraftingQueueVO = require("gge-module:export_CraftingQueueVO");
var __dep_export_CastleRefineryToolsmithDialog = require("gge-module:export_CastleRefineryToolsmithDialog");
var __dep_export_CastleRefineryToolsmithDialogProperties = require("gge-module:export_CastleRefineryToolsmithDialogProperties");
var __s0local0 = function (__s1param0) {
  function RingMenuButtonCrafting() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0._currentQueueID = 1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RingMenuButtonCrafting, __s1param0);
  RingMenuButtonCrafting.prototype.init = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1, __s5param2);
    this._disp = __s5param1.btn_crafting;
    this._disp.visible = __s5param2 instanceof __dep_export_ACraftingBuildingVE.ACraftingBuildingVE && __s5param2.buildingVO.buildingState.isFunctionally;
    if (this._disp.visible) {
      var __s5local0 = this.targetBuilding.craftingBuildingVO.craftingQueueId;
      this._disp.gotoAndStop(__s5local0);
      this._currentQueueID = __s5local0;
    }
  };
  RingMenuButtonCrafting.prototype.onClick = function (__s8param0, __s8param1) {
    this.parent.hide();
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRefineryToolsmithDialog.CastleRefineryToolsmithDialog, new __dep_export_CastleRefineryToolsmithDialogProperties.CastleRefineryToolsmithDialogProperties(this._currentQueueID));
  };
  RingMenuButtonCrafting.prototype.getInfoText = function () {
    switch (this._currentQueueID) {
      case __dep_export_CraftingQueueVO.CraftingQueueVO.QUEUE_REFINERY:
        return "ringmenu_building_refinery";
      case __dep_export_CraftingQueueVO.CraftingQueueVO.QUEUE_TOOLSMITH:
        return "ringmenu_building_toolsmith";
      case __dep_export_CraftingQueueVO.CraftingQueueVO.QUEUE_DRAGONHOARD:
        return "ringmenu_building_dragonhoard";
      case __dep_export_CraftingQueueVO.CraftingQueueVO.QUEUE_DRAGONBREATH:
        return "ringmenu_building_dragonbreathforge";
    }
  };
  return RingMenuButtonCrafting;
}(require("gge-module:export_ARingMenuButton").ARingMenuButton);
exports.RingMenuButtonCrafting = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRingMenuButton");
