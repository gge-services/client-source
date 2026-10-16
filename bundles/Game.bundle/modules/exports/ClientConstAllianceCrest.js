Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function ClientConstAllianceCrest() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ClientConstAllianceCrest, __s1param0);
  ClientConstAllianceCrest.generateBackgroundDict = function () {
    var __s5local0 = new Map();
    __s5local0.set(1, ClientConstAllianceCrest.BACKGROUND_TYPE_SINGLE);
    __s5local0.set(2, ClientConstAllianceCrest.BACKGROUND_TYPE_DUAL_HORIZONTAL);
    __s5local0.set(3, ClientConstAllianceCrest.BACKGROUND_TYPE_DUAL_VERTICAL);
    __s5local0.set(4, ClientConstAllianceCrest.BACKGROUND_TYPE_DUAL_DIAGONAL_UP);
    __s5local0.set(5, ClientConstAllianceCrest.BACKGROUND_TYPE_DUAL_DIAGONAL_DOWN);
    __s5local0.set(6, ClientConstAllianceCrest.BACKGROUND_TYPE_TRIPLE_DUAL_TOP);
    __s5local0.set(7, ClientConstAllianceCrest.BACKGROUND_TYPE_TRIPLE_DUAL_BOT);
    __s5local0.set(8, ClientConstAllianceCrest.BACKGROUND_TYPE_QUAD_SQUARE);
    __s5local0.set(9, ClientConstAllianceCrest.BACKGROUND_TYPE_QUAD_RHOMBUS);
    return __s5local0;
  };
  ClientConstAllianceCrest.generateBackgroundTypeDict = function () {
    var __s7local0 = new Map();
    __s7local0.set(ClientConstAllianceCrest.BACKGROUND_TYPE_SINGLE, 1);
    __s7local0.set(ClientConstAllianceCrest.BACKGROUND_TYPE_DUAL_HORIZONTAL, 2);
    __s7local0.set(ClientConstAllianceCrest.BACKGROUND_TYPE_DUAL_VERTICAL, 3);
    __s7local0.set(ClientConstAllianceCrest.BACKGROUND_TYPE_DUAL_DIAGONAL_UP, 4);
    __s7local0.set(ClientConstAllianceCrest.BACKGROUND_TYPE_DUAL_DIAGONAL_DOWN, 5);
    __s7local0.set(ClientConstAllianceCrest.BACKGROUND_TYPE_TRIPLE_DUAL_TOP, 6);
    __s7local0.set(ClientConstAllianceCrest.BACKGROUND_TYPE_TRIPLE_DUAL_BOT, 7);
    __s7local0.set(ClientConstAllianceCrest.BACKGROUND_TYPE_QUAD_SQUARE, 8);
    __s7local0.set(ClientConstAllianceCrest.BACKGROUND_TYPE_QUAD_RHOMBUS, 9);
    return __s7local0;
  };
  ClientConstAllianceCrest.generateSymbolDict = function () {
    var __s9local0 = new Map();
    __s9local0.set(0, ClientConstAllianceCrest.SYMBOLS_TYPE_NONE);
    __s9local0.set(1, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_CENTER);
    __s9local0.set(2, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_RIGHT);
    __s9local0.set(3, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_LEFT);
    __s9local0.set(4, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_TOP);
    __s9local0.set(5, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_TOPRIGHT);
    __s9local0.set(6, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_TOPLEFT);
    __s9local0.set(7, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_BOT);
    __s9local0.set(8, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_BOTRIGHT);
    __s9local0.set(9, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_BOTLEFT);
    __s9local0.set(10, ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_TOP);
    __s9local0.set(11, ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_BOT);
    __s9local0.set(12, ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_RIGHT);
    __s9local0.set(13, ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_LEFT);
    __s9local0.set(14, ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_VERTICAL);
    __s9local0.set(15, ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_HORIZONTAL);
    __s9local0.set(16, ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_DIAGONAL_UP);
    __s9local0.set(17, ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_DIAGONAL_DOWN);
    __s9local0.set(18, ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_CATHETUS_BOT_DOWN);
    __s9local0.set(19, ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_CATHETUS_BOT_UP);
    __s9local0.set(20, ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_CATHETUS_TOP_DOWN);
    __s9local0.set(21, ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_CATHETUS_TOP_UP);
    __s9local0.set(22, ClientConstAllianceCrest.SYMBOLS_TYPE_TRIPLE_DUAL_TOP);
    __s9local0.set(23, ClientConstAllianceCrest.SYMBOLS_TYPE_TRIPLE_DUAL_BOT);
    __s9local0.set(24, ClientConstAllianceCrest.SYMBOLS_TYPE_QUAD_SQUARE);
    __s9local0.set(25, ClientConstAllianceCrest.SYMBOLS_TYPE_QUAD_RHOMBUS);
    return __s9local0;
  };
  ClientConstAllianceCrest.generateSymbolTypeDict = function () {
    var __s11local0 = new Map();
    __s11local0.set(ClientConstAllianceCrest.SYMBOLS_TYPE_NONE, 0);
    __s11local0.set(ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_CENTER, 1);
    __s11local0.set(ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_RIGHT, 2);
    __s11local0.set(ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_LEFT, 3);
    __s11local0.set(ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_TOP, 4);
    __s11local0.set(ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_TOPRIGHT, 5);
    __s11local0.set(ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_TOPLEFT, 6);
    __s11local0.set(ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_BOT, 7);
    __s11local0.set(ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_BOTRIGHT, 8);
    __s11local0.set(ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_BOTLEFT, 9);
    __s11local0.set(ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_TOP, 10);
    __s11local0.set(ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_BOT, 11);
    __s11local0.set(ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_RIGHT, 12);
    __s11local0.set(ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_LEFT, 13);
    __s11local0.set(ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_VERTICAL, 14);
    __s11local0.set(ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_HORIZONTAL, 15);
    __s11local0.set(ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_DIAGONAL_UP, 16);
    __s11local0.set(ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_DIAGONAL_DOWN, 17);
    __s11local0.set(ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_CATHETUS_BOT_DOWN, 18);
    __s11local0.set(ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_CATHETUS_BOT_UP, 19);
    __s11local0.set(ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_CATHETUS_TOP_DOWN, 20);
    __s11local0.set(ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_CATHETUS_TOP_UP, 21);
    __s11local0.set(ClientConstAllianceCrest.SYMBOLS_TYPE_TRIPLE_DUAL_TOP, 22);
    __s11local0.set(ClientConstAllianceCrest.SYMBOLS_TYPE_TRIPLE_DUAL_BOT, 23);
    __s11local0.set(ClientConstAllianceCrest.SYMBOLS_TYPE_QUAD_SQUARE, 24);
    __s11local0.set(ClientConstAllianceCrest.SYMBOLS_TYPE_QUAD_RHOMBUS, 25);
    return __s11local0;
  };
  ClientConstAllianceCrest.getSymbolLayoutFromBackgroundLayout = function (__s13param0) {
    switch (__s13param0) {
      case ClientConstAllianceCrest.BACKGROUND_TYPE_SINGLE:
        return [ClientConstAllianceCrest.SYMBOLS_TYPE_NONE, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_CENTER, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_LEFT, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_TOP, ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_HORIZONTAL, ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_VERTICAL, ClientConstAllianceCrest.SYMBOLS_TYPE_TRIPLE_DUAL_TOP, ClientConstAllianceCrest.SYMBOLS_TYPE_QUAD_RHOMBUS];
      case ClientConstAllianceCrest.BACKGROUND_TYPE_DUAL_VERTICAL:
        return [ClientConstAllianceCrest.SYMBOLS_TYPE_NONE, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_CENTER, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_RIGHT, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_LEFT, ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_HORIZONTAL];
      case ClientConstAllianceCrest.BACKGROUND_TYPE_DUAL_HORIZONTAL:
        return [ClientConstAllianceCrest.SYMBOLS_TYPE_NONE, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_CENTER, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_BOT, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_TOP, ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_VERTICAL];
      case ClientConstAllianceCrest.BACKGROUND_TYPE_DUAL_DIAGONAL_DOWN:
        return [ClientConstAllianceCrest.SYMBOLS_TYPE_NONE, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_CENTER, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_BOTLEFT, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_TOPRIGHT, ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_DIAGONAL_UP];
      case ClientConstAllianceCrest.BACKGROUND_TYPE_DUAL_DIAGONAL_UP:
        return [ClientConstAllianceCrest.SYMBOLS_TYPE_NONE, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_CENTER, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_TOPLEFT, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_BOTRIGHT, ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_DIAGONAL_DOWN];
      case ClientConstAllianceCrest.BACKGROUND_TYPE_TRIPLE_DUAL_TOP:
        return [ClientConstAllianceCrest.SYMBOLS_TYPE_NONE, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_CENTER, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_TOPLEFT, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_TOPRIGHT, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_BOT, ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_TOP, ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_CATHETUS_BOT_DOWN, ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_CATHETUS_BOT_UP, ClientConstAllianceCrest.SYMBOLS_TYPE_TRIPLE_DUAL_TOP];
      case ClientConstAllianceCrest.BACKGROUND_TYPE_TRIPLE_DUAL_BOT:
        return [ClientConstAllianceCrest.SYMBOLS_TYPE_NONE, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_CENTER, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_BOTLEFT, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_BOTRIGHT, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_TOPLEFT, ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_BOT, ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_CATHETUS_TOP_DOWN, ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_CATHETUS_TOP_UP, ClientConstAllianceCrest.SYMBOLS_TYPE_TRIPLE_DUAL_BOT];
      case ClientConstAllianceCrest.BACKGROUND_TYPE_QUAD_SQUARE:
        return [ClientConstAllianceCrest.SYMBOLS_TYPE_NONE, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_CENTER, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_TOPLEFT, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_TOPRIGHT, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_BOTLEFT, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_BOTRIGHT, ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_DIAGONAL_DOWN, ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_DIAGONAL_UP, ClientConstAllianceCrest.SYMBOLS_TYPE_QUAD_SQUARE];
      case ClientConstAllianceCrest.BACKGROUND_TYPE_QUAD_RHOMBUS:
        return [ClientConstAllianceCrest.SYMBOLS_TYPE_NONE, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_CENTER, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_TOP, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_RIGHT, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_LEFT, ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_BOT, ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_VERTICAL, ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_HORIZONTAL, ClientConstAllianceCrest.SYMBOLS_TYPE_QUAD_RHOMBUS];
    }
    return [];
  };
  ClientConstAllianceCrest.getPlaceholdersFromSymbolLayout = function (__s16param0) {
    return ClientConstAllianceCrest["PLACEHOLDERS_" + __s16param0];
  };
  ClientConstAllianceCrest.getCCFromBackgroundType = function (__s18param0) {
    return [ClientConstAllianceCrest["CC_BACKGROUND_" + __s18param0 + "_C1"], ClientConstAllianceCrest["CC_BACKGROUND_" + __s18param0 + "_C2"], ClientConstAllianceCrest["CC_BACKGROUND_" + __s18param0 + "_C3"], ClientConstAllianceCrest["CC_BACKGROUND_" + __s18param0 + "_EMPTY"]];
  };
  ClientConstAllianceCrest.getColorAmountFromBackgroundType = function (__s20param0) {
    for (var __s20local0 = ClientConstAllianceCrest.getCCFromBackgroundType(__s20param0), __s20local1 = 0, __s20local2 = 0; __s20local2 < __s20local0.length - 1; __s20local2++) {
      if (__s20local0[__s20local2].length > 0) {
        __s20local1++;
      }
    }
    return __s20local1;
  };
  ClientConstAllianceCrest.getSymbolAmountBySymbolLayoutId = function (__s25param0) {
    var __s25local0 = ClientConstAllianceCrest.getPlaceholdersFromSymbolLayout(ClientConstAllianceCrest.SYMBOLID_TO_TYPE.get(__s25param0));
    if (__s25local0.length == 4) {
      return 2;
    } else {
      return __dep_exact_f855840627e6e145.int(__s25local0.length);
    }
  };
  ClientConstAllianceCrest.createDefaultCrestVO = function (__s29param0) {
    var __s29local0 = new __dep_export_AllianceCrestVO.AllianceCrestVO();
    __s29local0.fillWithData(__s29param0);
    return __s29local0;
  };
  ClientConstAllianceCrest.__initialize_static_members = function () {
    ClientConstAllianceCrest.BACKGROUND_COLORS = [14408394, 8881264, 5197126, 1644825, 5319690, 8993831, 11993088, 14037522, 16341788, 14392335, 15708678, 15259663, 13550873, 30512, 39783, 305315, 4690653, 1009082, 4006527, 13509737];
    ClientConstAllianceCrest.SYMBOL_COLORS = [14408394, 8881264, 5197126, 1644825, 5319690, 8993831, 11993088, 14037522, 16341788, 14392335, 15708678, 15259663, 13550873, 30512, 39783, 305315, 4690653, 1009082, 4006527, 13509737];
    ClientConstAllianceCrest.SYMBOLS_ARRAY = ["symbol_0", "symbol_1", "symbol_2", "symbol_3", "symbol_4", "symbol_5", "symbol_6", "symbol_7", "symbol_8", "symbol_9", "symbol_10", "symbol_11", "symbol_12", "symbol_13", "symbol_14", "symbol_15", "symbol_16", "symbol_17", "symbol_18", "symbol_19", "symbol_20", "symbol_21", "symbol_22", "symbol_23", "symbol_24", "symbol_25", "symbol_26", "symbol_27", "symbol_28", "symbol_29", "symbol_30", "symbol_31", "symbol_32", "symbol_33", "symbol_34", "symbol_35", "symbol_36", "symbol_37", "symbol_38", "symbol_39", "symbol_40", "symbol_41", "symbol_42", "symbol_43", "symbol_44"];
    ClientConstAllianceCrest.FRAME_LEVEL_1 = 1;
    ClientConstAllianceCrest.FRAME_LEVEL_2 = 2;
    ClientConstAllianceCrest.FRAME_LEVEL_3 = 3;
    ClientConstAllianceCrest.WIDTH_SINGLE = 125;
    ClientConstAllianceCrest.HEIGHT_SINGLE = 125;
    ClientConstAllianceCrest.WIDTH_MULTIPLE = 50;
    ClientConstAllianceCrest.HEIGHT_MULTIPLE = 50;
    ClientConstAllianceCrest.BACKGROUND_TYPE_SINGLE = "SINGLE";
    ClientConstAllianceCrest.BACKGROUND_TYPE_DUAL_HORIZONTAL = "DUAL_HORIZONTAL";
    ClientConstAllianceCrest.BACKGROUND_TYPE_DUAL_VERTICAL = "DUAL_VERTICAL";
    ClientConstAllianceCrest.BACKGROUND_TYPE_DUAL_DIAGONAL_UP = "DUAL_DIAGONAL_UP";
    ClientConstAllianceCrest.BACKGROUND_TYPE_DUAL_DIAGONAL_DOWN = "DUAL_DIAGONAL_DOWN";
    ClientConstAllianceCrest.BACKGROUND_TYPE_TRIPLE_DUAL_TOP = "TRIPLE_DUAL_TOP";
    ClientConstAllianceCrest.BACKGROUND_TYPE_TRIPLE_DUAL_BOT = "TRIPLE_DUAL_BOT";
    ClientConstAllianceCrest.BACKGROUND_TYPE_QUAD_SQUARE = "QUAD_SQUARE";
    ClientConstAllianceCrest.BACKGROUND_TYPE_QUAD_RHOMBUS = "QUAD_RHOMBUS";
    ClientConstAllianceCrest.SYMBOLS_TYPE_NONE = "NONE";
    ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_CENTER = "SINGLE_CENTER";
    ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_RIGHT = "SINGLE_RIGHT";
    ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_LEFT = "SINGLE_LEFT";
    ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_TOP = "SINGLE_TOP";
    ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_TOPRIGHT = "SINGLE_TOPRIGHT";
    ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_TOPLEFT = "SINGLE_TOPLEFT";
    ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_BOT = "SINGLE_BOT";
    ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_BOTRIGHT = "SINGLE_BOTRIGHT";
    ClientConstAllianceCrest.SYMBOLS_TYPE_SINGLE_BOTLEFT = "SINGLE_BOTLEFT";
    ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_TOP = "DUAL_TOP";
    ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_BOT = "DUAL_BOT";
    ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_RIGHT = "DUAL_RIGHT";
    ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_LEFT = "DUAL_LEFT";
    ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_VERTICAL = "DUAL_VERTICAL";
    ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_HORIZONTAL = "DUAL_HORIZONTAL";
    ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_DIAGONAL_UP = "DUAL_DIAGONAL_UP";
    ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_DIAGONAL_DOWN = "DUAL_DIAGONAL_DOWN";
    ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_CATHETUS_BOT_DOWN = "DUAL_CATHETUS_BOT_DOWN";
    ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_CATHETUS_BOT_UP = "DUAL_CATHETUS_BOT_UP";
    ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_CATHETUS_TOP_DOWN = "DUAL_CATHETUS_TOP_DOWN";
    ClientConstAllianceCrest.SYMBOLS_TYPE_DUAL_CATHETUS_TOP_UP = "DUAL_CATHETUS_TOP_UP";
    ClientConstAllianceCrest.SYMBOLS_TYPE_TRIPLE_DUAL_TOP = "TRIPLE_DUAL_TOP";
    ClientConstAllianceCrest.SYMBOLS_TYPE_TRIPLE_DUAL_BOT = "TRIPLE_DUAL_BOT";
    ClientConstAllianceCrest.SYMBOLS_TYPE_QUAD_SQUARE = "QUAD_SQUARE";
    ClientConstAllianceCrest.SYMBOLS_TYPE_QUAD_RHOMBUS = "QUAD_RHOMBUS";
    ClientConstAllianceCrest.PLACEHOLDERS_NONE = [];
    ClientConstAllianceCrest.PLACEHOLDERS_SINGLE_CENTER = ["layout_center"];
    ClientConstAllianceCrest.PLACEHOLDERS_SINGLE_TOP = ["layout_rhombus_top"];
    ClientConstAllianceCrest.PLACEHOLDERS_SINGLE_BOT = ["layout_rhombus_bot"];
    ClientConstAllianceCrest.PLACEHOLDERS_SINGLE_RIGHT = ["layout_rhombus_right"];
    ClientConstAllianceCrest.PLACEHOLDERS_SINGLE_LEFT = ["layout_rhombus_left"];
    ClientConstAllianceCrest.PLACEHOLDERS_SINGLE_TOPRIGHT = ["layout_square_top_right"];
    ClientConstAllianceCrest.PLACEHOLDERS_SINGLE_TOPLEFT = ["layout_square_top_left"];
    ClientConstAllianceCrest.PLACEHOLDERS_SINGLE_BOTRIGHT = ["layout_square_bot_right"];
    ClientConstAllianceCrest.PLACEHOLDERS_SINGLE_BOTLEFT = ["layout_square_bot_left"];
    ClientConstAllianceCrest.PLACEHOLDERS_DUAL_TOP = ["layout_square_top_left", "layout_square_top_right"];
    ClientConstAllianceCrest.PLACEHOLDERS_DUAL_BOT = ["layout_square_bot_left", "layout_square_bot_right"];
    ClientConstAllianceCrest.PLACEHOLDERS_DUAL_RIGHT = ["layout_square_top_right", "layout_square_bot_right"];
    ClientConstAllianceCrest.PLACEHOLDERS_DUAL_LEFT = ["layout_square_top_left", "layout_square_bot_left"];
    ClientConstAllianceCrest.PLACEHOLDERS_DUAL_HORIZONTAL = ["layout_rhombus_left", "layout_rhombus_right"];
    ClientConstAllianceCrest.PLACEHOLDERS_DUAL_VERTICAL = ["layout_rhombus_top", "layout_rhombus_bot"];
    ClientConstAllianceCrest.PLACEHOLDERS_DUAL_DIAGONAL_DOWN = ["layout_square_top_left", "layout_square_bot_right"];
    ClientConstAllianceCrest.PLACEHOLDERS_DUAL_DIAGONAL_UP = ["layout_square_top_right", "layout_square_bot_left"];
    ClientConstAllianceCrest.PLACEHOLDERS_DUAL_CATHETUS_BOT_DOWN = ["layout_square_top_left", "layout_rhombus_bot"];
    ClientConstAllianceCrest.PLACEHOLDERS_DUAL_CATHETUS_BOT_UP = ["layout_rhombus_bot", "layout_square_top_right"];
    ClientConstAllianceCrest.PLACEHOLDERS_DUAL_CATHETUS_TOP_DOWN = ["layout_rhombus_top", "layout_square_bot_right"];
    ClientConstAllianceCrest.PLACEHOLDERS_DUAL_CATHETUS_TOP_UP = ["layout_rhombus_top", "layout_square_bot_left"];
    ClientConstAllianceCrest.PLACEHOLDERS_TRIPLE_DUAL_TOP = ["layout_square_top_left", "layout_square_top_right", "layout_rhombus_bot"];
    ClientConstAllianceCrest.PLACEHOLDERS_TRIPLE_DUAL_BOT = ["layout_rhombus_top", "layout_square_bot_left", "layout_square_bot_right"];
    ClientConstAllianceCrest.PLACEHOLDERS_QUAD_SQUARE = ["layout_square_top_right", "layout_square_bot_left", "layout_square_top_left", "layout_square_bot_right"];
    ClientConstAllianceCrest.PLACEHOLDERS_QUAD_RHOMBUS = ["layout_rhombus_left", "layout_rhombus_right", "layout_rhombus_bot", "layout_rhombus_top"];
    ClientConstAllianceCrest.CC_BACKGROUND_SINGLE_C1 = ["c1", "c2", "c3", "c4"];
    ClientConstAllianceCrest.CC_BACKGROUND_SINGLE_C2 = [];
    ClientConstAllianceCrest.CC_BACKGROUND_SINGLE_C3 = [];
    ClientConstAllianceCrest.CC_BACKGROUND_SINGLE_EMPTY = ["c5", "c6"];
    ClientConstAllianceCrest.CC_BACKGROUND_DUAL_HORIZONTAL_C1 = ["c1", "c2"];
    ClientConstAllianceCrest.CC_BACKGROUND_DUAL_HORIZONTAL_C2 = ["c3", "c4"];
    ClientConstAllianceCrest.CC_BACKGROUND_DUAL_HORIZONTAL_C3 = [];
    ClientConstAllianceCrest.CC_BACKGROUND_DUAL_HORIZONTAL_EMPTY = ["c5", "c6"];
    ClientConstAllianceCrest.CC_BACKGROUND_DUAL_VERTICAL_C1 = ["c1", "c3"];
    ClientConstAllianceCrest.CC_BACKGROUND_DUAL_VERTICAL_C2 = ["c2", "c4"];
    ClientConstAllianceCrest.CC_BACKGROUND_DUAL_VERTICAL_C3 = [];
    ClientConstAllianceCrest.CC_BACKGROUND_DUAL_VERTICAL_EMPTY = ["c5", "c6"];
    ClientConstAllianceCrest.CC_BACKGROUND_DUAL_DIAGONAL_UP_C1 = ["c1", "c3", "c5"];
    ClientConstAllianceCrest.CC_BACKGROUND_DUAL_DIAGONAL_UP_C2 = ["c2", "c4", "c6"];
    ClientConstAllianceCrest.CC_BACKGROUND_DUAL_DIAGONAL_UP_C3 = [];
    ClientConstAllianceCrest.CC_BACKGROUND_DUAL_DIAGONAL_UP_EMPTY = [];
    ClientConstAllianceCrest.CC_BACKGROUND_DUAL_DIAGONAL_DOWN_C1 = ["c2", "c4", "c5"];
    ClientConstAllianceCrest.CC_BACKGROUND_DUAL_DIAGONAL_DOWN_C2 = ["c1", "c3", "c6"];
    ClientConstAllianceCrest.CC_BACKGROUND_DUAL_DIAGONAL_DOWN_C3 = [];
    ClientConstAllianceCrest.CC_BACKGROUND_DUAL_DIAGONAL_DOWN_EMPTY = [];
    ClientConstAllianceCrest.CC_BACKGROUND_TRIPLE_DUAL_TOP_C1 = ["c1", "c3"];
    ClientConstAllianceCrest.CC_BACKGROUND_TRIPLE_DUAL_TOP_C2 = ["c2", "c4"];
    ClientConstAllianceCrest.CC_BACKGROUND_TRIPLE_DUAL_TOP_C3 = ["c6"];
    ClientConstAllianceCrest.CC_BACKGROUND_TRIPLE_DUAL_TOP_EMPTY = ["c5"];
    ClientConstAllianceCrest.CC_BACKGROUND_TRIPLE_DUAL_BOT_C1 = ["c5"];
    ClientConstAllianceCrest.CC_BACKGROUND_TRIPLE_DUAL_BOT_C2 = ["c1", "c3"];
    ClientConstAllianceCrest.CC_BACKGROUND_TRIPLE_DUAL_BOT_C3 = ["c2", "c4"];
    ClientConstAllianceCrest.CC_BACKGROUND_TRIPLE_DUAL_BOT_EMPTY = ["c6"];
    ClientConstAllianceCrest.CC_BACKGROUND_QUAD_SQUARE_C1 = ["c2", "c3"];
    ClientConstAllianceCrest.CC_BACKGROUND_QUAD_SQUARE_C2 = ["c1", "c4"];
    ClientConstAllianceCrest.CC_BACKGROUND_QUAD_SQUARE_C3 = [];
    ClientConstAllianceCrest.CC_BACKGROUND_QUAD_SQUARE_EMPTY = ["c5", "c6"];
    ClientConstAllianceCrest.CC_BACKGROUND_QUAD_RHOMBUS_C1 = ["c1", "c2", "c3", "c4"];
    ClientConstAllianceCrest.CC_BACKGROUND_QUAD_RHOMBUS_C2 = ["c5", "c6"];
    ClientConstAllianceCrest.CC_BACKGROUND_QUAD_RHOMBUS_C3 = [];
    ClientConstAllianceCrest.CC_BACKGROUND_QUAD_RHOMBUS_EMPTY = [];
    ClientConstAllianceCrest.BACKGROUNDID_TO_TYPE = ClientConstAllianceCrest.generateBackgroundDict();
    ClientConstAllianceCrest.BACKGROUNDTYPE_TO_ID = ClientConstAllianceCrest.generateBackgroundTypeDict();
    ClientConstAllianceCrest.DEFAULT_NEUTRAL_GREY = {
      BGT: 9,
      BGC1: 8881264,
      BGC2: 5197126,
      SPT: 0
    };
    ClientConstAllianceCrest.SYMBOLID_TO_TYPE = ClientConstAllianceCrest.generateSymbolDict();
    ClientConstAllianceCrest.SYMBOLTYPE_TO_ID = ClientConstAllianceCrest.generateSymbolTypeDict();
  };
  return ClientConstAllianceCrest;
}(Object);
exports.ClientConstAllianceCrest = __s0local0;
var __dep_export_AllianceCrestVO = require("gge-module:export_AllianceCrestVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ObjectConstructor");
__s0local0.__initialize_static_members();
