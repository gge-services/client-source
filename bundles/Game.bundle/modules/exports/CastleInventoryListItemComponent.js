Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_AInventoryListItem = require("gge-module:export_AInventoryListItem");
var __dep_export_CastleRecruitInfoDialogProperties = require("gge-module:export_CastleRecruitInfoDialogProperties");
var __dep_export_CastleDismissUnitsDialogProperties = require("gge-module:export_CastleDismissUnitsDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleInventoryListItemComponent(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3param0.item, __s3param0.btn_info, __s3param0.btn_dismiss]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleInventoryListItemComponent, __s1param0);
  CastleInventoryListItemComponent.prototype.onClickUnit = function () {};
  CastleInventoryListItemComponent.prototype.onClickUnitInfo = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(this.unitVO));
  };
  CastleInventoryListItemComponent.prototype.onClickDismissUnit = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitDismissUnitsDialog.CastleRecruitDismissUnitsDialog, new __dep_export_CastleDismissUnitsDialogProperties.CastleDismissUnitsDialogProperties(this.unitVO, this.unitVO.inventoryAmount));
  };
  CastleInventoryListItemComponent.prototype.update = function () {
    if (this.unitVO) {
      if (this.unitVO.isStronghold) {
        this.disp.item.gotoAndStop(2);
      } else {
        this.disp.item.gotoAndStop(1);
      }
    }
    if (this.disp.mc_discount) {
      this.disp.mc_discount.visible = false;
    }
    __s1param0.prototype.update.call(this);
  };
  return CastleInventoryListItemComponent;
}(__dep_export_AInventoryListItem.AInventoryListItem);
exports.CastleInventoryListItemComponent = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
var __dep_export_CastleRecruitDismissUnitsDialog = require("gge-module:export_CastleRecruitDismissUnitsDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IInventoryListItem");
