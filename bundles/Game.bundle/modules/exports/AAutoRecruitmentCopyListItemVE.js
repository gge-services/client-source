Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_KingdomEnum = require("gge-module:export_KingdomEnum");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_AutoRecruitmentHelper = require("gge-module:export_AutoRecruitmentHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function AAutoRecruitmentCopyListItemVE(__s3param0) {
    var __s3local0 = this;
    __s3local0._onSelectionChanged = new __dep_exact_5c7bc328fca9e4de.Signal();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._checkButton = __s3param0.getChildByName("btn_select");
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0._checkButton);
    __s3local0.changeSelection(false, false, false);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AAutoRecruitmentCopyListItemVE, __s1param0);
  AAutoRecruitmentCopyListItemVE.prototype.assignNewData = function (__s5param0) {
    this._vo = __s5param0;
    this.updateSelectButton();
    this.updateGreyOut();
    this.updateKingdomSymbol();
    this.applyNewVO();
  };
  AAutoRecruitmentCopyListItemVE.prototype.updateSelectButton = function (__s7param0 = false) {
    this.changeSelection(!!this.vo && this.vo.isSelected, __s7param0, false);
  };
  AAutoRecruitmentCopyListItemVE.prototype.updateKingdomSymbol = function () {
    var __s9local0 = __dep_exact_f855840627e6e145.int(this.vo ? this.vo.kingdomId : __dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID);
    var __s9local1 = new __dep_exact_81dacdf05bd32292.ColorTransform();
    __s9local1.color = __dep_export_KingdomEnum.KingdomEnum.getTypeById(__s9local0).symbolBgColor;
    this.disp.mc_kingdom.mc_color.useFilters([new createjs.ColorFilter(__s9local1.redMultiplier, __s9local1.greenMultiplier, __s9local1.blueMultiplier, __s9local1.alphaMultiplier, __s9local1.redOffset, __s9local1.greenOffset, __s9local1.blueOffset, __s9local1.alphaOffset)]);
  };
  AAutoRecruitmentCopyListItemVE.prototype.updateGreyOut = function () {
    var __s11local0 = !this.vo || !this.vo.hasError;
    var __s11local1 = __dep_exact_f855840627e6e145.int(this.vo ? this.vo.errorId : __dep_exact_26a421b704832cff.ERROR.ALL_OK);
    this.enableComponent(__s11local0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp, !__s11local0);
    this.disp.mouseChildren = __s11local0;
    this.disp.toolTipText = this.getErrorToolTipTextId(__s11local1);
  };
  AAutoRecruitmentCopyListItemVE.prototype.applyNewVO = function () {};
  AAutoRecruitmentCopyListItemVE.prototype.changeSelection = function (__s15param0, __s15param1 = true, __s15param2 = true) {
    this._checkButton.gotoAndStop(Object(__s15param0 ? 2 : 1));
    this._checkButton.toolTipText = __s15param0 ? "dialog_copyQueue_deselect" : "dialog_copyQueue_select";
    if (this.vo) {
      this.vo.isSelected = __s15param0;
    }
    if (__s15param1 && __s15param0 && __dep_export_AutoRecruitmentHelper.AutoRecruitmentHelper.isEventKingdom(this.vo.kingdomId) && __dep_export_AutoRecruitmentHelper.AutoRecruitmentHelper.getRemainingEventKingdomTime(this.vo.kingdomId) < this.vo.recruitmentTime) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_warning"), __dep_exact_92d05af59ee2ff30.Localize.text(this.eventTimeWarningTextId)));
    }
    if (__s15param2) {
      this.onSelectionChanged.dispatch();
    }
  };
  Object.defineProperty(AAutoRecruitmentCopyListItemVE.prototype, "eventTimeWarningTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  AAutoRecruitmentCopyListItemVE.prototype.getErrorToolTipTextId = function (__s22param0) {
    switch (__s22param0) {
      case __dep_exact_26a421b704832cff.ERROR.TOO_MUCH_UNITS:
        return "dialog_copyQueue_disabled_tooManyUnits";
      case __dep_exact_26a421b704832cff.ERROR.NOT_ENOUGH_RESOURCES:
        return "dialog_copyQueue_disabled_resources";
      default:
        return "";
    }
  };
  AAutoRecruitmentCopyListItemVE.prototype.onClick = function (__s25param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s25param0.target)) {
      switch (__s25param0.target) {
        case this.disp.btn_select:
          this.changeSelection(!this.vo.isSelected);
      }
    }
  };
  Object.defineProperty(AAutoRecruitmentCopyListItemVE.prototype, "onSelectionChanged", {
    get: function () {
      return this._onSelectionChanged;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAutoRecruitmentCopyListItemVE.prototype, "vo", {
    get: function () {
      return this._vo;
    },
    enumerable: true,
    configurable: true
  });
  return AAutoRecruitmentCopyListItemVE;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.AAutoRecruitmentCopyListItemVE = __s0local0;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
