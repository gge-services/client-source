Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_ClientConstFusion = require("gge-module:export_ClientConstFusion");
var __s0local0 = function (__s1param0) {
  function DecorationForgeCatalystConversionDialogInfoBoxAssemble(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DecorationForgeCatalystConversionDialogInfoBoxAssemble, __s1param0);
  DecorationForgeCatalystConversionDialogInfoBoxAssemble.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("fusionAssemble"))).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_buttons.btn_execute.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("fusionAssemble")).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_blocked.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_decoForge_catalystConversion_notAssemble")).autoFitToBounds = true;
  };
  DecorationForgeCatalystConversionDialogInfoBoxAssemble.prototype.update = function (__s7param0 = true) {
    __s1param0.prototype.update.call(this, __s7param0);
    if (this.catalystVO) {
      var __s7local0 = __dep_export_CastleModel.CastleModel.fusionForgeData.xml.getCatalystInfo(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID, this.catalystVO.id);
      this.disp.mc_blocked.visible = !!__s7local0.deprecated || !(__s7local0.costDecoDust > 0);
    }
  };
  DecorationForgeCatalystConversionDialogInfoBoxAssemble.prototype.updateValues = function () {
    __s1param0.prototype.updateValues.call(this);
    var __s10local0 = __dep_exact_f855840627e6e145.int(this.catalystVO.amount);
    var __s10local1 = __dep_exact_f855840627e6e145.int(this.getSelectedAmount());
    if (__s10local1 <= 0) {
      __s10local1 = 1;
    }
    var __s10local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.fusionForgeData.getForge(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID).currentEnergy);
    var __s10local3 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.fusionForgeData.xml.getFusionSystem(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID).assembleCatalystEnergyCost) * __s10local1;
    var __s10local4 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_DECO_DUST));
    var __s10local5 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.fusionForgeData.xml.getCatalystInfo(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID, this.catalystVO.id).costDecoDust) * __s10local1;
    this.fillValue(this.getValueMc(0), 1, __s10local0 + __s10local1, __s10local1);
    this.fillValue(this.getValueMc(1), 2, __s10local2 - __s10local3, -__s10local3);
    this.fillValue(this.getValueMc(2), 3, __s10local4 - __s10local5, -__s10local5);
  };
  DecorationForgeCatalystConversionDialogInfoBoxAssemble.prototype.getMaxSelectableValue = function () {
    var __s13local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_DECO_DUST));
    var __s13local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.fusionForgeData.xml.getCatalystInfo(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID, this.catalystVO.id).costDecoDust);
    if (__s13local1 == 0) {
      return 0;
    } else {
      return __dep_exact_f855840627e6e145.int(__s13local0 / __s13local1);
    }
  };
  DecorationForgeCatalystConversionDialogInfoBoxAssemble.prototype.getAffordableEnergy = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.fusionForgeData.xml.getFusionSystem(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID).assembleCatalystEnergyCost * this.getSelectedAmount());
  };
  DecorationForgeCatalystConversionDialogInfoBoxAssemble.prototype.getConversionDirection = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_ClientConstFusion.ClientConstFusion.CATALYST_CONVERSION_DIRECTION_ASSEMBLE);
  };
  return DecorationForgeCatalystConversionDialogInfoBoxAssemble;
}(require("gge-module:export_ADecorationForgeCatalystConversionDialogInfoBox").ADecorationForgeCatalystConversionDialogInfoBox);
exports.DecorationForgeCatalystConversionDialogInfoBoxAssemble = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
