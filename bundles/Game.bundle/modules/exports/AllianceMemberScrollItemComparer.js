Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AllianceMemberScrollItemComparer() {}
  AllianceMemberScrollItemComparer.comparePrimaryRank = function (__s5param0, __s5param1) {
    var __s5local0 = __s5param0.ownerInfoVO;
    var __s5local1 = __s5param1.ownerInfoVO;
    var __s5local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareRank(__s5local0, __s5local1));
    if (__s5local2 == 0) {
      __s5local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareName(__s5local0, __s5local1));
    }
    if (__s5local2 == 0) {
      __s5local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareLevel(__s5local0, __s5local1));
    }
    if (__s5local2 == 0) {
      __s5local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareDistance(__s5param0, __s5param1));
    }
    if (__s5local2 == 0) {
      __s5local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareSelected(__s5param0, __s5param1));
    }
    return __s5local2;
  };
  AllianceMemberScrollItemComparer.comparePrimaryName = function (__s11param0, __s11param1) {
    var __s11local0 = __s11param0.ownerInfoVO;
    var __s11local1 = __s11param1.ownerInfoVO;
    var __s11local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareName(__s11local0, __s11local1));
    if (__s11local2 == 0) {
      __s11local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareRank(__s11local0, __s11local1));
    }
    if (__s11local2 == 0) {
      __s11local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareLevel(__s11local0, __s11local1));
    }
    if (__s11local2 == 0) {
      __s11local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareDistance(__s11param0, __s11param1));
    }
    if (__s11local2 == 0) {
      __s11local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareSelected(__s11param0, __s11param1));
    }
    return __s11local2;
  };
  AllianceMemberScrollItemComparer.comparePrimaryLevel = function (__s17param0, __s17param1) {
    var __s17local0 = __s17param0.ownerInfoVO;
    var __s17local1 = __s17param1.ownerInfoVO;
    var __s17local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareLevel(__s17local0, __s17local1));
    if (__s17local2 == 0) {
      __s17local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareRank(__s17local0, __s17local1));
    }
    if (__s17local2 == 0) {
      __s17local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareName(__s17local0, __s17local1));
    }
    if (__s17local2 == 0) {
      __s17local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareDistance(__s17param0, __s17param1));
    }
    if (__s17local2 == 0) {
      __s17local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareSelected(__s17param0, __s17param1));
    }
    return __s17local2;
  };
  AllianceMemberScrollItemComparer.compareLegendLevelValue = function (__s23param0, __s23param1) {
    var __s23local0 = __s23param0.ownerInfoVO;
    var __s23local1 = __s23param1.ownerInfoVO;
    var __s23local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareLegendLevel(__s23param0, __s23param1));
    if (__s23local2 == 0) {
      __s23local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareRank(__s23local0, __s23local1));
    }
    if (__s23local2 == 0) {
      __s23local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareName(__s23local0, __s23local1));
    }
    if (__s23local2 == 0) {
      __s23local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareDistance(__s23param0, __s23param1));
    }
    if (__s23local2 == 0) {
      __s23local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareSelected(__s23param0, __s23param1));
    }
    return __s23local2;
  };
  AllianceMemberScrollItemComparer.comparePrimaryDistance = function (__s29param0, __s29param1) {
    var __s29local0 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareDistance(__s29param0, __s29param1));
    var __s29local1 = __s29param0.ownerInfoVO;
    var __s29local2 = __s29param1.ownerInfoVO;
    if (__s29local0 == 0) {
      __s29local0 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareRank(__s29local1, __s29local2));
    }
    if (__s29local0 == 0) {
      __s29local0 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareName(__s29local1, __s29local2));
    }
    if (__s29local0 == 0) {
      __s29local0 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareLevel(__s29local1, __s29local2));
    }
    if (__s29local0 == 0) {
      __s29local0 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareSelected(__s29param0, __s29param1));
    }
    return __s29local0;
  };
  AllianceMemberScrollItemComparer.comparePrimarySelected = function (__s35param0, __s35param1) {
    var __s35local0 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareSelected(__s35param0, __s35param1));
    var __s35local1 = __s35param0.ownerInfoVO;
    var __s35local2 = __s35param1.ownerInfoVO;
    if (__s35local0 == 0) {
      __s35local0 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareRank(__s35local1, __s35local2));
    }
    if (__s35local0 == 0) {
      __s35local0 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareName(__s35local1, __s35local2));
    }
    if (__s35local0 == 0) {
      __s35local0 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareLevel(__s35local1, __s35local2));
    }
    if (__s35local0 == 0) {
      __s35local0 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareDistance(__s35param0, __s35param1));
    }
    return __s35local0;
  };
  AllianceMemberScrollItemComparer.compareHonorValue = function (__s41param0, __s41param1) {
    var __s41local0 = __s41param0.ownerInfoVO;
    var __s41local1 = __s41param1.ownerInfoVO;
    var __s41local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareHonor(__s41param0, __s41param1));
    if (__s41local2 == 0) {
      __s41local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareRank(__s41local0, __s41local1));
    }
    if (__s41local2 == 0) {
      __s41local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareName(__s41local0, __s41local1));
    }
    if (__s41local2 == 0) {
      __s41local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareLevel(__s41local0, __s41local1));
    }
    if (__s41local2 == 0) {
      __s41local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareDistance(__s41param0, __s41param1));
    }
    if (__s41local2 == 0) {
      __s41local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareSelected(__s41param0, __s41param1));
    }
    return __s41local2;
  };
  AllianceMemberScrollItemComparer.compareMightValue = function (__s48param0, __s48param1) {
    var __s48local0 = __s48param0.ownerInfoVO;
    var __s48local1 = __s48param1.ownerInfoVO;
    var __s48local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareMight(__s48param0, __s48param1));
    if (__s48local2 == 0) {
      __s48local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareRank(__s48local0, __s48local1));
    }
    if (__s48local2 == 0) {
      __s48local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareName(__s48local0, __s48local1));
    }
    if (__s48local2 == 0) {
      __s48local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareLevel(__s48local0, __s48local1));
    }
    if (__s48local2 == 0) {
      __s48local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareDistance(__s48param0, __s48param1));
    }
    if (__s48local2 == 0) {
      __s48local2 = __dep_exact_f855840627e6e145.int(AllianceMemberScrollItemComparer.compareSelected(__s48param0, __s48param1));
    }
    return __s48local2;
  };
  AllianceMemberScrollItemComparer.compareRank = function (__s55param0, __s55param1) {
    if (__s55param0.allianceRank < __s55param1.allianceRank) {
      return -1;
    } else if (__s55param0.allianceRank > __s55param1.allianceRank) {
      return 1;
    } else {
      return 0;
    }
  };
  AllianceMemberScrollItemComparer.compareName = function (__s60param0, __s60param1) {
    if (__s60param0.playerName.toLowerCase() < __s60param1.playerName.toLowerCase()) {
      return -1;
    } else if (__s60param0.playerName.toLowerCase() > __s60param1.playerName.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  };
  AllianceMemberScrollItemComparer.compareLevel = function (__s65param0, __s65param1) {
    if (__s65param0.playerLevel < __s65param1.playerLevel) {
      return -1;
    } else if (__s65param0.playerLevel > __s65param1.playerLevel) {
      return 1;
    } else {
      return 0;
    }
  };
  AllianceMemberScrollItemComparer.compareDistance = function (__s70param0, __s70param1) {
    if (__s70param0.distanceToTarget < __s70param1.distanceToTarget) {
      return -1;
    } else if (__s70param0.distanceToTarget > __s70param1.distanceToTarget) {
      return 1;
    } else {
      return 0;
    }
  };
  AllianceMemberScrollItemComparer.compareSelected = function (__s75param0, __s75param1) {
    if (__s75param0.selected == 1 && __s75param1.selected == 0) {
      return -1;
    } else if (__s75param0.selected == 0 && __s75param1.selected == 1) {
      return 1;
    } else {
      return 0;
    }
  };
  AllianceMemberScrollItemComparer.compareHonor = function (__s80param0, __s80param1) {
    if (__s80param0.ownerInfoVO.honor < __s80param1.ownerInfoVO.honor) {
      return -1;
    } else if (__s80param0.ownerInfoVO.honor > __s80param1.ownerInfoVO.honor) {
      return 1;
    } else {
      return 0;
    }
  };
  AllianceMemberScrollItemComparer.compareMight = function (__s85param0, __s85param1) {
    if (__s85param0.ownerInfoVO.might < __s85param1.ownerInfoVO.might) {
      return -1;
    } else if (__s85param0.ownerInfoVO.might > __s85param1.ownerInfoVO.might) {
      return 1;
    } else {
      return 0;
    }
  };
  AllianceMemberScrollItemComparer.compareLegendLevel = function (__s90param0, __s90param1) {
    if (__s90param0.ownerInfoVO.playerLegendLevel < __s90param1.ownerInfoVO.playerLegendLevel) {
      return -1;
    } else if (__s90param0.ownerInfoVO.playerLegendLevel > __s90param1.ownerInfoVO.playerLegendLevel) {
      return 1;
    } else {
      return 0;
    }
  };
  AllianceMemberScrollItemComparer.compareInt = function (__s95param0, __s95param1) {
    if (__s95param0 < __s95param1) {
      return -1;
    } else if (__s95param0 > __s95param1) {
      return 1;
    } else {
      return 0;
    }
  };
  return AllianceMemberScrollItemComparer;
}();
exports.AllianceMemberScrollItemComparer = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
