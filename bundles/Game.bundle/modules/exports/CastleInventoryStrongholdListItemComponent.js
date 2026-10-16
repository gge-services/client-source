Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_C2SStoreSoldiersVO = require("gge-module:export_C2SStoreSoldiersVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_AInventoryListItem = require("gge-module:export_AInventoryListItem");
var __dep_export_CastleRecruitInfoDialogProperties = require("gge-module:export_CastleRecruitInfoDialogProperties");
var __dep_export_CastleRecruitStrongholdAddUnitsDialogProperties = require("gge-module:export_CastleRecruitStrongholdAddUnitsDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleInventoryStrongholdListItemComponent(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3param0.item, __s3param0.btn_info]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleInventoryStrongholdListItemComponent, __s1param0);
  CastleInventoryStrongholdListItemComponent.prototype.onClickUnit = function () {
    if (!__dep_export_CastleModel.CastleModel.militaryData.isStrongholdFull) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitStrongholdAddUnitsDialog.CastleRecruitStrongholdAddUnitsDialog, new __dep_export_CastleRecruitStrongholdAddUnitsDialogProperties.CastleRecruitStrongholdAddUnitsDialogProperties(true, this.unitVO, CastleInventoryStrongholdListItemComponent.storeSoldiers, Math.min(__dep_export_CastleModel.CastleModel.militaryData.currentHiddenSoldierSpace, this.unitVO.inventoryAmount)));
    }
  };
  CastleInventoryStrongholdListItemComponent.prototype.onClickUnitInfo = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(this.unitVO));
  };
  CastleInventoryStrongholdListItemComponent.prototype.onClickDismissUnit = function () {};
  CastleInventoryStrongholdListItemComponent.prototype.onMouseOver = function (__s12param0) {
    if (__dep_export_CastleModel.CastleModel.militaryData.isStrongholdFull) {
      this.disp.item.toolTipText = "dialog_stronghold_full";
    } else {
      this.disp.item.toolTipText = "";
      __s1param0.prototype.onMouseOver.call(this, __s12param0);
    }
  };
  Object.defineProperty(CastleInventoryStrongholdListItemComponent.prototype, "hasDismissButton", {
    get: function () {
      return false;
    },
    set: function (__s18param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInventoryListItem.AInventoryListItem.prototype, "hasDismissButton").set.call(this, __s18param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleInventoryStrongholdListItemComponent.storeSoldiers = function (__s20param0, __s20param1) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SStoreSoldiersVO.C2SStoreSoldiersVO(__s20param0, __s20param1));
  };
  CastleInventoryStrongholdListItemComponent.prototype.update = function () {
    this.disp.item.gotoAndStop(1);
    __s1param0.prototype.update.call(this);
  };
  return CastleInventoryStrongholdListItemComponent;
}(__dep_export_AInventoryListItem.AInventoryListItem);
exports.CastleInventoryStrongholdListItemComponent = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
var __dep_export_CastleRecruitStrongholdAddUnitsDialog = require("gge-module:export_CastleRecruitStrongholdAddUnitsDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IInventoryListItem");
