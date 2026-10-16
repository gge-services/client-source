Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MovieClip;
var __s0local1 = function () {
  function RelicEquipmentToolTip() {
    this._disp = new __s0local0();
    this._infoComponent = new __dep_export_RelicEquipmentInfoComponent.RelicEquipmentInfoComponent();
    this._infoComponent.init(this._disp);
  }
  RelicEquipmentToolTip.prototype.initToolTip = function (__s5param0, __s5param1) {
    this._infoComponent.updateWithNewVO(__s5param0);
    this._infoComponent.alignElementsToTarget(__s5param1);
  };
  Object.defineProperty(RelicEquipmentToolTip.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  return RelicEquipmentToolTip;
}();
exports.RelicEquipmentToolTip = __s0local1;
var __dep_export_RelicEquipmentInfoComponent = require("gge-module:export_RelicEquipmentInfoComponent");
