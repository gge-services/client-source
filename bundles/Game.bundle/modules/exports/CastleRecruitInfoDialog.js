Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_WodPicHelperUnitFramePerfectCallbackWrapper = require("gge-module:export_WodPicHelperUnitFramePerfectCallbackWrapper");
var __dep_export_CastleExternalSubLayerDialog = require("gge-module:export_CastleExternalSubLayerDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleRecruitInfoDialog() {
    return __s1param0.call(this, CastleRecruitInfoDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRecruitInfoDialog, __s1param0);
  CastleRecruitInfoDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this._subLayer ||= new Map();
    this._subLayer.set(CastleRecruitInfoDialog.CAT_UNIT, new __dep_export_CastleRecruitInfoDialogUnit.CastleRecruitInfoDialogUnit(this.dialogDisp.cat_unit));
    this._subLayer.set(CastleRecruitInfoDialog.CAT_TOOL, new __dep_export_CastleRecruitInfoDialogTool.CastleRecruitInfoDialogTool(this.dialogDisp.cat_tool));
    this._subLayer.set(CastleRecruitInfoDialog.CAT_UNKNOWN, new __dep_export_CastleRecruitInfoDialogUnknown.CastleRecruitInfoDialogUnknown(this.dialogDisp.cat_unknown));
    this.initBasicButtons([this.dialogDisp.btn_close]);
    this.dialogDisp.mc_toolCategory.mouseChildren = false;
  };
  CastleRecruitInfoDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_export_WodPicHelper.WodPicHelper.setCorrectUnitBackgroundPic(this.infoProperties.unitVo, this.dialogDisp.mc_unit.mc_bg, Library.CastleInterfaceElements.unitRecruitBackground, Library.CastleInterfaceElements.unitRecruitBackground_Berimond);
    if (this.infoProperties.crestVO) {
      __dep_export_WodPicHelper.WodPicHelper.addUnitPicToContainer(this.infoProperties.unitVo, this.dialogDisp.mc_unit, CastleRecruitInfoDialog.PIC_MAX_WIDTH, CastleRecruitInfoDialog.PIC_MAX_HEIGHT, CastleRecruitInfoDialog.PIC_MAX_WIDTH, CastleRecruitInfoDialog.PIC_MAX_HEIGHT, this.infoProperties.crestVO.backgroundColor1, this.infoProperties.crestVO.backgroundColor2, 40, new __s0local0(0, -0), true, __dep_export_WodPicHelperUnitFramePerfectCallbackWrapper.WodPicHelperUnitFramePerfectCallbackWrapper.callback(this.infoProperties.unitVo, CastleRecruitInfoDialog.PIC_MAX_WIDTH, CastleRecruitInfoDialog.PIC_MAX_HEIGHT));
    } else {
      __dep_export_WodPicHelper.WodPicHelper.addPlayerUnitPicToContainer(this.infoProperties.unitVo, this.dialogDisp.mc_unit, CastleRecruitInfoDialog.PIC_MAX_WIDTH, CastleRecruitInfoDialog.PIC_MAX_HEIGHT, CastleRecruitInfoDialog.PIC_MAX_WIDTH, CastleRecruitInfoDialog.PIC_MAX_HEIGHT, 40, new __s0local0(0, 0), true, __dep_export_WodPicHelperUnitFramePerfectCallbackWrapper.WodPicHelperUnitFramePerfectCallbackWrapper.callback(this.infoProperties.unitVo, CastleRecruitInfoDialog.PIC_MAX_WIDTH, CastleRecruitInfoDialog.PIC_MAX_HEIGHT), this.dialogDisp.mc_unit.mc_level);
    }
    var __s7local0 = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.infoProperties.unitVo.getNameString()).compose().replace("\n", "");
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__s7local0)).autoFitToBounds = true;
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.infoProperties.unitVo, "UnknownUnitVO")) {
      this.changeCategory(CastleRecruitInfoDialog.CAT_UNKNOWN);
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.infoProperties.unitVo, "SoldierUnitVO")) {
      this.changeCategory(CastleRecruitInfoDialog.CAT_UNIT);
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.infoProperties.unitVo, "ToolUnitVO")) {
      this.changeCategory(CastleRecruitInfoDialog.CAT_TOOL);
    }
    var __s7local1 = this.infoProperties.unitVo.toolCategory != "";
    this.dialogDisp.mc_toolCategory.visible = __s7local1;
    if (__s7local1) {
      this.dialogDisp.mc_toolCategory.gotoAndStop(__dep_export_FightDialogAutoFillComponent.FightDialogAutoFillComponent.getOptionsTooltipIconFrame(this.infoProperties.unitVo.toolCategory));
      this.dialogDisp.mc_toolCategory.toolTipText = "toolType_" + this.infoProperties.unitVo.toolCategory;
    }
  };
  CastleRecruitInfoDialog.prototype.changeCategory = function (__s15param0) {
    if (this._currentCategory != __s15param0) {
      __s1param0.prototype.changeCategory.call(this, __s15param0);
    }
    this.showSublayer(this._subLayer.get(this._currentCategory), [this.infoProperties.unitVo]);
  };
  CastleRecruitInfoDialog.prototype.onClick = function (__s18param0) {
    __s1param0.prototype.onClick.call(this, __s18param0);
    switch (__s18param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleRecruitInfoDialog.prototype.hideLoaded = function (__s21param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_unit.mc_level);
    if (this.itxt_copy && __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.itxt_copy.textStrategy, "GGSTextFieldTLFStrategy")) {
      this.itxt_copy.textStrategy.deactivate();
    }
  };
  Object.defineProperty(CastleRecruitInfoDialog.prototype, "infoProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleRecruitInfoDialog.__initialize_static_members = function () {
    CastleRecruitInfoDialog.NAME = "CastleRecruitInfoEx";
    CastleRecruitInfoDialog.CAT_UNIT = "CAT_UNIT";
    CastleRecruitInfoDialog.CAT_TOOL = "CAT_TOOL";
    CastleRecruitInfoDialog.CAT_UNKNOWN = "CAT_UNKNOWN";
    CastleRecruitInfoDialog.PIC_MAX_WIDTH = 90;
    CastleRecruitInfoDialog.PIC_MAX_HEIGHT = 112;
  };
  CastleRecruitInfoDialog.NAME = "CastleRecruitInfoEx_G";
  CastleRecruitInfoDialog.CAT_UNIT = "CAT_UNIT";
  CastleRecruitInfoDialog.CAT_TOOL = "CAT_TOOL";
  CastleRecruitInfoDialog.CAT_UNKNOWN = "CAT_UNKNOWN";
  CastleRecruitInfoDialog.PIC_MAX_WIDTH = 90;
  CastleRecruitInfoDialog.PIC_MAX_HEIGHT = 112;
  return CastleRecruitInfoDialog;
}(__dep_export_CastleExternalSubLayerDialog.CastleExternalSubLayerDialog);
exports.CastleRecruitInfoDialog = __s0local1;
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_FightDialogAutoFillComponent = require("gge-module:export_FightDialogAutoFillComponent");
var __dep_export_CastleRecruitInfoDialogTool = require("gge-module:export_CastleRecruitInfoDialogTool");
var __dep_export_CastleRecruitInfoDialogUnit = require("gge-module:export_CastleRecruitInfoDialogUnit");
var __dep_export_CastleRecruitInfoDialogUnknown = require("gge-module:export_CastleRecruitInfoDialogUnknown");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
