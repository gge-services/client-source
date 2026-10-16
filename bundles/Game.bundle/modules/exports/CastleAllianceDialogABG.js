Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SAllianceBattleGroundGetCentersOfPowerVO = require("gge-module:export_C2SAllianceBattleGroundGetCentersOfPowerVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleAllianceDialogABG(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_centersOfPower_title"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_capitals.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("capital_" + __dep_export_ABGHelper.ABGHelper.skinName));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_capitals.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("capital_desc_" + __dep_export_ABGHelper.ABGHelper.skinName));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_metropols.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("metropol_" + __dep_export_ABGHelper.ABGHelper.skinName));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_metropols.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("metropol_desc_" + __dep_export_ABGHelper.ABGHelper.skinName));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_kingstower.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("kingstower_" + __dep_export_ABGHelper.ABGHelper.skinName));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_kingstower.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("kingstower_desc_" + __dep_export_ABGHelper.ABGHelper.skinName));
    __s3local0.subLayerDisp.btn_detail.toolTipText = "btn_centersOfPowerOverview";
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3local0.subLayerDisp.btn_detail]);
    __s3local0.subLayerDisp.mc_capitals.mc_icon.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(new __dep_export_CapitalMapobjectVO.CapitalMapobjectVO(), new __s0local0(100, 90), true, false, false));
    __s3local0.subLayerDisp.mc_metropols.mc_icon.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(new __dep_export_MetropolMapobjectVO.MetropolMapobjectVO(), new __s0local0(100, 90), true, false, false));
    __s3local0.subLayerDisp.mc_kingstower.mc_icon.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(new __dep_export_KingstowerMapobjectVO.KingstowerMapobjectVO(), new __s0local0(100, 90), true, false, false));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceDialogABG, __s1param0);
  CastleAllianceDialogABG.prototype.onMouseUp = function (__s5param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s5param0.target)) {
      switch (__s5param0.target) {
        case this.subLayerDisp.btn_detail:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceCentersOfPowerDialog.CastleAllianceCentersOfPowerDialog);
      }
    }
  };
  CastleAllianceDialogABG.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_allianceManagement"));
  };
  CastleAllianceDialogABG.prototype.show = function (__s11param0) {
    __s1param0.prototype.show.call(this, __s11param0);
    this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.CPE_ARRIVED, this.bindFunction(this.onCPEArrived));
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceBattleGroundGetCentersOfPowerVO.C2SAllianceBattleGroundGetCentersOfPowerVO(__dep_export_CastleModel.CastleModel.userData.allianceID));
  };
  CastleAllianceDialogABG.prototype.onCPEArrived = function (__s13param0) {
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.CPE_ARRIVED, this.bindFunction(this.onCPEArrived));
    var __s13local0 = __s13param0.params[0];
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_capitals.txt_allianceOwn, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("ownedByAlliance_XY", [__s13local0[__dep_exact_26a421b704832cff.CommKeys.CAPITAL_AMOUNT], 1]));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_capitals.txt_playerLimit, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("playerLimit_X", [__s13local0[__dep_exact_26a421b704832cff.CommKeys.CAPITAL_LIMIT]]));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_metropols.txt_allianceOwn, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("ownedByAlliance_XY", [__s13local0[__dep_exact_26a421b704832cff.CommKeys.CITY_STATES_AMOUNT], __s13local0[__dep_exact_26a421b704832cff.CommKeys.CITY_STATES_ALLIANCE_LIMIT]]));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_metropols.txt_playerLimit, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("playerLimit_X", [__s13local0[__dep_exact_26a421b704832cff.CommKeys.CITY_STATES_PLAYER_LIMIT]]));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_kingstower.txt_allianceOwn, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("ownedByAlliance_XY", [__s13local0[__dep_exact_26a421b704832cff.CommKeys.TOWER_AMOUNT], __s13local0[__dep_exact_26a421b704832cff.CommKeys.TOWER_ALLIANCE_LIMIT]]));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_kingstower.txt_playerLimit, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("playerLimit_X", [__s13local0[__dep_exact_26a421b704832cff.CommKeys.TOWER_PLAYER_LIMIT]]));
  };
  CastleAllianceDialogABG.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
  };
  return CastleAllianceDialogABG;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleAllianceDialogABG = __s0local1;
var __dep_export_CapitalMapobjectVO = require("gge-module:export_CapitalMapobjectVO");
var __dep_export_KingstowerMapobjectVO = require("gge-module:export_KingstowerMapobjectVO");
var __dep_export_MetropolMapobjectVO = require("gge-module:export_MetropolMapobjectVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_CastleAllianceCentersOfPowerDialog = require("gge-module:export_CastleAllianceCentersOfPowerDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
