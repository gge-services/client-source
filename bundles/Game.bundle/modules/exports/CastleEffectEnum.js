Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function () {
  function CastleEffectEnum(__s3param0, __s3param1 = __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD, __s3param2 = false) {
    this._isGlobal = false;
    this._name = __s3param0;
    this._valueTextID = __s3param1;
    this._isGlobal = __s3param2;
    this.store();
  }
  CastleEffectEnum.prototype.store = function () {
    CastleEffectEnum.allValues ||= {};
    CastleEffectEnum.allValues[this.name] = this;
  };
  Object.defineProperty(CastleEffectEnum.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEffectEnum.prototype, "valueTextID", {
    get: function () {
      return this._valueTextID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEffectEnum.prototype, "isGlobal", {
    get: function () {
      return this._isGlobal;
    },
    enumerable: true,
    configurable: true
  });
  CastleEffectEnum.__initialize_static_members = function () {
    CastleEffectEnum.WOODPRODUCTION = new CastleEffectEnum("Woodproduction", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.STONEPRODUCTION = new CastleEffectEnum("Stoneproduction", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.FOODPRODUCTION = new CastleEffectEnum("Foodproduction", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.COALPRODUCTION = new CastleEffectEnum("Coalproduction");
    CastleEffectEnum.OILPRODUCTION = new CastleEffectEnum("Oilproduction");
    CastleEffectEnum.GLASSPRODUCTION = new CastleEffectEnum("Glassproduction");
    CastleEffectEnum.IRONPRODUCTION = new CastleEffectEnum("Ironproduction");
    CastleEffectEnum.WOODBOOST = new CastleEffectEnum("Woodboost");
    CastleEffectEnum.STONEBOOST = new CastleEffectEnum("Stoneboost");
    CastleEffectEnum.FOODBOOST = new CastleEffectEnum("Foodboost");
    CastleEffectEnum.ALLIFOODPRODUCTIONBOOST = new CastleEffectEnum("alliFoodProductionBonus");
    CastleEffectEnum.COALBOOST = new CastleEffectEnum("Coalboost");
    CastleEffectEnum.OILBOOST = new CastleEffectEnum("Oilboost");
    CastleEffectEnum.GLASSBOOST = new CastleEffectEnum("Glassboost");
    CastleEffectEnum.IRONBOOST = new CastleEffectEnum("Ironboost");
    CastleEffectEnum.FOODREDUCTION = new CastleEffectEnum("Foodreduction", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT);
    CastleEffectEnum.HIDEOUT = new CastleEffectEnum("Hideout");
    CastleEffectEnum.DECOPOINTS = new CastleEffectEnum("decoPoints", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.POPULATION = new CastleEffectEnum("Population");
    CastleEffectEnum.WOODSTORAGE = new CastleEffectEnum("woodStorage", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.STONESTORAGE = new CastleEffectEnum("stoneStorage", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.FOODSTORAGE = new CastleEffectEnum("foodStorage", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.COALSTORAGE = new CastleEffectEnum("coalStorage", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.OILSTORAGE = new CastleEffectEnum("oilStorage", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.GLASSSTORAGE = new CastleEffectEnum("glassStorage", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.IRONSTORAGE = new CastleEffectEnum("ironStorage", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.HONEYSTORAGE = new CastleEffectEnum("honeyStorage", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.MEADSTORAGE = new CastleEffectEnum("meadStorage", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.BEEFSTORAGE = new CastleEffectEnum("beefStorage", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.MARKETCARRIAGES = new CastleEffectEnum("marketCarriages", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.SIGHTRADIUSBONUS = new CastleEffectEnum("sightRadiusBonus");
    CastleEffectEnum.COMMANDERSIZE = new CastleEffectEnum("commanderSize");
    CastleEffectEnum.GUARDSIZE = new CastleEffectEnum("guardSize");
    CastleEffectEnum.SPYSIZE = new CastleEffectEnum("spySize");
    CastleEffectEnum.BUILDINGCOSTREDUCTION = new CastleEffectEnum("buildingCostReduction");
    CastleEffectEnum.SHOWNTRAVELBOOST = new CastleEffectEnum("shownTravelBonus");
    CastleEffectEnum.ISLANDALLIANCEPOINTS = new CastleEffectEnum("islandAlliancePoints");
    CastleEffectEnum.BUILDSPEEDBOOST = new CastleEffectEnum("buildSpeedBoost");
    CastleEffectEnum.SURVIVEBOOST = new CastleEffectEnum("surviveBoost", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT);
    CastleEffectEnum.HOSPITALCAPACITY = new CastleEffectEnum("hospitalCapacity", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.HOSPITALSLOTS = new CastleEffectEnum("hospitalSlots");
    CastleEffectEnum.RECRUITCOSTREDUCTION = new CastleEffectEnum("recruitCostReduction", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT);
    CastleEffectEnum.STACKSIZE = new CastleEffectEnum("stackSize", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.HEALSPEED = new CastleEffectEnum("healSpeed", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD);
    CastleEffectEnum.RECRUITSPEEDBOOST = new CastleEffectEnum("recruitSpeedBoost", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD);
    CastleEffectEnum.UNITWALLCOUNT = new CastleEffectEnum("unitWallCount", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.UNBOOSTEDFOODPRODUCTION = new CastleEffectEnum("unboostedFoodProduction", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.UNBOOSTEDWOODPRODUCTION = new CastleEffectEnum("unboostedWoodProduction", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.UNBOOSTEDSTONEPRODUCTION = new CastleEffectEnum("unboostedStoneProduction", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.ESPIONAGESPEEDBOOST = new CastleEffectEnum("espionageTravelBoost", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD, true);
    CastleEffectEnum.REDUCEDEFENSIVETOOLSCOSTS = new CastleEffectEnum("defensiveToolsCostsReduction", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT);
    CastleEffectEnum.REDUCEDEFENSIVETOOLSTIME = new CastleEffectEnum("defensiveToolsSpeedBoost", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD);
    CastleEffectEnum.REDUCEFEASTCOSTS = new CastleEffectEnum("feastCostsReduction", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT);
    CastleEffectEnum.REDUCEOFFENSIVETOOLSCOSTS = new CastleEffectEnum("offensiveToolsCostsReduction", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT);
    CastleEffectEnum.REDUCEOFFENSIVETOOLSTIME = new CastleEffectEnum("offensiveToolsSpeedBoost", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD);
    CastleEffectEnum.REDUCERESEARCHRESOURCECOSTS = new CastleEffectEnum("ReduceResearchResourceCosts", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, true);
    CastleEffectEnum.XPBOOSTBUILDBUILDINGS = new CastleEffectEnum("XPBoostBuildBuildings", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD);
    CastleEffectEnum.DISTRICTSLOTS = new CastleEffectEnum("districtSlots");
    CastleEffectEnum.MEADREDUCTION = new CastleEffectEnum("Meadreduction", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT);
    CastleEffectEnum.BEEFREDUCTION = new CastleEffectEnum("Beefreduction", __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT);
  };
  return CastleEffectEnum;
}();
exports.CastleEffectEnum = __s0local0;
__s0local0.__initialize_static_members();
