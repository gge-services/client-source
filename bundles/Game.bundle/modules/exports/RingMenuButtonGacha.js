Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function RingMenuButtonGacha() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RingMenuButtonGacha, __s1param0);
  RingMenuButtonGacha.prototype.init = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1, __s5param2);
    this._disp = __s5param1.btn_gacha;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this._disp);
    this._disp.visible = __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.targetBuilding, "DecoDistrict2x2BuildingVE");
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp, this.isGachaAvailable());
  };
  RingMenuButtonGacha.prototype.onClick = function (__s7param0, __s7param1) {
    var __s7local0 = this.getGachaEventVO();
    if (__s7local0) {
      __s7local0.openDialog();
    }
    this.parent.hide();
  };
  RingMenuButtonGacha.prototype.isGachaAvailable = function () {
    return !!this.getGachaEventVO();
  };
  RingMenuButtonGacha.prototype.getGachaEventVO = function () {
    return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this.targetBuilding.buildingVO.gachaEventID);
  };
  RingMenuButtonGacha.prototype.getInfoText = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("tooltip_gachaName_GachaDeco2x2");
  };
  return RingMenuButtonGacha;
}(require("gge-module:export_ARingMenuButton").ARingMenuButton);
exports.RingMenuButtonGacha = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRingMenuButton");
