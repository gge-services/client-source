Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleConstructionSellDialogProperties = require("gge-module:export_CastleConstructionSellDialogProperties");
var __s0local0 = function (__s1param0) {
  function RingMenuButtonSell() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RingMenuButtonSell, __s1param0);
  RingMenuButtonSell.prototype.init = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1, __s5param2);
    this._disp = __s5param1.btn_sell;
    this._disp.visible = __s5param2.buildingVO.objectType == __dep_export_IsoObjectEnum.IsoObjectEnum.DECO && !__s5param2.buildingVO.buildingState.isInProgress && !__s5param2.buildingVO.buildingState.isStopped && __s5param2.buildingVO.sellCostC1 > 0 && !__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isCrossplay;
  };
  RingMenuButtonSell.prototype.onClick = function (__s7param0, __s7param1) {
    this.parent.hide();
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleConstructionSellDialog.CastleConstructionSellDialog, new __dep_export_CastleConstructionSellDialogProperties.CastleConstructionSellDialogProperties(this.targetBuilding.buildingVO, this.targetBuilding));
  };
  RingMenuButtonSell.prototype.getInfoText = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("constructionMode_sellDeco");
  };
  return RingMenuButtonSell;
}(require("gge-module:export_ARingMenuButton").ARingMenuButton);
exports.RingMenuButtonSell = __s0local0;
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleConstructionSellDialog = require("gge-module:export_CastleConstructionSellDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRingMenuButton");
