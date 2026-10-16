Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleRecruitInfoDialogUnit(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRecruitInfoDialogUnit, __s1param0);
  CastleRecruitInfoDialogUnit.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.sublayerDisp.mc_level.btn_left, this.sublayerDisp.mc_level.btn_right]);
    this.sublayerDisp.mc_infoMarchspeed.toolTipText = "marchspeed";
    this.sublayerDisp.mc_infoMarchspeed.mouseChildren = false;
    this.soldierVO = __s5param0[0];
    var __s5local0 = this.soldierVO.meleeAttack > this.soldierVO.rangeAttack;
    __dep_export_WodPicHelper.WodPicHelper.addSoldierAttackEffectIcon(this.soldierVO, this.sublayerDisp.mc_infoAttackPower.mc_icon, 40, 40);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.sublayerDisp.mc_infoDefencMelee.mc_icon);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.sublayerDisp.mc_infoDefenceRange.mc_icon);
    __dep_export_WodPicHelper.WodPicHelper.addIcon(Library.CastleInterfaceElements_Icons.Icon_UnitCombatDefenceMelee, this.sublayerDisp.mc_infoDefencMelee.mc_icon, 40, 40);
    __dep_export_WodPicHelper.WodPicHelper.addIcon(Library.CastleInterfaceElements_Icons.Icon_UnitCombatDefenceRange, this.sublayerDisp.mc_infoDefenceRange.mc_icon, 40, 40);
    this.sublayerDisp.mc_infoUnitLootPower.visible = this.soldierVO.lootValue > 0;
    this.sublayerDisp.mc_infoMarchspeed.visible = this.soldierVO.unitSpeed > 0;
    this.sublayerDisp.mc_infoFoodConsumption.visible = this.soldierVO.foodSupply > 0;
    this.sublayerDisp.mc_infoMeadConsumption.visible = this.soldierVO.meadSupply > 0;
    this.sublayerDisp.mc_infoBeefConsumption.visible = this.soldierVO.beefSupply > 0;
    this.sublayerDisp.mc_level.visible = this.soldierVO.level > 0 || this.soldierVO.upgradeWodID > 0;
    this.sublayerDisp.mc_level.btn_left.visible = this.soldierVO.downgradeWodID > 0;
    this.sublayerDisp.mc_level.btn_right.visible = this.soldierVO.upgradeWodID > 0;
    this.textFieldManager.registerTextField(this.sublayerDisp.mc_infoAttackPower.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(String(__s5local0 ? this.soldierVO.meleeAttack : this.soldierVO.rangeAttack)));
    this.textFieldManager.registerTextField(this.sublayerDisp.mc_infoDefenceRange.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(String(this.soldierVO.rangeDefence)));
    this.textFieldManager.registerTextField(this.sublayerDisp.mc_infoDefencMelee.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(String(this.soldierVO.meleeDefence)));
    this.textFieldManager.registerTextField(this.sublayerDisp.mc_infoUnitLootPower.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(String(this.soldierVO.lootValue)));
    this.textFieldManager.registerTextField(this.sublayerDisp.mc_infoMarchspeed.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(String(this.soldierVO.unitSpeed)));
    this.textFieldManager.registerTextField(this.sublayerDisp.mc_infoFoodConsumption.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(String(this.soldierVO.foodSupply)));
    this.textFieldManager.registerTextField(this.sublayerDisp.mc_infoMeadConsumption.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(String(this.soldierVO.meadSupply)));
    this.textFieldManager.registerTextField(this.sublayerDisp.mc_infoBeefConsumption.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(String(this.soldierVO.beefSupply)));
    this.textFieldManager.registerTextField(this.sublayerDisp.mc_level.txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("building_level", [this.soldierVO.level]));
    this.sublayerDisp.mc_infoAttackPower.toolTipText = __s5local0 ? "attackpower_melee" : "attackpower_range";
    this.sublayerDisp.mc_infoAttackPower.mouseChildren = false;
    this.sublayerDisp.mc_infoDefenceRange.toolTipText = "rangedefence";
    this.sublayerDisp.mc_infoDefenceRange.mouseChildren = false;
    this.sublayerDisp.mc_infoDefencMelee.toolTipText = "meleedefence";
    this.sublayerDisp.mc_infoDefencMelee.mouseChildren = false;
    this.sublayerDisp.mc_infoUnitLootPower.toolTipText = "lootpower";
    this.sublayerDisp.mc_infoUnitLootPower.mouseChildren = false;
    this.sublayerDisp.mc_infoFoodConsumption.toolTipText = "foodwastage";
    this.sublayerDisp.mc_infoFoodConsumption.mouseChildren = false;
    this.sublayerDisp.mc_infoMeadConsumption.toolTipText = "meadwastage";
    this.sublayerDisp.mc_infoMeadConsumption.mouseChildren = false;
    this.sublayerDisp.mc_infoBeefConsumption.toolTipText = "beefwastage";
    this.sublayerDisp.mc_infoBeefConsumption.mouseChildren = false;
  };
  CastleRecruitInfoDialogUnit.prototype.onClick = function (__s7param0) {
    __s1param0.prototype.onClick.call(this, __s7param0);
    switch (__s7param0.target) {
      case this.sublayerDisp.mc_level.btn_left:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(__dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(this.soldierVO.downgradeWodID)));
        this.layoutManager.hideDialogWithDialogKey(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog);
        break;
      case this.sublayerDisp.mc_level.btn_right:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(__dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(this.soldierVO.upgradeWodID)));
        this.layoutManager.hideDialogWithDialogKey(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog);
    }
  };
  Object.defineProperty(CastleRecruitInfoDialogUnit.prototype, "sublayerDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  return CastleRecruitInfoDialogUnit;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleRecruitInfoDialogUnit = __s0local0;
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
var __dep_export_CastleRecruitInfoDialogProperties = require("gge-module:export_CastleRecruitInfoDialogProperties");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
