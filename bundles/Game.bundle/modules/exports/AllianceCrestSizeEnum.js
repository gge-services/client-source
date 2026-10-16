Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleEnum = require("gge-module:export_CastleEnum");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function AllianceCrestSizeEnum(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this;
    __s3local0._width = NaN;
    __s3local0._height = NaN;
    __s3local0._width = __s3param1;
    __s3local0._height = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceCrestSizeEnum, __s1param0);
  Object.defineProperty(AllianceCrestSizeEnum.prototype, "width", {
    get: function () {
      return this._width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCrestSizeEnum.prototype, "height", {
    get: function () {
      return this._height;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCrestSizeEnum.prototype, "size", {
    get: function () {
      this._size ||= new __s0local0(this._width, this._height);
      return this._size;
    },
    enumerable: true,
    configurable: true
  });
  AllianceCrestSizeEnum.__initialize_static_members = function () {
    AllianceCrestSizeEnum.XS = new AllianceCrestSizeEnum("crestSize_xs", 34, 40);
    AllianceCrestSizeEnum.WORLD_MAP = new AllianceCrestSizeEnum("worldmap", 40, 46);
    AllianceCrestSizeEnum.S = new AllianceCrestSizeEnum("crestSize_s", 56, 66);
    AllianceCrestSizeEnum.M = new AllianceCrestSizeEnum("crestSize_m", 68, 80);
    AllianceCrestSizeEnum.L = new AllianceCrestSizeEnum("crestSize_l", 153, 180);
    AllianceCrestSizeEnum.XL = new AllianceCrestSizeEnum("crestSize_xl", 418, 492);
    AllianceCrestSizeEnum.SIZE_PLAYERINFO = new AllianceCrestSizeEnum("crestSize_playerInfo", 115, 135);
    AllianceCrestSizeEnum.SIZE_BATTLEPHASE_ENDED = new AllianceCrestSizeEnum("crestSize_battlephase_ended", 175, 205);
    AllianceCrestSizeEnum.SIZE_BATTLEPHASE_ENDED_WINNER = new AllianceCrestSizeEnum("crestSize_battlephase_ended_winner", 90, 106);
    AllianceCrestSizeEnum.SIZE_NAME_CITY = new AllianceCrestSizeEnum("crestSize_name_city", 135, 175);
    AllianceCrestSizeEnum.SIZE_MAP_INFO = new AllianceCrestSizeEnum("crestSize_map_info", 54, 52);
    AllianceCrestSizeEnum.SIZE_FIGHTSCREEN = new AllianceCrestSizeEnum("crestSize_fighscreen", 110, 116);
    AllianceCrestSizeEnum.SIZE_FIGHTSCREEN_2 = new AllianceCrestSizeEnum("crestSize_fighscreen", 46, 46);
    AllianceCrestSizeEnum.CREST_CEATION_BIG = new AllianceCrestSizeEnum("crestcreationBig", 248, 326);
    AllianceCrestSizeEnum.CREST_CEATION_SMALL = new AllianceCrestSizeEnum("crestcreationSmall", 70, 90);
    AllianceCrestSizeEnum.CREST_CEATION_SMALL_PREMIUM = new AllianceCrestSizeEnum("crestcreationSmallPremium", 100, 100);
    AllianceCrestSizeEnum.CREST_CEATION_SMALL_FREE = new AllianceCrestSizeEnum("crestcreationSmallPremium", 64, 64);
    AllianceCrestSizeEnum.CREST_LEADERBOARD = new AllianceCrestSizeEnum("crestSize_leaderboard", 46, 46);
    AllianceCrestSizeEnum.CREST_AME_BG = new AllianceCrestSizeEnum("crestSize_ame_bg", 128, 166);
  };
  return AllianceCrestSizeEnum;
}(__dep_export_CastleEnum.CastleEnum);
exports.AllianceCrestSizeEnum = __s0local1;
__s0local1.__initialize_static_members();
