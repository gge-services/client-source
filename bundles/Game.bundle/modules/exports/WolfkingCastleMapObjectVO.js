Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstNPCs = require("gge-module:export_ClientConstNPCs");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDisplayObjectClipContainer = require("gge-module:export_CastleDisplayObjectClipContainer");
var __dep_export_ContainerBuilderMapobjectVO = require("gge-module:export_ContainerBuilderMapobjectVO");
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
var __s0local0 = function (__s1param0) {
  function WolfkingCastleMapObjectVO() {
    var __s3local0 = this;
    __s3local0._baseMoatBonus = 0;
    __s3local0._baseGateBonus = 0;
    __s3local0._baseWallBonus = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).name = "WolfkingCastle";
    __s3local0.type = "-";
    __s3local0._areaType = __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_WOLF_KING;
    __s3local0._isVisibleOnMap = false;
    __s3local0._secondsSinceEspionage = -1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(WolfkingCastleMapObjectVO, __s1param0);
  WolfkingCastleMapObjectVO.prototype.getDisplayObjectClipContainer = function (__s5param0, __s5param1, __s5param2 = false) {
    var __s5local0 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    var __s5local1 = this.getAsExternalClip("WolfkingCastle_Mapobject");
    __s5local0.addItem(__s5local1);
    return __s5local0;
  };
  WolfkingCastleMapObjectVO.prototype.parseAreaInfo = function (__s7param0) {
    this._areaType = __s7param0[0];
    this._absAreaPosX = __s7param0[1];
    this._absAreaPosY = __s7param0[2];
    if (__s7param0.length > 3) {
      this._spyInfoReceivingTime = Date.now() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
      this._secondsSinceEspionage = __s7param0[3];
      this._dungeonLevel = __dep_exact_f855840627e6e145.int(__s7param0[4]);
      this._isDefeated = __s7param0[5] == 1;
      this._baseWallBonus = __s7param0[6];
      this._baseGateBonus = __s7param0[7];
      this._baseMoatBonus = __s7param0[8];
      this._isVisibleOnMap = true;
    } else {
      this._isVisibleOnMap = false;
    }
    this._ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(__dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_WOLFKING);
  };
  Object.defineProperty(WolfkingCastleMapObjectVO.prototype, "areaNameString", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("kingdom_dungeon_castleName_wolfgard");
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  WolfkingCastleMapObjectVO.prototype.canBeAttacked = function () {
    return true;
  };
  Object.defineProperty(WolfkingCastleMapObjectVO.prototype, "canBeSpied", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WolfkingCastleMapObjectVO.prototype, "isDefeated", {
    get: function () {
      return this._isDefeated;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WolfkingCastleMapObjectVO.prototype, "dungeonLevel", {
    get: function () {
      return this._dungeonLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WolfkingCastleMapObjectVO.prototype, "attackType", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WolfkingCastleMapObjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return this.dungeonLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WolfkingCastleMapObjectVO.prototype, "baseGateBonus", {
    get: function () {
      return this._baseGateBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WolfkingCastleMapObjectVO.prototype, "baseWallBonus", {
    get: function () {
      return this._baseWallBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WolfkingCastleMapObjectVO.prototype, "baseMoatBonus", {
    get: function () {
      return this._baseMoatBonus;
    },
    enumerable: true,
    configurable: true
  });
  return WolfkingCastleMapObjectVO;
}(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO);
exports.WolfkingCastleMapObjectVO = __s0local0;
