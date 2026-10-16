Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_InstantBuyInfoVO = require("gge-module:export_InstantBuyInfoVO");
var __dep_export_ToolUnitVO = require("gge-module:export_ToolUnitVO");
var __s0local0 = function (__s1param0) {
  function EventtoolUnitVO() {
    var __s3local0 = this;
    __s3local0.usedForEvent = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EventtoolUnitVO, __s1param0);
  EventtoolUnitVO.prototype.parseXmlNode = function (__s5param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s5param0);
    var __s5local0 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("clientUsageEventID", __s5param0, "-1");
    if (__s5local0 != "-1") {
      this.usedForEvent = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__s5local0, ",");
    }
  };
  Object.defineProperty(EventtoolUnitVO.prototype, "unitType", {
    get: function () {
      if (this.attackType == __dep_export_ClientConstCastle.ClientConstCastle.ATTACK_TOOL) {
        return __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_TOOL_ATTACK;
      } else {
        return __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE;
      }
    },
    set: function (__s12param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ToolUnitVO.ToolUnitVO.prototype, "unitType").set.call(this, __s12param0);
    },
    enumerable: true,
    configurable: true
  });
  EventtoolUnitVO.prototype.getInstantBuyInfoByUnitsVO = function (__s14param0) {
    var __s14local0 = new __dep_export_InstantBuyInfoVO.InstantBuyInfoVO(false, false, "dialog_fight_instantBuy");
    var __s14local1 = __s14param0.eventTools;
    var __s14local2 = __s14param0.getAssociatedEventPackage(this.wodId);
    if ((this.costC2 > 0 || __s14local2 && __s14local2.basicPriceC2 > 0) && __s14local1 != null) {
      for (var __s14local3 = 0, __s14local4 = __s14local1; __s14local3 < __s14local4.length; __s14local3++) {
        var __s14local5 = __s14local4[__s14local3];
        if (__s14local5 !== undefined && __s14local5.wodId == this.wodId) {
          __s14local0.isEnabled = true;
          __s14local0.isVisible = true;
          break;
        }
      }
    }
    return __s14local0;
  };
  return EventtoolUnitVO;
}(__dep_export_ToolUnitVO.ToolUnitVO);
exports.EventtoolUnitVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IInventoryVO", "IShopVO", "ICostVO");
