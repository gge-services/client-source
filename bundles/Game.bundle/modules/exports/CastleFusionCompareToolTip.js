Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function CastleFusionCompareToolTip() {}
  CastleFusionCompareToolTip.showToolTip = function (__s5param0, __s5param1, __s5param2, __s5param3, __s5param4 = 0, __s5param5 = 0) {
    if (!CastleFusionCompareToolTip._clip || !CastleFusionCompareToolTip._clip.isLoaded) {
      CastleFusionCompareToolTip._clip ||= new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(CastleFusionCompareToolTip.assetName, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CastleFusionCompareToolTip.assetName));
      CastleFusionCompareToolTip._clip.doWhenLoaded(function () {
        CastleFusionCompareToolTip.showToolTip(__s5param0, __s5param1, __s5param2, __s5param3, __s5param4, __s5param5);
      });
      return;
    }
    if (__s5param1 && __s5param2 && __s5param3 && __s5param3.xmlCurrencyVO && __s5param3.xmlCurrencyVO.tier != 0) {
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_copy0, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("fusionXP")).autoFitToBounds = true;
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_copy1, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("bonusFusionXPChance")).autoFitToBounds = true;
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_copy2, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("bonusFusionXPChance_chance")).autoFitToBounds = true;
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_copy3, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("bonusFusionXPChance_boost")).autoFitToBounds = true;
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_copy4, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("bonusFusionXP")).autoFitToBounds = true;
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_copy5, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("bonusFusionXPTotal")).autoFitToBounds = true;
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_copy6, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_decoForge_fusionBreakdown_desc")).autoFitToBounds = true;
      var __s5local0;
      var __s5local1 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getFusionXPFromSource(__s5param1.getCurrentLevel(), __s5param2.getCurrentLevel()));
      var __s5local2 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getBonusFusionXPChance(CastleFusionCompareToolTip.baseBonusFusionXPChance, __s5param1.getCurrentLevel(), __s5param2.getCurrentLevel(), __s5param3.xmlCurrencyVO.tier, CastleFusionCompareToolTip.getMinimumCatalystTier(__s5param2.getCurrentLevel())));
      var __s5local3 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getBonusFusionXPChance(CastleFusionCompareToolTip.baseBonusFusionXPChance, __s5param1.getCurrentLevel(), __s5param2.getCurrentLevel(), __s5param3.xmlCurrencyVO.tier, CastleFusionCompareToolTip.getMinimumCatalystTier(__s5param2.getCurrentLevel())) + CastleFusionCompareToolTip.premiumBonusFusionXPChance);
      var __s5local4 = __dep_exact_f855840627e6e145.int(Math.min(__s5local2, 100));
      var __s5local5 = __s5local2 - __s5local4;
      var __s5local6 = __s5local3 - 100;
      var __s5local7 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getBonusFusionXPWithForgeMax(__s5param1.getCurrentLevel(), __s5param2.getCurrentLevel(), CastleFusionCompareToolTip.forgeLevel));
      var __s5local8 = __dep_exact_f855840627e6e145.int(__s5local7 + __dep_exact_26a421b704832cff.FusionConst.getBonusFusionXPBoost(__s5local7, __s5local2, 0));
      var __s5local9 = __dep_exact_f855840627e6e145.int(__s5local7 + __dep_exact_26a421b704832cff.FusionConst.getBonusFusionXPBoost(__s5local7, __s5local2, CastleFusionCompareToolTip.premiumBonusFusionXPChance));
      if (__s5local2 < 100) {
        var __s5local10 = __s5local1;
        var __s5local11 = __s5local10 + __s5local8;
        __s5local0 = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_NOMINAL_ADD, [__s5local10]) + "\n" + __dep_exact_92d05af59ee2ff30.Localize.text("or") + "\n" + __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_NOMINAL_ADD, [__s5local11]);
      } else {
        __s5local0 = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_NOMINAL_ADD, [__s5local1 + __s5local8]);
      }
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_norm0, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("fusionNormal")).autoFitToBounds = true;
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_norm1, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_NOMINAL_ADD, [__s5local1]));
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_norm2, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, [__s5local2]));
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_norm3, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, [__s5local4]));
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_norm4, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, [__s5local5]));
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_norm5, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_NOMINAL_ADD, [__s5local8]));
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_norm6, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s5local0));
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_prem0, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("fusionPremium")).autoFitToBounds = true;
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_prem1, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_NOMINAL_ADD, [__s5local1]));
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_prem2, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, [__s5local3]));
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_prem3, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, [100]));
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_prem4, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, [__s5local6]));
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_prem5, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_NOMINAL_ADD, [__s5local9]));
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_prem6, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_NOMINAL_ADD, [__s5local1 + __s5local9]));
      CastleFusionCompareToolTip.positionDisp(__s5param0, __s5param4, __s5param5);
    }
  };
  CastleFusionCompareToolTip.getMinimumCatalystTier = function (__s13param0) {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.fusionForgeData.xml.getMinimumCatalystTier(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID, __s13param0));
  };
  Object.defineProperty(CastleFusionCompareToolTip, "baseBonusFusionXPChance", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.fusionForgeData.xml.getFusionSystem(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID).baseBonusFusionXPChance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFusionCompareToolTip, "premiumBonusFusionXPChance", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.fusionForgeData.xml.getFusionSystem(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID).premiumBonusFusionXPChance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFusionCompareToolTip, "forgeLevel", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.fusionForgeData.getForge(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID).level;
    },
    enumerable: true,
    configurable: true
  });
  CastleFusionCompareToolTip.positionDisp = function (__s21param0, __s21param1 = 0, __s21param2 = 0) {
    var __s21local0 = __s21param0.localToGlobal(new __s0local0(0, 0));
    var __s21local1 = __dep_exact_f855840627e6e145.int(__s21local0.x + __s21param1);
    var __s21local2 = __dep_exact_f855840627e6e145.int(Math.max(CastleFusionCompareToolTip.disp.height, __s21local0.y) - __s21param0.height / 2 + __s21param2);
    if (__s21local2 - CastleFusionCompareToolTip.disp.height < 0) {
      __s21local2 = __dep_exact_f855840627e6e145.int(Math.max(CastleFusionCompareToolTip.disp.height, __s21local0.y) + __s21param0.height / 2 - __s21param2 + CastleFusionCompareToolTip.disp.height);
    }
    CastleFusionCompareToolTip.disp.x = __s21local1;
    CastleFusionCompareToolTip.disp.y = __s21local2;
    CastleFusionCompareToolTip.disp.mouseChildren = false;
    CastleFusionCompareToolTip.initDisp.visible = true;
    CastleFusionCompareToolTip.disp.visible = true;
  };
  Object.defineProperty(CastleFusionCompareToolTip, "disp", {
    get: function () {
      if (CastleFusionCompareToolTip._clip && CastleFusionCompareToolTip._clip.currentshownDisplayObject) {
        return CastleFusionCompareToolTip._clip.currentshownDisplayObject;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFusionCompareToolTip, "initDisp", {
    get: function () {
      CastleFusionCompareToolTip._clip ||= new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(CastleFusionCompareToolTip.assetName, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CastleFusionCompareToolTip.assetName));
      return CastleFusionCompareToolTip._clip;
    },
    enumerable: true,
    configurable: true
  });
  CastleFusionCompareToolTip.hideToolTip = function () {
    if (CastleFusionCompareToolTip.disp) {
      CastleFusionCompareToolTip.disp.visible = false;
    }
    if (CastleFusionCompareToolTip.initDisp) {
      CastleFusionCompareToolTip.initDisp.visible = false;
    }
  };
  Object.defineProperty(CastleFusionCompareToolTip, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleFusionCompareToolTip.__initialize_static_members = function () {
    CastleFusionCompareToolTip.assetName = "FusionCompareTooltip";
  };
  return CastleFusionCompareToolTip;
}();
exports.CastleFusionCompareToolTip = __s0local1;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
__s0local1.__initialize_static_members();
