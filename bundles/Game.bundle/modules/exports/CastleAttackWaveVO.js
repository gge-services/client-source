Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleAttackWaveVO(__s3param0, __s3param1 = 0, __s3param2 = null) {
    this._allItems = [];
    this._allTools = [];
    this._allUnits = [];
    this._target = __s3param2;
    __s3param0 = __dep_exact_f855840627e6e145.int(Math.max(__s3param0, __s3param1));
    var __s3local0 = 0;
    if (__s3param2 && __s3param2.ownerInfo && (__s3param2.hasOtherPlayerInfo && !__dep_export_PlayerHelper.PlayerHelper.isNPCPlayer(__s3param2.ownerInfo.playerID) || __dep_export_PlayerHelper.PlayerHelper.isNpcPvpPlayer(__s3param2.ownerInfo.playerID)) && __s3param0 >= __dep_exact_26a421b704832cff_1.PlayerConst.LEVEL_CAP && __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_exact_26a421b704832cff_1.PlayerConst.LEVEL_CAP) {
      __s3local0 += __dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.ADDITIONAL_ATTACK_TOOL_AMOUNT_FLANK);
    }
    var __s3local1 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.CombatConst.getTotalAmountToolsFlank(__s3param0, __s3local0));
    var __s3local2 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.CombatConst.getAmountSoldiersFlank(__s3param0, 0));
    var __s3local3 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.CombatConst.getTotalAmountToolsMiddle(__s3param0));
    var __s3local4 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.CombatConst.getAmountSoldiersMiddle(__s3param0, 0));
    this._itemsLeftWall_tools = new __dep_export_CastleFightItemContainer.CastleFightItemContainer(__dep_exact_26a421b704832cff.CombatConst.ITEMS_LEFTWALL_TOOLS, __dep_exact_26a421b704832cff.CombatConst.LEVELS_LEFTWALL_TOOLS, __s3param0, __s3local1);
    this._itemsLeftWall_units = new __dep_export_CastleFightItemContainer.CastleFightItemContainer(__dep_exact_26a421b704832cff.CombatConst.ITEMS_LEFTWALL_UNITS, __dep_exact_26a421b704832cff.CombatConst.LEVELS_LEFTWALL_UNITS, __s3param0, __s3local2);
    this._itemsMiddleWall_tools = new __dep_export_CastleFightItemContainer.CastleFightItemContainer(__dep_exact_26a421b704832cff.CombatConst.ITEMS_MIDDLEWALL_TOOLS, __dep_exact_26a421b704832cff.CombatConst.LEVELS_MIDDLEWALL_TOOLS, __s3param0, __s3local3);
    this._itemsMiddleWall_units = new __dep_export_CastleFightItemContainer.CastleFightItemContainer(__dep_exact_26a421b704832cff.CombatConst.ITEMS_MIDDLEWALL_UNITS, __dep_exact_26a421b704832cff.CombatConst.LEVELS_MIDDLEWALL_UNITS, __s3param0, __s3local4);
    this._itemsRightWall_tools = new __dep_export_CastleFightItemContainer.CastleFightItemContainer(__dep_exact_26a421b704832cff.CombatConst.ITEMS_RIGHTWALL_TOOLS, __dep_exact_26a421b704832cff.CombatConst.LEVELS_RIGHTWALL_TOOLS, __s3param0, __s3local1);
    this._itemsRightWall_units = new __dep_export_CastleFightItemContainer.CastleFightItemContainer(__dep_exact_26a421b704832cff.CombatConst.ITEMS_RIGHTWALL_UNITS, __dep_exact_26a421b704832cff.CombatConst.LEVELS_RIGHTWALL_UNITS, __s3param0, __s3local2);
    this._allTools.push(this._itemsMiddleWall_tools);
    this._allTools.push(this._itemsLeftWall_tools);
    this._allTools.push(this._itemsRightWall_tools);
    this._allUnits.push(this._itemsMiddleWall_units);
    this._allUnits.push(this._itemsLeftWall_units);
    this._allUnits.push(this._itemsRightWall_units);
    this._allItems = this._allTools.concat(this._allUnits);
  }
  CastleAttackWaveVO.prototype.getWaveInfoObject = function () {
    var __s6local0 = {
      L: {},
      R: {},
      M: {}
    };
    __s6local0.L.T = this._itemsLeftWall_tools.getSlotList();
    __s6local0.L.U = this._itemsLeftWall_units.getSlotList();
    __s6local0.M.T = this._itemsMiddleWall_tools.getSlotList();
    __s6local0.M.U = this._itemsMiddleWall_units.getSlotList();
    __s6local0.R.T = this._itemsRightWall_tools.getSlotList();
    __s6local0.R.U = this._itemsRightWall_units.getSlotList();
    return __s6local0;
  };
  CastleAttackWaveVO.prototype.getLowestTravelSpeed = function (__s8param0 = false, __s8param1 = null) {
    var __s8local0 = __dep_exact_f855840627e6e145.int(Number.MAX_VALUE);
    if (this._allItems != null) {
      for (var __s8local1 = 0, __s8local2 = this._allItems; __s8local1 < __s8local2.length; __s8local1++) {
        var __s8local3 = __s8local2[__s8local1];
        if (__s8local3 !== undefined) {
          __s8local0 = __dep_exact_f855840627e6e145.int(Math.min(__s8local0, __s8local3.getLowestTravelSpeed(__s8param0, __s8param1)));
        }
      }
    }
    return __s8local0;
  };
  CastleAttackWaveVO.prototype.isWaveComplete = function () {
    return this.getSumOfUnits() > 0;
  };
  CastleAttackWaveVO.prototype.getSumOfItems = function () {
    var __s16local0 = 0;
    if (this._allItems != null) {
      for (var __s16local1 = 0, __s16local2 = this._allItems; __s16local1 < __s16local2.length; __s16local1++) {
        var __s16local3 = __s16local2[__s16local1];
        if (__s16local3 !== undefined) {
          __s16local0 += __s16local3.sumOfItems;
        }
      }
    }
    return __s16local0;
  };
  CastleAttackWaveVO.prototype.getSumOfUnits = function () {
    var __s22local0 = 0;
    if (this._allUnits != null) {
      for (var __s22local1 = 0, __s22local2 = this._allUnits; __s22local1 < __s22local2.length; __s22local1++) {
        var __s22local3 = __s22local2[__s22local1];
        if (__s22local3 !== undefined) {
          __s22local0 += __s22local3.sumOfItems;
        }
      }
    }
    return __s22local0;
  };
  CastleAttackWaveVO.prototype.getSumOfTools = function () {
    var __s28local0 = 0;
    if (this._allTools != null) {
      for (var __s28local1 = 0, __s28local2 = this._allTools; __s28local1 < __s28local2.length; __s28local1++) {
        var __s28local3 = __s28local2[__s28local1];
        if (__s28local3 !== undefined) {
          __s28local0 += __s28local3.sumOfItems;
        }
      }
    }
    return __s28local0;
  };
  CastleAttackWaveVO.prototype.getSumOfToolsByTool = function (__s34param0) {
    var __s34local0 = 0;
    if (this._allTools != null) {
      for (var __s34local1 = 0, __s34local2 = this._allTools; __s34local1 < __s34local2.length; __s34local1++) {
        var __s34local3 = __s34local2[__s34local1];
        if (__s34local3 !== undefined) {
          __s34local0 += __dep_exact_f855840627e6e145.int(__s34local3.getAmountOfToolInContainer(__s34param0));
        }
      }
    }
    return __s34local0;
  };
  Object.defineProperty(CastleAttackWaveVO.prototype, "itemsLeftWall_tools", {
    get: function () {
      return this._itemsLeftWall_tools;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackWaveVO.prototype, "itemsLeftWall_units", {
    get: function () {
      return this._itemsLeftWall_units;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackWaveVO.prototype, "itemsMiddleWall_tools", {
    get: function () {
      return this._itemsMiddleWall_tools;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackWaveVO.prototype, "itemsMiddleWall_units", {
    get: function () {
      return this._itemsMiddleWall_units;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackWaveVO.prototype, "itemsRightWall_tools", {
    get: function () {
      return this._itemsRightWall_tools;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackWaveVO.prototype, "itemsRightWall_units", {
    get: function () {
      return this._itemsRightWall_units;
    },
    enumerable: true,
    configurable: true
  });
  CastleAttackWaveVO.prototype.findEffectingFlankTools = function (__s52param0) {
    if (this.itemsLeftWall_units.containsUnit(__s52param0)) {
      return this.itemsLeftWall_tools;
    } else if (this.itemsMiddleWall_units.containsUnit(__s52param0)) {
      return this.itemsMiddleWall_tools;
    } else if (this.itemsRightWall_units.containsUnit(__s52param0)) {
      return this.itemsRightWall_tools;
    } else {
      return null;
    }
  };
  Object.defineProperty(CastleAttackWaveVO.prototype, "target", {
    get: function () {
      return this._target;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackWaveVO.prototype, "flanks", {
    get: function () {
      return this._allItems;
    },
    enumerable: true,
    configurable: true
  });
  CastleAttackWaveVO.prototype.getAllUnitsAsVector = function () {
    var __s62local0 = [];
    var __s62local1 = 0;
    for (__s62local1 = 0; __s62local1 < this._allUnits.length; __s62local1++) {
      for (var __s62local2 = 0, __s62local3 = this._allUnits[__s62local1].items; __s62local2 < __s62local3.length; __s62local2++) {
        var __s62local4 = __s62local3[__s62local2];
        if (__s62local4 !== undefined && __s62local4.unitVO) {
          __s62local0.push(__s62local4.unitVO);
        }
      }
    }
    for (__s62local1 = 0; __s62local1 < this._allTools.length; __s62local1++) {
      for (var __s62local5 = 0, __s62local6 = this._allTools[__s62local1].items; __s62local5 < __s62local6.length; __s62local5++) {
        var __s62local7 = __s62local6[__s62local5];
        if (__s62local7 !== undefined && __s62local7.unitVO) {
          __s62local0.push(__s62local7.unitVO);
        }
      }
    }
    return __s62local0;
  };
  CastleAttackWaveVO.prototype.exceedsUnitLimit = function () {
    return this._allUnits.some(function (__s76param0) {
      return __s76param0.exceedsLimit();
    });
  };
  return CastleAttackWaveVO;
}();
exports.CastleAttackWaveVO = __s0local0;
var __dep_export_CastleFightItemContainer = require("gge-module:export_CastleFightItemContainer");
var __dep_export_PlayerHelper = require("gge-module:export_PlayerHelper");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleLegendSkillEffectsEnum = require("gge-module:export_CastleLegendSkillEffectsEnum");
