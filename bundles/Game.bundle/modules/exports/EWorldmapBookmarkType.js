Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __s0local0 = function (__s1param0) {
  function EWorldmapBookmarkType(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._typeIndex = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this)._typeIndex = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EWorldmapBookmarkType, __s1param0);
  EWorldmapBookmarkType.getTypeById = function (__s5param0) {
    return this.getByProperty(EWorldmapBookmarkType, "typeIndex", __s5param0, null);
  };
  EWorldmapBookmarkType.getPlayerTypes = function () {
    var __s7local0 = [];
    __s7local0.push(EWorldmapBookmarkType.PLAYER_ENEMY);
    __s7local0.push(EWorldmapBookmarkType.PLAYER_FRIEND);
    return __s7local0;
  };
  EWorldmapBookmarkType.getAllianceTypes = function () {
    var __s9local0 = [];
    __s9local0.push(EWorldmapBookmarkType.ALLIANCE_FREE_ATTACK);
    __s9local0.push(EWorldmapBookmarkType.ALLIANCE_DEFEND);
    __s9local0.push(EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER);
    return __s9local0;
  };
  Object.defineProperty(EWorldmapBookmarkType.prototype, "typeIndex", {
    get: function () {
      return this._typeIndex;
    },
    enumerable: true,
    configurable: true
  });
  EWorldmapBookmarkType.__initialize_static_members = function () {
    EWorldmapBookmarkType.PLAYER_ENEMY = new EWorldmapBookmarkType("bookmark_player_enemy", __dep_exact_26a421b704832cff.AllianceConst.BOOKMARK_TYPE_PLAYER_ENEMY);
    EWorldmapBookmarkType.PLAYER_FRIEND = new EWorldmapBookmarkType("bookmark_player_friend", __dep_exact_26a421b704832cff.AllianceConst.BOOKMARK_TYPE_PLAYER_FRIEND);
    EWorldmapBookmarkType.ALLIANCE_FREE_ATTACK = new EWorldmapBookmarkType("bookmark_alliance_free_attack", __dep_exact_26a421b704832cff.AllianceConst.BOOKMARK_TYPE_ALLIANCE_FREE_ATTACK);
    EWorldmapBookmarkType.ALLIANCE_DEFEND = new EWorldmapBookmarkType("bookmark_alliance_defend", __dep_exact_26a421b704832cff.AllianceConst.BOOKMARK_TYPE_ALLIANCE_DEFEND);
    EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER = new EWorldmapBookmarkType("bookmark_alliance_attack_order", __dep_exact_26a421b704832cff.AllianceConst.BOOKMARK_TYPE_ALLIANCE_ATTACK_ORDER);
  };
  return EWorldmapBookmarkType;
}(__dep_exact_9e901e8e2483a22f.BasicEnum);
exports.EWorldmapBookmarkType = __s0local0;
__s0local0.__initialize_static_members();
