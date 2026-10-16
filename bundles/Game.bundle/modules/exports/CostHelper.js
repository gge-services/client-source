Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __s0local0 = createjs.TextField;
var __s0local1 = createjs.Point;
var __s0local2 = function () {
  function CostHelper() {}
  CostHelper.setCostColor = function (__s5param0, __s5param1) {
    __s5param0.textColor = __s5param1 ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
  };
  CostHelper.getAvailableGoods = function (__s7param0) {
    if (__dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_RESOURCES.indexOf(__s7param0.type) >= 0) {
      return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__s7param0.type).amount);
    } else {
      return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.currencyData.getAmountByType(__s7param0));
    }
  };
  CostHelper.getAvailableGoodsFromCollectableList = function (__s11param0, __s11param1) {
    if (__s11param0.containsTypeVO(__s11param1)) {
      return __dep_exact_f855840627e6e145.int(__s11param0.getAmountOrDefaultByTypeVO(__s11param1));
    } else if (__dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_RESOURCES.indexOf(__s11param1.type) < 0) {
      return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.currencyData.getAmountByType(__s11param1));
    } else {
      return 0;
    }
  };
  CostHelper.getAvailableGoodsFromDetailedCastleVO = function (__s16param0, __s16param1) {
    if (__dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_RESOURCES.indexOf(__s16param1.type) >= 0) {
      return __dep_exact_f855840627e6e145.int(__s16param0.getResource(__s16param1.type));
    } else {
      return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.currencyData.getAmountByType(__s16param1));
    }
  };
  CostHelper.canAfford = function (__s20param0) {
    for (var __s20local0 = 0, __s20local1 = __s20param0.getCostTypes(); __s20local0 < __s20local1.length; __s20local0++) {
      var __s20local2 = __s20local1[__s20local0];
      if (CostHelper.getAvailableGoods(__s20local2) < __s20param0.getCost(__s20local2)) {
        return false;
      }
    }
    return true;
  };
  CostHelper.canAffordByStorage = function (__s25param0, __s25param1) {
    if (!__s25param0) {
      return true;
    }
    if (!__s25param1) {
      return false;
    }
    for (var __s25local0 = 0; __s25local0 < __s25param0.length; ++__s25local0) {
      var __s25local1 = __s25param0.getItemByIndex(__s25local0);
      var __s25local2 = __s25param1.getItemByType(__s25local1.itemType);
      if (!__s25local2 || __s25local1.amount > __s25local2.amount) {
        return false;
      }
    }
    return true;
  };
  CostHelper.initAsResources = function (__s32param0, __s32param1) {
    CostHelper.initCollectables(__s32param0, __s32param1, false, false, null);
  };
  CostHelper.initAsCosts = function (__s34param0, __s34param1, __s34param2 = false, __s34param3 = true, __s34param4 = null, __s34param5 = null) {
    CostHelper.initCollectables(__s34param0, __s34param1, false, true, null, __s34param2, __s34param3, __s34param4, __s34param5);
  };
  CostHelper.initAsRefund = function (__s36param0, __s36param1) {
    CostHelper.initCollectables(__s36param0, __s36param1, true, false, null);
  };
  CostHelper.initAsCostsFromOtherStorage = function (__s38param0, __s38param1, __s38param2 = true, __s38param3 = null) {
    CostHelper.initCollectables(__s38param0, __s38param1, false, __s38param2, __s38param3);
  };
  CostHelper.initCollectables = function (__s40param0, __s40param1, __s40param2 = false, __s40param3 = true, __s40param4 = null, __s40param5 = false, __s40param6 = true, __s40param7 = null, __s40param8 = null) {
    __s40param8 ||= new __s0local1(25, 25);
    var __s40local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__s40param6 ? __dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_COST_LIST : __dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_COST_LIST_NO_TOOLTIP, __s40param8);
    __s40local0.tooltip.useAmount = false;
    __s40local0.costTextfield.useOtherResourceStorage = __s40param4;
    __s40local0.costTextfield.usePlusOnPositiveValues = __s40param2;
    __s40local0.costTextfield.enableMarkOnNotEnough = __s40param3;
    __s40local0.costTextfield.useKiloAbbreviationForAmount = __s40param5;
    var __s40local1 = __s40param1.txt_specialCost;
    if (__s40local1) {
      __s40local1.visible = false;
    }
    if (__s40param7 != null) {
      __s40param7.destroyCollectableRenderList();
    }
    if (__s40param7) {
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(__s40param7, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(__s40param1, "txt_cost").addTextfields("txt_cost"), __s40param0, __s40local0);
    } else {
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItems(new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(__s40param1, "txt_cost").addTextfields("txt_cost"), __s40param0, __s40local0, null, function afterRenderFunc(__s46param0) {
        if (__s40param7 == null) {
          __s46param0.destroy();
        }
      });
    }
  };
  CostHelper.setCostC2TextFieldColor = function (__s49param0, __s49param1) {
    CostHelper.setCurrencyTextFieldColor(__s49param0, new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.C2), __s49param1);
  };
  CostHelper.setCurrencyTextFieldColor = function (__s51param0, __s51param1, __s51param2) {
    if (CostHelper.getAvailableGoods(__s51param1) < __s51param2) {
      __s51param0.color = __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    } else {
      __s51param0.color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    }
  };
  CostHelper.showNotEnoughSpecialCurrencyDialog = function (__s55param0) {
    var __s55local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_notEnoughSpecialCurrencyDialog_copy");
    if (__s55param0 != null) {
      for (var __s55local1 = 0, __s55local2 = __s55param0; __s55local1 < __s55local2.length; __s55local1++) {
        var __s55local3 = __s55local2[__s55local1];
        if (__s55local3 !== undefined) {
          var __s55local4 = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 1, __s55local3);
          __s55local0 += "\n" + __dep_exact_92d05af59ee2ff30.Localize.text(__s55local4.getNameTextId());
        }
      }
    }
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __s55local0));
  };
  CostHelper.showGenericNotEnoughCurrencyDialog = function (__s61param0) {
    var __s61local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_notEnoughSpecialCurrencyDialog_copy");
    if (__s61param0 != null) {
      for (var __s61local1 = 0, __s61local2 = __s61param0; __s61local1 < __s61local2.length; __s61local1++) {
        var __s61local3 = __s61local2[__s61local1];
        if (__s61local3 !== undefined) {
          var __s61local4 = __dep_export_CollectableHelper.CollectableHelper.createVO(__s61local3.type, 1, __s61local3.id);
          __s61local0 += "\n" + __dep_exact_92d05af59ee2ff30.Localize.text(__s61local4.getNameTextId());
        }
      }
    }
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __s61local0));
  };
  CostHelper.validateCostBuyCommand = function (__s67param0, __s67param1 = null) {
    var __s67local0 = new __dep_export_CollectablesCosts.CollectablesCosts(__s67param0.getFilteredListByType(__dep_export_CollectableEnum.CollectableEnum.C2));
    var __s67local1 = new __dep_export_CollectablesCosts.CollectablesCosts(__s67param0.getFilteredListByType(__dep_export_CollectableEnum.CollectableEnum.C1));
    var __s67local2 = new __dep_export_CollectablesCosts.CollectablesCosts(__s67param0.getFilteredListByTypes(__dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_RESOURCES));
    var __s67local3 = new __dep_export_CollectablesCosts.CollectablesCosts(__s67param0.getFilteredListByType(__dep_export_CollectableEnum.CollectableEnum.AQUAMARINE));
    var __s67local4 = new __dep_export_CollectablesCosts.CollectablesCosts(__s67param0.getFilteredListByType(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY));
    var __s67local5 = new __dep_export_CollectablesCosts.CollectablesCosts(__s67param0.getFilteredListByTypeVOs([new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_REFINED_LUMBER), new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_REFINED_STONE)]));
    if (CostHelper.canAfford(__s67local0)) {
      if (CostHelper.canAfford(__s67local3)) {
        if (CostHelper.canAfford(__s67local2)) {
          if (CostHelper.canAfford(__s67local5)) {
            if (CostHelper.canAfford(__s67local1)) {
              if (CostHelper.canAfford(__s67local4)) {
                if (__s67param1) {
                  __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(__s67param1);
                }
                return true;
              }
              CostHelper.showGenericNotEnoughCurrencyDialog(__s67local4.getCostTypes());
            } else {
              __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNoMoneyC1Dialog.CastleNoMoneyC1Dialog, new __dep_export_CastleNoMoneyC1DialogProperties.CastleNoMoneyC1DialogProperties());
            }
          } else {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_DarkOkDialog.DarkOkDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardOkDialogProperties("dialog_refinedResources_insufficient_header", "dialog_refinedResources_insufficient_desc"));
          }
        } else {
          var __s67local6 = new __dep_export_CastleResourceWaitDialogProperties.CastleResourceWaitDialogProperties(__s67param1.getCmdId());
          __s67local6.parseCosts(__s67local2.collectables);
          __s67local6.parseSkipCommand(__s67param1);
          var __s67local7 = require("gge-module:export_CastleResourceWaitDialog").CastleResourceWaitDialog;
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__s67local7, __s67local6);
        }
      } else {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_ModernPackageShopResourceTipDialog.ModernPackageShopResourceTipDialog, new __dep_export_ModernPackageShopResourceTipDialogProperties.ModernPackageShopResourceTipDialogProperties(null, [new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.AQUAMARINE)]));
      }
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNoMoneyC2Dialog.CastleNoMoneyC2Dialog, new __dep_export_CastleNoMoneyC2DialogProperties.CastleNoMoneyC2DialogProperties(), true, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_TOP);
    }
    return false;
  };
  CostHelper.modernizeAllCostTextFieldColors = function (__s81param0, __s81param1 = __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT_BRIGHT, __s81param2 = __dep_export_ClientConstColor.ClientConstColor.MODERN_RED2) {
    if (__s81param0.children) {
      __s81param0.children.forEach(function (__s84param0) {
        return CostHelper.modernizeAllCostTextFieldColors(__s84param0);
      });
    } else if (__s81param0 instanceof __s0local0) {
      CostHelper.modernizeCostTextFieldColor(__s81param0, __s81param1, __s81param2);
    }
  };
  CostHelper.modernizeCostTextFieldColor = function (__s87param0, __s87param1 = __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT_BRIGHT, __s87param2 = __dep_export_ClientConstColor.ClientConstColor.MODERN_RED2) {
    var __s87local0 = __dep_export_ClientConstColor.ClientConstColor.uint32toHexString(__dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR);
    var __s87local1 = __dep_export_ClientConstColor.ClientConstColor.uint32toHexString(__dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR);
    if (__s87param0.textColor == __s87local0) {
      __s87param0.textColor = __s87param1;
    } else if (__s87param0.textColor == __s87local1) {
      __s87param0.textColor = __s87param2;
    }
  };
  return CostHelper;
}();
exports.CostHelper = __s0local2;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleNoMoneyC1Dialog = require("gge-module:export_CastleNoMoneyC1Dialog");
var __dep_export_CastleNoMoneyC1DialogProperties = require("gge-module:export_CastleNoMoneyC1DialogProperties");
var __dep_export_CastleNoMoneyC2Dialog = require("gge-module:export_CastleNoMoneyC2Dialog");
var __dep_export_CastleNoMoneyC2DialogProperties = require("gge-module:export_CastleNoMoneyC2DialogProperties");
var __dep_export_CastleResourceWaitDialogProperties = require("gge-module:export_CastleResourceWaitDialogProperties");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_DarkOkDialog = require("gge-module:export_DarkOkDialog");
var __dep_export_ModernPackageShopResourceTipDialog = require("gge-module:export_ModernPackageShopResourceTipDialog");
var __dep_export_ModernPackageShopResourceTipDialogProperties = require("gge-module:export_ModernPackageShopResourceTipDialogProperties");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CollectablesCosts = require("gge-module:export_CollectablesCosts");
