Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function IsoGeneratorEventBuildingPosition() {}
  IsoGeneratorEventBuildingPosition._getOfferBuildingSortOrderDic = function () {
    var __s5local0 = new Map();
    __s5local0.set("lowlevelmerchant", 1800);
    __s5local0.set("coinmine", 1900);
    __s5local0.set("rubymine", 2000);
    __s5local0.set("timechallenge", 2100);
    __s5local0.set("decoration", 2200);
    __s5local0.set("famebooster", 2600);
    return __s5local0;
  };
  IsoGeneratorEventBuildingPosition.getOfferBuildingSortOrder = function (__s7param0) {
    var __s7local0 = __dep_exact_f855840627e6e145.int(Number.MAX_VALUE);
    var __s7local1 = __s7param0.toLowerCase();
    if (__dep_exact_92d05af59ee2ff30.DictionaryUtil.containsKey(IsoGeneratorEventBuildingPosition.OFFER_BUILDING_SORT_ORDER_DIC, __s7local1)) {
      __s7local0 = __dep_exact_f855840627e6e145.int(IsoGeneratorEventBuildingPosition.OFFER_BUILDING_SORT_ORDER_DIC.get(__s7local1));
    } else {
      __dep_exact_9e901e8e2483a22f.error("[ClientConstHomeCastleEventCampPositions] " + __s7param0 + " wasn't found in the dictionary, please add it");
    }
    return __s7local0;
  };
  IsoGeneratorEventBuildingPosition.getPosListByNewVersion = function (__s11param0) {
    for (var __s11local0 = __s11param0.origins.getOriginRect(), __s11local1 = __s11param0.origins.getOriginPos(__dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER).add(new __s0local0(18, 11)), __s11local2 = 0, __s11local3 = 0, __s11local4 = 0, __s11local5 = 0, __s11local6 = [], __s11local7 = 0; __s11local7 < IsoGeneratorEventBuildingPosition.getNumEventCampsByGridWidth(__s11local0.width); __s11local7++) {
      if (__s11local5 < __s11local7 || __s11local4 % 3 == 0) {
        __s11local2 -= 9;
        __s11local4 = 0;
        __s11local5 += Number(__s11local7) + 0.5;
      }
      __s11local3 = __s11local4 % 3 * 8 + __s11local4 % 3 * 1;
      __s11local6.push(__s11local1.add(new __s0local0(__s11local2, __s11local3)));
      __s11local4++;
    }
    return __s11local6;
  };
  IsoGeneratorEventBuildingPosition.getNumEventCampsByGridWidth = function (__s16param0) {
    var __s16local0 = 13;
    if (__s16param0 <= 50) {
      __s16local0 = 19;
    }
    if (__s16param0 > 50) {
      __s16local0 = 23;
    }
    return __s16local0;
  };
  IsoGeneratorEventBuildingPosition.getPosListByOldVersion = function (__s20param0, __s20param1) {
    var __s20local0 = __s20param0.origins.getOriginPos(__dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER);
    var __s20local1 = new __s0local0(__s20local0.x, __s20local0.y);
    __s20local1.x += 1;
    __s20local1.y += 1;
    var __s20local2 = [];
    if (__s20param1 <= 1) {
      __s20local2.push(__s20local1.add(new __s0local0(6, 6)));
    } else {
      __s20local2.push(__s20local1.add(new __s0local0(8, -2)));
      __s20local2.push(__s20local1.add(new __s0local0(0, 7)));
      __s20local2.push(__s20local1.add(new __s0local0(9, 8)));
      __s20local2.push(__s20local1.add(new __s0local0(17, -2)));
      __s20local2.push(__s20local1.add(new __s0local0(0, 18)));
      __s20local2.push(__s20local1.add(new __s0local0(17, 8)));
      __s20local2.push(__s20local1.add(new __s0local0(9, 18)));
      __s20local2.push(__s20local1.add(new __s0local0(17, 18)));
      __s20local2.push(__s20local1.add(new __s0local0(26, -2)));
      __s20local2.push(__s20local1.add(new __s0local0(0, 29)));
      __s20local2.push(__s20local1.add(new __s0local0(9, 28)));
      __s20local2.push(__s20local1.add(new __s0local0(17, 28)));
    }
    return __s20local2;
  };
  IsoGeneratorEventBuildingPosition.__initialize_static_members = function () {
    IsoGeneratorEventBuildingPosition.OFFER_BUILDING_SORT_ORDER_DIC = IsoGeneratorEventBuildingPosition._getOfferBuildingSortOrderDic();
  };
  return IsoGeneratorEventBuildingPosition;
}();
exports.IsoGeneratorEventBuildingPosition = __s0local1;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_IsoGridOriginEnum = require("gge-module:export_IsoGridOriginEnum");
__s0local1.__initialize_static_members();
