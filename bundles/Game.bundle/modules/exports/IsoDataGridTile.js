Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function IsoDataGridTile() {
    this._hasGround = false;
    this._objectId = -1;
    this._isWalkable = true;
    this._isSpawnPoint = false;
  }
  IsoDataGridTile.prototype.reset = function () {
    this._hasGround = false;
    this._objectId = -1;
    this._isWalkable = true;
    this._isSpawnPoint = false;
  };
  Object.defineProperty(IsoDataGridTile.prototype, "hasGround", {
    get: function () {
      return this._hasGround;
    },
    set: function (__s9param0) {
      this._hasGround = __s9param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataGridTile.prototype, "objectId", {
    get: function () {
      return this._objectId;
    },
    set: function (__s13param0) {
      this._objectId = __s13param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataGridTile.prototype, "isWalkable", {
    get: function () {
      return this._isWalkable;
    },
    set: function (__s17param0) {
      this._isWalkable = __s17param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataGridTile.prototype, "isSpawnPoint", {
    get: function () {
      return this._isSpawnPoint;
    },
    set: function (__s21param0) {
      this._isSpawnPoint = __s21param0;
    },
    enumerable: true,
    configurable: true
  });
  return IsoDataGridTile;
}();
exports.IsoDataGridTile = __s0local0;
