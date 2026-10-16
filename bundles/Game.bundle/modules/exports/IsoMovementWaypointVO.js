Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function IsoMovementWaypointVO(__s3param0, __s3param1, __s3param2) {
    this._spawnBuildings = [];
    this._targetBuildings = [];
    this._visitBuildings = [];
    this._spawnBuildings = __s3param0;
    this._targetBuildings = __s3param1;
    this._visitBuildings = __s3param2;
  }
  Object.defineProperty(IsoMovementWaypointVO.prototype, "spawnBuildings", {
    get: function () {
      return this._spawnBuildings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementWaypointVO.prototype, "targetBuildings", {
    get: function () {
      return this._targetBuildings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementWaypointVO.prototype, "visitBuildings", {
    get: function () {
      return this._visitBuildings;
    },
    enumerable: true,
    configurable: true
  });
  return IsoMovementWaypointVO;
}();
exports.IsoMovementWaypointVO = __s0local0;
