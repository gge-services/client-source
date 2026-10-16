Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicIngameUIComponent = require("gge-module:export_BasicIngameUIComponent");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function InfoTooltipExpansion() {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, new Library.CastleInterfaceElements.ExpansionTooltip()) || this).infoToolTip.mouseChildren = false;
    __s3local0.infoToolTip.mouseEnabled = false;
    __s3local0.iCostC1Txt = __s3local0.textFieldManager.registerTextField(__s3local0.infoToolTip.txt_textCost, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("cost"));
    __s3local0.iCostC2Txt = __s3local0.textFieldManager.registerTextField(__s3local0.infoToolTip.txt_textCostPremium, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("cost"));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(InfoTooltipExpansion, __s1param0);
  InfoTooltipExpansion.prototype.updateMenuPosition = function () {
    if (this._target && this._target.uiPos && this._target.uiDisp && this._target.uiDisp.stage) {
      var __s5local0 = this._target.uiDisp.localToGlobal(new __s0local0(this._target.uiDisp.stage.x + this._target.uiDisp.width / 2, this._target.uiDisp.stage.y + this._target.uiDisp.height / 2));
      this.disp.x = __s5local0.x;
      this.disp.y = __s5local0.y;
    } else {
      this.hide();
    }
  };
  InfoTooltipExpansion.prototype.initComponent = function () {
    var __s9local0 = 0;
    if (this.targetExpansionVO) {
      var __s9local1;
      if (__dep_exact_81dacdf05bd32292.getQualifiedClassName(this._target.uiDisp).indexOf("ExpandArrow_Normal_") >= 0) {
        this.iCostC1Txt.visible = true;
        this.iCostC2Txt.visible = false;
        if (this.targetExpansionVO.isSceatLocked) {
          this.textFieldManager.registerTextField(this.infoToolTip.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_needLegendTemple_skill_header"));
        } else if (this.targetExpansionVO.userHasLevelForBuyNormal) {
          if (this.targetExpansionVO.userHasResourcesForBuy) {
            this.textFieldManager.registerTextField(this.infoToolTip.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("expansion_buy"));
          } else {
            this.textFieldManager.registerTextField(this.infoToolTip.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("expansion_notEnoughResources"));
          }
        } else {
          __s9local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.ConstructionConst.getExpandLevelForResources(__dep_export_Iso.Iso.data.objects.groundObjects.expansionAmount + 1));
          this.textFieldManager.registerTextField(this.infoToolTip.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("expansion_higherLevelNeeded", [__s9local0]));
        }
        __s9local1 = __dep_export_CastleModel.CastleModel.expansionCostsData.getExpandCostNormal();
        __dep_export_CostHelper.CostHelper.initAsCosts(__s9local1, this.infoToolTip);
      } else {
        this.iCostC2Txt.visible = true;
        this.iCostC1Txt.visible = false;
        if (this.targetExpansionVO.userHasLevelForBuyPremium) {
          this.textFieldManager.registerTextField(this.infoToolTip.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("expansion_buyPremium"));
        } else {
          __s9local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.ConstructionConst.getExpandLevelForC2(__dep_export_Iso.Iso.data.objects.groundObjects.expansionAmount + 1));
          this.textFieldManager.registerTextField(this.infoToolTip.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("expansion_higherLevelNeeded", [__s9local0]));
        }
        var __s9local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_export_CastleModel.CastleModel.expansionCostsData.getExpandCostC2()));
        __s9local1 = __dep_export_CollectableManager.CollectableManager.parser.createGoodsListSave(new __dep_export_CollectableItemC2VO.CollectableItemC2VO(__s9local2));
        __dep_export_CostHelper.CostHelper.initAsCosts(__s9local1, this.infoToolTip);
      }
      __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.infoToolTip, 0.2, {
        alpha: 0
      }, {
        alpha: 1,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
      });
    }
  };
  Object.defineProperty(InfoTooltipExpansion.prototype, "worldLayer", {
    get: function () {
      return __dep_export_Iso.Iso.renderer.layers.transformLayer;
    },
    set: function (__s23param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicIngameUIComponent.BasicIngameUIComponent.prototype, "worldLayer").set.call(this, __s23param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfoTooltipExpansion.prototype, "infoToolTip", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfoTooltipExpansion.prototype, "targetExpansionVO", {
    get: function () {
      return this._target.expansionVO;
    },
    enumerable: true,
    configurable: true
  });
  InfoTooltipExpansion.__initialize_static_members = function () {
    InfoTooltipExpansion.NAME = "InfoTooltipExpansion";
  };
  return InfoTooltipExpansion;
}(__dep_export_BasicIngameUIComponent.BasicIngameUIComponent);
exports.InfoTooltipExpansion = __s0local1;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableItemC2VO = require("gge-module:export_CollectableItemC2VO");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
__s0local1.__initialize_static_members();
