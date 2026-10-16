Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTextFieldHelper = require("gge-module:export_CastleTextFieldHelper");
var __dep_export_AResourcePanelToolTip = require("gge-module:export_AResourcePanelToolTip");
var __dep_export_ResourcePaneltoolTipIconWithText = require("gge-module:export_ResourcePaneltoolTipIconWithText");
var __dep_export_ResourcePanelToolTipSingleLineText = require("gge-module:export_ResourcePanelToolTipSingleLineText");
var __s0local0 = function (__s1param0) {
  function ResourcePanelToolTipSeasonMilitary() {
    var __s3local0 = this;
    __s3local0._wasSeasonOrFaction = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_SEASON_MILITARY) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResourcePanelToolTipSeasonMilitary, __s1param0);
  ResourcePanelToolTipSeasonMilitary.prototype.createItems = function () {
    this._title = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextBold());
    this._attackCount = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextBold());
    this._defenseCount = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextBold());
    this._attackMeleeCount = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._attackRangeCount = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._defenseMeleeCount = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._defenseRangeCount = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._attackMeleePower = new __dep_export_ResourcePaneltoolTipIconWithText.ResourcePaneltoolTipIconWithText(new Library.CastleInterfaceElements.McToolTipDynamicIconWithText(), new Library.CastleInterfaceElements_Icons.Icon_UnitCombatPowerMelee());
    this._attackRangePower = new __dep_export_ResourcePaneltoolTipIconWithText.ResourcePaneltoolTipIconWithText(new Library.CastleInterfaceElements.McToolTipDynamicIconWithText(), new Library.CastleInterfaceElements_Icons.Icon_UnitCombatPowerRange());
    this._defenseMeleePower = new __dep_export_ResourcePaneltoolTipIconWithText.ResourcePaneltoolTipIconWithText(new Library.CastleInterfaceElements.McToolTipDynamicIconWithText(), new Library.CastleInterfaceElements_Icons.Icon_UnitCombatDefenceMelee());
    this._defenseRangePower = new __dep_export_ResourcePaneltoolTipIconWithText.ResourcePaneltoolTipIconWithText(new Library.CastleInterfaceElements.McToolTipDynamicIconWithText(), new Library.CastleInterfaceElements_Icons.Icon_UnitCombatDefenceRange());
    this._capacity = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._items.push(this._title);
    this._items.push(this._attackCount);
    this._items.push(this._attackMeleeCount);
    this._items.push(this._attackMeleePower);
    this._items.push(this._attackRangeCount);
    this._items.push(this._attackRangePower);
    this._items.push(new Library.CastleInterfaceElements.divider());
    this._items.push(this._defenseCount);
    this._items.push(this._defenseMeleeCount);
    this._items.push(this._defenseMeleePower);
    this._items.push(this._defenseRangeCount);
    this._items.push(this._defenseRangePower);
    if (this.isSeason || this.isFaction) {
      this._items.push(new Library.CastleInterfaceElements.divider());
      this._items.push(this._capacity);
    }
    this._wasSeasonOrFaction = this.isSeason || this.isFaction;
  };
  ResourcePanelToolTipSeasonMilitary.prototype.setCapacity = function () {
    if (this._wasSeasonOrFaction != (this.isSeason || this.isFaction)) {
      if (this.isSeason || this.isFaction) {
        this._items.push(new Library.CastleInterfaceElements.divider());
        this._items.push(this._capacity);
      } else {
        this._items.splice(this._items.indexOf(this._capacity) - 1, 2);
      }
      this._wasSeasonOrFaction = this.isSeason || this.isFaction;
    }
  };
  ResourcePanelToolTipSeasonMilitary.prototype.updateContent = function () {
    var __s13local0;
    if (this.isSeason) {
      __s13local0 = __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.unitInventory;
    } else {
      (__s13local0 = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary()).addAll(__dep_export_CastleModel.CastleModel.militaryData.unitInventory.getSoldiers());
      __s13local0.addAll(__dep_export_CastleModel.CastleModel.militaryData.unitStrongholdInventory.getSoldiers());
    }
    var __s13local1 = __dep_exact_f855840627e6e145.int(__s13local0.getUnitCount(ResourcePanelToolTipSeasonMilitary.nonAuxiliariesByUnitAndFightType("", __dep_export_ClientConstCastle.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_OFFENSIVE)));
    var __s13local2 = __dep_exact_f855840627e6e145.int(__s13local0.getUnitCount(ResourcePanelToolTipSeasonMilitary.nonAuxiliariesByUnitAndFightType("", __dep_export_ClientConstCastle.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_DEFENSIVE)));
    var __s13local3 = __dep_exact_f855840627e6e145.int(__s13local0.getUnitCount(ResourcePanelToolTipSeasonMilitary.nonAuxiliariesByUnitAndFightType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE, __dep_export_ClientConstCastle.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_OFFENSIVE)));
    var __s13local4 = __dep_exact_f855840627e6e145.int(__s13local0.getUnitCount(ResourcePanelToolTipSeasonMilitary.nonAuxiliariesByUnitAndFightType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE, __dep_export_ClientConstCastle.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_OFFENSIVE)));
    var __s13local5 = __dep_exact_f855840627e6e145.int(__s13local0.getUnitCount(ResourcePanelToolTipSeasonMilitary.nonAuxiliariesByUnitAndFightType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE, __dep_export_ClientConstCastle.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_DEFENSIVE)));
    var __s13local6 = __dep_exact_f855840627e6e145.int(__s13local0.getUnitCount(ResourcePanelToolTipSeasonMilitary.nonAuxiliariesByUnitAndFightType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE, __dep_export_ClientConstCastle.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_DEFENSIVE)));
    var __s13local7 = __dep_exact_f855840627e6e145.int(this.getPower(__s13local0.getUnits(ResourcePanelToolTipSeasonMilitary.nonAuxiliariesByUnitAndFightType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE, __dep_export_ClientConstCastle.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_OFFENSIVE))));
    var __s13local8 = __dep_exact_f855840627e6e145.int(this.getPower(__s13local0.getUnits(ResourcePanelToolTipSeasonMilitary.nonAuxiliariesByUnitAndFightType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE, __dep_export_ClientConstCastle.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_OFFENSIVE))));
    var __s13local9 = __dep_exact_f855840627e6e145.int(this.getPower(__s13local0.getUnits(ResourcePanelToolTipSeasonMilitary.nonAuxiliariesByUnitAndFightType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE, __dep_export_ClientConstCastle.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_DEFENSIVE))));
    var __s13local10 = __dep_exact_f855840627e6e145.int(this.getPower(__s13local0.getUnits(ResourcePanelToolTipSeasonMilitary.nonAuxiliariesByUnitAndFightType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE, __dep_export_ClientConstCastle.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_DEFENSIVE))));
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._title.tf, "military");
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._attackCount.tf, __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_ASSIGN_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("attackunit"), __s13local1]);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._defenseCount.tf, __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_ASSIGN_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("defenceunit"), __s13local2]);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._attackMeleeCount.tf, __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_ASSIGN_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("melees"), __s13local3]);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._attackRangeCount.tf, __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_ASSIGN_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("ranges"), __s13local4]);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._defenseMeleeCount.tf, __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_ASSIGN_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("melees"), __s13local5]);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._defenseRangeCount.tf, __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_ASSIGN_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("ranges"), __s13local6]);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetNumber(this._attackMeleePower.tf, __s13local7);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetNumber(this._attackRangePower.tf, __s13local8);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetNumber(this._defenseMeleePower.tf, __s13local9);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetNumber(this._defenseRangePower.tf, __s13local10);
    if (this.isSeason || this.isFaction) {
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._capacity.tf, __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_ASSIGN_COLON, [__dep_exact_92d05af59ee2ff30.Localize.text("capacity"), __dep_export_CastleModel.CastleModel.areaData.activeArea.morality.maxUnitStorage]);
    }
  };
  Object.defineProperty(ResourcePanelToolTipSeasonMilitary.prototype, "isSeason", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_TREASURE_CAMP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourcePanelToolTipSeasonMilitary.prototype, "isFaction", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_FACTION_CAMP;
    },
    enumerable: true,
    configurable: true
  });
  ResourcePanelToolTipSeasonMilitary.prototype.getPower = function (__s22param0) {
    var __s22local0 = 0;
    if (__s22param0 != null) {
      for (var __s22local1 = 0, __s22local2 = __s22param0; __s22local1 < __s22local2.length; __s22local1++) {
        var __s22local3 = __s22local2[__s22local1];
        if (__s22local3 !== undefined) {
          __s22local0 += __s22local3.role == __dep_export_SoldierUnitVO.SoldierUnitVO.ROLE_MELEE ? __dep_exact_f855840627e6e145.int((__s22local3.isOffensive ? __s22local3.meleeAttack : __s22local3.meleeDefence) * __s22local3.inventoryAmount) : __dep_exact_f855840627e6e145.int((__s22local3.isOffensive ? __s22local3.rangeAttack : __s22local3.rangeDefence) * __s22local3.inventoryAmount);
        }
      }
    }
    return __s22local0;
  };
  ResourcePanelToolTipSeasonMilitary.nonAuxiliariesByUnitAndFightType = function (__s28param0, __s28param1) {
    return function (__s30param0) {
      var __s30local0 = __dep_exact_81dacdf05bd32292.castAs(__s30param0, "SoldierUnitVO");
      return !!__s30local0 && (__s30local0.isDefensive && __s28param1 == __dep_export_ClientConstCastle.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_DEFENSIVE || __s30local0.isOffensive && __s28param1 == __dep_export_ClientConstCastle.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_OFFENSIVE) && (!__s28param0 || __s30param0.unitType == __s28param0) && !__s30param0.isAuxiliary;
    };
  };
  return ResourcePanelToolTipSeasonMilitary;
}(__dep_export_AResourcePanelToolTip.AResourcePanelToolTip);
exports.ResourcePanelToolTipSeasonMilitary = __s0local0;
var __dep_export_UnitInventoryDictionary = require("gge-module:export_UnitInventoryDictionary");
var __dep_export_SoldierUnitVO = require("gge-module:export_SoldierUnitVO");
var __dep_export_ResourcePanelToolTipManager = require("gge-module:export_ResourcePanelToolTipManager");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "Container");
