Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_AInventoryListItem = require("gge-module:export_AInventoryListItem");
var __dep_export_CastleRecruitInfoDialogProperties = require("gge-module:export_CastleRecruitInfoDialogProperties");
var __dep_export_CastleDismissUnitsDialogProperties = require("gge-module:export_CastleDismissUnitsDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function HospitalInventoryListItemComponent(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this;
    __s3local0.onSelectCallback = __s3param2;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3local0.disp.item, __s3local0.disp.btn_dismiss, __s3local0.disp.btn_info]);
    __s3local0.disp.mouseChildren = true;
    __s3local0.disp.btn_dismiss.toolTipText = "dialog_dismissUnit_tooltip";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(HospitalInventoryListItemComponent, __s1param0);
  HospitalInventoryListItemComponent.prototype.onClickUnit = function () {
    this.onSelectCallback(this.unitVO);
  };
  HospitalInventoryListItemComponent.prototype.onClickUnitInfo = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(this.unitVO));
  };
  HospitalInventoryListItemComponent.prototype.onClickDismissUnit = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleHospitalDismissUnitsDialog.CastleHospitalDismissUnitsDialog, new __dep_export_CastleDismissUnitsDialogProperties.CastleDismissUnitsDialogProperties(this.unitVO, this.unitVO.inventoryAmount));
  };
  HospitalInventoryListItemComponent.prototype.update = function () {
    if (this.unitVO) {
      this.disp.visible = true;
      this.tooltip.hide();
      __dep_export_WodPicHelper.WodPicHelper.addUnitPic(this.unitVO, this.disp.item.mc_contentHolder.mc_content, this.disp.item.width / this.disp.item.scaleX, this.disp.item.height / this.disp.item.scaleY, __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[0], __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[1], 26, new __s0local0(12, 14), true, true, true, null, this.disp.item.mc_level);
      this.disp.item.mc_contentHolder.infoAmount.visible = this.unitVO.inventoryAmount > 0;
      this.infoAmountText.textContentVO.numberValue = this.unitVO.inventoryAmount;
      this.dismissButtonVisibility = false;
      if (this.disp.mc_discount) {
        this.disp.mc_discount.visible = false;
      }
    } else {
      this.disp.visible = false;
    }
  };
  HospitalInventoryListItemComponent.prototype.destroy = function () {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp.item.mc_level);
    __s1param0.prototype.destroy.call(this);
  };
  return HospitalInventoryListItemComponent;
}(__dep_export_AInventoryListItem.AInventoryListItem);
exports.HospitalInventoryListItemComponent = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
var __dep_export_CastleHospitalDismissUnitsDialog = require("gge-module:export_CastleHospitalDismissUnitsDialog");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IInventoryListItem");
