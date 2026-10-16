Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function ConstructionExpertScrollItem(__s3param0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).itxt_title = ConstructionExpertScrollItem.textFieldManager.registerTextField(__s3local0._disp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    __s3local0.itxt_level = ConstructionExpertScrollItem.textFieldManager.registerTextField(__s3local0._disp.txt_level, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    __s3local0.itxt_value = ConstructionExpertScrollItem.textFieldManager.registerTextField(__s3local0._disp.mc_info.txt_value, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ConstructionExpertScrollItem, __s1param0);
  ConstructionExpertScrollItem.prototype.customFillItem = function () {
    var __s5local0 = this.scrollItemVO;
    this.itxt_title.textContentVO.textId = __s5local0.titleID;
    this.itxt_level.textContentVO.textId = "building_level";
    this.itxt_level.textContentVO.textReplacements = [__s5local0.buildingVO.level];
    var __s5local1 = __s5local0.items[0];
    this._disp.mc_info.toolTipText = __s5local1.tooltipText;
    this._disp.mc_info.mc_icon.gotoAndStop(ConstructionExpertScrollItem.iconClassToTimelineFrame(__s5local1.iconClass));
    this.itxt_value.textContentVO = __s5local1.textVO;
    __dep_export_WodPicHelper.WodPicHelper.addWodPic(__s5local0.buildingVO, this._disp.mc_buildingIcon, 50, 50);
  };
  ConstructionExpertScrollItem.iconClassToTimelineFrame = function (__s7param0) {
    switch (new __s7param0().constructor) {
      case Library.CastleInterfaceElements_Icons.Icon_FoodConsumption:
        return ConstructionExpertScrollItem.FOOD_REDUCTION;
      case Library.CastleInterfaceElements_Icons.Icon_Wood:
        return ConstructionExpertScrollItem.WOOD;
      case Library.CastleInterfaceElements_Icons.Icon_Food:
        return ConstructionExpertScrollItem.FOOD;
      case Library.CastleInterfaceElements_Icons.Icon_Stone:
        return ConstructionExpertScrollItem.STONE;
      case Library.CastleInterfaceElements_Icons.Icon_Coal:
        return ConstructionExpertScrollItem.COAL;
      case Library.CastleInterfaceElements_Icons.Icon_Glass:
        return ConstructionExpertScrollItem.GLASS;
      case Library.CastleInterfaceElements_Icons.Icon_Oliveoil:
        return ConstructionExpertScrollItem.OLIVEOIL;
      case Library.CastleInterfaceElements_Icons.Icon_Iron:
        return ConstructionExpertScrollItem.IRON;
      case Library.CastleInterfaceElements_Icons.Icon_Boost_Wood:
        return ConstructionExpertScrollItem.WOOD_PLUS;
      case Library.CastleInterfaceElements_Icons.Icon_Boost_Food:
        return ConstructionExpertScrollItem.FOOD_PLUS;
      case Library.CastleInterfaceElements_Icons.Icon_Boost_Stone:
        return ConstructionExpertScrollItem.STONE_PLUS;
      case Library.CastleInterfaceElements_Icons.Icon_Boost_Coal:
        return ConstructionExpertScrollItem.COAL_PLUS;
      case Library.CastleInterfaceElements_Icons.Icon_Boost_Glass:
        return ConstructionExpertScrollItem.GLASS_PLUS;
      case Library.CastleInterfaceElements_Icons.Icon_Boost_Oliveoil:
        return ConstructionExpertScrollItem.OLIVEOIL_PLUS;
      case Library.CastleInterfaceElements_Icons.Icon_Boost_Iron:
        return ConstructionExpertScrollItem.IRON_PLUS;
      case Library.CastleInterfaceElements_Icons.Icon_BoostPerHourWood:
        return ConstructionExpertScrollItem.WOOD_PRODUCTION;
      case Library.CastleInterfaceElements_Icons.Icon_BoostPerHourFood:
        return ConstructionExpertScrollItem.FOOD_PRODUCTION;
      case Library.CastleInterfaceElements_Icons.Icon_BoostPerHourStone:
        return ConstructionExpertScrollItem.STONE_PRODUCTION;
      case Library.CastleInterfaceElements_Icons.Icon_BoostPerHourCoal:
        return ConstructionExpertScrollItem.COAL_PRODUCTION;
      case Library.CastleInterfaceElements_Icons.Icon_BoostPerHourGlass:
        return ConstructionExpertScrollItem.GLASS_PRODUCTION;
      case Library.CastleInterfaceElements_Icons.Icon_BoostPerHourOliveoil:
        return ConstructionExpertScrollItem.OLIVEOIL_PRODUCTION;
      case Library.CastleInterfaceElements_Icons.Icon_BoostPerHourIron:
        return ConstructionExpertScrollItem.IRON_PRODUCTION;
      case Library.CastleInterfaceElements_Icons.Icon_Storage:
        return ConstructionExpertScrollItem.STORAGE;
      case Library.CastleInterfaceElements_Icons.Icon_SaveStorage:
        return ConstructionExpertScrollItem.SAFE_STORAGE;
      case Library.CastleInterfaceElements.Icon_Population:
        return ConstructionExpertScrollItem.POPULATION;
      case Library.CastleInterfaceElements.Icon_Morality:
        return ConstructionExpertScrollItem.MORALITY;
      case Library.CastleInterfaceElements_Icons.Icon_DefendingTroops:
      case Library.CastleInterfaceElements.Icon_UnitsNoshadow:
      case Library.CastleInterfaceElements_Icons.Icon_Units:
        return ConstructionExpertScrollItem.UNIT_CAPACITY;
      case Library.CastleInterfaceElements.Icon_Research:
        return ConstructionExpertScrollItem.RESEARCH_BOOST;
      case Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big:
        return ConstructionExpertScrollItem.DECOPOINTS;
      case Library.CastleInterfaceElements_Icons.Icon_MarketCarrige:
        return ConstructionExpertScrollItem.MARKET_CARRIAGES;
      case Library.CastleInterfaceElements_Icons.Icon_Knights:
        return ConstructionExpertScrollItem.GENERAL;
      case Library.CastleInterfaceElements_Icons.Icon_Baron:
        return ConstructionExpertScrollItem.BARON;
      case Library.CastleInterfaceElements.Icon_Spy:
        return ConstructionExpertScrollItem.SPY;
      case Library.CastleInterfaceElements_Icons.Icon_Guards:
        return ConstructionExpertScrollItem.GUARD;
      case Library.CastleInterfaceElements_Icons.Icon_google:
        return ConstructionExpertScrollItem.SIGHT;
      case Library.CastleInterfaceElements.Icon_Productivity:
        return ConstructionExpertScrollItem.PRODUCTIVITY;
      case Library.CastleInterfaceElements_Icons.Icon_RecruitmentBoost:
        return ConstructionExpertScrollItem.UNIT_PRODUCTIVITY;
      case Library.CastleInterfaceElements_Icons.Icon_Defence:
        return ConstructionExpertScrollItem.WALL;
      case Library.CastleInterfaceElements_Icons.Icon_Btn_Moat:
        return ConstructionExpertScrollItem.MOAT;
      case Library.CastleInterfaceElements_Icons.Icon_UnitPercent:
        return ConstructionExpertScrollItem.GATE;
      case Library.CastleInterfaceElements_Icons.Icon_BuildNoShadow:
        return ConstructionExpertScrollItem.BUILD_DURATION;
      case Library.CastleInterfaceElements.Icon_Horse_Boost:
        return ConstructionExpertScrollItem.HORSE;
      case Library.CastleInterfaceElements_Icons.Icon_FireProtection:
        return ConstructionExpertScrollItem.BARREL_O_WATER;
      case Library.CastleInterfaceElements_Icons.Icon_Coins_Cluster:
        return ConstructionExpertScrollItem.COINS;
      case Library.CastleInterfaceElements.Icon_C2_Cluster:
        return ConstructionExpertScrollItem.RUBIES;
      case Library.CastleInterfaceElements_Icons.Icon_BuildingCostReduction:
        return ConstructionExpertScrollItem.ARCHITECT;
      case Library.CastleInterfaceElements_Icons.Icon_SurviveBoost:
        return ConstructionExpertScrollItem.HOSPITAL;
      case Library.CastleInterfaceElements_Icons.Icon_Crane:
        return ConstructionExpertScrollItem.CRANE;
      case Library.CastleInterfaceElements.Icon_islandAlliancePoints:
        return ConstructionExpertScrollItem.AQUAMARINE;
      default:
        return ConstructionExpertScrollItem.MORALITY;
    }
  };
  Object.defineProperty(ConstructionExpertScrollItem, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  ConstructionExpertScrollItem.__initialize_static_members = function () {
    ConstructionExpertScrollItem.MOAT = 1;
    ConstructionExpertScrollItem.WALL = 2;
    ConstructionExpertScrollItem.GATE = 3;
    ConstructionExpertScrollItem.BUILD_DURATION = 4;
    ConstructionExpertScrollItem.SAFE_STORAGE = 5;
    ConstructionExpertScrollItem.POPULATION = 6;
    ConstructionExpertScrollItem.DECOPOINTS = 7;
    ConstructionExpertScrollItem.MARKET_CARRIAGES = 8;
    ConstructionExpertScrollItem.STORAGE = 9;
    ConstructionExpertScrollItem.SPY = 10;
    ConstructionExpertScrollItem.BARON = 11;
    ConstructionExpertScrollItem.GENERAL = 12;
    ConstructionExpertScrollItem.GUARD = 13;
    ConstructionExpertScrollItem.WOOD = 14;
    ConstructionExpertScrollItem.WOOD_PRODUCTION = 15;
    ConstructionExpertScrollItem.WOOD_PLUS = 16;
    ConstructionExpertScrollItem.STONE = 17;
    ConstructionExpertScrollItem.STONE_PRODUCTION = 18;
    ConstructionExpertScrollItem.STONE_PLUS = 19;
    ConstructionExpertScrollItem.FOOD = 20;
    ConstructionExpertScrollItem.FOOD_PRODUCTION = 21;
    ConstructionExpertScrollItem.FOOD_PLUS = 22;
    ConstructionExpertScrollItem.FOOD_REDUCTION = 23;
    ConstructionExpertScrollItem.PRODUCTIVITY = 24;
    ConstructionExpertScrollItem.HORSE = 25;
    ConstructionExpertScrollItem.SIGHT = 26;
    ConstructionExpertScrollItem.UNIT_CAPACITY = 27;
    ConstructionExpertScrollItem.UNIT_PRODUCTIVITY = 28;
    ConstructionExpertScrollItem.RESEARCH_BOOST = 29;
    ConstructionExpertScrollItem.MORALITY = 30;
    ConstructionExpertScrollItem.BARREL_O_WATER = 31;
    ConstructionExpertScrollItem.COAL = 32;
    ConstructionExpertScrollItem.COAL_PRODUCTION = 33;
    ConstructionExpertScrollItem.COAL_PLUS = 34;
    ConstructionExpertScrollItem.OLIVEOIL = 35;
    ConstructionExpertScrollItem.OLIVEOIL_PRODUCTION = 36;
    ConstructionExpertScrollItem.OLIVEOIL_PLUS = 37;
    ConstructionExpertScrollItem.GLASS = 38;
    ConstructionExpertScrollItem.GLASS_PRODUCTION = 39;
    ConstructionExpertScrollItem.GLASS_PLUS = 40;
    ConstructionExpertScrollItem.IRON = 41;
    ConstructionExpertScrollItem.IRON_PRODUCTION = 42;
    ConstructionExpertScrollItem.IRON_PLUS = 43;
    ConstructionExpertScrollItem.ARCHITECT = 44;
    ConstructionExpertScrollItem.CRANE = 45;
    ConstructionExpertScrollItem.HOSPITAL = 46;
    ConstructionExpertScrollItem.RUBIES = 47;
    ConstructionExpertScrollItem.COINS = 48;
    ConstructionExpertScrollItem.AQUAMARINE = 49;
  };
  return ConstructionExpertScrollItem;
}(__dep_exact_9e901e8e2483a22f_1.ScrollItem);
exports.ConstructionExpertScrollItem = __s0local0;
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
__s0local0.__initialize_static_members();
