Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleListDetailOverviewSublayerEconomy(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.offset = 0;
    __s3local0.maxItems = 7;
    __s3local0.itemList.scrollItemClass = __dep_export_CastleListDetailOverviewItemEconomy.CastleListDetailOverviewItemEconomy;
    __s3local0.subLayerDisp.icon_wood.toolTipText = "wood";
    __s3local0.subLayerDisp.icon_stone.toolTipText = "stone";
    __s3local0.subLayerDisp.icon_food.toolTipText = "food";
    __s3local0.subLayerDisp.icon_coal.toolTipText = "coal";
    __s3local0.subLayerDisp.icon_oil.toolTipText = "oliveoil";
    __s3local0.subLayerDisp.icon_glass.toolTipText = "glass";
    __s3local0.subLayerDisp.icon_iron.toolTipText = "iron";
    __s3local0.subLayerDisp.icon_honey.toolTipText = "honey";
    __s3local0.subLayerDisp.icon_mead.toolTipText = "mead";
    __s3local0.subLayerDisp.icon_beef.toolTipText = "beef";
    __s3local0.updateIcons();
    __s3local0.initBasicButtons([__s3local0.subLayerDisp.btn_left, __s3local0.subLayerDisp.btn_right]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleListDetailOverviewSublayerEconomy, __s1param0);
  CastleListDetailOverviewSublayerEconomy.prototype.updateIcons = function () {
    var __s5local0 = __dep_export_CastleModel.CastleModel.userData.isLegend;
    this.icons = [this.subLayerDisp.icon_wood, this.subLayerDisp.icon_stone, this.subLayerDisp.icon_food];
    if (__s5local0 || __dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(__dep_exact_26a421b704832cff_1.WorldIce.KINGDOM_ID)) {
      this.icons.push(this.subLayerDisp.icon_coal);
    }
    if (__s5local0 || __dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(__dep_exact_26a421b704832cff.WorldDessert.KINGDOM_ID)) {
      this.icons.push(this.subLayerDisp.icon_oil);
    }
    if (__s5local0 || __dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(__dep_exact_26a421b704832cff_2.WorldVolcano.KINGDOM_ID)) {
      this.icons.push(this.subLayerDisp.icon_glass);
    }
    if (__s5local0) {
      this.icons.push(this.subLayerDisp.icon_iron);
    }
    if (__s5local0 || __dep_export_CastleModel.CastleModel.userData.userLegendLevel >= __dep_export_CastleModel.CastleModel.areaData.activeStorage.minHoneyMeadLegendLevel) {
      this.icons.push(this.subLayerDisp.icon_honey);
    }
    if (__s5local0 || __dep_export_CastleModel.CastleModel.userData.userLegendLevel >= __dep_export_CastleModel.CastleModel.areaData.activeStorage.minHoneyMeadLegendLevel) {
      this.icons.push(this.subLayerDisp.icon_mead);
    }
    if (__s5local0 || __dep_export_CastleModel.CastleModel.userData.userLegendLevel >= __dep_export_CastleModel.CastleModel.areaData.activeStorage.minBeefLegendLevel) {
      this.icons.push(this.subLayerDisp.icon_beef);
    }
  };
  CastleListDetailOverviewSublayerEconomy.prototype.show = function (__s14param0) {
    __s1param0.prototype.show.call(this, __s14param0);
    this.updateIcons();
    var __s14local0 = __dep_export_CastleModel.CastleModel.userData.isLegend;
    this.subLayerDisp.icon_coal.visible = __s14local0 || __dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(__dep_exact_26a421b704832cff_1.WorldIce.KINGDOM_ID);
    this.subLayerDisp.icon_oil.visible = __s14local0 || __dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(__dep_exact_26a421b704832cff.WorldDessert.KINGDOM_ID);
    this.subLayerDisp.icon_glass.visible = __s14local0 || __dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(__dep_exact_26a421b704832cff_2.WorldVolcano.KINGDOM_ID);
    this.subLayerDisp.icon_honey.visible = __s14local0 || __dep_export_CastleModel.CastleModel.userData.userLegendLevel >= __dep_export_CastleModel.CastleModel.areaData.activeStorage.minHoneyMeadLegendLevel;
    this.subLayerDisp.icon_mead.visible = __s14local0 || __dep_export_CastleModel.CastleModel.userData.userLegendLevel >= __dep_export_CastleModel.CastleModel.areaData.activeStorage.minHoneyMeadLegendLevel;
    this.subLayerDisp.icon_beef.visible = __s14local0 || __dep_export_CastleModel.CastleModel.userData.userLegendLevel >= __dep_export_CastleModel.CastleModel.areaData.activeStorage.minBeefLegendLevel;
    this.subLayerDisp.icon_iron.visible = __s14local0;
    this.subLayerDisp.icon_food.gotoAndStop(__dep_export_CastleModel.CastleModel.userData.foodFrozen ? 2 : 1);
    this.subLayerDisp.icon_mead.gotoAndStop(__dep_export_CastleModel.CastleModel.userData.foodFrozen ? 2 : 1);
    this.subLayerDisp.icon_beef.gotoAndStop(__dep_export_CastleModel.CastleModel.userData.foodFrozen ? 2 : 1);
    this.subLayerDisp.icon_food.toolTipText = __dep_export_CastleModel.CastleModel.userData.foodFrozen ? "food_frozen" : "food";
    this.subLayerDisp.icon_mead.toolTipText = __dep_export_CastleModel.CastleModel.userData.foodFrozen ? "mead_frozen" : "mead";
    this.subLayerDisp.icon_beef.toolTipText = __dep_export_CastleModel.CastleModel.userData.foodFrozen ? "beef_frozen" : "beef";
    this.updateOffsets(0);
  };
  CastleListDetailOverviewSublayerEconomy.prototype.onClick = function (__s16param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s16param0.target)) {
      switch (__s16param0.target) {
        case this.subLayerDisp.btn_left:
          this.updateOffsets(-1);
          break;
        case this.subLayerDisp.btn_right:
          this.updateOffsets(1);
      }
    }
  };
  CastleListDetailOverviewSublayerEconomy.prototype.updateOffsets = function (__s20param0) {
    this.offset += __s20param0;
    for (var __s20local0 = 0; __s20local0 < this.icons.length; __s20local0++) {
      this.icons[__s20local0].x -= __s20param0 * 65;
      this.icons[__s20local0].visible = __s20local0 - this.offset >= 0 && __s20local0 - this.offset < this.maxItems;
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_left, this.offset > 0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_right, this.offset < this.icons.length - this.maxItems);
    for (var __s20local1 = 0; __s20local1 < this.itemList.voList.length; __s20local1++) {
      if (__s20local1 < this.itemList.veList.length && this.itemList.veList[__s20local1] !== undefined && this.itemList.veList[__s20local1]) {
        this.itemList.veList[__s20local1].setOffSet(this.offset);
      }
    }
  };
  CastleListDetailOverviewSublayerEconomy.prototype.fillList = function (__s27param0) {
    __s1param0.prototype.fillList.call(this, __s27param0);
    this.updateOffsets(0);
  };
  return CastleListDetailOverviewSublayerEconomy;
}(require("gge-module:export_CastleListDetailOverviewSublayer").CastleListDetailOverviewSublayer);
exports.CastleListDetailOverviewSublayerEconomy = __s0local0;
var __dep_export_CastleListDetailOverviewItemEconomy = require("gge-module:export_CastleListDetailOverviewItemEconomy");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
