Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleRecruitInfoDialogProperties = require("gge-module:export_CastleRecruitInfoDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleFactionThankYouPackageDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleFactionThankYouPackageDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionThankYouPackageDialog, __s1param0);
  CastleFactionThankYouPackageDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_info1, this.dialogDisp.btn_info2]);
  };
  CastleFactionThankYouPackageDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.itxt_copy = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProperties.copyText));
    this.itxt_amount0 = this.textFieldManager.registerTextField(this.dialogDisp.txt_amount0, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_MULTIPLIED, [this.dialogProperties.c2]));
    this.itxt_amount1 = this.textFieldManager.registerTextField(this.dialogDisp.txt_amount1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_MULTIPLIED, [this.dialogProperties.units[0][1]]));
    this.itxt_amount2 = this.textFieldManager.registerTextField(this.dialogDisp.txt_amount2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_MULTIPLIED, [this.dialogProperties.units[1][1]]));
    this.dialogDisp.mc_c2.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    this.dialogDisp.mc_food.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.FOOD;
    if (this.dialogProperties.isC2) {
      this.dialogDisp.mc_c2.visible = true;
      this.dialogDisp.mc_food.visible = false;
    } else {
      this.dialogDisp.mc_c2.visible = false;
      this.dialogDisp.mc_food.visible = true;
    }
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_unit0);
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_unit1);
    this.dialogDisp.mc_unit0.mouseChildren = false;
    this.dialogDisp.mc_unit1.mouseChildren = false;
    var __s7local0 = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_UNIT).get(this.dialogProperties.units[0][0]);
    var __s7local1 = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_UNIT).get(this.dialogProperties.units[1][0]);
    __dep_export_WodPicHelper.WodPicHelper.addUnitPic(__s7local0, this.dialogDisp.mc_unit0, 110, 110, 0, 0);
    __dep_export_WodPicHelper.WodPicHelper.addUnitPic(__s7local1, this.dialogDisp.mc_unit1, 110, 110, 0, 0);
    this.dialogDisp.mc_unit0.toolTipText = __s7local0.getNameString();
    this.dialogDisp.mc_unit1.toolTipText = __s7local1.getNameString();
  };
  CastleFactionThankYouPackageDialog.prototype.onClick = function (__s11param0) {
    switch (__s11param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
        break;
      case this.dialogDisp.btn_info1:
        __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(__dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_UNIT).get(this.dialogProperties.units[0][0])));
        break;
      case this.dialogDisp.btn_info2:
        __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(__dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_UNIT).get(this.dialogProperties.units[1][0])));
    }
  };
  Object.defineProperty(CastleFactionThankYouPackageDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionThankYouPackageDialog.__initialize_static_members = function () {
    CastleFactionThankYouPackageDialog.NAME = "CastleFactionThankyouPackageExt";
  };
  return CastleFactionThankYouPackageDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleFactionThankYouPackageDialog = __s0local0;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
