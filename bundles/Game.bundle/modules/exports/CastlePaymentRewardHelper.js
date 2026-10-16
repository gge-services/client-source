Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastlePaymentRewardHelper() {}
  CastlePaymentRewardHelper.getNameOfItemSet = function (__s5param0) {
    switch (__s5param0) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 9:
        return "RewardsSet" + __s5param0;
    }
    return "RewardsSet9";
  };
  CastlePaymentRewardHelper.getIconWidth = function (__s8param0) {
    switch (__s8param0) {
      case 1:
        return 142;
      case 2:
        return 88;
      case 3:
      case 4:
        return 85;
      case 9:
        return 56;
    }
    return 56;
  };
  CastlePaymentRewardHelper.getIconHeight = function (__s11param0) {
    switch (__s11param0) {
      case 1:
        return 166;
      case 2:
        return 106;
      case 3:
      case 4:
        return 101;
      case 9:
        return 66;
    }
    return 66;
  };
  CastlePaymentRewardHelper.fillBarWithColor = function (__s14param0 = 0, __s14param1 = null) {
    if (__s14param1) {
      var __s14local0 = new __dep_exact_81dacdf05bd32292.ColorTransform();
      __s14local0.color = __s14param0;
      __s14param1.useFilters([new createjs.ColorFilter(__s14local0.redMultiplier, __s14local0.greenMultiplier, __s14local0.blueMultiplier, __s14local0.alphaMultiplier, __s14local0.redOffset, __s14local0.greenOffset, __s14local0.blueOffset, __s14local0.alphaOffset)]);
    }
  };
  CastlePaymentRewardHelper.customizeSkinComponents = function (__s17param0, __s17param1, __s17param2, __s17param3, __s17param4, __s17param5, __s17param6, __s17param7, __s17param8, __s17param9, __s17param10) {
    switch (__s17param0) {
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_DEFAULT:
        break;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_FINISH:
        if (__s17param1) {
          __s17param1.y += 10;
        }
        if (__s17param2) {
          __s17param2.x += -45;
          __s17param2.y += 10;
        }
        if (__s17param8) {
          __s17param8.y -= 40;
        }
        if (__s17param10) {
          if (__s17param4) {
            __s17param4.y += -45;
          }
          __s17param10.y += -45;
        }
        break;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_USA:
        if (__s17param1) {
          __s17param1.y += -18;
        }
        if (__s17param2) {
          __s17param2.y += -10;
        }
        if (__s17param3) {
          __s17param3.x += -1;
          __s17param3.y += -13;
        }
        break;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_ALIEN:
        if (__s17param1) {
          __s17param1.textArea.textColor = 16776171;
        }
        if (__s17param3) {
          __s17param3.textArea.textColor = 16381924;
          __s17param3.x += 10;
          __s17param3.y += -9;
        }
        break;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_SUPER:
        if (__s17param1) {
          __s17param1.x += -7;
          __s17param1.y += -10;
          __s17param1.textArea.textColor = 16777215;
        }
        if (__s17param2) {
          __s17param2.y += -12;
        }
        if (__s17param3) {
          __s17param3.y += -9;
          __s17param3.textArea.textColor = 16631347;
        }
        if (__s17param9) {
          __s17param9.textArea.textColor = 4469542;
          CastlePaymentRewardHelper.fillBarWithColor(12690820, __s17param9.bkgrArea);
          __s17param9.bkgrArea.visible = true;
        }
        if (__s17param6) {
          __s17param6.textArea.textColor = 16777215;
        }
        break;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_BERIMOND:
        if (__s17param3) {
          __s17param3.textArea.textColor = 4469542;
        }
        if (__s17param1) {
          __s17param1.width -= 10;
        }
        if (__s17param7) {
          __s17param7.y += 91;
        }
        break;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_DEFENSE:
        if (__s17param1) {
          __s17param1.y += -12;
        }
        if (__s17param2) {
          __s17param2.y += -14;
        }
        if (__s17param3) {
          __s17param3.x += -1;
          __s17param3.y += -15;
          __s17param3.textArea.textColor = 16566066;
        }
        break;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_ATTACK:
        if (__s17param1) {
          __s17param1.y += -5;
        }
        if (__s17param2) {
          __s17param2.y += -7;
        }
        if (__s17param3) {
          __s17param3.x += -1;
          __s17param3.y += -12;
          __s17param3.textArea.textColor = 16566066;
        }
        break;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_EASTER:
        if (__s17param1) {
          __s17param1.y += -10;
        }
        if (__s17param3) {
          __s17param3.y += -14;
          __s17param3.textArea.textColor = 16566066;
        }
        break;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_SPRING_BUNNY:
        if (__s17param1) {
          __s17param1.y += -10;
        }
        if (__s17param3) {
          __s17param3.y += -2;
          __s17param3.textArea.textColor = 11013646;
        }
        if (__s17param7) {
          __s17param7.x += 7;
          __s17param7.y += 62;
        }
        if (__s17param2) {
          __s17param2.x += -29;
          __s17param2.y += -11;
        }
        break;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_WHEEL_OF_FORTUNE:
        if (__s17param1) {
          __s17param1.y += -12;
        }
        if (__s17param2) {
          __s17param2.y += -11;
        }
        if (__s17param3) {
          __s17param3.y += -13;
          __s17param3.textArea.textColor = 16566066;
        }
        if (__s17param7) {
          __s17param7.y += 166;
        }
        break;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_PARAGON_XP:
        if (__s17param9) {
          CastlePaymentRewardHelper.fillBarWithColor(14728093, __s17param9.bkgrArea);
          __s17param9.bkgrArea.visible = true;
        }
        if (__s17param1) {
          __s17param1.y += -15;
        }
        if (__s17param2) {
          __s17param2.y += -10;
        }
        if (__s17param3) {
          __s17param3.textArea.textColor = 0;
          __s17param3.x += -2;
          __s17param3.y += -13;
        }
        if (__s17param7) {
          __s17param7.y += 64;
        }
        break;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_SUNDAY:
        if (__s17param2) {
          __s17param2.y += 4;
        }
        if (__s17param7) {
          __s17param7.y += 46;
        }
        if (__s17param3) {
          __s17param3.textArea.textColor = 3619628;
        }
        if (__s17param9) {
          CastlePaymentRewardHelper.fillBarWithColor(15234304, __s17param9.bkgrArea);
          __s17param9.bkgrArea.visible = true;
        }
        break;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_EVENING:
        if (__s17param6) {
          __s17param6.textArea.textColor = 16316664;
        }
        if (__s17param3) {
          __s17param3.textArea.textColor = 466001;
        }
        if (__s17param7) {
          __s17param7.y += 40;
        }
        if (__s17param9) {
          CastlePaymentRewardHelper.fillBarWithColor(12768996, __s17param9.bkgrArea);
          __s17param9.bkgrArea.visible = true;
        }
        break;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_UNDERWORLD:
        if (__s17param1) {
          __s17param1.textArea.textColor = 1686210;
        }
        if (__s17param2) {
          __s17param2.y += -15;
        }
        if (__s17param3) {
          __s17param3.textArea.textColor = 29828;
          __s17param3.x += 2;
          __s17param3.y += -11;
        }
        if (__s17param7) {
          __s17param7.y += 40;
        }
        if (__s17param6) {
          __s17param6.textArea.textColor = 7826271;
        }
        break;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_HALLOWEEN:
        if (__s17param2) {
          CastlePaymentRewardHelper.fillBarWithColor(4146241, __s17param2);
          __s17param2.x += -28;
          __s17param2.y += -13;
        }
        if (__s17param1) {
          __s17param1.textArea.textColor = 4469542;
        }
        if (__s17param3) {
          __s17param3.textArea.textColor = 6540687;
          __s17param3.x += 4;
          __s17param3.y += -5;
        }
        if (__s17param7) {
          __s17param7.x += 6;
          __s17param7.y += -10;
        }
        if (__s17param6) {
          __s17param6.textArea.textColor = 16316664;
        }
        if (__s17param9) {
          CastlePaymentRewardHelper.fillBarWithColor(6251617, __s17param9.bkgrArea);
          __s17param9.bkgrArea.visible = true;
        }
        break;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_BLACK_FRIDAY:
        if (__s17param1) {
          __s17param1.y += -12;
        }
        if (__s17param2) {
          __s17param2.x += -9;
          __s17param2.y += -12;
        }
        if (__s17param3) {
          __s17param3.x += -1;
          __s17param3.y += -5;
          __s17param3.textArea.textColor = 16566066;
        }
        if (__s17param7) {
          __s17param7.x -= 5;
          __s17param7.y += 129;
        }
        if (__s17param9) {
          CastlePaymentRewardHelper.fillBarWithColor(16179921, __s17param9.bkgrArea);
          __s17param9.bkgrArea.visible = true;
        }
        if (__s17param6) {
          __s17param6.textArea.textColor = 15388850;
        }
        break;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_WINTER:
        if (__s17param1) {
          __s17param1.textArea.textColor = 16773852;
          __s17param1.y += -7;
        }
        if (__s17param2) {
          CastlePaymentRewardHelper.fillBarWithColor(6996686, __s17param2);
          __s17param2.x += -29;
          __s17param2.y += -13;
        }
        if (__s17param3) {
          __s17param3.y += -12;
          __s17param3.textArea.textColor = 2653337;
        }
        if (__s17param7) {
          __s17param7.x += 6;
          __s17param7.y -= 9;
        }
        if (__s17param9) {
          CastlePaymentRewardHelper.fillBarWithColor(14996918, __s17param9.bkgrArea);
          __s17param9.bkgrArea.visible = true;
        }
        if (__s17param6) {
          __s17param6.textArea.textColor = 16316664;
        }
        break;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_MIDAS:
    }
  };
  CastlePaymentRewardHelper.getSkinOffsetX = function (__s90param0) {
    switch (__s90param0) {
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_DEFAULT:
        break;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_FINISH:
        return -26;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_USA:
        return 17;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_ALIEN:
        return 19;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_SUPER:
        return 7;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_BERIMOND:
        return 41;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_DEFENSE:
        return 23;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_ATTACK:
        return 38;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_EASTER:
        return 34;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_WHEEL_OF_FORTUNE:
        return 17;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_PARAGON_XP:
        return 16;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_SUNDAY:
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_EVENING:
        return 18;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_UNDERWORLD:
        return 53;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_HALLOWEEN:
        return 30;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_BLACK_FRIDAY:
        return 28;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_WINTER:
        return 18;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_MIDAS:
        return 37;
    }
    return 0;
  };
  CastlePaymentRewardHelper.getSkinOffsetY = function (__s93param0) {
    switch (__s93param0) {
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_DEFAULT:
        break;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_FINISH:
        return -16;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_USA:
        return 7;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_ALIEN:
        return -8;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_SUPER:
        return 10;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_BERIMOND:
        break;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_DEFENSE:
        return 11;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_ATTACK:
        return 7;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_EASTER:
        return 17;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_WHEEL_OF_FORTUNE:
        return 15;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_PARAGON_XP:
        return 12;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_SUNDAY:
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_EVENING:
        return -9;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_UNDERWORLD:
        return 4;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_HALLOWEEN:
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_BLACK_FRIDAY:
        return 11;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_WINTER:
        return 26;
    }
    return 0;
  };
  return CastlePaymentRewardHelper;
}();
exports.CastlePaymentRewardHelper = __s0local0;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastlePaymentRewardSpecialOfferConstants = require("gge-module:export_CastlePaymentRewardSpecialOfferConstants");
