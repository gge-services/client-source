Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClickFeedbackHoverBehaviour = require("gge-module:export_ClickFeedbackHoverBehaviour");
var __dep_export_AScrollableComboboxItem = require("gge-module:export_AScrollableComboboxItem");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function ScrollableComboboxItemGeneralOverviewLord(__s3param0) {
    var __s3local0 = __s1param0.call(this, new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("GeneralOverviewLordComboboxItem"))(), __s3param0) || this;
    __s3local0.disp.actLikeButton = true;
    __s3local0.disp.mouseChildren = false;
    __s3local0.disp.mc_selected.visible = __s3local0.isSelected;
    __s3local0._itxt_name = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0.disp.txt_lordName, new __dep_exact_92d05af59ee2ff30.TextVO(""), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __s3local0._itxt_name.textContentVO.stringValue = __s3local0.label;
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s3local0.disp.mc_featherHolder);
    if (__s3local0.lordVO) {
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.addLordFeather(__s3param0, __s3local0.disp.mc_featherHolder, __s3local0.lordVO.isBaron ? 0.5 : 1);
      __s3local0.enableComponent(__s3local0.lordVO.isAvailableForGeneralAssignement);
      __s3local0.disp.toolTipText = __s3local0.isEnabled ? null : "dialog_equipment_lordNotAvailable";
    }
    __s3local0._clickfeedBack = new __dep_export_ClickFeedbackHoverBehaviour.ClickFeedbackHoverBehaviour(__s3local0.disp);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ScrollableComboboxItemGeneralOverviewLord, __s1param0);
  Object.defineProperty(ScrollableComboboxItemGeneralOverviewLord.prototype, "lordVO", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  ScrollableComboboxItemGeneralOverviewLord.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    if (this.lordVO) {
      this.enableComponent(this.lordVO.isAvailableForGeneralAssignement);
      this._itxt_name.textContentVO.stringValue = this.label;
      this.disp.toolTipText = this.isEnabled ? null : "dialog_equipment_lordNotAvailable";
    }
    this._itxt_name.color = this.isSelected ? __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT : __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT_BRIGHT;
    this._clickfeedBack.addEventListener();
  };
  ScrollableComboboxItemGeneralOverviewLord.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._clickfeedBack.removeEventListener();
    if (this.disp) {
      this.disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onRollOver));
    }
  };
  ScrollableComboboxItemGeneralOverviewLord.prototype.onRollOver = function (__s14param0) {
    this._itxt_name.color = __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT;
  };
  ScrollableComboboxItemGeneralOverviewLord.prototype.onRollOut = function (__s16param0) {
    this._itxt_name.color = this.isSelected ? __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT : __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT_BRIGHT;
  };
  ScrollableComboboxItemGeneralOverviewLord.prototype.setSelected = function (__s18param0) {
    __s1param0.prototype.setSelected.call(this, __s18param0);
    this.disp.mc_selected.visible = this.isSelected;
    this._itxt_name.color = this.isSelected ? __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT : __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT_BRIGHT;
  };
  Object.defineProperty(ScrollableComboboxItemGeneralOverviewLord.prototype, "label", {
    get: function () {
      if (this.lordVO) {
        if (this.lordVO.isBaron) {
          var __s20local0 = this.lordVO;
          if (__s20local0.lockedInCastleID >= 0 && __dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(__s20local0.lockedInCastleID) != null) {
            return __dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(__s20local0.lockedInCastleID).areaNameString;
          } else {
            return __dep_exact_92d05af59ee2ff30.Localize.text("baron_toolTip_isFree");
          }
        }
        return this.lordVO.label;
      }
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_generals_overview_selectGeneral_assignNobody");
    },
    enumerable: true,
    configurable: true
  });
  return ScrollableComboboxItemGeneralOverviewLord;
}(__dep_export_AScrollableComboboxItem.AScrollableComboboxItem);
exports.ScrollableComboboxItemGeneralOverviewLord = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ILayoutable");
