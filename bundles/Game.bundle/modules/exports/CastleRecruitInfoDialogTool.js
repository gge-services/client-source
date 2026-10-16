Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleRecruitInfoDialogTool(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRecruitInfoDialogTool, __s1param0);
  CastleRecruitInfoDialogTool.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.sublayerDisp.mc_level.btn_left, this.sublayerDisp.mc_level.btn_right]);
    this.toolVO = __s5param0[0];
    this.sublayerDisp.mc_infoMarchspeed.toolTipText = "marchspeed";
    this.sublayerDisp.mc_infoMarchspeed.mouseChildren = false;
    this.textFieldManager.registerTextField(this.sublayerDisp.mc_infoMarchspeed.txt_value, new __dep_exact_92d05af59ee2ff30_2.TextVO(String(this.toolVO.unitSpeed)));
    this.sublayerDisp.mctoolTipText = this.toolVO.getTooltipString();
    this.textFieldManager.registerTextField(this.sublayerDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.toolVO.getShortInfoString())).autoFitToBounds = true;
    var __s5local0 = __dep_exact_f855840627e6e145.int(this.toolVO.effectTypes.length);
    for (var __s5local1 = [this.sublayerDisp.mc_tool_info, this.sublayerDisp.mc_tool_info2], __s5local2 = 0; __s5local2 < __s5local1.length; ++__s5local2) {
      __s5local1[__s5local2].visible = __s5local2 < __s5local0;
      if (!(__s5local2 >= __s5local0)) {
        __dep_export_WodPicHelper.WodPicHelper.addToolEffectIcon(this.toolVO, __s5local1[__s5local2].mc_icon, 40, 34, __s5local2);
        __s5local1[__s5local2].toolTipText = this.toolVO.getTooltipString(1, __s5local2);
        __s5local1[__s5local2].mouseChildren = false;
        this.textFieldManager.registerTextField(__s5local1[__s5local2].txt_value, this.toolVO.getBonusString(__s5local2)).autoFitToBounds = true;
      }
    }
    this.sublayerDisp.mc_waveLimit.visible = this.toolVO.amountPerWave > 0 && !this.toolVO.isOffenseSupportTool;
    this.sublayerDisp.mc_waveLimit.toolTipText = "amountPerWave";
    this.textFieldManager.registerTextField(this.sublayerDisp.mc_waveLimit.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.toolVO.amountPerWave));
    this.sublayerDisp.mc_level.visible = this.toolVO.level > 0 || this.toolVO.upgradeWodID > 0;
    this.sublayerDisp.mc_level.btn_left.visible = this.toolVO.downgradeWodID > 0;
    this.sublayerDisp.mc_level.btn_right.visible = this.toolVO.upgradeWodID > 0;
    this.textFieldManager.registerTextField(this.sublayerDisp.mc_level.txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("building_level", [this.toolVO.level]));
  };
  CastleRecruitInfoDialogTool.prototype.onClick = function (__s10param0) {
    __s1param0.prototype.onClick.call(this, __s10param0);
    switch (__s10param0.target) {
      case this.sublayerDisp.mc_level.btn_left:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(__dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(this.toolVO.downgradeWodID)));
        this.layoutManager.hideDialogWithDialogKey(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog);
        break;
      case this.sublayerDisp.mc_level.btn_right:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(__dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(this.toolVO.upgradeWodID)));
        this.layoutManager.hideDialogWithDialogKey(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog);
    }
  };
  Object.defineProperty(CastleRecruitInfoDialogTool.prototype, "sublayerDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  return CastleRecruitInfoDialogTool;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.CastleRecruitInfoDialogTool = __s0local0;
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
var __dep_export_CastleRecruitInfoDialogProperties = require("gge-module:export_CastleRecruitInfoDialogProperties");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
