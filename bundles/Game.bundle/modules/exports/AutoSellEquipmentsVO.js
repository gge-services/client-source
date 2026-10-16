Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SSetAutoSellEquipmentConditionsEventVO = require("gge-module:export_C2SSetAutoSellEquipmentConditionsEventVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function AutoSellEquipmentsVO() {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._actives = __s3local0.createActiveMatrix();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AutoSellEquipmentsVO, __s1param0);
  AutoSellEquipmentsVO.prototype.setAllActiveStates = function (__s5param0) {
    for (var __s5local0 = 0; __s5local0 < AutoSellEquipmentsVO.SLOT_ORDER.length; ++__s5local0) {
      var __s5local1 = this._actives.get(AutoSellEquipmentsVO.SLOT_ORDER[__s5local0]);
      for (var __s5local2 = 0; __s5local2 < AutoSellEquipmentsVO.RARITY_ORDER.length; ++__s5local2) {
        __s5local1.set(AutoSellEquipmentsVO.RARITY_ORDER[__s5local2], __s5param0);
      }
    }
  };
  AutoSellEquipmentsVO.prototype.parseASG = function (__s11param0) {
    var __s11local0 = __s11param0;
    if (__s11local0 && (this.setAllActiveStates(false), __s11local0 != null)) {
      for (var __s11local1 = 0, __s11local2 = __s11local0; __s11local1 < __s11local2.length; __s11local1++) {
        var __s11local3 = __s11local2[__s11local1];
        if (__s11local3 !== undefined) {
          var __s11local4 = __dep_exact_f855840627e6e145.int(__s11local3[0]);
          var __s11local5 = __dep_exact_f855840627e6e145.int(__s11local3[1]);
          this.setActive(__s11local4, __s11local4 == __dep_exact_26a421b704832cff.EquipmentConst.SLOT_HERO ? __s11local5 - __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_COMMON + 1 : __s11local5, true);
        }
      }
    }
  };
  AutoSellEquipmentsVO.prototype.setActive = function (__s17param0, __s17param1, __s17param2) {
    var __s17local0 = this._actives.get(__s17param0);
    if (__s17local0) {
      __s17local0.set(__s17param1, __s17param2);
    }
  };
  AutoSellEquipmentsVO.prototype.copy = function (__s20param0) {
    if (this._actives != null) {
      for (var __s20local0 = 0, __s20local1 = Array.from(this._actives.keys()); __s20local0 < __s20local1.length; __s20local0++) {
        var __s20local2 = __s20local1[__s20local0];
        var __s20local3 = this._actives.get(__s20local2);
        var __s20local4 = __s20param0._actives.get(__s20local2);
        if (__s20local3) {
          for (var __s20local5 = 0, __s20local6 = Array.from(__s20local3.keys()); __s20local5 < __s20local6.length; __s20local5++) {
            var __s20local7 = __s20local6[__s20local5];
            __s20local3.set(__s20local7, __s20local4.get(__s20local7));
          }
        }
      }
    }
  };
  AutoSellEquipmentsVO.prototype.sendConfigToServer = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSetAutoSellEquipmentConditionsEventVO.C2SSetAutoSellEquipmentConditionsEventVO(this));
  };
  AutoSellEquipmentsVO.prototype.createActiveMatrix = function () {
    var __s30local0 = new Map();
    for (var __s30local1 = 0; __s30local1 < AutoSellEquipmentsVO.SLOT_ORDER.length; ++__s30local1) {
      var __s30local2 = new Map();
      for (var __s30local3 = 0; __s30local3 < AutoSellEquipmentsVO.RARITY_ORDER.length; ++__s30local3) {
        __s30local2.set(AutoSellEquipmentsVO.RARITY_ORDER[__s30local3], false);
      }
      __s30local0.set(AutoSellEquipmentsVO.SLOT_ORDER[__s30local1], __s30local2);
    }
    return __s30local0;
  };
  AutoSellEquipmentsVO.prototype.isActive = function (__s36param0, __s36param1) {
    var __s36local0 = this._actives.get(__s36param0);
    return !!__s36local0 && !!__s36local0.get(__s36param1);
  };
  AutoSellEquipmentsVO.prototype.isAnyActive = function () {
    if (this._actives != null) {
      for (var __s38local0 = 0, __s38local1 = Array.from(this._actives.values()); __s38local0 < __s38local1.length; __s38local0++) {
        var __s38local2 = __s38local1[__s38local0];
        if (__s38local2) {
          for (var __s38local3 = 0, __s38local4 = Array.from(__s38local2.values()); __s38local3 < __s38local4.length; __s38local3++) {
            if (__s38local4[__s38local3]) {
              return true;
            }
          }
        }
      }
    }
    return false;
  };
  AutoSellEquipmentsVO.prototype.getCurrentActiveStatesCount = function () {
    var __s47local0 = 0;
    for (var __s47local1 = 0; __s47local1 < AutoSellEquipmentsVO.SLOT_ORDER.length; ++__s47local1) {
      var __s47local2 = this._actives.get(AutoSellEquipmentsVO.SLOT_ORDER[__s47local1]);
      for (var __s47local3 = 0; __s47local3 < AutoSellEquipmentsVO.RARITY_ORDER.length; ++__s47local3) {
        if (__s47local2.get(AutoSellEquipmentsVO.RARITY_ORDER[__s47local3])) {
          __s47local0++;
        }
      }
    }
    return __s47local0;
  };
  Object.defineProperty(AutoSellEquipmentsVO.prototype, "actives", {
    get: function () {
      return this._actives;
    },
    enumerable: true,
    configurable: true
  });
  AutoSellEquipmentsVO.__initialize_static_members = function () {
    AutoSellEquipmentsVO.NUMBER_OF_ACTIVE_STATES = __dep_exact_f855840627e6e145.int(AutoSellEquipmentsVO.SLOT_ORDER.length * AutoSellEquipmentsVO.RARITY_ORDER.length);
  };
  AutoSellEquipmentsVO.SLOT_ORDER = [__dep_exact_26a421b704832cff.EquipmentConst.SLOT_HERO, __dep_exact_26a421b704832cff.EquipmentConst.SLOT_HELMET, __dep_exact_26a421b704832cff.EquipmentConst.SLOT_ARMOR, __dep_exact_26a421b704832cff.EquipmentConst.SLOT_WEAPON, __dep_exact_26a421b704832cff.EquipmentConst.SLOT_ARTIFACT];
  AutoSellEquipmentsVO.RARITY_ORDER = [__dep_exact_26a421b704832cff.EquipmentConst.RARENESS_COMMON, __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_RARE, __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_EPIC, __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_LEGENDARY];
  return AutoSellEquipmentsVO;
}(require("gge-module:export_ASubAutoSellVO").ASubAutoSellVO);
exports.AutoSellEquipmentsVO = __s0local0;
__s0local0.__initialize_static_members();
