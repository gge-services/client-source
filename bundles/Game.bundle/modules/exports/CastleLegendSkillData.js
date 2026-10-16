Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleLegendSkillData(__s3param0) {
    this._availablePoints = 0;
    this._totalSkillPoints = 0;
    this._lastResetTimeStamp = 0;
    this._newResetTimeStamp = 0;
    this._waitingForServer = false;
    this._resetsCounter = 0;
    this.parseXML(__s3param0);
  }
  CastleLegendSkillData.prototype.parseXML = function (__s5param0) {
    if (!this._skills) {
      this._skills = new Map();
      this._userSkills = [];
    }
    if (!this._sceatSkills) {
      this._sceatSkills = new Map();
      this._sceatUserSkills = [];
    }
    var __s5local0 = __s5param0.legendskills;
    this._skillTree = new __dep_export_CastleLegendSkillTreeRoot.CastleLegendSkillTreeRoot(0);
    if (__s5local0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5local0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          var __s5local4 = new __dep_export_CastleLegendSkillVO.CastleLegendSkillVO();
          __s5local4.parseXML(__s5local3);
          this._skills.set(__s5local4.id, __s5local4);
          this._skillTree.insertSkill(__s5local4);
        }
      }
    }
    var __s5local5 = __s5param0.sceatSkills;
    if (__s5local5 != null) {
      for (var __s5local6 = 0, __s5local7 = __s5local5; __s5local6 < __s5local7.length; __s5local6++) {
        var __s5local8 = __s5local7[__s5local6];
        var __s5local9 = new __dep_export_CastleSceatSkillVO.CastleSceatSkillVO();
        __s5local9.parseXML(__s5local8);
        this._sceatSkills.set(__s5local9.id, __s5local9);
        this._skillTree.insertSkill(__s5local9);
      }
    }
    this._sceatTreeTabMap = new Map();
    var __s5local10 = __s5param0.sceatSkillTrees;
    if (__s5local10 != null) {
      for (var __s5local11 = 0, __s5local12 = __s5local10; __s5local11 < __s5local12.length; __s5local11++) {
        var __s5local13 = __s5local12[__s5local11];
        if ((__s5local19 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("skillTreeID", __s5local13, "-1"))) >= 0) {
          var __s5local14 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("tabID", __s5local13, "-1")) + 1;
          if (this._sceatTreeTabMap.has(__s5local14)) {
            this._sceatTreeTabMap.get(__s5local14).push(__s5local19);
          } else {
            this._sceatTreeTabMap.set(__s5local14, [__s5local19]);
          }
          this.parseUnlockRequirementsForNode(this.getSkillTreeNode(__s5local19), __s5local13);
        }
      }
    }
    var __s5local15 = __s5param0.sceatSkillTiers;
    if (__s5local15 != null) {
      for (var __s5local16 = 0, __s5local17 = __s5local15; __s5local16 < __s5local17.length; __s5local16++) {
        var __s5local18 = __s5local17[__s5local16];
        var __s5local19 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("skillTreeID", __s5local18, "-1"));
        var __s5local20 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("tier", __s5local18, "-1"));
        var __s5local21 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("requirePreviousTierUnlocked", __s5local18, "1")) == 1;
        if (__s5local19 >= 0 && __s5local20 > 0) {
          var __s5local22 = this.getSkillTreeNode(__s5local19, __s5local20);
          if (!__s5local22) {
            continue;
          }
          this.parseUnlockRequirementsForNode(__s5local22, __s5local18);
          if (__s5local21) {
            __s5local22.addUnlockRequirement(new __dep_export_TreeNodeUnlockRequirementUnlockPreviousTier.TreeNodeUnlockRequirementUnlockPreviousTier(__s5local19, __s5local20));
            __s5local22.addUnlockRequirement(new __dep_export_TreeNodeUnlockRequirementActivateAllPreviousSkills.TreeNodeUnlockRequirementActivateAllPreviousSkills(__s5local19, __s5local20));
          }
        }
      }
    }
  };
  CastleLegendSkillData.prototype.parseUnlockRequirementsForNode = function (__s28param0, __s28param1) {
    if (__s28param0) {
      for (var __s28local0 = 0, __s28local1 = __dep_export_TreeNodeUnlockRequirementsCreator.TreeNodeUnlockRequirementsCreator.createUnlockRequirements(__s28param1); __s28local0 < __s28local1.length; __s28local0++) {
        var __s28local2 = __s28local1[__s28local0];
        __s28param0.addUnlockRequirement(__s28local2);
      }
    }
  };
  CastleLegendSkillData.prototype.parse_SKL = function (__s33param0) {
    this._userSkills = [];
    this._skillIDArray = [];
    var __s33local0 = __s33param0.SID;
    if (__s33local0) {
      for (var __s33local1 = 0, __s33local2 = __s33local0; __s33local1 < __s33local2.length; __s33local1++) {
        if ((__s33local11 = __s33local2[__s33local1]) !== undefined) {
          var __s33local3 = this.getSkillByID(__s33local11);
          this._userSkills.push(__s33local3);
          this._skillIDArray.push(__s33local11);
        }
      }
    }
    this._sceatUserSkills = [];
    if (__s33local0 = __s33param0.SIDS) {
      for (var __s33local4 = 0, __s33local5 = __s33local0; __s33local4 < __s33local5.length; __s33local4++) {
        if ((__s33local11 = __s33local5[__s33local4]) !== undefined) {
          var __s33local6 = this.getSceatSkillByID(__s33local11);
          this._sceatUserSkills.push(__s33local6);
        }
      }
    }
    this._totalSkillPoints = parseInt(__s33param0.SP);
    this._availablePoints = this._totalSkillPoints - this.getSpentPoints();
    this._newResetTimeStamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s33param0.RS * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this._lastResetTimeStamp = this._newResetTimeStamp - __dep_exact_26a421b704832cff.LegendSkillConst.RESET_COOLDOWN_IN_SECONDS * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this._resetsCounter = parseInt(__s33param0.RC);
    this._sceatSkillsInProgress = [];
    var __s33local7 = __s33param0.SSA;
    if (__s33local7 != null) {
      for (var __s33local8 = 0, __s33local9 = __s33local7; __s33local8 < __s33local9.length; __s33local8++) {
        var __s33local10 = __s33local9[__s33local8];
        if (__s33local10 !== undefined) {
          var __s33local11 = __s33local10.ID;
          var __s33local12 = __s33local10.RS;
          __s33local6 = this.getSceatSkillByID(__s33local11);
          this._sceatSkillsInProgress.push(__s33local6);
          __s33local6.setRemainingActivationTime(__s33local12);
        }
      }
    }
    this.controller.dispatchEvent(new __dep_export_LegendSkillsDataEvent.LegendSkillsDataEvent(__dep_export_LegendSkillsDataEvent.LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED));
    this._waitingForServer = false;
  };
  CastleLegendSkillData.prototype.parse_SKP = function (__s47param0) {
    if (__s47param0.IDS) {
      var __s47local0 = __s47param0.IDS;
      if (__s47local0 != null) {
        for (var __s47local1 = 0, __s47local2 = __s47local0; __s47local1 < __s47local2.length; __s47local1++) {
          var __s47local3 = __s47local2[__s47local1];
          var __s47local4 = __dep_exact_f855840627e6e145.int(__s47local3);
          if (__s47local4 !== undefined) {
            var __s47local5 = this.getSkillByID(__s47local4);
            var __s47local6 = this.getSkillByID(__s47local5.previousID);
            if (__s47local6 && this._userSkills.indexOf(__s47local6) > -1) {
              this._userSkills.splice(this._userSkills.indexOf(__s47local6), 1);
            }
            if (this._userSkills.indexOf(__s47local5) < 0) {
              this._userSkills.push(__s47local5);
              this._availablePoints -= __s47local5.cost;
            }
          }
        }
      }
      this.controller.dispatchEvent(new __dep_export_LegendSkillsDataEvent.LegendSkillsDataEvent(__dep_export_LegendSkillsDataEvent.LegendSkillsDataEvent.LEGEND_SKILL_ADDED));
      this.controller.dispatchEvent(new __dep_export_LegendSkillsDataEvent.LegendSkillsDataEvent(__dep_export_LegendSkillsDataEvent.LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED));
    }
    this._waitingForServer = false;
  };
  CastleLegendSkillData.prototype.isSkillActive = function (__s56param0) {
    if (__s56param0 instanceof __dep_export_CastleSceatSkillVO.CastleSceatSkillVO) {
      return this._sceatUserSkills.some(function (__s59param0) {
        return __s59param0.skillGroupID == __s56param0.skillGroupID && __s59param0.level >= __s56param0.level;
      });
    } else {
      return this._userSkills.indexOf(__s56param0) > -1;
    }
  };
  CastleLegendSkillData.prototype.getSkillByID = function (__s62param0) {
    if (this._skills.get(__s62param0)) {
      return this._skills.get(__s62param0);
    } else {
      return null;
    }
  };
  CastleLegendSkillData.prototype.getSceatSkillByID = function (__s66param0) {
    if (this._sceatSkills.get(__s66param0)) {
      return this._sceatSkills.get(__s66param0);
    } else {
      return null;
    }
  };
  CastleLegendSkillData.prototype.getTotalValueOfLegendSkillEffect = function (__s70param0) {
    var __s70local0 = 0;
    if (this._userSkills != null) {
      for (var __s70local1 = 0, __s70local2 = this._userSkills; __s70local1 < __s70local2.length; __s70local1++) {
        var __s70local3 = __s70local2[__s70local1];
        if (__s70local3 !== undefined && __s70local3.effectType == __s70param0) {
          __s70local0 += __s70local3.totalEffectValue;
        }
      }
    }
    return __s70local0;
  };
  CastleLegendSkillData.prototype.getTotalSkillValue = function (__s76param0) {
    var __s76local0 = 0;
    for (var __s76local1 = 0, __s76local2 = this.getSkillTreeNode(__s76param0.skillTreeID, __s76param0.tier, __s76param0.skillGroupID).childs; __s76local1 < __s76local2.length; __s76local1++) {
      var __s76local3 = __s76local2[__s76local1];
      if (__s76local3 !== undefined && (__s76local0 += __s76local3.legendSkillVO.effectValue, __s76local3.legendSkillVO.id == __s76param0.id)) {
        break;
      }
    }
    return __s76local0;
  };
  CastleLegendSkillData.prototype.getSpentPoints = function (__s81param0 = -1, __s81param1 = -1) {
    var __s81local0 = 0;
    if (this._userSkills != null) {
      for (var __s81local1 = 0, __s81local2 = this._userSkills; __s81local1 < __s81local2.length; __s81local1++) {
        var __s81local3 = __s81local2[__s81local1];
        if (__s81local3 !== undefined) {
          if ((__s81param0 == -1 || __s81local3.skillTreeID == __s81param0) && (__s81param1 == -1 || __s81local3.tier == __s81param1)) {
            __s81local0 += __s81local3.totalSkillPointsCost;
          }
        }
      }
    }
    return __s81local0;
  };
  CastleLegendSkillData.prototype.resetSkills = function () {
    this._userSkills = [];
    this._sceatUserSkills = [];
    this.requestSkillsListFromServer();
    this.controller.dispatchEvent(new __dep_export_LegendSkillsDataEvent.LegendSkillsDataEvent(__dep_export_LegendSkillsDataEvent.LegendSkillsDataEvent.LEGEND_SKILLS_RESET));
    this.controller.dispatchEvent(new __dep_export_LegendSkillsDataEvent.LegendSkillsDataEvent(__dep_export_LegendSkillsDataEvent.LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED));
  };
  CastleLegendSkillData.prototype.isTierUnlocked = function (__s90param0, __s90param1) {
    return this.isNodeUnlocked(__s90param0, __s90param1);
  };
  CastleLegendSkillData.prototype.isTierUnlockedBySkillsSelectable = function (__s92param0, __s92param1) {
    var __s92local0 = this.getSkillTreeNode(__s92param0, __s92param1);
    if (!__s92local0.isUnlocked()) {
      return false;
    }
    for (var __s92local1 = 0; __s92local1 < __s92local0.childs.length; __s92local1++) {
      for (var __s92local2 = __s92local0.childs[__s92local1], __s92local3 = 0; __s92local3 < __s92local2.childs.length; __s92local3++) {
        var __s92local4 = __s92local2.childs[__s92local3];
        if (__s92local4.legendSkillVO.level == 1 && __s92local4.legendSkillVO.isUnlocked() || __s92local4.legendSkillVO.isActive) {
          console.log("skillTreeID: " + __s92param0 + ", tier: " + __s92param1 + ", skillGroupID: " + __s92local2.id + ", skillLevelID: " + __s92local4.id + ", isUnlocked: " + __s92local4.isUnlocked());
          return true;
        }
      }
    }
    return false;
  };
  CastleLegendSkillData.prototype.isNodeUnlocked = function (__s100param0, __s100param1 = 0) {
    var __s100local0 = this.getSkillTreeNode(__s100param0);
    return (!__s100local0 || !!__s100local0.isUnlocked()) && (!(__s100param1 > 0) || !(__s100local0 = this.getSkillTreeNode(__s100param0, __s100param1)) || !!__s100local0.isUnlocked());
  };
  CastleLegendSkillData.prototype.getNodeUnlockText = function (__s102param0, __s102param1 = 0) {
    var __s102local0 = this.getSkillTreeNode(__s102param0);
    if (__s102local0.getUnlockText() != "") {
      return __s102local0.getUnlockText();
    } else if (__s102param1 > 0 && (__s102local0 = this.getSkillTreeNode(__s102param0, __s102param1)).getUnlockText() != "") {
      return __s102local0.getUnlockText();
    } else {
      return "";
    }
  };
  CastleLegendSkillData.prototype.pointsLeftToUnlockTier = function (__s107param0, __s107param1) {
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.LegendSkillConst.pointsNeededForTier(__s107param1) - this.getSpentPoints(__s107param0, __s107param1 - 1));
  };
  Object.defineProperty(CastleLegendSkillData.prototype, "skillPointsLeft", {
    get: function () {
      return this._availablePoints;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillData.prototype.getMaxSkillLevelInGroup = function (__s111param0, __s111param1, __s111param2) {
    return __dep_exact_f855840627e6e145.int(this.getSkillTreeNode(__s111param0, __s111param1, __s111param2).childs.length);
  };
  CastleLegendSkillData.prototype.getCurrentSkillInGroup = function (__s113param0, __s113param1, __s113param2) {
    var __s113local0;
    var __s113local1 = this.getSkillTreeNode(__s113param0, __s113param1, __s113param2);
    for (var __s113local2 = 0, __s113local3 = __s113local1.childs; __s113local2 < __s113local3.length; __s113local2++) {
      var __s113local4 = __s113local3[__s113local2];
      if (__s113local4 !== undefined && (!__s113local0 || (__s113local4.legendSkillVO.isActive || this.isSceatSkillInProgress(__s113local4.legendSkillVO)) && __s113local4.legendSkillVO.level > __s113local0.level)) {
        __s113local0 = __s113local4.legendSkillVO;
      }
    }
    if (__s113local0) {
      return __s113local0;
    }
    return __s113local1.getChildNode(1).legendSkillVO;
  };
  CastleLegendSkillData.prototype.getNextLevel = function (__s119param0) {
    return this.getSkillTreeNode(__s119param0.skillTreeID, __s119param0.tier, __s119param0.skillGroupID, __s119param0.level + 1).legendSkillVO;
  };
  CastleLegendSkillData.prototype.getSkillTreeNode = function (__s121param0, __s121param1, __s121param2, __s121param3) {
    var __s121local0;
    if (__s121param1 === undefined) {
      __s121param1 = 0;
    }
    if (__s121param2 === undefined) {
      __s121param2 = 0;
    }
    if (__s121param3 === undefined) {
      __s121param3 = 0;
    }
    __s121local0 = this._skillTree.getChildNode(__s121param0);
    if (__s121param1 > 0) {
      __s121local0 = __s121local0.getChildNode(__s121param1);
      if (__s121param2 > 0) {
        __s121local0 = __s121local0.getChildNode(__s121param2);
        if (__s121param3 > 0) {
          __s121local0 = __s121local0.getChildNode(__s121param3);
        }
      }
    }
    return __s121local0;
  };
  Object.defineProperty(CastleLegendSkillData.prototype, "userSkills", {
    get: function () {
      return this._userSkills;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillData.prototype.requestSkillsListFromServer = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetSkillListVO.C2SGetSkillListVO());
  };
  CastleLegendSkillData.prototype.requestSkillReset = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSkillsResetVO.C2SSkillsResetVO());
  };
  CastleLegendSkillData.prototype.buySkill = function (__s135param0) {
    if (!this._waitingForServer) {
      this._waitingForServer = true;
      __s135param0.buySkill();
    }
  };
  CastleLegendSkillData.prototype.hasLegendTemple = function () {
    return this._totalSkillPoints > 0;
  };
  Object.defineProperty(CastleLegendSkillData.prototype, "availablePoints", {
    get: function () {
      return this._availablePoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillData.prototype, "lastResetTimeStamp", {
    get: function () {
      return this._lastResetTimeStamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillData.prototype, "newResetTimeStamp", {
    get: function () {
      return this._newResetTimeStamp;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillData.prototype.stopWaitingForServer = function () {
    this._waitingForServer = false;
  };
  Object.defineProperty(CastleLegendSkillData.prototype, "totalSkillPoints", {
    get: function () {
      return this._totalSkillPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillData.prototype, "skillIDArray", {
    get: function () {
      return this._skillIDArray;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillData.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillData.prototype, "resetsCounter", {
    get: function () {
      return this._resetsCounter;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillData.prototype.canAffordNextLevel = function (__s156param0) {
    if (__s156param0 instanceof __dep_export_CastleSceatSkillVO.CastleSceatSkillVO) {
      var __s156local0 = __s156param0.costCurrencyID;
      return __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__s156local0) >= __s156param0.cost;
    }
    return this.availablePoints >= __s156param0.cost;
  };
  CastleLegendSkillData.prototype.isSceatSkillInProgress = function (__s159param0) {
    return this._sceatSkillsInProgress.indexOf(__s159param0) > -1;
  };
  CastleLegendSkillData.prototype.isAnyOtherSkillInProgress = function (__s161param0) {
    var __s161local0 = [];
    for (var __s161local1 = 0, __s161local2 = Array.from(this._sceatTreeTabMap.values()); __s161local1 < __s161local2.length; __s161local1++) {
      var __s161local3 = __s161local2[__s161local1];
      if (__s161local3.indexOf(__s161param0.skillTreeID) > -1) {
        __s161local0 = __s161local3;
        break;
      }
    }
    for (var __s161local4 = 0, __s161local5 = this._sceatSkillsInProgress; __s161local4 < __s161local5.length; __s161local4++) {
      var __s161local6 = __s161local5[__s161local4];
      if (__s161local0.indexOf(__s161local6.skillTreeID) > -1) {
        return true;
      }
    }
    return false;
  };
  Object.defineProperty(CastleLegendSkillData.prototype, "sceatTreeTabMap", {
    get: function () {
      return this._sceatTreeTabMap;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillData.prototype.getSceatSkillEffectsByType = function (__s171param0, __s171param1 = null) {
    __s171param1 = __s171param1 || __dep_export_CastleEffectConditionVO.CastleEffectConditionVO.NULL_CONDITION;
    var __s171local0 = [];
    this._sceatUserSkills.forEach(function (__s173param0) {
      __s173param0.boni.forEach(function (__s175param0) {
        if (__s175param0.matchesConditions(__s171param0, __s171param1.areaType, __s171param1.spaceId, __s171param1.wodId, __s171param1.otherPlayer)) {
          __s171local0.push(__s175param0);
        }
      });
    });
    return __s171local0;
  };
  CastleLegendSkillData.prototype.getSceatSkillEffectValue = function (__s178param0, __s178param1 = -1, __s178param2 = -1, __s178param3 = -1, __s178param4 = null) {
    var __s178local0 = __dep_export_CastleEffectsHelper.CastleEffectsHelper.getTotalEffectValue(this.getSceatSkillEffectsByType(__s178param0, new __dep_export_CastleEffectConditionVO.CastleEffectConditionVO(__s178param1, __s178param2, __s178param3, __s178param4)), true);
    return __s178local0 || new __s178param0.valueClass();
  };
  Object.defineProperty(CastleLegendSkillData.prototype, "meadUnitsUnlocked", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.userLegendLevel >= __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(1938).requiredLegendLevel;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillData.prototype.isTreeMaxedOut = function (__s182param0) {
    for (var __s182local0 = this.getSkillTreeNode(__s182param0), __s182local1 = 0; __s182local1 < __s182local0.childs.length; __s182local1++) {
      for (var __s182local2 = __s182local0.childs[__s182local1], __s182local3 = 0; __s182local3 < __s182local2.childs.length; __s182local3++) {
        var __s182local4 = __s182local2.childs[__s182local3];
        var __s182local5 = __s182local4.childs[__s182local4.childs.length - 1];
        if (!this.isSkillActive(__s182local5.legendSkillVO)) {
          return false;
        }
      }
    }
    return true;
  };
  Object.defineProperty(CastleLegendSkillData.prototype, "sceatSkillsInProgress", {
    get: function () {
      return this._sceatSkillsInProgress;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillData.prototype.canUpgradeAnySceatSkill = function () {
    var __s191local0 = [];
    for (var __s191local1 = 0, __s191local2 = Array.from(this._sceatTreeTabMap.values()); __s191local1 < __s191local2.length; __s191local1++) {
      var __s191local3 = __s191local2[__s191local1];
      __s191local0 = __s191local0.concat(__s191local3);
    }
    for (var __s191local4 = 0; __s191local4 < __s191local0.length; __s191local4++) {
      var __s191local5 = __s191local0[__s191local4];
      var __s191local6 = this.getSkillTreeNode(__s191local5);
      if (__s191local6.isUnlocked()) {
        for (var __s191local7 = 0; __s191local7 < __s191local6.childs.length; __s191local7++) {
          var __s191local8 = __s191local6.childs[__s191local7];
          if (!__s191local8.isUnlocked()) {
            break;
          }
          for (var __s191local9 = 0; __s191local9 < __s191local8.childs.length; __s191local9++) {
            var __s191local10 = __s191local8.childs[__s191local9];
            var __s191local11 = this.getCurrentSkillInGroup(__s191local6.id, __s191local8.id, __s191local10.id);
            var __s191local12 = __s191local11.isMaxLevel() ? __s191local11 : this.getSceatSkillByID(__s191local11.nextID);
            if (!this.isSkillActive(__s191local12) && !this.isSceatSkillInProgress(__s191local11) && this.canAffordNextLevel(__s191local12) && __s191local12.isUnlocked()) {
              return true;
            }
          }
        }
      }
    }
    return false;
  };
  CastleLegendSkillData.prototype.getTabBySkillId = function (__s204param0) {
    var __s204local0 = 0;
    var __s204local1 = this.getSceatSkillByID(__s204param0);
    this._sceatTreeTabMap.forEach(function (__s206param0, __s206param1) {
      if (__s204local1 && __s206param0.indexOf(__s204local1.skillTreeID) > -1) {
        __s204local0 = __s206param1;
      }
    });
    if (__s204local0 < 0) {
      return 0;
    } else {
      return __s204local0;
    }
  };
  return CastleLegendSkillData;
}();
exports.CastleLegendSkillData = __s0local0;
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_C2SGetSkillListVO = require("gge-module:export_C2SGetSkillListVO");
var __dep_export_C2SSkillsResetVO = require("gge-module:export_C2SSkillsResetVO");
var __dep_export_LegendSkillsDataEvent = require("gge-module:export_LegendSkillsDataEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEffectsHelper = require("gge-module:export_CastleEffectsHelper");
var __dep_export_CastleEffectConditionVO = require("gge-module:export_CastleEffectConditionVO");
var __dep_export_CastleLegendSkillTreeRoot = require("gge-module:export_CastleLegendSkillTreeRoot");
var __dep_export_CastleLegendSkillVO = require("gge-module:export_CastleLegendSkillVO");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_TreeNodeUnlockRequirementActivateAllPreviousSkills = require("gge-module:export_TreeNodeUnlockRequirementActivateAllPreviousSkills");
var __dep_export_TreeNodeUnlockRequirementsCreator = require("gge-module:export_TreeNodeUnlockRequirementsCreator");
var __dep_export_CastleSceatSkillVO = require("gge-module:export_CastleSceatSkillVO");
var __dep_export_TreeNodeUnlockRequirementUnlockPreviousTier = require("gge-module:export_TreeNodeUnlockRequirementUnlockPreviousTier");
