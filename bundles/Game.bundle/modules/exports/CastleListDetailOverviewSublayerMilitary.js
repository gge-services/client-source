Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleListDetailOverviewSublayerMilitary(__s3param0) {
    var __s3local0 = this;
    __s3local0._currentFilter = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).itemList.scrollItemClass = __dep_export_CastleListDetailOverviewItemMilitary.CastleListDetailOverviewItemMilitary;
    __s3local0.subLayerDisp.tab_all.toolTipText = "dialog_listOverview_tabMilitaryAll_tt";
    __s3local0.subLayerDisp.tab_attackUnits.toolTipText = "attackunit";
    __s3local0.subLayerDisp.tab_defenceUnits.toolTipText = "defenceunit";
    __s3local0.subLayerDisp.tab_attackTools.toolTipText = "attackTools";
    __s3local0.subLayerDisp.tab_defenceTools.toolTipText = "defenceTools";
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButtons([__s3local0.subLayerDisp.tab_all, __s3local0.subLayerDisp.tab_attackUnits, __s3local0.subLayerDisp.tab_defenceUnits, __s3local0.subLayerDisp.tab_attackTools, __s3local0.subLayerDisp.tab_defenceTools]);
    new __dep_exact_84d43d9c404bd4d8.BasicButtonGroup([__s3local0.subLayerDisp.tab_all.basicButton, __s3local0.subLayerDisp.tab_attackUnits.basicButton, __s3local0.subLayerDisp.tab_defenceUnits.basicButton, __s3local0.subLayerDisp.tab_attackTools.basicButton, __s3local0.subLayerDisp.tab_defenceTools.basicButton]).selectButton(__s3local0.subLayerDisp.tab_all.basicButton);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleListDetailOverviewSublayerMilitary, __s1param0);
  CastleListDetailOverviewSublayerMilitary.prototype.onClick = function (__s5param0) {
    __s1param0.prototype.onClick.call(this, __s5param0);
    switch (__s5param0.target) {
      case this.subLayerDisp.tab_all:
        this.currentFilter = CastleListDetailOverviewSublayerMilitary.FILTER_ALL;
        break;
      case this.subLayerDisp.tab_attackUnits:
        this.currentFilter = CastleListDetailOverviewSublayerMilitary.FILTER_UNITS_ATTACK;
        break;
      case this.subLayerDisp.tab_defenceUnits:
        this.currentFilter = CastleListDetailOverviewSublayerMilitary.FILTER_UNITS_DEFENCE;
        break;
      case this.subLayerDisp.tab_attackTools:
        this.currentFilter = CastleListDetailOverviewSublayerMilitary.FILTER_TOOLS_ATTACK;
        break;
      case this.subLayerDisp.tab_defenceTools:
        this.currentFilter = CastleListDetailOverviewSublayerMilitary.FILTER_TOOLS_DEFENCE;
    }
  };
  Object.defineProperty(CastleListDetailOverviewSublayerMilitary.prototype, "currentFilter", {
    get: function () {
      return this._currentFilter;
    },
    set: function (__s10param0) {
      this._currentFilter = __s10param0;
      this.fillList(false);
    },
    enumerable: true,
    configurable: true
  });
  CastleListDetailOverviewSublayerMilitary.__initialize_static_members = function () {
    CastleListDetailOverviewSublayerMilitary.FILTER_ALL = 0;
    CastleListDetailOverviewSublayerMilitary.FILTER_UNITS_ATTACK = 1;
    CastleListDetailOverviewSublayerMilitary.FILTER_UNITS_DEFENCE = 2;
    CastleListDetailOverviewSublayerMilitary.FILTER_TOOLS_ATTACK = 3;
    CastleListDetailOverviewSublayerMilitary.FILTER_TOOLS_DEFENCE = 4;
  };
  return CastleListDetailOverviewSublayerMilitary;
}(require("gge-module:export_CastleListDetailOverviewSublayer").CastleListDetailOverviewSublayer);
exports.CastleListDetailOverviewSublayerMilitary = __s0local0;
var __dep_export_CastleListDetailOverviewItemMilitary = require("gge-module:export_CastleListDetailOverviewItemMilitary");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
__s0local0.__initialize_static_members();
