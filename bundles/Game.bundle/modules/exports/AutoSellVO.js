Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_SubscriptionEvent = require("gge-module:export_SubscriptionEvent");
var __dep_export_AutoSellEquipmentsVO = require("gge-module:export_AutoSellEquipmentsVO");
var __dep_export_AutoSellGemsVO = require("gge-module:export_AutoSellGemsVO");
var __s0local0 = function () {
  function AutoSellVO() {
    this._equipments = new __dep_export_AutoSellEquipmentsVO.AutoSellEquipmentsVO();
    this._gems = new __dep_export_AutoSellGemsVO.AutoSellGemsVO();
  }
  AutoSellVO.prototype.parseASG = function (__s5param0) {
    this.equipments.parseASG(__s5param0.ECS);
    this.gems.parseASG(__s5param0.GCS);
  };
  AutoSellVO.prototype.sendConfigToServer = function () {
    this.equipments.sendConfigToServer();
    this.gems.sendConfigToServer();
  };
  AutoSellVO.prototype.applyNewConfig = function (__s9param0) {
    this.equipments.copy(__s9param0.equipments);
    this.gems.copy(__s9param0.gems);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_SubscriptionEvent.SubscriptionEvent(__dep_export_SubscriptionEvent.SubscriptionEvent.ON_AUTO_SELL_CONFIG_UPDATED));
  };
  AutoSellVO.prototype.clone = function () {
    var __s11local0 = new AutoSellVO();
    __s11local0._equipments.copy(this._equipments);
    __s11local0._gems.copy(this._gems);
    return __s11local0;
  };
  AutoSellVO.prototype.isAnyEnabled = function () {
    return this._equipments.isAnyActive() || this._gems.isAnyActive();
  };
  Object.defineProperty(AutoSellVO.prototype, "equipments", {
    get: function () {
      return this._equipments;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoSellVO.prototype, "gems", {
    get: function () {
      return this._gems;
    },
    enumerable: true,
    configurable: true
  });
  return AutoSellVO;
}();
exports.AutoSellVO = __s0local0;
