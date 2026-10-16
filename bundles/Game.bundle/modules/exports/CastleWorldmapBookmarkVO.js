Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleWorldmapBookmarkVO() {
    this.kingdomId = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID);
    this.posX = 0;
    this.posY = 0;
    this._name = "";
    this.bookmarkID = 0;
    this.creatorPlayerID = 0;
    this._sortIndex = 0;
  }
  CastleWorldmapBookmarkVO.prototype.parseParamObject = function (__s5param0) {
    this.kingdomId = __dep_exact_f855840627e6e145.int(__s5param0[__dep_exact_26a421b704832cff.CommKeys.KINGDOM_ID] || __s5param0[__dep_exact_26a421b704832cff.CommKeys.KINGDOM_ID_2]);
    this.posX = __dep_exact_f855840627e6e145.int(__s5param0.X);
    this.posY = __dep_exact_f855840627e6e145.int(__s5param0.Y);
    if (__s5param0.AI && __s5param0.AI.length > 0) {
      this.worldmapObjectVO = __dep_export_WorldmapObjectFactory.WorldmapObjectFactory.parseWorldMapArea(__s5param0.AI);
    }
    if (this.worldmapObjectVO && !this.worldmapObjectVO.ownerInfo) {
      this.worldmapObjectVO.ownerInfo = __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO.createDummy(0, true);
      this.worldmapObjectVO.areaNameString = __dep_exact_92d05af59ee2ff30.Localize.text("deleted_Player");
    }
    this.name = __s5param0.N;
    this.type = __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.getTypeById(+__s5param0.TY);
    this.bookmarkID = __dep_exact_f855840627e6e145.int(__s5param0.BID);
    if (__s5param0.C) {
      this.creatorPlayerID = __dep_exact_f855840627e6e145.int(__s5param0.C);
      if (this._type == __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER) {
        this._attackOrderDetails = new __dep_export_CastleBookmarkAttackOrderDetailsVO.CastleBookmarkAttackOrderDetailsVO();
        this._attackOrderDetails.parseParamObject(__s5param0);
      }
    }
  };
  CastleWorldmapBookmarkVO.prototype.clone = function () {
    var __s11local0 = new CastleWorldmapBookmarkVO();
    __s11local0.kingdomId = __dep_exact_f855840627e6e145.int(this.kingdomId);
    __s11local0.posX = __dep_exact_f855840627e6e145.int(this.posX);
    __s11local0.posY = __dep_exact_f855840627e6e145.int(this.posY);
    __s11local0.worldmapObjectVO = this.worldmapObjectVO;
    __s11local0.attackOrderDetails = this._attackOrderDetails;
    __s11local0.name = this.name;
    __s11local0.type = this._type;
    return __s11local0;
  };
  Object.defineProperty(CastleWorldmapBookmarkVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    set: function (__s15param0) {
      this._type = __s15param0;
      this._sortIndex = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.bookmarkData.getAllianceBookmarkSortIndexByType(this._type));
      if (this._type == __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER && this._attackOrderDetails == null) {
        this._attackOrderDetails = new __dep_export_CastleBookmarkAttackOrderDetailsVO.CastleBookmarkAttackOrderDetailsVO();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapBookmarkVO.prototype, "attackOrderDetails", {
    get: function () {
      return this._attackOrderDetails;
    },
    set: function (__s20param0) {
      this._attackOrderDetails = __s20param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapBookmarkVO.prototype, "priority", {
    get: function () {
      switch (this._type) {
        case __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER:
          return 5;
        case __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_FREE_ATTACK:
          return 4;
        case __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_DEFEND:
          return 3;
        case __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.PLAYER_ENEMY:
          return 2;
        case __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.PLAYER_FRIEND:
          return 1;
        default:
          return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapBookmarkVO.prototype, "isAllianceBookmark", {
    get: function () {
      return this._type == __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_FREE_ATTACK || this._type == __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_DEFEND || this._type == __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapBookmarkVO.prototype, "isPlayerBookmark", {
    get: function () {
      return this._type == __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.PLAYER_FRIEND || this._type == __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.PLAYER_ENEMY;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapBookmarkVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    set: function (__s31param0) {
      if (__s31param0 != null) {
        this._name = __s31param0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapBookmarkVO.prototype, "sortIndex", {
    get: function () {
      return this._sortIndex;
    },
    enumerable: true,
    configurable: true
  });
  return CastleWorldmapBookmarkVO;
}();
exports.CastleWorldmapBookmarkVO = __s0local0;
var __dep_export_WorldmapObjectFactory = require("gge-module:export_WorldmapObjectFactory");
var __dep_export_WorldMapOwnerInfoVO = require("gge-module:export_WorldMapOwnerInfoVO");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleBookmarkAttackOrderDetailsVO = require("gge-module:export_CastleBookmarkAttackOrderDetailsVO");
var __dep_export_EWorldmapBookmarkType = require("gge-module:export_EWorldmapBookmarkType");
