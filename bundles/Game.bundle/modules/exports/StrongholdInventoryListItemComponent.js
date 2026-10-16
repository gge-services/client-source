Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_C2STakeSoldiersVO = require("gge-module:export_C2STakeSoldiersVO");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleRecruitStrongholdAddUnitsDialogProperties = require("gge-module:export_CastleRecruitStrongholdAddUnitsDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = createjs.MovieClip;
var __s0local2 = createjs.MouseEvent;
var __s0local3 = function () {
  function StrongholdInventoryListItemComponent(__s3param0, __s3param1) {
    this.disp = __s3param0;
    this.tooltip = __s3param1;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.disp.item, this.disp.btn_info]);
    this.infoAmountText = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.item.mc_contentHolder.infoAmount.txt_value, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(0, {
      compactThreshold: 10000,
      compactFractionalDigits: 0
    }, 0));
    this.show();
  }
  StrongholdInventoryListItemComponent.prototype.show = function () {
    this.disp.addEventListener(__s0local2.CLICK, this.bindFunction(this.onClick));
    this.disp.addEventListener(__s0local2.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this.disp.addEventListener(__s0local2.MOUSE_OVER, this.bindFunction(this.onMouseOver));
  };
  StrongholdInventoryListItemComponent.takeSoldiers = function (__s7param0, __s7param1) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2STakeSoldiersVO.C2STakeSoldiersVO(__s7param0, __s7param1));
  };
  StrongholdInventoryListItemComponent.prototype.destroy = function () {
    this.disp.removeEventListener(__s0local2.CLICK, this.bindFunction(this.onClick));
    this.disp.removeEventListener(__s0local2.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this.disp.removeEventListener(__s0local2.MOUSE_OVER, this.bindFunction(this.onMouseOver));
  };
  Object.defineProperty(StrongholdInventoryListItemComponent.prototype, "unitVO", {
    get: function () {
      return this._unitVO;
    },
    set: function (__s13param0) {
      this._unitVO = __s13param0;
      this.update();
    },
    enumerable: true,
    configurable: true
  });
  StrongholdInventoryListItemComponent.prototype.onClick = function (__s15param0) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitStrongholdAddUnitsDialog.CastleRecruitStrongholdAddUnitsDialog, new __dep_export_CastleRecruitStrongholdAddUnitsDialogProperties.CastleRecruitStrongholdAddUnitsDialogProperties(false, this.unitVO, StrongholdInventoryListItemComponent.takeSoldiers, this.unitVO.inventoryAmount));
  };
  StrongholdInventoryListItemComponent.prototype.onMouseOver = function (__s17param0) {
    var __s17local0 = new __s0local1();
    __s17local0.x = this.disp.x;
    __s17local0.y = this.disp.y + 25;
    __s17local0.setBounds(this.disp.x, this.disp.y + 25, this.disp.width, this.disp.height);
    this.tooltip.show(this._unitVO, __s17local0);
  };
  StrongholdInventoryListItemComponent.prototype.onMouseOut = function (__s19param0) {
    this.tooltip.hide();
  };
  StrongholdInventoryListItemComponent.prototype.update = function () {
    if (this._unitVO) {
      this.disp.visible = true;
      this.tooltip.hide();
      __dep_export_WodPicHelper.WodPicHelper.addUnitPic(this._unitVO, this.disp.item.mc_contentHolder.mc_content, this.disp.item.width, this.disp.item.height, __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[0], __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[1], 30, new __s0local0(20, 20));
      this.infoAmountText.textContentVO.numberValue = this._unitVO.inventoryAmount;
    } else {
      this.disp.visible = false;
    }
  };
  return StrongholdInventoryListItemComponent;
}();
exports.StrongholdInventoryListItemComponent = __s0local3;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CastleRecruitStrongholdAddUnitsDialog = require("gge-module:export_CastleRecruitStrongholdAddUnitsDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local3, "IInventoryListItem");
