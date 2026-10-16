Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_KingdomEnum = require("gge-module:export_KingdomEnum");
var __dep_export_IsoColorVO = require("gge-module:export_IsoColorVO");
var __s0local0 = createjs.ColorFilter;
var __s0local1 = createjs.Point;
var __s0local2 = function () {
  function IsoConst() {}
  IsoConst._getIsoColorsDic = function () {
    var __s5local0 = new Map();
    __s5local0.set(__dep_export_KingdomEnum.KingdomEnum.CLASSIC, new __dep_export_IsoColorVO.IsoColorVO(10204236, 7048512, 6390308));
    __s5local0.set(__dep_export_KingdomEnum.KingdomEnum.ICE, new __dep_export_IsoColorVO.IsoColorVO(15987444, 11711163, 13158851));
    __s5local0.set(__dep_export_KingdomEnum.KingdomEnum.DESSERT, new __dep_export_IsoColorVO.IsoColorVO(14930321, 10984830, 12097628));
    __s5local0.set(__dep_export_KingdomEnum.KingdomEnum.VOLCANO, new __dep_export_IsoColorVO.IsoColorVO(4601386, 4013886, 6702132));
    __s5local0.set(__dep_export_KingdomEnum.KingdomEnum.ISLAND, new __dep_export_IsoColorVO.IsoColorVO(11448899, 7048512, 10459474));
    __s5local0.set(__dep_export_KingdomEnum.KingdomEnum.FACTION, new __dep_export_IsoColorVO.IsoColorVO(7238191, 4013886, 7895100));
    __s5local0.set(__dep_export_KingdomEnum.KingdomEnum.SEAQUEEN, new __dep_export_IsoColorVO.IsoColorVO(9811262, 6390308, 6390308));
    __s5local0.set(__dep_export_KingdomEnum.KingdomEnum.THORNKING, new __dep_export_IsoColorVO.IsoColorVO(5406518, 11385024, 6390308));
    __s5local0.set(__dep_export_KingdomEnum.KingdomEnum.UNDERWORLD, new __dep_export_IsoColorVO.IsoColorVO(2906460, 11385024, 6390308));
    return __s5local0;
  };
  IsoConst._getBuildingGroundColorDic = function () {
    var __s7local0 = new Map();
    __s7local0.set(__dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_MILITARY, ["#299CD8", "#055998", 0.5]);
    __s7local0.set(__dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_CIVIL, ["#E0Db12", "#9F7906", 0.4]);
    __s7local0.set(__dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_DEFENCE, ["#9B9B9A", "#545454", 0.6]);
    __s7local0.set(__dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_DECO, ["#604293", "#65247D", 0.45]);
    __s7local0.set("INVALID", ["#FF00FF", "#000000", 0]);
    return __s7local0;
  };
  IsoConst._getKeyWorldFunctions = function () {
    var __s9local0 = new Map();
    __s9local0.set(IsoConst.KW_ET, __dep_export_IsoKeyWordCheats.IsoKeyWordCheats.onCheatET);
    __s9local0.set(IsoConst.KW_FARHAT, __dep_export_IsoKeyWordCheats.IsoKeyWordCheats.onCheatFarhat);
    __s9local0.set(IsoConst.KW_DEBUG_CROSS, __dep_export_IsoKeyWordCheats.IsoKeyWordCheats.onCheatDebugCross);
    __s9local0.set(IsoConst.KW_DEBUG_POS, __dep_export_IsoKeyWordCheats.IsoKeyWordCheats.onCheatDebugPos);
    __s9local0.set(IsoConst.KW_FPS, __dep_export_IsoKeyWordCheats.IsoKeyWordCheats.onCheatFps);
    __s9local0.set(IsoConst.KW_Z_SORT, __dep_export_IsoKeyWordCheats.IsoKeyWordCheats.onCheatZSort);
    return __s9local0;
  };
  IsoConst.__initialize_static_members = function () {
    IsoConst.GRID_TOTAL_DIMENSION = new __s0local1(500, 500);
    IsoConst.GRID_START_POS = new __s0local1(180, 180);
    IsoConst.GRID_INNER_DIMENSION = new __s0local1(60, 60);
    IsoConst.GRID_TILE_DIMENSION_UNTRANSLATED = new __s0local1(28.3, 28.3);
    IsoConst.GRID_TILE_DIMENSION_TRANSLATED = new __s0local1(80, 40);
    IsoConst.GRID_PATTERN_SIZE = new __s0local1(1, 1);
    IsoConst.CAMERA_CENTER_TILE = new __s0local1(210, 210);
    IsoConst.CAMERA_ZOOM_STEPS = [2, 1.5, 1, 0.75, 0.5625, 0.421875, 0.369140625, 0.31640625, 0.23730468, 0.17797851, 0.13348388, 0.10011291];
    IsoConst.CAMERA_ZOOM_DEFAULT_INDEX = __dep_exact_f855840627e6e145.int(IsoConst.CAMERA_ZOOM_STEPS.length - 1);
    IsoConst.VE_GLOW_FILTER_STANDARD = __dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_STANDARD;
    IsoConst.VE_GLOW_FILTER_BLUE = __dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_BLUE;
    IsoConst.DRAG_VALID_FILTER = new __s0local0(0, 0, 0, 3, 0, 200, 0, 0);
    IsoConst.DRAG_INVALID_FILTER = new __s0local0(0, 0, 0, 3, 255, 0, 0, 0);
    IsoConst.DRAG_VALID_DISTRICT_FILTER = new __s0local0(0, 0, 0, 3, 50, 89, 85, 0);
    IsoConst.ISO_COLORS = IsoConst._getIsoColorsDic();
    IsoConst.BUILDING_GROUND_COLORS = IsoConst._getBuildingGroundColorDic();
    IsoConst.Z_SORT_LOOK_POINT = new __s0local1(300, 300);
    IsoConst.KEY_WORD_FUNCTIONS = IsoConst._getKeyWorldFunctions();
    IsoConst.VALID_PANELS_FOR_DRAGGING = [__dep_export_CastleRotationPanel.CastleRotationPanel];
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isEdge || __dep_exact_81dacdf05bd32292.currentBrowserInfo.isIE) {
      IsoConst.CAMERA_ZOOM_STEPS = [0.5, 0.421875, 0.369140625, 0.31640625, 0.23730468, 0.17797851, 0.13348388, 0.10011291];
    }
  };
  IsoConst.GRID_TILE_DIMENSION_UNTRANSLATED = new __s0local1(28.3, 28.3);
  IsoConst.GRID_TILE_DIMENSION_TRANSLATED = new __s0local1(80, 40);
  IsoConst.MOVEMENTS_ACTIVATED = true;
  IsoConst.MOVEMENTS_MAX_AMOUNT = 20;
  IsoConst.MOVEMENTS_MAX_AMOUNT_ON_BUILDING_COUNT = 70;
  IsoConst.MOVEMENTS_FPS = 200;
  IsoConst.MOVEMENTS_SPEED_MIN = 0.04;
  IsoConst.MOVEMENTS_SPEED_MAX = 0.07;
  IsoConst.MOVEMENTS_VISIT_PROBABILITY = 30;
  IsoConst.MOVEMENTS_OUTER_PROBABILITY = 30;
  IsoConst.MOVEMENTS_SPAWN_INTERVAL = 1000;
  IsoConst.MOVEMENTS_FADE_SPEED = 0.065;
  IsoConst.MOVEMENTS_WALK_BOOST = 0.1;
  IsoConst.MOVEMENTS_WALK_BOOST_DECREASE = 0.001;
  IsoConst.CAMERA_DEBUG_MOVE_SPEED = 300;
  IsoConst.BUILDING_FOCUS_ALPHA = 0.7;
  IsoConst.BUILDING_FOCUS_DISTANCE_TO_DRAGGING = 45;
  IsoConst.BUILDING_GROUND_BORDER_ALPHA = 0.4;
  IsoConst.BUILDING_GROUND_BORDER_THICKNESS = 6;
  IsoConst.KEY_WORD_BUFFER_LENGTH = 100;
  IsoConst.KW_ET = "erichtaker";
  IsoConst.KW_FARHAT = "farhat";
  IsoConst.KW_DEBUG_CROSS = "isoworlddebugcross";
  IsoConst.KW_DEBUG_POS = "isoworlddebugpos";
  IsoConst.KW_FPS = "isoworldfps";
  IsoConst.KW_Z_SORT = "isoworldzsort";
  return IsoConst;
}();
exports.IsoConst = __s0local2;
var __dep_export_CastleRotationPanel = require("gge-module:export_CastleRotationPanel");
var __dep_export_IsoKeyWordCheats = require("gge-module:export_IsoKeyWordCheats");
__s0local2.__initialize_static_members();
