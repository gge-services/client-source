Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_UnitBaseLocationEnum = require("gge-module:export_UnitBaseLocationEnum");
var __s0local0 = function (__s1param0) {
  function DummyMapobjectVO() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DummyMapobjectVO, __s1param0);
  DummyMapobjectVO.prototype.parseAreaInfo = function (__s5param0) {
    this._areaType = __s5param0[0];
    this._absAreaPosX = __s5param0[1];
    this._absAreaPosY = __s5param0[2];
  };
  Object.defineProperty(DummyMapobjectVO.prototype, "areaNameStringShort", {
    get: function () {
      return this.areaNameString;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "baseWallBonus", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "baseGateBonus", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "baseMoatBonus", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "wallLevel", {
    get: function () {
      return 0;
    },
    set: function (__s17param0) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "keepLevel", {
    get: function () {
      return 0;
    },
    set: function (__s21param0) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "towerLevel", {
    get: function () {
      return 0;
    },
    set: function (__s25param0) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "gateLevel", {
    get: function () {
      return 0;
    },
    set: function (__s29param0) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "moatLevel", {
    get: function () {
      return 0;
    },
    set: function (__s33param0) {},
    enumerable: true,
    configurable: true
  });
  DummyMapobjectVO.prototype.parseAreaInfoBattleLog = function (__s35param0) {};
  Object.defineProperty(DummyMapobjectVO.prototype, "areaNameString", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("kingdom_emptyTile");
    },
    set: function (__s39param0) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "ownerInfo", {
    get: function () {
      return null;
    },
    set: function (__s43param0) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "isOwnMapobject", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "remainingCooldownTimeInSeconds", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "secondsSinceEspionage", {
    get: function () {
      return 0;
    },
    set: function (__s51param0) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "remainingSpyInfoTime", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "remainingOpenGateTime", {
    get: function () {
      return 0;
    },
    set: function (__s57param0) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "openGateCounter", {
    get: function () {
      return 0;
    },
    set: function (__s61param0) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "remainingAbandonOutpostTime", {
    get: function () {
      return 0;
    },
    set: function (__s65param0) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "remainingCancelAbandonOutpostTime", {
    get: function () {
      return 0;
    },
    set: function (__s69param0) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "remainingCooldownAbandonOutpostTime", {
    get: function () {
      return 0;
    },
    set: function (__s73param0) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "outpostType", {
    get: function () {
      return 0;
    },
    set: function (__s77param0) {},
    enumerable: true,
    configurable: true
  });
  DummyMapobjectVO.prototype.canBeAttacked = function () {
    return false;
  };
  DummyMapobjectVO.prototype.canBeAttackedButHasPeacemode = function () {
    return false;
  };
  Object.defineProperty(DummyMapobjectVO.prototype, "isCoolingDown", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  DummyMapobjectVO.prototype.canBePlagueAttacked = function () {
    return false;
  };
  DummyMapobjectVO.prototype.canBeConquered = function () {
    return false;
  };
  Object.defineProperty(DummyMapobjectVO.prototype, "isConqueredByMe", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  DummyMapobjectVO.prototype.canBeAttackedAndConquered = function () {
    return false;
  };
  DummyMapobjectVO.prototype.canBeSupported = function () {
    return false;
  };
  DummyMapobjectVO.prototype.canBeTroupsSended = function () {
    return false;
  };
  Object.defineProperty(DummyMapobjectVO.prototype, "canBeTraded", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "canBeVisited", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "canBeSpied", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "hasOtherPlayerInfo", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "isUnderConquerControl", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "remainingCooldownSabotageTimeInSeconds", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "canBeSabotaged", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "canChangeDefenceOnWorldmap", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "controllerWorldMapOwnerInfoVO", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  DummyMapobjectVO.prototype.equalsOtherWMO = function (__s115param0, __s115param1) {
    return false;
  };
  Object.defineProperty(DummyMapobjectVO.prototype, "bookmark", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "ignoresPeaceMode", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "hasNameLabel", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "cooldownCanBeSkipped", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "skipCooldownCostC2", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "totalCooldownTime", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "attackType", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "unitBaseLocation", {
    get: function () {
      return __dep_export_UnitBaseLocationEnum.UnitBaseLocationEnum.DEFAULT;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "spaceID", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "isInSpyLevelRange", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "isNpcCapital", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  DummyMapobjectVO.prototype.getDisplayObjectClipContainer = function (__s141param0, __s141param1, __s141param2 = false) {
    return null;
  };
  Object.defineProperty(DummyMapobjectVO.prototype, "chargeRank", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "customConnections", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DummyMapobjectVO.prototype, "temporarySabotageProtection", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  return DummyMapobjectVO;
}(require("gge-module:export_EmptyMapobjectVO").EmptyMapobjectVO);
exports.DummyMapobjectVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IWorldmapObjectVO");
