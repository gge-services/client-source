Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstPackages = require("gge-module:export_ClientConstPackages");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ADecorationForgeSelectionListItemVE = require("gge-module:export_ADecorationForgeSelectionListItemVE");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function DecorationForgeSelectSourceAndCatalystDialogListItemSourceVE(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DecorationForgeSelectSourceAndCatalystDialogListItemSourceVE, __s1param0);
  DecorationForgeSelectSourceAndCatalystDialogListItemSourceVE.prototype.update = function () {
    __s1param0.prototype.update.call(this);
    var __s5local0 = this.itemVO ? this.itemVO.data : null;
    this.disp.visible = __s5local0 != null;
    if (__s5local0) {
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.disp.mc_item).addInfoBtn(this.disp.btn_info), __s5local0, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, new __s0local0(95, 59)));
      this.disp.mc_unique.visible = this.sourceBuildingVO.isUnique();
      var __s5local1 = this.disp.mc_item.mc_amount;
      __s5local1.visible = __s5local0.amount > 0 && !this.disp.mc_unique.visible;
      if (__s5local1.visible) {
        __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s5local1.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s5local0.amount));
      }
      var __s5local2 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getFusionXPFromSource(this.sourceBuildingVO.fusionInfoVO.getCurrentLevel(), this.itemVO.targetDecoItemVO.buildingVO.fusionInfoVO.getCurrentLevel()));
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_xp, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s5local2));
      var __s5local3 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getBonusFusionXPChanceFromSource(__dep_export_CastleModel.CastleModel.fusionForgeData.xml.getFusionSystem(__dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID).baseBonusFusionXPChance, this.sourceBuildingVO.fusionInfoVO.getCurrentLevel(), this.itemVO.targetDecoItemVO.buildingVO.fusionInfoVO.getCurrentLevel()));
      this.disp.mc_item.mc_empty.visible = this.isSourceFeederDeco && __s5local0.amount == 0;
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_bonusChance, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_percentage", [__s5local3]));
    }
  };
  Object.defineProperty(DecorationForgeSelectSourceAndCatalystDialogListItemSourceVE.prototype, "isSourceFeederDeco", {
    get: function () {
      return this.sourceBuildingVO.fusionInfoVO.isFusionSource && !this.sourceBuildingVO.fusionInfoVO.isFusionTarget;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectSourceAndCatalystDialogListItemSourceVE.prototype, "sourceBuildingVO", {
    get: function () {
      return this.itemVO.data.buildingVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectSourceAndCatalystDialogListItemSourceVE.prototype, "showBuyButton", {
    get: function () {
      return this.isSourceFeederDeco && !!this.buyPackageVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectSourceAndCatalystDialogListItemSourceVE.prototype, "buyPackageVO", {
    get: function () {
      var __s15local0;
      for (var __s15local1 = 0, __s15local2 = __dep_export_CastleModel.CastleModel.fusionForgeData.xml.getFusionShopPackages(__dep_export_ClientConstPackages.ClientConstPackages.FUSION_SHOP_ID_HARD); __s15local1 < __s15local2.length; __s15local1++) {
        var __s15local3 = __s15local2[__s15local1];
        if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s15local3.reward, "CollectableItemBuildingVO") && __s15local3.reward.buildingVO.wodId == this.sourceBuildingVO.wodId) {
          __s15local0 = __s15local3;
          break;
        }
      }
      return __s15local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectSourceAndCatalystDialogListItemSourceVE.prototype, "isUseAble", {
    get: function () {
      return this.itemVO.data.amount != 0 || this.itemVO.data.buildingVO.isUnique();
    },
    enumerable: true,
    configurable: true
  });
  DecorationForgeSelectSourceAndCatalystDialogListItemSourceVE.prototype.isSelectable = function () {
    return this.isUseAble;
  };
  return DecorationForgeSelectSourceAndCatalystDialogListItemSourceVE;
}(__dep_export_ADecorationForgeSelectionListItemVE.ADecorationForgeSelectionListItemVE);
exports.DecorationForgeSelectSourceAndCatalystDialogListItemSourceVE = __s0local1;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
