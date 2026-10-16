Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function AdvisorAttackOverviewComponent(__s3param0, __s3param1 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._isSummary = false;
    __s3local0._isSummary = __s3param1;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0.disp.txt_costTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s3param1 ? "generic_totalCost" : "generic_currentCost")).autoFitToBounds = true;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0.disp.txt_lossesTtile, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s3param1 ? "generic_totalLosses" : "generic_currentLosses")).autoFitToBounds = true;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0.disp.txt_lootTitle, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s3param1 ? "lootTotal" : "lootCurrent"))).autoFitToBounds = true;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0.disp.mc_gallantryPoints.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("advisor_Berimond_Gallantry_Points_Collected"))).autoFitToBounds = true;
    __s3local0.disp.icon_c1.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C1;
    __s3local0.disp.icon_c2.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    __s3local0.disp.icon_c3.toolTipText = "currency_name_PegasusTicket";
    __s3local0.disp.icon_units.toolTipText = "units";
    __s3local0.disp.icon_tools.toolTipText = "tools";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AdvisorAttackOverviewComponent, __s1param0);
  AdvisorAttackOverviewComponent.prototype.update = function (__s5param0) {
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_c1, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s5param0.lost.getAmountOrDefaultByTypeVO(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.C1))));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_c2, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s5param0.lost.getAmountOrDefaultByTypeVO(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.C2))));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_c3, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s5param0.lost.getAmountOrDefaultByTypeVO(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_PEGASUS_TICKET))));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_units, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s5param0.lostUnits));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_tools, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s5param0.lostTools));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_victory, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("advisor_AttackSummary_victory", [__s5param0.wins]));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_defeat, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("advisor_AttackSummary_defeat", [__s5param0.defeats]));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_notSent, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("advisor_AttackSummary_stopped", [__s5param0.stopped]));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_commanders, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_SIMPLE_COMP, [__dep_exact_92d05af59ee2ff30.Localize.text("commander"), " " + __s5param0.commanders])));
    this.disp.mc_gallantryPoints.visible = __s5param0.advisorType == __dep_exact_26a421b704832cff.AttackAdvisorConst.ADVISOR_TYPE_BERIMOND;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_gallantryPoints.txt_amount, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s5param0.gallantryPoints));
    var __s5local0 = new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.disp.mc_loot, "mc_item");
    var __s5local1 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(20, 20));
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, __s5local0, __s5param0.gained, __s5local1);
  };
  return AdvisorAttackOverviewComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.AdvisorAttackOverviewComponent = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
