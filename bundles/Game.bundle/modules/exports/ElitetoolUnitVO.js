Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_InstantBuyInfoVO = require("gge-module:export_InstantBuyInfoVO");
var __dep_export_ToolUnitVO = require("gge-module:export_ToolUnitVO");
var __s0local0 = function (__s1param0) {
  function ElitetoolUnitVO() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ElitetoolUnitVO, __s1param0);
  Object.defineProperty(ElitetoolUnitVO.prototype, "unitType", {
    get: function () {
      if (this.attackType == __dep_export_ClientConstCastle.ClientConstCastle.ATTACK_TOOL) {
        return __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_TOOL_ATTACK;
      } else {
        return __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE;
      }
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ToolUnitVO.ToolUnitVO.prototype, "unitType").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  ElitetoolUnitVO.prototype.getInstantBuyInfoByUnitsVO = function (__s11param0) {
    var __s11local0 = new __dep_export_InstantBuyInfoVO.InstantBuyInfoVO(false, false, "dialog_fight_instantBuy");
    var __s11local1 = __s11param0.eventTools;
    var __s11local2 = __s11param0.getAssociatedEventPackage(this.wodId);
    if ((this.costC2 > 0 || __s11local2 && __s11local2.basicPriceC2 > 0) && __s11local1 != null) {
      for (var __s11local3 = 0, __s11local4 = __s11local1; __s11local3 < __s11local4.length; __s11local3++) {
        var __s11local5 = __s11local4[__s11local3];
        if (__s11local5 !== undefined && __s11local5.wodId == this.wodId) {
          __s11local0.isEnabled = true;
          __s11local0.isVisible = true;
          break;
        }
      }
    }
    return __s11local0;
  };
  return ElitetoolUnitVO;
}(__dep_export_ToolUnitVO.ToolUnitVO);
exports.ElitetoolUnitVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IInventoryVO", "IShopVO", "ICostVO");
