Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function IsoMovementWaypointClassesVO(__s3param0, __s3param1 = null, __s3param2 = null) {
    this._spawnBuildings = [];
    this._targetBuildings = [];
    this._visitBuildings = [];
    this._spawnBuildings = __s3param0;
    this._targetBuildings = __s3param1 || __s3param0;
    if (__s3param2) {
      this._visitBuildings = __s3param2;
    }
  }
  Object.defineProperty(IsoMovementWaypointClassesVO.prototype, "spawnBuildings", {
    get: function () {
      return this._spawnBuildings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementWaypointClassesVO.prototype, "targetBuildings", {
    get: function () {
      return this._targetBuildings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementWaypointClassesVO.prototype, "visitBuildings", {
    get: function () {
      return this._visitBuildings;
    },
    enumerable: true,
    configurable: true
  });
  return IsoMovementWaypointClassesVO;
}();
exports.IsoMovementWaypointClassesVO = __s0local0;
