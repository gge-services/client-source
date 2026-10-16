Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleMilitaryDataEvent = require("gge-module:export_CastleMilitaryDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function ConstructionItemSlotBig(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param4) || this;
    __s3local0.clickExtractCallback = __s3param3;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param4.mc_item, 1.02);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param4.mc_extract.btn_extract);
    __s3param4.mc_extract.btn_extract.toolTipText = "dialog_ci_assign_info_extract_tooltip";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ConstructionItemSlotBig, __s1param0);
  ConstructionItemSlotBig.prototype.update = function () {
    if (this.interactionData.selectedBuilding) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.mc_item, true);
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp.mc_item.mc_icon);
      this.disp.mc_item.mc_icon.visible = false;
      if (this.itemVO) {
        __dep_export_ConstructionItemRenderer.ConstructionItemRenderer.renderWithoutBuildingIcon(this.itemVO, this.bindFunction(this.updateSlotItemDimension), this.disp.mc_item.mc_icon);
      }
      this.disp.mc_extract.visible = !!this.itemVO && !!this.interactionData.selectedSlot && this.interactionData.selectedSlot.equals(this._slotVO);
      if (this.itemVO) {
        this.disp.mc_extract.btn_extract.gotoAndStop(this.itemVO.isTemporary ? 2 : 1);
        this.updateButton();
      }
      __s1param0.prototype.update.call(this);
    }
  };
  ConstructionItemSlotBig.prototype.updateButton = function () {
    if (this.itemVO.isTemporary) {
      if (this.itemVO.rarity == __dep_exact_26a421b704832cff.ConstructionItemConst.RARENESS_LEGENDARY) {
        this.disp.mc_extract.btn_extract.toolTipText = "dialog_ci_assign_tempCi_boosterButton_maxBoost_tooltip";
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.mc_extract.btn_extract, false);
      } else if (__dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RARE_BOOSTER_CONSUMABLE) == 0 && __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_EPIC_BOOSTER_CONSUMABLE) == 0 && __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_LEGENDARY_BOOSTER_CONSUMABLE) == 0) {
        this.disp.mc_extract.btn_extract.toolTipText = "dialog_ci_assign_tempCi_boosterButton_noBoosters_tooltip";
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.mc_extract.btn_extract, false);
      } else {
        this.disp.mc_extract.btn_extract.toolTipText = "dialog_ci_assign_tempCi_boosterButton_select_tooltip";
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.mc_extract.btn_extract, true);
      }
    } else if (this.itemVO.isRemovalLocked) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.mc_extract.btn_extract, false);
      this.disp.mc_extract.btn_extract.toolTipText = "alert_ci_removeNotPossible";
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.mc_extract.btn_extract, true);
      this.disp.mc_extract.btn_extract.toolTipText = "dialog_ci_assign_info_extract_tooltip";
    }
  };
  ConstructionItemSlotBig.prototype.updateSlotItemDimension = function (__s18param0) {
    this.disp.mc_item.mc_icon.visible = true;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.scaleToFit(this.disp.mc_item.mc_icon, 52, 52);
  };
  ConstructionItemSlotBig.prototype.onClick = function (__s20param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s20param0.target)) {
      switch (__s20param0.target) {
        case this.disp.mc_item:
          this.clickCallback(this);
          break;
        case this.disp.mc_extract.btn_extract:
          this.clickExtractCallback(this);
      }
    }
  };
  ConstructionItemSlotBig.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onPackageUpdate));
  };
  ConstructionItemSlotBig.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onPackageUpdate));
  };
  ConstructionItemSlotBig.prototype.onPackageUpdate = function (__s28param0) {
    if (this.interactionData.selectedBuilding && this.itemVO) {
      this.updateButton();
    }
  };
  return ConstructionItemSlotBig;
}(require("gge-module:export_ConstructionItemSlot").ConstructionItemSlot);
exports.ConstructionItemSlotBig = __s0local0;
var __dep_export_ConstructionItemRenderer = require("gge-module:export_ConstructionItemRenderer");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
