Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTitle = require("gge-module:export_ClientConstTitle");
var __dep_export_CastleFameDataEvent = require("gge-module:export_CastleFameDataEvent");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleTitleMainDialogProperties = require("gge-module:export_CastleTitleMainDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleAllianceDialogFame(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.itxt_actLevel_title = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_actLevel_title, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(""));
    __s3local0.itxt_awards = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_awards, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(""));
    __s3local0.itxt_myFame = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_myFame.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __s3local0.itxt_boosterAmount = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_levelBar.txt_boosterAmount, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0]));
    __s3local0.itxt_actLevel = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_actLevel, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0]));
    __s3local0.itxt_copy = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_allianceFame_copy", [0]));
    __s3local0.itxt_booster = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_levelBar.txt_booster, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_allianceFame_copy", [0]));
    __s3local0.itxt_landmarksInfo_capital = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_landmarksInfo__duplicate__1_0_1.mc_capital.txt_value, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("value_multiplied", [0]));
    __s3local0.itxt_landmarksInfo_tradeCenter = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_landmarksInfo__duplicate__1_0_1.mc_tradeCenter.txt_value, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD, [0]));
    __s3local0.itxt_landmarksInfo_kingstower = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_landmarksInfo__duplicate__1_0_1.mc_kingstower.txt_value, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("value_percentage_add", [0]));
    __s3local0.itxt_landmarksInfo_monument = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_landmarksInfo__duplicate__1_0_1.mc_monument.txt_value, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("value_percentage_add", [0]));
    __s3local0.itxt_aquapoints = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_aquapoints.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0));
    __s3local0.itxt_landmarksInfo_laborartoryIron = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_laboratory.mc_bonusIron.txt_value, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("value_percentage_add", [0]));
    __s3local0.itxt_landmarksInfo_laborartoryCoal = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_laboratory.mc_bonusCoal.txt_value, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("value_percentage_add", [0]));
    __s3local0.itxt_landmarksInfo_laborartoryOliveoil = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_laboratory.mc_bonusOliveoil.txt_value, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("value_percentage_add", [0]));
    __s3local0.itxt_landmarksInfo_laborartoryGlass = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_laboratory.mc_bonusGlass.txt_value, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("value_percentage_add", [0]));
    __s3local0.subLayerDisp.mc_landmarksInfo__duplicate__1_0_1.mc_capital.mouseChildren = false;
    __s3local0.subLayerDisp.mc_landmarksInfo__duplicate__1_0_1.mc_tradeCenter.mouseChildren = false;
    __s3local0.subLayerDisp.mc_landmarksInfo__duplicate__1_0_1.mc_kingstower.mouseChildren = false;
    __s3local0.subLayerDisp.mc_landmarksInfo__duplicate__1_0_1.mc_monument.mouseChildren = false;
    __s3local0.subLayerDisp.mc_myFame.mouseChildren = false;
    __s3local0.subLayerDisp.mc_aquapoints.mouseChildren = false;
    __s3local0.subLayerDisp.mc_laboratory.mc_bonusIron.mouseChildren = false;
    __s3local0.subLayerDisp.mc_laboratory.mc_bonusCoal.mouseChildren = false;
    __s3local0.subLayerDisp.mc_laboratory.mc_bonusOliveoil.mouseChildren = false;
    __s3local0.subLayerDisp.mc_laboratory.mc_bonusGlass.mouseChildren = false;
    __s3local0.subLayerDisp.mc_laboratory.icon.mouseChildren = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceDialogFame, __s1param0);
  CastleAllianceDialogFame.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.fillAllianceLevelBars();
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleFameDataEvent.CastleFameDataEvent.UPDATE_DATA_ALLY_FAME, this.bindFunction(this.onUpdateFamePoints));
    var __s5local0;
    var __s5local1 = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO;
    if (this.allianceInfoVO.hasFameLevelCapReached) {
      this.itxt_actLevel_title.textContentVO.textId = "dialog_allianceFame_yourPoints";
      this.itxt_awards.textContentVO.textId = "";
    } else {
      this.itxt_actLevel_title.textContentVO.textId = "dialog_allianceFame_needFame";
      this.itxt_awards.textContentVO.textId = "dialog_allianceFame_awardForLevelUp";
    }
    this.itxt_copy.textContentVO.textId = "dialog_allianceFame_copy";
    this.itxt_copy.textContentVO.textReplacements = [__dep_exact_26a421b704832cff.AllianceConst.DAILY_FAME_LOSS * 100];
    this.itxt_booster.textContentVO.textId = "dialog_allianceFame_level";
    this.subLayerDisp.setChildIndex(this.subLayerDisp.mouseArea_allianceFame, this.subLayerDisp.numChildren - 1);
    this.subLayerDisp.mouseArea_allianceFame.toolTipText = "dialog_allianceFame_needPoints";
    this.subLayerDisp.mc_myFame.toolTipText = "dialog_allianceFame_yourPoints";
    this.subLayerDisp.btn_fame.toolTipText = "dialog_fame_title";
    this.subLayerDisp.mc_landmarksInfo__duplicate__1_0_1.mc_capital.toolTipText = "dialog_allianceCapitals_mechanicsTooltip";
    this.subLayerDisp.mc_landmarksInfo__duplicate__1_0_1.mc_tradeCenter.toolTipText = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_allianceMetropolis_mechanicsTooltip");
    this.subLayerDisp.mc_landmarksInfo__duplicate__1_0_1.mc_kingstower.toolTipText = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_allianceKingtower_mechanicsTooltip");
    this.subLayerDisp.mc_landmarksInfo__duplicate__1_0_1.mc_monument.toolTipText = "dialog_allianceMonument_mechanicsTooltip";
    this.subLayerDisp.mc_laboratory.mc_bonusIron.toolTipText = "dialog_allianceLaboratory_mechanicsTooltip";
    this.subLayerDisp.mc_laboratory.mc_bonusCoal.toolTipText = "dialog_allianceLaboratory_mechanicsTooltip";
    this.subLayerDisp.mc_laboratory.mc_bonusOliveoil.toolTipText = "dialog_allianceLaboratory_mechanicsTooltip";
    this.subLayerDisp.mc_laboratory.mc_bonusGlass.toolTipText = "dialog_allianceLaboratory_mechanicsTooltip";
    this.subLayerDisp.mc_laboratory.icon.toolTipText = "dialog_allianceLaboratory_mechanicsTooltip";
    this.subLayerDisp.mc_aquapoints.toolTipText = "dialog_allianceEiland_points_tooltip";
    this.itxt_landmarksInfo_capital.textContentVO.textReplacements = [__s5local1.landmarksList.capitals.length];
    this.itxt_landmarksInfo_tradeCenter.textContentVO.textReplacements = [__s5local1.landmarksList.getMetropolBonus()];
    this.itxt_landmarksInfo_kingstower.textContentVO.textReplacements = [__s5local1.landmarksList.getKingstowerBonus()];
    this.itxt_landmarksInfo_monument.textContentVO.textReplacements = [__s5local1.landmarksList.getMonumentBonus()];
    this.itxt_landmarksInfo_laborartoryIron.textContentVO.textReplacements = [__s5local1.landmarksList.getLaboratoryKingdomResourceBonus(__dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID)];
    this.itxt_landmarksInfo_laborartoryCoal.textContentVO.textReplacements = [__s5local1.landmarksList.getLaboratoryKingdomResourceBonus(__dep_exact_26a421b704832cff_3.WorldIce.KINGDOM_ID)];
    this.itxt_landmarksInfo_laborartoryOliveoil.textContentVO.textReplacements = [__s5local1.landmarksList.getLaboratoryKingdomResourceBonus(__dep_exact_26a421b704832cff_2.WorldDessert.KINGDOM_ID)];
    this.itxt_landmarksInfo_laborartoryGlass.textContentVO.textReplacements = [__s5local1.landmarksList.getLaboratoryKingdomResourceBonus(__dep_exact_26a421b704832cff_4.WorldVolcano.KINGDOM_ID)];
    this.itxt_aquapoints.textContentVO.numberValue = __s5local1.aquaPoints;
    if (__s5local0 = this.allianceInfoVO.hasFameLevelCapReached ? __s5local1.allianceCurrentFameLevelVO : __s5local1.allianceNextFameLevelVO) {
      __dep_export_CostHelper.CostHelper.initAsResources(__s5local0.awardList, this.subLayerDisp);
    }
    this.subLayerDisp.mc_overlay.visible = this.allianceInfoVO.allianceFamePointsNeedForNextLevel <= this.allianceInfoVO.allianceFamePointsHighestReached || this.allianceInfoVO.hasFameLevelCapReached;
    this.itxt_myFame.textContentVO.stringValue = new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.titleData.getPointsInSystem(__dep_export_ClientConstTitle.ClientConstTitle.GLORY_TITLE), true).compose();
    this.subLayerDisp.btn_fame.actLikeButton = true;
    this.subLayerDisp.btn_fame.mouseChildren = false;
  };
  CastleAllianceDialogFame.prototype.onUpdateFamePoints = function (__s10param0) {
    var __s10local0 = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO;
    if (__s10local0) {
      if (this.allianceInfoVO.allianceId == __s10local0.allianceId) {
        this.allianceInfoVO.updateAllyFame(__s10local0.allianceFamePoints, __s10local0.allianceFamePointsHighestReached);
      }
      this.fillAllianceLevelBars();
    }
  };
  CastleAllianceDialogFame.prototype.fillAllianceLevelBars = function () {
    this.itxt_boosterAmount.textContentVO.textId = __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
    this.itxt_boosterAmount.textContentVO.textReplacements = [this.allianceInfoVO.allianceFameLevel, __dep_export_CastleModel.CastleModel.allianceFameData.getLevelFromFamePoints(__dep_exact_26a421b704832cff.AllianceConst.FAME_CAP)];
    this.subLayerDisp.mc_levelBar.mc_bar.scaleX = this.allianceInfoVO.allianceFameLevel / __dep_export_CastleModel.CastleModel.allianceFameData.getLevelFromFamePoints(__dep_exact_26a421b704832cff.AllianceConst.FAME_CAP);
    this.subLayerDisp.mc_levelBar.mc_Arrow.x = this.subLayerDisp.mc_levelBar.mc_bar.x + this.subLayerDisp.mc_levelBar.mc_bar.width;
    var __s14local0 = 0;
    if (this.allianceInfoVO.hasFameLevelCapReached) {
      this.subLayerDisp.bar_level.scaleX = 1;
      __s14local0 = __dep_exact_f855840627e6e145.int(this.allianceInfoVO.allianceFamePointsNeedForThisLevel);
    } else {
      this.subLayerDisp.bar_level.scaleX = this.allianceInfoVO.allianceFamePercentActFameLevel;
      __s14local0 = __dep_exact_f855840627e6e145.int(this.allianceInfoVO.allianceFamePointsNeedForNextLevel);
    }
    this.itxt_actLevel.textContentVO.textId = __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
    this.itxt_actLevel.textContentVO.textReplacements = [new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(this.allianceInfoVO.allianceFamePoints), new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s14local0, {
      roundFunction: Math.ceil
    })];
  };
  CastleAllianceDialogFame.prototype.onMouseUp = function (__s18param0) {
    switch (__s18param0.target) {
      case this.subLayerDisp.btn_fame:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleTitleMainDialog.CastleTitleMainDialog, new __dep_export_CastleTitleMainDialogProperties.CastleTitleMainDialogProperties());
    }
  };
  CastleAllianceDialogFame.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30_1.Localize.text("help_allianceFame"));
  };
  Object.defineProperty(CastleAllianceDialogFame.prototype, "allianceInfoVO", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceDialogFame.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleFameDataEvent.CastleFameDataEvent.UPDATE_DATA_ALLY_FAME, this.bindFunction(this.onUpdateFamePoints));
  };
  return CastleAllianceDialogFame;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleAllianceDialogFame = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_CastleTitleMainDialog = require("gge-module:export_CastleTitleMainDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
