Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function MinWorldMapCastleInfoVO() {
    this._kingdomId = -1;
    this._objectId = -1;
    this._absAreaPos = new __s0local0(-1, -1);
    this._areaType = -1;
    this._useSpecialConnectionLineColor = false;
    this._specialConnectionLineColor = 0;
  }
  MinWorldMapCastleInfoVO.prototype.fillFromParamObject = function (__s5param0) {
    this._kingdomId = __dep_exact_f855840627e6e145.int(__s5param0[0]);
    this._objectId = __dep_exact_f855840627e6e145.int(__s5param0[1]);
    this._absAreaPos.x = __s5param0[2];
    this._absAreaPos.y = __s5param0[3];
    this._areaType = __s5param0[4];
  };
  MinWorldMapCastleInfoVO.prototype.copyFromWorldmapObjectVO = function (__s7param0) {
    this._kingdomId = __s7param0.kingdomID;
    this._objectId = __s7param0.objectId;
    this._absAreaPos = __s7param0.absAreaPos;
    this._areaType = __s7param0.areaType;
  };
  Object.defineProperty(MinWorldMapCastleInfoVO.prototype, "kingdomId", {
    get: function () {
      return this._kingdomId;
    },
    set: function (__s11param0) {
      this._kingdomId = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MinWorldMapCastleInfoVO.prototype, "objectId", {
    get: function () {
      return this._objectId;
    },
    set: function (__s15param0) {
      this._objectId = __s15param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MinWorldMapCastleInfoVO.prototype, "areaType", {
    get: function () {
      return this._areaType;
    },
    set: function (__s19param0) {
      this._areaType = __s19param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MinWorldMapCastleInfoVO.prototype, "absAreaPos", {
    get: function () {
      return this._absAreaPos;
    },
    set: function (__s23param0) {
      this._absAreaPos = __s23param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MinWorldMapCastleInfoVO.prototype, "useSpecialConnectionLineColor", {
    get: function () {
      return this._useSpecialConnectionLineColor;
    },
    set: function (__s27param0) {
      this._useSpecialConnectionLineColor = __s27param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MinWorldMapCastleInfoVO.prototype, "specialConnectionLineColor", {
    get: function () {
      return this._specialConnectionLineColor;
    },
    set: function (__s31param0) {
      this._specialConnectionLineColor = __s31param0;
    },
    enumerable: true,
    configurable: true
  });
  return MinWorldMapCastleInfoVO;
}();
exports.MinWorldMapCastleInfoVO = __s0local1;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
