Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = createjs.Point;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = function () {
  function AInventoryListItem(__s3param0, __s3param1) {
    this.disp = __s3param0;
    this.disp.btn_dismiss.toolTipText = "dialog_dismissUnit_tooltip";
    this.tooltip = __s3param1;
    this.infoAmountText = AInventoryListItem.textFieldManager.registerTextField(this.disp.item.mc_contentHolder.infoAmount.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    this.show();
  }
  AInventoryListItem.prototype.show = function () {
    this.disp.addEventListener(__s0local1.CLICK, this.bindFunction(this.onClick));
    this.disp.addEventListener(__s0local1.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this.disp.addEventListener(__s0local1.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isMobile) {
      var __s5local0 = this.disp.btn_dismiss;
      if (__s5local0) {
        __s5local0.scaleX = __s5local0.scaleY = 1.5;
      }
    }
  };
  AInventoryListItem.prototype.destroy = function () {
    this.disp.removeEventListener(__s0local1.CLICK, this.bindFunction(this.onClick));
    this.disp.removeEventListener(__s0local1.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this.disp.removeEventListener(__s0local1.MOUSE_OVER, this.bindFunction(this.onMouseOver));
  };
  Object.defineProperty(AInventoryListItem.prototype, "unitVO", {
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
  AInventoryListItem.prototype.onClick = function (__s15param0) {
    switch (__s15param0.target) {
      case this.disp.item:
        this.onClickUnit();
        break;
      case this.disp.btn_info:
        this.onClickUnitInfo();
        break;
      case this.disp.btn_dismiss:
        this.onClickDismissUnit();
    }
  };
  AInventoryListItem.prototype.onMouseOver = function (__s18param0) {
    if (this.unitVO) {
      this.dismissButtonVisibility = true;
      if (__s18param0.target == this.disp.item) {
        this.tooltip.show(this.unitVO, this.disp);
      }
    }
  };
  AInventoryListItem.prototype.onMouseOut = function (__s22param0) {
    this.tooltip.hide();
    this.dismissButtonVisibility = false;
  };
  AInventoryListItem.prototype.onClickUnit = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  AInventoryListItem.prototype.onClickUnitInfo = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  AInventoryListItem.prototype.onClickDismissUnit = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  Object.defineProperty(AInventoryListItem.prototype, "hasDismissButton", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  AInventoryListItem.prototype.update = function () {
    if (this.unitVO) {
      __dep_export_WodPicHelper.WodPicHelper.setCorrectUnitBackgroundPic(this.unitVO, this.disp.item.mc_bg, Library.CastleInterfaceElements.castleRecruitUnitBackground, Library.CastleInterfaceElements.castleRecruitUnitBackground_Berimond);
      this.disp.visible = true;
      this.tooltip.hide();
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.disp.item.mc_contentHolder.mc_content);
      __dep_export_WodPicHelper.WodPicHelper.addUnitPic(this.unitVO, this.disp.item.mc_contentHolder.mc_content, __dep_exact_f855840627e6e145.int(this.disp.item.width / this.disp.item.scaleX), __dep_exact_f855840627e6e145.int(this.disp.item.height / this.disp.item.scaleY), __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[0], __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[1], 26, new __s0local0(12, 14));
      this.disp.item.mc_contentHolder.infoAmount.visible = this.unitVO.inventoryAmount > 0;
      this.infoAmountText = AInventoryListItem.textFieldManager.registerTextField(this.disp.item.mc_contentHolder.infoAmount.txt_value, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(this.unitVO.inventoryAmount, {
        compactThreshold: 10000,
        compactFractionalDigits: 0
      }));
      this.dismissButtonVisibility = false;
    } else {
      this.disp.visible = false;
    }
  };
  Object.defineProperty(AInventoryListItem.prototype, "dismissButtonVisibility", {
    set: function (__s36param0) {
      if (this.disp.btn_dismiss && this.unitVO) {
        this.disp.btn_dismiss.visible = this.unitVO.isDismissable && this.hasDismissButton && (__s36param0 || __dep_exact_81dacdf05bd32292.currentBrowserInfo.isMobile);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AInventoryListItem, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return AInventoryListItem;
}();
exports.AInventoryListItem = __s0local2;
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "IInventoryListItem");
